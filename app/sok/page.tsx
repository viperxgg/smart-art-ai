import type { Metadata } from "next";
import { Suspense } from "react";

import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ProductSearch } from "@/components/ProductSearch";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sök produkter",
  description:
    "Sök bland Elins produktval – skriv en produkt, ett märke eller en kategori så visar vi träffarna.",
  alternates: {
    canonical: `${siteConfig.url}/sok`,
  },
  // Interna sökresultat ska inte indexeras (håller dem även utanför sitemap).
  robots: {
    index: false,
    follow: true,
  },
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Sök", href: "/sok" },
];

const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);

export default function SearchPage() {
  return (
    <main
      id="content"
      className="min-h-screen bg-[#FFF9F7] px-4 py-8 text-[#3E2F3A]"
    >
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto w-full max-w-5xl pb-28">
        <div className="mb-5">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <section className="rounded-[2.4rem] border border-[#F1D8DD] bg-white/72 p-7 shadow-[0_28px_80px_rgba(185,131,166,0.12)] md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
            Hitta rätt direkt
          </p>
          <h1 className="editorial-color-kiss mt-4 font-display text-5xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">
            Vad letar du efter?
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#6f5a64]">
            Skriv en produkt, ett märke eller en kategori – så visar Elin de val
            som matchar.
          </p>

          <div className="mt-7">
            <Suspense fallback={null}>
              <ProductSearch />
            </Suspense>
          </div>
        </section>
      </div>
    </main>
  );
}
