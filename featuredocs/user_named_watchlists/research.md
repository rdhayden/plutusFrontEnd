# Research — User Named Watchlists

## Status of Clarifying Questions

All questions resolved.

| # | Question | Decision |
|---|----------|----------|
| 1 | Name input UX | Modal/dialog |
| 2 | Empty state on first load | "Add Watchlist" button only |
| 3 | Panel collapsing | Yes — already collapsible today |
| 4 | Watchlist deletion | X icon on header; confirm if non-empty |
| 5 | Watchlist renaming | Yes |
| 6 | Ticker duplicates | Allowed across watchlists |
| 7 | Maximum watchlists | 50 watchlists, 1000 entries each |
| 8 | Watchlist ordering | Drag-and-drop reorder |
| 9 | Right-click context menu | Already implemented — needs updating |
| 10 | Name validation | Alphanumeric + spaces, max 30 chars |
| 11 | Database technology | PostgreSQL / raw SQL / `pg` — migration in scope |
| 12 | Existing watchlist API | All in Next.js — update + 4 new endpoints |
| 13 | API changes ownership | In scope for this ticket |
| 14 | User identity / auth | No auth — hardcoded `"plutus"` username unchanged |
| 15 | Persistence contract | Update existing API with `watchlist_name` |
| — | Notes scoping | Per-ticker globally (shared across all watchlists) |
| — | State management | Extract to custom `useWatchlists` hook |

---

## Q9 — Right-click context menu

**Already implemented** in [src/components/SearchResults.tsx](src/components/SearchResults.tsx).

Today: right-click a search result → a popup with a single "Add to watchlist" item (greyed out as "Already in watchlist" if already present). Clicking calls `onAddToWatchlist(result)` in [src/app/page.tsx](src/app/page.tsx).

**Changes required:**

The single "Add to watchlist" item must become a list of available watchlist names for the user to choose from. If no watchlists exist the list should contain only the message "no watchlists".

- `SearchResults` receives the list of watchlist names as a prop (from `useWatchlists`).
- The `onAddToWatchlist` callback signature changes to `(result, watchlistName)`.
- The "already in watchlist" disabled state now applies per-watchlist (a ticker may still be added to another watchlist even if it is already in one).

---

## Q11 — Database: technology and migration

**Technology:** PostgreSQL. Raw SQL via the `pg` Node.js connection pool ([src/lib/db.ts](src/lib/db.ts)). No ORM, no migration framework.

**Current schema** (in [src/sql](src/sql)):

```sql
CREATE TABLE watchlist (
  username TEXT NOT NULL,
  ticker   TEXT NOT NULL,
  notes    TEXT NOT NULL DEFAULT '',
  PRIMARY KEY (username, ticker)
);
```

**In-scope migration steps** (to be executed against the live database):

```sql
-- 1. Delete all existing entries as agreed
DELETE FROM watchlist;

-- 2. Drop the existing primary key
ALTER TABLE watchlist DROP CONSTRAINT watchlist_pkey;

-- 3. Add watchlist_name column
ALTER TABLE watchlist ADD COLUMN watchlist_name TEXT NOT NULL DEFAULT '';

-- 4. New primary key — (username, watchlist_name, ticker)
ALTER TABLE watchlist ADD PRIMARY KEY (username, watchlist_name, ticker);

-- 5. New table for watchlist metadata (name + display order)
CREATE TABLE watchlists (
  username      TEXT NOT NULL,
  name          TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (username, name)
);
```

**Final schema after migration:**

```sql
-- Ticker entries
CREATE TABLE watchlist (
  username       TEXT    NOT NULL,
  watchlist_name TEXT    NOT NULL,
  ticker         TEXT    NOT NULL,
  notes          TEXT    NOT NULL DEFAULT '',
  PRIMARY KEY (username, watchlist_name, ticker)
);

-- Watchlist metadata
CREATE TABLE watchlists (
  username      TEXT    NOT NULL,
  name          TEXT    NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (username, name)
);
```

The [src/sql](src/sql) file must be updated to reflect the new final schema.

**Notes** remain keyed by `(username, ticker)` globally — the same note is shared if a ticker appears in multiple watchlists. The `notes` column stays on the `watchlist` entries table so it is returned alongside ticker rows; the application deduplicates the note value in memory when the same ticker appears in multiple watchlists.

---

## Q12 — API: updated routes and new endpoints

All routes remain in the Next.js app. The `const USERNAME = "plutus"` hardcoding is unchanged throughout.

### Updated existing routes

#### `src/app/api/watchlist/route.ts`

| Method | Current behaviour | New behaviour |
|--------|------------------|---------------|
| `GET /api/watchlist?name=:watchlist_name` | Returns all entries for the user | Returns `[{ ticker, notes }]` filtered to the given `watchlist_name` query param |
| `POST /api/watchlist` | Upserts `{ ticker, notes? }` | Upserts `{ watchlist_name, ticker, notes? }` — conflict key is now `(username, watchlist_name, ticker)` |

#### `src/app/api/watchlist/[ticker]/route.ts`

Both methods now require `watchlist_name` as a query parameter so the correct entry is targeted when the same ticker exists in multiple watchlists.

| Method | New signature | New behaviour |
|--------|---------------|---------------|
| `PATCH /api/watchlist/:ticker?name=:watchlist_name` | `{ notes }` body | Updates notes for `(username, watchlist_name, ticker)` |
| `DELETE /api/watchlist/:ticker?name=:watchlist_name` | — | Deletes entry for `(username, watchlist_name, ticker)` |

### New endpoints

#### `src/app/api/watchlists/route.ts`

| Method | Behaviour |
|--------|-----------|
| `GET /api/watchlists` | Returns `[{ name, display_order }]` ordered by `display_order` — used on initial page render to populate all watchlist panels |
| `POST /api/watchlists` | Creates a new watchlist: `{ name }` body. Validates: non-empty, alphanumeric + spaces only, max 30 chars, unique per user. Returns `{ ok: true }` or `{ error: "Watchlist name must be unique" }`. Rejects if user already has 50 watchlists. |

#### `src/app/api/watchlists/[name]/route.ts`

| Method | Behaviour |
|--------|-----------|
| `PATCH /api/watchlists/:name` | Renames a watchlist or updates its order. Body: `{ newName?: string, display_order?: number }`. Renaming cascades to all `watchlist` entries for that name. Validates uniqueness and name rules if renaming. |
| `DELETE /api/watchlists/:name` | Deletes the watchlist row and all its `watchlist` entries in a transaction. |

---

## Q14 — Authentication

No authentication exists. Every API route uses `const USERNAME = "plutus"`. No changes to auth are in scope for this ticket.

---

## Additional implementation details

### State management — `useWatchlists` hook

**Decision: extract to a custom hook.**

Create `src/hooks/useWatchlists.ts`. It encapsulates:

- All watchlist state (list of watchlists, per-watchlist open/closed, ticker entries, notes)
- All API calls (load on mount, create, rename, delete watchlist; add, remove, update notes for ticker)
- Optimistic UI updates with rollback on API error

`page.tsx` receives the hook's return value and passes slices down to `Watchlist.tsx` and `SearchResults.tsx` as props. The three current state variables in `page.tsx` (`watchlistItems`, `watchlistOpen`, `watchlistNotes`) are removed and replaced by the hook.

**Core types:**

```typescript
interface WatchlistEntry {
  ticker: string;
  name: string;   // company name from search
  notes: string;
}

interface Watchlist {
  name: string;
  displayOrder: number;
  isOpen: boolean;          // UI-only, not persisted
  entries: WatchlistEntry[];
}
```

Notes are stored in the hook as `Record<string, string>` keyed by ticker (global, shared across watchlists). When returning entries the hook attaches the shared note to each entry.

### Drag-and-drop — `@dnd-kit`

No drag-and-drop library is currently installed. **Install `@dnd-kit/core` and `@dnd-kit/sortable`.**

The watchlist panel list in the sidebar will be wrapped in a `DndContext` + `SortableContext`. Each panel header will have a drag handle. On drag-end, `display_order` values are recomputed and persisted via `PATCH /api/watchlists/:name`.

### Rename interaction

A double-click on the watchlist panel header name (or a dedicated edit/pencil icon) opens an inline text input pre-filled with the current name. On blur or Enter the new name is validated and `PATCH /api/watchlists/:name` is called. On Escape the edit is cancelled.

### Delete confirmation

Clicking the X icon on a non-empty watchlist triggers a modal (reuse the same modal pattern used for "Add Watchlist") with the message:
> "Watchlist not empty, are you sure you want to delete it?"

Two buttons: **Yes** (calls `DELETE /api/watchlists/:name`) and **No** (closes modal). If the watchlist is empty, the delete proceeds immediately without confirmation.

### `src/sql` file

The existing [src/sql](src/sql) file must be replaced with the updated final schema (both `watchlist` and `watchlists` tables) so the checked-in schema stays in sync with the live database.
