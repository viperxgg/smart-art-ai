import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const barRingsDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    { productSlug: "iron-gym-pull-up-bar", model: "IRON GYM Chin Up Bar – B01DZVV9CS", variant: "Den länkade justerbara dörrstången anges passa 63–93 cm och levereras med fästklämmor. Listningen anger 100 kg. Vi har inte verifierat en modellspecifik monteringsmanual och lovar inte montering utan borrning.", chooseIf: "du behöver ett fast grepp för dragövningar och har bekräftat både dörrens mått och att konstruktionen samt monteringen uppfyller just den här stångens anvisningar. Bredden ensam räcker inte.", avoidIf: "du saknar klartecken för infästningen, behöver en fristående lösning eller utgår från att en dörrkarm som ser stadig ut automatiskt tål träningen.", sourceIds: ["BR1"], merchantVariantVerified: true },
    { productSlug: "gorilla-gymnastikringar", model: "Gorilla Sports gymringar – plast, 2-pack med remmar", variant: "ASIN B00EXL7P0U. Innehållsfälten anger två plastringar och två justerbara nylonremmar. Svensk tillverkarsida anger 23 cm ytterdiameter, 3 cm grepp och 450 cm remmar. Träversion finns också; beställ inte efter enbart den gemensamma rubriken.", chooseIf: "din övning kräver två rörliga grepp och du redan har en för ändamålet lämplig upphängning samt plats för remmar och hela rörelsen. Kontrollera plastversion och paket vid beställning.", avoidIf: "du saknar en verifierad upphängningspunkt eller tänker använda en gren, dörrstång eller takdetalj bara för att remmarna kan läggas runt den. Ringarnas angivna kapacitet verifierar inte underlaget.", sourceIds: ["BR2", "BR3"], merchantVariantVerified: true },
  ],
  payMoreWhen: "Ett dokumenterat passande fäste, annan grepputformning eller nödvändiga monteringsdelar löser ett verkligt behov. Räkna med hela lösningen, inte bara redskapets pris. Träringar är inte automatiskt bättre för din övning och vi har inte jämfört dagens totalpriser.",
  noPurchaseWhen: "Du saknar en lämplig monteringsplats eller redan har tillgång till fungerande utrustning där du tränar. Köp inte först och improvisera infästningen efteråt. Du behöver inte båda redskapen som ett startpaket.",
  swedishContext: "Mät dörröppningen och kontrollera material, infästning och tillåten användning i produktens anvisningar. Om installationen förändrar bostaden, klargör vad du får montera innan köp. För ringarna behöver även höjd och fri rörelseyta fungera; remlängd är inte samma sak som tillgänglig hänghöjd.",
  testing: "Vi har läst produktuppgifter och kontrollerat de länkade Amazon.se-sidorna. Vi har inte monterat, belastningsprovat eller bedömt någon dörr, takinfästning eller upphängning. Vi har inte visat att ringar tränar fler muskler eller att stången är enklare för alla nybörjare.",
  limitations: "100 kg för stången och 200 kg för ringarna är leverantörsuppgifter, inte våra säkerhetstester eller tillstånd för svingar och extra vikter. Modellspecifika monteringskrav måste kontrolleras före användning. Ringlistningen blandar träord i en punkt med plast i innehållsfälten. Bildrättigheter och praktiska användarprov återstår.",
  sources: [
    { id: "BR1", title: "Amazon.se – IRON GYM Chin Up Bar", url: "https://www.amazon.se/dp/B01DZVV9CS", checkedAt: "2026-09-09", supports: "Länkad artikel, justerbar 63–93 cm, medföljande fästklämmor och angiven 100 kg. Ingen granskad monteringsmanual som styrker borrfri användning i valfri dörr." },
    { id: "BR2", title: "Gorilla Sports Sverige – Olympiska gymringar GS", url: "https://www.gorillasports.se/products/olympiska-gymringar-gs", checkedAt: "2026-09-09", supports: "Plast- och träversion, två nylonremmar med spännen, 450 cm remlängd, 23 cm ringdiameter, 3 cm grepp och angiven maximal belastning 200 kg. Ingen verifiering av kundens infästning." },
    { id: "BR3", title: "Amazon.se – Gorilla Sports ringar med remmar", url: "https://www.amazon.se/dp/B00EXL7P0U", checkedAt: "2026-09-09", supports: "Länkad artikel med plast i paketbeskrivningen, två ringar och justerbara nylonremmar. Bred rubrik och en träformulering finns också; kontrollera utförandet före beställning." },
  ],
};

export const barRingsGuide: DecisionGuide = {
  parent: { name: "Träning", href: "/traning" }, path: "/traning/pull-up-bar-eller-gymnastikringar",
  title: "Pull-up-stång eller gymringar – har du rätt plats att fästa dem?",
  intro: "Börja med monteringsplatsen. Stången ger ett fast grepp, ringarna två rörliga grepp, men inget av redskapen gör en okänd dörrkarm eller takpunkt lämplig för träning. Här jämför vi den länkade IRON GYM-stången med Gorillas plastringar och remmar.",
  decision: barRingsDecision, productPaths: ["/traning/pull-up-bar", "/traning/gymnastikringar"],
  questions: [
    { question: "Är stången verifierad för montering utan borrning?", answer: "Nej. Listningen anger medföljande fästklämmor, men vi har inte granskat en modellspecifik monteringsmanual som klargör hur de ska användas. Utgå inte från borrfri montering bara för att andra IRON GYM-modeller marknadsförs så." },
    { question: "Kan jag hänga ringarna i den här dörrstången?", answer: "Vi har inte verifierat den kombinationen. Att remmarna når runt stången eller att båda har en angiven maxbelastning visar inte att de är godkända tillsammans för din rörelse. Kontrollera båda produkternas anvisningar och infästningen." },
    { question: "Betyder 450 cm rem att jag får 450 cm hänghöjd?", answer: "Nej. Upphängning och längdjustering använder också remmen. Kontrollera hur den ska dras och låsas enligt anvisningen och vilket utrymme som blir kvar för din övning." },
    { question: "Är ringar alltid ett bättre nästa steg?", answer: "Nej. De ger en annan greppfunktion, men vi har inte visat bättre träningsresultat eller en rangordning för alla användare. Om en fast stång redan fungerar för dina övningar behöver du inte byta." },
  ],
  related: [{ href: "/traning/hantlar-eller-gummiband", text: "Fast vikt eller band – vad kräver din övning?" }],
};
