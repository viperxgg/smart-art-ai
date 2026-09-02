// Content refresh 2026-09-02: generisk länktext till aftersun-eller-aloe-vera.
import Link from "next/link";
import { ArrowUpRight, Home, Sparkles, WandSparkles } from "lucide-react";

import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { CategoryComparisonSections } from "@/components/CategoryComparisonSections";
import { CategoryProductSections } from "@/components/CategoryProductSections";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { createSeoMetadata } from "@/lib/metadata";
import { plattangPicks } from "@/lib/plattang";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Skönhet | Elins val",
  description:
    "Elins skönhetsval med fokus på prisvärda produkter, tydliga användningsfall och mindre hype.",
  url: `${siteConfig.url}/skonhet`,
  image: {
    url: `${siteConfig.url}${plattangPicks[0].product.image}`,
    width: 1200,
    height: 900,
    alt: plattangPicks[0].product.imageAlt,
  },
});

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
];

const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);

export default function SkonhetHubPage() {
  return (
    <main
      id="content"
      className="min-h-screen bg-bg px-4 py-8 text-ink"
    >
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto w-full max-w-5xl pb-24">
        <div className="mb-5">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-bold text-ink-soft transition hover:text-wine"
        >
          <Home size={18} aria-hidden="true" />
          Tillbaka till Elins val
        </Link>

        <section className="mt-11 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-rose">
              Elins skönhetsval
            </p>
            <h1 className="editorial-color-kiss mt-4 font-display text-5xl leading-[1.02] tracking-[-0.04em] sm:text-7xl">
              Skönhet utan överköp.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-ink-soft">
              Här samlar Elin skönhetsprodukter som känns enkla att förstå: vad
              de passar för, när de är värda pengarna och när du hellre ska
              välja något annat.
            </p>
          </div>

          <Link
            href="/skonhet/plattang"
            className="group overflow-hidden rounded-[2.2rem] border border-line bg-surface/72 p-7 shadow-[0_28px_80px_rgba(185,131,166,0.14)] transition hover:-translate-y-1"
          >
            <div className="flex items-start gap-5">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-3xl bg-rose/15 text-wine">
                <WandSparkles size={30} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-rose">
                  Guide 2026
                </p>
                <h2 className="editorial-color-kiss mt-3 font-display text-4xl leading-tight">
                  Plattång
                </h2>
                <p className="mt-4 text-lg leading-8 text-ink-soft">
                  Två tydliga val: en fullstor plattång för hemma och en mini
                  för resa och snabba fix.
                </p>
                <span className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-wine px-5 font-black text-bg shadow-[0_18px_42px_rgba(109,60,77,0.3)] transition group-hover:bg-wine/90">
                  Läs Elins guide
                  <ArrowUpRight size={18} aria-hidden="true" />
                </span>
              </div>
            </div>
          </Link>
        </section>

        <CategoryProductSections categorySlug="skonhet" />
        <CategoryComparisonSections categorySlug="skonhet" />

        <section className="reveal-fade mt-12 rounded-[2rem] border border-line bg-surface/64 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)]">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-rose/15 text-wine">
              <Sparkles size={24} aria-hidden="true" />
            </span>
            <div>
              <h2 className="editorial-color-kiss font-display text-3xl">
                Mer värde. Mindre badrumslåda.
              </h2>
              <p className="mt-3 text-lg leading-8 text-ink-soft">
                Varje skönhetsval ska snabbt förklara vem produkten passar, vad
                som gör den prisvärd och vilken liten nackdel du bör känna till.
              </p>
            </div>
          </div>
        </section>

        <RelatedLinks
          links={[
            {
              href: "/skonhet/varmluftsborste",
              label: "Varmluftsborste",
              text: "Varmluftsborste bäst i test 2026.",
            },
            {
              href: "/skonhet/epilator",
              label: "Epilator",
              text: "Braun Silk-épil 9 och Panasonic i epilatorguiden.",
            },
            {
              href: "/skonhet/harolja-eller-varmeskydd",
              label: "Hårvård",
              text: "Hårolja med värmeskydd - så väljer du rätt.",
            },
            {
              href: "/skonhet/aftersun-eller-aloe-vera",
              label: "Aftersun eller aloe vera",
              text: "Aftersun eller aloe vera – vad huden behöver efter solen.",
            },
            {
              href: "/skonhet/torrschampo",
              label: "Torrschampo",
              text: "Moroccanoil torrschampo Light för ljust hår.",
            },
            {
              href: "/skonhet/skona-fotter-i-vinter",
              label: "Vinterguide",
              text: "Sköna fötter i vinter – fotbad, fotfil och kräm i rätt ordning.",
            },
            {
              href: "/skonhet/tiktok-produkter-som-haller",
              label: "Viralt",
              text: "TikTok-produkter som faktiskt håller – Elins ärliga koll.",
            },
            {
              href: "/halsa",
              label: "Hälsa & livsstil",
              text: "Se Elins val för återhämtning, smart hem och vardagskänsla.",
            },
            {
              href: "/traning",
              label: "Träning",
              text: "Se enkla produkter för hemmaträning och rutiner.",
            },
          ]}
        />
      </div>
    </main>
  );
}
