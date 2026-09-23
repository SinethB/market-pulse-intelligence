const LKR = new Intl.NumberFormat("en-LK", { maximumFractionDigits: 0 });
const LKR_1 = new Intl.NumberFormat("en-LK", { maximumFractionDigits: 1 });
const PCT = new Intl.NumberFormat("en-LK", { maximumFractionDigits: 1, signDisplay: "exceptZero" });
const NUM = new Intl.NumberFormat("en-LK");

export function formatLkr(value: number, compact = false): string {
  const abs = Math.abs(value);
  if (compact || abs >= 1_000_000) {
    if (abs >= 1_000_000_000) return `Rs. ${LKR_1.format(value / 1_000_000_000)}B`;
    if (abs >= 1_000_000) return `Rs. ${LKR_1.format(value / 1_000_000)}M`;
    if (abs >= 10_000) return `Rs. ${LKR.format(value / 1_000)}k`;
  }
  return `Rs. ${LKR.format(Math.round(value))}`;
}

export function formatNumber(value: number): string {
  return NUM.format(Math.round(value));
}

export function formatPct(value: number | null, digits = 1): string {
  if (value === null || Number.isNaN(value) || !Number.isFinite(value)) return "—";
  return `${PCT.format(value * 100)}%`;
}

export function formatShare(value: number): string {
  return `${(value * 100).toFixed(0)}%`;
}

export function deltaTone(value: number | null): "up" | "down" | "muted" {
  if (value === null || Math.abs(value) < 0.005) return "muted";
  return value > 0 ? "up" : "down";
}

export function formatPeriodLabel(year: number | "all", maxDate: Date | null): string {
  if (year === "all") return "All years";
  if (year === 2026 && maxDate && maxDate.getUTCFullYear() === 2026) {
    const m = maxDate.getUTCMonth();
    if (m < 11) return "2026 YTD";
  }
  return String(year);
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function monthLabel(year: number, month: number): string {
  return `${MONTHS[month]} ${String(year).slice(2)}`;
}
