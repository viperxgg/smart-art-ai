import Link from "next/link";
import { Dumbbell, Home } from "lucide-react";

import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { CategoryComparisonSections } from "@/components/CategoryComparisonSections";
import { CategoryProductSections } from "@/components/CategoryProductSections";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";
import { RelatedLinks } from "@/components/RelatedLinks";
import { createSeoMetadata } from "@/lib/metadata";
import { featuredProduct } from "@/lib/products";
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
              Elins träningsval
            </p>
            <h1 className="editorial-color-kiss mt-4 font-display text-5xl leading-[1.02] tracking-[-0.04em] sm:text-7xl">
              Träning som får plats hemma.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-ink-soft">
              Här samlar Elin produkter som gör hemmaträning mindre krånglig:
              enkla att använda, lätta att förvara och tydliga nog att förstå på
              några sekunder.
            </p>
          </div>

          <ProductCard product={featuredProduct} priority />
        </section>

        <section className="reveal-fade mt-12 rounded-[2rem] border border-line bg-surface/64 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)]">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-rose/15 text-wine">
              <Dumbbell size={24} aria-hidden="true" />
            </span>
            <div>
              <h2 className="editorial-color-kiss font-display text-3xl">
                Mindre utrustning. Mer rörelse.
              </h2>
              <p className="mt-3 text-lg leading-8 text-ink-soft">
                Fokus här är inte extrema gymprylar, utan saker som faktiskt kan
                bli använda även när vardagen är full.
              </p>
            </div>
          </div>
        </section>

        <CategoryProductSections categorySlug="traning" />
        <CategoryComparisonSections categorySlug="traning" />

        <RelatedLinks
          links={[
            {
              href: "/traning/traningsband",
              label: "Träningsband",
              text: "Jämför långa band i naturlatex med korta loop-band för ben och rumpa.",
            },
            {
              href: "/traning/foam-roller",
              label: "Foam roller",
              text: "Jämför en enkel slät rulle med ett komplett återhämtningsset.",
            },
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
              label: "Hälsa & livsstil",
              text: "Se fler produkter inom återhämtning, smart hem och vardagskänsla.",
            },
          ]}
        />
      </div>
    </main>
  );
}
