"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import SortableWatchlistItem from "@/components/SortableWatchlistItem";
import SearchResults from "@/components/SearchResults";
import ChartPanel from "@/components/ChartPanel";
import { TickerSearchResult, ChartTab, Timeframe, AvailableSignal, WatchlistEntry, HorizontalLineDrawing } from "@/lib/types";
import { useWatchlists } from "@/hooks/useWatchlists";
import AddWatchlistModal from "@/components/AddWatchlistModal";
import ConfirmDialog from "@/components/ConfirmDialog";

const formatDate = (d: Date) => d.toISOString().split("T")[0];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<TickerSearchResult[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [chartTabs, setChartTabs] = useState<ChartTab[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [drawingsPerTab, setDrawingsPerTab] = useState<Record<string, HorizontalLineDrawing[]>>({});
  const [isLoadingChart, setIsLoadingChart] = useState(false);
  const [isRestoringState, setIsRestoringState] = useState(true);
  const [availableSignals, setAvailableSignals] = useState<AvailableSignal[]>([]);
  const [selectedSignal, setSelectedSignal] = useState("");
  const [liveMode, setLiveMode] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [confirmDeleteName, setConfirmDeleteName] = useState<string | null>(null);

  const {
    watchlists,
    notes: watchlistNotes,
    tickerMembership,
    toggleWatchlist,
    createWatchlist,
    renameWatchlist,
    deleteWatchlist,
    reorderWatchlists,
    addTicker,
    removeTicker,
    updateNote,
    deleteNote,
  } = useWatchlists();

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
            t.id === tab.id
              ? { ...t, data: candles, lastPrice, signals: updatedSignals }
              : t
          )
        );
      } catch {
        console.error(`Failed to re-fetch chart data for ${tab.ticker}`);
      }
    });
  }, [liveMode]);

  // ── Persist chart state ────────────────────────────────────────────────────

  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const chartTabsRef2 = useRef<ChartTab[]>(chartTabs);
  chartTabsRef2.current = chartTabs;
  const activeTabRef = useRef<string | null>(activeTab);
  activeTabRef.current = activeTab;
  const drawingsPerTabRef = useRef<Record<string, HorizontalLineDrawing[]>>(drawingsPerTab);
  drawingsPerTabRef.current = drawingsPerTab;

  const scheduleStateSave = useCallback(() => {
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      const tabsToSave = chartTabsRef2.current.map((t) => ({
        id: t.id,
        ticker: t.ticker,
        exchange: t.exchange,
        name: t.name,
        timeframe: t.timeframe,
        from: t.from,
        signals: t.signals.map((s) => ({
          signalHash: s.signalHash,
          signalName: s.signalName,
          specification: s.specification,
          visualiseWith: s.visualiseWith,
        })),
      }));
      fetch("/api/chart-state", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tabs: tabsToSave,
          activeTab: activeTabRef.current,
          drawingsPerTab: drawingsPerTabRef.current,
        }),
      }).catch(() => console.error("Failed to persist chart state"));
    }, 500);
  }, []);

  // Restore state on mount
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/chart-state");
        if (!res.ok) return;
        const saved = await res.json() as {
          tabs: { id: string; ticker: string; exchange: string | null; name: string; timeframe: string; from: string; signals: { signalHash: number; signalName: string; specification: { name: string; value: string }[]; visualiseWith: string[] }[] }[];
          activeTab: string | null;
          drawingsPerTab: Record<string, { id: string; price: number }[]>;
        };
        if (saved.tabs.length === 0) return;

        const toDate = formatDate(new Date());

        // Re-fetch price data + signals for each saved tab in parallel
        const restoredTabs = await Promise.all(
          saved.tabs.map(async (savedTab) => {
            try {
              const priceRes = await fetch("/api/signals", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  signalName: "PriceSignal",
                  specification: [{ name: "ticker", value: savedTab.ticker }],
                  ticker: savedTab.ticker,
                  exchange: savedTab.exchange,
                  from: savedTab.from,
                  to: toDate,
                  timeframe: savedTab.timeframe,
                  liveMode: false,
                }),
              });
              const priceData = await priceRes.json();
              const candles = priceData.candles || [];
              const lastPrice = candles.length > 0 ? candles[candles.length - 1].close : 0;

              const restoredSignals = await Promise.all(
                savedTab.signals.map(async (sig) => {
                  try {
                    const sigRes = await fetch("/api/signals", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        signalName: sig.signalName,
                        specification: sig.specification,
                        ticker: savedTab.ticker,
                        exchange: savedTab.exchange,
                        from: savedTab.from,
                        to: toDate,
                        timeframe: savedTab.timeframe,
                        liveMode: false,
                      }),
                    });
                    const sigData = await sigRes.json();
                    return {
                      signalName: sig.signalName,
                      signalHash: sigData.signalHash ?? sig.signalHash,
                      specification: sig.specification,
                      timeSeries: sigData.timeSeries || [],
                      visualiseWith: sig.visualiseWith,
                    };
                  } catch {
                    return { ...sig, timeSeries: [] };
                  }
                })
              );

              return {
                id: savedTab.id,
                ticker: savedTab.ticker,
                exchange: savedTab.exchange,
                name: savedTab.name,
                data: candles,
                lastPrice,
                timeframe: savedTab.timeframe as Timeframe,
                from: savedTab.from,
                signals: restoredSignals,
              };
            } catch {
              return null;
            }
          })
        );

        const validTabs = restoredTabs.filter((t): t is ChartTab => t !== null);
        if (validTabs.length > 0) {
          setChartTabs(validTabs);
          setActiveTab(saved.activeTab);
          setDrawingsPerTab(saved.drawingsPerTab);
        }
      } catch {
        console.error("Failed to restore chart state");
      } finally {
        setIsRestoringState(false);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ────────────────────────────────────────────────────────────────────────────

  const handleSearchResultSelect = useCallback(
    async (result: TickerSearchResult) => {
      setIsLoadingChart(true);
      setShowSearchResults(false);
      setSearchQuery("");

      const tabId = result.exchange ? `${result.ticker}:${result.exchange}` : result.ticker;
      const existingTab = chartTabs.find((t) => t.id === tabId);
      if (existingTab) {
        setActiveTab(tabId);
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
          id: tabId,
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
          const existing = prev.find((t) => t.id === tabId);
          if (existing) return prev;
          return [...prev, newTab];
        });
        setActiveTab(tabId);
        scheduleStateSave();
      } catch {
        console.error("Failed to fetch chart data");
      } finally {
        setIsLoadingChart(false);
      }
    },
    [chartTabs, liveMode, scheduleStateSave]
  );

  const handleTimeframeChange = useCallback(
    async (tabId: string, timeframe: Timeframe) => {
      const tab = chartTabs.find((t) => t.id === tabId);
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
          t.id === tabId ? { ...t, timeframe, data: [] } : t
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
            specification: [{ name: "ticker", value: tab.ticker }],
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
            t.id === tabId
              ? { ...t, data: candles, lastPrice, signals: updatedSignals, timeframe, from: fromStr }
              : t
          )
        );
        scheduleStateSave();
      } catch {
        console.error("Failed to fetch chart data for timeframe change");
      }
    },
    [chartTabs, liveMode, scheduleStateSave]
  );

  const handleTimespanChange = useCallback(
    async (tabId: string, direction: "expand" | "shrink") => {
      const tab = chartTabs.find((t) => t.id === tabId);
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
          t.id === tabId ? { ...t, data: [], from: newFromStr } : t
        )
      );

      try {
        const res = await fetch("/api/signals", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            signalName: "PriceSignal",
            specification: [{ name: "ticker", value: tab.ticker }],
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
            t.id === tabId
              ? { ...t, data: candles, lastPrice, signals: updatedSignals, from: newFromStr }
              : t
          )
        );
        scheduleStateSave();
      } catch {
        console.error("Failed to fetch chart data for timespan change");
      }
    },
    [chartTabs, liveMode, scheduleStateSave]
  );

  const handleAutoExpand = useCallback(
    async (tabId: string) => {
      const tab = chartTabs.find((t) => t.id === tabId);
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
            specification: [{ name: "ticker", value: tab.ticker }],
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
            t.id === tabId
              ? { ...t, data: candles, lastPrice, from: newFromStr, signals: updatedSignals }
              : t
          )
        );
        scheduleStateSave();
      } catch {
        console.error("Failed to auto-expand chart data");
      }
    },
    [chartTabs, liveMode, scheduleStateSave]
  );

  const handleAddSignal = useCallback(
    async (
      tabId: string,
      signalName: string,
      specification: { name: string; value: string }[]
    ): Promise<string | null> => {
      const tab = chartTabs.find((t) => t.id === tabId);
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
            t.id === tabId
              ? { ...t, signals: [...t.signals, newOverlay] }
              : t
          )
        );
        scheduleStateSave();

        return null;
      } catch {
        return "Failed to fetch signal data";
      }
    },
    [chartTabs, availableSignals, liveMode, scheduleStateSave]
  );

  const handleRemoveSubChart = useCallback((tabId: string, signalHashes: number[]) => {
    setChartTabs((prev) =>
      prev.map((t) =>
        t.id === tabId
          ? { ...t, signals: t.signals.filter((s) => !signalHashes.includes(s.signalHash)) }
          : t
      )
    );
    scheduleStateSave();
  }, [scheduleStateSave]);

  const handleTabClose = useCallback((tabId: string) => {
    setChartTabs((prev) => {
      const remaining = prev.filter((t) => t.id !== tabId);
      setActiveTab((active) => {
        if (active !== tabId) return active;
        if (remaining.length === 0) return null;
        const closedIndex = prev.findIndex((t) => t.id === tabId);
        return remaining[Math.min(closedIndex, remaining.length - 1)].id;
      });
      return remaining;
    });
    setDrawingsPerTab((prev) => {
      const next = { ...prev };
      delete next[tabId];
      return next;
    });
    scheduleStateSave();
  }, [scheduleStateSave]);

  const handleDrawingsChange = useCallback(
    (tabId: string, drawings: HorizontalLineDrawing[]) => {
      setDrawingsPerTab((prev) => ({ ...prev, [tabId]: drawings }));
      scheduleStateSave();
    },
    [scheduleStateSave]
  );

  const handleTabSelect = useCallback(
    (tabId: string) => {
      setActiveTab(tabId);
      scheduleStateSave();
    },
    [scheduleStateSave]
  );

  const handleAddToWatchlist = useCallback(
    (result: TickerSearchResult, watchlistName: string) => {
      addTicker(watchlistName, result);
    },
    [addTicker]
  );

  const handleWatchlistSelect = useCallback(
    (entry: WatchlistEntry) => {
      handleSearchResultSelect({ ticker: entry.ticker, name: entry.name, exchange: entry.exchange, exchange_name: null });
    },
    [handleSearchResultSelect]
  );

  const handleNoteChange = useCallback(
    (ticker: string, note: string) => {
      updateNote(ticker, note, Array.from(tickerMembership.get(ticker) ?? []));
    },
    [updateNote, tickerMembership]
  );

  const handleNoteDelete = useCallback(
    (ticker: string) => {
      deleteNote(ticker, Array.from(tickerMembership.get(ticker) ?? []));
    },
    [deleteNote, tickerMembership]
  );

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      if (!over || active.id === over.id) return;
      const oldIndex = watchlists.findIndex((wl) => wl.name === active.id);
      const newIndex = watchlists.findIndex((wl) => wl.name === over.id);
      if (oldIndex === -1 || newIndex === -1) return;
      const reordered = arrayMove(watchlists, oldIndex, newIndex);
      reorderWatchlists(reordered);
    },
    [watchlists, reorderWatchlists]
  );

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

          {/* Add Watchlist button */}
          <div style={{ padding: "var(--inset-s)", borderBottom: "1px solid var(--color-border)" }}>
            <button
              onClick={() => setShowAddModal(true)}
              style={{
                width: "100%",
                padding: "var(--inset-xs) var(--inset-s)",
                background: "transparent",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-s)",
                cursor: "pointer",
                fontSize: "var(--body-2-size)",
                color: "var(--color-text-primary)",
                textAlign: "center",
              }}
            >
              + Add Watchlist
            </button>
          </div>

          {/* Watchlist panels */}
          <div style={{ flex: 1, overflowY: "auto" }}>
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext
                items={watchlists.map((wl) => wl.name)}
                strategy={verticalListSortingStrategy}
              >
                {watchlists.map((wl) => (
                  <SortableWatchlistItem
                    key={wl.name}
                    id={wl.name}
                    name={wl.name}
                    items={wl.entries}
                    isOpen={wl.isOpen}
                    onToggle={() => toggleWatchlist(wl.name)}
                    onSelect={handleWatchlistSelect}
                    onRemove={(ticker) => removeTicker(wl.name, ticker)}
                    onDelete={() => {
                      if (wl.entries.length > 0) {
                        setConfirmDeleteName(wl.name);
                      } else {
                        deleteWatchlist(wl.name);
                      }
                    }}
                    onRename={(newName) => renameWatchlist(wl.name, newName)}
                    notes={watchlistNotes}
                    onNoteChange={handleNoteChange}
                    onNoteDelete={handleNoteDelete}
                  />
                ))}
              </SortableContext>
            </DndContext>
          </div>
        </aside>

        {/* Search Results Panel */}
        {showSearchResults && (
          <SearchResults
            results={searchResults}
            searchQuery={searchQuery}
            isLoading={isSearching}
            showTypeMore={searchQuery.length === 1}
            watchlistNames={watchlists.map((wl) => wl.name)}
            tickerMembership={tickerMembership}
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
          {isRestoringState || isLoadingChart ? (
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-text-muted)",
              }}
            >
              {isRestoringState ? "Restoring charts..." : "Loading chart data..."}
            </div>
          ) : (
            <ChartPanel
              tabs={chartTabs}
              activeTab={activeTab}
              onTabSelect={handleTabSelect}
              onTimeframeChange={handleTimeframeChange}
              onTimespanChange={handleTimespanChange}
              onAddSignal={handleAddSignal}
              onAutoExpand={handleAutoExpand}
              onTabClose={handleTabClose}
              onRemoveSubChart={handleRemoveSubChart}
              availableSignals={availableSignals}
              selectedSignal={selectedSignal}
              onSignalChange={setSelectedSignal}
              drawingsPerTab={drawingsPerTab}
              onDrawingsChange={handleDrawingsChange}
            />
          )}
        </main>
      </div>

      {/* Add Watchlist modal */}
      {showAddModal && (
        <AddWatchlistModal
          onConfirm={(name) => {
            const error = createWatchlist(name);
            if (!error) setShowAddModal(false);
            return error;
          }}
          onClose={() => setShowAddModal(false)}
        />
      )}

      {/* Delete confirmation dialog */}
      {confirmDeleteName !== null && (
        <ConfirmDialog
          message="Watchlist not empty, are you sure you want to delete it?"
          onConfirm={() => {
            deleteWatchlist(confirmDeleteName);
            setConfirmDeleteName(null);
          }}
          onCancel={() => setConfirmDeleteName(null)}
        />
      )}
    </div>
  );
}
