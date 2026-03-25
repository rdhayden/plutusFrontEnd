import { NextResponse } from "next/server";
import pool from "@/lib/db";

const USERNAME = "plutus";

export async function GET() {
  const result = await pool.query(
    `SELECT w.name, w.display_order, e.ticker, e.exchange, e.name AS stock_name, e.notes
     FROM watchlists w
     LEFT JOIN watchlist e
       ON e.username = w.username AND e.watchlist_name = w.name
     WHERE w.username = $1
     ORDER BY w.display_order, e.ticker`,
    [USERNAME]
  );

  // Group flat rows into nested structure
  const map = new Map<string, { name: string; display_order: number; entries: { ticker: string; exchange: string | null; name: string | null; notes: string }[] }>();

  for (const row of result.rows) {
    if (!map.has(row.name)) {
      map.set(row.name, { name: row.name, display_order: row.display_order, entries: [] });
    }
    if (row.ticker !== null) {
      map.get(row.name)!.entries.push({ ticker: row.ticker, exchange: row.exchange ?? null, name: row.stock_name ?? null, notes: row.notes ?? "" });
    }
  }

  return NextResponse.json(Array.from(map.values()));
}
