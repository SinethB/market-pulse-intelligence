import mapJson from "./sri-lanka-map.json";

export type DistrictShape = {
  id: string;
  name: string;
  province: string;
  population: number;
  path: string;
  cx: number;
  cy: number;
};

export const SRI_LANKA_MAP = mapJson as {
  viewBox: string;
  districts: DistrictShape[];
};

export const DISTRICTS: DistrictShape[] = SRI_LANKA_MAP.districts;

export const DISTRICT_BY_NAME = new Map(DISTRICTS.map((d) => [d.name.toLowerCase(), d]));

export const PROVINCES = [
  "Western",
  "Central",
  "Southern",
  "Northern",
  "Eastern",
  "North Western",
  "North Central",
  "Uva",
  "Sabaragamuwa",
] as const;

export type ProvinceName = (typeof PROVINCES)[number];

export const DISTRICTS_BY_PROVINCE: Record<string, string[]> = Object.fromEntries(
  PROVINCES.map((p) => [p, DISTRICTS.filter((d) => d.province === p).map((d) => d.name)]),
);

const PROVINCE_ALIASES: Record<string, ProvinceName> = {
  western: "Western",
  west: "Western",
  wp: "Western",
  central: "Central",
  cp: "Central",
  southern: "Southern",
  south: "Southern",
  sp: "Southern",
  northern: "Northern",
  north: "Northern",
  np: "Northern",
  eastern: "Eastern",
  east: "Eastern",
  ep: "Eastern",
  "north western": "North Western",
  northwestern: "North Western",
  "north-western": "North Western",
  nwp: "North Western",
  wayamba: "North Western",
  "north central": "North Central",
  northcentral: "North Central",
  "north-central": "North Central",
  ncp: "North Central",
  uva: "Uva",
  up: "Uva",
  sabaragamuwa: "Sabaragamuwa",
  sabaragamuwaa: "Sabaragamuwa",
  sgp: "Sabaragamuwa",
};

function fold(value: string): string {
  return value
    .toLowerCase()
    .replace(/province|district|pradeshiya|divisional/g, "")
    .replace(/[^a-z]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function matchProvince(value: string | null | undefined): string | null {
  if (!value) return null;
  const key = fold(value);
  if (!key) return null;
  if (PROVINCE_ALIASES[key]) return PROVINCE_ALIASES[key];
  const exact = PROVINCES.find((p) => p.toLowerCase() === key);
  return exact ?? null;
}

export function matchDistrict(value: string | null | undefined): DistrictShape | null {
  if (!value) return null;
  const key = fold(value);
  if (!key) return null;
  const exact = DISTRICT_BY_NAME.get(key);
  if (exact) return exact;
  for (const d of DISTRICTS) {
    if (fold(d.name) === key) return d;
    if (key.includes(fold(d.name)) || fold(d.name).includes(key)) return d;
  }
  return null;
}

export function provinceOfDistrict(name: string): string | null {
  return DISTRICT_BY_NAME.get(name.toLowerCase())?.province ?? matchDistrict(name)?.province ?? null;
}
