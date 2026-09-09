import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { vestBeltGuide } from "@/lib/tyngdvast-eller-lyftarbalte";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: `${vestBeltGuide.title} | Elins val`, description: vestBeltGuide.intro, url: `${siteConfig.url}${vestBeltGuide.path}` });
export default function Page() { return <DecisionGuidePage guide={vestBeltGuide} />; }
