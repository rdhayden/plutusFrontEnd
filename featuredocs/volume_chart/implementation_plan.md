# Volume Sub-Chart — Implementation Plan

## Overview

Three sequential phases. Each phase is independently testable and leaves the application in a working state.

| Phase | Scope | Files Changed |
|-------|-------|---------------|
| 1 | Add volume histogram pane to `CandlestickChart` | `src/components/CandlestickChart.tsx`, `src/__tests__/components/CandlestickChart.test.tsx` |
| 2 | Add volume to the crosshair tooltip | `src/components/CandlestickChart.tsx`, `src/__tests__/components/CandlestickChart.test.tsx` |
| 3 | Add per-tab toggle state and button to `ChartPanel` | `src/components/ChartPanel.tsx`, `src/__tests__/components/ChartPanel.test.tsx` |

---

## Phase 1 — Volume Histogram Pane in CandlestickChart

### What changes

1. Add `HistogramSeries` to the lightweight-charts import.
2. Define a module-level `formatVolume(v: number): string` pure function (used in Phase 2 and the Y-axis formatter).
3. Add `showVolume?: boolean` prop to `CandlestickChartProps` (defaults to `true`).
4. Add a `volumeSeriesRef` alongside the existing `candlestickSeriesRef`.
5. Inside the main chart-creation `useEffect`:
   - Create a `HistogramSeries` on `pane: 1` with `priceLineVisible: false` and `lastValueVisible: false`.
   - Apply `formatVolume` as the `priceFormatter` on the volume price scale, with `scaleMargins: { top: 0.1, bottom: 0 }`.
   - Map `data` to volume histogram data, deriving per-bar colour from the `close`/`open` comparison at 70% opacity.
   - Call `chart.panes()[1]?.setHeight(120)`.
   - Store the series in `volumeSeriesRef`.
   - Reset `volumeSeriesRef.current = null` in the cleanup function.
6. Add a separate `useEffect([showVolume])` that calls `chart.panes()[1]?.setHeight(showVolume ? 120 : 0)` — does not touch the main creation effect.

### Testing plan

#### Unit tests — `formatVolume` (no mocking required)

| Test | Input | Expected output |
|------|-------|-----------------|
| Millions | `1_500_000` | `"1.5M"` |
| Millions boundary | `1_000_000` | `"1.0M"` |
| Thousands | `500_000` | `"500.0K"` |
| Thousands boundary | `1_000` | `"1.0K"` |
| Sub-thousand | `999` | `"999"` |
| Zero | `0` | `"0"` |

#### Integration tests — `CandlestickChart` (extend existing lightweight-charts mock)

The existing mock must be extended:
- Add `HistogramSeries: "HistogramSeries"` to the `vi.mock("lightweight-charts", ...)` factory.
- Add `panes: vi.fn(() => [mockPane0, mockPane1])` to `mockChart`, where each mock pane has a `setHeight: vi.fn()`.

| Test | Setup | Assertion |
|------|-------|-----------|
| Volume series created when data has volume | `data` includes candles with non-zero `volume` | `mockChart.addSeries` called with `HistogramSeries` |
| Volume series assigned to pane 1 | Same as above | `addSeries` options include `pane: 1` |
| Green bar for up candle | Candle where `close > open` | `setData` called with `color: "hsla(145, 65%, 45%, 0.7)"` on that bar |
| Red bar for down candle | Candle where `close < open` | `setData` called with `color: "hsla(0, 70%, 55%, 0.7)"` on that bar |
| Grey bar for flat candle | Candle where `close === open` | `setData` called with `color: "hsla(220, 10%, 20%, 0.7)"` on that bar |
| Pane height set to 120 on creation | `showVolume={true}` (default) | `mockPane1.setHeight` called with `120` |
| Pane height set to 0 when hidden | `showVolume={false}` | `mockPane1.setHeight` called with `0` (from toggle effect) |
| Toggling `showVolume` does not remount the chart | Rerender with `showVolume` flipped | `mockChart.remove` called only once (on unmount, not on toggle) |

---

## Phase 2 — Volume in the Crosshair Tooltip

### What changes

Inside `handleCrosshairMove` in `CandlestickChart`, after the OHLC block is built:

1. Call `param.seriesData.get(volumeSeriesRef.current)` to retrieve the volume value at the hovered time.
2. If the value is present and greater than zero, append a `V` row to `lines` using `formatVolume`.
3. No changes to props or state — `volumeSeriesRef` is already in scope.

### Testing plan

The existing mock crosshair event infrastructure in `CandlestickChart.test.tsx` captures the `subscribeCrosshairMove` handler. Tests fire it directly with a `MockEventParams` object.

| Test | Setup | Assertion |
|------|-------|-----------|
| Volume row appears in tooltip | `param.seriesData` returns `{ value: 1_500_000 }` for the volume series | Tooltip `innerHTML` contains `"1.5M"` |
| Volume row uses `V` label | Same as above | Tooltip `innerHTML` contains `">V<"` |
| Volume row omitted when volume is zero | `param.seriesData` returns `{ value: 0 }` | Tooltip `innerHTML` does not contain `"V"` |
| Volume row omitted when no volume data | `param.seriesData` has no entry for volume series | Tooltip `innerHTML` does not contain `"V"` |
| OHLC rows still present alongside volume row | `param.seriesData` returns both candlestick and volume data | Tooltip contains `"O"`, `"H"`, `"L"`, `"C"`, and `"V"` rows |

---

## Phase 3 — Per-Tab Toggle in ChartPanel

### What changes

1. Add `volumeVisiblePerTab: Record<string, boolean>` state to `ChartPanel`, initialised as `{}`.
2. Compute `hasVolume` — `true` if any candle in `activeChart.data` has `(volume ?? 0) > 0`.
3. Compute `isVolumeVisible` — `hasVolume && (volumeVisiblePerTab[activeTab ?? ""] ?? true)`.
4. Add `handleToggleVolume` callback that flips the entry for `activeTab` in `volumeVisiblePerTab`.
5. Add a "Vol" toggle button to the chart header (right side, alongside expand/shrink buttons), rendered only when `hasVolume`. Styled as a 28×28px bordered button; filled with `--color-primary` background and white text when active, transparent with default text colour when inactive.
6. Pass `showVolume={isVolumeVisible}` as a new prop to the main `CandlestickChart` instance.

### Testing plan

The existing `ChartPanel.test.tsx` mock for `CandlestickChart` must be extended to forward the `showVolume` prop as a `data-show-volume` attribute so tests can assert on it.

| Test | Setup | Assertion |
|------|-------|-----------|
| Vol button renders when data has volume | Active tab data includes candles with `volume > 0` | `screen.getByRole("button", { name: /hide volume/i })` or `/show volume/i` is present |
| Vol button not rendered when no volume data | Active tab data has all `volume: 0` or `volume` absent | `screen.queryByRole("button", { name: /volume/i })` returns `null` |
| `showVolume` defaults to `true` for a new tab | Tab has volume data, no toggle action taken | `data-show-volume="true"` on the `candlestick-chart` element |
| Clicking Vol hides the panel | Tab has volume data, button clicked once | `data-show-volume="false"` |
| Clicking Vol again shows the panel | Button clicked twice | `data-show-volume="true"` |
| Toggle is independent per tab | Two tabs with volume; toggle tab A, switch to tab B | Tab B `data-show-volume="true"`; switch back to tab A — `data-show-volume="false"` |
| `showVolume` is false when tab has no volume | Tab data has `volume: 0` on all candles | `data-show-volume="false"` regardless of toggle state |
