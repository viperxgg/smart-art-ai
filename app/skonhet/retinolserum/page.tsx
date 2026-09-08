import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { retinolSerumGuide as guide } from "@/lib/retinol-decisions";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({ title: guide.title, description: guide.intro, url: `${siteConfig.url}${guide.path}` });
export default function RetinolSerumPage() { return <DecisionGuidePage guide={guide} />; }
