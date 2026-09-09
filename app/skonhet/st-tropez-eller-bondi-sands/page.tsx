import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { selfTanComparisonGuide } from "@/lib/st-tropez-eller-bondi-sands";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "St.Tropez eller Bondi Sands – vilken rutin passar? | Elins val",
  description: "Jämför Express 200 ml och Ultra Dark 200 ml: tid före dusch, fortsatt färgutveckling och begränsningar. Läs vad som passar din dag och vad vi inte har testat.",
  url: `${siteConfig.url}${selfTanComparisonGuide.path}`,
});
export default function StTropezEllerBondiSandsPage() {
  return <DecisionGuidePage guide={selfTanComparisonGuide} />;
}
