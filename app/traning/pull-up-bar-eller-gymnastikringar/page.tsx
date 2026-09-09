import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { barRingsGuide } from "@/lib/pull-up-bar-eller-gymnastikringar";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: `${barRingsGuide.title} | Elins val`,
  description: "Jämför IRON GYM-stången och Gorilla Sports gymringar: infästning, dörrmått, remmar och när du bör avstå. Läs vad som har verifierats och vad som återstår.",
  url: `${siteConfig.url}${barRingsGuide.path}`,
});

export default function PullUpBarEllerGymnastikringarPage() {
  return <DecisionGuidePage guide={barRingsGuide} />;
}
