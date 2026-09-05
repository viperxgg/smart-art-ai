import { getPageLastModified } from "@/lib/page-dates";
import { absoluteUrl } from "@/lib/product-schema";
import { siteConfig, socialProfiles } from "@/lib/site";

// Site-wide entity graph: the Organization behind Elins val, its parent
// FRAMFORM, the responsible editor as a Person, the WebSite, and a WebPage
// node per content page. The three @ids below are the only ones — every
// reference to the organisation, site or editor points at these.

export const organizationId = `${siteConfig.url}/#organization`;
export const websiteId = `${siteConfig.url}/#website`;
export const operatorId = `${siteConfig.url}/om-oss#azzam`;

const parentOrganization = {
  "@type": "Organization",
  name: siteConfig.legalName,
  url: siteConfig.companySiteUrl,
  sameAs: [siteConfig.companyLinkedIn],
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.operatorCity,
    addressCountry: "SE",
  },
};

/** The responsible editor. Image is only emitted once the portrait exists. */
export function buildOperatorNode() {
  return {
    "@type": "Person",
    "@id": operatorId,
    name: siteConfig.operatorName,
    jobTitle: siteConfig.operatorRole,
    url: absoluteUrl("/om-oss#azzam"),
    ...(siteConfig.operatorImage
      ? { image: absoluteUrl(siteConfig.operatorImage) }
      : {}),
    sameAs: [siteConfig.operatorLinkedIn],
    worksFor: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.companySiteUrl,
    },
  };
}

export function buildOrganizationNode() {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.name,
    url: siteConfig.url,
    // app/icon.png is 48px; Google wants a logo of at least 112px, so the
    // 1200×630 OG image is the crawlable brand image we have.
    logo: absoluteUrl("/og/og-default.png"),
    email: siteConfig.email,
    description: siteConfig.description,
    sameAs: socialProfiles.map((profile) => profile.href),
    parentOrganization,
    founder: buildOperatorNode(),
    employee: [
      {
        "@type": "Person",
        "@id": operatorId,
        name: siteConfig.operatorName,
      },
    ],
    publishingPrinciples: absoluteUrl("/om-oss"),
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  ...buildOrganizationNode(),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "sv-SE",
  publisher: { "@type": "Organization", "@id": organizationId },
};

export type WebPageSchemaInput = {
  /** Site-relative path of the page (the canonical route). */
  path: string;
  /** Page name, normally the H1. */
  name: string;
};

/**
 * WebPage node for a content page. dateModified is the sitemap date for the
 * route, so it always equals the visible "Uppdaterad" line rendered by
 * components/EditorialMeta.tsx. No datePublished: the sitemap only carries
 * last-modified dates, and a guessed publish date would be worse than none.
 */
export function buildWebPageSchema({ path, name }: WebPageSchemaInput) {
  const url = absoluteUrl(path);
  const lastModified = getPageLastModified(path);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url,
    url,
    name,
    inLanguage: "sv-SE",
    ...(lastModified ? { dateModified: lastModified } : {}),
    isPartOf: { "@type": "WebSite", "@id": websiteId },
    publisher: { "@type": "Organization", "@id": organizationId },
  };
}
