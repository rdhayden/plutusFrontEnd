import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Watchlist from "@/components/Watchlist";
import { WatchlistEntry } from "@/lib/types";

describe("Watchlist", () => {
  const defaultProps = {
    name: "My Watchlist",
    items: [] as WatchlistEntry[],
    isOpen: true,
    onToggle: vi.fn(),
    onSelect: vi.fn(),
    onRemove: vi.fn(),
    onDelete: vi.fn(),
    onRename: vi.fn().mockReturnValue(null),
    notes: {},
    onNoteChange: vi.fn(),
    onNoteDelete: vi.fn(),
  };

  it("renders the watchlist name in the heading", () => {
    render(<Watchlist {...defaultProps} name="Holdings" />);
    expect(screen.getAllByText("Holdings").length).toBeGreaterThanOrEqual(1);
  });

  it("shows empty state message when open and no items", () => {
    render(<Watchlist {...defaultProps} isOpen={true} items={[]} />);
    expect(screen.getAllByText(/Right-click a search result/).length).toBeGreaterThanOrEqual(1);
  });

  it("does not show items when closed", () => {
    const items: WatchlistEntry[] = [{ ticker: "AAPL", name: "Apple Inc.", exchange: null, notes: "" }];
    render(<Watchlist {...defaultProps} isOpen={false} items={items} />);
    expect(screen.queryByText("AAPL")).toBeNull();
  });

  it("renders ticker and name for each item when open", () => {
    const items: WatchlistEntry[] = [
      { ticker: "AAPL", name: "Apple Inc.", exchange: null, notes: "" },
    ];
    render(<Watchlist {...defaultProps} isOpen={true} items={items} />);
    expect(screen.getAllByText("AAPL").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Apple Inc.").length).toBeGreaterThanOrEqual(1);
  });

  it("calls onSelect with the entry object when item is clicked", () => {
    const onSelect = vi.fn();
    const items: WatchlistEntry[] = [
      { ticker: "MSFT", name: "Microsoft Corp.", exchange: null, notes: "" },
    ];
    render(<Watchlist {...defaultProps} isOpen={true} items={items} onSelect={onSelect} />);
    const btn = screen.getAllByText("MSFT")[0].closest("button")!;
    fireEvent.click(btn);
    expect(onSelect).toHaveBeenCalledWith({ ticker: "MSFT", name: "Microsoft Corp.", exchange: null, notes: "" });
  });

  it("calls onRemove with ticker when remove button is clicked", () => {
    const onRemove = vi.fn();
    const items: WatchlistEntry[] = [
      { ticker: "AAPL", name: "Apple Inc.", exchange: null, notes: "" },
    ];
    render(<Watchlist {...defaultProps} isOpen={true} items={items} onRemove={onRemove} />);
    const removeBtn = screen.getByRole("button", { name: "Remove AAPL from watchlist" });
    fireEvent.click(removeBtn);
    expect(onRemove).toHaveBeenCalledWith("AAPL");
  });

  it("calls onToggle when the toggle button is clicked", () => {
    const onToggle = vi.fn();
    render(<Watchlist {...defaultProps} name="Holdings" onToggle={onToggle} />);
    const heading = screen.getAllByText("Holdings")[0].closest("button")!;
    fireEvent.click(heading);
    expect(onToggle).toHaveBeenCalled();
  });

  it("calls onDelete when the delete button is clicked", () => {
    const onDelete = vi.fn();
    render(<Watchlist {...defaultProps} name="Holdings" onDelete={onDelete} />);
    const deleteBtn = screen.getByRole("button", { name: "Delete watchlist Holdings" });
    fireEvent.click(deleteBtn);
    expect(onDelete).toHaveBeenCalled();
  });

  it("clicking pencil icon activates rename input pre-filled with name", async () => {
    render(<Watchlist {...defaultProps} name="Holdings" />);
    const pencilBtn = screen.getByRole("button", { name: "Rename watchlist Holdings" });
    fireEvent.click(pencilBtn);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("Holdings");
  });

  it("calls onRename and closes input on Enter with valid name", () => {
    const onRename = vi.fn().mockReturnValue(null);
    render(<Watchlist {...defaultProps} name="Holdings" onRename={onRename} />);
    fireEvent.click(screen.getByRole("button", { name: "Rename watchlist Holdings" }));
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "My Holdings" } });
    fireEvent.keyDown(input, { key: "Enter" });
    expect(onRename).toHaveBeenCalledWith("My Holdings");
    expect(screen.queryByRole("textbox")).toBeNull();
  });

  it("shows inline error and keeps input open when onRename returns an error", () => {
    const onRename = vi.fn().mockReturnValue("Watchlist name must be unique");
    render(<Watchlist {...defaultProps} name="Holdings" onRename={onRename} />);
    fireEvent.click(screen.getByRole("button", { name: "Rename watchlist Holdings" }));
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Shortlist" } });
    fireEvent.keyDown(input, { key: "Enter" });
    expect(screen.getByText("Watchlist name must be unique")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });

  it("cancels rename on Escape without calling onRename", () => {
    const onRename = vi.fn();
    render(<Watchlist {...defaultProps} name="Holdings" onRename={onRename} />);
    fireEvent.click(screen.getByRole("button", { name: "Rename watchlist Holdings" }));
    fireEvent.keyDown(screen.getByRole("textbox"), { key: "Escape" });
    expect(onRename).not.toHaveBeenCalled();
    expect(screen.queryByRole("textbox")).toBeNull();
  });

  it("renders multiple items", () => {
    const items: WatchlistEntry[] = [
      { ticker: "AAPL", name: "Apple", exchange: null, notes: "" },
      { ticker: "MSFT", name: "Microsoft", exchange: null, notes: "" },
      { ticker: "GOOG", name: "Alphabet", exchange: null, notes: "" },
    ];
    const { container } = render(<Watchlist {...defaultProps} isOpen={true} items={items} />);
    expect(container.textContent).toContain("AAPL");
    expect(container.textContent).toContain("MSFT");
    expect(container.textContent).toContain("GOOG");
  });
});
