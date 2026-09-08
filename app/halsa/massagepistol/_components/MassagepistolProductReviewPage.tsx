import Link from "next/link";
import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ProductComments } from "@/components/ProductComments";
import { ProductDecisionPage } from "@/components/ProductDecisionPage";
import { getProductDecision } from "@/lib/product-decisions";
import { getApprovedReviews } from "@/lib/reviews/reviews";
import type { MassagepistolPick } from "@/lib/massagepistol";

export async function MassagepistolProductReviewPage({ pick }: { pick: MassagepistolPick }) {
  const approvedReviews = await getApprovedReviews(pick.product.slug);
  const decision = getProductDecision(pick.product.slug);
  if (decision) return <ProductDecisionPage pick={{ ...pick, href: pick.path }} decision={decision} reviews={approvedReviews} />;
  const breadcrumbs = [
    { name: "Hem", href: "/" }, { name: "Hälsa & vardag", href: "/halsa" },
    { name: "Massagepistol", href: "/halsa/massagepistol" }, { name: "BDBKMG – underlag saknas", href: pick.path },
  ];
  return (
    <main id="content" tabIndex={-1} className="min-h-screen bg-bg px-5 py-8 text-ink">
      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="mt-6 font-display text-3xl font-bold sm:text-4xl">BDBKMG – vad behöver kontrolleras före köp?</h1>
        <p className="mt-4 leading-relaxed text-ink-soft">Vi har inte verifierat den exakta modellen bakom produktposten. Uppgifterna om kraft, vikt, laddning, antal lägen och huvuden räcker därför inte till en köprekommendation.</p>
        <p className="mt-4 leading-relaxed text-ink-soft">Vi har inte provat apparaten. Ingen vinnare, poäng eller prisvärdhetsbedömning anges. Bilder och butikslänk väntar på kontroll av identitet och användningsrätt.</p>
        <section className="mt-8 rounded-2xl border border-line bg-surface p-6" aria-labelledby="missing-evidence">
          <h2 id="missing-evidence" className="font-display text-2xl font-bold">Det här saknas i beslutsunderlaget</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed">
            <li>Exakt modellbeteckning, identifierbar tillverkare och modellens bruksanvisning.</li>
            <li>Avsedd användning och begränsningar enligt den egna manualen. Beurers instruktioner kan inte överföras till denna apparat.</li>
            <li>Verifierat paket för Sverige: laddare, kontakt, medföljande huvuden och begripliga instruktioner.</li>
            <li>Jämförbara mätningar innan ljud, kraft eller fler inställningar används som skäl att betala mer.</li>
          </ul>
        </section>
        <section className="mt-8 space-y-3" aria-labelledby="wait-for-evidence">
          <h2 id="wait-for-evidence" className="font-display text-2xl font-bold">När är det bättre att avstå?</h2>
          <p className="leading-relaxed text-ink-soft">Om du inte kan kontrollera modellens instruktioner och begränsningar, avvakta med köpet. Behåll utrustning som redan fungerar för ditt behov; många lägen eller ett lågt pris räcker inte som skäl att byta.</p>
          <p className="leading-relaxed text-ink-soft">Vi kan ännu inte ange vem just denna modell passar. Ett besökaromdöme ersätter inte produktens manual eller en verifierad modellkontroll.</p>
        </section>
        <nav aria-label="Fortsätt läsa" className="mt-8 flex flex-wrap gap-4">
          <Link href="/halsa/massagepistol" className="inline-flex min-h-11 items-center underline">MG 99 som dokumenterat exempel – ingen jämförelsevinnare</Link>
          <Link href="/guider/dyr-massagepistol-vs-budget" className="inline-flex min-h-11 items-center underline">Vad behöver ett högre pris motivera?</Link>
          <Link href="/fraga-elin" className="inline-flex min-h-11 items-center underline">Fråga Elin – valfri AI-hjälp</Link>
        </nav>
        <ProductComments product={pick.product} reviews={approvedReviews} turnstileSiteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} sectionId={pick.reviewSectionId} formId={pick.reviewFormId} />
      </div>
    </main>
  );
}
