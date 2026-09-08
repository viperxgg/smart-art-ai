import {
  amazonBasicsKettlebellProduct,
  proironSoftKettlebellProduct,
  type Product,
} from "@/lib/products";

export type KettlebellQuote = {
  text: string;
  attribution: string;
};

export type KettlebellPick = {
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
  amazonQuotes: KettlebellQuote[];
  comparisonNote: string;
  comparisonCta: string;
  comparisonHref: string;
  reviewSectionId: string;
  reviewFormId: string;
  targetKeyword: string;
  metaTitle: string;
  metaDescription: string;
};

export const kettlebellFaqItems = [
  {
    question: "Vilken vikt ska jag börja med?",
    answer:
      "Börja hellre lätt nog för bra teknik än tungt för snabbt. Många nybörjare börjar runt 6-10 kg för teknikövningar, medan vana tränande ofta vill ha 12-16 kg eller mer beroende på övning.",
  },
  {
    question: "Gjutjärn eller mjuk kettlebell?",
    answer:
      "Gjutjärn ger mest hållbarhet och bäst värde per kilo. En mjuk kettlebell är snällare mot golv, tår och grannar, men kostar oftast mer per kilo och känns mindre klassisk.",
  },
  {
    question: "Är kettlebell bra för nybörjare hemma?",
    answer:
      "Ja, om du börjar med kontrollerade övningar och en rimlig vikt. En kettlebell tar lite plats och kan användas för knäböj, marklyft, pressar och enklare swings när tekniken sitter.",
  },
];

export const kettlebellComparisonRows = [
  ["Snabba signaler", "Mest värde; Tusentals omdömen; Solid gjutjärn", "Golvvänligt; Tystare hemma; Bäst för nybörjare"],
  [
    "Bäst för",
    "Bäst värde, hållbar träning (Elins val)",
    "Lägenhet, golvskydd och nybörjare",
  ],
  ["Material", "Solid gjutjärn", "PVC + järnsand"],
  ["Vikter", "6/10/12/16/20 kg", "2/4/6/8/10 kg"],
  [
    "Extra",
    "Tusentals omdömen, texturerat handtag",
    "Tystare, golv- och tåvänlig mjuk kropp",
  ],

] as const;

export const kettlebellPicks: KettlebellPick[] = [
  {
    product: amazonBasicsKettlebellProduct,
    path: "/traning/kettlebell/amazon-basics",
    badge: "Variant ej verifierad",
    headline: "Amazon Basics kettlebell – kontrollera vikt och variant",
    shortBody:
      "Välj först när exakt vikt och antal matchar dina övningar. Den aktuella butiksvarianten är inte verifierad.",
    valueHook: "Välj efter dina övningar",
    valueStatement:
      "Välj först när exakt vikt och antal matchar dina övningar. Den aktuella butiksvarianten är inte verifierad.",
    passFor: [
  "Du har kontrollerat att exakt vikt och antal fyller ditt behov."
],
    caution:
      "Vi har inte jämfört grepp, hållbarhet eller prisvärde och anger ingen generell nybörjarvikt.",
    verdict: "Behåll befintlig utrustning om den räcker för dina övningar.",
    amazonSummary:
      "Aktuella köparbetyg och jämförande erfarenheter är inte verifierade.",
    amazonQuotes: [],
    comparisonNote:
      "Vill du skydda golv och tår, särskilt i lägenhet? Se PROIRON mjuk kettlebell.",
    comparisonCta: "Se PROIRON mjuk kettlebell",
    comparisonHref: "/traning/kettlebell/proiron-mjuk",
    reviewSectionId: "amazon-basics-kettlebell-recensioner",
    reviewFormId: "amazon-basics-kettlebell-skriv-recension",
    targetKeyword: "amazon basics kettlebell",
    metaTitle: "Amazon Basics kettlebell – kontrollera vikt och variant | Elins val",
    metaDescription:
      "Välj först när exakt vikt och antal matchar dina övningar. Den aktuella butiksvarianten är inte verifierad. Vi har inte jämfört grepp, hållbarhet eller prisvärde och anger ingen generell nybörjarvikt.",
  },
  {
    product: proironSoftKettlebellProduct,
    path: "/traning/kettlebell/proiron-mjuk",
    badge: "Golvsnäll",
    headline: "PROIRON mjuk kettlebell - tryggare hemma",
    shortBody:
      "Ett mjukare val för lägenhet, nybörjare och hem där golv, ljud och tår spelar större roll än lägsta pris per kilo.",
    valueHook: "Mjukare kettlebell för golv, tår och lugnare hemmaträning.",
    valueStatement:
      "PROIRON bygger på en mjuk PVC-kropp fylld med järnsand. Det gör den tystare och mer förlåtande än gjutjärn, särskilt om du tränar i lägenhet eller nära barn och husdjur. Du betalar mer per kilo, men får en tryggare känsla hemma.",
    passFor: [
      "Tränar i lägenhet eller på känsliga golv.",
      "Vill ha en tystare kettlebell för nybörjarövningar.",
      "Prioriterar säkerhet framför maximal hållbarhet per krona.",
    ],
    caution:
      "Det här är PVC och järnsand, inte gjutjärn. Den kostar mer per kilo, och om du vill ha maximal hållbarhet och värde finns billigare, tåligare alternativ.",
    verdict: "Bästa alternativet när hemmet behöver en mjukare lösning.",
    amazonSummary: "Amazon visar 4,6 av 5 från 1 185 recensioner.",
    amazonQuotes: [
      {
        text: "Doesn't break the floor.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Safe — great for homes with kids and pets.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Expensive, but safe.",
        attribution: "Köpare, Amazon",
      },
    ],
    comparisonNote:
      "Vill du ha mest hållbarhet och värde för pengarna? Se Amazon Basics gjutjärn.",
    comparisonCta: "Se Amazon Basics",
    comparisonHref: "/traning/kettlebell/amazon-basics",
    reviewSectionId: "proiron-mjuk-kettlebell-recensioner",
    reviewFormId: "proiron-mjuk-kettlebell-skriv-recension",
    targetKeyword: "proiron mjuk kettlebell",
    metaTitle: "PROIRON mjuk kettlebell - Elins recension | Elins val",
    metaDescription:
      "Elins genomgång av PROIRON mjuk kettlebell: varför den passar lägenhet och nybörjare, och när gjutjärn är bättre värde.",
  },
];

export function getOtherKettlebellPick(productSlug: string) {
  return kettlebellPicks.find((pick) => pick.product.slug !== productSlug);
}
