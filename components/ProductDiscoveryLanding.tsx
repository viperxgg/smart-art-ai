import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Camera,
  Heart,
  Mail,
  Music2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { HomeProductSections } from "@/components/HomeProductSections";
import { ProductBadges, ScoreBadge } from "@/components/ProductBadges";
import { comparisonEntries } from "@/lib/comparisons";
import {
  activeProductCategories,
  getProductPageHref,
  products,
  type Product,
} from "@/lib/products";
import { getEditorialScore } from "@/lib/scores";
import { siteConfig } from "@/lib/site";
import {
  smartSommarPicks,
  smartSommarSectionCopy,
  sommarPicks,
  sommarSectionCopy,
} from "@/lib/sommar";

const elinHeroSrc = "/elin/elin-hero.webp";

const topPicks = [...products]
  .sort(
    (a, b) =>
      (getEditorialScore(b.slug)?.total ?? 0) -
      (getEditorialScore(a.slug)?.total ?? 0),
  )
  .slice(0, 6);

const selectedComparisons = comparisonEntries.slice(0, 6);

export function ProductDiscoveryLanding() {
  return (
    <main
      id="content"
      className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#fff6f6] text-[#5b3441]"
    >
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,214,219,0.85),transparent_30rem),radial-gradient(circle_at_0%_78%,rgba(255,226,232,0.72),transparent_20rem),linear-gradient(90deg,rgba(255,219,224,0.42)_1px,transparent_1px)] bg-[length:auto,auto,4.4rem_4.4rem]" />

      <section className="relative mx-auto box-border w-full max-w-[27rem] min-w-0 overflow-hidden px-4 pb-[calc(7.5rem+env(safe-area-inset-bottom))] pt-5 sm:max-w-[46rem] sm:px-8 lg:max-w-6xl">
        <SiteHeader />
        <CategoryNav />
        <Hero />
        <SommarGlowFeature />
        <SmartSommarRoFeature />
        <Favorites />
        <SelectedComparisons />
        <CategoryBand />
        <TrustBand />

        <div className="mt-9 space-y-9 sm:mt-14 lg:space-y-14">
          <HomeProductSections />
        </div>
      </section>
    </main>
  );
}

function SommarGlowFeature() {
  const featuredPicks = sommarPicks.slice(0, 5);

  return (
    <section
      className="mt-8 overflow-hidden rounded-[2.2rem] border border-[#efc6cc] bg-[#fff4df]/82 shadow-[0_28px_86px_rgba(214,139,92,0.18)] backdrop-blur-xl"
      aria-labelledby="sommar-glow-title"
    >
      <div className="grid gap-5 p-5 sm:p-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:p-7">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="inline-flex min-h-10 items-center rounded-full border border-[#efc6cc] bg-white/72 px-4 text-xs font-black uppercase tracking-[0.14em] text-[#a96876]">
              {sommarSectionCopy.eyebrow}
            </p>
            <span className="inline-flex min-h-10 items-center rounded-full border border-[#efc6cc] bg-white/72 px-4 text-xs font-black uppercase tracking-[0.14em] text-[#a96876]">
              Annons
            </span>
          </div>
          <h2
            id="sommar-glow-title"
            className="editorial-color-kiss mt-4 font-display text-4xl leading-tight sm:text-5xl"
          >
            Sommarens glow-val, samlade av Elin.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#765965] sm:text-lg sm:leading-8">
            {sommarSectionCopy.intro}
          </p>
          <p className="mt-4 rounded-3xl border border-[#efc6cc] bg-white/62 p-4 text-sm leading-7 text-[#765965]">
            <strong>Annons</strong> · Innehåller reklamlänkar. Om du handlar via
            våra länkar kan vi få en provision - utan extra kostnad för dig.
          </p>
          <Link
            href="/sommar"
            className="mt-5 inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#d97d91] px-6 text-sm font-black text-white shadow-[0_18px_42px_rgba(216,120,141,0.28)] transition hover:-translate-y-0.5"
          >
            Se hela sommarguiden
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {featuredPicks.map((pick, index) => {
            const score = getEditorialScore(pick.productSlug);

            return (
              <article
                key={pick.productSlug}
                className="min-w-0 overflow-hidden rounded-[1.7rem] border border-[#efc6cc] bg-white/72 p-3 shadow-[0_20px_58px_rgba(216,131,146,0.12)]"
              >
                <Link
                  href={pick.href}
                  className="relative block aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-[#fff9f7]"
                  aria-label={`Läs Elins omdöme om ${pick.product.title}`}
                >
                  <Image
                    src={pick.cardImage}
                    alt={pick.cardImageAlt}
                    fill
                    sizes="(min-width: 1024px) 220px, (min-width: 640px) 30vw, 100vw"
                    className="object-cover"
                    priority={index === 0}
                    {...(index === 0 ? {} : { loading: "lazy" as const })}
                  />
                </Link>
                <div className="p-2">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#D8788D]">
                    {pick.cardBadge}
                  </p>
                  <h3 className="mt-2 font-display text-[1.45rem] leading-tight text-[#5f4a54]">
                    <Link href={pick.href}>{pick.product.brand}</Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#7e6970]">
                    {pick.cardHook}
                  </p>
                  {score ? (
                    <ScoreBadge score={score} className="mt-3 w-full justify-center" />
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SmartSommarRoFeature() {
  const featuredPicks = smartSommarPicks.slice(0, 3);

  return (
    <section
      className="mt-8 overflow-hidden rounded-[2.2rem] border border-[#efc6cc] bg-[#fff4df]/82 shadow-[0_28px_86px_rgba(214,139,92,0.18)] backdrop-blur-xl"
      aria-labelledby="smart-sommarro-title"
    >
      <div className="grid gap-5 p-5 sm:p-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:p-7">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="inline-flex min-h-10 items-center rounded-full border border-[#efc6cc] bg-white/72 px-4 text-xs font-black uppercase tracking-[0.14em] text-[#a96876]">
              {smartSommarSectionCopy.eyebrow}
            </p>
            <span className="inline-flex min-h-10 items-center rounded-full border border-[#efc6cc] bg-white/72 px-4 text-xs font-black uppercase tracking-[0.14em] text-[#a96876]">
              Annons
            </span>
          </div>
          <h2
            id="smart-sommarro-title"
            className="editorial-color-kiss mt-4 font-display text-4xl leading-tight sm:text-5xl"
          >
            Smart sommarro, samlad av Elin.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#765965] sm:text-lg sm:leading-8">
            {smartSommarSectionCopy.intro}
          </p>
          <p className="mt-4 rounded-3xl border border-[#efc6cc] bg-white/62 p-4 text-sm leading-7 text-[#765965]">
            <strong>Annons</strong> · Innehåller reklamlänkar. Om du handlar via
            våra länkar kan vi få en provision - utan extra kostnad för dig.
          </p>
          <Link
            href="/sommar"
            className="mt-5 inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#d97d91] px-6 text-sm font-black text-white shadow-[0_18px_42px_rgba(216,120,141,0.28)] transition hover:-translate-y-0.5"
          >
            Se smart sommarro
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {featuredPicks.map((pick, index) => {
            const score = getEditorialScore(pick.productSlug);

            return (
              <article
                key={pick.productSlug}
                className="min-w-0 overflow-hidden rounded-[1.7rem] border border-[#efc6cc] bg-white/72 p-3 shadow-[0_20px_58px_rgba(216,131,146,0.12)]"
              >
                <Link
                  href={pick.href}
                  className="relative block aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-[#fff9f7]"
                  aria-label={`Läs Elins omdöme om ${pick.product.title}`}
                >
                  <Image
                    src={pick.cardImage}
                    alt={pick.cardImageAlt}
                    fill
                    sizes="(min-width: 1024px) 220px, (min-width: 640px) 30vw, 100vw"
                    className="object-cover"
                    priority={false}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </Link>
                <div className="p-2">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#D8788D]">
                    {pick.cardBadge}
                  </p>
                  <h3 className="mt-2 font-display text-[1.45rem] leading-tight text-[#5f4a54]">
                    <Link href={pick.href}>{pick.product.brand}</Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#7e6970]">
                    {pick.cardHook}
                  </p>
                  {score ? (
                    <ScoreBadge score={score} className="mt-3 w-full justify-center" />
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SiteHeader() {
  return (
    <header className="flex min-w-0 items-center justify-between gap-2 rounded-full border border-white/70 bg-white/55 p-2 shadow-[0_18px_50px_rgba(216,131,146,0.12)] backdrop-blur-xl">
      <Link
        href="/"
        className="editorial-color-kiss min-w-0 shrink pl-2 font-display text-[1.35rem] leading-none tracking-[-0.01em] sm:text-[2rem] sm:tracking-[-0.03em]"
      >
        Elins val
        <span className="ml-1 align-top text-base text-[#d88392] sm:ml-2 sm:text-lg">
          *
        </span>
      </Link>

      <div className="flex shrink-0 items-center gap-1 sm:gap-3">
        <a
          href={`mailto:${siteConfig.email}`}
          className="grid size-10 place-items-center rounded-full bg-[#ffe1e4] text-[#7b4656] shadow-[0_16px_40px_rgba(216,131,146,0.16)] transition hover:-translate-y-0.5 sm:size-14"
          aria-label="Kontakta oss"
        >
          <Mail className="size-4 sm:size-[18px]" aria-hidden="true" />
        </a>
        <a
          href="https://www.instagram.com/elinsorenstyle/"
          target="_blank"
          rel="noopener noreferrer"
          className="grid size-10 place-items-center rounded-full bg-[#ffe1e4] text-[#7b4656] shadow-[0_16px_40px_rgba(216,131,146,0.16)] transition hover:-translate-y-0.5 sm:size-14"
          aria-label="Instagram"
        >
          <Camera className="size-4 sm:size-[18px]" aria-hidden="true" />
        </a>
        <a
          href="https://www.tiktok.com/@elinsorenlife"
          target="_blank"
          rel="noopener noreferrer"
          className="grid size-10 place-items-center rounded-full bg-[#ffe1e4] text-[#7b4656] shadow-[0_16px_40px_rgba(216,131,146,0.16)] transition hover:-translate-y-0.5 sm:size-14"
          aria-label="TikTok"
        >
          <Music2 className="size-4 sm:size-[18px]" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}

function CategoryNav() {
  return (
    <nav
      aria-label="Produktkategorier"
      className="mt-5 w-full max-w-full min-w-0 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <div className="inline-flex min-w-max max-w-none snap-x gap-2">
        <Link
          href="/jamforelser"
          className="inline-flex min-h-10 shrink-0 snap-start items-center rounded-full border border-[#efc6cc] bg-white/70 px-4 text-sm font-black text-[#7b4656] shadow-[0_12px_32px_rgba(216,131,146,0.12)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white sm:min-h-11 sm:px-5"
        >
          Jämförelser
        </Link>
        {activeProductCategories.map((category) => (
          <Link
            key={category.slug}
            href={`#${category.slug}`}
            className="inline-flex min-h-10 shrink-0 snap-start items-center rounded-full border border-[#efc6cc] bg-white/70 px-4 text-sm font-black text-[#7b4656] shadow-[0_12px_32px_rgba(216,131,146,0.12)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white sm:min-h-11 sm:px-5"
          >
            {category.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="mt-8 grid gap-6 rounded-[2.4rem] border border-[#efc6cc] bg-white/52 p-4 shadow-[0_30px_90px_rgba(216,131,146,0.16)] backdrop-blur-xl sm:mt-12 sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-8">
      <div className="relative mx-auto aspect-square w-full max-w-[34rem] overflow-hidden rounded-full shadow-[0_24px_70px_rgba(185,131,166,0.12)]">
        <Image
          src={elinHeroSrc}
          alt="Elin från Elins val"
          fill
          sizes="(min-width: 1024px) 420px, 92vw"
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="min-w-0">
        <p className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#efc6cc] bg-white/72 px-4 text-xs font-black uppercase tracking-[0.12em] text-[#a96876] shadow-[0_18px_50px_rgba(216,131,146,0.12)] backdrop-blur">
          <Sparkles size={17} aria-hidden="true" />
          Utvald av Elin
        </p>
        <h1 className="editorial-color-kiss mt-6 font-display text-[3rem] leading-[0.98] tracking-normal sm:text-[5.8rem] sm:tracking-[-0.045em]">
          Hej, jag är Elin.
        </h1>
        <div className="mt-6 max-w-2xl border-l-[3px] border-[#e4a4b1] pl-5 sm:pl-6">
          <p className="font-display text-[1.95rem] leading-[1.12] text-[#6d3c4d] sm:text-[2.55rem]">
            Jag letar efter produkter som faktiskt är{" "}
            <span className="rounded-[1.2rem] bg-[#ffe0e7] px-2 text-[#bf5d73] shadow-[0_12px_30px_rgba(216,120,141,0.14)]">
              värda pengarna
            </span>
            .
          </p>
          <p className="mt-4 font-display text-[1.25rem] leading-8 text-[#8a6670] sm:text-[1.55rem] sm:leading-9">
            Jag jämför{" "}
            <span className="text-[#b85b89]">betyg</span>,{" "}
            <span className="text-[#8b6aa5]">specifikationer</span> och{" "}
            <span className="rounded-full bg-[#fff0c7] px-2 text-[#8a6641]">
              tusentals recensioner
            </span>{" "}
            så att du slipper välja i blindo.
          </p>
        </div>
        <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
          <Link
            href="/om-oss"
            className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#d97d91] px-6 text-sm font-black text-white shadow-[0_18px_42px_rgba(216,120,141,0.28)] transition hover:-translate-y-0.5"
          >
            Vem är Elin?
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <Link
            href="/jamforelser"
            className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#e8b8c1] bg-white/70 px-6 text-sm font-black text-[#9b5b6a] transition hover:-translate-y-0.5 hover:bg-white"
          >
            Se jämförelser
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Favorites() {
  return (
    <section className="mt-10" aria-labelledby="favorites-title">
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#D8788D]">
            Elins favoriter
          </p>
          <h2
            id="favorites-title"
            className="editorial-color-kiss mt-2 font-display text-4xl leading-tight"
          >
            Starkast val just nu
          </h2>
        </div>
        <Link
          href="/elins-val"
          className="inline-flex min-h-10 shrink-0 items-center gap-1.5 rounded-full bg-white/64 px-3 text-sm font-black text-[#b06072] shadow-[0_12px_32px_rgba(216,131,146,0.1)] transition hover:-translate-y-0.5 hover:bg-white sm:gap-2 sm:px-4"
        >
          Se alla
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-3">
        {topPicks.slice(0, 3).map((product, index) => (
          <FeaturedPick key={product.slug} product={product} priority={index === 0} />
        ))}
      </div>
    </section>
  );
}

function FeaturedPick({
  product,
  priority,
}: {
  product: Product;
  priority: boolean;
}) {
  const productHref = getProductPageHref(product);
  const score = getEditorialScore(product.slug);

  return (
    <article className="overflow-hidden rounded-[2rem] border border-[#efc6cc] bg-white/58 p-3 shadow-[0_26px_80px_rgba(216,131,146,0.16)] backdrop-blur-xl">
      <Link
        href={productHref}
        className="relative block aspect-[4/3] overflow-hidden rounded-[1.55rem] bg-[#f7e8e8]"
        aria-label={`Läs mer om ${product.title}`}
      >
        <Image
          src={product.image}
          alt={product.imageAlt}
          width={900}
          height={675}
          sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 100vw"
          className="h-full w-full object-cover"
          priority={priority}
          {...(priority ? {} : { loading: "lazy" as const })}
          quality={70}
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/88 px-3 py-1.5 text-xs font-black text-[#8c5260] shadow-[0_12px_32px_rgba(91,52,65,0.12)] backdrop-blur">
          Prisvärt val
        </span>
      </Link>
      <div className="p-3">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#d97d91]">
          {product.brand}
        </p>
        <h3 className="editorial-color-kiss mt-2 font-display text-3xl leading-tight">
          <Link href={productHref}>{product.title}</Link>
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#7e6970]">{product.summary}</p>
        <ProductBadges badges={product.badges.slice(0, 3)} className="mt-4" />
        <div className="mt-4 flex flex-wrap gap-2">
          {score ? <ScoreBadge score={score} /> : null}
          <span className="inline-flex min-h-10 items-center rounded-full bg-white/72 px-3 text-xs font-black text-[#8b5a66]">
            Annons
          </span>
        </div>
      </div>
    </article>
  );
}

function SelectedComparisons() {
  return (
    <section className="mt-10" aria-labelledby="comparisons-title">
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#D8788D]">
            Utvalda jämförelser
          </p>
          <h2
            id="comparisons-title"
            className="editorial-color-kiss mt-2 font-display text-4xl leading-tight"
          >
            När valet står mellan två
          </h2>
        </div>
        <Link
          href="/jamforelser"
          className="inline-flex min-h-10 shrink-0 items-center gap-1.5 rounded-full bg-white/64 px-3 text-sm font-black text-[#b06072] shadow-[0_12px_32px_rgba(216,131,146,0.1)] transition hover:-translate-y-0.5 hover:bg-white sm:gap-2 sm:px-4"
        >
          Alla
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {selectedComparisons.map((comparison) => (
          <Link
            key={comparison.href}
            href={comparison.href}
            className="rounded-[1.6rem] border border-[#efc6cc] bg-white/62 p-5 shadow-[0_20px_58px_rgba(216,131,146,0.12)] transition hover:-translate-y-1 hover:bg-white"
          >
            <ProductBadges badges={comparison.badges.slice(0, 2)} />
            <h3 className="editorial-color-kiss mt-4 font-display text-3xl leading-tight">
              {comparison.shortTitle}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#7e6970]">
              {comparison.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function CategoryBand() {
  return (
    <section className="mt-10 grid gap-4 md:grid-cols-3" aria-label="Kategorier">
      {activeProductCategories.map((category) => (
        <Link
          key={category.slug}
          href={category.href}
          className="rounded-[1.6rem] border border-[#efc6cc] bg-white/58 p-5 shadow-[0_20px_58px_rgba(216,131,146,0.1)] transition hover:-translate-y-1 hover:bg-white"
        >
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#D8788D]">
            Kategori
          </p>
          <h2 className="editorial-color-kiss mt-2 font-display text-3xl">
            {category.label}
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#7e6970]">
            {category.description}
          </p>
        </Link>
      ))}
    </section>
  );
}

function TrustBand() {
  return (
    <section className="mt-10 rounded-[2rem] border border-[#efc6cc] bg-white/60 p-6 shadow-[0_24px_70px_rgba(216,131,146,0.13)] backdrop-blur-xl">
      <div className="grid gap-5 md:grid-cols-3">
        {[
          {
            icon: ShieldCheck,
            title: "Elins poäng",
            text: "Värde, funktion, löfte och beprövad signal vägs öppet.",
            href: "/elins-poang",
          },
          {
            icon: Heart,
            title: "Tre lager",
            text: "Elins urval, Amazon-köparnas signaler och vår community hålls isär.",
            href: "/om-oss",
          },
          {
            icon: Sparkles,
            title: "Annons",
            text: "Amazon-länkar märks tydligt och priser visas bara aktuellt hos Amazon.",
            href: "/om-oss",
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <Link key={item.title} href={item.href} className="block">
              <Icon className="text-[#B983A6]" size={24} aria-hidden="true" />
              <h2 className="editorial-color-kiss mt-3 font-display text-2xl">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#6f5a64]">
                {item.text}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
