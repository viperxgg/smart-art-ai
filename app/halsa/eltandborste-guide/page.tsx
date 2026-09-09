import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { toothbrushOverviewGuide } from "@/lib/toothbrush-decision";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: `${toothbrushOverviewGuide.title} | Elins val`, description: toothbrushOverviewGuide.intro, url: `${siteConfig.url}${toothbrushOverviewGuide.path}` });
export default function ToothbrushGuidePage() { return <DecisionGuidePage guide={toothbrushOverviewGuide} />; }
