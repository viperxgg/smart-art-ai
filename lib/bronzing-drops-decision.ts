import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";
import { selfTanDecision } from "@/lib/self-tan-decision";

export const bronzingDropsDecision: DecisionRecord = {
  reviewedAt: "2026-09-08",
  options: [{
    productSlug: "elf-skin-bronzing-drops",
    model: "e.l.f. SKIN Bronzing Drops, Rose Gold, 30 ml",
    variant: "Amerikansk produktsida: 1 – Rose Gold with Rose Gold Shimmer, Regular 30 ml, SKU 57520. Inte Fair Gold, Pure Gold, Copper Gold eller ministorleken. Vår svenska butikslänk är inte matchad mot denna variant.",
    chooseIf: "du vill ha tillfällig färg som tvättas bort och föredrar ett roséguldskimmer. Tillverkaren anger 1–3 droppar i fuktkräm eller kroppskräm för att justera färgmängden.",
    avoidIf: "du vill att färgen ska utvecklas och sitta kvar som brun utan sol, söker en matt finish eller tänker blanda dropparna i solskydd. Tillverkaren avråder från blandning med solskydd.",
    sourceIds: ["B1", "B2"], merchantVariantVerified: false,
  }],
  payMoreWhen: "En verifierad nyans eller applicering passar dig bättre. Vi har inte jämfört pris, förbrukning eller resultat med andra droppar; ett lågt flaskpris bevisar inte bättre värde.",
  noPurchaseWhen: "Du inte vill lägga till färg eller skimmer, eller redan har en bronzer som ger resultatet du söker. Produkten är inte ett nödvändigt hudvårdssteg.",
  swedishContext: "Källan gäller den amerikanska sidan. Kontrollera Rose Gold, 30 ml och ingredienslistan på förpackningen som erbjuds i Sverige. Svenska totalpriser, leveransvillkor och butiksmatchning är inte verifierade.",
  testing: "Vi har läst tillverkarens produktsida och förklaring av användningen. Vi har inte testat nyansen på hud, blandning med olika krämer, hållbarhet eller färgöverföring.",
  limitations: "En bild med flera färger visar inte vad som ingår i en flaska. Tillverkarens hudtonsbeskrivning garanterar inte att Rose Gold passar dig. Dropparna saknar SPF enligt tillverkaren. Bildrättigheter och butiksvariant återstår.",
  sources: [
    { id: "B1", title: "e.l.f. – Bronzing Drops, vald Rose Gold 30 ml", url: "https://www.elfcosmetics.com/products/bronzing-drops?Color=1+-+Rose+Gold+with+Rose+Gold+Shimmer+-+Fair+to+Medium+Skin+Tones&Size=Regular+1.0+oz+%2F+30+mL", checkedAt: "2026-09-08", supports: "Rose Gold 30 ml, SKU 57520, skimmer och dosering. FAQ beskriver tillfällig makeupfärg som tvättas bort, inte självbrunande färg." },
    { id: "B2", title: "e.l.f. – frågor om Bronzing Drops", url: "https://www.elfcosmetics.com/blogs/the-elf-word/bronzing-drops-questions-answered", checkedAt: "2026-09-08", supports: "Ingen SPF och tillverkarens råd att inte blanda med solskydd. Artikeln räknar tre nyanser medan produktsidan visar fyra; aktuell vald variant används, inte artikelns sortimentsantal." },
  ],
};

export const temporaryOrDevelopingColourGuide: DecisionGuide = {
  path: "/skonhet/sommarglow-utan-sol", parent: { name: "Skönhet", href: "/skonhet" },
  title: "Brun utan sol eller bronzing drops – vilken sorts färg vill du ha?",
  intro: "St.Tropez Express utvecklar färg efter applicering och avsköljning. e.l.f. Rose Gold ger tillfällig makeupfärg som tvättas bort. Välj först användningssätt; vi har inte visat att någon är ett bättre köp.",
  decision: {
    ...bronzingDropsDecision,
    options: [selfTanDecision.options[0], bronzingDropsDecision.options[0]],
    sources: [...selfTanDecision.sources, ...bronzingDropsDecision.sources],
    payMoreWhen: "Ett verifierat användningssätt fyller ett behov som din nuvarande produkt inte möter. Här jämförs olika typer av färg, inte två likvärdiga produkter med verifierad prisskillnad.",
    noPurchaseWhen: "Du är nöjd med din hudton eller det du redan använder. Du behöver inte båda produkterna för att följa en rutin.",
    swedishContext: "Underlaget är brittiskt för St.Tropez 200 ml och amerikanskt för e.l.f. Rose Gold 30 ml. Matcha namn, storlek och instruktioner med den svenska förpackningen. Butiksvarianter och totalpriser är ännu inte verifierade.",
    testing: "Vi har jämfört tillverkarnas instruktioner, inte applicerat produkterna eller jämfört färg, doft, överföring och förbrukning. Vi utser ingen vinnare för nybörjare eller för en viss hudton.",
    limitations: "En timme för St.Tropez avser avsköljning för ljusare färg; utvecklingen fortsätter under åtta timmar. e.l.f. är tvättbar makeup. Ingen av dessa används som solskydd, och e.l.f. avråder från att blanda dropparna i solskydd. Bildrättigheter återstår.",
  },
  productPaths: ["/skonhet/brun-utan-sol", "/skonhet/bronzing-drops"],
  questions: [
    { question: "Är dropparna en billigare version av moussen?", answer: "Det är olika användningssätt: tillfällig makeupfärg respektive färg som utvecklas efter applicering. Vi har inte verifierat jämförbara priser eller förbrukning." },
    { question: "Vilken är enklast?", answer: "Det har vi inte testat. Fundera på om du föredrar att blanda och tvätta bort färg eller planera en tidsbestämd avsköljning." },
    { question: "Kan dropparna blandas i solskydd?", answer: "e.l.f. avråder från det eftersom det kan påverka skyddet. Rådet att blanda med fuktkräm ska inte läsas som ett råd att blanda med SPF." },
  ],
  related: [{ href: "/guider/brun-utan-sol-vart-det", text: "Vad innebär Express-moussens tidsangivelser?" }],
};
