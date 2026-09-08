import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { straightOrCurlGuide as guide } from "@/lib/platta-eller-locka";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: guide.title, description: guide.intro, url: `${siteConfig.url}${guide.path}` });
export default function StraightOrCurlPage() { return <DecisionGuidePage guide={guide} />; }
