import { GuidePage } from "@/app/guider/_components/GuidePage";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageUrl = `${siteConfig.url}/guider/flakt-dyr-vs-billig`;

const breadcrumbItems = [
  { name: "Hem", href: "/" },
  { name: "Guider", href: "/guider" },
  {
    name: "Fläkt: dyr vs billig – värt det?",
    href: "/guider/flakt-dyr-vs-billig",
  },
];

const sections = [
  {
    heading: "Det här får du med en dyr tornfläkt",
    bullets: [
      "Tyst drift (runt 20 dB) – du kan sova med den på.",
      "Oscillering, 9 hastigheter, timer och fjärrkontroll – och en display som slocknar i mörkret.",
      "Slimmad design som svalkar hela rummet och tar lite golvyta.",
    ],
    closing: "Premium betalar du främst för tystnad och bekvämlighet.",
  },
  {
    heading: "Det här gör en billig bordsfläkt",
    bullets: [
      "Starkt, riktat luftflöde för en bråkdel av priset.",
      "Kompakt och flyttbar – funkar på skrivbordet, på nattduksbordet eller på väggen.",
    ],
    closing:
      "Mycket sval luft för pengarna – men den låter betydligt mer.",
  },
  {
    heading: "Den ärliga skillnaden",
    body: "Det här är ingen jämn match på alla punkter:",
    bullets: [
      "Vill du ha tyst svalka för hela rummet, gärna i sovrummet? Då är det tystnaden och oscillationen du betalar premium för.",
      "Vill du mest ha snabb, riktad svalka vid skrivbordet eller i ett litet rum? Då gör en billig fläkt jobbet – räkna bara med mer ljud.",
    ],
    closing:
      "Den billiga ger förvånansvärt mycket luft för priset. Den dyra köper du för tystnaden.",
  },
] as const;

const faqItems = [
  {
    question: "Är dyra fläktar tystare?",
    answer:
      "Ofta ja. Tornfläktar som Dreo ligger runt 20 dB, medan många billiga bordsfläktar låter betydligt mer. Vill du sova med fläkten på är tystnaden värd extra.",
  },
  {
    question: "Vilken fläkt är bäst för sovrummet?",
    answer:
      "En tyst tornfläkt med oscillering och en display som slocknar passar bäst nattetid. En kraftfull budgetfläkt kyler snabbt men kan störa sömnen med ljud.",
  },
] as const;

export const metadata = createSeoMetadata({
  title: "Fläkt: dyr vs billig – värt det? | Elins val",
  description:
    "Elin jämför en dyr tornfläkt och en billig bordsfläkt ärligt – vad du betalar för och när budget räcker.",
  url: pageUrl,
});

export default function FlaktDyrVsBilligPage() {
  return (
    <GuidePage
      h1="Fläkt: dyr vs billig – värt det?"
      intro="En tyst premium-tornfläkt kostar mångdubbelt mer än en liten budgetfläkt. Men hur stor är skillnaden – och behöver du betala för den? Elin går igenom det ärligt."
      sections={sections}
      verdict={{
        heading: "Elins dom: värt priset?",
        text: "En dyr tornfläkt är värd det om du vill ha tyst drift, oscillering och svalka för hela rummet – särskilt nattetid. Vill du mest ha kraftfull, riktad svalka till lågt pris räcker en budgetfläkt gott, så länge du står ut med mer ljud.",
      }}
      cta={{
        heading: "Elins val",
        links: [
          {
            href: "/halsa/flakt/dreo-cruiser-pro",
            label: "Dreo Cruiser Pro – tyst premiumval",
          },
          {
            href: "/halsa/flakt/honeywell-turboforce",
            label: "Honeywell TurboForce – budgetvalet",
          },
        ],
      }}
      faqItems={faqItems}
      breadcrumbItems={breadcrumbItems}
      relatedLinks={[
        {
          href: "/halsa/flakt/dreo-cruiser-pro",
          label: "Premium",
          text: "Dreo Cruiser Pro – tyst premiumval",
        },
        {
          href: "/halsa/flakt/honeywell-turboforce",
          label: "Budget",
          text: "Honeywell TurboForce – budgetvalet",
        },
      ]}
    />
  );
}
