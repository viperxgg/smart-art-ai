import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { manualOrAutoCurlingGuide as guide } from "@/lib/manual-or-auto-curling";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: guide.title, description: guide.intro, url: `${siteConfig.url}${guide.path}` });
export default function CurlingHubPage() { return <DecisionGuidePage guide={guide} />; }
