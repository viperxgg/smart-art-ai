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
  {
    question: "Hur många kilo ska jag börja med?",
    answer:
      "Börja med en vikt du kan kontrollera snyggt i 10-15 repetitioner. För axlar och armar räcker ofta 1-3 kg i början, medan ben och rygg ofta klarar 3-5 kg eller mer.",
  },
  {
    question: "Neopren eller gjutjärn — vad är skillnaden?",
    answer:
      "Neopren ger mjukare grepp, färgkodning och en snällare känsla hemma. Gjutjärn utan coating är mer rått och tåligt, men ofta hårdare mot golv och händer.",
  },
  {
    question: "Enkelt par eller ett helt set med ställning?",
    answer:
      "Ett enkelt par är billigast om du vet vilken vikt du behöver. Ett set med ställning passar bättre om du vill kunna växla mellan övningar och ha ett litet färdigt hemmagym.",
  },
  {
    question: "Är neoprenhantlar bra för hemmaträning?",
    answer:
      "Ja, särskilt för lätt till medeltung styrka, rehab, cardio och pass där du vill ha bra grepp. De är mindre rätt om du planerar tung lyftning eller vill kunna släppa vikterna i golvet.",
  },
];

export const hantlarComparisonRows = [
  ["Snabba signaler", "Mest beprövad; Välj exakt vikt; Mjukt grepp", "Set + ställning; Rollsäker hexagon; Minihemmagym"],
  ["Bäst för", "Enkelt par i exakt vikt (Elins val)", "Färdigt minihemmagym"],
  ["Typ", "Enkelt par", "Set + ställning"],
  ["Material", "Gjutjärn med neoprenyta", "Gjutjärn med neoprenyta"],
  ["Vikter", "Par från 1-10 kg", "2x1 kg, 2x3 kg, 2x5 kg"],
  ["Elins poäng", "84/100", "82/100"],
] as const;

export const hantlarPicks: HantlarPick[] = [
  {
    product: proironNeopreneDumbbellsProduct,
    path: "/traning/hantlar/proiron-neopren",
    badge: "Elins val",
    headline: "PROIRON neoprenhantlar - välj exakt vikten du behöver",
    shortBody:
      "Ett enkelt par hantlar med mjukt grepp, många viktval och enormt socialt bevis. Bäst när du vill börja smart utan att köpa ett helt set.",
    valueHook: "Billigaste vägen in: ett par i rätt vikt.",
    valueStatement:
      "PROIRON är valet när du redan vet ungefär vilken vikt du vill ha. Du slipper betala för en hel ställning, får mjuk neoprenyta med bra grepp och kan välja från 1 till 10 kg. För lätt till medeltung hemmaträning är det den enklaste vägen till mest användning per krona.",
    passFor: [
      "Vill köpa ett par hantlar i exakt rätt vikt.",
      "Tränar lätt till medeltung styrka, cardio eller rörlighet hemma.",
      "Vill ha mjukare grepp och färgkodade vikter.",
    ],
    caution:
      "Neoprenhantlar är perfekta för hemmaträning, men inte för tung lyftning eller att släppa i golvet. En vanlig invändning är att de är bra men lite dyra per kilo.",
    verdict: "Elins val - mest beprövat och enklast att börja med.",
    amazonSummary:
      "Amazon visar 4,6 av 5 från 24 861 recensioner och #4 i Dumbbells.",
    amazonQuotes: [
      {
        text: "De håller vad de lovar.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Funkar bra, snygga hantlar.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Great value — there are nicer options but more expensive doesn't mean more effective.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Good in everything except the price.",
        attribution: "Köpare, Amazon",
      },
    ],
    comparisonNote:
      "Vill du ha flera vikter och ställning direkt? Se SONGMICS hantelset.",
    comparisonCta: "Se SONGMICS hantelset",
    comparisonHref: "/traning/hantlar/songmics-set",
    reviewSectionId: "proiron-neoprenhantlar-recensioner",
    reviewFormId: "proiron-neoprenhantlar-skriv-recension",
    targetKeyword: "proiron neoprenhantlar",
    metaTitle: "PROIRON neoprenhantlar - Elins recension | Elins val",
    metaDescription:
      "Elins genomgång av PROIRON neoprenhantlar: varför ett enkelt par i rätt vikt ofta är smartast, och när ett helt hantelset passar bättre.",
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
