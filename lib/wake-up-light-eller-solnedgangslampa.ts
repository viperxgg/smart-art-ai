import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  philipsWakeUpLightProduct,
  solnedgangslampaProduct,
} from "@/lib/products";

export const wakeUpLightEllerSolnedgangslampaFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på wake-up light och solnedgångslampa?","answer":"En wake-up light simulerar en gryning som ljusnar gradvis för att väcka dig mjukare på morgonen. En solnedgångslampa kastar ett varmt, färgat ljus för mysig stämning på kvällen – de används vid motsatta tider."},{"question":"Hjälper en wake-up light mot mörka morgnar?","answer":"Många upplever att det är skönare att vakna till ett ljus som ljusnar gradvis, särskilt under mörka vintermornar, jämfört med att slitas upp av en vanlig väckarklocka i beckmörker."},{"question":"Vad använder man en solnedgångslampa till?","answer":"Den skapar en varm, gyllene stämning på kvällen och är populär för mys, avkoppling och som effektfull bakgrund i bilder och videor. Den väcker dig inte utan är till för stämning."},{"question":"Kan jag ha båda?","answer":"Ja, de kompletterar varandra – wake-up light för en mjukare morgon och solnedgångslampa för mys på kvällen. Tillsammans ramar de in dagen med skönt ljus."}];

export const wakeUpLightEllerSolnedgangslampaComparisonRows = [["Snabba signaler","Gryning som ljusnar; väcker mjukt","Varmt, färgat ljus; kvällsmys"],["Tid på dygnet","Morgon","Kväll"],["Syfte","Vakna lättare","Stämning och mys"],["Bäst för","Mörka vintermornar","Avkoppling och estetik"],["Effekt","Simulerad soluppgång","Solnedgångsljus på väggen"],["Väcker dig?","Ja","Nej – för mys"],["Elins poäng","86/100","84/100"]] as const;

export const wakeUpLightEllerSolnedgangslampaPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: philipsWakeUpLightProduct,
    path: "/halsa/wake-up-light",
    badge: "Mjukare morgnar",
    headline: "Philips wake-up light – vakna med en gryning",
    shortBody: "Välj wake-up light om du har svårt att vakna i mörkret. Ljuset ljusnar gradvis som en gryning och väcker dig mjukare, skönt på mörka vintermornar.",
  },
  {
    product: solnedgangslampaProduct,
    path: "/halsa/solnedgangslampa",
    badge: "Kvällsmys",
    headline: "Solnedgångslampa – varm, gyllene stämning",
    shortBody: "Välj solnedgångslampan om du vill ha mysig kvällsstämning. Den kastar ett varmt, färgat ljus på väggen – populärt för TikTok-estetik och avkoppling.",
  },
];

export const wakeUpLightEllerSolnedgangslampaRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/halsa/wake-up-light","label":"Wake-up light","text":"Läs Elins recension av Philips wake-up light."},{"href":"/halsa/solnedgangslampa","label":"Solnedgångslampa","text":"Läs Elins recension av solnedgångslampan."},{"href":"/halsa","label":"Hälsa","text":"Se alla Elins val för sömn och avkoppling."}];
