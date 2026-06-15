import {
  braunSilkEpil9Product,
  panasonicEsEy30EpilatorProduct,
  type Product,
} from "@/lib/products";

export type EpilatorQuote = {
  text: string;
  attribution: string;
};

export type EpilatorPick = {
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
  amazonQuotes: EpilatorQuote[];
  comparisonNote: string;
  comparisonCta: string;
  comparisonHref: string;
  reviewSectionId: string;
  reviewFormId: string;
  targetKeyword: string;
  metaTitle: string;
  metaDescription: string;
};

export const epilatorFaqItems = [
  {
    question: "Gör det ont att epilera?",
    answer:
      "Lite i början; det blir oftast mindre obehagligt med tiden och rätt teknik. Börja på lägsta hastigheten; vått och varmt vatten kan kännas skonsammare.",
  },
  {
    question: "Hur länge håller resultatet?",
    answer:
      "Ofta upp till flera veckor, eftersom håret tas bort från roten.",
  },
  {
    question: "Epilera vått eller torrt?",
    answer:
      "Båda modellerna klarar vått och torrt; i duschen kan det kännas skonsammare.",
  },
];

export const epilatorComparisonRows = [
  ["Snabba signaler", "Wet/Dry; Sladdlös; Brett huvud", "Premiumval; MicroGrip; Många tillbehör"],
  ["Bäst för", "Mest för pengarna (Elins val)", "Premium – det yppersta"],
  ["Pincetter", "60", "40 MicroGrip (fångar 0,5 mm)"],
  ["Wet/Dry", "Ja", "Ja"],
  [
    "Extra",
    "Trådlös, tystare",
    "Massagerulle, pivoterande huvud, lady shaver-huvud, 5 års garanti",
  ],
  ["Pris", "Lägre", "Högre"],
  ["Elins poäng", "84/100", "81/100"],
] as const;

export const epilatorPicks: EpilatorPick[] = [
  {
    product: panasonicEsEy30EpilatorProduct,
    path: "/skonhet/epilator/panasonic-es-ey30",
    badge: "Elins val",
    headline: "Panasonic ES-EY30 – mest epilator för pengarna",
    shortBody:
      "Marknadens mest sålda epilator – och det märks. Ett starkt val för ben och kropp när du vill ha långvarigt resultat utan premiumpris.",
    valueHook: "Marknadens mest sålda epilator – och det märks.",
    valueStatement:
      "Tar bort hår från roten med 60 pincetter, fungerar vått och torrt och är trådlös. Flera användare tycker att den gör mindre ont än andra epilatorer – till ungefär halva priset av premiummodellerna.",
    passFor: [
      "Vill ha en beprövad epilator för ben och kropp.",
      "Vill kunna använda den vått eller torrt.",
      "Vill ha mest värde utan att välja premiumpriset.",
    ],
    caution:
      "Epilering gör alltid lite ont i början och kräver lite teknik; på vissa områden, som armhålan, kan du behöva dra några extra gånger. Men på ben och kropp håller resultatet länge.",
    verdict: "Elins val – mest epilator för pengarna.",
    amazonSummary:
      "En av marknadens mest sålda epilatorer, mycket högt betyg.",
    amazonQuotes: [
      {
        text: "Epileringen gör mycket mindre ont än med min gamla epilator. Även lite tystare.",
        attribution: "Svensk köpare, Amazon",
      },
      {
        text: "Best I've ever had!",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Får inte alltid bort håret på första försöket – men rekommenderar produkten.",
        attribution: "Svensk köpare, Amazon",
      },
    ],
    comparisonNote:
      "Vill du ha det absolut yppersta och betala mer? Se Braun Silk-épil 9.",
    comparisonCta: "Se Braun Silk-épil 9",
    comparisonHref: "/skonhet/epilator/braun-silk-epil-9",
    reviewSectionId: "panasonic-es-ey30-recensioner",
    reviewFormId: "panasonic-es-ey30-skriv-recension",
    targetKeyword: "epilator",
    metaTitle: "Panasonic ES-EY30 epilator – Elins recension | Elins val",
    metaDescription:
      "Elins genomgång av Panasonic ES-EY30: 60 pincetter, våt/torr användning, Amazon-signaler och varför den är Elins prisvärda val bland epilatorer.",
  },
  {
    product: braunSilkEpil9Product,
    path: "/skonhet/epilator/braun-silk-epil-9",
    badge: "Premiumval",
    headline: "Braun Silk-épil 9 – premiumepilatorn",
    shortBody:
      "Premiumepilatorn för dig som vill ha det bästa: fler tillbehör, MicroGrip-teknik och en mer påkostad helhet.",
    valueHook: "Premiumepilatorn för dig som vill ha det bästa.",
    valueStatement:
      "40 MicroGrip-pincetter fångar hår så korta som 0,5 mm, pivoterande huvud och en massagerulle som minskar smärtan. Vått och torrt, lady shaver-huvud och fodral ingår – tysk kvalitet med 5 års garanti vid registrering.",
    passFor: [
      "Vill ha ett premiumval med fler tillbehör.",
      "Vill prioritera skonsam och långvarig epilering.",
      "Är beredd att betala mer för ett mer komplett paket.",
    ],
    caution:
      "Den är dyr, huvudet är lite stort så vissa områden kan vara svåra att nå, och som med alla epilatorer kan enstaka korta strån bli kvar. Men kvaliteten och resultatet håller länge.",
    verdict: "Premiumvalet – för dig som vill ha det yppersta.",
    amazonSummary: "Mycket högt betyg, premiumklass.",
    amazonQuotes: [
      {
        text: "Kvalite rakt igenom!",
        attribution: "Svensk köpare, Amazon",
      },
      {
        text: "Enkel och inte så smärtsam som jag trodde.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Tar inte alltid bort allt hår och kan vara tidskrävande.",
        attribution: "Köpare, Amazon",
      },
    ],
    comparisonNote:
      "Vill du ha mest för pengarna? Se Panasonic ES-EY30, Elins val.",
    comparisonCta: "Se Panasonic ES-EY30",
    comparisonHref: "/skonhet/epilator/panasonic-es-ey30",
    reviewSectionId: "braun-silk-epil-9-recensioner",
    reviewFormId: "braun-silk-epil-9-skriv-recension",
    targetKeyword: "braun silk epil 9",
    metaTitle: "Braun Silk-épil 9 epilator – Elins recension | Elins val",
    metaDescription:
      "Elins genomgång av Braun Silk-épil 9: MicroGrip-pincetter, pivoterande huvud, tillbehör, Amazon-signaler och när premiumvalet är värt det.",
  },
];

export function getOtherEpilatorPick(productSlug: string) {
  return epilatorPicks.find((pick) => pick.product.slug !== productSlug);
}
