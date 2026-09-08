import type { Metadata } from "next";

import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Elins val | Hitta produktinformation",
  description:
    "Hitta produktinformation inom skönhet, hälsa och träning. Läs användningsfall, begränsningar och källor där beslutsunderlag finns.",
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
      tabIndex={-1}
      className="min-h-screen bg-bg px-4 py-8 text-ink"
    >
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto w-full max-w-5xl pb-24">
        <div className="mb-5">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <section className="rounded-[2.4rem] border border-line bg-surface/72 p-7 shadow-[0_28px_80px_rgba(185,131,166,0.12)] md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-rose">
            Produktöversikt
          </p>
          <h1 className="editorial-color-kiss mt-4 font-display text-5xl leading-[1.02] tracking-[-0.04em] sm:text-7xl">
            Vad passar dina behov?
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-ink-soft">
            Börja med behovet och läs begränsningarna innan du överväger ett köp.
            Här finns både beslutsunderlag under arbete och produktposter som
            ännu saknar en granskning. Att en produkt finns här är ingen rekommendation.
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
