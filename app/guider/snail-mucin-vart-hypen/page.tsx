import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { snailValueGuide as guide } from "@/lib/snigelslem-eller-hyaluronsyra";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: guide.title, description: guide.intro, url: `${siteConfig.url}${guide.path}` });
export default function SnailValuePage() { return <DecisionGuidePage guide={guide} />; }
