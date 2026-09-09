import type { DecisionRecord } from "@/lib/decision-record";

export const sunsetLightDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "solnedgangslampa", model: "Aniepaa USB-solnedgångslampa – B09P8HS8CK",
    variant: "Länkad variant med 24 fasta färger och fyra dynamiska lägen, inklusive blinkläge. Säljaren anger 1,2 m USB-kabel, två stativdelar och två fjärrkontroller. Lamphuvudet kan riktas 180 grader. Nätadapter och fullständig manual är inte verifierade.",
    chooseIf: "du vill rikta en färgad ljusyta mot väggen eller använda den som dekorativ bakgrund och kan placera lampan nära en lämplig strömkälla. Välj fast färg om du inte vill ha växlande ljus.",
    avoidIf: "du behöver läsljus, en ljusväckarklocka eller dokumenterad ljusexponering. Färgval och ordet solnedgång är inte bevis för en sömnfunktion eller ett alarm.",
    sourceIds: ["S2"], merchantVariantVerified: true,
  }],
  payMoreWhen: "Riktbart huvud, färgval eller fjärrkontroll är funktioner du faktiskt vill använda. Betala inte extra för en viral etikett eller obestyrkta löften om bättre sömn. Vi har inte jämfört dagens pris eller färgåtergivning.",
  noPurchaseWhen: "Din befintliga belysning redan ger det ljus du vill ha. En särskild kvällslampa är inte ett obligatoriskt komplement till en väckarklocka.",
  swedishContext: "Kontrollera USB-strömkrav och om du behöver en separat lämplig adapter för svenska uttag. USB-kabel i paketet bekräftar inte att nätadapter ingår. Kontrollera också kabelräckvidd och placering mot den yta du vill lysa upp.",
  testing: "Vi har läst den länkade Amazon.se-listningen och matchat ASIN och märket Aniepaa. Vi har inte provat fjärrkontroll, flimmer, temperatur, färgåtergivning eller elektrisk installation. Ingen sömneffekt har testats.",
  limitations: "Paketuppgifter och reglage är säljaruppgifter, inte egna tester. USB-strömkrav, adapter och fullständig manual återstår att verifiera. Vi använder inte påståenden om bländfrihet eller allmän barnsäkerhet som fakta. Godkända produktbilder saknas.",
  sources: [{ id: "S2", title: "Amazon.se – Aniepaa USB-lampa, läsbar variant", url: "https://www.amazon.se/dp/B09P8HS8CK", checkedAt: "2026-09-09", supports: "Länkad Aniepaa-variant, 24 fasta färger, fyra dynamiska lägen, USB-kabel, två stativdelar och två fjärrkontroller. Ingen verifierad nätadapter, väckningsfunktion eller sömneffekt." }],
};
