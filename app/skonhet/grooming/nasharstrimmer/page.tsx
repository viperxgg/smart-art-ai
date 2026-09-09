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

const path = "/skonhet/grooming/nasharstrimmer";
const title = "WINSEA nästrimmer – vad behöver kontrolleras före köp?";
const intro = "Vi har ännu inte kunnat verifiera tillverkarens anvisningar för den här WINSEA-varianten. Därför rekommenderar vi inte köp utifrån påståenden om vattentäthet, laddning eller högre kundbetyg än andra märken.";
const breadcrumbs = [{ name: "Hem", href: "/" }, { name: "Skönhet", href: "/skonhet" }, { name: "WINSEA nästrimmer", href: path }];
export const revalidate = 3600;
export const metadata = createSeoMetadata({ title, description: intro, url: `${siteConfig.url}${path}` });

export default async function WinseaPage() {
  const product = getProductBySlug("winsea-nasharstrimmer");
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
          <div className="mt-5"><SaveProductButton productSlug={product.slug} productTitle="WINSEA nästrimmer" variant="pill" className="inline-flex min-h-11 items-center rounded-full border border-line px-4 py-2 font-bold text-wine" /></div>
        </header>
        <section aria-labelledby="decision-title" className="mt-8 rounded-3xl border border-line bg-surface/75 p-6">
          <h2 id="decision-title" className="font-display text-2xl font-bold">Ditt beslut innan uppgifterna är verifierade</h2>
          <dl className="mt-5 space-y-5 leading-relaxed">
            <div><dt className="font-bold">Om du söker en nästrimmer</dt><dd>Kontrollera exakt modell, avsedda användningsområden, rengöringsregler och strömförsörjning i tillverkarens instruktioner. Vi har inte matchat de uppgifterna för den aktuella produkten.</dd></div>
            <div><dt className="font-bold">Avstå tills du vet mer om</dt><dd>Vattentålighet, laddningskrav eller säker användning avgör om verktyget passar dig. Generella nätbeskrivningar eller uppgifter för en annan WINSEA-modell räcker inte. Vi kan inte ge modellspecifika användnings- eller sköljråd här.</dd></div>
            <div><dt className="font-bold">När kan ett merpris vara motiverat?</dt><dd>Först när en dokumenterad skillnad löser ett behov du har. Vi har ingen jämförelse av komfort, ljud, hållbarhet eller totalkostnad för WINSEA. Ett högre kundbetyg på en annan produktlista bevisar inte att verktyget är bättre.</dd></div>
            <div><dt className="font-bold">När kan du avstå helt?</dt><dd>Om du inte vill ändra din nuvarande rutin, eller redan har ett verktyg som fungerar för det avsedda ändamålet, behöver du inte köpa en extra trimmer.</dd></div>
          </dl>
        </section>
        <section aria-labelledby="evidence-title" className="mt-8 max-w-3xl">
          <h2 id="evidence-title" className="font-display text-2xl font-bold">Vad saknas i underlaget?</h2>
          <p className="mt-3 leading-relaxed text-ink-soft">Tillverkaranvisningar, exakt modell och säljarens aktuella erbjudande är inte matchade. Vi har inte provat trimmern, mätt ljud eller verifierat vattentålighet, batteri och aktuella kundbetyg. Produktbilder inväntar identitets- och rättighetskontroll. Det här är en kunskapslucka, inte ett konstaterat fel på produkten.</p>
          <p className="mt-3 text-sm text-ink-soft">Kontrollstatus: 2026-09-09. Detta är en redovisning av kunskapsluckor, inte en genomförd produktprövning.</p>
        </section>
        <nav aria-label="Fortsätt jämföra" className="mt-8 flex flex-wrap gap-5 font-bold text-wine">
          <Link href="/skonhet/grooming" className="underline underline-offset-4">Vilket moment saknas i din rutin?</Link>
          <Link href="/fraga-elin" className="underline underline-offset-4">Fråga Elin – valfri AI-hjälp</Link>
        </nav>
        <div className="mt-10"><ProductComments product={product} reviews={reviews} turnstileSiteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} sectionId="winsea-nasharstrimmer-recensioner" formId="winsea-nasharstrimmer-skriv-recension" /></div>
      </div>
    </main>
  );
}
