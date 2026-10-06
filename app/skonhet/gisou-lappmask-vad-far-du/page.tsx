import { notFound } from "next/navigation";
import { GisouCampaignPage } from "@/components/GisouCampaign";
import { gisouCampaign, isGisouPreviewEnabled } from "@/lib/gisou-campaign";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata = createSeoMetadata({
  title: "299 kr för Gisous läppmask – vad får du? | Elins val",
  description: "15 ml, en liten spatel och en doftsatt läppmask. Se vad Gisou Honey Glaze innehåller, hur den används och om den passar din rutin.",
  url: `${siteConfig.url}${gisouCampaign.path}`,
  robots: { index: false, follow: false },
  image: { url: `${siteConfig.url}${gisouCampaign.image.src}`, width: gisouCampaign.image.width, height: gisouCampaign.image.height, alt: gisouCampaign.image.alt },
});

export default function Page() {
  if (!isGisouPreviewEnabled()) notFound();
  return <GisouCampaignPage />;
}
