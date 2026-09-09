import type { DecisionGuide } from "@/components/DecisionGuidePage";
import type { DecisionRecord } from "@/lib/decision-record";

export const ereaderDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [
    {
      productSlug: "kindle-paperwhite",
      model: "Kindle Paperwhite, 7 tum, 16 GB",
      variant: "7-tumsmodellen i Amazons produktguide, inte Signature Edition. Den befintliga butikslänkens generation och variant är ännu inte matchade.",
      chooseIf: "du redan köper böcker för Kindle och vill ha den större skärmen i denna jämförelse. Kontrollera att de svenska titlar du vill läsa finns för ditt konto.",
      avoidIf: "huvudskälet till köpet är att skicka Libby-lån från ett svenskt bibliotek till Kindle. Libbys Kindle-funktion gäller amerikanska bibliotek.",
      sourceIds: ["E1", "E4"],
      merchantVariantVerified: false,
    },
    {
      productSlug: "kobo-clara-bw",
      model: "Kobo Clara BW, 6 tum, 16 GB",
      variant: "Clara BW med svartvit E Ink Carta 1300-skärm. Inte Clara Colour eller Clara HD. Butikslänkens variant är ännu inte matchad.",
      chooseIf: "du vill ha en mindre läsplatta och har bekräftat en fungerande väg från ditt bibliotek eller din bokbutik: exempelvis OverDrive eller en kompatibel EPUB-fil.",
      avoidIf: "du förväntar dig att alla Biblio-lån eller alla köpta e-böcker fungerar direkt. Filskydd, bibliotekets exportmöjlighet och överföringen måste kontrolleras först.",
      sourceIds: ["E2", "E3", "E5", "E6", "E7"],
      merchantVariantVerified: false,
    },
  ],
  payMoreWhen: "En större skärm, i vår jämförelse Paperwhite 7 tum, kan vara värd merkostnaden om du föredrar stor text och tycker att sex tum blir för trångt. Det är vår praktiska bedömning, inte ett lästest. Köpvägen till dina böcker måste fungera först. Vi har inte verifierat dagens prisskillnad; jämför även frakt och eventuellt fodral.",
  noPurchaseWhen: "Din nuvarande läsplatta fungerar med böckerna du vill läsa. Om du är osäker på vanan, prova först bibliotekets eller bokbutikens läsapp på en enhet du redan äger.",
  swedishContext: "Kontrollera en bestämd bok hos ditt eget bibliotek före köp. Kobo listar Sverige och Clara BW för OverDrive, men det kräver att biblioteket erbjuder tjänsten. Biblio anger att export till Adobe Digital Editions beror på bibliotekets inställningar. Kobo beskriver överföring av skyddade böcker med detta datorprogram. I Biblio kontrollerar du export under Om boken i webbversionen, inte i mobilappen. Kobos aktuella ADE-guide beskriver ByteBooks-ID vid ny auktorisering. Följ den guiden för din befintliga bokåtkomst. Bibliotekslån är ingen garanti för alla svenska titlar eller tjänster.",
  testing: "Vi har jämfört officiella produkt- och hjälpsidor. Vi har inte mätt batteritid, provläst skärmarna eller genomfört ett bibliotekslån på dessa enheter.",
  limitations: "Amerikanska produktsidor används bara för hårdvarufakta, inte för svenskt pris, garanti eller lager. Butikslänkar och produktbilder avvaktar kontroll av variant respektive användningsrätt. Ingen poäng eller universell vinnare utses.",
  sources: [
    { id: "E1", title: "Amazon – Kindle buying guide", url: "https://www.aboutamazon.com/news/devices/which-kindle-to-buy", checkedAt: "2026-09-08", supports: "Paperwhite med 7-tumsskärm och 16 GB; Signature Edition är en separat variant. Ingen svensk lager- eller prisverifiering." },
    { id: "E2", title: "Kobo – Clara BW produktfakta", url: "https://us.kobobooks.com/products/kobo-clara-bw", checkedAt: "2026-09-08", supports: "Clara BW: svartvit 6-tumsskärm, Carta 1300 och 16 GB. Amerikansk produktsida." },
    { id: "E3", title: "Kobo – OverDrive, vanliga frågor", url: "https://help.kobo.com/hc/sv/articles/360018019214-OverDrive-Vanliga-fr%C3%A5gor", checkedAt: "2026-09-09", supports: "Sverige och Clara BW listas för inbyggd OverDrive. Funktionen avser e-böcker, inte bibliotekets ljudböcker." },
    { id: "E4", title: "Libby – Kindle Books", url: "https://help.libbyapp.com/en-us/6013.htm", checkedAt: "2026-09-09", supports: "Kindle Books via Libby är tillgängliga endast för amerikanska bibliotek." },
    { id: "E5", title: "Biblio – läsplattor och export", url: "https://help.biblio.app/sv/hc/kan-jag-anv%C3%A4nda-biblio-p%C3%A5-l%C3%A4sare-med-e-ink-", checkedAt: "2026-09-09", supports: "Biblio-appen beskrivs för kompatibla Android-enheter; export till Adobe Digital Editions kräver att biblioteket har aktiverat funktionen." },
    { id: "E6", title: "Kobo – böcker via Adobe Digital Editions", url: "https://help.kobo.com/hc/en-us/articles/360017814074-Add-eBooks-with-Adobe-Digital-Editions", checkedAt: "2026-09-09", supports: "Skyddade e-böcker kan kräva Adobe Digital Editions och auktorisering av dator och läsplatta. Följ de aktuella kontoinstruktionerna i guiden." },
    { id: "E7", title: "Biblio – kontrollera om biblioteket erbjuder export", url: "https://help.biblio.app/sv/hc/hur-vet-jeg-om-mitt-bibliotek-erbjuder-export-av-e-b%C3%B6cker", checkedAt: "2026-09-09", supports: "Export beror på biblioteket och kontrolleras under Om boken i webbversionen. Funktionen finns inte i Biblio-appen." },
  ],
};

export function getGuideDecision(guideId: string): DecisionRecord | undefined {
  return guideId === "kindle-eller-kobo" ? ereaderDecision : undefined;
}

export const ereaderGuide: DecisionGuide = {
  parent: { name: "Hälsa & vardag", href: "/halsa" }, path: "/halsa/kindle-eller-kobo",
  title: "Kindle eller Kobo – kan du läsa böckerna du vill ha?",
  intro: "Välj en bok du faktiskt vill läsa och kontrollera hur den når läsplattan. Jämför sedan Paperwhite 7 tum och Clara BW 6 tum; behåll gärna den enhet som redan fungerar.",
  decision: ereaderDecision, productPaths: ["/halsa/kindle-paperwhite", "/halsa/kobo-clara-bw"],
  questions: [
    { question: "Hur kontrollerar jag Biblio före köp?", answer: "Öppna en önskad bok i Biblios webbversion och kontrollera export under Om boken. Funktionen styrs av biblioteket och finns inte i mobilappen. Om export saknas ska du inte köpa Kobo med antagandet att just detta lån går att överföra." },
    { question: "Kan svenska Libby-lån skickas till Kindle?", answer: "Libby anger att Kindle Books endast finns för amerikanska bibliotek. Samma funktion kan inte förutsättas för ett svenskt lånekort." },
    { question: "Fungerar alla bibliotekslån direkt på Kobo?", answer: "Nej. Sverige och Clara BW finns i Kobos OverDrive-lista, men biblioteket måste erbjuda tjänsten och rätt titel. Andra skyddade e-böcker kan kräva export och Adobe Digital Editions på en dator." },
    { question: "Vad innebär överföring via dator?", answer: "Kontrollera att biblioteket erbjuder export, att filen stöds och att dator och läsplatta kan auktoriseras. Kobos aktuella ADE-guide beskriver ByteBooks-ID och vad som gäller för tidigare auktorisering. Läs källan E6 innan du ändrar ett befintligt konto; vi har inte genomfört överföringen på dessa enheter." },
    { question: "När är den större skärmen värd något?", answer: "När du föredrar stor text och den mindre skärmen känns trång. Det är en praktisk bedömning, inte vårt lästest. Skärmstorleken hjälper inte om din bok saknar en fungerande överföringsväg." },
  ],
  related: [{ href: "/halsa/laslampa-eller-led-list", text: "Behöver din läsplats bättre belysning?" }],
};
