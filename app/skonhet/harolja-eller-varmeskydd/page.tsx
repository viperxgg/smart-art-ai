import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { hairProtectionGuide } from "@/lib/harolja-eller-varmeskydd";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: `${hairProtectionGuide.title} | Elins val`, description: hairProtectionGuide.intro, url: `${siteConfig.url}${hairProtectionGuide.path}` });
export default function Page() { return <DecisionGuidePage guide={hairProtectionGuide} />; }
