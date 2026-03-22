import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Watchlist from "@/components/Watchlist";
import { TickerSearchResult } from "@/lib/types";

describe("Watchlist", () => {
  const defaultProps = {
    items: [] as TickerSearchResult[],
    isOpen: true,
    onToggle: vi.fn(),
    onSelect: vi.fn(),
    onRemove: vi.fn(),
    notes: {},
    onNoteChange: vi.fn(),
    onNoteDelete: vi.fn(),
  };

  it("renders the Watchlist heading", () => {
    render(<Watchlist {...defaultProps} />);
    expect(screen.getAllByText("Watchlist").length).toBeGreaterThanOrEqual(1);
  });

  it("shows empty state message when open and no items", () => {
    render(<Watchlist {...defaultProps} isOpen={true} items={[]} />);
    expect(screen.getAllByText(/Right-click a search result/).length).toBeGreaterThanOrEqual(1);
  });

  it("does not show items when closed", () => {
    const items: TickerSearchResult[] = [{ ticker: "AAPL", name: "Apple Inc.", exchange: "XNAS" }];
    render(<Watchlist {...defaultProps} isOpen={false} items={items} />);
    expect(screen.queryByText("AAPL")).toBeNull();
  });

  it("renders ticker and name for each item when open", () => {
    const items: TickerSearchResult[] = [
      { ticker: "AAPL", name: "Apple Inc.", exchange: "XNAS" },
    ];
    render(<Watchlist {...defaultProps} isOpen={true} items={items} />);
    expect(screen.getAllByText("AAPL").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Apple Inc.").length).toBeGreaterThanOrEqual(1);
  });

  it("calls onSelect with the result object when item is clicked", () => {
    const onSelect = vi.fn();
    const items: TickerSearchResult[] = [
      { ticker: "MSFT", name: "Microsoft Corp.", exchange: "XNAS" },
    ];
    render(<Watchlist {...defaultProps} isOpen={true} items={items} onSelect={onSelect} />);
    const btn = screen.getAllByText("MSFT")[0].closest("button")!;
    fireEvent.click(btn);
    expect(onSelect).toHaveBeenCalledWith({ ticker: "MSFT", name: "Microsoft Corp.", exchange: "XNAS" });
  });

  it("calls onRemove with ticker when remove button is clicked", () => {
    const onRemove = vi.fn();
    const items: TickerSearchResult[] = [
      { ticker: "AAPL", name: "Apple Inc.", exchange: "XNAS" },
    ];
    render(<Watchlist {...defaultProps} isOpen={true} items={items} onRemove={onRemove} />);
    const removeBtn = screen.getByRole("button", { name: "Remove AAPL from watchlist" });
    fireEvent.click(removeBtn);
    expect(onRemove).toHaveBeenCalledWith("AAPL");
  });

  it("calls onToggle when the header is clicked", () => {
    const onToggle = vi.fn();
    render(<Watchlist {...defaultProps} onToggle={onToggle} />);
    const heading = screen.getAllByText("Watchlist")[0].closest("button")!;
    fireEvent.click(heading);
    expect(onToggle).toHaveBeenCalled();
  });

  it("renders multiple items", () => {
    const items: TickerSearchResult[] = [
      { ticker: "AAPL", name: "Apple", exchange: "XNAS" },
      { ticker: "MSFT", name: "Microsoft", exchange: "XNAS" },
      { ticker: "GOOG", name: "Alphabet", exchange: "XNAS" },
    ];
    const { container } = render(<Watchlist {...defaultProps} isOpen={true} items={items} />);
    expect(container.textContent).toContain("AAPL");
    expect(container.textContent).toContain("MSFT");
    expect(container.textContent).toContain("GOOG");
  });
});
