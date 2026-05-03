import { defineRouting } from "next-intl/routing";
import { localizedPathnames, siteConfig } from "@/lib/site";

export const routing = defineRouting({
  locales: [...siteConfig.locales],
  defaultLocale: siteConfig.defaultLocale,
  localePrefix: "as-needed",
  localeDetection: false,
  pathnames: localizedPathnames,
});
