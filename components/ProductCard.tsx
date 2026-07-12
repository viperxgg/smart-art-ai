"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";

import { getProductPageHref, type Product } from "@/lib/products";
import { getEditorialScore } from "@/lib/scores";
import { ProductBadges, ScoreBadge } from "@/components/ProductBadges";
import { PriceTierBadge } from "@/components/PriceTierBadge";
import { SaveProductButton } from "@/components/SaveProductButton";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
};

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const productHref = getProductPageHref(product);
  const score = getEditorialScore(product.slug);

  return (
    <article className="overflow-hidden rounded-[2.4rem] border border-line bg-surface/80 shadow-[0_30px_90px_rgba(216,131,146,0.17)] backdrop-blur-xl">
      <div className="relative">
        <Link
          href={productHref}
          className="group relative block aspect-[4/3] overflow-hidden bg-[#fdebed]"
          aria-label={`Öppna ${product.title}`}
        >
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 768px) 92vw, 650px"
            className="object-cover transition duration-500 group-hover:scale-[1.025]"
            priority={priority}
            {...(priority ? {} : { loading: "lazy" as const })}
            quality={70}
          />
          <span className="absolute left-5 top-5 inline-flex min-h-10 items-center gap-2 rounded-full bg-wine/90 px-5 text-sm font-black text-bg shadow-[0_14px_34px_rgba(109,60,77,0.28)] backdrop-blur">
            <Heart size={16} fill="currentColor" aria-hidden="true" />
            Elin valde
          </span>
        </Link>
        <SaveProductButton
          productSlug={product.slug}
          productTitle={product.title}
          className="absolute right-5 top-5 grid min-h-11 min-w-11 place-items-center rounded-full bg-surface/90 text-wine shadow-[0_14px_34px_rgba(120,60,72,0.18)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-surface"
        />
      </div>

      <div className="p-6 sm:p-8">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-rose">
          {product.brand}
        </p>
        <h3 className="editorial-color-kiss mt-3 font-display text-[2.05rem] leading-tight tracking-[-0.025em] sm:text-4xl sm:tracking-[-0.035em]">
          {product.title}
        </h3>
        <p className="mt-5 text-lg leading-9 text-ink-soft">
          {product.summary}
        </p>
        <ProductBadges badges={product.badges} className="mt-5" />
        {score ? (
          <ScoreBadge score={score} className="mt-5" />
        ) : null}
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-ink-soft">
          Annons · Amazon-länken är en reklamlänk.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <Link
            href={productHref}
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-wine px-6 text-base font-black text-bg shadow-[0_18px_42px_rgba(109,60,77,0.32)] transition hover:-translate-y-0.5 hover:bg-wine/90"
          >
            Se Elins koll
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-rose/45 bg-surface/60 px-6 text-base font-black text-wine transition hover:-translate-y-0.5 hover:bg-surface"
          >
            Amazon
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="mt-3">
          <PriceTierBadge product={product} showContext />
        </div>
      </div>
    </article>
  );
}
