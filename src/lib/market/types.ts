export type SaleRow = {
  date: Date;
  orderId: string;
  customerId: string;
  product: string;
  category: string;
  province: string;
  district: string;
  quantity: number;
  revenue: number;
};

export type Filters = {
  year: number | "all";
  province: string;
  district: string;
  category: string;
};

export type MapMode = "revenue" | "growth" | "customers" | "penetration";

export type DataSource = "demo" | "upload";

export type ColumnField =
  | "date"
  | "revenue"
  | "product"
  | "category"
  | "province"
  | "district"
  | "customerId"
  | "orderId"
  | "quantity";

export type ColumnMapping = Partial<Record<ColumnField, string>>;

export type ParseWarning = {
  level: "error" | "warn";
  message: string;
};

export type InsightKind = "growth" | "concentration" | "opportunity" | "customer" | "risk" | "market";

export type Insight = {
  id: string;
  kind: InsightKind;
  title: string;
  body: string;
  metric?: string;
};

export type MonthlyPoint = {
  key: string;
  label: string;
  year: number;
  month: number;
  revenue: number;
  orders: number;
};

export type NamedShare = {
  name: string;
  revenue: number;
  share: number;
  orders: number;
  growth: number | null;
};

export type DistrictStat = {
  district: string;
  province: string;
  revenue: number;
  orders: number;
  customers: number;
  growth: number | null;
  penetration: number;
  population: number;
};

export type Analytics = {
  current: SaleRow[];
  previous: SaleRow[];
  kpis: {
    revenue: number;
    orders: number;
    customers: number;
    aov: number;
    revenueDelta: number | null;
    ordersDelta: number | null;
    customersDelta: number | null;
    aovDelta: number | null;
  };
  trend: MonthlyPoint[];
  byProvince: NamedShare[];
  byCategory: NamedShare[];
  byProduct: NamedShare[];
  byDistrict: DistrictStat[];
  last3: { revenue: number; orders: number } | null;
  prior3: { revenue: number; orders: number } | null;
  last3Delta: number | null;
  repeatAov: number;
  oneTimeAov: number;
  repeatMultiple: number | null;
  dateMin: Date | null;
  dateMax: Date | null;
  years: number[];
  provinces: string[];
  categories: string[];
  districts: string[];
  hasGeo: boolean;
};
