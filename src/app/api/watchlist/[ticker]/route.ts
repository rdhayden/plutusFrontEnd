import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

const USERNAME = "plutus";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ ticker: string }> }
) {
  const { ticker } = await params;
  const { notes } = await request.json();
  await pool.query(
    "UPDATE watchlist SET notes = $1 WHERE username = $2 AND ticker = $3",
    [notes, USERNAME, ticker]
  );
  return NextResponse.json({ ok: true });
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ ticker: string }> }
) {
  const { ticker } = await params;
  await pool.query(
    "DELETE FROM watchlist WHERE username = $1 AND ticker = $2",
    [USERNAME, ticker]
  );
  return NextResponse.json({ ok: true });
}
