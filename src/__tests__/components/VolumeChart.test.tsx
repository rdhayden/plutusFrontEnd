import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, cleanup, waitFor } from "@testing-library/react";
import VolumeChart, { formatVolume } from "@/components/VolumeChart";

// ── lightweight-charts mock ───────────────────────────────────────────────────

const mockApplyOptions = vi.fn();
const mockFitContent = vi.fn();
const mockSetVisibleLogicalRange = vi.fn();
const mockSubscribeCrosshair = vi.fn();
const mockUnsubscribeCrosshair = vi.fn();

const mockSeries = {
  setData: vi.fn(),
  priceScale: () => ({ applyOptions: mockApplyOptions }),
};

const mockTimeScale = {
  fitContent: mockFitContent,
  setVisibleLogicalRange: mockSetVisibleLogicalRange,
};

const mockChart = {
  addSeries: vi.fn(() => mockSeries),
  timeScale: () => mockTimeScale,
  subscribeCrosshairMove: mockSubscribeCrosshair,
  unsubscribeCrosshairMove: mockUnsubscribeCrosshair,
  remove: vi.fn(),
  clearCrosshairPosition: vi.fn(),
};

vi.mock("lightweight-charts", () => ({
  createChart: vi.fn(() => mockChart),
  HistogramSeries: "HistogramSeries",
  LineSeries: "LineSeries",
}));

// ─────────────────────────────────────────────────────────────────────────────

const volumeData = [
  { time: "2025-01-01", open: 100, high: 110, low: 90, close: 105, volume: 1_000_000 }, // up
  { time: "2025-01-02", open: 105, high: 115, low: 95, close: 100, volume: 500_000 },   // down
  { time: "2025-01-03", open: 100, high: 110, low: 90, close: 100, volume: 250_000 },   // flat
];

// ── formatVolume unit tests ───────────────────────────────────────────────────

describe("formatVolume", () => {
  it("formats millions", () => {
    expect(formatVolume(1_500_000)).toBe("1.5M");
  });

  it("formats exactly 1 million", () => {
    expect(formatVolume(1_000_000)).toBe("1.0M");
  });

  it("formats thousands", () => {
    expect(formatVolume(500_000)).toBe("500.0K");
  });

  it("formats exactly 1 thousand", () => {
    expect(formatVolume(1_000)).toBe("1.0K");
  });

  it("formats sub-thousand values", () => {
    expect(formatVolume(999)).toBe("999");
  });

  it("formats zero", () => {
    expect(formatVolume(0)).toBe("0");
  });
});

// ── VolumeChart — histogram series creation ───────────────────────────────────

describe("VolumeChart - histogram series", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it("creates a HistogramSeries on mount", async () => {
    render(<VolumeChart data={volumeData} />);

    await waitFor(() => {
      const calls = mockChart.addSeries.mock.calls;
      const histogramCall = calls.find((c) => c[0] === "HistogramSeries");
      expect(histogramCall).toBeTruthy();
    });
  });

  it("sets volume values on the histogram series", async () => {
    render(<VolumeChart data={volumeData} />);

    await waitFor(() => {
      const bars = mockSeries.setData.mock.calls[0]?.[0] as { time: string; value: number }[];
      expect(bars).toBeTruthy();
      expect(bars.find((d) => d.time === "2025-01-01")?.value).toBe(1_000_000);
      expect(bars.find((d) => d.time === "2025-01-02")?.value).toBe(500_000);
    });
  });

  it("does not call setData when data is empty", async () => {
    render(<VolumeChart data={[]} />);

    await waitFor(() => {
      expect(mockChart.addSeries).toHaveBeenCalled();
    });

    expect(mockSeries.setData).not.toHaveBeenCalled();
  });

  it("calls chart.remove on unmount", async () => {
    const { unmount } = render(<VolumeChart data={volumeData} />);

    await waitFor(() => expect(mockChart.addSeries).toHaveBeenCalled());

    unmount();
    expect(mockChart.remove).toHaveBeenCalled();
  });
});

// ── VolumeChart — per-bar colour ──────────────────────────────────────────────

describe("VolumeChart - per-bar colour", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it("assigns green colour for up candles (close > open)", async () => {
    render(<VolumeChart data={volumeData} />);

    await waitFor(() => {
      const bars = mockSeries.setData.mock.calls[0]?.[0] as { time: string; color: string }[];
      const upBar = bars?.find((d) => d.time === "2025-01-01");
      expect(upBar?.color).toBe("hsla(145, 65%, 45%, 0.7)");
    });
  });

  it("assigns red colour for down candles (close < open)", async () => {
    render(<VolumeChart data={volumeData} />);

    await waitFor(() => {
      const bars = mockSeries.setData.mock.calls[0]?.[0] as { time: string; color: string }[];
      const downBar = bars?.find((d) => d.time === "2025-01-02");
      expect(downBar?.color).toBe("hsla(0, 70%, 55%, 0.7)");
    });
  });

  it("assigns grey colour for flat candles (close === open)", async () => {
    render(<VolumeChart data={volumeData} />);

    await waitFor(() => {
      const bars = mockSeries.setData.mock.calls[0]?.[0] as { time: string; color: string }[];
      const flatBar = bars?.find((d) => d.time === "2025-01-03");
      expect(flatBar?.color).toBe("hsla(220, 10%, 20%, 0.7)");
    });
  });
});

// ── VolumeChart — crosshair tooltip ──────────────────────────────────────────

const getCrosshairHandler = () =>
  mockSubscribeCrosshair.mock.calls[mockSubscribeCrosshair.mock.calls.length - 1]?.[0] as
    | ((param: unknown) => void)
    | undefined;

describe("VolumeChart - crosshair tooltip", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it("shows volume tooltip with formatted value on crosshair hover", async () => {
    render(<VolumeChart data={volumeData} />);

    await waitFor(() => expect(mockSubscribeCrosshair).toHaveBeenCalled());

    const handler = getCrosshairHandler()!;
    const tooltipEl = document.querySelector<HTMLDivElement>("[data-testid='volume-tooltip']")!;

    handler({
      time: "2025-01-01",
      point: { x: 50, y: 50 },
      seriesData: new Map([[mockSeries, { value: 1_500_000 }]]),
    });

    expect(tooltipEl.style.display).toBe("block");
    expect(tooltipEl.innerHTML).toContain("1.5M");
  });

  it("labels the volume with V", async () => {
    render(<VolumeChart data={volumeData} />);

    await waitFor(() => expect(mockSubscribeCrosshair).toHaveBeenCalled());

    const handler = getCrosshairHandler()!;
    const tooltipEl = document.querySelector<HTMLDivElement>("[data-testid='volume-tooltip']")!;

    handler({
      time: "2025-01-01",
      point: { x: 50, y: 50 },
      seriesData: new Map([[mockSeries, { value: 1_500_000 }]]),
    });

    expect(tooltipEl.innerHTML).toContain(">V<");
  });

  it("hides tooltip when volume is zero", async () => {
    render(<VolumeChart data={volumeData} />);

    await waitFor(() => expect(mockSubscribeCrosshair).toHaveBeenCalled());

    const handler = getCrosshairHandler()!;
    const tooltipEl = document.querySelector<HTMLDivElement>("[data-testid='volume-tooltip']")!;

    handler({
      time: "2025-01-01",
      point: { x: 50, y: 50 },
      seriesData: new Map([[mockSeries, { value: 0 }]]),
    });

    expect(tooltipEl.style.display).toBe("none");
  });

  it("hides tooltip when crosshair leaves the chart", async () => {
    render(<VolumeChart data={volumeData} />);

    await waitFor(() => expect(mockSubscribeCrosshair).toHaveBeenCalled());

    const handler = getCrosshairHandler()!;
    const tooltipEl = document.querySelector<HTMLDivElement>("[data-testid='volume-tooltip']")!;

    // Show tooltip first
    handler({
      time: "2025-01-01",
      point: { x: 50, y: 50 },
      seriesData: new Map([[mockSeries, { value: 1_500_000 }]]),
    });
    expect(tooltipEl.style.display).toBe("block");

    // Move crosshair out
    handler({ time: undefined, point: undefined, seriesData: new Map() });
    expect(tooltipEl.style.display).toBe("none");
  });
});

// ── VolumeChart — logical range sync ─────────────────────────────────────────

describe("VolumeChart - logical range sync", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it("sets visible logical range when visibleLogicalRange prop changes", async () => {
    const { rerender } = render(<VolumeChart data={volumeData} visibleLogicalRange={null} />);

    await waitFor(() => expect(mockChart.addSeries).toHaveBeenCalled());

    rerender(<VolumeChart data={volumeData} visibleLogicalRange={{ from: 10, to: 50 }} />);

    await waitFor(() => {
      expect(mockSetVisibleLogicalRange).toHaveBeenCalledWith({ from: 10, to: 50 });
    });
  });

  it("does not call setVisibleLogicalRange when range is null", async () => {
    render(<VolumeChart data={volumeData} visibleLogicalRange={null} />);

    await waitFor(() => expect(mockChart.addSeries).toHaveBeenCalled());

    expect(mockSetVisibleLogicalRange).not.toHaveBeenCalled();
  });
});
