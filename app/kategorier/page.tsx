import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, FolderOpen } from "lucide-react";

import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import {
  activeProductCategories,
  getProductsByCategory,
} from "@/lib/products";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kategorier | Elins val",
  description:
    "Bläddra bland Elins aktiva produktkategorier: träning, hälsa och återhämtning.",
  alternates: {
    canonical: `${siteConfig.url}/kategorier`,
  },
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Kategorier", href: "/kategorier" },
];

const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);

export default function CategoriesPage() {
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
            Hitta rätt snabbt
          </p>
          <h1 className="editorial-color-kiss mt-4 font-display text-5xl leading-[1.02] tracking-[-0.04em] sm:text-7xl">
            Kategorier
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-[#6f5a64]">
            Bara aktiva kategorier visas här. Skönhet läggs till först när Elin
            har ett riktigt produktval där.
          </p>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          {activeProductCategories.map((category) => {
            const count = getProductsByCategory(category.slug).length;

            return (
              <Link
                key={category.slug}
                href={category.href}
                className="group rounded-[2rem] border border-[#F1D8DD] bg-white/70 p-6 shadow-[0_24px_70px_rgba(185,131,166,0.1)] transition hover:-translate-y-1 hover:bg-white"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#F9E0E3] text-[#B983A6]">
                  <FolderOpen size={26} aria-hidden="true" />
                </span>
                <h2 className="editorial-color-kiss mt-5 font-display text-4xl">
                  {category.label}
                </h2>
                <p className="mt-3 text-lg leading-8 text-[#6f5a64]">
                  {category.description}
                </p>
                <span className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#D8A7B1] px-5 font-black text-white">
                  {count} {count === 1 ? "produkt" : "produkter"}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </section>
      </div>
    </main>
  );
}
