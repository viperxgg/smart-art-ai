import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { HomeProduct } from "@/lib/home-products";
import { getPartnerOfferImage } from "@/lib/partner-image-assets";
import { MerchantPrice } from "@/components/MerchantPrice";

export function HomeProductCard({ product, recent = false }: { product: HomeProduct; recent?: boolean }) {
  const { offer } = product;
  const image = getPartnerOfferImage(offer.productSlug, offer.merchantId);
  if (!image || !offer.price) return null;
  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-3xl border border-line bg-surface" data-home-product={offer.productSlug}>
      <div className="flex items-center justify-between gap-3 px-6 pb-3 pt-5">
        <p className="text-xs font-bold uppercase tracking-wider text-wine">{product.category}</p>
        <span className="rounded-full bg-bg px-3 py-1 text-xs font-semibold text-wine">{recent ? "Nytt hos oss" : "Utvalt att läsa om"}</span>
      </div>
      <Link href={product.href} className="mx-5 block rounded-2xl bg-white p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine" aria-label={product.linkLabel}>
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} unoptimized className="h-56 w-full object-contain sm:h-64" />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold text-ink-soft">Hos {offer.merchantName}</p>
        <h3 className="mt-2 font-display text-2xl font-bold leading-tight sm:text-3xl">{product.title}</h3>
        <p className="mt-2 text-sm text-ink-soft">{offer.variant}</p>
        <p className="mt-5 text-sm leading-relaxed">{product.fit}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft"><strong className="font-semibold text-ink">Tänk på: </strong>{product.caveat}</p>
        <Link href={product.href} className="mt-3 inline-flex min-h-11 items-center self-start font-semibold text-wine underline underline-offset-4">{product.linkLabel}</Link>
        <div className="mt-auto">
          <MerchantPrice price={offer.price} />
          <a href={offer.href} rel="sponsored nofollow noopener" data-merchant={offer.merchantId} data-product={offer.productSlug} data-placement={recent ? "home-new-offer" : "home-curated"} className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-wine px-5 py-3 text-center text-sm font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine">
            Se pris hos {offer.merchantName}<ArrowUpRight className="shrink-0" size={18} aria-hidden="true" />
          </a>
          <p className="mt-3 text-xs leading-relaxed text-ink-soft">Annonslänk · {image.credit}</p>
        </div>
      </div>
    </article>
  );
}
