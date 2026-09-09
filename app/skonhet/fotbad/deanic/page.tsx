import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ProductComments } from "@/components/ProductComments";
import { SaveProductButton } from "@/components/SaveProductButton";
import { createSeoMetadata } from "@/lib/metadata";
import { getProductBySlug } from "@/lib/products";
import { getApprovedReviews } from "@/lib/reviews/reviews";
import { siteConfig } from "@/lib/site";

const path = "/skonhet/fotbad/deanic";
const title = "DEANIC fotbad – vad behöver kontrolleras före köp?";
const intro = "Vi har ännu inte kunnat matcha den här DEANIC-varianten mot tillverkarens mått och anvisningar. Därför ger vi ingen köprekommendation eller bedömning av prisvärdet.";
const breadcrumbs = [{ name: "Hem", href: "/" }, { name: "Skönhet", href: "/skonhet" }, { name: "DEANIC fotbad", href: path }];
export const revalidate = 3600;
export const metadata = createSeoMetadata({ title, description: intro, url: `${siteConfig.url}${path}` });

export default async function DeanicPage() {
  const product = getProductBySlug("deanic-fotbad");
  if (!product) notFound();
  const reviews = await getApprovedReviews(product.slug);
  return (
    <main id="content" tabIndex={-1} className="min-h-screen bg-bg px-5 py-8 text-ink">
      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
      <div className="mx-auto max-w-5xl">
        <Breadcrumbs items={breadcrumbs} />
        <header className="mt-5 max-w-3xl">
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl">{title}</h1>
          <p className="mt-4 leading-relaxed text-ink-soft">{intro}</p>
          <p className="mt-3 text-sm text-ink-soft">Elins val kan få ersättning via affiliatelänkar. <Link href="/om-oss#sa-tjanar-vi-pengar" className="underline">Så tjänar vi pengar</Link>.</p>
          <div className="mt-5"><SaveProductButton productSlug={product.slug} productTitle="DEANIC fotbad" variant="pill" className="inline-flex min-h-11 items-center rounded-full border border-line px-4 py-2 font-bold text-wine" /></div>
        </header>
        <section aria-labelledby="decision-title" className="mt-8 rounded-3xl border border-line bg-surface/75 p-6">
          <h2 id="decision-title" className="font-display text-2xl font-bold">Ditt beslut innan uppgifterna är verifierade</h2>
          <dl className="mt-5 space-y-5 leading-relaxed">
            <div><dt className="font-bold">Om du söker ett hopfällbart fotbad</dt><dd>Kontrollera innermått, höjd efter hopfällning, stabilitet och tillåten användning för exakt variant. Vi kan ännu inte bekräfta dessa uppgifter för den här produkten.</dd></div>
            <div><dt className="font-bold">Avstå tills du vet mer om</dt><dd>Passformen, förvaringsutrymmet eller anvisningarna avgör om köpet fungerar för dig. Mått från en liknande balja eller en annan färg räcker inte som verifiering.</dd></div>
            <div><dt className="font-bold">När kan ett merpris vara motiverat?</dt><dd>Först när en dokumenterad skillnad löser ett behov du har. Vi har inga jämförbara pris-, hållbarhets- eller användningstester för DEANIC.</dd></div>
            <div><dt className="font-bold">När kan du avstå helt?</dt><dd>Om en lämplig balja du redan har fungerar och du inte behöver någon ny funktion finns inget visat skäl att köpa ytterligare en.</dd></div>
          </dl>
        </section>
        <section aria-labelledby="evidence-title" className="mt-8 max-w-3xl">
          <h2 id="evidence-title" className="font-display text-2xl font-bold">Vad saknas i underlaget?</h2>
          <p className="mt-3 leading-relaxed text-ink-soft">Tillverkaranvisningar, exakt variant och säljarens aktuella erbjudande är inte matchade. Vi har inte provat baljan, kontrollerat hållbarhet eller verifierat aktuella kundbetyg. Produktbilder inväntar också identitets- och rättighetskontroll.</p>
          <p className="mt-3 text-sm text-ink-soft">Kontrollstatus: 2026-09-09. Detta är en redovisning av kunskapsluckor, inte en genomförd produktprövning.</p>
        </section>
        <nav aria-label="Fortsätt jämföra" className="mt-8 flex flex-wrap gap-5 font-bold text-wine">
          <Link href="/skonhet/elektriskt-eller-enkelt-fotbad" className="underline underline-offset-4">Behöver du elektriska funktioner?</Link>
          <Link href="/fraga-elin" className="underline underline-offset-4">Fråga Elin – valfri AI-hjälp</Link>
        </nav>
        <div className="mt-10"><ProductComments product={product} reviews={reviews} turnstileSiteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} sectionId="deanic-fotbad-recensioner" formId="deanic-fotbad-skriv-recension" /></div>
      </div>
    </main>
  );
}
