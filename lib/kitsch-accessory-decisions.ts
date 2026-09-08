import type { DecisionRecord } from "@/lib/decision-record";

export const clawClipDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "kitsch-claw-clips", model: "Kitsch Black & Tort Classic Claw Clips, Jumbo, 2-pack",
    variant: "Classic Jumbo i svart och sköldpaddsmönster, inte Large Loop, Oversized Matte eller en ensam Black Marble-klämma. Märket anger 14 × 6 × 4,5 cm per klämma. ASIN B09GYPV213 är inte matchad mot svensk butiksvara.",
    chooseIf: "du behöver en stor klämma för den hårmängd du vill samla och måtten verkar rimliga jämfört med en klämma du redan känner. Märket anger två klämmor och beskriver att de öppnas med sidogreppen och stängs runt samlat hår.",
    avoidIf: "du behöver en liten klämma för en tunn hårsektion eller förväntar dig säkert grepp hela dagen. Storleken är verifierad som tillverkaruppgift, men vi har inte provat grepp eller komfort på olika hårtyper.",
    sourceIds: ["K1"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Rätt storlek och form löser ett faktiskt problem med din nuvarande klämma. Vi har inte mätt fjäderstyrka, livslängd eller prisvärde mot billigare alternativ.",
  noPurchaseWhen: "En befintlig hel klämma håller din frisyr bekvämt. Tvåpack ger inte extra nytta om du bara behöver den du redan har.",
  swedishContext: "Källan är märkets internationella sida. Kontrollera modell, färger, antal och mått i det svenska erbjudandet, samt frakt och totalpris. Lager och bildrättigheter är inte verifierade.",
  testing: "Vi har läst produktmått, materialuppgift och instruktion, inte testat klämman på håret. Tillverkarens löften om att undvika glidning, trassel och hårbrott är inte våra observationer.",
  limitations: "Märket anger återvunnen plast men ingen andel i den lästa materialspecifikationen. Vi drar ingen slutsats om klimatfördel, full återvinningsbarhet eller hårskydd enbart från den uppgiften.",
  sources: [{ id: "K1", title: "Kitsch – Classic Claw Clips 2pc, Jumbo", url: "https://www.mykitsch.com/products/jumbo-classic-claw-clips-2pc", checkedAt: "2026-09-09", supports: "Två färger, antal, mått per klämma, materialbeskrivning och öppning/stängning. Ingen oberoende grepp-, hållbarhets- eller miljöjämförelse." }],
};

export const hairTowelDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "microfiberhandduk-har", model: "Kitsch Microfiber Hair Towel",
    variant: "Den lästa produktsidan gäller Black, med elastisk kant. Den skiljer sig från märkets Organic Bamboo Hair Towel. Katalogens färg och ASIN B07XBTWPVP är inte matchade mot en aktuell förpackning.",
    chooseIf: "du vill samla vått hår i en särskild hårhandduk och din vanliga handduk inte sitter som du önskar. Den elastiska kanten är en konkret konstruktionsskillnad att kontrollera före köp; passformen är inte testad här.",
    avoidIf: "du köper den för garanterat halverad torktid, en viss fibermix eller dokumenterad biologisk nedbrytbarhet. Den lästa materialspecifikationen säger bara mikrofiber; vi har inte underlag som verifierar de bredare löftena.",
    sourceIds: ["K2"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Handdukens form och fäste fungerar bättre för din rutin än det du har. Vi har inte jämfört absorption, torktid eller tvättbeständighet och kan inte räkna hem ett högre pris genom utlovade sparade minuter.",
  noPurchaseWhen: "Din befintliga handduk fungerar för att samla och torka håret. Ett nytt materialnamn är inte i sig skäl att byta.",
  swedishContext: "Den granskade sidan är internationell. Kontrollera färg, mått, fiberinnehåll och tvättetikett på den svenska varan; aktuellt pris, frakt och lager är inte verifierade.",
  testing: "Vi har granskat produktbeskrivningen, inte provat passform, torktid, friss eller hårbrott. Märkets kundomdömen och resultatlöften behandlas inte som egna tester.",
  limitations: "Exakta mått, fibersammansättning i procent och tvättemperatur är inte verifierade i underlaget. Vi föreskriver därför inget tvättprogram eller tidslöfte. Bildrättigheter och fullständig variantmatchning återstår.",
  sources: [{ id: "K2", title: "Kitsch – Microfiber Hair Towel, Black", url: "https://www.mykitsch.com/products/eco-friendly-hair-towel-black", checkedAt: "2026-09-09", supports: "Svart mikrofibervariant och elastisk kant. Materialet anges utan fiberprocent; halverad torktid, mindre hårbrott och full nedbrytbarhet är marknadsföringspåståenden som inte verifierats här." }],
};
