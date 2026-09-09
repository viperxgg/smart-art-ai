import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const jojobaDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "kanzy-jojobaolja", model: "Kanzy Jojoba Oil 120 ml",
    variant: "120 ml av den separata jojobaoljan, inte ett serum eller ett kombinationspaket. Kanzy listar även 30 och 50 ml. Den aktuella svenska förpackningen och butikens variant är inte matchade.",
    chooseIf: "du vill pröva en separat olja för hud eller hår och har en tydlig uppgift för den i din rutin. Kanzy anger kallpressad jojobaolja som ingrediens och några droppar direkt på hud eller hår som användning.",
    avoidIf: "du behöver ett belagt resultat för just din hudtyp, vill ersätta flera fungerande produkter eller kräver verifierad ekologisk certifiering. Vårt underlag räcker inte för sådana slutsatser.",
    sourceIds: ["J1"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Du kan identifiera en konkret skillnad du behöver, till exempel ett lämpligare flaskformat eller dokumenterad kvalitet som går att kontrollera. Vi har inte jämfört oljor, certifieringar eller pris per användning och kan inte kalla Kanzy mer prisvärd än alternativen.",
  noPurchaseWhen: "Det du redan använder för hud eller hår fungerar och du inte kan säga vilken uppgift en extra olja skulle fylla. Ett långt användningsområde på etiketten är inget skäl att köpa fler steg.",
  swedishContext: "Matcha namn, 120 ml, innehåll och anvisningar mot förpackningen hos den aktuella säljaren. Den brittiska sidan bekräftar inte en svensk leverans eller dess totalpris. Kontrollera mängden innan du jämför pris per milliliter.",
  testing: "Vi har läst Kanzys brittiska produktsida. Vi har inte provat oljan, analyserat renhet eller kontrollerat certifikat. Vi har inte belägg för snabb absorption, en icke-fet känsla eller att oljan passar alla hudtyper.",
  limitations: "Produktnamnet och en kort ingrediensbeskrivning ersätter inte kontroll av den faktiska flaskans etikett. Påståenden om smärtlindring, hårväxt och garanterat resultat återges inte som rekommendationer. Bildrättigheter och butiksmatchning återstår.",
  sources: [{ id: "J1", title: "Kanzy UK – Jojoba Oil", url: "https://kanzy.co.uk/product/jojoba-oil/", checkedAt: "2026-09-09", supports: "Storlekarna 30, 50 och 120 ml; kallpressad jojobaolja anges som ingrediens; några droppar på hud eller hår. Tillverkarinformation, inte oberoende effektprov eller svensk butiksmatchning." }],
};
export const jojobaGuide: DecisionGuide = {
  path: "/guider/jojobaolja-multitalang",
  title: "Jojobaolja – vilken uppgift ska den fylla?",
  intro: "Börja med vad din rutin saknar. Kanzy är ett exempel på en separat olja; vi har inte visat att den kan ersätta flera produkter eller att den är bättre värde än det du redan har.",
  decision: jojobaDecision,
  productPaths: ["/skonhet/jojobaolja"],
  questions: [
    { question: "Kan den ersätta flera produkter?", answer: "Det har vi inte testat. Bestäm först vilken uppgift du vill lösa och vad som redan fungerar. Att tillverkaren nämner flera användningar bevisar inte att oljan motsvarar alla produkter i din rutin." },
    { question: "Passar den säkert fet eller känslig hud?", answer: "Det kan vi inte lova. Vi har inget produkttest för din hudtyp och använder inte ett kundomdöme eller tillverkarens beskrivning som en garanti." },
    { question: "Är ekologisk och hexanfri verifierat?", answer: "Nej. Den granskade brittiska sidan anger kallpressad jojobaolja, men vi har inte kontrollerat ett ekologiskt certifikat eller en analys av den aktuella flaskan. Sådana uppgifter är inte verifierade här." },
  ],
  related: [{ href: "/skonhet/jojobaolja", text: "Granska Kanzy-varianten" }, { href: "/skonhet", text: "Fler val inom skönhet" }],
};
