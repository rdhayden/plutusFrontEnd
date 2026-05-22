# Research — Chart Tabs Shrink to Fit

## Codebase findings

### Current tab implementation
- **Component:** `src/components/ChartPanel.tsx` lines 358–429
- **Layout:** Inline-style flexbox container (`display: flex, alignItems: stretch, gap: 0`). No `overflow` or scroll handling — tabs simply spill off-screen today.
- **Tab label:** Two separate `<span>` elements — **ticker** (always shown, `--body-1-size` = 15px) and optional **company name** (already truncated at `maxWidth: 120px` with `textOverflow: ellipsis`).
- **Active tab:** `2px solid var(--color-primary)` bottom border + `fontWeight: 600` + blue text.
- **Close button:** Always visible `×` character (not hover-gated today). Calls `onTabClose(tab.id)` with `stopPropagation`.
- **State:** `ChartTab[]` array in `page.tsx`. Each tab has `{ id, ticker, exchange, name, data, ... }`. `id` is `"TICKER:EXCHANGE"` or `"TICKER"`.
- **Existing transitions:** Tab button already has a `0.15s` color transition — sets the animation baseline.

---

## Clarifying questions — finalized decisions

---

### Q1 — Minimum tab width
**Decision: 52px minimum.**
Recommended value from research — sufficient to show a 4-char ticker at 15px without wrapping. User confirmed minimum tab width is the right mechanism.

---

### Q2 — Active/selected tab behaviour
**Decision: All tabs shrink proportionally. No preferential treatment for the active tab.**
The active tab is treated identically to all others during shrinking. A tab is only wider than its peers when the user hovers over it.

---

### Q3 — Close button on shrunken tabs
**Decision: Close button hidden in default state, visible on hover.**
Consistent with ticket wording. The existing `<button>` element makes this a straightforward CSS show/hide.

---

### Q4 — Hover expansion mechanics
**Decision: Space taken equally from all other tabs.**
When a tab is hovered, all non-hovered tabs shrink equally to provide the space. This is achievable with pure CSS flex weights and `:has()`.

---

### Q5 — Transition / animation
**Decision: `0.15s ease` (matching existing tab colour transitions).**

---

### Q6 — Extreme overflow
**Decision: `+N` overflow pill is in scope for this ticket.**
When tabs hit the minimum width and still overflow, rightmost tabs are hidden and a `+N` pill appears. Clicking the pill provides access to hidden tabs (dropdown or other affordance).

---

### Q7 — Trigger threshold / company name
**Decision: Always hide the company name in tabs.**
Company name is never shown in the tab bar. The ticker symbol alone is the tab label. This eliminates the need for an overflow detector to conditionally show/hide the name.

---

### Q8 — Ticker label truncation
**Decision: Ticker truncated with ellipsis if narrower than natural text width; clips at 52px minimum.**
Company name already removed (Q7), so only the ticker symbol needs truncation handling.

---

## Finalized implementation plan

### Scope
Two integrated behaviours:
1. **Proportional shrink** — tabs compress equally as their count grows, down to 52px each.
2. **Hover expand** — a hovered tab grows; all other tabs shrink equally to compensate.
3. **+N overflow pill** — when tabs are at minimum width and still overflow the container, excess tabs are hidden and a `+N` pill is shown.

---

### Layout mechanism

**Pure CSS flex for shrink/hover:**
```css
.chart-tab-bar {
  display: flex;
  overflow: hidden;         /* clip overflowing tabs */
  min-height: 48px;
}

.chart-tab {
  flex: 1 1 0;              /* grow and shrink equally from zero base */
  min-width: 52px;
  overflow: hidden;
  transition: flex-grow 0.15s ease;
}

/* when any tab is hovered, shrink all others and expand the hovered one */
.chart-tab-bar:has(.chart-tab:hover) .chart-tab:not(:hover) {
  flex-grow: 0.3;
}
.chart-tab:hover {
  flex-grow: 3;
}
```
- No per-event JS needed for the shrink/hover behaviour.
- `:has()` is supported in all modern browsers (Chrome 105+, Firefox 121+, Safari 15.4+).
- Tabs naturally fill available space when few; compress proportionally when many.

**Ticker label:**
```css
.chart-tab-ticker {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* company name — always hidden */
.chart-tab-name { display: none; }

/* close button — hidden by default, shown on hover */
.chart-tab-close { display: none; }
.chart-tab:hover .chart-tab-close { display: flex; }
```

---

### +N overflow pill — JS required

CSS alone cannot detect overflow and selectively hide tabs. A `ResizeObserver` (or `useLayoutEffect` measuring `scrollWidth` vs `clientWidth`) is needed.

**Proposed approach:**

1. Render all tabs into a hidden measurement container to get each tab's natural (unconstrained) width.
2. Walk the tab list left-to-right, accumulating width. Reserve ~40px for the pill. When the remaining space is exhausted at `min-width: 52px`, mark subsequent tabs as hidden.
3. Store `visibleTabIds: Set<string>` and `hiddenCount: number` in component state (or derived in `useMemo`).
4. Render only the visible tabs in the real container, plus the `+N` pill if `hiddenCount > 0`.
5. Clicking the `+N` pill opens a dropdown listing the hidden tickers; clicking one switches to that tab and re-orders the visible set so it appears.

**Re-ordering on pill click:** Move the selected tab to the last visible slot (or swap with the rightmost visible tab) so it becomes accessible.

**ResizeObserver trigger:** Re-run the calculation on container resize and whenever `tabs.length` changes.

---

### Component changes required

| Location | Change |
|----------|--------|
| `src/components/ChartPanel.tsx` | Convert tab container and tab items from inline styles to CSS classes; add `+N` pill rendering; add `ResizeObserver` or `useLayoutEffect` for overflow detection |
| `src/app/globals.css` (or a new `ChartTabBar.module.css`) | Add `.chart-tab-bar`, `.chart-tab`, `.chart-tab-ticker`, `.chart-tab-close`, `.chart-tab-overflow-pill` rules |
| `src/components/ChartPanel.tsx` | Remove company name `<span>` render (or keep in DOM with `display: none` via class) |

**Inline style vs CSS class decision:** The tab container currently uses inline styles throughout. For the `:has()` approach to work cleanly, the tab elements need stable class names. Recommend extracting tab bar styles to a CSS module (`ChartTabBar.module.css`) while leaving the rest of `ChartPanel.tsx` inline styles unchanged, to minimise churn.

---

### Edge cases to handle

| Case | Handling |
|------|----------|
| Single tab | No shrinking needed; tab takes full natural width |
| Active tab is hidden by overflow | Always ensure active tab is in the visible set; push it to front of visible list |
| Hovered tab is at minimum width | `flex-grow: 3` on hover will expand it; other tabs absorb the deficit down to their `min-width: 52px` |
| Tabs added/removed rapidly | `ResizeObserver` debounced or run in `useLayoutEffect` after render to avoid thrash |
| Container resize (window resize, sidebar toggle) | `ResizeObserver` catches this automatically |
