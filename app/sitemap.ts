import type { MetadataRoute } from "next";

import { sitemapEntries } from "@/lib/sitemap-entries";
import { siteConfig } from "@/lib/site";

// Entries are generated from the app-router filesystem by
// scripts/generate-sitemap.mjs (runs on `prebuild`), so new pages are picked
// up automatically instead of being hand-added here.
export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries.map((entry) => ({
    url: entry.path ? `${siteConfig.url}${entry.path}` : siteConfig.url,
    lastModified: entry.lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
