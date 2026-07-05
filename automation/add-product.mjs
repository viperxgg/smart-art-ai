#!/usr/bin/env node
/**
 * add-product — deterministic product scaffolder for smartartai.se (Elins val).
 *
 * One JSON spec -> wires a new product into every place a product needs to live:
 *   lib/products.ts          (Product object + products[] array)
 *   lib/sommar.ts            (import + SommarPick object)
 *   lib/categoryGroups.ts    (slug into the right category bucket)
 *   app/sitemap.ts           (product url, + guide url if a guide is included)
 *   components/ProductDiscoveryLanding.tsx  (Senast tillagt / latestUpdates)
 *   app/<route>/page.tsx      (thin product page wrapper)
 *   app/guider/<slug>/page.tsx + app/guider/page.tsx   (optional guide)
 *   public/products/<dir>/*.webp   (image conversion via ffmpeg)
 *
 * A compliance lint refuses the brand's hard no-no's (hardcoded prices,
 * medical/SPF claims, fabricated first-hand testing) before touching anything.
 *
 * Usage:
 *   node automation/add-product.mjs automation/queue/<slug>.json [--dry-run] [--force]
 *
 *   --dry-run  print everything that WOULD change, write nothing
 *   --force    proceed despite compliance warnings (use sparingly)
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
  console.error("Usage: node automation/add-product.mjs <spec.json> [--dry-run] [--force]");
  process.exit(1);
}

// ---------------------------------------------------------------------------
// TS literal serializer — emits codebase-style object literals (unquoted keys,
// single quotes when the string contains a double quote, literal å ä ö / –).
// ---------------------------------------------------------------------------
const isIdent = (k) => /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(k);
function tsStr(s) {
  if (s.includes('"') && !s.includes("'")) {
    return "'" + s.replace(/\\/g, "\\\\") + "'";
  }
  return '"' + s.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"';
}
function toTs(v, ind = 0) {
  const pad = "  ".repeat(ind);
  const pad1 = "  ".repeat(ind + 1);
  if (v === null || v === undefined) return "null";
  if (typeof v === "string") return tsStr(v);
  if (typeof v === "number" || typeof v === "boolean") return String(v);
  if (Array.isArray(v)) {
    if (v.length === 0) return "[]";
    return "[\n" + v.map((x) => pad1 + toTs(x, ind + 1)).join(",\n") + ",\n" + pad + "]";
  }
  const keys = Object.keys(v);
  if (keys.length === 0) return "{}";
  const body = keys
    .map((k) => pad1 + (isIdent(k) ? k : tsStr(k)) + ": " + toTs(v[k], ind + 1))
    .join(",\n");
  return "{\n" + body + ",\n" + pad + "}";
}

// ---------------------------------------------------------------------------
// File cache: load once, mutate in memory, flush at the end.
// ---------------------------------------------------------------------------
const cache = {};
const read = (rel) => {
  // Normalize to LF on load: the working tree may be CRLF (core.autocrlf=true),
  // but git stores LF and our anchors/inserts use LF. Flushing LF keeps diffs clean.
  if (!(rel in cache)) cache[rel] = fs.readFileSync(path.join(ROOT, rel), "utf8").replace(/\r\n/g, "\n");
  return cache[rel];
};
const set = (rel, content) => {
  cache[rel] = content;
};
function insertAfter(content, anchor, insertion) {
  const i = content.indexOf(anchor);
  if (i < 0) throw new Error(`anchor not found: ${JSON.stringify(anchor)}`);
  const at = i + anchor.length;
  return content.slice(0, at) + insertion + content.slice(at);
}
function insertBefore(content, anchor, insertion) {
  const i = content.indexOf(anchor);
  if (i < 0) throw new Error(`anchor not found: ${JSON.stringify(anchor)}`);
  return content.slice(0, i) + insertion + content.slice(i);
}

// ---------------------------------------------------------------------------
// Compliance lint — the brand's hard rules, enforced on every string field.
// ---------------------------------------------------------------------------
const BANNED = [
  { re: /\b\d+[\s.,]*(kr|:-|sek)\b/i, msg: "hardcoded price (no prices — use 'Se aktuellt pris på Amazon')" },
  { re: /jag har testat|jag testade|jag har provat|jag använde själv/i, msg: 'fabricated first-hand testing (Elin jämför/väljer, never "jag har testat")' },
  { re: /\b(läker|botar|behandlar|medicinsk|receptbelagd)\b/i, msg: "medical claim" },
  { re: /\bSPF\b|solskydd|UV-skydd|skyddar mot sol/i, msg: "SPF / sun-protection claim" },
  { re: /\b(anti-age|antiage|rynkfri|föryngrar|cellförnyelse)\b/i, msg: "anti-age / medical-adjacent claim" },
];
function collectStrings(v, out = []) {
  if (typeof v === "string") out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => collectStrings(x, out));
  else if (v && typeof v === "object") Object.values(v).forEach((x) => collectStrings(x, out));
  return out;
}
function lint(spec) {
  const problems = [];
  for (const s of collectStrings(spec)) {
    for (const { re, msg } of BANNED) {
      if (re.test(s)) problems.push(`  ✗ ${msg}\n      in: "${s.slice(0, 90)}${s.length > 90 ? "…" : ""}"`);
    }
  }
  return problems;
}

// ---------------------------------------------------------------------------
// Load + validate spec
// ---------------------------------------------------------------------------
const spec = JSON.parse(fs.readFileSync(path.resolve(specPath), "utf8"));
const req = ["exportName", "category", "categoryGroup", "route", "pageComponentName", "product", "pick", "images"];
const missing = req.filter((k) => !spec[k]);
if (missing.length) {
  console.error("Spec is missing required fields: " + missing.join(", "));
  process.exit(1);
}
const slug = spec.product.slug;
const exportName = spec.exportName;
const priceTiers = new Set(["budget", "mellan", "premium"]);

if (spec.product.priceTier !== undefined && !priceTiers.has(spec.product.priceTier)) {
  console.error('✗ product.priceTier must be "budget", "mellan" or "premium" when set.');
  process.exit(1);
}
if (
  spec.product.amazonReviewSignal?.ratingCheckedAt !== undefined &&
  typeof spec.product.amazonReviewSignal.ratingCheckedAt !== "string"
) {
  console.error("✗ product.amazonReviewSignal.ratingCheckedAt must be a string when set.");
  process.exit(1);
}

// Guard: slug must not already exist.
if (read("lib/products.ts").includes(`slug: "${slug}"`) || read("lib/products.ts").includes(`export const ${exportName}`)) {
  console.error(`✗ Product "${slug}" (or export ${exportName}) already exists in lib/products.ts. Aborting.`);
  process.exit(1);
}
const routeDir = path.join(ROOT, "app", spec.route);
if (fs.existsSync(routeDir)) {
  console.error(`✗ Page route app/${spec.route} already exists. Aborting.`);
  process.exit(1);
}

// Compliance lint
const problems = lint(spec);
if (problems.length) {
  console.error(`\nCompliance lint found ${problems.length} issue(s):\n` + problems.join("\n"));
  if (!FORCE) {
    console.error("\nFix the spec (or re-run with --force if these are false positives). Aborting.");
    process.exit(1);
  }
  console.error("\n--force given: proceeding despite the above.\n");
}

// ---------------------------------------------------------------------------
// Plan the edits
// ---------------------------------------------------------------------------
const created = []; // {rel, content}
const imageOps = []; // {src, outRel, mode}

// 1) lib/products.ts — Product object + array entry
const productLiteral = `export const ${exportName}: Product = ${toTs(spec.product, 0)};\n\n`;
set("lib/products.ts", insertBefore(read("lib/products.ts"), "export const products = [", productLiteral));
set("lib/products.ts", insertAfter(read("lib/products.ts"), "export const products = [\n", `  ${exportName},\n`));

// 2) lib/sommar.ts — import + SommarPick (productSlug/product are code refs)
set("lib/sommar.ts", insertAfter(read("lib/sommar.ts"), "import {\n", `  ${exportName},\n`));
const pickFields = Object.entries(spec.pick)
  .map(([k, val]) => "    " + (isIdent(k) ? k : tsStr(k)) + ": " + toTs(val, 2))
  .join(",\n");
const pickLiteral =
  "  {\n" +
  `    productSlug: ${exportName}.slug,\n` +
  `    product: ${exportName},\n` +
  pickFields +
  ",\n  },\n";
const picksAnchor =
  spec.system === "smart"
    ? "export const smartSommarPicks: SommarPick[] = [\n"
    : spec.system === "traning"
    ? "export const traningsPicks: SommarPick[] = [\n"
    : spec.system === "resa"
    ? "export const resaPicks: SommarPick[] = [\n"
    : "export const sommarPicks: SommarPick[] = [\n";
set("lib/sommar.ts", insertAfter(read("lib/sommar.ts"), picksAnchor, pickLiteral));

// 3) lib/categoryGroups.ts — slug into the right bucket of the right category
{
  const content = read("lib/categoryGroups.ts");
  const ci = content.indexOf(`${spec.category}: [`);
  if (ci < 0) throw new Error(`category "${spec.category}" not found in categoryGroups.ts`);
  const gi = content.indexOf(`title: ${tsStr(spec.categoryGroup)},`, ci);
  if (gi < 0) throw new Error(`category group "${spec.categoryGroup}" not found under ${spec.category}`);
  const anchor = "productSlugs: [";
  const pi = content.indexOf(anchor, gi);
  const at = pi + anchor.length;
  const next = content.slice(0, at) + `\n        ${tsStr(slug)},` + content.slice(at);
  set("lib/categoryGroups.ts", next);
}

// 4) app/sitemap.ts — product url (+ guide url, prepended)
const smBlock = (href, priority) =>
  "    {\n" +
  "      url: `${siteConfig.url}" + href + "`,\n" +
  "      lastModified: new Date(),\n" +
  '      changeFrequency: "weekly",\n' +
  "      priority: " + priority + ",\n" +
  "    },\n";
let sitemapAdd = smBlock(spec.pick.href, 0.82);
if (spec.guide) sitemapAdd = smBlock(`/guider/${spec.guide.slug}`, 0.74) + sitemapAdd;
// app/sitemap.ts is now auto-generated from the filesystem (scripts/generate-sitemap.mjs
// on prebuild), so only hand-insert if the legacy inline `return [` array still exists.
if (read("app/sitemap.ts").includes("  return [\n")) {
  set("app/sitemap.ts", insertAfter(read("app/sitemap.ts"), "  return [\n", sitemapAdd));
} else {
  console.log("  (sitemap.ts is auto-generated — new page will be picked up on build)");
}

// 5) components/ProductDiscoveryLanding.tsx — Senast tillagt (prepend)
if (Array.isArray(spec.latestUpdates) && spec.latestUpdates.length) {
  const lu = spec.latestUpdates.map((u) => "  " + toTs(u, 1) + ",\n").join("");
  set(
    "components/ProductDiscoveryLanding.tsx",
    insertAfter(read("components/ProductDiscoveryLanding.tsx"), "const latestUpdates = [\n", lu)
  );
}

// 6) product page wrapper
const getter =
  spec.system === "smart"
    ? "getSmartSommarPickBySlug"
    : spec.system === "traning"
    ? "getTraningsPickBySlug"
    : spec.system === "resa"
    ? "getResaPickBySlug"
    : "getSommarPickBySlug";
const productPage = `import { notFound } from "next/navigation";

import { SommarProductReviewPage } from "@/app/skonhet/_components/SommarProductReviewPage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { ${getter} } from "@/lib/sommar";

const pick = ${getter}("${slug}");

export const revalidate = 300;

export const metadata = pick
  ? createSeoMetadata({
      title: pick.metaTitle,
      description: pick.metaDescription,
      url: \`\${siteConfig.url}\${pick.href}\`,
      image: {
        url: \`\${siteConfig.url}\${pick.product.image}\`,
        width: 900,
        height: 675,
        alt: pick.product.imageAlt,
      },
    })
  : {};

export default function ${spec.pageComponentName}() {
  if (!pick) {
    notFound();
  }

  return <SommarProductReviewPage pick={pick} />;
}
`;
created.push({ rel: path.join("app", spec.route, "page.tsx"), content: productPage });

// 7) optional guide
if (spec.guide) {
  const g = spec.guide;
  // 7a) guider index (prepend)
  const guideEntry =
    "  " +
    toTs({ href: `/guider/${g.slug}`, title: g.title, description: g.description }, 1) +
    ",\n";
  set("app/guider/page.tsx", insertAfter(read("app/guider/page.tsx"), "const guides = [\n", guideEntry));

  // 7b) guide page wrapper
  const guidePage = `import { GuidePage } from "@/app/guider/_components/GuidePage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = \`\${siteConfig.url}/guider/${g.slug}\`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Guider", href: "/guider" },
  {
    name: ${tsStr(g.h1)},
    href: "/guider/${g.slug}",
  },
];

const sections = ${toTs(g.sections, 0)} as const;

const faqItems = ${toTs(g.faqItems, 0)} as const;

export const metadata = createSeoMetadata({
  title: ${tsStr(g.metaTitle)},
  description: ${tsStr(g.metaDescription)},
  url: pageUrl,
});

export default function ${g.componentName}() {
  return (
    <GuidePage
      h1={${tsStr(g.h1)}}
      intro={${tsStr(g.intro)}}
      sections={sections}
      verdict={${toTs(g.verdict, 3)}}
      cta={${toTs(g.cta, 3)}}
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={${toTs(g.relatedLinks, 3)}}
    />
  );
}
`;
  created.push({ rel: path.join("app", "guider", g.slug, "page.tsx"), content: guidePage });
}

// 8) images -> webp
const imgDir = path.join("public", "products", spec.images.dir);
for (const f of spec.images.files) {
  const outRel = path.join(imgDir, f.out);
  const isUrl = /^https?:\/\//i.test(f.src);
  const src = isUrl
    ? f.src
    : path.isAbsolute(f.src)
    ? f.src
    : path.resolve(specPath, "..", f.src);
  // remote/raw -> ffmpeg downloads+converts; local .webp -> copy as-is
  const mode = !isUrl && /\.webp$/i.test(src) ? "copy" : "convert";
  imageOps.push({ src, outRel, mode, isUrl });
}

// ---------------------------------------------------------------------------
// Report / apply
// ---------------------------------------------------------------------------
const touched = Object.keys(cache);
console.log(`\n${DRY ? "DRY-RUN — " : ""}add-product: ${slug}`);
console.log("  category: " + spec.category + " › " + spec.categoryGroup + (spec.guide ? "   (+ guide: " + spec.guide.slug + ")" : ""));
console.log("\nEdits to existing files:");
touched.forEach((t) => console.log("  ~ " + t));
console.log("\nNew files:");
created.forEach((c) => console.log("  + " + c.rel));
console.log("\nImages:");
imageOps.forEach((o) => console.log(`  ${o.mode === "copy" ? "copy " : "webp "} ${path.basename(o.src)} -> ${o.outRel}`));

if (DRY) {
  console.log("\n(dry-run) nothing written. Generated SommarPick preview:\n");
  console.log(pickLiteral);
  process.exit(0);
}

// flush edits
for (const rel of touched) {
  fs.writeFileSync(path.join(ROOT, rel), cache[rel]);
}
// create new files
for (const c of created) {
  fs.mkdirSync(path.dirname(path.join(ROOT, c.rel)), { recursive: true });
  fs.writeFileSync(path.join(ROOT, c.rel), c.content);
}
// images
fs.mkdirSync(path.join(ROOT, imgDir), { recursive: true });
for (const o of imageOps) {
  const outAbs = path.join(ROOT, o.outRel);
  if (!o.isUrl && !fs.existsSync(o.src)) {
    console.warn(`  ! source image missing, skipped: ${o.src}`);
    continue;
  }
  if (o.mode === "copy") {
    fs.copyFileSync(o.src, outAbs);
  } else {
    execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-i", o.src, "-c:v", "libwebp", "-q:v", "82", outAbs]);
  }
}

console.log(`\n✓ Done. Next:\n  1) npm run build   (verify)\n  2) review the diff\n  3) git add -A && git commit && git push\n`);
