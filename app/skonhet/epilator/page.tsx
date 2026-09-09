import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { epilatorGuide as guide } from "@/lib/epilator-decision";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: guide.title, description: guide.intro, url: `${siteConfig.url}${guide.path}` });
export default function Page() { return <DecisionGuidePage guide={guide} />; }
