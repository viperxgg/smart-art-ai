// 2026-10-08: Refresh query-led metadata; product facts and price dates unchanged.
import { DecisionGuidePage } from "@/components/DecisionGuidePage";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
// 2026-09-22: Contextual Clara Colour decision links in shared guide data.
import { ereaderGuide } from "@/lib/ereader-decision";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = createSeoMetadata({ title: "Kindle eller Kobo – vilken funkar med biblioteket?", description: "Kobo kan passa för bibliotekslån om tjänsten och boken stöds. Libbys Kindle-lån gäller USA; kontrollera ditt svenska biblioteks export före köp.", url: `${siteConfig.url}${ereaderGuide.path}` });
export default function EreaderPage() { return <><WebPageJsonLd path={ereaderGuide.path} name={ereaderGuide.title} publishedAt="2026-07-02" /><DecisionGuidePage guide={ereaderGuide} /></>; }
