import type { DecisionRecord } from "@/lib/decision-record";
export const beardOilDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "loreal-skaggolja", model: "L’Oréal Men Expert Barber Club Long Beard & Skin Oil",
    variant: "Oljan för längre skägg, inte Short Beard Moisturizer eller stylingkräm. UK-sidan visar 30 ml; aktuell svensk butiksflaska och formula är inte matchade.",
    chooseIf: "du vill lägga till en olja för att mjukgöra och forma ett längre skägg, och den aktuella ingredienslistan passar dina preferenser. Det är produktens avsedda användning, inte ett eget testresultat.",
    avoidIf: "du söker en verifierat parfymfri produkt eller ett medel för skäggtillväxt. UK-listan innehåller parfym och eteriska oljor; vi har inget underlag för ökad hårväxt eller garanterad hudkomfort.",
    sourceIds: ["B1", "B2"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Du har ett konkret behov av annan doft, formula eller applicering och kan kontrollera att alternativet motsvarar det. Vi har inte jämfört denna olja med en dyrare produkt eller räknat kostnad per användning.",
  noPurchaseWhen: "Skägget känns och fungerar som du vill med din nuvarande rutin. Du behöver inte lägga till en separat skäggolja bara för att komplettera en produktserie.",
  swedishContext: "Den svenska tillverkarsidan hänvisar till ingredienslistan på den köpta förpackningen. Läs den före köp; en brittisk lista bevisar inte samma formula i ett aktuellt svenskt erbjudande. Volym, pris och säljare behöver matchas.",
  testing: "Vi har granskat tillverkarens svenska användningsråd och brittiska produktuppgifter. Ingen egen bedömning av doft, oljighet, mjukhet eller hudreaktion har utförts. Formuleringen utan oljig känsla är tillverkarens påstående och inte vårt resultat.",
  limitations: "Tillverkaren anger 2–3 droppar efter skägglängd, fördelning i skägg och huden under samt att ögonområdet undviks. UK-listan anger bland annat Alcohol Denat., Parfum och cederträolja. Full svensk förpackningslista, bildrättigheter och butiksmatchning återstår.",
  sources: [
    { id: "B1", title: "L’Oréal Paris Sverige – Beard Oil Long Beard", url: "https://www.lorealparis.se/barber-club/beard-oil-long-beard", checkedAt: "2026-09-09", supports: "Avsedd användning, applicering och undvikande av ögonområdet. Sidan visar ingen fullständig INCI-lista i det lästa innehållet." },
    { id: "B2", title: "L’Oréal Paris UK – Long Beard & Skin Oil", url: "https://www.loreal-paris.co.uk/barber-club/barber-club-long-beard-skin-oil", checkedAt: "2026-09-09", supports: "UK-variant 30 ml och publicerad ingredienslista med parfym, denaturerad alkohol och eteriska oljor. Listan kan ändras och verifierar inte svensk leverans." },
  ],
};
