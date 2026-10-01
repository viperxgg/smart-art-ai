import { MerchantAction } from "@/components/MerchantAction";
import { getMerchantOffers } from "@/lib/merchant-offers";
import { getMerchantOfferPresentation } from "@/lib/merchant-offer-availability";
import { getVerifiedMerchantPrice } from "@/lib/merchant-price";
import { getProductRecord } from "@/lib/selected-product-records";

/** Equal-weight dated choices before the gallery; no commission-based sorting. */
export function CompactMerchantChoices({ productIds, now }: { productIds: readonly string[]; now: number }) {
  return <div className="mt-4 space-y-3" data-first-merchant-choices>{productIds.map(id => {
    const record = getProductRecord(id)!;
    const ml = Number(record.variant.match(/(\d+)\s*ml/i)?.[1]);
    return <div key={id} data-merchant-choice-product={id}>
      {productIds.length > 1 ? <p className="text-xs font-semibold">{record.shortName ?? record.name}{ml ? ` · ${ml} ml` : ""}</p> : null}
      <div className="grid grid-cols-2 gap-2">{getMerchantOffers(id).map(offer => {
        const state = getMerchantOfferPresentation(offer, now);
        const price = offer.price && getVerifiedMerchantPrice(offer.price, now);
        return <div className="min-w-0 text-xs" key={offer.merchantId}>
          <p className="mt-1">{state.outOfStock ? "Slut vid kontroll" : price ? `${price.amount.toLocaleString("sv-SE")} kr` : "Kontrollera pris"} · {offer.availabilityCheckedAt.slice(0, 10)}</p>
          {!state.outOfStock && price && ml ? <p>{(price.amount / ml).toLocaleString("sv-SE", { maximumFractionDigits: 2 })} kr/ml</p> : null}
          <MerchantAction compact href={offer.href} merchant={offer.merchantId} product={id} placement="selected-product-offer" label={state.ctaLabel} direct={offer.linkKind === "direct"} disclosure={`Annons / Reklam för ${offer.merchantName}`} />
          {productIds.length === 1 && offer.priceUnavailableReason ? <p className="mt-1 leading-relaxed">{offer.priceUnavailableReason}</p> : null}
        </div>;
      })}</div>
      {productIds.length === 1 && record.merchantLimitation ? <p className="mt-2 text-xs leading-relaxed">{record.merchantLimitation}</p> : null}
    </div>;
  })}</div>;
}
