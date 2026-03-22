import { describe, it, expect } from "vitest";
import { TIMEFRAME_LABELS, type Timeframe } from "@/lib/types";

describe("types", () => {
  describe("TIMEFRAME_LABELS", () => {
    it("has a label for every supported timeframe", () => {
      const expected: Timeframe[] = [
        "TICK",
        "SECOND",
        "MINUTE",
        "HOUR",
        "DAY",
        "WEEK",
        "MONTH",
      ];

      for (const tf of expected) {
        expect(TIMEFRAME_LABELS[tf]).toBeDefined();
        expect(typeof TIMEFRAME_LABELS[tf]).toBe("string");
        expect(TIMEFRAME_LABELS[tf].length).toBeGreaterThan(0);
      }
    });

    it("contains exactly 7 timeframes matching the GraphQL API", () => {
      expect(Object.keys(TIMEFRAME_LABELS)).toHaveLength(7);
    });

    it("has human-readable labels", () => {
      expect(TIMEFRAME_LABELS.DAY).toBe("1 Day");
      expect(TIMEFRAME_LABELS.WEEK).toBe("1 Week");
      expect(TIMEFRAME_LABELS.HOUR).toBe("1 Hour");
      expect(TIMEFRAME_LABELS.MINUTE).toBe("1 Minute");
      expect(TIMEFRAME_LABELS.MONTH).toBe("1 Month");
    });
  });
});
