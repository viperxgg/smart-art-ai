"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

import { ProductCard } from "@/components/ProductCard";
import { SaveProductButton, useSavedProducts } from "@/components/SaveProductButton";
import { products } from "@/lib/products";

export function SavedProductsClient() {
  const { savedSlugs } = useSavedProducts();
  const savedProducts = products.filter((product) => savedSlugs.includes(product.slug));

  if (savedProducts.length === 0) {
    return (
      <section className="rounded-[2.2rem] border border-[#F1D8DD] bg-white/72 p-8 text-center shadow-[0_24px_70px_rgba(185,131,166,0.1)]">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#F9E0E3] text-[#B983A6]">
          <Heart size={28} aria-hidden="true" />
        </div>
        <h1 className="editorial-color-kiss mt-5 font-display text-4xl">
          Inget sparat än
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-[#6f5a64]">
          Du har inte sparat något än – tryck på hjärtat på en produkt du gillar.
        </p>
        <Link
          href="/"
          className="mt-7 inline-flex min-h-14 items-center justify-center rounded-full bg-[#D8A7B1] px-7 font-black text-white transition hover:-translate-y-0.5"
        >
          Till Elins val
        </Link>
      </section>
    );
  }

  return (
    <section>
      <div className="grid gap-7">
        {savedProducts.map((product) => (
          <div key={product.slug} className="grid gap-3">
            <ProductCard product={product} />
            <SaveProductButton
              productSlug={product.slug}
              productTitle={product.title}
              variant="remove"
              className="mx-auto inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#E9CDD3] bg-white/72 px-5 text-sm font-black text-[#9E5E73] transition hover:-translate-y-0.5 hover:bg-white"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
