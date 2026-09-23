import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMarket } from "@/lib/market/context";
import { formatLkr } from "@/lib/market/format";

function useMounted() {
  const [on, setOn] = useState(false);
  useEffect(() => setOn(true), []);
  return on;
}

function ChartFrame({ children }: { children: ReactNode }) {
  const on = useMounted();
  if (!on) return <div className="h-56 rounded-md bg-surface-2" />;
  return <div className="h-56">{children}</div>;
}

function tooltipStyle(): CSSProperties {
  return {
    background: "var(--color-popover)",
    border: "1px solid var(--color-border)",
    borderRadius: 8,
    fontSize: 12,
    color: "var(--color-fg)",
  };
}

export function RevenueTrend() {
  const { analytics } = useMarket();
  const data = analytics.trend.map((p) => ({ ...p, revenueM: p.revenue }));

  return (
    <Card className="min-w-0">
      <CardHeader>
        <CardTitle>Revenue trend</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartFrame>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.28} />
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="var(--color-border)" vertical={false} />
              <XAxis dataKey="label" tick={{ fill: "var(--color-muted)", fontSize: 11 }} tickLine={false} axisLine={false} interval="preserveStartEnd" />
              <YAxis
                tick={{ fill: "var(--color-muted)", fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                width={52}
                tickFormatter={(v: number) => formatLkr(v, true).replace("Rs. ", "")}
              />
              <Tooltip
                contentStyle={tooltipStyle()}
                formatter={(value) => [formatLkr(Number(value), true), "Revenue"]}
              />
              <Area type="monotone" dataKey="revenue" stroke="var(--color-primary)" strokeWidth={2} fill="url(#revFill)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartFrame>
      </CardContent>
    </Card>
  );
}

export function RegionChart() {
  const { analytics, setFilter, filters } = useMarket();
  const data = analytics.byProvince.slice(0, 9).map((p) => ({
    name: p.name.replace(" Province", ""),
    revenue: p.revenue,
    share: p.share,
  }));

  return (
    <Card className="min-w-0">
      <CardHeader>
        <CardTitle>Revenue by region</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartFrame>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 4, right: 12, left: 8, bottom: 0 }}>
              <CartesianGrid stroke="var(--color-border)" horizontal={false} />
              <XAxis
                type="number"
                tick={{ fill: "var(--color-muted)", fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(v: number) => formatLkr(v, true).replace("Rs. ", "")}
              />
              <YAxis type="category" dataKey="name" width={108} tick={{ fill: "var(--color-fg)", fontSize: 11 }} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={tooltipStyle()}
                formatter={(value) => [formatLkr(Number(value), true), "Revenue"]}
              />
              <Bar
                dataKey="revenue"
                fill="var(--color-primary)"
                radius={[0, 4, 4, 0]}
                cursor="pointer"
                onClick={(entry) => {
                  const name = (entry as { name?: string }).name;
                  if (name) setFilter("province", filters.province === name ? "All" : name);
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartFrame>
      </CardContent>
    </Card>
  );
}
