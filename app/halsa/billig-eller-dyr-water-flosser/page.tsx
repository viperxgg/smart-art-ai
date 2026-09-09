import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { waterFlosserValueGuide } from "@/lib/water-flosser-decision";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: `${waterFlosserValueGuide.title} | Elins val`, description: waterFlosserValueGuide.intro, url: `${siteConfig.url}${waterFlosserValueGuide.path}` });
export default function WaterFlosserGuidePage() { return <DecisionGuidePage guide={waterFlosserValueGuide} />; }
