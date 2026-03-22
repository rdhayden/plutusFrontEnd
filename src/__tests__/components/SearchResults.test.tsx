import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchResults from "@/components/SearchResults";

describe("SearchResults", () => {
  const defaultProps = {
    results: [],
    searchQuery: "AA",
    isLoading: false,
    showTypeMore: false,
    watchlistTickers: new Set<string>(),
    onSelect: vi.fn(),
    onAddToWatchlist: vi.fn(),
    onClose: vi.fn(),
  };

  it("renders the Search Results heading", () => {
    render(<SearchResults {...defaultProps} />);
    expect(screen.getAllByText("Search Results").length).toBeGreaterThanOrEqual(1);
  });

  it("shows result count and search query", () => {
    render(
      <SearchResults
        {...defaultProps}
        results={[
          { ticker: "AAPL", name: "Apple Inc.", exchange: "XNAS" },
          { ticker: "AAPD", name: "Direxion", exchange: "XNAS" },
        ]}
        searchQuery="AA"
      />
    );
    expect(screen.getAllByText('2 results for "AA"').length).toBeGreaterThanOrEqual(1);
  });

  it("shows singular 'result' for 1 result", () => {
    render(
      <SearchResults
        {...defaultProps}
        results={[{ ticker: "AAPL", name: "Apple Inc.", exchange: "XNAS" }]}
        searchQuery="AAPL"
      />
    );
    expect(screen.getAllByText('1 result for "AAPL"').length).toBeGreaterThanOrEqual(1);
  });

  it("shows 'Searching...' when loading", () => {
    render(<SearchResults {...defaultProps} isLoading={true} />);
    expect(screen.getAllByText("Searching...").length).toBeGreaterThanOrEqual(1);
  });

  it("shows 'Type another character' prompt when showTypeMore is true", () => {
    render(<SearchResults {...defaultProps} showTypeMore={true} />);
    expect(screen.getAllByText("Type another character").length).toBeGreaterThanOrEqual(1);
  });

  it("renders result items with ticker and name", () => {
    const { container } = render(
      <SearchResults
        {...defaultProps}
        results={[
          { ticker: "AAPL", name: "Apple Inc.", exchange: "XNAS" },
          { ticker: "MSFT", name: "Microsoft Corp.", exchange: "XNAS" },
        ]}
      />
    );
    expect(container.textContent).toContain("AAPL");
    expect(container.textContent).toContain("Apple Inc.");
    expect(container.textContent).toContain("MSFT");
    expect(container.textContent).toContain("Microsoft Corp.");
  });

  it("calls onSelect when a result is clicked", () => {
    const onSelect = vi.fn();

    const { container } = render(
      <SearchResults
        {...defaultProps}
        results={[{ ticker: "AAPL", name: "Apple Inc.", exchange: "XNAS" }]}
        onSelect={onSelect}
      />
    );

    // Find the result button (not the close button) via container query
    const buttons = container.querySelectorAll("button");
    const resultBtn = Array.from(buttons).find((b) => b.textContent?.includes("AAPL"))!;
    fireEvent.click(resultBtn);
    expect(onSelect).toHaveBeenCalledWith({ ticker: "AAPL", name: "Apple Inc.", exchange: "XNAS" });
  });

  it("calls onClose when the close button is clicked", () => {
    const onClose = vi.fn();
    const { container } = render(
      <SearchResults {...defaultProps} onClose={onClose} />
    );

    // The close button contains an SVG with an X icon
    const svgs = container.querySelectorAll("svg");
    // The X/close SVG has lines (not circles like the search icon)
    const closeBtn = Array.from(svgs)
      .find((svg) => svg.querySelector("line"))
      ?.closest("button");
    expect(closeBtn).toBeTruthy();
    fireEvent.click(closeBtn!);
    expect(onClose).toHaveBeenCalled();
  });

  it("handles null name in results", () => {
    const { container } = render(
      <SearchResults
        {...defaultProps}
        results={[{ ticker: "XYZ", name: null, exchange: null }]}
      />
    );
    expect(container.textContent).toContain("XYZ");
  });
});
