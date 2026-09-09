import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { straightenerSizeGuide as guide } from "@/lib/mini-or-full-straightener";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: guide.title, description: guide.intro, url: `${siteConfig.url}${guide.path}` });
export default function StraightenerHubPage() { return <DecisionGuidePage guide={guide} />; }
