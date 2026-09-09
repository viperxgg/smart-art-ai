import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { toothbrushUpgradeGuide } from "@/lib/toothbrush-decision";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: `${toothbrushUpgradeGuide.title} | Elins val`, description: toothbrushUpgradeGuide.intro, url: `${siteConfig.url}${toothbrushUpgradeGuide.path}` });
export default function ToothbrushGuidePage() { return <DecisionGuidePage guide={toothbrushUpgradeGuide} />; }
