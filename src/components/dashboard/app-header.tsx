import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UploadDialog } from "@/components/dashboard/upload-dialog";
import { useMarket } from "@/lib/market/context";
import { formatPeriodLabel } from "@/lib/market/format";

export function AppHeader() {
  const { source, loadDemo, analytics, filters } = useMarket();

  return (
    <header className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0">
        <p className="text-[11px] font-medium tracking-[0.22em] text-primary uppercase">Sales & market intelligence</p>
        <h1 className="font-display mt-1 text-[2.35rem] leading-[0.95] tracking-tight text-fg sm:text-5xl">
          Market Pulse
        </h1>
        <p className="mt-3 max-w-xl text-sm text-muted">
          See where products, customers and revenue are performing across Sri Lanka — then load your own spreadsheet.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-border px-3 py-2 text-xs tabular-nums text-muted">
          {formatPeriodLabel(filters.year, analytics.dateMax)}
        </span>
        {source === "upload" ? (
          <Button type="button" variant="ghost" size="sm" onClick={loadDemo}>
            <RotateCcw />
            Demo data
          </Button>
        ) : null}
        <UploadDialog />
      </div>
    </header>
  );
}
