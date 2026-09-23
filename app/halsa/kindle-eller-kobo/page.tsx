import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
// 2026-09-22: Contextual Clara Colour decision links in shared guide data.
import { ereaderGuide } from "@/lib/ereader-decision";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: `${ereaderGuide.title} | Elins val`, description: ereaderGuide.intro, url: `${siteConfig.url}${ereaderGuide.path}` });
export default function EreaderPage() { return <><WebPageJsonLd path={ereaderGuide.path} name={ereaderGuide.title} publishedAt="2026-07-02" /><DecisionGuidePage guide={ereaderGuide} /></>; }
