import type { Metadata } from "next";
import { getAbsoluteUrl, type AppLocale, type InternalPathname, siteConfig } from "@/lib/site";

interface BuildMetadataParams {
  locale: AppLocale;
  pathname: InternalPathname;
  title: string;
  description: string;
  params?: Record<string, string>;
  keywords?: string[];
  type?: "website" | "article";
  noIndex?: boolean;
}

export function buildMetadata({
  locale,
  pathname,
  title,
  description,
  params,
  keywords,
  type = "website",
  noIndex = false,
}: BuildMetadataParams): Metadata {
  const url = getAbsoluteUrl(pathname, locale, params);
  const svUrl = getAbsoluteUrl(pathname, "sv", params);
  const enUrl = getAbsoluteUrl(pathname, "en", params);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: {
        sv: svUrl,
        en: enUrl,
        "x-default": svUrl,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: locale === "sv" ? "sv_SE" : "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          nocache: true,
        }
      : {
          index: true,
          follow: true,
        },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
    email: "hello@smartartai.se",
    areaServed: "SE",
    sameAs: [siteConfig.url],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: ["sv-SE", "en"],
  };
}

export function getServiceSchema({
  locale,
  name,
  description,
  serviceType,
  pathname,
}: {
  locale: AppLocale;
  name: string;
  description: string;
  serviceType: string;
  pathname: InternalPathname;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    name,
    description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "Sweden",
    },
    availableLanguage: locale === "sv" ? ["sv-SE", "en"] : ["en", "sv-SE"],
    url: getAbsoluteUrl(pathname, locale),
  };
}

export function getFaqSchema(faqItems: ReadonlyArray<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getArticleSchema({
  locale,
  title,
  description,
  datePublished,
  pathname,
  slug,
}: {
  locale: AppLocale;
  title: string;
  description: string;
  datePublished: string;
  pathname: InternalPathname;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    inLanguage: locale === "sv" ? "sv-SE" : "en",
    mainEntityOfPage: getAbsoluteUrl(pathname, locale, { slug }),
  };
}

export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
