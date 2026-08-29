import type {
  DecisionComparisonFaqItem,
  DecisionComparisonPick,
  DecisionComparisonRelatedLink,
} from "@/lib/decision-comparison";
import {
  proBreezeDehumidifierProduct,
  levoitCore200sProduct,
} from "@/lib/products";

export const luftavfuktareEllerLuftrenareFaqItems: DecisionComparisonFaqItem[] = [{"question":"Vad är skillnaden på luftavfuktare och luftrenare?","answer":"En luftavfuktare sänker luftfuktigheten genom att dra ut vatten ur luften och samla det i en tank. En luftrenare låter luften passera ett HEPA-filter som fångar damm, pollen och andra partiklar. Den ena jobbar med fukt, den andra med partiklar – de ersätter inte varandra."},{"question":"Vilken ska jag välja på hösten?","answer":"Utgå från ditt eget hem. Torkar du tvätt inomhus, ser imma på fönstren eller har rå källarluft är det fukten som ska bort – välj avfuktaren. Känns luften instängd och dammig när fönstren hålls stängda är det renaren som gör skillnad."},{"question":"Kan jag ha båda i samma hem?","answer":"Ja, och det är vanligare än man tror – fast i olika rum. Avfuktaren gör mest nytta i tvättrum, badrum eller källare, medan luftrenaren passar bäst där du sover eller sitter mycket, som sovrum och vardagsrum."},{"question":"Låter de mycket?","answer":"Båda hörs, men på olika sätt. Levoit Core 200S har ett lågt nattläge som många har i sovrummet utan att störas. Pro Breeze-avfuktaren surrar mer och passar därför bäst i rum där du inte sover, eller när du inte är i rummet."}];

export const luftavfuktareEllerLuftrenareComparisonRows = [["Snabba signaler","Drar ut fukt ur luften; vattentank töms","Drar luften genom HEPA-filter; filter byts"],["Löser","Imma, inomhustorkad tvätt, rå källarluft","Damm, pollen, instängd och kvalmig luft"],["Märks som","Torrare rum, torrare tvätt","Friskare luft, mindre damm på ytor"],["Bäst i","Tvättrum, badrum, källare","Sovrum, vardagsrum, hemmakontor"],["Höstläget","Tvätt inne + kyla ute = mer fukt","Stängda fönster = partiklar stannar inne"],["Skötsel","Töm tanken, enkel rengöring","Byt filter med jämna mellanrum"],["Elins poäng","78/100","89/100"]] as const;

export const luftavfuktareEllerLuftrenarePicks: [DecisionComparisonPick, DecisionComparisonPick] = [
  {
    product: proBreezeDehumidifierProduct,
    path: "/halsa/luftavfuktare",
    badge: "Mot fukt",
    headline: "Pro Breeze luftavfuktare – när fukten står kvar",
    shortBody: "Välj luftavfuktaren när problemet är fukt: imma på fönstren, tvätt som torkar inomhus eller källare och badrum som känns råa. Den drar ut vattnet ur luften så att rummet känns torrare och fräschare.",
  },
  {
    product: levoitCore200sProduct,
    path: "/halsa/luftrenare",
    badge: "Renare luft",
    headline: "Levoit Core 200S – när luften känns instängd",
    shortBody: "Välj luftrenaren när problemet är partiklar: damm, pollen och kvalmig luft bakom stängda höstfönster. HEPA-filtret fångar det fina dammet och den är tyst nog för sovrummet.",
  },
];

export const luftavfuktareEllerLuftrenareRelatedLinks: DecisionComparisonRelatedLink[] = [{"href":"/halsa/luftavfuktare","label":"Luftavfuktare","text":"Läs Elins genomgång av Pro Breeze luftavfuktare."},{"href":"/halsa/luftrenare","label":"Luftrenare","text":"Läs Elins genomgång av Levoit Core 200S."},{"href":"/halsa/luftavfuktare-eller-luftfuktare","label":"Jämförelse","text":"Luftavfuktare eller luftfuktare? Torr eller fuktig luft – välj rätt håll."},{"href":"/halsa/luftfuktare-eller-luftrenare","label":"Jämförelse","text":"Luftfuktare eller luftrenare? Andra sidan av lufttriangeln."}];
