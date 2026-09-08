import {
  proironNeopreneDumbbellsProduct,
  songmicsDumbbellSetProduct,
  type Product,
} from "@/lib/products";

export type HantlarQuote = {
  text: string;
  attribution: string;
};

export type HantlarPick = {
  product: Product;
  path: string;
  badge: string;
  headline: string;
  shortBody: string;
  valueHook: string;
  valueStatement: string;
  passFor: string[];
  caution: string;
  verdict: string;
  amazonSummary: string;
  amazonQuotes: HantlarQuote[];
  comparisonNote: string;
  comparisonCta: string;
  comparisonHref: string;
  reviewSectionId: string;
  reviewFormId: string;
  targetKeyword: string;
  metaTitle: string;
  metaDescription: string;
};

export const hantlarFaqItems = [
  { question: "Hur väljer jag vikt?", answer: "Utgå från de övningar du faktiskt gör och en belastning du redan vet fungerar för dig. Den här produktguiden bedömer inte din personliga träningsnivå och ger inget generellt starttal i kilo." },
  { question: "Kan jag ändra vikten på neoprenhanteln?", answer: "De fasta hantlarna i denna jämförelse ändrar inte vikt med lösa skivor. För en annan vikt behöver du en annan hantel." },
  { question: "Behöver jag ett helt set?", answer: "Ett set är relevant om du använder flera av vikterna och behöver förvaringen. Jämför paketets innehåll med ett par i den vikt du behöver, inklusive frakt." },
  { question: "Har ni jämfört grepp och hållbarhet?", answer: "Nej. Vi har inte provat grepp, falltålighet eller hållbarhet. Bilder och produktnamn ersätter inte instruktioner för den exakta modellen." },
];

export const hantlarComparisonRows = [
  ["Utgångspunkt", "En fast vikt som passar en bestämd övning", "Flera vikter om du faktiskt behöver dem"],
  ["Typ", "Fasta neoprenhantlar", "Hantelset med ställning enligt produktposten"],
  ["Kontrollera paketet", "Vikt per hantel och antal", "Samtliga vikter, antal och ställningens innehåll"],
  ["Matchad aktuell butiksvariant", "Inte verifierad", "Inte verifierad"],
] as const;

export const hantlarPicks: HantlarPick[] = [
  {
    product: proironNeopreneDumbbellsProduct,
    path: "/traning/hantlar/proiron-neopren",
    badge: "Kontrollera varianten",
    headline: "PROIRON neoprenhantlar – behöver du en fast vikt?",
    shortBody: "Välj en fast hantel först när du vet vilken vikt du behöver. Vikt per hantel och antal i butikens paket är inte verifierade.",
    valueHook: "Välj efter övningen",
    valueStatement: "Välj en fast hantel först när du vet vilken vikt du behöver. Vikt per hantel och antal i butikens paket är inte verifierade. Detta är inte ett justerbart hantelset. En annan vikt kräver en annan hantel.",
    passFor: [
      "Välj en fast hantel först när du vet vilken vikt du behöver. Vikt per hantel och antal i butikens paket är inte verifierade."
    ],
    caution: "Detta är inte ett justerbart hantelset. En annan vikt kräver en annan hantel.",
    verdict: "Behåll det du har om det redan fungerar för dina övningar.",
    amazonSummary: "Aktuella köparbetyg, antal omdömen och jämförande erfarenheter är inte verifierade.",
    amazonQuotes: [],
    comparisonNote:
      "Vill du ha flera vikter och ställning direkt? Se SONGMICS hantelset.",
    comparisonCta: "Se SONGMICS hantelset",
    comparisonHref: "/traning/hantlar/songmics-set",
    reviewSectionId: "proiron-neoprenhantlar-recensioner",
    reviewFormId: "proiron-neoprenhantlar-skriv-recension",
    targetKeyword: "proiron neoprenhantlar",
    metaTitle: "PROIRON neoprenhantlar – behöver du en fast vikt? | Elins val",
    metaDescription: "Välj en fast hantel först när du vet vilken vikt du behöver. Vikt per hantel och antal i butikens paket är inte verifierade. Detta är inte ett justerbart hantelset. En annan vikt kräver en annan hantel.",
  },
  {
    product: songmicsDumbbellSetProduct,
    path: "/traning/hantlar/songmics-set",
    badge: "Komplett set",
    headline: "SONGMICS hantelset - färdigt minihemmagym med ställning",
    shortBody:
      "Sex neoprenhantlar i tre nivåer med ställning och hexagonform. Ett smidigt val när du vill ha progression hemma utan att välja vikt varje gång.",
    valueHook: "Ett komplett startset, inte bara ett par hantlar.",
    valueStatement:
      "SONGMICS ger dig 1, 3 och 5 kg i par, plus en enkel PP-ställning som håller ordning. Hexagonformen gör att hantlarna inte rullar iväg lika lätt. Det är inte billigaste vägen om du bara behöver en vikt, men det är smart om du vill ha ett redo hemmakit.",
    passFor: [
      "Vill ha flera vikter från start.",
      "Delar hantlar med någon annan hemma.",
      "Vill ha ställning och ordning i ett litet träningshörn.",
    ],
    caution:
      "Ställningen är i plast och kunde vara stadigare. SONGMICS anger också att cirka 3% viktavvikelse kan förekomma, och hantlarna bör inte tappas direkt på hårda trägolv.",
    verdict: "Bästa valet om du vill ha ett färdigt set med ställning.",
    amazonSummary: "Amazon visar 4,6 av 5 från 2 839 recensioner och #23 i Dumbbells.",
    amazonQuotes: [
      {
        text: "Worth it.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Met my expectations — good fit.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Ottima qualità — best value I've seen among sports shops.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Nice quality, grippy and easy to use.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "The stand could have been a bit sturdier — otherwise great quality.",
        attribution: "Köpare, Amazon",
      },
    ],
    comparisonNote:
      "Vill du bara köpa en vikt och hålla startkostnaden nere? Se PROIRON neoprenhantlar.",
    comparisonCta: "Se PROIRON neoprenhantlar",
    comparisonHref: "/traning/hantlar/proiron-neopren",
    reviewSectionId: "songmics-hantelset-recensioner",
    reviewFormId: "songmics-hantelset-skriv-recension",
    targetKeyword: "songmics hantelset",
    metaTitle: "SONGMICS hantelset med ställning - Elins recension | Elins val",
    metaDescription:
      "Elins genomgång av SONGMICS hantelset med ställning: varför det passar som minihemmagym, och vad du bör veta om plastställning och viktavvikelse.",
  },
];

export function getOtherHantlarPick(productSlug: string) {
  return hantlarPicks.find((pick) => pick.product.slug !== productSlug);
}
