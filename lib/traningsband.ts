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
  { question: "Vilka mått ska jag jämföra?", answer: "Kontrollera längd, bredd och om bandet är slutet eller har ändar eller handtag. Produktnamnet räcker inte för att avgöra om det passar övningen." },
  { question: "Har ni testat hur banden sitter?", answer: "Nej. Vi har inget dokumenterat test av rullning, grepp eller slitstyrka för dessa set." },
  { question: "Är motståndsnivåerna jämförbara?", answer: "Vi har inte verifierat mätmetoden för dessa set. Samma färg eller beteckning som light behöver därför kontrolleras mot respektive tillverkares uppgifter." },
];

export const traningsbandComparisonRows = [
  ["Modell i katalogen", "WuGU träningsband", "JAKKOFOXX loop-band"],
  ["Mått och innehåll", "Kontrollera exakt set och bandlängd", "Kontrollera exakt set och bandlängd"],
  ["Motstånd", "Aktuella värden och mätmetod ej verifierade", "Aktuella värden och mätmetod ej verifierade"],
  ["Material", "Kontrollera förpackningens uppgift", "Kontrollera förpackningens uppgift"],
  ["Vårt test", "Inget dokumenterat användartest", "Inget dokumenterat användartest"],
] as const;

export const traningsbandPicks: TraningsbandPick[] = [
  {
    product: featuredProduct,
    path: "/traning/traningsband-naturlatex",
    badge: "Kontrollera före köp",
    headline: "WuGU träningsband – passar längden och motståndet?",
    shortBody:
      "Kontrollera att WuGU-setets längd, material och motstånd motsvarar det du behöver. Uppgifterna i vår äldre katalog är inte en aktuell produktverifiering.",
    valueHook: "Vilka övningar behöver bandet passa?",
    valueStatement:
      "Utgå från övningarna du vill göra och kontrollera längd, grepp och angivet motstånd. Vi har inte jämfört dessa band mot korta loop-band i praktiken.",
    passFor: [
      "Vill träna hela kroppen hemma utan stora redskap.",
      "Har kontrollerat att instruktionerna stödjer övningen och det grepp du tänker använda.",
      "Har jämfört material och mått för den exakta förpackningen.",
    ],
    caution:
      "Avstå om längd, material, motstånd eller instruktioner saknas för den exakta varianten. Vi har inte testat banden eller verifierat dem för rehabilitering.",
    verdict: "Vi utser ingen vinnare utan verifierade produktuppgifter och en relevant jämförelse.",
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
    badge: "Kontrollera före köp",
    headline: "JAKKOFOXX loop-band – passar setet dina övningar?",
    shortBody:
      "JAKKOFOXX-setet behöver kontrolleras mot den aktuella förpackningen. Antal band, mått, material och motstånd är ännu inte verifierade här.",
    valueHook: "Passar bandens mått och motstånd dina övningar?",
    valueStatement:
      "Kontrollera bandens längd, material och motstånd innan du väljer setet till dina övningar. Vi har inte verifierat aktuella kundbetyg, priset eller motståndet i varje band och rekommenderar inte setet som rehabiliteringshjälp utifrån gamla omdömen.",
    passFor: [
      "Vill träna ben, rumpa och höfter hemma eller på resan.",
      "Kan kontrollera att bandens mått och motstånd passar dina planerade övningar.",
      "Jämför samma set och totalpris inklusive frakt innan du beställer.",
    ],
    caution:
      "Avstå om säljaren inte anger mått, material och hur motståndet mäts. Vi har inte testat slitstyrka, hur banden sitter eller användning vid rehabilitering.",
    verdict:
      "Vi kan inte rekommendera setet framför andra innan produktuppgifter och användning har verifierats.",
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
    metaTitle: "JAKKOFOXX loop-band – vad behöver kontrolleras? | Elins val",
    metaDescription:
      "Vad behöver du kontrollera före köp av JAKKOFOXX loop-band? Läs om mått, motstånd och gränserna för vårt underlag.",
  },
];

export function getOtherTraningsbandPick(productSlug: string) {
  return traningsbandPicks.find((pick) => pick.product.slug !== productSlug);
}
