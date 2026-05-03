import type { AppLocale, InternalPathname } from "@/lib/site";

export type RestaurantPageKey =
  | "restaurant-digital-menu"
  | "restaurant-qr-menu"
  | "restaurant-ordering-system"
  | "restaurant-digital-menu-sweden";

export interface RestaurantFaqItem {
  question: string;
  answer: string;
}

export interface RestaurantVisualProof {
  title: string;
  description: string;
  points: string[];
  type: "table" | "guest" | "admin" | "kitchen";
}

export interface RestaurantComparisonRow {
  label: string;
  before: string;
  after: string;
}

export interface RestaurantPageContent {
  pathname: InternalPathname;
  title: string;
  description: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  eyebrow: string;
  intro: string;
  heroHighlights?: string[];
  heroPanelTitle?: string;
  heroPanelBody?: string;
  heroPanelPoints?: string[];
  heroMicrocopy?: string;
  problemTitle: string;
  problems: string[];
  problemFooter?: string;
  benefitTitle: string;
  benefits: Array<{ title: string; description: string }>;
  featureTitle: string;
  solutionIntro?: string;
  solutionClosingLine?: string;
  features: Array<{ title: string; description: string }>;
  howTitle: string;
  howIntro?: string;
  steps: string[];
  trustTitle: string;
  trustBody: string;
  visualProofs?: RestaurantVisualProof[];
  comparisonTitle?: string;
  comparisonIntro?: string;
  comparisonRows?: RestaurantComparisonRow[];
  demoHookEyebrow?: string;
  demoHookTitle?: string;
  demoHookBody?: string;
  demoHookMicrocopy?: string;
  faqTitle: string;
  faqs: RestaurantFaqItem[];
  ctaTitle: string;
  ctaBody: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryHrefLabel: string;
  relatedPages: Array<{
    pathname: InternalPathname;
    label: string;
    description: string;
  }>;
}

type RestaurantPageDictionary = Record<RestaurantPageKey, RestaurantPageContent>;

export const restaurantPages: Record<AppLocale, RestaurantPageDictionary> = {
  sv: {
    "restaurant-digital-menu": {
      pathname: "/restaurant-digital-menu",
      title: "Digital meny för restauranger | Modern meny som säljer bättre",
      description:
        "Byt ut pappersmenyer mot en snabb digital meny som är enkel att uppdatera, fungerar på mobilen och ger gästen en tydligare upplevelse.",
      h1: "Servera snabbare med en digital meny som gästen förstår direkt",
      primaryKeyword: "digital meny restaurang",
      secondaryKeywords: [
        "digital meny för restauranger",
        "digital restaurangmeny",
        "smart meny restaurang",
      ],
      eyebrow: "Digital meny",
      intro:
        "Gästen skannar QR-koden, ser menyn direkt i mobilen och kommer snabbare till ett tydligt val. Ni får färre avbrott, mindre stress och ett bättre tempo i servicen.",
      heroHighlights: [
        "QR på bordet",
        "Meny direkt i mobilen",
        "Tydligare beställning utan app",
      ],
      heroPanelTitle: "Det här ser ni direkt",
      heroPanelBody:
        "På några sekunder ser ni hur gästen öppnar menyn, hur beställningen känns i mobilen och varför flödet blir lugnare för personalen.",
      heroPanelPoints: [
        "Gästvy i mobilen",
        "Tydligt första steg vid bordet",
        "Lätt att testa innan ni bokar",
      ],
      heroMicrocopy: "Tar mindre än 10 sekunder att förstå.",
      problemTitle: "Känns det här igen?",
      problems: [
        "Beställningar måste upprepas.",
        "Gäster väntar innan något händer.",
        "Små fel skapar onödig stress.",
        "Personalen hinner inte med allt samtidigt.",
      ],
      problemFooter: "Det är här det börjar bli onödigt tungt.",
      benefitTitle: "Vad det förändrar i restaurangen",
      benefits: [
        {
          title: "Beställningen börjar direkt",
          description: "Gästen kommer igång utan att vänta på meny eller första instruktion från personalen.",
        },
        {
          title: "Färre avbrott för personalen",
          description: "Tydligare meny och tydligare val minskar onödiga frågor mitt i servicen.",
        },
        {
          title: "Mindre stress när tempot ökar",
          description: "När färre småfel och upprepningar måste fångas upp blir arbetet lugnare även under rusning.",
        },
        {
          title: "Tydligare flöde med bättre tempo",
          description: "Från bord till meny och vidare mot beställning blir vägen rakare och lättare att följa.",
        },
      ],
      featureTitle: "Så gör den digitala menyn jobbet enklare",
      solutionIntro:
        "Gäst skannar QR, menyn öppnas direkt, gästen väljer i lugn och ro och beställningen blir tydligare från början.",
      solutionClosingLine: "Det här tar bort onödiga moment från både gästen och personalen.",
      features: [
        {
          title: "Gäst skannar QR",
          description: "QR-koden ligger där beslutet faktiskt börjar: direkt på bordet.",
        },
        {
          title: "Menyn öppnas direkt",
          description: "Ingen app, ingen PDF och inget extra steg som bromsar upplevelsen.",
        },
        {
          title: "Gästen väljer i lugn och ro",
          description: "Rätter, priser och detaljer ligger tydligt framför gästen när valet ska göras.",
        },
        {
          title: "Beställningen blir tydlig",
          description: "Mindre utrymme för missförstånd gör nästa steg lugnare för både gäst och personal.",
        },
      ],
      howTitle: "Så ser det ut i verkligheten",
      howIntro: "Föreställ er ett vanligt bord under lunch eller kvällsservice.",
      steps: [
        "En gäst sätter sig vid bordet.",
        "Skannar QR-koden.",
        "Ser menyn direkt i mobilen.",
        "Väljer utan stress.",
        "Beställningen går vidare tydligt.",
      ],
      trustTitle: "Byggd för riktiga restaurangflöden",
      trustBody:
        "Byggd för att fungera när gästen sitter vid bordet, när personalen växlar mellan flera saker och när beställningar måste vara tydliga direkt.",
      visualProofs: [
        {
          title: "QR på bordet",
          description: "Ett första steg som känns självklart och startar beställningen utan väntan.",
          points: [
            "Lätt att förstå på några sekunder",
            "Passar både lunch och kvällsservice",
            "Skapar tydlighet direkt vid bordet",
          ],
          type: "table",
        },
        {
          title: "Gästens mobilmeny",
          description: "En tydlig menyupplevelse där gästen ser rätt information utan att behöva fråga först.",
          points: [
            "Tydliga kategorier och rätter",
            "Ingredienser, kalorier och pris i samma vy",
            "Byggd för skanning i mobilen",
          ],
          type: "guest",
        },
        {
          title: "Adminvy för restaurangen",
          description: "När ni vill bygga vidare finns en enkel väg till bättre överblick för personalen.",
          points: [
            "Order och service i samma flöde",
            "Tablet-vänlig överblick",
            "Klar struktur i beställningar",
          ],
          type: "admin",
        },
        {
          title: "Kök och orderflöde",
          description: "Menyn kan bli första steget mot tydligare koppling mellan bord, meny och kök.",
          points: [
            "Mindre manuella överlämningar",
            "Tydligare status mellan delarna",
            "Lättare att bygga vidare steg för steg",
          ],
          type: "kitchen",
        },
      ],
      comparisonTitle: "Varför digital meny känns lättare i vardagen",
      comparisonIntro:
        "Skillnaden handlar inte bara om utseende. Den märks i hur snabbt gästen kommer igång och hur lite friktion personalen behöver bära.",
      comparisonRows: [
        {
          label: "Första steget vid bordet",
          before: "Gästen väntar på meny eller hjälp innan något händer.",
          after: "Gästen öppnar menyn direkt och kommer snabbare in i valet.",
        },
        {
          label: "Frågor till personalen",
          before: "Fler småfrågor måste tas mitt i servicen.",
          after: "Mer information finns tydligt redan i menyn.",
        },
        {
          label: "Menyändringar",
          before: "Nya priser och rätter kräver mer manuellt arbete.",
          after: "Menyn kan uppdateras direkt utan ny tryckning.",
        },
        {
          label: "Tempo i service",
          before: "Små stopp och upprepningar äter tid under passet.",
          after: "Flödet blir tydligare och lättare att hålla uppe.",
        },
      ],
      demoHookEyebrow: "Live demo",
      demoHookTitle: "Se exakt hur det fungerar",
      demoHookBody:
        "Testa hur en gäst beställer, direkt i mobilen.",
      demoHookMicrocopy: "Inga förberedelser. Tar några sekunder.",
      faqTitle: "Vanliga frågor om digital meny för restauranger",
      faqs: [
        {
          question: "Behöver gästen ladda ner en app?",
          answer: "Nej. Menyn öppnas direkt i webbläsaren via QR-koden.",
        },
        {
          question: "Fungerar det på alla telefoner?",
          answer: "Ja. Upplägget är gjort för att fungera direkt i vanliga mobilwebbläsare.",
        },
        {
          question: "Hur snabbt kan vi komma igång?",
          answer: "När menyinnehållet är klart går det snabbt att sätta upp en fungerande version.",
        },
        {
          question: "Kan vi ändra menyn själva?",
          answer: "Ja. Rätter, priser och information ska gå att uppdatera utan att trycka nytt material.",
        },
        {
          question: "Passar detta mindre restauranger också?",
          answer: "Ja. Mindre team märker ofta nyttan extra snabbt eftersom varje avbrott känns direkt i driften.",
        },
      ],
      ctaTitle: "Redo att göra beställningen enklare?",
      ctaBody:
        "Vi hjälper dig komma igång snabbt - utan krångel.",
      primaryCta: "Se hur det fungerar",
      secondaryCta: "Boka demo",
      secondaryHrefLabel: "Live demo",
      relatedPages: [
        {
          pathname: "/restaurant-qr-menu",
          label: "QR-meny för restauranger",
          description: "För restauranger som vill få igång beställningen direkt från bordet.",
        },
        {
          pathname: "/restaurant-ordering-system",
          label: "Restaurang beställningssystem",
          description: "För verksamheter som vill koppla ihop meny, service och kök i samma flöde.",
        },
      ],
    },
    "restaurant-qr-menu": {
      pathname: "/restaurant-qr-menu",
      title: "QR-meny för restauranger | Enkel beställning direkt från bordet",
      description:
        "Låt gäster skanna, se menyn direkt och beställa smidigare. En QR-meny för restauranger som vill minska väntetid och höja upplevelsen.",
      h1: "QR-meny för restauranger med snabbare start vid bordet",
      primaryKeyword: "qr meny restaurang",
      secondaryKeywords: ["qr kod meny restaurang", "meny via qr kod", "beställa via qr kod restaurang"],
      eyebrow: "QR-meny",
      intro:
        "En QR-meny gör det enkelt för gästen att komma igång utan att vänta på menyutdelning eller extra instruktioner från personalen.",
      problemTitle: "Varje extra steg vid bordet kostar tempo",
      problems: [
        "Gästen väntar på meny i stället för att börja välja direkt.",
        "Personalen behöver upprepa samma information bord efter bord.",
        "Beställningar blir långsammare när menyn inte är tillgänglig i rätt kontext.",
      ],
      benefitTitle: "Varför restauranger väljer QR-meny",
      benefits: [
        {
          title: "Direkt åtkomst vid bordet",
          description: "Gästen skannar QR-koden och öppnar rätt meny utan extra steg.",
        },
        {
          title: "Tydligare beställningsstart",
          description: "Fler gäster kommer snabbare till beslut när meny, priser och detaljer ligger direkt framför dem.",
        },
        {
          title: "Mindre belastning på personalen",
          description: "Personalen kan fokusera mer på service och mindre på att bära meny eller svara på samma grundfrågor.",
        },
      ],
      featureTitle: "En QR-lösning som är byggd för verklig service",
      features: [
        {
          title: "Rätt meny i rätt bordskontext",
          description: "QR-koden kan länka direkt till rätt meny och rätt flöde för gästen.",
        },
        {
          title: "Snabb mobilupplevelse",
          description: "Gästen får en tydlig vy som öppnas snabbt och känns enkel att använda.",
        },
        {
          title: "Naturlig väg vidare till beställning",
          description: "QR-meny fungerar som första steget in i ett smidigare orderflöde.",
        },
      ],
      howTitle: "Så fungerar en QR-meny i praktiken",
      steps: [
        "Vi sätter upp QR-koder som leder till rätt meny och rätt restaurangupplevelse.",
        "Menyn presenteras tydligt med kategorier, detaljer och ett mobilflöde som känns naturligt.",
        "Gästen kommer snabbare in i beställningen och personalen slipper onödig friktion.",
      ],
      trustTitle: "Byggd för att minska väntetid utan att göra upplevelsen teknisk",
      trustBody:
        "QR-menyn ska kännas enkel för gästen och självklar i serviceflödet, inte som ett extra hinder mellan bord och beställning.",
      faqTitle: "Vanliga frågor om QR-meny",
      faqs: [
        {
          question: "Är QR-meny svårt för gäster att använda?",
          answer: "Nej. Om länken öppnas snabbt och menyflödet är tydligt känns QR-meny naturligt även för gäster som inte vill använda något avancerat system.",
        },
        {
          question: "Kan QR-menyn användas utan full onlinebeställning?",
          answer: "Ja. QR-meny kan börja som en tydlig digital meny och sedan byggas ut med beställningssteg när det passar driften.",
        },
        {
          question: "Passar QR-meny både restaurang och café?",
          answer: "Ja. QR-kod fungerar bra i allt från lunchrestauranger till caféer och hotellservering där snabb menyåtkomst är viktig.",
        },
      ],
      ctaTitle: "Vill ni se hur en QR-meny fungerar i er miljö?",
      ctaBody:
        "Öppna liveflödet för att testa upplevelsen eller boka en demo så går vi igenom hur QR-menyn kan användas hos er.",
      primaryCta: "Boka demo",
      secondaryCta: "Öppna live demo",
      secondaryHrefLabel: "QR-demo",
      relatedPages: [
        {
          pathname: "/restaurant-digital-menu",
          label: "Digital meny för restauranger",
          description: "För restauranger som vill modernisera själva menyupplevelsen.",
        },
        {
          pathname: "/restaurant-digital-menu-sweden",
          label: "Digital meny i Sverige",
          description: "För svenska restauranger som vill komma igång snabbt.",
        },
      ],
    },
    "restaurant-ordering-system": {
      pathname: "/restaurant-ordering-system",
      title: "Restaurang beställningssystem | Digital meny, serviceflöde och kök",
      description:
        "Ett restaurang beställningssystem som kopplar ihop gäst, servering och kök. Få tydligare orderflöde, färre fel och bättre överblick.",
      h1: "Ett beställningssystem för restauranger som förenklar hela flödet",
      primaryKeyword: "restaurang beställningssystem",
      secondaryKeywords: ["restaurant ordering system", "qr ordering system", "restaurant automation system"],
      eyebrow: "Beställningssystem",
      intro:
        "När meny, service och kök sitter ihop i samma digitala flöde blir det lättare att servera snabbare, prioritera rätt och minska missförstånd.",
      problemTitle: "Många restauranger har meny, service och kök i separata spår",
      problems: [
        "Order behöver förtydligas när bord, servering och kök saknar samma livevy.",
        "Rusning blir svårare när teamet inte ser status från ny order till klar order.",
      ],
      benefitTitle: "Vad ett tydligare beställningssystem ger",
      benefits: [
        {
          title: "Färre missförstånd",
          description: "Order och status blir tydligare när teamet arbetar i samma flöde.",
        },
        {
          title: "Bättre överblick för teamet",
          description: "Servering och kök ser vad som händer härnäst utan extra avstämningar.",
        },
      ],
      featureTitle: "Komponenter i systemet",
      features: [
        {
          title: "Digital meny för gästen",
          description: "Ett tydligt första steg där gästen ser rätt meny och kan beställa utan onödig väntan.",
        },
        {
          title: "Tablet-vänlig adminvy",
          description: "En serviceöverblick för order, waiter requests och status i samma arbetsflöde.",
        },
        {
          title: "Kitchen display system",
          description: "Ett fokuserat köksläge där orderstatus blir enklare att läsa och prioritera.",
        },
      ],
      howTitle: "Så fungerar systemet",
      steps: [
        "Gäst beställer",
        "Teamet ser i realtid",
        "Köket agerar direkt",
      ],
      trustTitle: "Fokuserat på restaurangflöde, inte bara på beställning",
      trustBody:
        "Det viktiga är inte bara att ordern skickas, utan att hela arbetsflödet från gäst till kök blir tydligare för teamet.",
      faqTitle: "Vanliga frågor om restaurang beställningssystem",
      faqs: [
        {
          question: "Är detta bara för fullservice-restauranger?",
          answer: "Nej. Systemet passar även caféer, lunchkoncept och andra verksamheter som vill tydliggöra meny och orderflöde.",
        },
        {
          question: "Kan personalen fortfarande ta order manuellt?",
          answer: "Ja. Målet är att minska friktion, inte låsa in driften i ett enda arbetssätt.",
        },
        {
          question: "Vad är skillnaden mot bara en digital meny?",
          answer: "Ett beställningssystem kopplar ihop meny, servicevy och kök så att hela arbetsflödet blir tydligare, inte bara presentationsytan för gästen.",
        },
      ],
      ctaTitle: "Vill ni se hela flödet från meny till kök?",
      ctaBody:
        "Boka en genomgång om ni vill se hur ett tydligare beställningssystem kan fungera i just er restaurang.",
      primaryCta: "Boka demo",
      secondaryCta: "Testa liveflödet",
      secondaryHrefLabel: "Systemdemo",
      relatedPages: [
        {
          pathname: "/restaurant-digital-menu",
          label: "Digital meny för restauranger",
          description: "För restauranger som vill börja med själva menyupplevelsen.",
        },
        {
          pathname: "/restaurant-qr-menu",
          label: "QR-meny för restauranger",
          description: "För verksamheter som vill få igång beställningen direkt från bordet.",
        },
      ],
    },
    "restaurant-digital-menu-sweden": {
      pathname: "/restaurant-digital-menu-sweden",
      title: "Digital meny i Sverige | För restauranger som vill gå från papper till QR",
      description:
        "För svenska restauranger som vill komma igång snabbt med digital meny, QR-kod, tydligare service och modern gästupplevelse.",
      h1: "Digital meny i Sverige för restauranger som vill komma igång snabbt",
      primaryKeyword: "digital meny sverige",
      secondaryKeywords: ["digital menu Sweden", "qr menu Sweden", "restaurang automation Sverige"],
      eyebrow: "Sverige",
      intro:
        "Byggd för hur restauranger i Sverige faktiskt jobbar – snabbt, enkelt och utan krångel.",
      heroHighlights: [
        "Svenskt gränssnitt",
        "Fungerar direkt i mobilen",
        "Ingen installation behövs",
      ],
      heroPanelPoints: [
        "Digital meny med QR-kod",
        "Mobil upplevelse för gästen",
        "Redo att bygga vidare",
      ],
      problemTitle: "Det svenska restaurangtempot kräver enkel drift",
      problems: [
        "Menyändringar måste gå snabbt när lunch, middag och kampanjer växlar under veckan.",
        "Personalen behöver lösningar som går att förstå direkt, inte system som kräver tung upplärning.",
        "Gäster förväntar sig en modern och enkel upplevelse, särskilt i mobila förstamiljöer.",
      ],
      benefitTitle: "Vad som gör lösningen relevant för Sverige",
      benefits: [
        {
          title: "Byggd för svenska restauranger",
          description: "Språk, tonalitet och arbetsflöde utgår från hur restauranger i Sverige faktiskt jobbar.",
        },
        {
          title: "Snabb att testa",
          description: "Det går att visa menyn, adminflödet och köksläget live utan lång implementation innan beslut.",
        },
        {
          title: "Lätt att skala vidare",
          description: "Börja med meny och QR, och bygg vidare mot ett tydligare order- och serviceflöde när ni är redo.",
        },
      ],
      featureTitle: "Starta med digital meny – bygg vidare när ni är redo",
      solutionIntro:
        "Börja med en tydlig mobilmeny som gästen förstår direkt. Lägg till orderflöde, admin och köksvy när driften behöver nästa steg.",
      features: [
        {
          title: "Digital meny först",
          description: "En snabb väg från pappersmeny till mobilanpassad meny.",
        },
        {
          title: "Enkel att använda",
          description: "Tydlig för gäster och personal utan tung upplärning.",
        },
        {
          title: "Byggbar lösning",
          description: "Lägg till admin, order och kök när ni är redo.",
        },
      ],
      howTitle: "Så kommer ni igång",
      steps: [
        "Gäst öppnar menyn",
        "Beställning skickas direkt",
        "Köket ser allt i realtid",
      ],
      trustTitle: "Tydligt kommersiellt erbjudande, inte ett generiskt teknikprojekt",
      trustBody:
        "Fokus ligger på konkret restaurangnytta: snabbare service, färre missförstånd, enklare menyhantering och bättre överblick.",
      faqTitle: "Vanliga frågor om digital meny i Sverige",
      faqs: [
        {
          question: "Är detta relevant även för mindre restauranger?",
          answer: "Ja. Målet är att göra menyn och orderflödet tydligare utan att lösningen blir tung eller svår att införa.",
        },
        {
          question: "Kan vi börja utan att byta allt på en gång?",
          answer: "Ja. Många börjar med digital meny och QR-kod och lägger till admin- eller köksflöde efterhand.",
        },
        {
          question: "Är svenska och engelska möjliga samtidigt?",
          answer: "Ja. Det går att prioritera svenska för SEO och drift, samtidigt som engelska finns för gäster som behöver det.",
        },
      ],
      ctaTitle: "Boka demo och se hur det fungerar i din restaurang",
      ctaBody:
        "Se en svensk, restaurangfokuserad lösning i praktiken och välj om ni vill börja enkelt eller bygga vidare.",
      primaryCta: "Boka demo",
      secondaryCta: "Se live demo",
      secondaryHrefLabel: "Live demo",
      relatedPages: [
        {
          pathname: "/restaurant-digital-menu",
          label: "Digital meny för restauranger",
          description: "För fokus på menyupplevelse och tydlig presentation.",
        },
        {
          pathname: "/restaurant-ordering-system",
          label: "Restaurang beställningssystem",
          description: "För fokus på hela orderflödet från gäst till kök.",
        },
      ],
    },
  },
  en: {
    "restaurant-digital-menu": {
      pathname: "/restaurant-digital-menu",
      title: "Digital Menu for Restaurants | A Modern Menu That Sells Better",
      description:
        "Replace printed menus with a fast digital menu that is easy to update, mobile-friendly, and clearer for guests.",
      h1: "Digital menu for restaurants that want faster service and easier ordering",
      primaryKeyword: "digital menu restaurant",
      secondaryKeywords: ["digital menu for restaurants", "smart menu for restaurants", "digital restaurant menu"],
      eyebrow: "Digital menu",
      intro:
        "Smart Art AI builds digital menus for restaurants that want a faster table experience for guests and a simpler day-to-day workflow for the team.",
      problemTitle: "When the menu feels slow, the whole visit feels slower",
      problems: [
        "Printed menus become outdated as soon as prices, dishes, or allergen details change.",
        "Guests wait for menus or explanations instead of starting to order right away.",
        "Weak presentation makes it harder to push signature dishes, add-ons, and promotions.",
      ],
      benefitTitle: "What a digital menu improves",
      benefits: [
        {
          title: "Faster guest experience",
          description: "Guests can open the menu instantly on mobile without downloading an app.",
        },
        {
          title: "Simpler updates",
          description: "Change a price, ingredient, or dish without reprinting or managing multiple menu versions.",
        },
        {
          title: "Stronger presentation",
          description: "Highlight visuals, signature dishes, and categories in a way that feels modern and premium.",
        },
      ],
      featureTitle: "What is included",
      features: [
        {
          title: "Mobile-first menu",
          description: "Built to be quick and easy to use on a guest's phone, even in high-friction moments.",
        },
        {
          title: "Categories, ingredients, and calories",
          description: "Structure that helps guests decide faster and reduces repeat questions to staff.",
        },
        {
          title: "Multilingual support",
          description: "Swedish first, with English available for international guests.",
        },
      ],
      howTitle: "How it works",
      steps: [
        "We review your current menu, workflow, and where menu updates create friction today.",
        "We set up the digital menu with the right structure, language, and QR flow for your guests.",
        "You go live with a menu that is easier to use, easier to update, and easier to present well.",
      ],
      trustTitle: "Built for restaurant operations, not just for looks",
      trustBody:
        "The focus is clarity in service, fast loading, and a menu flow that genuinely supports both guests and staff.",
      faqTitle: "Common questions about digital menus for restaurants",
      faqs: [
        {
          question: "Do guests need to download an app?",
          answer: "No. The menu opens directly in the browser through a QR code, which keeps the experience simple.",
        },
        {
          question: "Can we show ingredients and calories?",
          answer: "Yes. The menu can be structured with categories, ingredients, calories, and other information you want to make visible.",
        },
        {
          question: "Does this work for small venues too?",
          answer: "Yes. The setup works for smaller cafes as well as restaurants with more complex service flows.",
        },
      ],
      ctaTitle: "Want to show a clearer menu before your next menu update?",
      ctaBody:
        "Start by testing how the guest sees the menu on mobile. Once the flow feels right, book a demo to discuss your own setup.",
      primaryCta: "Try the guest ordering flow",
      secondaryCta: "Book a demo",
      secondaryHrefLabel: "Live demo",
      relatedPages: [
        {
          pathname: "/restaurant-qr-menu",
          label: "QR menu for restaurants",
          description: "For venues that want to start the order directly from the table.",
        },
        {
          pathname: "/restaurant-ordering-system",
          label: "Restaurant ordering system",
          description: "For teams that want menu, service, and kitchen in one clearer workflow.",
        },
      ],
    },
    "restaurant-qr-menu": {
      pathname: "/restaurant-qr-menu",
      title: "QR Menu for Restaurants | Simple Ordering Directly from the Table",
      description:
        "Let guests scan, view the menu instantly, and order with less friction. Built for restaurants that want shorter wait times and a better guest experience.",
      h1: "QR menu for restaurants with a faster start at the table",
      primaryKeyword: "qr menu restaurant",
      secondaryKeywords: ["qr ordering system", "qr code menu restaurant", "order by qr code restaurant"],
      eyebrow: "QR menu",
      intro:
        "A QR menu gives guests direct access to the menu without waiting for staff to hand it over or explain the next step.",
      problemTitle: "Every extra step at the table slows service down",
      problems: [
        "Guests wait for menus instead of starting to browse right away.",
        "Staff repeat the same menu guidance table after table.",
        "Ordering slows down when the menu is not available in the right context.",
      ],
      benefitTitle: "Why restaurants choose QR menus",
      benefits: [
        {
          title: "Instant table access",
          description: "Guests scan the code and open the correct menu immediately.",
        },
        {
          title: "Cleaner ordering start",
          description: "More guests move faster into a decision when the menu is already in their hands.",
        },
        {
          title: "Less staff friction",
          description: "Your team can spend more time on service and less time carrying menus or repeating basics.",
        },
      ],
      featureTitle: "A QR setup designed for real service",
      features: [
        {
          title: "Right menu in the right context",
          description: "The QR code can open the correct menu and route for the table experience you want.",
        },
        {
          title: "Fast mobile experience",
          description: "Guests get a clear, fast, mobile-first view instead of a clumsy PDF.",
        },
        {
          title: "Natural path into ordering",
          description: "The QR menu becomes the first step in a smoother restaurant ordering flow.",
        },
      ],
      howTitle: "How a QR menu works in practice",
      steps: [
        "We set up QR codes that link to the right restaurant menu and mobile experience.",
        "The menu is presented with clear categories, dish details, and a flow that feels natural to use.",
        "Guests move faster into ordering while staff lose less time to manual menu handling.",
      ],
      trustTitle: "Built to reduce wait time without making the experience feel technical",
      trustBody:
        "The QR menu should feel easy for the guest and natural in the service flow, not like an extra barrier.",
      faqTitle: "Common questions about QR menus",
      faqs: [
        {
          question: "Is a QR menu hard for guests to use?",
          answer: "No. When the link opens fast and the menu flow is clear, it feels simple and natural for most guests.",
        },
        {
          question: "Can we start without full online ordering?",
          answer: "Yes. Many restaurants start with a clearer digital menu and then extend it into ordering later.",
        },
        {
          question: "Does this work for cafes too?",
          answer: "Yes. QR menus work well for cafes, lunch restaurants, hotel service, and other service-heavy concepts.",
        },
      ],
      ctaTitle: "Want to see how a QR menu would work in your venue?",
      ctaBody:
        "Open the live flow to try the experience or book a demo to walk through how the setup would work for your restaurant.",
      primaryCta: "Book a demo",
      secondaryCta: "Open live demo",
      secondaryHrefLabel: "QR demo",
      relatedPages: [
        {
          pathname: "/restaurant-digital-menu",
          label: "Digital menu for restaurants",
          description: "For restaurants focused on the overall menu experience.",
        },
        {
          pathname: "/restaurant-digital-menu-sweden",
          label: "Digital menu in Sweden",
          description: "For Swedish restaurants that want a practical local rollout.",
        },
      ],
    },
    "restaurant-ordering-system": {
      pathname: "/restaurant-ordering-system",
      title: "Restaurant Ordering System | Digital Menu, Service Flow, and Kitchen",
      description:
        "A restaurant ordering system that connects the guest, service team, and kitchen. Get clearer order flow, fewer mistakes, and better visibility.",
      h1: "A restaurant ordering system that simplifies the full workflow",
      primaryKeyword: "restaurant ordering system",
      secondaryKeywords: ["qr ordering system", "restaurant automation system", "digital ordering for restaurants"],
      eyebrow: "Ordering system",
      intro:
        "When the menu, service view, and kitchen mode are connected, restaurants can move faster with fewer misunderstandings and clearer priorities.",
      problemTitle: "Many restaurants still run menu, service, and kitchen as separate tracks",
      problems: [
        "Orders need clarification when table, service, and kitchen do not share the same live view.",
        "Rush periods get harder when the team cannot follow status from new order to ready order.",
      ],
      benefitTitle: "What a clearer ordering system improves",
      benefits: [
        {
          title: "Fewer misunderstandings",
          description: "Orders and status become clearer when the team works in the same flow.",
        },
        {
          title: "Better visibility for the team",
          description: "Service and kitchen see what needs attention next without extra check-ins.",
        },
      ],
      featureTitle: "Core system components",
      features: [
        {
          title: "Digital guest menu",
          description: "The first step where guests access the right menu and move into ordering with less friction.",
        },
        {
          title: "Tablet-friendly admin view",
          description: "A live service view for orders, waiter requests, and status in one responsive workflow.",
        },
        {
          title: "Kitchen display system",
          description: "A focused kitchen view where new, in-progress, and ready orders are easier to scan and manage.",
        },
      ],
      howTitle: "How the workflow works",
      steps: [
        "Guest orders",
        "The team sees it in real time",
        "Kitchen acts immediately",
      ],
      trustTitle: "Focused on restaurant workflow, not just on order capture",
      trustBody:
        "The point is not only to send orders faster, but to make the full path from guest to kitchen clearer for the team.",
      faqTitle: "Common questions about restaurant ordering systems",
      faqs: [
        {
          question: "Is this only for full-service restaurants?",
          answer: "No. It also works for cafes, lunch concepts, hotels, and other service-heavy venues that want clearer menu and order flow.",
        },
        {
          question: "Can staff still take manual orders?",
          answer: "Yes. The goal is to reduce friction, not force one rigid way of working.",
        },
        {
          question: "How is this different from only having a digital menu?",
          answer: "A full ordering system connects the guest menu, service view, and kitchen flow instead of improving the menu surface alone.",
        },
      ],
      ctaTitle: "Want to see the full flow from menu to kitchen?",
      ctaBody:
        "Book a walkthrough to see how a clearer ordering system could fit your restaurant and operating style.",
      primaryCta: "Book a demo",
      secondaryCta: "Try the live flow",
      secondaryHrefLabel: "System demo",
      relatedPages: [
        {
          pathname: "/restaurant-digital-menu",
          label: "Digital menu for restaurants",
          description: "For teams that want to start with the menu experience.",
        },
        {
          pathname: "/restaurant-qr-menu",
          label: "QR menu for restaurants",
          description: "For venues that want to speed up the start of ordering at the table.",
        },
      ],
    },
    "restaurant-digital-menu-sweden": {
      pathname: "/restaurant-digital-menu-sweden",
      title: "Digital Menu in Sweden | For Restaurants Moving from Paper to QR",
      description:
        "For restaurants in Sweden that want to launch a digital menu fast with QR access, clearer service, and a modern guest experience.",
      h1: "Digital menu in Sweden for restaurants that want a faster rollout",
      primaryKeyword: "digital menu Sweden",
      secondaryKeywords: ["digital menu Sweden restaurant", "qr menu Sweden", "restaurant automation Sweden"],
      eyebrow: "Sweden",
      intro:
        "Built for how restaurants in Sweden actually work: fast, simple, and without friction.",
      heroHighlights: [
        "Swedish interface",
        "Works directly on mobile",
        "No installation needed",
      ],
      heroPanelPoints: [
        "Digital menu with QR code",
        "Mobile guest experience",
        "Ready to expand later",
      ],
      problemTitle: "Swedish restaurant operations need practical tools, not extra complexity",
      problems: [
        "Menus change quickly across lunch, dinner, seasonal items, and campaigns.",
        "Teams need something intuitive enough to use fast, not another system that requires training overhead.",
        "Guests expect a modern experience that still feels easy and business-like.",
      ],
      benefitTitle: "Why this is relevant in Sweden",
      benefits: [
        {
          title: "Built for Swedish restaurants",
          description: "The copy, tone, and workflow are designed around how restaurants in Sweden actually operate.",
        },
        {
          title: "Fast to test",
          description: "You can show the menu, admin view, and kitchen mode live before making a larger decision.",
        },
        {
          title: "Easy to expand later",
          description: "Start with menu and QR, then expand into admin or kitchen flow when the timing is right.",
        },
      ],
      featureTitle: "Start with a digital menu, then expand when you are ready",
      solutionIntro:
        "Begin with a clear mobile menu that guests understand immediately. Add ordering, admin, and kitchen workflow when operations need the next step.",
      features: [
        {
          title: "Digital menu first",
          description: "A fast path from printed menu to mobile-friendly menu.",
        },
        {
          title: "Easy to use",
          description: "Clear for guests and staff without heavy training.",
        },
        {
          title: "Expandable setup",
          description: "Add admin, orders, and kitchen when you are ready.",
        },
      ],
      howTitle: "How you get started",
      steps: [
        "Guest opens the menu",
        "Order is sent directly",
        "Kitchen sees everything in real time",
      ],
      trustTitle: "A clear commercial offer, not a vague tech project",
      trustBody:
        "The focus stays on concrete restaurant outcomes: faster service, fewer misunderstandings, easier menu updates, and better operational clarity.",
      faqTitle: "Common questions about digital menus in Sweden",
      faqs: [
        {
          question: "Is this relevant for smaller venues too?",
          answer: "Yes. The goal is to make the menu and ordering flow clearer without turning the setup into a heavy project.",
        },
        {
          question: "Can we start without changing everything at once?",
          answer: "Yes. Many venues start with the digital menu and QR layer, then expand into admin or kitchen flow later.",
        },
        {
          question: "Can Swedish and English run side by side?",
          answer: "Yes. Swedish can stay primary for SEO and operations while English is available for guests who need it.",
        },
      ],
      ctaTitle: "Book a demo and see how it works in your restaurant",
      ctaBody:
        "See a Sweden-focused restaurant solution in practice and choose whether to start simple or expand later.",
      primaryCta: "Book a demo",
      secondaryCta: "See live demo",
      secondaryHrefLabel: "Live demo",
      relatedPages: [
        {
          pathname: "/restaurant-digital-menu",
          label: "Digital menu for restaurants",
          description: "For a menu-first perspective focused on guest experience.",
        },
        {
          pathname: "/restaurant-ordering-system",
          label: "Restaurant ordering system",
          description: "For a full workflow view from guest to kitchen.",
        },
      ],
    },
  },
};

export function getRestaurantPage(locale: AppLocale, key: RestaurantPageKey) {
  return restaurantPages[locale][key];
}

export const homepageContent = {
  sv: {
    title: "Digital meny för restauranger i Sverige",
    subtitle:
      "Smart Art AI hjälper restauranger att gå från pappersmeny till en tydligare digital meny som är enklare att visa upp, lättare att uppdatera och snabbare för gästen att använda.",
    eyebrow: "Restaurangfokus",
    primaryCta: "Boka demo",
    secondaryCta: "Se hur det fungerar",
    trustPoints: ["Snabbare service", "Enklare menyhantering", "Tydligare beställningsstart"],
    sectionTitle: "Det här gör erbjudandet tydligt för både Google och restaurangägaren",
    sectionIntro:
      "Huvudfokus är ett konkret erbjudande: digital meny för restauranger som vill göra menyn tydligare och vägen till beställning enklare.",
    restaurantCards: [
      {
        pathname: "/restaurant-digital-menu" as const,
        label: "Digital meny för restauranger",
        description: "För restauranger som vill göra menyn snabbare, tydligare och enklare att uppdatera.",
      },
      {
        pathname: "/restaurant-qr-menu" as const,
        label: "QR-meny för restauranger",
        description: "För verksamheter som vill få igång beställningen direkt från bordet.",
      },
      {
        pathname: "/restaurant-ordering-system" as const,
        label: "Restaurang beställningssystem",
        description: "För team som vill koppla ihop gäst, service och kök i samma flöde.",
      },
      {
        pathname: "/restaurant-digital-menu-sweden" as const,
        label: "Digital meny i Sverige",
        description: "För svenska restauranger som vill gå från papper till QR med ett tydligt upplägg.",
      },
    ],
    outcomesTitle: "Vad restaurangen märker i vardagen",
    outcomes: [
      "Gästen kommer snabbare in i beställningen.",
      "Personalen slipper fler repetitiva menyfrågor.",
      "Order och service blir lättare att följa live.",
      "Menyn blir enklare att hålla modern och aktuell.",
    ],
    secondaryTitle: "Behöver ni mer än en meny?",
    secondaryBody:
      "Smart Art AI kan även hjälpa till med bredare automatisering och digitala flöden, men det ligger under restaurangerbjudandet i strukturen eftersom det inte ska försvaga huvudbudskapet.",
  },
  en: {
    title: "Digital menu for restaurants in Sweden",
    subtitle:
      "Smart Art AI helps restaurants move from printed menus to a clearer digital menu that is easier to present, easier to update, and faster for guests to use.",
    eyebrow: "Restaurant-first",
    primaryCta: "Book a demo",
    secondaryCta: "See how it works",
    trustPoints: ["Faster service", "Simpler menu updates", "Clearer ordering start"],
    sectionTitle: "A clearer offer for both Google and restaurant buyers",
    sectionIntro:
      "The main message is now specific and commercial: a digital menu for restaurants that want a clearer guest experience and simpler operations.",
    restaurantCards: [
      {
        pathname: "/restaurant-digital-menu" as const,
        label: "Digital menu for restaurants",
        description: "For restaurants that want a faster, clearer, easier-to-update menu experience.",
      },
      {
        pathname: "/restaurant-qr-menu" as const,
        label: "QR menu for restaurants",
        description: "For venues that want guests to start the order directly from the table.",
      },
      {
        pathname: "/restaurant-ordering-system" as const,
        label: "Restaurant ordering system",
        description: "For teams that want guest, service, and kitchen in one clearer workflow.",
      },
      {
        pathname: "/restaurant-digital-menu-sweden" as const,
        label: "Digital menu in Sweden",
        description: "For Swedish restaurants moving from paper menus to QR with a practical rollout.",
      },
    ],
    outcomesTitle: "What restaurants feel in daily operations",
    outcomes: [
      "Guests move faster into ordering.",
      "Staff answer fewer repetitive menu questions.",
      "Orders and service are easier to follow live.",
      "The menu becomes easier to keep current and polished.",
    ],
    secondaryTitle: "Need more than a menu?",
    secondaryBody:
      "Smart Art AI can still support broader automation and digital systems, but that offer now sits below the restaurant offer so the main commercial message stays clear.",
  },
};
