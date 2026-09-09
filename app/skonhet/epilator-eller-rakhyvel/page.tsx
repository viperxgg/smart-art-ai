import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { epilatorRazorGuide as guide } from "@/lib/epilator-eller-rakhyvel";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: guide.title, description: guide.intro, url: `${siteConfig.url}${guide.path}` });
export default function Page() { return <DecisionGuidePage guide={guide} />; }
