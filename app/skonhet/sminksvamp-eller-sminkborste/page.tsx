import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { spongeOrBrushGuide as guide } from "@/lib/sminksvamp-eller-sminkborste";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: guide.title, description: guide.intro, url: `${siteConfig.url}${guide.path}` });
export default function SpongeOrBrushPage() { return <DecisionGuidePage guide={guide} />; }
