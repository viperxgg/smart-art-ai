// Exact variants checked on Amazon.se. Links validated in Associates Link Checker.
// These are link-only offers: manual page observations are not publishable price
// snapshots. Numeric Amazon prices need an authorized API and its freshness rules.
export type AmazonOffer = {
  productSlug: string;
  asin: string;
  productName: string;
  variant: string;
  source: string;
  href: string;
  identityCheckedAt: string;
};

export const amazonOffers: readonly AmazonOffer[] = [
  {
    productSlug: "k18-leave-in-50ml",
    asin: "B0961ZS96M",
    productName: "K18 Leave-In Molecular Repair Hair Mask",
    variant: "50 ml · en flaska",
    source: "https://www.amazon.se/dp/B0961ZS96M",
    href: "https://www.amazon.se/dp/B0961ZS96M?tag=azzamkhalaf-21",
    identityCheckedAt: "2026-09-14",
  },
  {
    productSlug: "kobo-clara-bw",
    asin: "B0CZXYV8GT",
    productName: "Kobo Clara BW",
    variant: "6 tum · 16 GB · svart · svartvit skärm",
    source: "https://www.amazon.se/dp/B0CZXYV8GT",
    href: "https://www.amazon.se/dp/B0CZXYV8GT?tag=azzamkhalaf-21",
    identityCheckedAt: "2026-09-14",
  },
];

export function getAmazonOffer(productSlug: string) {
  return amazonOffers.find((offer) => offer.productSlug === productSlug);
}
