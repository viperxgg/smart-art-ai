import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  luftavfuktareEllerLuftrenareComparisonRows,
  luftavfuktareEllerLuftrenareFaqItems,
  luftavfuktareEllerLuftrenarePicks,
  luftavfuktareEllerLuftrenareRelatedLinks,
} from "@/lib/luftavfuktare-eller-luftrenare";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/halsa/luftavfuktare-eller-luftrenare`;

const heroImage = {
  src: "/comparisons/luftavfuktare-eller-luftrenare.webp",
  alt: "Luftavfuktare eller luftrenare? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Hälsa", href: "/halsa" },
  { name: "Luftavfuktare eller luftrenare?", href: `/halsa/luftavfuktare-eller-luftrenare` },
];

export const metadata = createSeoMetadata({
  title: "Luftavfuktare eller luftrenare? Rätt mot höstluften | Elins val",
  description: "Luftavfuktare eller luftrenare? Elin jämför fukt mot partiklar – imma och inomhustorkad tvätt mot damm och instängd luft – så du väljer rätt i höst.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function LuftavfuktareEllerLuftrenarePage() {
  return (
    <DecisionComparisonPage
      h1={"Luftavfuktare eller luftrenare?"}
      intro={"Luftavfuktare och luftrenare låter lika men löser två helt olika höstproblem. En luftavfuktare drar ut fukt ur luften – tänk imma på fönstren, tvätt som torkar inomhus och en källare som känns rå. En luftrenare drar i stället luften genom ett HEPA-filter och fångar damm, pollen och partiklar när fönstren hålls stängda."}
      badges={["Höstluft","Fukt vs partiklar","Inomhusklimat"]}
      howToChoose={"Välj en luftavfuktare om ditt problem känns med fingrarna: imma på rutorna, tvätt som aldrig riktigt torkar, en rå källare eller badrum där fukten står kvar. Välj en luftrenare om problemet märks i näsan: damm som lägger sig överallt, kvalmig luft och lukt när fönstren är stängda. Många hem behöver båda fast i olika rum – avfuktaren i tvättrum eller källare, renaren i sovrum eller vardagsrum."}
      verdict={"Elin väljer efter vad luften faktiskt bråkar med. Är det fukt – imma, tvätt inomhus, rå källarluft – vinner Pro Breeze-avfuktaren. Är det partiklar och instängd luft vinner Levoit Core 200S, som dessutom är tystare och enklare att ha i sovrummet. De ersätter inte varandra: fel köp löser fel problem."}
      heroImage={heroImage}
      picks={luftavfuktareEllerLuftrenarePicks}
      comparisonRows={luftavfuktareEllerLuftrenareComparisonRows}
      faqItems={luftavfuktareEllerLuftrenareFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={luftavfuktareEllerLuftrenareRelatedLinks}
      backHref={"/halsa"}
      backLabel={"Tillbaka till hälsa"}
    />
  );
}
