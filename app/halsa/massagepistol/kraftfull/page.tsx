import { MassagepistolProductReviewPage } from "@/app/halsa/massagepistol/_components/MassagepistolProductReviewPage";
import { massagepistolPicks } from "@/lib/massagepistol";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pick = massagepistolPicks[1];
const pageUrl = `${siteConfig.url}/halsa/massagepistol/kraftfull`;

export const revalidate = 3600;

export const metadata = createSeoMetadata({
  title: "BDBKMG massagepistol – modellunderlag saknas | Elins val",
  description: "Vi har ännu inte verifierat exakt BDBKMG-modell, manual eller butikspaket. Se vad som behöver kontrolleras innan en köprekommendation kan ges.",
  url: pageUrl,
});

export default function KraftfullMassagepistolPage() {
  return (
    <MassagepistolProductReviewPage
      pick={pick}
    />
  );
}
