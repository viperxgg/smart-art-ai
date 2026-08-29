import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  proBreezeDehumidifierProduct,
  levoitHumidifierProduct,
} from "@/lib/products";

export const luftavfuktareEllerLuftfuktareFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden mellan luftavfuktare och luftfuktare?","answer":"De gör motsatta jobb. En luftavfuktare sänker luftfuktigheten genom att dra fukt ur luften och samla den i en tank. En luftfuktare höjer luftfuktigheten genom att sprida en fin vattenmist. Vilken du behöver beror helt på om ditt hem är för fuktigt eller för torrt."},{"question":"Hur vet jag om mitt hem är för fuktigt eller för torrt?","answer":"Tydliga fukttecken: imma på insidan av fönstren, instängd lukt och tvätt som torkar långsamt. Tecken på torr luft: statisk elektricitet, torra läppar och irriterade luftvägar på morgonen. En billig hygrometer ger exakt svar – sikta på ungefär 40–60 procent relativ luftfuktighet."},{"question":"Kan jag behöva båda?","answer":"Ja, faktiskt – många svenska hem har fuktproblem i badrum eller källare på hösten och torr luft i sovrummet mitt i vintern. Då används apparaterna i olika rum och under olika delar av säsongen."},{"question":"Hjälper en luftavfuktare mot kondens på fönstren?","answer":"Ja, kondens på insidan av fönstren beror på hög luftfuktighet inomhus, och en luftavfuktare minskar den. Kombinera gärna med kort vädring på morgonen så syns skillnaden snabbt."}];

export const luftavfuktareEllerLuftfuktareComparisonRows = [["Gör vad?","Drar fukt ur luften och samlar i tank","Tillför fukt via fin mist"],["Problemet den löser","Imma, fuktlukt, tvätt som inte torkar","Torr luft, statisk elektricitet, torra luftvägar"],["Bäst säsong","Höst och regnperioder","Vinter när elementen är på"],["Bäst rum","Badrum, källare, tvättstuga, sovrum","Sovrum och vardagsrum"],["Skötsel","Töm tanken, rengör filtret ibland","Fyll på vatten, rengör tanken regelbundet"],["Ljudnivå","Jämnt lågt brus","Mycket tyst på lägsta läget"],["Elins poäng","78/100","83/100"]] as const;

export const luftavfuktareEllerLuftfuktarePicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: proBreezeDehumidifierProduct,
    path: "/halsa/luftavfuktare",
    badge: "Mot fukt",
    headline: "Pro Breeze – när fukten ska bort",
    shortBody: "Välj Pro Breeze om hemmet visar fukttecken: imma på fönster, tvätt som inte torkar, instängd lukt i badrum eller källare. Den samlar fukten i en behållare och stänger av sig själv när den är full.",
  },
  {
    product: levoitHumidifierProduct,
    path: "/halsa/luftfuktare",
    badge: "Mot torr luft",
    headline: "Levoit – när luften blivit för torr",
    shortBody: "Välj Levoit när elementvärmen gör inomhusluften torr: statisk elektricitet, torra slemhinnor och sämre sömn. Den tillför en fin mist och håller fuktnivån jämn i sovrummet.",
  },
];

export const luftavfuktareEllerLuftfuktareRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/halsa/luftavfuktare","label":"Luftavfuktare","text":"Läs Elins genomgång av Pro Breeze luftavfuktare."},{"href":"/halsa/luftfuktare","label":"Luftfuktare","text":"Läs Elins genomgång av Levoit luftfuktare."},{"href":"/halsa/luftfuktare-guide","label":"Guide","text":"Luftfuktare: ultraljud eller evaporativ?"},{"href":"/halsa","label":"Hälsa","text":"Se alla Elins val för hem och återhämtning."},{"href":"/halsa/luftavfuktare-eller-luftrenare","label":"Jämförelse","text":"Luftavfuktare eller luftrenare? Fukt eller partiklar – välj rätt maskin."}];
