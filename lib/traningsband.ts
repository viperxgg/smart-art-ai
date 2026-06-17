import {
  featuredProduct,
  jakkofoxxLoopbandProduct,
  type Product,
} from "@/lib/products";

export type TraningsbandQuote = {
  text: string;
  attribution: string;
};

export type TraningsbandPick = {
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
  amazonQuotes: TraningsbandQuote[];
  comparisonNote: string;
  comparisonCta: string;
  comparisonHref: string;
  reviewSectionId: string;
  reviewFormId: string;
  targetKeyword: string;
  metaTitle: string;
  metaDescription: string;
};

export const traningsbandFaqItems = [
  {
    question: "Vad är skillnaden på loop-band och långa träningsband?",
    answer:
      "Loop-band är korta, slutna band (ca 30 cm) som är gjorda för ben, rumpa och höfter. Långa träningsband är mer mångsidiga och passar hela kroppen, inklusive rygg, axlar och bröst.",
  },
  {
    question: "Rullar banden ihop på låren?",
    answer:
      "Gummiband kan rulla ihop vid tunga benövningar. Lägg bandet platt mot huden och välj rätt nivå, så minskar problemet. Vill du ha minimal rullning finns även tygband.",
  },
  {
    question: "Vilken nivå ska jag börja med?",
    answer:
      "Börja med X-light eller light för uppvärmning och teknik, och gå upp i motstånd när övningen känns för lätt. Setet har fem nivåer så du växer i det.",
  },
];

export const traningsbandComparisonRows = [
  [
    "Snabba signaler",
    "4 nivåer 8-85 lbs; helkropp; naturlatex",
    "5 nivåer; ben, rumpa & rehab; 8 138 omdömen",
  ],
  [
    "Bäst för",
    "Helkroppsträning och styrka hemma",
    "Ben, rumpa, pilates och rehab (Elins val)",
  ],
  ["Typ", "Långa band i naturlatex", "Korta loop-band (30 cm) i TPE"],
  ["Motstånd", "4 nivåer, 8-85 lbs", "5 nivåer, ca 10-48 lbs"],
  ["Material", "100% naturlatex", "TPE (gummi)"],
  [
    "Extra",
    "Stackable, mångsidigt för hela kroppen",
    "Tusentals omdömen, bästsäljare, kompakt",
  ],
  ["Elins poäng", "80/100", "82/100"],
] as const;

export const traningsbandPicks: TraningsbandPick[] = [
  {
    product: featuredProduct,
    path: "/traning/traningsband-naturlatex",
    badge: "Prisvärt val",
    headline: "Träningsband i naturlatex - 4 motståndsnivåer",
    shortBody:
      "Långa band för helkroppsträning hemma: fyra nivåer, 8-85 lbs och 100% naturlatex för styrka, rörlighet och progression.",
    valueHook: "Mest mångsidigt för hela kroppen.",
    valueStatement:
      "WuGU-bandens styrka är bredden: du kan träna rygg, axlar, bröst, ben och rörlighet med samma set. Fyra nivåer från lätt till mycket tungt gör dem mer allround än korta loop-band.",
    passFor: [
      "Vill träna hela kroppen hemma utan stora redskap.",
      "Vill kunna byta nivå eller kombinera band för mer motstånd.",
      "Prioriterar naturlatex och mångsidighet framför riktad benaktivering.",
    ],
    caution:
      "Det här är långa band, inte korta loop-band för rumpa och höfter. De är mer mångsidiga, men mindre smidiga om du bara vill ha ett band runt låren för pilates, rehab eller glute-övningar.",
    verdict: "Bästa valet när träningsband ska täcka hela kroppen.",
    amazonSummary:
      "Amazon visar 4,5 av 5 från över 600 omdömen. Köparna lyfter prisvärdet, naturlatexen och att nivåerna är lätta att förstå.",
    amazonQuotes: [
      {
        text: "Träningsband av hög kvalitet med olika styrkor.",
        attribution: "Amazon-köpare",
      },
      {
        text: "Som alla andra band, fast billigare.",
        attribution: "Amazon-köpare",
      },
    ],
    comparisonNote:
      "Vill du främst träna ben, rumpa och höfter? Se JAKKOFOXX loop band.",
    comparisonCta: "Se JAKKOFOXX loop band",
    comparisonHref: "/traning/traningsband/loopband-jakkofoxx",
    reviewSectionId: "traningsband-naturlatex-recensioner",
    reviewFormId: "traningsband-naturlatex-skriv-recension",
    targetKeyword: "träningsband",
    metaTitle: "Träningsband i naturlatex - 4 nivåer | Elins val",
    metaDescription:
      "Elin går igenom långa träningsband i naturlatex: fyra motståndsnivåer, vad de passar bäst för och när korta loop-band är smartare.",
  },
  {
    product: jakkofoxxLoopbandProduct,
    path: "/traning/traningsband/loopband-jakkofoxx",
    badge: "Elins val",
    headline: "JAKKOFOXX loop band - fem nivåer för ben och rumpa",
    shortBody:
      "Ett kompakt loop-band-set för ben, rumpa, höfter, pilates och rehab: fem tydliga nivåer från X-light till X-heavy.",
    valueHook: "Mest loop-band för pengarna - för ben och rumpa.",
    valueStatement:
      "JAKKOFOXX är ett av de mest köpta loop-band-seten på Amazon - 4,4 av 5 från över 8 000 omdömen. Du får fem tydliga motståndsnivåer från X-light till X-heavy för knappt en hundralapp, perfekt för rumpa, ben, höfter, pilates och rehab. Det är inte band för tung helkroppsstyrka, men för riktad benträning hemma är det svårt att få mer för pengarna.",
    passFor: [
      "Vill träna ben, rumpa och höfter hemma eller på resan.",
      "Gör pilates, uppvärmning eller rehab och vill ha mjukt till tungt motstånd.",
      "Vill ha flera motståndsnivåer till ett lågt pris.",
    ],
    caution:
      "Det här är korta loop-band i TPE, inte långa band för helkroppsstyrka. Vid tunga övningar kan gummiband rulla ihop på låren mer än tygband, och en mindre andel köpare tycker att spänsten avtar över tid. Vill du träna hela kroppen är långa band ett bättre val.",
    verdict:
      "Elins val för ben och rumpa - mest beprövade loop-bandet för pengarna.",
    amazonSummary:
      "Amazon visar 4,4 av 5 från 8 138 recensioner, och setet ligger högt på bästsäljarlistan (#3 i kategorin Resistance Bands). Köparna lyfter de tydliga motståndsnivåerna och det låga priset.",
    amazonQuotes: [
      {
        text: "Olika motstånd. Verkar bra.",
        attribution: "Chris, Amazon",
      },
      {
        text: "Funkar för det är till. Bra med olika motstånd.",
        attribution: "Anders, Amazon",
      },
      {
        text: "Really good quality.",
        attribution: "Köpare, Amazon",
      },
    ],
    comparisonNote:
      "Vill du träna hela kroppen, inte bara ben och rumpa? Se de långa träningsbanden i naturlatex.",
    comparisonCta: "Se långa träningsband (naturlatex)",
    comparisonHref: "/traning/traningsband-naturlatex",
    reviewSectionId: "jakkofoxx-loopband-recensioner",
    reviewFormId: "jakkofoxx-loopband-skriv-recension",
    targetKeyword: "loop band",
    metaTitle: "JAKKOFOXX loop band (5 nivåer) - Elins recension | Elins val",
    metaDescription:
      "Elin går igenom JAKKOFOXX loop band: fem motståndsnivåer för ben, rumpa och rehab, vad över 8 000 Amazon-omdömen säger - och när långa träningsband passar bättre.",
  },
];

export function getOtherTraningsbandPick(productSlug: string) {
  return traningsbandPicks.find((pick) => pick.product.slug !== productSlug);
}
