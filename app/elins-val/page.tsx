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
      className="min-h-screen bg-[#FFF9F7] px-4 py-8 text-[#3E2F3A]"
    >
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto w-full max-w-5xl pb-24">
        <div className="mb-5">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <section className="rounded-[2.4rem] border border-[#F1D8DD] bg-white/72 p-7 shadow-[0_28px_80px_rgba(185,131,166,0.12)] md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
            Elins urval
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[1.02] tracking-[-0.04em] text-[#4B2838] sm:text-7xl">
            Produkter som fastnade.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-[#6f5a64]">
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
