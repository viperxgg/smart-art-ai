import { MerchantPrice } from "@/components/MerchantPrice";
import { getMerchantOffers } from "@/lib/merchant-offers";
import { getProductRecord } from "@/lib/selected-product-records";

export function PartnerOfferCards({ productIds, now }: { productIds: readonly string[]; now: number }) {
  return <div className="mt-6 grid gap-5 sm:grid-cols-2">
    {productIds.flatMap(id => {
      const record = getProductRecord(id)!;
      return getMerchantOffers(id).map(offer => <section key={`${id}:${offer.merchantId}`} className="min-w-0 rounded-2xl border border-line bg-surface p-5">
        <h3 className="text-lg font-bold">{record.name} · {offer.merchantName}</h3>
        <p className="mt-2 text-sm text-ink-soft">{record.variant}</p>
        {offer.price ? <MerchantPrice price={offer.price} /> : null}
        {record.memberPrice && offer.merchantId === record.offer.merchantId && Date.parse(record.memberPrice.endsAt) > now ? <p className="mt-3 text-sm font-semibold text-wine">{record.memberPrice.label}: {record.memberPrice.amount.toLocaleString("sv-SE")} kr. Kräver medlemskap; gäller till och med {record.memberPrice.endsAt.slice(0, 10)}.</p> : null}
        {offer.priceNote && (!record.campaignEndsAt || Date.parse(record.campaignEndsAt) > now) ? <p className="mt-3 text-xs leading-relaxed">{offer.priceNote}</p> : null}
        {record.campaignEndsAt && Date.parse(record.campaignEndsAt) <= now ? <p className="mt-3 text-xs leading-relaxed">Det daterade priset kontrollerades under en avslutad kampanj. Kontrollera dagens pris hos butiken.</p> : null}
        <a className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-wine px-4 py-3 text-center font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine" href={offer.href} rel={offer.linkKind === "direct" ? "nofollow noopener" : "sponsored nofollow noopener"} data-merchant={offer.merchantId} data-product={id} data-placement="selected-product-offer">Se pris hos {offer.merchantName}</a>
        <p className="mt-2 text-xs text-ink-soft">{offer.linkKind === "direct" ? "Butikslänk" : `Annons / Reklam för ${offer.merchantName}`}</p>
      </section>);
    })}
  </div>;
}
