import Link from "next/link";
import { ArrowUpRight, Camera, Heart, Music2 } from "lucide-react";

import { ProductCard } from "@/components/ProductCard";
import {
  activeProductCategories,
  getProductsByCategory,
} from "@/lib/products";

export function ProductDiscoveryLanding() {
  return (
    <main
      id="content"
      className="min-h-screen w-full max-w-full overflow-hidden bg-[#fff6f6] text-[#5b3441]"
    >
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,214,219,0.85),transparent_30rem),radial-gradient(circle_at_0%_78%,rgba(255,226,232,0.72),transparent_20rem),linear-gradient(90deg,rgba(255,219,224,0.42)_1px,transparent_1px)] bg-[length:auto,auto,4.4rem_4.4rem]" />

      <section className="relative mx-0 w-full max-w-[22.5rem] overflow-hidden px-4 pb-32 pt-8 sm:mx-auto sm:max-w-[44rem] sm:px-8">
        <header className="flex min-w-0 items-center justify-between gap-4">
          <Link
            href="/"
            className="min-w-0 font-display text-[1.75rem] leading-none tracking-[-0.03em] text-[#5b3441] sm:text-[2rem]"
          >
            Elins val
            <span className="ml-2 align-top text-lg text-[#d88392]">✦</span>
          </Link>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href="https://www.instagram.com/elinsorenstyle/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid min-h-9 min-w-9 place-items-center rounded-full bg-[#ffe1e4] text-[#7b4656] shadow-[0_16px_40px_rgba(216,131,146,0.16)] transition hover:-translate-y-0.5 sm:min-h-14 sm:min-w-14"
              aria-label="Instagram"
            >
              <Camera size={18} aria-hidden="true" />
            </a>
            <a
              href="https://www.tiktok.com/@elinsorenlife"
              target="_blank"
              rel="noopener noreferrer"
              className="grid min-h-9 min-w-9 place-items-center rounded-full bg-[#ffe1e4] text-[#7b4656] shadow-[0_16px_40px_rgba(216,131,146,0.16)] transition hover:-translate-y-0.5 sm:min-h-14 sm:min-w-14"
              aria-label="TikTok"
            >
              <Music2 size={18} aria-hidden="true" />
            </a>
          </div>
        </header>

        <nav
          aria-label="Produktkategorier"
          className="mt-7 hidden gap-2 overflow-x-auto pb-1 md:flex"
        >
          {activeProductCategories.map((category) => (
            <Link
              key={category.slug}
              href={category.href}
              className="inline-flex min-h-11 shrink-0 items-center rounded-full border border-[#efc6cc] bg-white/50 px-5 text-sm font-black text-[#7b4656] shadow-[0_12px_32px_rgba(216,131,146,0.12)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
            >
              {category.label}
            </Link>
          ))}
        </nav>

        <div className="mt-12 min-w-0 text-center">
          <div className="mx-auto inline-flex min-h-12 max-w-full items-center gap-3 rounded-full border border-[#efc6cc] bg-white/44 px-5 text-sm font-semibold text-[#a96876] shadow-[0_18px_50px_rgba(216,131,146,0.12)] backdrop-blur sm:px-6 sm:text-base">
            <Heart size={20} aria-hidden="true" />
            <span className="min-w-0">Inte allt. Bara det som fastnar.</span>
          </div>

          <h1 className="mx-auto mt-8 max-w-full text-balance font-display text-[2.85rem] leading-[1.03] tracking-[-0.03em] text-[#5b3441] sm:max-w-[37rem] sm:text-[5.8rem] sm:leading-[0.95] sm:tracking-[-0.045em]">
            <span className="block">Elins</span>
            <span className="block">
              <em className="font-display font-normal italic text-[#d97d91]">
                enkla
              </em>{" "}
              val.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-[33rem] text-balance px-1 text-lg leading-8 text-[#7e6970] sm:text-xl sm:leading-9">
            Handplockade produkter, utvalda efter en enkel princip: mest värde
            för pengarna. Inte allt som hypas på TikTok - bara det som faktiskt
            är värt det.
          </p>
        </div>

        <div className="mx-auto mt-10 w-full max-w-[34rem] rounded-[2rem] border border-[#efc6cc] bg-white/38 p-6 shadow-[0_24px_70px_rgba(216,131,146,0.13)] backdrop-blur-xl">
          <div className="flex items-start gap-5">
            <div className="grid min-h-16 min-w-16 place-items-center rounded-3xl bg-[#ffe0e5] text-[#d87b8d]">
              <Heart size={26} aria-hidden="true" />
            </div>
            <div className="min-w-0 text-left">
              <h2 className="text-xl font-black text-[#6b3d4a]">
                Mindre brus. Mer känsla.
              </h2>
              <p className="mt-2 text-lg leading-8 text-[#7e6970]">
                Varje produkt ska snabbt svara på: “Är det här något jag
                faktiskt skulle använda?”
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-12">
          {activeProductCategories.map((category) => {
            const categoryProducts = getProductsByCategory(category.slug);

            return (
              <section key={category.slug} aria-labelledby={`${category.slug}-title`}>
                <div className="flex items-end justify-between gap-4">
                  <div className="min-w-0">
                    <h2
                      id={`${category.slug}-title`}
                      className="font-display text-4xl leading-tight text-[#5b3441]"
                    >
                      {category.label}
                    </h2>
                    <p className="mt-2 text-base leading-7 text-[#7e6970]">
                      {category.description}
                    </p>
                  </div>
                  <Link
                    href={category.href}
                    className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-white/56 px-4 text-sm font-black text-[#b06072] transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    Se alla
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </div>

                <div className="mt-6 grid w-full gap-8">
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
}
