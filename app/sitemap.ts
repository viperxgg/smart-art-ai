import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { stadSyncSeoPages, stadSyncSeoSlugs } from "@/lib/stadsync-seo";
import { getAbsoluteUrl, siteConfig } from "@/lib/site";

const indexableInternalPaths = [
  "/",
  "/blog",
  "/om-oss",
  "/stadsync-ai",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const localeEntries = siteConfig.locales.flatMap((locale) =>
    indexableInternalPaths.map((pathname) => ({
      url: getAbsoluteUrl(pathname, locale),
      lastModified: new Date(),
      alternates: {
        languages: {
          sv: getAbsoluteUrl(pathname, "sv"),
          en: getAbsoluteUrl(pathname, "en"),
        },
      },
    })),
  );

  const blogEntries = siteConfig.locales.flatMap((locale) =>
    blogPosts.map((post) => ({
      url: getAbsoluteUrl("/blog/[slug]", locale, { slug: post.slug }),
      lastModified: new Date(post.date),
      alternates: {
        languages: {
          sv: getAbsoluteUrl("/blog/[slug]", "sv", { slug: post.slug }),
          en: getAbsoluteUrl("/blog/[slug]", "en", { slug: post.slug }),
        },
      },
    })),
  );

  const stadSyncEntries = siteConfig.locales.flatMap((locale) =>
    stadSyncSeoSlugs.map((slug) => {
      const page = stadSyncSeoPages[locale][slug];
      const svPage = stadSyncSeoPages.sv[slug];
      const enPage = stadSyncSeoPages.en[slug];

      return {
        url: getAbsoluteUrl(page.pathname, locale),
        lastModified: new Date(),
        alternates: {
          languages: {
            sv: getAbsoluteUrl(svPage.pathname, "sv"),
            en: getAbsoluteUrl(enPage.pathname, "en"),
          },
        },
      };
    }),
  );

  return [...localeEntries, ...stadSyncEntries, ...blogEntries];
}
