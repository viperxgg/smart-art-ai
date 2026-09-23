import type { MerchantPriceSnapshot } from "@/lib/merchant-price";
import { productRecords, type CanonicalProductRecord, type PartnerMerchantId } from "@/lib/selected-product-records";

export type MerchantOffer = {
  merchantId: PartnerMerchantId;
  merchantName: string;
  productSlug: string;
  productName: string;
  variant: string;
  href: string;
  linkKind?: "affiliate" | "direct";
  priceNote?: string;
  placement: string;
  checkedAt: string;
  availability?: "https://schema.org/InStock" | "https://schema.org/OutOfStock";
  availabilityCheckedAt: string;
  price?: MerchantPriceSnapshot;
};

function projectOffer(record: CanonicalProductRecord): MerchantOffer {
  return {
    merchantId: record.offer.merchantId,
    merchantName: record.offer.merchantName,
    productSlug: record.id,
    productName: record.name,
    variant: record.variant,
    href: record.offer.href,
    ...(record.offer.linkKind ? { linkKind: record.offer.linkKind } : {}),
    ...(record.offer.priceNote ? { priceNote: record.offer.priceNote } : {}),
    placement: record.offer.placement,
    checkedAt: record.offer.checkedAt,
    ...(record.offer.availability ? { availability: record.offer.availability } : {}),
    availabilityCheckedAt: record.offer.availabilityCheckedAt,
    ...(record.offer.price ? { price: record.offer.price } : {}),
  };
}

export const merchantOffers: readonly MerchantOffer[] = productRecords.flatMap(record => [
  projectOffer(record),
  ...(record.additionalOffers ?? []).map(offer => projectOffer({ ...record, offer })),
]);

export function getMerchantOffers(productSlug: string) {
  return merchantOffers.filter(offer => offer.productSlug === productSlug);
}

function requiredOffer(id: string) {
  const offer = merchantOffers.find((candidate) => candidate.productSlug === id);
  if (!offer) throw new Error(`Missing canonical merchant offer: ${id}`);
  return offer;
}

export const k18NordicfeelOffer = requiredOffer("k18-leave-in-50ml");
export const koboKjellOffer = requiredOffer("kobo-clara-bw");
export const selectedOffer1 = requiredOffer("redken-acidic-bonding-leave-in-150ml");
export const selectedOffer2 = requiredOffer("cmf-buds-2-dark-grey");
export const selectedOffer3 = requiredOffer("beauty-of-joseon-propolis-serum");
export const selectedOffer4 = requiredOffer("tapo-c520ws-single");
export const selectedOffer5 = requiredOffer("kerastase-glaze-drops-45ml");
export const selectedOffer6 = requiredOffer("jbl-flip-7-black");
export const selectedOffer7 = requiredOffer("cosrx-snail-96-100ml");
export const selectedOffer8 = requiredOffer("anker-prime-300w-26250mah");
export const selectedOffer9 = requiredOffer("clinisoothe-skin-purifier-100ml");
export const selectedOffer10 = requiredOffer("linocell-wireless-carplay-q1m");
export const lykoOffer1 = requiredOffer("ole-henriksen-pout-strawberry-12ml");
export const lykoOffer2 = requiredOffer("lumene-cc-medium-30ml");
export const lykoOffer3 = requiredOffer("amika-hydro-rush-leave-in-200ml");
export const lykoOffer4 = requiredOffer("la-roche-posay-cicaplast-b5-100ml");
export const lykoOffer5 = requiredOffer("wella-sp-luxeoil-100ml");

export function getMerchantOffer(productSlug: string, merchantId?: string) {
  return merchantOffers.find((offer) => offer.productSlug === productSlug && (!merchantId || offer.merchantId === merchantId));
}
