import { siteConfig } from "@/lib/site";
import { sitemapEntries } from "@/lib/sitemap-entries";

// The visible "Uppdaterad" date on a page and the dateModified in its
// structured data both come from here, and here reads the generated sitemap
// entries. lib/sitemap-entries.ts is derived from per-file git history by
// scripts/generate-sitemap.mjs, so the date a visitor sees can never disagree
// with the date Google reads in the sitemap.

const SWEDISH_MONTHS = [
  "januari",
  "februari",
  "mars",
  "april",
  "maj",
  "juni",
  "juli",
  "augusti",
  "september",
  "oktober",
  "november",
  "december",
] as const;

const lastModifiedByPath = new Map(
  sitemapEntries.map((entry) => [entry.path, entry.lastModified]),
);

/**
 * Normalises a route ("/x/", "https://www.smartartai.se/x#y", "/") to the
 * sitemap's path form ("" for the home page).
 */
export function toSitemapPath(path: string) {
  let normalized = path.trim();

  if (normalized.startsWith(siteConfig.url)) {
    normalized = normalized.slice(siteConfig.url.length);
  }

  normalized = normalized.split("#")[0].split("?")[0];

  if (normalized.length > 1 && normalized.endsWith("/")) {
    normalized = normalized.slice(0, -1);
  }

  return normalized === "/" ? "" : normalized;
}

/**
 * ISO date (YYYY-MM-DD) the sitemap reports for a route, or undefined when
 * the route is not part of the sitemap (non-indexed pages).
 */
export function getPageLastModified(path: string) {
  return lastModifiedByPath.get(toSitemapPath(path));
}

/** "2026-09-02" → "2 september 2026". Swedish month names, no time. */
export function formatSwedishDate(isoDate: string) {
  const [year, month, day] = isoDate.split("-").map(Number);
  const monthName = SWEDISH_MONTHS[month - 1];

  if (!year || !monthName || !day) {
    return isoDate;
  }

  return `${day} ${monthName} ${year}`;
}
