import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  haisskyLoparbalteProduct,
  salomonActiveSkinProduct,
} from "@/lib/products";

export const loparvastEllerMidjevaskaFaqItems: DecisionComparisonFaqItem[] = [{"question":"Behöver jag en löparväst?","answer":"Bara om du springer så långt att vätska och packning måste med – typiskt långpass över en timme eller trail. För vardagsrundor med mobil och nycklar räcker en midjeväska gott och kostar en bråkdel."},{"question":"Studsar en midjeväska när jag springer?","answer":"Ett bra löparbälte sitter tätt mot kroppen och studsar inte om du spänner det rätt och inte packar för tungt. HAISSKY-bältets elastiska band och kardborre får beröm av köpare för just det."},{"question":"Är västen inte varmare på sommaren?","answer":"Jo, en väst täcker ryggen och blir varmare än ett smalt bälte. På heta sommarrundor är det ett skäl att välja bältet – om du inte behöver bära vatten, för då väger vätskan tyngre än värmen."},{"question":"Kan jag bära vatten med en midjeväska?","answer":"HAISSKY-bältet har ingen flaskhållare – det är gjort för mobil, nycklar och kort. Behöver du vätska regelbundet på rundan är det västen som gäller, eller en flaska i handen."}];

export const loparvastEllerMidjevaskaComparisonRows = [["Snabba signaler","Litet bälte; mobil & nycklar; budgetpris","Väst med flaskor; packvolym; premium"],["Bäst för","Rundor upp till en timme","Långpass där vätska måste med"],["Vatten","Ingen plats för flaska","Flaskor fram ingår"],["Packvolym","3 fickor för smått","Plats för jacka, energi och mer"],["Komfort i värme","Svalt – bara ett band","Varmare – täcker ryggen"],["Prisläge","Budget","Premium"],["Elins poäng","83/100","79/100"]] as const;

export const loparvastEllerMidjevaskaPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: haisskyLoparbalteProduct,
    path: "/traning/loparbalte",
    badge: "Räcker för de flesta",
    headline: "HAISSKY löparbälte – allt du behöver på rundan",
    shortBody: "Välj midjeväskan för vardagsrundorna. Mobil, nycklar och kort sitter tätt utan att studsa – till budgetpris.",
  },
  {
    product: salomonActiveSkinProduct,
    path: "/traning/loparvast",
    badge: "För långpassen",
    headline: "Salomon Active Skin 4 – när vattnet måste med",
    shortBody: "Välj löparvästen för långpassen. Flaskor fram, packvolym för vind- jacka och energi – byggd för distans.",
  },
];

export const loparvastEllerMidjevaskaRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/traning/loparbalte","label":"Midjeväska","text":"Läs Elins genomgång av HAISSKY löparbälte."},{"href":"/traning/loparvast","label":"Löparväst","text":"Läs Elins genomgång av Salomon Active Skin 4."},{"href":"/traning/studsmatta-eller-hopprep","label":"Kondition","text":"Studsmatta eller hopprep – kondition hemma."},{"href":"/traning","label":"Träning","text":"Se alla Elins träningsval."}];
