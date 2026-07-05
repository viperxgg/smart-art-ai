import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Luggage } from "lucide-react";

import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PriceTierBadge } from "@/components/PriceTierBadge";
import { ScoreBadge } from "@/components/ProductBadges";
import { createSeoMetadata } from "@/lib/metadata";
import { getEditorialScore } from "@/lib/scores";
import { siteConfig } from "@/lib/site";
import { resaPicks, resaSectionCopy } from "@/lib/sommar";

const pageUrl = `${siteConfig.url}/sommar/resa`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Resa & packning", href: "/sommar/resa" },
];

export const metadata = createSeoMetadata({
  title: resaSectionCopy.metaTitle,
  description: resaSectionCopy.metaDescription,
  url: pageUrl,
  type: "website",
  image: resaPicks[0]
    ? {
        url: `${siteConfig.url}${resaPicks[0].cardImage}`,
        width: 900,
        height: 675,
        alt: resaPicks[0].cardImageAlt,
      }
    : undefined,
});

export const revalidate = 300;

export default function SommarResaPage() {
  return (
    <main
      id="content"
      className="min-h-screen bg-[#FFF9F7] px-4 py-7 text-[#3E2F3A]"
    >
      <JsonLd data={buildBreadcrumbSchema(breadcrumbItems)} />

      <div className="mx-auto w-full max-w-6xl pb-24">
        <div className="mb-5">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <section className="overflow-hidden rounded-[2.4rem] border border-[#F1D8DD] bg-[#FFF4F5] shadow-[0_30px_90px_rgba(216,131,146,0.16)]">
          <div className="p-6 md:p-9">
            <p className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#E9CDD3] bg-white/72 px-4 text-xs font-black uppercase tracking-[0.14em] text-[#B983A6]">
              <Luggage size={15} aria-hidden="true" />
              {resaSectionCopy.eyebrow}
            </p>
            <h1 className="editorial-color-kiss mt-5 font-display text-5xl leading-[1.02] tracking-normal sm:text-7xl">
              {resaSectionCopy.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#6f5a64]">
              {resaSectionCopy.intro}
            </p>
            <p className="mt-5 max-w-3xl rounded-3xl border border-[#F1D8DD] bg-white/70 p-4 text-sm leading-7 text-[#6f5a64]">
              <strong>Annons</strong> · Den här sidan innehåller reklamlänkar.
              Om du handlar via våra länkar kan vi få en provision - utan extra
              kostnad för dig. Elin väljer ändå ärligt, och säger också vad du
              kan hoppa över.
            </p>
          </div>
        </section>

        <section className="mt-8" aria-labelledby="resa-grid-title">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#D8788D]">
                Elins utvalda reseprylar
              </p>
              <h2
                id="resa-grid-title"
                className="editorial-color-kiss mt-2 font-display text-4xl leading-tight"
              >
                Smart packat för kabinväskan
              </h2>
            </div>
            <span className="inline-flex min-h-10 w-fit items-center rounded-full border border-[#E9CDD3] bg-white/70 px-4 text-xs font-black uppercase tracking-[0.14em] text-[#B983A6]">
              Annons
            </span>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resaPicks.map((pick, index) => {
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
      </div>
    </main>
  );
}
