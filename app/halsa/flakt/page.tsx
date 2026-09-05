// 2026-09-05: hub minimum for Fas 1 A1 — editorial meta, a link to the
// "bäst i test" page and the two fans missing from flaktPicks. Reads
// lib/flakt.ts and lib/products.ts (SHARED_LIB_MODULES), so this dated comment
// is what moves the route's sitemap date.
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  SlidersHorizontal,
  Wind,
} from "lucide-react";

import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { AmazonPurchaseLinks } from "@/components/AmazonPurchaseCta";
import { EditorialMeta } from "@/components/EditorialMeta";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { flaktComparisonRows, flaktFaqItems, flaktPicks } from "@/lib/flakt";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/halsa/flakt`;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: flaktFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const metadata = createSeoMetadata({
  title: "Fläkt – Elins guide och bäst i test 2026 | Elins val",
  description:
    "Elins fläktguide: tornfläkt, golvfläkt och bordsfläkt jämförda – och bäst i test bland tysta fläktar för sovrummet. Se vilken som passar ditt rum.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${flaktPicks[0].product.image}`,
    width: 1024,
    height: 1024,
    alt: flaktPicks[0].product.imageAlt,
  },
});

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Hälsa", href: "/halsa" },
  { name: "Fläkt", href: "/halsa/flakt" },
];

const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);

export default function FlaktHubPage() {
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
            href="/halsa"
            className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-bold text-ink-soft transition hover:text-wine"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Tillbaka till hälsa
          </Link>
          <p className="rounded-full border border-line bg-surface/70 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-wine">
            Guide
          </p>
        </header>

        <section className="mt-10 overflow-hidden rounded-[2.4rem] border border-line bg-surface/72 p-7 shadow-[0_30px_90px_rgba(185,131,166,0.12)] md:p-10">
          <p className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-rose/8 px-5 text-sm font-black text-wine">
            <Wind size={18} aria-hidden="true" />
            Elins guide 2026
          </p>
          <h1 className="editorial-color-kiss mt-6 max-w-4xl font-display text-5xl leading-[1.02] tracking-[-0.04em] sm:text-7xl">
            Fläkt - dyr vs billig utan krångel
          </h1>
          <EditorialMeta path="/halsa/flakt" className="mt-6" />
          <p className="mt-6 max-w-3xl text-xl leading-9 text-ink-soft">
            Tre tydliga val för sommarvärme hemma: tyst premium, sovrumsvänligt
            värde och kraftfull budget för riktad svalka.
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
              <SlidersHorizontal size={24} aria-hidden="true" />
            </span>
            <div>
              <h2 className="editorial-color-kiss font-display text-4xl">
                Hur väljer du?
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-ink-soft">
                Börja med ljudnivån. Vill du ha absolut tystast drift är Dreo
                mer bekväm. Vill du ha nattläge och timer till mellanpris är
                Midea stark. Vill du ha riktad luft vid skrivbordet räcker
                Honeywell långt.
              </p>
            </div>
          </div>
        </section>

        <section className="reveal-fade mt-10">
          <Link
            href="/guider/tyst-flakt-sovrum"
            className="group flex flex-wrap items-center justify-between gap-4 rounded-[2rem] border border-line bg-rose/12 p-6 shadow-[0_26px_80px_rgba(185,131,166,0.12)] transition hover:-translate-y-0.5 md:p-8"
          >
            <span className="min-w-0">
              <span className="block text-xs font-black uppercase tracking-[0.16em] text-rose">
                Bäst i test 2026
              </span>
              <span className="editorial-color-kiss mt-3 block font-display text-3xl leading-tight">
                Tyst fläkt till sovrummet
              </span>
              <span className="mt-3 block max-w-2xl leading-8 text-ink-soft">
                Fem fläktar jämförda på ljudnivå, nattläge, timer och köparnas
                omdömen – och den du helst hoppar över.
              </span>
            </span>
            <span className="inline-flex min-h-12 items-center gap-2 rounded-full bg-wine px-5 font-black text-bg shadow-[0_18px_42px_rgba(109,60,77,0.3)] transition group-hover:bg-wine/90">
              Läs jämförelsen
              <ArrowUpRight size={18} aria-hidden="true" />
            </span>
          </Link>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {flaktPicks.map((pick) => (
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

        <section className="reveal-fade mt-10 rounded-[2rem] border border-line bg-surface/64 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] md:p-8">
          <h2 className="editorial-color-kiss font-display text-3xl">
            Fler fläktar Elin jämför
          </h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              {
                href: "/halsa/flakt/midea-golvflakt",
                title: "Midea MFS400 golvfläkt",
                text: "DC-motor, fjärrkontroll och timer för större rum.",
              },
              {
                href: "/halsa/bordsflakt",
                title: "Xiaomi Mi Smart Standing Fan 2 Lite",
                text: "Smart golv- och bordsfläkt med appstyrning.",
              },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex min-h-24 items-center justify-between gap-4 rounded-3xl bg-rose/8 p-5 transition hover:-translate-y-0.5 hover:bg-rose/15"
                >
                  <span>
                    <span className="block font-display text-[1.35rem] font-black leading-tight text-ink">
                      {item.title}
                    </span>
                    <span className="mt-2 block leading-7 text-ink-soft">
                      {item.text}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-wine transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <AmazonPurchaseLinks
          products={flaktPicks.map((pick) => pick.product)}
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
                    Dreo Cruiser Pro
                  </th>
                  <th className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-wine">
                    Midea FZ10
                  </th>
                  <th className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-wine">
                    Honeywell TurboForce
                  </th>
                </tr>
              </thead>
              <tbody>
                {flaktComparisonRows.map(([label, dreo, midea, honeywell]) => (
                  <tr key={label} className="border-b border-line">
                    <th className="px-6 py-5 font-black text-ink">
                      {label}
                    </th>
                    <td className="px-6 py-5 leading-7 text-ink-soft">
                      {dreo}
                    </td>
                    <td className="px-6 py-5 leading-7 text-ink-soft">
                      {midea}
                    </td>
                    <td className="px-6 py-5 leading-7 text-ink-soft">
                      {honeywell}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="reveal-fade mt-12 rounded-[2rem] border border-line bg-rose/10 p-6 shadow-[0_26px_80px_rgba(185,131,166,0.12)] md:p-8">
          <div className="flex items-start gap-4">
            <ShieldCheck className="mt-1 shrink-0 text-wine" size={24} />
            <div>
              <h2 className="editorial-color-kiss font-display text-4xl">
                Elins korta dom
              </h2>
              <p className="mt-4 max-w-4xl text-lg leading-8 text-ink-soft">
                Dreo är premiumvalet om tystnad och helrumsflöde spelar roll.
                Midea är värdevalet för sovrum med nattläge och timer.
                Honeywell är budgetvalet om du mest vill ha snabb, riktad
                svalka och accepterar mer ljud.
              </p>
            </div>
          </div>
        </section>

        <RelatedLinks
          links={[
            {
              href: "/guider/flakt-dyr-vs-billig",
              label: "Guide",
              text: "Läs den ärliga jämförelsen mellan dyr och billig fläkt.",
            },
            {
              href: "/halsa",
              label: "Hälsa",
              text: "Gå tillbaka till Elins samlade hälsoval.",
            },
            {
              href: "/sommar",
              label: "Sommar",
              text: "Se fler produkter för varma dagar och lugna kvällar.",
            },
          ]}
        />
      </div>
    </main>
  );
}
