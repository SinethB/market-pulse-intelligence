import { Receipt, ShoppingBag, Users, Wallet } from "lucide-react";
import { useMarket } from "@/lib/market/context";
import { deltaTone, formatLkr, formatNumber, formatPct } from "@/lib/market/format";
import { cn } from "@/lib/utils";

const ITEMS = [
  { key: "revenue", label: "Revenue", icon: Wallet, compact: true },
  { key: "orders", label: "Orders", icon: ShoppingBag, compact: false },
  { key: "customers", label: "Customers", icon: Users, compact: false },
  { key: "aov", label: "Avg. order value", icon: Receipt, compact: false },
] as const;

export function KpiCards() {
  const { analytics } = useMarket();
  const { kpis } = analytics;

  const values = {
    revenue: { value: formatLkr(kpis.revenue, true), delta: kpis.revenueDelta },
    orders: { value: formatNumber(kpis.orders), delta: kpis.ordersDelta },
    customers: { value: formatNumber(kpis.customers), delta: kpis.customersDelta },
    aov: { value: formatLkr(kpis.aov), delta: kpis.aovDelta },
  };

  return (
    <section className="grid grid-cols-2 gap-3 xl:grid-cols-4">
      {ITEMS.map((item) => {
        const Icon = item.icon;
        const v = values[item.key];
        const tone = deltaTone(v.delta);
        return (
          <article
            key={item.key}
            className="rounded-xl border border-border bg-card px-4 py-4 shadow-[var(--shadow-panel)] sm:px-5"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="text-[11px] font-medium tracking-[0.14em] text-muted uppercase">{item.label}</p>
              <Icon className="size-4 text-muted" />
            </div>
            <p className="mt-3 font-sans text-2xl font-medium tracking-tight tabular-nums sm:text-[1.75rem]">
              {v.value}
            </p>
            <p
              className={cn(
                "mt-1 text-xs tabular-nums",
                tone === "up" && "text-up",
                tone === "down" && "text-down",
                tone === "muted" && "text-muted",
              )}
            >
              {v.delta === null ? "No prior period" : `${formatPct(v.delta)} vs prior period`}
            </p>
          </article>
        );
      })}
    </section>
  );
}
