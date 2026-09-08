import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { towerDeskGuide as guide } from "@/lib/fan-decision-guides";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: guide.title + " | Elins val",
  description: guide.intro,
  url: siteConfig.url + guide.path,
});

export default function FanDecisionPage() {
  return <DecisionGuidePage guide={guide} />;
}
