import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  salkingAromadiffuserProduct,
  levoitHumidifierProduct,
} from "@/lib/products";

export const aromdiffuserEllerLuftfuktareFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på aromdiffuser och luftfuktare?","answer":"En aromdiffuser är liten och gjord för doft – du droppar i eterisk olja för mysig stämning. En luftfuktare har en större tank och fokuserar på att tillföra fukt till torr inomhusluft."},{"question":"Höjer en aromdiffuser luftfuktigheten?","answer":"Bara marginellt. Dimman är främst till för att sprida doft. Vill du verkligen göra torr luft mindre torr behöver du en luftfuktare med större kapacitet."},{"question":"Kan jag använda eterisk olja i en luftfuktare?","answer":"De flesta luftfuktare är inte gjorda för eteriska oljor, som kan skada plasten eller tanken. Vill du ha doft, använd en aromdiffuser som är byggd för det."},{"question":"Vilken är bäst på vintern?","answer":"Känns luften torr när elementen är på är en luftfuktare mest till nytta. En aromdiffuser är mer för mys och doft året runt, och ersätter inte en luftfuktare."}];

export const aromdiffuserEllerLuftfuktareComparisonRows = [["Snabba signaler","Liten, för doft och mys","Större tank, tillför fukt"],["Huvudsyfte","Doft och stämning","Fukt till torr luft"],["Tank","Liten","Större – räcker längre"],["Höjer luftfuktighet?","Bara marginellt","Ja"],["Använd eterisk olja?","Ja","Oftast inte"],["Bäst för","Nattduksbord, mys","Torra rum, vintern"],["Elins poäng","84/100","86/100"]] as const;

export const aromdiffuserEllerLuftfuktarePicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: salkingAromadiffuserProduct,
    path: "/halsa/aromdiffuser",
    badge: "Doft & mys",
    headline: "SALKING aromdiffuser – doftande, mysig stämning",
    shortBody: "Välj aromdiffusern om du främst vill ha doft och mys. Droppa i eterisk olja för en skön stämning – liten och snygg på nattduksbordet eller skrivbordet.",
  },
  {
    product: levoitHumidifierProduct,
    path: "/halsa/luftfuktare",
    badge: "Mot torr luft",
    headline: "Levoit luftfuktare – tillför fukt på riktigt",
    shortBody: "Välj luftfuktaren om du vill göra torr inomhusluft mindre torr. Den större tanken räcker längre och fokuserar på fukt snarare än doft.",
  },
];

export const aromdiffuserEllerLuftfuktareRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/halsa/aromdiffuser","label":"Aromdiffuser","text":"Läs Elins recension av SALKING aromdiffuser."},{"href":"/halsa/luftfuktare","label":"Luftfuktare","text":"Läs Elins recension av Levoit luftfuktare."},{"href":"/halsa/luftfuktare-eller-luftrenare","label":"Jämförelse","text":"Luftfuktare eller luftrenare? Se den jämförelsen."},{"href":"/halsa","label":"Hälsa","text":"Se alla Elins val för smart hem och klimat."}];
