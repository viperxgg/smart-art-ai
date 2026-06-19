"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SaveProductButton } from "@/components/SaveProductButton";
import { ProductBadges, ScoreBadge } from "@/components/ProductBadges";
import {
  activeProductCategories,
  getProductPageHref,
  getProductsByCategory,
  products,
  type Product,
} from "@/lib/products";
import { getEditorialScore } from "@/lib/scores";

const INITIAL_PRODUCT_COUNT = 6;
const PRODUCT_BATCH_SIZE = 8;

type ProductSection = {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  items: readonly Product[];
};

export function HomeProductSections() {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_PRODUCT_COUNT);
  const sections = useMemo(() => getHomeSections(), []);
  const totalProducts = useMemo(
    () => sections.reduce((count, section) => count + section.items.length, 0),
    [sections],
  );
  const visibleSections = useMemo(() => {
    return sections.map((section, index) => {
      const consumed = sections
        .slice(0, index)
        .reduce((count, current) => count + current.items.length, 0);
      const remaining = Math.max(0, visibleCount - consumed);

      return {
        ...section,
        items: section.items.slice(0, Math.min(section.items.length, remaining)),
      };
    });
  }, [sections, visibleCount]);

  useEffect(() => {
    if (visibleCount >= totalProducts) {
      return;
    }

    const sentinel = sentinelRef.current;
    if (!sentinel) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisibleCount((count) =>
            Math.min(count + PRODUCT_BATCH_SIZE, totalProducts),
          );
        }
      },
      { rootMargin: "900px 0px" },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [totalProducts, visibleCount]);

  return (
    <>
      {visibleSections.map((section) => (
        <ProductRail
          key={section.id}
          id={section.id}
          title={section.title}
          subtitle={section.subtitle}
          href={section.href}
          items={section.items}
        />
      ))}

      {visibleCount < totalProducts ? (
        <div ref={sentinelRef} className="h-8" aria-hidden="true" />
      ) : null}
    </>
  );
}

function getHomeSections(): ProductSection[] {
  const topPicks = [...products]
    .sort(
      (a, b) =>
        (getEditorialScore(b.slug)?.total ?? 0) -
        (getEditorialScore(a.slug)?.total ?? 0),
    )
    .slice(0, 6);

  return [
    {
      id: "elins-toppval",
      title: "Fler toppval",
      subtitle: "De val som just nu får högst redaktionell poäng.",
      href: "/elins-val",
      items: topPicks.slice(1),
    },
    ...activeProductCategories.map((category) => ({
      id: category.slug,
      title: category.label,
      subtitle: category.description,
      href: category.href,
      items: getProductsByCategory(category.slug),
    })),
  ];
}

function ProductRail({
  id,
  title,
  subtitle,
  href,
  items,
}: ProductSection) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-8">
      <div className="flex items-end justify-between gap-3">
        <div className="min-w-0">
          <h2
            id={`${id}-title`}
            className="editorial-color-kiss font-display text-[1.65rem] leading-tight sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-1 max-w-[25rem] text-sm leading-6 text-[#7e6970] sm:max-w-[34rem] sm:text-base sm:leading-7">
            {subtitle}
          </p>
        </div>
        <Link
          href={href}
          className="inline-flex min-h-10 shrink-0 items-center gap-1.5 rounded-full bg-white/64 px-3 text-sm font-black text-[#b06072] shadow-[0_12px_32px_rgba(216,131,146,0.1)] transition hover:-translate-y-0.5 hover:bg-white sm:gap-2 sm:px-4"
        >
          Se alla
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>

      {items.length > 0 ? (
        <div className="-mx-4 mt-3 max-w-[100vw] overflow-x-auto px-4 pb-3 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max snap-x snap-mandatory gap-3 sm:gap-4 lg:grid lg:w-auto lg:grid-cols-3 lg:gap-6">
            {items.map((product) => (
              <div
                key={product.slug}
                className="w-[15.75rem] shrink-0 snap-start min-[390px]:w-[16.5rem] sm:w-[19rem] lg:w-auto"
              >
                <HomeProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

function HomeProductCard({ product }: { product: Product }) {
  const productHref = getProductPageHref(product);
  const score = getEditorialScore(product.slug);

  return (
    <article className="group h-full overflow-hidden rounded-[1.65rem] border border-[#f0cbd1] bg-white/62 shadow-[0_20px_58px_rgba(216,131,146,0.13)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white sm:rounded-[2rem]">
      <div className="relative aspect-square overflow-hidden bg-[#f7e8e8] sm:aspect-[4/3]">
        <Link
          href={productHref}
          className="block h-full w-full"
          aria-label={`Läs mer om ${product.title}`}
        >
          <Image
            src={product.image}
            alt={product.imageAlt}
            width={900}
            height={900}
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 304px, 252px"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            loading="lazy"
            quality={70}
          />
        </Link>
        <div className="absolute left-3 top-3 rounded-full bg-white/86 px-2.5 py-1 text-[0.68rem] font-black text-[#8c5260] shadow-[0_12px_32px_rgba(91,52,65,0.12)] backdrop-blur sm:left-4 sm:top-4 sm:px-3 sm:text-xs">
          Elin valde
        </div>
        <div className="absolute right-3 top-3">
          <SaveProductButton
            productSlug={product.slug}
            productTitle={product.title}
            className="grid size-9 place-items-center rounded-full border border-white/60 bg-white/86 text-[#8c5260] shadow-[0_12px_32px_rgba(91,52,65,0.14)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white sm:size-10"
          />
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-[#d97d91]">
          {product.brand}
        </p>
        <h3 className="mt-2 font-display text-[1.35rem] leading-[1.08] tracking-[-0.02em] sm:text-[1.7rem]">
          <Link href={productHref} className="editorial-color-kiss">
            {product.title}
          </Link>
        </h3>
        <p className="mt-3 text-[13px] leading-5 text-[#7e6970] sm:text-sm sm:leading-6">
          {product.summary}
        </p>
        <ProductBadges badges={product.badges.slice(0, 2)} className="mt-4" />

        <div className="mt-4 flex flex-wrap items-center gap-2 text-[0.68rem] font-black text-[#8b5a66] sm:text-xs">
          {score ? (
            <ScoreBadge score={score} className="text-[0.68rem] sm:text-xs" />
          ) : null}
          <span className="rounded-full bg-white/72 px-3 py-2">Annons</span>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-2 min-[390px]:grid-cols-[1fr_auto]">
          <Link
            href={productHref}
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#d97d91] px-4 text-xs font-black text-white shadow-[0_16px_38px_rgba(217,125,145,0.28)] transition hover:-translate-y-0.5 sm:min-h-11 sm:text-sm"
          >
            Elins koll
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#e8b8c1] bg-white/70 px-4 text-xs font-black text-[#9b5b6a] transition hover:-translate-y-0.5 hover:bg-white sm:min-h-11 sm:text-sm"
            aria-label={`Se ${product.title} på Amazon`}
          >
            Amazon
          </a>
        </div>
      </div>
    </article>
  );
}
