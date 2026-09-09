import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { waterFlosserGuide } from "@/lib/water-flosser-decision";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: `${waterFlosserGuide.title} | Elins val`, description: waterFlosserGuide.intro, url: `${siteConfig.url}${waterFlosserGuide.path}` });
export default function WaterFlosserGuidePage() { return <DecisionGuidePage guide={waterFlosserGuide} />; }
