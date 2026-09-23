// 2026-09-22: Add contextual links to the source-led partner decisions.
import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import { hairProtectionGuide } from "@/lib/harolja-eller-varmeskydd";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: `${hairProtectionGuide.title} | Elins val`, description: hairProtectionGuide.intro, url: `${siteConfig.url}${hairProtectionGuide.path}` });
export default function Page() { return <><WebPageJsonLd path={hairProtectionGuide.path} name={hairProtectionGuide.title} publishedAt="2026-06-19" /><DecisionGuidePage guide={hairProtectionGuide} /></>; }
