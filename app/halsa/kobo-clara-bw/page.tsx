// Content refresh 2026-09-22: first-screen source-review disclosure and reader fit.
// 2026-09-22: Contextual links to colour readers and home projection.
import { notFound } from "next/navigation";

import { ProductDecisionPage } from "@/components/ProductDecisionPage";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import { getProductDecision } from "@/lib/product-decisions";
import { createSeoMetadata } from "@/lib/metadata";
import { getApprovedReviews } from "@/lib/reviews/reviews";
import { siteConfig } from "@/lib/site";
import { getSmartSommarPickBySlug } from "@/lib/sommar";

const pick = getSmartSommarPickBySlug("kobo-clara-bw");
const decision = getProductDecision("kobo-clara-bw");
const pageHeading = "Kobo Clara BW – vad visar vår källgranskning?";
const firstAnswer = "Elins val har inte gjort ett eget lästest av Kobo Clara BW. Bedömningen är en källgranskning av modellfakta samt kompatibilitet med svenska böcker och bibliotekstjänster. Den passar dig som vill ha en kompakt, svartvit 6-tumsläsare och har kontrollerat hur dina böcker förs över. Avstå om du förväntar dig att alla Biblio- eller bibliotekslån fungerar direkt.";

export const revalidate = 3600;

export const metadata = pick
  ? createSeoMetadata({
      title: pick.metaTitle,
      description: pick.metaDescription,
      url: `${siteConfig.url}${pick.href}`,
    })
  : {};

export default async function KoboClaraBwPage() {
  if (!pick || !decision) {
    notFound();
  }

  return <><WebPageJsonLd path={pick.href} name={pageHeading} publishedAt="2026-06-17" /><ProductDecisionPage pick={pick} decision={decision} reviews={await getApprovedReviews(pick.product.slug)} pageHeading={pageHeading} firstAnswer={firstAnswer} /></>;
}
