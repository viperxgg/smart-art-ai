import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  solnedgangslampaProduct,
  stjarnprojektorProduct,
} from "@/lib/products";

export const solnedgangslampaEllerStjarnprojektorFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på solnedgångslampa och stjärnprojektor?","answer":"En solnedgångslampa kastar ett varmt, gyllene ljus på väggen som en solnedgång. En stjärnprojektor fyller taket med rörliga stjärnor och färger för en drömlik känsla. De ger olika slags stämning."},{"question":"Vilken är bäst för sovrummet?","answer":"Vill du ha ett lugnt, stilrent ljus passar en solnedgångslampa fint. Vill du ha en drömlik stjärnhimmel att somna under är en stjärnprojektor mysigare, särskilt om du gillar rörligt ljus."},{"question":"Vilken är bäst för bilder och video?","answer":"Solnedgångslampan ger en snygg, varm ljuseffekt på väggen som är populär i estetiska bilder. Stjärnprojektorn ger en mer effektfull, färgstark bakgrund."},{"question":"Passar de i barnrummet?","answer":"En stjärnprojektor är ofta uppskattad i barnrummet eftersom stjärnorna i taket är lugnande och roliga vid läggdags. En solnedgångslampa passar mer som stämningsljus för äldre."}];

export const solnedgangslampaEllerStjarnprojektorComparisonRows = [["Snabba signaler","Varmt, gyllene ljus på väggen","Rörliga stjärnor och färger i taket"],["Känsla","Lugn solnedgång","Drömlik stjärnhimmel"],["Bäst för","Mys och stilrena bilder","Sovrum, barnrum, fest"],["Rörligt ljus?","Nej – stilla sken","Ja – rörliga stjärnor"],["Färger","Varma toner","Flera färger och lägen"],["Stil","Stilren och lugn","Lekfull och effektfull"],["Elins poäng","84/100","84/100"]] as const;

export const solnedgangslampaEllerStjarnprojektorPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: solnedgangslampaProduct,
    path: "/halsa/solnedgangslampa",
    badge: "Varmt & stilrent",
    headline: "Solnedgångslampa – gyllene ljus på väggen",
    shortBody: "Välj solnedgångslampan om du vill ha ett varmt, gyllene ljus och en lugn solnedgångskänsla. Snyggt för mys, avkoppling och estetiska bilder.",
  },
  {
    product: stjarnprojektorProduct,
    path: "/halsa/stjarnprojektor",
    badge: "Drömlik stjärnhimmel",
    headline: "Stjärnprojektor – fyll taket med stjärnor",
    shortBody: "Välj stjärnprojektorn om du vill fylla taket med rörliga stjärnor och färger. Drömlikt och lekfullt – populärt i sovrummet, barnrummet eller på fest.",
  },
];

export const solnedgangslampaEllerStjarnprojektorRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/halsa/solnedgangslampa","label":"Solnedgångslampa","text":"Läs Elins recension av solnedgångslampan."},{"href":"/halsa/stjarnprojektor","label":"Stjärnprojektor","text":"Läs Elins recension av stjärnprojektorn."},{"href":"/halsa/mini-projektor-eller-stjarnprojektor","label":"Jämförelse","text":"Mini-projektor eller stjärnprojektor? Se den jämförelsen."},{"href":"/halsa","label":"Hälsa","text":"Se alla Elins val för mys och avkoppling."}];
