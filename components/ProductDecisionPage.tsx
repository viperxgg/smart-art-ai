import Link from "next/link";
import { DecisionCard } from "@/components/DecisionCard";
import { AmazonPurchaseCta } from "@/components/AmazonPurchaseCta";
import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ProductComments } from "@/components/ProductComments";
import { SaveProductButton } from "@/components/SaveProductButton";
import { validateDecisionRecord } from "@/lib/decision-record";
import type { ProductDecision } from "@/lib/product-decisions";
import type { ApprovedProductReview } from "@/lib/reviews/reviews";
import type { SommarPick } from "@/lib/sommar";

export function ProductDecisionPage({ pick, decision, reviews }: {
  pick: Pick<SommarPick, "product" | "href" | "reviewSectionId" | "reviewFormId">;
  decision: ProductDecision;
  reviews: ApprovedProductReview[];
}) {
  validateDecisionRecord(decision, [pick.product.slug]);
  const option = decision.options[0];
  const breadcrumbs = [
    { name: "Hem", href: "/" },
    { name: decision.category.label, href: decision.category.href },
    { name: option.model, href: pick.href },
  ];
  return (
    <main id="content" tabIndex={-1} className="min-h-screen bg-bg px-5 py-8 text-ink">
      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
      <div className="mx-auto max-w-5xl">
        <Breadcrumbs items={breadcrumbs} />
        <header className="mt-8 max-w-3xl">
          <p className="text-sm font-bold text-wine">Produktguide · Tillverkarkällor</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">Passar {option.model} dig?</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">Börja med behovet och vad som redan fungerar. Här hittar du underlaget för valet, begränsningarna och när du kan avstå.</p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">Redaktion: Elins val · <Link href="/om-oss#azzam" className="text-wine underline">Ansvarig utgivare: Azzam Khalaf</Link>. Webbplatsen innehåller affiliatelänkar och kan få ersättning vid köp.</p>
          <div className="mt-5"><SaveProductButton productSlug={pick.product.slug} productTitle={option.model} variant="pill" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 py-2 font-bold text-wine" /></div>
        </header>
        <DecisionCard decision={decision} />
        {option.merchantVariantVerified ? <div className="mt-6"><AmazonPurchaseCta product={pick.product} /></div> : null}
        <nav aria-label="Fortsätt jämföra" className="mt-8 flex flex-wrap gap-5 font-bold text-wine">
          <Link href={decision.comparison.href} className="underline underline-offset-4">{decision.comparison.label}</Link>
          <Link href="/fraga-elin" className="underline underline-offset-4">Fråga Elin – valfri AI-hjälp</Link>
        </nav>
        <div className="mt-10">
          <ProductComments product={pick.product} reviews={reviews} turnstileSiteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} sectionId={pick.reviewSectionId} formId={pick.reviewFormId} />
        </div>
      </div>
    </main>
  );
}
