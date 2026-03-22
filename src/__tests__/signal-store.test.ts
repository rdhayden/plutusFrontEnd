import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { registerPendingRequest, resolveRequest } from "@/lib/signal-store";
import { SignalResult } from "@/lib/types";

describe("signal-store", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe("registerPendingRequest", () => {
    it("returns a promise that resolves when resolveRequest is called", async () => {
      const promise = registerPendingRequest("req-1");
      const data: SignalResult = {
        signalHash: 12345,
        candles: [
          { time: "2025-01-01", open: 100, high: 110, low: 90, close: 105 },
        ],
        timeSeries: [
          { time: "2025-01-01", values: { open: 100, high: 110, low: 90, close: 105 } },
        ],
      };

      resolveRequest("req-1", data);

      const result = await promise;
      expect(result).toEqual(data);
    });

    it("resolves with empty result after 30s timeout", async () => {
      const promise = registerPendingRequest("req-timeout");

      vi.advanceTimersByTime(30000);

      const result = await promise;
      expect(result).toEqual({ signalHash: 0, candles: [], timeSeries: [] });
    });

    it("does not resolve early before timeout", async () => {
      const promise = registerPendingRequest("req-early");
      let resolved = false;
      promise.then(() => {
        resolved = true;
      });

      vi.advanceTimersByTime(29999);
      await vi.advanceTimersByTimeAsync(0);
      expect(resolved).toBe(false);

      vi.advanceTimersByTime(1);
      await vi.advanceTimersByTimeAsync(0);
      expect(resolved).toBe(true);
    });

    it("handles multiple concurrent pending requests independently", async () => {
      const promise1 = registerPendingRequest("req-a");
      const promise2 = registerPendingRequest("req-b");

      const dataA: SignalResult = {
        signalHash: 111,
        candles: [
          { time: "2025-01-01", open: 100, high: 110, low: 90, close: 105 },
        ],
        timeSeries: [
          { time: "2025-01-01", values: { open: 100, high: 110, low: 90, close: 105 } },
        ],
      };
      const dataB: SignalResult = {
        signalHash: 222,
        candles: [
          { time: "2025-02-01", open: 200, high: 210, low: 190, close: 205 },
        ],
        timeSeries: [
          { time: "2025-02-01", values: { open: 200, high: 210, low: 190, close: 205 } },
        ],
      };

      resolveRequest("req-a", dataA);
      resolveRequest("req-b", dataB);

      expect(await promise1).toEqual(dataA);
      expect(await promise2).toEqual(dataB);
    });
  });

  describe("resolveRequest", () => {
    it("returns true when resolving an existing request", () => {
      registerPendingRequest("req-exists");
      const result = resolveRequest("req-exists", { signalHash: 0, candles: [], timeSeries: [] });
      expect(result).toBe(true);
    });

    it("returns false when resolving a non-existent request", () => {
      const result = resolveRequest("req-nonexistent", { signalHash: 0, candles: [], timeSeries: [] });
      expect(result).toBe(false);
    });

    it("returns false when resolving an already-resolved request", () => {
      registerPendingRequest("req-once");
      resolveRequest("req-once", { signalHash: 0, candles: [], timeSeries: [] });
      const result = resolveRequest("req-once", { signalHash: 0, candles: [], timeSeries: [] });
      expect(result).toBe(false);
    });

    it("timeout does not double-resolve after manual resolve", async () => {
      const promise = registerPendingRequest("req-no-double");
      const data: SignalResult = {
        signalHash: 999,
        candles: [
          { time: "2025-01-01", open: 1, high: 2, low: 0, close: 1.5 },
        ],
        timeSeries: [
          { time: "2025-01-01", values: { open: 1, high: 2, low: 0, close: 1.5 } },
        ],
      };

      resolveRequest("req-no-double", data);
      const result = await promise;
      expect(result).toEqual(data);

      // Advancing past timeout should not cause issues
      vi.advanceTimersByTime(30000);
      // The promise already resolved with data, not empty result
      expect(result).toEqual(data);
    });
  });
});
