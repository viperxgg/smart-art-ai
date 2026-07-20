import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Sparkles, WandSparkles } from "lucide-react";

import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { AmazonPurchaseLinks } from "@/components/AmazonPurchaseCta";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import {
  hartorkComparisonRows,
  hartorkFaqItems,
  hartorkPicks,
} from "@/lib/hartork";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/hartork`;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: hartorkFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Hårtork", href: "/skonhet/hartork" },
];

const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);

export const metadata = createSeoMetadata({
  title: "Hårtork - Elins guide till bästa valen 2026 | Elins val",
  description:
    "Elin jämför två prisvärda hårtorkar: Remington PROluxe AC9140 för salongskvalitet hemma och Beurer HC 25 för resa och budget.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${hartorkPicks[0].product.image}`,
    width: 1200,
    height: 900,
    alt: hartorkPicks[0].product.imageAlt,
  },
});

export default function HartorkHubPage() {
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
            href="/skonhet"
            className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-bold text-ink-soft transition hover:text-wine"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Tillbaka till skönhet
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
            Hårtork - två enkla val
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-ink-soft">
            Elin har valt två tydliga spår: Remington PROluxe för dig som vill
            ha salongskvalitet hemma till lågt pris, och Beurer HC 25 när
            budget, vikt och resa är viktigast.
          </p>
          <p className="mt-6 rounded-3xl border border-line bg-rose/8 p-4 text-sm leading-7 text-ink-soft">
            <strong>Annons</strong> · Våra produktsidor innehåller
            reklamlänkar. Om du handlar via våra länkar kan vi få en provision -
            utan extra kostnad för dig.
          </p>
        </section>

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
                För de flesta som torkar håret hemma är Remington det smartaste
                valet: mer kraft, AC-motor, diffusor och längre sladd. Välj
                Beurer om du vill ha en lätt och hopfällbar hårtork för resa
                eller enklare vardag.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          {hartorkPicks.map((pick) => (
            <Link
              key={pick.product.slug}
              href={pick.path}
              className="reveal-fade group overflow-hidden rounded-[2.2rem] border border-line bg-surface/72 shadow-[0_28px_90px_rgba(185,131,166,0.1)] transition hover:-translate-y-1"
            >
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
              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-rose">
                  {pick.product.brand}
                </p>
                <h2 className="editorial-color-kiss mt-3 font-display text-3xl leading-tight">
                  {pick.headline}
                </h2>
                <p className="mt-4 leading-8 text-ink-soft">
                  {pick.shortBody}
                </p>
                <span className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-wine px-5 font-black text-bg shadow-[0_18px_42px_rgba(109,60,77,0.3)] transition group-hover:bg-wine/90">
                  Läs recensionen
                  <ArrowUpRight size={18} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </section>

        <AmazonPurchaseLinks
          products={hartorkPicks.map((pick) => pick.product)}
          className="mt-6"
        />

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
                  <th className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-wine">
                    Beurer HC 25
                  </th>
                  <th className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-wine">
                    Remington PROluxe AC9140
                  </th>
                </tr>
              </thead>
              <tbody>
                {hartorkComparisonRows.map(([label, beurer, remington]) => (
                  <tr key={label} className="border-b border-line">
                    <th className="px-6 py-5 font-black text-ink">
                      {label}
                    </th>
                    <td className="px-6 py-5 leading-7 text-ink-soft">
                      {beurer}
                    </td>
                    <td className="px-6 py-5 leading-7 text-ink-soft">
                      {remington}
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
            För de flesta är Remington PROluxe starkast: salongskvalitet,
            högre effekt och fler tillbehör för pengarna. Beurer HC 25 är
            smartare om du vill ha något billigt, lätt och hopfällbart.
          </p>
        </section>

        <RelatedLinks
          links={[
            {
              href: "/skonhet/varmluftsborste",
              label: "Varmluftsborste",
              text: "Elins varmluftsborste bäst i test 2026.",
            },
            {
              href: "/skonhet/plattang",
              label: "Hår",
              text: "Se Elins plattångsguide för smart hårstyling.",
            },
            {
              href: "/skonhet",
              label: "Skönhet",
              text: "Gå tillbaka till Elins samlade skönhetsval.",
            },
          ]}
        />
      </div>
    </main>
  );
}
