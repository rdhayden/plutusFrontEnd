# Plutus Frontend

A trading chart dashboard built with Next.js. Search for tickers, view candlestick charts, overlay technical signals, and manage a persistent watchlist.

## Features

- **Multi-tab charting** — open multiple tickers simultaneously, each with independent candlestick data
- **Technical signals** — fetch and overlay configurable signal indicators on any chart
- **Timeframe & timespan controls** — switch between TICK / SECOND / MINUTE / HOUR / DAY / WEEK / MONTH; expand or shrink the visible date range
- **Live mode** — toggle to re-fetch all open charts and signals with live data
- **Watchlist** — save tickers, annotate them with notes; persisted to PostgreSQL
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

Create the watchlist table in PostgreSQL:

```sql
CREATE TABLE watchlist (
  username TEXT NOT NULL,
  ticker   TEXT NOT NULL,
  notes    TEXT NOT NULL DEFAULT '',
  PRIMARY KEY (username, ticker)
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
│   │   │   ├── route.ts          # POST — fetch a signal from the GraphQL backend
│   │   │   ├── callback/route.ts # POST — receive async signal results
│   │   │   └── available/route.ts# GET  — list available signals
│   │   ├── tickers/search/route.ts # GET — proxy ticker prefix search
│   │   └── watchlist/
│   │       ├── route.ts          # GET / POST watchlist entries
│   │       └── [ticker]/route.ts # PATCH / DELETE a watchlist entry
│   ├── page.tsx                  # Main dashboard page
│   └── layout.tsx
├── components/
│   ├── Header.tsx                # Top bar with live mode toggle
│   ├── SearchBar.tsx             # Debounced ticker search input
│   ├── SearchResults.tsx         # Search result dropdown
│   ├── Watchlist.tsx             # Collapsible watchlist sidebar
│   ├── NotesPanel.tsx            # Per-ticker notes editor
│   ├── ChartPanel.tsx            # Tab-based chart container
│   ├── CandlestickChart.tsx      # lightweight-charts integration
│   └── SignalConfigPanel.tsx     # Signal parameter form
├── lib/
│   ├── types.ts                  # Shared TypeScript interfaces
│   ├── signal-store.ts           # In-memory store bridging async signal callbacks
│   └── db.ts                     # PostgreSQL connection pool
└── styles/
    └── design-tokens.css         # CSS custom properties (colours, spacing, typography)
```

## Signal flow

1. The frontend POSTs to `/api/signals` with a signal name, parameters, ticker, exchange, and timeframe.
2. The API route sends a GraphQL mutation to the backend, including a callback URL.
3. The backend computes the signal and POSTs OHLCV + time-series data to `/api/signals/callback`.
4. The in-memory signal store resolves the pending promise and the response is returned to the browser.
