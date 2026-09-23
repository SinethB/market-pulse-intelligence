import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMarket } from "@/lib/market/context";
import { formatLkr, formatPct } from "@/lib/market/format";
import { cn } from "@/lib/utils";

export function ProductPerformance() {
  const { analytics } = useMarket();
  const items = analytics.byProduct.slice(0, 8);
  const max = items[0]?.revenue || 1;

  return (
    <Card className="min-w-0">
      <CardHeader>
        <CardTitle>Product performance</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        {items.length === 0 ? (
          <p className="text-sm text-muted">No product column in this file.</p>
        ) : (
          items.map((p) => (
            <div key={p.name} className="grid gap-1.5">
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="min-w-0 truncate">{p.name}</span>
                <span className="shrink-0 tabular-nums text-muted">
                  {Math.round(p.share * 100)}%
                  {p.growth !== null ? (
                    <span className={cn("ml-2", p.growth >= 0 ? "text-up" : "text-down")}>{formatPct(p.growth)}</span>
                  ) : null}
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${Math.max(4, (p.revenue / max) * 100)}%` }}
                />
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}

export function OpportunityPanel() {
  const { analytics } = useMarket();
  const opportunities = analytics.byProduct
    .filter((p) => (p.growth ?? 0) > 0.08 && p.share < 0.12)
    .sort((a, b) => (b.growth ?? 0) - (a.growth ?? 0))
    .slice(0, 5);

  const regions = analytics.byProvince
    .filter((p) => (p.growth ?? 0) > 0.08 && p.share < 0.15)
    .slice(0, 2);

  return (
    <Card className="min-w-0">
      <CardHeader>
        <CardTitle>Market opportunities</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        {opportunities.length === 0 && regions.length === 0 ? (
          <p className="text-sm text-muted">No high-growth, low-share items in this slice.</p>
        ) : null}
        {regions.map((r) => (
          <div key={r.name} className="flex items-start gap-3 rounded-lg bg-surface-2 px-3 py-3">
            <ArrowUpRight className="mt-0.5 size-4 text-up" />
            <div className="min-w-0">
              <p className="text-sm font-medium">{r.name}</p>
              <p className="text-xs text-muted">
                {formatPct(r.growth)} growth · {Math.round(r.share * 100)}% share · {formatLkr(r.revenue, true)}
              </p>
            </div>
          </div>
        ))}
        {opportunities.map((p) => (
          <div key={p.name} className="flex items-start gap-3 rounded-lg bg-surface-2 px-3 py-3">
            <ArrowUpRight className="mt-0.5 size-4 text-primary" />
            <div className="min-w-0">
              <p className="text-sm font-medium">{p.name}</p>
              <p className="text-xs text-muted">
                {formatPct(p.growth)} growth · {Math.round(p.share * 100)}% of sales
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
