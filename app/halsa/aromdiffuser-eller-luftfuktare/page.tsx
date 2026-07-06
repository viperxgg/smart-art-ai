import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  aromdiffuserEllerLuftfuktareComparisonRows,
  aromdiffuserEllerLuftfuktareFaqItems,
  aromdiffuserEllerLuftfuktarePicks,
  aromdiffuserEllerLuftfuktareRelatedLinks,
} from "@/lib/aromdiffuser-eller-luftfuktare";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/halsa/aromdiffuser-eller-luftfuktare`;

const heroImage = {
  src: "/comparisons/aromdiffuser-eller-luftfuktare.webp",
  alt: "Aromdiffuser eller luftfuktare? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Hälsa", href: "/halsa" },
  { name: "Aromdiffuser eller luftfuktare?", href: `/halsa/aromdiffuser-eller-luftfuktare` },
];

export const metadata = createSeoMetadata({
  title: "Aromdiffuser eller luftfuktare? Vad behöver du | Elins val",
  description: "Aromdiffuser eller luftfuktare? Elin reder ut skillnaden – doft och mys mot fukt till torr luft – så du väljer rätt apparat för ditt rum.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function AromdiffuserEllerLuftfuktarePage() {
  return (
    <DecisionComparisonPage
      h1={"Aromdiffuser eller luftfuktare?"}
      intro={"Aromdiffuser och luftfuktare sprider båda en fin dimma i rummet, men med olika syfte. En aromdiffuser är liten och gjord för doft – du droppar i eterisk olja för en mysig, doftande stämning – medan en luftfuktare har en större tank och fokuserar på att tillföra fukt till torr inomhusluft."}
      badges={["Inomhusklimat","Doft vs fukt","Mys"]}
      howToChoose={"Välj en aromdiffuser om du främst vill ha doft och mysig stämning – den är liten, snygg och passar på nattduksbordet eller skrivbordet. Välj en luftfuktare om ditt mål är att göra torr inomhusluft mindre torr, med en större tank som räcker längre. En aromdiffuser fuktar bara marginellt, så vill du verkligen höja luftfuktigheten är det en luftfuktare du behöver."}
      verdict={"De löser olika saker trots att båda dimmar. Aromdiffusern vinner för doft och mys, medan luftfuktaren vinner för att faktiskt tillföra fukt till torr luft. Mys och doft – aromdiffuser. Torr luft – luftfuktare."}
      heroImage={heroImage}
      picks={aromdiffuserEllerLuftfuktarePicks}
      comparisonRows={aromdiffuserEllerLuftfuktareComparisonRows}
      faqItems={aromdiffuserEllerLuftfuktareFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={aromdiffuserEllerLuftfuktareRelatedLinks}
      backHref={"/halsa"}
      backLabel={"Tillbaka till hälsa"}
    />
  );
}
