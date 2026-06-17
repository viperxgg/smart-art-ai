import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Dumbbell, Sparkles } from "lucide-react";

import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import {
  traningsbandComparisonRows,
  traningsbandFaqItems,
  traningsbandPicks,
} from "@/lib/traningsband";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/traning/traningsband`;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: traningsbandFaqItems.map((item) => ({
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
  { name: "Träningsband", href: "/traning/traningsband" },
];

const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);

export const metadata = createSeoMetadata({
  title: "Träningsband: långa band vs loop-band - Elins jämförelse | Elins val",
  description:
    "Elin jämför långa träningsband i naturlatex mot JAKKOFOXX loop-band: helkroppsträning mot riktad ben- och rumpträning. Se Elins poäng, motståndsnivåer och vilket som passar dig.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${traningsbandPicks[1].product.image}`,
    width: 1200,
    height: 900,
    alt: traningsbandPicks[1].product.imageAlt,
  },
});

export default function TraningsbandHubPage() {
  return (
    <main
      id="content"
      className="min-h-screen bg-[#FFF9F7] px-4 py-7 text-[#3E2F3A]"
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
            className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-bold text-[#6b4755] transition hover:text-[#B983A6]"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Tillbaka till träning
          </Link>
          <p className="rounded-full border border-[#E9CDD3] bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#B983A6]">
            Guide
          </p>
        </header>

        <section className="mt-9 overflow-hidden rounded-[2.4rem] border border-[#F1D8DD] bg-white/72 p-7 shadow-[0_30px_90px_rgba(185,131,166,0.12)] md:p-10">
          <p className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#E9CDD3] bg-[#FFF4F5] px-5 text-sm font-black text-[#9E5E73]">
            <Sparkles size={18} aria-hidden="true" />
            Elins guide 2026
          </p>
          <h1 className="editorial-color-kiss mt-6 max-w-4xl break-words font-display text-4xl leading-[1.06] tracking-[-0.035em] sm:text-7xl sm:leading-[1.02] sm:tracking-[-0.04em]">
            Träningsband bäst i test - långa band eller loop-band?
          </h1>
          <p className="mt-6 max-w-3xl break-words text-lg leading-8 text-[#6f5a64] sm:text-xl sm:leading-9">
            Elin jämför två tydliga typer: långa träningsband i naturlatex för
            helkropp, och JAKKOFOXX loop-band när fokus är ben, rumpa, höfter,
            pilates och rehab.
          </p>
          <p className="mt-6 rounded-3xl border border-[#F1D8DD] bg-[#FFF4F5] p-4 text-sm leading-7 text-[#6f5a64]">
            <strong>Annons</strong> · Våra produktsidor innehåller
            reklamlänkar. Om du handlar via våra länkar kan vi få en provision -
            utan extra kostnad för dig.
          </p>
        </section>

        <section className="mt-8 rounded-[2rem] border border-[#F1D8DD] bg-white/64 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#F9E0E3] text-[#B983A6]">
              <Dumbbell size={24} aria-hidden="true" />
            </span>
            <div>
              <h2 className="editorial-color-kiss font-display text-4xl">
                Hur väljer du?
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-[#6f5a64]">
                Välj långa band om du vill träna hela kroppen med ett enda set.
                Välj loop-band om du främst gör ben, rumpa, höfter, pilates
                eller rehab och vill ha något extra kompakt.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          {traningsbandPicks.map((pick) => (
            <Link
              key={pick.product.slug}
              href={pick.path}
              className="group overflow-hidden rounded-[2.2rem] border border-[#F1D8DD] bg-white/72 shadow-[0_28px_90px_rgba(185,131,166,0.1)] transition hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] bg-[#FFF4F5]">
                <Image
                  src={pick.product.image}
                  alt={pick.product.imageAlt}
                  fill
                  sizes="(max-width: 768px) 92vw, 470px"
                  className="object-contain p-6 transition duration-500 group-hover:scale-[1.025]"
                />
                <span className="absolute left-5 top-5 rounded-full bg-[#c8919b]/90 px-4 py-2 text-sm font-black text-white backdrop-blur">
                  {pick.badge}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#D8788D]">
                  {pick.product.brand}
                </p>
                <h2 className="editorial-color-kiss mt-3 font-display text-3xl leading-tight">
                  {pick.headline}
                </h2>
                <p className="mt-4 leading-8 text-[#6f5a64]">
                  {pick.shortBody}
                </p>
                <span className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#D8A7B1] px-5 font-black text-white">
                  Läs recensionen
                  <ArrowUpRight size={18} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </section>

        <section className="mt-10 overflow-hidden rounded-[2rem] border border-[#F1D8DD] bg-white/72 shadow-[0_24px_70px_rgba(185,131,166,0.1)]">
          <div className="p-6 md:p-8">
            <h2 className="editorial-color-kiss font-display text-4xl">
              Snabb jämförelse
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[44rem] border-collapse text-left">
              <thead>
                <tr className="border-y border-[#F1D8DD] bg-[#FFF4F5]">
                  <th className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#9E5E73]">
                    Punkt
                  </th>
                  <th className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#9E5E73]">
                    WuGU naturlatex
                  </th>
                  <th className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#9E5E73]">
                    JAKKOFOXX loop band
                  </th>
                </tr>
              </thead>
              <tbody>
                {traningsbandComparisonRows.map(([label, latex, loop]) => (
                  <tr key={label} className="border-b border-[#F1D8DD]">
                    <th className="px-6 py-5 font-black text-[#4B2838]">
                      {label}
                    </th>
                    <td className="px-6 py-5 leading-7 text-[#6f5a64]">
                      {latex}
                    </td>
                    <td className="px-6 py-5 leading-7 text-[#6f5a64]">
                      {loop}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[#F1D8DD] bg-[#F9E9E9]/82 p-6 shadow-[0_26px_80px_rgba(185,131,166,0.12)] md:p-8">
          <h2 className="editorial-color-kiss font-display text-4xl">
            Elins korta dom
          </h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-[#6f5a64]">
            Långa träningsband är det smartaste valet för helkroppsstyrka hemma.
            JAKKOFOXX loop-band vinner när du vill ha ett billigt, kompakt och
            beprövat set för ben, rumpa och rehab.
          </p>
        </section>

        <RelatedLinks
          links={[
            {
              href: "/jamforelser",
              label: "Jämförelser",
              text: "Se alla Elins jämförelser samlade per kategori.",
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
