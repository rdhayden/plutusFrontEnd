"use client";

import { useState, useEffect, useRef } from "react";
import { TickerSearchResult } from "@/lib/types";

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
  watchlistTickers: Set<string>;
  onSelect: (result: TickerSearchResult) => void;
  onAddToWatchlist: (result: TickerSearchResult) => void;
  onClose: () => void;
}

export default function SearchResults({
  results,
  searchQuery,
  isLoading,
  showTypeMore,
  watchlistTickers,
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

  const handleAddToWatchlist = () => {
    if (contextMenu) {
      onAddToWatchlist(contextMenu.result);
      setContextMenu(null);
    }
  };

  return (
    <div
      style={{
        width: "280px",
        borderLeft: "1px solid var(--color-border)",
        borderRight: "1px solid var(--color-border)",
        background: "var(--color-bg)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "var(--inset-s)",
          borderBottom: "1px solid var(--color-border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <div className="heading-3">Search Results</div>
          <div
            className="body-2"
            style={{ color: "var(--color-text-muted)", marginTop: "2px" }}
          >
            {showTypeMore
              ? "Type another character"
              : isLoading
                ? "Searching..."
                : `${results.length} result${results.length !== 1 ? "s" : ""} for "${searchQuery}"`}
          </div>
        </div>
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            borderRadius: "var(--radius-s)",
            color: "var(--color-text-muted)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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

      <div style={{ flex: 1, overflow: "auto" }}>
        {showTypeMore && (
          <div
            style={{
              padding: "var(--inset-l) var(--inset-s)",
              textAlign: "center",
              color: "var(--color-text-muted)",
              fontSize: "var(--body-2-size)",
            }}
          >
            Type another character
          </div>
        )}
        {!showTypeMore &&
          results.map((result) => (
            <button
              key={result.ticker}
              onClick={() => onSelect(result)}
              onContextMenu={(e) => handleContextMenu(e, result)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "calc(100% - 16px)",
                padding: "12px",
                margin: "var(--inset-xs)",
                background: "transparent",
                border: "none",
                borderRadius: "var(--radius-m)",
                cursor: "pointer",
                textAlign: "left",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--color-bg-secondary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              <div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: "var(--body-1-size)",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {result.ticker}
                </div>
                <div
                  className="body-2"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {result.name}
                </div>
              </div>
            </button>
          ))}
      </div>

      {/* Context menu */}
      {contextMenu && (
        <div
          ref={contextMenuRef}
          style={{
            position: "fixed",
            top: contextMenu.y,
            left: contextMenu.x,
            zIndex: 1000,
            background: "var(--color-bg)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-m)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
            minWidth: "160px",
            overflow: "hidden",
          }}
        >
          <button
            onClick={handleAddToWatchlist}
            disabled={watchlistTickers.has(contextMenu.result.ticker)}
            style={{
              display: "block",
              width: "100%",
              padding: "10px var(--inset-m)",
              background: "transparent",
              border: "none",
              cursor: watchlistTickers.has(contextMenu.result.ticker) ? "default" : "pointer",
              textAlign: "left",
              fontSize: "var(--body-1-size)",
              color: watchlistTickers.has(contextMenu.result.ticker)
                ? "var(--color-text-muted)"
                : "var(--color-text-primary)",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => {
              if (!watchlistTickers.has(contextMenu.result.ticker)) {
                e.currentTarget.style.background = "var(--color-bg-secondary)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            {watchlistTickers.has(contextMenu.result.ticker)
              ? "Already in watchlist"
              : "Add to watchlist"}
          </button>
        </div>
      )}
    </div>
  );
}
