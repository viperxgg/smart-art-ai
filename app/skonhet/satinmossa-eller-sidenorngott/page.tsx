import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { bonnetOrPillowcaseGuide as guide } from "@/lib/satinmossa-eller-sidenorngott";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: guide.title, description: guide.intro, url: `${siteConfig.url}${guide.path}` });
export default function BonnetOrPillowcasePage() { return <DecisionGuidePage guide={guide} />; }
