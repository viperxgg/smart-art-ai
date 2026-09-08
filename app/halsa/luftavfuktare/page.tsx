import { notFound } from "next/navigation";

import { SommarProductReviewPage } from "@/app/skonhet/_components/SommarProductReviewPage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { getSmartSommarPickBySlug } from "@/lib/sommar";

const pick = getSmartSommarPickBySlug("pro-breeze-luftavfuktare");

export const revalidate = 3600;

export const metadata = pick
  ? createSeoMetadata({
      title: "Pro Breeze luftavfuktare – modellkontroll före köp | Elins val",
      description: "Kontrollera behov, exakt modell och kapacitet innan du väljer avfuktare. Underlag och tydliga begränsningar.",
      url: `${siteConfig.url}${pick.href}`,
    })
  : {};

export default function LuftavfuktarePage() {
  if (!pick) {
    notFound();
  }

  return <SommarProductReviewPage pick={pick} />;
}
