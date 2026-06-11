import type { Metadata } from "next";

import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SavedProductsClient } from "@/components/SavedProductsClient";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sparat | Elins val",
  description:
    "Dina sparade produkter på Elins val. Sparas bara i din webbläsare.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: `${siteConfig.url}/sparat`,
  },
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Sparat", href: "/sparat" },
];

const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);

export default function SavedPage() {
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

        <section className="mb-8 rounded-[2.4rem] border border-[#F1D8DD] bg-white/72 p-7 shadow-[0_28px_80px_rgba(185,131,166,0.12)] md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
            Lokalt i din webbläsare
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[1.02] tracking-[-0.04em] text-[#4B2838] sm:text-7xl">
            Sparat
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-[#6f5a64]">
            Dina sparade produkter lagras bara i den här webbläsaren med
            localStorage. Inget konto, ingen cookie och ingen serverlista.
          </p>
        </section>

        <SavedProductsClient />
      </div>
    </main>
  );
}
