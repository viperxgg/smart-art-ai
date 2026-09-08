import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { niacinamideStrengthGuide as guide } from "@/lib/niacinamide-decision";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: guide.title + " | Elins val", description: guide.intro, url: siteConfig.url + guide.path });
export default function NiacinamideStrengthPage() { return <DecisionGuidePage guide={guide} />; }
