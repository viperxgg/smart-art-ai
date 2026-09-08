import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { retinolOrBakuchiolGuide as guide } from "@/lib/retinol-decisions";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({ title: guide.title, description: guide.intro, url: `${siteConfig.url}${guide.path}` });
export default function RetinolEllerBakuchiolPage() { return <DecisionGuidePage guide={guide} />; }
