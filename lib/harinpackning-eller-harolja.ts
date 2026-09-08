import type { DecisionGuide } from "@/components/DecisionGuidePage";
import type { DecisionRecord } from "@/lib/decision-record";
import { hairMaskDecision } from "@/lib/hair-mask-decision";
import { hairStylingDecision } from "@/lib/hair-styling-decision";

const mask = hairMaskDecision.options[1];
const oil = {
  ...hairStylingDecision.options[0],
  avoidIf: "du söker ren arganolja, vill undvika parfym eller väljer enbart för ett känt varumärke.",
};
const maskSource = hairMaskDecision.sources[1];
const oilSource = hairStylingDecision.sources[0];

export const maskOrOilDecision: DecisionRecord = {
  reviewedAt: "2026-09-08", options: [mask, oil], sources: [maskSource, oilSource],
  payMoreWhen: "Produktens användningssätt passar ett behov du faktiskt har. En ursköljbar mask och en finishprodukt är olika steg; högre pris visar inte att den ena gör den andras jobb.",
  noPurchaseWhen: "Balsamet eller stylingprodukten du redan använder ger den känsla och hanterbarhet du vill ha. Lägg inte till både mask och olja utan ett tydligt skäl.",
  swedishContext: "Matcha Thick Hair respektive Treatment Original mot namnet och instruktionen på förpackningen. Källornas varianter är inte matchade mot våra butikslänkar, och vi har inte verifierat aktuella totalpriser.",
  testing: "Tillverkarkällorna beskriver användningen; vi har inte jämfört resultat på hår eller testat kombinationen. L’Oréals effektfotnot gäller schampo plus mask, inte en jämförelse med Moroccanoil.",
  limitations: "Vi lovar inte att produkterna reparerar samma problem eller fungerar bättre tillsammans. Ingredienserna visar inte ensamma vilken produkt du behöver. Exakta butiksvarianter och bildrättigheter återstår.",
};

export const maskOrOilGuide: DecisionGuide = {
  path: "/skonhet/harinpackning-eller-harolja", parent: { name: "Skönhet", href: "/skonhet" },
  title: "Hårinpackning eller hårolja – vilket steg saknar du?",
  intro: "Behöver du en produkt som sköljs ur eller en finish i längderna? Jämför användningen före varumärket; vi har inget test som motiverar att du köper båda.",
  decision: maskOrOilDecision, productPaths: ["/skonhet/harinpackning", "/skonhet/harolja"],
  questions: [
    { question: "Kan jag lägga till båda?", answer: "Olika användningssätt innebär inte att kombinationen behövs. Utgå från det som saknas i din rutin; vi har inte testat produkterna tillsammans." },
    { question: "Hur ofta ska jag använda dem?", answer: "Följ instruktionen för den exakta förpackningen. Vi anger inget generellt veckoschema som passar alla hårtyper eller båda produkterna." },
    { question: "Är håroljan en ersättning för masken?", answer: "Inte en slutsats vi kan dra. Här jämförs olika användningssteg, inte två produkter med visat likvärdig effekt." },
  ],
  related: [{ href: "/guider/moroccanoil-vart-priset", text: "Vad skulle motivera priset på håroljan?" }, { href: "/guider/harinpackning", text: "Jämför fler masker efter användning" }],
};

export const moroccanoilValueGuide: DecisionGuide = {
  path: "/guider/moroccanoil-vart-priset", title: "Moroccanoil hårolja – vad skulle göra den värd priset?",
  intro: "Utgå från vad du vill förändra i din styling. Ett varumärke eller en ingredienslista räcker inte för att visa att en produkt är värd mer, eller att en billigare ger samma resultat.",
  decision: {
    ...maskOrOilDecision, options: [oil], sources: [oilSource],
    payMoreWhen: "Du har ett konkret skäl att föredra formulan eller användningskänslan och kostnaden ryms i din budget. Vi har inte verifierat en prisskillnad eller provat produkten mot ett billigare alternativ.",
    noPurchaseWhen: "Den finishprodukt du redan har fungerar. Byt inte enbart för varumärkets skull och köp inte storpack innan du vet att du kommer att använda det.",
    swedishContext: "Underlaget gäller Treatment Original MOT01 på tillverkarens svenska sida. Matcha volym och innehåll på förpackningen; vår butikslänk för 25 ml är inte kontrollerad mot den aktuella formulan.",
    testing: "Vi har läst produktbeskrivning, ingredienslista och instruktioner. Vi har inte isolerat enskilda ingrediensers effekt eller jämfört glans, känsla och förbrukning mot ett billigare alternativ.",
    limitations: "Vi kan varken lova en unik effekt eller samma resultat från en annan olja. Kostnad per användning kräver både aktuellt pris och faktisk förbrukning. Bildrättigheter och butiksmatchning återstår.",
  },
  productPaths: ["/skonhet/harolja"],
  questions: [
    { question: "Bevisar silikoner i innehållet att en billigare olja är lika bra?", answer: "Nej. En ingredienslista är inte ett jämförande användartest, och vi har inte prövat ett namngivet billigare alternativ mot denna formula." },
    { question: "Vilket pris ska jag jämföra?", answer: "Jämför samma variant och volym, inklusive frakt. Pris per 100 ml hjälper med förpackningsstorleken men visar inte hur mycket du behöver använda." },
    { question: "Vad kan jag göra innan jag byter produkt?", answer: "Skriv ned vad som inte fungerar med den du har och jämför det med användningen här. Om inget saknas finns inget tydligt skäl till ett nytt köp." },
  ],
  related: [{ href: "/skonhet/harinpackning-eller-harolja", text: "Mask eller finishprodukt?" }, { href: "/skonhet/harolja-eller-varmeskydd", text: "Behöver du i stället värmeskydd?" }],
};

export const salonMaskValueGuide: DecisionGuide = {
  path: "/guider/harinpackning-salongsmarke-vart-det", title: "Hårinpackning – vad motiverar ett högre pris?",
  intro: "Salongsmärke betyder inte automatiskt bättre resultat. Här jämförs Absolut Repair Thick Hair och Garnier Hair Food Pineapple efter användning; deras aktuella priser är inte verifierade.",
  decision: {
    ...maskOrOilDecision, options: [mask, hairMaskDecision.options[5]], sources: [maskSource, hairMaskDecision.sources[5]],
    payMoreWhen: "En skillnad i användning eller formula passar ditt behov bättre. Vi har inget underlag för att salongsmasker generellt är mer koncentrerade eller att dessa två ger samma resultat.",
    noPurchaseWhen: "Ditt balsam eller din mask fungerar. Ett nytt varumärke eller ett separat steg är inte ett behov i sig.",
    swedishContext: "Den svenska L’Oréal-källan gäller Thick Hair 500 ml med 250 ml listad separat. Garnier-källan gäller Pineapple 400 ml. Kontrollera exakt förpackning; hela Hair Food-serien är inte samma formula.",
    testing: "Vi har inte testat maskerna mot varandra. Båda tillverkarnas effektfotnoter gäller användning med schampo; de isolerar inte maskens effekt och visar inte vem som vinner här.",
    limitations: "Pris, koncentration och resultat kan inte rangordnas utifrån märkets positionering. Vi ger ingen veckofrekvens för alla. Butikslänkar, bildrättigheter och jämförande användartest återstår.",
  },
  productPaths: ["/skonhet/harinpackning", "/skonhet/garnier-fructis-hair-food-harinpackning"],
  questions: [
    { question: "Är en salongsmask mer koncentrerad?", answer: "Det är inte visat i vårt underlag. För att avgöra det behövs uppgifter om den exakta formulan och en relevant jämförelse." },
    { question: "Kan båda användas utan ursköljning?", answer: "Nej enligt användningssätten i källorna: Thick Hair-masken ska sköljas ur. Garnier anger flera användningssätt för Pineapple, inklusive leave-in; följ instruktionen för det valda sättet." },
    { question: "Räcker den billigare?", answer: "Vi har inte verifierat vilket erbjudande som är billigare eller jämfört resultat. Börja med om du behöver en annan produkt över huvud taget." },
  ],
  related: [{ href: "/guider/harinpackning", text: "Se fler namngivna masker och deras begränsningar" }],
};
