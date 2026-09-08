import type { DecisionRecord } from "@/lib/decision-record";

export const denmanDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "denman-d3-borste", model: "Denman D3 Original Styler, 7 rader",
    variant: "Tillverkarens aktuella sida kallar den D3 The Original Curl Definer & Styler. Sju rader, inte D4 med nio rader eller D14 Mini. Färg och ASIN B00197623M är inte matchade mot en aktuell svensk butiksvara.",
    chooseIf: "du vill arbeta med lockdefinition i vått hår eller precisionsstyling vid föning, de användningar Denman anger. Märket beskriver sjuradersstorleken för medellångt hår. Det är ett användningsområde att utvärdera, inte ett löfte om ett visst resultat.",
    avoidIf: "du bara vill ersätta en fungerande utredningsborste eller förväntar dig färdiga lockar utan att ändra arbetssätt. Vi har inte visat att D3 reder ut bättre, gör mindre ont eller ger samma resultat på olika hårtyper.",
    sourceIds: ["D1"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Du saknar just ett verktyg för din stylingteknik och kan förklara vad din nuvarande borste inte klarar. Vi har ingen jämförelse som visar att ett dyrare mönster eller en Deluxe-variant ger bättre styling; betala inte extra för ett resultat som inte är dokumenterat.",
  noPurchaseWhen: "Din nuvarande borste, kam eller fingerstyling redan ger den frisyr du vill ha. En särskild stylingborste är inte ett obligatoriskt extra steg för alla med lockigt hår.",
  swedishContext: "Källan är brittisk. Kontrollera D3, sju rader, färg och svensk säljares totalpris och villkor. Sidans brittiska frakt- och returuppgifter har inte verifierats för ett svenskt köp.",
  testing: "Vi har läst tillverkarens modell- och användningsbeskrivning. Vi har inte provat lockdefinition, grepp, drag i håret, rengöring eller hållbarhet och använder inget eget testbetyg.",
  limitations: "Tillverkaren anger att dyna och piggar kan tas loss för rengöring. Underlaget här fastställer ingen temperaturgräns för föning, rengöringstemperatur eller optimal ändring av antalet rader. Följ instruktionen för din borste; vi ger inget generellt råd att plocka bort rader. Bildrättigheter och butiksmatchning återstår.",
  sources: [{ id: "D1", title: "Denman – D3 The Original Curl Definer & Styler", url: "https://denmanbrush.com/products/d3-original-styler-7-row", checkedAt: "2026-09-09", supports: "Sju rader, angivet användningsområde för medellångt hår, våt lockdefinition och föning/precisionsstyling. Löstagbar dyna och piggar för rengöring. Ingen egen observation eller jämförelse mot en utredningsborste." }],
};
