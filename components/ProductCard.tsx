"use client";

import { getApprovedProductImage } from "@/lib/product-image-approvals";


import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { getProductPageHref, type Product } from "@/lib/products";
import { getEditorialScore } from "@/lib/scores";
import { ScoreBadge } from "@/components/ProductBadges";
import { ProductDecisionPreview } from "@/components/ProductDecisionPreview";
import { getProductDecision } from "@/lib/product-decisions";
import { SaveProductButton } from "@/components/SaveProductButton";
import { getProductImageNote } from "@/lib/product-image-notes";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
};

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const productHref = getProductPageHref(product);
  const score = getEditorialScore(product.slug);
  const decision = getProductDecision(product.slug);
  const title = decision?.options[0].model ?? product.title;
  const approvedImage = getApprovedProductImage(product.slug, product.image);
  const imageNote = getProductImageNote(product);

  return (
    <article className="overflow-hidden rounded-[2.4rem] border border-line bg-surface/80 shadow-[0_30px_90px_rgba(216,131,146,0.17)] backdrop-blur-xl">
      <div className={approvedImage ? "relative" : "flex justify-end px-6 pt-5 sm:px-8"}>
        {approvedImage ? <Link
          href={productHref}
          className="group relative block aspect-[4/3] overflow-hidden bg-[#fdebed]"
          aria-label={`Öppna ${title}`}
        >
          <Image
            src={product.image}
            alt={approvedImage.alt}
            fill
            sizes="(max-width: 768px) 92vw, 650px"
            className="object-contain"
            priority={priority}
            {...(priority ? {} : { loading: "lazy" as const })}
            quality={70}
          />
        </Link> : null}
        <SaveProductButton
          productSlug={product.slug}
          productTitle={title}
          className={`${approvedImage ? "absolute right-5 top-5" : ""} grid min-h-11 min-w-11 place-items-center rounded-full bg-surface/90 text-wine shadow-[0_14px_34px_rgba(120,60,72,0.18)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-surface`}
        />
      </div>
      {approvedImage && imageNote ? <p className="border-t border-line px-6 py-3 text-sm leading-relaxed text-ink-soft sm:px-8">{imageNote}</p> : null}

      <div className="p-6 sm:p-8">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-rose">
          {product.brand}
        </p>
        <h3 className="editorial-color-kiss mt-3 font-display text-[2.05rem] leading-tight tracking-[-0.025em] sm:text-4xl sm:tracking-[-0.035em]">
          {title}
        </h3>
        <ProductDecisionPreview slug={product.slug} />
        {score ? (
          <ScoreBadge score={score} className="mt-5" />
        ) : null}
        <div className="mt-5">
          <Link
            href={productHref}
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-wine px-6 text-base font-black text-bg shadow-[0_18px_42px_rgba(109,60,77,0.32)] transition hover:-translate-y-0.5 hover:bg-wine/90"
          >
            {decision ? "Läs beslutet och källorna" : "Öppna produktinformationen"}
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
