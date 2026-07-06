import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  cantuSatinBonnetProduct,
  silkesorngottProduct,
} from "@/lib/products";

export const satinmossaEllerSidenorngottFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på satinmössa och sidenörngott?","answer":"En satinmössa samlar håret i en mjuk mössa och skyddar en frisyr medan du sover. Ett sidenörngott låter håret ligga fritt mot en len yta, vilket ger mindre friktion mot både hår och hud."},{"question":"Vilken minskar frissighet bäst?","answer":"Båda minskar friktion och därmed frissighet jämfört med en vanlig bomullskudde. Mössan håller ihop håret, medan örngottet ger en len yta oavsett hur du rör dig i sömnen."},{"question":"Vilken är bäst för huden?","answer":"Ett sidenörngott är snällt mot ansiktshuden eftersom huden glider mot den lena ytan istället för att gnuggas mot bomull. Satinmössan skyddar främst håret."},{"question":"Vilken passar om jag rör mig mycket i sömnen?","answer":"Ett sidenörngott ligger kvar på kudden oavsett hur du rör dig, medan en mössa kan glida av. Vill du vara säker på skydd hela natten är örngottet ett tryggt val."}];

export const satinmossaEllerSidenorngottComparisonRows = [["Snabba signaler","Samlar håret i mjuk mössa","Len yta; håret ligger fritt"],["Bäst för","Skydda en frisyr","Allround mjukhet för hår och hud"],["Snällt mot huden?","Skyddar mest håret","Ja – len mot ansiktet"],["Håller frisyr","Ja","Delvis"],["Passar rörlig sömn","Kan glida av","Ligger kvar på kudden"],["Pris","Budget","Mellan"],["Elins poäng","84/100","86/100"]] as const;

export const satinmossaEllerSidenorngottPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: cantuSatinBonnetProduct,
    path: "/skonhet/satinmossa",
    badge: "Håller ihop håret",
    headline: "Cantu satinmössa – skydda frisyren i sömnen",
    shortBody: "Välj satinmössan om du vill hålla ihop håret och skydda en frisyr medan du sover. Den samlar håret i en mjuk mössa och minskar frissighet.",
  },
  {
    product: silkesorngottProduct,
    path: "/skonhet/silkesorngott",
    badge: "Len yta",
    headline: "Sidenörngott – snällt mot hår och hud",
    shortBody: "Välj sidenörngottet om du vill ha en len yta som är snäll mot både hår och hud. Håret ligger fritt mot silket och glider utan att slita.",
  },
];

export const satinmossaEllerSidenorngottRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/satinmossa","label":"Satinmössa","text":"Läs Elins recension av Cantu satinmössa."},{"href":"/skonhet/silkesorngott","label":"Sidenörngott","text":"Läs Elins recension av sidenörngottet."},{"href":"/skonhet","label":"Skönhet","text":"Se alla Elins hår- och hudvårdsval."}];
