import { ProductCard } from "@/components/ProductCard";
import { getCategoryProductGroups } from "@/lib/categoryGroups";
import type { ProductCategorySlug } from "@/lib/products";

type CategoryProductSectionsProps = {
  categorySlug: ProductCategorySlug;
};

export function CategoryProductSections({
  categorySlug,
}: CategoryProductSectionsProps) {
  const groups = getCategoryProductGroups(categorySlug);

  return (
    <section className="mt-10" aria-label="Produktsektioner">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
          Produktkort
        </p>
        <h2 className="editorial-color-kiss mt-2 font-display text-4xl">
          Välj efter behov
        </h2>
      </div>

      <div className="mt-7 space-y-10">
        {groups.map((group, index) => {
          const headingId = `group-${categorySlug}-${index}`;

          return (
          <section key={group.title} aria-labelledby={headingId}>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#D8788D]">
                {group.products.length} val
              </p>
              <h3
                id={headingId}
                className="editorial-color-kiss mt-2 font-display text-3xl leading-tight"
              >
                {group.title}
              </h3>
            </div>

            <div className="mt-5 grid gap-6 md:grid-cols-2">
              {group.products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </section>
          );
        })}
      </div>
    </section>
  );
}
