import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { heatOrMassageGuide } from "@/lib/varmedyna-eller-massagekudde";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: `${heatOrMassageGuide.title} | Elins val`, description: heatOrMassageGuide.intro, url: `${siteConfig.url}${heatOrMassageGuide.path}` });
export default function HeatOrMassagePage() { return <DecisionGuidePage guide={heatOrMassageGuide} />; }
