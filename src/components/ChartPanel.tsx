"use client";

import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { ChartTab, Timeframe, TIMEFRAME_LABELS, AvailableSignal, SignalOverlay, HorizontalLineDrawing, CandleData } from "@/lib/types";

const EMPTY_CANDLE_DATA: CandleData[] = [];
import type { LogicalRange } from "lightweight-charts";
import CandlestickChart from "./CandlestickChart";
import type { CrosshairSyncData } from "./CandlestickChart";
import VolumeChart from "./VolumeChart";
import SignalConfigPanel from "./SignalConfigPanel";
import styles from "./ChartTabBar.module.css";
import panelStyles from "./ChartPanel.module.css";

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
const DEFAULT_VOLUME_HEIGHT = 120;
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
      className={panelStyles.resizeDivider}
    >
      <div className={panelStyles.resizeDividerLine} />
      <div
        className={panelStyles.resizeDividerHandle}
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
  onRemoveSubChart: (tabId: string, signalHashes: number[]) => void;
  availableSignals: AvailableSignal[];
  selectedSignal: string;
  onSignalChange: (signal: string) => void;
  drawingsPerTab: Record<string, HorizontalLineDrawing[]>;
  onDrawingsChange: (tabId: string, drawings: HorizontalLineDrawing[]) => void;
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
  onRemoveSubChart,
  availableSignals,
  selectedSignal,
  onSignalChange,
  drawingsPerTab,
  onDrawingsChange,
}: ChartPanelProps) {
  const [showConfigPanel, setShowConfigPanel] = useState(false);
  const [duplicateMessage, setDuplicateMessage] = useState<string | null>(null);
  const [mainChartHeight, setMainChartHeight] = useState(DEFAULT_MAIN_HEIGHT);

  // Tab overflow: measure how many tabs fit at minimum width
  const PILL_RESERVE = 44;
  const MIN_TAB_WIDTH = 52;
  const tabBarRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(tabs.length);

  useEffect(() => {
    const el = tabBarRef.current;
    if (!el) return;
    const measure = () => {
      const width = el.clientWidth;
      // clientWidth is 0 in JSDOM / before layout — show all tabs
      if (width === 0) {
        setVisibleCount(tabs.length);
        return;
      }
      const totalFit = Math.floor(width / MIN_TAB_WIDTH);
      if (tabs.length <= totalFit) {
        setVisibleCount(tabs.length);
      } else {
        setVisibleCount(Math.max(1, Math.floor((width - PILL_RESERVE) / MIN_TAB_WIDTH)));
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [tabs.length]);

  // Compute visible window: preserve tab order, shift so active tab is last visible slot
  const activeIndex = Math.max(0, tabs.findIndex((t) => t.id === activeTab));
  const windowEnd = Math.min(tabs.length, Math.max(visibleCount, activeIndex + 1));
  const windowStart = Math.max(0, windowEnd - visibleCount);
  const visibleTabs = tabs.slice(windowStart, windowEnd);
  const hiddenTabs = [...tabs.slice(0, windowStart), ...tabs.slice(windowEnd)];
  const [volumeChartHeight, setVolumeChartHeight] = useState(DEFAULT_VOLUME_HEIGHT);
  const [subChartHeights, setSubChartHeights] = useState<Record<string, number>>({});
  const [sharedLogicalRange, setSharedLogicalRange] = useState<LogicalRange | null>(null);
  const [sharedCrosshairX, setSharedCrosshairX] = useState<CrosshairSyncData | null>(null);
  const [volumeVisiblePerTab, setVolumeVisiblePerTab] = useState<Record<string, boolean>>({});

  // +N overflow pill dropdown
  const pillBtnRef = useRef<HTMLButtonElement>(null);
  const pillMenuRef = useRef<HTMLDivElement>(null);
  const [pillOpen, setPillOpen] = useState(false);
  const [pillPos, setPillPos] = useState({ top: 0, right: 0 });

  useEffect(() => {
    if (!pillOpen) return;
    const onDown = (e: MouseEvent) => {
      if (
        pillMenuRef.current && !pillMenuRef.current.contains(e.target as Node) &&
        pillBtnRef.current && !pillBtnRef.current.contains(e.target as Node)
      ) {
        setPillOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setPillOpen(false); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [pillOpen]);

  const handlePillClick = () => {
    if (!pillBtnRef.current) return;
    const rect = pillBtnRef.current.getBoundingClientRect();
    setPillPos({ top: rect.bottom, right: window.innerWidth - rect.right });
    setPillOpen((prev) => !prev);
  };

  const handleHiddenTabSelect = (tabId: string) => {
    setPillOpen(false);
    onTabSelect(tabId);
  };

  const activeChart = tabs.find((t) => t.id === activeTab);

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
    const errorMsg = await onAddSignal(activeChart.id, signalName, specification);
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

  const hasVolume = (activeChart?.data ?? []).some((d) => (d.volume ?? 0) > 0);
  const isVolumeVisible = hasVolume && (volumeVisiblePerTab[activeTab ?? ""] ?? true);

  const handleToggleVolume = useCallback(() => {
    setVolumeVisiblePerTab((prev) => ({
      ...prev,
      [activeTab ?? ""]: !(prev[activeTab ?? ""] ?? true),
    }));
  }, [activeTab]);

  const handleAddDrawing = (type: string) => {
    if (!activeChart || type !== "horizontal-line") return;
    const data = activeChart.data;
    let midPrice = activeChart.lastPrice;
    if (data.length > 0) {
      const maxHigh = Math.max(...data.map((d) => d.high));
      const minLow = Math.min(...data.map((d) => d.low));
      midPrice = (maxHigh + minLow) / 2;
    }
    const newLine: HorizontalLineDrawing = { id: `hline-${Date.now()}`, price: midPrice };
    const current = drawingsPerTab[activeChart.id] ?? [];
    onDrawingsChange(activeChart.id, [...current, newLine]);
  };

  const handleDrawingPriceChange = useCallback((id: string, price: number) => {
    if (!activeChart) return;
    const current = drawingsPerTab[activeChart.id] ?? [];
    onDrawingsChange(activeChart.id, current.map((d) => d.id === id ? { ...d, price } : d));
  }, [activeChart, drawingsPerTab, onDrawingsChange]);

  const handleDrawingDelete = useCallback((id: string) => {
    if (!activeChart) return;
    const current = drawingsPerTab[activeChart.id] ?? [];
    onDrawingsChange(activeChart.id, current.filter((d) => d.id !== id));
  }, [activeChart, drawingsPerTab, onDrawingsChange]);

  const handleExpandNeeded = useCallback(() => {
    if (activeChart) onAutoExpand(activeChart.id);
  }, [onAutoExpand, activeChart]);

  const handleRemoveMainOverlay = useCallback((signalHash: number) => {
    if (activeChart) onRemoveSubChart(activeChart.id, [signalHash]);
  }, [activeChart, onRemoveSubChart]);

  const activeDrawings = drawingsPerTab[activeTab ?? ""] ?? [];

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

  const handleVolumeResize = useCallback((delta: number) => {
    setVolumeChartHeight((h) => Math.max(MIN_CHART_HEIGHT, h + delta));
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
      <div className={panelStyles.emptyState}>
        Search for a ticker to view its chart
      </div>
    );
  }

  return (
    <div className={panelStyles.panelRoot}>
      {/* Ticker Tabs */}
      <div className={styles.tabBar} ref={tabBarRef}>
        {visibleTabs.map((tab) => (
          <div
            key={tab.id}
            className={`${styles.tab}${tab.id === activeTab ? ` ${styles.tabActive}` : ""}`}
          >
            <button
              onClick={() => onTabSelect(tab.id)}
              className={`${styles.tabBtn}${tab.id === activeTab ? ` ${styles.tabBtnActive}` : ""}`}
            >
              <span className={`${styles.ticker}${tab.id === activeTab ? ` ${styles.tickerActive}` : ""}`}>
                {tab.ticker}
              </span>
            </button>
            <button
              aria-label={`Close ${tab.ticker}`}
              onClick={(e) => { e.stopPropagation(); onTabClose(tab.id); }}
              className={styles.closeBtn}
            >
              ×
            </button>
          </div>
        ))}
        {hiddenTabs.length > 0 && (
          <>
            <button
              ref={pillBtnRef}
              className={styles.pill}
              onClick={handlePillClick}
              aria-label={`${hiddenTabs.length} more tabs`}
            >
              +{hiddenTabs.length}
            </button>
            {pillOpen && (
              <div
                ref={pillMenuRef}
                className={styles.pillDropdown}
                style={{ top: pillPos.top, right: pillPos.right }}
              >
                {hiddenTabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={styles.pillDropdownItem}
                    onClick={() => handleHiddenTabSelect(tab.id)}
                  >
                    {tab.ticker}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Chart Header */}
      <div className={panelStyles.chartHeader}>
        <div>
          <div className="heading-2">{activeChart.name}</div>
          <div className={`body-1 ${panelStyles.chartHeaderSubtitle}`}>
            {activeChart.ticker} &bull; $
            {activeChart.lastPrice.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
        </div>

        <div className={panelStyles.chartControls}>
          {hasVolume && (
            <button
              aria-label={isVolumeVisible ? "Hide volume" : "Show volume"}
              onClick={handleToggleVolume}
              className={`${panelStyles.volumeBtn}${isVolumeVisible ? ` ${panelStyles.volumeBtnActive}` : ""}`}
            >
              Vol
            </button>
          )}

          <div className={panelStyles.controlGroup}>
            <button aria-label="Expand timespan" onClick={() => onTimespanChange(activeChart.id, "expand")} className={panelStyles.iconBtn}>+</button>
            <button aria-label="Shrink timespan" onClick={() => onTimespanChange(activeChart.id, "shrink")} className={panelStyles.iconBtn}>-</button>
            <span className={`body-1 ${panelStyles.controlLabel}`}>Timeframe:</span>
            <select
              value={activeChart.timeframe}
              onChange={(e) => onTimeframeChange(activeChart.id, e.target.value as Timeframe)}
              className={panelStyles.select}
            >
              {TIMEFRAMES.map((tf) => (
                <option key={tf} value={tf}>{TIMEFRAME_LABELS[tf]}</option>
              ))}
            </select>
          </div>

          <div className={panelStyles.controlGroup}>
            <span className={`body-1 ${panelStyles.controlLabel}`}>Add Signal:</span>
            <select value={selectedSignal} onChange={(e) => handleSignalChange(e.target.value)} className={panelStyles.select}>
              <option value="">-- Select --</option>
              {availableSignals.map((signal) => (
                <option key={signal.name} value={signal.name}>{signal.name}</option>
              ))}
            </select>
          </div>

          <div className={panelStyles.controlGroup}>
            <span className={`body-1 ${panelStyles.controlLabel}`}>Drawings:</span>
            <select
              value=""
              onChange={(e) => { if (e.target.value) handleAddDrawing(e.target.value); }}
              className={panelStyles.select}
            >
              <option value="">-- Select --</option>
              <option value="horizontal-line">Horizontal Line</option>
            </select>
          </div>
        </div>
      </div>

      {/* Scrollable chart area */}
      <div className={panelStyles.chartScrollArea}>
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
        <div className={panelStyles.mainChartWrapper} style={{ height: `${mainChartHeight}px`, minHeight: `${MIN_CHART_HEIGHT}px` }}>
          <CandlestickChart
            data={activeChart.data}
            timeframe={activeChart.timeframe}
            overlays={mainOverlays}
            onExpandNeeded={handleExpandNeeded}
            onVisibleLogicalRangeChange={handleMainVisibleRangeChange}
            onCrosshairXChange={handleCrosshairXChange}
            crosshairXFraction={sharedCrosshairX}
            referenceTimePoints={allTimePoints}
            drawings={activeDrawings}
            onDrawingPriceChange={handleDrawingPriceChange}
            onDrawingDelete={handleDrawingDelete}
            onRemoveOverlay={handleRemoveMainOverlay}
          />
        </div>

        <ResizeHandle onDrag={handleMainResize} />

        {/* Volume sub-chart */}
        {isVolumeVisible && (
          <div className={panelStyles.volumeWrapper} style={{ height: `${volumeChartHeight}px`, minHeight: `${MIN_CHART_HEIGHT}px` }}>
            <div className={panelStyles.subChartHeader}>
              <span className={`body-1 ${panelStyles.subChartLabel}`}>Volume</span>
            </div>
            <VolumeChart
              data={activeChart.data}
              timeframe={activeChart.timeframe}
              visibleLogicalRange={sharedLogicalRange}
              onCrosshairXChange={handleCrosshairXChange}
              crosshairXFraction={sharedCrosshairX}
              referenceTimePoints={allTimePoints}
            />
          </div>
        )}

        {isVolumeVisible && <ResizeHandle onDrag={handleVolumeResize} />}

        {/* Sub-charts for independent signals */}
        {subCharts.map((pane) => (
          <div key={pane.label} className={panelStyles.subChartSection}>
            <div
              className={panelStyles.subChartWrapper}
              style={{ height: `${subChartHeights[pane.label] ?? DEFAULT_SUB_HEIGHT}px`, minHeight: `${MIN_CHART_HEIGHT}px` }}
            >
              <div className={panelStyles.subChartHeader}>
                <span className={`body-1 ${panelStyles.subChartLabel}`}>{pane.label}</span>
                <button
                  aria-label={`Remove ${pane.label} subchart`}
                  onClick={() => onRemoveSubChart(activeChart.id, pane.overlays.map((o) => o.signalHash))}
                  className={panelStyles.subChartRemoveBtn}
                >×</button>
              </div>
              <CandlestickChart
                data={EMPTY_CANDLE_DATA}
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
        <div className={panelStyles.bottomSpacer} />
      </div>
    </div>
  );
}
