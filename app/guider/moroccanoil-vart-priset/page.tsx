import { GuidePage } from "@/app/guider/_components/GuidePage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/guider/moroccanoil-vart-priset`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Guider", href: "/guider" },
  {
    name: "Moroccanoil hårolja – värt priset?",
    href: "/guider/moroccanoil-vart-priset",
  },
];

const sections = [
  {
    heading: "Det här ger glansen",
    bullets: [
      "Ingredienslistan börjar med två silikoner: cyklometikon (lätt, avdunstar) och dimetikon (slätar och stannar kvar i håret).",
      "Det är till stor del silikonerna som ger den släta, glansiga finishen och mindre frizz.",
      "Arganolja finns med (tredje ingrediens) och bidrar med fettsyror och E-vitamin – men i mindre mängd än silikonerna.",
    ],
    closing:
      "Glansen kommer alltså främst från silikoner – inte i första hand från argan, som marknadsföringen lyfter fram.",
  },
  {
    heading: "Det billigare alternativet",
    bullets: [
      "En billigare silikonbaserad hårolja kan ge en mycket liknande glans och slip.",
      "Du betalar premium för varumärket, doften och känslan – inte för en unik glans-ingrediens.",
    ],
    closing:
      "Glansen är lätt att efterlikna billigare. Skillnaden ligger mest i upplevelsen.",
  },
] as const;

const faqItems = [
  {
    question: "Är det arganoljan som ger glansen i Moroccanoil?",
    answer:
      "Inte främst. Ingredienslistan toppas av silikoner (cyklometikon, dimetikon) som står för den släta glansen. Arganolja finns med men i mindre mängd.",
  },
  {
    question: "Finns det billigare alternativ till Moroccanoil?",
    answer:
      "Ja. En billigare silikonbaserad hårolja kan ge mycket liknande glans. Du betalar premium främst för varumärke, doft och känsla.",
  },
] as const;

export const metadata = createSeoMetadata({
  title: "Moroccanoil hårolja – värt priset? | Elins val",
  description:
    "Elin går igenom Moroccanoils ingredienser ärligt – varför håroljan ger glans, och om en billigare olja gör samma jobb.",
  url: pageUrl,
});

export default function MoroccanoilVartPrisetPage() {
  return (
    <GuidePage
      h1="Moroccanoil hårolja – värt priset?"
      intro="Moroccanoil är en ikonisk hårolja med premium-prislapp. Men vad är det egentligen du betalar för? Elin går igenom ingredienslistan ärligt."
      sections={sections}
      verdict={{
        heading: "Elins dom: värt priset?",
        text: "Vill du ha en beprövad, lyxig hårolja med fin doft och känsla kan Moroccanoil vara värd priset. Vill du främst ha glans och mindre frizz får du nästan samma resultat från en billigare silikonbaserad olja. Lite räcker långt oavsett.",
      }}
      cta={{
        heading: "Elins val",
        links: [
          {
            href: "/skonhet/harolja",
            label: "Läs Elins omdöme av Moroccanoil",
          },
          {
            href: "/guider/dyson-airwrap-eller-varmluftsborste",
            label: "Fler ärliga köpråd",
          },
        ],
      }}
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={[
        {
          href: "/skonhet/harolja",
          label: "Elins val",
          text: "Läs Elins omdöme av Moroccanoil",
        },
        {
          href: "/guider/dyson-airwrap-eller-varmluftsborste",
          label: "Guider",
          text: "Fler ärliga köpråd",
        },
      ]}
    />
  );
}
