import { formatLkr, formatPct } from "./format";
import type { Analytics, Filters, Insight } from "./types";

function scoreGrowth(g: number | null): number {
  if (g === null) return 0;
  return Math.abs(g);
}

export function buildInsights(a: Analytics, filters: Filters): Insight[] {
  const out: Insight[] = [];
  const { kpis, byCategory, byProduct, byProvince, byDistrict } = a;

  const fastestCat = [...byCategory].sort((x, y) => (y.growth ?? -999) - (x.growth ?? -999))[0];
  if (fastestCat && fastestCat.growth !== null && fastestCat.growth > 0.04) {
    out.push({
      id: "growth-cat",
      kind: "growth",
      title: "Growth",
      metric: formatPct(fastestCat.growth),
      body: `${fastestCat.name} grew ${formatPct(fastestCat.growth)} versus the previous period, with ${formatLkr(fastestCat.revenue, true)} in the current view.`,
    });
  }

  const fastestRegion = [...byProvince].sort((x, y) => (y.growth ?? -999) - (x.growth ?? -999))[0];
  const topRegion = byProvince[0];
  const regionMix = byProvince.filter((p) => p.share >= 0.04).length >= 2;

  if (
    regionMix &&
    fastestRegion &&
    fastestRegion.growth !== null &&
    fastestRegion.share < 0.12 &&
    fastestRegion.growth > 0.08
  ) {
    out.push({
      id: "opp-region",
      kind: "opportunity",
      title: "Opportunity",
      metric: formatPct(fastestRegion.growth),
      body: `${fastestRegion.name} is the fastest-growing region (${formatPct(fastestRegion.growth)}) but still only ${Math.round(fastestRegion.share * 100)}% of revenue. Worth a distribution push.`,
    });
  }

  const risingProduct = [...byProduct]
    .filter((p) => (p.growth ?? 0) > 0.12 && p.share < 0.1)
    .sort((x, y) => (y.growth ?? 0) - (x.growth ?? 0))[0];
  if (risingProduct && risingProduct.growth !== null) {
    out.push({
      id: "opp-product",
      kind: "opportunity",
      title: "Product opportunity",
      metric: formatPct(risingProduct.growth),
      body: `${risingProduct.name} grew ${formatPct(risingProduct.growth)} while representing only ${Math.round(risingProduct.share * 100)}% of sales. High growth, low share.`,
    });
  }

  const topN = byProduct.slice(0, 5);
  const topNShare = topN.reduce((s, p) => s + p.share, 0);
  if (topN.length >= 3 && topNShare >= 0.4) {
    out.push({
      id: "concentration",
      kind: "concentration",
      title: "Concentration",
      metric: `${Math.round(topNShare * 100)}%`,
      body: `The top ${topN.length} products contribute ${Math.round(topNShare * 100)}% of revenue. A miss on ${topN[0]?.name ?? "the leader"} would move the P&L.`,
    });
  }

  if (
    regionMix &&
    topRegion &&
    a.last3Delta !== null &&
    topRegion.share >= 0.28 &&
    topRegion.share < 0.85 &&
    a.last3Delta < -0.03
  ) {
    out.push({
      id: "risk-region",
      kind: "risk",
      title: "Risk",
      metric: formatPct(a.last3Delta),
      body: `${topRegion.name} contributes ${Math.round(topRegion.share * 100)}% of revenue, but the last three months are ${formatPct(a.last3Delta)} versus the prior three.`,
    });
  } else if (
    regionMix &&
    topRegion &&
    topRegion.growth !== null &&
    topRegion.growth < -0.03 &&
    topRegion.share >= 0.25 &&
    topRegion.share < 0.85
  ) {
    out.push({
      id: "risk-region-yoy",
      kind: "risk",
      title: "Risk",
      metric: formatPct(topRegion.growth),
      body: `${topRegion.name} is ${Math.round(topRegion.share * 100)}% of revenue and is ${formatPct(topRegion.growth)} versus the previous period.`,
    });
  }

  if (a.repeatMultiple !== null && a.repeatMultiple >= 1.3 && a.repeatAov > 0) {
    out.push({
      id: "customer",
      kind: "customer",
      title: "Customer signal",
      metric: `${a.repeatMultiple.toFixed(1)}×`,
      body: `Repeat customers generate ${a.repeatMultiple.toFixed(1)}× higher average order value (${formatLkr(a.repeatAov)}) than one-time buyers (${formatLkr(a.oneTimeAov)}).`,
    });
  }

  if (
    regionMix &&
    topRegion &&
    fastestRegion &&
    topRegion.name !== fastestRegion.name &&
    fastestRegion.growth !== null
  ) {
    out.push({
      id: "market",
      kind: "market",
      title: "Market signal",
      metric: `${Math.round(topRegion.share * 100)}%`,
      body: `${topRegion.name} still leads with ${Math.round(topRegion.share * 100)}% of revenue${topRegion.growth !== null ? ` (${formatPct(topRegion.growth)} YoY)` : ""}, while ${fastestRegion.name} is compounding faster at ${formatPct(fastestRegion.growth)}.`,
    });
  }

  const weakDistrict = [...byDistrict]
    .filter((d) => d.revenue > 0 && d.growth !== null)
    .sort((x, y) => (x.growth ?? 0) - (y.growth ?? 0))[0];
  if (weakDistrict && (weakDistrict.growth ?? 0) < -0.08 && filters.district === "All" && filters.province === "All") {
    out.push({
      id: "district-soft",
      kind: "risk",
      title: "Soft patch",
      metric: formatPct(weakDistrict.growth),
      body: `${weakDistrict.district} is the weakest district in this view at ${formatPct(weakDistrict.growth)} versus the previous period (${formatLkr(weakDistrict.revenue, true)}).`,
    });
  }

  const dense = [...byDistrict].sort((a, b) => b.penetration - a.penetration)[0];
  const sparse = [...byDistrict].filter((d) => d.population > 400000).sort((a, b) => a.penetration - b.penetration)[0];
  if (dense && sparse && dense.district !== sparse.district && dense.penetration > 0) {
    out.push({
      id: "penetration",
      kind: "opportunity",
      title: "Coverage gap",
      body: `Customer density is highest in ${dense.district}, while ${sparse.district} is thin relative to its population. Same offer, under-served market.`,
    });
  }

  if (kpis.revenueDelta !== null && Math.abs(kpis.revenueDelta) >= 0.03) {
    out.push({
      id: "headline",
      kind: kpis.revenueDelta >= 0 ? "growth" : "risk",
      title: kpis.revenueDelta >= 0 ? "Top line" : "Top-line pressure",
      metric: formatPct(kpis.revenueDelta),
      body: `Revenue is ${formatPct(kpis.revenueDelta)} versus the previous period, at ${formatLkr(kpis.revenue, true)} across ${kpis.orders.toLocaleString("en-LK")} orders.`,
    });
  }

  const ranked = out
    .map((ins, i) => ({ ins, w: weight(ins) - i * 0.01 }))
    .sort((a, b) => b.w - a.w)
    .map((x) => x.ins);

  const seen = new Set<string>();
  const unique: Insight[] = [];
  for (const ins of ranked) {
    if (seen.has(ins.kind) && unique.length >= 3) continue;
    seen.add(ins.kind);
    unique.push(ins);
    if (unique.length >= 5) break;
  }

  if (unique.length === 0) {
    unique.push({
      id: "empty",
      kind: "market",
      title: "Thin slice",
      body: "Not enough movement in this filter to call a signal. Widen the year, region, or category and generate again.",
    });
  }

  return unique;
}

function weight(ins: Insight): number {
  const base: Record<string, number> = {
    risk: 5,
    opportunity: 4.5,
    concentration: 4,
    growth: 3.5,
    customer: 3.2,
    market: 3,
  };
  return (base[ins.kind] ?? 1) + scoreGrowth(0);
}
