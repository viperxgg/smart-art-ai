import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  ansiktsoljaEllerAnsiktsmistComparisonRows,
  ansiktsoljaEllerAnsiktsmistFaqItems,
  ansiktsoljaEllerAnsiktsmistPicks,
  ansiktsoljaEllerAnsiktsmistRelatedLinks,
} from "@/lib/ansiktsolja-eller-ansiktsmist";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/ansiktsolja-eller-ansiktsmist`;

const heroImage = {
  src: "/comparisons/ansiktsolja-eller-ansiktsmist.webp",
  alt: "Ansiktsolja eller ansiktsmist? — Elins jämförelse",
};

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  { name: "Ansiktsolja eller ansiktsmist?", href: `/skonhet/ansiktsolja-eller-ansiktsmist` },
];

export const metadata = createSeoMetadata({
  title: "Ansiktsolja eller ansiktsmist? Fukt för torr hösthy | Elins val",
  description: "Närande olja eller uppfriskande mist? Elin jämför Nature Spells vitaminolja med Mario Badescus rosvattenspray – rätt fukt när inomhusluften blir torr. (Annons)",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${heroImage.src}`,
    width: 1200,
    height: 760,
    alt: heroImage.alt,
  },
});

export default function AnsiktsoljaEllerAnsiktsmistPage() {
  return (
    <DecisionComparisonPage
      h1={"Ansiktsolja eller ansiktsmist?"}
      intro={"När elementen går igång och luften inomhus blir torr börjar många leta efter mer fukt till hyn – men olja och mist gör helt olika jobb. Ansiktsoljan är det närande sista steget som låser in fukt och ger lyster, medan misten är den snabba uppfriskningen mitt på dagen. Elin jämför Nature Spells vitaminolja med Mario Badescus klassiska rosvattenspray så du väljer rätt sorts fukt."}
      badges={["Torr höstluft","Fukt & lyster","Olika jobb"]}
      howToChoose={"Välj ansiktsoljan om din hud känns torr, stram eller glåmig på kvällen – några droppar som sista steg i rutinen hjälper till att låsa in fukten från dina andra produkter och ger en mjuk lyster till morgonen. Välj misten om du vill ha något för dagen: en snabb, doftande uppfriskning över makeupen, efter träningen eller vid skrivbordet när luften känns torr. Oljan är vård, misten är känsla – och de konkurrerar egentligen inte om samma plats i rutinen."}
      verdict={"Två olika sorters fukt. Oljan gör mest för torr hy över tid – ett närande kvällssteg som märks morgonen efter. Misten vinner vardagsögonblicken: den friskar upp direkt men ersätter inte en riktig fuktrutin. Har du torr hösthy: börja med oljan. Vill du bara ha en skönare arbetsdag: misten."}
      heroImage={heroImage}
      picks={ansiktsoljaEllerAnsiktsmistPicks}
      comparisonRows={ansiktsoljaEllerAnsiktsmistComparisonRows}
      faqItems={ansiktsoljaEllerAnsiktsmistFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={ansiktsoljaEllerAnsiktsmistRelatedLinks}
      backHref={"/skonhet"}
      backLabel={"Tillbaka till skönhet"}
    />
  );
}
