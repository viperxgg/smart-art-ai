import {
  remingtonMiniS2880Product,
  remingtonS8540Product,
  type Product,
} from "@/lib/products";

export type PlattangQuote = {
  text: string;
  attribution: string;
};

export type PlattangPick = {
  product: Product;
  path: string;
  badge: string;
  headline: string;
  shortBody: string;
  valueHook: string;
  valueStatement: string;
  reviewIntro: string;
  pros: string[];
  caution: string;
  verdict: string;
  amazonSummary: string;
  amazonQuotes: PlattangQuote[];
  reviewSectionId: string;
  reviewFormId: string;
  targetKeyword: string;
  metaTitle: string;
  metaDescription: string;
  passFor: string[];
  comparisonVerdict: string;
};

export const plattangFaqItems = [
  {
    question: "Vilken temperatur är bäst för plattång?",
    answer:
      "Börja lågt: cirka 150-180°C för fint eller skadat hår, 180-210°C för normalt hår och högre temperatur först när håret är tjockt och svårare att forma.",
  },
  {
    question: "Hur skyddar jag håret när jag plattar?",
    answer:
      "Platta torrt hår, undvik onödigt hög värme och daglig användning. Ett skonsamt läge som PRO+ samt keramik eller keratin kan hjälpa till att göra valet mer varsamt.",
  },
  {
    question: "Mini eller fullstorlek?",
    answer:
      "Mini passar bäst för resa, lugg och kort hår. Fullstorlek passar bättre hemma och när du vill kunna jobba igenom allt hår snabbare.",
  },
];

export const plattangComparisonRows = [
  ["Bäst för", "Hemma, alla hårtyper, kvalitet", "Resa, lugg/kort hår, snabba fix"],
  ["Storlek/vikt", "Fullstorlek, breda plattor", "0,21 kg, ultralätt"],
  ["Värmelägen", "9 lägen + PRO+", "Ett läge (200°C)"],
  ["Omdöme", "4,5/5 (21 473)", "4,1/5 (4 050)"],
] as const;

export const plattangPicks: PlattangPick[] = [
  {
    product: remingtonS8540Product,
    path: "/skonhet/plattang/remington-s8540",
    badge: "Prisvärt vardagsval",
    headline: "Remington S8540 - trygg plattång för vardagen",
    shortBody:
      "Ett känt märke som skyddar håret - till ett vänligt pris.",
    valueHook: "Ett känt märke som skyddar håret - till ett vänligt pris.",
    valueStatement:
      "Keramik med keratin och mandelolja som skyddar håret, 9 värmelägen (150-230°C) plus ett skonsamt PRO+-läge, klar på 15 sekunder - och över 21 000 omdömen med 4,5 i snitt.",
    reviewIntro:
      "Remington S8540 känns som ett smart köp när du vill ha en fullstor plattång för hemma utan att gå upp i premiumkänsla eller premiumpris. Den stora poängen är kombinationen: känt märke, hårskydd, flera värmelägen och ett skonsammare läge för vanlig vardagsanvändning.",
    pros: [
      "Keramik med keratin och mandelolja",
      "9 värmelägen mellan 150 och 230°C",
      "PRO+-läge för mer skonsam styling",
      "Snabb uppvärmning på cirka 15 sekunder",
      "Starkt Amazon-underlag med många omdömen",
    ],
    caution:
      "Hade plattorna varit lite smalare hade den passat den som är van vid en miniplatta bättre - men för kvaliteten och priset är det svårt att klaga.",
    verdict:
      "Ett tryggt, prisvärt vardagsval för alla hårtyper.",
    amazonSummary: "4,5/5 baserat på 21 473 omdömen på Amazon.",
    amazonQuotes: [
      {
        text: "Väldigt nöjd",
        attribution: "Svensk köpare, Amazon",
      },
      {
        text: "Perfekt",
        attribution: "Svensk köpare, Amazon",
      },
      {
        text: "It gives such a great shine to hair",
        attribution: "Köpare, Amazon",
      },
    ],
    reviewSectionId: "s8540-recensioner",
    reviewFormId: "s8540-skriv-recension",
    targetKeyword: "remington plattång",
    metaTitle: "Remington S8540 plattång - Elins recension | Elins val",
    metaDescription:
      "Elins genomgång av Remington S8540: keratin, 9 värmelägen, PRO+-läge, Amazon-signaler och när den passar bättre än en mini-plattång.",
    passFor: [
      "Du vill ha märkeskvalitet för hemmabruk.",
      "Du vill kunna välja mellan flera temperaturer.",
      "Du vill ha en fullstor plattång för olika hårtyper.",
    ],
    comparisonVerdict:
      "Välj S8540 om du vill ha en fullstorlek för hemma och allt hår. Vill du ha något för resan eller luggen - se Mini S2880.",
  },
  {
    product: remingtonMiniS2880Product,
    path: "/skonhet/plattang/remington-mini-s2880",
    badge: "Resefynd",
    headline: "Remington Mini S2880 - liten plattång för snabba fix",
    shortBody:
      "Riktigt smidig plattång för en låg peng.",
    valueHook: "Riktigt smidig plattång för en låg peng.",
    valueStatement:
      "Ultralätt (0,21 kg) med värmetåligt fodral, snabb uppvärmning och keramiska plattor - Remington-kvalitet som får plats i necessären.",
    reviewIntro:
      "Mini S2880 är inte produkten som ska göra allt. Den är intressant för att den gör en tydlig sak: följer med lätt, tar lite plats och hjälper till med lugg, kort hår och snabba fix när en fullstor plattång känns onödig.",
    pros: [
      "Ultralätt på cirka 0,21 kg",
      "Kompakt format för necessär och resa",
      "Värmetåligt fodral",
      "Keramiska plattor",
      "Enkel när du vill fixa snabbt",
    ],
    caution:
      "De smala plattorna gör den bäst för lugg, kort hår och snabba fix - inte för tjockt eller långt hår, och den har bara ett värmeläge. Men för resan och priset är den svårslagen.",
    verdict:
      "Ett smart litet fynd för resan och snabba fix.",
    amazonSummary:
      "4,1/5 baserat på 4 050 omdömen på Amazon. En återkommande minoritetsnotis är att smala plattor inte passar allt hår.",
    amazonQuotes: [
      {
        text: "Jättebra",
        attribution: "Svensk köpare, Amazon",
      },
      {
        text: "Travel size, very compact",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Perfekt att ha för snabba fix",
        attribution: "Köpare, Amazon",
      },
    ],
    reviewSectionId: "mini-s2880-recensioner",
    reviewFormId: "mini-s2880-skriv-recension",
    targetKeyword: "mini plattång",
    metaTitle: "Remington Mini S2880 plattång - Elins recension | Elins val",
    metaDescription:
      "Elins genomgång av Remington Mini S2880: ultralätt reseplattång, när den passar, vad Amazon-köpare säger och när du bör välja fullstorlek.",
    passFor: [
      "Du reser och vill spara plats.",
      "Du har kort hår eller lugg.",
      "Du vill ha en kompakt plattång för snabba fix.",
    ],
    comparisonVerdict:
      "Välj Mini S2880 om du vill ha något för resan, luggen eller kort hår. Vill du ha en fullstorlek för hemma och allt hår - se S8540.",
  },
];

export function getOtherPlattangPick(productSlug: string) {
  return plattangPicks.find((pick) => pick.product.slug !== productSlug);
}
