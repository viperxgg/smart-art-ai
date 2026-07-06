#!/usr/bin/env node
/**
 * add-comparison — deterministic "X eller Y?" comparison-page scaffolder.
 *
 * One JSON spec -> wires a full DecisionComparisonPage:
 *   lib/<slug>.ts                     (FaqItems, ComparisonRows, Picks, RelatedLinks)
 *   app/<category>/<slug>/page.tsx     (thin page wrapper)
 *   lib/comparisons.ts                 (ComparisonEntry for /jamforelser)
 *   public/comparisons/<slug>.webp     (Elin thumbnail via render-comparison-image.mjs)
 *
 * A compliance lint blocks the brand's hard no-no's before writing.
 * Usage: node automation/add-comparison.mjs automation/comparisons/<slug>.json [--dry-run]
 */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const argv = process.argv.slice(2);
const DRY = argv.includes("--dry-run");
const FORCE = argv.includes("--force");
const specPath = argv.find((a) => !a.startsWith("--"));
if (!specPath) {
  console.error("Usage: node automation/add-comparison.mjs <spec.json> [--dry-run]");
  process.exit(1);
}
const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));

const read = (rel) => fs.readFileSync(path.join(ROOT, rel), "utf8").replace(/\r\n/g, "\n");
const j = (v) => JSON.stringify(v);

// ---- compliance lint ------------------------------------------------------
const BANNED = [
  { re: /\b\d+[\s.,]*(kr|:-|sek)\b/i, msg: "hardcoded price" },
  { re: /jag har testat|jag testade|jag har provat|jag använde själv/i, msg: "fabricated first-hand testing" },
  { re: /\b(läker|botar|behandlar|medicinsk|receptbelagd)\b/i, msg: "medical claim" },
  { re: /\bSPF\b|solskydd|UV-skydd|skyddar mot sol/i, msg: "SPF / sun-protection claim" },
  { re: /\b(anti-age|antiage|rynkfri|föryngrar)\b/i, msg: "anti-age claim" },
];
function collect(v, out = []) {
  if (typeof v === "string") out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => collect(x, out));
  else if (v && typeof v === "object") Object.values(v).forEach((x) => collect(x, out));
  return out;
}
const problems = [];
for (const s of collect({
  h1: spec.h1, intro: spec.intro, howToChoose: spec.howToChoose, verdict: spec.verdict,
  badges: spec.badges, rows: spec.comparisonRows, faq: spec.faqItems, picks: spec.picks.map((p) => [p.badge, p.headline, spec.picks && p.shortBody]),
  meta: [spec.metaTitle, spec.metaDescription],
})) {
  for (const { re, msg } of BANNED) if (re.test(s)) problems.push(`  ✗ ${msg}: "${s.slice(0, 80)}"`);
}
if (problems.length && !FORCE) {
  console.error("Compliance lint failed:\n" + problems.join("\n"));
  process.exit(1);
}

// routePrefix = URL/folder path (e.g. "sommar/resa"); category = ProductCategorySlug.
const routePrefix = spec.routePrefix || spec.category;

// ---- guards ---------------------------------------------------------------
const routeDir = path.join(ROOT, "app", routePrefix, spec.slug);
if (fs.existsSync(routeDir)) { console.error(`✗ Route app/${spec.category}/${spec.slug} exists.`); process.exit(1); }
if (read("lib/comparisons.ts").includes(`slug: "${spec.slug}"`)) { console.error(`✗ Comparison "${spec.slug}" already in comparisons.ts.`); process.exit(1); }

const base = spec.exportBaseName; // e.g. "dreoEllerHoneywell"
const [p0, p1] = spec.picks;

// ---- 1) lib/<slug>.ts -----------------------------------------------------
const libContent = `import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  ${p0.exportName},
  ${p1.exportName},
} from "@/lib/products";

export const ${base}FaqItems: DecisionComparisonFaqItem[] = ${j(spec.faqItems)};

export const ${base}ComparisonRows = ${j(spec.comparisonRows)} as const;

export const ${base}Picks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: ${p0.exportName},
    path: ${j(p0.path)},
    badge: ${j(p0.badge)},
    headline: ${j(p0.headline)},
    shortBody: ${j(p0.shortBody)},
  },
  {
    product: ${p1.exportName},
    path: ${j(p1.path)},
    badge: ${j(p1.badge)},
    headline: ${j(p1.headline)},
    shortBody: ${j(p1.shortBody)},
  },
];

export const ${base}RelatedLinks: DecisionComparisonRelatedLink[] = ${j(spec.relatedLinks)};
`;

// ---- 2) page.tsx ----------------------------------------------------------
const pageContent = `import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  ${base}ComparisonRows,
  ${base}FaqItems,
  ${base}Picks,
  ${base}RelatedLinks,
} from "@/lib/${spec.slug}";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = \`\${siteConfig.url}/${routePrefix}/${spec.slug}\`;

const heroImage = {
  src: "/comparisons/${spec.slug}.webp",
  alt: ${j(spec.h1 + " — Elins jämförelse")},
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: ${j(spec.categoryLabel)}, href: ${j(spec.backHref)} },
  { name: ${j(spec.h1)}, href: \`/${routePrefix}/${spec.slug}\` },
];

export const metadata = createSeoMetadata({
  title: ${j(spec.metaTitle)},
  description: ${j(spec.metaDescription)},
  url: pageUrl,
  image: {
    url: \`\${siteConfig.url}\${heroImage.src}\`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function ${base[0].toUpperCase() + base.slice(1)}Page() {
  return (
    <DecisionComparisonPage
      h1={${j(spec.h1)}}
      intro={${j(spec.intro)}}
      badges={${j(spec.badges)}}
      howToChoose={${j(spec.howToChoose)}}
      verdict={${j(spec.verdict)}}
      heroImage={heroImage}
      picks={${base}Picks}
      comparisonRows={${base}ComparisonRows}
      faqItems={${base}FaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={${base}RelatedLinks}
      backHref={${j(spec.backHref)}}
      backLabel={${j(spec.backLabel)}}
    />
  );
}
`;

// ---- 3) comparisons.ts entry ----------------------------------------------
const entry = `  {
    slug: ${j(spec.slug)},
    title: ${j(spec.h1)},
    shortTitle: ${j(spec.shortTitle)},
    category: ${j(spec.category)},
    categoryLabel: ${j(spec.categoryLabel)},
    href: ${j(`/${routePrefix}/${spec.slug}`)},
    description: ${j(spec.description)},
    productSlugs: ${j(spec.productSlugs)},
    badges: ${j(spec.badges)},
  },
`;
const cmpFile = read("lib/comparisons.ts");
const anchor = "  ...waveComparisonEntries,\n";
const nextCmp = cmpFile.replace(anchor, anchor + entry);

// ---- 4) image spec --------------------------------------------------------
const imgSpec = {
  title: spec.h1,
  colorA: spec.image.colorA,
  colorB: spec.image.colorB,
  elin: spec.image.elin,
  a: { img: path.join(ROOT, p0.img), brand: p0.brand },
  b: { img: path.join(ROOT, p1.img), brand: p1.brand },
  out: path.join(ROOT, "public", "comparisons", `${spec.slug}.webp`),
};

console.log(`${DRY ? "DRY " : ""}add-comparison: ${spec.slug}`);
console.log("  + lib/" + spec.slug + ".ts");
console.log("  + app/" + routePrefix + "/" + spec.slug + "/page.tsx");
console.log("  ~ lib/comparisons.ts");
console.log("  + public/comparisons/" + spec.slug + ".webp");
if (DRY) process.exit(0);

fs.writeFileSync(path.join(ROOT, "lib", `${spec.slug}.ts`), libContent);
fs.mkdirSync(routeDir, { recursive: true });
fs.writeFileSync(path.join(routeDir, "page.tsx"), pageContent);
fs.writeFileSync(path.join(ROOT, "lib", "comparisons.ts"), nextCmp);

const tmpImg = path.join(ROOT, "automation", `.imgspec-${spec.slug}.json`);
fs.writeFileSync(tmpImg, JSON.stringify(imgSpec));
execFileSync("node", [path.join(__dirname, "render-comparison-image.mjs"), tmpImg], { stdio: "inherit" });
fs.rmSync(tmpImg, { force: true });
console.log("✓ Done:", spec.slug);
