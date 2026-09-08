import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { moisturizerGuide } from "@/lib/cicaplast-b5-eller-cetaphil";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: moisturizerGuide.title, description: moisturizerGuide.intro, url: `${siteConfig.url}${moisturizerGuide.path}` });
export default function Page() { return <DecisionGuidePage guide={moisturizerGuide} />; }
