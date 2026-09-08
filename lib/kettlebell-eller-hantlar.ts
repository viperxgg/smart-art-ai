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
  { question: "Är ett set med flera hantelvikter justerbart?", answer: "Inte i sig. Med fasta hantlar byter du till en annan hantel för att ändra belastningen. Kontrollera att ett justerbart system uttryckligen kan ändra vikt på samma redskap." },
  { question: "Vilken vikt ska jag köpa?", answer: "Utgå från övningar och en belastning du vet fungerar för dig. Vi har inte bedömt din träningsnivå och anger ingen allmän nybörjarvikt. Kontrollera kg per redskap, antal och om paketvikten inkluderar ställningen." },
  { question: "Behöver jag båda?", answer: "Inte om det du redan har räcker för dina övningar. Köp ett extra redskap först när det fyller ett konkret behov." },
];

export const kettlebellEllerHantlarComparisonRows = [
  ["Typ i produktposten", "Kettlebell", "Hantelset med ställning"],
  ["Viktig kontroll", "Vikt och antal redskap", "Vikt per hantel och antal av varje vikt"],
  ["Ändra belastning", "En fast kettlebell kräver ett annat redskap för en annan vikt", "Med fasta hantlar byter du hantel, inte viktskivor"],
  ["Matchad butiksvariant", "Inte verifierad", "Inte verifierad"],
  ["När avstå?", "När du behöver ett hantelpar eller flera andra vikter", "När du bara använder ett par eller paketets vikter inte räcker"],
] as const;

export const kettlebellEllerHantlarPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: amazonBasicsKettlebellProduct, path: "/traning/kettlebell/amazon-basics",
    badge: "Vikt ej verifierad", headline: "Amazon Basics – behöver du en kettlebell?",
    shortBody: "Kontrollera exakt vikt och antal innan du väljer. Vi har inte underlag för att kalla denna butikspost billigast eller bäst för nybörjare.",
  },
  {
    product: songmicsDumbbellSetProduct, path: "/traning/hantlar/songmics-set",
    badge: "Paket ej verifierat", headline: "SONGMICS – använder du flera fasta vikter?",
    shortBody: "Kontrollera modellnummer och paketets innehåll. Ett set är relevant först när du faktiskt använder vikterna som ingår.",
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
