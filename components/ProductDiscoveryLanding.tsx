import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera, Heart, Mail, Music2 } from "lucide-react";

import { SaveProductButton } from "@/components/SaveProductButton";
import {
  activeProductCategories,
  getProductPageHref,
  getProductsByCategory,
  products,
  type Product,
} from "@/lib/products";
import { getEditorialScore } from "@/lib/scores";

const topPicks = [...products]
  .sort(
    (a, b) =>
      (getEditorialScore(b.slug)?.total ?? 0) -
      (getEditorialScore(a.slug)?.total ?? 0),
  )
  .slice(0, 6);

export function ProductDiscoveryLanding() {
  return (
    <main
      id="content"
      className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#fff6f6] text-[#5b3441]"
    >
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,214,219,0.85),transparent_30rem),radial-gradient(circle_at_0%_78%,rgba(255,226,232,0.72),transparent_20rem),linear-gradient(90deg,rgba(255,219,224,0.42)_1px,transparent_1px)] bg-[length:auto,auto,4.4rem_4.4rem]" />

      <section className="relative mx-auto box-border w-full max-w-[100vw] min-w-0 overflow-hidden px-4 pb-24 pt-6 sm:max-w-[44rem] sm:px-8 lg:max-w-6xl">
        <header className="flex min-w-0 items-center justify-between gap-2">
          <Link
            href="/"
            className="min-w-0 shrink font-display text-[1.45rem] leading-none tracking-[-0.01em] text-[#5b3441] sm:text-[2rem] sm:tracking-[-0.03em]"
          >
            Elins val
            <span className="ml-1 align-top text-base text-[#d88392] sm:ml-2 sm:text-lg">
              *
            </span>
          </Link>

          <div className="flex shrink-0 items-center gap-1 sm:gap-3">
            <Link
              href="/kontakt"
              className="grid size-9 place-items-center rounded-full bg-[#ffe1e4] text-[#7b4656] shadow-[0_16px_40px_rgba(216,131,146,0.16)] transition hover:-translate-y-0.5 sm:size-14"
              aria-label="Kontakta oss"
            >
              <Mail className="size-4 sm:size-[18px]" aria-hidden="true" />
            </Link>
            <a
              href="https://www.instagram.com/elinsorenstyle/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid size-9 place-items-center rounded-full bg-[#ffe1e4] text-[#7b4656] shadow-[0_16px_40px_rgba(216,131,146,0.16)] transition hover:-translate-y-0.5 sm:size-14"
              aria-label="Instagram"
            >
              <Camera className="size-4 sm:size-[18px]" aria-hidden="true" />
            </a>
            <a
              href="https://www.tiktok.com/@elinsorenlife"
              target="_blank"
              rel="noopener noreferrer"
              className="grid size-9 place-items-center rounded-full bg-[#ffe1e4] text-[#7b4656] shadow-[0_16px_40px_rgba(216,131,146,0.16)] transition hover:-translate-y-0.5 sm:size-14"
              aria-label="TikTok"
            >
              <Music2 className="size-4 sm:size-[18px]" aria-hidden="true" />
            </a>
          </div>
        </header>

        <nav
          aria-label="Produktkategorier"
          className="mt-6 w-full max-w-full min-w-0 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="inline-flex min-w-max max-w-none gap-2">
            {activeProductCategories.map((category) => (
              <Link
                key={category.slug}
                href={`#${category.slug}`}
                className="inline-flex min-h-11 shrink-0 items-center rounded-full border border-[#efc6cc] bg-white/64 px-5 text-sm font-black text-[#7b4656] shadow-[0_12px_32px_rgba(216,131,146,0.12)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
              >
                {category.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="mt-9 w-full min-w-0 text-center sm:mt-12">
          <div className="mx-auto inline-flex min-h-12 max-w-full items-center gap-3 rounded-full border border-[#efc6cc] bg-white/48 px-5 text-sm font-semibold text-[#a96876] shadow-[0_18px_50px_rgba(216,131,146,0.12)] backdrop-blur sm:px-6 sm:text-base">
            <Heart size={20} aria-hidden="true" />
            <span className="min-w-0">Inte allt. Bara det som fastnar.</span>
          </div>

          <h1 className="mx-auto mt-7 max-w-full text-balance font-display text-[2.7rem] leading-[1.02] tracking-normal text-[#5b3441] min-[390px]:text-[3rem] sm:max-w-[42rem] sm:text-[5.8rem] sm:leading-[0.95] sm:tracking-[-0.045em]">
            <span className="block">Elins</span>
            <span className="block">
              <em className="font-display font-normal italic text-[#d97d91]">
                enkla
              </em>{" "}
              val.
            </span>
          </h1>

          <p className="mx-auto mt-6 w-full max-w-[min(35rem,100%)] break-words px-1 text-lg leading-8 text-[#7e6970] sm:text-balance sm:text-xl sm:leading-9">
            Handplockade produkter, utvalda efter en enkel princip: mest värde
            för pengarna. Inte allt som hypas på TikTok - bara det som faktiskt
            är värt det.
          </p>
        </div>

        <div className="mx-auto mt-8 w-full max-w-full min-w-0 rounded-[1.75rem] border border-[#efc6cc] bg-white/42 p-5 shadow-[0_24px_70px_rgba(216,131,146,0.13)] backdrop-blur-xl sm:max-w-[34rem] sm:p-6">
          <div className="flex items-start gap-4">
            <div className="grid min-h-14 min-w-14 place-items-center rounded-3xl bg-[#ffe0e5] text-[#d87b8d]">
              <Heart size={24} aria-hidden="true" />
            </div>
            <div className="min-w-0 text-left">
              <h2 className="text-lg font-black text-[#6b3d4a] sm:text-xl">
                Mindre brus. Mer känsla.
              </h2>
              <p className="mt-2 break-words text-base leading-7 text-[#7e6970] sm:text-lg sm:leading-8">
                Varje produkt ska snabbt svara på: &quot;Är det här något jag
                faktiskt skulle använda?&quot;
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-10 sm:mt-14">
          <ProductRail
            id="elins-toppval"
            title="Elins toppval"
            subtitle="De val som just nu får högst redaktionell poäng."
            href="/elins-val"
            items={topPicks}
            priority
          />

          {activeProductCategories.map((category) => (
            <ProductRail
              key={category.slug}
              id={category.slug}
              title={category.label}
              subtitle={category.description}
              href={category.href}
              items={getProductsByCategory(category.slug)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

type ProductRailProps = {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  items: readonly Product[];
  priority?: boolean;
};

function ProductRail({
  id,
  title,
  subtitle,
  href,
  items,
  priority = false,
}: ProductRailProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-6">
      <div className="flex items-end justify-between gap-4">
        <div className="min-w-0">
          <h2
            id={`${id}-title`}
            className="font-display text-3xl leading-tight text-[#5b3441] sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-1 max-w-[34rem] text-sm leading-6 text-[#7e6970] sm:text-base sm:leading-7">
            {subtitle}
          </p>
        </div>
        <Link
          href={href}
          className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full bg-white/64 px-4 text-sm font-black text-[#b06072] shadow-[0_12px_32px_rgba(216,131,146,0.1)] transition hover:-translate-y-0.5 hover:bg-white"
        >
          Se alla
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>

      <div className="-mx-4 mt-4 max-w-[100vw] overflow-x-auto px-4 pb-3 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max snap-x snap-mandatory gap-4 lg:grid lg:w-auto lg:grid-cols-3 lg:gap-6">
          {items.map((product, index) => (
            <div
              key={product.slug}
              className="w-[18.25rem] shrink-0 snap-start sm:w-[20rem] lg:w-auto"
            >
              <HomeProductCard
                product={product}
                priority={priority && index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const productHref = getProductPageHref(product);
  const score = getEditorialScore(product.slug);

  return (
    <article className="group h-full overflow-hidden rounded-[2rem] border border-[#f0cbd1] bg-white/62 shadow-[0_24px_70px_rgba(216,131,146,0.14)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#f7e8e8]">
        <Link href={productHref} aria-label={`Läs mer om ${product.title}`}>
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(min-width: 1024px) 30vw, 292px"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            priority={priority}
          />
        </Link>
        <div className="absolute left-4 top-4 rounded-full bg-white/86 px-3 py-1 text-xs font-black text-[#8c5260] shadow-[0_12px_32px_rgba(91,52,65,0.12)] backdrop-blur">
          Elin valde
        </div>
        <div className="absolute right-3 top-3">
          <SaveProductButton
            productSlug={product.slug}
            productTitle={product.title}
            className="grid size-10 place-items-center rounded-full border border-white/60 bg-white/86 text-[#8c5260] shadow-[0_12px_32px_rgba(91,52,65,0.14)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
          />
        </div>
      </div>

      <div className="p-5">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-[#d97d91]">
          {product.brand}
        </p>
        <h3 className="mt-2 font-display text-[1.7rem] leading-[1.05] tracking-[-0.02em] text-[#5b3441]">
          <Link href={productHref}>{product.title}</Link>
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#7e6970]">
          {product.summary}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-black text-[#8b5a66]">
          {score ? (
            <span className="rounded-full bg-[#ffe5e8] px-3 py-2">
              Elins poäng: {score.total}/100
            </span>
          ) : null}
          <span className="rounded-full bg-white/72 px-3 py-2">Annons</span>
        </div>

        <div className="mt-5 grid grid-cols-[1fr_auto] gap-2">
          <Link
            href={productHref}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#d97d91] px-4 text-sm font-black text-white shadow-[0_16px_38px_rgba(217,125,145,0.28)] transition hover:-translate-y-0.5"
          >
            Elins koll
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#e8b8c1] bg-white/70 px-4 text-sm font-black text-[#9b5b6a] transition hover:-translate-y-0.5 hover:bg-white"
            aria-label={`Se ${product.title} på Amazon`}
          >
            Amazon
          </a>
        </div>
      </div>
    </article>
  );
}
