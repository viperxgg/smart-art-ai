import type { MerchantOffer } from "@/lib/merchant-offers";
import { getMerchantOffer } from "@/lib/merchant-offers";
import { getVerifiedMerchantPrice } from "@/lib/merchant-price";
import { getPartnerOfferImage } from "@/lib/partner-image-assets";
import { productRecords } from "@/lib/selected-product-records";

export type HomeProduct = {
  offer: MerchantOffer;
  category: string;
  title: string;
  href: string;
  linkLabel: string;
  fit: string;
  caveat: string;
  addedAt: string;
  reviewed: boolean;
  available: boolean;
  campaignEndsAt?: string;
};

function projectHomeProduct(record: (typeof productRecords)[number]): HomeProduct | undefined {
  if (!record.home) return undefined;
  const offer = getMerchantOffer(record.id);
  if (!offer) throw new Error(`Missing canonical home offer: ${record.id}`);
  return {
    offer,
    category: record.home.category,
    title: record.home.title,
    href: record.home.href,
    linkLabel: record.home.linkLabel,
    fit: record.home.fit,
    caveat: record.home.caveat,
    addedAt: record.home.addedAt,
    reviewed: record.home.reviewed,
    available: record.home.available,
    ...(record.home.campaignEndsAt ? { campaignEndsAt: record.home.campaignEndsAt } : {}),
  };
}

export const curatedHomeProducts: readonly HomeProduct[] = productRecords
  .filter((record) => record.home?.kind === "curated")
  .map(projectHomeProduct)
  .filter((product): product is HomeProduct => Boolean(product));

export const newHomeOffers: readonly HomeProduct[] = productRecords
  .filter((record) => record.home?.kind === "candidate")
  .map(projectHomeProduct)
  .filter((product): product is HomeProduct => Boolean(product));

export function selectHomeProducts(
  fixed: readonly HomeProduct[],
  candidates: readonly HomeProduct[],
  now = Date.now(),
) {
  const eligible = (product: HomeProduct) => {
    const added = Date.parse(product.addedAt);
    const end = product.campaignEndsAt === undefined ? Infinity : Date.parse(product.campaignEndsAt);
    return product.reviewed && product.available
      && Number.isFinite(added) && added <= now && end > now
      && product.title.trim() && product.fit.trim() && product.caveat.trim()
      && product.linkLabel.trim() && /^\/(?!\/)/.test(product.href)
      && product.offer.price && getVerifiedMerchantPrice(product.offer.price, now)
      && getPartnerOfferImage(product.offer.productSlug, product.offer.merchantId);
  };
  const seen = new Set<string>();
  const take = (products: readonly HomeProduct[]) => products.filter((product) => {
    if (!eligible(product) || seen.has(product.offer.productSlug)) return false;
    seen.add(product.offer.productSlug);
    return true;
  }).slice(0, 2);
  const curated = take(fixed);
  fixed.forEach((product) => seen.add(product.offer.productSlug));
  const recent = take([...candidates].sort((a, b) =>
    Date.parse(b.addedAt) - Date.parse(a.addedAt)
      || a.offer.productSlug.localeCompare(b.offer.productSlug)));
  return { curated, recent };
}
