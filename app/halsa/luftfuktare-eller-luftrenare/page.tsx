// 2026-10-08: Refresh contextual internal links; product facts and price dates unchanged.
// Content refresh 2026-09-29: reviewed merchant paths and source link attributes.
// Content refresh 2026-09-22: contextual home-safety link to Tapo C520WS.
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
