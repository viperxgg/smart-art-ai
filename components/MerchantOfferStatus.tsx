import { MerchantPrice } from "@/components/MerchantPrice";
import type { MerchantOffer } from "@/lib/merchant-offers";
import { getMerchantOfferPresentation } from "@/lib/merchant-offer-availability";

export function MerchantOfferStatus({ offer, now }: { offer: MerchantOffer; now?: number }) {
  const presentation = getMerchantOfferPresentation(offer, now);
  if (presentation.outOfStock) {
    return <p className="mt-4 rounded-xl bg-bg p-4 text-sm font-semibold leading-relaxed text-wine" data-merchant-stock="out-of-stock">
      {presentation.stockMessage}
    </p>;
  }
  return offer.price ? <MerchantPrice price={offer.price} /> : null;
}
