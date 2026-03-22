export interface TickerSearchResult {
  ticker: string;
  name: string | null;
  exchange: string | null;
}

export type Timeframe =
  | "TICK"
  | "SECOND"
  | "MINUTE"
  | "HOUR"
  | "DAY"
  | "WEEK"
  | "MONTH";

export const TIMEFRAME_LABELS: Record<Timeframe, string> = {
  TICK: "Tick",
  SECOND: "1 Second",
  MINUTE: "1 Minute",
  HOUR: "1 Hour",
  DAY: "1 Day",
  WEEK: "1 Week",
  MONTH: "1 Month",
};

export interface SignalParameter {
  name: string;
  value: string;
}

export interface AvailableSignal {
  name: string;
  parameters: SignalParameter[];
  visualiseWith: string[];
}

export interface CandleData {
  time: string | number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume?: number;
}

export interface TimeSeriesPoint {
  time: string | number;
  values: Record<string, number>;
}

export interface SignalResult {
  signalHash: number;
  candles: CandleData[];
  timeSeries: TimeSeriesPoint[];
}

export interface SignalOverlay {
  signalName: string;
  signalHash: number;
  specification: { name: string; value: string }[];
  timeSeries: TimeSeriesPoint[];
  visualiseWith: string[];
}

export interface ChartTab {
  ticker: string;
  exchange: string | null;
  name: string;
  data: CandleData[];
  lastPrice: number;
  timeframe: Timeframe;
  from: string;
  signals: SignalOverlay[];
}
