import { GisouCampaignPage } from "@/components/GisouCampaign";
import { gisouCampaign } from "@/lib/gisou-campaign";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "299 kr för Gisous läppmask – vad får du? | Elins val",
  description: "15 ml, en liten spatel och en doftsatt läppmask. Se vad Gisou Honey Glaze innehåller, hur den används och om den passar din rutin.",
  url: `${siteConfig.url}${gisouCampaign.path}`,
  image: { url: `${siteConfig.url}${gisouCampaign.shareImage.src}`, width: gisouCampaign.shareImage.width, height: gisouCampaign.shareImage.height, alt: gisouCampaign.shareImage.alt },
});

export default function Page() {
  return <GisouCampaignPage />;
}
