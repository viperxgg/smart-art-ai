// Content refresh 2026-08-28: länk till luftavfuktare-eller-luftrenare (lufttriangeln komplett).
import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  luftfuktareEllerLuftrenareComparisonRows,
  luftfuktareEllerLuftrenareFaqItems,
  luftfuktareEllerLuftrenarePicks,
  luftfuktareEllerLuftrenareRelatedLinks,
} from "@/lib/luftfuktare-eller-luftrenare";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/halsa/luftfuktare-eller-luftrenare`;

const heroImage = {
  src: "/comparisons/luftfuktare-eller-luftrenare.webp",
  alt: "Luftfuktare eller luftrenare? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Hälsa", href: "/halsa" },
  { name: "Luftfuktare eller luftrenare?", href: `/halsa/luftfuktare-eller-luftrenare` },
];

export const metadata = createSeoMetadata({
  title: "Luftfuktare eller luftrenare? Vilken behöver du | Elins val",
  description: "Luftfuktare eller luftrenare? Elin reder ut skillnaden – fukt mot renare luft – så du väljer rätt apparat för ditt inomhusklimat.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function LuftfuktareEllerLuftrenarePage() {
  return (
    <DecisionComparisonPage
      h1={"Luftfuktare eller luftrenare?"}
      intro={"Luftfuktare och luftrenare blandas ofta ihop, men gör helt olika saker. En luftfuktare tillför fukt till torr inomhusluft, medan en luftrenare filtrerar bort damm och partiklar ur luften. De löser alltså två skilda problem hemma."}
      badges={["Inomhusklimat","Fukt vs renare luft","Smart hem"]}
      howToChoose={"Välj en luftfuktare om luften hemma känns torr – vanligt på vintern med element på – och du märker torr hud, torr hals eller statisk elektricitet. Välj en luftrenare om du vill ha renare luft med mindre damm och partiklar, till exempel om du är känslig för damm eller har husdjur. De kan användas tillsammans men löser olika saker."}
      verdict={"De är inte konkurrenter utan kompletterar varandra. Luftfuktaren vinner mot torr luft, medan luftrenaren vinner om du vill ha renare luft med mindre damm. Utgå från ditt faktiska problem: känns luften torr, eller vill du ha renare luft?"}
      heroImage={heroImage}
      picks={luftfuktareEllerLuftrenarePicks}
      comparisonRows={luftfuktareEllerLuftrenareComparisonRows}
      faqItems={luftfuktareEllerLuftrenareFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={luftfuktareEllerLuftrenareRelatedLinks}
      backHref={"/halsa"}
      backLabel={"Tillbaka till hälsa"}
    />
  );
}
