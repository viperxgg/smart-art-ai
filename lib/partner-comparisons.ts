import data from "@/lib/partner-comparison-data.json";
import { createSeoMetadata } from "@/lib/metadata";
import { getProductRecord } from "@/lib/selected-product-records";
import { getVerifiedMerchantPrice } from "@/lib/merchant-price";
import { siteConfig } from "@/lib/site";

export type PartnerComparison = {
  id: string; path: string; title: string; metaTitle: string; description: string;
  answer: string; productIds: string[]; productPaths: string[];
  targetQuery: string; hypothesis: string; publishedAt: string; updatedAt: string;
  fits: string[]; skip: string; rows: string[][];
  sections: { question: string; answer: string }[];
  sources: { label: string; url: string; checkedAt: string; supports: string }[];
  related: string[][];
  visual?: { hero: string; infographic: string; context?: string };
};
export const partnerComparisons = data as PartnerComparison[];
// Server-rendered routes revalidate hourly, like selected product guides.
export function comparisonRenderTime() { return Date.now(); }
export function getPartnerComparison(id: string) {
  const comparison = partnerComparisons.find(item => item.id === id);
  if (!comparison) throw Error(`Unknown partner comparison: ${id}`);
  return comparison;
}
export function partnerComparisonMetadata(page: PartnerComparison) {
  const image = getProductRecord(page.productIds[0])!.image;
  return createSeoMetadata({ title: page.metaTitle, description: page.description,
    url: siteConfig.url + page.path,
    image: page.visual ? { url: siteConfig.url + page.visual.hero, width: 1200, height: 630, alt: page.title }
      : { url: siteConfig.url + image.src, width: image.width, height: image.height, alt: image.alt },
  });
}
export function comparisonSchema(page: PartnerComparison, now = Date.now()) {
  const url = siteConfig.url + page.path;
  const products = page.productIds.map((id, index) => {
    const product = getProductRecord(id)!;
    const offers = [product.offer, ...(product.additionalOffers ?? [])].filter(offer => offer.price && getVerifiedMerchantPrice(offer.price, now)
      && offer.availability && Number.isFinite(Date.parse(offer.availabilityCheckedAt)) && Date.parse(offer.availabilityCheckedAt) <= now
      && offer.availability !== "https://schema.org/OutOfStock"
      && (!product.campaignEndsAt || Date.parse(product.campaignEndsAt) > now || Date.parse(offer.price.checkedAt) > Date.parse(product.campaignEndsAt)))
      .map(offer => ({ "@type": "Offer", url: offer.href, price: offer.price!.amount, priceCurrency: offer.price!.currency,
        availability: offer.availability,
        seller: { "@type": "Organization", name: offer.merchantName },
        ...(product.campaignEndsAt ? { priceValidUntil: product.campaignEndsAt.slice(0, 10) } : {}),
      }));
    return { "@type": "Product", "@id": `${url}#${id}`, name: product.name, description: product.variant,
      url: siteConfig.url + page.productPaths[index], image: siteConfig.url + product.image.src,
      ...(product.gtin ? { gtin13: product.gtin } : {}), ...(offers.length ? { offers } : {}),
    };
  });
  return { "@context": "https://schema.org", "@graph": [
    ...products,
    { "@type": "Article", "@id": `${url}#article`, headline: page.title, description: page.description,
      mainEntityOfPage: url, datePublished: page.publishedAt, dateModified: page.updatedAt, inLanguage: "sv-SE",
      image: page.visual ? siteConfig.url + page.visual.hero : products[0].image,
      author: { "@id": `${siteConfig.url}/#organization` }, publisher: { "@id": `${siteConfig.url}/#organization` },
      about: products.map(product => ({ "@id": product["@id"] })), citation: page.sources.map(source => source.url),
    },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Produktval", item: `${siteConfig.url}/produkter` },
      { "@type": "ListItem", position: 3, name: page.title, item: url },
    ] },
  ] };
}
