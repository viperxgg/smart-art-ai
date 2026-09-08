import { getProductDecision } from "@/lib/product-decisions";
import { notFound } from "next/navigation";

import { SommarProductReviewPage } from "@/app/skonhet/_components/SommarProductReviewPage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { getSmartSommarPickBySlug } from "@/lib/sommar";

const pick = getSmartSommarPickBySlug("xiaomi-bordsflakt");

export const revalidate = 3600;

export const metadata = pick
  ? createSeoMetadata({
      title: `${getProductDecision(pick.product.slug)?.options[0].model ?? pick.product.title} – beslutsunderlag | Elins val`,
      description: "Modelluppgifter, villkor för valet och begränsningar. Läs vad vi har verifierat och när du kan avstå från köp.",
      url: `${siteConfig.url}${pick.href}`,
    })
  : {};

export default function BordsflaktPage() {
  if (!pick) {
    notFound();
  }

  return <SommarProductReviewPage pick={pick} />;
}
