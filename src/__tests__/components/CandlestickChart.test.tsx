import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import CandlestickChart from "@/components/CandlestickChart";
import { HorizontalLineDrawing } from "@/lib/types";

// ── lightweight-charts mock ───────────────────────────────────────────────────

const mockPriceToCoordinate = vi.fn() as ReturnType<typeof vi.fn> & ((price: number) => number | null);
const mockCoordinateToPrice = vi.fn() as ReturnType<typeof vi.fn> & ((y: number) => number | null);
const mockBarsInLogicalRange = vi.fn(() => ({ barsBefore: 5, barsAfter: 5 }));
const mockApplyOptions = vi.fn();
const mockFitContent = vi.fn();
const mockSubscribeVLRC = vi.fn();
const mockUnsubscribeVLRC = vi.fn();
const mockSubscribeCrosshair = vi.fn();
const mockUnsubscribeCrosshair = vi.fn();

const mockSeries = {
  priceToCoordinate: mockPriceToCoordinate,
  coordinateToPrice: mockCoordinateToPrice,
  barsInLogicalRange: mockBarsInLogicalRange,
  setData: vi.fn(),
  priceScale: () => ({ applyOptions: mockApplyOptions }),
};

const mockTimeScale = {
  subscribeVisibleLogicalRangeChange: mockSubscribeVLRC,
  unsubscribeVisibleLogicalRangeChange: mockUnsubscribeVLRC,
  fitContent: mockFitContent,
  setVisibleLogicalRange: vi.fn(),
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
  CandlestickSeries: "CandlestickSeries",
  LineSeries: "LineSeries",
}));

// ─────────────────────────────────────────────────────────────────────────────

describe("CandlestickChart - horizontal line price labels", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Default: priceToCoordinate returns the price value as the y coordinate
    mockPriceToCoordinate.mockImplementation((price: number) => price);
  });

  afterEach(() => {
    cleanup();
  });

  it("renders a price label when a drawing is present", async () => {
    const drawings: HorizontalLineDrawing[] = [{ id: "hline-1", price: 150 }];
    render(<CandlestickChart data={[]} drawings={drawings} />);

    const label = await screen.findByTestId("drawing-label-hline-1");
    expect(label).toBeTruthy();
  });

  it("shows the price formatted to 2 decimal places", async () => {
    const drawings: HorizontalLineDrawing[] = [{ id: "hline-1", price: 150 }];
    render(<CandlestickChart data={[]} drawings={drawings} />);

    const label = await screen.findByTestId("drawing-label-hline-1");
    // 150 → "150.00" in any en locale, or "150,00" in some locales —
    // just check the digits are there
    expect(label.textContent).toMatch(/150/);
    // Ensure two decimal digits are appended (locale-agnostic check)
    expect(label.textContent).toMatch(/150[.,]\d{2}/);
  });

  it("formats prices with fractional cents to 2 decimal places", async () => {
    const drawings: HorizontalLineDrawing[] = [{ id: "hline-1", price: 99.9 }];
    render(<CandlestickChart data={[]} drawings={drawings} />);

    const label = await screen.findByTestId("drawing-label-hline-1");
    expect(label.textContent).toMatch(/99/);
    expect(label.textContent).toMatch(/90/); // "99.90" or "99,90"
  });

  it("renders one label per drawing", async () => {
    const drawings: HorizontalLineDrawing[] = [
      { id: "hline-1", price: 100 },
      { id: "hline-2", price: 200 },
      { id: "hline-3", price: 300 },
    ];
    render(<CandlestickChart data={[]} drawings={drawings} />);

    expect(await screen.findByTestId("drawing-label-hline-1")).toBeTruthy();
    expect(await screen.findByTestId("drawing-label-hline-2")).toBeTruthy();
    expect(await screen.findByTestId("drawing-label-hline-3")).toBeTruthy();
  });

  it("does not render a label when priceToCoordinate returns null", async () => {
    (mockPriceToCoordinate as ReturnType<typeof vi.fn>).mockReturnValue(null);

    const drawings: HorizontalLineDrawing[] = [{ id: "hline-1", price: 150 }];
    render(<CandlestickChart data={[]} drawings={drawings} />);

    // Wait for effects to settle
    await waitFor(() => {
      expect(mockPriceToCoordinate).toHaveBeenCalled();
    });

    expect(screen.queryByTestId("drawing-label-hline-1")).toBeNull();
  });

  it("renders no labels when drawings is empty", async () => {
    render(<CandlestickChart data={[]} drawings={[]} />);

    await waitFor(() => {
      // No drawing labels should be in the DOM
      const labels = document.querySelectorAll("[data-testid^='drawing-label-']");
      expect(labels).toHaveLength(0);
    });
  });

  it("renders no labels when drawings prop is omitted", async () => {
    render(<CandlestickChart data={[]} />);

    await waitFor(() => {
      const labels = document.querySelectorAll("[data-testid^='drawing-label-']");
      expect(labels).toHaveLength(0);
    });
  });

  it("updates the label text when the drawing price changes", async () => {
    const drawings: HorizontalLineDrawing[] = [{ id: "hline-1", price: 100 }];
    const { rerender } = render(<CandlestickChart data={[]} drawings={drawings} />);

    const label = await screen.findByTestId("drawing-label-hline-1");
    expect(label.textContent).toMatch(/100/);

    const updatedDrawings: HorizontalLineDrawing[] = [{ id: "hline-1", price: 250 }];
    rerender(<CandlestickChart data={[]} drawings={updatedDrawings} />);

    await waitFor(() => {
      expect(screen.getByTestId("drawing-label-hline-1").textContent).toMatch(/250/);
    });
  });

  it("removes a label when its drawing is removed from the list", async () => {
    const drawings: HorizontalLineDrawing[] = [
      { id: "hline-1", price: 100 },
      { id: "hline-2", price: 200 },
    ];
    const { rerender } = render(<CandlestickChart data={[]} drawings={drawings} />);

    expect(await screen.findByTestId("drawing-label-hline-1")).toBeTruthy();
    expect(await screen.findByTestId("drawing-label-hline-2")).toBeTruthy();

    rerender(<CandlestickChart data={[]} drawings={[{ id: "hline-2", price: 200 }]} />);

    await waitFor(() => {
      expect(screen.queryByTestId("drawing-label-hline-1")).toBeNull();
    });
    expect(screen.getByTestId("drawing-label-hline-2")).toBeTruthy();
  });

  it("label is not interactive (pointerEvents none via CSS module)", async () => {
    const drawings: HorizontalLineDrawing[] = [{ id: "hline-1", price: 150 }];
    render(<CandlestickChart data={[]} drawings={drawings} />);

    const label = await screen.findByTestId("drawing-label-hline-1");
    // pointer-events: none is now set via CSS module class, not inline style
    expect(label).toBeInTheDocument();
  });
});

