import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ProductBadges } from "@/components/ProductBadges";
import { getComparisonsByCategory } from "@/lib/comparisons";
import type { ProductCategorySlug } from "@/lib/products";

type CategoryComparisonSectionsProps = {
  categorySlug: ProductCategorySlug;
};

export function CategoryComparisonSections({
  categorySlug,
}: CategoryComparisonSectionsProps) {
  const comparisons = getComparisonsByCategory(categorySlug);

  if (!comparisons.length) {
    return null;
  }

  return (
    <section className="mt-10" aria-labelledby={`${categorySlug}-comparisons`}>
      <div>
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
          Jämförelser
        </p>
        <h2
          id={`${categorySlug}-comparisons`}
          className="editorial-color-kiss mt-2 font-display text-4xl"
        >
          När valet står mellan två
        </h2>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {comparisons.map((comparison) => (
          <Link
            key={comparison.href}
            href={comparison.href}
            className="group rounded-[2rem] border border-[#F1D8DD] bg-white/72 p-5 shadow-[0_24px_70px_rgba(185,131,166,0.1)] transition hover:-translate-y-1 hover:bg-white"
          >
            <ProductBadges badges={comparison.badges.slice(0, 3)} />
            <h3 className="editorial-color-kiss mt-4 font-display text-3xl leading-tight">
              {comparison.shortTitle}
            </h3>
            <p className="mt-3 leading-7 text-[#6f5a64]">
              {comparison.description}
            </p>
            <span className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#D8788D] px-5 text-sm font-black text-white shadow-[0_16px_38px_rgba(217,125,145,0.24)]">
              Öppna jämförelsen
              <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
