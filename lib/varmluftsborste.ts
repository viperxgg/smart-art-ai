import {
  babylissAs126eProduct,
  remingtonAs7100Product,
  type Product,
} from "@/lib/products";

export type VarmluftsborsteQuote = {
  text: string;
  attribution: string;
};

export type VarmluftsborstePick = {
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
  amazonQuotes: VarmluftsborsteQuote[];
  comparisonNote: string;
  comparisonCta: string;
  comparisonHref: string;
  reviewSectionId: string;
  reviewFormId: string;
  targetKeyword: string;
  metaTitle: string;
  metaDescription: string;
};

export const varmluftsborsteFaqItems = [
  {
    question: "Vad är en varmluftsborste?",
    answer:
      "En varmluftsborste kombinerar fön och borste så att du kan torka och forma håret samtidigt.",
  },
  {
    question: "Passar den kort eller långt hår?",
    answer:
      "Enklare modeller som Remington AS7100 passar bäst för kort hår. Mångsidiga 4-i-1-modeller som BaByliss AS126E klarar fler hårlängder och stylingbehov.",
  },
  {
    question: "Skadar en varmluftsborste håret?",
    answer:
      "Använd lägre värme och värmeskydd. En varmluftsborste kan ofta kännas skonsammare än en plattång eftersom den formar med varm luft.",
  },
];

export const varmluftsborsteComparisonRows = [
  ["Bäst för", "Mångsidig 4-i-1 (Elins val)", "Billigast, kort hår"],
  ["Effekt", "1000 W", "400 W"],
  [
    "Tillbehör",
    "4 (volym, rätning, kort hår, munstycke)",
    "2 (19/25 mm)",
  ],
  ["Elins poäng", "80/100", "76/100"],
] as const;

export const varmluftsborstePicks: VarmluftsborstePick[] = [
  {
    product: babylissAs126eProduct,
    path: "/skonhet/varmluftsborste/babyliss-as126e",
    badge: "Elins val",
    headline: "BaByliss AS126E – mångsidig varmluftsborste",
    shortBody:
      "En borste, fyra sätt att styla. Volym, brushing och enklare formning i ett paket till rimligt pris.",
    valueHook: "En borste, fyra sätt att styla.",
    valueStatement:
      "BaByliss Perfect Finish är en 4-i-1-varmluftsborste med volymborste, rätningsborste, borste för kort hår och munstycke. Du får jonteknik mot frizz, 1000 W och tre års garanti till ett rimligt pris.",
    passFor: [
      "Vill ha en mångsidig varmluftsborste för volym.",
      "Vill kunna göra brushing och mjuka lockar hemma.",
      "Vill ha flera stylingtillbehör utan att köpa flera verktyg.",
    ],
    caution:
      "38 mm-borsten kan vara lite stor för väldigt kort hår, och enstaka köpare nämner hållbarheten. Men för mångsidig styling är den svårslagen i prisklassen.",
    verdict: "Elins val – mångsidig 4-i-1 för volym och brushing.",
    amazonSummary: "Populär modell, högt betyg.",
    amazonQuotes: [
      {
        text: "Jätte lätt o använda, torkar snabbt, fina lockar.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Helt perfekt till mitt hår.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Kanske lite för stor i diameter för min hårlängd.",
        attribution: "Köpare, Amazon",
      },
    ],
    comparisonNote: "Vill du ha det billigaste för kort hår? Se Remington AS7100.",
    comparisonCta: "Se Remington AS7100",
    comparisonHref: "/skonhet/varmluftsborste/remington-as7100",
    reviewSectionId: "babyliss-as126e-recensioner",
    reviewFormId: "babyliss-as126e-skriv-recension",
    targetKeyword: "babyliss as126e",
    metaTitle: "BaByliss AS126E varmluftsborste – Elins recension | Elins val",
    metaDescription:
      "Elins genomgång av BaByliss AS126E: 4-i-1-varmluftsborste med 1000 W, jonteknik och varför den är Elins mångsidiga val.",
  },
  {
    product: remingtonAs7100Product,
    path: "/skonhet/varmluftsborste/remington-as7100",
    badge: "Budget & kort hår",
    headline: "Remington AS7100 – billig varmluftsborste för kort hår",
    shortBody:
      "Billigast i klassen och gjord för kort hår, lugg och bob när du vill forma utan stor stylingrutin.",
    valueHook: "Billigast i klassen – gjord för kort hår.",
    valueStatement:
      "Remington AS7100 är en lätt, prisvärd varmluftsborste på 400 W med två tillbehör på 19 och 25 mm, perfekt för att forma kort hår, lugg och bob.",
    passFor: [
      "Har kort hår, lugg eller bob.",
      "Vill ha det billigaste alternativet.",
      "Vill forma snabbt utan ett fullstort stylingverktyg.",
    ],
    caution:
      "Det är en enkel 400 W-modell – inte lika kraftfull, och bäst på kort hår snarare än långt och tjockt. Men för priset gör den jobbet på kort hår.",
    verdict: "Budgetvalet – billigast och bäst på kort hår.",
    amazonSummary: "Många omdömen, bra betyg för priset.",
    amazonQuotes: [
      {
        text: "Det är jättebra.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Bra krut i den, varm direkt.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Okay for its price – luktar plast och luften är väl varm.",
        attribution: "Köpare, Amazon",
      },
    ],
    comparisonNote: "Vill du ha en mångsidig 4-i-1? Se BaByliss AS126E, Elins val.",
    comparisonCta: "Se BaByliss AS126E",
    comparisonHref: "/skonhet/varmluftsborste/babyliss-as126e",
    reviewSectionId: "remington-as7100-recensioner",
    reviewFormId: "remington-as7100-skriv-recension",
    targetKeyword: "remington as7100",
    metaTitle: "Remington AS7100 varmluftsborste – Elins recension | Elins val",
    metaDescription:
      "Elins genomgång av Remington AS7100: billig varmluftsborste för kort hår, lugg och bob med två tillbehör.",
  },
];

export function getOtherVarmluftsborstePick(productSlug: string) {
  return varmluftsborstePicks.find((pick) => pick.product.slug !== productSlug);
}
