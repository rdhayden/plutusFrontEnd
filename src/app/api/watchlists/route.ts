import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

const USERNAME = "plutus";
const MAX_WATCHLISTS = 50;
const MAX_NAME_LENGTH = 30;
const VALID_NAME_RE = /^[a-zA-Z0-9 ]+$/;

function validateName(name: unknown): string | null {
  if (typeof name !== "string" || name.trim().length === 0) {
    return "Watchlist name must not be empty";
  }
  if (name.length > MAX_NAME_LENGTH) {
    return `Watchlist name must be ${MAX_NAME_LENGTH} characters or fewer`;
  }
  if (!VALID_NAME_RE.test(name)) {
    return "Watchlist name must contain only letters, numbers, and spaces";
  }
  return null;
}

export async function GET() {
  const result = await pool.query(
    "SELECT name, display_order FROM watchlists WHERE username = $1 ORDER BY display_order",
    [USERNAME]
  );
  return NextResponse.json(result.rows);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const name: string = typeof body.name === "string" ? body.name.trim() : "";

  const validationError = validateName(name);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    // Check uniqueness
    const existing = await client.query(
      "SELECT name FROM watchlists WHERE username = $1 AND name = $2",
      [USERNAME, name]
    );
    if (existing.rows.length > 0) {
      await client.query("ROLLBACK");
      return NextResponse.json({ error: "Watchlist name must be unique" }, { status: 409 });
    }

    // Check limit
    const countResult = await client.query(
      "SELECT COUNT(*) FROM watchlists WHERE username = $1",
      [USERNAME]
    );
    if (Number(countResult.rows[0].count) >= MAX_WATCHLISTS) {
      await client.query("ROLLBACK");
      return NextResponse.json(
        { error: `You cannot have more than ${MAX_WATCHLISTS} watchlists` },
        { status: 409 }
      );
    }

    // Assign display_order as max + 1
    const orderResult = await client.query(
      "SELECT COALESCE(MAX(display_order), -1) + 1 AS next_order FROM watchlists WHERE username = $1",
      [USERNAME]
    );
    const nextOrder: number = orderResult.rows[0].next_order;

    await client.query(
      "INSERT INTO watchlists (username, name, display_order) VALUES ($1, $2, $3)",
      [USERNAME, name, nextOrder]
    );

    await client.query("COMMIT");
    return NextResponse.json({ ok: true });
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
}
