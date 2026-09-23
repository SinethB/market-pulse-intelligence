import { FileSpreadsheet, Upload } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMarket } from "@/lib/market/context";
import {
  FIELD_LABELS,
  REQUIRED_FIELDS,
  autoMapColumns,
  readSpreadsheet,
  rowsFromMapping,
  type ParsedTable,
} from "@/lib/market/parse";
import { TEMPLATE_CSV } from "@/lib/market/sample-data";
import type { ColumnField, ColumnMapping, ParseWarning } from "@/lib/market/types";
import { cn } from "@/lib/utils";

const OPTIONAL: ColumnField[] = ["product", "category", "province", "district", "customerId", "orderId", "quantity"];

export function UploadDialog() {
  const { loadUpload } = useMarket();
  const [open, setOpen] = useState(false);
  const [parsed, setParsed] = useState<ParsedTable | null>(null);
  const [mapping, setMapping] = useState<ColumnMapping>({});
  const [fileName, setFileName] = useState("");
  const [warnings, setWarnings] = useState<ParseWarning[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function reset() {
    setParsed(null);
    setMapping({});
    setFileName("");
    setWarnings([]);
    setError(null);
    setBusy(false);
  }

  async function handleFile(file: File) {
    setBusy(true);
    setError(null);
    try {
      const table = await readSpreadsheet(file);
      if (!table.headers.length) {
        setError("Could not read any columns. Export as CSV or .xlsx with a header row.");
        setBusy(false);
        return;
      }
      setParsed(table);
      setFileName(file.name);
      setMapping(autoMapColumns(table.headers));
    } catch {
      setError("Could not parse that file. Try CSV or Excel (.xlsx).");
    } finally {
      setBusy(false);
    }
  }

  function apply() {
    if (!parsed) return;
    const result = rowsFromMapping(parsed.records, mapping);
    setWarnings(result.warnings);
    if (!result.rows.length) return;
    loadUpload(result.rows, fileName);
    setOpen(false);
    reset();
  }

  function downloadTemplate() {
    const blob = new Blob([TEMPLATE_CSV], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "market-pulse-template.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) reset();
      }}
    >
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm">
          <Upload />
          Upload file
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90dvh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Load your sales file</DialogTitle>
          <DialogDescription>
            CSV or Excel. Map date and revenue at minimum — product, region, and customer make the rest of the dashboard
            useful.
          </DialogDescription>
        </DialogHeader>

        {!parsed ? (
          <div className="grid gap-4">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files[0];
                if (file) void handleFile(file);
              }}
              className="flex min-h-36 flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-surface-2 px-4 py-8 text-center"
            >
              <FileSpreadsheet className="size-6 text-primary" />
              <span className="text-sm font-medium">Drop a spreadsheet or browse</span>
              <span className="text-xs text-muted">.csv, .xlsx, .xls</span>
            </button>
            <input
              ref={inputRef}
              type="file"
              accept=".csv,.txt,.xlsx,.xls,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
              className="sr-only"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) void handleFile(file);
              }}
            />
            {busy ? <p className="text-sm text-muted">Reading file…</p> : null}
            {error ? <p className="text-sm text-down">{error}</p> : null}
            <button type="button" onClick={downloadTemplate} className="text-left text-xs text-muted underline-offset-4 hover:text-fg hover:underline">
              Download a 5-row template
            </button>
          </div>
        ) : (
          <div className="grid gap-4">
            <p className="text-sm text-muted">
              {fileName} · {parsed.records.length.toLocaleString("en-LK")} rows · {parsed.headers.length} columns
            </p>
            <div className="grid gap-3">
              {[...REQUIRED_FIELDS, ...OPTIONAL].map((field) => (
                <label key={field} className="grid grid-cols-[1fr_1.2fr] items-center gap-3 text-sm">
                  <span className={cn("text-muted", REQUIRED_FIELDS.includes(field) && "text-fg")}>
                    {FIELD_LABELS[field]}
                    {REQUIRED_FIELDS.includes(field) ? " *" : ""}
                  </span>
                  <select
                    value={mapping[field] ?? ""}
                    onChange={(e) =>
                      setMapping((m) => ({
                        ...m,
                        [field]: e.target.value || undefined,
                      }))
                    }
                    className="h-11 rounded-md border border-border bg-surface-2 px-3 text-sm text-fg"
                  >
                    <option value="">Ignore</option>
                    {parsed.headers.map((h) => (
                      <option key={h} value={h}>
                        {h}
                      </option>
                    ))}
                  </select>
                </label>
              ))}
            </div>
            {warnings.map((w) => (
              <p key={w.message} className={cn("text-sm", w.level === "error" ? "text-down" : "text-warn")}>
                {w.message}
              </p>
            ))}
            <div className="flex flex-wrap gap-2">
              <Button type="button" onClick={apply} disabled={!mapping.date || !mapping.revenue}>
                Load dashboard
              </Button>
              <Button type="button" variant="ghost" onClick={reset}>
                Choose another file
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
