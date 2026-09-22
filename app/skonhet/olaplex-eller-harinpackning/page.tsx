// 2026-09-22: Add contextual links to the source-led partner decisions.
import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { treatmentMaskGuide } from "@/lib/olaplex-eller-harinpackning";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: `${treatmentMaskGuide.title} | Elins val`, description: treatmentMaskGuide.intro, url: `${siteConfig.url}${treatmentMaskGuide.path}` });
export default function Page() { return <DecisionGuidePage guide={treatmentMaskGuide} />; }
