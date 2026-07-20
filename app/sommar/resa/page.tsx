import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Luggage } from "lucide-react";

import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { AmazonPurchaseCta } from "@/components/AmazonPurchaseCta";
import { JsonLd } from "@/components/JsonLd";
import { PriceTierBadge } from "@/components/PriceTierBadge";
import { ScoreBadge } from "@/components/ProductBadges";
import { categoryProductGroups } from "@/lib/categoryGroups";
import { createSeoMetadata } from "@/lib/metadata";
import { getEditorialScore } from "@/lib/scores";
import { siteConfig } from "@/lib/site";
import { getResaPickBySlug, resaPicks, resaSectionCopy } from "@/lib/sommar";

const pageUrl = `${siteConfig.url}/sommar/resa`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Resa & packning", href: "/sommar/resa" },
];

// Short intro per scenario, keyed on the categoryGroups title.
const groupIntro: Record<string, string> = {
  "Kabinväska & packning": "Packa smart och håll ordning i handbagaget.",
  "Strand & bad": "Allt som gör dagen vid vattnet skönare.",
  "Reseelektronik": "Håll prylarna laddade hela resan.",
  "Festival & camping": "Smått som räddar dagarna utomhus.",
  "Road trip & bilen": "Ordning och ström på långresan.",
  "Smarta reseprylar": "Detaljerna som gör packningen enklare.",
};

// Stable anchor per scenario so kampanjlänkar kan deep-linka till en sektion.
const groupAnchor: Record<string, string> = {
  "Kabinväska & packning": "kabinvaska",
  "Strand & bad": "strand",
  "Reseelektronik": "reseelektronik",
  "Festival & camping": "festival",
  "Road trip & bilen": "roadtrip",
  "Smarta reseprylar": "smarta-reseprylar",
};

const resaGroups = categoryProductGroups.resa
  .map((group) => ({
    title: group.title,
    intro: groupIntro[group.title] ?? "",
    picks: group.productSlugs
      .map((slug) => getResaPickBySlug(slug))
      .filter(
        (pick): pick is NonNullable<ReturnType<typeof getResaPickBySlug>> =>
          Boolean(pick),
      ),
  }))
  .filter((group) => group.picks.length > 0);

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
      className="min-h-screen bg-bg px-4 py-7 text-ink"
    >
      <JsonLd data={buildBreadcrumbSchema(breadcrumbItems)} />

      <div className="mx-auto w-full max-w-6xl pb-24">
        <div className="mb-5">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <section className="overflow-hidden rounded-[2.4rem] border border-line bg-rose/8 shadow-[0_30px_90px_rgba(216,131,146,0.16)]">
          <div className="p-6 md:p-9">
            <p className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line bg-surface/72 px-4 text-xs font-black uppercase tracking-[0.14em] text-wine">
              <Luggage size={15} aria-hidden="true" />
              {resaSectionCopy.eyebrow}
            </p>
            <h1 className="editorial-color-kiss mt-5 font-display text-5xl leading-[1.02] tracking-normal sm:text-7xl">
              {resaSectionCopy.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-ink-soft">
              {resaSectionCopy.intro}
            </p>
            <p className="mt-5 max-w-3xl rounded-3xl border border-line bg-surface/70 p-4 text-sm leading-7 text-ink-soft">
              <strong>Annons</strong> · Den här sidan innehåller reklamlänkar.
              Om du handlar via våra länkar kan vi få en provision - utan extra
              kostnad för dig. Elin väljer ändå ärligt, och säger också vad du
              kan hoppa över.
            </p>
          </div>
        </section>

        {resaGroups.map((group, groupIndex) => {
          const anchor = groupAnchor[group.title] ?? `grupp-${groupIndex}`;

          return (
          <section
            key={group.title}
            id={anchor}
            className="mt-10 scroll-mt-24"
            aria-labelledby={`${anchor}-rubrik`}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                {group.intro ? (
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-rose">
                    {group.intro}
                  </p>
                ) : null}
                <h2
                  id={`${anchor}-rubrik`}
                  className="editorial-color-kiss mt-2 font-display text-4xl leading-tight"
                >
                  {group.title}
                </h2>
              </div>
              <span className="inline-flex min-h-10 w-fit items-center rounded-full border border-line bg-surface/70 px-4 text-xs font-black uppercase tracking-[0.14em] text-wine">
                Annons
              </span>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.picks.map((pick) => {
                const score = getEditorialScore(pick.productSlug);
                const isFirst = groupIndex === 0 && pick === group.picks[0];

                return (
                  <article
                    key={pick.productSlug}
                    className="overflow-hidden rounded-[2rem] border border-line bg-surface/72 p-3 shadow-[0_24px_70px_rgba(185,131,166,0.12)]"
                  >
                    <Link
                      href={pick.href}
                      className="relative block aspect-[4/3] overflow-hidden rounded-[1.55rem] bg-rose/8"
                      aria-label={`Läs Elins omdöme om ${pick.product.title}`}
                    >
                      <Image
                        src={pick.cardImage}
                        alt={pick.cardImageAlt}
                        fill
                        sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 100vw"
                        className="object-cover"
                        priority={isFirst}
                        {...(isFirst ? {} : { loading: "lazy" as const })}
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-surface/90 px-3 py-1.5 text-xs font-black text-wine shadow-[0_12px_32px_rgba(91,52,65,0.12)] backdrop-blur">
                        {pick.cardBadge}
                      </span>
                    </Link>

                    <div className="p-3">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-rose">
                        {pick.product.brand}
                      </p>
                      <h3 className="editorial-color-kiss mt-2 font-display text-3xl leading-tight">
                        <Link href={pick.href}>{pick.product.title}</Link>
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-ink-soft">
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
                        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-wine px-5 text-sm font-black text-bg shadow-[0_18px_42px_rgba(109,60,77,0.3)] transition hover:-translate-y-0.5 hover:bg-wine/90"
                      >
                        Läs Elins omdöme
                        <ArrowUpRight size={17} aria-hidden="true" />
                      </Link>
                      <AmazonPurchaseCta
                        product={pick.product}
                        className="mt-3 w-full"
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
          );
        })}
      </div>
    </main>
  );
}
