import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { indoorAirGuide } from "@/lib/luftfuktare-eller-luftrenare";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: `${indoorAirGuide.title} | Elins val`,
  description: indoorAirGuide.intro,
  url: `${siteConfig.url}${indoorAirGuide.path}`,
});

export default function LuftfuktareEllerLuftrenarePage() {
  return <DecisionGuidePage guide={indoorAirGuide} />;
}
