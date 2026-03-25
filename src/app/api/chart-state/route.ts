import { NextResponse } from "next/server";
import pool from "@/lib/db";

const USERNAME = "plutus";

export async function GET() {
  const client = await pool.connect();
  try {
    const tabsRes = await client.query(
      `SELECT tab_id, ticker, exchange, name, timeframe, from_date, display_order, is_active
       FROM chart_tabs
       WHERE username = $1
       ORDER BY display_order ASC`,
      [USERNAME]
    );

    const signalsRes = await client.query(
      `SELECT tab_id, signal_hash, signal_name, specification, visualise_with, display_order
       FROM chart_tab_signals
       WHERE username = $1
       ORDER BY tab_id, display_order ASC`,
      [USERNAME]
    );

    const drawingsRes = await client.query(
      `SELECT tab_id, drawing_id, price
       FROM chart_tab_drawings
       WHERE username = $1`,
      [USERNAME]
    );

    // Group signals by tab_id
    const signalsByTab: Record<string, { signalHash: number; signalName: string; specification: { name: string; value: string }[]; visualiseWith: string[] }[]> = {};
    for (const row of signalsRes.rows) {
      if (!signalsByTab[row.tab_id]) signalsByTab[row.tab_id] = [];
      signalsByTab[row.tab_id].push({
        signalHash: Number(row.signal_hash),
        signalName: row.signal_name,
        specification: row.specification,
        visualiseWith: row.visualise_with,
      });
    }

    // Group drawings by tab_id
    const drawingsByTab: Record<string, { id: string; price: number }[]> = {};
    for (const row of drawingsRes.rows) {
      if (!drawingsByTab[row.tab_id]) drawingsByTab[row.tab_id] = [];
      drawingsByTab[row.tab_id].push({ id: row.drawing_id, price: Number(row.price) });
    }

    const tabs = tabsRes.rows.map((row) => ({
      id: row.tab_id,
      ticker: row.ticker,
      exchange: row.exchange ?? null,
      name: row.name,
      timeframe: row.timeframe,
      from: row.from_date,
      signals: signalsByTab[row.tab_id] ?? [],
    }));

    const activeTabRow = tabsRes.rows.find((r) => r.is_active);
    const activeTab = activeTabRow ? activeTabRow.tab_id : (tabsRes.rows[0]?.tab_id ?? null);

    return NextResponse.json({ tabs, activeTab, drawingsPerTab: drawingsByTab });
  } finally {
    client.release();
  }
}

interface SavedTab {
  id: string;
  ticker: string;
  exchange: string | null;
  name: string;
  timeframe: string;
  from: string;
  signals: {
    signalHash: number;
    signalName: string;
    specification: { name: string; value: string }[];
    visualiseWith: string[];
  }[];
}

export async function POST(request: Request) {
  const { tabs, activeTab, drawingsPerTab } = await request.json() as {
    tabs: SavedTab[];
    activeTab: string | null;
    drawingsPerTab: Record<string, { id: string; price: number }[]>;
  };

  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    // Replace all tab state for this user
    await client.query("DELETE FROM chart_tab_drawings WHERE username = $1", [USERNAME]);
    await client.query("DELETE FROM chart_tab_signals WHERE username = $1", [USERNAME]);
    await client.query("DELETE FROM chart_tabs WHERE username = $1", [USERNAME]);

    for (let i = 0; i < tabs.length; i++) {
      const tab = tabs[i];
      await client.query(
        `INSERT INTO chart_tabs (username, tab_id, ticker, exchange, name, timeframe, from_date, display_order, is_active)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [USERNAME, tab.id, tab.ticker, tab.exchange, tab.name, tab.timeframe, tab.from, i, tab.id === activeTab]
      );

      for (let j = 0; j < tab.signals.length; j++) {
        const sig = tab.signals[j];
        await client.query(
          `INSERT INTO chart_tab_signals (username, tab_id, signal_hash, signal_name, specification, visualise_with, display_order)
           VALUES ($1, $2, $3, $4, $5, $6, $7)`,
          [USERNAME, tab.id, sig.signalHash, sig.signalName, JSON.stringify(sig.specification), JSON.stringify(sig.visualiseWith), j]
        );
      }
    }

    for (const [tabId, drawings] of Object.entries(drawingsPerTab)) {
      for (const drawing of drawings) {
        await client.query(
          `INSERT INTO chart_tab_drawings (username, tab_id, drawing_id, price)
           VALUES ($1, $2, $3, $4)`,
          [USERNAME, tabId, drawing.id, drawing.price]
        );
      }
    }

    await client.query("COMMIT");
    return NextResponse.json({ ok: true });
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("Failed to save chart state:", err);
    return NextResponse.json({ error: "Failed to save chart state" }, { status: 500 });
  } finally {
    client.release();
  }
}
