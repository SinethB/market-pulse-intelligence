import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMarket } from "@/lib/market/context";
import { formatLkr, formatNumber, formatPct } from "@/lib/market/format";
import { SRI_LANKA_MAP } from "@/lib/market/geo";
import type { MapMode } from "@/lib/market/types";
import { cn } from "@/lib/utils";

const MODES: { id: MapMode; label: string }[] = [
  { id: "revenue", label: "Revenue" },
  { id: "growth", label: "Growth" },
  { id: "customers", label: "Customers" },
  { id: "penetration", label: "Density" },
];

function metricValue(
  mode: MapMode,
  row: { revenue: number; growth: number | null; customers: number; penetration: number },
): number {
  if (mode === "revenue") return row.revenue;
  if (mode === "growth") return row.growth ?? 0;
  if (mode === "customers") return row.customers;
  return row.penetration;
}

function formatMetric(mode: MapMode, row: { revenue: number; growth: number | null; customers: number; penetration: number }): string {
  if (mode === "revenue") return formatLkr(row.revenue, true);
  if (mode === "growth") return formatPct(row.growth);
  if (mode === "customers") return formatNumber(row.customers);
  return `${(row.penetration * 1000).toFixed(1)} per 1k`;
}

export function MapPanel() {
  const { analytics, filters, mapMode, setMapMode, selectDistrict } = useMarket();
  const [hover, setHover] = useState<string | null>(null);
  const stats = new Map(analytics.byDistrict.map((d) => [d.district, d]));
  const values = analytics.byDistrict.map((d) => metricValue(mapMode, d));
  const max = Math.max(...values.map((v) => Math.abs(v)), 1e-9);
  const hoverRow = hover ? stats.get(hover) : null;
  const selected = filters.district !== "All" ? filters.district : null;

  return (
    <Card className="min-w-0">
      <CardHeader className="flex flex-row flex-wrap items-start justify-between gap-3">
        <div>
          <CardTitle>Sri Lanka</CardTitle>
          <p className="mt-1 text-xs text-muted">Click a district to filter the dashboard.</p>
        </div>
        <div className="flex flex-wrap gap-1">
          {MODES.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMapMode(m.id)}
              className={cn(
                "h-11 rounded-full border px-3 text-xs font-medium",
                mapMode === m.id
                  ? "border-primary/40 bg-primary text-primary-foreground"
                  : "border-border text-muted hover:text-fg",
              )}
            >
              {m.label}
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-[1fr_9.5rem]">
          <div className="relative mx-auto w-full max-w-[220px] sm:max-w-[260px]">
            <span className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.2em] text-muted uppercase">
              North
            </span>
            <svg
              viewBox={SRI_LANKA_MAP.viewBox}
              role="img"
              aria-label="Map of Sri Lanka districts"
              className="mt-4 mb-5 h-auto w-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {SRI_LANKA_MAP.districts.map((d) => {
                const row = stats.get(d.name);
                const raw = row ? metricValue(mapMode, row) : 0;
                const t = Math.min(1, Math.abs(raw) / max);
                const active = selected === d.name;
                const isHover = hover === d.name;
                const fill =
                  mapMode === "growth" && raw < 0
                    ? `color-mix(in oklab, var(--color-down) ${Math.round(28 + t * 55)}%, var(--color-surface-2))`
                    : `color-mix(in oklab, var(--color-primary) ${Math.round(18 + t * 62)}%, var(--color-surface-2))`;
                return (
                  <path
                    key={d.id}
                    d={d.path}
                    fill={active ? "var(--color-primary)" : fill}
                    stroke={isHover || active ? "var(--color-fg)" : "var(--color-bg)"}
                    strokeWidth={active || isHover ? 2.4 : 1.2}
                    className="cursor-pointer transition-[fill,stroke-width] duration-150"
                    onMouseEnter={() => setHover(d.name)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => selectDistrict(d.name)}
                  >
                    <title>{d.name}</title>
                  </path>
                );
              })}
              {SRI_LANKA_MAP.districts
                .filter((d) => ["Colombo", "Kandy", "Galle", "Jaffna"].includes(d.name))
                .map((d) => (
                  <text
                    key={`${d.id}-label`}
                    x={d.cx}
                    y={d.cy}
                    textAnchor="middle"
                    fill="var(--color-fg)"
                    stroke="var(--color-bg)"
                    strokeWidth="5"
                    paintOrder="stroke"
                    fontSize="22"
                    fontFamily="IBM Plex Sans, sans-serif"
                    className="pointer-events-none"
                  >
                    {d.name}
                  </text>
                ))}
            </svg>
            <span className="pointer-events-none absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.2em] text-muted uppercase">
              South
            </span>
          </div>
          <aside className="flex flex-col justify-between gap-3 rounded-lg bg-surface-2 p-3">
            <div>
              <p className="text-[11px] tracking-[0.14em] text-muted uppercase">Focus</p>
              <p className="mt-1 text-sm font-medium">{hover ?? selected ?? "All districts"}</p>
              {hoverRow ? (
                <dl className="mt-3 grid gap-1.5 text-xs">
                  <div className="flex justify-between gap-2">
                    <dt className="text-muted">Province</dt>
                    <dd>{hoverRow.province}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-muted">{MODES.find((m) => m.id === mapMode)?.label}</dt>
                    <dd className="tabular-nums">{formatMetric(mapMode, hoverRow)}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-muted">Revenue</dt>
                    <dd className="tabular-nums">{formatLkr(hoverRow.revenue, true)}</dd>
                  </div>
                </dl>
              ) : (
                <p className="mt-2 text-xs text-muted">Hover or tap a district.</p>
              )}
            </div>
            <p className="text-[11px] text-muted">Western, Central, Southern, Northern and the rest of the island.</p>
          </aside>
        </div>
      </CardContent>
    </Card>
  );
}
