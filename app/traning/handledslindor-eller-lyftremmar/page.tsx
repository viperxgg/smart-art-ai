import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { wrapsStrapsGuide } from "@/lib/handledslindor-eller-lyftremmar";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Handledslindor eller lyftremmar – vad behöver du? | Elins val",
  description: "Skilj handledslindor från lyftremmar. Köpfrågor, alternativet att avstå och tydliga gränser för vad vi vet om ASIPRO och Fitgriff.",
  url: `${siteConfig.url}${wrapsStrapsGuide.path}`,
});

export default function HandledslindorEllerLyftremmarPage() {
  return <DecisionGuidePage guide={wrapsStrapsGuide} />;
}
