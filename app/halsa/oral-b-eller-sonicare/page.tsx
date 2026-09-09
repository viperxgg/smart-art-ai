import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { toothbrushBrandGuide } from "@/lib/toothbrush-decision";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: `${toothbrushBrandGuide.title} | Elins val`, description: toothbrushBrandGuide.intro, url: `${siteConfig.url}${toothbrushBrandGuide.path}` });
export default function ToothbrushGuidePage() { return <DecisionGuidePage guide={toothbrushBrandGuide} />; }
