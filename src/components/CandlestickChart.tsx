"use client";

import { useEffect, useRef, useState } from "react";
import { createChart, CandlestickSeries, LineSeries, ISeriesApi, LogicalRange, Time } from "lightweight-charts";
import type { MouseEventParams } from "lightweight-charts";
import { CandleData, Timeframe, SignalOverlay, HorizontalLineDrawing } from "@/lib/types";
import styles from "./CandlestickChart.module.css";

/** Crosshair sync data: raw pixel x for line positioning, time for data lookup. */
export interface CrosshairSyncData {
  x: number;
  time: Time;
}

/** Fixed right price scale width so all charts have identical time-scale pixel widths. */
const PRICE_SCALE_MIN_WIDTH = 80;

const OVERLAY_COLORS = [
  "hsl(215, 80%, 55%)",
  "hsl(30, 80%, 55%)",
  "hsl(280, 60%, 55%)",
  "hsl(170, 60%, 45%)",
  "hsl(340, 70%, 55%)",
  "hsl(50, 80%, 50%)",
];

interface CandlestickChartProps {
  data: CandleData[];
  timeframe?: Timeframe;
  overlays?: SignalOverlay[];
  onExpandNeeded?: () => void;
  onVisibleLogicalRangeChange?: (range: LogicalRange | null) => void;
  visibleLogicalRange?: LogicalRange | null;
  onCrosshairXChange?: (xFraction: CrosshairSyncData | null) => void;
  crosshairXFraction?: CrosshairSyncData | null;
  /** All time points across all charts, used to unify the time scale */
  referenceTimePoints?: (string | number)[];
  drawings?: HorizontalLineDrawing[];
  onDrawingPriceChange?: (id: string, price: number) => void;
  onDrawingDelete?: (id: string) => void;
  onRemoveOverlay?: (signalHash: number) => void;
}

const INTRADAY_TIMEFRAMES = new Set<Timeframe>(["TICK", "SECOND", "MINUTE", "HOUR"]);
const EMPTY_OVERLAYS: SignalOverlay[] = [];

export default function CandlestickChart({
  data,
  timeframe = "DAY",
  overlays = EMPTY_OVERLAYS,
  onExpandNeeded,
  onVisibleLogicalRangeChange,
  visibleLogicalRange,
  onCrosshairXChange,
  crosshairXFraction,
  referenceTimePoints,
  drawings,
  onDrawingPriceChange,
  onDrawingDelete,
  onRemoveOverlay,
}: CandlestickChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const syncLineRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<ReturnType<typeof createChart> | null>(null);
  const candlestickSeriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);
  const expandingRef = useRef(false);
  const suppressRef = useRef(false);
  const syncingRef = useRef(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const suppressTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onExpandNeededRef = useRef(onExpandNeeded);
  onExpandNeededRef.current = onExpandNeeded;
  const onVisibleLogicalRangeChangeRef = useRef(onVisibleLogicalRangeChange);
  onVisibleLogicalRangeChangeRef.current = onVisibleLogicalRangeChange;
  const onCrosshairXChangeRef = useRef(onCrosshairXChange);
  onCrosshairXChangeRef.current = onCrosshairXChange;
  const isCrosshairSourceRef = useRef(false);
  const overlayLookupRef = useRef<{ label: string; color: string; byTime: Map<string, number> }[]>([]);
  const signalSeriesRef = useRef<{ series: ISeriesApi<"Line">; byTime: Map<string, number>; signalHash: number; signalName: string }[]>([]);
  const onRemoveOverlayRef = useRef(onRemoveOverlay);
  onRemoveOverlayRef.current = onRemoveOverlay;

  // Drawings
  const drawingsRef = useRef<HorizontalLineDrawing[]>([]);
  drawingsRef.current = drawings ?? [];
  const [lineYPositions, setLineYPositions] = useState<Record<string, number | null>>({});
  const updateLinePositionsRef = useRef<(() => void) | null>(null);
  const draggingIdRef = useRef<string | null>(null);
  const onDrawingPriceChangeRef = useRef(onDrawingPriceChange);
  onDrawingPriceChangeRef.current = onDrawingPriceChange;
  const onDrawingDeleteRef = useRef(onDrawingDelete);
  onDrawingDeleteRef.current = onDrawingDelete;
  const [contextMenu, setContextMenu] = useState<{ id: string; x: number; y: number } | null>(null);
  const [signalContextMenu, setSignalContextMenu] = useState<{ signalHash: number; signalName: string; x: number; y: number } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chart = createChart(containerRef.current, {
      autoSize: true,
      layout: {
        background: { color: "#ffffff" },
        textColor: "hsl(220, 10%, 40%)",
        fontFamily: "Inter, system-ui, sans-serif",
        fontSize: 12,
      },
      grid: {
        vertLines: { color: "hsl(220, 13%, 94%)" },
        horzLines: { color: "hsl(220, 13%, 94%)" },
      },
      crosshair: {
        vertLine: { labelBackgroundColor: "hsl(215, 80%, 40%)" },
        horzLine: { labelBackgroundColor: "hsl(215, 80%, 40%)" },
      },
      rightPriceScale: {
        borderColor: "hsl(220, 13%, 90%)",
        minimumWidth: PRICE_SCALE_MIN_WIDTH,
        scaleMargins: { top: 0.1, bottom: 0.1 },
      },
      timeScale: {
        borderColor: "hsl(220, 13%, 90%)",
        timeVisible: INTRADAY_TIMEFRAMES.has(timeframe),
        secondsVisible: timeframe === "SECOND" || timeframe === "TICK",
      },
    });

    chartRef.current = chart;

    const candlestickSeries = chart.addSeries(CandlestickSeries, {
      upColor: "hsl(145, 65%, 45%)",
      downColor: "hsl(0, 70%, 55%)",
      borderUpColor: "hsl(145, 65%, 40%)",
      borderDownColor: "hsl(0, 70%, 50%)",
      wickUpColor: "hsl(145, 65%, 40%)",
      wickDownColor: "hsl(0, 70%, 50%)",
    });

    candlestickSeriesRef.current = candlestickSeries;

    if (data.length > 0) {
      const chartData = data.map((d) => ({
        time: d.time as Time,
        open: d.open,
        high: d.high,
        low: d.low,
        close: d.close,
      }));
      candlestickSeries.setData(chartData);
    }

    const updateLinePositions = () => {
      const positions: Record<string, number | null> = {};
      for (const d of drawingsRef.current) {
        const y = candlestickSeries.priceToCoordinate(d.price);
        positions[d.id] = y !== null ? (y as number) : null;
      }
      setLineYPositions({ ...positions });
    };
    updateLinePositionsRef.current = updateLinePositions;

    const handleVisibleRangeChange = (logicalRange: LogicalRange | null) => {
      updateLinePositions();

      if (syncingRef.current) return;

      if (onVisibleLogicalRangeChangeRef.current) {
        onVisibleLogicalRangeChangeRef.current(logicalRange);
      }

      if (!logicalRange || expandingRef.current || suppressRef.current || !candlestickSeriesRef.current) return;

      const barsInfo = candlestickSeriesRef.current.barsInLogicalRange(logicalRange);
      if (barsInfo && barsInfo.barsBefore < 0) {
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => {
          if (onExpandNeededRef.current && !expandingRef.current) {
            expandingRef.current = true;
            onExpandNeededRef.current();
          }
        }, 500);
      }
    };

    chart.timeScale().subscribeVisibleLogicalRangeChange(handleVisibleRangeChange);

    const lineSeriesMap: { series: ISeriesApi<"Line">; label: string; color: string }[] = [];
    overlayLookupRef.current = [];
    signalSeriesRef.current = [];

    for (let i = 0; i < overlays.length; i++) {
      const overlay = overlays[i];
      if (overlay.timeSeries.length === 0) continue;

      const valueKeys = Object.keys(overlay.timeSeries[0].values);
      for (let k = 0; k < valueKeys.length; k++) {
        const key = valueKeys[k];
        const colorIndex = (i * valueKeys.length + k) % OVERLAY_COLORS.length;
        const color = OVERLAY_COLORS[colorIndex];
        const lineSeries = chart.addSeries(LineSeries, {
          color,
          lineWidth: 2,
        });

        const lineData = overlay.timeSeries.map((pt) => ({
          time: pt.time as Time,
          value: pt.values[key] ?? 0,
        }));
        lineSeries.setData(lineData);

        const label = valueKeys.length > 1
          ? `${overlay.signalName} ${key}`
          : overlay.signalName;
        lineSeriesMap.push({ series: lineSeries, label, color });

        const byTime = new Map<string, number>();
        for (const pt of overlay.timeSeries) {
          byTime.set(String(pt.time), pt.values[key] ?? 0);
        }
        overlayLookupRef.current.push({ label, color, byTime });
        signalSeriesRef.current.push({ series: lineSeries, byTime, signalHash: overlay.signalHash, signalName: overlay.signalName });
      }
    }

    // Add a reference series with all time points to unify the time scale across
    // charts. Placed on a separate hidden price scale so its value=0 data points
    // don't distort the y-axis range of the visible series.
    if (referenceTimePoints && referenceTimePoints.length > 0) {
      const refSeries = chart.addSeries(LineSeries, {
        color: "transparent",
        lastValueVisible: false,
        priceLineVisible: false,
        crosshairMarkerVisible: false,
        priceScaleId: "_ref",
      });
      refSeries.priceScale().applyOptions({ visible: false });
      refSeries.setData(referenceTimePoints.map((t) => ({ time: t as Time, value: 0 })));
    }

    // Tooltip on crosshair move
    const tooltip = tooltipRef.current;
    const syncLine = syncLineRef.current;
    const handleCrosshairMove = (param: MouseEventParams) => {
      if (!tooltip) return;

      // Broadcast raw pixel x and time to other charts
      if (onCrosshairXChangeRef.current) {
        isCrosshairSourceRef.current = true;
        if (param.point && param.point.x >= 0 && param.time) {
          onCrosshairXChangeRef.current({ x: param.point.x, time: param.time as Time });
        } else {
          onCrosshairXChangeRef.current(null);
        }
      }

      // When this chart is the source, hide the sync line (built-in crosshair is active)
      if (syncLine) {
        syncLine.style.display = "none";
      }

      if (!param.time || !param.point || param.point.x < 0 || param.point.y < 0) {
        tooltip.style.display = "none";
        return;
      }

      const lines: string[] = [];

      // Format time
      if (typeof param.time === "number") {
        const d = new Date(param.time * 1000);
        lines.push(`<div style="margin-bottom:4px;font-weight:600">${d.toLocaleString()}</div>`);
      } else {
        lines.push(`<div style="margin-bottom:4px;font-weight:600">${String(param.time)}</div>`);
      }

      // OHLCV from candlestick series
      const candleData = param.seriesData.get(candlestickSeries);
      if (candleData && "open" in candleData) {
        const fmt = (v: number) => v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        lines.push(
          `<div style="display:flex;justify-content:space-between;gap:12px"><span style="color:hsl(220,10%,50%)">O</span><span>${fmt(candleData.open)}</span></div>`,
          `<div style="display:flex;justify-content:space-between;gap:12px"><span style="color:hsl(220,10%,50%)">H</span><span>${fmt(candleData.high)}</span></div>`,
          `<div style="display:flex;justify-content:space-between;gap:12px"><span style="color:hsl(220,10%,50%)">L</span><span>${fmt(candleData.low)}</span></div>`,
          `<div style="display:flex;justify-content:space-between;gap:12px"><span style="color:hsl(220,10%,50%)">C</span><span>${fmt(candleData.close)}</span></div>`,
        );
      }


      // Signal overlay values
      for (const { series, label, color } of lineSeriesMap) {
        const lineData = param.seriesData.get(series);
        if (lineData && "value" in lineData && lineData.value !== undefined) {
          const val = lineData.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 });
          lines.push(
            `<div style="display:flex;justify-content:space-between;gap:12px"><span style="color:${color}">${label}</span><span>${val}</span></div>`,
          );
        }
      }

      tooltip.innerHTML = lines.join("");
      tooltip.style.display = "block";

      // Position tooltip near cursor, but keep within bounds
      const container = containerRef.current;
      if (container) {
        const cw = container.clientWidth;
        const tooltipWidth = 200;
        const tooltipMargin = 12;
        let left = param.point.x + tooltipMargin;
        if (left + tooltipWidth > cw) {
          left = param.point.x - tooltipWidth - tooltipMargin;
        }
        tooltip.style.left = `${Math.max(0, left)}px`;
        tooltip.style.top = `${Math.max(0, param.point.y + tooltipMargin)}px`;
      }
    };

    chart.subscribeCrosshairMove(handleCrosshairMove);

    chart.timeScale().fitContent();

    // Suppress auto-expand detection while the chart settles after fitContent
    suppressRef.current = true;
    suppressTimerRef.current = setTimeout(() => {
      suppressRef.current = false;
    }, 1000);

    const chartEl = containerRef.current;
    const handleContextMenu = (e: MouseEvent) => {
      if (!chartEl) return;
      const rect = chartEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const time = chart.timeScale().coordinateToTime(x);
      if (time == null) return;
      const timeKey = String(time);
      const THRESHOLD = 8;
      let best: { signalHash: number; signalName: string; dist: number } | null = null;
      for (const { series, byTime, signalHash, signalName } of signalSeriesRef.current) {
        const value = byTime.get(timeKey);
        if (value === undefined) continue;
        const seriesY = series.priceToCoordinate(value);
        if (seriesY === null) continue;
        const dist = Math.abs((seriesY as number) - y);
        if (dist < THRESHOLD && (!best || dist < best.dist)) {
          best = { signalHash, signalName, dist };
        }
      }
      if (best) {
        e.preventDefault();
        setSignalContextMenu({ signalHash: best.signalHash, signalName: best.signalName, x: e.clientX, y: e.clientY });
      }
    };
    chartEl?.addEventListener("contextmenu", handleContextMenu);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      if (suppressTimerRef.current) clearTimeout(suppressTimerRef.current);
      chart.unsubscribeCrosshairMove(handleCrosshairMove);
      chart.timeScale().unsubscribeVisibleLogicalRangeChange(handleVisibleRangeChange);
      chartEl?.removeEventListener("contextmenu", handleContextMenu);
      chart.remove();
      chartRef.current = null;
      candlestickSeriesRef.current = null;
      updateLinePositionsRef.current = null;
      expandingRef.current = false;
      suppressRef.current = false;
    };
  }, [data, timeframe, overlays, referenceTimePoints]);

  useEffect(() => {
    if (!chartRef.current || !visibleLogicalRange) return;
    syncingRef.current = true;
    chartRef.current.timeScale().setVisibleLogicalRange(visibleLogicalRange);
    requestAnimationFrame(() => {
      syncingRef.current = false;
      updateLinePositionsRef.current?.();
    });
  }, [visibleLogicalRange]);

  // Recompute line Y positions whenever drawings change
  useEffect(() => {
    updateLinePositionsRef.current?.();
  }, [drawings]);

  // Document-level drag handlers for horizontal line drawings (registered once)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const id = draggingIdRef.current;
      if (!id || !containerRef.current || !candlestickSeriesRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const y = e.clientY - rect.top;
      const price = candlestickSeriesRef.current.coordinateToPrice(y);
      if (price !== null) {
        onDrawingPriceChangeRef.current?.(id, price as number);
      }
    };

    const handleMouseUp = () => {
      if (draggingIdRef.current) {
        draggingIdRef.current = null;
        document.body.style.cursor = "";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Close context menus on any outside click
  useEffect(() => {
    if (!contextMenu) return;
    const close = () => setContextMenu(null);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [contextMenu]);

  useEffect(() => {
    if (!signalContextMenu) return;
    const close = () => setSignalContextMenu(null);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [signalContextMenu]);

  // Sync crosshair from other charts using a custom vertical line
  useEffect(() => {
    const chart = chartRef.current;
    const syncLine = syncLineRef.current;
    if (!chart || !syncLine) return;

    // Skip if this chart is the source — it already has the correct crosshair from mouse
    if (isCrosshairSourceRef.current) {
      isCrosshairSourceRef.current = false;
      return;
    }

    const tooltip = tooltipRef.current;

    if (crosshairXFraction == null) {
      syncLine.style.display = "none";
      if (tooltip) tooltip.style.display = "none";
      chart.clearCrosshairPosition();
      return;
    }

    const { x, time } = crosshairXFraction;

    // Position the sync line
    syncLine.style.display = "block";
    syncLine.style.left = `${x}px`;

    // Show tooltip with overlay values at the synced time
    if (tooltip && overlayLookupRef.current.length > 0) {
      const timeKey = String(time);
      const lines: string[] = [];

      for (const { label, color, byTime } of overlayLookupRef.current) {
        const value = byTime.get(timeKey);
        if (value !== undefined) {
          const val = value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 });
          lines.push(
            `<div style="display:flex;justify-content:space-between;gap:12px"><span style="color:${color}">${label}</span><span>${val}</span></div>`,
          );
        }
      }

      if (lines.length > 0) {
        tooltip.innerHTML = lines.join("");
        tooltip.style.display = "block";

        const container = containerRef.current;
        if (container) {
          const cw = container.clientWidth;
          const tooltipWidth = 200;
          const tooltipMargin = 12;
          let left = x + tooltipMargin;
          if (left + tooltipWidth > cw) {
            left = x - tooltipWidth - tooltipMargin;
          }
          tooltip.style.left = `${Math.max(0, left)}px`;
          tooltip.style.top = `${tooltipMargin}px`;
        }
      } else {
        tooltip.style.display = "none";
      }
    }
  }, [crosshairXFraction]);

  return (
    <div className={styles.chartWrapper}>
      <div ref={containerRef} className={styles.chartContainer} />
      {/* Custom vertical sync line for crosshair sync from other charts */}
      <div ref={syncLineRef} className={styles.syncLine}>
        <div data-sync-label="" className={styles.syncLabel} />
      </div>
      {/* Horizontal line drawings */}
      {(drawings ?? []).map((d) => {
        const y = lineYPositions[d.id];
        if (y == null) return null;
        return (
          <div
            key={d.id}
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              draggingIdRef.current = d.id;
              document.body.style.cursor = "ns-resize";
            }}
            onContextMenu={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setContextMenu({ id: d.id, x: e.clientX, y: e.clientY });
            }}
            className={styles.drawingHandle}
            style={{ top: `${y - 6}px` }}
          >
            <div className={styles.drawingLine} />
            <div
              data-testid={`drawing-label-${d.id}`}
              className={styles.drawingLabel}
              style={{ right: PRICE_SCALE_MIN_WIDTH + 4 }}
            >
              {d.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </div>
        );
      })}
      {/* Context menu for drawings */}
      {contextMenu && (
        <div
          className={styles.contextMenu}
          style={{ top: contextMenu.y, left: contextMenu.x }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDrawingDeleteRef.current?.(contextMenu.id);
              setContextMenu(null);
            }}
            className={styles.contextMenuItem}
          >
            Delete
          </button>
        </div>
      )}
      {/* Context menu for signal overlays */}
      {signalContextMenu && (
        <div
          className={styles.contextMenu}
          style={{ top: signalContextMenu.y, left: signalContextMenu.x }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemoveOverlayRef.current?.(signalContextMenu.signalHash);
              setSignalContextMenu(null);
            }}
            className={styles.contextMenuItem}
          >
            Delete {signalContextMenu.signalName}
          </button>
        </div>
      )}
      <div ref={tooltipRef} className={styles.tooltip} />
    </div>
  );
}
