import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { airwrapValueGuide as guide } from "@/lib/hair-tool-value-guides";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: guide.title, description: guide.intro, url: `${siteConfig.url}${guide.path}` });
export default function Page() { return <DecisionGuidePage guide={guide} />; }
