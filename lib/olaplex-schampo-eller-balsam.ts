import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  olaplexNo4ShampooProduct,
  olaplexNo5ConditionerProduct,
} from "@/lib/products";

export const olaplexSchampoEllerBalsamFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vilken ska jag köpa först – Olaplex No.4 eller No.5?","answer":"Är längderna torra och trassliga ger balsamet No.5 den största omedelbara skillnaden. Vill du hellre att grundrutinen jobbar för håret i varje tvätt är schampot No.4 rätt start. Slitet, blekt hår mår bäst av kombinationen."},{"question":"Vad är skillnaden mellan No.4 och No.5?","answer":"No.4 är ett schampo: det rengör och bygger samtidigt upp hårets bindningar med Olaplex bond-teknik. No.5 är balsamet som återfuktar och gör längderna mjuka och glansiga efter tvätten. De är gjorda att komplettera varandra."},{"question":"Fungerar Olaplex på ofärgat hår?","answer":"Ja. Bond-vården är mest känd för blekt och färgat hår, men även värmestylat och solslitet hår upplevs mjukare och starkare av rutinen enligt många köpare."},{"question":"Behöver jag No.3 också?","answer":"No.3 är en kur som används före tvätt någon gång i veckan och är ett vanligt tillägg för riktigt slitet hår. Börja gärna med No.4 eller No.5 och lägg till kuren om håret behöver mer."}];

export const olaplexSchampoEllerBalsamComparisonRows = [["Steg i rutinen","Tvätt – ersätter ditt schampo","Efter tvätt – ersätter ditt balsam"],["Gör mest för","Hårbotten och hela håret vid varje tvätt","Torra, slitna längder och toppar"],["Direkt känsla","Rent och lätt","Mjukt, glansigt, lättkammat"],["Passar fint hår","Ja – tynger inte ned","Ja, i måttlig mängd i längderna"],["Blekt & färgat hår","Ja – gjort för det","Ja – gjort för det"],["Kombineras ofta med","No.5 och kuren No.3","No.4 och kuren No.3"],["Elins poäng","82/100","82/100"]] as const;

export const olaplexSchampoEllerBalsamPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: olaplexNo4ShampooProduct,
    path: "/skonhet/olaplex-schampo",
    badge: "Varje tvätt",
    headline: "Olaplex No.4 – bond-vård i varje tvätt",
    shortBody: "Välj No.4 om du vill att själva tvätten ska jobba för håret. Rengör milt, bygger upp med Olaplex bond-teknik och passar även fint hår som lätt blir platt av tunga produkter.",
  },
  {
    product: olaplexNo5ConditionerProduct,
    path: "/skonhet/olaplex-balsam",
    badge: "Mjuka längder",
    headline: "Olaplex No.5 – direktkänsla i längderna",
    shortBody: "Välj No.5 om längderna är torra, blekta eller trassliga. Balsamet ger den omedelbara mjukheten och glansen – det steg de flesta känner störst skillnad av.",
  },
];

export const olaplexSchampoEllerBalsamRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/olaplex-schampo","label":"Olaplex No.4","text":"Läs Elins genomgång av Olaplex schampot."},{"href":"/skonhet/olaplex-balsam","label":"Olaplex No.5","text":"Läs Elins genomgång av Olaplex balsamet."},{"href":"/skonhet/olaplex-no3","label":"Olaplex No.3","text":"Kuren för riktigt slitet hår."},{"href":"/skonhet/olaplex-eller-harinpackning","label":"Jämförelse","text":"Olaplex eller hårinpackning – värt det?"}];
