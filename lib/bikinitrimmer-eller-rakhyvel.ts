import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  braunBikiniTrimmerProduct,
  merkurSafetyRazorProduct,
} from "@/lib/products";

export const bikinitrimmerEllerRakhyvelFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på bikinitrimmer och rakhyvel?","answer":"En bikinitrimmer kortar och formar håret utan att gå ända ner på huden, vilket minskar risken för irritation. En rakhyvel klipper vid ytan för en helt slät känsla, men kräver mer omsorg."},{"question":"Vilken ger minst irritation?","answer":"Bikinitrimmern brukar ge minst irritation eftersom den inte går ända in på huden, vilket minskar risken för rakknottror. Med rakhyvel hjälper det att förbereda huden och raka i hårets riktning."},{"question":"Kan jag använda en bikinitrimmer torr?","answer":"Ja, en bikinitrimmer fungerar oftast bra på torr hud och är snabb att använda. En rakhyvel kräver blöt hud och rakgel för att bli skonsam."},{"question":"Hur undviker jag rakknottror med rakhyvel?","answer":"Förbered huden med varmt vatten och rakgel, använd ett vasst blad, raka i hårets riktning och återfukta efteråt. Vill du minimera risken helt är en bikinitrimmer ett skonsammare alternativ."}];

export const bikinitrimmerEllerRakhyvelComparisonRows = [["Snabba signaler","Trimmar/formar; går inte ända ner","Ger helt slät yta vid ytan"],["Resultat","Kortat och snyggat","Helt slätt"],["Risk för irritation","Låg","Högre – kräver omsorg"],["Förberedelse","Ingen – torrt går bra","Blöt hud och rakgel"],["Rakknottror","Sällan","Möjligt – raka i hårets riktning"],["Bäst för","Snabb koll utan irritation","Helt slät yta"],["Elins poäng","86/100","84/100"]] as const;

export const bikinitrimmerEllerRakhyvelPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: braunBikiniTrimmerProduct,
    path: "/skonhet/bikinitrimmer",
    badge: "Skonsamt",
    headline: "Braun bikinitrimmer – trimma utan irritation",
    shortBody: "Välj bikinitrimmern om du vill trimma och forma utan att gå ända ner. Den är snabb, skonsam och ger minimal risk för irritation och rakknottror.",
  },
  {
    product: merkurSafetyRazorProduct,
    path: "/skonhet/safety-razor",
    badge: "Helt slätt",
    headline: "Merkur safety razor – en helt slät yta",
    shortBody: "Välj rakhyveln om du vill ha en helt slät yta. En safety razor ger en nära rakning – förbered huden med gel och raka i hårets riktning för minst irritation.",
  },
];

export const bikinitrimmerEllerRakhyvelRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/bikinitrimmer","label":"Bikinitrimmer","text":"Läs Elins recension av Braun bikinitrimmer."},{"href":"/skonhet/safety-razor","label":"Safety razor","text":"Läs Elins recension av Merkur safety razor."},{"href":"/skonhet/epilator-eller-rakhyvel","label":"Jämförelse","text":"Epilator eller rakhyvel? Se den jämförelsen."},{"href":"/skonhet","label":"Skönhet","text":"Se alla Elins hårborttagningsval."}];
