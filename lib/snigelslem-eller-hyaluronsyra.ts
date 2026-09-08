import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const hydrationSerumDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "cosrx-snail-mucin-essence", model: "COSRX Advanced Snail Radiance Dual Essence, 80 ml",
    variant: "Dual Essence med märkets angivna 74,3% Triple Snail Complex och 5% niacinamid. Inte Advanced Snail 96 Mucin Power Essence. Katalogens ASIN B08FSWVXRD är inte matchad mot aktuell svensk butiksvara.",
    chooseIf: "du vill undersöka en dubbelessens som marknadsförs för återfuktning och lyster, och accepterar snigelsekret som ingrediens. Niacinamid och sodium hyaluronate finns redan i formulan; det är inte en produkt med enbart snigelsekret.",
    avoidIf: "du vill undvika ingredienser från djur, söker Snail 96 eller behöver en bevisad vinnare för torr hud. Vi har inte testat känsla, upptag eller effekt mot Minimalist.",
    sourceIds: ["H1"], merchantVariantVerified: false,
  }, {
    productSlug: "minimalist-hyaluronsyra-serum", model: "Minimalist Hyaluronic + PGA 2% Face Serum, 30 ml",
    variant: "30 ml-varianten av Hyaluronic + PGA 2% enligt märkets sida; även 10 ml finns. INCI listar bland annat hyaluronatformer, sodium polyglutamate och panthenol. Katalogposten saknar ASIN och ett aktuellt svenskt erbjudande är inte matchat.",
    chooseIf: "du söker ett parfymfritt serumsteg för återfuktning och har ett behov som din nuvarande fuktkräm inte redan täcker. Tillverkaren anger användning följt av fuktkräm; vi har inte jämfört om det ger dig någon extra nytta.",
    avoidIf: "du väljer enbart för att 2% eller flera molekylstorlekar skulle bevisa bättre effekt än andra serum. Vi kan inte rangordna återfuktning, hudkänsla eller värde från de uppgifterna ensamma.",
    sourceIds: ["H2"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Du kan beskriva en skillnad du behöver i den kompletta produkten och jämföra matchade totalpriser. Vi har varken visat att budget och premium ger samma resultat eller att ett dyrare serum är bättre. En förpackning på 80 ml räcker inte som bevis på lägre kostnad per användning än 30 ml; doseringen är inte jämförd.",
  noPurchaseWhen: "Din nuvarande fuktkräm och rutin fungerar. Ingredienser i ett serum kan redan finnas i det du använder. Köp inte båda dessa produkter bara för att ingrediensnamnen på framsidan skiljer sig.",
  swedishContext: "Underlaget gäller COSRXs amerikanska och Minimalists indiska produktsidor. Svenskt pris, lager, frakt, exakt leveransvariant och bildrättigheter är inte verifierade. Kontrollera namn, volym, fullständig ingredienslista och instruktioner på den förpackning som erbjuds.",
  testing: "Vi har läst tillverkarinformation och ingredienslistor, inte provat produkterna på huden eller mätt återfuktning. Minimalist beskriver ett åtta timmar långt underarmstest mot en ej namngiven referensprodukt. Det är inte vårt test och identifierar ingen jämförelse med just COSRX eller alla premiumserum.",
  limitations: "Ingen individuell tolerans, effekt på hudproblem, användningskostnad eller känslomässig preferens är verifierad. Tillverkarnas målgrupper, kundomdömen och marknadsföring bevisar inte att en produkt passar dig. Ingen formelanalys av den svenska butiksvaran är gjord.",
  sources: [
    { id: "H1", title: "COSRX – Advanced Snail Radiance Dual Essence", url: "https://www.cosrx.com/products/advanced-snail-radiance-dual-essence", checkedAt: "2026-09-09", supports: "80 ml, 74,3% Triple Snail Complex, 5% niacinamid samt sodium hyaluronate i INCI. Pumpa, blanda de två essenserna och applicera enligt märket. Skiljs från Snail 96. UV-relaterad ingrediensmarknadsföring används inte som ett solskyddslöfte." },
    { id: "H2", title: "Minimalist – Hyaluronic + PGA 2% Face Serum", url: "https://beminimalist.co/products/2-hyaluronic-acid", checkedAt: "2026-09-09", supports: "30/10 ml, parfymfri enligt märket, INCI och anvisning att följa med fuktkräm. Sammanfattar eget beställt jämförelseunderlag med rapportnummer SKIN/USHS/SR/2021-147, men namnger inte referensprodukten. Inget stöd för en generell budgetvinnare." },
  ],
};

const comparisonPath = "/skonhet/snigelslem-eller-hyaluronsyra";
export const snailOrHyaluronicGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" }, path: comparisonPath,
  title: "Snigelessens eller hyaluronsyraserum – behövs ett extra fuktsteg?",
  intro: "COSRX Dual Essence och Minimalist har flera ingredienser var, och båda innehåller hyaluronatformer. Jämför vad din rutin saknar, den exakta produkten och hur den används. Vi utser ingen vinnare i återfuktning eller hudkänsla.",
  decision: hydrationSerumDecision,
  productPaths: ["/skonhet/snail-mucin-essence", "/skonhet/hyaluronsyra-serum"],
  questions: [
    { question: "Är det snigelsekret mot hyaluronsyra?", answer: "Inte som två isolerade ingredienser. COSRX Dual innehåller också sodium hyaluronate och niacinamid, medan Minimalist har flera ingredienser utöver hyaluronatformerna. Vi kan inte tillskriva en eventuell skillnad en enda ingrediens." },
    { question: "Vilken är bäst för torr hud?", answer: "Vi saknar ett jämförbart test på dessa färdiga produkter. Påståenden om att COSRX känns mer närande eller Minimalist absorberas snabbare är inte våra observationer. Börja med om din befintliga rutin redan ger den komfort du behöver." },
    { question: "Behöver jag båda eller ett extra niacinamidserum?", answer: "Det finns ingen sådan standardrekommendation här. Dual Essence innehåller redan niacinamid och en hyaluronatform. Ett extra steg kräver ett eget skäl; fler ingrediensnamn eller flaskor är inget mål." },
    { question: "Är Dual samma som Snail 96?", answer: "Nej. Den här katalogposten gäller Dual Essence,80 ml. Snail 96 är en annan produkt. Kontrollera hela namnet innan du jämför priser, bilder eller användningsråd." },
  ],
  related: [{ href: "/guider/hyaluronsyra-dyrt-vs-budget", text: "Vad skulle motivera ett dyrare fuktserum?" }, { href: "/guider/snail-mucin-vart-hypen", text: "Är Dual Essence värd ett extra steg?" }],
};

export const hyaluronicValueGuide: DecisionGuide = {
  path: "/guider/hyaluronsyra-dyrt-vs-budget",
  title: "Hyaluronsyra – vad skulle motivera ett dyrare serum?",
  intro: "Priset ensamt säger inte hur en färdig formula fungerar. Vi har underlag för Minimalist, men inget jämförande test som visar att alla budgetserum motsvarar premium. Bedöm först om du behöver ett extra fuktsteg alls.",
  decision: { ...hydrationSerumDecision, options: [hydrationSerumDecision.options[1]], sources: [hydrationSerumDecision.sources[1]] },
  productPaths: ["/skonhet/hyaluronsyra-serum"],
  questions: [
    { question: "Gör alla hyaluronsyraserum samma jobb?", answer: "Vi kan inte fastslå likvärdiga resultat för olika färdiga formulor. Ingrediensnamnet räcker inte för att bedöma exempelvis känsla, tolerans eller återfuktning över tid." },
    { question: "Visar Minimalists test att serumet slår premium?", answer: "Märkets sammanfattning gäller ett avgränsat underarmstest mot en referens som inte namnges. Vi har inte granskat en fullständig studierapport eller jämfört butiksversioner. Det är otillräckligt för en generell prisvinnare." },
    { question: "Vad ska jag jämföra i ett erbjudande?", answer: "Exakt formula, volym, aktuellt totalpris och hur mycket du faktiskt använder. Jämförpris per volym kan hjälpa när erbjudandena är matchade, men är inte ett bevis på effekt eller kostnad per applicering." },
    { question: "Kan jag behålla bara min fuktkräm?", answer: "Om den redan fyller ditt behov finns inget krav på ytterligare serum. Ett nytt steg ska lösa något du faktiskt saknar, inte bara göra rutinen längre." },
  ],
  related: [{ href: comparisonPath, text: "Jämför Dual Essence och Minimalist" }],
};

export const snailValueGuide: DecisionGuide = {
  path: "/guider/snail-mucin-vart-hypen",
  title: "COSRX Dual Essence – är det värt ett extra steg?",
  intro: "Popularitet avgör inte om du behöver en essens. Här gäller frågan COSRX Dual Essence, inte Snail 96: en produkt med snigelsekret, niacinamid och andra ingredienser. Börja med vad du saknar i din nuvarande rutin.",
  decision: { ...hydrationSerumDecision, options: [hydrationSerumDecision.options[0]], sources: [hydrationSerumDecision.sources[0]], testing: "Vi har läst COSRXs produktsida och ingredienslista, inte provat essensen eller mätt resultat. Varken produktens popularitet eller AI-sammanfattade kundomdömen är våra testresultat." },
  productPaths: ["/skonhet/snail-mucin-essence"],
  questions: [
    { question: "Är hypen ett bra köpskäl?", answer: "Inte ensam. Bedöm om du vill ha just denna formula och om din befintliga rutin redan fungerar. Vi har inte fastställt att produkten är prisvärd för dig eller bättre än ett annat fuktsteg." },
    { question: "Passar den om jag undviker animaliska ingredienser?", answer: "Snail Secretion Filtrate står i produktens ingredienslista. Den är därför inte ett alternativ för den som vill undvika snigelbaserade ingredienser." },
    { question: "Hur beskriver märket användningen?", answer: "Pumpa ut, blanda de två essenserna och applicera försiktigt i ansiktet. Det gäller produktens två delar, inte en instruktion att blanda in andra serum eller solskydd." },
    { question: "Behöver jag hela rutinen som visas hos märket?", answer: "Vi har inget underlag som visar att du behöver varje steg eller produkt i en marknadsförd rutin. Börja med ditt behov och behåll det som redan fungerar." },
  ],
  related: [{ href: comparisonPath, text: "Jämför formulan med Minimalist" }],
};
