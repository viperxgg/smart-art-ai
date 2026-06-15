import {
  prosourcefitYogaMatProduct,
  yogatiTpeYogaMatProduct,
  type Product,
} from "@/lib/products";

export type YogamattaQuote = {
  text: string;
  attribution: string;
};

export type YogamattaPick = {
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
  amazonQuotes: YogamattaQuote[];
  comparisonNote: string;
  comparisonCta: string;
  comparisonHref: string;
  reviewSectionId: string;
  reviewFormId: string;
  targetKeyword: string;
  metaTitle: string;
  metaDescription: string;
};

export const yogamattaFaqItems = [
  {
    question: "Vilken tjocklek ska en yogamatta ha?",
    answer:
      "För klassisk yoga räcker ofta 4-6 mm eftersom du får bättre kontakt med golvet. För pilates, stretch och känsliga knän kan 10-13 mm vara skönare.",
  },
  {
    question: "Skum eller TPE — vad är skillnaden?",
    answer:
      "NBR-skum är mjukt och dämpande, särskilt för golvövningar. TPE är oftare stabilare och greppigare för yoga, balans och positioner där du inte vill glida.",
  },
  {
    question: "Vilken matta har bäst grepp?",
    answer:
      "För grepp och stabilitet är YOGATI i TPE det starkare valet här. Den är gjord för yoga med halkfri yta och markeringslinjer, medan ProSourceFit prioriterar dämpning.",
  },
  {
    question: "Är en tjock matta bra för yoga eller pilates?",
    answer:
      "En tjock matta är mycket bra för pilates, rygg, knän och golvövningar. För stående balanspositioner i yoga kan den däremot kännas mindre stabil än en tunnare och fastare matta.",
  },
];

export const yogamattaComparisonRows = [
  ["Snabba signaler", "13 mm komfort; Bäst för pilates", "Bra grepp; Markeringslinjer; Stabil för yoga"],
  ["Bäst för", "Komfort, pilates och golvövningar (Elins val)", "Grepp, yoga och balans"],
  ["Material", "High-density NBR-skum", "TPE"],
  ["Tjocklek", "13 mm", "6 mm"],
  ["Grepp", "Mjukt och dämpande, mindre stabilt i balans", "Dubbelsidigt halkfritt med markeringslinjer"],
  ["Elins poäng", "84/100", "83/100"],
] as const;

export const yogamattaPicks: YogamattaPick[] = [
  {
    product: prosourcefitYogaMatProduct,
    path: "/traning/yogamatta/prosourcefit-13mm",
    badge: "Elins val",
    headline: "ProSourceFit 13 mm - extra mjuk matta för knän och rygg",
    shortBody:
      "En tjock och mjuk yoga- och pilatesmatta för dig som vill ha mer dämpning hemma, särskilt vid golvövningar, stretch och nybörjarpass.",
    valueHook: "Mest komfort för pengarna.",
    valueStatement:
      "ProSourceFit är valet när du prioriterar mjuk känsla framför maximal stabilitet. Med 13 mm high-density NBR-skum får knän, rygg och höfter mer dämpning vid pilates, stretch och golvövningar. Det gör den lätt att gilla för hemmaträning där komforten avgör om mattan faktiskt används.",
    passFor: [
      "Vill ha extra dämpning för knän, rygg och leder.",
      "Gör pilates, stretch eller golvövningar hemma.",
      "Är nybörjare och vill ha en mjukare start.",
    ],
    caution:
      "Den är väldigt tjock, vilket är skönt för golvövningar men mindre stabilt för stående balanspositioner. Skum kan också få märken över tid, och några köpare rapporterar att bärrem saknades vid leverans.",
    verdict: "Elins val - bäst när komfort och dämpning går först.",
    amazonSummary:
      "Amazon visar 4,6 av 5 från 7 461 recensioner och #3 i Yoga Mats.",
    amazonQuotes: [
      {
        text: "Excellent product, thick model.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Bra och mjuk, precis som på bilden.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Much more cushion for my back and knees.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Thick and high quality, but no carry strap came with it as stated.",
        attribution: "Köpare, Amazon",
      },
    ],
    comparisonNote:
      "Vill du ha bättre grepp och stabilitet för yoga? Se YOGATI TPE.",
    comparisonCta: "Se YOGATI TPE",
    comparisonHref: "/traning/yogamatta/yogati-tpe",
    reviewSectionId: "prosourcefit-yogamatta-recensioner",
    reviewFormId: "prosourcefit-yogamatta-skriv-recension",
    targetKeyword: "prosourcefit yogamatta",
    metaTitle: "ProSourceFit yogamatta 13 mm - Elins recension | Elins val",
    metaDescription:
      "Elins genomgång av ProSourceFit extra tjock yoga- och pilatesmatta: varför 13 mm passar komfort, pilates och golvövningar, och när TPE är bättre.",
  },
  {
    product: yogatiTpeYogaMatProduct,
    path: "/traning/yogamatta/yogati-tpe",
    badge: "Bra grepp",
    headline: "YOGATI TPE - greppigare matta för riktig yoga",
    shortBody:
      "En stabilare TPE-matta med markeringslinjer för dig som gör yoga, balanspositioner och vill ha bättre grepp än en extra tjock skummatta.",
    valueHook: "Grepp och stabilitet för faktisk yoga.",
    valueStatement:
      "YOGATI är valet när mattan ska hjälpa dig stå stadigt. TPE-materialet är 6 mm tjockt, dubbelsidigt halkfritt och har markeringslinjer för kroppen. Den är inte lika fluffig som ProSourceFit, men den är mer relevant när du gör positioner där grepp och balans spelar roll.",
    passFor: [
      "Gör yoga med stående positioner och balans.",
      "Vill ha markeringslinjer för placering av händer och fötter.",
      "Prioriterar grepp framför maximal dämpning.",
    ],
    caution:
      "Några användare tycker att en ny TPE-matta kan kännas lite hal tills den torkats av eller använts in. Och 6 mm är bekvämt, men inte lika mjukt som 13 mm skum.",
    verdict: "Bästa valet när grepp och stabilitet går först.",
    amazonSummary: "Amazon visar 4,6 av 5 från 5 542 recensioner.",
    amazonQuotes: [
      {
        text: "Incredibly grippy — slip and sweat resistant, perfect for balances.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Schön und rutscht inte på trägolv.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Antideslizante, perfekt och håller länge.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Found it very slippery.",
        attribution: "Köpare, Amazon",
      },
    ],
    comparisonNote:
      "Vill du ha mer mjuk dämpning för knän och pilates? Se ProSourceFit 13 mm.",
    comparisonCta: "Se ProSourceFit 13 mm",
    comparisonHref: "/traning/yogamatta/prosourcefit-13mm",
    reviewSectionId: "yogati-tpe-yogamatta-recensioner",
    reviewFormId: "yogati-tpe-yogamatta-skriv-recension",
    targetKeyword: "yogati yogamatta",
    metaTitle: "YOGATI yogamatta TPE - Elins recension | Elins val",
    metaDescription:
      "Elins genomgång av YOGATI yogamatta i TPE: varför den passar yoga, grepp och balans, och när en extra tjock skummatta är bättre.",
  },
];

export function getOtherYogamattaPick(productSlug: string) {
  return yogamattaPicks.find((pick) => pick.product.slug !== productSlug);
}
