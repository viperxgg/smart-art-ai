import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { trampolineRopeGuide } from "@/lib/studsmatta-eller-hopprep";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: `${trampolineRopeGuide.title} | Elins val`,
  description: "Jämför redskapens mått, utrymme och begränsningar före köp. Läs vilka produktuppgifter som är verifierade och när du kan avstå.",
  url: `${siteConfig.url}${trampolineRopeGuide.path}`,
});

export default function StudsmattaEllerHopprepPage() {
  return <DecisionGuidePage guide={trampolineRopeGuide} />;
}
