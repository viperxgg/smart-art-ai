import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { treatmentMaskGuide } from "@/lib/olaplex-eller-harinpackning";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: `${treatmentMaskGuide.title} | Elins val`, description: treatmentMaskGuide.intro, url: `${siteConfig.url}${treatmentMaskGuide.path}` });
export default function Page() { return <DecisionGuidePage guide={treatmentMaskGuide} />; }
