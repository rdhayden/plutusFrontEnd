import { NextRequest, NextResponse } from "next/server";
import { registerPendingRequest } from "@/lib/signal-store";
import { SignalResult } from "@/lib/types";

const GRAPHQL_URL = process.env.GRAPHQL_URL ?? "http://localhost:8000/graphql";

function validateSpecification(
  specification: Array<{ name: string; value: string }>,
  parameterTypes?: Array<{ name: string; value: string }>
): string | null {
  if (!Array.isArray(specification) || specification.length === 0) {
    return "specification must be a non-empty array";
  }
  for (const spec of specification) {
    if (typeof spec.name !== "string" || spec.name.length === 0) {
      return "each specification must have a non-empty name";
    }
    if (spec.value === undefined || spec.value === null || spec.value === "") {
      return `specification '${spec.name}' must have a value`;
    }
    if (parameterTypes) {
      const paramDef = parameterTypes.find((p) => p.name === spec.name);
      if (paramDef) {
        const valueStr = String(spec.value);
        if (paramDef.value === "INTEGER") {
          if (!/^-?\d+$/.test(valueStr)) {
            return `'${spec.name}' must be an integer`;
          }
        } else if (paramDef.value === "FLOAT") {
          if (!/^-?\d+(\.\d+)?$/.test(valueStr)) {
            return `'${spec.name}' must be a number`;
          }
        }
      }
    }
  }
  return null;
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const {
    signalName,
    specification,
    from,
    to,
    timeframe = "DAY",
    parameterTypes,
    liveMode = false,
    ticker,
    exchange,
  } = body;

  if (!signalName || typeof signalName !== "string") {
    return NextResponse.json(
      { error: "signalName is required" },
      { status: 400 }
    );
  }

  const validationError = validateSpecification(specification, parameterTypes);
  if (validationError) {
    return NextResponse.json(
      { error: validationError },
      { status: 400 }
    );
  }

  const signalRequestId = `${signalName}-${Date.now()}`;
  const signalRequestsId = `batch-${signalRequestId}`;

  const origin = request.nextUrl.origin;
  const callbackUrl = `${origin}/api/signals/callback`;

  const mutation = `
    mutation GetSignals($input: SignalRequestsInput!) {
      getSignals(input: $input) {
        status
        errorMessage
      }
    }
  `;

  const variables = {
    input: {
      signalRequestsId: signalRequestsId,
      callbackUrl: callbackUrl,
      ticker: ticker,
      exchange: exchange,
      timeframe: timeframe,
      liveMode: liveMode,
      timespan: {
        from: from,
        to: to,
      },
      signalRequests: [
        {
          signalRequestId: signalRequestId,
          signalName: signalName,
          specification: specification,
        },
      ],
    },
  };

  const dataPromise = registerPendingRequest(signalRequestId, timeframe);

  const gqlRes = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: mutation, variables }),
  });

  const gqlData = await gqlRes.json();

  if (gqlData.errors || gqlData.data?.getSignals?.status !== "SUCCESS") {
    console.error("Signal request failed:", JSON.stringify(gqlData, null, 2));
    return NextResponse.json(
      { error: "Signal request failed", details: gqlData },
      { status: 500 }
    );
  }

  const result: SignalResult = await dataPromise;

  // Sort by time ascending (lightweight-charts requires sorted data)
  const compareTime = (a: string | number, b: string | number) =>
    typeof a === "number" && typeof b === "number" ? a - b : String(a).localeCompare(String(b));
  result.candles.sort((a, b) => compareTime(a.time, b.time));
  result.timeSeries.sort((a, b) => compareTime(a.time, b.time));

  return NextResponse.json({
    signalHash: result.signalHash,
    candles: result.candles,
    timeSeries: result.timeSeries,
  });
}
