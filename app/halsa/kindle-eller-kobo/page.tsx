import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { ereaderGuide } from "@/lib/ereader-decision";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: `${ereaderGuide.title} | Elins val`, description: ereaderGuide.intro, url: `${siteConfig.url}${ereaderGuide.path}` });
export default function EreaderPage() { return <DecisionGuidePage guide={ereaderGuide} />; }
