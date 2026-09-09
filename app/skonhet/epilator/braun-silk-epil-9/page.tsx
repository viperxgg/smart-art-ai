import { notFound } from "next/navigation";
import { ProductDecisionPage } from "@/components/ProductDecisionPage";
import { epilatorPicks } from "@/lib/epilator";
import { getProductDecision } from "@/lib/product-decisions";
import { getApprovedReviews } from "@/lib/reviews/reviews";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
const pick = epilatorPicks[1];
const decision = getProductDecision(pick.product.slug);
export const revalidate = 3600;
export const metadata = createSeoMetadata({ title: "Passar Braun Silk-épil 9-041 din rutin?", description: "Rotborttagning eller rakhuvud: behov, begränsningar och tillverkarunderlag för 9-041. Ingen egen produkttestning eller verifierat butikspaket.", url: `${siteConfig.url}${pick.path}` });
export default async function Page() {
  if (!decision) notFound();
  const reviews = await getApprovedReviews(pick.product.slug);
  return <ProductDecisionPage pick={{...pick, href: pick.path}} decision={decision} reviews={reviews} />;
}
