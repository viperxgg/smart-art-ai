import Link from "next/link";
import { ArrowUpRight, HeartPulse, Home, Sparkles, Wind } from "lucide-react";

import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { CategoryComparisonSections } from "@/components/CategoryComparisonSections";
import { CategoryProductSections } from "@/components/CategoryProductSections";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Hälsa & livsstil | Elins val",
  description:
    "Jämför vardagsprodukter efter behov, begränsningar och källor. Börja med vad du vill förändra hemma och när du kan avstå från köp.",
  url: `${siteConfig.url}/halsa`,
});

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Hälsa & livsstil", href: "/halsa" },
];

const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);

export default function HalsaHubPage() {
  return (
    <main
      id="content"
      tabIndex={-1}
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
              Hälsa & vardag
            </p>
            <h1 className="editorial-color-kiss mt-4 font-display text-5xl leading-[1.02] tracking-[-0.04em] sm:text-7xl">
              Vad behöver du förändra hemma?
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-ink-soft">
              Börja med ett konkret behov och jämför vad produkterna kan
              och inte kan göra. Läs källorna och vad som ännu inte är
              verifierat innan du väljer.
            </p>
          </div>

          <div className="grid gap-4">
            <Link
              href="/halsa/luftfuktare-eller-luftrenare"
              className="group overflow-hidden rounded-[2.2rem] border border-line bg-surface/72 p-7 shadow-[0_28px_80px_rgba(185,131,166,0.14)] transition hover:-translate-y-1"
            >
              <div className="flex items-start gap-5">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-3xl bg-rose/15 text-wine">
                  <HeartPulse size={30} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-rose">
                    Guide 2026
                  </p>
                  <h2 className="editorial-color-kiss mt-3 font-display text-4xl leading-tight">
                    Behöver du fukta eller filtrera luften?
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-ink-soft">
                    Olika uppgifter kräver olika val. Läs om funktion, skötsel
                    och när ingen av produkterna löser ditt behov.
                  </p>
                  <span className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-wine px-5 font-black text-bg shadow-[0_18px_42px_rgba(109,60,77,0.3)] transition group-hover:bg-wine/90">
                    Läs Elins guide
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/halsa/flakt"
              className="group overflow-hidden rounded-[2.2rem] border border-line bg-surface/72 p-7 shadow-[0_28px_80px_rgba(185,131,166,0.14)] transition hover:-translate-y-1"
            >
              <div className="flex items-start gap-5">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-3xl bg-rose/15 text-wine">
                  <Wind size={30} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-rose">
                    Användning och begränsningar
                  </p>
                  <h2 className="editorial-color-kiss mt-3 font-display text-4xl leading-tight">
                    Vilken fläkt passar ditt rum?
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-ink-soft">
                    Jämför placering och reglage. Ljudvärden och pris
                    behöver rätt sammanhang innan du drar slutsatser.
                  </p>
                  <span className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-wine px-5 font-black text-bg shadow-[0_18px_42px_rgba(109,60,77,0.3)] transition group-hover:bg-wine/90">
                    Läs fläktguiden
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <CategoryProductSections categorySlug="halsa" />
        <CategoryComparisonSections categorySlug="halsa" />

        <section className="reveal-fade mt-12 rounded-[2rem] border border-line bg-surface/64 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)]">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-rose/15 text-wine">
              <Sparkles size={24} aria-hidden="true" />
            </span>
            <div>
              <h2 className="editorial-color-kiss font-display text-3xl">
                Mindre hype. Mer vardagsnytta.
              </h2>
              <p className="mt-3 text-lg leading-8 text-ink-soft">
                Varje guide ska hjälpa dig förstå vad produkten passar för, vem
                som bör avstå och var du kan läsa mer innan köp.
              </p>
            </div>
          </div>
        </section>

        <RelatedLinks
          links={[
            {
              href: "/halsa/morka-morgnar",
              label: "Höst & vinter",
              text: "Mörka morgnar: dagsljuslampa, wake-up light och mjukt kvällssken.",
            },
            {
              href: "/halsa/sov-battre-i-host",
              label: "Sömn",
              text: "Sov bättre i höst: sovmask, white noise och tyngdtäcke.",
            },
            {
              href: "/traning/traningsband-naturlatex",
              label: "Träning",
              text: "Läs Elins genomgång av träningsband i naturlatex.",
            },
            {
              href: "/traning",
              label: "Hemmaträning",
              text: "Se fler enkla val för träning som faktiskt får plats hemma.",
            },
            {
              href: "/halsa/kindle-eller-kobo",
              label: "Läsning",
              text: "Kindle eller Kobo – jämför format, tjänster och begränsningar.",
            },
          ]}
        />
      </div>
    </main>
  );
}
