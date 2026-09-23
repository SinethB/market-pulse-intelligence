import { DISTRICTS } from "./geo";
import type { SaleRow } from "./types";

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pickWeighted<T>(rng: () => number, items: T[], weight: (item: T) => number): T {
  let total = 0;
  for (const item of items) total += weight(item);
  let r = rng() * total;
  for (const item of items) {
    r -= weight(item);
    if (r <= 0) return item;
  }
  return items[items.length - 1]!;
}

const PRODUCTS = [
  { name: "Helios Smartphone", category: "Electronics", price: 89900, w: 3.2, g: -0.03 },
  { name: "Nimbus Tablet", category: "Electronics", price: 45900, w: 2.1, g: 0.06 },
  { name: "Aurora Headphones", category: "Electronics", price: 12400, w: 4.4, g: 0.32 },
  { name: "Volt Power Bank", category: "Electronics", price: 3900, w: 5.5, g: 0.14 },
  { name: "Ceylon Sound Bar", category: "Electronics", price: 21900, w: 1.6, g: 0.09 },
  { name: "Monsoon Cookware", category: "Home", price: 7800, w: 6.8, g: 0.18 },
  { name: "Lotus Bedding", category: "Home", price: 6400, w: 5.1, g: 0.11 },
  { name: "Harbour Lamp", category: "Home", price: 4200, w: 3.4, g: 0.26 },
  { name: "Tropic Mixer", category: "Home", price: 9800, w: 2.4, g: 0.08 },
  { name: "Tea Trail Apparel", category: "Lifestyle", price: 3200, w: 7.2, g: 0.15 },
  { name: "Pearl Jewellery Mini", category: "Lifestyle", price: 18600, w: 1.8, g: 0.21 },
  { name: "Island Tote", category: "Lifestyle", price: 2100, w: 6.0, g: 0.07 },
  { name: "Rainforest Skincare", category: "Lifestyle", price: 2800, w: 5.4, g: 0.24 },
  { name: "Kandy Spice Box", category: "Grocery", price: 1450, w: 11, g: 0.05 },
  { name: "Ceylon Tea Chest", category: "Grocery", price: 2650, w: 13, g: 0.04 },
  { name: "Coconut Pantry", category: "Grocery", price: 980, w: 10, g: 0.03 },
  { name: "Coral Dental", category: "Personal Care", price: 690, w: 8.5, g: 0.06 },
  { name: "Bay Rum Set", category: "Personal Care", price: 1750, w: 4.2, g: 0.14 },
] as const;

const DISTRICT_WEIGHT: Record<string, number> = {
  Colombo: 22,
  Gampaha: 12.5,
  Kalutara: 6.2,
  Kandy: 8.4,
  Matale: 2.1,
  "Nuwara Eliya": 3.2,
  Galle: 5.4,
  Matara: 3.3,
  Hambantota: 2.4,
  Jaffna: 2.6,
  Kilinochchi: 0.55,
  Mannar: 0.5,
  Mullaitivu: 0.42,
  Vavuniya: 0.8,
  Trincomalee: 1.9,
  Batticaloa: 2.3,
  Ampara: 2.1,
  Kurunegala: 6.1,
  Puttalam: 3.0,
  Anuradhapura: 3.1,
  Polonnaruwa: 1.6,
  Badulla: 2.6,
  Monaragala: 1.3,
  Ratnapura: 3.6,
  Kegalle: 2.6,
};

const MONTH_SEASON = [0.92, 0.88, 0.96, 1.18, 0.95, 0.98, 1.02, 1.06, 1.0, 1.04, 1.08, 1.22];

function districtWeight(name: string, year: number, month: number): number {
  let w = DISTRICT_WEIGHT[name] ?? 1;
  const province = DISTRICTS.find((d) => d.name === name)?.province;
  if (province === "Southern") w *= 1 + Math.max(0, year - 2024) * 0.16;
  if (province === "Northern") w *= 1 + Math.max(0, year - 2024) * 0.1;
  if (province === "Western") {
    w *= 1.08;
    if (year === 2026 && month >= 5) w *= month >= 8 ? 0.78 : 0.88;
  }
  if (province === "Eastern") w *= 1 + (year - 2024) * 0.07;
  return w;
}

function productWeight(p: (typeof PRODUCTS)[number], year: number): number {
  const t = year - 2024;
  return Math.max(0.35, p.w * (1 + p.g * t));
}

export const SAMPLE_COLUMNS = [
  "date",
  "order_id",
  "customer_id",
  "product",
  "category",
  "province",
  "district",
  "quantity",
  "revenue",
] as const;

export function generateSampleSales(seed = 202609): SaleRow[] {
  const rng = mulberry32(seed);
  const rows: SaleRow[] = [];
  let orderSeq = 10000;

  const customerCount = 3600;
  const customers = Array.from({ length: customerCount }, (_, i) => ({
    id: `C-${String(1000 + i).padStart(4, "0")}`,
    repeat: rng() < 0.38,
    aovLift: rng() < 0.38 ? 1.6 + rng() * 1.4 : 0.75 + rng() * 0.35,
    district: pickWeighted(rng, DISTRICTS, (d) => DISTRICT_WEIGHT[d.name] ?? 1),
  }));
  const customerPool = customers.flatMap((c) => (c.repeat ? [c, c, c] : [c]));

  const months: { year: number; month: number; n: number }[] = [];
  for (const year of [2024, 2025, 2026]) {
    const lastMonth = year === 2026 ? 8 : 11;
    const yearBase = year === 2024 ? 560 : year === 2025 ? 640 : 900;
    for (let month = 0; month <= lastMonth; month++) {
      const n = Math.round(yearBase * MONTH_SEASON[month]! * (0.94 + rng() * 0.12));
      months.push({ year, month, n });
    }
  }

  for (const { year, month, n } of months) {
    const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    for (let i = 0; i < n; i++) {
      const day = 1 + Math.floor(rng() * daysInMonth);
      const customer = customerPool[Math.floor(rng() * customerPool.length)]!;
      const district = rng() < 0.72 ? customer.district : pickWeighted(rng, DISTRICTS, (d) => districtWeight(d.name, year, month));
      const product = pickWeighted(rng, [...PRODUCTS], (p) => productWeight(p, year));
      const qty = 1 + (rng() < 0.18 ? 1 : 0) + (rng() < 0.04 ? 1 : 0);
      const noise = 0.92 + rng() * 0.16;
      const revenue = Math.round(product.price * qty * customer.aovLift * noise);
      orderSeq += 1;
      rows.push({
        date: new Date(Date.UTC(year, month, day)),
        orderId: `SO-${orderSeq}`,
        customerId: customer.id,
        product: product.name,
        category: product.category,
        province: district.province,
        district: district.name,
        quantity: qty,
        revenue,
      });
    }
  }

  return calibrate(rows);
}

function calibrate(rows: SaleRow[]): SaleRow[] {
  const y2026 = rows.filter((r) => r.date.getUTCFullYear() === 2026);
  const sum = y2026.reduce((s, r) => s + r.revenue, 0);
  const scale = 42_800_000 / (sum || 1);
  return rows.map((r) => ({ ...r, revenue: Math.max(1, Math.round(r.revenue * scale)) }));
}

export const DEMO_SALES: SaleRow[] = generateSampleSales();

export function salesToCsv(rows: SaleRow[], limit = 25): string {
  const header = SAMPLE_COLUMNS.join(",");
  const slice = rows.slice(0, limit);
  const body = slice
    .map((r) =>
      [
        r.date.toISOString().slice(0, 10),
        r.orderId,
        r.customerId,
        quote(r.product),
        r.category,
        r.province,
        r.district,
        r.quantity,
        r.revenue,
      ].join(","),
    )
    .join("\n");
  return `${header}\n${body}\n`;
}

function quote(value: string): string {
  return value.includes(",") ? `"${value}"` : value;
}

export const TEMPLATE_CSV = `date,order_id,customer_id,product,category,province,district,quantity,revenue
2026-03-12,SO-10001,C-1042,Ceylon Tea Chest,Grocery,Western,Colombo,2,5300
2026-03-12,SO-10002,C-1188,Aurora Headphones,Electronics,Southern,Galle,1,12400
2026-03-13,SO-10003,C-1042,Monsoon Cookware,Home,Western,Colombo,1,7800
2026-03-14,SO-10004,C-2210,Tea Trail Apparel,Lifestyle,Central,Kandy,3,9600
2026-03-15,SO-10005,C-3001,Harbour Lamp,Home,Northern,Jaffna,1,4200
`;
