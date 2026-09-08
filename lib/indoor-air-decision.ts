import type { DecisionRecord } from "@/lib/decision-record";

export const indoorAirDecision: DecisionRecord = {
  reviewedAt: "2026-09-08",
  options: [
    {
      productSlug: "levoit-luftfuktare",
      model: "Levoit Classic 300S, 6 liter",
      variant: "Ultraljudsluftfuktare enligt EU-manualen: 220–240V, 50/60Hz. Inte den amerikanska 120V-versionen. Butikens levererade variant och stickkontakt är inte matchade.",
      chooseIf: "du har kontrollerat luftfuktigheten och har ett faktiskt behov av mer fukt, samt kan sköta vattenbyte, rengöring och uppföljning. Sexlitersbehållaren är en kapacitet, inte ett skäl att köra utan tillsyn av fuktnivån.",
      avoidIf: "det redan finns kondens, fukt eller mögelproblem, eller om du inte vill sköta vattentanken. Ultraljudsfuktare kan sprida mineraler och mikroorganismer från vattnet; mer fukt är inte alltid bättre.",
      sourceIds: ["A1", "A3"], merchantVariantVerified: false,
    },
    {
      productSlug: "levoit-core-200s-luftrenare",
      model: "Levoit Core 200S",
      variant: "Core 200S med utbytesfilter Core 200S-RF enligt Levoits brittiska sida. Inte automatiskt samma variant som Core 200S-P. Svensk butiksversion, stickkontakt och aktuellt filterutbud återstår att matcha.",
      chooseIf: "du vill komplettera fungerande ventilation och minskade föroreningskällor med partikelfiltrering i ett rum. Kontrollera kapacitet vid en fläkthastighet du faktiskt kan använda och vad rätt ersättningsfilter kostar.",
      avoidIf: "du förväntar dig att den ska tillföra fukt, åtgärda en fuktskada eller ersätta ventilationen. Vi har inte belägg för att just denna modell löser dina allergibesvär eller renar hela bostaden.",
      sourceIds: ["A2", "A4", "A5"], merchantVariantVerified: false,
    },
  ],
  payMoreWhen: "Du behöver en dokumenterad skillnad: exempelvis mer renluftskapacitet vid acceptabel ljudnivå, eller fuktstyrning och en behållare som du faktiskt kan rengöra. Räkna även på filter, vatten och skötsel. Appstyrning och större tank bevisar inte bättre luft eller bättre hälsa. Vi har inget jämförbart aktuellt prisunderlag.",
  noPurchaseWhen: "Du ännu inte vet om problemet är fukt, partiklar eller bristande ventilation, eller när åtgärder vid källan räcker. Håll befintliga ventiler öppna och rena utan att ändra deras inställning. Vid misstänkt fuktskada behöver orsaken utredas; köp inte två apparater för säkerhets skull.",
  swedishContext: "EU-manualen används för Classic 300S; amerikansk spänning och brittiska leveransvillkor överförs inte till en svensk beställning. Vid problem med luft, fukt eller mögel i en svensk hyresrätt eller bostadsrätt hänvisar Folkhälsomyndigheten i första hand till hyresvärden, fastighetsägaren eller föreningens styrelse. Om hjälpen uteblir kan kommunens miljö- och hälsoskyddskontor kontaktas.",
  testing: "Vi har inte mätt luftfuktighet, partikelhalter, ljud eller filtereffekt med dessa produkter. Modelluppgifterna är från Levoit. EPA:s råd om luftfuktare och filtrering gäller produktkategorierna och är inte ett godkännande av dessa modeller.",
  limitations: "En upplevelse av torr hals eller dålig luft fastställer inte orsaken eller vilken apparat som behövs. Inga löften om symtomlindring ges. Vi har inte verifierat svensk butiksmatchning, filterklass, aktuell kostnad eller bildrättigheter. Angiven rumsarea utan luftomsättning och driftläge räcker inte för att jämföra kapacitet.",
  sources: [
    { id: "A1", title: "Levoit – Classic 300S EU-manual", url: "https://levoit.com/cdn/shop/files/01.00_M1_Classic300S_2020-11-09_WEB_EU_en_de_fr_es_it.pdf?v=11065802931214143293", checkedAt: "2026-09-08", supports: "EU-spänning och sexlitersbehållare; manualens användning, vattenval och underhåll. Den rekommenderar renat eller destillerat vatten och att olja bara läggs på aromadynan, inte i tanken." },
    { id: "A2", title: "Levoit UK – Core 200S", url: "https://levoit.co.uk/products/levoit-core-200s-smart-air-purifier", checkedAt: "2026-09-08", supports: "Modellnamn, reglerbar fläkthastighet, VeSync-styrning och filterreferens Core 200S-RF. Marknadsföringens hälso- och rumsytelöften är inte oberoende verifierade av oss." },
    { id: "A3", title: "US EPA – skötsel av luftfuktare", url: "https://www.epa.gov/indoor-air-quality-iaq/use-and-care-home-humidifiers", checkedAt: "2026-09-08", supports: "Risk för spridning från ultraljudsfuktare, vatten med låg mineralhalt, rengöring och att undvika överfuktning och kondens." },
    { id: "A4", title: "US EPA – luftrenare och filter i hemmet", url: "https://www.epa.gov/indoor-air-quality-iaq/air-cleaners-and-air-filters-home", checkedAt: "2026-09-08", supports: "Filtrering som komplement till att minska föroreningskällor och ventilera med ren uteluft. Portabla apparater är avsedda för ett rum eller område och tar inte bort alla föroreningar." },
    { id: "A5", title: "Folkhälsomyndigheten – problem med inomhusmiljön i bostaden", url: "https://www.folkhalsomyndigheten.se/globalassets/livsvillkor-levnadsvanor/halsoskydd-miljohalsa/inomhusmiljo/informationsblad/har-du-problem-med-inomhusmiljon-i-din-bostad.pdf", checkedAt: "2026-09-08", supports: "Råd till boende i flerbostadshus: öppna och rengjorda ventiler, uppmärksamhet på kondens och fuktskador samt kontaktväg till fastighetsägare/förening och kommun." },
  ],
};
