import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { personalWarmthGuide } from "@/lib/personal-warmth-decision";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: `${personalWarmthGuide.title} | Elins val`, description: personalWarmthGuide.intro, url: `${siteConfig.url}${personalWarmthGuide.path}` });
export default function PersonalWarmthPage() { return <DecisionGuidePage guide={personalWarmthGuide} />; }
