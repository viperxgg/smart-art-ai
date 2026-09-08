import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { bottleGuide as guide } from "@/lib/bottle-decision";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: guide.title + " | Elins val", description: guide.intro, url: siteConfig.url + guide.path });
export default function BottleDecisionPage() { return <DecisionGuidePage guide={guide} />; }
