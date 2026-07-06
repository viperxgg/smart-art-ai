import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  mariaNilaTextureProduct,
  osisDustItProduct,
} from "@/lib/products";

export const texturaprayEllerVolympuderFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på texturspray och volympuder?","answer":"En texturspray ger grepp och matt struktur i hela håret, bra för beach-look och håll. Ett volympuder ger snabb volym och lyft vid rötterna där håret är plattast."},{"question":"Vilken ger mest volym vid rötterna?","answer":"Volympuder är bäst för snabbt rotlyft – du strör lite vid rötterna och masserar in för direkt volym. Texturspray ger mer struktur och grepp i hela håret."},{"question":"Hur mycket volympuder ska jag använda?","answer":"Börja med en liten mängd vid rötterna och massera in. För mycket kan göra håret klibbigt eller grått i tonen på mörkt hår, så bygg upp försiktigt."},{"question":"Kan jag använda båda?","answer":"Ja, många använder texturspray för struktur i längderna och volympuder för extra lyft vid rötterna. Tillsammans ger de både volym och håll."}];

export const texturaprayEllerVolympuderComparisonRows = [["Snabba signaler","Grepp och matt textur i hela håret","Snabbt lyft och volym vid rötterna"],["Bäst för","Beach-look, uppsatt hår, håll","Platt hår som behöver rotvolym"],["Var i håret","Hela längden","Vid rötterna"],["Känsla","Matt, sladdrig struktur","Volym och grepp vid rötterna"],["Applicering","Spraya och skrynkla in","Strö och massera in"],["Bäst för uppsatt hår","Ja – ger grepp","Ja – lyft vid fästet"],["Elins poäng","86/100","84/100"]] as const;

export const texturaprayEllerVolympuderPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: mariaNilaTextureProduct,
    path: "/skonhet/texturspray",
    badge: "Struktur & grepp",
    headline: "Maria Nila texturspray – matt textur och håll",
    shortBody: "Välj texturspray om du vill ha grepp och matt struktur i hela håret. Bra för beach-look och uppsatt hår som håller formen längre.",
  },
  {
    product: osisDustItProduct,
    path: "/skonhet/volympuder",
    badge: "Snabbt rotlyft",
    headline: "OSiS volympuder – lyft vid rötterna",
    shortBody: "Välj volympuder om du främst vill ha snabb volym vid rötterna. Strö lite där håret är plattast och massera in för direkt lyft.",
  },
];

export const texturaprayEllerVolympuderRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/texturspray","label":"Texturspray","text":"Läs Elins recension av Maria Nila texturspray."},{"href":"/skonhet/volympuder","label":"Volympuder","text":"Läs Elins recension av OSiS volympuder."},{"href":"/skonhet","label":"Skönhet","text":"Se alla Elins hårstylingval."}];
