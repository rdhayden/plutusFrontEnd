"use client";

import { useEffect, useRef } from "react";
import { createChart, HistogramSeries, LineSeries, ISeriesApi, LogicalRange, Time } from "lightweight-charts";
import type { MouseEventParams } from "lightweight-charts";
import { CandleData, Timeframe } from "@/lib/types";
import type { CrosshairSyncData } from "./CandlestickChart";
import styles from "./VolumeChart.module.css";

/** Fixed right price scale width — must match CandlestickChart so time axes align. */
const PRICE_SCALE_MIN_WIDTH = 80;

const VOLUME_COLOR_UP   = "hsla(145, 65%, 45%, 0.7)";
const VOLUME_COLOR_DOWN = "hsla(0, 70%, 55%, 0.7)";
const VOLUME_COLOR_FLAT = "hsla(220, 10%, 20%, 0.7)";

const INTRADAY_TIMEFRAMES = new Set<Timeframe>(["TICK", "SECOND", "MINUTE", "HOUR"]);

export function formatVolume(v: number): string {
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `${(v / 1_000).toFixed(1)}K`;
  return String(Math.round(v));
}

interface VolumeChartProps {
  data: CandleData[];
  timeframe?: Timeframe;
  visibleLogicalRange?: LogicalRange | null;
  onCrosshairXChange?: (data: CrosshairSyncData | null) => void;
  crosshairXFraction?: CrosshairSyncData | null;
  referenceTimePoints?: (string | number)[];
}

export default function VolumeChart({
  data,
  timeframe = "DAY",
  visibleLogicalRange,
  onCrosshairXChange,
  crosshairXFraction,
  referenceTimePoints,
}: VolumeChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const syncLineRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<ReturnType<typeof createChart> | null>(null);
  const volumeSeriesRef = useRef<ISeriesApi<"Histogram"> | null>(null);
  const syncingRef = useRef(false);
  const isCrosshairSourceRef = useRef(false);
  const onCrosshairXChangeRef = useRef(onCrosshairXChange);
  onCrosshairXChangeRef.current = onCrosshairXChange;

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
        scaleMargins: { top: 0.1, bottom: 0 },
      },
      timeScale: {
        borderColor: "hsl(220, 13%, 90%)",
        timeVisible: INTRADAY_TIMEFRAMES.has(timeframe),
        secondsVisible: timeframe === "SECOND" || timeframe === "TICK",
      },
    });

    chartRef.current = chart;

    const volumeSeries = chart.addSeries(HistogramSeries, {
      priceLineVisible: false,
      lastValueVisible: false,
    });

    volumeSeries.priceScale().applyOptions({
      scaleMargins: { top: 0.1, bottom: 0 },
      // @ts-expect-error priceFormatter is a valid option in lightweight-charts v5
      priceFormatter: formatVolume,
    });

    if (data.length > 0) {
      volumeSeries.setData(
        data.map((d) => ({
          time: d.time as Time,
          value: d.volume ?? 0,
          color:
            d.close > d.open
              ? VOLUME_COLOR_UP
              : d.close < d.open
              ? VOLUME_COLOR_DOWN
              : VOLUME_COLOR_FLAT,
        }))
      );
    }

    volumeSeriesRef.current = volumeSeries;

    // Hidden reference series to unify time scale with other charts
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

    // Tooltip
    const tooltip = tooltipRef.current;
    const syncLine = syncLineRef.current;

    const handleCrosshairMove = (param: MouseEventParams) => {
      if (!tooltip) return;

      if (onCrosshairXChangeRef.current) {
        isCrosshairSourceRef.current = true;
        if (param.point && param.point.x >= 0 && param.time) {
          onCrosshairXChangeRef.current({ x: param.point.x, time: param.time as Time });
        } else {
          onCrosshairXChangeRef.current(null);
        }
      }

      if (syncLine) syncLine.style.display = "none";

      if (!param.time || !param.point || param.point.x < 0 || param.point.y < 0) {
        tooltip.style.display = "none";
        return;
      }

      const volData = param.seriesData.get(volumeSeries);
      if (volData && "value" in volData && (volData.value ?? 0) > 0) {
        tooltip.innerHTML =
          `<div style="display:flex;justify-content:space-between;gap:12px">` +
          `<span style="color:hsl(220,10%,50%)">V</span>` +
          `<span>${formatVolume(volData.value)}</span></div>`;
        tooltip.style.display = "block";

        const container = containerRef.current;
        if (container) {
          const cw = container.clientWidth;
          const tooltipWidth = 140;
          const tooltipMargin = 12;
          let left = param.point.x + tooltipMargin;
          if (left + tooltipWidth > cw) left = param.point.x - tooltipWidth - tooltipMargin;
          tooltip.style.left = `${Math.max(0, left)}px`;
          tooltip.style.top = `${Math.max(0, param.point.y + tooltipMargin)}px`;
        }
      } else {
        tooltip.style.display = "none";
      }
    };

    chart.subscribeCrosshairMove(handleCrosshairMove);
    chart.timeScale().fitContent();

    return () => {
      chart.unsubscribeCrosshairMove(handleCrosshairMove);
      chart.remove();
      chartRef.current = null;
      volumeSeriesRef.current = null;
    };
  }, [data, timeframe, referenceTimePoints]);

  // Sync logical range from main chart
  useEffect(() => {
    if (!chartRef.current || !visibleLogicalRange) return;
    syncingRef.current = true;
    chartRef.current.timeScale().setVisibleLogicalRange(visibleLogicalRange);
    requestAnimationFrame(() => {
      syncingRef.current = false;
    });
  }, [visibleLogicalRange]);

  // Sync crosshair from other charts via a custom vertical line
  useEffect(() => {
    const chart = chartRef.current;
    const syncLine = syncLineRef.current;
    if (!chart || !syncLine) return;

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

    syncLine.style.display = "block";
    syncLine.style.left = `${crosshairXFraction.x}px`;
    if (tooltip) tooltip.style.display = "none";
  }, [crosshairXFraction]);

  return (
    <div className={styles.chartWrapper}>
      <div ref={containerRef} className={styles.chartContainer} />
      <div ref={syncLineRef} className={styles.syncLine} />
      <div ref={tooltipRef} className={styles.tooltip} data-testid="volume-tooltip" />
    </div>
  );
}
