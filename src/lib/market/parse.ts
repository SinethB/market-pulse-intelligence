import Papa from "papaparse";
import { matchDistrict, matchProvince } from "./geo";
import { normalizeRowLocation } from "./analytics";
import type { ColumnField, ColumnMapping, ParseWarning, SaleRow } from "./types";

const ALIASES: Record<ColumnField, string[]> = {
  date: ["date", "order_date", "orderdate", "invoice_date", "invoicedate", "txn_date", "transaction_date", "month", "period"],
  revenue: ["revenue", "amount", "sales", "total", "value", "net_sales", "netsales", "line_total", "linetotal", "turnover"],
  product: ["product", "product_name", "productname", "sku", "item", "item_name", "itemname"],
  category: ["category", "product_category", "segment", "department", "vertical"],
  province: ["province", "region", "area", "zone", "state"],
  district: ["district", "city", "location", "town", "branch"],
  customerId: ["customer_id", "customerid", "customer", "client_id", "client", "buyer"],
  orderId: ["order_id", "orderid", "invoice_id", "invoice", "order", "bill_no", "bill"],
  quantity: ["quantity", "qty", "units", "unit", "count"],
};

export const FIELD_LABELS: Record<ColumnField, string> = {
  date: "Date",
  revenue: "Revenue / amount",
  product: "Product",
  category: "Category",
  province: "Region / province",
  district: "District / city",
  customerId: "Customer ID",
  orderId: "Order ID",
  quantity: "Quantity",
};

export const REQUIRED_FIELDS: ColumnField[] = ["date", "revenue"];

function normHeader(h: string): string {
  return h.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
}

export function autoMapColumns(headers: string[]): ColumnMapping {
  const mapping: ColumnMapping = {};
  const unused = new Set(headers);
  (Object.keys(ALIASES) as ColumnField[]).forEach((field) => {
    for (const header of unused) {
      const n = normHeader(header);
      if (ALIASES[field].includes(n)) {
        mapping[field] = header;
        unused.delete(header);
        return;
      }
    }
  });
  return mapping;
}

function parseNumber(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value !== "string") return null;
  const cleaned = value.replace(/rs\.?|lkr|₹|,|\s/gi, "").trim();
  if (!cleaned) return null;
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}

function excelSerialToDate(n: number): Date | null {
  if (n < 20000 || n > 80000) return null;
  const utc = Date.UTC(1899, 11, 30) + Math.round(n) * 86400000;
  const d = new Date(utc);
  return Number.isNaN(+d) ? null : d;
}

export function parseDate(value: unknown): Date | null {
  if (value instanceof Date && !Number.isNaN(+value)) {
    return new Date(Date.UTC(value.getFullYear(), value.getMonth(), value.getDate()));
  }
  if (typeof value === "number") return excelSerialToDate(value);
  if (typeof value !== "string") return null;
  const s = value.trim();
  if (!s) return null;
  const iso = /^(\d{4})[/-](\d{1,2})[/-](\d{1,2})/.exec(s);
  if (iso) {
    return new Date(Date.UTC(Number(iso[1]), Number(iso[2]) - 1, Number(iso[3])));
  }
  const dmy = /^(\d{1,2})[/-](\d{1,2})[/-](\d{4})/.exec(s);
  if (dmy) {
    const a = Number(dmy[1]);
    const b = Number(dmy[2]);
    const y = Number(dmy[3]);
    const dayFirst = a > 12 || b <= 12;
    const day = dayFirst ? a : b;
    const month = dayFirst ? b : a;
    if (month >= 1 && month <= 12 && day >= 1 && day <= 31) {
      return new Date(Date.UTC(y, month - 1, day));
    }
  }
  const t = Date.parse(s);
  if (!Number.isNaN(t)) {
    const d = new Date(t);
    return new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  }
  return null;
}

export type ParsedTable = {
  headers: string[];
  records: Record<string, unknown>[];
};

export async function readSpreadsheet(file: File): Promise<ParsedTable> {
  const name = file.name.toLowerCase();
  if (name.endsWith(".csv") || name.endsWith(".txt") || file.type.includes("csv")) {
    const text = await file.text();
    return parseCsv(text);
  }
  const XLSX = await import("xlsx");
  const buf = await file.arrayBuffer();
  const wb = XLSX.read(buf, { type: "array", cellDates: true });
  const sheetName = wb.SheetNames[0];
  if (!sheetName) return { headers: [], records: [] };
  const sheet = wb.Sheets[sheetName];
  if (!sheet) return { headers: [], records: [] };
  const records = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, { defval: "", raw: true });
  const headers = records.length ? Object.keys(records[0]!) : [];
  return { headers, records };
}

export function parseCsv(text: string): ParsedTable {
  const result = Papa.parse<Record<string, unknown>>(text, {
    header: true,
    skipEmptyLines: "greedy",
    dynamicTyping: false,
  });
  const headers = result.meta.fields?.filter(Boolean) ?? [];
  return { headers, records: result.data };
}

function cell(record: Record<string, unknown>, header: string | undefined): unknown {
  if (!header) return undefined;
  return record[header];
}

export function rowsFromMapping(
  records: Record<string, unknown>[],
  mapping: ColumnMapping,
): { rows: SaleRow[]; warnings: ParseWarning[] } {
  const warnings: ParseWarning[] = [];
  const rows: SaleRow[] = [];
  let skipped = 0;
  let unmatchedGeo = 0;

  records.forEach((record, i) => {
    const date = parseDate(cell(record, mapping.date));
    const revenue = parseNumber(cell(record, mapping.revenue));
    if (!date || revenue === null) {
      skipped += 1;
      return;
    }
    const product = String(cell(record, mapping.product) ?? "").trim() || "Unspecified";
    const category = String(cell(record, mapping.category) ?? "").trim() || "Uncategorised";
    const rawProvince = String(cell(record, mapping.province) ?? "").trim();
    const rawDistrict = String(cell(record, mapping.district) ?? "").trim();
    const loc = normalizeRowLocation(rawProvince, rawDistrict);
    if ((rawProvince || rawDistrict) && loc.district === "Unspecified" && loc.province === "Unspecified") {
      unmatchedGeo += 1;
    } else if (rawDistrict && !matchDistrict(rawDistrict) && !matchProvince(rawProvince)) {
      unmatchedGeo += 1;
    }
    const qty = parseNumber(cell(record, mapping.quantity)) ?? 1;
    rows.push({
      date,
      orderId: String(cell(record, mapping.orderId) ?? `ROW-${i + 1}`),
      customerId: String(cell(record, mapping.customerId) ?? `CUST-${i + 1}`),
      product,
      category,
      province: loc.province,
      district: loc.district,
      quantity: qty || 1,
      revenue,
    });
  });

  if (!mapping.date || !mapping.revenue) {
    warnings.push({ level: "error", message: "Date and revenue columns are required." });
  }
  if (skipped) {
    warnings.push({
      level: "warn",
      message: `Skipped ${skipped} row${skipped === 1 ? "" : "s"} with missing date or revenue.`,
    });
  }
  if (!rows.length) {
    warnings.push({
      level: "error",
      message: "No usable rows. Check that date and revenue columns are mapped and populated.",
    });
  }
  if (unmatchedGeo && unmatchedGeo > rows.length * 0.4) {
    warnings.push({
      level: "warn",
      message:
        "Many locations did not match Sri Lankan districts. Charts still work; the map lights up when names match (e.g. Colombo, Kandy, Galle).",
    });
  }
  if (!mapping.product) {
    warnings.push({ level: "warn", message: "No product column — product performance will group as Unspecified." });
  }
  return { rows, warnings };
}
