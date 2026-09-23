import Link from "next/link";

import { getCategoryProductGroups } from "@/lib/categoryGroups";
import { partnerComparisons } from "@/lib/partner-comparisons";
import { selectedProductRecords } from "@/lib/selected-product-records";
import type { ProductCategorySlug } from "@/lib/products";

export function PartnerCategoryLinks({ categorySlug }: { categorySlug: ProductCategorySlug }) {
  const prefix = `/${categorySlug}/`;
  const comparisons = partnerComparisons.filter((comparison) => comparison.path.startsWith(prefix));
  const comparisonProductIds = new Set(comparisons.flatMap((comparison) => comparison.productIds));
  const existingPaths = new Set(getCategoryProductGroups(categorySlug).flatMap((group) =>
    group.products.map((product) => product.pageHref ?? `${prefix}${product.slug}`),
  ));
  const products = selectedProductRecords.filter((product) => product.path.startsWith(prefix)
    && comparisonProductIds.has(product.id) && !existingPaths.has(product.path));

  if (!products.length && !comparisons.length) return null;

  return <section className="reveal-fade mt-12" aria-labelledby={`${categorySlug}-partner-pages`}>
    <p className="text-sm font-black uppercase tracking-[0.16em] text-rose">Nya källgranskade val</p>
    <h2 id={`${categorySlug}-partner-pages`} className="editorial-color-kiss mt-2 font-display text-4xl">Fördjupa ditt beslut</h2>
    <div className="mt-7 grid gap-5 md:grid-cols-2">
      {[...products.map((product) => ({ href: product.path, text: product.targetQuery ?? product.heading ?? product.question })),
        ...comparisons.map((comparison) => ({ href: comparison.path, text: comparison.targetQuery }))]
        .map((entry) => <Link key={entry.href} href={entry.href} className="inline-flex min-h-12 items-center rounded-2xl border border-line bg-surface/72 px-5 py-4 font-bold text-wine underline underline-offset-4">{entry.text}</Link>)}
    </div>
  </section>;
}
