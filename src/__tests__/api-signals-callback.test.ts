import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock the signal store before importing the route
vi.mock("@/lib/signal-store", () => ({
  resolveRequest: vi.fn(),
  getRequestTimeframe: vi.fn().mockReturnValue(null),
}));

import { POST } from "@/app/api/signals/callback/route";
import { resolveRequest, getRequestTimeframe } from "@/lib/signal-store";
import { NextRequest } from "next/server";

function makeRequest(body: unknown): NextRequest {
  return new NextRequest("http://localhost:3000/api/signals/callback", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
}

describe("POST /api/signals/callback", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns ok status", async () => {
    const res = await POST(makeRequest({ signals: [] }));
    const body = await res.json();
    expect(res.status).toBe(200);
    expect(body.status).toBe("ok");
  });

  it("transforms OHLCV events into CandleData and timeSeries, resolves request with hash", async () => {
    const payload = {
      signal_requests_id: "batch-1",
      signals: [
        {
          signal_request_id: "req-1",
          signal_hash: 12345,
          time_series_collection: [
            {
              date: "2025-01-10T00:00:00",
              events: [
                { name: "open", value: 100 },
                { name: "high", value: 110 },
                { name: "low", value: 90 },
                { name: "close", value: 105 },
                { name: "volume", value: 50000 },
              ],
            },
            {
              date: "2025-01-11T00:00:00",
              events: [
                { name: "open", value: 105 },
                { name: "high", value: 115 },
                { name: "low", value: 100 },
                { name: "close", value: 112 },
                { name: "volume", value: 60000 },
              ],
            },
          ],
        },
      ],
    };

    await POST(makeRequest(payload));

    expect(resolveRequest).toHaveBeenCalledWith("req-1", {
      signalHash: 12345,
      candles: [
        { time: "2025-01-10", open: 100, high: 110, low: 90, close: 105, volume: 50000 },
        { time: "2025-01-11", open: 105, high: 115, low: 100, close: 112, volume: 60000 },
      ],
      timeSeries: [
        { time: "2025-01-10", values: { open: 100, high: 110, low: 90, close: 105, volume: 50000 } },
        { time: "2025-01-11", values: { open: 105, high: 115, low: 100, close: 112, volume: 60000 } },
      ],
    });
  });

  it("converts ISO datetime to YYYY-MM-DD date string", async () => {
    const payload = {
      signals: [
        {
          signal_request_id: "req-date",
          signal_hash: 99,
          time_series_collection: [
            {
              date: "2025-06-15T14:30:00+00:00",
              events: [
                { name: "open", value: 1 },
                { name: "high", value: 2 },
                { name: "low", value: 0 },
                { name: "close", value: 1.5 },
              ],
            },
          ],
        },
      ],
    };

    await POST(makeRequest(payload));

    expect(resolveRequest).toHaveBeenCalledWith("req-date", {
      signalHash: 99,
      candles: [
        expect.objectContaining({ time: "2025-06-15" }),
      ],
      timeSeries: [
        expect.objectContaining({ time: "2025-06-15" }),
      ],
    });
  });

  it("defaults missing event values to 0", async () => {
    const payload = {
      signals: [
        {
          signal_request_id: "req-missing",
          signal_hash: 42,
          time_series_collection: [
            {
              date: "2025-01-01T00:00:00",
              events: [{ name: "open", value: 100 }],
            },
          ],
        },
      ],
    };

    await POST(makeRequest(payload));

    expect(resolveRequest).toHaveBeenCalledWith("req-missing", {
      signalHash: 42,
      candles: [
        { time: "2025-01-01", open: 100, high: 0, low: 0, close: 0, volume: 0 },
      ],
      timeSeries: [
        { time: "2025-01-01", values: { open: 100 } },
      ],
    });
  });

  it("defaults signal_hash to 0 when missing", async () => {
    const payload = {
      signals: [
        {
          signal_request_id: "req-no-hash",
          time_series_collection: [
            {
              date: "2025-01-01T00:00:00",
              events: [
                { name: "open", value: 10 },
                { name: "high", value: 20 },
                { name: "low", value: 5 },
                { name: "close", value: 15 },
              ],
            },
          ],
        },
      ],
    };

    await POST(makeRequest(payload));

    expect(resolveRequest).toHaveBeenCalledWith("req-no-hash", {
      signalHash: 0,
      candles: [
        expect.objectContaining({ time: "2025-01-01" }),
      ],
      timeSeries: [
        expect.objectContaining({ time: "2025-01-01" }),
      ],
    });
  });

  it("handles multiple signal responses in one callback", async () => {
    const payload = {
      signals: [
        {
          signal_request_id: "req-a",
          signal_hash: 111,
          time_series_collection: [
            {
              date: "2025-01-01T00:00:00",
              events: [
                { name: "open", value: 10 },
                { name: "high", value: 20 },
                { name: "low", value: 5 },
                { name: "close", value: 15 },
                { name: "volume", value: 1000 },
              ],
            },
          ],
        },
        {
          signal_request_id: "req-b",
          signal_hash: 222,
          time_series_collection: [],
        },
      ],
    };

    await POST(makeRequest(payload));

    expect(resolveRequest).toHaveBeenCalledTimes(2);
    expect(resolveRequest).toHaveBeenCalledWith("req-a", {
      signalHash: 111,
      candles: [
        { time: "2025-01-01", open: 10, high: 20, low: 5, close: 15, volume: 1000 },
      ],
      timeSeries: [
        { time: "2025-01-01", values: { open: 10, high: 20, low: 5, close: 15, volume: 1000 } },
      ],
    });
    expect(resolveRequest).toHaveBeenCalledWith("req-b", {
      signalHash: 222,
      candles: [],
      timeSeries: [],
    });
  });

  it("handles empty signals array", async () => {
    await POST(makeRequest({ signals: [] }));
    expect(resolveRequest).not.toHaveBeenCalled();
  });

  it("handles missing signals field gracefully", async () => {
    await POST(makeRequest({}));
    expect(resolveRequest).not.toHaveBeenCalled();
  });

  it("uses Unix timestamps for intraday timeframes", async () => {
    vi.mocked(getRequestTimeframe).mockReturnValue("HOUR");

    const payload = {
      signals: [
        {
          signal_request_id: "req-hour",
          signal_hash: 555,
          time_series_collection: [
            {
              date: "2025-01-10T09:00:00",
              events: [
                { name: "open", value: 100 },
                { name: "high", value: 110 },
                { name: "low", value: 90 },
                { name: "close", value: 105 },
              ],
            },
            {
              date: "2025-01-10T10:00:00",
              events: [
                { name: "open", value: 105 },
                { name: "high", value: 115 },
                { name: "low", value: 100 },
                { name: "close", value: 112 },
              ],
            },
          ],
        },
      ],
    };

    await POST(makeRequest(payload));

    const call = vi.mocked(resolveRequest).mock.calls[0];
    const result = call[1] as { candles: { time: unknown }[]; timeSeries: { time: unknown }[] };
    // Both bars should have distinct numeric timestamps
    expect(typeof result.candles[0].time).toBe("number");
    expect(typeof result.candles[1].time).toBe("number");
    expect(result.candles[0].time).not.toBe(result.candles[1].time);
    expect(typeof result.timeSeries[0].time).toBe("number");

    vi.mocked(getRequestTimeframe).mockReturnValue(null);
  });

  it("preserves all event names in timeSeries for non-OHLCV signals", async () => {
    const payload = {
      signals: [
        {
          signal_request_id: "req-sma",
          signal_hash: 777,
          time_series_collection: [
            {
              date: "2025-01-01T00:00:00",
              events: [{ name: "sma", value: 150.5 }],
            },
          ],
        },
      ],
    };

    await POST(makeRequest(payload));

    expect(resolveRequest).toHaveBeenCalledWith("req-sma", {
      signalHash: 777,
      candles: [
        { time: "2025-01-01", open: 0, high: 0, low: 0, close: 0, volume: 0 },
      ],
      timeSeries: [
        { time: "2025-01-01", values: { sma: 150.5 } },
      ],
    });
  });
});
