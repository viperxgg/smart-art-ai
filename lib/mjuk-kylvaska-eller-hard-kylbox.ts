import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  lifewitKylvaskaProduct,
  colemanXtremeKylboxProduct,
} from "@/lib/products";

export const mjukKylvaskaEllerHardKylboxFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på en mjuk kylväska och en hård kylbox?","answer":"Den mjuka kylväskan är lätt, bärs som ryggsäck och håller kylan i timmar – perfekt för en dagsutflykt. Den hårda kylboxen har tjock skumisolering som håller kylan i dagar, men den väger flera kilo tom och är skrymmande."},{"question":"Hur länge håller kylan?","answer":"Kylryggsäcken håller kylan i några timmar med frysta kylklampar och förkylt innehåll. Coleman-boxen klarar upp till 4 dagar med rätt packning: is eller kylklampar, förkylt innehåll, locket stängt och boxen i skugga."},{"question":"Vilken passar bäst för stranden?","answer":"Går du till stranden är ryggsäcken given – den bärs bekvämt och händerna är fria. Kör du bil ända fram och stannar länge, eller är ni ett stort sällskap, gör boxens volym och kyltid mer nytta."},{"question":"Kan jag ha båda?","answer":"Ja, de kompletterar varandra: boxen som basstation vid bilen eller tältet och ryggsäcken för det du tar med ner till vattnet. Då håller basen kylan i dagar medan du bara bär det du behöver."}];

export const mjukKylvaskaEllerHardKylboxComparisonRows = [["Snabba signaler","Kylryggsäck; lätt att bära; kyla i timmar","Hård box; kyla i dagar; tål att sittas på"],["Bäst för","Dagsutflykt till fots eller cykel","Camping, festival och bilpackning"],["Kyltid","Timmar – med frysta kylklampar","Upp till 4 dagar med rätt packning"],["Att bära","Bekvämt på ryggen, händerna fria","5,5 kg tom – helst bilen eller två som bär"],["Volym","24 liter","49 liter"],["Extra","Viks ihop platt hemma","Funkar som sittplats, tål 113 kg"],["Elins poäng","83/100","84/100"]] as const;

export const mjukKylvaskaEllerHardKylboxPicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: lifewitKylvaskaProduct,
    path: "/sommar/resa/kylvaska",
    badge: "Bärs bekvämt",
    headline: "Lifewit kylryggsäck – sval dryck, fria händer",
    shortBody: "Välj kylryggsäcken för dagsutflykten till fots. 24 liter bärs bekvämt på ryggen och håller drycken sval hela stranddagen med kylklampar.",
  },
  {
    product: colemanXtremeKylboxProduct,
    path: "/sommar/resa/kylbox",
    badge: "Kyla i dagar",
    headline: "Coleman Xtreme – basstationen som håller hela helgen",
    shortBody: "Välj den hårda kylboxen för camping och långhelg. 49 liter, PU-skumisolering och upp till 4 dagars kyla – och locket tål att sittas på.",
  },
];

export const mjukKylvaskaEllerHardKylboxRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/sommar/resa/kylvaska","label":"Kylryggsäck","text":"Läs Elins genomgång av Lifewit kylryggsäck."},{"href":"/sommar/resa/kylbox","label":"Kylbox","text":"Läs Elins genomgång av Coleman Xtreme."},{"href":"/sommar/resa/strandfilt-eller-strandhandduk","label":"Stranden","text":"Strandfilt eller strandhandduk – vad passar din stranddag?"},{"href":"/sommar/resa","label":"Resa","text":"Se alla Elins val för resan och stranden."}];
