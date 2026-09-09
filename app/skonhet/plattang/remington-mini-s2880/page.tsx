import { straightenerSizeDecision } from "@/lib/mini-or-full-straightener";
import { PlattangProductReviewPage } from "@/app/skonhet/plattang/_components/PlattangProductReviewPage";
import { plattangPicks } from "@/lib/plattang";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pick = plattangPicks[1];
const otherPick = plattangPicks[0];
const pageUrl = `${siteConfig.url}/skonhet/plattang/remington-mini-s2880`;

export const revalidate = 3600;

export const metadata = createSeoMetadata({
  title: "Passar Remington S2880 On The Go Mini dig?",
  description: straightenerSizeDecision.options[1].chooseIf,
  url: pageUrl,
});

export default function RemingtonMiniS2880Page() {
  return <PlattangProductReviewPage pick={pick} otherPick={otherPick} />;
}
