import type { SelectedProduct } from "@/lib/selected-products";

type TradeoffSelection = {
  advantageFacts: string[];
  limitationExcerpts: string[];
};

// Select existing specification rows and verbatim excerpts from the sourced
// decision answers. This is a reading aid, not a second factual product record.
const selections: Record<string, TradeoffSelection> = {
  "wanbo-cube-2-pro": {
    advantageFacts: ["Inställning", "Ljud och wifi"],
    limitationExcerpts: [
      "Det är tillverkarens uppgift, inte vår verifiering av en Netflix-certifiering för C2P-W i Sverige.",
      "Kjells förpackning innehåller strömkabel och modellen ska planeras för eluttag, inte en batteridriven filmkväll utomhus.",
    ],
  },
  "plexgear-cv200": {
    advantageFacts: [],
    limitationExcerpts: [
      "Kjell undantar uttryckligen Netflix och Viaplay från den trådlösa speglingen och hänvisar till HDMI.",
      "En 1920 × 1080-signal skalas ned; den skapar inte fler fysiska bildpunkter.",
    ],
  },
  "kobo-clara-colour": {
    advantageFacts: ["Upplösning", "Tålighet"],
    limitationExcerpts: [
      "Vi har inte jämfört upplevd kontrast eller läsbarhet sida vid sida.",
      "Biblio beskriver appen för Android-enheter och export via Adobe Digital Editions bara när biblioteket aktiverat funktionen.",
    ],
  },
  "nothing-ear-3a": {
    advantageFacts: ["Kodek", "Anslutning"],
    limitationExcerpts: [
      "LDAC kräver en sändare som stöder kodeken. Räkna med kompatibel Android för den funktionen, inte iPhone; vanlig Bluetooth-lyssning är fortfarande möjlig.",
      "Vi saknar en jämförbar egen mätning och utser därför ingen ANC-vinnare utifrån siffran.",
    ],
  },
  "reolink-w330": {
    advantageFacts: ["Lagring", "Tålighet"],
    limitationExcerpts: [
      "W330 använder 12 V nätadapter; wifi betyder inte batteridrift.",
      "Minneskort köps separat.",
    ],
  },
  "lyko-core-styler": {
    advantageFacts: ["Munstycken", "Inställningar"],
    limitationExcerpts: [
      "Tillverkarens butikssida ger inget verifierbart längdkrav.",
      "Vi har inte mätt torktid.",
    ],
  },
  "lyko-infrared-blowout": {
    advantageFacts: ["Lägen", "Sladd"],
    limitationExcerpts: [
      "Butikens egen produktanvisning rekommenderar handdukstorkning och, för tjockt eller långt hår, fön till cirka 80 procent torrt.",
      "Vi har inte hittat ett oberoende underlag som visar mindre slitage för denna modell.",
    ],
  },
  "ghd-rise": {
    advantageFacts: ["Borstdiameter", "Sladd"],
    limitationExcerpts: [
      "Borsten värmer håret direkt men blåser inte luft genom det.",
      "Fast temperatur förenklar valet men tar bort möjligheten att välja en lägre nivå.",
    ],
  },
  "olaplex-no3-plus": {
    advantageFacts: [],
    limitationExcerpts: [
      "Plus sköljs ur före schampo.",
      "Gamla No.3 och Plus ska inte få varandras verkningstider i en köpguide.",
    ],
  },
  "redken-abc-pre-treatment": {
    advantageFacts: [],
    limitationExcerpts: [
      "Denna förbehandling ska alltså inte ligga kvar som Leave-In.",
      "Den granskade tillverkarsidan beskriver användning när en intensiv förbehandling behövs, utan ett fast veckoschema.",
    ],
  },
  "ghd-original-iv": {
    advantageFacts: ["Automatisk avstängning", "Garanti"],
    limitationExcerpts: [
      "Du behöver inte välja nivå på ghd men kan inte heller sänka den.",
      "ghd anger 24 mm plattbredd och automatisk avstängning efter 30 minuters inaktivitet. Funktionen ersätter inte att stänga av och dra ur kontakten efter användning.",
    ],
  },
  "remington-s5901": {
    advantageFacts: ["Värme", "Avstängning"],
    limitationExcerpts: [
      "Vi har inte bekräftat märkets frisspåståenden med ett eget test.",
      "Att verktyget kan nå 230 °C betyder inte att du ska använda maxläget.",
    ],
  },
  "babyliss-big-hair-dual": {
    advantageFacts: ["Huvuden", "Rotation"],
    limitationExcerpts: [
      "Tillverkarens manual anger omkring 80 procent torrt och genomrett hår före styling.",
      "Jonfunktionen beskrivs av butiken, men vi har inte testat någon effekt på friss.",
    ],
  },
  "remington-as5901": {
    advantageFacts: ["Borsthuvuden"],
    limitationExcerpts: [
      "Remington rekommenderar förtorkning tills håret är cirka 70–80 procent torrt.",
      "Vi har inte mätt luftflöde eller torktid och kan därför inte lova snabbast torkning.",
    ],
  },
};

export function getProductTradeoffs(product: SelectedProduct) {
  const selection = product.tradeoffs ?? selections[product.id];
  if (!selection) return { advantages: [], limitations: [] };
  const sourcedSections = (product.decisionSections ?? []).filter(section =>
    section.sourceUrls.some(url => product.sources.some(source => source.url === url)),
  );
  const advantages = selection.advantageFacts.flatMap(label => {
    const fact = product.facts.find(([name]) => name === label);
    return fact ? [`${fact[0]}: ${fact[1]}`] : [];
  });
  const limitations = selection.limitationExcerpts.filter(excerpt =>
    sourcedSections.some(section => section.answer.includes(excerpt)),
  );
  // A side with fewer than two existing facts is intentionally omitted.
  return {
    advantages: advantages.length >= 2 ? advantages.slice(0, 4) : [],
    limitations: limitations.length >= 2 ? limitations.slice(0, 4) : [],
  };
}
