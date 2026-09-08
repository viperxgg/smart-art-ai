import { MassagepistolProductReviewPage } from "@/app/halsa/massagepistol/_components/MassagepistolProductReviewPage";
import { massagepistolPicks } from "@/lib/massagepistol";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pick = massagepistolPicks[0];
const pageUrl = `${siteConfig.url}/halsa/massagepistol/beurer-mg-99`;

export const revalidate = 3600;

export const metadata = createSeoMetadata({
  title: "Beurer MG 99 Compact – användning och begränsningar | Elins val",
  description: "Läs om MG 99:s exakta vikt, reglage och manualens begränsningar. Se vad vi inte har testat före ditt köp.",
  url: pageUrl,
});

export default function BeurerMg99Page() {
  return (
    <MassagepistolProductReviewPage
      pick={pick}
    />
  );
}
