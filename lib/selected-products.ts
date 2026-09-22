import { getMerchantOffer } from "@/lib/merchant-offers";
import { getVerifiedMerchantPrice } from "@/lib/merchant-price";
import { createSeoMetadata } from "@/lib/metadata";
import { selectedProductRecords, type PartnerMerchantId, type SelectedProductRecord } from "@/lib/selected-product-records";
import { siteConfig } from "@/lib/site";

export type SelectedProduct = Omit<SelectedProductRecord, "selected" | "offer" | "image" | "amazon" | "home"> & {
  merchantId: PartnerMerchantId;
  images: { src: string; width: number; height: number; alt: string; credit: string }[];
};

export const selectedProducts: readonly SelectedProduct[] = selectedProductRecords.map((record) => {
  const excluded = new Set(["selected", "offer", "image", "amazon", "home"]);
  const editorial = Object.fromEntries(Object.entries(record).filter(([key]) => !excluded.has(key))) as unknown as Omit<SelectedProductRecord, "selected" | "offer" | "image" | "amazon" | "home">;
  return {
    ...editorial,
    merchantId: record.offer.merchantId,
    images: [{ src: record.image.src, width: record.image.width, height: record.image.height, alt: record.image.alt, credit: record.image.credit }],
  };
});

export function getSelectedProduct(id: string): SelectedProduct {
  const product = selectedProducts.find(product => product.id === id);
  if (!product) throw new Error(`Unknown selected product: ${id}`);
  return product;
}

export function selectedProductMetadata(product: SelectedProduct) {
  const image = product.images[0];
  return createSeoMetadata({
    title: product.metaTitle, description: product.description,
    url: `${siteConfig.url}${product.path}`, type: "article",
    image: { url: `${siteConfig.url}${image.src}`, width: image.width, height: image.height, alt: image.alt },
  });
}

// Server-rendered pages revalidate hourly, including time-bounded campaign labels.
export function getSelectedOfferState(product: SelectedProduct, now = Date.now()) {
  return {
    now,
    campaignActive: Boolean(product.campaignEndsAt && Date.parse(product.campaignEndsAt) > now),
  };
}

// A missed weekly review preserves the dated display. An ended campaign cannot
// remain an actionable structured Offer unless a later observation confirms it.
export function hasCurrentStructuredPrice(product: SelectedProduct, now = Date.now()) {
  const price = getMerchantOffer(product.id)?.price;
  if (!price || !getVerifiedMerchantPrice(price, now)) return false;
  return !product.campaignEndsAt || Date.parse(product.campaignEndsAt) > now
    || Date.parse(price.checkedAt) > Date.parse(product.campaignEndsAt);
}

export function selectedProductSchema(product: SelectedProduct, now = Date.now()) {
  const url = `${siteConfig.url}${product.path}`;
  const heading = product.heading ?? product.shortName;
  const offer = getMerchantOffer(product.id)!;
  const hasPrice = hasCurrentStructuredPrice(product, now);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product", "@id": `${url}#product`, url,
        name: product.name, description: product.answer,
        brand: { "@type": "Brand", name: product.brand },
        ...(product.gtin ? { gtin13: product.gtin } : {}),
        image: product.images.map(image => `${siteConfig.url}${image.src}`),
        ...(hasPrice && offer.price ? { offers: {
          "@type": "Offer", url: offer.href, price: offer.price.amount,
          priceCurrency: offer.price.currency,
          seller: { "@type": "Organization", name: offer.merchantName },
          ...(product.campaignEndsAt && Date.parse(offer.price.checkedAt) <= Date.parse(product.campaignEndsAt)
            ? { priceValidUntil: product.campaignEndsAt.slice(0, 10) } : {}),
        } } : {}),
      },
      {
        "@type": "Article", "@id": `${url}#article`, headline: heading,
        mainEntityOfPage: url, inLanguage: "sv-SE", dateModified: product.updatedAt,
        description: product.description, about: { "@id": `${url}#product` },
        image: `${siteConfig.url}${product.images[0].src}`,
        author: { "@id": `${siteConfig.url}/#organization` },
        publisher: { "@id": `${siteConfig.url}/#organization` },
        citation: product.sources.map(source => source.url),
      },
      {
        "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Hem", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Produktval", item: `${siteConfig.url}/produkter` },
          { "@type": "ListItem", position: 3, name: heading, item: url },
        ],
      },
    ],
  };
}
