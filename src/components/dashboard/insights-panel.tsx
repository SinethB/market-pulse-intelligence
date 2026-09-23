import { AlertTriangle, Compass, ScanSearch, TrendingUp, Users, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMarket } from "@/lib/market/context";
import type { InsightKind } from "@/lib/market/types";
import { cn } from "@/lib/utils";

const ICONS: Record<InsightKind, typeof TrendingUp> = {
  growth: TrendingUp,
  concentration: Layers,
  opportunity: Compass,
  customer: Users,
  risk: AlertTriangle,
  market: ScanSearch,
};

const TONE: Record<InsightKind, string> = {
  growth: "text-up",
  concentration: "text-warn",
  opportunity: "text-primary",
  customer: "text-fg",
  risk: "text-down",
  market: "text-primary",
};

export function InsightsPanel() {
  const { insights, regenerateInsights, analytics } = useMarket();

  function onGenerate() {
    regenerateInsights();
    document.getElementById("insight-engine")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <Card id="insight-engine" className="min-w-0">
      <CardHeader className="flex flex-row flex-wrap items-start justify-between gap-3">
        <div>
          <CardTitle>Insight engine</CardTitle>
          <p className="mt-1 text-xs text-muted">What should I look at? Signals from the current filters — no model required.</p>
        </div>
        <Button type="button" size="sm" onClick={onGenerate}>
          <ScanSearch />
          Generate insights
        </Button>
      </CardHeader>
      <CardContent className="grid gap-3">
        {insights.map((ins) => {
          const Icon = ICONS[ins.kind];
          return (
            <article key={ins.id} className="grid gap-1 rounded-lg border border-border bg-surface-2 px-4 py-3">
              <div className="flex items-center justify-between gap-3">
                <p className={cn("flex items-center gap-2 text-[11px] font-medium tracking-[0.14em] uppercase", TONE[ins.kind])}>
                  <Icon className="size-3.5" />
                  {ins.title}
                </p>
                {ins.metric ? <span className="text-xs tabular-nums text-muted">{ins.metric}</span> : null}
              </div>
              <p className="text-sm leading-relaxed">{ins.body}</p>
            </article>
          );
        })}
        <p className="text-[11px] text-muted">
          Compared with the previous period
          {analytics.previous.length ? ` (${analytics.previous.length.toLocaleString("en-LK")} rows)` : ""}. Change a
          filter and generate again.
        </p>
      </CardContent>
    </Card>
  );
}
