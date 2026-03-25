# Volume Sub-Chart — Research Findings

## Key Findings Summary

- **lightweight-charts v5.1.0** is in use (`package.json`)
- **Volume data is already in the pipeline** — `CandleData.volume?: number` exists in `src/lib/types.ts` and the callback route (`src/app/api/signals/callback/route.ts`) already populates `volume: get("volume")` from PriceSignal events. The `CandlestickChart` component currently ignores it.
- **`HistogramSeries`** is the correct lightweight-charts series type for volume bars; individual bars support a per-bar `color` property, enabling the red/green/black colouring directly.
- **Two viable implementation approaches** exist (see Q3 below for detail).

---

## Q1 — Height Ratio Between Main Chart and Volume Panel

**Finding:** `ChartPanel.tsx` uses:
- `DEFAULT_MAIN_HEIGHT = 400px`
- `DEFAULT_SUB_HEIGHT = 200px`
- `MIN_CHART_HEIGHT = 100px`

All panels are user-resizable via `ResizeHandle` (drag handle between panels).

**Recommendation:** Default volume panel height of **120px** (smaller than signal sub-charts since volume is a compact bar chart). The resize handle pattern is already built, so the user can adjust it.

**Needs user confirmation:** Does 120px feel right as a default, or would you prefer a different value (e.g. 100px or 150px)?

---

## Q2 — Visible Divider / Separator Between Panels

**Finding:** The existing sub-charts use a `ResizeHandle` component between them — a thin 1px line with a centred drag affordance. There is no additional visual divider beyond that.

**Recommendation:** Use the same `ResizeHandle` component — consistent with the existing pattern and serves a dual purpose (visual separator + resize handle).

**No user decision needed** — this follows the existing pattern.

---

## Q3 — Should the Volume Panel Be Resizable?

**Finding:** All sub-charts are resizable via `ResizeHandle`. There is no precedent for a fixed-height panel in this codebase.

**Recommendation:** Yes, keep it resizable — consistent with existing sub-charts. Use the existing `ResizeHandle` and `subChartHeights` state mechanism in `ChartPanel`.

**No user decision needed** — follows existing pattern.

---

## Q4 — Y-Axis Labels (Volume Scale)

**Finding:** The existing candlestick chart shows a right-side price scale with numeric labels. lightweight-charts `HistogramSeries` will automatically display a price scale with raw numbers unless configured otherwise.

**Options:**
- **A. Raw numbers** — e.g. `1234567`. Simple, no extra code.
- **B. Abbreviated (recommended)** — e.g. `1.2M`, `500K`. Requires a `priceFormatter` callback on the price scale. Follows standard trading platform conventions (TradingView, etc.).

**Recommendation:** Option B (abbreviated). One small `priceFormatter` function. The `CandlestickChart` tooltip already formats volume-adjacent numbers manually; we can reuse the same pattern.

**Needs user confirmation:** Confirm Option B, or would you prefer raw numbers?

---

## Q5 — Shared X-Axis (Time Scale)

**Finding:** The existing architecture creates entirely separate `createChart` instances per panel. Sub-charts currently show their own time axis. The main chart drives `sharedLogicalRange` which is passed down to sub-charts via `visibleLogicalRange` prop, keeping scroll/zoom synchronised.

**Options:**
- **A. Same approach as existing sub-charts** — volume panel has its own time axis, synced via `sharedLogicalRange`. Simple, consistent.
- **B. Hide the main chart's time axis and show it only on the volume panel** — cleaner visual appearance (no duplicate time labels), but requires modifying chart initialisation to conditionally hide `timeScale`.
- **C. Use lightweight-charts v5 multi-pane within one chart** — see Q6/Q7 discussion below; this would make both panes share a single native time axis automatically.

**Recommendation:** Depends on the implementation approach chosen (see Q6). If a separate chart is used (Option A approach), recommend **B** (hide main chart time axis, show only on volume panel) — it looks significantly better.

**Needs user confirmation:** See Q6 first; the answer to this follows from that choice.

---

## Q6 — Implementation Approach (Core Architecture Decision)

This is the most significant decision, with implications for Q5, Q7, Q8.

**Finding:** lightweight-charts v5 supports two approaches:

### Option A — Separate chart instances (existing pattern)

Create a new `VolumeChart` component (or a `VolumeHistogramChart` variant) as a separate `createChart` instance rendered below the main chart in `ChartPanel`. Sync via the existing `sharedLogicalRange` + `sharedCrosshairX` infrastructure already in place.

- Pros: Follows the exact existing sub-chart pattern; minimal change to `CandlestickChart`; `ChartPanel` already knows how to stack and sync charts.
- Cons: Logical range sync via React state introduces a small lag; crosshair sync uses the custom DOM line approach (already implemented).

### Option B — Multi-pane within a single `createChart` instance

lightweight-charts v5 re-introduced multi-pane support. A `HistogramSeries` can be added to the same chart with `pane: 1` (or via `chart.addPane()`). The two panes share the same timescale and have native crosshair sync, no custom sync code needed.

- Pros: Native timescale sharing (no lag), native crosshair sync, single chart instance to manage, cleaner architecture for volume which is fundamentally the same data source as the candlesticks.
- Cons: Requires modifying `CandlestickChart` to accept volume data and render a second pane; pane height ratio within the chart may be less flexible than the current external resize handle.

**Recommendation:** **Option B** for volume specifically, because volume is intrinsically part of the same PriceSignal data as the candlesticks — it is not an independent signal overlay. This avoids sync lag and aligns with how charting platforms (TradingView, etc.) handle volume. The existing separate-chart pattern is appropriate for signal overlays; volume is a special case.

**Needs user confirmation:** Option A (separate chart, consistent with existing sub-chart pattern) or Option B (same chart, native multi-pane)? Please confirm so the implementation approach can be finalised.

---

## Q7 — Crosshair / Tooltip Synchronisation

**Finding:** The existing `sharedCrosshairX` mechanism broadcasts a `{ x: number, time: Time }` value from whichever chart the user hovers, and other charts render a custom DOM `<div>` sync line. This is already wired up in `ChartPanel` and `CandlestickChart`.

- If **Option A** is chosen: the volume chart participates in this existing sync — same props as existing sub-charts. No new code needed.
- If **Option B** is chosen: crosshair sync is native — the same `subscribeCrosshairMove` fires for events in both panes within the chart. The tooltip in `handleCrosshairMove` would need extending to include volume data.

**Recommendation:** Either approach provides adequate sync. Option B (same chart) is more seamless.

**No user decision needed** — follows from Q6 choice.

---

## Q8 — Zoom/Scroll Synchronisation

**Finding:** Zoom/scroll is synced via `visibleLogicalRange` prop passed to each `CandlestickChart`. The main chart broadcasts changes via `onVisibleLogicalRangeChange`, and sub-charts apply them via `chart.timeScale().setVisibleLogicalRange(...)`.

- **Option A:** Volume chart receives `visibleLogicalRange` prop, same as existing sub-charts.
- **Option B:** Zoom/scroll is natively shared within the single chart instance.

**No user decision needed** — either approach handles this.

---

## Q9 — Volume Bar Colours

**Finding:** Design tokens in `src/styles/design-tokens.css`:

| Condition | Token | Value |
|-----------|-------|-------|
| Close > Open (bullish) | `--color-candle-up` | `hsl(145, 65%, 45%)` |
| Close < Open (bearish) | `--color-candle-down` | `hsl(0, 70%, 55%)` |
| Close == Open | `--grey-20` | `hsl(220, 10%, 20%)` |

The existing candlestick series in `CandlestickChart.tsx` uses `hsl(145, 65%, 45%)` and `hsl(0, 70%, 55%)` — matching `--color-candle-up` and `--color-candle-down` exactly.

**Recommendation:** Use these three values directly (as string literals, consistent with how `CandlestickChart` sets candle colours). This aligns volume bars with candle colours.

**Needs user confirmation:** Are these the right colours, or do you want the volume bars to be a different shade (e.g. lighter/more transparent) to distinguish them from price candles?

---

## Q10 — Opacity on Volume Bars

**Finding:** `HistogramSeries` in lightweight-charts supports opacity in the bar colour (via alpha in the colour string) or via a global `color` property. The existing candlestick series uses no transparency.

**Options:**
- **A. Solid** — same opacity as candles. Clean but may feel heavy.
- **B. Semi-transparent (recommended)** — e.g. 70% opacity (e.g. `hsla(145, 65%, 45%, 0.7)`). This is the convention on TradingView and most charting platforms, making the volume panel feel lighter than the price panel.

**Recommendation:** Option B — 70% opacity. This is standard practice and easy to adjust.

**Needs user confirmation:** Solid or semi-transparent? If semi-transparent, is 70% the right level?

---

## Q11 — Panel Label

**Finding:** Existing sub-charts display a small label (the signal name) above the chart, with a `×` close button (`ChartPanel.tsx` lines 627–655). The label uses `body-1` style at `12px`, colour `var(--color-text-secondary)`.

**Recommendation:** Show a "Volume" label in the same style/position as existing sub-chart labels, consistent with the existing pattern.

**No user decision needed** — follows existing pattern.

---

## Q12 — Toggle / Collapse

**Finding:** The existing sub-charts have a `×` button to remove them (`onRemoveSubChart`). Volume is different from signal sub-charts in that:
1. It's always derived from PriceSignal (not a user-added signal).
2. It has no `signalHash` to pass to `onRemoveSubChart`.

**Options:**
- **A. Always shown** — no toggle. Volume is always displayed when a chart is loaded. Simple.
- **B. Toggle button in the chart header** — a small button to show/hide volume, state stored per-tab. Adds UI complexity.
- **C. `×` close button (like sub-charts)** — removes the volume panel; it does not come back unless the user explicitly re-enables it. Requires per-tab state.

**Recommendation:** **Option A (always shown)** for the initial implementation. Volume is a standard component of price charts and almost always desired. A toggle can be added later if needed.

**Needs user confirmation:** Should volume always be shown, or do you want a way to hide it?

---

## Q13 — Empty Volume Data

**Finding:** `CandleData.volume` is typed as `volume?: number`. The callback route returns `volume: get("volume")` where `get` returns `0` if the event is not found. So if PriceSignal does not return volume events, all volume values will be `0`.

**Recommendation:** If all volume values are `0` (or the volume field is absent on all candles), **hide the volume panel entirely** rather than showing a flat empty chart. A simple check before rendering: `const hasVolume = data.some(d => (d.volume ?? 0) > 0)`.

**No user decision needed** — this is a sensible default.

---

## Q14 — Volume Panel on All Timeframes

**Finding:** The PriceSignal returns volume data regardless of timeframe (the callback route maps volume for all entries). The `timeframe` prop on `CandlestickChart` only affects the time axis formatting (whether time-of-day is shown).

**Recommendation:** Show the volume panel on all timeframes — there is no technical reason to restrict it, and volume is relevant on all timeframes.

**No user decision needed.**

---

## Finalised Decisions

| # | Question | Decision |
|---|----------|----------|
| Q1 | Default panel height | **120px** |
| Q4 | Y-axis number format | **Abbreviated** (e.g. 1.2M, 500K) |
| Q6 | Implementation approach | **lightweight-charts v5 multi-pane** within the existing `CandlestickChart` instance |
| Q9 | Bar colour shade | **Use existing candle tokens** — `hsl(145, 65%, 45%)` up, `hsl(0, 70%, 55%)` down, `hsl(220, 10%, 20%)` flat |
| Q10 | Bar opacity | **70% opacity** — apply alpha to the colour values |
| Q12 | Toggleability | **Toggleable** — a button in the chart header to show/hide the volume panel, state stored per-tab |
