import Link from "next/link";
import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ProductComments } from "@/components/ProductComments";
import { SaveProductButton } from "@/components/SaveProductButton";
import type { ApprovedProductReview } from "@/lib/reviews/reviews";
import type { SommarPick } from "@/lib/sommar";

export function UnreviewedProductPage({ pick, reviews }: {
  pick: Pick<SommarPick, "product" | "href" | "reviewSectionId" | "reviewFormId">;
  reviews: ApprovedProductReview[];
}) {
  const categories = { skonhet: ["Skönhet", "/skonhet"], halsa: ["Hälsa", "/halsa"], traning: ["Träning", "/traning"], resa: ["Resa", "/sommar/resa"] };
  const [category, categoryHref] = categories[pick.product.category];
  const breadcrumbs = [{ name: "Hem", href: "/" }, { name: category, href: categoryHref }, { name: pick.product.title, href: pick.href }];
  return (
    <main id="content" tabIndex={-1} className="min-h-screen bg-bg px-5 py-8 text-ink">
      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
      <div className="mx-auto max-w-5xl">
        <Breadcrumbs items={breadcrumbs} />
        <header className="mt-8 max-w-3xl">
          <p className="text-sm font-bold text-wine">Produktunderlag under granskning</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">{pick.product.title} – vad behöver du veta före köp?</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">Vi har ännu inte ett färdiggranskat underlag för att rekommendera den här produkten. Produktnamnet kommer från vår katalog; exakt variant och aktuellt erbjudande behöver kontrolleras.</p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">Redaktion: Elins val · <Link href="/om-oss#azzam" className="underline">Ansvarig utgivare: Azzam Khalaf</Link>. Webbplatsen innehåller affiliatelänkar och kan få ersättning vid köp.</p>
          <div className="mt-5"><SaveProductButton productSlug={pick.product.slug} productTitle={pick.product.title} variant="pill" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 py-2 font-bold text-wine" /></div>
        </header>
        <section aria-labelledby="decision-title" className="mt-8 rounded-3xl border border-line bg-surface/75 p-6">
          <h2 id="decision-title" className="font-display text-2xl font-bold">Ditt beslut medan underlaget saknas</h2>
          <dl className="mt-5 space-y-5 leading-relaxed">
            <div><dt className="font-bold">Vad behöver du kontrollera?</dt><dd>Utgå från uppgiften du vill lösa. Kontrollera modell, variant och de mått, material, ingredienser eller tillbehör som är avgörande för just ditt behov. Vi kan ännu inte styrka en produktspecifik rekommendation här.</dd></div>
            <div><dt className="font-bold">När bör du avvakta?</dt><dd>När en viktig egenskap, begränsning eller användningsanvisning inte går att bekräfta. Ett produktnamn eller ett kundbetyg ersätter inte den kontrollen.</dd></div>
            <div><dt className="font-bold">När kan ett merpris vara motiverat?</dt><dd>När en dokumenterad skillnad löser ett behov du har. Vi har inte visat någon sådan prisjämförelse för den här produkten.</dd></div>
            <div><dt className="font-bold">När kan du avstå helt?</dt><dd>När det du redan har fungerar, eller när du inte saknar någon konkret funktion. En extra produkt behöver inte vara nästa steg.</dd></div>
          </dl>
        </section>
        <section aria-labelledby="evidence-title" className="mt-8 max-w-3xl">
          <h2 id="evidence-title" className="font-display text-2xl font-bold">Vad vet vi inte ännu?</h2>
          <p className="mt-3 leading-relaxed text-ink-soft">Källor, relevant svensk variant, bildrättigheter och erbjudande behöver granskas. Vi redovisar inget eget testresultat eller redaktionellt betyg utan underlag. Besökarnas eventuella kommentarer nedan är deras erfarenheter och innebär inte att redaktionen har testat produkten.</p>
        </section>
        <nav aria-label="Fortsätt jämföra" className="mt-8 flex flex-wrap gap-5 font-bold text-wine">
          <Link href={categoryHref} className="underline underline-offset-4">Utforska {category.toLocaleLowerCase("sv")}</Link>
          <Link href="/jamforelser" className="underline underline-offset-4">Hitta en jämförelse efter behov</Link>
          <Link href="/fraga-elin" className="underline underline-offset-4">Fråga Elin – valfri AI-hjälp</Link>
        </nav>
        <div className="mt-10"><ProductComments product={pick.product} reviews={reviews} turnstileSiteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} sectionId={pick.reviewSectionId} formId={pick.reviewFormId} /></div>
      </div>
    </main>
  );
}
