"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { Watchlist, WatchlistEntry, TickerSearchResult } from "@/lib/types";

const MAX_WATCHLISTS = 50;
const MAX_NAME_LENGTH = 30;
const VALID_NAME_RE = /^[a-zA-Z0-9 ]+$/;
const NOTE_DEBOUNCE_MS = 600;

function validateName(
  name: string,
  existingNames: string[],
  currentName?: string
): string | null {
  const trimmed = name.trim();
  if (trimmed.length === 0) return "Watchlist name must not be empty";
  if (trimmed.length > MAX_NAME_LENGTH)
    return `Watchlist name must be ${MAX_NAME_LENGTH} characters or fewer`;
  if (!VALID_NAME_RE.test(trimmed))
    return "Watchlist name must contain only letters, numbers, and spaces";
  if (
    trimmed !== currentName &&
    existingNames.some((n) => n === trimmed)
  )
    return "Watchlist name must be unique";
  return null;
}

export function useWatchlists() {
  const [watchlists, setWatchlists] = useState<Watchlist[]>([]);
  // Notes keyed by ticker — shared across all watchlists
  const [notes, setNotes] = useState<Record<string, string>>({});
  const noteDebounceRef = useRef<Record<string, ReturnType<typeof setTimeout>>>({});
  const nameBackfillDoneRef = useRef(false);

  // Bootstrap: load all watchlists and entries on mount
  useEffect(() => {
    fetch("/api/watchlists/all")
      .then((res) => res.json())
      .then(
        (
          data: {
            name: string;
            display_order: number;
            entries: { ticker: string; exchange: string | null; name: string | null; notes: string }[];
          }[]
        ) => {
          const loadedNotes: Record<string, string> = {};

          const loaded: Watchlist[] = data.map((w) => ({
            name: w.name,
            displayOrder: w.display_order,
            isOpen: w.entries.length > 0,
            entries: w.entries.map((e) => {
              // Notes are global per ticker — first occurrence wins
              if (e.notes && !loadedNotes[e.ticker]) {
                loadedNotes[e.ticker] = e.notes;
              }
              return { ticker: e.ticker, name: e.name ?? null, exchange: e.exchange ?? null, notes: e.notes };
            }),
          }));

          setWatchlists(loaded);
          setNotes(loadedNotes);
        }
      )
      .catch(() => console.error("Failed to load watchlists"));
  }, []);

  // Backfill missing stock names for entries that pre-date the name column
  useEffect(() => {
    if (nameBackfillDoneRef.current || watchlists.length === 0) return;
    nameBackfillDoneRef.current = true;

    const missingEntries = watchlists.flatMap((wl) =>
      wl.entries
        .filter((e) => !e.name)
        .map((e) => ({ ticker: e.ticker, exchange: e.exchange, watchlistName: wl.name, notes: e.notes }))
    );

    if (missingEntries.length === 0) return;

    const uniqueTickers = [...new Set(missingEntries.map((e) => e.ticker))];

    Promise.all(
      uniqueTickers.map((ticker) =>
        fetch(`/api/tickers/search?prefix=${encodeURIComponent(ticker)}`)
          .then((r) => r.json())
          .then((results: TickerSearchResult[]) => {
            const match = results.find((r) => r.ticker === ticker);
            return match?.name ? { ticker, name: match.name } : null;
          })
          .catch(() => null)
      )
    ).then((results) => {
      const nameMap = new Map<string, string>();
      for (const r of results) {
        if (r?.name) nameMap.set(r.ticker, r.name);
      }
      if (nameMap.size === 0) return;

      setWatchlists((prev) =>
        prev.map((wl) => ({
          ...wl,
          entries: wl.entries.map((e) => ({
            ...e,
            name: e.name ?? nameMap.get(e.ticker) ?? null,
          })),
        }))
      );

      // Persist backfilled names to the database
      for (const entry of missingEntries) {
        const foundName = nameMap.get(entry.ticker);
        if (foundName) {
          fetch("/api/watchlist", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              watchlist_name: entry.watchlistName,
              ticker: entry.ticker,
              exchange: entry.exchange,
              name: foundName,
              notes: entry.notes,
            }),
          }).catch(() => {});
        }
      }
    });
  }, [watchlists]);

  // Derived: Map<ticker, Set<watchlistName>> — which watchlists each ticker belongs to
  const tickerMembership = useMemo(() => {
    const map = new Map<string, Set<string>>();
    for (const wl of watchlists) {
      for (const entry of wl.entries) {
        if (!map.has(entry.ticker)) map.set(entry.ticker, new Set());
        map.get(entry.ticker)!.add(wl.name);
      }
    }
    return map;
  }, [watchlists]);

  const toggleWatchlist = useCallback((name: string) => {
    setWatchlists((prev) =>
      prev.map((wl) => (wl.name === name ? { ...wl, isOpen: !wl.isOpen } : wl))
    );
  }, []);

  // Returns error string on validation failure, null on success
  const createWatchlist = useCallback(
    (name: string): string | null => {
      const trimmed = name.trim();
      const existingNames = watchlists.map((w) => w.name);

      if (existingNames.length >= MAX_WATCHLISTS) {
        return `You cannot have more than ${MAX_WATCHLISTS} watchlists`;
      }

      const error = validateName(trimmed, existingNames);
      if (error) return error;

      const nextOrder =
        watchlists.length > 0
          ? Math.max(...watchlists.map((w) => w.displayOrder)) + 1
          : 0;

      setWatchlists((prev) => [
        ...prev,
        { name: trimmed, displayOrder: nextOrder, isOpen: true, entries: [] },
      ]);

      fetch("/api/watchlists", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmed }),
      }).catch(() => console.error("Failed to create watchlist"));

      return null;
    },
    [watchlists]
  );

  // Returns error string on validation failure, null on success
  const renameWatchlist = useCallback(
    (oldName: string, newName: string): string | null => {
      const trimmed = newName.trim();
      const existingNames = watchlists.map((w) => w.name);

      const error = validateName(trimmed, existingNames, oldName);
      if (error) return error;

      setWatchlists((prev) =>
        prev.map((wl) => (wl.name === oldName ? { ...wl, name: trimmed } : wl))
      );

      fetch(`/api/watchlists/${encodeURIComponent(oldName)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newName: trimmed }),
      }).catch(() => console.error("Failed to rename watchlist"));

      return null;
    },
    [watchlists]
  );

  const deleteWatchlist = useCallback((name: string) => {
    setWatchlists((prev) => prev.filter((wl) => wl.name !== name));

    fetch(`/api/watchlists/${encodeURIComponent(name)}`, {
      method: "DELETE",
    }).catch(() => console.error("Failed to delete watchlist"));
  }, []);

  const reorderWatchlists = useCallback((reordered: Watchlist[]) => {
    const withNewOrder = reordered.map((wl, i) => ({ ...wl, displayOrder: i }));
    setWatchlists(withNewOrder);

    fetch("/api/watchlists/reorder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        withNewOrder.map((wl) => ({ name: wl.name, display_order: wl.displayOrder }))
      ),
    }).catch(() => console.error("Failed to reorder watchlists"));
  }, []);

  const addTicker = useCallback(
    (watchlistName: string, result: TickerSearchResult) => {
      setWatchlists((prev) =>
        prev.map((wl) => {
          if (wl.name !== watchlistName) return wl;
          if (wl.entries.some((e) => e.ticker === result.ticker)) return wl;
          return {
            ...wl,
            isOpen: true,
            entries: [
              ...wl.entries,
              { ticker: result.ticker, name: result.name, exchange: result.exchange, notes: "" },
            ],
          };
        })
      );

      fetch("/api/watchlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          watchlist_name: watchlistName,
          ticker: result.ticker,
          exchange: result.exchange,
          name: result.name,
          notes: "",
        }),
      }).catch(() => console.error("Failed to add ticker"));
    },
    []
  );

  const removeTicker = useCallback((watchlistName: string, ticker: string) => {
    setWatchlists((prev) =>
      prev.map((wl) =>
        wl.name === watchlistName
          ? { ...wl, entries: wl.entries.filter((e) => e.ticker !== ticker) }
          : wl
      )
    );

    fetch(
      `/api/watchlist/${encodeURIComponent(ticker)}?name=${encodeURIComponent(watchlistName)}`,
      { method: "DELETE" }
    ).catch(() => console.error("Failed to remove ticker"));
  }, []);

  const updateNote = useCallback(
    (ticker: string, note: string, watchlistNames: string[]) => {
      setNotes((prev) => ({ ...prev, [ticker]: note }));

      // Debounce the DB write
      if (noteDebounceRef.current[ticker]) {
        clearTimeout(noteDebounceRef.current[ticker]);
      }
      noteDebounceRef.current[ticker] = setTimeout(() => {
        // Update the note in every watchlist that contains this ticker
        for (const name of watchlistNames) {
          fetch(
            `/api/watchlist/${encodeURIComponent(ticker)}?name=${encodeURIComponent(name)}`,
            {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ notes: note }),
            }
          ).catch(() => console.error("Failed to save note"));
        }
      }, NOTE_DEBOUNCE_MS);
    },
    []
  );

  const deleteNote = useCallback(
    (ticker: string, watchlistNames: string[]) => {
      setNotes((prev) => {
        const next = { ...prev };
        delete next[ticker];
        return next;
      });

      // Cancel any pending debounce and write immediately
      if (noteDebounceRef.current[ticker]) {
        clearTimeout(noteDebounceRef.current[ticker]);
        delete noteDebounceRef.current[ticker];
      }
      for (const name of watchlistNames) {
        fetch(
          `/api/watchlist/${encodeURIComponent(ticker)}?name=${encodeURIComponent(name)}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ notes: "" }),
          }
        ).catch(() => console.error("Failed to delete note"));
      }
    },
    []
  );

  return {
    watchlists,
    notes,
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
  };
}
