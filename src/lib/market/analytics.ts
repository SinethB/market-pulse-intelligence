import { DISTRICTS, matchDistrict, matchProvince } from "./geo";
import { monthLabel } from "./format";
import type { Analytics, DistrictStat, Filters, MonthlyPoint, NamedShare, SaleRow } from "./types";

export function applyFilters(rows: SaleRow[], filters: Filters): SaleRow[] {
  return rows.filter((row) => {
    if (filters.year !== "all" && row.date.getUTCFullYear() !== filters.year) return false;
    if (filters.province !== "All" && row.province !== filters.province) return false;
    if (filters.district !== "All" && row.district !== filters.district) return false;
    if (filters.category !== "All" && row.category !== filters.category) return false;
    return true;
  });
}

function previousFilters(filters: Filters): Filters | null {
  if (filters.year === "all") return null;
  return { ...filters, year: filters.year - 1 };
}

function sumRevenue(rows: SaleRow[]): number {
  let t = 0;
  for (const r of rows) t += r.revenue;
  return t;
}

function uniqueCustomers(rows: SaleRow[]): number {
  const s = new Set<string>();
  for (const r of rows) if (r.customerId) s.add(r.customerId);
  return s.size;
}

function uniqueOrders(rows: SaleRow[]): number {
  const s = new Set<string>();
  for (const r of rows) s.add(r.orderId || `${r.date.toISOString()}-${r.customerId}-${r.product}`);
  return s.size || rows.length;
}

function delta(curr: number, prev: number): number | null {
  if (!prev) return null;
  return (curr - prev) / prev;
}

function groupRevenue(rows: SaleRow[], key: (row: SaleRow) => string): Map<string, { revenue: number; orders: Set<string> }> {
  const map = new Map<string, { revenue: number; orders: Set<string> }>();
  for (const row of rows) {
    const k = key(row) || "Unspecified";
    let g = map.get(k);
    if (!g) {
      g = { revenue: 0, orders: new Set() };
      map.set(k, g);
    }
    g.revenue += row.revenue;
    g.orders.add(row.orderId);
  }
  return map;
}

function namedShares(
  current: SaleRow[],
  previous: SaleRow[],
  key: (row: SaleRow) => string,
): NamedShare[] {
  const curr = groupRevenue(current, key);
  const prev = groupRevenue(previous, key);
  const total = sumRevenue(current) || 1;
  const out: NamedShare[] = [];
  for (const [name, g] of curr) {
    const p = prev.get(name);
    out.push({
      name,
      revenue: g.revenue,
      share: g.revenue / total,
      orders: g.orders.size,
      growth: p ? delta(g.revenue, p.revenue) : null,
    });
  }
  out.sort((a, b) => b.revenue - a.revenue);
  return out;
}

function monthly(rows: SaleRow[]): MonthlyPoint[] {
  const map = new Map<string, MonthlyPoint>();
  for (const row of rows) {
    const year = row.date.getUTCFullYear();
    const month = row.date.getUTCMonth();
    const key = `${year}-${String(month + 1).padStart(2, "0")}`;
    let p = map.get(key);
    if (!p) {
      p = { key, label: monthLabel(year, month), year, month, revenue: 0, orders: 0 };
      map.set(key, p);
    }
    p.revenue += row.revenue;
    p.orders += 1;
  }
  return [...map.values()].sort((a, b) => a.key.localeCompare(b.key));
}

function lastNMonths(rows: SaleRow[], n: number, offset = 0): SaleRow[] {
  if (!rows.length) return [];
  const max = rows.reduce((m, r) => (r.date > m ? r.date : m), rows[0]!.date);
  const end = new Date(Date.UTC(max.getUTCFullYear(), max.getUTCMonth() + 1 - offset, 1));
  const start = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth() - n, 1));
  return rows.filter((r) => r.date >= start && r.date < end);
}

function repeatStats(rows: SaleRow[]): { repeatAov: number; oneTimeAov: number; multiple: number | null } {
  const byCustomer = new Map<string, { orders: Set<string>; revenue: number }>();
  for (const row of rows) {
    let g = byCustomer.get(row.customerId);
    if (!g) {
      g = { orders: new Set(), revenue: 0 };
      byCustomer.set(row.customerId, g);
    }
    g.orders.add(row.orderId);
    g.revenue += row.revenue;
  }
  let repeatRev = 0;
  let repeatOrders = 0;
  let oneRev = 0;
  let oneOrders = 0;
  for (const g of byCustomer.values()) {
    if (g.orders.size > 1) {
      repeatRev += g.revenue;
      repeatOrders += g.orders.size;
    } else {
      oneRev += g.revenue;
      oneOrders += g.orders.size;
    }
  }
  const repeatAov = repeatOrders ? repeatRev / repeatOrders : 0;
  const oneTimeAov = oneOrders ? oneRev / oneOrders : 0;
  return {
    repeatAov,
    oneTimeAov,
    multiple: oneTimeAov ? repeatAov / oneTimeAov : null,
  };
}

export function uniqueSorted(values: string[]): string[] {
  return [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

export function computeAnalytics(allRows: SaleRow[], filters: Filters): Analytics {
  const current = applyFilters(allRows, filters);
  const prevFilters = previousFilters(filters);
  const previous = prevFilters
    ? applyFilters(allRows, prevFilters)
    : lastNMonths(applyFilters(allRows, { ...filters, year: "all" }), 12, 12);

  const revenue = sumRevenue(current);
  const prevRevenue = sumRevenue(previous);
  const orders = uniqueOrders(current);
  const prevOrders = uniqueOrders(previous);
  const customers = uniqueCustomers(current);
  const prevCustomers = uniqueCustomers(previous);
  const aov = orders ? revenue / orders : 0;
  const prevAov = prevOrders ? prevRevenue / prevOrders : 0;

  const trendSource =
    filters.year === "all" ? applyFilters(allRows, { ...filters, year: "all" }) : current.concat(previous);
  const trend = monthly(trendSource);

  const byProvince = namedShares(current, previous, (r) => r.province);
  const byCategory = namedShares(current, previous, (r) => r.category);
  const byProduct = namedShares(current, previous, (r) => r.product);

  const geoCurrent = applyFilters(allRows, { ...filters, district: "All" });
  const geoPrevious = prevFilters
    ? applyFilters(allRows, { ...prevFilters, district: "All" })
    : lastNMonths(applyFilters(allRows, { ...filters, year: "all", district: "All" }), 12, 12);

  const districtCurr = groupRevenue(geoCurrent, (r) => r.district);
  const districtPrev = groupRevenue(geoPrevious, (r) => r.district);
  const districtCustomers = new Map<string, Set<string>>();
  for (const row of geoCurrent) {
    let s = districtCustomers.get(row.district);
    if (!s) {
      s = new Set();
      districtCustomers.set(row.district, s);
    }
    s.add(row.customerId);
  }

  const byDistrict: DistrictStat[] = DISTRICTS.map((d) => {
    const g = districtCurr.get(d.name);
    const p = districtPrev.get(d.name);
    const cust = districtCustomers.get(d.name)?.size ?? 0;
    return {
      district: d.name,
      province: d.province,
      revenue: g?.revenue ?? 0,
      orders: g?.orders.size ?? 0,
      customers: cust,
      growth: p && p.revenue ? delta(g?.revenue ?? 0, p.revenue) : null,
      penetration: d.population ? cust / d.population : 0,
      population: d.population,
    };
  });

  const scoped = filters.year === "all" ? current : current;
  const last3Rows = lastNMonths(scoped, 3, 0);
  const prior3Rows = lastNMonths(scoped, 3, 3);
  const last3 = last3Rows.length ? { revenue: sumRevenue(last3Rows), orders: last3Rows.length } : null;
  const prior3 = prior3Rows.length ? { revenue: sumRevenue(prior3Rows), orders: prior3Rows.length } : null;

  const dates = allRows.length
    ? {
        min: allRows.reduce((m, r) => (r.date < m ? r.date : m), allRows[0]!.date),
        max: allRows.reduce((m, r) => (r.date > m ? r.date : m), allRows[0]!.date),
      }
    : { min: null, max: null };

  const years = uniqueSorted(allRows.map((r) => String(r.date.getUTCFullYear()))).map(Number);
  const rs = repeatStats(current);

  return {
    current,
    previous,
    kpis: {
      revenue,
      orders,
      customers,
      aov,
      revenueDelta: delta(revenue, prevRevenue),
      ordersDelta: delta(orders, prevOrders),
      customersDelta: delta(customers, prevCustomers),
      aovDelta: delta(aov, prevAov),
    },
    trend,
    byProvince,
    byCategory,
    byProduct,
    byDistrict,
    last3,
    prior3,
    last3Delta: last3 && prior3 ? delta(last3.revenue, prior3.revenue) : null,
    repeatAov: rs.repeatAov,
    oneTimeAov: rs.oneTimeAov,
    repeatMultiple: rs.multiple,
    dateMin: dates.min,
    dateMax: dates.max,
    years,
    provinces: uniqueSorted(allRows.map((r) => r.province)),
    categories: uniqueSorted(allRows.map((r) => r.category)),
    districts: uniqueSorted(allRows.map((r) => r.district)),
    hasGeo: allRows.some((r) => r.district && r.district !== "Unspecified"),
  };
}

export function normalizeRowLocation(province: string, district: string): { province: string; district: string } {
  const d = matchDistrict(district);
  if (d) return { province: d.province, district: d.name };
  const p = matchProvince(province);
  return {
    province: p ?? (province || "Unspecified"),
    district: district || "Unspecified",
  };
}
