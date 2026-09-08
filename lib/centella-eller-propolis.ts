import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const centellaPropolisDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "cosrx-centella-ampoule", model: "COSRX Hydrium Centella Aqua Soothing Ampoule, 40 ml",
    variant: "Hydrium-ampullen, inte Centella Water-toner eller Centella Blemish Cream. Märkets ingredienslista innehåller bland annat centellaextrakt, madecassoside och panthenol. Katalogens ASIN B091T71HVD är inte verifierad mot aktuell svensk butiksvara.",
    chooseIf: "du vill undersöka ett fuktsteg med centellaextrakt och panthenol före fuktkräm. Den dokumenterade ingredienslistan skiljer sig från Glow Serum; välj efter hela formulan och ett behov som din befintliga rutin inte redan fyller.",
    avoidIf: "du behöver ett garanterat irritationsfritt eller säkrast vinterserum. COSRXs målgrupps- och lugnande påståenden visar inte att produkten passar dig eller behandlar orsaken till rodnad.",
    sourceIds: ["P1"], merchantVariantVerified: false,
  }, {
    productSlug: "beauty-of-joseon-propolis-serum", model: "Beauty of Joseon Glow Serum: Propolis + Niacinamide, 30 ml",
    variant: "Glow Serum, inte Glow Deep eller Calming Barrier Serum. Märket anger 60% propolisextrakt och 2% niacinamid. Den belgiska ingredienslistan innehåller även Betaine Salicylate och Centella Asiatica Extract. ASIN B086VKZZZY är inte matchad mot en aktuell svensk förpackning.",
    chooseIf: "du söker ett serum som märket riktar mot lyster och synliga porer och uttryckligen vill undersöka just denna sammansatta formula. Det är inte enbart propolis, och vi har inte bekräftat resultat eller hur det känns på din hud.",
    avoidIf: "du vill undvika propolis eller Betaine Salicylate, eller tror att ett extra niacinamidserum krävs bredvid. Läs ingredienserna och förpackningens råd innan du lägger till fler produkter med liknande innehåll.",
    sourceIds: ["P2", "P3"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Du kan verifiera en relevant skillnad i den kompletta formulan eller användningen och jämföra aktuella totalpriser. Vi har inte visat att en av produkterna är mildare, effektivare eller bättre värde. Att flaskorna är 40 respektive 30 ml säger inte hur länge de räcker för dig.",
  noPurchaseWhen: "Din befintliga fuktkräm och rutin fungerar, eller du saknar ett konkret mål med ännu ett serum. Du behöver inte köpa både centella och propolis som ett paket; Glow Serum innehåller redan centellaextrakt och niacinamid i den publicerade listan.",
  swedishContext: "Källorna är COSRXs amerikanska och Beauty of Joseons internationella/belgiska produktsidor. Vi har inte matchat svensk leveransvariant, lager, frakt, totalpris eller bildrättigheter. Svensk höst eller vinter är i sig inget bevis på att du behöver något av dessa serum.",
  testing: "Vi har läst tillverkarnas ingredienslistor och anvisningar, inte provat produkterna på huden eller jämfört rodnad, komfort, absorption eller glans. Märkenas egna resultatpåståenden och kundomdömen är inte våra tester eller en individuell garanti.",
  limitations: "Ingen säkerhetsrangordning eller generell kombinationsrutin är fastställd. Vi har inte jämfört de fullständiga förpackningarna mellan marknader. Extraktandelar är tillverkaruppgifter och ska inte tolkas som samma sak som motsvarande andel ren aktiv substans.",
  sources: [
    { id: "P1", title: "COSRX – Hydrium Centella Aqua Soothing Ampoule", url: "https://www.cosrx.com/products/hydrium-centella-aqua-soothing-ampoule", checkedAt: "2026-09-09", supports: "40 ml, ingredienslista och anvisning om 2–3 droppar före fuktkräm, med undvikande av ögon och mun. Irritationsfrihet och lämplighet vid aktiv akne antas inte som verifierade fakta för läsaren." },
    { id: "P2", title: "Beauty of Joseon – Glow Serum", url: "https://beautyofjoseon.com/products/glow-serum-propolis-niacinamide", checkedAt: "2026-09-09", supports: "30/60 ml, angivna 60% propolisextrakt och 2% niacinamid samt BHA-positionering. Märket anger 2–3 droppar, patchtest för känslig hud och solskydd dagtid. Resultatprocent används inte för att utse en vinnare." },
    { id: "P3", title: "Beauty of Joseon Belgien – Glow Serum, ingredienslista", url: "https://be.beautyofjoseon.com/products/glow-serum-propolis-niacinamide", checkedAt: "2026-09-09", supports: "Publicerad INCI innehåller bland annat propolisextrakt, niacinamid, Betaine Salicylate och centellaextrakt. Det styrker att jämförelsen inte isolerar två ingredienser; svensk förpackningsmatchning är inte gjord." },
  ],
};

export const centellaOrPropolisGuide: DecisionGuide = {
  parent: { name: "Skönhet", href: "/skonhet" }, path: "/skonhet/centella-eller-propolis",
  title: "Centella eller propolis – vilken formula behöver du?",
  intro: "Jämför COSRX Hydrium och Beauty of Joseon Glow Serum som färdiga produkter. Glow Serum innehåller också centellaextrakt enligt märkets ingredienslista. Vi utser inget säkrast val för reaktiv hud och rekommenderar inte båda som standard.",
  decision: centellaPropolisDecision,
  productPaths: ["/skonhet/centella-serum", "/skonhet/propolis-serum"],
  questions: [
    { question: "Är det två helt olika ingrediensspår?", answer: "Nej. Glow Serums publicerade lista innehåller också centellaextrakt, tillsammans med bland annat niacinamid och Betaine Salicylate. Jämför hela produkten; vi kan inte tillskriva en eventuell skillnad i upplevelse en enda ingrediens." },
    { question: "Vilket är tryggast när huden är röd eller reaktiv?", answer: "Det har vi inte fastställt. Tillverkarens lugnande marknadsföring och en kortare ingredienslista är inte en individuell toleransgaranti. En produktjämförelse kan inte avgöra orsaken till rodnad eller ersätta en individuell bedömning av kvarstående hudproblem." },
    { question: "Kan jag använda centella på morgonen och propolis på kvällen?", answer: "Vi har inget underlag som visar att just den kombinationen behövs eller passar dig. Läs anvisningarna för dina exakta produkter och tänk igenom överlappande ingredienser innan du gör rutinen längre." },
    { question: "Behöver jag byta serum när hösten kommer?", answer: "Inte för kalenderns skull. Utgå från ett faktiskt behov som din nuvarande rutin inte fyller. Vi har inte utfört några jämförande tester i svensk vintermiljö." },
    { question: "Hur beskriver märkena användningen?", answer: "COSRX anger 2–3 droppar före fuktkräm och att ögon och mun ska undvikas. Beauty of Joseon anger 2–3 droppar och särskilda råd om patchtest och solskydd dagtid. Detta är produkternas instruktioner, inte en personligt utprovad gemensam rutin." },
  ],
  related: [{ href: "/skonhet/snigelslem-eller-hyaluronsyra", text: "Behöver du ett extra fuktsteg?" }, { href: "/skonhet/cicaplast-b5-eller-cetaphil", text: "Jämför de granskade krämvarianterna" }],
};
