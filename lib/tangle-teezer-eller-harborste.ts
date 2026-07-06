import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  tangleTeezerOriginalProduct,
  wetBrushOriginalProduct,
} from "@/lib/products";

export const tangleTeezerEllerHarborsteFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på Tangle Teezer och en vanlig borste?","answer":"Tangle Teezer har korta, flexibla borst i olika längder som glider genom tovor med mindre drag än en hård, vanlig borste. Det gör den skonsammare mot håret när du reder ut trassel."},{"question":"Vilken är bäst för blött hår?","answer":"En Wet Brush är särskilt bra på blött hår tack vare de mjuka, fjädrande borsten som ger mindre drag när håret är som skörast. Tangle Teezer fungerar också på fuktigt hår."},{"question":"Är de snällare mot håret?","answer":"Ja, båda är snällare än en hård borste eftersom borsten ger efter och glider genom tovor istället för att dra. Börja alltid borsta från topparna och jobba dig uppåt."},{"question":"Vilken passar i necessären?","answer":"Tangle Teezer är kompakt och passar fint i necessären eller väskan. Wet Brush är något större men fortfarande smidig att ta med."}];

export const tangleTeezerEllerHarborsteComparisonRows = [["Snabba signaler","Korta borst i olika längder; glider","Mjuka, fjädrande borst; snällt mot blött"],["Bäst för","Allround, torrt och fuktigt hår","Blött hår och känslig hårbotten"],["Form","Kompakt, greppvänlig","Klassisk borstform"],["Drag i håret","Litet","Väldigt litet på blött hår"],["Ta med i väskan","Ja – liten","Något större"],["Snällare än hård borste","Ja","Ja"],["Elins poäng","86/100","84/100"]] as const;

export const tangleTeezerEllerHarborstePicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: tangleTeezerOriginalProduct,
    path: "/skonhet/tangle-teezer",
    badge: "Glider genom tovor",
    headline: "Tangle Teezer – kompakt och effektiv",
    shortBody: "Välj Tangle Teezer om du vill ha en kompakt borste som glider genom trassel på både torrt och fuktigt hår. De korta borsten i olika längder reder ut effektivt.",
  },
  {
    product: wetBrushOriginalProduct,
    path: "/skonhet/wet-brush",
    badge: "Snällast mot blött hår",
    headline: "Wet Brush – mjuk mot blött hår",
    shortBody: "Välj Wet Brush om du främst borstar blött hår. De mjuka, fjädrande borsten ger mindre drag och är extra snälla när håret är som skörast.",
  },
];

export const tangleTeezerEllerHarborsteRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/tangle-teezer","label":"Tangle Teezer","text":"Läs Elins recension av Tangle Teezer."},{"href":"/skonhet/wet-brush","label":"Wet Brush","text":"Läs Elins recension av Wet Brush."},{"href":"/skonhet","label":"Skönhet","text":"Se alla Elins hårval."}];
