import type { DecisionRecord } from "@/lib/decision-record";
export const hairClipperDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "remington-harklippare", model: "Remington ColourCut HC5035",
    variant: "HC5035 med sladd och nio färgkodade distanskammar. Butikens kontakt och aktuella paketinnehåll är inte matchade.",
    chooseIf: "du vill klippa huvudhår hemma med fasta kamlängder och kan arbeta nära ett eluttag. Kammarna är 1,5, 3, 6, 9, 12, 16, 18, 22 och 25 mm; spakens 0,5–2 mm gäller en annan inställning än dessa kamlängder.",
    avoidIf: "du behöver sladdlös användning, en maskin som kan sköljas eller en kam längre än 25 mm. Hemmaklippning kräver egen teknik; antalet kammar garanterar inte en viss frisyr eller ett jämnt resultat.",
    sourceIds: ["H1", "H2"], merchantVariantVerified: false,
  }],
  payMoreWhen: "En annan modell har en verifierad funktion du faktiskt behöver, exempelvis sladdlös drift eller annan kamlängd. Vi har inte jämfört en sådan modell här. Fler tillbehör är inte i sig ett skäl att byta en fungerande klippare.",
  noPurchaseWhen: "Klippare och kammar du redan har klarar din frisyr, eller du föredrar att låta någon annan klippa håret. Vi har inte räknat ut någon besparing mot frisörbesök.",
  swedishContext: "En svensk manual finns. Kontrollera HC5035, kontakt, märkspänning och kamuppsättning i den faktiska leveransen. En brittisk produktförpackning kan inte antas ha svensk kontakt. Aktuellt totalpris är inte verifierat.",
  testing: "Tillverkarens svenska produktsida och den länkade internationella manualen har granskats. Ingen egen klippning, ljudmätning eller bedömning av hållbarhet och kostnadsbesparing har genomförts.",
  limitations: "Den svenska manualen anger avstängning och urkoppling före rengöring, borstning utan vatten på bladsetet och oljning efter rengöring. Detta väger tyngre än produktsidans formulering om att tvätta bort smuts. Läs hela manualen. Bildrättigheter och aktuellt butikspaket återstår.",
  sources: [
    { id: "H1", title: "Remington Sverige – ColourCut HC5035", url: "https://se.remington-europe.com/produkter/hc5035-colourcut-hair-clipper", checkedAt: "2026-09-09", supports: "Modell, sladd, nio kammar och separat detaljinställning. Sidans rengöringsformulering används inte före manualens instruktion." },
    { id: "H2", title: "Remington – HC5035, svensk manual s. 31–35", url: "https://cdn-img.remington-europe.com/manager/remington-europe_com/User%20Manuals/hc5035_int.pdf", checkedAt: "2026-09-09", supports: "Kamlängder och spakens separata inställning; säker användning och torr borstning av bladsetet. Inget eget prestandatest." },
  ],
};
