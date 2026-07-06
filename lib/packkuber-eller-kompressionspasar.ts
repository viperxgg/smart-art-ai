import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  travelDudePackkuberProduct,
  myHodoKompressionspaseProduct,
} from "@/lib/products";

export const packkuberEllerKompressionspasarFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på packkuber och kompressionspåsar?","answer":"Packkuber delar upp kläderna i fack så du håller ordning och hittar lätt, med en lätt komprimering. Kompressionspåsar fokuserar på att pressa ut luften och spara så mycket plats som möjligt, men ger mindre ordning."},{"question":"Vilken sparar mest plats?","answer":"Kompressionspåsar sparar mest plats, särskilt på skrymmande plagg som tröjor och jackor, eftersom du rullar ut luften helt. Packkuber pressar ihop lite men är mer till för ordning."},{"question":"Kan jag använda båda?","answer":"Ja, många packar smartast med båda: vardagskläder i packkuber för ordning och skrymmande plagg i kompressionspåsar för att spara plats."},{"question":"Behöver kompressionspåsar en pump?","answer":"Nej, rullkompressionspåsar som myHodo pressar ut luften när du rullar ihop dem för hand, så du slipper släpa på en pump eller dammsugare på resan."}];

export const packkuberEllerKompressionspasarComparisonRows = [["Snabba signaler","Delar upp och håller ordning; lätt komprimering","Pressar ut luften; mest platsbesparing"],["Bäst för","Överblick och att hitta rätt i väskan","Skrymmande plagg som tröjor och jackor"],["Platsbesparing","Bra – pressar ihop lite","Mest – rullar ut luften helt"],["Ordning","Utmärkt – en kub per kategori","Mindre – allt i samma påse"],["Behöver pump?","Nej","Nej – du rullar ut luften för hand"],["Passar bäst","Korta resor och weekend","Långresor och mycket packning"],["Elins poäng","88/100","84/100"]] as const;

export const packkuberEllerKompressionspasarPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: travelDudePackkuberProduct,
    path: "/sommar/resa/packkuber",
    badge: "Bäst ordning",
    headline: "Travel Dude packkuber – ordning och överblick",
    shortBody: "Välj packkuber om du vill dela upp kläderna och snabbt hitta rätt i väskan. De håller packningen överskådlig och pressar ihop plaggen lätt på köpet.",
  },
  {
    product: myHodoKompressionspaseProduct,
    path: "/sommar/resa/kompressionspase",
    badge: "Mest platsbesparing",
    headline: "myHodo kompressionspåsar – pressa ut luften",
    shortBody: "Välj kompressionspåsar om du vill spara mest plats. Du rullar ut luften utan pump och pressar ihop skrymmande tröjor och jackor rejält.",
  },
];

export const packkuberEllerKompressionspasarRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/sommar/resa/packkuber","label":"Packkuber","text":"Läs Elins recension av Travel Dude packkuber."},{"href":"/sommar/resa/kompressionspase","label":"Kompressionspåsar","text":"Läs Elins recension av myHodo kompressionspåsar."},{"href":"/sommar/resa/bagagevag","label":"Bagagevåg","text":"Väg väskan hemma så du slipper övervikt."},{"href":"/sommar/resa","label":"Resa","text":"Se alla Elins smarta reseprylar."}];
