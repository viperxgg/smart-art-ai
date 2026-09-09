import { notFound } from "next/navigation";
import { ProductDecisionPage } from "@/components/ProductDecisionPage";
import { epilatorPicks } from "@/lib/epilator";
import { getProductDecision } from "@/lib/product-decisions";
import { getApprovedReviews } from "@/lib/reviews/reviews";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
const pick = epilatorPicks[0];
const decision = getProductDecision(pick.product.slug);
export const revalidate = 3600;
export const metadata = createSeoMetadata({ title: "Passar Panasonic ES-EY30 din rutin?", description: "Panasonic ES-EY30: tillbehör, användningsområden och begränsningar enligt svenska källor. Inget eget jämförande produkttest eller verifierat butikspaket.", url: `${siteConfig.url}${pick.path}` });
export default async function Page() {
  if (!decision) notFound();
  const reviews = await getApprovedReviews(pick.product.slug);
  return <ProductDecisionPage pick={{...pick, href: pick.path}} decision={decision} reviews={reviews} />;
}
