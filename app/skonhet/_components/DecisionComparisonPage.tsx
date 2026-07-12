import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Sparkles, WandSparkles } from "lucide-react";

import {
  Breadcrumbs,
  buildBreadcrumbSchema,
  type BreadcrumbItem,
} from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PriceTierBadge } from "@/components/PriceTierBadge";
import { ProductBadges, ScoreBadge } from "@/components/ProductBadges";
import { RelatedLinks } from "@/components/RelatedLinks";
import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import { getEditorialScore } from "@/lib/scores";

type DecisionComparisonPageProps = {
  h1: string;
  intro: string;
  badges: readonly string[];
  howToChoose: string;
  verdict: string;
  picks: readonly [DecisionComparisonPick, DecisionComparisonPick];
  comparisonRows: readonly (readonly [string, string, string])[];
  faqItems: readonly DecisionComparisonFaqItem[];
  breadcrumbItems: BreadcrumbItem[];
  relatedLinks: DecisionComparisonRelatedLink[];
  // Optional single Elin illustration (split-screen comparison thumbnail).
  // When set, the two product images are replaced by this one image and a
  // note links to the real product photos on Amazon.
  heroImage?: { src: string; alt: string };
  backHref?: string;
  backLabel?: string;
};

export function buildDecisionComparisonSchemas({
  breadcrumbItems,
  faqItems,
}: {
  breadcrumbItems: BreadcrumbItem[];
  faqItems: readonly DecisionComparisonFaqItem[];
}) {
  return {
    breadcrumbSchema: buildBreadcrumbSchema(breadcrumbItems),
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  };
}

export function DecisionComparisonPage({
  h1,
  intro,
  badges,
  howToChoose,
  verdict,
  picks,
  comparisonRows,
  faqItems,
  breadcrumbItems,
  relatedLinks,
  heroImage,
  backHref = "/skonhet",
  backLabel = "Tillbaka till skönhet",
}: DecisionComparisonPageProps) {
  const { breadcrumbSchema, faqSchema } = buildDecisionComparisonSchemas({
    breadcrumbItems,
    faqItems,
  });

  return (
    <main
      id="content"
      className="min-h-screen bg-bg px-4 py-7 text-ink"
    >
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-5">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <header className="flex items-center justify-between gap-4">
          <Link
            href={backHref}
            className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-bold text-ink-soft transition hover:text-wine"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            {backLabel}
          </Link>
          <p className="rounded-full border border-line bg-surface/70 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-wine">
            Guide
          </p>
        </header>

        <section className="mt-10 overflow-hidden rounded-[2.4rem] border border-line bg-surface/72 p-7 shadow-[0_30px_90px_rgba(185,131,166,0.12)] md:p-10">
          <p className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-rose/8 px-5 text-sm font-black text-wine">
            <Sparkles size={18} aria-hidden="true" />
            Elins guide 2026
          </p>
          <h1 className="editorial-color-kiss mt-6 max-w-4xl font-display text-5xl leading-[1.02] tracking-[-0.04em] sm:text-7xl">
            {h1}
          </h1>
          <ProductBadges badges={badges} className="mt-6" />
          <p className="mt-6 max-w-3xl text-xl leading-9 text-ink-soft">
            {intro}
          </p>
          <p className="mt-6 rounded-3xl border border-line bg-rose/8 p-4 text-sm leading-7 text-ink-soft">
            <strong>Annons</strong> · Våra produktsidor innehåller
            reklamlänkar. Om du handlar via våra länkar kan vi få en provision -
            utan extra kostnad för dig.
          </p>
        </section>

        {heroImage ? (
          <figure className="mt-8 overflow-hidden rounded-[2.4rem] border border-line bg-surface/72 shadow-[0_30px_90px_rgba(185,131,166,0.12)]">
            <div className="relative aspect-[16/10] bg-rose/8">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 960px"
                className="object-cover"
                priority
              />
            </div>
            <figcaption className="p-4 text-sm leading-7 text-ink-soft md:px-6">
              Bilden är Elins illustration av jämförelsen. Vill du se de riktiga
              produktbilderna?{" "}
              <a
                href={picks[0].product.amazonUrl}
                target="_blank"
                rel="sponsored nofollow noopener"
                className="font-bold text-wine underline"
              >
                Se {picks[0].product.brand} på Amazon
              </a>{" "}
              och{" "}
              <a
                href={picks[1].product.amazonUrl}
                target="_blank"
                rel="sponsored nofollow noopener"
                className="font-bold text-wine underline"
              >
                {picks[1].product.brand} på Amazon
              </a>
              .
            </figcaption>
          </figure>
        ) : null}

        <section className="reveal-fade mt-10 rounded-[2rem] border border-line bg-surface/64 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-rose/15 text-wine">
              <WandSparkles size={24} aria-hidden="true" />
            </span>
            <div>
              <h2 className="editorial-color-kiss font-display text-4xl">
                Hur väljer du?
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-ink-soft">
                {howToChoose}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          {picks.map((pick, index) => {
            const score = getEditorialScore(pick.product.slug);

            return (
              <Link
                key={pick.product.slug}
                href={pick.path}
                className="reveal-fade group overflow-hidden rounded-[2.2rem] border border-line bg-surface/72 shadow-[0_28px_90px_rgba(185,131,166,0.1)] transition hover:-translate-y-1"
                style={{ "--i": index } as CSSProperties}
              >
                {heroImage ? null : (
                  <div className="relative aspect-[4/3] bg-rose/8">
                    <Image
                      src={pick.product.image}
                      alt={pick.product.imageAlt}
                      fill
                      sizes="(max-width: 768px) 92vw, 470px"
                      className="object-cover transition duration-500 group-hover:scale-[1.025]"
                    />
                    <span className="absolute left-5 top-5 rounded-full bg-wine/90 px-4 py-2 text-sm font-black text-bg backdrop-blur">
                      {pick.badge}
                    </span>
                  </div>
                )}
                <div className="p-6">
                  {heroImage ? (
                    <span className="inline-flex rounded-full bg-wine/90 px-4 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-bg">
                      {pick.badge}
                    </span>
                  ) : null}
                  <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-rose">
                    {pick.product.brand}
                  </p>
                  <h2 className="editorial-color-kiss mt-3 font-display text-3xl leading-tight">
                    {pick.headline}
                  </h2>
                  <p className="mt-4 leading-8 text-ink-soft">
                    {pick.shortBody}
                  </p>
                  {score ? (
                    <ScoreBadge score={score} className="mt-5" as="span" />
                  ) : null}
                  <div className="mt-3">
                    <PriceTierBadge product={pick.product} showContext />
                  </div>
                  <span className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-wine px-5 font-black text-bg shadow-[0_18px_42px_rgba(109,60,77,0.3)] transition group-hover:bg-wine/90">
                    Läs recensionen
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            );
          })}
        </section>

        <section className="reveal-fade mt-12 overflow-hidden rounded-[2rem] border border-line bg-surface/72 shadow-[0_24px_70px_rgba(185,131,166,0.1)]">
          <div className="p-6 md:p-8">
            <h2 className="editorial-color-kiss font-display text-4xl">
              Snabb jämförelse
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[44rem] border-collapse text-left">
              <thead>
                <tr className="border-y border-line bg-rose/8">
                  <th className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-wine">
                    Punkt
                  </th>
                  {picks.map((pick) => (
                    <th
                      key={pick.product.slug}
                      className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-wine"
                    >
                      {pick.product.brand}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([label, first, second]) => (
                  <tr key={label} className="border-b border-line">
                    <th className="px-6 py-5 font-black text-ink">
                      {label}
                    </th>
                    <td className="px-6 py-5 leading-7 text-ink-soft">
                      {first}
                    </td>
                    <td className="px-6 py-5 leading-7 text-ink-soft">
                      {second}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="reveal-fade mt-12 rounded-[2rem] border border-line bg-rose/10 p-6 shadow-[0_26px_80px_rgba(185,131,166,0.12)] md:p-8">
          <h2 className="editorial-color-kiss font-display text-4xl">
            Elins korta dom
          </h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-ink-soft">
            {verdict}
          </p>
        </section>

        <RelatedLinks links={relatedLinks} />
      </div>
    </main>
  );
}
