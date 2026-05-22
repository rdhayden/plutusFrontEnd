import { NextResponse } from "next/server";

const GRAPHQL_URL = process.env.GRAPHQL_URL ?? "http://localhost:8000/graphql";

export async function GET() {
  const query = `
    query {
      availableSignals {
        signals {
          name
          parameters {
            name
            value
            default
          }
          visualiseWith
        }
      }
    }
  `;

  try {
    const res = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    const data = await res.json();

    if (data.errors) {
      console.error("GraphQL errors:", JSON.stringify(data.errors));
      return NextResponse.json({ signals: [] });
    }

    return NextResponse.json({
      signals: data.data.availableSignals.signals,
    });
  } catch {
    console.error("Failed to fetch available signals");
    return NextResponse.json({ signals: [] });
  }
}
