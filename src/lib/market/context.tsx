import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { computeAnalytics } from "./analytics";
import { buildInsights } from "./insights";
import { DEMO_SALES } from "./sample-data";
import type { Analytics, DataSource, Filters, Insight, MapMode, SaleRow } from "./types";

type MarketContextValue = {
  rows: SaleRow[];
  source: DataSource;
  fileName: string;
  filters: Filters;
  mapMode: MapMode;
  analytics: Analytics;
  insights: Insight[];
  setFilter: <K extends keyof Filters>(key: K, value: Filters[K]) => void;
  setFilters: (next: Filters) => void;
  resetFilters: () => void;
  setMapMode: (mode: MapMode) => void;
  selectDistrict: (district: string) => void;
  loadDemo: () => void;
  loadUpload: (rows: SaleRow[], fileName: string) => void;
  regenerateInsights: () => void;
};

const DEFAULT_FILTERS: Filters = {
  year: 2026,
  province: "All",
  district: "All",
  category: "All",
};

const MarketContext = createContext<MarketContextValue | null>(null);

export function MarketProvider({ children }: { children: ReactNode }) {
  const [rows, setRows] = useState<SaleRow[]>(DEMO_SALES);
  const [source, setSource] = useState<DataSource>("demo");
  const [fileName, setFileName] = useState("Sri Lanka retail demo");
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [mapMode, setMapMode] = useState<MapMode>("revenue");
  const [insightTick, setInsightTick] = useState(0);

  const analytics = useMemo(() => computeAnalytics(rows, filters), [rows, filters]);
  const insights = useMemo(() => {
    void insightTick;
    return buildInsights(analytics, filters);
  }, [analytics, filters, insightTick]);

  const setFilter = useCallback(<K extends keyof Filters>(key: K, value: Filters[K]) => {
    setFilters((prev) => {
      const next = { ...prev, [key]: value };
      if (key === "province") next.district = "All";
      return next;
    });
  }, []);

  const resetFilters = useCallback(() => setFilters(DEFAULT_FILTERS), []);

  const selectDistrict = useCallback((district: string) => {
    setFilters((prev) => {
      if (prev.district === district) return { ...prev, district: "All" };
      const match = analytics.byDistrict.find((d) => d.district === district);
      return {
        ...prev,
        district,
        province: match?.province ?? prev.province,
      };
    });
  }, [analytics.byDistrict]);

  const loadDemo = useCallback(() => {
    setRows(DEMO_SALES);
    setSource("demo");
    setFileName("Sri Lanka retail demo");
    setFilters(DEFAULT_FILTERS);
  }, []);

  const loadUpload = useCallback((nextRows: SaleRow[], name: string) => {
    setRows(nextRows);
    setSource("upload");
    setFileName(name);
    const years = [...new Set(nextRows.map((r) => r.date.getUTCFullYear()))].sort();
    const latest = years[years.length - 1];
    setFilters({
      year: latest ?? "all",
      province: "All",
      district: "All",
      category: "All",
    });
  }, []);

  const value = useMemo<MarketContextValue>(
    () => ({
      rows,
      source,
      fileName,
      filters,
      mapMode,
      analytics,
      insights,
      setFilter,
      setFilters,
      resetFilters,
      setMapMode,
      selectDistrict,
      loadDemo,
      loadUpload,
      regenerateInsights: () => setInsightTick((n) => n + 1),
    }),
    [
      rows,
      source,
      fileName,
      filters,
      mapMode,
      analytics,
      insights,
      setFilter,
      resetFilters,
      selectDistrict,
      loadDemo,
      loadUpload,
    ],
  );

  return <MarketContext.Provider value={value}>{children}</MarketContext.Provider>;
}

export function useMarket() {
  const ctx = useContext(MarketContext);
  if (!ctx) throw new Error("useMarket must be used within MarketProvider");
  return ctx;
}
