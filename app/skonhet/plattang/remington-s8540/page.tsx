import { straightOrCurlDecision } from "@/lib/platta-eller-locka";
import { PlattangProductReviewPage } from "@/app/skonhet/plattang/_components/PlattangProductReviewPage";
import { plattangPicks } from "@/lib/plattang";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pick = plattangPicks[0];
const otherPick = plattangPicks[1];
const pageUrl = `${siteConfig.url}/skonhet/plattang/remington-s8540`;

export const revalidate = 3600;

export const metadata = createSeoMetadata({
  title: "Passar Remington S8540 Keratin Protect dig?",
  description: straightOrCurlDecision.options[0].chooseIf,
  url: pageUrl,
});

export default function RemingtonS8540Page() {
  return <PlattangProductReviewPage pick={pick} otherPick={otherPick} />;
}
