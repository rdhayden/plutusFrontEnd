# Volume Sub-Chart — Design Discussion

## 1. Summary of Change Request

When a chart is loaded from the PriceSignal, a volume sub-chart should appear below the main candlestick chart. Volume is rendered as a histogram (bar chart) in a separate `VolumeChart` component with its own `createChart` instance. Each bar is coloured based on the corresponding candle direction: green (close > open), red (close < open), or dark grey (close == open), all at 70% opacity. The sub-chart is 120px tall by default, resizable, and can be toggled on/off via a button in the chart header. The volume Y-axis displays abbreviated labels (e.g. 1.2M, 500K). The volume value for the hovered bar is shown in `VolumeChart`'s own crosshair tooltip; timescale scroll/zoom and crosshair position are synchronised with the main chart via props.

---

## 2. Current State

**Data pipeline:** `CandleData` in `src/lib/types.ts` already includes `volume?: number`. The signal callback route (`src/app/api/signals/callback/route.ts`) already extracts and populates `volume` from PriceSignal events. The field is present on every candle object passed down to `CandlestickChart` via `ChartTab.data`.

**Chart rendering:** `CandlestickChart.tsx` creates a single `createChart` instance (lightweight-charts v5.1.0). When setting candle data it maps only `{ time, open, high, low, close }` — the `volume` field is silently ignored. There is no histogram series, no second pane, and no volume display of any kind.

**Panel management:** `ChartPanel.tsx` manages a stack of resizable chart panels. The main candlestick chart sits at a fixed default height (400px), followed by optional signal sub-charts (200px default), each separated by a drag `ResizeHandle`. Heights are held in component state per panel label. There is no volume-specific panel state or toggle control.

**Chart header:** Contains controls for timeframe selection, timespan expand/shrink, signal selection, and drawing tools. There is no volume toggle.

---

## 3. Desired End State

- A volume histogram sub-chart is rendered below the main candlestick chart whenever a ticker is loaded via PriceSignal, on all timeframes.
- The histogram lives in a separate `VolumeChart` component with its own `createChart` instance, consistent with how signal sub-charts work. Timescale scroll/zoom is synchronised via the `visibleLogicalRange` prop; crosshair position is synchronised via `crosshairXFraction` / `onCrosshairXChange` props — the same mechanism used by signal sub-charts.
- Each volume bar is coloured at 70% opacity: green (`hsla(145, 65%, 45%, 0.7)`) when close > open, red (`hsla(0, 70%, 55%, 0.7)`) when close < open, dark grey (`hsla(220, 10%, 20%, 0.7)`) when close == open.
- The volume sub-chart is 120px tall by default and is resizable by dragging the `ResizeHandle` below it.
- The Y-axis of the volume sub-chart displays abbreviated labels (e.g. 1.2M, 500K).
- A "Vol" toggle button in the chart header lets the user show or hide the volume sub-chart. Toggle state is stored per tab in `ChartPanel`. When hidden, the `VolumeChart` component is not rendered.
- The volume value for the hovered bar is shown in `VolumeChart`'s own tooltip (separate from the `CandlestickChart` tooltip), abbreviated in the same format as the Y-axis (e.g. V 1.2M).
- If all volume values for a chart are zero (or absent), the volume sub-chart is hidden regardless of the toggle state, and the toggle button is not shown.

---

## 4. Out of Scope

- Volume data for signal overlays other than PriceSignal (volume is only sourced from the PriceSignal candle data).
- Persisting the volume toggle state across page reloads (the toggle resets to "on" on each session).
- Any visual configuration of the volume sub-chart by the user (colour, opacity, bar width etc.).

---

## 5. Patterns to Follow

### 5.1 — VolumeChart as a separate createChart instance

`VolumeChart` follows the same component structure as `CandlestickChart`: a `useEffect` creates a `createChart` instance into a container `div`, adds a `HistogramSeries`, sets data, subscribes to crosshair events, and removes the chart on cleanup. This is consistent with how signal sub-charts are rendered in `ChartPanel`.

```tsx
// VolumeChart.tsx — chart creation effect
const chart = createChart(containerRef.current, { autoSize: true, ... });
chartRef.current = chart;

const volumeSeries = chart.addSeries(HistogramSeries, {
  priceLineVisible: false,
  lastValueVisible: false,
});

volumeSeries.setData(
  data.map((d) => ({
    time: d.time as Time,
    value: d.volume ?? 0,
    color: d.close > d.open ? VOLUME_COLOR_UP
         : d.close < d.open ? VOLUME_COLOR_DOWN
         : VOLUME_COLOR_FLAT,
  }))
);
```

---

### 5.2 — Per-bar colouring on HistogramSeries

Each data point in a `HistogramSeries` accepts an optional `color` property that overrides the series default. Colour is derived by comparing `close` vs `open` on the corresponding candle.

```ts
const volumeData = data.map((d) => ({
  time: d.time as Time,
  value: d.volume ?? 0,
  color:
    d.close > d.open
      ? "hsla(145, 65%, 45%, 0.7)"
      : d.close < d.open
      ? "hsla(0, 70%, 55%, 0.7)"
      : "hsla(220, 10%, 20%, 0.7)",
}));

volumeSeries.setData(volumeData);
```

---

### 5.3 — Abbreviated volume formatter for the Y-axis

A `priceFormatter` function is passed to the volume price scale to display abbreviated labels. The same function is reused when formatting volume in the tooltip. It is exported from `VolumeChart.tsx` so tests can import it directly.

```ts
// Exported from VolumeChart.tsx
export function formatVolume(v: number): string {
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `${(v / 1_000).toFixed(1)}K`;
  return String(Math.round(v));
}

volumeSeries.priceScale().applyOptions({
  scaleMargins: { top: 0.1, bottom: 0 },
  priceFormatter: formatVolume,
});
```

---

### 5.4 — Per-tab volume toggle state in ChartPanel

Follows the existing `subChartHeights` pattern — a `Record<string, T>` keyed by tab id, defaulting to a sensible value when the key is absent. The `hasVolume` check is computed in `ChartPanel` from the active tab's candle data; if no volume data is present, `isVolumeVisible` is forced false and the toggle button is not rendered. When `isVolumeVisible` is false, the `VolumeChart` component is simply not rendered (conditional rendering rather than a prop toggle).

```ts
// In ChartPanel state
const [volumeVisiblePerTab, setVolumeVisiblePerTab] =
  useState<Record<string, boolean>>({});

// Derived values for the active tab
const hasVolume = (activeChart?.data ?? []).some((d) => (d.volume ?? 0) > 0);
const isVolumeVisible = hasVolume && (volumeVisiblePerTab[activeTab ?? ""] ?? true);

// Toggle handler
const handleToggleVolume = useCallback(() => {
  setVolumeVisiblePerTab((prev) => ({
    ...prev,
    [activeTab ?? ""]: !(prev[activeTab ?? ""] ?? true),
  }));
}, [activeTab]);
```

`isVolumeVisible` controls whether `VolumeChart` is rendered at all — no prop is passed to `CandlestickChart`.

---

### 5.5 — Rendering VolumeChart in ChartPanel

`VolumeChart` is rendered between the main chart's `ResizeHandle` and the signal sub-charts, guarded by `isVolumeVisible`. A second `ResizeHandle` follows the volume sub-chart to allow height adjustment. This matches the pattern for signal sub-charts.

```tsx
{isVolumeVisible && (
  <div style={{ height: `${volumeChartHeight}px`, position: "relative" }}>
    <div style={{ display: "flex", alignItems: "center", padding: "2px 8px" }}>
      <span style={{ fontSize: "11px", color: "var(--color-text-secondary)" }}>Volume</span>
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
```

---

### 5.6 — Crosshair tooltip in VolumeChart

`VolumeChart` has its own `subscribeCrosshairMove` handler and tooltip `div`, following the same DOM pattern as `CandlestickChart`. The volume value is looked up via `param.seriesData.get(volumeSeries)` and formatted with `formatVolume`.

```ts
// Inside VolumeChart handleCrosshairMove:
const volData = param.seriesData.get(volumeSeries);
if (volData && "value" in volData && (volData.value ?? 0) > 0) {
  tooltip.innerHTML =
    `<div style="display:flex;justify-content:space-between;gap:12px">` +
    `<span style="color:hsl(220,10%,50%)">V</span>` +
    `<span>${formatVolume(volData.value)}</span></div>`;
  tooltip.style.display = "block";
} else {
  tooltip.style.display = "none";
}
```

---

### 5.7 — Volume toggle button in the chart header

A 28×28px bordered button labelled "Vol" is added to the right side of the chart header, alongside the existing expand/shrink buttons. A filled background indicates the panel is active; transparent indicates hidden. The button is only rendered when `hasVolume` is true.

```tsx
{hasVolume && (
  <button
    aria-label={isVolumeVisible ? "Hide volume" : "Show volume"}
    onClick={handleToggleVolume}
    style={{
      width: "28px",
      height: "28px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-m)",
      background: isVolumeVisible ? "var(--color-primary)" : "var(--color-bg)",
      color: isVolumeVisible ? "#fff" : "var(--color-text-primary)",
      cursor: "pointer",
      fontSize: "11px",
      fontWeight: 600,
    }}
  >
    Vol
  </button>
)}
```

---

## 6. Resolved Design Questions

| Question | Decision | Rationale |
|----------|----------|-----------|
| How to render volume without coupling it to CandlestickChart | Separate `VolumeChart` component with its own `createChart` instance | Consistent with how signal sub-charts work in `ChartPanel`; keeps `CandlestickChart` focused on price/overlay rendering only |
| How to toggle the volume sub-chart | Conditional rendering of `VolumeChart` controlled by `isVolumeVisible` in `ChartPanel` | Simpler than `setHeight(0)` on a pane; React handles mount/unmount cleanly |
| Where does the `hasVolume` check live? | In `ChartPanel`, controlling whether `VolumeChart` is rendered and whether the toggle button is shown | Keeps both child components simple; logic lives in the panel that owns tab state |
| Placement of the volume toggle button | Right side of chart header, alongside existing expand/shrink buttons | More discoverable than a pane-level control; accessible even when the sub-chart is hidden |
