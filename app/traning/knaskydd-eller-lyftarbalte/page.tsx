import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { kneeBeltGuide } from "@/lib/knaskydd-eller-lyftarbalte";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Knäsleeve eller lyftarbälte – vad behöver du? | Elins val",
  description: "Rehband RX 5 mm och C.P. Sports T9: olika uppgifter, storlek och paket. Se när du kan avstå och vad vi inte har testat.",
  url: `${siteConfig.url}${kneeBeltGuide.path}`,
});
export default function KnaskyddEllerLyftarbaltePage() {
  return <DecisionGuidePage guide={kneeBeltGuide} />;
}
