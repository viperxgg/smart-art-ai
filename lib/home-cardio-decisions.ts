import type { DecisionRecord } from "@/lib/decision-record";

export const homeCardioDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    { productSlug: "reebok-stepbrada", model: "Reebok Step – svart/röd, B01KUX49Z8", variant: "Butikslänken matchar svart/röd Step med tre höjdlägen och högst 25 cm. Listningen anger 102 × 38,5 × 25 cm i en punkt men andra mått i tabellen, samt 110 kg. Reeboks aktuella Step-sida anger 15/20/25 cm och 120 kg; vi har inte bekräftat att det är samma revision.", chooseIf: "ditt pass kräver en fast upphöjd plattform och du kan bekräfta höjdlägen, underlag och belastningsgräns för just den levererade versionen. Mät också utrymmet för steg runt brädan.", avoidIf: "du behöver en fjädrande yta eller beställer utifrån maxvikten för en annan generation. De motstridiga måtten gör den här listningen olämplig som enda underlag för exakt passform.", sourceIds: ["HC1", "HC2"], merchantVariantVerified: true },
    { productSlug: "dh-fitlife-studsmatta", model: "DH FitLife fitnesstudsmatta – 102 cm med handtag", variant: "ASIN B0DXQG2CJL. Rund ram, 102 × 102 × 22 cm, 32 fjädrar och sex ben enligt den svenska listningen. Avtagbart handtag med fyra lägen, 78–102 cm, och angiven maxbelastning 150 kg. Det är inte märkets större 114 eller 121 cm-modell.", chooseIf: "du vill använda en fjädrande träningsyta och har plats för ramen, rörelsen och fri höjd ovanför dig. Kontrollera även hur du ska bära, fälla ut och förvara den.", avoidIf: "du behöver en produkt som är bevisat tyst i din bostad eller köper den för ett löfte om att den är snällare mot just dina knän eller din rygg. Vi har inte verifierat det.", sourceIds: ["HC3", "HC4"], merchantVariantVerified: true },
    { productSlug: "portentum-hopprep", model: "PORTENTUM hopprep – rött, B0DCT1PYCM", variant: "Justerbart stålwire-rep med PVC-beläggning och kullager enligt listningen. Röd variant. Rubrik och längdfält anger 2,8 m, men en beskrivningspunkt säger 2,7 m. Bekräfta faktisk användbar längd om dessa centimeter avgör passformen.", chooseIf: "du behöver ett rep som är lätt att packa undan och har fri yta för hela repets rörelse. Kontrollera längdinställning och att ditt underlag passar den belagda wiren.", avoidIf: "du likställer liten förvaringsplats med liten träningsyta eller behöver en exakt verifierad längd före köp. Ett hopprep behöver även utrymme ovanför och runt dig.", sourceIds: ["HC5"], merchantVariantVerified: true },
  ],
  payMoreWhen: "En verifierad höjd, storlek eller funktion behövs i ditt planerade pass. Lägg inte mer pengar på en studsmatta enbart för ett obestyrkt löfte om färre stötar eller fler förbrända kalorier. Vi har inte jämfört aktuella priser, frakt eller livslängd.",
  noPurchaseWhen: "Du redan har ett fungerande sätt att röra på dig eller saknar plats för det nya redskapet. Att ett redskap kan ställas undan betyder inte att det passar när du tränar. Prova gärna typen där du redan tränar innan du väljer ett större redskap.",
  swedishContext: "Mät fri takhöjd, golvyta och förvaringsplats separat. Ta hänsyn till ljud och vibrationer i bostaden; gummifötter eller produktordet tyst är inget uppmätt löfte till grannarna. Följ anvisningarna för underlag och montering och kontrollera den valda versionens uppgifter före köp.",
  testing: "Vi har läst leverantörsuppgifter och kontrollerat de tre svenska butikslänkarna. Vi har inte mätt buller, golvvibrationer, belastning, träningsintensitet eller påverkan på leder. Vi ger inget kalorilöfte eller individuellt träningsprogram.",
  limitations: "Reebok-listningen innehåller motstridiga mått och skiljer sig från tillverkarens aktuella belastningsuppgift. Repets längd är också inkonsekvent. DH FitLifes tillverkarsida nämner ett skyddsnät som inte är bekräftat i det länkade paketet; vi lovar inte att nät ingår eller att produkten är lämplig för barn. Godkända produktbilder saknas.",
  sources: [
    { id: "HC1", title: "Amazon.se – Reebok Step svart/röd", url: "https://www.amazon.se/dp/B01KUX49Z8", checkedAt: "2026-09-09", supports: "Länkad variant, tre höjdlägen och 25 cm maximal höjd. Tabellen anger 110 kg och avvikande mått; höjdpunkten upprepar 15 cm. Inte ett enhetligt tekniskt underlag." },
    { id: "HC2", title: "Reebok Fitness – aktuell Reebok Step", url: "https://www.reebokfitness.info/platforms-catalogue/reebok-step", checkedAt: "2026-09-09", supports: "Aktuell generation: 102 × 38,5 cm, 15/20/25 cm, 7,2 kg och 120 kg maximal användarvikt. Exakt revisionsmatchning med butikslänken saknas; 120 kg överförs inte till den." },
    { id: "HC3", title: "Amazon.se – DH FitLife 102 cm", url: "https://www.amazon.se/dp/B0DXQG2CJL", checkedAt: "2026-09-09", supports: "102 cm-ram, 22 cm höjd, sex ben, 32 fjädrar, fyra handtagslägen 78–102 cm och angiven 150 kg. Ingen mätning av ljud eller ledpåverkan." },
    { id: "HC4", title: "DH FitLife – hopfällbar 40-tumsmodell", url: "https://dh-fitlife.com/collections/trampolin/products/fitness-indoor-trampolin-klappbar-ohne-installation", checkedAt: "2026-09-09", supports: "Fjädrar och justerbart handtag. Texten nämner också skyddsnät, men dess förekomst i Amazon-paketet är inte bekräftad. Marknadsföring om tyst drift och barnsäkerhet är inte testbevis." },
    { id: "HC5", title: "Amazon.se – rött PORTENTUM-rep", url: "https://www.amazon.se/dp/B0DCT1PYCM", checkedAt: "2026-09-09", supports: "Vald röd variant, justerbar wire med PVC och kullager. 2,8 m i rubrik/längdfält men 2,7 m i beskrivningen. Inget eget längd- eller hållbarhetstest." },
  ],
};

const equipmentLimits: Record<string, string> = {
  "reebok-stepbrada": "Reebok-listningen innehåller motstridiga mått och skiljer sig från tillverkarens aktuella belastningsuppgift. Bekräfta den levererade revisionens manual.",
  "dh-fitlife-studsmatta": "DH FitLifes tillverkarsida nämner ett skyddsnät som inte är bekräftat i det länkade paketet. Vi lovar inte att nät ingår eller att produkten är lämplig för barn.",
  "portentum-hopprep": "Repets längd anges både som 2,7 och 2,8 m. Faktisk användbar längd är inte kontrollmätt.",
};

export function getHomeCardioDecision(slugs: readonly string[]): DecisionRecord {
  const options = homeCardioDecision.options.filter(option => slugs.includes(option.productSlug));
  const sourceIds = new Set(options.flatMap(option => option.sourceIds));
  return {
    ...homeCardioDecision,
    options,
    limitations: options.map(option => equipmentLimits[option.productSlug]).join(" ") + " Godkända produktbilder och praktiska användarprov saknas.",
    sources: homeCardioDecision.sources.filter(source => sourceIds.has(source.id)),
  };
}

export const stepTrampolineDecision = getHomeCardioDecision(["reebok-stepbrada", "dh-fitlife-studsmatta"]);
export const trampolineRopeDecision = getHomeCardioDecision(["dh-fitlife-studsmatta", "portentum-hopprep"]);
