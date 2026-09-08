import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { centellaOrPropolisGuide as guide } from "@/lib/centella-eller-propolis";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: guide.title, description: guide.intro, url: `${siteConfig.url}${guide.path}` });
export default function CentellaOrPropolisPage() { return <DecisionGuidePage guide={guide} />; }
