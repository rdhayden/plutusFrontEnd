"use client";

import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { ChartTab, Timeframe, TIMEFRAME_LABELS, AvailableSignal, SignalOverlay } from "@/lib/types";
import type { LogicalRange } from "lightweight-charts";
import CandlestickChart from "./CandlestickChart";
import type { CrosshairSyncData } from "./CandlestickChart";
import SignalConfigPanel from "./SignalConfigPanel";

interface ChartPane {
  label: string;
  overlays: SignalOverlay[];
}

function computeSubCharts(signals: SignalOverlay[]): ChartPane[] {
  // Panes: each independent signal (visualiseWith=[]) gets its own sub-chart.
  // Dependent signals (visualiseWith non-empty) join panes containing their targets.
  // "PriceSignal" is implicitly on the main chart, handled by the caller.
  const panes: ChartPane[] = [];
  const dependents: SignalOverlay[] = [];

  for (const signal of signals) {
    if (signal.visualiseWith.length === 0) {
      panes.push({ label: signal.signalName, overlays: [signal] });
    } else if (signal.visualiseWith.includes("PriceSignal")) {
      // Handled by main chart - skip here, but also check sub-charts
      // for multi-target signals
      for (const pane of panes) {
        if (signal.visualiseWith.some((name) =>
          pane.overlays.some((o) => o.signalName === name)
        )) {
          pane.overlays.push(signal);
        }
      }
    } else {
      dependents.push(signal);
    }
  }

  for (const signal of dependents) {
    let placed = false;
    for (const pane of panes) {
      if (signal.visualiseWith.some((name) =>
        pane.overlays.some((o) => o.signalName === name)
      )) {
        pane.overlays.push(signal);
        placed = true;
      }
    }
    if (!placed) {
      panes.push({ label: signal.signalName, overlays: [signal] });
    }
  }

  return panes;
}

function getMainChartOverlays(signals: SignalOverlay[]): SignalOverlay[] {
  // Signals that visualise with PriceSignal (or with other signals already on the main chart)
  const mainSignalNames = new Set<string>(["PriceSignal"]);
  const result: SignalOverlay[] = [];

  // Multiple passes to resolve transitive dependencies
  let changed = true;
  while (changed) {
    changed = false;
    for (const signal of signals) {
      if (result.includes(signal)) continue;
      if (signal.visualiseWith.some((name) => mainSignalNames.has(name))) {
        result.push(signal);
        mainSignalNames.add(signal.signalName);
        changed = true;
      }
    }
  }

  return result;
}

const TIMEFRAMES = Object.keys(TIMEFRAME_LABELS) as Timeframe[];

const DEFAULT_MAIN_HEIGHT = 400;
const DEFAULT_SUB_HEIGHT = 200;
const MIN_CHART_HEIGHT = 100;

function ResizeHandle({ onDrag }: { onDrag: (deltaY: number) => void }) {
  const draggingRef = useRef(false);
  const lastYRef = useRef(0);
  const onDragRef = useRef(onDrag);
  onDragRef.current = onDrag;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!draggingRef.current) return;
      const delta = e.clientY - lastYRef.current;
      lastYRef.current = e.clientY;
      onDragRef.current(delta);
    };

    const handleMouseUp = () => {
      if (draggingRef.current) {
        draggingRef.current = false;
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      aria-label="Resize chart"
      onMouseDown={(e) => {
        e.preventDefault();
        draggingRef.current = true;
        lastYRef.current = e.clientY;
        document.body.style.cursor = "row-resize";
        document.body.style.userSelect = "none";
      }}
      style={{
        height: "12px",
        cursor: "row-resize",
        position: "relative",
        zIndex: 10,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "1px",
          background: "var(--color-border)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "40px",
          height: "4px",
          borderRadius: "2px",
          background: "var(--color-border)",
        }}
      />
    </div>
  );
}

interface ChartPanelProps {
  tabs: ChartTab[];
  activeTab: string | null;
  onTabSelect: (ticker: string) => void;
  onTimeframeChange: (ticker: string, timeframe: Timeframe) => void;
  onTimespanChange: (ticker: string, direction: "expand" | "shrink") => void;
  onAddSignal: (
    ticker: string,
    signalName: string,
    specification: { name: string; value: string }[]
  ) => Promise<string | null>;
  onAutoExpand: (ticker: string) => void;
  onTabClose: (ticker: string) => void;
  availableSignals: AvailableSignal[];
  selectedSignal: string;
  onSignalChange: (signal: string) => void;
}

export default function ChartPanel({
  tabs,
  activeTab,
  onTabSelect,
  onTimeframeChange,
  onTimespanChange,
  onAddSignal,
  onAutoExpand,
  onTabClose,
  availableSignals,
  selectedSignal,
  onSignalChange,
}: ChartPanelProps) {
  const [showConfigPanel, setShowConfigPanel] = useState(false);
  const [duplicateMessage, setDuplicateMessage] = useState<string | null>(null);
  const [mainChartHeight, setMainChartHeight] = useState(DEFAULT_MAIN_HEIGHT);
  const [subChartHeights, setSubChartHeights] = useState<Record<string, number>>({});
  const [sharedLogicalRange, setSharedLogicalRange] = useState<LogicalRange | null>(null);
  const [sharedCrosshairX, setSharedCrosshairX] = useState<CrosshairSyncData | null>(null);

  const activeChart = tabs.find((t) => t.ticker === activeTab);

  const selectedSignalDef = availableSignals.find(
    (s) => s.name === selectedSignal
  );

  const handleSignalChange = (value: string) => {
    onSignalChange(value);
    if (value) {
      setShowConfigPanel(true);
      setDuplicateMessage(null);
    } else {
      setShowConfigPanel(false);
    }
  };

  const handleSubmitSignal = async (
    signalName: string,
    specification: { name: string; value: string }[]
  ) => {
    if (!activeChart) return;
    setDuplicateMessage(null);
    const errorMsg = await onAddSignal(activeChart.ticker, signalName, specification);
    if (errorMsg) {
      setDuplicateMessage(errorMsg);
    } else {
      setShowConfigPanel(false);
      onSignalChange("");
    }
  };

  const handleCloseConfig = () => {
    setShowConfigPanel(false);
    setDuplicateMessage(null);
  };

  const handleExpandNeeded = useCallback(() => {
    if (activeChart) onAutoExpand(activeChart.ticker);
  }, [onAutoExpand, activeChart]);

  const mainOverlays = useMemo(
    () => getMainChartOverlays(activeChart?.signals ?? []),
    [activeChart?.signals]
  );

  const subCharts = useMemo(
    () => computeSubCharts(activeChart?.signals ?? []),
    [activeChart?.signals]
  );

  // Compute the union of all time points (candle data + all signal overlays)
  // so that every chart has the same bar count and time-to-pixel mapping.
  const allTimePoints = useMemo(() => {
    const timeSet = new Set<string | number>();
    for (const d of activeChart?.data ?? []) {
      timeSet.add(d.time);
    }
    for (const signal of activeChart?.signals ?? []) {
      for (const pt of signal.timeSeries) {
        timeSet.add(pt.time);
      }
    }
    return Array.from(timeSet).sort((a, b) => {
      if (typeof a === "number" && typeof b === "number") return a - b;
      return String(a).localeCompare(String(b));
    });
  }, [activeChart?.data, activeChart?.signals]);

  const handleMainResize = useCallback((delta: number) => {
    setMainChartHeight((h) => Math.max(MIN_CHART_HEIGHT, h + delta));
  }, []);

  const handleSubResize = useCallback((label: string, delta: number) => {
    setSubChartHeights((prev) => ({
      ...prev,
      [label]: Math.max(MIN_CHART_HEIGHT, (prev[label] ?? DEFAULT_SUB_HEIGHT) + delta),
    }));
  }, []);

  const handleMainVisibleRangeChange = useCallback((range: LogicalRange | null) => {
    setSharedLogicalRange(range);
  }, []);

  const handleCrosshairXChange = useCallback((xFraction: CrosshairSyncData | null) => {
    setSharedCrosshairX(xFraction);
  }, []);

  if (!activeChart) {
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--color-text-muted)",
          fontSize: "var(--body-1-size)",
        }}
      >
        Search for a ticker to view its chart
      </div>
    );
  }

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* Ticker Tabs */}
      <div
        style={{
          height: "48px",
          borderBottom: "1px solid var(--color-border)",
          display: "flex",
          alignItems: "center",
          padding: "0 var(--inset-s)",
          gap: 0,
          background: "var(--color-bg-secondary)",
        }}
      >
        {tabs.map((tab) => (
          <div
            key={tab.ticker}
            style={{
              display: "flex",
              alignItems: "center",
              borderBottom:
                tab.ticker === activeTab
                  ? "2px solid var(--color-primary)"
                  : "2px solid transparent",
              marginBottom: "-1px",
            }}
          >
            <button
              onClick={() => onTabSelect(tab.ticker)}
              style={{
                padding: "var(--inset-xs) var(--space-xs) var(--inset-xs) var(--inset-s)",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontWeight: tab.ticker === activeTab ? 600 : 400,
                fontSize: "var(--body-1-size)",
                color:
                  tab.ticker === activeTab
                    ? "var(--color-primary)"
                    : "var(--color-text-secondary)",
                transition: "color 0.15s",
              }}
            >
              {tab.ticker}
            </button>
            <button
              aria-label={`Close ${tab.ticker}`}
              onClick={(e) => { e.stopPropagation(); onTabClose(tab.ticker); }}
              style={{
                padding: "0 var(--inset-xs) 0 0",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                color: "var(--color-text-muted)",
                fontSize: "14px",
                lineHeight: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {/* Chart Header */}
      <div
        style={{
          padding: "var(--inset-s) var(--inset-m)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid var(--color-border-light)",
        }}
      >
        <div>
          <div className="heading-2">{activeChart.name}</div>
          <div
            className="body-1"
            style={{ color: "var(--color-text-muted)", marginTop: "2px" }}
          >
            {activeChart.ticker} &bull; $
            {activeChart.lastPrice.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
        </div>

        <div style={{ display: "flex", gap: "var(--space-s)", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-xs)" }}>
            <button
              aria-label="Expand timespan"
              onClick={() => onTimespanChange(activeChart.ticker, "expand")}
              style={{
                width: "28px",
                height: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-m)",
                background: "var(--color-bg)",
                color: "var(--color-text-primary)",
                cursor: "pointer",
                fontSize: "16px",
                lineHeight: 1,
              }}
            >
              +
            </button>
            <button
              aria-label="Shrink timespan"
              onClick={() => onTimespanChange(activeChart.ticker, "shrink")}
              style={{
                width: "28px",
                height: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-m)",
                background: "var(--color-bg)",
                color: "var(--color-text-primary)",
                cursor: "pointer",
                fontSize: "16px",
                lineHeight: 1,
              }}
            >
              -
            </button>
            <span className="body-1" style={{ color: "var(--color-text-secondary)" }}>
              Timeframe:
            </span>
            <select
              value={activeChart.timeframe}
              onChange={(e) =>
                onTimeframeChange(activeChart.ticker, e.target.value as Timeframe)
              }
              style={{
                padding: "var(--inset-xs) 12px",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-m)",
                fontSize: "var(--body-1-size)",
                color: "var(--color-text-primary)",
                background: "var(--color-bg)",
                cursor: "pointer",
                appearance: "none",
                WebkitAppearance: "none",
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 8px center",
                paddingRight: "28px",
              }}
            >
              {TIMEFRAMES.map((tf) => (
                <option key={tf} value={tf}>
                  {TIMEFRAME_LABELS[tf]}
                </option>
              ))}
            </select>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-xs)" }}>
            <span className="body-1" style={{ color: "var(--color-text-secondary)" }}>
              Add Signal:
            </span>
            <select
              value={selectedSignal}
              onChange={(e) => handleSignalChange(e.target.value)}
              style={{
                padding: "var(--inset-xs) 12px",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-m)",
                fontSize: "var(--body-1-size)",
                color: "var(--color-text-primary)",
                background: "var(--color-bg)",
                cursor: "pointer",
                appearance: "none",
                WebkitAppearance: "none",
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 8px center",
                paddingRight: "28px",
              }}
            >
              <option value="">-- Select --</option>
              {availableSignals.map((signal) => (
                <option key={signal.name} value={signal.name}>
                  {signal.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Scrollable chart area */}
      <div style={{ flex: 1, overflowY: "auto", minHeight: 0 }}>
        {/* Signal Config Panel */}
        {showConfigPanel && selectedSignalDef && (
          <SignalConfigPanel
            signal={selectedSignalDef}
            defaultTicker={activeChart.ticker}
            defaultExchange={activeChart.exchange}
            onSubmit={handleSubmitSignal}
            onClose={handleCloseConfig}
            duplicateMessage={duplicateMessage}
          />
        )}

        {/* Main Chart */}
        <div style={{ padding: "var(--inset-m)", height: `${mainChartHeight}px`, minHeight: `${MIN_CHART_HEIGHT}px`, overflow: "hidden" }}>
          <CandlestickChart
            data={activeChart.data}
            timeframe={activeChart.timeframe}
            overlays={mainOverlays}
            onExpandNeeded={handleExpandNeeded}
            onVisibleLogicalRangeChange={handleMainVisibleRangeChange}
            onCrosshairXChange={handleCrosshairXChange}
            crosshairXFraction={sharedCrosshairX}
            referenceTimePoints={allTimePoints}
          />
        </div>

        <ResizeHandle onDrag={handleMainResize} />

        {/* Sub-charts for independent signals */}
        {subCharts.map((pane) => (
          <div key={pane.label} style={{ marginTop: "var(--space-m)" }}>
            <div
              style={{
                height: `${subChartHeights[pane.label] ?? DEFAULT_SUB_HEIGHT}px`,
                minHeight: `${MIN_CHART_HEIGHT}px`,
                padding: "0 var(--inset-m) var(--inset-m)",
                overflow: "hidden",
              }}
            >
              <div
                className="body-1"
                style={{
                  color: "var(--color-text-secondary)",
                  padding: "var(--inset-xs) 0",
                  fontSize: "12px",
                }}
              >
                {pane.label}
              </div>
              <CandlestickChart
                data={[]}
                timeframe={activeChart.timeframe}
                overlays={pane.overlays}
                visibleLogicalRange={sharedLogicalRange}
                onCrosshairXChange={handleCrosshairXChange}
                crosshairXFraction={sharedCrosshairX}
                referenceTimePoints={allTimePoints}

              />
            </div>
            <ResizeHandle onDrag={(delta) => handleSubResize(pane.label, delta)} />
          </div>
        ))}

        {/* Bottom spacing */}
        <div style={{ height: "var(--space-xl)", flexShrink: 0 }} />
      </div>
    </div>
  );
}
