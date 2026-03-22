"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import Watchlist from "@/components/Watchlist";
import SearchResults from "@/components/SearchResults";
import ChartPanel from "@/components/ChartPanel";
import { TickerSearchResult, ChartTab, Timeframe, AvailableSignal } from "@/lib/types";

const formatDate = (d: Date) => d.toISOString().split("T")[0];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<TickerSearchResult[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [chartTabs, setChartTabs] = useState<ChartTab[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [isLoadingChart, setIsLoadingChart] = useState(false);
  const [availableSignals, setAvailableSignals] = useState<AvailableSignal[]>([]);
  const [selectedSignal, setSelectedSignal] = useState("");
  const [liveMode, setLiveMode] = useState(false);
  const [watchlistItems, setWatchlistItems] = useState<TickerSearchResult[]>([]);
  const [watchlistOpen, setWatchlistOpen] = useState(false);
  const [watchlistNotes, setWatchlistNotes] = useState<Record<string, string>>({});

  const searchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastSearchRef = useRef("");

  const searchTickers = useCallback(async (query: string) => {
    if (query.length < 2) return;
    lastSearchRef.current = query;
    setIsSearching(true);
    try {
      const res = await fetch(
        `/api/tickers/search?prefix=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      if (lastSearchRef.current === query) {
        setSearchResults(data);
      }
    } catch {
      console.error("Search failed");
    } finally {
      setIsSearching(false);
    }
  }, []);

  const handleSearchChange = useCallback(
    (value: string) => {
      setSearchQuery(value);

      if (value.length >= 1) {
        setShowSearchResults(true);
      } else {
        setShowSearchResults(false);
        setSearchResults([]);
      }

      if (searchTimerRef.current) {
        clearTimeout(searchTimerRef.current);
      }

      if (value.length >= 2) {
        searchTimerRef.current = setTimeout(() => {
          searchTickers(value);
        }, 700);
      } else {
        setSearchResults([]);
      }
    },
    [searchTickers]
  );

  useEffect(() => {
    return () => {
      if (searchTimerRef.current) {
        clearTimeout(searchTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    fetch("/api/signals/available")
      .then((res) => res.json())
      .then((data) => setAvailableSignals(data.signals || []))
      .catch(() => console.error("Failed to fetch available signals"));
  }, []);

  // Load watchlist from DB on mount
  useEffect(() => {
    fetch("/api/watchlist")
      .then((res) => res.json())
      .then((rows: { ticker: string; notes: string }[]) => {
        setWatchlistItems(rows.map((r) => ({ ticker: r.ticker, name: null, exchange: null })));
        const notes: Record<string, string> = {};
        for (const r of rows) {
          if (r.notes) notes[r.ticker] = r.notes;
        }
        setWatchlistNotes(notes);
        if (rows.length > 0) setWatchlistOpen(true);
      })
      .catch(() => console.error("Failed to load watchlist"));
  }, []);

  // Debounce timer ref for note saves
  const noteDebounceRef = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  // Keep a ref to the latest chartTabs so the liveMode effect never captures a stale value
  const chartTabsRef = useRef<ChartTab[]>(chartTabs);
  chartTabsRef.current = chartTabs;

  // Re-fetch all open charts when liveMode is toggled (skip initial mount)
  const liveModeInitialMount = useRef(true);
  useEffect(() => {
    if (liveModeInitialMount.current) {
      liveModeInitialMount.current = false;
      return;
    }
    const toDate = formatDate(new Date());
    chartTabsRef.current.forEach(async (tab) => {
      try {
        const priceRes = await fetch("/api/signals", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            signalName: "PriceSignal",
            specification: [{ name: "ticker", value: tab.ticker }],
            ticker: tab.ticker,
            exchange: tab.exchange,
            from: tab.from,
            to: toDate,
            timeframe: tab.timeframe,
            liveMode,
          }),
        });
        const priceData = await priceRes.json();
        const candles = priceData.candles || [];
        const lastPrice = candles.length > 0 ? candles[candles.length - 1].close : 0;

        const updatedSignals = await Promise.all(
          tab.signals.map(async (signal) => {
            try {
              const sigRes = await fetch("/api/signals", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  signalName: signal.signalName,
                  specification: signal.specification,
                  ticker: tab.ticker,
                  exchange: tab.exchange,
                  from: tab.from,
                  to: toDate,
                  timeframe: tab.timeframe,
                  liveMode,
                }),
              });
              const sigData = await sigRes.json();
              return {
                ...signal,
                signalHash: sigData.signalHash ?? signal.signalHash,
                timeSeries: sigData.timeSeries || signal.timeSeries,
              };
            } catch {
              return signal;
            }
          })
        );

        setChartTabs((prev) =>
          prev.map((t) =>
            t.ticker === tab.ticker
              ? { ...t, data: candles, lastPrice, signals: updatedSignals }
              : t
          )
        );
      } catch {
        console.error(`Failed to re-fetch chart data for ${tab.ticker}`);
      }
    });
  }, [liveMode]);

  const handleSearchResultSelect = useCallback(
    async (result: TickerSearchResult) => {
      setIsLoadingChart(true);
      setShowSearchResults(false);
      setSearchQuery("");

      const existingTab = chartTabs.find((t) => t.ticker === result.ticker);
      if (existingTab) {
        setActiveTab(result.ticker);
        setIsLoadingChart(false);
        return;
      }

      const now = new Date();
      const sixMonthsAgo = new Date(now);
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

      try {
        const res = await fetch("/api/signals", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            signalName: "PriceSignal",
            specification: [{ name: "ticker", value: result.ticker }],
            ticker: result.ticker,
            exchange: result.exchange,
            from: formatDate(sixMonthsAgo),
            to: formatDate(now),
            liveMode,
          }),
        });

        const data = await res.json();

        const candles = data.candles || [];
        const lastPrice =
          candles.length > 0 ? candles[candles.length - 1].close : 0;

        const newTab: ChartTab = {
          ticker: result.ticker,
          exchange: result.exchange,
          name: result.name || result.ticker,
          data: candles,
          lastPrice,
          timeframe: "DAY",
          from: formatDate(sixMonthsAgo),
          signals: [],
        };

        setChartTabs((prev) => {
          const existing = prev.find((t) => t.ticker === result.ticker);
          if (existing) return prev;
          return [...prev, newTab];
        });
        setActiveTab(result.ticker);
      } catch {
        console.error("Failed to fetch chart data");
      } finally {
        setIsLoadingChart(false);
      }
    },
    [chartTabs, liveMode]
  );

  const handleTimeframeChange = useCallback(
    async (ticker: string, timeframe: Timeframe) => {
      const tab = chartTabs.find((t) => t.ticker === ticker);
      if (!tab) return;

      // Calculate from date so the new timeframe shows the same number of bars
      const barCount = Math.max(tab.data.length, 15);
      const timeframePeriodMs: Record<string, number> = {
        TICK: 1000,
        SECOND: 1000,
        MINUTE: 60 * 1000,
        HOUR: 60 * 60 * 1000,
        DAY: 24 * 60 * 60 * 1000,
        WEEK: 7 * 24 * 60 * 60 * 1000,
        MONTH: 30 * 24 * 60 * 60 * 1000,
      };
      const periodMs = timeframePeriodMs[timeframe] ?? 24 * 60 * 60 * 1000;

      setChartTabs((prev) =>
        prev.map((t) =>
          t.ticker === ticker ? { ...t, timeframe, data: [] } : t
        )
      );

      const now = new Date();
      const from = new Date(now.getTime() - barCount * periodMs);
      const fromStr = formatDate(from);
      const toStr = formatDate(now);

      try {
        const res = await fetch("/api/signals", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            signalName: "PriceSignal",
            specification: [{ name: "ticker", value: ticker }],
            ticker: tab.ticker,
            exchange: tab.exchange,
            from: fromStr,
            to: toStr,
            timeframe,
            liveMode,
          }),
        });

        const data = await res.json();
        const candles = data.candles || [];
        const lastPrice =
          candles.length > 0 ? candles[candles.length - 1].close : 0;

        const updatedSignals = await Promise.all(
          tab.signals.map(async (signal) => {
            try {
              const sigRes = await fetch("/api/signals", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  signalName: signal.signalName,
                  specification: signal.specification,
                  ticker: tab.ticker,
                  exchange: tab.exchange,
                  from: fromStr,
                  to: toStr,
                  timeframe,
                  liveMode,
                }),
              });
              const sigData = await sigRes.json();
              return {
                ...signal,
                signalHash: sigData.signalHash ?? signal.signalHash,
                timeSeries: sigData.timeSeries || signal.timeSeries,
              };
            } catch {
              return signal;
            }
          })
        );

        setChartTabs((prev) =>
          prev.map((t) =>
            t.ticker === ticker
              ? { ...t, data: candles, lastPrice, signals: updatedSignals, timeframe, from: fromStr }
              : t
          )
        );
      } catch {
        console.error("Failed to fetch chart data for timeframe change");
      }
    },
    [chartTabs, liveMode]
  );

  const handleTimespanChange = useCallback(
    async (ticker: string, direction: "expand" | "shrink") => {
      const tab = chartTabs.find((t) => t.ticker === ticker);
      if (!tab) return;

      const now = new Date();
      const toDate = formatDate(now);
      const currentFrom = new Date(tab.from);
      const spanMs = now.getTime() - currentFrom.getTime();
      const spanDays = spanMs / (1000 * 60 * 60 * 24);

      if (direction === "shrink") {
        const timeframePeriodDays: Record<string, number> = {
          TICK: 1 / 86400,
          SECOND: 1 / 86400,
          MINUTE: 1 / 1440,
          HOUR: 1 / 24,
          DAY: 1,
          WEEK: 7,
          MONTH: 30,
        };
        const periodDays = timeframePeriodDays[tab.timeframe] ?? 1;
        const currentPeriods = spanDays / periodDays;
        if (currentPeriods <= 15) return;
      }

      const shiftMs = spanMs * 0.3;
      let newFrom: Date;
      if (direction === "expand") {
        newFrom = new Date(currentFrom.getTime() - shiftMs);
      } else {
        newFrom = new Date(currentFrom.getTime() + shiftMs);
      }
      const newFromStr = formatDate(newFrom);

      setChartTabs((prev) =>
        prev.map((t) =>
          t.ticker === ticker ? { ...t, data: [], from: newFromStr } : t
        )
      );

      try {
        const res = await fetch("/api/signals", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            signalName: "PriceSignal",
            specification: [{ name: "ticker", value: ticker }],
            ticker: tab.ticker,
            exchange: tab.exchange,
            from: newFromStr,
            to: toDate,
            timeframe: tab.timeframe,
            liveMode,
          }),
        });

        const data = await res.json();
        const candles = data.candles || [];
        const lastPrice =
          candles.length > 0 ? candles[candles.length - 1].close : 0;

        const updatedSignals = await Promise.all(
          tab.signals.map(async (signal) => {
            try {
              const sigRes = await fetch("/api/signals", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  signalName: signal.signalName,
                  specification: signal.specification,
                  ticker: tab.ticker,
                  exchange: tab.exchange,
                  from: newFromStr,
                  to: toDate,
                  timeframe: tab.timeframe,
                  liveMode,
                }),
              });
              const sigData = await sigRes.json();
              return {
                ...signal,
                signalHash: sigData.signalHash ?? signal.signalHash,
                timeSeries: sigData.timeSeries || signal.timeSeries,
              };
            } catch {
              return signal;
            }
          })
        );

        setChartTabs((prev) =>
          prev.map((t) =>
            t.ticker === ticker
              ? { ...t, data: candles, lastPrice, signals: updatedSignals, from: newFromStr }
              : t
          )
        );
      } catch {
        console.error("Failed to fetch chart data for timespan change");
      }
    },
    [chartTabs, liveMode]
  );

  const handleAutoExpand = useCallback(
    async (ticker: string) => {
      const tab = chartTabs.find((t) => t.ticker === ticker);
      if (!tab) return;

      const now = new Date();
      const currentFrom = new Date(tab.from);
      const spanMs = now.getTime() - currentFrom.getTime();
      const shiftMs = spanMs * 0.5;
      const newFrom = new Date(currentFrom.getTime() - shiftMs);
      const newFromStr = formatDate(newFrom);
      const toDate = formatDate(now);

      try {
        const priceRes = await fetch("/api/signals", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            signalName: "PriceSignal",
            specification: [{ name: "ticker", value: ticker }],
            ticker: tab.ticker,
            exchange: tab.exchange,
            from: newFromStr,
            to: toDate,
            timeframe: tab.timeframe,
            liveMode,
          }),
        });

        const priceData = await priceRes.json();
        const candles = priceData.candles || [];
        const lastPrice =
          candles.length > 0 ? candles[candles.length - 1].close : 0;

        const updatedSignals = await Promise.all(
          tab.signals.map(async (signal) => {
            try {
              const res = await fetch("/api/signals", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  signalName: signal.signalName,
                  specification: signal.specification,
                  ticker: tab.ticker,
                  exchange: tab.exchange,
                  from: newFromStr,
                  to: toDate,
                  timeframe: tab.timeframe,
                  liveMode,
                }),
              });
              const data = await res.json();
              return {
                ...signal,
                signalHash: data.signalHash ?? signal.signalHash,
                timeSeries: data.timeSeries || signal.timeSeries,
              };
            } catch {
              return signal;
            }
          })
        );

        setChartTabs((prev) =>
          prev.map((t) =>
            t.ticker === ticker
              ? { ...t, data: candles, lastPrice, from: newFromStr, signals: updatedSignals }
              : t
          )
        );
      } catch {
        console.error("Failed to auto-expand chart data");
      }
    },
    [chartTabs, liveMode]
  );

  const handleAddSignal = useCallback(
    async (
      ticker: string,
      signalName: string,
      specification: { name: string; value: string }[]
    ): Promise<string | null> => {
      const tab = chartTabs.find((t) => t.ticker === ticker);
      if (!tab) return "No active chart";

      const isDuplicate = tab.signals.some(
        (s) =>
          s.signalName === signalName &&
          s.specification.length === specification.length &&
          s.specification.every(
            (existing, i) =>
              existing.name === specification[i].name &&
              existing.value === specification[i].value
          )
      );

      if (isDuplicate) {
        return "This signal with the same parameters is already on the chart";
      }

      const now = new Date();
      const signalDef = availableSignals.find((s) => s.name === signalName);
      const parameterTypes = signalDef?.parameters;

      try {
        const res = await fetch("/api/signals", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            signalName,
            specification,
            ticker: tab.ticker,
            exchange: tab.exchange,
            from: tab.from,
            to: formatDate(now),
            timeframe: tab.timeframe,
            parameterTypes,
            liveMode,
          }),
        });

        const data = await res.json();
        if (!res.ok) {
          return data.error || "Failed to fetch signal";
        }

        const newOverlay = {
          signalName,
          signalHash: data.signalHash,
          specification,
          timeSeries: data.timeSeries || [],
          visualiseWith: signalDef?.visualiseWith ?? [],
        };

        setChartTabs((prev) =>
          prev.map((t) =>
            t.ticker === ticker
              ? { ...t, signals: [...t.signals, newOverlay] }
              : t
          )
        );

        return null;
      } catch {
        return "Failed to fetch signal data";
      }
    },
    [chartTabs, availableSignals, liveMode]
  );

  const handleTabClose = useCallback((ticker: string) => {
    setChartTabs((prev) => {
      const remaining = prev.filter((t) => t.ticker !== ticker);
      setActiveTab((active) => {
        if (active !== ticker) return active;
        if (remaining.length === 0) return null;
        const closedIndex = prev.findIndex((t) => t.ticker === ticker);
        return remaining[Math.min(closedIndex, remaining.length - 1)].ticker;
      });
      return remaining;
    });
  }, []);

  const handleAddToWatchlist = useCallback((result: TickerSearchResult) => {
    setWatchlistItems((prev) => {
      if (prev.some((item) => item.ticker === result.ticker)) return prev;
      return [...prev, result];
    });
    setWatchlistOpen(true);
    // Persist to DB after state update
    fetch("/api/watchlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ticker: result.ticker }),
    }).catch(() => console.error("Failed to save watchlist entry"));
  }, []);

  const handleWatchlistRemove = useCallback((ticker: string) => {
    setWatchlistItems((prev) => prev.filter((item) => item.ticker !== ticker));
    setWatchlistNotes((prev) => {
      const next = { ...prev };
      delete next[ticker];
      return next;
    });
    // Persist to DB after state update
    fetch(`/api/watchlist/${encodeURIComponent(ticker)}`, {
      method: "DELETE",
    }).catch(() => console.error("Failed to delete watchlist entry"));
  }, []);

  const handleNoteChange = useCallback((ticker: string, note: string) => {
    setWatchlistNotes((prev) => ({ ...prev, [ticker]: note }));
    // Debounce DB write — wait 600ms after last keystroke
    if (noteDebounceRef.current[ticker]) {
      clearTimeout(noteDebounceRef.current[ticker]);
    }
    noteDebounceRef.current[ticker] = setTimeout(() => {
      fetch(`/api/watchlist/${encodeURIComponent(ticker)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notes: note }),
      }).catch(() => console.error("Failed to save note"));
    }, 600);
  }, []);

  const handleNoteDelete = useCallback((ticker: string) => {
    setWatchlistNotes((prev) => {
      const next = { ...prev };
      delete next[ticker];
      return next;
    });
    // Clear any pending debounce, then write empty notes immediately
    if (noteDebounceRef.current[ticker]) {
      clearTimeout(noteDebounceRef.current[ticker]);
      delete noteDebounceRef.current[ticker];
    }
    fetch(`/api/watchlist/${encodeURIComponent(ticker)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ notes: "" }),
    }).catch(() => console.error("Failed to delete note"));
  }, []);

  const handleWatchlistSelect = useCallback((result: TickerSearchResult) => {
    handleSearchResultSelect(result);
  }, [handleSearchResultSelect]);

  const handleCloseSearch = useCallback(() => {
    setShowSearchResults(false);
    setSearchQuery("");
    setSearchResults([]);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Header liveMode={liveMode} onLiveModeChange={setLiveMode} />
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        {/* Sidebar */}
        <aside
          style={{
            width: "var(--sidebar-width)",
            borderRight: "1px solid var(--color-border)",
            display: "flex",
            flexDirection: "column",
            flexShrink: 0,
            overflow: "hidden",
          }}
        >
          <SearchBar
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => {
              if (searchQuery.length >= 1) setShowSearchResults(true);
            }}
          />
          <Watchlist
            items={watchlistItems}
            isOpen={watchlistOpen}
            onToggle={() => setWatchlistOpen((o) => !o)}
            onSelect={handleWatchlistSelect}
            onRemove={handleWatchlistRemove}
            notes={watchlistNotes}
            onNoteChange={handleNoteChange}
            onNoteDelete={handleNoteDelete}
          />
        </aside>

        {/* Search Results Panel */}
        {showSearchResults && (
          <SearchResults
            results={searchResults}
            searchQuery={searchQuery}
            isLoading={isSearching}
            showTypeMore={searchQuery.length === 1}
            watchlistTickers={new Set(watchlistItems.map((i) => i.ticker))}
            onSelect={handleSearchResultSelect}
            onAddToWatchlist={handleAddToWatchlist}
            onClose={handleCloseSearch}
          />
        )}

        {/* Main Chart Panel */}
        <main
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            background: "var(--color-bg)",
          }}
        >
          {isLoadingChart ? (
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-text-muted)",
              }}
            >
              Loading chart data...
            </div>
          ) : (
            <ChartPanel
              tabs={chartTabs}
              activeTab={activeTab}
              onTabSelect={setActiveTab}
              onTimeframeChange={handleTimeframeChange}
              onTimespanChange={handleTimespanChange}
              onAddSignal={handleAddSignal}
              onAutoExpand={handleAutoExpand}
              onTabClose={handleTabClose}
              availableSignals={availableSignals}
              selectedSignal={selectedSignal}
              onSignalChange={setSelectedSignal}
            />
          )}
        </main>
      </div>
    </div>
  );
}
