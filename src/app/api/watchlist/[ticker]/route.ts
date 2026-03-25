import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

const USERNAME = "plutus";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ ticker: string }> }
) {
  const { ticker } = await params;
  const name = request.nextUrl.searchParams.get("name");
  if (!name) {
    return NextResponse.json({ error: "name query parameter is required" }, { status: 400 });
  }
  const { notes } = await request.json();
  await pool.query(
    "UPDATE watchlist SET notes = $1 WHERE username = $2 AND watchlist_name = $3 AND ticker = $4",
    [notes, USERNAME, name, ticker]
  );
  return NextResponse.json({ ok: true });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ ticker: string }> }
) {
  const { ticker } = await params;
  const name = request.nextUrl.searchParams.get("name");
  if (!name) {
    return NextResponse.json({ error: "name query parameter is required" }, { status: 400 });
  }
  await pool.query(
    "DELETE FROM watchlist WHERE username = $1 AND watchlist_name = $2 AND ticker = $3",
    [USERNAME, name, ticker]
  );
  return NextResponse.json({ ok: true });
}
