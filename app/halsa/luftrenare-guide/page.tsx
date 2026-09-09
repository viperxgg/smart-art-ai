import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { purifierOverviewGuide } from "@/lib/purifier-model-decision";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: `${purifierOverviewGuide.title} | Elins val`, description: purifierOverviewGuide.intro, url: `${siteConfig.url}${purifierOverviewGuide.path}` });
export default function HalsaLuftrenareGuidePage() { return <DecisionGuidePage guide={purifierOverviewGuide} />; }
