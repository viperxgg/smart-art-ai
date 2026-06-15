import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { ProductBadges, ScoreBadge } from "@/components/ProductBadges";
import { comparisonEntries } from "@/lib/comparisons";
import { createSeoMetadata } from "@/lib/metadata";
import {
  activeProductCategories,
  getProductBySlug,
} from "@/lib/products";
import { getEditorialScore } from "@/lib/scores";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Jämförelser | Elins val",
  description:
    "Alla Elins jämförelser samlade: två tydliga val, ärliga caveats och poäng som hjälper dig välja snabbare.",
  url: `${siteConfig.url}/jamforelser`,
});

export default function ComparisonsIndexPage() {
  return (
    <main className="min-h-screen bg-[#FFF9F7] px-4 py-7 text-[#3E2F3A]">
      <div className="mx-auto w-full max-w-6xl">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-bold text-[#6b4755] transition hover:text-[#B983A6]"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Tillbaka till Elins val
        </Link>

        <section className="mt-8 rounded-[2.4rem] border border-[#F1D8DD] bg-white/72 p-7 shadow-[0_30px_90px_rgba(185,131,166,0.12)] md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D8788D]">
            Jämförelser
          </p>
          <h1 className="editorial-color-kiss mt-4 max-w-4xl font-display text-5xl leading-[1.02] tracking-[-0.04em] sm:text-7xl">
            Två val. En tydligare väg.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-[#6f5a64]">
            Elin jämför närliggande produkter så att skillnaden blir praktisk:
            vem produkten passar, vad du får för pengarna och vilken kompromiss
            som är värd att känna till.
          </p>
        </section>

        <div className="mt-10 space-y-10">
          {activeProductCategories.map((category) => {
            const comparisons = comparisonEntries.filter(
              (comparison) => comparison.category === category.slug,
            );

            if (!comparisons.length) {
              return null;
            }

            return (
              <section key={category.slug} aria-labelledby={`${category.slug}-title`}>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h2
                      id={`${category.slug}-title`}
                      className="editorial-color-kiss font-display text-4xl"
                    >
                      {category.label}
                    </h2>
                    <p className="mt-2 max-w-2xl leading-7 text-[#6f5a64]">
                      {category.description}
                    </p>
                  </div>
                  <Link
                    href={category.href}
                    className="hidden min-h-11 items-center gap-2 rounded-full border border-[#E9CDD3] bg-white/70 px-5 text-sm font-black text-[#9E5E73] transition hover:-translate-y-0.5 hover:bg-white sm:inline-flex"
                  >
                    Se kategori
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {comparisons.map((comparison) => (
                    <ComparisonCard
                      key={comparison.href}
                      comparison={comparison}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}

function ComparisonCard({
  comparison,
}: {
  comparison: (typeof comparisonEntries)[number];
}) {
  const products = comparison.productSlugs
    .map((slug) => getProductBySlug(slug))
    .filter(Boolean);

  return (
    <Link
      href={comparison.href}
      className="group flex h-full flex-col rounded-[2rem] border border-[#F1D8DD] bg-white/72 p-5 shadow-[0_24px_70px_rgba(185,131,166,0.1)] transition hover:-translate-y-1 hover:bg-white"
    >
      <ProductBadges badges={comparison.badges} />
      <h3 className="editorial-color-kiss mt-5 font-display text-3xl leading-tight">
        {comparison.shortTitle}
      </h3>
      <p className="mt-3 leading-7 text-[#6f5a64]">{comparison.description}</p>
      <div className="mt-5 grid gap-3">
        {products.map((product) => {
          if (!product) {
            return null;
          }

          const score = getEditorialScore(product.slug);

          return (
            <div
              key={product.slug}
              className="rounded-2xl border border-[#F1D8DD] bg-[#FFF9F7] p-4"
            >
              <p className="font-black text-[#4B2838]">{product.title}</p>
              {score ? <ScoreBadge score={score} className="mt-3" /> : null}
            </div>
          );
        })}
      </div>
      <span className="mt-5 inline-flex min-h-11 items-center gap-2 self-start rounded-full bg-[#D8788D] px-5 text-sm font-black text-white shadow-[0_16px_38px_rgba(217,125,145,0.24)]">
        Öppna jämförelsen
        <ArrowUpRight size={16} aria-hidden="true" />
      </span>
    </Link>
  );
}
