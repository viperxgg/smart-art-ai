import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { footSpaGuide as guide } from "@/lib/foot-spa-decision";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: guide.title, description: guide.intro, url: `${siteConfig.url}${guide.path}` });
export default function Page() { return <DecisionGuidePage guide={guide} />; }
