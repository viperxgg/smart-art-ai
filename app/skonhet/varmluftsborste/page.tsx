import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Sparkles, WandSparkles } from "lucide-react";

import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import {
  varmluftsborsteComparisonRows,
  varmluftsborsteFaqItems,
  varmluftsborstePicks,
} from "@/lib/varmluftsborste";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/varmluftsborste`;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: varmluftsborsteFaqItems.map((item) => ({
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
  { name: "Varmluftsborste", href: "/skonhet/varmluftsborste" },
];

const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);

export const metadata = createSeoMetadata({
  title: "Varmluftsborste bäst i test 2026 | Elins val",
  description:
    "Varmluftsborste bäst i test 2026: Elin jämför BaByliss AS126E och Remington AS7100 för volym, kort hår och pris.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${varmluftsborstePicks[0].product.image}`,
    width: 1200,
    height: 900,
    alt: varmluftsborstePicks[0].product.imageAlt,
  },
});

export default function VarmluftsborsteHubPage() {
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
            Varmluftsborste bäst i test 2026
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-ink-soft">
            I Elins varmluftsborste bäst i test 2026 står valet mellan BaByliss
            AS126E för mångsidig 4-i-1-styling och Remington AS7100 när kort hår
            och lägsta pris är viktigast.
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
                För de flesta är BaByliss smartast: fler tillbehör, mer effekt
                och mer flexibel styling. Välj Remington om du har kort hår och
                vill hålla priset så lågt som möjligt.
              </p>
            </div>
          </div>
        </section>

        <section className="reveal-fade mt-10 rounded-[2rem] border border-line bg-surface/68 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-3xl">
              <p className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line bg-rose/8 px-4 text-sm font-black text-wine">
                <Sparkles size={16} aria-hidden="true" />
                Värt priset?
              </p>
              <h2 className="editorial-color-kiss mt-4 font-display text-4xl">
                Dyson Airwrap eller varmluftsborste?
              </h2>
              <p className="mt-4 text-lg leading-8 text-ink-soft">
                Elin jämför vad premiumverktyget faktiskt erbjuder och när en
                prisvärd varmluftsborste räcker för vardagens torkning och
                volym.
              </p>
            </div>
            <Link
              href="/guider/dyson-airwrap-eller-varmluftsborste"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-wine px-5 font-black text-bg shadow-[0_16px_38px_rgba(109,60,77,0.28)] transition hover:-translate-y-0.5 hover:bg-wine/90"
            >
              Läs guiden
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          {varmluftsborstePicks.map((pick) => (
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
                    BaByliss AS126E
                  </th>
                  <th className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-wine">
                    Remington AS7100
                  </th>
                </tr>
              </thead>
              <tbody>
                {varmluftsborsteComparisonRows.map(([label, babyliss, remington]) => (
                  <tr key={label} className="border-b border-line">
                    <th className="px-6 py-5 font-black text-ink">
                      {label}
                    </th>
                    <td className="px-6 py-5 leading-7 text-ink-soft">
                      {babyliss}
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
            För de flesta är BaByliss AS126E valet: mer mångsidig och starkare
            för volym, brushing och formning. Remington AS7100 är rätt när du
            vill ha lägsta priset och framför allt stylar kort hår.
          </p>
        </section>

        <RelatedLinks
          links={[
            {
              href: "/skonhet/varmluftsborste/babyliss-as126e",
              label: "BaByliss AS126E",
              text: "Läs om BaByliss AS126E som mångsidig varmluftsborste.",
            },
            {
              href: "/skonhet/varmluftsborste/remington-as7100",
              label: "Remington AS7100",
              text: "Jämför med Remington AS7100 för kort hår och lägre pris.",
            },
            {
              href: "/skonhet/plattang",
              label: "Hår",
              text: "Se Elins plattångsguide för slät styling.",
            },
            {
              href: "/skonhet/locktang",
              label: "Hår",
              text: "Jämför Elins locktångsval för lockar och vågor.",
            },
            {
              href: "/skonhet/hartork",
              label: "Hår",
              text: "Se hårtorksguiden om du vill torka håret snabbare.",
            },
            {
              href: "/skonhet/varmeskydd",
              label: "Värmeskydd",
              text: "Skydda håret innan du stylar med varmluftsborste.",
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
