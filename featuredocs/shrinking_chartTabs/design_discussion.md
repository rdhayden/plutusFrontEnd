# Design Discussion — Chart Tabs Shrink to Fit

---

## 1. Summary of change request

The chart tab bar currently allows tabs to overflow the viewport as more tickers are opened, making rightmost tabs inaccessible. This change makes the tab bar self-contained within the viewport at all times through three cooperating behaviours:

1. **Proportional shrink** — as the tab count grows, all tabs compress horizontally in equal proportion, with ticker text truncated by ellipsis as needed.
2. **Hover expand** — when a user hovers a shrunken tab, that tab expands to reveal its full ticker text and close button; all other tabs compress equally to absorb the difference, keeping the total within the viewport.
3. **+N overflow pill** — if tabs compress to their minimum width and tabs would still overflow, excess tabs are hidden and a `+N` pill appears at the right of the bar. Clicking the pill reveals the hidden tabs, and selecting one brings it into the visible set.

---

## 2. Current state

The tab bar is rendered in `src/components/ChartPanel.tsx` (lines 358–429) as a `display: flex` container using fully inline styles. Tabs are driven by a `ChartTab[]` array held in `page.tsx` state, where each entry carries `{ id, ticker, exchange, name, data, ... }`.

Each tab renders two child elements: a `<span>` for the ticker symbol (15px, bold when active) and an optional `<span>` for the company name (11px muted, already capped at `maxWidth: 120px` with ellipsis). The active tab is indicated by a `2px solid var(--color-primary)` bottom border and bold blue text. A close `×` button is always visible.

The container has no `overflow` handling. When tabs exceed the available width they simply spill off the right edge of the screen and become unreachable. There is no minimum width, no shrink logic, and no scroll or overflow affordance of any kind.

The existing tab button has a `0.15s` CSS colour transition, which sets the animation baseline for the design system.

---

## 3. Desired end state

When this work is complete:

- The tab bar never overflows the viewport, regardless of how many tickers are open.
- All tabs compress proportionally and equally as more are added, with the ticker symbol truncated by ellipsis when the tab is too narrow to show it in full.
- The company name is never shown in the tab bar (removed entirely).
- The close button is hidden on all tabs by default and revealed only when a tab is hovered.
- When a user hovers a tab, that tab expands to show its full ticker text and close button; all other tabs compress equally in response, and the total width remains within the viewport.
- When tabs reach their minimum width (52px) and would still overflow, the rightmost tabs are hidden and a `+N` pill is displayed. Clicking the pill reveals the hidden tickers; selecting one brings that tab into the visible set.
- The active tab is always kept in the visible set — it is never hidden behind the `+N` pill. The original tab order is preserved; the visible window shifts right as needed so the active tab is always the last visible tab.
- When a hidden tab is selected from the pill dropdown, that tab is moved to the end of the visible set in the tab order and becomes the active tab.
- All width transitions animate at `0.15s ease`, consistent with the existing tab colour transitions.

---

## 4. Out of scope

- **Horizontal scroll** on the tab bar — tabs shrink and hide behind the `+N` pill instead.
- **Active tab preferential sizing** — the active tab shrinks equally with all others; it receives no extra width unless hovered.
- **Company name in tabs** — removed entirely; not shown even when space is ample.
- **Per-tab exchange label** — exchange is part of the tab's `id` for identification purposes only, not displayed in the tab.
- **Tab reordering by drag** — the order tabs appear in the bar is not changed by this feature except when a hidden tab is selected from the pill (it moves to end of visible set).
- **Mobile / touch behaviour** — hover-expand is a mouse interaction; touch behaviour is not addressed in this ticket.
- **Persisting the visible/hidden tab split** — the overflow state is derived at runtime from container width and tab count; it is not saved to the chart state persistence layer.

---

## 5. Patterns to follow

### 5.1 CSS flex proportional shrink with `:has()` hover expand

All tab sizing is handled in CSS without per-event JavaScript. The container uses `overflow: hidden` to clip overflow. Each tab gets `flex: 1 1 0` (grow and shrink equally from a zero base) and a `min-width: 52px`. The CSS `:has()` selector on the container detects when any child tab is hovered and adjusts flex weights across all tabs simultaneously, causing the hovered tab to expand and all others to compress equally.

The close button and ticker ellipsis are also handled purely in CSS — close button hidden by default, shown on `:hover`; ticker text truncated with `text-overflow: ellipsis`.

```css
/* src/components/ChartTabBar.module.css */

.tabBar {
  display: flex;
  overflow: hidden;
  min-height: 48px;
  align-items: stretch;
  padding: 0 var(--inset-s);
  background: var(--color-bg-secondary);
  border-bottom: 1px solid var(--color-border);
}

.tab {
  flex: 1 1 0;
  min-width: 52px;
  overflow: hidden;
  display: flex;
  align-items: center;
  transition: flex-grow 0.15s ease;
}

/* when any tab is hovered, shrink all others and expand the hovered one */
.tabBar:has(.tab:hover) .tab:not(:hover) {
  flex-grow: 0.3;
}
.tab:hover {
  flex-grow: 3;
}

.ticker {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* close button hidden by default, visible on tab hover */
.closeBtn {
  display: none;
}
.tab:hover .closeBtn {
  display: flex;
}
```

---

### 5.2 `useLayoutEffect` + `ResizeObserver` for +N overflow pill

CSS alone cannot conditionally hide tabs when they overflow — that requires JS measurement. A `ResizeObserver` watches the container width and recalculates how many tabs fit at `MIN_TAB_WIDTH` after reserving space for the pill. The result is stored as `visibleCount` in component state.

The original tab array order is preserved. The visible window is a contiguous slice of the ordered array. When the active tab falls outside the window, the window shifts so the active tab occupies the last visible slot. When a hidden tab is selected from the pill, it is moved to the end of the visible window in the tabs array and set as active.

```tsx
const containerRef = useRef<HTMLDivElement>(null);
const PILL_RESERVE = 44; // px reserved for the +N pill when it is needed
const MIN_TAB_WIDTH = 52;

const [visibleCount, setVisibleCount] = useState(tabs.length);

useLayoutEffect(() => {
  const el = containerRef.current;
  if (!el) return;
  const measure = () => {
    const totalFit = Math.floor(el.clientWidth / MIN_TAB_WIDTH);
    const fitWithPill = Math.max(1, Math.floor((el.clientWidth - PILL_RESERVE) / MIN_TAB_WIDTH));
    // only reserve pill space if we actually need it
    setVisibleCount(tabs.length <= totalFit ? tabs.length : fitWithPill);
  };
  measure();
  const ro = new ResizeObserver(measure);
  ro.observe(el);
  return () => ro.disconnect();
}, [tabs.length]);

// Shift window so active tab is always the last visible slot
const activeIndex = tabs.findIndex(t => t.id === activeTab);
const windowEnd = Math.max(visibleCount, activeIndex + 1);
const windowStart = windowEnd - visibleCount;
const visibleTabs = tabs.slice(windowStart, windowEnd);
const hiddenTabs  = [...tabs.slice(0, windowStart), ...tabs.slice(windowEnd)];
```

---

### 5.3 Fixed-position floating panel with click-outside and Escape dismiss

The existing codebase uses this pattern for the search results context menu (`SearchResults.tsx` lines 35–54, 208–285). The `+N` pill dropdown follows the same convention: a `ref` on the panel element, a `mousedown` listener on `document`, and an `Escape` key handler to close. The panel is positioned using `position: fixed` with coordinates derived from the pill button's `getBoundingClientRect()`.

```tsx
const pillRef  = useRef<HTMLDivElement>(null);
const pillBtnRef = useRef<HTMLButtonElement>(null);
const [pillOpen, setPillOpen] = useState(false);

useEffect(() => {
  if (!pillOpen) return;
  const onDown = (e: MouseEvent) => {
    if (pillRef.current && !pillRef.current.contains(e.target as Node))
      setPillOpen(false);
  };
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') setPillOpen(false);
  };
  document.addEventListener('mousedown', onDown);
  document.addEventListener('keydown', onKey);
  return () => {
    document.removeEventListener('mousedown', onDown);
    document.removeEventListener('keydown', onKey);
  };
}, [pillOpen]);

// Dropdown positioned below the pill button
const rect = pillBtnRef.current?.getBoundingClientRect();
// <div ref={pillRef} style={{ position: 'fixed', top: rect.bottom, right: window.innerWidth - rect.right }} />
```

The dropdown lists hidden tickers as buttons styled consistently with the existing context menu (`background: var(--color-bg)`, `border: 1px solid var(--color-border)`, `borderRadius: var(--radius-m)`, `boxShadow: 0 4px 12px rgba(0,0,0,0.12)`). Selecting a tab closes the dropdown, moves the tab to the end of the visible window in the `tabs` array, and sets it as active.

---

### 5.4 CSS module introduction

This feature introduces the project's first CSS module (`src/components/ChartTabBar.module.css`). All other components use inline styles. The CSS module is needed here specifically because the `:has()` parent selector (Pattern 5.1) cannot be expressed in inline styles — it requires real CSS class selectors targeting child elements from a parent context.

The module is scoped to the tab bar only. No other components are migrated. The tab bar container and each tab item switch from inline style objects to `styles.tabBar` / `styles.tab` class names; the remaining inline styles on buttons and text spans that do not require `:has()` targeting may stay inline to minimise diff.
