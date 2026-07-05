import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PriceTierBadge } from "@/components/PriceTierBadge";
import { ScoreBadge } from "@/components/ProductBadges";
import { createSeoMetadata } from "@/lib/metadata";
import { getEditorialScore } from "@/lib/scores";
import { siteConfig } from "@/lib/site";
import {
  smartSommarPicks,
  smartSommarSectionCopy,
  sommarFanLinks,
  sommarPicks,
  sommarSectionCopy,
} from "@/lib/sommar";

const pageUrl = `${siteConfig.url}/sommar`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Elins sommar-glow", href: "/sommar" },
];

export const metadata = createSeoMetadata({
  title: sommarSectionCopy.metaTitle,
  description: sommarSectionCopy.metaDescription,
  url: pageUrl,
  type: "website",
  image: {
    url: `${siteConfig.url}${sommarPicks[0].cardImage}`,
    width: 900,
    height: 675,
    alt: sommarPicks[0].cardImageAlt,
  },
});

export const revalidate = 300;

export default function SommarPage() {
  return (
    <main
      id="content"
      className="min-h-screen bg-[#FFF9F7] px-4 py-7 text-[#3E2F3A]"
    >
      <JsonLd data={buildBreadcrumbSchema(breadcrumbItems)} />

      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-5">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <section className="overflow-hidden rounded-[2.4rem] border border-[#F1D8DD] bg-[#FFF4F5] shadow-[0_30px_90px_rgba(216,131,146,0.16)]">
          <div className="grid gap-6 p-6 md:p-9 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
            <div className="min-w-0">
              <p className="inline-flex min-h-10 items-center rounded-full border border-[#E9CDD3] bg-white/72 px-4 text-xs font-black uppercase tracking-[0.14em] text-[#B983A6]">
                {sommarSectionCopy.eyebrow}
              </p>
              <h1 className="editorial-color-kiss mt-5 font-display text-5xl leading-[1.02] tracking-normal sm:text-7xl">
                {sommarSectionCopy.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#6f5a64]">
                {sommarSectionCopy.intro}
              </p>
              <p className="mt-5 rounded-3xl border border-[#F1D8DD] bg-white/70 p-4 text-sm leading-7 text-[#6f5a64]">
                <strong>Annons</strong> · Den här sidan innehåller reklamlänkar.
                Om du handlar via våra länkar kan vi få en provision - utan extra
                kostnad för dig.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {sommarPicks.map((pick) => {
                const score = getEditorialScore(pick.productSlug);

                return (
                  <Link
                    key={pick.productSlug}
                    href={pick.href}
                    className="group flex min-h-28 items-center gap-4 rounded-[1.6rem] border border-[#F1D8DD] bg-white/72 p-3 shadow-[0_18px_54px_rgba(185,131,166,0.12)] transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[1.1rem] bg-[#FFF9F7]">
                      <Image
                        src={pick.cardImage}
                        alt={pick.cardImageAlt}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-black uppercase tracking-[0.12em] text-[#D8788D]">
                        {pick.cardBadge}
                      </span>
                      <span className="mt-1 block font-display text-xl leading-tight text-[#5f4a54]">
                        {pick.product.brand}
                      </span>
                      {score ? (
                        <span className="mt-2 block text-sm font-black text-[#9E5E73]">
                          {score.total}/100
                        </span>
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <Link
          href="/sommar/resa"
          className="mt-6 flex items-center justify-between gap-4 rounded-[1.8rem] border border-[#F1D8DD] bg-white/72 p-5 shadow-[0_18px_54px_rgba(185,131,166,0.12)] transition hover:-translate-y-0.5 hover:bg-white"
        >
          <span className="min-w-0">
            <span className="block text-xs font-black uppercase tracking-[0.14em] text-[#D8788D]">
              Reser du i sommar?
            </span>
            <span className="mt-1 block font-display text-2xl leading-tight text-[#5f4a54]">
              Elins reseval – smarta prylar för kabinväskan
            </span>
          </span>
          <ArrowUpRight
            size={22}
            aria-hidden="true"
            className="shrink-0 text-[#d97d91]"
          />
        </Link>

        <section className="mt-8" aria-labelledby="sommar-grid-title">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#D8788D]">
                Utvalda sommarfavoriter
              </p>
              <h2
                id="sommar-grid-title"
                className="editorial-color-kiss mt-2 font-display text-4xl leading-tight"
              >
                Glow, vård och smarta säsongsval
              </h2>
            </div>
            <span className="inline-flex min-h-10 w-fit items-center rounded-full border border-[#E9CDD3] bg-white/70 px-4 text-xs font-black uppercase tracking-[0.14em] text-[#B983A6]">
              Annons
            </span>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sommarPicks.map((pick, index) => {
              const score = getEditorialScore(pick.productSlug);

              return (
                <article
                  key={pick.productSlug}
                  className="overflow-hidden rounded-[2rem] border border-[#F1D8DD] bg-white/72 p-3 shadow-[0_24px_70px_rgba(185,131,166,0.12)]"
                >
                  <Link
                    href={pick.href}
                    className="relative block aspect-[4/3] overflow-hidden rounded-[1.55rem] bg-[#FFF4F5]"
                    aria-label={`Läs Elins omdöme om ${pick.product.title}`}
                  >
                    <Image
                      src={pick.cardImage}
                      alt={pick.cardImageAlt}
                      fill
                      sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 100vw"
                      className="object-cover"
                      priority={index === 0}
                      {...(index === 0 ? {} : { loading: "lazy" as const })}
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-black text-[#8c5260] shadow-[0_12px_32px_rgba(91,52,65,0.12)] backdrop-blur">
                      {pick.cardBadge}
                    </span>
                  </Link>

                  <div className="p-3">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#D8788D]">
                      {pick.product.brand}
                    </p>
                    <h3 className="editorial-color-kiss mt-2 font-display text-3xl leading-tight">
                      <Link href={pick.href}>{pick.product.title}</Link>
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#7e6970]">
                      {pick.cardHook}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {score ? <ScoreBadge score={score} /> : null}
                    </div>
                    <div className="mt-3">
                      <PriceTierBadge product={pick.product} showContext />
                    </div>
                    <Link
                      href={pick.href}
                      className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#D8788D] px-5 text-sm font-black text-white shadow-[0_18px_42px_rgba(216,120,141,0.24)] transition hover:-translate-y-0.5"
                    >
                      Läs Elins omdöme
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-8" aria-labelledby="smart-sommarro-grid-title">
          <div className="overflow-hidden rounded-[2.4rem] border border-[#F1D8DD] bg-[#FFF4F5] p-6 shadow-[0_30px_90px_rgba(216,131,146,0.16)] md:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="inline-flex min-h-10 items-center rounded-full border border-[#E9CDD3] bg-white/72 px-4 text-xs font-black uppercase tracking-[0.14em] text-[#B983A6]">
                  {smartSommarSectionCopy.eyebrow}
                </p>
                <h2
                  id="smart-sommarro-grid-title"
                  className="editorial-color-kiss mt-4 font-display text-4xl leading-tight"
                >
                  {smartSommarSectionCopy.title}
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-[#6f5a64]">
                  {smartSommarSectionCopy.intro}
                </p>
              </div>
              <span className="inline-flex min-h-10 w-fit items-center rounded-full border border-[#E9CDD3] bg-white/70 px-4 text-xs font-black uppercase tracking-[0.14em] text-[#B983A6]">
                Annons
              </span>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {smartSommarPicks.map((pick, index) => {
                const score = getEditorialScore(pick.productSlug);

                return (
                  <article
                    key={pick.productSlug}
                    className="overflow-hidden rounded-[2rem] border border-[#F1D8DD] bg-white/72 p-3 shadow-[0_24px_70px_rgba(185,131,166,0.12)]"
                  >
                    <Link
                      href={pick.href}
                      className="relative block aspect-[4/3] overflow-hidden rounded-[1.55rem] bg-[#FFF4F5]"
                      aria-label={`Läs Elins omdöme om ${pick.product.title}`}
                    >
                      <Image
                        src={pick.cardImage}
                        alt={pick.cardImageAlt}
                        fill
                        sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 100vw"
                        className="object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-black text-[#8c5260] shadow-[0_12px_32px_rgba(91,52,65,0.12)] backdrop-blur">
                        {pick.cardBadge}
                      </span>
                    </Link>

                    <div className="p-3">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-[#D8788D]">
                        {pick.product.brand}
                      </p>
                      <h3 className="editorial-color-kiss mt-2 font-display text-3xl leading-tight">
                        <Link href={pick.href}>{pick.product.title}</Link>
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-[#7e6970]">
                        {pick.cardHook}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {score ? <ScoreBadge score={score} /> : null}
                      </div>
                      <div className="mt-3">
                        <PriceTierBadge product={pick.product} showContext />
                      </div>
                      <Link
                        href={pick.href}
                        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#D8788D] px-5 text-sm font-black text-white shadow-[0_18px_42px_rgba(216,120,141,0.24)] transition hover:-translate-y-0.5"
                      >
                        Läs Elins omdöme
                        <ArrowUpRight size={17} aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="mt-8 rounded-[2rem] border border-[#F1D8DD] bg-white/68 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8"
          aria-labelledby="sommar-fan-links-title"
        >
          <h2
            id="sommar-fan-links-title"
            className="editorial-color-kiss font-display text-3xl"
          >
            Håll dig sval i värmen
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {sommarFanLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex min-h-20 items-center justify-between gap-4 rounded-3xl bg-[#FFF4F5] p-5 transition hover:-translate-y-0.5 hover:bg-[#F9E0E3]"
              >
                <span className="font-display text-[1.35rem] font-black leading-tight text-[#5f4a54]">
                  {link.label}
                </span>
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-[#B983A6] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-[#F1D8DD] bg-white/68 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
          <Sparkles className="text-[#B983A6]" size={24} aria-hidden="true" />
          <h2 className="editorial-color-kiss mt-3 font-display text-3xl">
            Så väljer Elin
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-[#6f5a64]">
            Elin går igenom produktdata, Amazon-köpares signaler och vad
            produkten faktiskt verkar lösa inför säsongen. Poängen är en
            redaktionell bedömning - inte ett testlabb och inte ett löfte om att
            samma produkt passar alla.
          </p>
        </section>
      </div>
    </main>
  );
}
