import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { daylightLampOverviewGuide } from "@/lib/daylight-lamp-decision";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Dagsljuslampa – vad behöver du före köp? | Elins val",
  description: daylightLampOverviewGuide.intro,
  url: `${siteConfig.url}${daylightLampOverviewGuide.path}`,
});

export default function HalsaDagsljuslampaPage() {
  return <DecisionGuidePage guide={daylightLampOverviewGuide} />;
}
