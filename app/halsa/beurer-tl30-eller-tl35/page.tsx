import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { daylightLampGuide } from "@/lib/daylight-lamp-decision";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Beurer TL 30 eller TL 35 – vilka reglage behöver du? | Elins val",
  description: "Jämför reglage, ljusyta och mätavstånd för TL 30 och TL 35. Läs modellernas begränsningar och vad vi inte har testat.",
  url: `${siteConfig.url}${daylightLampGuide.path}`,
});
export default function HalsaBeurerTl30EllerTl35Page() {
  return <DecisionGuidePage guide={daylightLampGuide} />;
}
