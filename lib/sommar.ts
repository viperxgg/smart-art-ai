import {
  elfSkinBronzingDropsProduct,
  koboClaraBwProduct,
  lorealAbsolutRepairProduct,
  lorealElvitalVarmeskyddProduct,
  moroccanoilHaroljaProduct,
  moroccanoilTorrschampoProduct,
  naissanceAloeVeraGelProduct,
  niveaSunAfterSunLotionProduct,
  salkingAromadiffuserProduct,
  stTropezSelfTanExpressProduct,
  type Product,
  vxdoirkElektriskFotfilProduct,
} from "@/lib/products";

export type SommarQuote = {
  text: string;
  attribution: string;
};

export type SommarFaqItem = {
  question: string;
  answer: string;
};

export type SommarPick = {
  productSlug: string;
  href: string;
  cardBadge: string;
  cardHook: string;
  cardImage: string;
  cardImageAlt: string;
  product: Product;
  badge: string;
  headline: string;
  shortBody: string;
  valueHook: string;
  valueStatement: string;
  passFor: string[];
  caution: string;
  verdict: string;
  amazonSummary: string;
  amazonQuotes: SommarQuote[];
  faqItems: SommarFaqItem[];
  reviewSectionId: string;
  reviewFormId: string;
  targetKeyword: string;
  metaTitle: string;
  metaDescription: string;
  relatedLinks?: {
    href: string;
    label: string;
    text: string;
  }[];
};

export const sommarSectionCopy = {
  eyebrow: "☀️ Elins sommar-glow",
  title: "Elins sommar-glow",
  intro:
    "Sommaren och midsommar är här. Här samlar Elin produkter för en naturlig glow, mjukt hår och sandalfina fötter - sånt som faktiskt är värt pengarna inför säsongen. Listan fylls på under sommaren.",
  metaTitle:
    "Elins sommar-glow - sommarfynd för hud, hår & glow | Elins val",
  metaDescription:
    "Elins utvalda sommarfavoriter: brun utan sol, glow och vård inför sommaren och midsommar - med Elins poäng och vad tusentals Amazon-köpare tycker.",
};

export const smartSommarSectionCopy = {
  eyebrow: "Smart sommarro",
  title: "Smart sommarro",
  intro:
    "Sommarens lugna stunder förtjänar rätt prylar. Här samlar Elin smarta favoriter för avkoppling - sånt som gör latdagarna i solstolen och midsommarledigheten skönare. Listan fylls på under sommaren.",
  metaTitle: "Smart sommarro - smarta favoriter för avkoppling | Elins val",
  metaDescription:
    "Elins smarta sommarfavoriter för avkoppling och läsro - med Elins poäng och vad tusentals Amazon-köpare tycker.",
};

export const sommarPicks: SommarPick[] = [
  {
    productSlug: stTropezSelfTanExpressProduct.slug,
    href: "/skonhet/brun-utan-sol",
    cardBadge: "Naturligast glow",
    cardHook: "Naturlig brun utan sol på en timme - 15 000+ omdömen.",
    cardImage:
      "/products/brun-utan-sol-st-tropez/brun-utan-sol-st-tropez-thumbnail.webp",
    cardImageAlt: "St.Tropez Self Tan Express brun-utan-sol-mousse, 200 ml",
    product: stTropezSelfTanExpressProduct,
    badge: "Elins sommarfavorit",
    headline:
      "St.Tropez Self Tan Express - naturlig brun utan sol på en timme",
    shortBody:
      "Den mest beprövade brun-utan-sol-moussen på Amazon: du styr själv färgen och får en naturlig glow utan att vara i solen.",
    valueHook: "Den mest beprövade brun-utan-sol för en naturlig glow.",
    valueStatement:
      "St.Tropez Self Tan Express är en av de mest sålda och högst betygsatta brun-utan-sol-mousserna på Amazon - 4,4 av 5 från över 15 000 omdömen. Du styr själv färgen: skölj av efter 1 timme för en lätt ton, 2 timmar för medel och 3 timmar för mörk. Den är vegansk och cruelty-free, och köparna lyfter framför allt den naturliga, icke-orangea färgen och den fräscha doften. Det är inte den billigaste, men för en pålitlig, jämn glow inför sommaren och midsommar är det få som slår den.",
    passFor: [
      "Vill ha en naturlig solbränna utan sol, lagom till sommaren eller midsommar.",
      "Vill styra hur mörk färgen blir (1, 2 eller 3 timmar).",
      "Föredrar vegansk och cruelty-free hudvård.",
    ],
    caution:
      "Det här är ett premiumval - det finns billigare brun-utan-sol om priset är viktigast. Applicera med en appliceringshandske och fördela jämnt, annars kan färgen bli ojämn eller ge ränder. Färgen tonas ut gradvis på några dagar, så du behöver lägga om med jämna mellanrum.",
    verdict:
      "Premiumvalet - naturligast glow för dig som vill ha ett tryggt, beprövat resultat.",
    amazonSummary:
      "Amazon visar 4,4 av 5 från 15 327 recensioner, och moussen ligger högt bland Body Self-Tanners (#14). Vegansk och cruelty-free. Köparna lyfter den naturliga färgen, att den är lätt att applicera och den fräscha doften.",
    amazonQuotes: [
      {
        text: "Ger fin lyster och vacker solbrun färg utan att kladda eller ge fläckar. Doftar dessutom gott.",
        attribution: "Köpare, Amazon (Sverige)",
      },
      {
        text: "Perfekt för oss med kall oliv ton.",
        attribution: "Dimaamsho1, Amazon",
      },
      {
        text: "So easy to apply and no streaks at all - and it's vegan and cruelty-free.",
        attribution: "Köpare, Amazon",
      },
    ],
    faqItems: [
      {
        question: "Hur länge håller färgen?",
        answer:
          "Express-moussen utvecklas på 1-3 timmar och färgen tonas sedan ut gradvis under några dagar. Lägg om med jämna mellanrum för att hålla glowen jämn.",
      },
      {
        question: "Blir man orange?",
        answer:
          "Köparna beskriver färgen som naturlig och brun snarare än orange, men resultatet beror på hudton och hur jämnt du applicerar. Använd en appliceringshandske för bäst resultat.",
      },
      {
        question: "Skyddar brun utan sol mot solen?",
        answer:
          "Nej. Brun utan sol ger färg men ger inget UV-skydd. Använd ett separat solskydd när du är i solen.",
      },
      {
        question: "Hur väljer jag hur mörk färgen blir?",
        answer:
          "Skölj av efter 1 timme för en lätt ton, 2 timmar för medel och 3 timmar för en mörkare färg.",
      },
    ],
    reviewSectionId: "st-tropez-recensioner",
    reviewFormId: "st-tropez-skriv-recension",
    targetKeyword: "brun utan sol bäst i test",
    metaTitle: "Brun utan sol - St.Tropez Self Tan Express i test | Elins val",
    metaDescription:
      "Elin går igenom St.Tropez Self Tan Express: en av de mest beprövade brun-utan-sol-mousserna (4,4 av 5, 15 000+ omdömen). Naturlig glow på 1-3 timmar, vegansk - och vad du bör veta om pris och hållbarhet.",
  },
  {
    productSlug: elfSkinBronzingDropsProduct.slug,
    href: "/skonhet/bronzing-drops",
    cardBadge: "Prisvärt glow-val",
    cardHook: "Flytande glow du blandar själv - veganskt och prisvärt.",
    cardImage: "/products/bronzing-drops-elf/bronzing-drops-elf-thumbnail.webp",
    cardImageAlt:
      "e.l.f. SKIN Bronzing Drops i fyra nyanser, från fair gold till copper gold",
    product: elfSkinBronzingDropsProduct,
    badge: "Prisvärt glow-val",
    headline: "e.l.f. SKIN Bronzing Drops - flytande glow du blandar själv",
    shortBody:
      "Pigmenterade bronzing-droppar som du blandar i din egen kräm för en naturlig, sun-kissed lyster - veganskt och prisvärt.",
    valueHook: "Prisvärd glow i droppform - för en sun-kissed lyster.",
    valueStatement:
      "e.l.f. Bronzing Drops är ett prisvärt sätt att få en sun-kissed glow utan sol. Det är en pigmenterad, vårdande vätska med E-vitamin och solrosfröolja som du blandar med din egen ansiktskräm eller olja - ju fler droppar, desto mer färg. Den är vegansk och cruelty-free (certifierad av Leaping Bunny och PETA) och beskrivs passa alla hudtyper. Köparna lyfter den naturliga lystern och att lite räcker långt.",
    passFor: [
      "Vill ha en lätt, naturlig glow snarare än en hel självbruna.",
      "Gillar att själv styra färgen genom att blanda i din kräm.",
      "Vill ha ett prisvärt, veganskt alternativ.",
    ],
    caution:
      'Dropparna kan bli ojämna eller fläckiga om de inte blandas väl - några köpare beskriver resultatet som "patchy" och färgen som ganska mörk, så den passar mindre bra för mycket ljus hud. Konsistensen är mer som en tjock kräm än rinnande droppar. Börja med få droppar och bygg upp.',
    verdict:
      "Prisvärt glow-val - bronzing drops för dig som vill bygga färgen själv.",
    amazonSummary:
      "Amazon visar 4,3 av 5 från 1 550 omdömen. Vegansk och cruelty-free. Köparna lyfter den naturliga lystern, att den är lätt att blanda i kräm och att lite räcker långt.",
    amazonQuotes: [
      {
        text: "Snabb leverans och läcker färg :)",
        attribution: "Rhianna, Amazon (Sverige)",
      },
      {
        text: "Super glow - blandad i foundation eller i små klickar. Rekommenderar verkligen.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "A bit patchy.",
        attribution: "Köpare, Amazon",
      },
    ],
    faqItems: [
      {
        question: "Hur använder jag bronzing drops?",
        answer:
          "Blanda några droppar med din ansiktskräm eller olja och applicera. Ju fler droppar, desto mörkare glow. Den kan användas på ansikte och kropp.",
      },
      {
        question: "Passar den ljus hud?",
        answer:
          "Färgen är ganska pigmenterad och kan bli mörk. Börja med en eller två droppar väl utblandade i kräm, så blir den lättare att dosera på ljus hud.",
      },
      {
        question: "Är den vegansk?",
        answer:
          "Ja, e.l.f. är vegansk och cruelty-free, certifierad av Leaping Bunny och PETA.",
      },
    ],
    reviewSectionId: "elf-bronzing-drops-recensioner",
    reviewFormId: "elf-bronzing-drops-skriv-recension",
    targetKeyword: "bronzing drops",
    metaTitle: "Bronzing drops i test - e.l.f. SKIN flytande bronzer | Elins val",
    metaDescription:
      "Elin går igenom e.l.f. SKIN Bronzing Drops: ett prisvärt, veganskt sätt att få en naturlig glow du blandar själv (4,3 av 5, 1 500+ omdömen) - och vad du bör veta om dosering och hudton.",
  },
  {
    productSlug: niveaSunAfterSunLotionProduct.slug,
    href: "/skonhet/aftersun",
    cardBadge: "Mest prisvärd",
    cardHook: "Svalkande aloe vera efter solen - 4,6 av 5.",
    cardImage: "/products/aftersun-nivea/aftersun-nivea-thumbnail.webp",
    cardImageAlt: "NIVEA SUN After Sun Moisturising Soothing Lotion, 200 ml",
    product: niveaSunAfterSunLotionProduct,
    badge: "Prisvärt val",
    headline: "NIVEA SUN After Sun - svalkande fukt efter solen",
    shortBody:
      "Ett prisvärt, beprövat after sun som kyler och återfuktar huden efter en dag i solen, med aloe vera.",
    valueHook: "Mest beprövade after sun för pengarna.",
    valueStatement:
      "NIVEA SUN After Sun är ett av de mest älskade after sun-valen på Amazon - 4,6 av 5 från över 3 000 omdömen. Den svalkande lotionen med aloe vera och avokadoolja absorberas snabbt, återfuktar och hjälper huden att kännas mjuk efter solen. Köparna lyfter att den kyler skönt, doftar fräscht och inte känns fet.",
    passFor: [
      "Vill ha ett svalkande, återfuktande after sun efter stranden eller midsommar.",
      "Vill ha ett tryggt, beprövat märke till ett lågt pris.",
      "Gillar aloe vera och en lätt, icke-fet känsla.",
    ],
    caution:
      "Det här är hudvård efter solen, inte solskydd - den ersätter inte solkräm. Produkten innehåller parfym och parabener, vilket känslig hud kan reagera på. Den har ännu inga svenska omdömen, men tusentals internationella.",
    verdict:
      "Prisvärt och beprövat - ett tryggt after sun-val för hela sommaren.",
    amazonSummary:
      "Amazon visar 4,6 av 5 från 3 237 omdömen. Köparna lyfter den svalkande, återfuktande känslan med aloe vera, den fräscha doften och det låga priset.",
    amazonQuotes: [
      {
        text: "Cools your skin down after sun exposure, smells good and isn't greasy.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Aloe vera and it smells amazing - I keep it in the fridge, so refreshing.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Great price. I just love it.",
        attribution: "Köpare, Amazon",
      },
    ],
    faqItems: [
      {
        question: "Ersätter after sun solskydd?",
        answer:
          "Nej. After sun är hudvård efter solen och ger inget UV-skydd. Använd alltid ett separat solskydd när du är i solen.",
      },
      {
        question: "Hjälper det mot solbränd hud?",
        answer:
          "Den kan kännas svalkande och återfuktande efter solen med aloe vera, men den ersätter inte solskydd och ska inte ses som en lösning vid kraftig solbränna.",
      },
      {
        question: "Är den fet eller klibbig?",
        answer:
          "Köparna beskriver den som lätt och snabbt absorberande, inte fet.",
      },
    ],
    reviewSectionId: "nivea-after-sun-recensioner",
    reviewFormId: "nivea-after-sun-skriv-recension",
    targetKeyword: "aftersun",
    metaTitle: "Aftersun bäst i test - NIVEA SUN After Sun lotion | Elins val",
    metaDescription:
      "Elin går igenom NIVEA SUN After Sun: ett prisvärt, svalkande after sun med aloe vera (4,6 av 5, 3 000+ omdömen) - och varför det inte ersätter solskydd.",
  },
  {
    productSlug: naissanceAloeVeraGelProduct.slug,
    href: "/skonhet/aloe-vera-gel",
    cardBadge: "Svalka efter solen",
    cardHook: "Kylande, vegansk aloe vera - 3 300+ omdömen.",
    cardImage:
      "/products/naissance-aloe-vera-gel/naissance-aloe-vera-gel-thumbnail.webp",
    cardImageAlt: "Naissance Skin Soothing Aloe Vera Gel, 250 ml",
    product: naissanceAloeVeraGelProduct,
    badge: "Elins prisvärda val",
    headline: "Naissance Aloe Vera Gel - svalkande fukt efter solen",
    shortBody:
      "En kylande, vegansk aloe vera-gel (99% naturligt ursprung) som svalkar och återfuktar efter sol, bad och rakning - för ansikte, kropp och hår.",
    valueHook:
      "Svalkande, vegansk aloe vera efter solen - prisvärd och mångsidig.",
    valueStatement:
      "Naissance Skin Soothing Aloe Vera Gel är en av de mest sålda aloe vera-gelerna på Amazon - 4,5 av 5 från över 3 300 omdömen och topp-2 bland After Sun Care. Gelen (99% naturligt ursprung, vegansk och fri från parfym, alkohol och tillsatser) svalkar och återfuktar huden efter en dag i solen, och kan användas på ansikte, kropp och till och med i håret. Köparna - många med känslig hud - lyfter den svalkande, lugnande känslan och att lite räcker långt. Ett prisvärt sommarbasplagg för svalka efter sol och bad.",
    passFor: [
      "Vill ha en svalkande, återfuktande gel efter sol, bad eller rakning.",
      "Har känslig hud och föredrar parfym- och alkoholfritt, veganskt.",
      "Vill ha en mångsidig gel för ansikte, kropp och hår.",
    ],
    caution:
      "Det här är hudvård efter solen, inte solskydd - den ersätter inte solkräm. Gelen är gjord på aloe-extrakt snarare än ren pressad juice, och kan kännas lite klibbig tills den absorberats. En liten mängd räcker.",
    verdict:
      "Prisvärt och mångsidigt - en svalkande, vegansk aloe vera-gel för hela sommaren.",
    amazonSummary:
      "Amazon visar 4,5 av 5 från 3 309 omdömen och produkten ligger topp-2 bland After Sun Care. Köparna lyfter den svalkande, återfuktande känslan efter sol, att den är parfym- och alkoholfri (uppskattat av känslig hud) och att den är mångsidig för ansikte, kropp och hår.",
    amazonQuotes: [
      {
        text: "Huden blir kylig och skön.",
        attribution: "Kobrah, Amazon (Sverige)",
      },
      {
        text: "Använder den till håret, blandar med balsam och olja innan jag tvättar håret. Rekommenderar till alla.",
        attribution: "Köpare, Amazon (Sverige)",
      },
      {
        text: "Love Naissance products. I use it on my face and body - it dries leaving skin so soft and hydrated.",
        attribution: "Christer S, Amazon",
      },
    ],
    faqItems: [
      {
        question: "Kan jag använda aloe vera-gelen efter solen?",
        answer:
          "Ja, den är gjord för att svalka och återfukta huden efter en dag i solen. Tänk på att den inte är solskydd och inte ersätter solkräm.",
      },
      {
        question: "Passar den känslig hud?",
        answer:
          "Den är fri från parfym, alkohol och tillsatser och vegansk, vilket många med känslig hud uppskattar. Testa gärna på en liten yta först.",
      },
      {
        question: "Kan den användas i håret?",
        answer:
          "Ja, flera köpare använder den även i håret för fukt - blanda gärna med balsam eller olja.",
      },
    ],
    reviewSectionId: "naissance-aloe-vera-gel-recensioner",
    reviewFormId: "naissance-aloe-vera-gel-skriv-recension",
    targetKeyword: "aloe vera gel",
    metaTitle: "Aloe vera gel bäst i test - Naissance Skin Soothing | Elins val",
    metaDescription:
      "Elin går igenom Naissance Aloe Vera Gel: svalkande, vegansk gel (99% naturligt ursprung) för huden efter solen (4,5 av 5, 3 300+ omdömen) - och varför den inte ersätter solskydd.",
    relatedLinks: [
      {
        href: "/skonhet/aftersun",
        label: "After Sun",
        text: "Återfukta huden efter solen med en svalkande lotion.",
      },
      {
        href: "/skonhet/brun-utan-sol",
        label: "Brun utan sol",
        text: "Få sommarfärgen utan att sola.",
      },
    ],
  },
  {
    productSlug: moroccanoilHaroljaProduct.slug,
    href: "/skonhet/harolja",
    cardBadge: "Mest beprövad",
    cardHook: "Ikonisk hårolja för glans & mjukhet - 88 000+ omdömen.",
    cardImage: "/products/moroccanoil-harolja/harolja-moroccanoil-thumbnail.webp",
    cardImageAlt: "Moroccanoil Treatment hårolja, 25 ml",
    product: moroccanoilHaroljaProduct,
    badge: "Elins premiumval",
    headline: "Moroccanoil Treatment - hårolja för glans och mjukhet",
    shortBody:
      "Den ikoniska arganoljebaserade håroljan som gör håret silkeslent, mjukare och mindre frissigt - perfekt för torrt sommarhår.",
    valueHook: "Den mest beprövade håroljan för glans och mjukhet.",
    valueStatement:
      "Moroccanoil Treatment är den ikoniska håroljan - 4,7 av 5 från över 88 000 omdömen. Den arganoljebaserade formulan gör håret silkeslent, mjukare och mer glansigt, tämjer frizz och absorberas lätt utan att tynga. Den är inte billig, men lite räcker långt och många kallar den sin absoluta favorit. Perfekt för torrt, soltrött sommarhår.",
    passFor: [
      "Vill ha glansigt, mjukt hår utan frizz - särskilt torrt eller soltrött sommarhår.",
      "Föredrar en ikonisk, mycket beprövad produkt.",
      "Vill ha en liten flaska som räcker länge (några droppar per gång).",
    ],
    caution:
      'Det här är ett premiumval - priset är högt (många köpare skriver "dyr men bra"). Formulan är silikonbaserad med arganolja, inte en ren naturolja. Lite räcker långt, så en liten flaska håller länge.',
    verdict:
      "Premiumvalet - ikonisk hårolja för dig som vill ha glans, mjukhet och mindre frizz.",
    amazonSummary:
      "Amazon visar 4,7 av 5 från 88 528 omdömen. Köparna lyfter den härliga doften, glansen och att håret känns silkeslent - flera kallar den sin favorit, även om många noterar att den är dyr.",
    amazonQuotes: [
      {
        text: "Bästa håroljan! Härlig doft och känsla i håret. Vårdar utan att göra håret fett - min absoluta favoritprodukt!",
        attribution: "Helena, Amazon (Sverige)",
      },
      {
        text: "Dyr men bra! Fantastisk doft och gör håret silkeslent.",
        attribution: "Nico, Amazon (Sverige)",
      },
      {
        text: "Softer hair with less frizz, adds a nice shine and smells amazing - worth the premium price.",
        attribution: "Köpare, Amazon",
      },
    ],
    faqItems: [
      {
        question: "Hur använder jag hårolja?",
        answer:
          "Värm några droppar mellan händerna och fördela från mitten av håret ut mot topparna, på fuktigt eller torrt hår. Börja med lite - det räcker långt.",
      },
      {
        question: "Gör den håret fett?",
        answer:
          "Köparna beskriver att den absorberas lätt och inte tynger om du doserar lagom. Börja med få droppar och bygg på vid behov.",
      },
      {
        question: "Är den värd priset?",
        answer:
          'Det är ett premiumval. Många tycker den är värd det ("dyr men bra"), men det finns billigare håroljor om priset är viktigast.',
      },
    ],
    reviewSectionId: "moroccanoil-harolja-recensioner",
    reviewFormId: "moroccanoil-harolja-skriv-recension",
    targetKeyword: "hårolja bäst i test",
    metaTitle: "Hårolja bäst i test - Moroccanoil Treatment | Elins val",
    metaDescription:
      "Elin går igenom Moroccanoil Treatment - den ikoniska håroljan (4,7 av 5, 88 000+ omdömen). Glans, mjukhet och mindre frizz för sommarhåret - och vad du bör veta om priset.",
  },
  {
    productSlug: lorealAbsolutRepairProduct.slug,
    href: "/skonhet/harinpackning",
    cardBadge: "Räddar torrt hår",
    cardHook: "Återuppbygger torrt & soltrött hår - 2 900+ omdömen.",
    cardImage:
      "/products/loreal-absolut-repair/loreal-absolut-repair-thumbnail.webp",
    cardImageAlt: "L'Oréal Professionnel Absolut Repair hårinpackning, 250 ml",
    product: lorealAbsolutRepairProduct,
    badge: "Elins premiumval",
    headline:
      "L'Oréal Absolut Repair - hårinpackning för torrt & skadat hår",
    shortBody:
      "En proteinrik hårinpackning med Gold Quinoa som återuppbygger torrt, skadat och soltrött hår - för mjukhet, glans och lättare utredning.",
    valueHook: "Räddar torrt, soltrött hår - mjukt och blankt igen.",
    valueStatement:
      "L'Oréal Professionnel Absolut Repair är en av de mest älskade hårinpackningarna på Amazon - 4,6 av 5 från nästan 3 000 omdömen. Den proteinrika formulan med Gold Quinoa återuppbygger torrt, skadat och kemiskt behandlat hår, gör det silkeslent, blankare och lättare att reda ut. Perfekt för soltrött sommarhår efter sol, bad och klor. Köparna - flera med ljust eller blekt hår - lyfter mjukheten, glansen och den lyxiga doften. Det är ett premiumval, men en liten mängd räcker långt.",
    passFor: [
      "Har torrt, blekt eller soltrött sommarhår som behöver återfuktning.",
      "Vill ha en proteinrik mask som gör håret mjukt och lättare att reda ut.",
      "Föredrar en beprövad salongsfavorit (Serie Expert).",
    ],
    caution:
      "Det här är ett premiumval och dyrare än ett vanligt balsam. Den är rik - använd en lagom mängd och fokusera på längder och toppar, inte hårbotten. Låt verka några minuter och skölj ur.",
    verdict:
      "Premiumvalet för sommaren - återuppbyggande hårmask för torrt och skadat hår.",
    amazonSummary:
      "Amazon visar 4,6 av 5 från 2 949 omdömen och produkten ligger topp-5 bland Hair Deep Conditioners. Köparna lyfter att håret blir mjukt, silkeslent och lättare att reda ut - flera med ljust eller blekt hår rekommenderar den, och doften får mycket beröm.",
    amazonQuotes: [
      {
        text: "Håret blir mjukt o slätt.",
        attribution: "Ulrika Hagberg, Amazon (Sverige)",
      },
      {
        text: "Älskar! Funkar även för mig med tunt hår!",
        attribution: "Amanda, Amazon (Sverige)",
      },
      {
        text: "Min frisör rekommenderade denna för blekt hår. Doftar riktigt gott och håret blir så mjukt.",
        attribution: "Almedina, Amazon (Sverige)",
      },
    ],
    faqItems: [
      {
        question: "Hur ofta ska jag använda hårinpackningen?",
        answer:
          "Använd den 1-2 gånger i veckan på rentvättat, fuktigt hår. Fördela i längder och toppar, låt verka några minuter och skölj ur.",
      },
      {
        question: "Passar den ljust eller blekt hår?",
        answer:
          "Ja, flera köpare med ljust och blekt hår rekommenderar den. Den återfuktar och gör håret mjukare, men ändrar inte färgen.",
      },
      {
        question: "Tynger den fint hår?",
        answer:
          "Den är rik, så fint hår kan tyngas om man tar för mycket. Använd en liten mängd och fokusera på längderna, inte hårbotten.",
      },
    ],
    reviewSectionId: "loreal-absolut-repair-recensioner",
    reviewFormId: "loreal-absolut-repair-skriv-recension",
    targetKeyword: "hårinpackning bäst i test",
    metaTitle: "Hårinpackning bäst i test - L'Oréal Absolut Repair | Elins val",
    metaDescription:
      "Elin går igenom L'Oréal Professionnel Absolut Repair: en proteinrik hårinpackning för torrt och skadat sommarhår (4,6 av 5, 2 900+ omdömen) - mjukhet, glans och vad du bör veta om pris.",
    relatedLinks: [
      {
        href: "/skonhet/harolja",
        label: "Hårolja",
        text: "Lås in mjukheten med några droppar hårolja.",
      },
      {
        href: "/skonhet/torrschampo",
        label: "Torrschampo",
        text: "Fräscha upp håret mellan tvättar.",
      },
      {
        href: "/skonhet/varmeskydd",
        label: "Värmeskydd",
        text: "Skydda håret innan du värmestylar.",
      },
    ],
  },
  {
    productSlug: moroccanoilTorrschampoProduct.slug,
    href: "/skonhet/torrschampo",
    cardBadge: "För ljust hår",
    cardHook: "Fräschar upp fett hår mellan tvättar - mattar gulton i blont.",
    cardImage:
      "/products/moroccanoil-torrschampo/torrschampo-moroccanoil-thumbnail.webp",
    cardImageAlt: "Moroccanoil torrschampo för ljust hår, 205 ml",
    product: moroccanoilTorrschampoProduct,
    badge: "Elins premiumval",
    headline: "Moroccanoil Torrschampo - fräscht, fett-mattande för ljust hår",
    shortBody:
      "Ett premium-torrschampo med risstärkelse som suger upp fett och fräschar upp håret mellan tvättar - med lila pigment som mattar gulton i ljust och blont hår.",
    valueHook: "Det fräscha torrschampot för ljust hår mellan tvättar.",
    valueStatement:
      "Moroccanoil Torrschampo (Light Tones) suger upp fett och fräschar upp håret snabbt mellan tvättar, utan tråkiga puderrester. Den finmalda risstärkelsen ger en mjuk, silkeslen finish, och de lila pigmenten hjälper till att matta gulton i ljust och blont hår. 4,5 av 5 från nästan 13 000 omdömen och en härlig signaturdoft - ett premiumval för soliga sommardagar då håret behöver en snabb uppfräschning.",
    passFor: [
      "Har ljust eller blont hår och vill matta gulton mellan tvättar.",
      "Vill fräscha upp fett hår snabbt - på resan eller mellan tvättar.",
      "Föredrar en finish utan synliga puderrester.",
    ],
    caution:
      'Premiumpris för ett torrschampo, och varianten "Light Tones" är gjord för ljust/blont hår - inte mörkt. Som alla torrschampon är det en mellanlösning mellan tvättar, inte en ersättning för att tvätta håret. En liten andel köpare är inte nöjda.',
    verdict:
      "Premiumvalet för ljust hår - fräscht, fett-mattande och utan puderrester.",
    amazonSummary:
      "Amazon visar 4,5 av 5 från 12 895 omdömen (inga svenska ännu, men tusentals internationella). Köparna lyfter att det suger upp fett direkt, doftar härligt och inte lämnar puderrester - flera med ljust hår kallar det det bästa torrschampot de provat.",
    amazonQuotes: [
      {
        text: "Best dry shampoo out there. For light hair it's purple-pigmented to take brassiness out of blonde hair. The smell is divine.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Lite dyr, men för mitt ljusa hår - klockren! Håret ser helt naturligt ut med fin glans, utan puderrester.",
        attribution: "Köpare, Amazon",
      },
      {
        text: "Not happy with this product.",
        attribution: "Köpare, Amazon",
      },
    ],
    faqItems: [
      {
        question: "Hur använder jag torrschampo?",
        answer:
          "Skaka väl och spraya 15-20 cm från torra rötter. Låt det verka en stund, massera in i hårbotten och borsta ur.",
      },
      {
        question: "Passar det mörkt hår?",
        answer:
          'Den här varianten "Light Tones" är gjord för ljust och blont hår och har lila pigment som mattar gulton. För mörkt hår finns andra varianter.',
      },
      {
        question: "Ersätter det vanlig hårtvätt?",
        answer:
          "Nej. Torrschampo fräschar upp håret mellan tvättar, men ersätter inte att tvätta håret.",
      },
    ],
    reviewSectionId: "moroccanoil-torrschampo-recensioner",
    reviewFormId: "moroccanoil-torrschampo-skriv-recension",
    targetKeyword: "bästa torrschampo",
    metaTitle: "Bästa torrschampo för ljust hår - Moroccanoil | Elins val",
    metaDescription:
      "Elin går igenom Moroccanoil Torrschampo (Light Tones): suger upp fett, mattar gulton i blont hår och lämnar inga puderrester (4,5 av 5, 12 000+ omdömen) - och vad du bör veta om pris och hårfärg.",
  },
  {
    productSlug: vxdoirkElektriskFotfilProduct.slug,
    href: "/skonhet/elektrisk-fotfil",
    cardBadge: "Sandalfina fötter",
    cardHook:
      "Ta bort hård hud hemma - laddbar, 3 sliprullar, sandalfina fötter.",
    cardImage:
      "/products/vxdoirk-elektrisk-fotfil/elektrisk-fotfil-vxdoirk-thumbnail.webp",
    cardImageAlt: "VXDOIRK elektrisk fotfil, laddbar",
    product: vxdoirkElektriskFotfilProduct,
    badge: "Smart sommarfynd",
    headline: "VXDOIRK Elektrisk Fotfil - sandalfina fötter hemma",
    shortBody:
      "En laddbar, vattentät elektrisk fotfil som tar bort hård hud snabbt - för släta, sandalfina fötter inför sommaren.",
    valueHook: "Prisvärt sätt att få sandalfina fötter hemma.",
    valueStatement:
      "VXDOIRK elektriska fotfil tar bort hård hud och förhårdnader hemma - snabbt, utan att du behöver göra jobbet manuellt. Den är laddbar via USB, vattentät (IPX5) för wet & dry, har två hastigheter, en batteridisplay och tre utbytbara sliprullar för olika hårdhet. 4,4 av 5 från över 1 700 omdömen - ett prisvärt sätt att slippa dyra fotvårdsbesök inför sandalsäsongen.",
    passFor: [
      "Vill ha släta, sandalfina fötter inför sommaren.",
      "Vill slippa manuell fotfil eller dyra fotvårdsbesök.",
      "Gillar laddbart och vattentätt (kan sköljas under vatten).",
    ],
    caution:
      "Vid långvarig användning (20+ min) kan den bli varm - låt den vila vid behov. Använd lätt tryck och överdriv inte; en kort stund ungefär en gång i veckan räcker oftast. Det är hudvård för fötter, inte en medicinsk behandling.",
    verdict: "Smart sommarfynd - laddbart och prisvärt för sandalfina fötter.",
    amazonSummary:
      "Amazon visar 4,4 av 5 från 1 762 omdömen. Köparna lyfter att den är laddbar med batteridisplay, har sliprullar i olika hårdhet och fungerar lika bra som dyrare märken - en köpare noterar att den kan bli varm vid mycket lång användning.",
    amazonQuotes: [
      {
        text: "Förutom att den är bra är att den är laddbar - sliprullar med olika styrka, och en display visar laddningen.",
        attribution: "Tommy, Amazon (Sverige)",
      },
      {
        text: "Bra fotfil.",
        attribution: "Daniel, Amazon (Sverige)",
      },
      {
        text: "Works just as well as the expensive brands. It does heat up after prolonged use (20+ min), but cools down fine.",
        attribution: "Köpare, Amazon",
      },
    ],
    faqItems: [
      {
        question: "Hur ofta ska jag använda den?",
        answer:
          "Oftast räcker en kort stund ungefär en gång i veckan, med lätt tryck. Överdriv inte - för mycket nötning kan irritera huden.",
      },
      {
        question: "Kan den användas blöt/i duschen?",
        answer:
          "Den är vattentät (IPX5) och kan användas både torr och våt samt sköljas under rinnande vatten.",
      },
      {
        question: "Blir den varm?",
        answer:
          "Vid mycket lång användning kan den bli varm - låt den då vila en stund innan du fortsätter.",
      },
    ],
    reviewSectionId: "vxdoirk-elektrisk-fotfil-recensioner",
    reviewFormId: "vxdoirk-elektrisk-fotfil-skriv-recension",
    targetKeyword: "elektrisk fotfil bäst i test",
    metaTitle: "Elektrisk fotfil bäst i test - VXDOIRK laddbar | Elins val",
    metaDescription:
      "Elin går igenom VXDOIRK elektriska fotfil: laddbar, vattentät, 3 sliprullar och 2 hastigheter för sandalfina fötter (4,4 av 5, 1 700+ omdömen) - och vad du bör veta.",
  },
  {
    productSlug: lorealElvitalVarmeskyddProduct.slug,
    href: "/skonhet/varmeskydd",
    cardBadge: "Skydda håret",
    cardHook:
      "Skyddar håret mot värme vid fön & plattång - prisvärt favoritval.",
    cardImage:
      "/products/loreal-elvital-varmeskydd/varmeskydd-loreal-thumbnail.webp",
    cardImageAlt: "L'Oréal Elvital Dream Length värmeskyddsspray, 150 ml",
    product: lorealElvitalVarmeskyddProduct,
    badge: "Elins prisvärda val",
    headline: "L'Oréal Elvital Dream Length - värmeskydd upp till 230°C",
    shortBody:
      "Ett prisvärt leave-in-värmeskydd som lägger ett skyddande lager innan du fönar, plattar eller lockar håret - med mindre frizz och mer glans.",
    valueHook: "Prisvärt värmeskydd innan du stylar håret.",
    valueStatement:
      "L'Oréal Elvital Dream Length är ett prisvärt värmeskydd som lägger ett skyddande lager innan du fönar eller plattar håret - upp till 230°C. Leave-in-sprayen med vitaminer och ricinolja gör håret lättare att reda ut, tämjer frizz och ger glans. 4,5 av 5 från nästan 3 000 omdömen och ett mycket vänligt pris - ett smart komplement innan du stylar med locktång, plattång eller varmluftsborste.",
    passFor: [
      "Stylar håret med fön, plattång eller locktång och vill skydda mot värmen.",
      "Vill ha mindre frizz och lättare utredning - särskilt långt hår.",
      "Vill ha ett effektivt värmeskydd till ett lågt pris.",
    ],
    caution:
      'En del köpare tycker att det kan lämna en lätt hinna om man sprayar för mycket - använd en lagom mängd. Doft och resultat upplevs olika; några tycker det finns bättre alternativ. Varianten passar bäst långt, rakt hår.',
    verdict:
      "Prisvärda valet - ett enkelt, effektivt värmeskydd innan värmestyling.",
    amazonSummary:
      "Amazon visar 4,5 av 5 från 2 975 omdömen. Köparna lyfter att håret blir lättare att reda ut, mindre frissigt och får glans - till ett lågt pris. Några tycker att det kan kännas lite för mycket om man överdoserar.",
    amazonQuotes: [
      {
        text: "Bra produkt och priset är rimligt.",
        attribution: "Köpare, Amazon (Sverige)",
      },
      {
        text: "Reder ut håret lätt - spraya på fuktigt hår och låt verka några minuter innan värmen. Bra produkt till bra pris.",
        attribution: "Köpare, Amazon (Sverige)",
      },
      {
        text: "Finns så mycket bättre.",
        attribution: "Alexandra, Amazon (Sverige)",
      },
    ],
    faqItems: [
      {
        question: "När använder jag värmeskydd?",
        answer:
          "Spraya på fuktigt eller torrt hår innan du fönar, plattar eller lockar. Fördela jämnt i längderna och styla sedan.",
      },
      {
        question: "Skyddar det vid plattång och locktång?",
        answer:
          "Ja, det är gjort för värmestyling upp till 230°C - ett bra steg innan du använder plattång, locktång eller varmluftsborste.",
      },
      {
        question: "Gör det håret kladdigt?",
        answer:
          "Använd en lagom mängd - för mycket kan ge en lätt hinna. Börja sparsamt och bygg på vid behov.",
      },
    ],
    reviewSectionId: "loreal-elvital-varmeskydd-recensioner",
    reviewFormId: "loreal-elvital-varmeskydd-skriv-recension",
    targetKeyword: "värmeskydd hår bäst i test",
    metaTitle:
      "Värmeskydd hår bäst i test - L'Oréal Elvital Dream Length | Elins val",
    metaDescription:
      "Elin går igenom L'Oréal Elvital Dream Length värmeskyddsspray: skyddar håret upp till 230°C vid fön, plattång och locktång, mindre frizz och prisvärt (4,5 av 5, 2 900+ omdömen).",
    relatedLinks: [
      {
        href: "/skonhet/locktang",
        label: "Locktång",
        text: "Skydda håret innan du stylar med locktång.",
      },
      {
        href: "/skonhet/plattang",
        label: "Plattång",
        text: "Skydda håret innan du stylar med plattång.",
      },
      {
        href: "/skonhet/varmluftsborste",
        label: "Varmluftsborste",
        text: "Skydda håret innan du stylar med varmluftsborste.",
      },
    ],
  },
];

export const smartSommarPicks: SommarPick[] = [
  {
    productSlug: koboClaraBwProduct.slug,
    href: "/halsa/kobo-clara-bw",
    cardBadge: "Smart sommarro",
    cardHook: "Tusentals böcker i fickformat - matt skärm som syns i solen.",
    cardImage: "/products/kobo-clara-bw/kobo-clara-bw-thumbnail.webp",
    cardImageAlt: "Kobo Clara BW e-boksläsare i en svensk sommarträdgård",
    product: koboClaraBwProduct,
    badge: "Elins sommarval",
    headline: "Kobo Clara BW - skärmfri läsro i solstolen",
    shortBody:
      "En kompakt e-boksläsare med matt E Ink-skärm som syns även i solen - tusentals böcker i fickformat för latdagar och midsommarledighet.",
    valueHook: "Skärmfri läsro - tusentals böcker som syns i solen.",
    valueStatement:
      "Kobo Clara BW är en kompakt 6-tums e-boksläsare med en matt, antireflex E Ink Carta 1300-skärm som är behaglig att läsa på även i starkt solljus - perfekt för solstolen. Med ComfortLight Pro justerar du ljusstyrkan och en varmare ton till kvällsläsningen, och 16 GB rymmer tusentals böcker i fickformat. Den är vattentät (IPX8), stödjer ljudböcker via Bluetooth och är delvis tillverkad av återvunnen och havsbunden plast. 4,6 av 5 från över 2 500 omdömen och topp-3 bland e-boksläsare - ett smart val för skärmfri läsro i sommar.",
    passFor: [
      "Vill läsa skärmfritt i solstolen utan att bländas av en mobilskärm.",
      "Vill ha tusentals böcker i ett lätt, fickvänligt format på resan.",
      "Läser gärna på kvällen och vill kunna värma upp skärmljuset.",
    ],
    caution:
      "Det här är text i svartvitt - gjord för böcker, inte färgserier eller webbsurf. Du behöver ett (gratis) Kobo-konto för att komma igång. Ljudböcker spelas via Bluetooth-hörlurar, inte inbyggd högtalare.",
    verdict:
      "Sommarens avkopplingsval - papperslik läsro som syns i solen och får plats i fickan.",
    amazonSummary:
      "Amazon visar 4,6 av 5 från 2 534 omdömen och produkten ligger topp-3 bland e-boksläsare. Köparna lyfter den skarpa, papperslika skärmen, den behagliga läsupplevelsen och att den är lätt och kompakt. Flera som bytt från Kindle tycker den är minst lika bra.",
    amazonQuotes: [
      {
        text: "Det här är min tredje e-boksläsare och den bästa. Känns snabbare att byta sida och lätt att hålla i handen. Prisvärd.",
        attribution: "karl fant, Amazon (Sverige)",
      },
      {
        text: "Bra kontrast och ljus display.",
        attribution: "Hans Peterson, Amazon (Sverige)",
      },
      {
        text: "It's a great ereader. I'm moving from a Kindle, and it works better. Battery life is really good, and screen quality looks better than my old Paperwhite.",
        attribution: "Sebastian, Amazon",
      },
    ],
    faqItems: [
      {
        question: "Syns skärmen i solen?",
        answer:
          "Ja, E Ink-skärmen är matt och antireflex, vilket gör den behaglig att läsa på även utomhus i solljus - till skillnad från en blank mobilskärm.",
      },
      {
        question: "Är den vattentät?",
        answer:
          "Ja, Kobo Clara BW är vattentät enligt IPX8 och tål kortare nedsänkning - praktiskt vid poolen eller bryggan. Torka av den efteråt.",
      },
      {
        question: "Kan jag läsa egna och lånade böcker?",
        answer:
          "Du kan köpa böcker i Kobos butik, läsa egna filer (EPUB, PDF m.fl.) och i många länder låna biblioteksböcker via OverDrive. Ett gratis Kobo-konto behövs.",
      },
    ],
    reviewSectionId: "kobo-clara-bw-recensioner",
    reviewFormId: "kobo-clara-bw-skriv-recension",
    targetKeyword: "kobo clara bw",
    metaTitle: "Kobo Clara BW i test - e-boksläsare för sommaren | Elins val",
    metaDescription:
      "Elin går igenom Kobo Clara BW: en kompakt e-boksläsare med matt antireflex-skärm som syns i solen, ComfortLight Pro och IPX8 (4,6 av 5, 2 500+ omdömen) - smart läsro i sommar.",
  },
  {
    productSlug: salkingAromadiffuserProduct.slug,
    href: "/halsa/aromdiffuser",
    cardBadge: "Mys & doft",
    cardHook: "Varmt sken + behaglig doft - mysig sommarkväll. 1 800+ omdömen.",
    cardImage:
      "/products/salking-aromadiffuser/salking-aromadiffuser-thumbnail.webp",
    cardImageAlt: "SALKING aromadiffuser med varmt sken, 100 ml",
    product: salkingAromadiffuserProduct,
    badge: "Smart sommarro",
    headline: "SALKING Aromadiffuser - mys och doft för lugna kvällar",
    shortBody:
      "En liten ultraljudsdiffuser med varmt sken i 7 färger som sprider doft och skapar mys-stämning - perfekt för sommarkvällen hemma.",
    valueHook: "Varmt sken och doft - mysig stämning på sekunder.",
    valueStatement:
      "SALKING Aromadiffuser är en prisvärd liten ultraljudsdiffuser med nordisk, minimalistisk design - 4,2 av 5 från över 1 800 omdömen. Med en enkel knapp styr du dimma, ett varmt sken i 7 färger och automatisk avstängning, och den sprider en behaglig doft som skapar mys-stämning. Köparna lyfter att den är liten, snygg och prisvärd - några tycker materialet känns lite plastigt. Ett mysigt, prisvärt val för lugna sommarkvällar hemma.",
    passFor: [
      "Vill skapa mysig stämning och behaglig doft hemma på sommarkvällen.",
      "Vill ha en liten, snygg diffuser med varmt sken och färgljus.",
      "Föredrar enkel, prisvärd drift med auto-avstängning.",
    ],
    caution:
      "Det är en prisvärd modell - materialet upplevs som lite plastigt av vissa, och någon enstaka tycker att den inte är helt 'ultra-tyst'. Den är liten (100 ml) och passar mindre rum. Använd några droppar eterisk olja i vatten.",
    verdict:
      "Prisvärt mys-val - varmt sken och doft för lugna sommarkvällar.",
    amazonSummary:
      "Amazon visar 4,2 av 5 från 1 841 omdömen och produkten ligger topp-3 bland Scented Oil Diffusers. Köparna lyfter den nätta nordiska designen, det varma skenet och att den är prisvärd - några tycker att materialet känns lite plastigt.",
    amazonQuotes: [
      {
        text: "Jättenöjd.",
        attribution: "Aga, Amazon (Sverige)",
      },
      {
        text: "Funkar bra som beskrivningen säger, enkel att använda och luktar gott.",
        attribution: "Arvid, Amazon (Sverige)",
      },
      {
        text: "Perfekt liten och billig doftspridare.",
        attribution: "Emma, Amazon (Sverige)",
      },
    ],
    faqItems: [
      {
        question: "Hur använder jag aromadiffusern?",
        answer:
          "Fyll på vatten, tillsätt några droppar eterisk olja och tryck på knappen för dimma och ljus. En knapp styr dimma, färger och varmt sken.",
      },
      {
        question: "Är den tyst?",
        answer:
          "De flesta beskriver den som tyst med en mjuk dimma. Någon enstaka tycker att den inte är helt 'ultra-tyst'.",
      },
      {
        question: "Hur stor yta räcker den till?",
        answer:
          "Den är liten (100 ml) och passar bäst i mindre rum, sovrum eller en arbetshörna.",
      },
    ],
    reviewSectionId: "salking-aromadiffuser-recensioner",
    reviewFormId: "salking-aromadiffuser-skriv-recension",
    targetKeyword: "aromadiffuser",
    metaTitle: "Aromadiffuser bäst i test - SALKING ultraljud | Elins val",
    metaDescription:
      "Elin går igenom SALKING Aromadiffuser: liten ultraljudsdiffuser med varmt sken i 7 färger och auto-avstängning för mys och doft (4,2 av 5, 1 800+ omdömen) - och vad du bör veta.",
    relatedLinks: [
      {
        href: "/halsa/kobo-clara-bw",
        label: "Kobo Clara BW",
        text: "Läs en bok i lugn och ro medan diffusern går.",
      },
    ],
  },
];

export function getSommarPickBySlug(productSlug: string) {
  return sommarPicks.find((pick) => pick.productSlug === productSlug);
}

export function getSmartSommarPickBySlug(productSlug: string) {
  return smartSommarPicks.find((pick) => pick.productSlug === productSlug);
}
