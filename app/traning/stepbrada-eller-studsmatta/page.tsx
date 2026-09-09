import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { stepTrampolineGuide } from "@/lib/stepbrada-eller-studsmatta";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: `${stepTrampolineGuide.title} | Elins val`,
  description: "Jämför redskapens mått, utrymme och begränsningar före köp. Läs vilka produktuppgifter som är verifierade och när du kan avstå.",
  url: `${siteConfig.url}${stepTrampolineGuide.path}`,
});

export default function StepbradaEllerStudsmattaPage() {
  return <DecisionGuidePage guide={stepTrampolineGuide} />;
}
