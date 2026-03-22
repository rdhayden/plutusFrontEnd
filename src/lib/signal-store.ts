import { SignalResult, Timeframe } from "./types";

type Resolver = (data: SignalResult) => void;

interface PendingEntry {
  resolve: Resolver;
  timeframe: Timeframe;
}

const pendingRequests = new Map<string, PendingEntry>();

export function registerPendingRequest(
  requestId: string,
  timeframe: Timeframe = "DAY",
): Promise<SignalResult> {
  return new Promise((resolve) => {
    pendingRequests.set(requestId, { resolve, timeframe });
    setTimeout(() => {
      if (pendingRequests.has(requestId)) {
        pendingRequests.delete(requestId);
        resolve({ signalHash: 0, candles: [], timeSeries: [] });
      }
    }, 30000);
  });
}

export function getRequestTimeframe(requestId: string): Timeframe | null {
  const entry = pendingRequests.get(requestId);
  return entry ? entry.timeframe : null;
}

export function resolveRequest(requestId: string, data: SignalResult): boolean {
  const entry = pendingRequests.get(requestId);
  if (entry) {
    entry.resolve(data);
    pendingRequests.delete(requestId);
    return true;
  }
  return false;
}
