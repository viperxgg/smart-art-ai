import type { Metadata } from "next";

import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Elins val | Utvalda produkter",
  description:
    "Elins samlade produktval inom träning, hälsa och återhämtning.",
  alternates: {
    canonical: `${siteConfig.url}/elins-val`,
  },
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Elins val", href: "/elins-val" },
];

const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);

export default function ElinsValPage() {
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

        <section className="rounded-[2.4rem] border border-line bg-surface/72 p-7 shadow-[0_28px_80px_rgba(185,131,166,0.12)] md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-rose">
            Elins urval
          </p>
          <h1 className="editorial-color-kiss mt-4 font-display text-5xl leading-[1.02] tracking-[-0.04em] sm:text-7xl">
            Produkter som fastnade.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-ink-soft">
            Inte allt som syns i flödet. Bara produkter som är enkla att förstå,
            rimliga att använda och värda en närmare titt.
          </p>
        </section>

        <section className="mt-8 grid gap-8">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </section>
      </div>
    </main>
  );
}
