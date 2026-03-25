# Plutus Frontend

A trading chart dashboard built with Next.js. Search for tickers, view candlestick charts, overlay technical signals, and manage a persistent watchlist.

## Features

- **Multi-tab charting** — open multiple tickers simultaneously, each with independent candlestick data; same ticker on different exchanges opens as separate tabs
- **Volume sub-chart** — separate histogram sub-chart below each candlestick chart showing volume bars coloured green (up), red (down), or grey (flat); toggleable per tab via a "Vol" button; volume value shown in the sub-chart's own crosshair tooltip; scroll/zoom and crosshair position synchronised with the main chart
- **Technical signals** — fetch and overlay configurable signal indicators on any chart
- **Timeframe & timespan controls** — switch between TICK / SECOND / MINUTE / HOUR / DAY / WEEK / MONTH; expand or shrink the visible date range
- **Live mode** — toggle to re-fetch all open charts and signals with live data
- **Drawings** — add horizontal lines to any chart via the Drawings dropdown; drag lines up or down; right-click a line to delete it
- **Watchlist** — save tickers (with exchange) across named, reorderable watchlists; annotate with notes; persisted to PostgreSQL
- **Ticker search** — debounced prefix search backed by the ticker search API

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Charts | lightweight-charts v5 |
| Styling | Tailwind CSS v4 + CSS custom properties |
| Database | PostgreSQL (`pg`) |
| Testing | Vitest + Testing Library |

## Prerequisites

Three external services must be running before starting the frontend:

| Service | Default address |
|---|---|
| PostgreSQL | `localhost:5432` |
| Ticker search API | `localhost:4001` |
| GraphQL signals backend | `localhost:8000` |

## Environment variables

Copy `.env` and adjust values as needed:

```
POSTGRES_USER=plutus
POSTGRES_PASSWORD=yourpassword
POSTGRES_DB=plutus
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
TICKER_SEARCH_URL=http://localhost:4001/tickers/search
GRAPHQL_URL=http://localhost:8000/graphql
```

## Database setup

Create the tables in PostgreSQL:

```sql
CREATE TABLE watchlists (
  username      TEXT    NOT NULL,
  name          TEXT    NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (username, name)
);

CREATE TABLE watchlist (
  username       TEXT NOT NULL,
  watchlist_name TEXT NOT NULL,
  ticker         TEXT NOT NULL,
  exchange       TEXT,
  notes          TEXT NOT NULL DEFAULT '',
  PRIMARY KEY (username, watchlist_name, ticker)
);

CREATE TABLE chart_tabs (
  username      TEXT    NOT NULL,
  tab_id        TEXT    NOT NULL,
  ticker        TEXT    NOT NULL,
  exchange      TEXT,
  name          TEXT    NOT NULL,
  timeframe     TEXT    NOT NULL,
  from_date     TEXT    NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  is_active     BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (username, tab_id)
);

CREATE TABLE chart_tab_signals (
  username       TEXT    NOT NULL,
  tab_id         TEXT    NOT NULL,
  signal_hash    BIGINT  NOT NULL,
  signal_name    TEXT    NOT NULL,
  specification  JSONB   NOT NULL,
  visualise_with JSONB   NOT NULL DEFAULT '[]',
  display_order  INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (username, tab_id, signal_hash)
);

CREATE TABLE chart_tab_drawings (
  username   TEXT    NOT NULL,
  tab_id     TEXT    NOT NULL,
  drawing_id TEXT    NOT NULL,
  price      NUMERIC NOT NULL,
  PRIMARY KEY (username, tab_id, drawing_id)
);
```

## Getting started

```bash
npm install
npm run dev
```

The app runs on [http://localhost:3000](http://localhost:3000).

## Available scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├── app/
│   ├── api/
│   │   ├── signals/
│   │   │   ├── route.ts              # POST — fetch a signal from the GraphQL backend
│   │   │   ├── callback/route.ts     # POST — receive async signal results
│   │   │   └── available/route.ts    # GET  — list available signals
│   │   ├── tickers/search/route.ts   # GET  — proxy ticker prefix search
│   │   ├── chart-state/route.ts      # GET / POST — persist & restore open chart tabs
│   │   ├── watchlist/
│   │   │   ├── route.ts              # GET / POST watchlist entries
│   │   │   └── [ticker]/route.ts     # PATCH / DELETE a watchlist entry
│   │   └── watchlists/
│   │       ├── route.ts              # GET / POST named watchlists
│   │       ├── all/route.ts          # GET  — all watchlists with entries
│   │       ├── reorder/route.ts      # POST — persist watchlist display order
│   │       └── [name]/route.ts       # PATCH / DELETE a named watchlist
│   ├── backtest/page.tsx             # Placeholder page
│   ├── scanner/page.tsx              # Placeholder page
│   ├── journal/page.tsx              # Placeholder page
│   ├── page.tsx                      # Main dashboard page
│   └── layout.tsx
├── components/
│   ├── Header.tsx                    # Top bar with live mode toggle
│   ├── SearchBar.tsx                 # Debounced ticker search input
│   ├── SearchResults.tsx             # Search result dropdown
│   ├── Watchlist.tsx                 # Collapsible watchlist panel
│   ├── SortableWatchlistItem.tsx     # Drag-and-drop watchlist wrapper
│   ├── AddWatchlistModal.tsx         # Modal for creating a new watchlist
│   ├── ConfirmDialog.tsx             # Generic confirmation dialog
│   ├── NotesPanel.tsx                # Per-ticker notes editor
│   ├── ChartPanel.tsx                # Tab-based chart container
│   ├── CandlestickChart.tsx          # lightweight-charts candlestick chart
│   ├── VolumeChart.tsx               # lightweight-charts volume histogram sub-chart
│   └── SignalConfigPanel.tsx         # Signal parameter form
├── hooks/
│   └── useWatchlists.ts              # Watchlist state and API sync
├── lib/
│   ├── types.ts                      # Shared TypeScript interfaces
│   ├── signal-store.ts               # In-memory store bridging async signal callbacks
│   └── db.ts                         # PostgreSQL connection pool
└── styles/
    └── design-tokens.css             # CSS custom properties (colours, spacing, typography)
```

## Signal flow

1. The frontend POSTs to `/api/signals` with a signal name, parameters, ticker, exchange, and timeframe.
2. The API route sends a GraphQL mutation to the backend, including a callback URL.
3. The backend computes the signal and POSTs OHLCV + time-series data to `/api/signals/callback`.
4. The in-memory signal store resolves the pending promise and the response is returned to the browser.
