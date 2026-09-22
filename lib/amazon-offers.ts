import { productRecords } from "@/lib/selected-product-records";

export type AmazonOffer = {
  productSlug: string;
  asin: string;
  productName: string;
  variant: string;
  source: string;
  href: string;
  identityCheckedAt: string;
};

export const amazonOffers: readonly AmazonOffer[] = productRecords.flatMap((record) => {
  if (!record.amazon) return [];
  return [{
    productSlug: record.id,
    asin: record.amazon.asin,
    productName: record.amazon.productName,
    variant: record.amazon.variant,
    source: record.amazon.source,
    href: record.amazon.href,
    identityCheckedAt: record.amazon.identityCheckedAt,
  }];
});

export function getAmazonOffer(productSlug: string) {
  return amazonOffers.find((offer) => offer.productSlug === productSlug);
}
