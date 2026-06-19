import { DecisionComparisonPage } from "@/app/skonhet/_components/DecisionComparisonPage";
import {
  varmluftsborsteEllerFonComparisonRows,
  varmluftsborsteEllerFonFaqItems,
  varmluftsborsteEllerFonPicks,
  varmluftsborsteEllerFonRelatedLinks,
} from "@/lib/varmluftsborste-eller-fon";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/skonhet/varmluftsborste-eller-fon`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Skönhet", href: "/skonhet" },
  {
    name: "Varmluftsborste eller vanlig fön?",
    href: "/skonhet/varmluftsborste-eller-fon",
  },
];

export const metadata = createSeoMetadata({
  title: "Varmluftsborste eller vanlig fön? Elins guide 2026 | Elins val",
  description:
    "Elin jämför varmluftsborste och hårfön: torka och styla i ett steg med BaByliss AS126E eller mest torkkraft med Remington PROluxe AC9140.",
  url: pageUrl,
  image: {
    url: `${siteConfig.url}${varmluftsborsteEllerFonPicks[1].product.image}`,
    width: 1200,
    height: 900,
    alt: varmluftsborsteEllerFonPicks[1].product.imageAlt,
  },
});

export default function VarmluftsborsteEllerFonPage() {
  return (
    <DecisionComparisonPage
      h1="Varmluftsborste eller vanlig fön?"
      intro="Hårtorken ger ren, kraftfull torkning och högst poäng. Varmluftsborsten kombinerar torkning och styling när du vill ha volym eller brushing i ett moment."
      badges={["Torka + styla", "Mest torkkraft", "Volym"]}
      howToChoose="Välj Remington PROluxe AC9140 om du mest vill torka håret snabbt och effektivt, särskilt om håret är tjockt eller blött. Välj BaByliss AS126E om du hellre vill styla samtidigt. Den ersätter inte en riktig fön för blött, tjockt hår."
      verdict="Remington PROluxe AC9140 är det starkare huvudvalet när torkkraft och poäng väger tyngst. BaByliss AS126E är rätt val när du accepterar mindre torkkraft för att få volym, böj och brushing i samma moment."
      picks={varmluftsborsteEllerFonPicks}
      comparisonRows={varmluftsborsteEllerFonComparisonRows}
      faqItems={varmluftsborsteEllerFonFaqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={varmluftsborsteEllerFonRelatedLinks}
    />
  );
}
