import {
  bdbkmgMassagepistolProduct,
  beurerMassagepistolProduct,
  type Product,
} from "@/lib/products";

export type MassagepistolQuote = {
  text: string;
  attribution: string;
};

export type MassagepistolPick = {
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
  amazonQuotes: MassagepistolQuote[];
  reviewSectionId: string;
  reviewFormId: string;
  targetKeyword: string;
  metaTitle: string;
  metaDescription: string;
  passFor: string[];
  comparisonVerdict: string;
};

export const massagepistolFaqItems = [
  {
    question: "Hur ofta ska man använda en massagepistol?",
    answer:
      "Generellt 1-2 gånger om dagen, 1-2 minuter per muskelgrupp. Undvik leder, skelett och områden som redan gör ont på ett ovanligt sätt.",
  },
  {
    question: "Vilken massagepistol är bäst för nybörjare?",
    answer:
      "Välj en modell där styrkan är enkel att kontrollera. Beurer passar dig som vill ha ett känt och lätt märke, medan BDBKMG passar dig som vill ha fler lägen att justera mellan.",
  },
  {
    question: "Är en massagepistol farlig?",
    answer:
      "Använd inte på skadad hud, leder eller vid medicinska tillstånd utan att först rådgöra med vården. Börja alltid försiktigt.",
  },
];

export const massagepistolComparisonRows = [
  ["Bäst för", "Trygga märkesvalet", "Mest för pengarna"],
  ["Vikt", "620 g (lätt)", "ca 1 kg (tyngre)"],
  ["Lägen", "5", "99 (mer kontroll)"],
  ["Huvuden", "4", "6"],
  ["Pris-klass", "Märke och enkelhet", "Prisvärt kraftval"],
] as const;

export const massagepistolPicks: MassagepistolPick[] = [
  {
    product: beurerMassagepistolProduct,
    path: "/halsa/massagepistol/beurer-mg-99",
    badge: "Trygga märkesvalet",
    headline: "Beurer MG 99 - det trygga märkesvalet",
    shortBody:
      "Ett känt märke till ett oväntat vänligt pris. Kompakt, lätt och enkel att förstå.",
    valueHook: "Ett känt märke till ett oväntat vänligt pris.",
    valueStatement:
      "Beurer-kvalitet, kompakt (620 g), 4 huvuden och 5 lägen - en trygg massagepistol utan premiumprislapp.",
    reviewIntro:
      "Beurer MG 99 känns som ett smart köp för dig som vill ha ett känt märke utan att göra valet onödigt stort. Den stora poängen är tryggheten: låg vikt, fyra huvuden och fem lägen i en form som passar vanlig hemmabruk.",
    pros: [
      "Känt märke: Beurer",
      "Lätt och kompakt",
      "4 utbytbara huvuden",
      "5 intensitetslägen",
      "Upp till 3000 slag/min",
    ],
    caution:
      "Hade det lägsta läget varit lite mjukare hade den varit perfekt för ömma punkter - men för ett märke som Beurer i den här prisklassen är det ett lätt val.",
    verdict:
      "Tryggt, prisvärt märkesval.",
    amazonSummary: "Snittbetyg 4,4/5 på Amazon.",
    amazonQuotes: [
      {
        text: "Den är helt okej i kvalitén, liten och smidig.",
        attribution: "Svensk köpare, Amazon",
      },
      {
        text: "Går inte reglera till låg hastighet - blir för hård om man har ont.",
        attribution: "Svensk köpare, Amazon",
      },
    ],
    reviewSectionId: "beurer-recensioner",
    reviewFormId: "beurer-skriv-recension",
    targetKeyword: "beurer mg 99",
    metaTitle: "Beurer MG 99 massagepistol - Elins recension | Elins val",
    metaDescription:
      "Elins ärliga genomgång av Beurer MG 99: när den passar, vad Amazon-köpare lyfter och när du hellre bör välja en kraftfullare massagepistol.",
    passFor: [
      "Du vill ha ett känt märke.",
      "Du vill ha låg vikt och enkel design.",
      "Du vill använda den hemma utan för mycket inställningar.",
    ],
    comparisonVerdict:
      "Välj Beurer MG 99 om du vill ha ett känt märke, låg vikt (620 g) och enkel design. Vill du ha mest kraft, 99 lägen och bäst pris - se BDBKMG.",
  },
  {
    product: bdbkmgMassagepistolProduct,
    path: "/halsa/massagepistol/kraftfull",
    badge: "Mest för pengarna",
    headline: "Kraftfull massagepistol (BDBKMG) - mest för pengarna",
    shortBody:
      "Riktigt mycket pistol för pengarna: många lägen, flera huvuden och tydlig kontroll.",
    valueHook: "Riktigt mycket pistol för pengarna.",
    valueStatement:
      "99 justerbara lägen, 6 huvuden och LCD-skärm - funktioner man oftast betalar betydligt mer för.",
    reviewIntro:
      "BDBKMG är den mer ekonomiska vägen för dig som vill ha mycket kontroll utan att jaga ett stort varumärke. Den känns praktisk direkt: många lägen, flera huvuden och tydlig skärm för hemmabruk.",
    pros: [
      "99 justerbara lägen",
      "Kan köras riktigt mjukt",
      "6 massagehuvuden",
      "LCD-skärm",
      "USB-C-laddning",
    ],
    caution:
      "Hade den vägt lite mindre (ca 1 kg) hade den varit perfekt - men för priset är det svårt att klaga.",
    verdict:
      "Ett riktigt klipp för hemmabruk och återhämtning.",
    amazonSummary: "Snittbetyg 4,4/5 på Amazon.",
    amazonQuotes: [
      {
        text: "Mycket bra, enkel att använda! Prisvärd.",
        attribution: "Svensk köpare, Amazon",
      },
      {
        text: "Low budget massage gun but does its job - använt dagligen i 3 månader utan problem.",
        attribution: "Köpare, Amazon",
      },
    ],
    reviewSectionId: "bdbkmg-recensioner",
    reviewFormId: "bdbkmg-skriv-recension",
    targetKeyword: "kraftfull massagepistol",
    metaTitle: "Kraftfull massagepistol BDBKMG - Elins recension | Elins val",
    metaDescription:
      "Elins ärliga genomgång av BDBKMG Muscle Massage Gun: kraft, 99 lägen, vikt, Amazon-signaler och när den passar bättre än Beurer MG 99.",
    passFor: [
      "Du vill ha flest justeringslägen.",
      "Du prioriterar kraft och kontroll.",
      "Du accepterar att den är tyngre än Beurer.",
    ],
    comparisonVerdict:
      "Välj denna om du vill ha mest kraft, 99 justerbara lägen och bäst pris, men den är tyngre, ca 1 kg. Vill du ha ett känt, lätt märke - se Beurer MG 99.",
  },
];

export function getMassagepistolPickByPath(path: string) {
  return massagepistolPicks.find((pick) => pick.path === path);
}

export function getOtherMassagepistolPick(productSlug: string) {
  return massagepistolPicks.find((pick) => pick.product.slug !== productSlug);
}
