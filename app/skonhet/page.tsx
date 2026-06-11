import Link from "next/link";
import { ArrowUpRight, Home, Sparkles, WandSparkles } from "lucide-react";

import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";
import { RelatedLinks } from "@/components/RelatedLinks";
import { plattangPicks } from "@/lib/plattang";
import { createSeoMetadata } from "@/lib/metadata";
import { getProductsByCategory } from "@/lib/products";
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
  const beautyProducts = getProductsByCategory("skonhet");

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
              Elins skönhetsval
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] tracking-[-0.04em] text-[#4B2838] sm:text-7xl">
              Skönhet utan överköp.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-[#6f5a64]">
              Här samlar Elin skönhetsprodukter som känns enkla att förstå:
              vad de passar för, när de är värda pengarna och när du hellre
              ska välja något annat.
            </p>
          </div>

          <Link
            href="/skonhet/plattang"
            className="group overflow-hidden rounded-[2.2rem] border border-[#F1D8DD] bg-white/72 p-7 shadow-[0_28px_80px_rgba(185,131,166,0.14)] transition hover:-translate-y-1"
          >
            <div className="flex items-start gap-5">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-3xl bg-[#F9E0E3] text-[#B983A6]">
                <WandSparkles size={30} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
                  Guide 2026
                </p>
                <h2 className="mt-3 font-display text-4xl leading-tight text-[#4B2838]">
                  Plattång
                </h2>
                <p className="mt-4 text-lg leading-8 text-[#6f5a64]">
                  Två tydliga val: en fullstor plattång för hemma och en mini
                  för resa och snabba fix.
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
            <h2 className="mt-2 font-display text-4xl text-[#4B2838]">
              Skönhetsval Elin jämför
            </h2>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {beautyProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[#F1D8DD] bg-white/64 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)]">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#F9E0E3] text-[#B983A6]">
              <Sparkles size={24} aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-3xl text-[#4B2838]">
                Mer värde. Mindre badrumslåda.
              </h2>
              <p className="mt-3 text-lg leading-8 text-[#6f5a64]">
                Varje skönhetsval ska snabbt förklara vem produkten passar,
                vad som gör den prisvärd och vilken liten nackdel du bör känna
                till.
              </p>
            </div>
          </div>
        </section>

        <RelatedLinks
          links={[
            {
              href: "/halsa",
              label: "Hälsa",
              text: "Se Elins val för återhämtning och vardagsvälmående.",
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
