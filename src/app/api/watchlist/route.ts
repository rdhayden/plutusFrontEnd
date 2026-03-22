import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

const USERNAME = "plutus";

export async function GET() {
  const result = await pool.query(
    "SELECT ticker, notes FROM watchlist WHERE username = $1 ORDER BY ticker",
    [USERNAME]
  );
  return NextResponse.json(result.rows);
}

export async function POST(request: NextRequest) {
  const { ticker, notes = "" } = await request.json();
  await pool.query(
    `INSERT INTO watchlist (username, ticker, notes)
     VALUES ($1, $2, $3)
     ON CONFLICT (username, ticker) DO UPDATE SET notes = EXCLUDED.notes`,
    [USERNAME, ticker, notes]
  );
  return NextResponse.json({ ok: true });
}
