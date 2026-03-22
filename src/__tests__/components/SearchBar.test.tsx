import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from "@/components/SearchBar";

describe("SearchBar", () => {
  const defaultProps = {
    value: "",
    onChange: vi.fn(),
    onFocus: vi.fn(),
  };

  it("renders the search input with placeholder", () => {
    const { container } = render(<SearchBar {...defaultProps} />);
    const input = container.querySelector("input");
    expect(input).toBeTruthy();
    expect(input!.placeholder).toBe("Search symbols...");
  });

  it("displays the current value", () => {
    const { container } = render(<SearchBar {...defaultProps} value="AAPL" />);
    const input = container.querySelector("input") as HTMLInputElement;
    expect(input.value).toBe("AAPL");
  });

  it("calls onChange when typing", () => {
    const onChange = vi.fn();
    const { container } = render(<SearchBar {...defaultProps} onChange={onChange} />);
    const input = container.querySelector("input")!;
    fireEvent.change(input, { target: { value: "A" } });
    expect(onChange).toHaveBeenCalledWith("A");
  });

  it("calls onFocus when input is focused", () => {
    const onFocus = vi.fn();
    const { container } = render(<SearchBar {...defaultProps} onFocus={onFocus} />);
    const input = container.querySelector("input")!;
    fireEvent.focus(input);
    expect(onFocus).toHaveBeenCalled();
  });

  it("focuses input when '/' key is pressed", () => {
    const { container } = render(<SearchBar {...defaultProps} />);
    const input = container.querySelector("input")!;
    fireEvent.keyDown(window, { key: "/" });
    expect(document.activeElement).toBe(input);
  });

  it("does not steal focus when '/' is pressed while input is already focused", () => {
    const { container } = render(<SearchBar {...defaultProps} />);
    const input = container.querySelector("input")!;
    input.focus();
    fireEvent.keyDown(window, { key: "/" });
    expect(document.activeElement).toBe(input);
  });
});
