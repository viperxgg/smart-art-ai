"use client";

import { getApprovedProductImage } from "@/lib/product-image-approvals";
import { DecisionProductImage } from "@/components/DecisionProductImage";


import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { filterProducts } from "@/lib/product-search";
import { getProductImageNote } from "@/lib/product-image-notes";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, Search, X } from "lucide-react";

import { ElinCtaButton } from "@/components/elin/ElinCtaButton";
import { ScoreBadge } from "@/components/ProductBadges";
import {
  getProductPageHref,
  productCategories,
  type Product,
} from "@/lib/products";
import { ProductDecisionPreview } from "@/components/ProductDecisionPreview";
import { getProductDecision } from "@/lib/product-decisions";
import { getEditorialScore } from "@/lib/scores";

const categoryLabel = new Map(
  productCategories.map((category) => [category.slug, category.label]),
);

const popularTerms = [
  "serum",
  "fläkt",
  "hårvård",
  "yogamatta",
  "hantlar",
  "resa",
  "solkräm",
  "massage",
];

export function ProductSearch() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";

  const [query, setQuery] = useState(initialQuery);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => filterProducts(query), [query]);
  const trimmed = query.trim();

  // Håll adressfältet i synk så en sökning går att dela – utan sidladdning.
  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams();
      if (trimmed) params.set("q", trimmed);
      const nextUrl = params.toString() ? `/sok?${params.toString()}` : "/sok";
      window.history.replaceState(null, "", nextUrl);
    }, 250);

    return () => clearTimeout(timeout);
  }, [trimmed]);

  return (
    <div>
      <form
        role="search"
        onSubmit={(event) => event.preventDefault()}
        className="relative"
      >
        <label htmlFor="product-search" className="sr-only">
          Sök bland Elins produkter
        </label>
        <Search
          size={22}
          aria-hidden="true"
          className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-wine"
        />
        <input
          id="product-search"
          ref={inputRef}
          type="search"
          inputMode="search"
          autoComplete="off"
          autoFocus
          enterKeyHint="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Sök på produkt, märke eller kategori…"
          className="min-h-16 w-full rounded-full border border-line bg-surface/80 py-4 pl-14 pr-14 text-lg font-semibold text-ink shadow-[0_18px_50px_rgba(216,131,146,0.12)] outline-none backdrop-blur-xl transition placeholder:text-ink-soft focus:border-rose focus:bg-surface"
        />
        {query ? (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            aria-label="Rensa sökningen"
            className="absolute right-4 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-rose/15 text-wine transition hover:bg-rose/20"
          >
            <X size={18} aria-hidden="true" />
          </button>
        ) : null}
      </form>

      {trimmed ? (
        <p className="mt-5 text-sm font-bold text-ink-soft" aria-live="polite">
          {results.length > 0
            ? `${results.length} ${
                results.length === 1 ? "produkt matchar" : "produkter matchar"
              } “${trimmed}”`
            : `Inga träffar för “${trimmed}”`}
        </p>
      ) : (
        <div className="mt-6">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-rose">
            Populära sökningar
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {popularTerms.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => {
                  setQuery(term);
                  inputRef.current?.focus();
                }}
                className="inline-flex min-h-10 items-center rounded-full border border-line bg-surface/70 px-4 text-sm font-black text-wine shadow-[0_12px_32px_rgba(216,131,146,0.1)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-surface"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}

      {trimmed && results.length > 0 ? (
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((product) => (
            <SearchResultCard key={product.slug} product={product} />
          ))}
        </div>
      ) : null}

      {trimmed && results.length === 0 ? <NoResults query={trimmed} /> : null}
    </div>
  );
}

function SearchResultCard({ product }: { product: Product }) {
  const approvedImage = getApprovedProductImage(product.slug, product.image);
  const href = getProductPageHref(product);
  const decision = getProductDecision(product.slug);
  const title = decision?.options[0].model ?? product.title;
  const score = getEditorialScore(product.slug);
  const label = categoryLabel.get(product.category) ?? product.category;

  return (
    <article className="group flex flex-col overflow-hidden rounded-[1.8rem] border border-line bg-surface/62 shadow-[0_20px_58px_rgba(216,131,146,0.1)] transition hover:-translate-y-1 hover:bg-surface">
      {approvedImage ? <Link
        href={href}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-rose/8"
        aria-label={`Öppna ${title}`}
      >
        <Image
          src={product.image}
          alt={approvedImage.alt}
          fill
          sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 92vw"
          className="object-contain"
          loading="lazy"
          quality={70}
        />
        <span className="absolute left-3 top-3 rounded-full bg-surface/88 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.12em] text-wine shadow-[0_10px_28px_rgba(120,60,72,0.14)] backdrop-blur">
          {label}
        </span>
      </Link> : null}
      {approvedImage && getProductImageNote(product) ? <p className="border-t border-line px-5 py-3 text-sm leading-relaxed text-ink-soft">{getProductImageNote(product)}</p> : null}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-rose">
          {label} · {product.brand}
        </p>
        <h2 className="editorial-color-kiss mt-2 font-display text-2xl leading-tight">
          <Link href={href}>{title}</Link>
        </h2>
        <DecisionProductImage productSlug={product.slug} model={title} />
        <ProductDecisionPreview slug={product.slug} />
        {score ? <ScoreBadge score={score} className="mt-4" /> : null}
        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-black text-wine"
        >
          {decision ? "Läs beslutet och källorna" : "Öppna produktinformationen"}
          <ArrowUpRight
            size={16}
            aria-hidden="true"
            className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </article>
  );
}

function NoResults({ query }: { query: string }) {
  return (
    <div className="mt-6 rounded-[1.8rem] border border-line bg-surface/62 p-6 shadow-[0_20px_58px_rgba(216,131,146,0.1)] sm:p-8">
      <h2 className="editorial-color-kiss font-display text-2xl leading-tight">
        Elin har inte den här ännu
      </h2>
      <p className="mt-3 text-sm leading-6 text-ink-soft">
        Vi hittade inget som matchar “{query}”. Prova ett kortare ord, ett märke
        eller en kategori – eller fråga Elin direkt.
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        <ElinCtaButton
          prompt={`Jag sökte efter "${query}" men hittade inget – vad rekommenderar du?`}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-wine px-5 text-sm font-black text-bg shadow-[0_16px_40px_rgba(109,60,77,0.28)] transition hover:-translate-y-0.5 hover:bg-wine/90"
        >
          Fråga Elin
        </ElinCtaButton>
        <Link
          href="/kategorier"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-rose bg-surface/70 px-5 text-sm font-black text-wine transition hover:-translate-y-0.5 hover:bg-surface"
        >
          Bläddra kategorier
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
