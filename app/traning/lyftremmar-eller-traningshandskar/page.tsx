import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { strapsGlovesGuide } from "@/lib/lyftremmar-eller-traningshandskar";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Lyftremmar eller handskar – vilket behov har du? | Elins val",
  description: "Skilj grepphjälp från ett lager över handflatan. Se köpfrågor, när du kan avstå och vad som ännu inte är verifierat om Fitgriff och ihuan.",
  url: `${siteConfig.url}${strapsGlovesGuide.path}`,
});

export default function LyftremmarEllerTraningshandskarPage() {
  return <DecisionGuidePage guide={strapsGlovesGuide} />;
}
