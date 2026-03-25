import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

const USERNAME = "plutus";
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

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;
  const body = await request.json();
  const newName: string = typeof body.newName === "string" ? body.newName.trim() : "";

  const validationError = validateName(newName);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    // Check new name is unique (unless it's the same name)
    if (newName !== name) {
      const existing = await client.query(
        "SELECT name FROM watchlists WHERE username = $1 AND name = $2",
        [USERNAME, newName]
      );
      if (existing.rows.length > 0) {
        await client.query("ROLLBACK");
        return NextResponse.json({ error: "Watchlist name must be unique" }, { status: 409 });
      }
    }

    // Cascade rename to entries
    await client.query(
      "UPDATE watchlist SET watchlist_name = $1 WHERE username = $2 AND watchlist_name = $3",
      [newName, USERNAME, name]
    );

    // Rename the watchlist itself
    await client.query(
      "UPDATE watchlists SET name = $1 WHERE username = $2 AND name = $3",
      [newName, USERNAME, name]
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

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    await client.query(
      "DELETE FROM watchlist WHERE username = $1 AND watchlist_name = $2",
      [USERNAME, name]
    );
    await client.query(
      "DELETE FROM watchlists WHERE username = $1 AND name = $2",
      [USERNAME, name]
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
