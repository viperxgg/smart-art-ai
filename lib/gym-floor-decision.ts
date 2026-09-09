import type { DecisionRecord } from "@/lib/decision-record";

export const gymFloorDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "bemaxx-pusselmatta", model: "bemaxx EVA golvskydd – 18 delar, 1 cm",
    variant: "Tillverkarens vanliga EVA-set, inte AntislipX eller korkvarianten. Angivet plattmått 32 × 32 × 1 cm; kantdelar ingår och monterad yta cirka 182 × 92 cm, 1,67 m². Katalogens ASIN B019DZDM3O är inte matchat mot aktuellt svenskt erbjudande.",
    chooseIf: "du behöver ett flyttbart underlag för en avgränsad träningsyta eller mindre utrustning och kan kontrollera att underlaget fungerar med både golvet och utrustningens instruktioner.",
    avoidIf: "köpet bygger på ett löfte om tysta hopp för grannarna, säker golvskyddseffekt vid tappade vikter eller att vilken tung maskin som helst kan stå stabilt på skummet. Sådana resultat är inte verifierade här.",
    sourceIds: ["G1", "G2"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Ett annat underlag har dokumenterad lämplighet för just din utrustning, punktbelastning eller önskade ljuddämpning. Materialnamn och tjocklek räcker inte som bevis. Vi anger ingen generell säker gummitjocklek för att släppa en viss vikt.",
  noPurchaseWhen: "Du redan har ett underlag som fungerar med golvet och den aktivitet du utför. Köp inte ett extra set enbart för att fylla ett helt rum när en mindre, rätt placerad yta räcker.",
  swedishContext: "Mät den färdiga ytan i centimeter och kontrollera dörröppning samt utrustningens krav på plant och stabilt underlag. Planera efter monterade mått, inte 18 gånger plattans yttermått. För ljud mot grannar behöver du bedöma den faktiska aktiviteten och bostaden; vi har inget ljudprov i en svensk lägenhet.",
  testing: "Vi har läst tillverkarens produktsida och en bemaxx-märkt flerspråkig bruksanvisning. Vi har inte provat glidning, tryckmärken, lukt, golvmaterial eller ljudnivå och har inte granskat en fullständig kemisk analys. Tillverkarens testvinnarpåstående är inte vår bedömning.",
  limitations: "Bruksanvisningen beskriver träning och mindre utrustning, vädring före första användningen och avtorkning med fuktig trasa. Den anger ingen belastningsgräns eller ljudreduktion i decibel. Den är generell för bemaxx pusselmattor och verifierar inte det enskilda paketet. Bildrättigheter, aktuellt pris och butiksmatchning återstår.",
  sources: [
    { id: "G1", title: "bemaxx – EVA-set med 18 golvskyddsplattor", url: "https://be-maxx.com/products/schutzmatten-eva-30x30", checkedAt: "2026-09-09", supports: "Material, antal, tjocklek och monterade mått. Sidans reklam om ljud och tunga vikter används inte som bevis för en belastnings- eller ljudgaranti." },
    { id: "G2", title: "bemaxx – bruksanvisning för pusselmattor", url: "https://m.media-amazon.com/images/I/51hTlp-kCgL.pdf", checkedAt: "2026-09-09", supports: "Allmän användning och rengöring i en bemaxx-märkt PDF. Engelska och svenska avsnitten anger träning och mindre utrustning; inget exakt modellnummer eller kvantifierat belastningsprov." },
  ],
};
