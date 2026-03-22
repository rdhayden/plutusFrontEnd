import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/signal-store", () => ({
  registerPendingRequest: vi.fn(),
}));

import { POST } from "@/app/api/signals/route";
import { registerPendingRequest } from "@/lib/signal-store";
import { NextRequest } from "next/server";

const mockFetch = vi.fn();
vi.stubGlobal("fetch", mockFetch);

function makeRequest(body: unknown): NextRequest {
  return new NextRequest("http://localhost:3000/api/signals", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
}

describe("POST /api/signals", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("sends correct GraphQL mutation and returns sorted data with hash", async () => {
    vi.mocked(registerPendingRequest).mockReturnValueOnce(
      Promise.resolve({
        signalHash: 54321,
        candles: [
          { time: "2025-01-02", open: 105, high: 115, low: 100, close: 110 },
          { time: "2025-01-01", open: 100, high: 110, low: 90, close: 105 },
        ],
        timeSeries: [
          { time: "2025-01-02", values: { open: 105, high: 115, low: 100, close: 110 } },
          { time: "2025-01-01", values: { open: 100, high: 110, low: 90, close: 105 } },
        ],
      })
    );
    mockFetch.mockResolvedValueOnce({
      json: async () => ({
        data: { getSignals: { status: "SUCCESS", errorMessage: null } },
      }),
    });

    const res = await POST(
      makeRequest({
        signalName: "PriceSignal",
        specification: [{ name: "ticker", value: "AAPL" }],
        ticker: "AAPL",
        exchange: "XNAS",
        from: "2025-01-01",
        to: "2025-01-31",
      })
    );
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body.signalHash).toBe(54321);
    // Should be sorted ascending by date
    expect(body.candles[0].time).toBe("2025-01-01");
    expect(body.candles[1].time).toBe("2025-01-02");
    expect(body.timeSeries[0].time).toBe("2025-01-01");
    expect(body.timeSeries[1].time).toBe("2025-01-02");
  });

  it("sends the correct GraphQL variables", async () => {
    vi.mocked(registerPendingRequest).mockReturnValueOnce(
      Promise.resolve({ signalHash: 0, candles: [], timeSeries: [] })
    );
    mockFetch.mockResolvedValueOnce({
      json: async () => ({
        data: { getSignals: { status: "SUCCESS", errorMessage: null } },
      }),
    });

    await POST(
      makeRequest({
        signalName: "PriceSignal",
        specification: [{ name: "ticker", value: "MSFT" }],
        ticker: "MSFT",
        exchange: "XNAS",
        from: "2025-06-01",
        to: "2025-12-31",
        timeframe: "WEEK",
      })
    );

    const fetchCall = mockFetch.mock.calls[0];
    expect(fetchCall[0]).toBe("http://localhost:8000/graphql");

    const sentBody = JSON.parse(fetchCall[1].body);
    const input = sentBody.variables.input;

    expect(input.ticker).toBe("MSFT");
    expect(input.exchange).toBe("XNAS");
    expect(input.timeframe).toBe("WEEK");
    expect(input.timespan).toEqual({ from: "2025-06-01", to: "2025-12-31" });
    expect(input.signalRequests[0].signalName).toBe("PriceSignal");
    expect(input.signalRequests[0].specification).toEqual([
      { name: "ticker", value: "MSFT" },
    ]);
  });

  it("defaults timeframe to DAY when not provided", async () => {
    vi.mocked(registerPendingRequest).mockReturnValueOnce(
      Promise.resolve({ signalHash: 0, candles: [], timeSeries: [] })
    );
    mockFetch.mockResolvedValueOnce({
      json: async () => ({
        data: { getSignals: { status: "SUCCESS", errorMessage: null } },
      }),
    });

    await POST(
      makeRequest({
        signalName: "PriceSignal",
        specification: [{ name: "ticker", value: "AAPL" }],
        ticker: "AAPL",
        exchange: "XNAS",
        from: "2025-01-01",
        to: "2025-01-31",
      })
    );

    const sentBody = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(sentBody.variables.input.timeframe).toBe("DAY");
  });

  it("returns 500 when GraphQL returns errors", async () => {
    vi.mocked(registerPendingRequest).mockReturnValueOnce(
      Promise.resolve({ signalHash: 0, candles: [], timeSeries: [] })
    );
    mockFetch.mockResolvedValueOnce({
      json: async () => ({
        errors: [{ message: "Internal error" }],
      }),
    });

    const res = await POST(
      makeRequest({
        signalName: "PriceSignal",
        specification: [{ name: "ticker", value: "FAIL" }],
        from: "2025-01-01",
        to: "2025-01-31",
      })
    );

    expect(res.status).toBe(500);
    const body = await res.json();
    expect(body.error).toBe("Signal request failed");
  });

  it("returns 500 when mutation status is not SUCCESS", async () => {
    vi.mocked(registerPendingRequest).mockReturnValueOnce(
      Promise.resolve({ signalHash: 0, candles: [], timeSeries: [] })
    );
    mockFetch.mockResolvedValueOnce({
      json: async () => ({
        data: {
          getSignals: {
            status: "FAILURE",
            errorMessage: "Signal type not found",
          },
        },
      }),
    });

    const res = await POST(
      makeRequest({
        signalName: "PriceSignal",
        specification: [{ name: "ticker", value: "BAD" }],
        from: "2025-01-01",
        to: "2025-01-31",
      })
    );

    expect(res.status).toBe(500);
  });

  it("constructs callback URL from request origin", async () => {
    vi.mocked(registerPendingRequest).mockReturnValueOnce(
      Promise.resolve({ signalHash: 0, candles: [], timeSeries: [] })
    );
    mockFetch.mockResolvedValueOnce({
      json: async () => ({
        data: { getSignals: { status: "SUCCESS", errorMessage: null } },
      }),
    });

    await POST(
      makeRequest({
        signalName: "PriceSignal",
        specification: [{ name: "ticker", value: "AAPL" }],
        ticker: "AAPL",
        exchange: "XNAS",
        from: "2025-01-01",
        to: "2025-01-31",
      })
    );

    const sentBody = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(sentBody.variables.input.callbackUrl).toBe(
      "http://localhost:3000/api/signals/callback"
    );
  });

  it("passes specification values as-is without extra quoting", async () => {
    vi.mocked(registerPendingRequest).mockReturnValueOnce(
      Promise.resolve({ signalHash: 0, candles: [], timeSeries: [] })
    );
    mockFetch.mockResolvedValueOnce({
      json: async () => ({
        data: { getSignals: { status: "SUCCESS", errorMessage: null } },
      }),
    });

    await POST(
      makeRequest({
        signalName: "PriceSignal",
        specification: [{ name: "ticker", value: "AAPL" }],
        ticker: "AAPL",
        exchange: "XNAS",
        from: "2025-01-01",
        to: "2025-01-31",
      })
    );

    const sentBody = JSON.parse(mockFetch.mock.calls[0][1].body);
    const spec = sentBody.variables.input.signalRequests[0].specification[0];
    expect(spec.value).toBe("AAPL");
    expect(spec.value).not.toBe('"AAPL"');
  });

  it("returns 400 when signalName is missing", async () => {
    const res = await POST(
      makeRequest({
        specification: [{ name: "ticker", value: "AAPL" }],
        from: "2025-01-01",
        to: "2025-01-31",
      })
    );

    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toBe("signalName is required");
  });

  it("returns 400 when specification is empty", async () => {
    const res = await POST(
      makeRequest({
        signalName: "PriceSignal",
        specification: [],
        from: "2025-01-01",
        to: "2025-01-31",
      })
    );

    expect(res.status).toBe(400);
  });

  it("returns 400 when specification value is empty", async () => {
    const res = await POST(
      makeRequest({
        signalName: "PriceSignal",
        specification: [{ name: "ticker", value: "" }],
        from: "2025-01-01",
        to: "2025-01-31",
      })
    );

    expect(res.status).toBe(400);
  });

  it("validates integer parameter types server-side", async () => {
    const res = await POST(
      makeRequest({
        signalName: "SMA",
        specification: [{ name: "period", value: "abc" }],
        from: "2025-01-01",
        to: "2025-01-31",
        parameterTypes: [{ name: "period", value: "INTEGER" }],
      })
    );

    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toContain("must be an integer");
  });

  it("validates float parameter types server-side", async () => {
    const res = await POST(
      makeRequest({
        signalName: "Signal",
        specification: [{ name: "threshold", value: "not-a-number" }],
        from: "2025-01-01",
        to: "2025-01-31",
        parameterTypes: [{ name: "threshold", value: "FLOAT" }],
      })
    );

    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toContain("must be a number");
  });

  it("accepts valid integer parameter types", async () => {
    vi.mocked(registerPendingRequest).mockReturnValueOnce(
      Promise.resolve({ signalHash: 0, candles: [], timeSeries: [] })
    );
    mockFetch.mockResolvedValueOnce({
      json: async () => ({
        data: { getSignals: { status: "SUCCESS", errorMessage: null } },
      }),
    });

    const res = await POST(
      makeRequest({
        signalName: "SMA",
        specification: [{ name: "period", value: "14" }],
        ticker: "AAPL",
        exchange: "XNAS",
        from: "2025-01-01",
        to: "2025-01-31",
        parameterTypes: [{ name: "period", value: "INTEGER" }],
      })
    );

    expect(res.status).toBe(200);
  });
});
