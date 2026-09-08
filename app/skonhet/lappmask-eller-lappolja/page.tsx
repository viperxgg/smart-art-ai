import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { lipMaskOrOilGuide as guide } from "@/lib/lappmask-eller-lappolja";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: guide.title, description: guide.intro, url: `${siteConfig.url}${guide.path}` });
export default function LipMaskOrOilPage() { return <DecisionGuidePage guide={guide} />; }
