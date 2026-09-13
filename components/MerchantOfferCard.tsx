import type { MerchantOffer } from "@/lib/merchant-offers";

export function MerchantOfferCard({ offer }: { offer: MerchantOffer }) {
  return (
    <aside aria-label={`Butik för ${offer.productName}`} className="mt-6 rounded-2xl border border-line bg-surface p-5 sm:p-6">
      <p className="text-xs font-semibold text-ink-soft">Annons / Reklam för {offer.merchantName}. Elins val kan få ersättning vid köp via länken.</p>
      <p className="mt-3 font-bold">{offer.productName}</p>
      <p className="mt-1 text-sm text-ink-soft">{offer.variant}</p>
      <a
        href={offer.href}
        rel="sponsored nofollow noopener"
        data-merchant={offer.merchantId}
        data-product={offer.productSlug}
        data-placement={offer.placement}
        className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-wine px-6 py-3 text-center font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
      >Se pris hos {offer.merchantName}</a>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">Kontrollera aktuellt pris, lager och leveransvillkor hos butiken. Varianten kontrollerad <time dateTime={offer.checkedAt}>{offer.checkedAt}</time>.</p>
    </aside>
  );
}
