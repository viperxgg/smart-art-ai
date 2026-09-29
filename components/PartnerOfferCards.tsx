import { MerchantAction } from "@/components/MerchantAction";
import { MerchantOfferStatus } from "@/components/MerchantOfferStatus";
import { getMerchantOfferPresentation } from "@/lib/merchant-offer-availability";
import { getMerchantOffers } from "@/lib/merchant-offers";
import { getProductRecord } from "@/lib/selected-product-records";

export function PartnerOfferCards({ productIds, now }: { productIds: readonly string[]; now: number }) {
  return <div className="mt-6 grid gap-5 sm:grid-cols-2">
    {productIds.flatMap(id => {
      const record = getProductRecord(id)!;
      return getMerchantOffers(id).map(offer => {
        const presentation = getMerchantOfferPresentation(offer, now);
        return <section key={`${id}:${offer.merchantId}`} className="min-w-0 rounded-2xl border border-line bg-surface p-5">
        <h3 className="text-lg font-bold">{record.name} · {offer.merchantName}</h3>
        <p className="mt-2 text-sm text-ink-soft">{record.variant}</p>
        <MerchantOfferStatus offer={offer} now={now} />
        {!presentation.outOfStock && record.memberPrice && offer.merchantId === record.offer.merchantId && Date.parse(record.memberPrice.endsAt) > now ? <p className="mt-3 text-sm font-semibold text-wine">{record.memberPrice.label}: {record.memberPrice.amount.toLocaleString("sv-SE")} kr. Kräver medlemskap; gäller till och med {record.memberPrice.endsAt.slice(0, 10)}.</p> : null}
        {!presentation.outOfStock && offer.priceNote && (!record.campaignEndsAt || Date.parse(record.campaignEndsAt) > now) ? <p className="mt-3 text-xs leading-relaxed">{offer.priceNote}</p> : null}
        {!presentation.outOfStock && record.campaignEndsAt && Date.parse(record.campaignEndsAt) <= now ? <p className="mt-3 text-xs leading-relaxed">Det daterade priset kontrollerades under en avslutad kampanj. Kontrollera dagens pris hos butiken.</p> : null}
        <MerchantAction href={offer.href} merchant={offer.merchantId} product={id} placement="selected-product-offer" label={presentation.ctaLabel} direct={offer.linkKind === "direct"} disclosure={offer.linkKind === "direct" ? "Butikslänk" : `Annons / Reklam för ${offer.merchantName}`} />
      </section>;
      });
    })}
  </div>;
}
