import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getMerchantOffer } from "@/lib/merchant-offers";
import { getSelectedOfferState, getSelectedProduct } from "@/lib/selected-products";
import { getMerchantOfferPresentation } from "@/lib/merchant-offer-availability";
import { coreStylerHandoff, getCoreStylerHandoffHref } from "@/lib/core-styler-handoff";

export function CoreStylerDecision() {
  const product = getSelectedProduct(coreStylerHandoff.product);
  const offer = getMerchantOffer(product.id, coreStylerHandoff.merchant)!;
  const href = getCoreStylerHandoffHref(offer);
  if (!href) return null;
  const { now } = getSelectedOfferState(product);
  const presentation = getMerchantOfferPresentation(offer, now);
  const image = product.images[0];
  return <section aria-label="Kort köpguide" className="mt-5 rounded-2xl border border-line bg-surface p-4 sm:p-5" data-core-decision>
    <div className="flex items-center gap-4">
      <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="80px" className="h-24 w-20 shrink-0 rounded-xl bg-white object-contain p-2" />
      <div>
        <p className="font-bold">Behöver du alla fem?</p>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft">För enbart rundborstfinish kan ett enklare verktyg räcka.</p>
      </div>
    </div>
    <p className="mt-4 text-sm leading-relaxed text-ink-soft"><strong className="text-ink">Tänk på:</strong> Minsta hårlängd är inte verifierad. Vi har inte testat lockarnas hållbarhet.</p>
    <a href={href} rel="sponsored nofollow noopener" data-merchant={offer.merchantId} data-product={product.id} data-placement={coreStylerHandoff.placement}
      className="mt-4 inline-flex min-h-12 w-full scroll-mt-32 scroll-mb-32 items-center justify-center gap-2 rounded-full bg-wine px-5 py-3 text-center font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine">
      {presentation.ctaLabel}<ArrowUpRight size={18} aria-hidden="true" />
    </a>
    <p className="mt-2 text-xs leading-relaxed text-ink-soft">Annonslänk · Kontrollera aktuellt pris, lager och leverans hos Lyko.</p>
    <a href="#butiker" className="mt-2 inline-flex min-h-11 items-center text-sm text-wine underline underline-offset-4">Se senast kontrollerade pris</a>
  </section>;
}
