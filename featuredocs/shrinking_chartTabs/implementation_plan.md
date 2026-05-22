# Implementation Plan — Chart Tabs Shrink to Fit

---

## Phase 1 — CSS module + structural refactor

**Goal:** Introduce `ChartTabBar.module.css` and migrate the tab bar markup to use CSS classes, with no behaviour change visible to the user. This creates the class selectors needed by `:has()` in Phase 2 and is a safe, isolated refactor.

### Steps

1. Create `src/components/ChartTabBar.module.css` with class definitions for:
   - `.tabBar` — container layout (flex, overflow hidden, min-height, padding, background, border)
   - `.tab` — per-tab wrapper (flex, align-items, border-bottom for active indicator, margin-bottom)
   - `.tabBtn` — the clickable button inside each tab (padding, color, transition)
   - `.ticker` — the ticker `<span>` (white-space nowrap, overflow hidden, text-overflow ellipsis)
   - `.closeBtn` — the close button (always rendered but `display: none` by default; `display: flex` on `.tab:hover`)

2. In `ChartPanel.tsx`, replace the tab container's inline style object with `styles.tabBar` and each tab wrapper's inline style with `styles.tab`. Active tab bottom-border is driven by a conditional class (e.g. `styles.tabActive`) rather than a ternary inline style.

3. Remove the company name `<span>` from each tab's render output entirely.

4. Move the close button's visibility from always-on to CSS-only: remove the `display: "flex"` inline style from the button and let `.closeBtn` / `.tab:hover .closeBtn` handle it.

5. All other inline styles on `ChartPanel.tsx` (chart header, chart body, etc.) are left untouched.

### Files changed
- `src/components/ChartTabBar.module.css` — created
- `src/components/ChartPanel.tsx` — tab bar section only (lines 358–429)

### Testing
- **Visual regression:** With 1–4 tabs open, the tab bar looks identical to today (same height, spacing, active indicator colour, font weight).
- **Close button:** Hovering a tab reveals the `×`; moving the mouse away hides it. Clicking it still closes the tab and the correct tab becomes active.
- **Active indicator:** Clicking between tabs correctly moves the blue bottom border and bold text.
- **Company name gone:** No company name text appears in any tab.
- **No overflow change yet:** With many tabs open, overflow behaviour is the same as before Phase 1 (tabs still spill — this is expected at this stage).

---

## Phase 2 — Proportional shrink and hover expand

**Goal:** Tabs now compress proportionally as more are opened, and a hovered tab expands while siblings compress equally. No JS logic needed — this phase is pure CSS additions to the module from Phase 1.

### Steps

1. In `.tab`, add:
   - `flex: 1 1 0` — equal grow and shrink from a zero base
   - `min-width: 52px` — floor below which a tab will not compress
   - `overflow: hidden` — clip content within the tab bounds
   - `transition: flex-grow 0.15s ease` — animate the expand/compress

2. Add the `:has()` hover rules to `.tabBar`:
   ```css
   .tabBar:has(.tab:hover) .tab:not(:hover) {
     flex-grow: 0.3;
   }
   .tab:hover {
     flex-grow: 3;
   }
   ```

3. Confirm `.ticker` already has `overflow: hidden; text-overflow: ellipsis; white-space: nowrap` from Phase 1 — no additional changes needed for truncation.

### Files changed
- `src/components/ChartTabBar.module.css` — additions to `.tab` and `.tabBar` only

### Testing
- **Few tabs (1–3):** Tabs fill available width naturally; no shrinking visible; hover has no noticeable effect.
- **Moderate tabs (~6–10):** Tabs compress proportionally; ticker text truncates with ellipsis on narrower tabs. Hovering any tab expands it and visibly compresses siblings; close button appears on the hovered tab only.
- **Many tabs (~15+):** All tabs compress to or near 52px; text is truncated to short prefixes. Hovering still expands correctly.
- **Active tab:** Active indicator (blue border, bold text) still works correctly on shrunken and hovered tabs.
- **Animation:** Expand/compress transition is smooth at ~0.15s; no jank on rapid hover moves between tabs.
- **Overflow boundary:** With enough tabs to exceed the container at 52px minimum, tabs clip at the right edge (pill not yet present — expected at this stage).

---

## Phase 3 — +N overflow pill: detection and visible window

**Goal:** When tabs would overflow at their minimum width, excess tabs are hidden and a `+N` pill appears. The visible window always keeps the active tab as the last visible slot. No dropdown interaction yet — just the pill rendering and count.

### Steps

1. Add a `containerRef` on the tab bar container `<div>`.

2. Add `useLayoutEffect` + `ResizeObserver` in `ChartPanel.tsx`:
   - Calculate `totalFit = Math.floor(clientWidth / MIN_TAB_WIDTH)`.
   - If `tabs.length <= totalFit`, set `visibleCount = tabs.length` (no pill needed).
   - Otherwise, set `visibleCount = Math.max(1, Math.floor((clientWidth - PILL_RESERVE) / MIN_TAB_WIDTH))` where `PILL_RESERVE = 44`.
   - Store `visibleCount` in local state; re-run on `tabs.length` change and container resize.

3. Compute the visible window, preserving original tab order and shifting the window so the active tab is always the last visible slot:
   ```ts
   const activeIndex  = tabs.findIndex(t => t.id === activeTab);
   const windowEnd    = Math.max(visibleCount, activeIndex + 1);
   const windowStart  = windowEnd - visibleCount;
   const visibleTabs  = tabs.slice(windowStart, windowEnd);
   const hiddenTabs   = [...tabs.slice(0, windowStart), ...tabs.slice(windowEnd)];
   ```

4. Render only `visibleTabs` in the tab bar. When `hiddenTabs.length > 0`, render a `+N` pill button at the right of the container (outside the flex-shrink area, so it never compresses).

5. Pill button styling: compact (≈44px wide), same height as tab bar, muted text colour, bordered, consistent with design tokens. No dropdown yet — clicking it does nothing in this phase.

### Files changed
- `src/components/ChartPanel.tsx` — `useLayoutEffect`, `ResizeObserver`, window calculation, conditional `visibleTabs` render, pill button
- `src/components/ChartTabBar.module.css` — `.pill` button styles

### Testing
- **No overflow:** With few tabs, no pill appears; all tabs visible; tabs flex normally.
- **Overflow threshold:** Adding tabs one-by-one, the pill appears exactly when tabs would hit 52px minimum. The pill shows the correct hidden count.
- **Window shift on tab switch:** With 15 tabs and 8 visible, clicking tab 12 (currently hidden) is not possible yet — but switching active tab via other means (e.g. closing tabs to expose it) correctly shifts the window so the active tab is last visible.
- **Active tab never hidden:** Regardless of how many tabs are open, the active tab is always rendered in the tab bar.
- **Pill stays fixed width:** The pill does not shrink when tabs are compressed.
- **Container resize:** Resizing the browser window (or toggling the sidebar) correctly recalculates visible count and updates the pill count.

---

## Phase 4 — +N pill dropdown and hidden tab selection

**Goal:** Clicking the `+N` pill opens a dropdown listing hidden tickers. Selecting one moves it to the end of the visible window in the tabs array and makes it active. This completes the feature.

### Steps

1. Add `pillOpen: boolean` and `pillBtnRef` / `pillRef` to `ChartPanel.tsx` (or extract to a small `OverflowPill` component).

2. Wire click-outside and Escape dismiss following the `SearchResults.tsx` context menu pattern (Pattern 5.3 in design discussion):
   - `mousedown` listener on `document` comparing against `pillRef`
   - `keydown` listener for `Escape`
   - Both listeners added only when `pillOpen` is true; cleaned up on close

3. Position the dropdown using `position: fixed` at the bottom-left of the pill button (`getBoundingClientRect()`), opening downward into the chart area.

4. Render hidden tabs as a list of buttons in the dropdown, each showing the ticker symbol. Style consistent with the existing context menu: `var(--color-bg)` background, `var(--color-border)` border, `var(--radius-m)` corners, `0 4px 12px rgba(0,0,0,0.12)` shadow. `onMouseEnter`/`onMouseLeave` background highlight matching `SearchResults.tsx`.

5. On hidden tab selection:
   - Close the dropdown.
   - Move the selected tab to position `windowEnd - 1` in the `tabs` array (end of visible window) by reordering the array in state.
   - Set the selected tab as `activeTab`.

6. The window calculation from Phase 3 then naturally places the newly active tab at the last visible slot.

### Files changed
- `src/components/ChartPanel.tsx` — pill open state, dropdown render, click-outside effect, tab reorder on selection
- `src/components/ChartTabBar.module.css` — `.pillDropdown`, `.pillDropdownItem` styles

### Testing
- **Pill click:** Clicking the `+N` pill opens the dropdown below the pill button listing all hidden tickers.
- **Click outside:** Clicking anywhere outside the dropdown closes it without selecting a tab.
- **Escape key:** Pressing Escape closes the dropdown without selecting a tab.
- **Select hidden tab:** Clicking a ticker in the dropdown closes the dropdown, switches to that tab (chart updates), and the selected tab appears as the last visible tab in the bar with the active indicator.
- **Tab order preserved for others:** Selecting a hidden tab moves only that tab; all other tabs remain in their original relative order.
- **Pill count updates:** After selecting a hidden tab, the pill count decrements (or disappears if all tabs now fit).
- **Pill with one hidden tab:** `+1` pill works correctly; selecting the one hidden tab makes the pill disappear.
- **Rapid interaction:** Opening and closing the dropdown rapidly, switching tabs while dropdown is open — no stale state or layout thrash.
- **Full end-to-end:** Open 20+ tickers, navigate via pill, close tabs, resize window — tab bar remains consistent and fully within viewport throughout.
