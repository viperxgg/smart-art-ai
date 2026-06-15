import Link from "next/link";
import { Dumbbell, Home } from "lucide-react";

import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";
import { RelatedLinks } from "@/components/RelatedLinks";
import { createSeoMetadata } from "@/lib/metadata";
import {
  amazonBasicsKettlebellProduct,
  featuredProduct,
  proironSoftKettlebellProduct,
  proironNeopreneDumbbellsProduct,
  prosourcefitYogaMatProduct,
  songmicsDumbbellSetProduct,
  yogatiTpeYogaMatProduct,
} from "@/lib/products";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Träning hemma | Elins val",
  description:
    "Elins val inom enkel hemmaträning: produkter som tar lite plats, är lätta att förstå och faktiskt passar i vardagen.",
  url: `${siteConfig.url}/traning`,
  image: {
    url: `${siteConfig.url}${featuredProduct.image}`,
    width: 1024,
    height: 1024,
    alt: featuredProduct.imageAlt,
  },
});

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Träning", href: "/traning" },
];

const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);

export default function TraningHubPage() {
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
              Elins träningsval
            </p>
            <h1 className="editorial-color-kiss mt-4 font-display text-5xl leading-[1.02] tracking-[-0.04em] sm:text-7xl">
              Träning som får plats hemma.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-[#6f5a64]">
              Här samlar Elin produkter som gör hemmaträning mindre krånglig:
              enkla att använda, lätta att förvara och tydliga nog att förstå på
              några sekunder.
            </p>
          </div>

          <ProductCard product={featuredProduct} priority />
        </section>

        <section className="mt-10 rounded-[2rem] border border-[#F1D8DD] bg-white/64 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)]">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#F9E0E3] text-[#B983A6]">
              <Dumbbell size={24} aria-hidden="true" />
            </span>
            <div>
              <h2 className="editorial-color-kiss font-display text-3xl">
                Mindre utrustning. Mer rörelse.
              </h2>
              <p className="mt-3 text-lg leading-8 text-[#6f5a64]">
                Fokus här är inte extrema gymprylar, utan saker som faktiskt kan
                bli använda även när vardagen är full.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
                Kettlebell
              </p>
              <h2 className="editorial-color-kiss mt-2 font-display text-4xl">
                Gjutjärn eller mjuk?
              </h2>
              <p className="mt-3 max-w-2xl text-lg leading-8 text-[#6f5a64]">
                Elin jämför bästa värdet för riktig träning med ett mjukare val
                för lägenhet, golv och nybörjare.
              </p>
            </div>
            <Link
              href="/traning/kettlebell"
              className="hidden min-h-11 shrink-0 items-center rounded-full border border-[#E9CDD3] bg-white/70 px-5 text-sm font-black text-[#9E5E73] transition hover:-translate-y-0.5 hover:bg-white sm:inline-flex"
            >
              Se guiden
            </Link>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <ProductCard product={amazonBasicsKettlebellProduct} />
            <ProductCard product={proironSoftKettlebellProduct} />
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
                Hantlar
              </p>
              <h2 className="editorial-color-kiss mt-2 font-display text-4xl">
                Ett par eller ett helt set?
              </h2>
              <p className="mt-3 max-w-2xl text-lg leading-8 text-[#6f5a64]">
                Elin jämför enklaste vägen in med ett par i rätt vikt mot ett
                komplett hantelset med ställning.
              </p>
            </div>
            <Link
              href="/traning/hantlar"
              className="hidden min-h-11 shrink-0 items-center rounded-full border border-[#E9CDD3] bg-white/70 px-5 text-sm font-black text-[#9E5E73] transition hover:-translate-y-0.5 hover:bg-white sm:inline-flex"
            >
              Se guiden
            </Link>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <ProductCard product={proironNeopreneDumbbellsProduct} />
            <ProductCard product={songmicsDumbbellSetProduct} />
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
                Yogamatta
              </p>
              <h2 className="editorial-color-kiss mt-2 font-display text-4xl">
                Mjuk komfort eller bättre grepp?
              </h2>
              <p className="mt-3 max-w-2xl text-lg leading-8 text-[#6f5a64]">
                Elin jämför en extra tjock matta för pilates och golvövningar
                med en greppigare TPE-matta för yoga och balans.
              </p>
            </div>
            <Link
              href="/traning/yogamatta"
              className="hidden min-h-11 shrink-0 items-center rounded-full border border-[#E9CDD3] bg-white/70 px-5 text-sm font-black text-[#9E5E73] transition hover:-translate-y-0.5 hover:bg-white sm:inline-flex"
            >
              Se guiden
            </Link>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <ProductCard product={prosourcefitYogaMatProduct} />
            <ProductCard product={yogatiTpeYogaMatProduct} />
          </div>
        </section>

        <RelatedLinks
          links={[
            {
              href: "/traning/yogamatta",
              label: "Yogamatta",
              text: "Jämför extra dämpning mot bättre grepp och stabilitet.",
            },
            {
              href: "/traning/hantlar",
              label: "Hantlar",
              text: "Jämför ett enkelt par neoprenhantlar med ett komplett set.",
            },
            {
              href: "/traning/kettlebell",
              label: "Kettlebell",
              text: "Jämför gjutjärn mot mjuk kettlebell för hemmaträning.",
            },
            {
              href: "/halsa/massagepistol",
              label: "Återhämtning",
              text: "Jämför två massagepistoler för hemmabruk och återhämtning.",
            },
            {
              href: "/halsa",
              label: "Hälsa",
              text: "Se fler produkter inom hälsa, välmående och vardagsrutiner.",
            },
          ]}
        />
      </div>
    </main>
  );
}
