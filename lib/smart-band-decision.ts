import type { DecisionRecord } from "@/lib/decision-record";

export const smartBandDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "xiaomi-smart-band-10", model: "Xiaomi Smart Band 10 – standardmodell",
    variant: "Standardmodellen med aluminiumram och TPU-armband, inte Ceramic Edition, Glimmer Edition eller en Pro-modell. Katalogens ASIN B0DYF82545 är inte matchat mot aktuellt svenskt handelspaket.",
    chooseIf: "du vill se aktivitetsdata, timer och aviseringar på handleden och accepterar att använda Mi Fitness och ta med telefonen för ruttregistrering.",
    avoidIf: "du vill registrera löprundan med GPS utan telefon, behöver medicinskt tillförlitliga mätningar eller förväntar dig samma telefonfunktioner på alla mobiler. Bandet har ingen egen GPS.",
    sourceIds: ["B1", "B2", "B3"], merchantVariantVerified: false,
  }],
  payMoreWhen: "En dyrare enhet har en verifierad funktion du faktiskt saknar, exempelvis egen GPS om du vill lämna telefonen hemma. Ett finare armband eller fler träningslägen bevisar inte bättre mätprecision. Vi har inte jämfört aktuella priser eller testat en dyrare modell.",
  noPurchaseWhen: "Telefonen eller aktivitetsbandet du redan har ger den översikt du använder. Prova att anteckna dina pass först om du ännu inte vet vad du vill följa. Ett nytt band behövs inte för att börja röra på sig.",
  swedishContext: "Xiaomis svenska specifikation anger Android 8.0 eller iOS 14.0 och senare samt Mi Fitness. Kontrollera att appen går att installera på din egen telefon. Snabbsvar på samtal med meddelande är Android-specifikt; kalendersynk anges för Xiaomi/Redmi och iOS. Smart Hub kräver kompatibel Xiaomi-enhet. Standardarmbandets angivna handledsomkrets är 135–210 mm; prova passformen om möjligt.",
  testing: "Vi har läst Xiaomis svenska produktinformation och support om GPS. Vi har inte provat parkoppling, appbehörigheter, komfort, puls, sömn, distans eller batteritid. Inga kundcitat eller egna testpoäng används som bevis.",
  limitations: "21 dagars batteritid är ett tillverkartest med flera övervakningsfunktioner avstängda; Xiaomi anger även 9 dagar med alltid tänd skärm och 8 vid hög belastning. Resultaten är inte våra mätningar. 5 ATM innebär inte att bandet är avsett för dykning eller bastu. Aktuellt paket, totalpris, bildrättigheter och funktioner på din telefon återstår att kontrollera.",
  sources: [
    { id: "B1", title: "Xiaomi Sverige – Smart Band 10 specifikationer", url: "https://www.mi.com/se/product/xiaomi-smart-band-10/specs/", checkedAt: "2026-09-09", supports: "Standardmodellens material, handledsmått, svensk systemkompatibilitet och begränsningar för vattenanvändning. Inget verifierat Amazon-erbjudande." },
    { id: "B2", title: "Xiaomi – varför GPS kräver telefonen", url: "https://www.mi.com/global/support/faq/details/KA-592780/", checkedAt: "2026-09-09", supports: "Ingen oberoende GPS-modul. Ruttdata kräver ansluten telefon, dess positionstjänster och appbehörigheter; utan detta kan distans och tempo bli missvisande." },
    { id: "B3", title: "Xiaomi Sverige – funktioner och testvillkor", url: "https://www.mi.com/se/product/xiaomi-smart-band-10/", checkedAt: "2026-09-09", supports: "Skillnader mellan telefonplattformar, villkor för batterisiffror och tillverkarens besked att funktionerna inte är avsedda för medicinska ändamål." },
  ],
};
