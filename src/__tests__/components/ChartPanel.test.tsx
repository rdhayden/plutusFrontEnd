import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent, within, cleanup } from "@testing-library/react";
import ChartPanel from "@/components/ChartPanel";
import { ChartTab, AvailableSignal } from "@/lib/types";

// Mock CandlestickChart since it uses canvas/lightweight-charts
vi.mock("@/components/CandlestickChart", () => ({
  default: ({ data, timeframe, overlays, onExpandNeeded, onVisibleLogicalRangeChange, visibleLogicalRange }: {
    data: unknown[];
    timeframe: string;
    overlays?: unknown[];
    onExpandNeeded?: () => void;
    onVisibleLogicalRangeChange?: (range: { from: number; to: number } | null) => void;
    visibleLogicalRange?: { from: number; to: number } | null;
  }) => (
    <div
      data-testid="candlestick-chart"
      data-count={data.length}
      data-timeframe={timeframe}
      data-overlays={overlays?.length ?? 0}
      data-has-range-callback={onVisibleLogicalRangeChange ? "true" : "false"}
      data-visible-range={visibleLogicalRange ? JSON.stringify(visibleLogicalRange) : ""}
      onClick={onExpandNeeded}
      onFocus={() => {
        // Simulate a visible range change when focused (used in time sync tests)
        if (onVisibleLogicalRangeChange) {
          onVisibleLogicalRangeChange({ from: 10, to: 50 });
        }
      }}
    />
  ),
}));

// Mock SignalConfigPanel to avoid testing its internals here
vi.mock("@/components/SignalConfigPanel", () => ({
  default: ({
    signal,
    defaultTicker,
    defaultExchange,
    onSubmit,
    onClose,
    duplicateMessage,
  }: {
    signal: { name: string };
    defaultTicker: string;
    defaultExchange: string | null;
    onSubmit: (name: string, spec: { name: string; value: string }[]) => void;
    onClose: () => void;
    duplicateMessage: string | null;
  }) => (
    <div data-testid="signal-config-panel">
      <span data-testid="config-signal-name">{signal.name}</span>
      <span data-testid="config-default-ticker">{defaultTicker}</span>
      <span data-testid="config-default-exchange">{defaultExchange ?? ""}</span>
      <button data-testid="config-submit" onClick={() => onSubmit(signal.name, [{ name: "period", value: "14" }])}>
        Submit
      </button>
      <button data-testid="config-close" onClick={onClose}>
        Close
      </button>
      {duplicateMessage && <span data-testid="duplicate-message">{duplicateMessage}</span>}
    </div>
  ),
}));

const mockSignals: AvailableSignal[] = [
  { name: "PriceSignal", parameters: [{ name: "ticker", value: "STRING" }], visualiseWith: [] },
  { name: "SimpleMovingAverage", parameters: [{ name: "period", value: "INTEGER" }], visualiseWith: ["PriceSignal"] },
];

const defaultTabs: ChartTab[] = [
  {
    ticker: "AAPL",
    exchange: "XNAS",
    name: "Apple Inc.",
    data: [
      { time: "2025-01-01", open: 100, high: 110, low: 90, close: 105 },
      { time: "2025-01-02", open: 105, high: 115, low: 100, close: 112 },
    ],
    lastPrice: 112,
    timeframe: "DAY",
    from: "2024-07-01",
    signals: [],
  },
];

const defaultProps = {
  tabs: defaultTabs,
  activeTab: "AAPL",
  onTabSelect: vi.fn(),
  onTimeframeChange: vi.fn(),
  onTimespanChange: vi.fn(),
  onAddSignal: vi.fn().mockResolvedValue(null),
  onAutoExpand: vi.fn(),
  onTabClose: vi.fn(),
  availableSignals: mockSignals,
  selectedSignal: "",
  onSignalChange: vi.fn(),
};

describe("ChartPanel", () => {
  afterEach(() => {
    cleanup();
  });

  it("shows placeholder when no active chart", () => {
    render(<ChartPanel {...defaultProps} activeTab={null} tabs={[]} />);
    expect(
      screen.getAllByText("Search for a ticker to view its chart").length
    ).toBeGreaterThanOrEqual(1);
  });

  it("renders ticker tab buttons", () => {
    render(<ChartPanel {...defaultProps} />);
    const buttons = screen.getAllByRole("button", { name: "AAPL" });
    expect(buttons.length).toBeGreaterThanOrEqual(1);
  });

  it("renders chart header with name and price", () => {
    const { container } = render(<ChartPanel {...defaultProps} />);
    expect(container.textContent).toContain("Apple Inc.");
    expect(container.textContent).toContain("$112.00");
  });

  it("renders the CandlestickChart with correct data", () => {
    render(<ChartPanel {...defaultProps} />);
    const charts = screen.getAllByTestId("candlestick-chart");
    expect(charts[0]).toHaveAttribute("data-count", "2");
    expect(charts[0]).toHaveAttribute("data-timeframe", "DAY");
  });

  it("calls onTabSelect when a tab is clicked", () => {
    const onTabSelect = vi.fn();
    const tabs: ChartTab[] = [
      ...defaultTabs,
      { ticker: "MSFT", exchange: "XNAS", name: "Microsoft", data: [], lastPrice: 400, timeframe: "DAY", from: "2024-07-01", signals: [] },
    ];

    render(<ChartPanel {...defaultProps} tabs={tabs} onTabSelect={onTabSelect} />);
    const msftBtn = screen.getAllByRole("button", { name: "MSFT" })[0];
    fireEvent.click(msftBtn);
    expect(onTabSelect).toHaveBeenCalledWith("MSFT");
  });

  describe("Timespan buttons", () => {
    it("renders expand and shrink buttons", () => {
      render(<ChartPanel {...defaultProps} />);
      expect(screen.getByLabelText("Expand timespan")).toBeTruthy();
      expect(screen.getByLabelText("Shrink timespan")).toBeTruthy();
    });

    it("calls onTimespanChange with 'expand' when + is clicked", () => {
      const onTimespanChange = vi.fn();
      render(<ChartPanel {...defaultProps} onTimespanChange={onTimespanChange} />);
      fireEvent.click(screen.getByLabelText("Expand timespan"));
      expect(onTimespanChange).toHaveBeenCalledWith("AAPL", "expand");
    });

    it("calls onTimespanChange with 'shrink' when - is clicked", () => {
      const onTimespanChange = vi.fn();
      render(<ChartPanel {...defaultProps} onTimespanChange={onTimespanChange} />);
      fireEvent.click(screen.getByLabelText("Shrink timespan"));
      expect(onTimespanChange).toHaveBeenCalledWith("AAPL", "shrink");
    });

    it("does not render timespan buttons when no active chart", () => {
      render(<ChartPanel {...defaultProps} activeTab={null} tabs={[]} />);
      expect(screen.queryByLabelText("Expand timespan")).toBeNull();
      expect(screen.queryByLabelText("Shrink timespan")).toBeNull();
    });
  });

  describe("Timeframe dropdown", () => {
    it("renders timeframe select with current value", () => {
      render(<ChartPanel {...defaultProps} />);
      const selects = screen.getAllByDisplayValue("1 Day");
      expect(selects.length).toBeGreaterThanOrEqual(1);
      expect(selects[0].tagName).toBe("SELECT");
    });

    it("shows all timeframe options", () => {
      const { container } = render(<ChartPanel {...defaultProps} />);
      const timeframeSelect = container.querySelectorAll("select")[0];
      const options = within(timeframeSelect).getAllByRole("option");
      const labels = options.map((o) => o.textContent);
      expect(labels).toContain("Tick");
      expect(labels).toContain("1 Second");
      expect(labels).toContain("1 Minute");
      expect(labels).toContain("1 Hour");
      expect(labels).toContain("1 Day");
      expect(labels).toContain("1 Week");
      expect(labels).toContain("1 Month");
    });

    it("calls onTimeframeChange when a new timeframe is selected", () => {
      const onTimeframeChange = vi.fn();
      const { container } = render(
        <ChartPanel {...defaultProps} onTimeframeChange={onTimeframeChange} />
      );

      const timeframeSelect = container.querySelectorAll("select")[0];
      fireEvent.change(timeframeSelect, { target: { value: "WEEK" } });
      expect(onTimeframeChange).toHaveBeenCalledWith("AAPL", "WEEK");
    });
  });

  describe("Signals dropdown", () => {
    it("renders signal select with blank default", () => {
      const { container } = render(<ChartPanel {...defaultProps} />);
      const signalSelect = container.querySelectorAll("select")[1] as HTMLSelectElement;
      expect(signalSelect).toBeTruthy();
      expect(signalSelect.value).toBe("");
    });

    it("lists all available signals plus blank placeholder", () => {
      const { container } = render(<ChartPanel {...defaultProps} />);
      const signalSelect = container.querySelectorAll("select")[1];
      const options = within(signalSelect).getAllByRole("option");
      const labels = options.map((o) => o.textContent);
      expect(labels).toContain("-- Select --");
      expect(labels).toContain("PriceSignal");
      expect(labels).toContain("SimpleMovingAverage");
    });

    it("renders 'Add Signal:' label", () => {
      const { container } = render(<ChartPanel {...defaultProps} />);
      expect(container.textContent).toContain("Add Signal:");
    });

    it("calls onSignalChange when a signal is selected", () => {
      const onSignalChange = vi.fn();
      const { container } = render(
        <ChartPanel {...defaultProps} onSignalChange={onSignalChange} />
      );

      const signalSelect = container.querySelectorAll("select")[1];
      fireEvent.change(signalSelect, { target: { value: "SimpleMovingAverage" } });
      expect(onSignalChange).toHaveBeenCalledWith("SimpleMovingAverage");
    });

    it("shows selected signal value when set", () => {
      const { container } = render(
        <ChartPanel {...defaultProps} selectedSignal="SimpleMovingAverage" />
      );
      const signalSelect = container.querySelectorAll("select")[1] as HTMLSelectElement;
      expect(signalSelect.value).toBe("SimpleMovingAverage");
    });

    it("renders with empty signals list showing only placeholder", () => {
      const { container } = render(
        <ChartPanel {...defaultProps} availableSignals={[]} />
      );
      const signalSelect = container.querySelectorAll("select")[1];
      const options = within(signalSelect).queryAllByRole("option");
      expect(options).toHaveLength(1);
      expect(options[0].textContent).toBe("-- Select --");
    });
  });

  describe("Signal config panel", () => {
    it("does not show config panel by default", () => {
      render(<ChartPanel {...defaultProps} />);
      expect(screen.queryByTestId("signal-config-panel")).toBeNull();
    });

    it("opens config panel when a signal is selected from the dropdown", () => {
      const onSignalChange = vi.fn();
      const { container } = render(
        <ChartPanel {...defaultProps} onSignalChange={onSignalChange} selectedSignal="SimpleMovingAverage" />
      );

      const signalSelect = container.querySelectorAll("select")[1];
      fireEvent.change(signalSelect, { target: { value: "SimpleMovingAverage" } });

      expect(screen.getByTestId("signal-config-panel")).toBeTruthy();
      expect(screen.getByTestId("config-signal-name").textContent).toBe("SimpleMovingAverage");
    });

    it("passes defaultTicker and defaultExchange from the active tab to the config panel", () => {
      const { container } = render(
        <ChartPanel {...defaultProps} selectedSignal="SimpleMovingAverage" />
      );

      const signalSelect = container.querySelectorAll("select")[1];
      fireEvent.change(signalSelect, { target: { value: "SimpleMovingAverage" } });

      expect(screen.getByTestId("config-default-ticker").textContent).toBe("AAPL");
      expect(screen.getByTestId("config-default-exchange").textContent).toBe("XNAS");
    });

    it("closes config panel when close button is clicked", () => {
      const { container } = render(
        <ChartPanel {...defaultProps} selectedSignal="SimpleMovingAverage" />
      );

      // Open the panel
      const signalSelect = container.querySelectorAll("select")[1];
      fireEvent.change(signalSelect, { target: { value: "SimpleMovingAverage" } });
      expect(screen.getByTestId("signal-config-panel")).toBeTruthy();

      // Close it
      fireEvent.click(screen.getByTestId("config-close"));
      expect(screen.queryByTestId("signal-config-panel")).toBeNull();
    });

    it("calls onAddSignal when submit is clicked", async () => {
      const onAddSignal = vi.fn().mockResolvedValue(null);
      const { container } = render(
        <ChartPanel {...defaultProps} onAddSignal={onAddSignal} selectedSignal="SimpleMovingAverage" />
      );

      const signalSelect = container.querySelectorAll("select")[1];
      fireEvent.change(signalSelect, { target: { value: "SimpleMovingAverage" } });

      fireEvent.click(screen.getByTestId("config-submit"));

      expect(onAddSignal).toHaveBeenCalledWith(
        "AAPL",
        "SimpleMovingAverage",
        [{ name: "period", value: "14" }]
      );
    });

    it("shows duplicate message when onAddSignal returns an error", async () => {
      const onAddSignal = vi.fn().mockResolvedValue("This signal with the same parameters is already on the chart");
      const { container } = render(
        <ChartPanel {...defaultProps} onAddSignal={onAddSignal} selectedSignal="SimpleMovingAverage" />
      );

      const signalSelect = container.querySelectorAll("select")[1];
      fireEvent.change(signalSelect, { target: { value: "SimpleMovingAverage" } });

      fireEvent.click(screen.getByTestId("config-submit"));

      // Wait for async resolution
      await vi.waitFor(() => {
        expect(screen.getByTestId("duplicate-message")).toBeTruthy();
      });
    });

    it("resets signal selection and closes config panel after successful submit", async () => {
      const onAddSignal = vi.fn().mockResolvedValue(null);
      const onSignalChange = vi.fn();
      const { container } = render(
        <ChartPanel
          {...defaultProps}
          onAddSignal={onAddSignal}
          onSignalChange={onSignalChange}
          selectedSignal="SimpleMovingAverage"
        />
      );

      const signalSelect = container.querySelectorAll("select")[1];
      fireEvent.change(signalSelect, { target: { value: "SimpleMovingAverage" } });
      fireEvent.click(screen.getByTestId("config-submit"));

      await vi.waitFor(() => {
        expect(screen.queryByTestId("signal-config-panel")).toBeNull();
      });
      expect(onSignalChange).toHaveBeenCalledWith("");
    });

    it("does not open config panel when blank option is selected", () => {
      const onSignalChange = vi.fn();
      const { container } = render(
        <ChartPanel {...defaultProps} onSignalChange={onSignalChange} selectedSignal="SimpleMovingAverage" />
      );

      // Open panel first
      const signalSelect = container.querySelectorAll("select")[1];
      fireEvent.change(signalSelect, { target: { value: "SimpleMovingAverage" } });
      expect(screen.getByTestId("signal-config-panel")).toBeTruthy();

      // Select blank option — should close
      fireEvent.change(signalSelect, { target: { value: "" } });
      expect(screen.queryByTestId("signal-config-panel")).toBeNull();
    });

    it("passes overlays that visualise with PriceSignal to the main chart", () => {
      const tabsWithSignals: ChartTab[] = [
        {
          ...defaultTabs[0],
          signals: [
            {
              signalName: "SMA",
              signalHash: 123,
              specification: [{ name: "period", value: "14" }],
              timeSeries: [{ time: "2025-01-01", values: { sma: 105 } }],
              visualiseWith: ["PriceSignal"],
            },
          ],
        },
      ];

      render(<ChartPanel {...defaultProps} tabs={tabsWithSignals} />);
      const charts = screen.getAllByTestId("candlestick-chart");
      // Only the main chart, no sub-charts
      expect(charts).toHaveLength(1);
      expect(charts[0]).toHaveAttribute("data-overlays", "1");
    });

    it("renders independent signal in a sub-chart below the main chart", () => {
      const tabsWithSignals: ChartTab[] = [
        {
          ...defaultTabs[0],
          signals: [
            {
              signalName: "RSI",
              signalHash: 456,
              specification: [{ name: "period", value: "14" }],
              timeSeries: [{ time: "2025-01-01", values: { rsi: 55 } }],
              visualiseWith: [],
            },
          ],
        },
      ];

      const { container } = render(<ChartPanel {...defaultProps} tabs={tabsWithSignals} />);
      const charts = screen.getAllByTestId("candlestick-chart");
      // Main chart + 1 sub-chart
      expect(charts).toHaveLength(2);
      // Main chart has no overlays
      expect(charts[0]).toHaveAttribute("data-overlays", "0");
      expect(charts[0]).toHaveAttribute("data-count", "2");
      // Sub-chart has the RSI overlay and no candle data
      expect(charts[1]).toHaveAttribute("data-overlays", "1");
      expect(charts[1]).toHaveAttribute("data-count", "0");
      // Sub-chart label
      expect(container.textContent).toContain("RSI");
    });

    it("renders dependent signal on the same sub-chart as its target", () => {
      const tabsWithSignals: ChartTab[] = [
        {
          ...defaultTabs[0],
          signals: [
            {
              signalName: "RSI",
              signalHash: 456,
              specification: [{ name: "period", value: "14" }],
              timeSeries: [{ time: "2025-01-01", values: { rsi: 55 } }],
              visualiseWith: [],
            },
            {
              signalName: "StochRSI",
              signalHash: 789,
              specification: [{ name: "period", value: "14" }],
              timeSeries: [{ time: "2025-01-01", values: { stochRsi: 0.8 } }],
              visualiseWith: ["RSI"],
            },
          ],
        },
      ];

      render(<ChartPanel {...defaultProps} tabs={tabsWithSignals} />);
      const charts = screen.getAllByTestId("candlestick-chart");
      // Main chart + 1 sub-chart (RSI + StochRSI together)
      expect(charts).toHaveLength(2);
      expect(charts[1]).toHaveAttribute("data-overlays", "2");
    });

    it("renders multiple independent signals as separate sub-charts", () => {
      const tabsWithSignals: ChartTab[] = [
        {
          ...defaultTabs[0],
          signals: [
            {
              signalName: "RSI",
              signalHash: 456,
              specification: [{ name: "period", value: "14" }],
              timeSeries: [{ time: "2025-01-01", values: { rsi: 55 } }],
              visualiseWith: [],
            },
            {
              signalName: "MACD",
              signalHash: 101,
              specification: [{ name: "period", value: "12" }],
              timeSeries: [{ time: "2025-01-01", values: { macd: 1.5 } }],
              visualiseWith: [],
            },
          ],
        },
      ];

      render(<ChartPanel {...defaultProps} tabs={tabsWithSignals} />);
      const charts = screen.getAllByTestId("candlestick-chart");
      // Main chart + 2 sub-charts
      expect(charts).toHaveLength(3);
      expect(charts[1]).toHaveAttribute("data-overlays", "1");
      expect(charts[2]).toHaveAttribute("data-overlays", "1");
    });

    it("renders signal on both main chart and sub-chart when visualiseWith has multiple targets", () => {
      const tabsWithSignals: ChartTab[] = [
        {
          ...defaultTabs[0],
          signals: [
            {
              signalName: "RSI",
              signalHash: 456,
              specification: [{ name: "period", value: "14" }],
              timeSeries: [{ time: "2025-01-01", values: { rsi: 55 } }],
              visualiseWith: [],
            },
            {
              signalName: "SMA",
              signalHash: 123,
              specification: [{ name: "period", value: "14" }],
              timeSeries: [{ time: "2025-01-01", values: { sma: 105 } }],
              visualiseWith: ["PriceSignal"],
            },
          ],
        },
      ];

      render(<ChartPanel {...defaultProps} tabs={tabsWithSignals} />);
      const charts = screen.getAllByTestId("candlestick-chart");
      // Main chart (with SMA) + 1 sub-chart (RSI)
      expect(charts).toHaveLength(2);
      expect(charts[0]).toHaveAttribute("data-overlays", "1");
      expect(charts[1]).toHaveAttribute("data-overlays", "1");
    });
  });

  describe("Auto-expand on zoom", () => {
    it("calls onAutoExpand with active ticker when chart fires onExpandNeeded", () => {
      const onAutoExpand = vi.fn();
      render(<ChartPanel {...defaultProps} onAutoExpand={onAutoExpand} />);

      // The mock CandlestickChart wires onExpandNeeded to onClick
      fireEvent.click(screen.getByTestId("candlestick-chart"));
      expect(onAutoExpand).toHaveBeenCalledWith("AAPL");
    });

    it("does not pass onExpandNeeded when no active chart", () => {
      const onAutoExpand = vi.fn();
      render(<ChartPanel {...defaultProps} activeTab={null} tabs={[]} onAutoExpand={onAutoExpand} />);
      expect(screen.queryByTestId("candlestick-chart")).toBeNull();
    });
  });

  describe("Vertically resizable charts", () => {
    it("renders a resize handle below the main chart", () => {
      render(<ChartPanel {...defaultProps} />);
      const handles = screen.getAllByRole("separator");
      expect(handles.length).toBeGreaterThanOrEqual(1);
      expect(handles[0]).toHaveAttribute("aria-label", "Resize chart");
    });

    it("renders resize handles for sub-charts", () => {
      const tabsWithSignals: ChartTab[] = [
        {
          ...defaultTabs[0],
          signals: [
            {
              signalName: "RSI",
              signalHash: 456,
              specification: [{ name: "period", value: "14" }],
              timeSeries: [{ time: "2025-01-01", values: { rsi: 55 } }],
              visualiseWith: [],
            },
          ],
        },
      ];

      render(<ChartPanel {...defaultProps} tabs={tabsWithSignals} />);
      const handles = screen.getAllByRole("separator");
      // 1 for main chart + 1 for sub-chart
      expect(handles).toHaveLength(2);
    });

    it("increases main chart height when dragging resize handle down", () => {
      render(<ChartPanel {...defaultProps} />);
      const handle = screen.getAllByRole("separator")[0];
      const chartWrapper = screen.getByTestId("candlestick-chart").parentElement!;
      expect(chartWrapper.style.height).toBe("400px");

      fireEvent.mouseDown(handle, { clientY: 400 });
      fireEvent.mouseMove(document, { clientY: 450 });
      fireEvent.mouseUp(document);

      expect(chartWrapper.style.height).toBe("450px");
    });

    it("decreases main chart height when dragging resize handle up", () => {
      render(<ChartPanel {...defaultProps} />);
      const handle = screen.getAllByRole("separator")[0];
      const chartWrapper = screen.getByTestId("candlestick-chart").parentElement!;

      fireEvent.mouseDown(handle, { clientY: 400 });
      fireEvent.mouseMove(document, { clientY: 300 });
      fireEvent.mouseUp(document);

      expect(chartWrapper.style.height).toBe("300px");
    });

    it("enforces minimum chart height of 100px", () => {
      render(<ChartPanel {...defaultProps} />);
      const handle = screen.getAllByRole("separator")[0];
      const chartWrapper = screen.getByTestId("candlestick-chart").parentElement!;

      fireEvent.mouseDown(handle, { clientY: 400 });
      fireEvent.mouseMove(document, { clientY: 0 });
      fireEvent.mouseUp(document);

      expect(chartWrapper.style.height).toBe("100px");
    });

    it("resizes sub-chart independently", () => {
      const tabsWithSignals: ChartTab[] = [
        {
          ...defaultTabs[0],
          signals: [
            {
              signalName: "RSI",
              signalHash: 456,
              specification: [{ name: "period", value: "14" }],
              timeSeries: [{ time: "2025-01-01", values: { rsi: 55 } }],
              visualiseWith: [],
            },
          ],
        },
      ];

      render(<ChartPanel {...defaultProps} tabs={tabsWithSignals} />);
      const handles = screen.getAllByRole("separator");
      const subChartHandle = handles[1];

      const charts = screen.getAllByTestId("candlestick-chart");
      const subChartWrapper = charts[1].parentElement!;
      expect(subChartWrapper.style.height).toBe("200px");

      fireEvent.mouseDown(subChartHandle, { clientY: 600 });
      fireEvent.mouseMove(document, { clientY: 700 });
      fireEvent.mouseUp(document);

      expect(subChartWrapper.style.height).toBe("300px");
    });

    it("stops resizing on mouseup", () => {
      render(<ChartPanel {...defaultProps} />);
      const handle = screen.getAllByRole("separator")[0];
      const chartWrapper = screen.getByTestId("candlestick-chart").parentElement!;

      fireEvent.mouseDown(handle, { clientY: 400 });
      fireEvent.mouseMove(document, { clientY: 450 });
      fireEvent.mouseUp(document);

      // Further mouse movement should not change height
      fireEvent.mouseMove(document, { clientY: 500 });
      expect(chartWrapper.style.height).toBe("450px");
    });

    it("resize handle has row-resize cursor", () => {
      render(<ChartPanel {...defaultProps} />);
      const handle = screen.getAllByRole("separator")[0];
      expect(handle.style.cursor).toBe("row-resize");
    });
  });

  describe("Time scale synchronization", () => {
    const tabsWithSubChart: ChartTab[] = [
      {
        ...defaultTabs[0],
        signals: [
          {
            signalName: "RSI",
            signalHash: 456,
            specification: [{ name: "period", value: "14" }],
            timeSeries: [{ time: "2025-01-01", values: { rsi: 55 } }],
            visualiseWith: [],
          },
        ],
      },
    ];

    it("passes onVisibleLogicalRangeChange to the main chart only", () => {
      render(<ChartPanel {...defaultProps} tabs={tabsWithSubChart} />);
      const charts = screen.getAllByTestId("candlestick-chart");
      expect(charts[0]).toHaveAttribute("data-has-range-callback", "true");
      expect(charts[1]).toHaveAttribute("data-has-range-callback", "false");
    });

    it("does not pass visibleLogicalRange to the main chart", () => {
      render(<ChartPanel {...defaultProps} tabs={tabsWithSubChart} />);
      const charts = screen.getAllByTestId("candlestick-chart");
      expect(charts[0]).toHaveAttribute("data-visible-range", "");
    });

    it("propagates main chart visible range to sub-charts when range changes", () => {
      render(<ChartPanel {...defaultProps} tabs={tabsWithSubChart} />);
      const charts = screen.getAllByTestId("candlestick-chart");

      // Sub-chart starts with no synced range
      expect(charts[1]).toHaveAttribute("data-visible-range", "");

      // Focus the main chart to trigger the mock's onVisibleLogicalRangeChange
      fireEvent.focus(charts[0]);

      // Sub-chart should now have the synced range
      expect(charts[1]).toHaveAttribute(
        "data-visible-range",
        JSON.stringify({ from: 10, to: 50 })
      );
    });

    it("syncs range to multiple sub-charts", () => {
      const tabsWithMultipleSubCharts: ChartTab[] = [
        {
          ...defaultTabs[0],
          signals: [
            {
              signalName: "RSI",
              signalHash: 456,
              specification: [{ name: "period", value: "14" }],
              timeSeries: [{ time: "2025-01-01", values: { rsi: 55 } }],
              visualiseWith: [],
            },
            {
              signalName: "MACD",
              signalHash: 101,
              specification: [{ name: "period", value: "12" }],
              timeSeries: [{ time: "2025-01-01", values: { macd: 1.5 } }],
              visualiseWith: [],
            },
          ],
        },
      ];

      render(<ChartPanel {...defaultProps} tabs={tabsWithMultipleSubCharts} />);
      const charts = screen.getAllByTestId("candlestick-chart");
      expect(charts).toHaveLength(3);

      // Trigger range change on main chart
      fireEvent.focus(charts[0]);

      // Both sub-charts should receive the synced range
      const expectedRange = JSON.stringify({ from: 10, to: 50 });
      expect(charts[1]).toHaveAttribute("data-visible-range", expectedRange);
      expect(charts[2]).toHaveAttribute("data-visible-range", expectedRange);
    });

    it("does not pass visibleLogicalRange when there are no sub-charts", () => {
      render(<ChartPanel {...defaultProps} />);
      const charts = screen.getAllByTestId("candlestick-chart");
      expect(charts).toHaveLength(1);
      expect(charts[0]).toHaveAttribute("data-has-range-callback", "true");
      expect(charts[0]).toHaveAttribute("data-visible-range", "");
    });
  });
});
