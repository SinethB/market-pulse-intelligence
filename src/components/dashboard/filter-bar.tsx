import { useMarket } from "@/lib/market/context";
import { formatPeriodLabel } from "@/lib/market/format";
import { cn } from "@/lib/utils";

function ChipGroup({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <span className="text-[11px] font-medium tracking-[0.14em] text-muted uppercase">{label}</span>
      <div className="flex gap-1.5 overflow-x-auto pb-1">
        {options.map((opt) => {
          const on = opt.value === value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className={cn(
                "h-11 shrink-0 rounded-full border px-3.5 text-xs font-medium transition-colors duration-150",
                on
                  ? "border-primary/40 bg-primary text-primary-foreground"
                  : "border-border bg-transparent text-muted hover:text-fg hover:bg-accent",
              )}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function FilterBar() {
  const { analytics, filters, setFilter, resetFilters, source, fileName } = useMarket();
  const years = analytics.years.length ? analytics.years : [2024, 2025, 2026];
  const dirty =
    filters.year !== 2026 ||
    filters.province !== "All" ||
    filters.district !== "All" ||
    filters.category !== "All";

  return (
    <section className="flex flex-col gap-5 rounded-xl border border-border bg-card px-5 py-5">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <p className="text-xs text-muted">
          {source === "demo" ? "Demo dataset" : "Uploaded"} · {fileName} · {analytics.current.length.toLocaleString("en-LK")}{" "}
          rows in view · {formatPeriodLabel(filters.year, analytics.dateMax)}
        </p>
        {dirty ? (
          <button type="button" onClick={resetFilters} className="text-xs text-muted underline-offset-4 hover:text-fg hover:underline">
            Reset filters
          </button>
        ) : null}
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <ChipGroup
          label="Year"
          value={String(filters.year)}
          options={[
            ...years.map((y) => ({
              value: String(y),
              label: y === 2026 ? "2026 YTD" : String(y),
            })),
            { value: "all", label: "All" },
          ]}
          onChange={(v) => setFilter("year", v === "all" ? "all" : Number(v))}
        />
        <ChipGroup
          label="Region"
          value={filters.province}
          options={[
            { value: "All", label: "All" },
            ...analytics.provinces.filter(Boolean).map((p) => ({ value: p, label: p })),
          ]}
          onChange={(v) => setFilter("province", v)}
        />
        <ChipGroup
          label="Category"
          value={filters.category}
          options={[
            { value: "All", label: "All" },
            ...analytics.categories.map((c) => ({ value: c, label: c })),
          ]}
          onChange={(v) => setFilter("category", v)}
        />
        {filters.province !== "All" ? (
          <ChipGroup
            label="District"
            value={filters.district}
            options={[
              { value: "All", label: "All" },
              ...analytics.districts
                .filter((d) => analytics.byDistrict.find((x) => x.district === d)?.province === filters.province)
                .map((d) => ({ value: d, label: d })),
            ]}
            onChange={(v) => setFilter("district", v)}
          />
        ) : filters.district !== "All" ? (
          <ChipGroup
            label="District"
            value={filters.district}
            options={[
              { value: "All", label: "All" },
              { value: filters.district, label: filters.district },
            ]}
            onChange={(v) => setFilter("district", v)}
          />
        ) : (
          <p className="self-end text-xs text-muted">Click a district on the map to drill in.</p>
        )}
      </div>
    </section>
  );
}
