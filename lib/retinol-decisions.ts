import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { bakuchiolDecision } from "@/lib/bakuchiol-eller-niacinamid";

export const retinolDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "inkey-retinol-serum", model: "The INKEY List Retinol Serum, 30 ml – originalprodukten",
    variant: "Katalogens ASIN B09PP2YSZD är inte verifierad mot aktuell förpackning. EU-sidan beskriver Retinol Serum; brittiska Starter Retinol är en annan formula. Namnen och procenttalen ska inte användas som om produkterna vore identiska.",
    chooseIf: "du redan vet att du vill undersöka originalprodukten och först kan bekräfta vilken formula och förpackning erbjudandet gäller. Vi rekommenderar inget aktuellt köp innan varianten är matchad.",
    avoidIf: "du förväntar dig Starter Retinol eller tolkar originalets produktnamn som bevis på 1% ren retinol. EU-sidan anger Retinyl Acetate; vår katalog kan inte avgöra vilken version säljaren levererar.",
    sourceIds: ["R1", "R2"], merchantVariantVerified: false,
  }, {
    productSlug: "cerave-resurfacing-retinol", model: "CeraVe Resurfacing Retinol Serum",
    variant: "Resurfacing enligt CeraVes svenska produktsida, inte Skin Renewing. Katalogens ASIN B09NM9TFF2 och förpackningsstorlek är inte matchade mot dagens erbjudande. Vi anger ingen verifierad retinolprocent.",
    chooseIf: "du söker en parfymfri produkt som tillverkaren riktar mot synliga porer och märken efter akne, och kan följa dess anvisningar. Den svenska sidan anger retinol och niacinamid i samma formula; ett extra niacinamidserum är inte automatiskt motiverat.",
    avoidIf: "du söker behandling av pågående akne eller kräver en dokumenterad styrkejämförelse med INKEY. Vi har inte visat att produkten är mildare, effektivare eller mer prisvärd för dig.",
    sourceIds: ["R3"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Du har identifierat en relevant skillnad, exempelvis en formula utan parfym som du uttryckligen söker, och kan jämföra verifierade erbjudanden. Vi kan inte utse en budget- eller effektvinnare från varumärke, ingrediensnamn eller procenttal ensamt.",
  noPurchaseWhen: "Din nuvarande rutin fungerar. Kontrollera redan använda ingredienser innan du lägger till fler serum; en produkt kan innehålla flera av de ämnen du letar efter. Du behöver inte uppgradera bara för att en ny version finns.",
  swedishContext: "CeraVe-underlaget är svenskt. INKEYs brittiska Starter-FAQ säger att originalet har utgått, samtidigt som en EU-sida för originalet finns kvar. Det bevisar inte att alla svenska lager är slut. Kontrollera exakt namn, fullständig ingredienslista och användningsråd på förpackningen före köp.",
  testing: "Dokumentgranskning av tillverkarinformation, inget eget hudtest eller jämförande försök. Vi har inte bedömt individuell tolerans, mätt retinoidhalter eller verifierat butikernas leveransvarianter.",
  limitations: "INKEYs EU-sida nämner 0,5% Granactive Retinoid i huvudingredienserna, men vi kan inte reda ut det mot den publicerade INCI-listan. Därför görs ingen fullständig formelmatchning eller styrkeberäkning. CeraVes exakta retinolhalt är inte styrkt i vårt underlag. Bildrättigheter och aktuella svenska erbjudanden återstår.",
  sources: [
    { id: "R1", title: "The INKEY List EU – original Retinol Serum", url: "https://eu.theinkeylist.com/products/retinol-serum", checkedAt: "2026-09-09", supports: "30 ml, Retinyl Acetate i beskrivning och INCI. Anger kvällsanvändning och gradvis introduktion. Sidan nämner också Granactive Retinoid, vars formelmatchning inte är klarlagd här. Inga pris- eller doftomdömen antas." },
    { id: "R2", title: "The INKEY List UK – Starter Retinol", url: "https://uk.theinkeylist.com/products/starter-retinol", checkedAt: "2026-09-09", supports: "Separat 30 ml-produkt med angivna 1% Granactive Pro+ och 0,01% Retinal. FAQ säger att originalet har utgått. Varken förnyelsen eller märkets resultatpåståenden bevisar ett bättre köp för läsaren." },
    { id: "R3", title: "CeraVe Sverige – Resurfacing Retinol Serum", url: "https://www.cerave.se/alla-produkter/resurfacing-retinol-serum", checkedAt: "2026-09-09", supports: "Retinol, niacinamid och ceramider; utan parfym enligt tillverkaren. Anvisningen säger undvik ögon/läppar, längre uppehåll vid inledande obehag och solskydd dagligen. Ingen egen behandlingseffekt eller individuell säkerhet verifierad." },
  ],
};

export const retinolSerumGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" }, path: "/skonhet/retinolserum",
  title: "Vilket retinolserum jämför du egentligen?",
  intro: "Kontrollera först versionen: INKEYs original och Starter är olika produkter, och CeraVe Resurfacing ska inte förväxlas med Skin Renewing. Här ser du vad som är dokumenterat och vad som behöver kontrolleras innan köp.",
  decision: retinolDecision,
  productPaths: ["/skonhet/retinolserum/inkey-retinol", "/skonhet/retinolserum/cerave-retinol"],
  questions: [
    { question: "Är INKEY Original och Starter samma serum?", answer: "Nej. Tillverkarens sidor beskriver olika retinoidformulor. Vi använder inte Starter-resultat eller instruktioner som bevis för originalets katalogpost. Kontrollera namnet och förpackningen, inte bara en äldre butiksrubrik." },
    { question: "Vilket är starkast eller mildast?", answer: "Det är inte fastställt här. Vi saknar jämförbart underlag för de färdiga produkterna och har inte testat dem. Procent av olika ingredienser eller komplex kan inte användas som en gemensam effektskala." },
    { question: "Behöver CeraVe kompletteras med niacinamid?", answer: "Den svenska ingredienslistan innehåller redan niacinamid. Vi har inget underlag som visar att ytterligare ett serum behövs eller förbättrar resultatet för dig." },
    { question: "Vad ska jag läsa före användning?", answer: "Den aktuella förpackningens instruktioner och begränsningar. Tillverkarna ger råd om introduktion och solskydd, men detta är inte en personligt utprovad rutin. Vid särskilda medicinska förutsättningar behöver produkten bedömas individuellt av vården." },
  ],
  related: [{ href: "/skonhet/retinol-eller-bakuchiol", text: "Jämför med ett bakuchiolkoncentrat" }],
};

export const retinolOrBakuchiolGuide: DecisionGuide = {
  ...retinolSerumGuide, path: "/skonhet/retinol-eller-bakuchiol",
  title: "Retinol eller bakuchiol – vilken formula och användning passar?",
  intro: "CELDYQUE är ett koncentrat för blandning, medan retinolprodukterna har egna serumrutiner. Växtbaserat betyder inte automatiskt mildare. Vi jämför dokumenterad produktidentitet och användning, inte en bevisad vinnare i effekt eller tolerans.",
  decision: {
    ...retinolDecision, options: [...retinolDecision.options, ...bakuchiolDecision.options],
    sources: [...retinolDecision.sources, ...bakuchiolDecision.sources],
    limitations: `${retinolDecision.limitations} CELDYQUEs sida listar nyckelingredienser, inte en här verifierad fullständig INCI. Blandningsanvisningen styrker inte kompatibilitet med de andra produkterna.`,
  },
  productPaths: [...retinolSerumGuide.productPaths, "/skonhet/bakuchiol-serum"],
  questions: [
    { question: "Är bakuchiol ett mildare val?", answer: "Vi har inte visat det för CELDYQUE jämfört med dessa serum. Marknadsföring som retinolalternativ är inte ett jämförande toleranstest. Välj inte enbart på ord som växtbaserat eller mild." },
    { question: "Vilket kräver ett blandningsmoment?", answer: "CELDYQUEs anvisning beskriver ett koncentrat som blandas med kompatibel hudvård. Märkets rutin-FAQ säger att hudvård inte ska blandas i solskydd. Ingen av dessa uppgifter är en rekommendation att blanda de tre jämförda produkterna." },
    ...retinolSerumGuide.questions.slice(0, 2),
    { question: "När kan jag avstå från samtliga?", answer: "När den befintliga rutinen fungerar eller du inte har ett konkret skäl att ändra den. En jämförelse av tre produkter betyder inte att någon av dem måste köpas." },
  ],
  related: [{ href: "/skonhet/bakuchiol-eller-niacinamid", text: "Bakuchiolkoncentrat eller niacinamidserum?" }, { href: "/skonhet/retinolserum", text: "Kontrollera retinolproduktens version" }],
};
