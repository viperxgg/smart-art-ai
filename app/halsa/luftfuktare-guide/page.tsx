import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { humidifierOverviewGuide } from "@/lib/humidifier-method-decision";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: `${humidifierOverviewGuide.title} | Elins val`, description: humidifierOverviewGuide.intro, url: `${siteConfig.url}${humidifierOverviewGuide.path}` });
export default function HalsaLuftfuktareGuidePage() { return <DecisionGuidePage guide={humidifierOverviewGuide} />; }
