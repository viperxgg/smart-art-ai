import { magicteamDecision } from "@/lib/sound-environment-decisions";
import type { DecisionRecord } from "@/lib/decision-record";
import type { DecisionGuide } from "@/components/DecisionGuidePage";

export const sleepEnvironmentDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    { productSlug: "manta-sovmask", model: "Manta Sleep Mask – originalmodell",
      variant: "Originalmasken, inte PRO eller SOUND. Katalogens ASIN B07PRG2CQY och aktuell svensk variant är inte matchade.",
      chooseIf: "det är ljus du vill avskärma och du behöver kunna flytta ögonkåporna och justera remmen. Tillverkaren beskriver dessa justeringar; prova passformen i din vanliga sovställning.",
      avoidIf: "du vill lösa ljudstörningar eller behöver en garanti om tryckfri passform och full mörkläggning för just ditt ansikte. Det har vi inte testat.", sourceIds: ["M1"], merchantVariantVerified: false },
    magicteamDecision.options[0],
    { productSlug: "ella-tyngdtacke", model: "Ella tyngdtäcke – 9 kg enligt katalog, ej verifierat",
      variant: "Katalogpost ASIN B093WY4SJ4 anges som 150 × 200 cm. Mått, vikt, material och skötsel är inte matchade mot tillverkarunderlag.",
      chooseIf: "du överväger tyngd som en personlig komfortpreferens och först kan kontrollera produktens instruktioner och lämplighet. Den äldre katalogtexten räcker inte för att rekommendera detta täcke.",
      avoidIf: "du behöver råd om lämplig vikt eller förväntar dig en verifierad behandling för sömnproblem. Vi väljer inte 9 kg åt dig utifrån ett produktnamn eller en generell viktregel.", sourceIds: ["E1"], merchantVariantVerified: false },
  ],
  payMoreWhen: "En verifierad funktion saknas i det du redan har, exempelvis justerbara ögonkåpor om en enklare mask inte passar. Fler ljud eller fler kilogram är inte i sig ett mervärde. Aktuella totalpriser är inte jämförda.",
  noPurchaseWhen: "Befintlig gardin, mask eller annan ändring redan löser störningen. Köp inte tre produkter för att guiden nämner ljus, ljud och tyngd. Börja med att identifiera problemet; alla sömnsvårigheter beror inte på sovrummets utrustning.",
  swedishContext: "1177 beskriver sovmiljö och när man bör söka hjälp. Om sömnbesvären inte blir bättre trots förändringar, kontakta vårdcentral. Det är allmän vårdinformation, inte ett godkännande av dessa produkter. Kontrollera svensk leverans och modellens instruktioner separat.",
  testing: "Vi har läst Mantas produktsida och 1177:s information för vuxna. Vi har inte testat ljusläckage, tryck mot ansiktet, ljudmaskering, täckets komfort eller sömnresultat. Magicteams svenska listning har nu matchats; Ella-sidan kunde inte läsas vid den tidigare kontrollen.",
  limitations: "Mantas justeringar är dokumenterade; personlig passform och sömneffekt är inte bevisade. Magicteams batteri och fullständiga manual samt Ellas modell och specifikationer återstår. Bilder, övriga svenska erbjudanden och kombinationseffekter är inte verifierade.",
  sources: [
    { id: "M1", title: "Manta Sleep – originalmaskens produktsida", url: "https://mantasleep.com/products/manta-sleep-mask", checkedAt: "2026-09-09", supports: "Flyttbara ögonkåpor och justerbar rem. Marknadsföring om full mörkläggning och tryckfrihet är inte vår passforms- eller effektmätning." },
    ...magicteamDecision.sources.filter(source => source.id === "N2"),
    { id: "N1", title: "Tidigare åtkomstförsök – Magicteam", url: "https://www.amazon.se/dp/B07RQWQBXY", checkedAt: "2026-09-09", status: "unavailable", supports: "Tidigare läsning misslyckades. Senare matchad butikskontroll finns som N2; denna äldre lucka styrker inga funktioner." },
    { id: "E1", title: "Amazon – Ella-ASIN, ej verifierad", url: "https://www.amazon.se/dp/B093WY4SJ4", checkedAt: "2026-09-09", status: "unavailable", supports: "Läsningen misslyckades. Styrker inte vikt, mått, material eller lämplighet." },
    { id: "H1", title: "1177 – Sömnsvårigheter hos vuxna", url: "https://www.1177.se/liv--halsa/stresshantering-och-somn/somnsvarigheter/", checkedAt: "2026-09-09", supports: "Allmän information om sovmiljö, flera möjliga orsaker och att söka hjälp när förändringar inte räcker. Ingen rekommendation av märkena här." },
  ],
};

export const sleepEnvironmentGuide: DecisionGuide = {
  parent: { name: "Hälsa & vardag", href: "/halsa" }, path: "/halsa/sov-battre-i-host",
  title: "Sovmask, ljud eller tyngd – vad behöver du egentligen?",
  intro: "Identifiera först vad som stör. En justerbar mask kan vara relevant för ljus, men varken en ljudmaskin eller ett tungt täcke är ett självklart nästa köp. Här skiljer vi dokumenterade funktioner från uppgifter som ännu saknar stöd.",
  decision: sleepEnvironmentDecision,
  productPaths: ["/halsa/sovmask", "/halsa/white-noise", "/halsa/tyngdtacke"],
  questions: [
    { question: "Är Manta garanterat mörk och tryckfri för mig?", answer: "Nej, det kan vi inte lova. Kåpor och rem kan justeras, men vi har inte provat masken på ditt ansikte eller i din sovställning." },
    { question: "Har Magicteam-modellen 40 ljud?", answer: "Den nu matchade svenska listningen anger 40 ljud, minne och timer. Det är säljaruppgifter, inte egna funktionstester eller bevis för bättre sömn. Batteri och fullständig manual återstår." },
    { question: "Är 9 kg ett bra standardval?", answer: "Vi ger inget sådant råd. Ella-postens exakta variant och instruktioner behöver verifieras innan lämpligheten kan bedömas." },
    { question: "Bör jag köpa alla tre?", answer: "Det finns inget sådant underlag här. Behåll det som redan fungerar och undersök en konkret störning i taget; fler produkter garanterar inte bättre sömn." },
  ],
  related: [
    { href: "/halsa/sovmask", text: "Manta – produktens granskningsstatus" },
    { href: "/halsa/white-noise", text: "Magicteam – reglage och kvarstående strömfrågor" },
    { href: "/halsa/tyngdtacke", text: "Ella – vad återstår?" },
    { href: "/halsa/morka-morgnar", text: "Behöver du ljus eller väckning?" },
    { href: "/halsa/sovmask-eller-white-noise", text: "Sovmask eller ljudmaskin" },
    { href: "/jamforelser", text: "Fler jämförelser" },
  ],
};
