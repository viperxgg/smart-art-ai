import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  olaplexNo3Product,
  lorealAbsolutRepairProduct,
} from "@/lib/products";

export const olaplexEllerHarinpackningFaqItems: DecisionComparisonFaqItem[] = [{"question":"Är Olaplex bättre än en vanlig hårinpackning?","answer":"De gör olika saker. Olaplex jobbar med hårets inre bindningar och är bäst när håret faktiskt är skadat av blekning eller värme. En inpackning mjukgör och återfuktar ytan – på torrt men friskt hår ger den ofta mer synligt resultat för mindre pengar."},{"question":"Kan jag använda både Olaplex och inpackning?","answer":"Ja, de kompletterar varandra: Olaplex i fuktigt hår före schamponering, inpackningen efter tvätten. Många med riktigt slitet hår kör bond-kuren regelbundet och inpackningen för mjukheten."},{"question":"Vilken ska jag välja för solslitet sommarhår?","answer":"Är håret torrt och trist av sol och bad räcker oftast Absolut Repair – den ger mjukhet och glans direkt. Är håret dessutom blekt eller slingat och känns skört gör Olaplex mer på djupet."},{"question":"Hur ofta ska de användas?","answer":"Följ anvisningen på respektive förpackning. En inpackning används typiskt vid hårtvätt när håret känns torrt, medan Olaplex används som kur – regelbundet på skadat hår, mer sällan som underhåll."}];

export const olaplexEllerHarinpackningComparisonRows = [["Snabba signaler","Bond-kur före tvätt; bygger styrka över tid","Proteinrik mask efter tvätt; mjukhet direkt"],["Bäst för","Blekt, slingat eller värmeskadat hår","Torrt, soltrött hår som vill ha glans"],["När ser du resultat?","Gradvis, vid regelbunden användning","Direkt efter första användningen"],["Användning","I fuktigt hår före schamponering","Efter schampo, verkar några minuter"],["Prisläge","Premium för 100 ml","Mellan för 250 ml"],["Elins poäng","79/100","86/100"]] as const;

export const olaplexEllerHarinpackningPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: olaplexNo3Product,
    path: "/skonhet/olaplex-no3",
    badge: "Bond-reparation",
    headline: "Olaplex No.3 – kuren för skadat hår",
    shortBody: "Välj Olaplex om håret är blekt, slingat eller värmeslitet. Bond-kuren används före schamponering och stärker hårets inre bindningar över tid.",
  },
  {
    product: lorealAbsolutRepairProduct,
    path: "/skonhet/harinpackning",
    badge: "Mjukhet direkt",
    headline: "L'Oréal Absolut Repair – inpackningen som gör jobbet",
    shortBody: "Välj inpackningen om håret mest är torrt och soltrött. Proteinrik mask som ger mjukhet och glans direkt efter tvätten – för mindre pengar.",
  },
];

export const olaplexEllerHarinpackningRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/skonhet/olaplex-no3","label":"Olaplex","text":"Läs Elins genomgång av Olaplex No.3."},{"href":"/skonhet/harinpackning","label":"Hårinpackning","text":"Läs Elins genomgång av L'Oréal Absolut Repair."},{"href":"/guider/harinpackning-salongsmarke-vart-det","label":"Guide","text":"Hårinpackning – är salongsmärket värt det?"},{"href":"/skonhet/harolja","label":"Hårolja","text":"Lås in mjukheten med några droppar hårolja."}];
