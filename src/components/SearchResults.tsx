"use client";

import { useState, useEffect, useRef } from "react";
import { TickerSearchResult } from "@/lib/types";
import styles from "./SearchResults.module.css";

interface ContextMenuState {
  x: number;
  y: number;
  result: TickerSearchResult;
}

interface SearchResultsProps {
  results: TickerSearchResult[];
  searchQuery: string;
  isLoading: boolean;
  showTypeMore: boolean;
  watchlistNames: string[];
  tickerMembership: Map<string, Set<string>>;
  onSelect: (result: TickerSearchResult) => void;
  onAddToWatchlist: (result: TickerSearchResult, watchlistName: string) => void;
  onClose: () => void;
}

export default function SearchResults({
  results,
  searchQuery,
  isLoading,
  showTypeMore,
  watchlistNames,
  tickerMembership,
  onSelect,
  onAddToWatchlist,
  onClose,
}: SearchResultsProps) {
  const [contextMenu, setContextMenu] = useState<ContextMenuState | null>(null);
  const contextMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contextMenu) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (contextMenuRef.current && !contextMenuRef.current.contains(e.target as Node)) {
        setContextMenu(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setContextMenu(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [contextMenu]);

  const handleContextMenu = (e: React.MouseEvent, result: TickerSearchResult) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY, result });
  };

  const handleAddToWatchlist = (watchlistName: string) => {
    if (contextMenu) {
      onAddToWatchlist(contextMenu.result, watchlistName);
      setContextMenu(null);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <div className="heading-3">Search Results</div>
          <div className={`body-2 ${styles.subheading}`}>
            {showTypeMore
              ? "Type another character"
              : isLoading
                ? "Searching..."
                : `${results.length} result${results.length !== 1 ? "s" : ""} for "${searchQuery}"`}
          </div>
        </div>
        <button onClick={onClose} className={styles.closeBtn}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div className={styles.list}>
        {showTypeMore && <div className={styles.emptyMsg}>Type another character</div>}
        {!showTypeMore &&
          results.map((result) => (
            <button
              key={result.exchange ? `${result.ticker}:${result.exchange}` : result.ticker}
              onClick={() => onSelect(result)}
              onContextMenu={(e) => handleContextMenu(e, result)}
              className={styles.resultBtn}
            >
              <div>
                <div className={styles.resultMeta}>
                  <span className={styles.ticker}>{result.ticker}</span>
                  {result.exchange_name && (
                    <span className={`body-2 ${styles.exchangeName}`}>
                      {result.exchange_name}
                    </span>
                  )}
                </div>
                <div className={`body-2 ${styles.resultName}`}>{result.name}</div>
              </div>
            </button>
          ))}
      </div>

      {/* Context menu */}
      {contextMenu && (
        <div
          ref={contextMenuRef}
          className={styles.contextMenu}
          style={{ top: contextMenu.y, left: contextMenu.x }}
        >
          {/* Submenu header */}
          <div className={styles.contextMenuHeader}>Add to watchlist</div>

          {watchlistNames.length === 0 ? (
            <div className={styles.contextMenuEmpty}>no watchlists</div>
          ) : (
            watchlistNames.map((wlName) => {
              const alreadyIn =
                tickerMembership.get(contextMenu.result.ticker)?.has(wlName) ?? false;
              return (
                <button
                  key={wlName}
                  onClick={() => !alreadyIn && handleAddToWatchlist(wlName)}
                  disabled={alreadyIn}
                  className={`${styles.contextMenuItem}${alreadyIn ? ` ${styles.contextMenuItemDisabled}` : ""}`}
                >
                  {wlName}
                </button>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
