import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  amazonBasicsKettlebellProduct,
  songmicsDumbbellSetProduct,
} from "@/lib/products";

export const kettlebellEllerHantlarFaqItems: DecisionComparisonFaqItem[] = [
  {
    question: "Är kettlebell eller hantlar bäst för nybörjare?",
    answer:
      "Båda fungerar bra. En kettlebell är mångsidig och platssnål för svingar och helkropp, medan ett hantelset ger fler vikter för klassisk styrketräning.",
  },
  {
    question: "Behöver jag både kettlebell och hantlar?",
    answer:
      "Inte nödvändigtvis. Många börjar med ett av dem. De kompletterar dock varandra om du vill variera träningen hemma.",
  },
];

export const kettlebellEllerHantlarComparisonRows = [
  [
    "Snabba signaler",
    "En kettlebell; svingar; helkropp",
    "Hantelset med ställning; flera vikter; justerbart",
  ],
  [
    "Bäst för",
    "Svingar, marklyft och dynamiska helkroppspass",
    "Klassisk styrketräning med olika vikter",
  ],
  ["Plats", "Tar minimal plats - ett redskap", "Behöver plats för ställning och flera par"],
  ["Kom igång", "Enkelt att börja, en vikt i taget", "Färdigt startset direkt ur lådan"],
  ["Elins poäng", "86/100", "82/100"],
] as const;

export const kettlebellEllerHantlarPicks: [
  DecisionComparisonPick,
  DecisionComparisonPick,
] = [
  {
    product: amazonBasicsKettlebellProduct,
    path: "/traning/kettlebell/amazon-basics",
    badge: "Mest värde",
    headline: "Amazon Basics gjutjärns-kettlebell - mångsidig och prisvärd",
    shortBody:
      "Välj kettlebellen om du vill ha ett enda mångsidigt redskap för svingar och helkroppsrörelser som tar lite plats.",
  },
  {
    product: songmicsDumbbellSetProduct,
    path: "/traning/hantlar/songmics-set",
    badge: "Set + ställning",
    headline: "SONGMICS hantelset - färdigt startset",
    shortBody:
      "Välj hantelsetet om du vill ha flera vikter och en ställning för klassisk styrketräning hemma från start.",
  },
];

export const kettlebellEllerHantlarRelatedLinks: DecisionComparisonRelatedLink[] =
  [
    {
      href: "/traning/kettlebell",
      label: "Kettlebell",
      text: "Jämför kettlebells för hemmaträning.",
    },
    {
      href: "/traning/hantlar",
      label: "Hantlar",
      text: "Jämför hantlar och set för hemmet.",
    },
    {
      href: "/traning/kettlebell/amazon-basics",
      label: "Kettlebell",
      text: "Läs recensionen av Amazon Basics kettlebell.",
    },
    {
      href: "/traning/hantlar/songmics-set",
      label: "Hantelset",
      text: "Läs recensionen av SONGMICS hantelset.",
    },
    {
      href: "/traning/justerbara-hantlar",
      label: "Justerbara hantlar",
      text: "Vill du spara plats? Se Elins val av justerbara hantlar.",
    },
    {
      href: "/traning/gjutjarn-eller-mjuk-kettlebell",
      label: "Jämförelse",
      text: "Gjutjärns- eller mjuk kettlebell? Välj rätt sort för ditt hem.",
    },
  ];
