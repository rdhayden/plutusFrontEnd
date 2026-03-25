import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

const USERNAME = "plutus";

export async function GET(request: NextRequest) {
  const name = request.nextUrl.searchParams.get("name");
  if (!name) {
    return NextResponse.json({ error: "name query parameter is required" }, { status: 400 });
  }
  const result = await pool.query(
    "SELECT ticker, notes FROM watchlist WHERE username = $1 AND watchlist_name = $2 ORDER BY ticker",
    [USERNAME, name]
  );
  return NextResponse.json(result.rows);
}

export async function POST(request: NextRequest) {
  const { watchlist_name, ticker, exchange = null, name = null, notes = "" } = await request.json();
  if (!watchlist_name || !ticker) {
    return NextResponse.json({ error: "watchlist_name and ticker are required" }, { status: 400 });
  }
  await pool.query(
    `INSERT INTO watchlist (username, watchlist_name, ticker, exchange, name, notes)
     VALUES ($1, $2, $3, $4, $5, $6)
     ON CONFLICT (username, watchlist_name, ticker) DO UPDATE SET exchange = EXCLUDED.exchange, name = EXCLUDED.name, notes = EXCLUDED.notes`,
    [USERNAME, watchlist_name, ticker, exchange, name, notes]
  );
  return NextResponse.json({ ok: true });
}
