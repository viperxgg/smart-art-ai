import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  cosrxCentellaAmpouleProduct,
  beautyOfJoseonPropolisProduct,
} from "@/lib/products";

export const centellaEllerPropolisFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad gör centella (cica) för huden?","answer":"Centella asiatica är en växtbaserad ingrediens som är känd för att kännas lugnande på hud som lätt blir röd eller irriterad. I COSRX ampoule kommer den i en lätt, vattnig bas som absorberas snabbt."},{"question":"Vad är propolis i hudvård?","answer":"Propolis är ett bivaxliknande ämne som i hudvård används för sin mjukgörande, lugnande känsla. I Beauty of Joseons serum kombineras det med niacinamide, som hjälper hudtonen att se jämnare och mer lyster-rik ut."},{"question":"Kan jag använda båda tillsammans?","answer":"Ja, många varvar dem: centella på morgonen eller när huden är extra reaktiv, propolis på kvällen för glow. Introducera en produkt i taget så du ser hur huden svarar."},{"question":"Vilken passar bäst på hösten och vintern?","answer":"Båda trivs i kalla månader. Blir din hud röd och stram av kyla och elementvärme är centella det tryggaste valet, medan propolis passar när huden mest tappar lyster under mörka månader."}];

export const centellaEllerPropolisComparisonRows = [["Nyckelingrediens","Centella asiatica (cica)","Propolis + niacinamide"],["Gör mest för","Röd, stressad, reaktiv hy","Trött, glåmig hy som vill ha lyster"],["Textur","Lätt och vattnig ampoule","Mjukt, lite fylligare serum"],["Finish","Neutral, försvinner in","Varm glow"],["I rutinen","Efter rengöring, före kräm","Efter rengöring, före kräm"],["Passar känslig hy","Ja – mycket mild","Ja – mild"],["Elins poäng","81/100","81/100"]] as const;

export const centellaEllerPropolisPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: cosrxCentellaAmpouleProduct,
    path: "/skonhet/centella-serum",
    badge: "Lugnaren",
    headline: "COSRX Centella Ampoule – lugn för reaktiv hy",
    shortBody: "Välj centella när huden är röd, stram eller lättirriterad. Lätt, vattnig och avskalad – ren cica-lugn som passar under alla krämer.",
  },
  {
    product: beautyOfJoseonPropolisProduct,
    path: "/skonhet/propolis-serum",
    badge: "Lugn + glow",
    headline: "Beauty of Joseon Glow Serum – lugn med lyster",
    shortBody: "Välj propolis när huden känns trött och glåmig. Propolis lugnar medan niacinamide hjälper hudtonen se jämnare och mer utvilad ut.",
  },
];

export const centellaEllerPropolisRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/centella-serum","label":"Centella","text":"Läs Elins genomgång av COSRX Centella Ampoule."},{"href":"/skonhet/propolis-serum","label":"Propolis","text":"Läs Elins genomgång av Beauty of Joseon Glow Serum."},{"href":"/skonhet/sheet-mask","label":"Sheet mask","text":"Beauty of Joseons centella-mask för lugnande kvällar."},{"href":"/skonhet/cicaplast-b5-eller-cetaphil","label":"Jämförelse","text":"Cicaplast eller Cetaphil för torr hösthy?"}];
