import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { yogaThicknessGuide as guide } from "@/lib/yoga-mat-decision";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: guide.title + " | Elins val", description: guide.intro, url: siteConfig.url + guide.path });
export default function YogaDecisionPage() { return <DecisionGuidePage guide={guide} />; }
