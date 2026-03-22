import { describe, it, expect, vi, beforeEach } from "vitest";
import { GET } from "@/app/api/tickers/search/route";
import { NextRequest } from "next/server";

const mockFetch = vi.fn();
vi.stubGlobal("fetch", mockFetch);

function makeRequest(prefix?: string): NextRequest {
  const url = prefix
    ? `http://localhost:3000/api/tickers/search?prefix=${encodeURIComponent(prefix)}`
    : "http://localhost:3000/api/tickers/search";
  return new NextRequest(url, { method: "GET" });
}

describe("GET /api/tickers/search", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns 400 when prefix is missing", async () => {
    const res = await GET(makeRequest());
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body).toEqual([]);
  });

  it("proxies to the ticker search backend with encoded prefix", async () => {
    const mockResults = [
      { ticker: "AAPL", name: "Apple Inc.", exchange: "XNAS" },
      { ticker: "AAPD", name: "Direxion Daily AAPL Bear", exchange: "XNAS" },
    ];
    mockFetch.mockResolvedValueOnce({
      json: async () => mockResults,
    });

    const res = await GET(makeRequest("AA"));
    const body = await res.json();

    expect(mockFetch).toHaveBeenCalledWith(
      "http://localhost:4001/tickers/search?prefix=AA"
    );
    expect(body).toEqual(mockResults);
  });

  it("URL-encodes special characters in the prefix", async () => {
    mockFetch.mockResolvedValueOnce({ json: async () => [] });

    await GET(makeRequest("A&B"));

    expect(mockFetch).toHaveBeenCalledWith(
      "http://localhost:4001/tickers/search?prefix=A%26B"
    );
  });
});
