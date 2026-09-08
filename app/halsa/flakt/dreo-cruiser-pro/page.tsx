import { getProductDecision } from "@/lib/product-decisions";
import { FlaktProductReviewPage } from "@/app/halsa/flakt/_components/FlaktProductReviewPage";
import { flaktPicks } from "@/lib/flakt";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pick = flaktPicks[0];
const otherPick = flaktPicks[1];
const pageUrl = `${siteConfig.url}/halsa/flakt/dreo-cruiser-pro`;

export const revalidate = 3600;

export const metadata = createSeoMetadata({
  title: `${getProductDecision(pick.product.slug)?.options[0].model ?? pick.product.title} – beslutsunderlag | Elins val`,
  description: "Modelluppgifter, villkor för valet och begränsningar. Läs vad vi har verifierat och när du kan avstå från köp.",
  url: pageUrl,
});

export default function DreoCruiserProPage() {
  return <FlaktProductReviewPage pick={pick} otherPick={otherPick} />;
}
