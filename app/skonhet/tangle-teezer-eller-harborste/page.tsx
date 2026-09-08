import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { detanglingGuide as guide } from "@/lib/tangle-teezer-eller-harborste";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: guide.title, description: guide.intro, url: `${siteConfig.url}${guide.path}` });
export default function DetanglingPage() { return <DecisionGuidePage guide={guide} />; }
