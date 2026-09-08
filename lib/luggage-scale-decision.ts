import type { DecisionRecord } from "@/lib/decision-record";

export const luggageScaleDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "grifema-bagagevag",
    model: "GRIFEMA GA2006 digital bagagevåg",
    variant: "GA2006 i ntv:s tyska test. Artikelns namn är inte en verifierad koppling till vår svenska kataloglänk, ASIN B0F3HP95V8. Tillverkarmanual, maxkapacitet och innehåll i det svenska erbjudandet återstår att kontrollera.",
    chooseIf: "du behöver väga packningen även inför hemresan och vill undersöka en modell där ett publicerat test beskriver belyst display och kvarhållen avläsning. Bekräfta först den exakta butiksvarianten; vi har inte själva provat den.",
    avoidIf: "du vill packa exakt till viktgränsen eller behöver garanterad precision. I ntv:s upprepade vägningar varierade resultaten inom respektive väska med upp till 200 gram. Det är inte en angiven maximal felvisning för alla exemplar.",
    sourceIds: ["L1"],
    merchantVariantVerified: false,
  }],
  payMoreWhen: "Det finns dokumentation eller ett relevant test som visar den egenskap du saknar. Varken fler decimaler, högre kapacitet eller en prislapp bevisar noggrannhet. Vi har inte verifierat svenska totalpriser eller utsett ett mest prisvärt köp.",
  noPurchaseWhen: "Du redan har tillgång till en lämplig våg före ut- och hemresa och inte behöver en separat resvåg. Kontrollera bokningens bagagevillkor innan du köper något för att undvika en avgift.",
  swedishContext: "SAS och Norwegian beskriver regler som beror på biljetten samt både vikt- och storleksgränser. Kontrollera din egen bokning och eventuell sammanlagd vikt; en våg kontrollerar inte mått eller att bagaget ingår. Svenskt lager, variant, pris och frakt är inte verifierade.",
  testing: "Vi har inte gjort ett eget test. Nikolai Henns ntv-artikel från 30 juli 2026 beskriver tre vägningar av vardera två väskor med varje modell, jämförda med en Kern CH 50K50. För GA2006 rapporteras spridning mellan upprepade avläsningar och en lägre avläsning än referensen för den tyngre väskan. Detta är artikelns observationer, inte vår kvalitetskontroll.",
  limitations: "Testet styrker inte livslängd, precision över hela mätområdet eller att dagens svenska leverans är identisk. Tillverkarinstruktioner, batteri i leveransen, bildrättigheter och butiksmatchning återstår. Inga betyg, avgiftsbesparingar eller säkerhetsmarginaler garanteras.",
  sources: [
    { id: "L1", title: "ntv – fem digitala bagagevågar, originaltest av Nikolai Henn", url: "https://www.n-tv.de/produkt-check/sport-freizeit/Fuenf-digitale-Kofferwaagen-im-Test-Welche-wiegt-am-genauesten-id31117011.html", checkedAt: "2026-09-09", supports: "Publicerat 2026-07-30. Beskriver testmetod och GA2006-exemplarets display, Hold-funktion och varierande avläsningar. Redaktionellt test med affiliatelänkar, inte tillverkarmanual, svensk butikskontroll eller vårt eget test. Vi övertar inte dess prisutmärkelse." },
    { id: "L2", title: "SAS – handbagage", url: "https://www.sas.se/reseinfo/bagage/handbagage", checkedAt: "2026-09-09", supports: "Bagagevillkor och kontroll av vikt och mått. Ingen källa till vågens specifikationer." },
    { id: "L3", title: "Norwegian – handbagage", url: "https://www.norwegian.com/se/handbagage/", checkedAt: "2026-09-09", supports: "Biljettyper, storleksgränser och kombinerad handbagagevikt. Ingen bedömning av GA2006." },
  ],
};
