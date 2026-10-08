// 2026-10-08: Refresh query-led metadata; product facts and price dates unchanged.
// Content refresh 2026-08-28: länk till sovmask-eller-white-noise (ljus vs ljud).
// Content refresh 2026-08-27: seasonal update + link to sov-battre-i-host guide.
import { notFound } from "next/navigation";

import { SommarProductReviewPage } from "@/app/skonhet/_components/SommarProductReviewPage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { getSmartSommarPickBySlug } from "@/lib/sommar";

const pick = getSmartSommarPickBySlug("manta-sovmask");

export const revalidate = 3600;

export const metadata = pick ? createSeoMetadata({
  title: "Manta sovmask – passar originalmodellen dig?",
  description: "Mantas originalmask har flyttbara ögonkåpor och justerbar rem. Välj efter passformen du behöver; vi har inte testat ljusläckage eller komfort.",
  url: `${siteConfig.url}${pick.href}`,
}) : {};

export default function SovmaskPage() {
  if (!pick) {
    notFound();
  }

  return <SommarProductReviewPage pick={pick} />;
}
