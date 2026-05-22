import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import SignalConfigPanel from "@/components/SignalConfigPanel";
import { AvailableSignal } from "@/lib/types";

const smaSignal: AvailableSignal = {
  name: "SimpleMovingAverage",
  parameters: [{ name: "period", value: "INTEGER", default: null }],
  visualiseWith: ["PriceSignal"],
};

const multiParamSignal: AvailableSignal = {
  name: "BollingerBands",
  parameters: [
    { name: "period", value: "INTEGER" },
    { name: "stddev", value: "FLOAT" },
    { name: "source", value: "STRING" },
  ],
  visualiseWith: ["PriceSignal"],
};

const defaultProps = {
  signal: smaSignal,
  defaultTicker: "AAPL",
  defaultExchange: "XNAS",
  onSubmit: vi.fn(),
  onClose: vi.fn(),
  duplicateMessage: null,
};

describe("SignalConfigPanel", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders the signal name in the heading", () => {
    const { container } = render(<SignalConfigPanel {...defaultProps} />);
    expect(container.textContent).toContain("Configure SimpleMovingAverage");
  });

  it("renders an input for each parameter", () => {
    render(<SignalConfigPanel {...defaultProps} signal={multiParamSignal} />);
    expect(screen.getByLabelText("period")).toBeTruthy();
    expect(screen.getByLabelText("stddev")).toBeTruthy();
    expect(screen.getByLabelText("source")).toBeTruthy();
  });

  it("shows parameter type labels", () => {
    const { container } = render(<SignalConfigPanel {...defaultProps} signal={multiParamSignal} />);
    expect(container.textContent).toContain("period (INTEGER)");
    expect(container.textContent).toContain("stddev (FLOAT)");
    expect(container.textContent).toContain("source (STRING)");
  });

  it("renders the Add Signal submit button", () => {
    render(<SignalConfigPanel {...defaultProps} />);
    expect(screen.getByRole("button", { name: "Add Signal" })).toBeTruthy();
  });

  it("renders the close button", () => {
    render(<SignalConfigPanel {...defaultProps} />);
    expect(screen.getByLabelText("Close signal config")).toBeTruthy();
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = vi.fn();
    render(<SignalConfigPanel {...defaultProps} onClose={onClose} />);
    fireEvent.click(screen.getByLabelText("Close signal config"));
    expect(onClose).toHaveBeenCalled();
  });

  it("calls onSubmit with signal name and specification when valid values are provided", () => {
    const onSubmit = vi.fn();
    render(<SignalConfigPanel {...defaultProps} onSubmit={onSubmit} />);

    fireEvent.change(screen.getByLabelText("period"), { target: { value: "14" } });
    fireEvent.click(screen.getByRole("button", { name: "Add Signal" }));

    expect(onSubmit).toHaveBeenCalledWith("SimpleMovingAverage", [
      { name: "period", value: "14" },
    ]);
  });

  it("does not call onSubmit when integer field has non-integer value", () => {
    const onSubmit = vi.fn();
    render(<SignalConfigPanel {...defaultProps} onSubmit={onSubmit} />);

    fireEvent.change(screen.getByLabelText("period"), { target: { value: "abc" } });
    fireEvent.click(screen.getByRole("button", { name: "Add Signal" }));

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("shows error for invalid integer value", () => {
    render(<SignalConfigPanel {...defaultProps} />);

    fireEvent.change(screen.getByLabelText("period"), { target: { value: "3.5" } });
    fireEvent.click(screen.getByRole("button", { name: "Add Signal" }));

    expect(screen.getByRole("alert").textContent).toBe("Must be an integer");
  });

  it("shows error for invalid float value", () => {
    render(<SignalConfigPanel {...defaultProps} signal={multiParamSignal} />);

    fireEvent.change(screen.getByLabelText("period"), { target: { value: "14" } });
    fireEvent.change(screen.getByLabelText("stddev"), { target: { value: "not-a-number" } });
    fireEvent.change(screen.getByLabelText("source"), { target: { value: "close" } });
    fireEvent.click(screen.getByRole("button", { name: "Add Signal" }));

    expect(screen.getByRole("alert").textContent).toBe("Must be a number");
  });

  it("shows error for empty required fields", () => {
    render(<SignalConfigPanel {...defaultProps} />);

    // Don't fill in any value, just submit
    fireEvent.click(screen.getByRole("button", { name: "Add Signal" }));

    expect(screen.getByRole("alert").textContent).toBe("Value is required");
  });

  it("accepts valid float values", () => {
    const onSubmit = vi.fn();
    render(
      <SignalConfigPanel
        {...defaultProps}
        signal={multiParamSignal}
        onSubmit={onSubmit}
      />
    );

    fireEvent.change(screen.getByLabelText("period"), { target: { value: "20" } });
    fireEvent.change(screen.getByLabelText("stddev"), { target: { value: "2.5" } });
    fireEvent.change(screen.getByLabelText("source"), { target: { value: "close" } });
    fireEvent.click(screen.getByRole("button", { name: "Add Signal" }));

    expect(onSubmit).toHaveBeenCalledWith("BollingerBands", [
      { name: "period", value: "20" },
      { name: "stddev", value: "2.5" },
      { name: "source", value: "close" },
    ]);
  });

  it("accepts string values without validation", () => {
    const onSubmit = vi.fn();
    const stringSignal: AvailableSignal = {
      name: "TestSignal",
      parameters: [{ name: "ticker", value: "STRING" }],
      visualiseWith: [],
    };
    render(<SignalConfigPanel {...defaultProps} signal={stringSignal} onSubmit={onSubmit} />);

    fireEvent.change(screen.getByLabelText("ticker"), { target: { value: "MSFT" } });
    fireEvent.click(screen.getByRole("button", { name: "Add Signal" }));

    expect(onSubmit).toHaveBeenCalledWith("TestSignal", [
      { name: "ticker", value: "MSFT" },
    ]);
  });

  it("pre-fills ticker parameter with defaultTicker", () => {
    const signalWithTicker: AvailableSignal = {
      name: "RSI",
      parameters: [
        { name: "ticker", value: "STRING" },
        { name: "period", value: "INTEGER" },
      ],
      visualiseWith: [],
    };
    render(<SignalConfigPanel {...defaultProps} signal={signalWithTicker} defaultTicker="GOOG" />);

    const tickerInput = screen.getByLabelText("ticker") as HTMLInputElement;
    expect(tickerInput.value).toBe("GOOG");

    // Non-ticker param should still be empty
    const periodInput = screen.getByLabelText("period") as HTMLInputElement;
    expect(periodInput.value).toBe("");
  });

  it("pre-fills exchange parameter with defaultExchange", () => {
    const signalWithExchange: AvailableSignal = {
      name: "PriceSignal",
      parameters: [
        { name: "ticker", value: "STRING" },
        { name: "exchange", value: "STRING" },
      ],
      visualiseWith: [],
    };
    render(
      <SignalConfigPanel
        {...defaultProps}
        signal={signalWithExchange}
        defaultTicker="AAPL"
        defaultExchange="XNAS"
      />
    );

    const exchangeInput = screen.getByLabelText("exchange") as HTMLInputElement;
    expect(exchangeInput.value).toBe("XNAS");
  });

  it("leaves exchange empty when defaultExchange is null", () => {
    const signalWithExchange: AvailableSignal = {
      name: "PriceSignal",
      parameters: [{ name: "exchange", value: "STRING" }],
      visualiseWith: [],
    };
    render(
      <SignalConfigPanel
        {...defaultProps}
        signal={signalWithExchange}
        defaultExchange={null}
      />
    );

    const exchangeInput = screen.getByLabelText("exchange") as HTMLInputElement;
    expect(exchangeInput.value).toBe("");
  });

  it("pre-fills parameter with default value from availableSignals", () => {
    const signalWithDefault: AvailableSignal = {
      name: "SimpleMovingAverage",
      parameters: [{ name: "period", value: "INTEGER", default: 20 }],
      visualiseWith: ["PriceSignal"],
    };
    render(<SignalConfigPanel {...defaultProps} signal={signalWithDefault} />);

    const periodInput = screen.getByLabelText("period") as HTMLInputElement;
    expect(periodInput.value).toBe("20");
  });

  it("pre-fills string parameter with string default value", () => {
    const signalWithStringDefault: AvailableSignal = {
      name: "TestSignal",
      parameters: [{ name: "source", value: "STRING", default: "close" }],
      visualiseWith: [],
    };
    render(<SignalConfigPanel {...defaultProps} signal={signalWithStringDefault} />);

    const sourceInput = screen.getByLabelText("source") as HTMLInputElement;
    expect(sourceInput.value).toBe("close");
  });

  it("leaves parameter empty when default is null", () => {
    const signalWithNullDefault: AvailableSignal = {
      name: "SimpleMovingAverage",
      parameters: [{ name: "period", value: "INTEGER", default: null }],
      visualiseWith: ["PriceSignal"],
    };
    render(<SignalConfigPanel {...defaultProps} signal={signalWithNullDefault} />);

    const periodInput = screen.getByLabelText("period") as HTMLInputElement;
    expect(periodInput.value).toBe("");
  });

  it("submits pre-filled default value without user changes", () => {
    const onSubmit = vi.fn();
    const signalWithDefault: AvailableSignal = {
      name: "SimpleMovingAverage",
      parameters: [{ name: "period", value: "INTEGER", default: 20 }],
      visualiseWith: ["PriceSignal"],
    };
    render(<SignalConfigPanel {...defaultProps} signal={signalWithDefault} onSubmit={onSubmit} />);

    fireEvent.click(screen.getByRole("button", { name: "Add Signal" }));

    expect(onSubmit).toHaveBeenCalledWith("SimpleMovingAverage", [
      { name: "period", value: "20" },
    ]);
  });

  it("submits pre-filled ticker value without user changes", () => {
    const onSubmit = vi.fn();
    const signalWithTicker: AvailableSignal = {
      name: "RSI",
      parameters: [
        { name: "ticker", value: "STRING" },
        { name: "period", value: "INTEGER" },
      ],
      visualiseWith: [],
    };
    render(<SignalConfigPanel {...defaultProps} signal={signalWithTicker} onSubmit={onSubmit} />);

    fireEvent.change(screen.getByLabelText("period"), { target: { value: "14" } });
    fireEvent.click(screen.getByRole("button", { name: "Add Signal" }));

    expect(onSubmit).toHaveBeenCalledWith("RSI", [
      { name: "ticker", value: "AAPL" },
      { name: "period", value: "14" },
    ]);
  });

  it("displays duplicate message when provided", () => {
    render(
      <SignalConfigPanel
        {...defaultProps}
        duplicateMessage="This signal with the same parameters is already on the chart"
      />
    );

    expect(screen.getByRole("status").textContent).toBe(
      "This signal with the same parameters is already on the chart"
    );
  });

  it("does not display duplicate message when null", () => {
    render(<SignalConfigPanel {...defaultProps} duplicateMessage={null} />);
    expect(screen.queryByRole("status")).toBeNull();
  });

  it("clears errors when values are corrected after submission", () => {
    render(<SignalConfigPanel {...defaultProps} />);

    // Submit with invalid value
    fireEvent.change(screen.getByLabelText("period"), { target: { value: "abc" } });
    fireEvent.click(screen.getByRole("button", { name: "Add Signal" }));
    expect(screen.getByRole("alert")).toBeTruthy();

    // Fix the value - error should clear
    fireEvent.change(screen.getByLabelText("period"), { target: { value: "14" } });
    expect(screen.queryByRole("alert")).toBeNull();
  });

  it("accepts negative integers", () => {
    const onSubmit = vi.fn();
    render(<SignalConfigPanel {...defaultProps} onSubmit={onSubmit} />);

    fireEvent.change(screen.getByLabelText("period"), { target: { value: "-5" } });
    fireEvent.click(screen.getByRole("button", { name: "Add Signal" }));

    expect(onSubmit).toHaveBeenCalledWith("SimpleMovingAverage", [
      { name: "period", value: "-5" },
    ]);
  });
});
