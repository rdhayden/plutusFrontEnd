import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

const USERNAME = "plutus";

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!Array.isArray(body)) {
    return NextResponse.json({ error: "Body must be an array" }, { status: 400 });
  }

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    for (const item of body) {
      if (typeof item.name !== "string" || typeof item.display_order !== "number") continue;
      await client.query(
        "UPDATE watchlists SET display_order = $1 WHERE username = $2 AND name = $3",
        [item.display_order, USERNAME, item.name]
      );
    }
    await client.query("COMMIT");
    return NextResponse.json({ ok: true });
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
}
