// Generates lib/sitemap-entries.ts from the app-router filesystem.
// Run via `npm run sitemap` (also runs automatically on `prebuild`).
//
// Why: the sitemap used to be a hand-maintained array that silently drifted
// (e.g. /fraga-elin was missing). This walks app/ so every indexable page.tsx
// is included automatically, with a real per-page lastModified from git.
//
// Excluded from the filesystem walk: dynamic routes ([slug]), private
// folders (_components), route groups ((group)), the /preview area, and any
// page that sets `index: false`.

import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const APP = join(ROOT, "app");
const FALLBACK_DATE = "2026-06-28";

// On Vercel the checkout is shallow (and file deploys have no .git at all),
// so per-file `git log` returns nothing and every entry collapses to
// FALLBACK_DATE — exactly why the live sitemap showed one uniform date.
// lib/sitemap-entries.ts is generated locally against full git history and
// committed; on Vercel (or any non-git build) we keep that committed file.
function hasUsableGitHistory() {
  if (process.env.VERCEL) return false;
  try {
    execFileSync("git", ["rev-parse", "--is-inside-work-tree"], {
      cwd: ROOT,
      stdio: "pipe",
    });
    return true;
  } catch {
    return false;
  }
}

if (!hasUsableGitHistory()) {
  console.log(
    "generate-sitemap: no usable git history here (Vercel/shallow/no-git) — keeping committed lib/sitemap-entries.ts.",
  );
  process.exit(0);
}

/** @type {Array<{ route: string, file: string }>} */
const found = [];

function isIndexable(pageFile) {
  // Skip pages that opt out of indexing via `robots: { index: false }`.
  const src = readFileSync(pageFile, "utf8");
  return !/index:\s*false/.test(src);
}

function walk(dir, route) {
  // Does this directory expose a route?
  const pageFile = join(dir, "page.tsx");
  let hasPage = false;
  try {
    hasPage = statSync(pageFile).isFile();
  } catch {
    hasPage = false;
  }
  if (hasPage && isIndexable(pageFile)) {
    found.push({ route: route === "" ? "/" : route, file: pageFile });
  }

  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (!statSync(full).isDirectory()) continue;
    if (name.startsWith("_")) continue; // private folder (e.g. _components)
    if (name.startsWith("[")) continue; // dynamic route — enumerated elsewhere
    if (name === "preview") continue; // internal preview area
    const nextRoute =
      name.startsWith("(") && name.endsWith(")") ? route : `${route}/${name}`;
    walk(full, nextRoute);
  }
}

walk(APP, "");

function gitDate(file) {
  try {
    const rel = relative(ROOT, file).split("\\").join("/");
    const out = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", rel],
      { cwd: ROOT, encoding: "utf8" },
    ).trim();
    return out ? out.slice(0, 10) : FALLBACK_DATE;
  } catch {
    return FALLBACK_DATE;
  }
}

// Shared infrastructure/data modules that feed MANY pages. Excluded from the
// per-page data-dependency scan on purpose: a commit touching lib/products.ts
// would otherwise bump lastModified on hundreds of pages at once, which turns
// the date back into noise. Pages whose content lives ONLY in a shared module
// (wave pages, product pages) signal freshness by touching their page.tsx
// when the content is actually refreshed.
const SHARED_LIB_MODULES = new Set([
  "products",
  "wave-products",
  "wave-content",
  "comparisons",
  "categoryGroups",
  "decision-comparison",
  "scores",
  "ratings",
  "metadata",
  "site",
  "sitemap-entries",
  "sommar",
  "price-tier",
  "legacy-routes",
  "gtag",
  "consent",
  "client-ip",
  "rate-limit",
  "supabaseServer",
  "elin-knowledge",
  "elin-log",
  "elin-session",
]);

// A page's content often lives in a dedicated data module (e.g. the decision
// comparison pages import "@/lib/<slug>"), and comparison pages scaffolded by
// automation/add-comparison.mjs also have automation/comparisons/<slug>.json.
// lastModified = max(page.tsx, those per-page data files) so content
// refreshes made in the data layer actually move the sitemap date.
function dataDepsFor(pageFile, route) {
  const deps = [];
  const src = readFileSync(pageFile, "utf8");

  for (const match of src.matchAll(/from\s+"@\/lib\/([A-Za-z0-9/_-]+)"/g)) {
    const name = match[1];
    if (SHARED_LIB_MODULES.has(name)) continue;
    const candidate = join(ROOT, "lib", `${name}.ts`);
    try {
      if (statSync(candidate).isFile()) deps.push(candidate);
    } catch {
      // Module without a matching .ts file (e.g. a folder import) — skip.
    }
  }

  const lastSegment = route.split("/").filter(Boolean).pop();
  if (lastSegment) {
    const spec = join(ROOT, "automation", "comparisons", `${lastSegment}.json`);
    try {
      if (statSync(spec).isFile()) deps.push(spec);
    } catch {
      // No automation spec for this route — fine.
    }
  }

  return deps;
}

function lastModifiedFor(pageFile, route) {
  const dates = [gitDate(pageFile), ...dataDepsFor(pageFile, route).map(gitDate)];
  return dates.sort().at(-1) ?? FALLBACK_DATE;
}

function metaFor(route) {
  // changeFrequency + priority heuristics (priority is a weak signal; these
  // simply mirror the previous hand-tuned scheme closely enough).
  if (route === "/") return { changeFrequency: "monthly", priority: 1 };

  const legal = ["/integritetspolicy", "/cookies"];
  const about = ["/om-oss", "/kontakt", "/samarbeta"];
  if (legal.includes(route)) return { changeFrequency: "monthly", priority: 0.3 };
  if (about.includes(route)) return { changeFrequency: "monthly", priority: 0.4 };
  if (route === "/elins-poang") return { changeFrequency: "monthly", priority: 0.45 };
  if (route === "/kategorier") return { changeFrequency: "weekly", priority: 0.55 };
  if (route === "/elins-val") return { changeFrequency: "weekly", priority: 0.65 };
  if (route === "/fraga-elin") return { changeFrequency: "weekly", priority: 0.9 };
  if (route === "/jamforelser") return { changeFrequency: "weekly", priority: 0.72 };
  if (route === "/sommar") return { changeFrequency: "weekly", priority: 0.78 };
  if (route === "/guider") return { changeFrequency: "weekly", priority: 0.7 };
  if (route.startsWith("/guider/")) return { changeFrequency: "weekly", priority: 0.75 };

  // Category roots.
  if (["/skonhet", "/halsa", "/traning"].includes(route)) {
    return { changeFrequency: "weekly", priority: 0.7 };
  }

  // Decision/comparison hubs read as higher intent.
  if (route.includes("-eller-")) return { changeFrequency: "weekly", priority: 0.85 };

  // Everything else: product / review pages.
  return { changeFrequency: "weekly", priority: 0.82 };
}

// Pages untouched for a long time should not claim "weekly" freshness — that
// teaches crawlers the sitemap's hints are noise. Hub/system routes keep
// their configured cadence; leaf pages older than 90 days drop to monthly.
const STALE_AFTER_DAYS = 90;
const HUB_ROUTES = new Set([
  "/",
  "/skonhet",
  "/halsa",
  "/traning",
  "/sommar",
  "/guider",
  "/jamforelser",
  "/kategorier",
  "/elins-val",
  "/elins-poang",
  "/fraga-elin",
]);

function withStaleness(route, lastModified, meta) {
  if (HUB_ROUTES.has(route)) return meta;
  const ageDays = (Date.now() - new Date(`${lastModified}T00:00:00Z`).getTime()) / 86_400_000;
  if (ageDays > STALE_AFTER_DAYS && meta.changeFrequency === "weekly") {
    return { ...meta, changeFrequency: "monthly" };
  }
  return meta;
}

const entries = found
  .map(({ route, file }) => {
    const lastModified = lastModifiedFor(file, route);
    return {
      path: route === "/" ? "" : route,
      lastModified,
      ...withStaleness(route, lastModified, metaFor(route)),
    };
  })
  .sort((a, b) => a.path.localeCompare(b.path));

const body = entries
  .map(
    (e) =>
      `  { path: ${JSON.stringify(e.path)}, lastModified: ${JSON.stringify(
        e.lastModified,
      )}, changeFrequency: ${JSON.stringify(e.changeFrequency)}, priority: ${e.priority} },`,
  )
  .join("\n");

const out = `// AUTO-GENERATED by scripts/generate-sitemap.mjs — do not edit by hand.
// Regenerate with \`npm run sitemap\` (runs automatically on \`prebuild\`).
import type { MetadataRoute } from "next";

export type SitemapEntry = {
  path: string;
  lastModified: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

export const sitemapEntries: SitemapEntry[] = [
${body}
];
`;

writeFileSync(join(ROOT, "lib", "sitemap-entries.ts"), out, "utf8");
console.log(`Wrote lib/sitemap-entries.ts with ${entries.length} routes.`);
