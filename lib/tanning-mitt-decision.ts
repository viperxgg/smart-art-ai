import type { DecisionRecord } from "@/lib/decision-record";

export const tanningMittDecision: DecisionRecord = {
  reviewedAt: "2026-09-08",
  options: [{
    productSlug: "bondi-sands-vante",
    model: "Bondi Sands Self Tan Application Mitt",
    variant: "Tillverkarens fristående Application Mitt, inte Back Applicator, exfolieringsvante eller paket med mousse. Katalogens ASIN B019HR6JUQ är inte matchad mot aktuell svensk butiksvariant.",
    chooseIf: "du saknar en lämplig appliceringsvante för din Bondi Sands-rutin och kan skölja och lufttorka den efter användning. Tillverkaren beskriver vanten som tvättbar och återanvändbar.",
    avoidIf: "du redan har en fungerande vante, söker en exfolieringsprodukt eller förväntar dig en garanti mot ränder och fläckar. Vi har inte testat fördelningen av färg eller hur tätt vanten skyddar handen.",
    sourceIds: ["G1"], merchantVariantVerified: false,
  }],
  payMoreWhen: "En verifierad skillnad i passform eller användning löser ett problem med det du har. Vi har inte jämfört denna vante med billigare alternativ, räknat antalet användningar eller verifierat aktuella totalpriser.",
  noPurchaseWhen: "Du redan har en ren, hel appliceringsvante som fungerar med din produkt. Kontrollera också om en lämplig vante redan ingår i paketet du planerar att köpa.",
  swedishContext: "Källan är brittisk och gäller den separata vanten. Kontrollera antal och tillbehör i det svenska erbjudandet, och lägg frakten till jämförelsen. Mått och material är inte verifierade i vårt underlag.",
  testing: "Vi har läst tillverkarens användnings- och skötselråd. Vi har inte provat passform, färggenomsläpp, sömmarnas hållbarhet eller applicering med olika märken.",
  limitations: "Tillverkaren anger varmt vatten och lufttorkning före förvaring. Vi har inget underlag för maskintvätt, en viss livslängd eller garanterat fläckfritt resultat. Bildrättigheter och exakt butiksvariant återstår.",
  sources: [{ id: "G1", title: "Bondi Sands UK – Application Mitt", url: "https://bondisands.co.uk/products/application-mitt", checkedAt: "2026-09-08", supports: "Fristående appliceringsvante, återanvändbar och tvättbar; tillverkarens steg anger sköljning med varmt vatten och lufttorkning. Produktlöften om fläckfrihet är inte ett dokumenterat jämförande test." }],
};
