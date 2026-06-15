import Link from "next/link";
import { ArrowUpRight, HeartPulse, Home, Sparkles } from "lucide-react";

import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";
import { RelatedLinks } from "@/components/RelatedLinks";
import { massagepistolPicks } from "@/lib/massagepistol";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Hälsa | Elins val",
  description:
    "Elins val inom hälsa, återhämtning och vardagsprodukter som är lätta att förstå och faktiskt kan passa in hemma.",
  url: `${siteConfig.url}/halsa`,
  image: {
    url: `${siteConfig.url}${massagepistolPicks[0].product.image}`,
    width: 1024,
    height: 1024,
    alt: massagepistolPicks[0].product.imageAlt,
  },
});

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Hälsa", href: "/halsa" },
];

const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);

export default function HalsaHubPage() {
  return (
    <main
      id="content"
      className="min-h-screen bg-[#FFF9F7] px-4 py-8 text-[#3E2F3A]"
    >
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto w-full max-w-5xl pb-24">
        <div className="mb-5">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-bold text-[#6b4755] transition hover:text-[#B983A6]"
        >
          <Home size={18} aria-hidden="true" />
          Tillbaka till Elins val
        </Link>

        <section className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
              Elins hälsoval
            </p>
            <h1 className="editorial-color-kiss mt-4 font-display text-5xl leading-[1.02] tracking-[-0.04em] sm:text-7xl">
              Hälsa som känns enkel.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-[#6f5a64]">
              Här samlar Elin produkter för återhämtning, välmående och
              vardagsrutiner. Inte allt som trendar, bara det som känns rimligt
              att faktiskt använda.
            </p>
          </div>

          <Link
            href="/halsa/massagepistol"
            className="group overflow-hidden rounded-[2.2rem] border border-[#F1D8DD] bg-white/72 p-7 shadow-[0_28px_80px_rgba(185,131,166,0.14)] transition hover:-translate-y-1"
          >
            <div className="flex items-start gap-5">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-3xl bg-[#F9E0E3] text-[#B983A6]">
                <HeartPulse size={30} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
                  Guide 2026
                </p>
                <h2 className="editorial-color-kiss mt-3 font-display text-4xl leading-tight">
                  Massagepistol
                </h2>
                <p className="mt-4 text-lg leading-8 text-[#6f5a64]">
                  Två tydliga val: ett tryggt märkesval och ett kraftfullt
                  prisvärt alternativ.
                </p>
                <span className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#D8A7B1] px-5 font-black text-white">
                  Läs Elins guide
                  <ArrowUpRight size={18} aria-hidden="true" />
                </span>
              </div>
            </div>
          </Link>
        </section>

        <section className="mt-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
              Produktkort
            </p>
            <h2 className="editorial-color-kiss mt-2 font-display text-4xl">
              Massagepistoler Elin jämför
            </h2>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {massagepistolPicks.map((pick) => (
              <ProductCard key={pick.product.slug} product={pick.product} />
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[#F1D8DD] bg-white/64 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)]">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#F9E0E3] text-[#B983A6]">
              <Sparkles size={24} aria-hidden="true" />
            </span>
            <div>
              <h2 className="editorial-color-kiss font-display text-3xl">
                Mindre hype. Mer vardagsnytta.
              </h2>
              <p className="mt-3 text-lg leading-8 text-[#6f5a64]">
                Varje guide ska hjälpa dig förstå vad produkten passar för,
                vem som bör avstå och var du kan läsa mer innan köp.
              </p>
            </div>
          </div>
        </section>

        <RelatedLinks
          links={[
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
          ]}
        />
      </div>
    </main>
  );
}
