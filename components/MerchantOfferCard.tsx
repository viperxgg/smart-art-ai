import type { MerchantOffer } from "@/lib/merchant-offers";
import Image from "next/image";
import { getPartnerOfferImage } from "@/lib/partner-image-assets";

export function MerchantOfferCard({ offer }: { offer: MerchantOffer }) {
  const image = getPartnerOfferImage(offer.productSlug, offer.merchantId);
  return (
    <aside aria-label={`Butik för ${offer.productName}`} className="mt-6 rounded-2xl border border-line bg-surface p-5 sm:p-6">
      <p className="text-xs font-semibold text-ink-soft">Annons / Reklam för {offer.merchantName}. Elins val kan få ersättning vid köp via länken.</p>
      <div className={`mt-5 grid items-center gap-6 ${image ? "sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]" : ""}`}>
      {image ? <figure className="min-w-0">
        <div className="rounded-xl bg-white p-5">
          <Image src={image.src} alt={image.alt} width={image.width} height={image.height} unoptimized className="mx-auto h-64 w-full object-contain sm:h-80" />
        </div>
        <figcaption className="mt-2 text-xs leading-relaxed text-ink-soft">{image.credit}</figcaption>
      </figure> : null}
      <div className="min-w-0">
      <p className="font-display text-2xl font-bold">{offer.productName}</p>
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
      </div>
      </div>
    </aside>
  );
}
