import { NextRequest, NextResponse } from "next/server";

const TICKER_SEARCH_URL = process.env.TICKER_SEARCH_URL ?? "http://localhost:4001/tickers/search";

export async function GET(request: NextRequest) {
  const prefix = request.nextUrl.searchParams.get("prefix");
  if (!prefix) {
    return NextResponse.json([], { status: 400 });
  }

  const url = `${TICKER_SEARCH_URL}?prefix=${encodeURIComponent(prefix)}`;
  const res = await fetch(url);
  const data = await res.json();

  return NextResponse.json(data);
}
