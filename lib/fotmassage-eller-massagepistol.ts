import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  beurerFm90Product,
  beurerMassagepistolProduct,
} from "@/lib/products";

export const fotmassageEllerMassagepistolFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden mellan fotmassage och massagepistol?","answer":"En fotmassage som Beurer FM 90 är en apparat du sätter fötterna i – shiatsu-rullar och värme sköter allt automatiskt. En massagepistol som MG 99 är ett handhållet verktyg du själv riktar mot spända muskler var som helst på kroppen. Den ena är passiv avkoppling, den andra ett aktivt verktyg."},{"question":"Hjälper en fotmassageapparat mot trötta fötter?","answer":"Många köpare beskriver just det som största behållningen: efter dagar med mycket stående och gående upplevs shiatsu-rullarna och värmen som mycket avkopplande. Se den som en skön kvällsritual snarare än en mirakelkur."},{"question":"Kan man använda en massagepistol på fötterna?","answer":"Det går med ett mjukt huvud och lågt tempo, men de flesta tycker att en riktig fotmassage är bekvämare för just fötter – pistolen kommer mer till sin rätt på större muskler som vader, lår och axlar."},{"question":"Vilken passar bäst som julklapp?","answer":"Båda är uppskattade klappar men till olika personer: fotmassagen till den som älskar mys och avkoppling, massagepistolen till den som tränar eller ofta klagar på spända axlar."}];

export const fotmassageEllerMassagepistolComparisonRows = [["Typ","Shiatsu-fotmassage med värme","Massagepistol med utbytbara huvuden"],["Kroppsdel","Fötter","Hela kroppen – vader, lår, rygg, axlar"],["Ansträngning","Ingen – sätt i fötterna och slappna av","Du håller och styr den själv"],["Bäst efter","Dagar på benen, kalla kvällar","Träningspass och stillasittande"],["Ljud","Lågt surr","Hörs mer på höga lägen"],["Passar som julklapp","Ja – mysfaktor","Ja – till den träningsintresserade"],["Elins poäng","63/100","76/100"]] as const;

export const fotmassageEllerMassagepistolPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: beurerFm90Product,
    path: "/halsa/fotmassage",
    badge: "För fötterna",
    headline: "Beurer FM 90 – fotkvällen på autopilot",
    shortBody: "Välj FM 90 när det är fötterna som är trötta. Shiatsu-rullarna och värmen jobbar medan du gör ingenting alls – perfekt avslut på dagar där du stått och gått mycket.",
  },
  {
    product: beurerMassagepistolProduct,
    path: "/halsa/massagepistol/beurer-mg-99",
    badge: "För musklerna",
    headline: "Beurer MG 99 – verktyget du riktar själv",
    shortBody: "Välj MG 99 när du vill komma åt spända vader, lår och axlar efter träning eller långa dagar vid skrivbordet. Du styr tryck, tempo och var den jobbar.",
  },
];

export const fotmassageEllerMassagepistolRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/halsa/fotmassage","label":"Fotmassage","text":"Läs Elins genomgång av Beurer FM 90."},{"href":"/halsa/massagepistol/beurer-mg-99","label":"Massagepistol","text":"Läs Elins genomgång av Beurer MG 99."},{"href":"/halsa/massagepistol","label":"Guide","text":"Elins massagepistol-guide: två tydliga val."},{"href":"/halsa/massagepistol-eller-spikmatta","label":"Jämförelse","text":"Massagepistol eller spikmatta för återhämtning?"}];
