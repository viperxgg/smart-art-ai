import {
  getAbsoluteUrl,
  type AppLocale,
  type InternalPathname,
  siteConfig,
} from "@/lib/site";

export type StadSyncSeoSlug =
  | "rut-automation"
  | "stadforetag-system"
  | "ai-oversattning-stadpersonal"
  | "gdpr-rut-stadforetag"
  | "rut-xml-skatteverket"
  | "affarssystem-stadforetag"
  | "schemalaggning-stadforetag"
  | "tidrapportering-stadforetag"
  | "personnummer-gdpr-rut"
  | "jamfor-system-stadforetag"
  | "priser";

export interface StadSyncFaqItem {
  question: string;
  answer: string;
}

export interface StadSyncOffer {
  name: string;
  audience: string;
  price: string;
  priceValue: number;
  features: string[];
}

export interface StadSyncSeoPage {
  slug: StadSyncSeoSlug;
  pathname: InternalPathname;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  heroPoints: string[];
  sections: Array<{
    title: string;
    body: string;
    bullets?: string[];
  }>;
  comparisonRows: ReadonlyArray<{
    label: string;
    before: string;
    after: string;
  }>;
  faq: ReadonlyArray<StadSyncFaqItem>;
}

export const stadSyncSeoSlugs: StadSyncSeoSlug[] = [
  "affarssystem-stadforetag",
  "rut-xml-skatteverket",
  "rut-automation",
  "stadforetag-system",
  "schemalaggning-stadforetag",
  "tidrapportering-stadforetag",
  "ai-oversattning-stadpersonal",
  "gdpr-rut-stadforetag",
  "personnummer-gdpr-rut",
  "jamfor-system-stadforetag",
  "priser",
];

export const stadSyncPricingOffers: Record<AppLocale, StadSyncOffer[]> = {
  sv: [
    {
      name: "Baspaket",
      audience: "För 1 till 5 anställda",
      price: "999 kr/mån",
      priceValue: 999,
      features: ["AI-översättning", "RUT-grundflöde", "Arbetar-PWA", "Kostnadsfri onboarding"],
    },
    {
      name: "Tillväxt",
      audience: "För 6 till 15 anställda",
      price: "1 999 kr/mån",
      priceValue: 1999,
      features: ["Obegränsad AI-översättning", "Skatteverket XML-export", "Arbetar-PWA", "Kostnadsfri onboarding"],
    },
    {
      name: "Premium",
      audience: "För 16+ anställda",
      price: "3 499 kr/mån",
      priceValue: 3499,
      features: ["Avancerad RUT-validering", "Prioriterad onboarding", "GDPR-flöden", "Utökad driftöversikt"],
    },
  ],
  en: [
    {
      name: "Base Package",
      audience: "For 1 to 5 employees",
      price: "999 kr/month",
      priceValue: 999,
      features: ["AI translation", "Basic RUT flow", "Worker PWA", "Free onboarding"],
    },
    {
      name: "Growth",
      audience: "For 6 to 15 employees",
      price: "1,999 kr/month",
      priceValue: 1999,
      features: ["Unlimited AI translation", "Skatteverket XML export", "Worker PWA", "Free onboarding"],
    },
    {
      name: "Premium",
      audience: "For 16+ employees",
      price: "3,499 kr/month",
      priceValue: 3499,
      features: ["Advanced RUT validation", "Priority onboarding", "GDPR flows", "Expanded operations overview"],
    },
  ],
};

export const stadSyncFaqItems: Record<AppLocale, StadSyncFaqItem[]> = {
  sv: [
    {
      question: "Vad gör StädSync AI för städföretag?",
      answer:
        "StädSync AI samlar RUT-flöde, AI-översättning, arbetsinstruktioner, personal-PWA och GDPR-säker drift i ett system för svenska städföretag.",
    },
    {
      question: "Kan systemet skapa RUT-filer till Skatteverket?",
      answer:
        "Ja. Plattformen är byggd för att validera köpare, beräkna RUT-belopp och generera XML-filer för Skatteverkets e-tjänst.",
    },
    {
      question: "Hur hjälper AI-översättningen personalen?",
      answer:
        "Kundens svenska instruktioner kan filtreras, struktureras och översättas till språk som personalen förstår, direkt i arbetarens PWA.",
    },
    {
      question: "Är StädSync AI relevant för mindre städföretag?",
      answer:
        "Ja. Baspaketet är gjort för team med 1 till 5 anställda som vill minska administration kring RUT, schema och instruktioner.",
    },
    {
      question: "Hur hanteras GDPR och känslig kunddata?",
      answer:
        "Känsliga fält kan skyddas med serverbaserad kryptering, rollstyrning, spårbar historik och automatiserad anonymisering efter lagkrav.",
    },
  ],
  en: [
    {
      question: "What does StädSync AI do for cleaning companies?",
      answer:
        "StädSync AI connects RUT workflow, AI translation, work instructions, worker PWA, and GDPR-ready operations in one system for Swedish cleaning companies.",
    },
    {
      question: "Can the system create RUT files for Skatteverket?",
      answer:
        "Yes. The platform is built to validate buyers, calculate RUT amounts, and generate XML files for Skatteverket's e-service.",
    },
    {
      question: "How does AI translation help the team?",
      answer:
        "Customer instructions in Swedish can be filtered, structured, and translated into languages the worker understands, directly in the worker PWA.",
    },
    {
      question: "Is StädSync AI relevant for smaller cleaning companies?",
      answer:
        "Yes. The base package is made for teams with 1 to 5 employees that want to reduce admin work around RUT, scheduling, and instructions.",
    },
    {
      question: "How is GDPR and sensitive customer data handled?",
      answer:
        "Sensitive fields can be protected with server-side encryption, role control, traceable history, and automated anonymization after legal retention periods.",
    },
  ],
};

export const stadSyncAudienceCards = {
  sv: [
    {
      title: "Nystartade städföretag",
      body: "Få kontroll över RUT, instruktioner och uppdrag utan att bygga administration i Excel.",
    },
    {
      title: "Växande team med flera rutter",
      body: "Samla återkommande kunder, arbetslistor och exportflöden när teamet går från några få till många uppdrag.",
    },
    {
      title: "Flerspråkig personal",
      body: "Gör svenska kundinstruktioner tydliga för personal som arbetar bäst på arabiska, engelska eller andra språk.",
    },
    {
      title: "RUT-tunga bolag",
      body: "Minska risken för fel när flera köpare, personnummer och avdragsbelopp behöver hanteras korrekt.",
    },
  ],
  en: [
    {
      title: "New cleaning companies",
      body: "Get control over RUT, instructions, and assignments without building operations in spreadsheets.",
    },
    {
      title: "Growing teams with multiple routes",
      body: "Connect recurring customers, work lists, and export flows as the team moves from a few jobs to many.",
    },
    {
      title: "Multilingual staff",
      body: "Make Swedish customer instructions clear for workers who operate best in Arabic, English, or other languages.",
    },
    {
      title: "RUT-heavy companies",
      body: "Reduce error risk when several buyers, identity numbers, and deduction amounts need accurate handling.",
    },
  ],
} as const;

export const stadSyncComparisonRows = {
  sv: [
    {
      label: "RUT-hantering",
      before: "Manuella kontroller, Excel och högre risk för missade köpare.",
      after: "Validerade köpare, beräknade belopp och XML-export i samma flöde.",
    },
    {
      label: "Instruktioner till personal",
      before: "Svenska kundtexter skickas vidare utan struktur eller översättning.",
      after: "AI filtrerar, strukturerar och översätter instruktioner till arbetarens språk.",
    },
    {
      label: "GDPR och historik",
      before: "Kunddata sprids mellan kalkylblad, meddelanden och manuella listor.",
      after: "Rollstyrning, spårbar logg och automatiserad anonymisering byggs in.",
    },
    {
      label: "Daglig drift",
      before: "Schema, uppdrag och personalinformation behöver dubbelkontrolleras.",
      after: "Arbetsflödet samlas i en PWA-vänlig driftmodell för teamet.",
    },
  ],
  en: [
    {
      label: "RUT handling",
      before: "Manual checks, spreadsheets, and higher risk around missing buyers.",
      after: "Validated buyers, calculated amounts, and XML export in the same flow.",
    },
    {
      label: "Staff instructions",
      before: "Swedish customer notes are forwarded without structure or translation.",
      after: "AI filters, structures, and translates instructions into the worker's language.",
    },
    {
      label: "GDPR and history",
      before: "Customer data spreads across spreadsheets, messages, and manual lists.",
      after: "Role control, traceable logs, and automated anonymization are built in.",
    },
    {
      label: "Daily operations",
      before: "Schedules, assignments, and staff information need repeated manual checks.",
      after: "The workflow is connected in a PWA-friendly operating model for the team.",
    },
  ],
} as const;

const svPages: Record<StadSyncSeoSlug, StadSyncSeoPage> = {
  "rut-automation": {
    slug: "rut-automation",
    pathname: "/stadsync-ai/rut-automation",
    title: "RUT-automation för städföretag | StädSync AI",
    description:
      "Automatisera RUT-flödet med validerade köpare, beräknade avdrag och XML-export för Skatteverket. Byggt för svenska städföretag.",
    h1: "RUT-automation för städföretag som vill bort från Excel",
    eyebrow: "RUT-automation",
    intro:
      "StädSync AI hjälper städföretag att hantera köpare, personnummer, arbetskostnad och RUT-avdrag i ett tydligare digitalt flöde.",
    primaryKeyword: "RUT automation städföretag",
    secondaryKeywords: ["RUT export Skatteverket", "HushallBegaran XML", "RUT system städföretag"],
    heroPoints: ["Validerade köpare", "XML-export", "Mindre dubbelarbete"],
    sections: [
      {
        title: "Från manuell kontroll till exportklart RUT-flöde",
        body:
          "När RUT hanteras i kalkylblad blir varje ny kund, köpare och arbetskostnad en ny riskpunkt. StädSync AI gör flödet mer strukturerat från första uppdrag till export.",
        bullets: ["Kontrollera köpare och personnummer", "Beräkna arbetskostnad och RUT-belopp", "Skapa exportunderlag för Skatteverkets e-tjänst"],
      },
      {
        title: "Byggt för verkliga städuppdrag",
        body:
          "RUT blir ofta mer komplext när flera personer betalar, uppdrag återkommer och teamet behöver hålla ihop kunddata med arbetsflödet.",
      },
    ],
    comparisonRows: stadSyncComparisonRows.sv.slice(0, 2),
    faq: [
      stadSyncFaqItems.sv[1],
      {
        question: "Ersätter StädSync AI all manuell RUT-kontroll?",
        answer:
          "Systemet minskar manuella steg och gör underlaget tydligare, men företaget bör fortfarande granska exporten enligt sina interna rutiner innan den skickas.",
      },
      {
        question: "Kan RUT-flödet användas av mindre team?",
        answer:
          "Ja. Baspaketet ger ett grundflöde för RUT och passar företag som vill sluta hantera allt i Excel.",
      },
    ],
  },
  "stadforetag-system": {
    slug: "stadforetag-system",
    pathname: "/stadsync-ai/stadforetag-system",
    title: "System för städföretag | Drift, RUT och personal-PWA",
    description:
      "Ett modernt system för städföretag med RUT-automation, AI-översättning, arbetar-PWA och GDPR-säker drift.",
    h1: "System för städföretag som samlar drift, RUT och personalflöde",
    eyebrow: "Städföretag system",
    intro:
      "StädSync AI är gjort för städföretag som vill få tydligare kontroll över uppdrag, personal, instruktioner och RUT utan att införa ett tungt affärssystem.",
    primaryKeyword: "städföretag system",
    secondaryKeywords: ["system för städfirma", "städ schema system", "digital drift städföretag"],
    heroPoints: ["Arbetar-PWA", "Driftöversikt", "RUT och schema i samma struktur"],
    sections: [
      {
        title: "Ett system för team som arbetar ute hos kund",
        body:
          "Städteam behöver tydliga arbetslistor, rätt instruktioner och snabb status. Plattformen ger en PWA-vänlig väg för att visa uppdrag och minska osäkerhet i fält.",
        bullets: ["Uppdrag per team", "Tydliga kundinstruktioner", "Status och spårbarhet"],
      },
      {
        title: "Mindre splittring mellan admin och arbete",
        body:
          "När RUT, kundinformation och arbetsinstruktioner sitter i olika filer blir driften långsammare. StädSync AI samlar de kritiska delarna i en gemensam modell.",
      },
    ],
    comparisonRows: stadSyncComparisonRows.sv,
    faq: [
      stadSyncFaqItems.sv[0],
      stadSyncFaqItems.sv[3],
      {
        question: "Behöver personalen installera en app?",
        answer:
          "Målet är en PWA-vänlig upplevelse som fungerar i webbläsaren och känns enkel för personalen att använda i mobilen.",
      },
    ],
  },
  "ai-oversattning-stadpersonal": {
    slug: "ai-oversattning-stadpersonal",
    pathname: "/stadsync-ai/ai-oversattning-stadpersonal",
    title: "AI-översättning för städpersonal | StädSync AI",
    description:
      "Översätt svenska kundinstruktioner till tydliga arbetslistor för flerspråkig städpersonal i en PWA-vänlig arbetsvy.",
    h1: "AI-översättning för städpersonal som behöver tydliga instruktioner",
    eyebrow: "AI-översättning",
    intro:
      "När kunden skriver på svenska men personalen arbetar bäst på ett annat språk behöver instruktionen bli tydlig, säker och enkel att agera på.",
    primaryKeyword: "AI översättning städpersonal",
    secondaryKeywords: ["översättning arbetsinstruktioner", "flerspråkig städpersonal", "AI kommunikation städföretag"],
    heroPoints: ["Svenska till rätt språk", "Filtrerade instruktioner", "PWA för personal"],
    sections: [
      {
        title: "Från kundtext till arbetsklar instruktion",
        body:
          "AI-översättningen är inte bara ord-för-ord. Den ska hjälpa teamet förstå tider, nyckelinstruktioner, särskilda önskemål och vad som faktiskt ska göras.",
        bullets: ["Strukturerar kundens svenska text", "Filtrerar känslig information", "Visar instruktionen i personalens arbetsvy"],
      },
      {
        title: "Mindre missförstånd i fält",
        body:
          "Tydligare instruktioner minskar avbrott, telefonsamtal och risken att personalen behöver gissa vad kunden menar.",
      },
    ],
    comparisonRows: [stadSyncComparisonRows.sv[1], stadSyncComparisonRows.sv[3]],
    faq: [
      stadSyncFaqItems.sv[2],
      {
        question: "Vilka språk kan vara relevanta?",
        answer:
          "Sidan visar arabiska och engelska som exempel, men flödet är byggt kring behovet att ge personalen tydliga instruktioner på det språk som passar arbetet.",
      },
      {
        question: "Kan känslig information filtreras innan översättning?",
        answer:
          "Ja. En viktig del av upplägget är att känslig data kan filtreras eller struktureras innan instruktionen visas vidare.",
      },
    ],
  },
  "gdpr-rut-stadforetag": {
    slug: "gdpr-rut-stadforetag",
    pathname: "/stadsync-ai/gdpr-rut-stadforetag",
    title: "GDPR och RUT för städföretag | Säker drift med StädSync AI",
    description:
      "Skydda kunddata, RUT-underlag och personalflöden med rollstyrning, spårbar logg, kryptering och anonymisering.",
    h1: "GDPR och RUT för städföretag som hanterar känslig kunddata",
    eyebrow: "GDPR och RUT",
    intro:
      "Städföretag hanterar adresser, nyckelinstruktioner, personnummer och RUT-underlag. Därför måste driftflödet vara byggt med dataskydd från början.",
    primaryKeyword: "GDPR städföretag",
    secondaryKeywords: ["RUT personuppgifter", "säker kunddata städ", "GDPR RUT system"],
    heroPoints: ["Krypterad lagring", "Rollstyrning", "Automatisk anonymisering"],
    sections: [
      {
        title: "Kunddata ska inte spridas i flera manuella kanaler",
        body:
          "När känsliga uppgifter ligger i meddelanden, kalkylblad och lösa dokument blir det svårt att hålla kontroll över åtkomst och historik.",
        bullets: ["Skydda känsliga kundfält", "Separera admin och personalvyer", "Följ ändringar och exporthistorik"],
      },
      {
        title: "RUT kräver både precision och spårbarhet",
        body:
          "RUT-flödet behöver korrekt data, men också tydlig kontroll över vem som kan se, ändra och exportera underlaget.",
      },
    ],
    comparisonRows: [stadSyncComparisonRows.sv[2], stadSyncComparisonRows.sv[0]],
    faq: [
      stadSyncFaqItems.sv[4],
      {
        question: "Varför är GDPR extra viktigt för städföretag?",
        answer:
          "Städföretag hanterar ofta adresser, nyckelinformation, personnummer och återkommande kunddata som behöver skyddas och begränsas efter roll.",
      },
      {
        question: "Kan historik sparas för export och ändringar?",
        answer:
          "Ja. En spårbar logg gör det lättare att förstå vad som ändrats och vilket underlag som använts.",
      },
    ],
  },
  "rut-xml-skatteverket": {
    slug: "rut-xml-skatteverket",
    pathname: "/stadsync-ai/rut-xml-skatteverket",
    title: "RUT XML till Skatteverket | XML-fil för städföretag",
    description:
      "Skapa tydligare RUT-underlag och XML-fil för Skatteverkets e-tjänst. För städföretag som vill minska manuell inmatning, fel och dubbelarbete.",
    h1: "RUT XML till Skatteverket för städföretag som vill slippa manuell filhantering",
    eyebrow: "RUT XML Skatteverket",
    intro:
      "Många städföretag söker efter RUT XML, Skatteverket XML-fil och HushallBegaran när den manuella RUT-administrationen börjar ta för mycket tid.",
    primaryKeyword: "RUT XML Skatteverket",
    secondaryKeywords: ["XML-fil RUT", "Skatteverket RUT företag", "HushallBegaran XML", "RUT export Skatteverket"],
    heroPoints: ["XML-underlag", "Köpare och belopp", "Exportklart flöde"],
    sections: [
      {
        title: "Vad betyder RUT XML i praktiken?",
        body:
          "Skatteverkets e-tjänst för rot och rut kan fylla i uppgifter genom import av XML-fil i stället för manuell inmatning. För ett städföretag betyder det att köpare, arbetskostnad och begärt belopp behöver ligga i rätt struktur innan filen laddas upp.",
        bullets: ["Samla köpare och betalningsår", "Beräkna arbetskostnad och begärt RUT-belopp", "Skapa ett underlag som följer Skatteverkets format"],
      },
      {
        title: "Varför koppla XML till driftflödet?",
        body:
          "När RUT-exporten ligger utanför bokning, schema och kunddata uppstår dubbelarbete. StädSync AI kopplar RUT-underlaget till uppdraget så att exporten bygger på samma data som används i driften.",
      },
    ],
    comparisonRows: [stadSyncComparisonRows.sv[0], stadSyncComparisonRows.sv[2]],
    faq: [
      {
        question: "Kan en XML-fil ersätta manuell inmatning i Skatteverkets e-tjänst?",
        answer:
          "Ja. Skatteverket beskriver att uppgifter för rot- och rutarbete kan importeras till e-tjänsten via XML-fil i stället för att fyllas i manuellt.",
      },
      {
        question: "Vilka sökord hör till den här sidan?",
        answer:
          "Sidan är byggd för sökningar som RUT XML Skatteverket, XML-fil RUT, Skatteverket RUT företag och HushallBegaran XML.",
      },
      {
        question: "Måste företaget fortfarande granska underlaget?",
        answer:
          "Ja. Systemet kan strukturera och minska manuella steg, men företaget bör alltid granska exporten innan den skickas in.",
      },
    ],
  },
  "affarssystem-stadforetag": {
    slug: "affarssystem-stadforetag",
    pathname: "/stadsync-ai/affarssystem-stadforetag",
    title: "Affärssystem för städföretag | RUT, schema och personalflöde",
    description:
      "Ett lättare affärssystem för städföretag som behöver RUT, schema, arbetsorder, personal-PWA och GDPR-säker kunddata i samma struktur.",
    h1: "Affärssystem för städföretag som behöver RUT, schema och personalflöde utan tung administration",
    eyebrow: "Affärssystem städföretag",
    intro:
      "I svensk sökdata syns flera närliggande köpord: affärssystem för städföretag, branschsystem för städföretag, programvara för städföretag och bästa systemet för städföretag.",
    primaryKeyword: "affärssystem för städföretag",
    secondaryKeywords: ["programvara för städföretag", "branschsystem för städföretag", "bästa systemet för städföretag", "system för städbolag"],
    heroPoints: ["RUT och drift", "Personal-PWA", "Kunddata med kontroll"],
    sections: [
      {
        title: "När räcker inte kalender och Excel längre?",
        body:
          "Ett växande städföretag behöver mer än en kalender. Återkommande uppdrag, RUT-underlag, personalinstruktioner och kunddata måste hänga ihop så att administrationen inte växer snabbare än verksamheten.",
        bullets: ["Kundregister och uppdrag", "Schema och arbetsinstruktioner", "RUT-underlag och export", "Rollstyrd åtkomst för admin och personal"],
      },
      {
        title: "StädSync AI som lättare branschsystem",
        body:
          "StädSync AI är positionerat för städföretag som vill ha ett fokuserat driftlager runt RUT, schema, översättning och GDPR, inte ett brett affärssystem med funktioner teamet inte använder.",
      },
    ],
    comparisonRows: stadSyncComparisonRows.sv,
    faq: [
      {
        question: "Är StädSync AI ett komplett affärssystem?",
        answer:
          "StädSync AI är ett fokuserat drift- och RUT-system för städföretag. Det är inte byggt för att ersätta varje ekonomifunktion, utan för att minska friktion i uppdrag, personal och RUT.",
      },
      {
        question: "Vilka sökord matchar sidan?",
        answer:
          "Affärssystem för städföretag, programvara för städföretag, branschsystem för städföretag och bästa systemet för städföretag.",
      },
      {
        question: "Passar detta mindre städföretag?",
        answer:
          "Ja. Sidan riktar sig särskilt till team som vill börja enklare och få kontroll över RUT, schema och instruktioner utan tung implementation.",
      },
    ],
  },
  "schemalaggning-stadforetag": {
    slug: "schemalaggning-stadforetag",
    pathname: "/stadsync-ai/schemalaggning-stadforetag",
    title: "Schemaläggning för städföretag | Uppdrag, rutter och personal",
    description:
      "Planera städuppdrag, återkommande kunder, rutter och personalinstruktioner med ett driftflöde kopplat till RUT och AI-översättning.",
    h1: "Schemaläggning för städföretag där uppdrag, personal och RUT sitter ihop",
    eyebrow: "Schemaläggning",
    intro:
      "Sökningar som schemaläggning städföretag, städ schema system och planeringsprogram städföretag visar att många företag vill få bort splittringen mellan kalender, personal och kunddata.",
    primaryKeyword: "schemaläggning städföretag",
    secondaryKeywords: ["städ schema system", "planeringsprogram städföretag", "ruttplanering städ", "återkommande städuppdrag"],
    heroPoints: ["Återkommande uppdrag", "Rutter och team", "Instruktioner i mobilen"],
    sections: [
      {
        title: "Schemat behöver förstå uppdraget",
        body:
          "För städföretag räcker det inte att placera ett namn i en kalender. Systemet behöver visa kundens instruktioner, rätt team, rätt tid och vilket RUT-underlag uppdraget hör till.",
        bullets: ["Planera återkommande uppdrag", "Koppla instruktioner till personalens vy", "Minska samtal om adress, tid och särskilda önskemål"],
      },
      {
        title: "När schema blir drift",
        body:
          "StädSync AI kopplar schemaläggning till arbetslistor, AI-översättning och RUT-flöde så att admin och fältpersonal arbetar från samma struktur.",
      },
    ],
    comparisonRows: [stadSyncComparisonRows.sv[3], stadSyncComparisonRows.sv[1]],
    faq: [
      {
        question: "Är detta ett rent kalenderverktyg?",
        answer:
          "Nej. Poängen är att schemat ska kopplas till uppdrag, arbetsinstruktioner, personal-PWA och RUT-underlag.",
      },
      {
        question: "Vilka sökord riktar sidan in sig på?",
        answer:
          "Schemaläggning städföretag, städ schema system, planeringsprogram städföretag och ruttplanering städ.",
      },
      {
        question: "Kan personalen se sitt schema i mobilen?",
        answer:
          "Målet är en PWA-vänlig arbetsvy där personalen ser sina uppdrag och tydliga instruktioner direkt i mobilen.",
      },
    ],
  },
  "tidrapportering-stadforetag": {
    slug: "tidrapportering-stadforetag",
    pathname: "/stadsync-ai/tidrapportering-stadforetag",
    title: "Tidrapportering för städföretag | Mobil arbetsvy och spårbar drift",
    description:
      "Koppla tidrapportering, arbetsorder, personal-PWA och uppdragsstatus till ett tydligare driftflöde för städföretag.",
    h1: "Tidrapportering för städföretag som vill ha spårbarhet från fält till admin",
    eyebrow: "Tidrapportering",
    intro:
      "Tidrapportering städföretag, mobilapp städpersonal och digital arbetsorder städ är sökningar som pekar på samma behov: snabbare status från personalen ute hos kund.",
    primaryKeyword: "tidrapportering städföretag",
    secondaryKeywords: ["mobilapp städpersonal", "digital arbetsorder städ", "arbetsorder städföretag", "uppdragshantering städ"],
    heroPoints: ["Mobil status", "Arbetsorder", "Spårbar historik"],
    sections: [
      {
        title: "Från papperslappar till status i arbetsflödet",
        body:
          "När personalen rapporterar tid, avvikelser och färdig status i separata kanaler blir admin långsammare. Ett digitalt flöde gör uppdraget lättare att följa från planering till fakturering och RUT.",
        bullets: ["Se uppdragsstatus snabbare", "Koppla tid till kund och arbetsorder", "Minska manuell sammanställning efter utfört arbete"],
      },
      {
        title: "Spårbarhet utan att överbelasta personalen",
        body:
          "StädSync AI fokuserar på en enkel PWA-vy där personalen får rätt instruktioner och kan lämna status utan att behöva arbeta i ett tungt administrativt system.",
      },
    ],
    comparisonRows: [stadSyncComparisonRows.sv[3], stadSyncComparisonRows.sv[2]],
    faq: [
      {
        question: "Är tidrapportering en separat modul?",
        answer:
          "Sidan beskriver tidrapportering som en del av driftflödet: uppdrag, status, arbetsinstruktioner och historik ska hänga ihop.",
      },
      {
        question: "Vilka sökord matchar sidan?",
        answer:
          "Tidrapportering städföretag, mobilapp städpersonal, digital arbetsorder städ och uppdragshantering städ.",
      },
      {
        question: "Kan det användas tillsammans med RUT?",
        answer:
          "Ja. När uppdrag, tid och kunddata sitter ihop blir RUT-underlaget lättare att kontrollera.",
      },
    ],
  },
  "personnummer-gdpr-rut": {
    slug: "personnummer-gdpr-rut",
    pathname: "/stadsync-ai/personnummer-gdpr-rut",
    title: "Personnummer, GDPR och RUT | Säker kunddata för städföretag",
    description:
      "Så kan städföretag tänka kring personnummer, RUT-underlag, kunddata och GDPR med isolerad lagring, rollstyrning och minimering.",
    h1: "Personnummer, GDPR och RUT för städföretag som hanterar kunddata varje vecka",
    eyebrow: "Personnummer och GDPR",
    intro:
      "Svenska städföretag behöver ofta personnummer för RUT. Samtidigt är personnummer extra skyddsvärda uppgifter och bör inte spridas i onödiga system, listor eller meddelanden.",
    primaryKeyword: "personnummer GDPR RUT",
    secondaryKeywords: ["GDPR städföretag", "RUT personnummer", "kunddata städföretag", "personuppgifter städ"],
    heroPoints: ["Dataminimering", "Rollstyrning", "Serverbaserad hantering"],
    sections: [
      {
        title: "RUT kräver data, GDPR kräver kontroll",
        body:
          "RUT-flödet behöver korrekta köparuppgifter, men det betyder inte att alla i verksamheten ska se fullständiga personnummer. Ett bättre system skiljer mellan vad admin behöver, vad personal behöver och vad AI aldrig ska få.",
        bullets: ["Separera personnummer från vanlig uppdragsdata", "Visa bara nödvändig information för personal", "Logga export och ändringar"],
      },
      {
        title: "AI ska inte vara en genväg runt dataskydd",
        body:
          "I StädSync AI är målet att AI hjälper till med instruktioner och översättning, medan känsliga RUT-fält hålls utanför AI-flödet.",
      },
    ],
    comparisonRows: [stadSyncComparisonRows.sv[2], stadSyncComparisonRows.sv[1]],
    faq: [
      {
        question: "Är personnummer känsliga personuppgifter enligt GDPR?",
        answer:
          "IMY beskriver att personnummer inte är känsliga personuppgifter enligt GDPR, men att de är extra skyddsvärda i Sverige och därför behöver särskilt skydd.",
      },
      {
        question: "Vilka sökord riktar sidan in sig på?",
        answer:
          "Personnummer GDPR RUT, GDPR städföretag, RUT personnummer, kunddata städföretag och personuppgifter städ.",
      },
      {
        question: "Skickas personnummer till AI?",
        answer:
          "Nej. Arkitekturen är byggd för att AI ska arbeta med instruktioner och översättning, inte fullständiga personnummer eller känsliga RUT-fält.",
      },
    ],
  },
  "jamfor-system-stadforetag": {
    slug: "jamfor-system-stadforetag",
    pathname: "/stadsync-ai/jamfor-system-stadforetag",
    title: "Jämför system för städföretag | Vad ska du välja?",
    description:
      "Jämför system för städföretag utifrån RUT, schemaläggning, mobilapp, tidrapportering, GDPR och AI-översättning innan du bokar demo.",
    h1: "Jämför system för städföretag utifrån RUT, schema, personal och GDPR",
    eyebrow: "Jämför system",
    intro:
      "Sökningar som jämför system för städföretag, bästa systemet för städföretag och TimeWave eller Tengella visar att köpare vill förstå skillnaden mellan breda affärssystem och mer fokuserade driftverktyg.",
    primaryKeyword: "jämför system för städföretag",
    secondaryKeywords: ["bästa systemet för städföretag", "TimeWave alternativ", "Tengella alternativ", "städföretag software"],
    heroPoints: ["Urvalskriterier", "RUT och GDPR", "AI och personalflöde"],
    sections: [
      {
        title: "Utgå från problemen, inte bara funktionslistan",
        body:
          "Ett städföretag bör jämföra system efter hur väl de löser vardagens friktion: återkommande uppdrag, personalinstruktioner, RUT-underlag, kunddata och tid från utfört jobb till export eller faktura.",
        bullets: ["Behöver ni djup RUT-hantering?", "Behöver personalen en enkel mobilvy?", "Behöver ni AI-översättning för flerspråkiga team?", "Behöver ni stark kontroll över personnummer och kunddata?"],
      },
      {
        title: "När StädSync AI är rätt alternativ",
        body:
          "StädSync AI passar bäst när RUT, AI-översättning och GDPR-säker drift är viktigare än ett stort generellt affärssystem.",
      },
    ],
    comparisonRows: stadSyncComparisonRows.sv,
    faq: [
      {
        question: "Är detta en TimeWave- eller Tengella-jämförelse?",
        answer:
          "Sidan använder sökintentionen jämför system för städföretag, men fokuserar på urvalskriterier och när StädSync AI är ett relevant alternativ.",
      },
      {
        question: "Vilka sökord riktar sidan in sig på?",
        answer:
          "Jämför system för städföretag, bästa systemet för städföretag, TimeWave alternativ, Tengella alternativ och städföretag software.",
      },
      {
        question: "Vad ska man prioritera först?",
        answer:
          "Börja med de flöden som skapar mest administration: schema, RUT, tidrapportering, instruktioner, fakturaunderlag och dataskydd.",
      },
    ],
  },
  priser: {
    slug: "priser",
    pathname: "/stadsync-ai/priser",
    title: "StädSync AI priser | Paket från 999 kr/mån",
    description:
      "Jämför StädSync AI Baspaket, Tillväxt och Premium för städföretag. AI-översättning, RUT-flöde, PWA och onboarding ingår.",
    h1: "StädSync AI priser för städföretag som vill börja enkelt",
    eyebrow: "Priser",
    intro:
      "Välj paket efter teamets storlek. Alla paket bygger på samma tekniska grund: AI-kommunikation, RUT-flöde och arbetar-PWA.",
    primaryKeyword: "StädSync AI priser",
    secondaryKeywords: ["RUT system pris", "städföretag system pris", "AI system städföretag"],
    heroPoints: ["Från 999 kr/mån", "Onboarding ingår", "30 dagars riskfri utvärdering"],
    sections: [
      {
        title: "Tre paket efter teamets storlek",
        body:
          "Baspaket passar mindre team, Tillväxt passar växande bolag med flera rutter och Premium passar etablerade företag med högre krav på spårbarhet.",
        bullets: stadSyncPricingOffers.sv.map((offer) => `${offer.name}: ${offer.audience}, ${offer.price}`),
      },
      {
        title: "Vad ingår i grunden?",
        body:
          "AI-översättning, RUT-flöde, PWA för personal och onboarding finns i upplägget för att göra starten enklare.",
      },
    ],
    comparisonRows: [],
    faq: [
      {
        question: "Vilket paket ska ett mindre städföretag välja?",
        answer:
          "Baspaket är gjort för 1 till 5 anställda och passar företag som vill få kontroll över RUT, schema och instruktioner utan tung administration.",
      },
      {
        question: "Vilket paket är standard för växande bolag?",
        answer:
          "Tillväxt är standardpaketet för 6 till 15 anställda med flera rutter, återkommande kunder och flerspråkiga team.",
      },
      {
        question: "Finns det bindningstid?",
        answer:
          "Sidan beskriver en 30 dagars riskfri utvärdering utan bindningstid efter kostnadsfri uppstart.",
      },
    ],
  },
};

const enPages: Record<StadSyncSeoSlug, StadSyncSeoPage> = {
  "rut-automation": {
    slug: "rut-automation",
    pathname: "/stadsync-ai/rut-automation",
    title: "RUT Automation for Cleaning Companies | StädSync AI",
    description:
      "Automate RUT workflows with validated buyers, calculated deductions, and XML export for Skatteverket. Built for Swedish cleaning companies.",
    h1: "RUT automation for cleaning companies moving away from spreadsheets",
    eyebrow: "RUT automation",
    intro:
      "StädSync AI helps cleaning companies handle buyers, identity numbers, labor cost, and RUT deductions in a clearer digital workflow.",
    primaryKeyword: "RUT automation cleaning company",
    secondaryKeywords: ["RUT export Skatteverket", "HushallBegaran XML", "RUT system cleaning company"],
    heroPoints: ["Validated buyers", "XML export", "Less repeated admin"],
    sections: [
      {
        title: "From manual checks to export-ready RUT workflow",
        body:
          "When RUT is handled in spreadsheets, every new customer, buyer, and labor cost creates another risk point. StädSync AI makes the workflow more structured from assignment to export.",
        bullets: ["Check buyers and identity numbers", "Calculate labor cost and RUT amount", "Create export files for Skatteverket"],
      },
      {
        title: "Built for real cleaning assignments",
        body:
          "RUT becomes more complex when several people pay, assignments repeat, and the team needs customer data connected with daily operations.",
      },
    ],
    comparisonRows: stadSyncComparisonRows.en.slice(0, 2),
    faq: [
      stadSyncFaqItems.en[1],
      {
        question: "Does StädSync AI replace every manual RUT check?",
        answer:
          "The system reduces manual steps and makes the export basis clearer, while the company should still review exports according to internal routines before submission.",
      },
      {
        question: "Can smaller teams use the RUT workflow?",
        answer:
          "Yes. The base package gives smaller companies a structured RUT workflow without relying on spreadsheets.",
      },
    ],
  },
  "stadforetag-system": {
    slug: "stadforetag-system",
    pathname: "/stadsync-ai/stadforetag-system",
    title: "Cleaning Company System | Operations, RUT, and Worker PWA",
    description:
      "A modern system for cleaning companies with RUT automation, AI translation, worker PWA, and GDPR-ready operations.",
    h1: "A system for cleaning companies that connects operations, RUT, and staff workflow",
    eyebrow: "Cleaning company system",
    intro:
      "StädSync AI is built for cleaning companies that want clearer control over assignments, staff, instructions, and RUT without adopting a heavy enterprise system.",
    primaryKeyword: "cleaning company system",
    secondaryKeywords: ["cleaning business software Sweden", "cleaning schedule system", "digital operations cleaning company"],
    heroPoints: ["Worker PWA", "Operations overview", "RUT and schedule structure"],
    sections: [
      {
        title: "A system for teams working at customer sites",
        body:
          "Cleaning teams need clear work lists, correct instructions, and fast status. The platform gives a PWA-friendly route for assignments and field clarity.",
        bullets: ["Assignments per team", "Clear customer instructions", "Status and traceability"],
      },
      {
        title: "Less split between admin and field work",
        body:
          "When RUT, customer data, and work instructions sit in different files, operations slow down. StädSync AI connects the critical parts in one model.",
      },
    ],
    comparisonRows: stadSyncComparisonRows.en,
    faq: [
      stadSyncFaqItems.en[0],
      stadSyncFaqItems.en[3],
      {
        question: "Does staff need to install an app?",
        answer:
          "The intended experience is PWA-friendly, works in the browser, and stays simple for staff to use on mobile.",
      },
    ],
  },
  "ai-oversattning-stadpersonal": {
    slug: "ai-oversattning-stadpersonal",
    pathname: "/stadsync-ai/ai-oversattning-stadpersonal",
    title: "AI Translation for Cleaning Staff | StädSync AI",
    description:
      "Translate Swedish customer instructions into clear work lists for multilingual cleaning staff in a PWA-friendly worker view.",
    h1: "AI translation for cleaning staff that need clear instructions",
    eyebrow: "AI translation",
    intro:
      "When customers write in Swedish but staff work best in another language, instructions need to become clear, safe, and easy to act on.",
    primaryKeyword: "AI translation cleaning staff",
    secondaryKeywords: ["translate work instructions", "multilingual cleaning staff", "AI communication cleaning company"],
    heroPoints: ["Swedish to the right language", "Filtered instructions", "Worker PWA"],
    sections: [
      {
        title: "From customer text to ready work instruction",
        body:
          "AI translation is not just word-for-word. It should help the team understand times, key instructions, special requests, and what needs to be done.",
        bullets: ["Structures Swedish customer text", "Filters sensitive information", "Shows instructions in the worker view"],
      },
      {
        title: "Fewer misunderstandings in the field",
        body:
          "Clearer instructions reduce interruptions, phone calls, and the risk that staff need to guess what the customer means.",
      },
    ],
    comparisonRows: [stadSyncComparisonRows.en[1], stadSyncComparisonRows.en[3]],
    faq: [
      stadSyncFaqItems.en[2],
      {
        question: "Which languages are relevant?",
        answer:
          "The page shows Arabic and English as examples, but the workflow is built around giving staff clear instructions in the language that fits the work.",
      },
      {
        question: "Can sensitive information be filtered before translation?",
        answer:
          "Yes. A key part of the setup is that sensitive data can be filtered or structured before instructions are shown further.",
      },
    ],
  },
  "gdpr-rut-stadforetag": {
    slug: "gdpr-rut-stadforetag",
    pathname: "/stadsync-ai/gdpr-rut-stadforetag",
    title: "GDPR and RUT for Cleaning Companies | StädSync AI",
    description:
      "Protect customer data, RUT records, and staff workflows with role control, traceable logs, encryption, and anonymization.",
    h1: "GDPR and RUT for cleaning companies handling sensitive customer data",
    eyebrow: "GDPR and RUT",
    intro:
      "Cleaning companies handle addresses, key instructions, identity numbers, and RUT records. The operating flow needs data protection from the start.",
    primaryKeyword: "GDPR cleaning company",
    secondaryKeywords: ["RUT personal data", "secure customer data cleaning", "GDPR RUT system"],
    heroPoints: ["Encrypted storage", "Role control", "Automated anonymization"],
    sections: [
      {
        title: "Customer data should not spread across manual channels",
        body:
          "When sensitive information sits in messages, spreadsheets, and loose documents, access and history become difficult to control.",
        bullets: ["Protect sensitive customer fields", "Separate admin and worker views", "Track changes and export history"],
      },
      {
        title: "RUT needs precision and traceability",
        body:
          "The RUT workflow needs correct data and clear control over who can view, change, and export the basis.",
      },
    ],
    comparisonRows: [stadSyncComparisonRows.en[2], stadSyncComparisonRows.en[0]],
    faq: [
      stadSyncFaqItems.en[4],
      {
        question: "Why is GDPR important for cleaning companies?",
        answer:
          "Cleaning companies often handle addresses, key information, identity numbers, and recurring customer data that should be protected and restricted by role.",
      },
      {
        question: "Can history be saved for exports and changes?",
        answer:
          "Yes. A traceable log makes it easier to understand what changed and which data basis was used.",
      },
    ],
  },
  "rut-xml-skatteverket": {
    slug: "rut-xml-skatteverket",
    pathname: "/stadsync-ai/rut-xml-skatteverket",
    title: "RUT XML for Skatteverket | XML File for Cleaning Companies",
    description:
      "Create clearer RUT records and XML files for Skatteverket's e-service. For cleaning companies that want less manual entry, fewer errors, and less repeated work.",
    h1: "RUT XML for Skatteverket when cleaning companies want less manual file handling",
    eyebrow: "RUT XML Skatteverket",
    intro:
      "Searches such as RUT XML, Skatteverket XML file, and HushallBegaran show the same operational need: RUT admin is too manual when the company grows.",
    primaryKeyword: "RUT XML Skatteverket",
    secondaryKeywords: ["RUT XML file", "Skatteverket RUT company", "HushallBegaran XML", "RUT export Skatteverket"],
    heroPoints: ["XML basis", "Buyers and amounts", "Export-ready workflow"],
    sections: [
      {
        title: "What RUT XML means in practice",
        body:
          "Skatteverket's e-service for ROT and RUT can import information through an XML file instead of manual entry. For cleaning companies, buyers, labor cost, and requested deductions need to be structured before upload.",
        bullets: ["Connect buyers and payment year", "Calculate labor cost and requested RUT amount", "Create an export basis that follows Skatteverket's format"],
      },
      {
        title: "Why connect XML to operations?",
        body:
          "When the RUT export sits outside booking, schedule, and customer data, teams repeat work. StädSync AI connects the RUT basis to the assignment so export uses the same data as operations.",
      },
    ],
    comparisonRows: [stadSyncComparisonRows.en[0], stadSyncComparisonRows.en[2]],
    faq: [
      {
        question: "Can an XML file replace manual entry in Skatteverket's e-service?",
        answer:
          "Yes. Skatteverket describes that ROT and RUT information can be imported to the e-service via XML file instead of being entered manually.",
      },
      {
        question: "Which search terms does this page target?",
        answer:
          "RUT XML Skatteverket, RUT XML file, Skatteverket RUT company, and HushallBegaran XML.",
      },
      {
        question: "Should the company still review the export basis?",
        answer:
          "Yes. The system can structure data and reduce manual work, but the company should review exports before submission.",
      },
    ],
  },
  "affarssystem-stadforetag": {
    slug: "affarssystem-stadforetag",
    pathname: "/stadsync-ai/affarssystem-stadforetag",
    title: "Business System for Cleaning Companies | RUT, Schedule, and Staff",
    description:
      "A focused business system for cleaning companies that need RUT, scheduling, work orders, worker PWA, and GDPR-ready customer data in one structure.",
    h1: "A business system for cleaning companies that need RUT, scheduling, and staff workflows without heavy admin",
    eyebrow: "Cleaning business system",
    intro:
      "Swedish search results show related buying terms: business system for cleaning companies, industry system, software for cleaning companies, and best system for cleaning companies.",
    primaryKeyword: "business system for cleaning companies",
    secondaryKeywords: ["cleaning company software", "industry system for cleaning companies", "best system for cleaning companies", "cleaning business software Sweden"],
    heroPoints: ["RUT and operations", "Worker PWA", "Customer data control"],
    sections: [
      {
        title: "When calendar and spreadsheets are no longer enough",
        body:
          "A growing cleaning company needs more than a calendar. Recurring jobs, RUT records, staff instructions, and customer data need to stay connected so administration does not grow faster than the business.",
        bullets: ["Customer records and assignments", "Schedule and work instructions", "RUT basis and export", "Role-based access for admin and staff"],
      },
      {
        title: "StädSync AI as a focused industry system",
        body:
          "StädSync AI is positioned for cleaning companies that want a focused operations layer around RUT, scheduling, translation, and GDPR instead of a broad system the team will not use fully.",
      },
    ],
    comparisonRows: stadSyncComparisonRows.en,
    faq: [
      {
        question: "Is StädSync AI a full business system?",
        answer:
          "StädSync AI is a focused operations and RUT system for cleaning companies. It is not intended to replace every finance feature, but to reduce friction in assignments, staff, and RUT.",
      },
      {
        question: "Which keywords does this page match?",
        answer:
          "Business system for cleaning companies, cleaning company software, industry system for cleaning companies, and best system for cleaning companies.",
      },
      {
        question: "Does it fit smaller cleaning companies?",
        answer:
          "Yes. The page is aimed at teams that want a simpler start and control over RUT, scheduling, and instructions without heavy implementation.",
      },
    ],
  },
  "schemalaggning-stadforetag": {
    slug: "schemalaggning-stadforetag",
    pathname: "/stadsync-ai/schemalaggning-stadforetag",
    title: "Scheduling for Cleaning Companies | Assignments, Routes, and Staff",
    description:
      "Plan cleaning assignments, recurring customers, routes, and staff instructions with an operations workflow connected to RUT and AI translation.",
    h1: "Scheduling for cleaning companies where assignments, staff, and RUT stay connected",
    eyebrow: "Scheduling",
    intro:
      "Searches around cleaning company scheduling, cleaning schedule systems, and planning software show that companies want less split between calendar, staff, and customer data.",
    primaryKeyword: "cleaning company scheduling",
    secondaryKeywords: ["cleaning schedule system", "planning software for cleaning companies", "cleaning route planning", "recurring cleaning assignments"],
    heroPoints: ["Recurring jobs", "Routes and teams", "Instructions on mobile"],
    sections: [
      {
        title: "The schedule needs to understand the assignment",
        body:
          "For cleaning companies, placing a name in a calendar is not enough. The system should show customer instructions, the right team, the right time, and which RUT basis the assignment belongs to.",
        bullets: ["Plan recurring assignments", "Connect instructions to the staff view", "Reduce calls about address, time, and special requests"],
      },
      {
        title: "When scheduling becomes operations",
        body:
          "StädSync AI connects scheduling to work lists, AI translation, and RUT flow so admin and field staff work from the same structure.",
      },
    ],
    comparisonRows: [stadSyncComparisonRows.en[3], stadSyncComparisonRows.en[1]],
    faq: [
      {
        question: "Is this only a calendar tool?",
        answer:
          "No. The point is that the schedule connects to assignments, work instructions, worker PWA, and RUT records.",
      },
      {
        question: "Which keywords does this page target?",
        answer:
          "Cleaning company scheduling, cleaning schedule system, planning software for cleaning companies, and cleaning route planning.",
      },
      {
        question: "Can staff see their schedule on mobile?",
        answer:
          "The intended experience is a PWA-friendly worker view where staff see assignments and clear instructions directly on mobile.",
      },
    ],
  },
  "tidrapportering-stadforetag": {
    slug: "tidrapportering-stadforetag",
    pathname: "/stadsync-ai/tidrapportering-stadforetag",
    title: "Time Reporting for Cleaning Companies | Mobile Work View",
    description:
      "Connect time reporting, work orders, worker PWA, and assignment status to a clearer operations flow for cleaning companies.",
    h1: "Time reporting for cleaning companies that need traceability from field to admin",
    eyebrow: "Time reporting",
    intro:
      "Searches for time reporting, mobile apps for cleaning staff, and digital work orders point to the same need: faster status from staff working at customer sites.",
    primaryKeyword: "time reporting cleaning company",
    secondaryKeywords: ["mobile app cleaning staff", "digital work order cleaning", "cleaning work order", "assignment management cleaning"],
    heroPoints: ["Mobile status", "Work orders", "Traceable history"],
    sections: [
      {
        title: "From paper notes to status in the workflow",
        body:
          "When staff report time, deviations, and completion status in separate channels, admin slows down. A digital workflow makes assignments easier to follow from planning to invoicing and RUT.",
        bullets: ["See assignment status faster", "Connect time to customer and work order", "Reduce manual summary after the job"],
      },
      {
        title: "Traceability without overloading staff",
        body:
          "StädSync AI focuses on a simple PWA view where staff get the right instructions and can leave status without working inside a heavy admin system.",
      },
    ],
    comparisonRows: [stadSyncComparisonRows.en[3], stadSyncComparisonRows.en[2]],
    faq: [
      {
        question: "Is time reporting a separate module?",
        answer:
          "This page describes time reporting as part of operations: assignments, status, work instructions, and history should stay connected.",
      },
      {
        question: "Which keywords does this page match?",
        answer:
          "Time reporting cleaning company, mobile app cleaning staff, digital work order cleaning, and assignment management cleaning.",
      },
      {
        question: "Can it support RUT work?",
        answer:
          "Yes. When assignment, time, and customer data are connected, the RUT basis becomes easier to review.",
      },
    ],
  },
  "personnummer-gdpr-rut": {
    slug: "personnummer-gdpr-rut",
    pathname: "/stadsync-ai/personnummer-gdpr-rut",
    title: "Identity Numbers, GDPR, and RUT | Secure Customer Data",
    description:
      "How cleaning companies can handle Swedish identity numbers, RUT records, customer data, and GDPR with isolated storage, role control, and minimization.",
    h1: "Identity numbers, GDPR, and RUT for cleaning companies handling customer data every week",
    eyebrow: "Identity numbers and GDPR",
    intro:
      "Swedish cleaning companies often need personal identity numbers for RUT. At the same time, identity numbers are especially protected data in Sweden and should not spread across unnecessary systems, lists, or messages.",
    primaryKeyword: "identity number GDPR RUT",
    secondaryKeywords: ["GDPR cleaning company", "RUT identity number", "customer data cleaning company", "personal data cleaning"],
    heroPoints: ["Data minimization", "Role control", "Server-side handling"],
    sections: [
      {
        title: "RUT needs data, GDPR needs control",
        body:
          "The RUT flow needs correct buyer information, but that does not mean everyone in the business should see full identity numbers. A better system separates what admin needs, what staff need, and what AI should never receive.",
        bullets: ["Separate identity numbers from regular assignment data", "Show only necessary information to staff", "Log exports and changes"],
      },
      {
        title: "AI should not bypass data protection",
        body:
          "In StädSync AI, the goal is that AI helps with instructions and translation while sensitive RUT fields stay outside the AI flow.",
      },
    ],
    comparisonRows: [stadSyncComparisonRows.en[2], stadSyncComparisonRows.en[1]],
    faq: [
      {
        question: "Are Swedish identity numbers sensitive personal data under GDPR?",
        answer:
          "IMY states that Swedish identity numbers are not sensitive personal data under GDPR, but they are especially protected in Sweden and need extra care.",
      },
      {
        question: "Which keywords does this page target?",
        answer:
          "Identity number GDPR RUT, GDPR cleaning company, RUT identity number, customer data cleaning company, and personal data cleaning.",
      },
      {
        question: "Are identity numbers sent to AI?",
        answer:
          "No. The architecture is designed so AI works with instructions and translation, not full identity numbers or sensitive RUT fields.",
      },
    ],
  },
  "jamfor-system-stadforetag": {
    slug: "jamfor-system-stadforetag",
    pathname: "/stadsync-ai/jamfor-system-stadforetag",
    title: "Compare Systems for Cleaning Companies | What Should You Choose?",
    description:
      "Compare cleaning company systems by RUT, scheduling, mobile app, time reporting, GDPR, and AI translation before booking a demo.",
    h1: "Compare systems for cleaning companies by RUT, scheduling, staff, and GDPR",
    eyebrow: "Compare systems",
    intro:
      "Searches such as compare systems for cleaning companies, best system for cleaning companies, and alternatives to established vendors show that buyers want clearer selection criteria.",
    primaryKeyword: "compare systems for cleaning companies",
    secondaryKeywords: ["best system for cleaning companies", "TimeWave alternative", "Tengella alternative", "cleaning company software"],
    heroPoints: ["Selection criteria", "RUT and GDPR", "AI and staff workflow"],
    sections: [
      {
        title: "Start with the problem, not only the feature list",
        body:
          "A cleaning company should compare systems by how well they solve daily friction: recurring assignments, staff instructions, RUT basis, customer data, and time from completed work to export or invoice.",
        bullets: ["Do you need deep RUT handling?", "Does staff need a simple mobile view?", "Do you need AI translation for multilingual teams?", "Do you need stronger control over identity numbers and customer data?"],
      },
      {
        title: "When StädSync AI is the right alternative",
        body:
          "StädSync AI fits best when RUT, AI translation, and GDPR-ready operations matter more than adopting a large general business system.",
      },
    ],
    comparisonRows: stadSyncComparisonRows.en,
    faq: [
      {
        question: "Is this a TimeWave or Tengella comparison?",
        answer:
          "The page matches the search intent around comparing systems for cleaning companies, but focuses on selection criteria and when StädSync AI is a relevant alternative.",
      },
      {
        question: "Which keywords does this page target?",
        answer:
          "Compare systems for cleaning companies, best system for cleaning companies, TimeWave alternative, Tengella alternative, and cleaning company software.",
      },
      {
        question: "What should you prioritize first?",
        answer:
          "Start with the flows creating the most admin: schedule, RUT, time reporting, instructions, invoice basis, and data protection.",
      },
    ],
  },
  priser: {
    slug: "priser",
    pathname: "/stadsync-ai/priser",
    title: "StädSync AI Pricing | Packages from 999 kr/month",
    description:
      "Compare StädSync AI Base, Growth, and Premium packages for cleaning companies. AI translation, RUT workflow, PWA, and onboarding included.",
    h1: "StädSync AI pricing for cleaning companies that want a simple start",
    eyebrow: "Pricing",
    intro:
      "Choose a package by team size. Every package builds on the same foundation: AI communication, RUT flow, and worker PWA.",
    primaryKeyword: "StädSync AI pricing",
    secondaryKeywords: ["RUT system price", "cleaning company software price", "AI system cleaning company"],
    heroPoints: ["From 999 kr/month", "Onboarding included", "30-day risk-free evaluation"],
    sections: [
      {
        title: "Three packages by team size",
        body:
          "Base suits smaller teams, Growth suits growing companies with multiple routes, and Premium suits established companies with stronger traceability needs.",
        bullets: stadSyncPricingOffers.en.map((offer) => `${offer.name}: ${offer.audience}, ${offer.price}`),
      },
      {
        title: "What is included in the foundation?",
        body:
          "AI translation, RUT workflow, worker PWA, and onboarding are part of the setup to make the start easier.",
      },
    ],
    comparisonRows: [],
    faq: [
      {
        question: "Which package should a smaller cleaning company choose?",
        answer:
          "Base Package is made for 1 to 5 employees and suits companies that want control over RUT, scheduling, and instructions without heavy administration.",
      },
      {
        question: "Which package is standard for growing companies?",
        answer:
          "Growth is the standard package for 6 to 15 employees with multiple routes, recurring customers, and multilingual teams.",
      },
      {
        question: "Is there a lock-in period?",
        answer:
          "The page describes a 30-day risk-free evaluation with no lock-in after free setup.",
      },
    ],
  },
};

export const stadSyncSeoPages: Record<AppLocale, Record<StadSyncSeoSlug, StadSyncSeoPage>> = {
  sv: svPages,
  en: enPages,
};

export function getStadSyncSeoPage(locale: AppLocale, slug: string) {
  if (!stadSyncSeoSlugs.includes(slug as StadSyncSeoSlug)) {
    return null;
  }

  return stadSyncSeoPages[locale][slug as StadSyncSeoSlug];
}

export function getStadSyncSoftwareSchema(locale: AppLocale) {
  const description =
    locale === "sv"
      ? "StädSync AI är en driftplattform för svenska städföretag med RUT-automation, AI-översättning, arbetar-PWA och GDPR-säker drift."
      : "StädSync AI is an operations platform for Swedish cleaning companies with RUT automation, AI translation, worker PWA, and GDPR-ready workflows.";

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "StädSync AI",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, PWA",
    description,
    url: getAbsoluteUrl("/stadsync-ai", locale),
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "Sweden",
    },
    offers: stadSyncPricingOffers[locale].map((offer) => ({
      "@type": "Offer",
      name: offer.name,
      description: `${offer.audience}. ${offer.features.join(", ")}.`,
      price: offer.priceValue,
      priceCurrency: "SEK",
      availability: "https://schema.org/InStock",
      url: getAbsoluteUrl("/stadsync-ai", locale),
    })),
  };
}

export function getStadSyncServiceSchema(locale: AppLocale, page?: StadSyncSeoPage) {
  const serviceType = page?.primaryKeyword ?? (locale === "sv" ? "RUT-automation för städföretag" : "RUT automation for cleaning companies");
  const description =
    page?.description ??
    (locale === "sv"
      ? "AI-driven driftplattform för svenska städföretag."
      : "AI-driven operations platform for Swedish cleaning companies.");

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page?.h1 ?? "StädSync AI",
    serviceType,
    description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "Sweden",
    },
    url: getAbsoluteUrl(page?.pathname ?? "/stadsync-ai", locale),
  };
}

export function getStadSyncWebPageSchema(locale: AppLocale, page?: StadSyncSeoPage) {
  const title =
    page?.title ??
    (locale === "sv"
      ? "StädSync AI | RUT-automation och driftplattform för städföretag"
      : "StädSync AI | RUT Automation Platform for Cleaning Companies");
  const description =
    page?.description ??
    (locale === "sv"
      ? "StädSync AI samlar RUT, schema, AI-översättning, personal-PWA och GDPR-säker drift för svenska städföretag."
      : "StädSync AI connects RUT, scheduling, AI translation, worker PWA, and GDPR-ready operations for Swedish cleaning companies.");
  const keywords = page
    ? [page.primaryKeyword, ...page.secondaryKeywords]
    : stadSyncSeoSlugs.flatMap((slug) => {
        const seoPage = stadSyncSeoPages[locale][slug];
        return [seoPage.primaryKeyword, ...seoPage.secondaryKeywords];
      });

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: getAbsoluteUrl(page?.pathname ?? "/stadsync-ai", locale),
    inLanguage: locale === "sv" ? "sv-SE" : "en",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: keywords.slice(0, 12).map((keyword) => ({
      "@type": "DefinedTerm",
      name: keyword,
      inDefinedTermSet: locale === "sv" ? "Swedish cleaning company software search intents" : "Cleaning company software search intents",
    })),
    significantLink: stadSyncSeoSlugs.map((slug) =>
      getAbsoluteUrl(stadSyncSeoPages[locale][slug].pathname, locale),
    ),
  };
}

export function getStadSyncKeywordItemListSchema(locale: AppLocale) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: locale === "sv" ? "StädSync AI sökintentioner" : "StädSync AI search intent pages",
    itemListElement: stadSyncSeoSlugs.map((slug, index) => {
      const page = stadSyncSeoPages[locale][slug];

      return {
        "@type": "ListItem",
        position: index + 1,
        name: page.primaryKeyword,
        url: getAbsoluteUrl(page.pathname, locale),
      };
    }),
  };
}
