import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Dumbbell, Sparkles } from "lucide-react";

import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { AmazonPurchaseLinks } from "@/components/AmazonPurchaseCta";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import {
  yogamattaComparisonRows,
  yogamattaFaqItems,
  yogamattaPicks,
} from "@/lib/yogamatta";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/traning/yogamatta`;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: yogamattaFaqItems.map((item) => ({
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
  { name: "Träning", href: "/traning" },
  { name: "Yogamatta", href: "/traning/yogamatta" },
];

const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);

export const metadata = createSeoMetadata({
  title: "Yogamatta - Elins guide till bästa valen 2026 | Elins val",
  description:
    "Elin jämför två prisvärda yogamattor: ProSourceFit 13 mm för komfort och pilates, och YOGATI TPE för grepp, stabilitet och yoga.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${yogamattaPicks[0].product.image}`,
    width: 1200,
    height: 900,
    alt: yogamattaPicks[0].product.imageAlt,
  },
});

export default function YogamattaHubPage() {
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
            href="/traning"
            className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-bold text-ink-soft transition hover:text-wine"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Tillbaka till träning
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
            Yogamatta - två enkla val
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-ink-soft">
            Elin har valt två tydliga spår: ProSourceFit när du vill ha extra
            dämpning för pilates och golvövningar, och YOGATI när yoga, grepp
            och balans är viktigare.
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
              <Dumbbell size={24} aria-hidden="true" />
            </span>
            <div>
              <h2 className="editorial-color-kiss font-display text-4xl">
                Hur väljer du?
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-ink-soft">
                För komfort är ProSourceFit det smartaste köpet: tjock, mjuk
                och snäll mot knän och rygg. Välj YOGATI om du tränar mer yoga
                och vill ha bättre grepp, markeringslinjer och stabilitet.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          {yogamattaPicks.map((pick) => (
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
                  className="object-contain p-6 transition duration-500 group-hover:scale-[1.025]"
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
          products={yogamattaPicks.map((pick) => pick.product)}
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
                    ProSourceFit
                  </th>
                  <th className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-wine">
                    YOGATI
                  </th>
                </tr>
              </thead>
              <tbody>
                {yogamattaComparisonRows.map(([label, basics, prosourcefit]) => (
                  <tr key={label} className="border-b border-line">
                    <th className="px-6 py-5 font-black text-ink">
                      {label}
                    </th>
                    <td className="px-6 py-5 leading-7 text-ink-soft">
                      {basics}
                    </td>
                    <td className="px-6 py-5 leading-7 text-ink-soft">
                      {prosourcefit}
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
            ProSourceFit är bäst när komfort och dämpning gör att mattan
            faktiskt används. YOGATI är bättre när passet handlar mer om yoga,
            grepp och balans än om mjukast möjliga underlag.
          </p>
        </section>

        <RelatedLinks
          links={[
            {
              href: "/traning/traningsband-naturlatex",
              label: "Hemmaträning",
              text: "Se Elins träningsband för enkel styrka och rörlighet hemma.",
            },
            {
              href: "/traning",
              label: "Träning",
              text: "Gå tillbaka till Elins samlade träningsval.",
            },
          ]}
        />
      </div>
    </main>
  );
}
