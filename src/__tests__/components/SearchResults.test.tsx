import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchResults from "@/components/SearchResults";

const mkResult = (ticker: string, name: string | null, exchange: string | null, exchange_name: string | null = null) =>
  ({ ticker, name, exchange, exchange_name });

describe("SearchResults", () => {
  const defaultProps = {
    results: [],
    searchQuery: "AA",
    isLoading: false,
    showTypeMore: false,
    watchlistNames: [] as string[],
    tickerMembership: new Map<string, Set<string>>(),
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
          mkResult("AAPL", "Apple Inc.", "XNAS"),
          mkResult("AAPD", "Direxion", "XNAS"),
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
        results={[mkResult("AAPL", "Apple Inc.", "XNAS")]}
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
          mkResult("AAPL", "Apple Inc.", "XNAS"),
          mkResult("MSFT", "Microsoft Corp.", "XNAS"),
        ]}
      />
    );
    expect(container.textContent).toContain("AAPL");
    expect(container.textContent).toContain("Apple Inc.");
    expect(container.textContent).toContain("MSFT");
    expect(container.textContent).toContain("Microsoft Corp.");
  });

  it("renders exchange_name when present", () => {
    const { container } = render(
      <SearchResults
        {...defaultProps}
        results={[mkResult("AAPL", "Apple Inc.", "XNAS", "NASDAQ")]}
      />
    );
    expect(container.textContent).toContain("AAPL");
    expect(container.textContent).toContain("NASDAQ");
  });

  it("does not render exchange_name when null", () => {
    const { container } = render(
      <SearchResults
        {...defaultProps}
        results={[mkResult("AAPL", "Apple Inc.", "XNAS", null)]}
      />
    );
    expect(container.textContent).toContain("AAPL");
    expect(container.textContent).not.toContain("null");
  });

  it("calls onSelect when a result is clicked", () => {
    const onSelect = vi.fn();
    const { container } = render(
      <SearchResults
        {...defaultProps}
        results={[mkResult("AAPL", "Apple Inc.", "XNAS")]}
        onSelect={onSelect}
      />
    );
    const buttons = container.querySelectorAll("button");
    const resultBtn = Array.from(buttons).find((b) => b.textContent?.includes("AAPL"))!;
    fireEvent.click(resultBtn);
    expect(onSelect).toHaveBeenCalledWith(mkResult("AAPL", "Apple Inc.", "XNAS"));
  });

  it("calls onClose when the close button is clicked", () => {
    const onClose = vi.fn();
    const { container } = render(<SearchResults {...defaultProps} onClose={onClose} />);
    const svgs = container.querySelectorAll("svg");
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
        results={[mkResult("XYZ", null, null)]}
      />
    );
    expect(container.textContent).toContain("XYZ");
  });

  it("right-click opens context menu with 'no watchlists' when watchlistNames is empty", () => {
    render(
      <SearchResults
        {...defaultProps}
        results={[mkResult("AAPL", "Apple Inc.", "XNAS")]}
        watchlistNames={[]}
      />
    );
    const resultBtn = screen.getAllByText("AAPL")[0].closest("button")!;
    fireEvent.contextMenu(resultBtn);
    expect(screen.getByText("Add to watchlist")).toBeTruthy();
    expect(screen.getByText("no watchlists")).toBeTruthy();
  });

  it("right-click shows all watchlist names in submenu", () => {
    render(
      <SearchResults
        {...defaultProps}
        results={[mkResult("AAPL", "Apple Inc.", "XNAS")]}
        watchlistNames={["Holdings", "Shortlist"]}
      />
    );
    fireEvent.contextMenu(screen.getAllByText("AAPL")[0].closest("button")!);
    expect(screen.getByText("Holdings")).toBeTruthy();
    expect(screen.getByText("Shortlist")).toBeTruthy();
  });

  it("calls onAddToWatchlist with correct watchlist name when a name is clicked", () => {
    const onAddToWatchlist = vi.fn();
    render(
      <SearchResults
        {...defaultProps}
        results={[mkResult("AAPL", "Apple Inc.", "XNAS")]}
        watchlistNames={["Holdings", "Shortlist"]}
        onAddToWatchlist={onAddToWatchlist}
      />
    );
    fireEvent.contextMenu(screen.getAllByText("AAPL")[0].closest("button")!);
    fireEvent.click(screen.getByText("Holdings"));
    expect(onAddToWatchlist).toHaveBeenCalledWith(
      mkResult("AAPL", "Apple Inc.", "XNAS"),
      "Holdings"
    );
  });

  it("greys out and disables watchlist names the ticker already belongs to", () => {
    const membership = new Map([["AAPL", new Set(["Holdings"])]]);
    render(
      <SearchResults
        {...defaultProps}
        results={[mkResult("AAPL", "Apple Inc.", "XNAS")]}
        watchlistNames={["Holdings", "Shortlist"]}
        tickerMembership={membership}
      />
    );
    fireEvent.contextMenu(screen.getAllByText("AAPL")[0].closest("button")!);
    const holdingsBtn = screen.getByText("Holdings").closest("button")!;
    const shortlistBtn = screen.getByText("Shortlist").closest("button")!;
    expect(holdingsBtn).toBeDisabled();
    expect(shortlistBtn).not.toBeDisabled();
  });

  it("does not call onAddToWatchlist when clicking a greyed-out watchlist name", () => {
    const onAddToWatchlist = vi.fn();
    const membership = new Map([["AAPL", new Set(["Holdings"])]]);
    render(
      <SearchResults
        {...defaultProps}
        results={[mkResult("AAPL", "Apple Inc.", "XNAS")]}
        watchlistNames={["Holdings"]}
        tickerMembership={membership}
        onAddToWatchlist={onAddToWatchlist}
      />
    );
    fireEvent.contextMenu(screen.getAllByText("AAPL")[0].closest("button")!);
    fireEvent.click(screen.getByText("Holdings"));
    expect(onAddToWatchlist).not.toHaveBeenCalled();
  });
});
