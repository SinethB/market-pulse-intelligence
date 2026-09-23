import { createFileRoute } from "@tanstack/react-router";
import { AppHeader } from "@/components/dashboard/app-header";
import { FilterBar } from "@/components/dashboard/filter-bar";
import { InsightsPanel } from "@/components/dashboard/insights-panel";
import { KpiCards } from "@/components/dashboard/kpi-cards";
import { MapPanel } from "@/components/dashboard/map-panel";
import { OpportunityPanel, ProductPerformance } from "@/components/dashboard/products-panel";
import { RegionChart, RevenueTrend } from "@/components/dashboard/charts";
import { MarketProvider } from "@/lib/market/context";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <MarketProvider>
      <Dashboard />
    </MarketProvider>
  );
}

function Dashboard() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8">
      <AppHeader />
      <KpiCards />
      <FilterBar />
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="grid min-w-0 gap-4">
          <RevenueTrend />
          <RegionChart />
        </div>
        <MapPanel />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <ProductPerformance />
        <OpportunityPanel />
      </div>
      <InsightsPanel />
      <footer className="border-t border-border pt-4 pb-8 text-xs text-muted">
        Figures are computed in the browser from the loaded file. Demo data is synthetic Sri Lankan retail, 2024–2026.
      </footer>
    </main>
  );
}
