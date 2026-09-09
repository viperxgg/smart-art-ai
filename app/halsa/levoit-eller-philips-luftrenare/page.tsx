import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { purifierComparisonGuide } from "@/lib/purifier-model-decision";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: `${purifierComparisonGuide.title} | Elins val`, description: purifierComparisonGuide.intro, url: `${siteConfig.url}${purifierComparisonGuide.path}` });
export default function HalsaPurifierComparisonPage() { return <DecisionGuidePage guide={purifierComparisonGuide} />; }
