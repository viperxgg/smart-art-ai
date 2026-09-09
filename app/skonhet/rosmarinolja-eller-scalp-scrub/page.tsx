import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { scalpGuide as guide } from "@/lib/rosmarinolja-eller-scalp-scrub";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: guide.title, description: guide.intro, url: `${siteConfig.url}${guide.path}` });
export default function Page() { return <DecisionGuidePage guide={guide} />; }
