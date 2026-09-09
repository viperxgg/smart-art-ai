import { TraningsbandProductReviewPage } from "@/app/traning/traningsband/_components/TraningsbandProductReviewPage";
import { createSeoMetadata } from "@/lib/metadata";
import { traningsbandPicks } from "@/lib/traningsband";

const pick = traningsbandPicks[0];
export const metadata = createSeoMetadata({
  title: pick.metaTitle,
  description: pick.metaDescription,
  url: pick.path,
});
export const revalidate = 3600;

export default function TraningBandReviewPage() {
  return <TraningsbandProductReviewPage pick={pick} otherPick={traningsbandPicks[1]} />;
}
