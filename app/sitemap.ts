import type { MetadataRoute } from "next";

const siteUrl = "https://www.smartartai.se";

const pages = [
  "",
  "/nord-smart-menu",
  "/blog",
  "/blog/best-digital-menu-sweden",
  "/blog/digital-menu-vs-paper-menu",
  "/blog/restaurant-ordering-system-reduce-staff-pressure",
  "/blog/smart-menu-alcohol-compliance-sweden",
  "/blog/qr-menus-help-restaurants-serve-faster",
  "/blog/scandinavian-digital-menu",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/nord-smart-menu" ? 0.9 : 0.7,
  }));
}
