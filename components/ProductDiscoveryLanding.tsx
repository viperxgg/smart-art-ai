import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Bookmark,
  Camera,
  Heart,
  Home,
  Music2,
  UserRound,
} from "lucide-react";

import { products } from "@/lib/products";

function getProductPageHref(slug: string) {
  if (slug === "traningsband-4-nivaer") {
    return "/traning/traningsband-naturlatex";
  }

  return `/product/${slug}`;
}

const navItems = [
  { label: "Hem", icon: Home },
  { label: "Elins val", icon: Heart },
  { label: "Sparat", icon: Bookmark },
  { label: "Elin", icon: UserRound },
];

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
            Produkter från TikTok-flödet, nedskalade till det viktigaste:
            varför de känns intressanta, när de passar och var du kan läsa mer.
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

        <section className="mt-10 grid w-full gap-8">
          {products.map((product) => {
            const productHref = getProductPageHref(product.slug);

            return (
            <article
              key={product.slug}
              className="overflow-hidden rounded-[2.4rem] border border-[#f0c8ce] bg-white/56 shadow-[0_30px_90px_rgba(216,131,146,0.17)] backdrop-blur-xl"
            >
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
                  priority={product === products[0]}
                />
                <span className="absolute left-5 top-5 inline-flex min-h-10 items-center gap-2 rounded-full bg-[#c8919b]/90 px-5 text-sm font-black text-white shadow-[0_14px_34px_rgba(120,60,72,0.2)] backdrop-blur">
                  <Heart size={16} fill="currentColor" aria-hidden="true" />
                  Elin valde
                </span>
              </Link>

              <div className="p-6 sm:p-8">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#d7778b]">
                  {product.brand}
                </p>
                <h2 className="mt-3 font-display text-[2.05rem] leading-tight tracking-[-0.025em] text-[#5b3441] sm:text-4xl sm:tracking-[-0.035em]">
                  {product.title}
                </h2>
                <p className="mt-5 text-lg leading-9 text-[#74636a]">
                  {product.summary}
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <Link
                    href={productHref}
                    className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d8788d] to-[#efa4ad] px-6 text-base font-black text-white shadow-[0_18px_42px_rgba(216,120,141,0.28)] transition hover:-translate-y-0.5"
                  >
                    Se Elins koll
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </Link>
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="sponsored nofollow noopener noreferrer"
                    className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-[#d98a99] bg-white/58 px-6 text-base font-black text-[#b06072] transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    Amazon
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
            );
          })}
        </section>

        <nav
          aria-label="Primär navigering"
          className="fixed bottom-4 left-4 right-auto z-20 grid w-[calc(100%-2rem)] max-w-[22.5rem] grid-cols-4 rounded-full border border-[#efc6cc] bg-white/76 p-2 shadow-[0_18px_60px_rgba(122,71,83,0.18)] backdrop-blur-2xl sm:left-1/2 sm:max-w-[39rem] sm:-translate-x-1/2"
        >
          {navItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={index === 0 ? "/" : "#content"}
                className={`flex min-h-14 items-center justify-center gap-2 rounded-full px-2 text-sm font-semibold transition ${
                  index === 0
                    ? "bg-[#ffe4e8] text-[#6b3d4a]"
                    : "text-[#8b737a] hover:bg-[#fff1f3] hover:text-[#6b3d4a]"
                }`}
              >
                <Icon size={20} aria-hidden="true" />
                <span className="hidden min-[430px]:inline">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </section>
    </main>
  );
}
