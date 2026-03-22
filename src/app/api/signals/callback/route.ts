import { NextRequest, NextResponse } from "next/server";
import { resolveRequest, getRequestTimeframe } from "@/lib/signal-store";
import { CandleData, TimeSeriesPoint } from "@/lib/types";

const INTRADAY_TIMEFRAMES = new Set(["TICK", "SECOND", "MINUTE", "HOUR"]);

function formatTime(isoDate: string, intraday: boolean): string | number {
  if (intraday) {
    // lightweight-charts needs a Unix timestamp (seconds) for intraday data
    return Math.floor(new Date(isoDate).getTime() / 1000);
  }
  // For daily+ timeframes, use "YYYY-MM-DD" business-day format
  return isoDate.slice(0, 10);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Payload structure from Plutus signals service:
  // { signal_requests_id, signals: [{ signal_request_id, signal_hash, time_series_collection: [{ date, events: [{ name, value }] }] }] }
  const signals = body.signals || [];

  for (const sr of signals) {
    const requestId = sr.signal_request_id;
    const signalHash: number = sr.signal_hash ?? 0;
    const collection = sr.time_series_collection || [];
    const timeframe = getRequestTimeframe(requestId);
    const intraday = timeframe ? INTRADAY_TIMEFRAMES.has(timeframe) : false;

    const candles: CandleData[] = collection.map(
      (entry: {
        date: string;
        events: Array<{ name: string; value: number }>;
      }) => {
        const get = (name: string) =>
          entry.events.find((e) => e.name === name)?.value ?? 0;

        return {
          time: formatTime(entry.date, intraday),
          open: get("open"),
          high: get("high"),
          low: get("low"),
          close: get("close"),
          volume: get("volume"),
        };
      }
    );

    const timeSeries: TimeSeriesPoint[] = collection.map(
      (entry: {
        date: string;
        events: Array<{ name: string; value: number }>;
      }) => {
        const values: Record<string, number> = {};
        for (const e of entry.events) {
          values[e.name] = e.value;
        }
        return { time: formatTime(entry.date, intraday), values };
      }
    );

    resolveRequest(requestId, { signalHash, candles, timeSeries });
  }

  return NextResponse.json({ status: "ok" });
}
