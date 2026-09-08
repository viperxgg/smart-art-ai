import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { bakuchiolOrNiacinamideGuide as guide } from "@/lib/bakuchiol-eller-niacinamid";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({ title: guide.title, description: guide.intro, url: `${siteConfig.url}${guide.path}` });
export default function BakuchiolEllerNiacinamidPage() { return <DecisionGuidePage guide={guide} />; }
