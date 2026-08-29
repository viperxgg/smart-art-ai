// Content refresh 2026-08-28: länk till luftavfuktare-eller-luftrenare (lufttriangeln komplett).
import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  luftavfuktareEllerLuftfuktareComparisonRows,
  luftavfuktareEllerLuftfuktareFaqItems,
  luftavfuktareEllerLuftfuktarePicks,
  luftavfuktareEllerLuftfuktareRelatedLinks,
} from "@/lib/luftavfuktare-eller-luftfuktare";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/halsa/luftavfuktare-eller-luftfuktare`;

const heroImage = {
  src: "/comparisons/luftavfuktare-eller-luftfuktare.webp",
  alt: "Luftavfuktare eller luftfuktare? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Hälsa", href: "/halsa" },
  { name: "Luftavfuktare eller luftfuktare?", href: `/halsa/luftavfuktare-eller-luftfuktare` },
];

export const metadata = createSeoMetadata({
  title: "Luftavfuktare eller luftfuktare? Så väljer du | Elins val",
  description: "Imma på fönstren eller torr vinterluft? Elin reder ut skillnaden mellan luftavfuktare och luftfuktare – och vilken din bostad behöver i höst. (Annons)",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function LuftavfuktareEllerLuftfuktarePage() {
  return (
    <DecisionComparisonPage
      h1={"Luftavfuktare eller luftfuktare?"}
      intro={"Namnen är nästan identiska men apparaterna gör precis motsatta jobb: en luftavfuktare drar fukt UR luften, en luftfuktare tillför fukt. Under hösten blir valet aktuellt på riktigt – imma på fönstren och tvätt som aldrig torkar pekar åt ena hållet, torr inomhusluft när elementen slås på pekar åt det andra. Elin reder ut vilken din bostad faktiskt behöver."}
      badges={["Höstfukt","Inomhusklimat","Olika jobb"]}
      howToChoose={"Välj en luftavfuktare om du har imma på insidan av fönstren, fuktlukt i badrum, källare eller sovrum, eller tvätt som torkar långsamt inomhus – det är tecken på för hög luftfuktighet. Välj en luftfuktare om luften i stället känns torr när värmen är på: statisk elektricitet, torra läppar och irriterade luftvägar på morgonen. Är du osäker ger en enkel hygrometer svaret – runt 40–60 procent relativ luftfuktighet är en bra tumregel för hemmet."}
      verdict={"Två bra apparater för två motsatta problem. Pro Breeze är ett prisvärt val när fukten sitter i väggarna under hösten – den arbetar tyst och sköter sig själv. Levoit väljer du när vinterluften blir torr och du vill sova och andas bekvämare. Mät gärna först, köp sedan."}
      heroImage={heroImage}
      picks={luftavfuktareEllerLuftfuktarePicks}
      comparisonRows={luftavfuktareEllerLuftfuktareComparisonRows}
      faqItems={luftavfuktareEllerLuftfuktareFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={luftavfuktareEllerLuftfuktareRelatedLinks}
      backHref={"/halsa"}
      backLabel={"Tillbaka till hälsa"}
    />
  );
}
