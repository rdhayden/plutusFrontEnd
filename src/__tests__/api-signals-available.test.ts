import { describe, it, expect, vi, beforeEach } from "vitest";
import { GET } from "@/app/api/signals/available/route";

const mockFetch = vi.fn();
vi.stubGlobal("fetch", mockFetch);

describe("GET /api/signals/available", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns available signals from GraphQL backend", async () => {
    mockFetch.mockResolvedValueOnce({
      json: async () => ({
        data: {
          availableSignals: {
            signals: [
              { name: "PriceSignal", parameters: [{ name: "ticker", value: "STRING" }], visualiseWith: [] },
              { name: "SimpleMovingAverage", parameters: [{ name: "period", value: "INTEGER" }], visualiseWith: ["PriceSignal"] },
            ],
          },
        },
      }),
    });

    const res = await GET();
    const body = await res.json();

    expect(body.signals).toHaveLength(2);
    expect(body.signals[0].name).toBe("PriceSignal");
    expect(body.signals[0].visualiseWith).toEqual([]);
    expect(body.signals[1].name).toBe("SimpleMovingAverage");
    expect(body.signals[1].visualiseWith).toEqual(["PriceSignal"]);
  });

  it("sends correct GraphQL query", async () => {
    mockFetch.mockResolvedValueOnce({
      json: async () => ({
        data: { availableSignals: { signals: [] } },
      }),
    });

    await GET();

    expect(mockFetch).toHaveBeenCalledWith(
      "http://localhost:8000/graphql",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
    );

    const sentBody = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(sentBody.query).toContain("availableSignals");
    expect(sentBody.query).toContain("signals");
    expect(sentBody.query).toContain("name");
    expect(sentBody.query).toContain("parameters");
    expect(sentBody.query).toContain("visualiseWith");
  });

  it("returns empty signals array on GraphQL errors", async () => {
    mockFetch.mockResolvedValueOnce({
      json: async () => ({
        errors: [{ message: "Something went wrong" }],
      }),
    });

    const res = await GET();
    const body = await res.json();

    expect(body.signals).toEqual([]);
  });

  it("returns empty signals array on network failure", async () => {
    mockFetch.mockRejectedValueOnce(new Error("Connection refused"));

    const res = await GET();
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body.signals).toEqual([]);
  });
});
