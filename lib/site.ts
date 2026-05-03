export const siteConfig = {
  name: "Smart Art AI",
  legalName: "Smart Art AI",
  url: "https://www.smartartai.se",
  defaultLocale: "sv",
  locales: ["sv", "en"] as const,
  demo: {
    guestUrl: "https://codex-delta-liart.vercel.app/",
    adminLoginUrl: "https://codex-delta-liart.vercel.app/login?next=%2Fadmin",
    kitchenLoginUrl: "https://codex-delta-liart.vercel.app/login?next=%2Fkitchen",
  },
} as const;

export type AppLocale = (typeof siteConfig.locales)[number];
export const primaryRestaurantPage = "/om-oss" as const;

export const localizedPathnames = {
  "/": "/",
  "/om-oss": {
    sv: "/nord-smart-menu",
    en: "/nord-smart-menu",
  },
  "/blog": "/blog",
  "/blog/[slug]": "/blog/[slug]",
  "/smart-menu": "/smart-menu",
  "/stadsync-ai": "/stadsync-ai",
  "/stadsync-ai/rut-automation": "/stadsync-ai/rut-automation",
  "/stadsync-ai/stadforetag-system": "/stadsync-ai/stadforetag-system",
  "/stadsync-ai/ai-oversattning-stadpersonal": "/stadsync-ai/ai-oversattning-stadpersonal",
  "/stadsync-ai/gdpr-rut-stadforetag": "/stadsync-ai/gdpr-rut-stadforetag",
  "/stadsync-ai/rut-xml-skatteverket": "/stadsync-ai/rut-xml-skatteverket",
  "/stadsync-ai/affarssystem-stadforetag": "/stadsync-ai/affarssystem-stadforetag",
  "/stadsync-ai/schemalaggning-stadforetag": "/stadsync-ai/schemalaggning-stadforetag",
  "/stadsync-ai/tidrapportering-stadforetag": "/stadsync-ai/tidrapportering-stadforetag",
  "/stadsync-ai/personnummer-gdpr-rut": "/stadsync-ai/personnummer-gdpr-rut",
  "/stadsync-ai/jamfor-system-stadforetag": "/stadsync-ai/jamfor-system-stadforetag",
  "/stadsync-ai/priser": "/stadsync-ai/priser",
  "/restaurant-digital-menu": {
    sv: "/digital-meny-restaurang",
    en: "/digital-menu-restaurants",
  },
  "/restaurant-qr-menu": {
    sv: "/qr-meny-restaurang",
    en: "/qr-menu-restaurant",
  },
  "/restaurant-ordering-system": {
    sv: "/restaurang-bestallningssystem",
    en: "/restaurant-ordering-system",
  },
  "/restaurant-digital-menu-sweden": {
    sv: "/digital-meny-sverige",
    en: "/digital-menu-sweden",
  },
  "/demo/admin": "/demo/admin",
  "/demo/kitchen": "/demo/kitchen",
  "/demo/menu/[restaurant]": "/demo/menu/[restaurant]",
} as const;

export type InternalPathname = keyof typeof localizedPathnames;
export type DemoRouteKind = "menu" | "admin" | "kitchen";

function fillDynamicParams(pathname: string, params?: Record<string, string>) {
  if (!params) {
    return pathname;
  }

  return Object.entries(params).reduce((result, [key, value]) => {
    return result.replace(`[${key}]`, encodeURIComponent(value));
  }, pathname);
}

export function getLocalePrefix(locale: AppLocale) {
  return locale === "en" ? "/en" : "";
}

export function getLocalizedPathname(
  pathname: InternalPathname,
  locale: AppLocale,
  params?: Record<string, string>,
) {
  const config = localizedPathnames[pathname];
  const localized =
    typeof config === "string" ? config : config[locale] ?? config[siteConfig.defaultLocale];
  const filled = fillDynamicParams(localized, params);

  if (filled === "/") {
    return getLocalePrefix(locale) || "/";
  }

  return `${getLocalePrefix(locale)}${filled}`;
}

export function getAbsoluteUrl(
  pathname: InternalPathname,
  locale: AppLocale,
  params?: Record<string, string>,
) {
  const localizedPath = getLocalizedPathname(pathname, locale, params);
  return new URL(localizedPath, siteConfig.url).toString();
}

export function getLocalizedHref(
  pathname: InternalPathname,
  locale: AppLocale,
  params?: Record<string, string>,
) {
  return getLocalizedPathname(pathname, locale, params);
}

export function getAlternateLocale(locale: AppLocale): AppLocale {
  return locale === "sv" ? "en" : "sv";
}

export function resolveMarketingHref(href: string, locale: AppLocale) {
  if (href in localizedPathnames) {
    return getLocalizedHref(href as InternalPathname, locale);
  }

  return href;
}

export function getDemoMenuHref(
  locale: AppLocale,
  options?: {
    restaurant?: string;
    table?: string;
  },
) {
  void locale;
  void options;

  return siteConfig.demo.guestUrl;
}

export function getDemoHref(locale: AppLocale, kind: DemoRouteKind) {
  if (kind === "menu") {
    return getDemoMenuHref(locale);
  }

  if (kind === "admin") {
    return siteConfig.demo.adminLoginUrl;
  }

  return siteConfig.demo.kitchenLoginUrl;
}

function stripLocalePrefix(pathname: string) {
  if (pathname === "/en") {
    return "/";
  }

  if (pathname.startsWith("/en/")) {
    return pathname.slice(3);
  }

  return pathname;
}

export function switchConcretePathname(pathname: string, locale: AppLocale) {
  const normalizedPathname = stripLocalePrefix(pathname);

  if (normalizedPathname === "/" || normalizedPathname === "/blog" || normalizedPathname.startsWith("/blog/")) {
    return locale === "en"
      ? normalizedPathname === "/"
        ? "/en"
        : `/en${normalizedPathname}`
      : normalizedPathname;
  }

  const staticMappings = [
    localizedPathnames["/om-oss"],
    localizedPathnames["/smart-menu"],
    localizedPathnames["/stadsync-ai"],
    localizedPathnames["/restaurant-digital-menu"],
    localizedPathnames["/restaurant-qr-menu"],
    localizedPathnames["/restaurant-ordering-system"],
    localizedPathnames["/restaurant-digital-menu-sweden"],
  ];

  for (const mapping of staticMappings) {
    if (typeof mapping === "string") {
      continue;
    }

    if (normalizedPathname === mapping.sv || normalizedPathname === mapping.en) {
      return locale === "en" ? `/en${mapping.en}` : mapping.sv;
    }
  }

  return locale === "en"
    ? normalizedPathname === "/"
      ? "/en"
      : `/en${normalizedPathname}`
    : normalizedPathname;
}
