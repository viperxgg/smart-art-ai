#!/usr/bin/env node
/**
 * build-pins — Pinterest CSV pipeline for Elins val (smartartai.se).
 *
 * One CSV -> a batch of schedule-ready pins:
 *   - reads automation/pins/<batch>.csv (fixed 7-column contract, see README)
 *   - resolves each produkt_ref against the site's real product/comparison
 *     data (lib/products.ts, lib/wave-products.ts, lib/comparisons.ts,
 *     lib/wave-content.ts, automation/comparisons/*.json, automation/queue/*.json)
 *   - builds the UTM-tagged destination link (GA4 attribution)
 *   - seeds public/pins/<pinId>.jpg with a real reference product photo
 *     (a placeholder Remi overwrites with the final 1000x1500 branded pin —
 *     same filename, so nothing else has to change)
 *   - runs a compliance gate (no hardcoded prices, no first-hand-testing
 *     claims, no medical/SPF claims, affiliate disclosure present, never a
 *     raw Amazon link) mirroring automation/add-product.mjs's lint
 *   - writes one rich JSON (source of truth) + one Pinterest-native bulk
 *     upload CSV (bonus export, best-effort against Pinterest's documented
 *     bulk-CSV spec — verify against Pinterest's own template before upload)
 *
 * This script never publishes or schedules anything by itself. Its output
 * still needs a human (Zayn/Layla) to review and the CEO to say go.
 *
 * Usage:
 *   node automation/pins/build-pins.mjs [csvPath] [--dry-run] [--force]
 *                                       [--overwrite-images] [--no-images]
 *
 *   csvPath             defaults to automation/pins/batch-01.csv
 *   --dry-run           compute + print everything, write nothing
 *   --force             proceed despite compliance errors (use sparingly)
 *   --overwrite-images  re-copy placeholder images even if a file already
 *                        exists at public/pins/<pinId>.jpg (by default an
 *                        existing file is left alone — it may already be
 *                        Remi's final artwork)
 *   --no-images         skip the image step entirely (fast text-only run)
 */

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PINS_DIR = __dirname; // automation/pins
const ROOT = path.resolve(__dirname, "..", ".."); // smartart project root
const PUBLIC_PINS_DIR = path.join(ROOT, "public", "pins");
const OUT_DIR = path.join(PINS_DIR, "out");

const argv = process.argv.slice(2);
const DRY = argv.includes("--dry-run");
const FORCE = argv.includes("--force");
const OVERWRITE_IMAGES = argv.includes("--overwrite-images");
const NO_IMAGES = argv.includes("--no-images");
const HELP = argv.includes("--help") || argv.includes("-h");
const csvArg = argv.find((a) => !a.startsWith("--") && !a.startsWith("-"));
const csvPath = path.resolve(csvArg || path.join(PINS_DIR, "batch-01.csv"));

if (HELP) {
  console.log(
    "Usage: node automation/pins/build-pins.mjs [csvPath] [--dry-run] [--force] [--overwrite-images] [--no-images]"
  );
  process.exit(0);
}

const REQUIRED_COLUMNS = ["pelare", "mal_url", "rubrik", "beskrivning", "alt_text", "board", "produkt_ref"];

// Advisory only (soft warnings, never block) — from the 2026-07-12 all-dept
// Pinterest content plan.
const KNOWN_PILLARS = ["X eller Y", "Bäst i test", "Köp INTE / Hoppa över", "Guider"];
const KNOWN_BOARDS = ["Bäst i test", "Hudvård", "Hårvård", "Vanity & sminkbord", "Presenttips", "Hälsa & träning"];

const DISCLOSURE = "Innehåller annonslänkar.";
const BANNED = [
  { re: /\b\d+[\s.,]*(kr|:-|sek)\b/i, msg: "hardcoded price (no prices — use the product's own 'Se aktuellt pris på Amazon' text)" },
  { re: /jag har testat|jag testade|jag har provat|jag använde själv/i, msg: 'fabricated first-hand testing (Elin jämför/väljer, never "jag har testat")' },
  { re: /\b(läker|botar|behandlar|medicinsk|receptbelagd)\b/i, msg: "medical claim" },
  { re: /\bSPF\b|solskydd|UV-skydd|skyddar mot sol/i, msg: "SPF / sun-protection claim" },
  { re: /\b(anti-age|antiage|rynkfri|föryngrar|cellförnyelse)\b/i, msg: "anti-age / medical-adjacent claim" },
];

// ---------------------------------------------------------------------------
// small utils
// ---------------------------------------------------------------------------
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function slugify(input) {
  return String(input)
    .toLowerCase()
    .replace(/å/g, "a")
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const fileCache = {};
function readCached(relPath) {
  if (!(relPath in fileCache)) {
    fileCache[relPath] = fs.readFileSync(path.join(ROOT, relPath), "utf8").replace(/\r\n/g, "\n");
  }
  return fileCache[relPath];
}

/** Scans forward from `openIdx` (must point at "{" or "[") and returns the
 * balanced literal text, correctly skipping over string/template contents
 * and comments so braces inside strings don't corrupt the depth count. */
function extractBalanced(text, openIdx) {
  const open = text[openIdx];
  const close = open === "{" ? "}" : open === "[" ? "]" : null;
  if (!close) throw new Error(`extractBalanced: unsupported opener "${open}"`);
  let depth = 0;
  for (let i = openIdx; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"' || ch === "'" || ch === "`") {
      const quote = ch;
      i++;
      while (i < text.length) {
        if (text[i] === "\\") {
          i += 2;
          continue;
        }
        if (text[i] === quote) break;
        i++;
      }
      continue;
    }
    if (ch === "/" && text[i + 1] === "/") {
      while (i < text.length && text[i] !== "\n") i++;
      continue;
    }
    if (ch === "/" && text[i + 1] === "*") {
      i += 2;
      while (i < text.length && !(text[i] === "*" && text[i + 1] === "/")) i++;
      i++;
      continue;
    }
    if (ch === open) depth++;
    else if (ch === close) {
      depth--;
      if (depth === 0) return text.slice(openIdx, i + 1);
    }
  }
  throw new Error(`extractBalanced: unbalanced literal starting at ${openIdx}`);
}

/** Given the index of a field match (e.g. `slug: "x"`) inside an object
 * literal, walks back to that object's own opening "{" (safe here because
 * slug/asin are always among the first, non-nested fields of these literals)
 * and returns the whole balanced object text. */
function extractEnclosingObject(text, fieldIdx) {
  let i = fieldIdx;
  while (i > 0 && text[i] !== "{") i--;
  if (text[i] !== "{") throw new Error("extractEnclosingObject: no enclosing '{' found");
  return extractBalanced(text, i);
}

/** Evaluates a plain object/array literal (TS type annotations already
 * stripped away by the caller) as JS. Safe here: the text always comes from
 * this repo's own vetted lib/*.ts data files, never from CSV/user input. */
function evalObjectLiteral(text) {
  return new Function(`"use strict"; return (${text});`)();
}

/** Normalizes both site-relative image path conventions seen in this repo
 * ("/products/x/y.webp" and "public/products/x/y.webp") to a filesystem path. */
function toFsPath(webPath) {
  let rel = webPath.replace(/^public[\\/]/, "/");
  if (!rel.startsWith("/")) rel = "/" + rel;
  return path.join(ROOT, "public", rel);
}

// ---------------------------------------------------------------------------
// CSV parsing (RFC4180: quoted fields, embedded commas/newlines, "" escape)
// ---------------------------------------------------------------------------
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  const n = text.length;
  const pushField = () => {
    row.push(field);
    field = "";
  };
  const pushRow = () => {
    pushField();
    rows.push(row);
    row = [];
  };
  for (let i = 0; i < n; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
      continue;
    }
    if (c === '"') {
      inQuotes = true;
      continue;
    }
    if (c === ",") {
      pushField();
      continue;
    }
    if (c === "\r") {
      if (text[i + 1] === "\n") i++;
      pushRow();
      continue;
    }
    if (c === "\n") {
      pushRow();
      continue;
    }
    field += c;
  }
  if (field.length > 0 || row.length > 0) pushRow();
  return rows.filter((r) => !(r.length === 1 && r[0] === ""));
}

function csvField(v) {
  const s = v === null || v === undefined ? "" : String(v);
  if (/[",\n\r]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
  return s;
}
function csvRow(fields) {
  return fields.map(csvField).join(",") + "\r\n";
}

function loadCsvRows(absPath) {
  if (!fs.existsSync(absPath)) {
    console.error(`CSV not found: ${absPath}`);
    process.exit(1);
  }
  const raw = fs.readFileSync(absPath, "utf8").replace(/^﻿/, ""); // strip BOM (Excel export)
  const table = parseCsv(raw);
  if (table.length === 0) {
    console.error("CSV is empty.");
    process.exit(1);
  }
  const header = table[0].map((h) => h.trim());
  const missing = REQUIRED_COLUMNS.filter((c) => !header.includes(c));
  const extra = header.filter((c) => !REQUIRED_COLUMNS.includes(c));
  if (missing.length || extra.length) {
    console.error("CSV header does not match the fixed contract:");
    console.error("  expected: " + REQUIRED_COLUMNS.join(", "));
    console.error("  got:      " + header.join(", "));
    if (missing.length) console.error("  missing:  " + missing.join(", "));
    if (extra.length) console.error("  extra:    " + extra.join(", "));
    process.exit(1);
  }
  return table.slice(1).map((cells, idx) => {
    const obj = { __row: idx + 2 }; // +2 = 1-based + header row
    header.forEach((h, i) => (obj[h] = (cells[i] ?? "").trim()));
    return obj;
  });
}

// ---------------------------------------------------------------------------
// product / comparison data resolution
// ---------------------------------------------------------------------------
const PRODUCT_SOURCE_FILES = ["lib/products.ts", "lib/wave-products.ts"];
const COMPARISON_REGISTRY_FILES = ["lib/comparisons.ts", "lib/wave-content.ts"];

/** Forward-scans every `export const NAME = { ... }` (or `export const NAME:
 * Product = {...}`) top-level literal in `file` and returns the first whose
 * raw text satisfies `predicate`. This is the robust general-purpose finder:
 * unlike a "walk backward to the nearest {" shortcut, it works no matter
 * where the matched field sits (e.g. `pageHref` sits well after several
 * nested `images: [{...}]` objects, so a backward scan from it would land on
 * the wrong brace). ~200-250 small literals per file, sub-second either way. */
function findProductLiteral(file, predicate) {
  const text = readCached(file);
  const re = /export const (\w+)(?:\s*:\s*Product)?\s*=\s*\{/g;
  let m;
  while ((m = re.exec(text))) {
    const braceIdx = m.index + m[0].length - 1;
    const literal = extractBalanced(text, braceIdx);
    if (predicate(literal)) return { exportName: m[1], literal };
  }
  return null;
}

function tryEditorialScore(slug) {
  if (!slug) return null;
  const text = readCached("lib/scores.ts");
  const re = new RegExp(`"${escapeRegExp(slug)}"\\s*:\\s*\\{`);
  const m = re.exec(text);
  if (!m) return null;
  const braceIdx = text.indexOf("{", m.index);
  const objText = extractBalanced(text, braceIdx);
  const totalM = /total\s*:\s*(\d+)/.exec(objText);
  return totalM ? `${totalM[1]}/100` : null;
}

/** Same lookup as tryEditorialScore, but pulls the per-product `verdict`
 * sentence out of lib/scores.ts instead — used as the elin.quote fallback
 * source when a produkt_ref resolves to a single product (no two-sided
 * comparison `verdict` exists in that case). */
function tryEditorialVerdict(slug) {
  if (!slug) return null;
  const text = readCached("lib/scores.ts");
  const re = new RegExp(`"${escapeRegExp(slug)}"\\s*:\\s*\\{`);
  const m = re.exec(text);
  if (!m) return null;
  const braceIdx = text.indexOf("{", m.index);
  const objText = extractBalanced(text, braceIdx);
  const verdictM = /verdict\s*:\s*"([^"]*)"/.exec(objText);
  return verdictM ? verdictM[1] : null;
}

function productSpecToData(p, via) {
  return {
    kind: "product",
    resolvedVia: via,
    title: p.title,
    verdict: tryEditorialVerdict(p.slug),
    picks: [
      {
        brand: p.brand,
        title: p.title,
        price: p.price,
        ratingSummary: p.amazonReviewSignal?.ratingSummary || null,
        elinsPoang: tryEditorialScore(p.slug),
        image: p.image,
        asin: p.asin,
        productSlug: p.slug,
      },
    ],
  };
}

/** Tier 2/4: automation/queue/<ref>.json, else a textual scan of
 * lib/products.ts + lib/wave-products.ts by slug or asin. */
function resolveSingleProduct(ref) {
  if (!ref) return null;

  const queuePath = path.join(ROOT, "automation", "queue", `${ref}.json`);
  if (fs.existsSync(queuePath)) {
    const spec = JSON.parse(fs.readFileSync(queuePath, "utf8"));
    return productSpecToData(spec.product, `automation/queue/${ref}.json`);
  }

  for (const file of PRODUCT_SOURCE_FILES) {
    const slugRe = new RegExp(`slug\\s*:\\s*"${escapeRegExp(ref)}"`);
    const asinRe = new RegExp(`asin\\s*:\\s*"${escapeRegExp(ref)}"`);
    const found = findProductLiteral(file, (lit) => slugRe.test(lit) || asinRe.test(lit));
    if (found) {
      const obj = evalObjectLiteral(found.literal);
      return productSpecToData(obj, `${file} (slug/asin)`);
    }
  }

  // ref might be an ASIN that only appears inside a queue spec whose
  // filename doesn't match (rare, but cheap to check — ~150 small files).
  const queueDir = path.join(ROOT, "automation", "queue");
  if (fs.existsSync(queueDir)) {
    for (const f of fs.readdirSync(queueDir)) {
      if (!f.endsWith(".json")) continue;
      try {
        const spec = JSON.parse(fs.readFileSync(path.join(queueDir, f), "utf8"));
        if (spec?.product?.asin === ref) {
          return productSpecToData(spec.product, `automation/queue/${f} (asin)`);
        }
      } catch {
        // ignore malformed queue files, not this script's job to fix them
      }
    }
  }
  return null;
}

/** Tier 1: automation/comparisons/<ref>.json — richest source (both
 * products, Elins poäng for each side, real thumbnail paths). */
function resolveComparisonJson(ref) {
  const p = path.join(ROOT, "automation", "comparisons", `${ref}.json`);
  if (!fs.existsSync(p)) return null;
  const spec = JSON.parse(fs.readFileSync(p, "utf8"));
  const poangRow = (spec.comparisonRows || []).find((r) => /elins poäng/i.test(r[0] || ""));
  const picks = (spec.picks || []).map((pick, idx) => {
    const productSlug = (spec.productSlugs || [])[idx];
    const single = productSlug ? resolveSingleProduct(productSlug) : null;
    const sp = single?.picks?.[0];
    return {
      brand: pick.brand,
      title: sp?.title || pick.headline,
      price: sp?.price || "Se aktuellt pris på Amazon",
      ratingSummary: sp?.ratingSummary || null,
      elinsPoang: poangRow ? poangRow[idx + 1] : sp?.elinsPoang || null,
      image: pick.img,
      asin: sp?.asin || null,
      productSlug: productSlug || null,
    };
  });
  return {
    kind: "comparison",
    resolvedVia: `automation/comparisons/${ref}.json`,
    title: spec.h1,
    verdict: spec.verdict || null,
    href: spec.picks?.[0]?.path ? `/${spec.routePrefix}/${spec.slug}` : undefined,
    picks,
  };
}

/** Tier 3 (best-effort fallback): lib/comparisons.ts / lib/wave-content.ts
 * registries, for comparison pages that predate automation/comparisons/*.json. */
function resolveComparisonRegistry(ref) {
  for (const file of COMPARISON_REGISTRY_FILES) {
    const text = readCached(file);
    const re = new RegExp(`slug\\s*:\\s*"${escapeRegExp(ref)}"`);
    const m = re.exec(text);
    if (!m) continue;
    const objText = extractEnclosingObject(text, m.index);
    const hrefM = /href\s*:\s*"([^"]+)"/.exec(objText);
    const titleM = /title\s*:\s*"([^"]+)"/.exec(objText);
    const slugsM = /productSlugs\s*:\s*\[([^\]]*)\]/.exec(objText);
    const slugs = slugsM ? [...slugsM[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]) : [];
    const resolved = slugs.map((s) => resolveSingleProduct(s)).filter(Boolean);
    const picks = resolved.map((r) => r.picks[0]);
    if (!picks.length) continue;
    // No two-sided `verdict` exists at this fallback tier (it predates
    // automation/comparisons/*.json) — best-effort: the first pick's own
    // per-product editorial verdict, clearly a weaker source than the real
    // comparison verdict (buildElinField's caller sees which tier this was).
    const verdict = resolved.map((r) => r.verdict).find(Boolean) || null;
    return {
      kind: picks.length > 1 ? "comparison" : "product",
      resolvedVia: `${file} (registry fallback)`,
      title: titleM?.[1] || null,
      verdict,
      href: hrefM?.[1] || null,
      picks,
    };
  }
  return null;
}

/** Resolves a product by its page route (`pageHref`) rather than slug/asin.
 * `pageHref` sits deep in the Product literal (after the nested `images`
 * array), so this always goes through the robust forward-scan finder. */
function resolveProductByPageHref(href) {
  for (const file of PRODUCT_SOURCE_FILES) {
    const re = new RegExp(`pageHref\\s*:\\s*"${escapeRegExp(href)}"`);
    const found = findProductLiteral(file, (lit) => re.test(lit));
    if (found) {
      const obj = evalObjectLiteral(found.literal);
      return productSpecToData(obj, `${file} (pageHref)`);
    }
  }
  return null;
}

/** Tier for the "Guider" pillar: app/guider/<ref>/page.tsx has no product
 * data of its own (it's prose — sections/FAQ), but it links out to the
 * products it discusses via cta.links[].href / relatedLinks[].href. Pull
 * those hrefs (skipping self-referential /guider/... links) and resolve the
 * first one or two as the guide's representative product(s). */
function resolveGuidePage(ref) {
  const pagePath = path.join(ROOT, "app", "guider", ref, "page.tsx");
  if (!fs.existsSync(pagePath)) return null;
  const text = fs.readFileSync(pagePath, "utf8");
  const hrefs = [...text.matchAll(/href:\s*"(\/[a-zA-Z0-9\-/]+)"/g)]
    .map((m) => m[1])
    .filter((h) => !h.startsWith("/guider/") && h !== "/");
  const uniqueHrefs = [...new Set(hrefs)];
  const picks = [];
  let verdict = null;
  for (const href of uniqueHrefs) {
    const found = resolveProductByPageHref(href);
    if (found) {
      picks.push(found.picks[0]);
      if (!verdict) verdict = found.verdict;
    }
    if (picks.length >= 2) break; // guides usually contrast at most 2 picks
  }
  if (!picks.length) return null;
  const titleM = /h1="([^"]+)"/.exec(text);
  return {
    kind: picks.length > 1 ? "comparison" : "product",
    resolvedVia: `app/guider/${ref}/page.tsx (linked product pages)`,
    title: titleM?.[1] || null,
    verdict,
    picks,
  };
}

function resolveProduktRef(ref) {
  return (
    resolveComparisonJson(ref) || resolveSingleProduct(ref) || resolveComparisonRegistry(ref) || resolveGuidePage(ref) || null
  );
}

function resolveImageSource(ref, data) {
  const cmpWebp = path.join(ROOT, "public", "comparisons", `${ref}.webp`);
  if (fs.existsSync(cmpWebp)) return { fsPath: cmpWebp, via: `public/comparisons/${ref}.webp` };
  const img = data?.picks?.[0]?.image;
  if (img) {
    const fsPath = toFsPath(img);
    if (fs.existsSync(fsPath)) return { fsPath, via: img };
  }
  return null;
}

// ---------------------------------------------------------------------------
// compliance gate
// ---------------------------------------------------------------------------
function lintText(fieldName, value, problems) {
  for (const { re, msg } of BANNED) {
    if (re.test(value)) {
      problems.push(`${fieldName}: ${msg} — in "${value.slice(0, 90)}${value.length > 90 ? "…" : ""}"`);
    }
  }
}

function ensureDisclosure(description) {
  if (/innehåller annonslänkar/i.test(description)) return { text: description, added: false };
  const sep = /[.!?]\s*$/.test(description.trim()) ? " " : ". ";
  return { text: description.trim() + sep + DISCLOSURE, added: true };
}

// ---------------------------------------------------------------------------
// Elin verdict -> pin header (`elin.expression` + `elin.quote`)
// Locked in 2026-07-13: Concept 1 "Elins hörna" is the CEO-approved default
// ComparisonPin layout (video-projects/elin-sttropez). This section is what
// makes "any X-eller-Y page -> a pin" automatic — it turns the `verdict`
// field every automation/comparisons/*.json already has (previously unused
// by any pin) into Elin's speech-bubble opinion, matching the schema:
//   elin: { expression: 'nara-nog'|'tydlig-vinnare'|'vanta'|'arligt-sagt', quote: string }
// ---------------------------------------------------------------------------
const QUOTES_OVERRIDES_PATH = path.join(PINS_DIR, "quotes-overrides.json");
function loadQuotesOverrides() {
  if (!fs.existsSync(QUOTES_OVERRIDES_PATH)) return {};
  try {
    const raw = JSON.parse(fs.readFileSync(QUOTES_OVERRIDES_PATH, "utf8"));
    const { _comment, ...rest } = raw; // eslint-disable-line no-unused-vars
    return rest;
  } catch (err) {
    console.warn(`  ! could not parse ${path.relative(ROOT, QUOTES_OVERRIDES_PATH)}: ${err.message} (ignoring overrides)`);
    return {};
  }
}
const QUOTES_OVERRIDES = loadQuotesOverrides();

function wordCount(s) {
  return String(s || "").trim().split(/\s+/).filter(Boolean).length;
}

const WINNER_SENTENCE_RE = /\bvinner\b/i;

/** Condenses a comparison's `verdict` paragraph toward Elin's 8-14 word
 * speech-bubble opinion. Heuristic, not NLP — this dataset's `verdict` field
 * reliably contains exactly one "<A> vinner ..., medan <B> vinner/ger ..."
 * sentence (the real head-to-head); sentences around it are scene-setting or
 * a "if you want X" recap, so that one sentence is what's worth keeping.
 *
 * Deliberately favours a grammatically complete draft that runs a little
 * over 14 words rather than a mangled one forced down to exactly 14 — this
 * is a first-pass draft for Layla/Cody to review or override (see
 * quotes-overrides.json), never a publish-ready final line by itself.
 * Never a first-hand-testing claim: it only ever rearranges/trims Elin's own
 * existing editorial verdict text, it doesn't invent new claims. */
function condenseVerdictToQuote(verdict) {
  if (!verdict) return null;
  const clean = verdict.replace(/\s+/g, " ").trim();
  const sentences = clean.split(/(?<=[.!?])\s+/).filter(Boolean);
  if (!sentences.length) return null;

  const base =
    sentences.find((s) => WINNER_SENTENCE_RE.test(s) && /\bmedan\b/i.test(s)) ||
    sentences.find((s) => WINNER_SENTENCE_RE.test(s)) ||
    sentences.slice().sort((a, b) => Math.abs(wordCount(a) - 11) - Math.abs(wordCount(b) - 11))[0] ||
    clean;

  let text = base.trim().replace(/[.!?]+$/, "");

  // Drop a trailing justification clause ("tack vare X", "eftersom X", "på
  // grund av X", "genom att X") — restates the reason "vinner för X" already
  // gives, so it's the one thing here that's safely droppable.
  text = text.replace(/,?\s*(tack vare|eftersom|på grund av|genom att)\s+.+$/i, "");

  let words = text.split(/\s+/).filter(Boolean);

  if (words.length > 14) {
    // Only ever trim inside the clause AFTER "medan" (never before it — that
    // would drop one of the two products from the quote entirely), and only
    // at a comma that already exists there. No inner comma -> leave it long;
    // a grammatical 16-18 word draft beats a grammatically broken 14-word one.
    const medanIdx = text.toLowerCase().indexOf(" medan ");
    if (medanIdx !== -1) {
      const before = text.slice(0, medanIdx);
      const after = text.slice(medanIdx);
      const commaInAfter = after.indexOf(",", 7);
      if (commaInAfter > 0) {
        text = (before + after.slice(0, commaInAfter)).trim();
        words = text.split(/\s+/).filter(Boolean);
      }
    }
  }

  let quote = words.join(" ").replace(/[,;:–-]+$/, "").trim();
  if (!quote) return null;
  quote = quote.charAt(0).toUpperCase() + quote.slice(1);
  if (!/[.!?]$/.test(quote)) quote += ".";
  return quote;
}

function parseScore(elinsPoang) {
  if (!elinsPoang) return null;
  const m = /(\d+)/.exec(String(elinsPoang));
  return m ? Number(m[1]) : null;
}

const LOW_SCORE_RE = /vänta|hoppa över|tunt underlag|få omdömen|endast \d+ omdöme/i;
const CAVEAT_RE = /\bmen\b|\bdock\b|\btrots\b/i;

/** Expression enum, tied to the comparison result — score-gap driven for the
 * common "two solid options" case (this pipeline's main pillar is literally
 * "X eller Y", so both sides are usually strong), with text signals covering
 * the two cases that aren't about the gap: an explicit wait/skip signal, or
 * genuine hedging language. First-pass thresholds — retune once this has run
 * across all ~94 pages and the real score-gap distribution is visible. */
function deriveExpression({ scoreA, scoreB, verdict }) {
  const lowSignal =
    (Number.isFinite(scoreA) && scoreA < 65) || (Number.isFinite(scoreB) && scoreB < 65) || LOW_SCORE_RE.test(verdict || "");
  if (lowSignal) return "vanta";

  const caveatSignal = CAVEAT_RE.test(verdict || "");
  const gap = Number.isFinite(scoreA) && Number.isFinite(scoreB) ? Math.abs(scoreA - scoreB) : null;
  if (gap === null) return caveatSignal ? "arligt-sagt" : "nara-nog";
  if (gap <= 3) return "nara-nog";
  if (gap >= 6 && !caveatSignal) return "tydlig-vinnare";
  return "arligt-sagt";
}

/** Builds the pin's `elin` field ({expression, quote} — exactly
 * ComparisonPin's `ComparisonPinElin` prop shape). Checks
 * quotes-overrides.json first (Layla/Cody's hand-approved line, keyed by
 * produkt_ref) before falling back to the auto-condensed draft, so a manual
 * approval is never clobbered by re-running the pipeline — the same
 * "don't overwrite a finished asset" pattern this script already uses for
 * public/pins/*.jpg. Returns `elin` (clean, for the render step) plus
 * `quoteMeta` (diagnostics for the JSON report — source + whether it landed
 * in the 8-14 word target). */
function buildElinField(ref, rawVerdict, picks) {
  const override = QUOTES_OVERRIDES[ref] || {};
  const scoreA = parseScore(picks?.[0]?.elinsPoang);
  const scoreB = parseScore(picks?.[1]?.elinsPoang);
  const expression = override.expression || deriveExpression({ scoreA, scoreB, verdict: rawVerdict });

  if (override.quote) {
    const n = wordCount(override.quote);
    return {
      elin: { expression, quote: override.quote },
      quoteMeta: { source: "quotes-overrides.json", approvedBy: override.approvedBy || null, wordCount: n, withinTarget: n >= 8 && n <= 14 },
    };
  }

  const fallbackLine =
    picks?.[0]?.title && picks?.[1]?.title ? `${picks[0].brand || picks[0].title} eller ${picks[1].brand || picks[1].title} – Elin väljer efter vad du behöver.` : null;
  const draft = condenseVerdictToQuote(rawVerdict) || fallbackLine;
  const n = draft ? wordCount(draft) : 0;
  return {
    elin: draft ? { expression, quote: draft } : null,
    quoteMeta: {
      source: rawVerdict ? "verdict (auto-condensed draft)" : fallbackLine ? "fallback (no verdict field found)" : "none",
      approvedBy: null,
      wordCount: n,
      withinTarget: n >= 8 && n <= 14,
    },
  };
}

// ---------------------------------------------------------------------------
// image placeholder copy
// ---------------------------------------------------------------------------
function copyPlaceholderImage(sourceFsPath, targetFsPath) {
  fs.mkdirSync(path.dirname(targetFsPath), { recursive: true });
  if (fs.existsSync(targetFsPath) && !OVERWRITE_IMAGES) {
    return "already-exists-untouched";
  }
  try {
    execFileSync(
      "ffmpeg",
      [
        "-y",
        "-loglevel",
        "error",
        "-i",
        sourceFsPath,
        "-vf",
        "scale=1000:1500:force_original_aspect_ratio=decrease,pad=1000:1500:(ow-iw)/2:(oh-ih)/2:color=white",
        targetFsPath,
      ],
      { stdio: "inherit" }
    );
    return "placeholder-copied";
  } catch (err) {
    // ffmpeg missing/failing shouldn't kill the whole batch — fall back to a
    // plain byte copy so there's still *something* at the expected path.
    console.warn(`  ! ffmpeg failed for ${path.basename(targetFsPath)}, falling back to plain copy: ${err.message}`);
    fs.copyFileSync(sourceFsPath, targetFsPath);
    return "placeholder-copied-unscaled";
  }
}

// ---------------------------------------------------------------------------
// UTM + scheduling helpers
// ---------------------------------------------------------------------------
function readSiteUrl() {
  const text = readCached("lib/site.ts");
  const m = /url:\s*"([^"]+)"/.exec(text);
  if (!m) throw new Error("Could not find siteConfig.url in lib/site.ts");
  return m[1].replace(/\/$/, "");
}

function normalizeMalUrl(raw, siteUrl) {
  const trimmed = raw.trim();
  const siteHost = new URL(siteUrl).host; // e.g. "www.smartartai.se"
  const bareHost = siteHost.replace(/^www\./, ""); // e.g. "smartartai.se"
  if (/^https?:\/\//i.test(trimmed)) {
    const u = new URL(trimmed);
    if (/amazon\.[a-z.]+|amzn\.to/i.test(u.host)) {
      return { error: `mal_url points straight at Amazon (${u.host}) — pins must link to smartartai.se, never directly to Amazon.` };
    }
    if (u.host === siteHost || u.host === bareHost) {
      // Same site, apex-vs-www variant — canonicalize to siteConfig's own
      // host so the pin's UTM link never takes a redirect hop (vercel.json
      // 301s the apex to www; skipping that hop keeps GA4 attribution clean).
      return { url: siteUrl + u.pathname + u.search };
    }
    return { url: trimmed, warning: `mal_url host "${u.host}" is not ${siteHost} — double-check this is intentional (off-site destination).` };
  }
  if (!trimmed.startsWith("/")) {
    return { error: `mal_url "${trimmed}" must start with "/" (site-relative path) or be a full https://... URL.` };
  }
  return { url: siteUrl + trimmed };
}

function buildUtmUrl(baseUrl, campaign, content) {
  const u = new URL(baseUrl);
  u.searchParams.set("utm_source", "pinterest");
  u.searchParams.set("utm_medium", "social");
  u.searchParams.set("utm_campaign", campaign);
  u.searchParams.set("utm_content", content);
  return u.toString();
}

const PUBLISH_TIMES = ["09:00", "12:00", "15:00", "18:00"]; // 4 pins/day cadence, local time
function suggestedPublishAt(rowSeq) {
  const dayOffset = Math.floor(rowSeq / PUBLISH_TIMES.length) + 1; // start tomorrow
  const time = PUBLISH_TIMES[rowSeq % PUBLISH_TIMES.length];
  const d = new Date();
  d.setDate(d.getDate() + dayOffset);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}T${time}:00`;
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------
function main() {
  const siteUrl = readSiteUrl();
  const batchId = path.basename(csvPath).replace(/\.csv$/i, "");
  const rows = loadCsvRows(csvPath);

  const pins = [];
  const usedPinIds = new Map();
  let hardErrors = 0;
  let softWarnings = 0;

  rows.forEach((row, seq) => {
    const errors = [];
    const warnings = [];

    for (const col of REQUIRED_COLUMNS) {
      if (!row[col]) errors.push(`missing required value in column "${col}"`);
    }
    if (errors.length) {
      pins.push({ row: row.__row, ok: false, errors, warnings, raw: row });
      hardErrors += errors.length;
      return;
    }

    if (!KNOWN_PILLARS.includes(row.pelare)) {
      warnings.push(`pelare "${row.pelare}" is not one of the known pillars (${KNOWN_PILLARS.join(" / ")}) — typo?`);
    }
    if (!KNOWN_BOARDS.includes(row.board)) {
      warnings.push(`board "${row.board}" is not one of the known boards (${KNOWN_BOARDS.join(" / ")}) — typo, or a new board?`);
    }

    const malUrlResult = normalizeMalUrl(row.mal_url, siteUrl);
    if (malUrlResult.error) errors.push(malUrlResult.error);
    if (malUrlResult.warning) warnings.push(malUrlResult.warning);

    lintText("rubrik", row.rubrik, errors);
    lintText("beskrivning", row.beskrivning, errors);
    lintText("alt_text", row.alt_text, errors);
    if (row.rubrik.length > 100) warnings.push(`rubrik is ${row.rubrik.length} chars (Pinterest recommends <=100).`);
    if (row.beskrivning.length > 500) warnings.push(`beskrivning is ${row.beskrivning.length} chars (Pinterest hard cap is ~500).`);
    else if (row.beskrivning.length > 300) warnings.push(`beskrivning is ${row.beskrivning.length} chars (recommended ~200-300).`);

    const { text: description, added: disclosureAdded } = ensureDisclosure(row.beskrivning);
    if (disclosureAdded) warnings.push('beskrivning was missing "Innehåller annonslänkar" — auto-appended.');

    const data = resolveProduktRef(row.produkt_ref);
    if (!data) {
      errors.push(
        `produkt_ref "${row.produkt_ref}" could not be resolved (checked automation/comparisons/, automation/queue/, lib/products.ts, lib/wave-products.ts, lib/comparisons.ts, lib/wave-content.ts). Fix the ref or add the product first.`
      );
    }

    // elin.expression / elin.quote — the ComparisonPin v2 (Concept 1, locked
    // 2026-07-13) header. Built from whatever `data` resolution above found;
    // skipped entirely when produkt_ref didn't resolve (errors already fired).
    let elin = null;
    let elinQuoteMeta = null;
    if (data) {
      const built = buildElinField(row.produkt_ref, data.verdict, data.picks);
      elin = built.elin;
      elinQuoteMeta = built.quoteMeta;
      if (elin?.quote) {
        lintText("elin.quote", elin.quote, errors);
      }
      if (elinQuoteMeta && !elinQuoteMeta.withinTarget) {
        warnings.push(
          `elin.quote is ${elinQuoteMeta.wordCount} words (target 8-14, source: ${elinQuoteMeta.source}) — polish or add an override in automation/pins/quotes-overrides.json["${row.produkt_ref}"].quote.`
        );
      }
    }

    // pin id: stable, content-derived, doubles as the expected image filename
    let pinId = `${batchId}-${slugify(row.produkt_ref)}`;
    if (pinId.length > 90) pinId = pinId.slice(0, 90);
    if (usedPinIds.has(pinId)) {
      const n = usedPinIds.get(pinId) + 1;
      usedPinIds.set(pinId, n);
      warnings.push(`duplicate produkt_ref in this batch — pin id disambiguated to "${pinId}-${n}".`);
      pinId = `${pinId}-${n}`;
    } else {
      usedPinIds.set(pinId, 1);
    }

    const campaign = slugify(row.pelare) ? `${slugify(row.pelare)}-${batchId}` : batchId;
    const utmUrl = malUrlResult.url ? buildUtmUrl(malUrlResult.url, campaign, pinId) : null;

    // image
    const targetFsPath = path.join(PUBLIC_PINS_DIR, `${pinId}.jpg`);
    const publicPath = `/pins/${pinId}.jpg`;
    let imageStatus = "skipped";
    let imageSourceVia = null;
    if (!NO_IMAGES) {
      const src = resolveImageSource(row.produkt_ref, data);
      if (src) {
        imageSourceVia = src.via;
        if (!DRY) imageStatus = copyPlaceholderImage(src.fsPath, targetFsPath);
        else imageStatus = fs.existsSync(targetFsPath) ? "already-exists-untouched (dry-run)" : "would-copy (dry-run)";
      } else {
        imageStatus = "missing";
        warnings.push(`no real reference image found for produkt_ref "${row.produkt_ref}" — public/pins/${pinId}.jpg was NOT created. Remi needs a source image or a manual drop-in.`);
      }
    }

    if (errors.length && !FORCE) {
      pins.push({ row: row.__row, ok: false, errors, warnings, raw: row });
      hardErrors += errors.length;
      return;
    }
    hardErrors += FORCE ? 0 : 0;
    softWarnings += warnings.length;

    pins.push({
      pinId,
      row: row.__row,
      ok: errors.length === 0,
      forced: errors.length > 0 && FORCE,
      pelare: row.pelare,
      board: row.board,
      produktRef: row.produkt_ref,
      title: row.rubrik,
      description,
      descriptionDisclosureAdded: disclosureAdded,
      altText: row.alt_text,
      destinationUrl: malUrlResult.url,
      utmUrl,
      image: {
        sourceVia: imageSourceVia,
        publicPath,
        publicUrl: siteUrl + publicPath,
        status: imageStatus,
      },
      productData: data
        ? {
            kind: data.kind,
            resolvedVia: data.resolvedVia,
            title: data.title,
            picks: data.picks,
          }
        : null,
      elin,
      elinQuoteMeta,
      suggestedPublishAt: suggestedPublishAt(seq),
      compliance: { ok: errors.length === 0, errors, warnings },
    });
  });

  const ok = pins.filter((p) => p.ok).length;
  const failed = pins.length - ok;

  console.log(`\n${DRY ? "DRY-RUN — " : ""}build-pins: ${batchId} (${csvPath})`);
  console.log(`  rows: ${pins.length}   ok: ${ok}   failed: ${failed}   warnings: ${softWarnings}`);
  for (const p of pins) {
    const tag = p.ok ? "OK  " : "FAIL";
    console.log(`  [${tag}] row ${p.row}${p.pinId ? " " + p.pinId : ""}`);
    (p.errors || p.compliance?.errors || []).forEach((e) => console.log(`         ERROR: ${e}`));
    (p.warnings || p.compliance?.warnings || []).forEach((w) => console.log(`         warn:  ${w}`));
  }

  if (failed > 0 && !FORCE) {
    console.error(`\n✗ ${failed} row(s) failed the compliance/resolution gate. Nothing was written.`);
    console.error("  Fix the CSV (or re-run with --force to proceed despite errors — use sparingly).");
    process.exit(1);
  }

  if (DRY) {
    console.log("\n(dry-run) nothing written.");
    process.exit(failed > 0 ? 1 : 0);
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const jsonOut = {
    batchId,
    generatedAt: new Date().toISOString(),
    sourceCsv: path.relative(ROOT, csvPath).replace(/\\/g, "/"),
    siteUrl,
    summary: { rows: pins.length, ok, failed, warnings: softWarnings },
    pins,
  };
  const jsonPath = path.join(OUT_DIR, `${batchId}.pins.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(jsonOut, null, 2));

  // Bonus export: Pinterest's native bulk-upload CSV. Columns per
  // help.pinterest.com "Bulk upload Pins" (verified 2026-07-13): Title,
  // Media URL, Pinterest board, Description, Link, Publish date, Keywords.
  // Re-verify against Pinterest's own downloadable template before
  // uploading — this is a best-effort export, not an official schema.
  // Publish date is ALWAYS filled (never blank): Pinterest publishes
  // immediately (or all-at-once) on a blank/misformatted date column, so a
  // blank date here would be an accidental-publish footgun. Suggested dates
  // are safe futures dates — a human still reviews/edits them before upload.
  let bulkCsv = csvRow(["Title", "Media URL", "Pinterest board", "Description", "Link", "Publish date", "Keywords"]);
  for (const p of pins.filter((x) => x.ok)) {
    bulkCsv += csvRow([p.title, p.image.publicUrl, p.board, p.description, p.utmUrl, p.suggestedPublishAt, ""]);
  }
  const bulkCsvPath = path.join(OUT_DIR, `${batchId}.pinterest-bulk.csv`);
  fs.writeFileSync(bulkCsvPath, bulkCsv);

  console.log(`\n✓ Wrote:`);
  console.log(`  ${path.relative(ROOT, jsonPath).replace(/\\/g, "/")}  (source of truth — review this)`);
  console.log(`  ${path.relative(ROOT, bulkCsvPath).replace(/\\/g, "/")}  (Pinterest bulk-upload export — verify format before uploading)`);
  if (!NO_IMAGES) console.log(`  public/pins/*.jpg  (placeholder images — Remi overwrites with final 1000x1500 art, same filenames)`);
  console.log(`\nNothing was published or scheduled. Review -> CEO go -> upload manually (or via Blotato).`);
}

main();
