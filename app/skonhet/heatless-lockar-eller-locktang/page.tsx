import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { heatlessOrTongGuide as guide } from "@/lib/heatless-lockar-eller-locktang";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: guide.title, description: guide.intro, url: `${siteConfig.url}${guide.path}` });
export default function HeatlessOrTongPage() { return <DecisionGuidePage guide={guide} />; }
