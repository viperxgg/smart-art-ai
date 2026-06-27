import {
  mauiCurlSmoothieProduct,
  cantuLeaveInProduct,
  inkeyScalpScrubProduct,
  mielleRosemaryOilProduct,
  olaplexNo3Product,
  olaplexNo5ConditionerProduct,
  olaplexNo4ShampooProduct,
  neutrogenaHandCreamProduct,
  biothermBodyLotionProduct,
  olayRegeneristNightProduct,
  diorLipGlowOilProduct,
  cosrxPimplePatchProduct,
  natureSpellFaceOilProduct,
  marioBadescuFacialSprayProduct,
  inkeyPeptideMoisturizerProduct,
  anuaAzelaicSerumProduct,
  beautyOfJoseonPropolisProduct,
  cosrxCentellaAmpouleProduct,
  beautyOfJoseonCentellaMaskProduct,
  someByMiMatchaClayMaskProduct,
  divainCaffeineEyeSerumProduct,
  cetaphilMoisturizingCreamProduct,
  cosrxAhaBhaTonerProduct,
  biodermaSensibioProduct,
  someByMiCleansingOilProduct,
  cetaphilGentleCleanserProduct,
  paulasChoiceBhaProduct,
  purestAhaBhaPeelingProduct,
  celdyqueBakuchiolProduct,
  ericFlagViktvastProduct,
  portentumHoppRepProduct,
  levoitCore200sProduct,
  tangleTeezerOriginalProduct,
  silkesorngottProduct,
  guaShaRosenkvartsProduct,
  laneigeLipSleepingMaskProduct,
  larochePosayCicaplastB5Product,
  ceraveHydratingCleanserProduct,
  larochePosayVitaminC10Product,
  cosrxSnailEssenceProduct,
  elfSkinBronzingDropsProduct,
  inkeyNiacinamideSerumProduct,
  kanzyJojobaoljaProduct,
  koboClaraBwProduct,
  lorealAbsolutRepairProduct,
  lorealElvitalVarmeskyddProduct,
  miniProjektorProduct,
  minimalistHyaluronsyraSerumProduct,
  moroccanoilHaroljaProduct,
  moroccanoilTorrschampoProduct,
  naissanceAloeVeraGelProduct,
  niveaSunAfterSunLotionProduct,
  salkingAromadiffuserProduct,
  solnedgangslampaProduct,
  stjarnprojektorProduct,
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
  usageGuidance?: {
    title: string;
    text: string;
  };
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
    productSlug: mauiCurlSmoothieProduct.slug,
    product: mauiCurlSmoothieProduct,
    href: "/skonhet/curl-cream",
    cardBadge: "Kokosolja",
    cardHook: "Fuktgivande curl cream som definierar lockar och tämjer frizz.",
    cardImage: "/products/maui-curl-cream/maui-thumbnail.webp",
    cardImageAlt: "Maui Moisture Curl Quench+ Coconut Oil Curl Smoothie",
    badge: "Elins favorit för lockar",
    headline: "Maui Moisture Curl Smoothie – curl cream med kokosolja",
    shortBody: "En fuktgivande curl cream med kokosolja som definierar lockar och tämjer frizz. En populär favorit för dig som vill ge lockarna mer form och fukt utan att de känns stela.",
    valueHook: "Curl cream med kokosolja för definierade lockar",
    valueStatement: "Maui Moisture Curl Quench+ Coconut Oil Curl Smoothie är en fuktgivande curl cream för dig med lockigt hår. Kokosolja ger fukt åt torra längder samtidigt som creamen hjälper till att definiera lockar och tämja frizz. Amazon visar 4,6 av 5 från 11 372 omdömen, och köpare lyfter framför allt mer definierade lockar och mindre frizz.",
    passFor: [
      "Har lockigt hår och vill ge lockarna mer form och definition.",
      "Vill tämja frizz och ge torra längder mer fukt.",
      "Letar efter en curl cream att forma lockarna med i fuktigt hår.",
    ],
    caution: "Dosera efter din hårtyp så att lockarna inte känns tyngda – fint hår behöver oftast mindre. Resultatet varierar med lockmönster och hur torrt håret är, så testa dig fram till rätt mängd.",
    usageGuidance: {
      title: "Så använder du det rätt",
      text: "Applicera i fuktigt hår och fördela genom längderna, gärna med scrunch-teknik för att forma lockarna. Lufttorka eller diffusera. Börja med en lagom mängd och justera efter hur lockarna känns.",
    },
    verdict: "Fuktgivande curl cream som definierar lockar och tämjer frizz.",
    amazonSummary: "Amazon visar 4,6 av 5 från 11 372 omdömen. Köpare beskriver mer definierade lockar och mindre frizz, men mängden bör doseras efter hårtyp så att lockarna inte känns tyngda.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Hur använder jag Maui curl cream?",
        answer: "Applicera i fuktigt hår och fördela genom längderna, gärna med scrunch-teknik för att forma lockarna. Lufttorka eller diffusera och justera mängden efter hur lockarna känns.",
      },
      {
        question: "Gör creamen lockarna stela?",
        answer: "Det är en fuktgivande curl cream snarare än en stark gel, men för mycket produkt kan tynga lockarna. Börja med en lagom mängd och öka bara vid behov.",
      },
      {
        question: "Passar den alla lockmönster?",
        answer: "Den används i många olika lockrutiner, men resultatet varierar med lockmönster och hur torrt håret är. Testa dig fram till den mängd och teknik som passar dina lockar.",
      },
    ],
    reviewSectionId: "maui-curl-smoothie-recensioner",
    reviewFormId: "maui-curl-smoothie-skriv-recension",
    targetKeyword: "lockcreme curl cream",
    metaTitle: "Maui Moisture Curl Smoothie – curl cream med kokosolja | Elins val",
    metaDescription: "Elin går igenom Maui Moisture Curl Quench+ Coconut Oil Curl Smoothie: en fuktgivande curl cream med kokosolja som definierar lockar och tämjer frizz (4,6 av 5, 11 372 omdömen).",
    relatedLinks: [
      {
        href: "/skonhet/harolja",
        label: "Hårolja",
        text: "Närande olja för torra längder och toppar.",
      },
      {
        href: "/skonhet/torrschampo",
        label: "Torrschampo",
        text: "Fräscha upp håret mellan tvättarna.",
      },
      {
        href: "/skonhet/varmeskydd",
        label: "Värmeskydd",
        text: "Skydda håret före föntork och plattång.",
      },
    ],
  },
  {
    productSlug: cantuLeaveInProduct.slug,
    product: cantuLeaveInProduct,
    href: "/skonhet/leave-in-conditioner",
    cardBadge: "Sheasmör",
    cardHook: "Närande leave-in som mjukgör torrt och lockigt hår.",
    cardImage: "/products/cantu-leave-in/cantu-thumbnail.webp",
    cardImageAlt: "Cantu Shea Butter Leave-In Conditioning Repair Cream, 453 g",
    badge: "Elins favorit för torra lockar",
    headline: "Cantu Shea Butter Leave-In – cream för torrt hår",
    shortBody: "En närande leave-in med sheasmör för torrt och lockigt hår. Den mjukgör och underlättar utredning, en populär favorit för dig som vill ge torra längder extra fukt.",
    valueHook: "Leave-in med sheasmör för torrt hår",
    valueStatement: "Cantu Shea Butter Leave-In Conditioning Repair Cream är en närande leave-in för dig med torrt och lockigt hår. Sheasmör mjukgör längderna och gör det lättare att reda ut håret, utan att du behöver skölja ur. Amazon visar 4,4 av 5 från hela 22 030 omdömen, och köpare lyfter framför allt mjukheten och att håret blir lättare att hantera.",
    passFor: [
      "Har torrt och lockigt hår som behöver extra fukt.",
      "Vill ha en leave-in som underlättar utredning av längderna.",
      "Letar efter ett mjukgörande basssteg i lockrutinen.",
    ],
    caution: "Det här är en rik cream, så dosera efter din hårtyp så att håret inte känns tyngt. Fint och tunt hår kan behöva en mindre mängd, medan tjockt och lockigt hår tål mer.",
    usageGuidance: {
      title: "Så använder du det rätt",
      text: "Applicera en lagom mängd i fuktigt, nytvättat hår och fördela genom längder och toppar. Skölj inte ur. Lufttorka eller styla som vanligt och justera mängden efter hur håret känns.",
    },
    verdict: "Närande leave-in för torrt och lockigt hår som behöver fukt.",
    amazonSummary: "Amazon visar 4,4 av 5 från 22 030 omdömen. Köpare beskriver mjukare, mer återfuktade längder som är lättare att reda ut, men det är en rik cream som bör doseras efter hårtyp.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Hur använder jag Cantu leave-in?",
        answer: "Applicera en lagom mängd i fuktigt, nytvättat hår och fördela genom längder och toppar. Den ska inte sköljas ur – lufttorka eller styla sedan som vanligt.",
      },
      {
        question: "Passar Cantu leave-in fint hår?",
        answer: "Det fungerar, men eftersom det är en rik cream kan fint och tunt hår behöva en mindre mängd så att längderna inte känns tyngda. Börja sparsamt och öka vid behov.",
      },
      {
        question: "Är den bra för lockigt hår?",
        answer: "Ja, den är en favorit i många lockrutiner som ett fuktgivande basssteg. Sheasmör mjukgör torra längder och gör det lättare att reda ut lockigt hår.",
      },
    ],
    reviewSectionId: "cantu-leave-in-conditioner-recensioner",
    reviewFormId: "cantu-leave-in-conditioner-skriv-recension",
    targetKeyword: "leave-in conditioner",
    metaTitle: "Cantu Shea Butter Leave-In Conditioner – för torrt hår | Elins val",
    metaDescription: "Elin går igenom Cantu Shea Butter Leave-In Conditioning Repair Cream: en närande leave-in med sheasmör för torrt och lockigt hår (4,4 av 5, 22 030 omdömen) – och hur du använder den.",
    relatedLinks: [
      {
        href: "/skonhet/harolja",
        label: "Hårolja",
        text: "Närande olja för torra längder och toppar.",
      },
      {
        href: "/skonhet/torrschampo",
        label: "Torrschampo",
        text: "Fräscha upp håret mellan tvättarna.",
      },
      {
        href: "/skonhet/varmeskydd",
        label: "Värmeskydd",
        text: "Skydda håret före föntork och plattång.",
      },
    ],
  },
  {
    productSlug: inkeyScalpScrubProduct.slug,
    product: inkeyScalpScrubProduct,
    href: "/skonhet/scalp-scrub",
    cardBadge: "Exfolierande",
    cardHook: "Hårbottenpeeling med glykolsyra för en fräschare hårbotten.",
    cardImage: "/products/inkey-scalp-scrub/inkey-scrub-thumbnail.webp",
    cardImageAlt: "The INKEY List Glycolic Acid Exfoliating Scalp Scrub, 150 ml",
    badge: "Elins favorit för ren hårbotten",
    headline: "The INKEY List Scalp Scrub – peeling för hårbotten",
    shortBody: "En exfolierande hårbottenpeeling med glykolsyra som rengör hårbotten från produktrester och fjäll för en fräschare känsla. Ett enkelt steg för en ordentlig rengöring.",
    valueHook: "Hårbottenpeeling för en fräschare hårbotten",
    valueStatement: "The INKEY List Glycolic Acid Exfoliating Scalp Scrub är en hårbottenpeeling för dig som vill ge hårbotten en ordentlig rengöring. Glykolsyra hjälper till att exfoliera och lösa upp produktrester och fjäll, för en fräschare känsla. Amazon visar 4,2 av 5 från 1 940 omdömen, och köpare lyfter framför allt den rena, fräscha känslan efteråt.",
    passFor: [
      "Vill rengöra hårbotten från produktrester och fjäll.",
      "Gillar en fräsch, ren känsla i hårbotten efter duschen.",
      "Letar efter ett enkelt exfolierande steg i hårvårdsrutinen.",
    ],
    caution: "Det här är en peeling, så använd den ett par gånger i veckan snarare än varje dag. Glykolsyra kan kännas lätt pirrigt, och du bör undvika produkten om hårbotten är sårig eller irriterad.",
    usageGuidance: {
      title: "Så använder du det rätt",
      text: "Massera in scrubben i blött hår direkt på hårbotten i duschen, låt verka en kort stund och skölj ur. Använd ett par gånger i veckan och följ upp med schampo som vanligt.",
    },
    verdict: "Exfolierande hårbottenpeeling för en ren och fräsch hårbotten.",
    amazonSummary: "Amazon visar 4,2 av 5 från 1 940 omdömen. Köpare beskriver en fräschare, renare hårbotten, men det är en peeling som bör användas ett par gånger i veckan och inte på irriterad hårbotten.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Hur ofta använder jag en hårbottenpeeling?",
        answer: "Ett par gånger i veckan räcker oftast. Det är en exfolierande peeling, så den behöver inte användas varje dag – lyssna på hur hårbotten känns och anpassa efter behov.",
      },
      {
        question: "Hur använder jag scalp scrubben?",
        answer: "Massera in den i blött hår direkt på hårbotten i duschen, låt verka en kort stund och skölj ur. Följ sedan upp med schampo som vanligt.",
      },
      {
        question: "Passar den om jag har irriterad hårbotten?",
        answer: "Undvik produkten om hårbotten är sårig eller irriterad, eftersom glykolsyra kan kännas pirrigt. Vänta tills hårbotten känns lugn igen innan du exfolierar.",
      },
    ],
    reviewSectionId: "inkey-scalp-scrub-recensioner",
    reviewFormId: "inkey-scalp-scrub-skriv-recension",
    targetKeyword: "scalp scrub hårbottenpeeling",
    metaTitle: "The INKEY List Glycolic Acid Scalp Scrub – hårbottenpeeling | Elins val",
    metaDescription: "Elin går igenom The INKEY List Glycolic Acid Scalp Scrub: en exfolierande hårbottenpeeling med glykolsyra för en fräschare hårbotten (4,2 av 5, 1 940 omdömen) – och hur du använder den.",
    relatedLinks: [
      {
        href: "/skonhet/harolja",
        label: "Hårolja",
        text: "Närande olja för torra längder och toppar.",
      },
      {
        href: "/skonhet/torrschampo",
        label: "Torrschampo",
        text: "Fräscha upp håret mellan tvättarna.",
      },
      {
        href: "/skonhet/varmeskydd",
        label: "Värmeskydd",
        text: "Skydda håret före föntork och plattång.",
      },
    ],
  },
  {
    productSlug: mielleRosemaryOilProduct.slug,
    product: mielleRosemaryOilProduct,
    href: "/skonhet/rosmarinolja",
    cardBadge: "Rosmarin & mynta",
    cardHook: "Viral hårbottenolja med en uppfriskande, svalkande känsla.",
    cardImage: "/products/mielle-rosemary/mielle-thumbnail.webp",
    cardImageAlt: "Mielle Rosemary Mint Scalp & Hair Oil, 58 g",
    badge: "Elins favorit för hårbotten",
    headline: "Mielle Rosemary Mint – olja för hårbotten och längder",
    shortBody: "En viral hårbottenolja med rosmarin och mynta som ger en uppfriskande känsla i hårbotten och vårdar längderna. En populär favorit för dig som gillar en lätt svalkande olja.",
    valueHook: "Hårbottenolja med rosmarin och mynta",
    valueStatement: "Mielle Rosemary Mint Scalp & Hair Oil är en viral hårbottenolja för dig som vill ge hårbotten och längder lite extra omvårdnad. Rosmarin och mynta ger en uppfriskande, lätt svalkande känsla när oljan masseras in. Amazon visar 4,4 av 5 från 2 413 omdömen, och köpare lyfter framför allt den svalkande känslan och doften.",
    passFor: [
      "Gillar en uppfriskande, lätt svalkande känsla i hårbotten.",
      "Tycker om doften av rosmarin och mynta i hårvården.",
      "Vill ha en olja som går att använda både på hårbotten och längder.",
    ],
    caution: "Det här är en olja, så använd den sparsamt så att håret inte känns tyngt. Doften av mynta är tydlig och upplevs olika från person till person, och resultatet varierar med hårtyp.",
    usageGuidance: {
      title: "Så använder du det rätt",
      text: "Droppa lite olja direkt på hårbotten och massera in med fingertopparna. Du kan även stryka en liten mängd genom längderna. Börja sparsamt och justera mängden efter hur håret känns.",
    },
    verdict: "Uppfriskande hårbottenolja för dig som gillar rosmarin och mynta.",
    amazonSummary: "Amazon visar 4,4 av 5 från 2 413 omdömen. Köpare beskriver en uppfriskande, svalkande känsla och uppskattar doften, men det är en olja som bör doseras sparsamt.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Hur använder jag Mielle Rosemary Mint-oljan?",
        answer: "Droppa lite olja direkt på hårbotten och massera in med fingertopparna. Du kan även stryka en liten mängd genom längderna. Börja sparsamt och justera efter hur håret känns.",
      },
      {
        question: "Känns oljan tung i håret?",
        answer: "Det beror på hur mycket du använder. Eftersom det är en olja är det bäst att börja med en liten mängd och öka vid behov, så att längderna inte känns tyngda.",
      },
      {
        question: "Hur ofta kan jag använda den?",
        answer: "Många använder den några gånger i veckan. Lyssna på hur hårbotten och längderna känns och anpassa frekvensen efter din egen rutin.",
      },
    ],
    reviewSectionId: "mielle-rosemary-oil-recensioner",
    reviewFormId: "mielle-rosemary-oil-skriv-recension",
    targetKeyword: "rosmarinolja för håret",
    metaTitle: "Mielle Rosemary Mint Scalp & Hair Oil – rosmarinolja | Elins val",
    metaDescription: "Elin går igenom Mielle Rosemary Mint Scalp & Hair Oil: en viral hårbottenolja med rosmarin och mynta för en uppfriskande känsla (4,4 av 5, 2 413 omdömen) – och hur du använder den.",
    relatedLinks: [
      {
        href: "/skonhet/harolja",
        label: "Hårolja",
        text: "Närande olja för torra längder och toppar.",
      },
      {
        href: "/skonhet/torrschampo",
        label: "Torrschampo",
        text: "Fräscha upp håret mellan tvättarna.",
      },
      {
        href: "/skonhet/varmeskydd",
        label: "Värmeskydd",
        text: "Skydda håret före föntork och plattång.",
      },
    ],
  },
  {
    productSlug: olaplexNo3Product.slug,
    product: olaplexNo3Product,
    href: "/skonhet/olaplex-no3",
    cardBadge: "Återuppbyggande",
    cardHook: "Pre-schampo-inpackning som stärker slitet och skadat hår.",
    cardImage: "/products/olaplex-no3/olaplex3-thumbnail.webp",
    cardImageAlt: "Olaplex No.3 Hair Perfector inpackning för skadat hår",
    badge: "Elins favorit för skadat hår",
    headline: "Olaplex No.3 – inpackning för skadat hår",
    shortBody: "En återuppbyggande inpackning som används före schampo för att stärka slitet, skadat hår. En klassisk favorit för dig med blekt, färgat eller värmestylat hår.",
    valueHook: "Inpackning som stärker skadat hår",
    valueStatement: "Olaplex No.3 Hair Perfector är en återuppbyggande inpackning för dig som vill ge slitet och skadat hår extra omvårdnad. Den används på fuktigt hår före schampo och har blivit en klassisk favorit hos många med blekt, färgat eller värmestylat hår. Amazon visar 4,5 av 5 från 551 omdömen, och köpare lyfter framför allt att håret känns starkare och mjukare med tiden.",
    passFor: [
      "Har blekt, färgat eller värmestylat hår som känns slitet.",
      "Vill lägga till ett återuppbyggande steg före schampo.",
      "Letar efter en klassisk, omtyckt inpackning för skadat hår.",
    ],
    caution: "Olaplex No.3 är en inpackning som används före schampo – inte en balsam eller leave-in. Resultatet varierar med hårtyp och hur slitet håret är från början, så ge det gärna några användningar.",
    usageGuidance: {
      title: "Så använder du det rätt",
      text: "Applicera på fuktigt, handduktorkat hår, fördela från längder till toppar och låt verka en stund. Skölj ur och fortsätt sedan med schampo och balsam som vanligt.",
    },
    verdict: "Klassisk återuppbyggande inpackning för slitet och skadat hår.",
    amazonSummary: "Amazon visar 4,5 av 5 från 551 omdömen. Köpare beskriver att håret känns starkare och mjukare, men det är en inpackning före schampo och resultatet varierar med hårtyp.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "När använder jag Olaplex No.3?",
        answer: "Olaplex No.3 används på fuktigt hår före schampo. Fördela från längder till toppar, låt verka en stund och skölj sedan ur innan du schamponerar som vanligt.",
      },
      {
        question: "Passar Olaplex No.3 blekt och färgat hår?",
        answer: "Ja, det är en favorit hos många med blekt, färgat eller värmestylat hår som vill ge slitna längder extra omvårdnad. Resultatet varierar dock med hur slitet håret är.",
      },
      {
        question: "Är Olaplex No.3 en balsam?",
        answer: "Nej, det är en återuppbyggande inpackning som används före schampo – inte en balsam eller leave-in. Du fortsätter med din vanliga balsam efteråt.",
      },
    ],
    reviewSectionId: "olaplex-no3-treatment-recensioner",
    reviewFormId: "olaplex-no3-treatment-skriv-recension",
    targetKeyword: "hårinpackning skadat hår",
    metaTitle: "Olaplex No.3 Hair Perfector – inpackning för skadat hår | Elins val",
    metaDescription: "Elin går igenom Olaplex No.3 Hair Perfector: en återuppbyggande pre-schampo-inpackning för slitet och skadat hår (4,5 av 5, 551 omdömen) – och hur du använder den rätt.",
    relatedLinks: [
      {
        href: "/skonhet/harolja",
        label: "Hårolja",
        text: "Närande olja för torra längder och toppar.",
      },
      {
        href: "/skonhet/torrschampo",
        label: "Torrschampo",
        text: "Fräscha upp håret mellan tvättarna.",
      },
      {
        href: "/skonhet/varmeskydd",
        label: "Värmeskydd",
        text: "Skydda håret före föntork och plattång.",
      },
    ],
  },
  {
    productSlug: olaplexNo5ConditionerProduct.slug,
    product: olaplexNo5ConditionerProduct,
    href: "/skonhet/olaplex-balsam",
    cardBadge: "Återfuktande balsam",
    cardHook: "Stärker och mjukgör torrt, slitet hår med mindre frizz.",
    cardImage: "/products/olaplex-no5/olaplex5-thumbnail.webp",
    cardImageAlt: "Olaplex No.5 Bond Maintenance Conditioner, 250 ml",
    badge: "Elins favorit för torrt hår",
    headline: "Olaplex No.5 – återfuktande balsam för torrt hår",
    shortBody: "Ett återfuktande balsam som stärker och mjukgör torrt, slitet hår. Den krämiga formulan hjälper håret att kännas mjukare och mer hanterbart, samtidigt som den jobbar mot frizz.",
    valueHook: "Återfuktande balsam för torrt, slitet hår",
    valueStatement: "Olaplex No.5 Bond Maintenance Conditioner är ett återfuktande balsam för dig som vill ge torrt, slitet hår mer mjukhet och styrka. Den krämiga formulan hjälper håret att kännas mjukare och mer hanterbart, samtidigt som den jobbar mot frizz för en lugnare yta. Amazon visar 4,5 av 5 från 10 723 omdömen, och köpare lyfter framför allt att håret känns mjukare, mer hanterbart och mindre frissigt efter användning.",
    passFor: [
      "Har torrt, slitet hår och vill ha ett mer återfuktande balsam.",
      "Vill ha mjukare, mer hanterbart hår som är lättare att reda ut.",
      "Önskar mindre frizz och en lugnare yta i längderna.",
    ],
    caution: "Tunt hår kan behöva en mindre mängd för att inte kännas tyngt, och upplevelsen varierar mellan hårtyper. Ge balsamet några tvättar innan du dömer ut det.",
    usageGuidance: {
      title: "Så använder du det rätt",
      text: "Använd efter schampo på det blöta håret. Fördela i längder och toppar, låt verka en stund och skölj ur. Fokusera på de torra partierna och undvik för mycket vid hårbotten om håret är tunt.",
    },
    verdict: "Återfuktande balsam som stärker och mjukgör torrt, slitet hår.",
    amazonSummary: "Amazon visar 4,5 av 5 från 10 723 omdömen. Köpare beskriver mjukare, mer hanterbart hår och mindre frizz, men tunt hår kan behöva en mindre mängd.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Passar Olaplex No.5 torrt hår?",
        answer: "Ja, det är ett återfuktande balsam som är gjort för att mjukgöra och stärka torrt, slitet hår. Fördela i längder och toppar och låt verka en stund före sköljning.",
      },
      {
        question: "Hjälper balsamet mot frizz?",
        answer: "Många köpare upplever mindre frizz och en lugnare yta. Resultatet varierar mellan hårtyper, så ge det gärna några tvättar.",
      },
      {
        question: "Hur använder jag Olaplex No.5 balsam?",
        answer: "Använd efter schampo på blött hår. Fördela i längder och toppar, låt verka en stund och skölj ur. Använd mindre mängd om håret är tunt.",
      },
    ],
    reviewSectionId: "olaplex-no5-conditioner-recensioner",
    reviewFormId: "olaplex-no5-conditioner-skriv-recension",
    targetKeyword: "balsam torrt hår",
    metaTitle: "Olaplex No.5 Balsam – återfuktar torrt hår | Elins val",
    metaDescription: "Elin går igenom Olaplex No.5 Bond Maintenance Conditioner: ett återfuktande balsam som stärker och mjukgör torrt, slitet hår med mindre frizz (4,5 av 5, 10 723 omdömen).",
    relatedLinks: [
      {
        href: "/skonhet/harolja",
        label: "Hårolja",
        text: "Extra näring och lyster för torra toppar.",
      },
      {
        href: "/skonhet/torrschampo",
        label: "Torrschampo",
        text: "Fräscha upp håret mellan tvättarna.",
      },
      {
        href: "/skonhet/varmeskydd",
        label: "Värmeskydd",
        text: "Skydda håret innan du värmestylar.",
      },
    ],
  },
  {
    productSlug: olaplexNo4ShampooProduct.slug,
    product: olaplexNo4ShampooProduct,
    href: "/skonhet/olaplex-schampo",
    cardBadge: "För färgat hår",
    cardHook: "Återuppbyggande schampo som stärker slitna, färgade längder.",
    cardImage: "/products/olaplex-no4/olaplex4-thumbnail.webp",
    cardImageAlt: "Olaplex No.4 Bond Maintenance Shampoo, 250 ml",
    badge: "Elins favorit för slitet hår",
    headline: "Olaplex No.4 – återuppbyggande schampo för färgat hår",
    shortBody: "Ett schampo som är gjort för att stärka och vårda slitet, färgat hår. Det rengör skonsamt och jobbar med längder och toppar för en mjukare, mer hanterbar känsla.",
    valueHook: "Stärker och vårdar slitet, färgat hår",
    valueStatement: "Olaplex No.4 Bond Maintenance Shampoo är ett återuppbyggande schampo för dig med hår som blivit slitet av färgning, blekning och värme. Det rengör skonsamt samtidigt som det jobbar med längder och toppar, så att håret känns starkare, mjukare och mer hanterbart. Amazon visar 4,5 av 5 från 13 375 omdömen, och köpare lyfter framför allt att slitna, färgade längder känns starkare med tiden och att lite produkt räcker långt.",
    passFor: [
      "Har färgat eller blekt hår och vill vårda slitna längder.",
      "Vill ha ett återuppbyggande schampo som känns mjukgörande.",
      "Gillar att lite produkt räcker långt och löddrar krämigt.",
    ],
    caution: "Ett vårdande schampo gör mest nytta tillsammans med rätt rutin, och upplevelsen varierar mellan hårtyper och hur slitet håret är. Kombinera gärna med balsam för en mjukare känsla i topparna.",
    usageGuidance: {
      title: "Så använder du det rätt",
      text: "Massera in en liten klick i blött hår, skölj och upprepa vid behov. Följ gärna upp med balsam eller inpackning i samma serie för extra vård i längder och toppar.",
    },
    verdict: "Återuppbyggande schampo som många väljer för slitet och färgat hår.",
    amazonSummary: "Amazon visar 4,5 av 5 från 13 375 omdömen. Köpare beskriver starkare, mjukare längder med tiden och att lite produkt räcker långt, men upplevelsen varierar mellan hårtyper.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Passar Olaplex No.4 färgat hår?",
        answer: "Ja, schampot är gjort för slitet och färgat hår. Det rengör skonsamt och jobbar med längder och toppar för en starkare och mjukare känsla.",
      },
      {
        question: "Hur mycket schampo behöver jag?",
        answer: "En liten klick räcker oftast långt eftersom det löddrar krämigt. Massera in i blött hår, skölj och upprepa vid behov.",
      },
      {
        question: "Behöver jag balsam också?",
        answer: "Ett vårdande schampo gör mest nytta i en rutin. Följ gärna upp med balsam eller inpackning i samma serie för en mjukare känsla i längder och toppar.",
      },
    ],
    reviewSectionId: "olaplex-no4-shampoo-recensioner",
    reviewFormId: "olaplex-no4-shampoo-skriv-recension",
    targetKeyword: "schampo bäst i test",
    metaTitle: "Olaplex No.4 Bond Maintenance Shampoo – för färgat hår | Elins val",
    metaDescription: "Elin går igenom Olaplex No.4 Bond Maintenance Shampoo: ett återuppbyggande schampo för slitet och färgat hår (4,5 av 5, 13 375 omdömen) – och vad du bör veta innan du köper.",
    relatedLinks: [
      {
        href: "/skonhet/harolja",
        label: "Hårolja",
        text: "Extra vård och lyster för torra längder och toppar.",
      },
      {
        href: "/skonhet/torrschampo",
        label: "Torrschampo",
        text: "Fräscha upp håret mellan tvättarna.",
      },
      {
        href: "/skonhet/varmeskydd",
        label: "Värmeskydd",
        text: "Skydda håret innan du använder värmeverktyg.",
      },
    ],
  },
  {
    productSlug: neutrogenaHandCreamProduct.slug,
    product: neutrogenaHandCreamProduct,
    href: "/skonhet/handkram",
    cardBadge: "För torra händer",
    cardHook: "Koncentrerad handkräm där lite räcker långt.",
    cardImage: "/products/neutrogena-hand-cream/neutrogena-thumbnail.webp",
    cardImageAlt: "Neutrogena Norwegian Formula handkräm, 75 ml",
    badge: "Elins favorit för torra händer",
    headline: "Neutrogena Norwegian Formula – handkräm för torra händer",
    shortBody: "En koncentrerad handkräm för mycket torra händer där en liten mängd räcker långt. Den sjunker in snabbt och hjälper strävа händer att kännas mjuka och smidiga igen.",
    valueHook: "Koncentrerad handkräm för mycket torra händer",
    valueStatement: "Neutrogena Norwegian Formula är en klassisk handkräm för dig med mycket torra händer som vill ha något dryg och effektivt. Formulan är koncentrerad, så en liten klick räcker långt, och de flesta upplever att den sjunker in snabbt och lämnar händerna mjuka snarare än feta. Amazon visar 4,6 av 5 från 9248 omdömen, och köpare lyfter framför allt hur mjuka torra händer känns och hur länge tuben räcker.",
    passFor: [
      "Har mycket torra händer och vill ha en koncentrerad handkräm.",
      "Vill ha en dryg produkt där lite räcker långt.",
      "Föredrar en kräm som sjunker in snabbt utan att kännas fet.",
    ],
    caution: "Krämen är koncentrerad, så använd bara en liten klick åt gången för att undvika en fet känsla. Doften är märkbar och om du föredrar oparfymerat passar den mindre bra.",
    usageGuidance: {
      title: "Så använder du den rätt",
      text: "Massera in en liten klick på rena, torra händer, gärna efter handtvätt och innan läggdags. En liten mängd räcker långt eftersom krämen är koncentrerad.",
    },
    verdict: "En koncentrerad, dryg handkräm som hjälper mycket torra händer att kännas mjuka.",
    amazonSummary: "Amazon visar 4,6 av 5 från 9248 omdömen. Köpare beskriver mjuka händer och att lite räcker långt, men krämen är koncentrerad och doften en smaksak.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Hur mycket handkräm ska jag använda?",
        answer: "Krämen är koncentrerad, så en liten klick räcker. Massera in den på rena, torra händer och lägg på mer bara om det behövs.",
      },
      {
        question: "När passar det bäst att använda krämen?",
        answer: "Bra tillfällen är efter handtvätt och innan läggdags. Då hinner händerna ta upp fukten och känns mjuka och smidiga längre.",
      },
      {
        question: "Känns Neutrogena-handkrämen fet?",
        answer: "Texturen är koncentrerad men beskrivs som snabbt insjunkande i omdömena. Använd en liten mängd så lämnar den händerna mjuka snarare än feta.",
      },
    ],
    reviewSectionId: "neutrogena-hand-cream-recensioner",
    reviewFormId: "neutrogena-hand-cream-skriv-recension",
    targetKeyword: "handkräm torra händer",
    metaTitle: "Neutrogena Norwegian Formula handkräm – torra händer | Elins val",
    metaDescription: "Elin går igenom Neutrogena Norwegian Formula: en koncentrerad handkräm för mycket torra händer där lite räcker långt (4,6 av 5, 9248 omdömen) – och vad du bör veta.",
    relatedLinks: [
      {
        href: "/skonhet/cerave-rengoring",
        label: "CeraVe rengöring",
        text: "Mild rengöring som tar dagen utan att torka ut.",
      },
      {
        href: "/skonhet/cicaplast-b5",
        label: "Cicaplast B5",
        text: "Lugnande balsam för torr och stressad hud.",
      },
      {
        href: "/skonhet/vitamin-c-serum",
        label: "Vitamin C-serum",
        text: "Antioxidantserum för lyster och glow.",
      },
    ],
  },
  {
    productSlug: biothermBodyLotionProduct.slug,
    product: biothermBodyLotionProduct,
    href: "/skonhet/kroppslotion",
    cardBadge: "Återfuktar & mjukgör",
    cardHook: "Lättabsorberad kroppslotion som håller huden len och smidig.",
    cardImage: "/products/biotherm-body-lotion/biotherm-thumbnail.webp",
    cardImageAlt: "Biotherm Lait Corporel återfuktande kroppslotion",
    badge: "Elins favorit för kroppen",
    headline: "Biotherm Lait Corporel – återfuktande kroppslotion",
    shortBody: "En klassisk kroppslotion som återfuktar och mjukgör med en lätt, snabbt insjunkande textur. Den friska doften och smidiga konsistensen gör den enkel att använda varje dag efter dusch.",
    valueHook: "Klassisk kroppslotion för len, mjuk hud",
    valueStatement: "Biotherm Lait Corporel är en omtyckt kroppslotion för dig som vill hålla huden len, mjuk och återfuktad i vardagen. Den lätta texturen sjunker in snabbt utan att kännas klibbig, och den friska doften gör den till ett trevligt steg efter duschen. Amazon visar 4,7 av 5 från 4002 omdömen, och köpare lyfter framför allt hur återfuktad huden känns, den lätta känslan och doften.",
    passFor: [
      "Vill ha en lättabsorberad kroppslotion till dagligt bruk.",
      "Gillar en frisk doft och en len, smidig hudkänsla.",
      "Söker en klassisk lotion som återfuktar och mjukgör huden.",
    ],
    caution: "Doften är märkbar och om du föredrar oparfymerat passar den mindre bra. Vid mycket torr hud kan du behöva applicera ett rikare lager eller använda lotionen dagligen för bästa resultat.",
    usageGuidance: {
      title: "Så använder du den rätt",
      text: "Applicera på ren, lätt fuktig hud direkt efter dusch eller bad. Då låser du in fukten bäst och huden hinner kännas len och mjuk innan du klär på dig.",
    },
    verdict: "En klassisk, lättabsorberad kroppslotion som håller huden len och återfuktad.",
    amazonSummary: "Amazon visar 4,7 av 5 från 4002 omdömen. Köpare beskriver en len, återfuktad hud och en lätt textur som absorberas snabbt, men doften är en smaksak.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "När använder jag kroppslotionen bäst?",
        answer: "Bäst effekt får du på ren, lätt fuktig hud direkt efter dusch eller bad. Då låses fukten in och huden känns len och mjuk en längre stund.",
      },
      {
        question: "Känns Biotherm Lait Corporel klibbig?",
        answer: "Texturen är lätt och beskrivs som snabbt insjunkande i omdömena, så de flesta upplever den inte som klibbig. Använd ett tunt lager och låt den sjunka in innan du klär på dig.",
      },
      {
        question: "Passar lotionen torr hud?",
        answer: "Den återfuktar och mjukgör och passar fint till daglig vård. Vid mycket torr hud kan du applicera ett rikare lager eller använda den varje dag för bästa känsla.",
      },
    ],
    reviewSectionId: "biotherm-lait-corporel-recensioner",
    reviewFormId: "biotherm-lait-corporel-skriv-recension",
    targetKeyword: "kroppslotion",
    metaTitle: "Biotherm Lait Corporel – återfuktande kroppslotion | Elins val",
    metaDescription: "Elin går igenom Biotherm Lait Corporel: en klassisk kroppslotion som återfuktar och mjukgör med lätt textur (4,7 av 5, 4002 omdömen) – och vad du bör veta om doft och hudkänsla.",
    relatedLinks: [
      {
        href: "/skonhet/cerave-rengoring",
        label: "CeraVe rengöring",
        text: "Mild rengöring som tar dagen utan att torka ut.",
      },
      {
        href: "/skonhet/cicaplast-b5",
        label: "Cicaplast B5",
        text: "Lugnande balsam för torr och stressad hud.",
      },
      {
        href: "/skonhet/vitamin-c-serum",
        label: "Vitamin C-serum",
        text: "Antioxidantserum för lyster och glow.",
      },
    ],
  },
  {
    productSlug: olayRegeneristNightProduct.slug,
    product: olayRegeneristNightProduct,
    href: "/skonhet/nattkram",
    cardBadge: "Återfuktande",
    cardHook: "Rik nattkräm som ger huden fukt och en smidigare känsla till morgonen.",
    cardImage: "/products/olay-night-cream/olay-night-thumbnail.webp",
    cardImageAlt: "Olay Regenerist Night Recovery nattkräm, 50 g",
    badge: "Elins nattfavorit",
    headline: "Olay Regenerist Night Recovery – fukt över natten",
    shortBody: "En rik, återfuktande nattkräm med krämig textur som sjunker in. Gjord för att ge huden fukt under natten så att den känns smidigare och mer utvilad till morgonen.",
    valueHook: "Rik nattkräm för fukt och en smidigare känsla",
    valueStatement: "Olay Regenerist Night Recovery är en rik, återfuktande nattkräm för dig som vill ge huden ordentligt med fukt under natten. Den krämiga texturen sjunker in som sista steg på kvällen och hjälper huden att kännas smidigare och mer utvilad till morgonen. Amazon visar 4,6 av 5 från 17 614 omdömen, och köpare lyfter framför allt den mjuka känslan till morgonen, hur återfuktande krämen är och att texturen sjunker in fint.",
    passFor: [
      "Vill ge huden ordentligt med fukt under natten.",
      "Önskar en smidigare, mjukare känsla i huden till morgonen.",
      "Gillar en rik kräm som sista steg i kvällsrutinen.",
    ],
    caution: "En rik kräm kan kännas för mycket för väldigt fet hud – börja gärna med ett tunt lager. Produkten innehåller doft, så är du känslig för parfym kan det vara bra att prova försiktigt först.",
    usageGuidance: {
      title: "Så använder du det rätt",
      text: "Massera in ett lagom lager på ren hud som sista steg på kvällen. Börja gärna tunt om huden är fet och öka vid behov – krämen får verka och ge huden fukt under natten.",
    },
    verdict: "Rik, återfuktande nattkräm som ger huden fukt och en smidigare känsla till morgonen.",
    amazonSummary: "Amazon visar 4,6 av 5 från 17 614 omdömen. Köpare beskriver en återfuktande kräm och en smidigare känsla till morgonen, men den kan kännas rik för fet hud.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "När använder jag nattkrämen?",
        answer: "Som sista steg på kvällen, på ren hud. Massera in ett lagom lager och låt krämen verka och ge huden fukt under natten.",
      },
      {
        question: "Passar nattkrämen fet hud?",
        answer: "Den är rik, vilket många med normal till torr hud uppskattar. Har du fet hud kan du börja med ett tunt lager och se hur huden känns.",
      },
      {
        question: "Innehåller krämen doft?",
        answer: "Ja, produkten innehåller doft. Är du känslig för parfym kan det vara bra att prova försiktigt på en liten yta först.",
      },
    ],
    reviewSectionId: "olay-regenerist-night-cream-recensioner",
    reviewFormId: "olay-regenerist-night-cream-skriv-recension",
    targetKeyword: "nattkräm",
    metaTitle: "Olay Regenerist Night Recovery – nattkräm | Elins val",
    metaDescription: "Elin går igenom Olay Regenerist Night Recovery: en rik, återfuktande nattkräm som ger huden fukt och en smidigare känsla till morgonen (4,6 av 5, 17 614 omdömen).",
    relatedLinks: [
      {
        href: "/skonhet/vitamin-c-serum",
        label: "Vitamin C-serum",
        text: "C-vitamin för lyster och glow på morgonen.",
      },
      {
        href: "/skonhet/cicaplast-b5",
        label: "Cicaplast B5",
        text: "Lugnande balm för stressad och torr hud.",
      },
      {
        href: "/skonhet/hyaluronsyra-serum",
        label: "Hyaluronsyra-serum",
        text: "Lägg till ett enkelt fuktsteg i rutinen.",
      },
    ],
  },
  {
    productSlug: diorLipGlowOilProduct.slug,
    product: diorLipGlowOilProduct,
    href: "/skonhet/lip-oil",
    cardBadge: "Naturlig lyster",
    cardHook: "Vårdande läppolja som återfuktar och ger en glansig, naturlig lyster.",
    cardImage: "/products/dior-lip-oil/dior-lip-thumbnail.webp",
    cardImageAlt: "Dior Addict Lip Glow Oil läppolja, 000 Universal Clear",
    badge: "Elins premium-favorit",
    headline: "Dior Addict Lip Glow Oil – naturlig lyster",
    shortBody: "En vårdande, glansig läppolja i nyansen 000 Universal Clear. Återfuktar läpparna och ger en naturlig lyster med glans utan att kännas klibbig – en premium-favorit.",
    valueHook: "Vårdande läppolja för naturlig lyster",
    valueStatement: "Dior Addict Lip Glow Oil är en vårdande läppolja för dig som vill ha mjuka läppar med en glansig, naturlig lyster. I nyansen 000 Universal Clear ger den glans utan att kännas klibbig och passar de flesta. Det är en premium-favorit som ofta lyfts fram för känslan och finishen. Amazon visar 4,5 av 5 från 65 omdömen, vilket är få omdömen ännu – så betyget är positivt men helhetsbilden fortfarande begränsad. Köpare beskriver framför allt mjuka läppar och en fin lyster.",
    passFor: [
      "Vill ha mjuka läppar med en glansig, naturlig lyster.",
      "Önskar en klar nyans som passar de flesta.",
      "Letar efter en vårdande premium-läppolja utan klibbig känsla.",
    ],
    caution: "Antalet omdömen är ännu lågt, så helhetsbilden är begränsad. Glansen är en kosmetisk finish som mattas av med tiden och behöver läggas om under dagen.",
    usageGuidance: {
      title: "Så använder du det rätt",
      text: "Stryk ett tunt lager över rena läppar när du vill ha glans och en mjuk känsla. Lägg om under dagen vid behov – en liten mängd räcker för en naturlig lyster.",
    },
    verdict: "Lyxig, vårdande läppolja för naturlig lyster och mjuka läppar – men få omdömen ännu.",
    amazonSummary: "Amazon visar 4,5 av 5 från 65 omdömen – få ännu. Köpare beskriver mjuka läppar och en fin lyster, men helhetsbilden är fortfarande begränsad.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Vilken nyans är 000 Universal Clear?",
        answer: "Det är en klar, transparent nyans som ger glans och lyster utan färg. Den beskrivs som lätt att bära och passar de flesta.",
      },
      {
        question: "Känns läppoljan klibbig?",
        answer: "Flera köpare tycker den känns vårdande snarare än klibbig. Ett tunt lager räcker för en mjuk, glansig finish.",
      },
      {
        question: "Hur tillförlitligt är betyget?",
        answer: "Betyget är positivt men bygger på få omdömen ännu, så helhetsbilden är begränsad. Se det som en tidig signal snarare än ett etablerat snitt.",
      },
    ],
    reviewSectionId: "dior-lip-glow-oil-recensioner",
    reviewFormId: "dior-lip-glow-oil-skriv-recension",
    targetKeyword: "lip oil läppolja",
    metaTitle: "Dior Addict Lip Glow Oil – läppolja & lyster | Elins val",
    metaDescription: "Elin går igenom Dior Addict Lip Glow Oil (000 Universal Clear): en vårdande läppolja för naturlig lyster och mjuka läppar (4,5 av 5, men endast 65 omdömen).",
    relatedLinks: [
      {
        href: "/skonhet/vitamin-c-serum",
        label: "Vitamin C-serum",
        text: "Apoteksserum för lyster och glow på morgonen.",
      },
      {
        href: "/skonhet/snail-mucin-essence",
        label: "Snail mucin-essence",
        text: "K-beauty-favorit för fukt och dewy lyster.",
      },
      {
        href: "/skonhet/cicaplast-b5",
        label: "Cicaplast B5",
        text: "Lugnande balm för stressad och torr hud.",
      },
    ],
  },
  {
    productSlug: cosrxPimplePatchProduct.slug,
    product: cosrxPimplePatchProduct,
    href: "/skonhet/pimple-patches",
    cardBadge: "Täcker & skyddar",
    cardHook: "Tunna hydrokolloid-plåster som täcker finnen och gör det lättare att inte peta.",
    cardImage: "/products/cosrx-pimple-patch/cosrx-patch-thumbnail.webp",
    cardImageAlt: "COSRX Acne Pimple Master Patch, 24 patches",
    badge: "Elins praktiska favorit",
    headline: "COSRX Acne Pimple Master Patch – täcker och skyddar",
    shortBody: "Tunna hydrokolloid-plåster i olika storlekar som täcker och skyddar finnen. Diskreta att ha på över dagen eller natten och ett enkelt sätt att låta finnen vara i fred.",
    valueHook: "Hydrokolloid-plåster som täcker och skyddar",
    valueStatement: "COSRX Acne Pimple Master Patch är ett ark med tunna hydrokolloid-plåster i olika storlekar. De täcker och skyddar finnen och gör det lättare att inte peta, vilket många tycker är hela poängen. Plåstren är diskreta nog att ha på både dag och natt. Amazon visar 4,5 av 5 från 32 859 omdömen, och köpare lyfter framför allt hur tunna och diskreta de är och hur enkelt det blir att låta finnen vara i fred.",
    passFor: [
      "Vill täcka och skydda en finne och slippa peta på den.",
      "Önskar ett diskret plåster att ha på över dagen eller natten.",
      "Gillar en enkel, snabb lösning i necessären.",
    ],
    caution: "Plåstren täcker och skyddar men är ingen behandling och tar inte bort orsaken till finnen. Vidhäftningen kan variera på fuktig eller väldigt fet hud – rengör och torka huden innan du sätter på en patch.",
    usageGuidance: {
      title: "Så använder du det rätt",
      text: "Rengör och torka huden noga. Välj en patch som täcker finnen, tryck fast den och låt sitta några timmar eller över natten. Byt till en ny vid behov och sätt den på ren, torr hud för bästa vidhäftning.",
    },
    verdict: "Praktiska, diskreta plåster som täcker och skyddar finnen och hjälper dig låta den vara.",
    amazonSummary: "Amazon visar 4,5 av 5 från 32 859 omdömen. Köpare beskriver tunna, diskreta plåster som täcker finnen, men de är inget som tar bort orsaken.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Hur använder jag plåstren?",
        answer: "Rengör och torka huden, välj en patch som täcker finnen och tryck fast den. Låt sitta några timmar eller över natten och byt till en ny vid behov.",
      },
      {
        question: "Vad gör hydrokolloid-plåstren?",
        answer: "De täcker och skyddar finnen och gör det lättare att låta den vara i fred. De är ingen behandling och tar inte bort orsaken.",
      },
      {
        question: "Kan jag ha plåstret under makeup?",
        answer: "Många tycker de tunna plåstren är diskreta nog att ha på dagtid. Sätt dem på ren, torr hud så sitter de bättre och syns mindre.",
      },
    ],
    reviewSectionId: "cosrx-acne-pimple-patch-recensioner",
    reviewFormId: "cosrx-acne-pimple-patch-skriv-recension",
    targetKeyword: "pimple patches",
    metaTitle: "COSRX Acne Pimple Master Patch – täcker & skyddar | Elins val",
    metaDescription: "Elin går igenom COSRX Acne Pimple Master Patch: tunna hydrokolloid-plåster som täcker och skyddar finnen (4,5 av 5, 32 859 omdömen) – och vad du bör veta.",
    relatedLinks: [
      {
        href: "/skonhet/niacinamide-serum",
        label: "Niacinamide-serum",
        text: "Riktat serum för fet och blandad hy.",
      },
      {
        href: "/skonhet/cerave-rengoring",
        label: "CeraVe rengöring",
        text: "Mild rengöring som passar fint i rutinen.",
      },
      {
        href: "/skonhet/cicaplast-b5",
        label: "Cicaplast B5",
        text: "Lugnande balm för stressad och torr hud.",
      },
    ],
  },
  {
    productSlug: natureSpellFaceOilProduct.slug,
    product: natureSpellFaceOilProduct,
    href: "/skonhet/ansiktsolja",
    cardBadge: "Glow",
    cardHook: "Några droppar som sista steg på kvällen för glow och återfuktning.",
    cardImage: "/products/nature-spell-oil/nature-oil-thumbnail.webp",
    cardImageAlt: "Nature Spell Vitamin Boost Face Oil, 30 ml",
    badge: "Elins glow-favorit",
    headline: "Nature Spell Vitamin Boost Face Oil – glow på kvällen",
    shortBody: "En vårdande ansiktsolja tänkt som sista steg på kvällen. Några droppar för glow och återfuktning, så att huden känns mjuk och ser mer utvilad ut till morgonen.",
    valueHook: "Vårdande olja för glow och återfuktning",
    valueStatement: "Nature Spell Vitamin Boost Face Oil är en vårdande ansiktsolja för dig som vill ge huden glow och återfuktning som sista steg på kvällen. Några droppar räcker ofta, och oljan hjälper huden att se mjuk och utvilad ut till morgonen. Amazon visar 4,7 av 5 från 35 omdömen, vilket är mycket få omdömen ännu – så betyget är positivt men helhetsbilden fortfarande begränsad. Köpare lyfter främst glowen och den återfuktade känslan.",
    passFor: [
      "Vill avsluta kvällsrutinen med en vårdande olja för glow.",
      "Önskar en mer återfuktad känsla i huden till morgonen.",
      "Gillar att jobba med några få droppar som sista steg.",
    ],
    caution: "Antalet omdömen är ännu mycket lågt, så helhetsbilden är begränsad. Oljor passar inte heller alla hudtyper – känns huden tung räcker det ofta med några få droppar.",
    usageGuidance: {
      title: "Så använder du det rätt",
      text: "Värm några droppar mellan fingertopparna och tryck försiktigt in oljan som sista steg på kvällen, efter fuktkräm. Börja med lite och öka vid behov så att huden inte känns för tung.",
    },
    verdict: "Vårdande ansiktsolja för glow och en mer återfuktad känsla, men mycket få omdömen ännu.",
    amazonSummary: "Amazon visar 4,7 av 5 från 35 omdömen – mycket få ännu. Köpare beskriver glow och en mer återfuktad känsla, men helhetsbilden är fortfarande begränsad.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "När använder jag ansiktsoljan?",
        answer: "Som sista steg på kvällen, efter fuktkräm. Några droppar tryckta in i huden hjälper till att låsa in fukten och ge en mjuk glow till morgonen.",
      },
      {
        question: "Hur mycket olja behöver jag?",
        answer: "Börja med några få droppar. Värm dem mellan fingertopparna och tryck in i huden – du kan öka lite vid behov så att huden inte känns för tung.",
      },
      {
        question: "Hur tillförlitligt är betyget?",
        answer: "Betyget är positivt men bygger på mycket få omdömen ännu, så helhetsbilden är begränsad. Se det som en tidig signal snarare än ett etablerat snitt.",
      },
    ],
    reviewSectionId: "nature-spell-face-oil-recensioner",
    reviewFormId: "nature-spell-face-oil-skriv-recension",
    targetKeyword: "ansiktsolja glow",
    metaTitle: "Nature Spell Vitamin Boost Face Oil – glow | Elins val",
    metaDescription: "Elin går igenom Nature Spell Vitamin Boost Face Oil: en vårdande ansiktsolja för glow och återfuktning som sista steg på kvällen (4,7 av 5, men endast 35 omdömen).",
    relatedLinks: [
      {
        href: "/skonhet/hyaluronsyra-serum",
        label: "Hyaluronsyra-serum",
        text: "Lägg till ett enkelt fuktsteg i rutinen.",
      },
      {
        href: "/skonhet/vitamin-c-serum",
        label: "Vitamin C-serum",
        text: "Apoteksserum för lyster och glow på morgonen.",
      },
      {
        href: "/skonhet/snail-mucin-essence",
        label: "Snail mucin-essence",
        text: "K-beauty-favorit för fukt och dewy lyster.",
      },
    ],
  },
  {
    productSlug: marioBadescuFacialSprayProduct.slug,
    product: marioBadescuFacialSprayProduct,
    href: "/skonhet/ansiktsmist",
    cardBadge: "Uppfräschande",
    cardHook: "Aloe och rosvatten för fukt och en pigg känsla under dagen.",
    cardImage: "/products/mario-badescu-mist/mario-mist-thumbnail.webp",
    cardImageAlt: "Mario Badescu Facial Spray med aloe, örter och rosvatten, 236 ml",
    badge: "Elins uppfräschande favorit",
    headline: "Mario Badescu Facial Spray – aloe och rosvatten",
    shortBody: "En lätt ansiktsmist med aloe, örter och rosvatten. Gjord för en snabb fuktboost och en pigg känsla under dagen, enkel att spreja över ren hud eller ovanpå makeup.",
    valueHook: "Uppfräschande mist för fukt och en pigg känsla",
    valueStatement: "Mario Badescu Facial Spray är en uppfräschande ansiktsmist för dig som vill ge huden fukt och en pigg känsla mitt på dagen. Formulan bygger på aloe, örter och rosvatten, en kombination som gör misten lätt och behaglig att spreja över ansiktet både på ren hud och ovanpå makeup. Amazon visar 4,6 av 5 från 168 omdömen, och köpare lyfter framför allt den uppfräschande känslan, den milda doften och hur enkelt det är att ge huden en snabb boost.",
    passFor: [
      "Vill ge huden en snabb fuktboost mitt på dagen.",
      "Gillar en uppfräschande mist över makeup eller ren hud.",
      "Tycker om en mild doft av rosvatten i rutinen.",
    ],
    caution: "Doften av rosvatten passar inte alla och upplevelsen varierar mellan hudtyper. En mist ger en pigg känsla men ersätter inte ett fuktlager – lås gärna in fukten med fuktkräm om huden känns torr.",
    usageGuidance: {
      title: "Så använder du det rätt",
      text: "Håll flaskan en bit från ansiktet och spreja ett lätt lager över ren hud eller ovanpå makeup när huden känns torr eller trött. Låt lufttorka eller klappa in försiktigt och följ gärna upp med fuktkräm vid behov.",
    },
    verdict: "Trevlig uppfräschande mist för fukt och en pigg känsla under dagen.",
    amazonSummary: "Amazon visar 4,6 av 5 från 168 omdömen. Köpare beskriver en uppfräschande, pigg känsla och en mild doft, men rosvattnets doft passar inte alla.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "När använder jag ansiktsmisten?",
        answer: "När som helst på dagen då huden känns torr eller trött. Spreja ett lätt lager över ren hud eller ovanpå makeup för en snabb, uppfräschande boost.",
      },
      {
        question: "Kan jag spreja den ovanpå makeup?",
        answer: "Ja, många använder den just så. Håll flaskan en bit från ansiktet och spreja ett tunt lager så att makeupen inte blir blöt.",
      },
      {
        question: "Ersätter misten min fuktkräm?",
        answer: "Nej, en mist ger en pigg känsla och lite fukt men ersätter inte fuktkrämen. Lås gärna in fukten med fuktkräm om huden känns torr.",
      },
    ],
    reviewSectionId: "mario-badescu-facial-spray-recensioner",
    reviewFormId: "mario-badescu-facial-spray-skriv-recension",
    targetKeyword: "ansiktsmist",
    metaTitle: "Mario Badescu Facial Spray – aloe & rosvatten | Elins val",
    metaDescription: "Elin går igenom Mario Badescu Facial Spray: en uppfräschande ansiktsmist med aloe och rosvatten för fukt och en pigg känsla (4,6 av 5, 168 omdömen) – och vad du bör veta.",
    relatedLinks: [
      {
        href: "/skonhet/hyaluronsyra-serum",
        label: "Hyaluronsyra-serum",
        text: "Lägg till ett enkelt fuktsteg i rutinen.",
      },
      {
        href: "/skonhet/cerave-rengoring",
        label: "CeraVe rengöring",
        text: "Mild rengöring som passar fint före misten.",
      },
      {
        href: "/skonhet/snail-mucin-essence",
        label: "Snail mucin-essence",
        text: "K-beauty-favorit för fukt och dewy lyster.",
      },
    ],
  },
  {
    productSlug: inkeyPeptideMoisturizerProduct.slug,
    product: inkeyPeptideMoisturizerProduct,
    href: "/skonhet/peptidserum",
    cardBadge: "Peptider",
    cardHook: "Återfuktande peptidkräm för en smidigare, fylligare känsla.",
    cardImage: "/products/inkey-peptide/inkey-peptide-thumbnail.webp",
    cardImageAlt: "The INKEY List Peptide Moisturiser, 50 ml",
    badge: "Elins fukt-favorit",
    headline: "The INKEY List Peptide Moisturiser – smidig och mjuk",
    shortBody: "En återfuktande kräm med peptider. Gjord för en smidigare, fylligare känsla i huden och ett behagligt fuktsteg som gör huden mjuk, perfekt som ett enkelt sista lager i rutinen.",
    valueHook: "Peptidkräm för smidigare, fylligare känsla",
    valueStatement: "The INKEY List Peptide Moisturiser är en fuktkräm för dig som vill ge huden en smidigare, fylligare och mjukare känsla. Formulan bygger på peptider tillsammans med ett rejält fuktsteg, en kombination som gör att huden känns välmående och balanserad. Amazon visar 4,2 av 5 från 438 omdömen, och köpare lyfter framför allt den smidiga känslan och det behagliga fuktsteget.",
    passFor: [
      "Vill ge huden en smidigare, fylligare och mjukare känsla.",
      "Gillar peptider och söker en enkel återfuktande kräm.",
      "Vill ha ett behagligt sista lager både morgon och kväll.",
    ],
    caution: "Den återfuktande texturen kan kännas för rik om du har väldigt fet hud. Som med all ny hudvård kan känslig hud reagera olika, så testa gärna på en liten yta först.",
    usageGuidance: {
      title: "Så använder du den rätt",
      text: "Applicera ett lager på ren hud efter serum, morgon eller kväll, som sista steg i rutinen. Krämen passar fint för att låsa in fukt och ge en mjuk, smidig känsla.",
    },
    verdict: "Återfuktande peptidkräm för en smidigare, fylligare och mjukare känsla.",
    amazonSummary: "Amazon visar 4,2 av 5 från 438 omdömen. Köpare beskriver en smidigare känsla och ett behagligt fuktsteg, men texturen kan kännas för rik om du har väldigt fet hud.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "När använder jag peptidkrämen?",
        answer: "Den passar både morgon och kväll på ren hud, efter serum och som sista steg i rutinen för att låsa in fukt och ge en mjuk känsla.",
      },
      {
        question: "Vad gör peptider i en fuktkräm?",
        answer: "Peptider är en omtyckt ingrediens för en smidigare, fylligare känsla i huden, och tillsammans med fukt gör de att huden känns mjuk och välmående.",
      },
      {
        question: "Passar krämen fet hud?",
        answer: "Den är återfuktande och kan kännas rik för väldigt fet hud, medan torr och normal hud ofta uppskattar fuktsteget. Testa gärna på en liten yta först.",
      },
    ],
    reviewSectionId: "inkey-peptide-moisturizer-recensioner",
    reviewFormId: "inkey-peptide-moisturizer-skriv-recension",
    targetKeyword: "peptidserum peptider",
    metaTitle: "The INKEY List Peptide Moisturiser – smidig & mjuk | Elins val",
    metaDescription: "Elin går igenom The INKEY List Peptide Moisturiser: en återfuktande peptidkräm för en smidigare, fylligare känsla (4,2 av 5, 438 omdömen) – och vad du bör veta.",
    relatedLinks: [
      {
        href: "/skonhet/vitamin-c-serum",
        label: "Vitamin C-serum",
        text: "Antioxidantserum för lyster och glow.",
      },
      {
        href: "/skonhet/hyaluronsyra-serum",
        label: "Hyaluronsyra-serum",
        text: "Lägg till ett enkelt fuktsteg i rutinen.",
      },
      {
        href: "/skonhet/cicaplast-b5",
        label: "Cicaplast B5",
        text: "Lugnande balsam för torr och stressad hud.",
      },
    ],
  },
  {
    productSlug: anuaAzelaicSerumProduct.slug,
    product: anuaAzelaicSerumProduct,
    href: "/skonhet/azelainsyra-serum",
    cardBadge: "Jämnare hudton",
    cardHook: "10% azelainsyra och hyaluron för jämnare hudton och lyster.",
    cardImage: "/products/anua-azelaic/anua-azelaic-thumbnail.webp",
    cardImageAlt: "Anua Azelaic Acid 10 + Hyaluron Soothing Serum, 30 ml",
    badge: "Elins jämnhets-favorit",
    headline: "Anua Azelaic Acid 10 – jämnare hudton och lyster",
    shortBody: "Ett serum med 10% azelainsyra och hyaluron. Gjort för en jämnare hudton, mer lyster och en lugnare, mindre rödflammig look, med ett återfuktande hyaluron-steg som känns balanserat.",
    valueHook: "Azelainsyra-serum för jämnare hudton",
    valueStatement: "Anua Azelaic Acid 10 + Hyaluron Soothing Serum är ett serum för dig som vill ge huden en jämnare hudton och en lugnare, mindre rödflammig look. Formulan bygger på 10% azelainsyra tillsammans med hyaluron, en kombination för lyster och ett samtidigt fuktsteg. Amazon visar 4,5 av 5 från 1521 omdömen, och köpare lyfter framför allt den jämnare hudtonen, lystern och den lugnare looken.",
    passFor: [
      "Vill ha en jämnare hudton och en lugnare, mindre rödflammig look.",
      "Gillar azelainsyra och vill ha hyaluron som fuktsteg i samma serum.",
      "Letar efter mer lyster utan ett tungt, oljigt finish.",
    ],
    caution: "Azelainsyra kan kännas lätt vid första introduktionen, så börja gärna varannan dag. Som med all ny hudvård kan känslig hud reagera olika, testa gärna på en liten yta först.",
    usageGuidance: {
      title: "Så använder du det rätt",
      text: "Applicera några droppar på ren hud, morgon eller kväll, före fuktkräm. Vill du introducera azelainsyra varsamt kan du börja varannan dag och bygga upp i takt med att huden vänjer sig.",
    },
    verdict: "Azelainsyra-serum för jämnare hudton, lyster och en lugnare look.",
    amazonSummary: "Amazon visar 4,5 av 5 från 1521 omdömen. Köpare beskriver en jämnare hudton och en lugnare look, men azelainsyra kan kännas lätt i början så det kan vara klokt att börja varannan dag.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "När använder jag azelainsyra-serum?",
        answer: "Det passar både morgon och kväll på ren hud, före fuktkräm. Vill du introducera azelainsyra varsamt kan du börja varannan dag och bygga upp långsamt.",
      },
      {
        question: "Vad gör azelainsyra och hyaluron i serumet?",
        answer: "Azelainsyra är en omtyckt ingrediens för en jämnare hudton och en lugnare look, medan hyaluron lägger till ett återfuktande steg för en behaglig känsla.",
      },
      {
        question: "Passar serumet känslig hud?",
        answer: "Det är formulerat som ett soothing-serum med hyaluron, men azelainsyra kan kännas lätt i början. Börja gärna varannan dag och testa på en liten yta först.",
      },
    ],
    reviewSectionId: "anua-azelaic-acid-serum-recensioner",
    reviewFormId: "anua-azelaic-acid-serum-skriv-recension",
    targetKeyword: "azelainsyra serum",
    metaTitle: "Anua Azelaic Acid 10 – jämnare hudton & lyster | Elins val",
    metaDescription: "Elin går igenom Anua Azelaic Acid 10 + Hyaluron Serum: 10% azelainsyra och hyaluron för en jämnare hudton och lyster (4,5 av 5, 1521 omdömen) – och vad du bör veta.",
    relatedLinks: [
      {
        href: "/skonhet/niacinamide-serum",
        label: "Niacinamide-serum",
        text: "Riktat serum för fet och blandad hy.",
      },
      {
        href: "/skonhet/vitamin-c-serum",
        label: "Vitamin C-serum",
        text: "Antioxidantserum för lyster och glow.",
      },
      {
        href: "/skonhet/cicaplast-b5",
        label: "Cicaplast B5",
        text: "Lugnande balsam för torr och stressad hud.",
      },
    ],
  },
  {
    productSlug: beautyOfJoseonPropolisProduct.slug,
    product: beautyOfJoseonPropolisProduct,
    href: "/skonhet/propolis-serum",
    cardBadge: "Lyster & glow",
    cardHook: "Propolis och niacinamide för glow och en jämnare hudton.",
    cardImage: "/products/boj-propolis/boj-propolis-thumbnail.webp",
    cardImageAlt: "Beauty of Joseon Glow Serum med propolis och niacinamide, 30 ml",
    badge: "Elins glow-favorit",
    headline: "Beauty of Joseon Glow Serum – propolis och glow",
    shortBody: "Ett populärt serum med propolis och niacinamide. Gjort för lyster, glow och en jämnare hudton, med en lätt sirapsaktig textur som ger en behaglig, dewy känsla i huden.",
    valueHook: "Propolis-serum för glow och jämnare hudton",
    valueStatement: "Beauty of Joseon Glow Serum är ett serum för dig som vill ge huden mer lyster och en piggare, mer strålande look. Formulan bygger på propolis tillsammans med niacinamide, en omtyckt kombination för glow och en jämnare hudton. Amazon visar 4,4 av 5 från 3973 omdömen, och köpare lyfter framför allt glowen, den jämnare hudtonen och den behagliga, dewy känslan.",
    passFor: [
      "Vill ge huden mer lyster och glow i rutinen.",
      "Gillar propolis och niacinamide för en jämnare hudton.",
      "Tycker om en lätt dewy, behaglig känsla snarare än ett torrt finish.",
    ],
    caution: "Den lätt sirapsaktiga texturen kan kännas klibbig om du föredrar ett torrt finish. Serumet innehåller propolis, en bibaserad ingrediens, så undvik det om du är allergisk mot bi-produkter.",
    usageGuidance: {
      title: "Så använder du det rätt",
      text: "Applicera några droppar på ren hud, morgon eller kväll, före fuktkräm. Den dewy texturen passar fint som ett lystergivande steg och kan följas upp med ett återfuktande lager ovanpå.",
    },
    verdict: "Omtyckt glow-serum med propolis och niacinamide för lyster och jämnare hudton.",
    amazonSummary: "Amazon visar 4,4 av 5 från 3973 omdömen. Köpare beskriver mer glow och en jämnare hudton, men den lätt sirapsaktiga texturen kan kännas klibbig för den som gillar ett torrt finish.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "När använder jag propolis-serum?",
        answer: "Det passar både morgon och kväll på ren hud, före fuktkräm. På morgonen ger det glow under dagen och på kvällen en behaglig, dewy känsla.",
      },
      {
        question: "Vad gör propolis och niacinamide i serumet?",
        answer: "Propolis och niacinamide är en omtyckt kombination för lyster och en jämnare hudton, och bidrar till en piggare, mer strålande look.",
      },
      {
        question: "Passar Glow Serum om jag är allergisk mot bi-produkter?",
        answer: "Serumet innehåller propolis, som är en bibaserad ingrediens. Är du allergisk mot bi-produkter bör du undvika det och välja ett annat lyster-serum.",
      },
    ],
    reviewSectionId: "beauty-of-joseon-propolis-serum-recensioner",
    reviewFormId: "beauty-of-joseon-propolis-serum-skriv-recension",
    targetKeyword: "propolis serum",
    metaTitle: "Beauty of Joseon Glow Serum – propolis & glow | Elins val",
    metaDescription: "Elin går igenom Beauty of Joseon Glow Serum: propolis och niacinamide för glow och en jämnare hudton (4,4 av 5, 3973 omdömen) – och vad du bör veta innan du köper.",
    relatedLinks: [
      {
        href: "/skonhet/niacinamide-serum",
        label: "Niacinamide-serum",
        text: "Riktat serum för fet och blandad hy.",
      },
      {
        href: "/skonhet/vitamin-c-serum",
        label: "Vitamin C-serum",
        text: "Antioxidantserum för lyster och glow.",
      },
      {
        href: "/skonhet/hyaluronsyra-serum",
        label: "Hyaluronsyra-serum",
        text: "Lägg till ett enkelt fuktsteg i rutinen.",
      },
    ],
  },
  {
    productSlug: cosrxCentellaAmpouleProduct.slug,
    product: cosrxCentellaAmpouleProduct,
    href: "/skonhet/centella-serum",
    cardBadge: "Lugnande",
    cardHook: "Lätt centella-ampoule för känslig, lättirriterad hud.",
    cardImage: "/products/cosrx-centella/cosrx-centella-thumbnail.webp",
    cardImageAlt: "COSRX Centella Aqua Soothing Ampoule, centella-serum",
    badge: "Elins lugn-favorit",
    headline: "COSRX Centella Ampoule – lugn och lätt",
    shortBody: "En lätt, vattnig ampoule med centella asiatica. Gjord för känslig, lättirriterad hud som vill ha ett milt steg med en lugn och behaglig känsla, utan att det känns tungt.",
    valueHook: "Centella-ampoule för känslig hud",
    valueStatement: "COSRX Centella Aqua Soothing Ampoule är en ampoule för dig med känslig, lättirriterad hud som vill ha något milt och lätt. Formulan bygger på centella asiatica, en omtyckt ingrediens för en lugn och behaglig känsla, och texturen är tunn och vattnig så att den lägger sig snabbt. Amazon visar 4,5 av 5 från 272 omdömen, och köpare lyfter framför allt den lugnande känslan och den lätta texturen.",
    passFor: [
      "Har känslig eller lättirriterad hud och vill ha ett milt steg.",
      "Gillar centella asiatica för en lugn, behaglig känsla.",
      "Föredrar en lätt, vattnig textur framför ett tungt serum.",
    ],
    caution: "Den lätta, vattniga texturen kan kännas för tunn om du gillar ett rikare serum. Som med all ny hudvård kan känslig hud reagera olika, så testa gärna på en liten yta först.",
    usageGuidance: {
      title: "Så använder du den rätt",
      text: "Applicera några droppar på ren hud, morgon eller kväll, före fuktkräm. Den lätta texturen passar fint som ett tidigt steg och kan följas upp med ett rikare lager ovanpå.",
    },
    verdict: "Mild, lätt centella-ampoule för känslig och lättirriterad hud.",
    amazonSummary: "Amazon visar 4,5 av 5 från 272 omdömen. Köpare beskriver en lugn känsla och en lätt textur, men den tunna konsistensen kan kännas för lätt om du föredrar ett rikare serum.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Passar COSRX Centella Ampoule känslig hud?",
        answer: "Den är gjord med tanke på känslig, lättirriterad hud och bygger på centella asiatica för en lugn känsla. Som med all ny hudvård kan du testa på en liten yta först.",
      },
      {
        question: "När använder jag centella-ampoule?",
        answer: "Den passar både morgon och kväll på ren hud, före fuktkräm. Den lätta texturen gör den enkel att lägga som ett tidigt steg i rutinen.",
      },
      {
        question: "Vad är centella asiatica bra för?",
        answer: "Centella asiatica är en omtyckt ingrediens i hudvård för en lugn och behaglig känsla i huden, och passar fint i en mild ampoule för känslig hud.",
      },
    ],
    reviewSectionId: "cosrx-centella-ampoule-recensioner",
    reviewFormId: "cosrx-centella-ampoule-skriv-recension",
    targetKeyword: "centella cica serum",
    metaTitle: "COSRX Centella Ampoule – lugn & lätt | Elins val",
    metaDescription: "Elin går igenom COSRX Centella Aqua Soothing Ampoule: en mild, lätt centella-ampoule för känslig hud (4,5 av 5, 272 omdömen) – och vad du bör veta innan du köper.",
    relatedLinks: [
      {
        href: "/skonhet/cicaplast-b5",
        label: "Cicaplast B5",
        text: "Lugnande balsam för torr och stressad hud.",
      },
      {
        href: "/skonhet/niacinamide-serum",
        label: "Niacinamide-serum",
        text: "Riktat serum för fet och blandad hy.",
      },
      {
        href: "/skonhet/snail-mucin-essence",
        label: "Snail mucin-essence",
        text: "K-beauty-favorit för fukt och dewy lyster.",
      },
    ],
  },
  {
    productSlug: beautyOfJoseonCentellaMaskProduct.slug,
    product: beautyOfJoseonCentellaMaskProduct,
    href: "/skonhet/sheet-mask",
    cardBadge: "Lugnande",
    cardHook: "Centella sheet mask för en snabb boost av fukt och comfort.",
    cardImage: "/products/boj-centella-mask/boj-mask-thumbnail.webp",
    cardImageAlt: "Beauty of Joseon Centella Asiatica Calming Mask, sheet mask",
    badge: "Elins lugn-stund",
    headline: "Beauty of Joseon Centella Mask – fukt och comfort",
    shortBody: "En sheet mask med centella asiatica för en lugn, behaglig känsla. Gjord för en snabb fukt-boost när huden känns torr eller stressad och du vill ge den lite extra comfort.",
    valueHook: "Centella sheet mask för fukt och comfort",
    valueStatement: "Beauty of Joseon Centella Asiatica Calming Mask är en sheet mask för dig som vill ge huden en snabb stund av fukt och comfort. Masken är indränkt i ett serum med centella asiatica, en omtyckt ingrediens för en lugn och behaglig känsla. Amazon visar 4,2 av 5 från 22 omdömen – ännu ett ganska litet antal – men de som lämnat omdöme lyfter framför allt den lugnande känslan och fukt-boosten.",
    passFor: [
      "Vill ha en snabb fukt-boost när huden känns torr eller stressad.",
      "Gillar centella asiatica för en lugn, behaglig känsla.",
      "Vill ha en enkel pigg-upp-stund inför en kväll eller efter en lång dag.",
    ],
    caution: "Det finns ännu ganska få omdömen, så helhetsbilden är begränsad och upplevelsen kan variera mellan hudtyper. En sheet mask ger en tillfällig boost snarare än ett bestående resultat.",
    usageGuidance: {
      title: "Så använder du den rätt",
      text: "Lägg masken på ren hud och låt den sitta i 15–20 minuter. Ta bort masken och massera in resten av serumet i huden, följ gärna upp med fuktkräm för att låsa in fukten.",
    },
    verdict: "Lugnande fukt-boost för stunder när huden behöver lite extra comfort.",
    amazonSummary: "Amazon visar 4,2 av 5 från 22 omdömen. Köpare beskriver en lugn känsla och en tydlig fukt-boost, men antalet omdömen är ännu litet så helhetsbilden är begränsad.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Hur länge ska jag ha masken på?",
        answer: "Lägg masken på ren hud och låt den sitta i 15–20 minuter. Ta sedan bort den och massera in resten av serumet, följ gärna upp med fuktkräm.",
      },
      {
        question: "Hur ofta kan jag använda en sheet mask?",
        answer: "Den passar fint som en snabb fukt-boost när huden känns torr eller stressad, till exempel några gånger i veckan eller inför en speciell kväll.",
      },
      {
        question: "Vad är centella asiatica bra för?",
        answer: "Centella asiatica är en omtyckt ingrediens i hudvård för en lugn och behaglig känsla i huden, och passar fint i en lugnande mask.",
      },
    ],
    reviewSectionId: "beauty-of-joseon-centella-mask-recensioner",
    reviewFormId: "beauty-of-joseon-centella-mask-skriv-recension",
    targetKeyword: "sheet mask centella",
    metaTitle: "Beauty of Joseon Centella Mask – fukt & comfort | Elins val",
    metaDescription: "Elin går igenom Beauty of Joseon Centella Asiatica Calming Mask: en lugnande sheet mask för en snabb fukt-boost (4,2 av 5, 22 omdömen) – och vad du bör veta innan du köper.",
    relatedLinks: [
      {
        href: "/skonhet/cicaplast-b5",
        label: "Cicaplast B5",
        text: "Lugnande balsam för torr och stressad hud.",
      },
      {
        href: "/skonhet/snail-mucin-essence",
        label: "Snail mucin-essence",
        text: "K-beauty-favorit för fukt och dewy lyster.",
      },
      {
        href: "/skonhet/hyaluronsyra-serum",
        label: "Hyaluronsyra-serum",
        text: "Lägg till ett enkelt fuktsteg i rutinen.",
      },
    ],
  },
  {
    productSlug: someByMiMatchaClayMaskProduct.slug,
    product: someByMiMatchaClayMaskProduct,
    href: "/skonhet/lermask",
    cardBadge: "Porer",
    cardHook: "Lermask med matcha som rengör porerna och mattar glans.",
    cardImage: "/products/matcha-clay-mask/clay-mask-thumbnail.webp",
    cardImageAlt: "Some By Mi Super Matcha Pore Clean Clay Mask, 100 g",
    badge: "Elins val för porerna",
    headline: "Some By Mi Matcha Clay Mask – ren känsla för porerna",
    shortBody: "En lermask med matcha som rengör porerna och mattar glans. Tänkt som en behandling 1–2 gånger i veckan för en renare känsla och en mer mattad hud.",
    valueHook: "Lermask med matcha för porerna",
    valueStatement: "Some By Mi Super Matcha Pore Clean Clay Mask är en lermask för dig som vill rengöra porerna och matta glans. Leran drar åt sig orenheter och fett, och matchan ger masken sin gröna profil. Den är tänkt som ett behandlingssteg 1–2 gånger i veckan. Amazon visar 4,5 av 5 från 271 omdömen, och köpare lyfter framför allt den renare känslan, mindre synlig glans och den krämiga leran som är lätt att applicera.",
    passFor: [
      "Vill rengöra porerna med en lermask 1–2 gånger i veckan.",
      "Har en hud som lätt blir glansig och vill mattas av.",
      "Gillar en krämig lera som är lätt att applicera.",
    ],
    caution: "Lermasker kan kännas uttorkande om de används för ofta. Håll dig till 1–2 gånger i veckan och följ alltid upp med en fuktkräm efteråt.",
    usageGuidance: {
      title: "Så använder du det rätt",
      text: "Applicera ett jämnt lager på ren, torr hud och låt verka några minuter innan du sköljer av med ljummet vatten. Använd 1–2 gånger i veckan och avsluta med fuktkräm.",
    },
    verdict: "Rengörande lermask med matcha för porerna och en mattare hud, 1–2 ggr/vecka.",
    amazonSummary: "Amazon visar 4,5 av 5 från 271 omdömen. Köpare beskriver en renare känsla och mindre synlig glans, men lermasker kan kännas uttorkande om de används för ofta.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Hur ofta använder jag Some By Mi Matcha Clay Mask?",
        answer: "1–2 gånger i veckan räcker för de flesta. Lermasker kan kännas uttorkande om de används för ofta, så håll dig till några gånger i veckan.",
      },
      {
        question: "Hur applicerar jag lermasken?",
        answer: "Lägg ett jämnt lager på ren, torr hud och låt verka några minuter innan du sköljer av med ljummet vatten. Avsluta med fuktkräm.",
      },
      {
        question: "Behöver jag fuktkräm efter masken?",
        answer: "Ja, en lermask kan kännas torr efteråt. Följ upp med en fuktkräm för att hålla huden balanserad.",
      },
    ],
    reviewSectionId: "some-by-mi-matcha-clay-mask-recensioner",
    reviewFormId: "some-by-mi-matcha-clay-mask-skriv-recension",
    targetKeyword: "lermask porer",
    metaTitle: "Some By Mi Matcha Clay Mask – lermask för porerna | Elins val",
    metaDescription: "Elin går igenom Some By Mi Super Matcha Pore Clean Clay Mask: en lermask med matcha som rengör porerna och mattar glans (4,5 av 5, 271 omdömen) – och vad du bör veta.",
    relatedLinks: [
      {
        href: "/skonhet/cerave-rengoring",
        label: "CeraVe rengöring",
        text: "Mild rengöring inför ditt masksteg.",
      },
      {
        href: "/skonhet/niacinamide-serum",
        label: "Niacinamide-serum",
        text: "Riktat serum för fet och blandad hy.",
      },
      {
        href: "/skonhet/snail-mucin-essence",
        label: "Snail mucin-essence",
        text: "K-beauty-favorit för fukt och dewy lyster.",
      },
    ],
  },
  {
    productSlug: divainCaffeineEyeSerumProduct.slug,
    product: divainCaffeineEyeSerumProduct,
    href: "/skonhet/ogonserum",
    cardBadge: "Koffein",
    cardHook: "Lätt ögonserum med koffein för en piggare look kring ögonen.",
    cardImage: "/products/divain-eye-serum/divain-thumbnail.webp",
    cardImageAlt: "DIVAIN Caffeine Eye Serum ögonserum, 30 ml",
    badge: "Elin har koll på nyheten",
    headline: "DIVAIN Caffeine Eye Serum – piggare ögonparti",
    shortBody: "Ett lätt ögonserum med koffein som är tänkt att fräscha upp ögonpartiet och mildra synliga mörka ringar. En nyare produkt med ännu få omdömen på Amazon.",
    valueHook: "Koffeinserum för ögonpartiet",
    valueStatement: "DIVAIN Caffeine Eye Serum är ett lätt ögonserum för dig som vill fräscha upp ögonpartiet på ett kosmetiskt sätt. Koffein är en omtyckt ingrediens för att mildra synliga mörka ringar och ge en piggare look kring ögonen. Det här är dock en nyare produkt: Amazon visar 4,3 av 5 från endast 42 omdömen, så helhetsbilden är fortfarande osäker och Elin väljer den med försiktighet.",
    passFor: [
      "Vill fräscha upp ögonpartiet med ett lätt serum.",
      "Är nyfiken på koffein mot synliga mörka ringar.",
      "Gillar en lätt textur kring ögonen morgon och kväll.",
    ],
    caution: "Produkten har ännu mycket få omdömen på Amazon, så det går inte att dra säkra slutsatser om hur den fungerar för de flesta. Var försiktig nära ögonen och prova gärna på en liten yta först.",
    usageGuidance: {
      title: "Så använder du det rätt",
      text: "Klicka in en liten mängd försiktigt kring ögonbenet morgon och kväll, utan att komma för nära ögonkanten. Låt det absorberas innan du går vidare med resten av rutinen.",
    },
    verdict: "Lätt koffeinserum för en piggare look kring ögonen – men ännu få omdömen.",
    amazonSummary: "Amazon visar 4,3 av 5 från endast 42 omdömen, så bilden är ännu osäker. Tidiga köpare beskriver ett piggare ögonparti och en lätt textur, men underlaget är litet.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Hur använder jag DIVAIN Caffeine Eye Serum?",
        answer: "Klicka in en liten mängd försiktigt kring ögonbenet morgon och kväll, utan att komma för nära ögonkanten. Låt det absorberas innan resten av rutinen.",
      },
      {
        question: "Är det många som har recenserat serumet?",
        answer: "Nej, det är en nyare produkt med ännu mycket få omdömen på Amazon. Det betyder att helhetsbilden är osäker och bör tas med en nypa salt.",
      },
      {
        question: "Vad gör koffein i ett ögonserum?",
        answer: "Koffein är en omtyckt kosmetisk ingrediens för att fräscha upp ögonpartiet och mildra synliga mörka ringar för en piggare look.",
      },
    ],
    reviewSectionId: "divain-caffeine-eye-serum-recensioner",
    reviewFormId: "divain-caffeine-eye-serum-skriv-recension",
    targetKeyword: "ögonkräm koffein mörka ringar",
    metaTitle: "DIVAIN Caffeine Eye Serum – koffein för ögonpartiet | Elins val",
    metaDescription: "Elin går igenom DIVAIN Caffeine Eye Serum: ett lätt koffeinserum för ögonpartiet och synliga mörka ringar (4,3 av 5, endast 42 omdömen) – och varför hon väljer det med försiktighet.",
    relatedLinks: [
      {
        href: "/skonhet/niacinamide-serum",
        label: "Niacinamide-serum",
        text: "Riktat serum för fet och blandad hy.",
      },
      {
        href: "/skonhet/hyaluronsyra-serum",
        label: "Hyaluronsyra-serum",
        text: "Lägg till ett enkelt fuktsteg i rutinen.",
      },
      {
        href: "/skonhet/vitamin-c-serum",
        label: "Vitamin C-serum",
        text: "Antioxidantserum för lyster och glow.",
      },
    ],
  },
  {
    productSlug: cetaphilMoisturizingCreamProduct.slug,
    product: cetaphilMoisturizingCreamProduct,
    href: "/skonhet/fuktkram",
    cardBadge: "Torr hud",
    cardHook: "Rik fuktkräm för torr hud – till både ansikte och kropp.",
    cardImage: "/products/cetaphil-moisturizer/cetaphil-cream-thumbnail.webp",
    cardImageAlt: "Cetaphil Moisturising Cream fuktkräm, 453 g",
    badge: "Elins val för torr hud",
    headline: "Cetaphil Moisturising Cream – rik fukt för torr hud",
    shortBody: "En rik, återfuktande kräm för torr och känslig hud, till både ansikte och kropp. Den stora burken räcker länge och passar dig som vill ha enkel, mättande fukt.",
    valueHook: "Rik fuktkräm för torr hud",
    valueStatement: "Cetaphil Moisturising Cream är en rik fuktkräm för dig med torr eller känslig hud. Den ger mättande fukt och kan användas på både ansikte och kropp, vilket gör den enkel att ha i hela rutinen. Amazon visar 4,7 av 5 från 1742 omdömen, och köpare lyfter framför allt den mättande fukten, den milda känslan och den stora burken som räcker länge.",
    passFor: [
      "Har torr hud och vill ha en rik, mättande fuktkräm.",
      "Vill kunna använda samma kräm på ansikte och kropp.",
      "Önskar en stor burk som räcker länge.",
    ],
    caution: "Den rika texturen kan kännas tung för dig med fet eller blandad hy. Burkformatet blir mest hygieniskt om du använder en ren spatel i stället för fingrarna.",
    usageGuidance: {
      title: "Så använder du det rätt",
      text: "Massera in krämen på ren, lätt fuktig hud morgon och kväll. På torra partier kan du lägga ett extra lager, och för ansiktet räcker ofta en mindre mängd.",
    },
    verdict: "Rik, prisvärd fuktkräm för torr hud på både ansikte och kropp.",
    amazonSummary: "Amazon visar 4,7 av 5 från 1742 omdömen. Köpare beskriver mättande fukt för torr hud och en mild känsla, men den rika texturen kan kännas tung för fet hy.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Passar Cetaphil Moisturising Cream torr hud?",
        answer: "Ja, den är en rik kräm som ger mättande fukt och är tänkt för torr och känslig hud. Den kan användas både morgon och kväll.",
      },
      {
        question: "Kan jag använda krämen på kroppen också?",
        answer: "Ja, den är gjord för både ansikte och kropp. Den stora burken gör den smidig att använda på större hudpartier.",
      },
      {
        question: "Är krämen lämplig för fet hy?",
        answer: "Den rika texturen kan kännas tung om du har fet eller blandad hy. Då kan en lättare fuktkräm passa bättre i ansiktet.",
      },
    ],
    reviewSectionId: "cetaphil-moisturizing-cream-recensioner",
    reviewFormId: "cetaphil-moisturizing-cream-skriv-recension",
    targetKeyword: "fuktkräm torr hud",
    metaTitle: "Cetaphil Moisturising Cream – rik fuktkräm för torr hud | Elins val",
    metaDescription: "Elin går igenom Cetaphil Moisturising Cream: en rik fuktkräm för torr och känslig hud, till ansikte och kropp (4,7 av 5, 1742 omdömen) – och vad du bör veta.",
    relatedLinks: [
      {
        href: "/skonhet/cicaplast-b5",
        label: "Cicaplast B5",
        text: "Lugnande balsam för känslig och stressad hud.",
      },
      {
        href: "/skonhet/cerave-rengoring",
        label: "CeraVe rengöring",
        text: "Mild rengöring inför ditt fuktsteg.",
      },
      {
        href: "/skonhet/hyaluronsyra-serum",
        label: "Hyaluronsyra-serum",
        text: "Lägg till ett enkelt fuktsteg i rutinen.",
      },
    ],
  },
  {
    productSlug: cosrxAhaBhaTonerProduct.slug,
    product: cosrxAhaBhaTonerProduct,
    href: "/skonhet/exfolierande-toner",
    cardBadge: "Lyster",
    cardHook: "Mild AHA/BHA-toner för en jämnare hudton som dagligt steg.",
    cardImage: "/products/cosrx-toner/cosrx-toner-thumbnail.webp",
    cardImageAlt: "COSRX AHA/BHA Clarifying Treatment Toner, 150 ml",
    badge: "Elins val för mild exfoliering",
    headline: "COSRX AHA/BHA Toner – lyster och jämnare hudton",
    shortBody: "En mild exfolierande toner med AHA och BHA för lyster och en jämnare hudton. Tänkt som ett dagligt steg efter rengöring, med en lätt textur som absorberas snabbt.",
    valueHook: "Exfolierande toner för lyster",
    valueStatement: "COSRX AHA/BHA Clarifying Treatment Toner är en mild exfolierande toner för dig som vill ge huden mer lyster och en jämnare hudton. Kombinationen av AHA och BHA jämnar mjukt ut hudens yta och kan användas som ett dagligt steg efter rengöring. Amazon visar 4,5 av 5 från 7750 omdömen, och köpare lyfter framför allt lystern, den milda känslan och den lätta texturen.",
    passFor: [
      "Vill lägga till ett milt exfolieringssteg i rutinen.",
      "Önskar mer lyster och en jämnare hudton.",
      "Gillar en lätt toner före serum och fuktkräm.",
    ],
    caution: "AHA/BHA kan svida lätt i början och göra huden mer solkänslig. Börja gärna varannan dag och var noga med din vanliga dagrutin.",
    usageGuidance: {
      title: "Så använder du det rätt",
      text: "Applicera tonern på ren hud efter rengöring, före serum och fuktkräm. Börja varannan dag och öka frekvensen efterhand som huden vänjer sig.",
    },
    verdict: "Mild, prisvärd AHA/BHA-toner för lyster och en jämnare hudton i vardagen.",
    amazonSummary: "Amazon visar 4,5 av 5 från 7750 omdömen. Köpare beskriver en jämnare, mer strålande hud och en mild känsla, men AHA/BHA kan svida lätt i början.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Hur ofta använder jag COSRX AHA/BHA Toner?",
        answer: "Börja gärna varannan dag och öka efterhand som huden vänjer sig. Den är tänkt att kunna användas dagligen som ett milt exfolieringssteg.",
      },
      {
        question: "När i rutinen passar tonern?",
        answer: "Applicera den på ren hud efter rengöring, före serum och fuktkräm. Då förbereder du huden för resten av rutinen.",
      },
      {
        question: "Behöver jag tänka på solen när jag använder syror?",
        answer: "Ja, AHA/BHA kan göra huden mer solkänslig. Var noga med din vanliga dagrutin medan du använder tonern.",
      },
    ],
    reviewSectionId: "cosrx-aha-bha-toner-recensioner",
    reviewFormId: "cosrx-aha-bha-toner-skriv-recension",
    targetKeyword: "exfolierande toner",
    metaTitle: "COSRX AHA/BHA Toner – mild exfoliering för lyster | Elins val",
    metaDescription: "Elin går igenom COSRX AHA/BHA Clarifying Treatment Toner: en mild exfolierande toner för lyster och jämnare hudton (4,5 av 5, 7750 omdömen) – och vad du bör veta.",
    relatedLinks: [
      {
        href: "/skonhet/niacinamide-serum",
        label: "Niacinamide-serum",
        text: "Riktat serum för fet och blandad hy.",
      },
      {
        href: "/skonhet/cerave-rengoring",
        label: "CeraVe rengöring",
        text: "Mild rengöring inför ditt exfolieringssteg.",
      },
      {
        href: "/skonhet/vitamin-c-serum",
        label: "Vitamin C-serum",
        text: "Antioxidantserum för lyster och glow.",
      },
    ],
  },
  {
    productSlug: biodermaSensibioProduct.slug,
    product: biodermaSensibioProduct,
    href: "/skonhet/micellart-vatten",
    cardBadge: "Känslig hud",
    cardHook: "Micellärt vatten som rengör och tar bort smink i ett steg.",
    cardImage: "/products/bioderma-sensibio/bioderma-thumbnail.webp",
    cardImageAlt: "Bioderma Sensibio H2O micellärt vatten, 500 ml",
    badge: "Elins favorit för känslig hud",
    headline: "Bioderma Sensibio H2O – micellärt vatten",
    shortBody: "Ett skonsamt micellärt vatten som rengör och tar bort smink utan sköljning. Framtaget med tanke på känslig hud och med en stor flaska som räcker länge.",
    valueHook: "Micellärt vatten för känslig hud",
    valueStatement: "Bioderma Sensibio H2O är ett micellärt vatten för dig som vill rengöra huden och ta bort smink på ett mjukt sätt. Micellerna lyfter bort smuts och makeup utan att du behöver skölja, och formulan är gjord med tanke på känslig hud. Amazon visar 4,7 av 5 från 34142 omdömen, och köpare lyfter framför allt den skonsamma känslan, hur enkelt sminket försvinner och den stora flaskan som räcker länge.",
    passFor: [
      "Har känslig hud och vill ha en mild rengöring.",
      "Vill ta bort smink och rengöra i ett enda steg.",
      "Gillar att slippa skölja efter rengöringen.",
    ],
    caution: "Vattenfast mascara kan behöva en extra rondell, och även om sköljning inte krävs föredrar vissa att skölja ansiktet efteråt. Använd en ren bomullsrondell varje gång.",
    usageGuidance: {
      title: "Så använder du det rätt",
      text: "Fukta en bomullsrondell med Sensibio H2O och svep mjukt över ansikte och ögon morgon och kväll. Du behöver inte skölja efteråt, men kan följa upp med fuktkräm.",
    },
    verdict: "Klassiskt, skonsamt micellärt vatten som passar känslig hud i vardagen.",
    amazonSummary: "Amazon visar 4,7 av 5 från 34142 omdömen. Köpare beskriver en skonsam rengöring som tar bort smink mjukt, men vattenfast mascara kan behöva en extra rondell.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Behöver jag skölja efter Bioderma Sensibio H2O?",
        answer: "Nej, micellärt vatten behöver inte sköljas. Du kan svepa över med en bomullsrondell och sedan gå vidare med din rutin, men det går bra att skölja om du vill.",
      },
      {
        question: "Passar Sensibio H2O känslig hud?",
        answer: "Den är gjord med tanke på känslig hud och beskrivs som skonsam. Som alltid är det klokt att prova på en liten yta först om din hud är lättirriterad.",
      },
      {
        question: "Tar det bort smink ordentligt?",
        answer: "Köpare upplever att det tar bort de flesta sorters smink mjukt. Vattenfast mascara kan behöva en extra rondell.",
      },
    ],
    reviewSectionId: "bioderma-sensibio-h2o-recensioner",
    reviewFormId: "bioderma-sensibio-h2o-skriv-recension",
    targetKeyword: "micellärt vatten",
    metaTitle: "Bioderma Sensibio H2O – micellärt vatten för känslig hud | Elins val",
    metaDescription: "Elin går igenom Bioderma Sensibio H2O: ett skonsamt micellärt vatten som rengör och tar bort smink (4,7 av 5, 34142 omdömen) – och vad du bör veta vid känslig hud.",
    relatedLinks: [
      {
        href: "/skonhet/cerave-rengoring",
        label: "CeraVe rengöring",
        text: "Mild rengöring att kombinera med micellärt vatten.",
      },
      {
        href: "/skonhet/cicaplast-b5",
        label: "Cicaplast B5",
        text: "Lugnande balsam för känslig och stressad hud.",
      },
      {
        href: "/skonhet/hyaluronsyra-serum",
        label: "Hyaluronsyra-serum",
        text: "Lägg till ett enkelt fuktsteg i rutinen.",
      },
    ],
  },
  {
    productSlug: someByMiCleansingOilProduct.slug,
    product: someByMiCleansingOilProduct,
    href: "/skonhet/rengoringsolja",
    cardBadge: "Double cleansing",
    cardHook: "Rengöringsolja som löser smink och solkräm – sköljs av rent.",
    cardImage: "/products/cleansing-oil/cleansing-oil-thumbnail.webp",
    cardImageAlt: "Some By Mi Lacto Soy Cleansing Oil, 200 ml",
    badge: "Elins steg-ett-val",
    headline: "Some By Mi Lacto Soy Cleansing Oil",
    shortBody: "En rengöringsolja för det första steget i double cleansing. Den löser upp smink och solkräm och sköljs sedan av rent, så att din vanliga rengöring får jobba på ren hud.",
    valueHook: "Rengöringsolja som löser smink och sköljs av rent",
    valueStatement: "Some By Mi Lacto Soy Cleansing Oil är till för dig som vill lägga till ett första steg i rengöringen. Oljan löser upp smink och solkräm och emulgerar med vatten så att den sköljs av rent, utan fet hinna, och sedan följer du upp med din vanliga rengöring. Amazon visar 4,3 av 5 från 99 omdömen, vilket fortfarande är ett ganska litet antal, men de första köparna beskriver att den löser smink fint och är lätt att skölja av.",
    passFor: [
      "Vill prova double cleansing med ett enkelt första steg.",
      "Använder smink eller solkräm och vill lösa upp det skonsamt.",
      "Föredrar en olja som sköljs av rent utan fet hinna.",
    ],
    caution: "Produkten har ännu ganska få omdömen, så helhetsbilden är fortfarande begränsad. En rengöringsolja är dessutom tänkt som steg ett och behöver oftast följas av en vanlig rengöring efteråt.",
    usageGuidance: {
      title: "Så använder du det rätt",
      text: "Massera in oljan på torr hud för att lösa upp smink och solkräm, tillsätt sedan lite vatten så att den emulgerar och skölj av. Följ upp med din vanliga rengöring som steg två.",
    },
    verdict: "Rengöringsolja som löser smink fint och sköljs av rent – steg ett i rutinen.",
    amazonSummary: "Amazon visar 4,3 av 5 från 99 omdömen, alltså fortfarande ett litet antal. De första köparna beskriver att den löser smink och solkräm fint och sköljs av rent.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Vad är double cleansing?",
        answer: "Double cleansing betyder att du rengör i två steg: först en rengöringsolja som löser upp smink och solkräm, sedan din vanliga rengöring. Den här oljan är tänkt som steg ett.",
      },
      {
        question: "Lämnar rengöringsoljan en fet hinna?",
        answer: "Oljan emulgerar med vatten och sköljs av, och de första köparna beskriver att den går av rent utan fet hinna. Följ ändå upp med en vanlig rengöring för bästa resultat.",
      },
      {
        question: "Hur tillförlitliga är omdömena?",
        answer: "Amazon visar 4,3 av 5, men ännu bara från 99 omdömen. Det är ett ganska litet antal, så se betyget som en tidig fingervisning snarare än ett etablerat helhetsomdöme.",
      },
    ],
    reviewSectionId: "some-by-mi-cleansing-oil-recensioner",
    reviewFormId: "some-by-mi-cleansing-oil-skriv-recension",
    targetKeyword: "rengöringsolja cleansing oil",
    metaTitle: "Some By Mi Lacto Soy Cleansing Oil – double cleanse | Elins val",
    metaDescription: "Elin går igenom Some By Mi Lacto Soy Cleansing Oil: en rengöringsolja som löser smink och sköljs av rent (4,3 av 5, 99 omdömen) – och hur du använder den.",
    relatedLinks: [
      {
        href: "/skonhet/cerave-rengoring",
        label: "CeraVe rengöring",
        text: "Mild rengöring som steg två efter oljan.",
      },
      {
        href: "/skonhet/cicaplast-b5",
        label: "Cicaplast B5",
        text: "Lugnande balsam för stressad och torr hud.",
      },
      {
        href: "/skonhet/vitamin-c-serum",
        label: "Vitamin C-serum",
        text: "Lägg till lyster och glow på ren hud.",
      },
    ],
  },
  {
    productSlug: cetaphilGentleCleanserProduct.slug,
    product: cetaphilGentleCleanserProduct,
    href: "/skonhet/cetaphil-rengoring",
    cardBadge: "Känslig hud",
    cardHook: "Mild, oparfymerad rengöring som rengör utan att torka ut.",
    cardImage: "/products/cetaphil-cleanser/cetaphil-thumbnail.webp",
    cardImageAlt: "Cetaphil Gentle Skin Cleanser, 460 ml",
    badge: "Elins trygga basval",
    headline: "Cetaphil Gentle Skin Cleanser – mild rengöring",
    shortBody: "En mild, oparfymerad ansiktsrengöring i stor 460 ml-förpackning, gjord med tanke på känslig och torr hud. Rengör skonsamt utan att lämna huden stram.",
    valueHook: "Mild rengöring som inte torkar ut",
    valueStatement: "Cetaphil Gentle Skin Cleanser är ett tryggt basval för dig som vill ha ett enkelt och milt första steg i hudvårdsrutinen. Den är oparfymerad och gjord med tanke på känslig och torr hud, och rengör skonsamt utan att lämna huden stram. Den stora 460 ml-förpackningen räcker länge. Amazon visar 4,7 av 5 från 554 omdömen, och köpare lyfter framför allt att den känns mild och inte torkar ut huden.",
    passFor: [
      "Har känslig eller torr hud och vill ha en mild rengöring.",
      "Föredrar oparfymerade produkter i rutinen.",
      "Vill ha ett enkelt och tryggt första steg som räcker länge.",
    ],
    caution: "En mild rengöring tar inte alltid bort vattenfast smink på egen hand, så vid mycket makeup kan du behöva ett extra steg först. Den skummar lite, vilket kan kännas ovant om du gillar rik lödder.",
    usageGuidance: {
      title: "Så använder du det rätt",
      text: "Massera in en liten mängd på fuktad hud morgon och kväll och skölj av med ljummet vatten, eller torka av med en mjuk handduk. Följ upp med en fuktkräm efteråt.",
    },
    verdict: "Trygg, mild rengöring för känslig och torr hud – rengör utan att torka ut.",
    amazonSummary: "Amazon visar 4,7 av 5 från 554 omdömen. Köpare beskriver en mild, oparfymerad rengöring som inte torkar ut huden, men den skummar lite mindre än många väntar sig.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Passar Cetaphil känslig och torr hud?",
        answer: "Den är oparfymerad och gjord med tanke på känslig och torr hud. Köpare beskriver den som mild och skonsam, och den lämnar vanligen inte huden stram efter rengöring.",
      },
      {
        question: "Tar rengöringen bort smink?",
        answer: "Den tar bort vanligt smink och smuts vid daglig rengöring, men vattenfast makeup kan behöva ett extra steg först, till exempel en rengöringsolja.",
      },
      {
        question: "Hur ofta ska jag använda den?",
        answer: "Den passar för daglig användning morgon och kväll. Massera in på fuktad hud, skölj av och följ upp med en fuktkräm.",
      },
    ],
    reviewSectionId: "cetaphil-gentle-cleanser-recensioner",
    reviewFormId: "cetaphil-gentle-cleanser-skriv-recension",
    targetKeyword: "ansiktsrengöring känslig hud",
    metaTitle: "Cetaphil Gentle Skin Cleanser – mild rengöring | Elins val",
    metaDescription: "Elin går igenom Cetaphil Gentle Skin Cleanser: en mild, oparfymerad ansiktsrengöring för känslig och torr hud (4,7 av 5, 554 omdömen) – och hur du använder den.",
    relatedLinks: [
      {
        href: "/skonhet/cerave-rengoring",
        label: "CeraVe rengöring",
        text: "Mild rengöring som grund i rutinen.",
      },
      {
        href: "/skonhet/cicaplast-b5",
        label: "Cicaplast B5",
        text: "Lugnande balsam för stressad och torr hud.",
      },
      {
        href: "/skonhet/snail-mucin-essence",
        label: "Snail mucin-essence",
        text: "K-beauty-favorit för fukt och dewy lyster.",
      },
    ],
  },
  {
    productSlug: paulasChoiceBhaProduct.slug,
    product: paulasChoiceBhaProduct,
    href: "/skonhet/bha-exfoliant",
    cardBadge: "Porer & lyster",
    cardHook: "2% salicylsyra för renare porer, lyster och slätare hud.",
    cardImage: "/products/paulas-choice-bha/bha-thumbnail.webp",
    cardImageAlt: "Paula's Choice Skin Perfecting 2% BHA Liquid Exfoliant, 30 ml",
    badge: "Elins kultfavorit",
    headline: "Paula's Choice 2% BHA – porer och lyster",
    shortBody: "Ett ikoniskt flytande exfoliant med 2% salicylsyra som mjukt exfolierar huden för renare porer, mer lyster och en slätare yta. En av de mest omtyckta exfolianterna som finns.",
    valueHook: "Salicylsyra för renare porer och lyster",
    valueStatement: "Paula's Choice 2% BHA Liquid Exfoliant är en av de mest omtyckta exfolianterna på marknaden. Den bygger på 2% salicylsyra, en BHA-syra som hjälper porer att se renare ut och ger huden mer lyster och en slätare yta. Den passar särskilt blandad och fet hud. Amazon visar 4,3 av 5 från hela 24 373 omdömen, och köpare lyfter framför allt renare porer, mer lyster och den lätta flytande texturen.",
    passFor: [
      "Vill ha renare porer och en slätare hudyta.",
      "Har blandad eller fet hud och gillar kemisk exfoliering.",
      "Söker mer lyster med en lätt, flytande produkt.",
    ],
    caution: "Salicylsyra kan svida lätt i början och upplevelsen varierar mellan hudtyper. Börja varannan dag, trappa upp gradvis och lyssna på hur huden känns innan du använder den oftare.",
    usageGuidance: {
      title: "Så använder du det rätt",
      text: "Applicera en liten mängd på ren hud med en bomullsrondell eller fingrarna, undvik ögonområdet. Börja varannan dag och följ upp med ett återfuktande lager. Salicylsyra fungerar fint både morgon och kväll.",
    },
    verdict: "Kultfavorit-exfoliant för renare porer, lyster och slätare hud.",
    amazonSummary: "Amazon visar 4,3 av 5 från 24 373 omdömen. Tusentals köpare beskriver renare porer, mer lyster och en slätare hud, men salicylsyra kan svida lätt i början.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Vad gör 2% BHA/salicylsyra för huden?",
        answer: "Salicylsyra är en BHA som exfolierar mjukt och hjälper porer att se renare ut. Den är omtyckt för att ge mer lyster och en slätare hudyta, särskilt på blandad och fet hud.",
      },
      {
        question: "Hur ofta ska jag använda exfolianten?",
        answer: "Börja varannan dag och trappa upp gradvis om huden mår bra. Många använder den dagligen med tiden, men lyssna alltid på hur huden känns.",
      },
      {
        question: "Kan jag använda den både morgon och kväll?",
        answer: "Salicylsyra fungerar fint vid båda tillfällena. Applicera på ren hud och följ upp med ett återfuktande lager, oavsett när på dygnet du använder den.",
      },
    ],
    reviewSectionId: "paulas-choice-2-bha-recensioner",
    reviewFormId: "paulas-choice-2-bha-skriv-recension",
    targetKeyword: "bha exfoliant salicylsyra",
    metaTitle: "Paula's Choice 2% BHA Exfoliant – porer & lyster | Elins val",
    metaDescription: "Elin går igenom Paula's Choice 2% BHA Liquid Exfoliant: salicylsyra för renare porer, lyster och slätare hud (4,3 av 5, 24 373 omdömen) – och hur du använder den.",
    relatedLinks: [
      {
        href: "/skonhet/vitamin-c-serum",
        label: "Vitamin C-serum",
        text: "Antioxidant för lyster och glow på morgonen.",
      },
      {
        href: "/skonhet/niacinamide-serum",
        label: "Niacinamide-serum",
        text: "Riktat serum för fet och blandad hy.",
      },
      {
        href: "/skonhet/cerave-rengoring",
        label: "CeraVe rengöring",
        text: "Mild rengöring som grund i rutinen.",
      },
    ],
  },
  {
    productSlug: purestAhaBhaPeelingProduct.slug,
    product: purestAhaBhaPeelingProduct,
    href: "/skonhet/ansiktspeeling",
    cardBadge: "Lyster",
    cardHook: "Kemisk peeling med 10% AHA + 2% BHA för lyster och jämnare hudton.",
    cardImage: "/products/aha-bha-peeling/peeling-thumbnail.webp",
    cardImageAlt: "The Purest Solutions AHA 10% + BHA 2% Exfoliating Peeling, 30 ml",
    badge: "Elins glow-favorit",
    headline: "The Purest Solutions AHA + BHA – peeling för lyster",
    shortBody: "En kemisk peeling med 10% AHA och 2% BHA som exfolierar huden för mer lyster och en jämnare hudton. Tänkt som ett extrasteg ungefär varannan vecka, inte varje dag.",
    valueHook: "Kemisk peeling för lyster och jämnare hudton",
    valueStatement: "The Purest Solutions AHA 10% + BHA 2% är till för dig som vill ge huden ett lystergivande extrasteg utan att skrubba. AHA och BHA är omtyckta exfolierande syror som mjukar upp ytan och kan göra hudtonen jämnare. Det här är en peeling man använder med måtta, ungefär varannan vecka. Amazon visar 4,4 av 5 från 504 omdömen, och köpare lyfter framför allt lystern och att huden känns slätare och fräschare dagen efter.",
    passFor: [
      "Vill ge huden mer lyster med ett enkelt extrasteg.",
      "Gillar kemisk exfoliering framför fysiska skrubb.",
      "Söker en jämnare hudton över tid, varannan vecka.",
    ],
    caution: "Det här är starka syror, så börja försiktigt och använd inte för ofta. Använd peelingen på kvällen, hoppa över den om huden känns irriterad, och upplevelsen varierar mellan hudtyper.",
    usageGuidance: {
      title: "Så använder du det rätt",
      text: "Applicera på ren, torr hud på kvällen ungefär varannan vecka, undvik ögonområdet och skölj av enligt förpackningens anvisning. Följ upp med ett återfuktande lager efteråt.",
    },
    verdict: "Prisvärd kemisk peeling för lyster och jämnare hudton – använd varannan vecka.",
    amazonSummary: "Amazon visar 4,4 av 5 från 504 omdömen. Köpare beskriver mer lyster och en jämnare, slätare hud, men starka syror kräver att man tar det försiktigt.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Hur ofta använder jag en AHA/BHA-peeling?",
        answer: "Den här peelingen är tänkt som ett extrasteg ungefär varannan vecka, inte dagligen. Börja försiktigt och känn av hur huden reagerar innan du använder den oftare.",
      },
      {
        question: "Vad gör AHA och BHA i en peeling?",
        answer: "AHA och BHA är exfolierande syror som mjukar upp hudens yta. De är omtyckta för att ge mer lyster och en jämnare hudton när de används med måtta.",
      },
      {
        question: "När på dygnet ska peelingen användas?",
        answer: "Använd den på kvällen på ren hud och följ upp med ett återfuktande lager. Hoppa över den om huden känns irriterad eller stram.",
      },
    ],
    reviewSectionId: "purest-aha-bha-peeling-recensioner",
    reviewFormId: "purest-aha-bha-peeling-skriv-recension",
    targetKeyword: "ansiktspeeling aha bha",
    metaTitle: "The Purest Solutions AHA + BHA Peeling – lyster | Elins val",
    metaDescription: "Elin går igenom The Purest Solutions AHA 10% + BHA 2%: en kemisk peeling för lyster och jämnare hudton (4,4 av 5, 504 omdömen) – och hur du använder den rätt.",
    relatedLinks: [
      {
        href: "/skonhet/vitamin-c-serum",
        label: "Vitamin C-serum",
        text: "Antioxidant för lyster och glow på morgonen.",
      },
      {
        href: "/skonhet/niacinamide-serum",
        label: "Niacinamide-serum",
        text: "Riktat serum för fet och blandad hy.",
      },
      {
        href: "/skonhet/cerave-rengoring",
        label: "CeraVe rengöring",
        text: "Mild rengöring som grund i rutinen.",
      },
    ],
  },
  {
    productSlug: celdyqueBakuchiolProduct.slug,
    product: celdyqueBakuchiolProduct,
    href: "/skonhet/bakuchiol-serum",
    cardBadge: "Mildt alternativ",
    cardHook: "Växtbaserat bakuchiol för slätare, lystrande hud – mildare än retinol.",
    cardImage: "/products/bakuchiol-serum/bakuchiol-thumbnail.webp",
    cardImageAlt: "CELDYQUE Bakuchiol Concentrate Serum, 30 ml",
    badge: "Elins milda favorit",
    headline: "CELDYQUE Bakuchiol – mildt växtbaserat serum",
    shortBody: "Ett serum med bakuchiol, en växtbaserad ingrediens som ofta ses som ett mildare alternativ till retinol. Gjort för slätare hud, mer lyster och en jämnare hudton, med en lätt textur som passar även känslig hy.",
    valueHook: "Bakuchiol för slätare, lystrande hud",
    valueStatement: "CELDYQUE Bakuchiol Concentrate Serum är till för dig som vill ge huden mer lyster och en slätare, jämnare yta, men som tycker att retinol känns för starkt. Bakuchiol är växtbaserat och beskrivs ofta som ett mildare alternativ, vilket gör det till ett tryggt val för känslig hud. Amazon visar 4,6 av 5 från 847 omdömen, och köpare lyfter framför allt att huden känns slätare och mer lystrande, samtidigt som serumet är skonsamt.",
    passFor: [
      "Vill ha slätare, mer lystrande hud utan stark retinol.",
      "Har känslig hud och söker ett mildare alternativ.",
      "Gillar en lätt textur under fuktkräm på kvällen.",
    ],
    caution: "Bakuchiol verkar gradvis, så ge det några veckor innan du bedömer resultatet. Upplevelsen varierar mellan hudtyper, och har du känslig hud är det klokt att testa på en liten yta först.",
    usageGuidance: {
      title: "Så använder du det rätt",
      text: "Applicera några droppar på ren hud, gärna på kvällen, före fuktkräm. Bakuchiol passar fint ihop med ett återfuktande lager ovanpå och kräver ingen lång inkörningsperiod.",
    },
    verdict: "Milt växtbaserat serum för slätare, lystrande hud – fint för känslig hy.",
    amazonSummary: "Amazon visar 4,6 av 5 från 847 omdömen. Köpare beskriver slätare, mer lystrande hud och att serumet känns mildare än retinol, men effekten kommer gradvis.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Vad är bakuchiol?",
        answer: "Bakuchiol är en växtbaserad ingrediens som ofta beskrivs som ett mildare alternativ till retinol. Det används i hudvård för slätare hud och mer lyster, och uppfattas vanligen som skonsamt.",
      },
      {
        question: "Passar bakuchiolserum känslig hud?",
        answer: "Bakuchiol ses ofta som mildare än retinol och kan därför passa känslig hud bra. Prova ändå på en liten yta först och bygg upp användningen gradvis.",
      },
      {
        question: "När på dygnet använder jag serumet?",
        answer: "Du kan använda det på kvällen på ren hud, före fuktkräm. Ge det några veckors regelbunden användning för att märka skillnad i lyster och jämnhet.",
      },
    ],
    reviewSectionId: "celdyque-bakuchiol-serum-recensioner",
    reviewFormId: "celdyque-bakuchiol-serum-skriv-recension",
    targetKeyword: "bakuchiol serum",
    metaTitle: "CELDYQUE Bakuchiol Serum – mildt retinol-alternativ | Elins val",
    metaDescription: "Elin går igenom CELDYQUE Bakuchiol Concentrate Serum: ett växtbaserat, milt alternativ för slätare och lystrande hud (4,6 av 5, 847 omdömen) – och vad du bör veta.",
    relatedLinks: [
      {
        href: "/skonhet/vitamin-c-serum",
        label: "Vitamin C-serum",
        text: "Antioxidant för lyster och glow på morgonen.",
      },
      {
        href: "/skonhet/niacinamide-serum",
        label: "Niacinamide-serum",
        text: "Riktat serum för fet och blandad hy.",
      },
      {
        href: "/skonhet/cicaplast-b5",
        label: "Cicaplast B5",
        text: "Lugnande balsam för stressad och torr hud.",
      },
    ],
  },
  {
    productSlug: tangleTeezerOriginalProduct.slug,
    product: tangleTeezerOriginalProduct,
    href: "/skonhet/tangle-teezer",
    cardBadge: "Reder ut tovor",
    cardHook: "Flexibla tänder som reder ut tovor skonsamt på vått och torrt hår.",
    cardImage: "/products/tangle-teezer-original/tangle-teezer-thumbnail.webp",
    cardImageAlt: "Tangle Teezer The Original utredande hårborste",
    badge: "Elins utredningsfavorit",
    headline: "Tangle Teezer The Original – skonsam utredning",
    shortBody: "En ikonisk utredande hårborste med flexibla tänder som reder ut tovor steg för steg, på både vått och torrt hår. Nätt och greppvänlig form som ger mindre drag och mindre brott.",
    valueHook: "Utredande borste för skonsam utredning",
    valueStatement: "Tangle Teezer The Original är en utredande hårborste för dig som vill reda ut tovor utan onödigt drag. De flexibla tänderna i två längder arbetar sig igenom håret steg för steg och hjälper till att lossa trassel skonsamt, på både vått och torrt hår – vilket många upplever ger mindre brott än en vanlig borste. Formen är nätt och greppvänlig och får plats i necessären eller väskan. Amazon visar 4,7 av 5 från 44 850 omdömen, och köpare lyfter framför allt fram den skonsamma utredningen, det mindre draget och hur smidig den är att hålla i.",
    passFor: [
      "Vill reda ut tovor skonsamt med mindre drag i håret.",
      "Borstar både på vått och torrt hår och vill ha ett verktyg till båda.",
      "Söker en nätt, greppvänlig borste som ryms i necessären och på resan.",
    ],
    caution: "Det är ingen mirakelborste för väldigt långt eller mycket lockigt hår – där lönar det sig att jobba i sektioner och börja nedifrån och upp. Tänderna fångar dessutom lossnat hår, så borsten behöver rengöras regelbundet för att fungera bra.",
    usageGuidance: {
      title: "Så använder du den rätt",
      text: "Borsta i mindre sektioner och börja längst ner i topparna, arbeta dig sedan uppåt mot rötterna. På vått hår blir utredningen ofta extra skonsam. Rengör borsten från lossnat hår med jämna mellanrum.",
    },
    verdict: "En skonsam, greppvänlig utredande borste för vardagligt bruk – med enormt socialt stöd.",
    amazonSummary: "Amazon visar 4,7 av 5 från 44 850 omdömen. Köpare beskriver att tovor reds ut med mindre drag på både vått och torrt hår, men det är ingen mirakelborste för väldigt långt eller mycket lockigt hår.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Kan jag använda Tangle Teezer på vått hår?",
        answer: "Ja, The Original används på både vått och torrt hår. Många upplever att utredningen blir extra skonsam på vått hår – borsta i mindre sektioner och börja i topparna.",
      },
      {
        question: "Passar borsten långt eller lockigt hår?",
        answer: "Den fungerar för många hårtyper, men är ingen mirakelborste för väldigt långt eller mycket lockigt hår. Jobba i sektioner och börja nedifrån och upp så blir utredningen skonsammare.",
      },
      {
        question: "Hur rengör jag borsten?",
        answer: "Tänderna fångar lossnat hår, så plocka bort hårstrån regelbundet och skölj vid behov. En ren borste reder ut tovor mer effektivt och håller längre.",
      },
    ],
    reviewSectionId: "tangle-teezer-original-recensioner",
    reviewFormId: "tangle-teezer-original-skriv-recension",
    targetKeyword: "tangle teezer",
    metaTitle: "Tangle Teezer The Original – utredande hårborste | Elins val",
    metaDescription: "Elin går igenom Tangle Teezer The Original: en utredande hårborste med flexibla tänder som reder ut tovor skonsamt på vått och torrt hår (4,7 av 5, 44 850 omdömen) – och vad du bör veta.",
    relatedLinks: [
      {
        href: "/skonhet/harolja",
        label: "Hårolja",
        text: "Vårdande olja för glans och mjukt hår.",
      },
      {
        href: "/skonhet/torrschampo",
        label: "Torrschampo",
        text: "Fräscha upp håret mellan tvättarna.",
      },
      {
        href: "/skonhet/varmeskydd",
        label: "Värmeskydd",
        text: "Skydda håret vid värmestyling.",
      },
    ],
  },
  {
    productSlug: silkesorngottProduct.slug,
    product: silkesorngottProduct,
    href: "/skonhet/silkesorngott",
    cardBadge: "Mindre frizz",
    cardHook: "Slät yta i 100% mullbärssilke för mindre friktion mot hår och hud.",
    cardImage: "/products/silkesorngott/silkesorngott-thumbnail.webp",
    cardImageAlt: "Örngott i 100% mullbärssilke, 40x60 cm",
    badge: "Elins silkes-favorit",
    headline: "Silkesörngott i mullbärssilke – mindre frizz och mjukare morgnar",
    shortBody: "Ett örngott i 100% mullbärssilke (19 momme) med en len, slät yta. Den ger mindre friktion mot håret och huden, vilket ofta betyder mindre frizz, färre bäddveck och färre tovor – och en svalare känsla att sova på.",
    valueHook: "Slät silkesyta för mindre frizz",
    valueStatement: "Örngottet i 100% mullbärssilke är för dig som vill ha en mjukare morgon för både hår och hud. Tyget är 19 momme mullbärssilke med en slät yta som ger mindre friktion när du rör dig i sömnen – det innebär ofta mindre frizz, färre tovor och färre bäddveck i ansiktet. Det känns dessutom svalt och len mot kinden. Amazon visar starka 4,5 av 5 från 6 754 omdömen, där köpare framför allt lyfter mindre frizz, den sköna silkeskänslan och färre bäddveck på morgonen.",
    passFor: [
      "Vill ha mindre frizz och färre tovor i håret på morgonen.",
      "Sover gärna svalt och vill ha en len yta mot huden.",
      "Vill minska bäddveck och friktion i ansiktet under natten.",
    ],
    caution: "Silke kräver lite mer omsorg än bomull: tvätta skonsamt på silkesprogram eller för hand så håller örngottet längre. Mullbärssilke ligger också i en högre prisklass än vanliga örngott.",
    usageGuidance: {
      title: "Så får du mest nytta av det",
      text: "Använd örngottet på din vanliga kudde och vänd gärna på det mellan tvättarna. Tvätta skonsamt på silkesprogram eller för hand, och låt lufttorka så behåller silket sin släta yta.",
    },
    verdict: "Skönt silkesörngott för mindre frizz och mjukare morgnar – med stark social proof.",
    amazonSummary: "Amazon visar 4,5 av 5 från 6 754 omdömen. Köpare beskriver mindre frizz, en len och sval silkeskänsla och färre bäddveck, men silke kräver skonsam tvätt.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Hur hjälper ett silkesörngott mot frizz?",
        answer: "Den släta silkesytan ger mindre friktion mot håret när du rör dig i sömnen. Mindre friktion betyder ofta mindre frizz och färre tovor på morgonen jämfört med ett vanligt bomullsörngott.",
      },
      {
        question: "Hur tvättar jag ett örngott i mullbärssilke?",
        answer: "Tvätta skonsamt på silkesprogram eller för hand i ljummet vatten med ett milt medel, och låt lufttorka. Då behåller silket sin släta yta och örngottet håller längre.",
      },
      {
        question: "Vad betyder 19 momme?",
        answer: "Momme är ett mått på silkets täthet och vikt. 19 momme är en vanlig och hållbar kvalitet för örngott som känns len och slät utan att bli för tunn.",
      },
    ],
    reviewSectionId: "silkesorngott-recensioner",
    reviewFormId: "silkesorngott-skriv-recension",
    targetKeyword: "silkesörngott",
    metaTitle: "Silkesörngott i mullbärssilke – mindre frizz | Elins val",
    metaDescription: "Elin går igenom ett örngott i 100% mullbärssilke (19 momme): slät yta för mindre frizz och färre bäddveck (4,5 av 5, 6 754 omdömen) – och vad du bör veta om skötsel.",
    relatedLinks: [
      {
        href: "/skonhet/harolja",
        label: "Hårolja",
        text: "Vårdande olja för glans och mjukt hår.",
      },
      {
        href: "/skonhet/torrschampo",
        label: "Torrschampo",
        text: "Fräscha upp håret mellan tvättarna.",
      },
      {
        href: "/skonhet/varmeskydd",
        label: "Värmeskydd",
        text: "Skydda håret vid värmestyling.",
      },
    ],
  },
  {
    productSlug: guaShaRosenkvartsProduct.slug,
    product: guaShaRosenkvartsProduct,
    href: "/skonhet/gua-sha",
    cardBadge: "Lugn ritual",
    cardHook: "Ett ansiktsverktyg i rosenkvarts för en skön, avslappnande massage.",
    cardImage: "/products/gua-sha-rosenkvarts/gua-sha-thumbnail.webp",
    cardImageAlt: "Gua sha-sten i rosenkvarts för ansiktsmassage",
    badge: "Elins lugna favorit",
    headline: "Gua sha i rosenkvarts – en lugn kvällsritual",
    shortBody: "En gua sha-sten i rosenkvarts som många använder för en skön, avslappnande ansiktsmassage. Använd den med ansiktsolja eller serum så glider den lätt – en rofylld stund i kvällsrutinen. Effekten är subjektiv, men ritualen i sig är det fina.",
    valueHook: "En skön, avslappnande ansiktsmassage",
    valueStatement: "Den här gua sha-stenen i rosenkvarts är för dig som vill lägga till en lugn stund i kvällsrutinen. Du för stenen mjukt över ansiktet med lite ansiktsolja eller serum, så att den glider lätt mot huden – många upplever själva massagen som skön och avkopplande. Det handlar inte om något medicinskt, utan om en rofylld ritual som är lätt att tycka om. Amazon visar 4,2 av 5 från 49 omdömen; det är ett ganska lågt antal, så var medveten om att helhetsbilden fortfarande är osäker. Hur stenen känns är subjektivt och varierar från person till person.",
    passFor: [
      "Vill ha en lugn, avkopplande stund i kvällsrutinen.",
      "Gillar att massera in ansiktsolja eller serum med ett verktyg.",
      "Tycker om idén med en enkel ritual snarare än snabba resultat.",
    ],
    caution: "Det här är ett nyare köp med få omdömen (4,2 av 5 från 49), så helhetsbilden är osäker – läs gärna flera recensioner själv. Rosenkvarts är natursten och kan spricka om du tappar den mot ett hårt underlag, så hantera den varsamt. Rengör stenen efter användning. Effekten är subjektiv och varierar mellan olika personer.",
    usageGuidance: {
      title: "Så använder du den rätt",
      text: "Applicera först några droppar ansiktsolja eller serum på ren hud så att stenen glider lätt. För den sedan mjukt utåt över kinder, käke och panna – lugnt och utan att pressa. Rengör stenen efteråt och låt den torka.",
    },
    verdict: "Ett trevligt litet ansiktsverktyg för en lugn massageritual – men ett nyare köp med få omdömen.",
    amazonSummary: "Amazon visar 4,2 av 5 från 49 omdömen – ett ganska lågt antal. Köpare beskriver massagestunden som skön och avkopplande, men helhetsbilden är fortfarande osäker och effekten är subjektiv.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Hur använder jag en gua sha-sten?",
        answer: "Lägg först på lite ansiktsolja eller serum på ren hud så att stenen glider lätt. För den sedan mjukt utåt över ansiktet – lugnt och utan att pressa. Se det som en avkopplande stund snarare än en kur.",
      },
      {
        question: "Vad gör en gua sha egentligen?",
        answer: "För många handlar det främst om en skön, avslappnande ansiktsmassage och en lugn ritual i kvällsrutinen. Hur det upplevs är subjektivt och varierar från person till person.",
      },
      {
        question: "Hur sköter jag om en gua sha i rosenkvarts?",
        answer: "Rosenkvarts är natursten och kan spricka om den tappas mot ett hårt underlag, så hantera den varsamt. Rengör stenen efter varje användning och låt den torka.",
      },
    ],
    reviewSectionId: "gua-sha-rosenkvarts-recensioner",
    reviewFormId: "gua-sha-rosenkvarts-skriv-recension",
    targetKeyword: "gua sha",
    metaTitle: "Gua sha i rosenkvarts – lugn ansiktsmassage | Elins val",
    metaDescription: "Elin går igenom en gua sha-sten i rosenkvarts: ett ansiktsverktyg för en skön, avslappnande massage och en lugn kvällsritual (4,2 av 5, 49 omdömen) – och vad du bör veta innan du köper.",
    relatedLinks: [
      {
        href: "/skonhet/snail-mucin-essence",
        label: "Snail mucin-essence",
        text: "K-beauty-favorit för fukt och dewy lyster.",
      },
      {
        href: "/skonhet/vitamin-c-serum",
        label: "Vitamin C-serum",
        text: "C-vitamin för lyster och glow.",
      },
      {
        href: "/skonhet/hyaluronsyra-serum",
        label: "Hyaluronsyra-serum",
        text: "Enkelt fuktsteg i rutinen.",
      },
    ],
  },
  {
    productSlug: laneigeLipSleepingMaskProduct.slug,
    product: laneigeLipSleepingMaskProduct,
    href: "/skonhet/laneige-lappmask",
    cardBadge: "Nattläppmask",
    cardHook: "Viral K-beauty-läppmask som återfuktar läpparna medan du sover.",
    cardImage: "/products/laneige-lip-sleeping-mask/laneige-thumbnail.webp",
    cardImageAlt: "LANEIGE Lip Sleeping Mask Berry, 20 g",
    badge: "Elins K-beauty-favorit",
    headline: "LANEIGE Lip Sleeping Mask – mjuka läppar över natten",
    shortBody: "En viral K-beauty-läppmask med berry-doft som du masserar in före läggdags. Bär-extrakt och vårdande oljor återfuktar och mjukgör läpparna medan du sover, så att du vaknar med en mjuk, smidig känsla.",
    valueHook: "Återfuktande nattläppmask för mjuka läppar",
    valueStatement: "LANEIGE Lip Sleeping Mask är en viral K-beauty-favorit för dig som vill ge torra läppar lite extra omsorg på natten. Du lägger på ett lager före läggdags och låter berry-doftande bär-extrakt och vårdande oljor återfukta och mjukgöra medan du sover. Amazon visar 4,6 av 5 från 388 omdömen – ett hyfsat betyg snarare än ett enormt antal – och köpare lyfter framför allt mjukare läppar på morgonen och den mysiga doften.",
    passFor: [
      "Vill vårda torra läppar medan du sover.",
      "Gillar K-beauty-rutiner och ett mysigt extrasteg på kvällen.",
      "Letar efter en återfuktande läppmask med behaglig berry-doft.",
    ],
    caution: "Doft och smak är en smaksak – den söta berry-tonen känns mycket för en del. Konsistensen är dessutom ganska tjock och balsamliknande, så känns den klibbig kan du lägga på lite mindre.",
    usageGuidance: {
      title: "Så använder du den rätt",
      text: "Massera in ett lager på rena läppar som sista steg före läggdags och låt den verka över natten. Torka eller skölj bort resterna på morgonen. Lite produkt räcker långt, så du behöver inte ta mycket.",
    },
    verdict: "Mysig K-beauty-läppmask som återfuktar och mjukgör läpparna över natten.",
    amazonSummary: "Amazon visar 4,6 av 5 från 388 omdömen. Köpare beskriver mjukare läppar på morgonen och en mysig berry-doft, men doften och den tjocka konsistensen är en smaksak.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Hur använder jag LANEIGE Lip Sleeping Mask?",
        answer: "Massera in ett lager på rena läppar som sista steg före läggdags och låt den verka över natten. På morgonen torkar eller sköljer du bort resterna. Lite produkt räcker långt.",
      },
      {
        question: "Varför är den en K-beauty-favorit?",
        answer: "Det är en viral nattläppmask i koreansk hudvårdsstil med berry-doft, bär-extrakt och vårdande oljor. Idén är att läpparna får återfuktas och mjukgöras i lugn och ro medan du sover.",
      },
      {
        question: "Hur länge räcker en burk?",
        answer: "Eftersom det räcker med ett tunt lager varje kväll håller de 20 grammen ofta i många månader, vilket många köpare uppskattar.",
      },
    ],
    reviewSectionId: "laneige-lip-sleeping-mask-recensioner",
    reviewFormId: "laneige-lip-sleeping-mask-skriv-recension",
    targetKeyword: "läppmask",
    metaTitle: "LANEIGE Lip Sleeping Mask – nattläppmask | Elins val",
    metaDescription: "Elin går igenom LANEIGE Lip Sleeping Mask: en viral K-beauty-läppmask med berry-doft som återfuktar läpparna över natten (4,6 av 5, 388 omdömen) – och vad du bör veta om doft och konsistens.",
    relatedLinks: [
      {
        href: "/skonhet/snail-mucin-essence",
        label: "Snail mucin-essence",
        text: "K-beauty-favorit för fukt och dewy lyster.",
      },
      {
        href: "/skonhet/hyaluronsyra-serum",
        label: "Hyaluronsyra-serum",
        text: "Enkelt fuktsteg i rutinen.",
      },
      {
        href: "/skonhet/vitamin-c-serum",
        label: "Vitamin C-serum",
        text: "C-vitamin för lyster och glow.",
      },
    ],
  },
  {
    productSlug: larochePosayCicaplastB5Product.slug,
    product: larochePosayCicaplastB5Product,
    href: "/skonhet/cicaplast-b5",
    cardBadge: "Lugnar & mjukgör",
    cardHook: "Panthenol (B5) och shea som lugnar och återfuktar torr hud.",
    cardImage: "/products/la-roche-posay-cicaplast-b5/cicaplast-thumbnail.webp",
    cardImageAlt: "La Roche-Posay Cicaplast Baume B5+, 40 ml",
    badge: "Elins lugna-favorit",
    headline: "La Roche-Posay Cicaplast B5+ – lugnar och mjukgör",
    shortBody: "En multifunktionell balm med panthenol (B5) och shea. Gjord för att lugna, återfukta och mjukgöra torr och stram hud, och fungerar fint på torra partier som läppar och händer.",
    valueHook: "Lugnande balm för torr och stram hud",
    valueStatement: "La Roche-Posay Cicaplast Baume B5+ är en mångsidig balm för dig som vill lugna och återfukta torr, stram och ovan hud. Formulan bygger på panthenol (B5) tillsammans med shea, en kombination som mjukgör uttorkade partier och hjälper huden att kännas mer komfortabel. Den kan användas på flera ställen – torra läppar, händer och torra partier på kroppen. Amazon visar 4,7 av 5 från 16 635 omdömen, en av de starkaste sociala bevisen i kategorin, och köpare lyfter framför allt hur lugnande och mjukgörande den känns.",
    passFor: [
      "Har torr, stram eller ovan hud och vill ha en lugnande balm.",
      "Vill ha en multipurpose-balm för torra läppar, händer och torra partier.",
      "Gillar en rik textur som mjukgör uttorkad hud.",
    ],
    caution: "Balmen är rik och kan kännas fet om du tar för mycket eller har fukttörstig hud – en liten mängd räcker långt. Som med all ny hudvård: testa gärna på en liten yta först om du har känslig hud.",
    usageGuidance: {
      title: "Så använder du det rätt",
      text: "Ta en liten mängd och massera in på torra, strama partier vid behov – på ansikte, läppar, händer eller torra ställen på kroppen. Lite räcker långt, så lägg på tunt och bygg på vid behov.",
    },
    verdict: "Mångsidig, lugnande balm för torra partier – med riktigt stark social proof.",
    amazonSummary: "Amazon visar 4,7 av 5 från 16 635 omdömen. Köpare beskriver en lugnande, mjukgörande balm för torr hud som funkar på flera ställen, men texturen är rik och en liten mängd räcker.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Var kan jag använda Cicaplast B5+?",
        answer: "Den är multifunktionell och kan användas på torra, strama partier – som läppar, händer och torra ställen på kroppen. Ta en liten mängd och massera in vid behov.",
      },
      {
        question: "Passar Cicaplast B5+ torr och stram hud?",
        answer: "Ja, den är gjord för att lugna, återfukta och mjukgöra torr, stram och ovan hud tack vare panthenol (B5) och shea. Texturen är rik, så lite räcker långt.",
      },
      {
        question: "Hur mycket ska jag ta?",
        answer: "Eftersom balmen är rik räcker en liten mängd. Lägg på tunt på torra partier och bygg på vid behov så att den inte känns för fet.",
      },
    ],
    reviewSectionId: "la-roche-posay-cicaplast-b5-recensioner",
    reviewFormId: "la-roche-posay-cicaplast-b5-skriv-recension",
    targetKeyword: "cicaplast",
    metaTitle: "La Roche-Posay Cicaplast B5+ – lugnar & mjukgör | Elins val",
    metaDescription: "Elin går igenom La Roche-Posay Cicaplast Baume B5+: en lugnande balm med panthenol (B5) och shea för torr och stram hud (4,7 av 5, 16 635 omdömen) – och vad du bör veta.",
    relatedLinks: [
      {
        href: "/skonhet/snail-mucin-essence",
        label: "Snail mucin-essence",
        text: "K-beauty-favorit för fukt och dewy lyster.",
      },
      {
        href: "/skonhet/hyaluronsyra-serum",
        label: "Hyaluronsyra-serum",
        text: "Enkelt fuktsteg i rutinen.",
      },
      {
        href: "/skonhet/vitamin-c-serum",
        label: "Vitamin C-serum",
        text: "C-vitamin för lyster och glow.",
      },
    ],
  },
  {
    productSlug: ceraveHydratingCleanserProduct.slug,
    product: ceraveHydratingCleanserProduct,
    href: "/skonhet/cerave-rengoring",
    cardBadge: "Skonsam rengöring",
    cardHook: "Mild rengöring med ceramider som inte torkar ut huden.",
    cardImage: "/products/cerave-hydrating-cleanser/cerave-thumbnail.webp",
    cardImageAlt: "CeraVe Hydrating Cleanser ansiktsrengöring, 236 ml",
    badge: "Elins milda favorit",
    headline: "CeraVe Hydrating Cleanser – skonsam daglig rengöring",
    shortBody: "En viral, mild ansiktsrengöring med ceramider och hyaluronsyra. Rengör utan att torka ut och lämnar huden mjuk – för normal till torr hud, och helt oparfymerad.",
    valueHook: "Skonsam rengöring som inte torkar ut",
    valueStatement: "CeraVe Hydrating Cleanser är en mild daglig rengöring för dig som vill rengöra huden utan att den känns stram eller uttorkad efteråt. Formulan bygger på ceramider och hyaluronsyra, en kombination som hjälper huden att kännas mjuk och len medan den rengörs. Den är oparfymerad och passar normal till torr hud. Amazon visar 4,5 av 5 från 35 098 omdömen, och köpare lyfter framför allt att huden känns ren men ändå återfuktad och att den är skonsam i vardagen.",
    passFor: [
      "Vill ha en mild rengöring som inte torkar ut huden.",
      "Har normal till torr hud och föredrar något oparfymerat.",
      "Vill ha ett enkelt, skonsamt första steg i rutinen.",
    ],
    caution: "Den här rengöringen löddrar inte mycket, vilket kan kännas ovant om du är van vid rik lödder. Är du väldigt fet i huden kan du i stället föredra en lättare gel-rengöring.",
    usageGuidance: {
      title: "Så använder du det rätt",
      text: "Massera in en liten mängd på fuktig eller torr hud morgon och kväll, och skölj av med ljummet vatten. Följ gärna upp med fuktkräm medan huden fortfarande är lite fuktig.",
    },
    verdict: "Skonsam vardagsrengöring för normal till torr hud, oparfymerad och mild.",
    amazonSummary: "Amazon visar 4,5 av 5 från 35 098 omdömen. Köpare beskriver en hud som känns ren men inte uttorkad och en mild, oparfymerad formula, men rengöringen löddrar inte mycket.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Torkar CeraVe Hydrating Cleanser ut huden?",
        answer: "Nej, den är gjord för att rengöra skonsamt utan att dra åt. Ceramider och hyaluronsyra hjälper huden att kännas mjuk och len efteråt, även för normal till torr hud.",
      },
      {
        question: "Passar rengöringen känslig och torr hud?",
        answer: "Den är oparfymerad och mild, vilket gör den till ett enkelt val för normal till torr hud. Är du väldigt fet i huden kan du i stället föredra en lättare gel-rengöring.",
      },
      {
        question: "Varför löddrar CeraVe Hydrating Cleanser så lite?",
        answer: "Den är gjord som en mild, krämig rengöring snarare än en löddrande tvål. Det kan kännas ovant i början, men huden blir ren och känns mjuk utan att torka ut.",
      },
    ],
    reviewSectionId: "cerave-hydrating-cleanser-recensioner",
    reviewFormId: "cerave-hydrating-cleanser-skriv-recension",
    targetKeyword: "cerave",
    metaTitle: "CeraVe Hydrating Cleanser – skonsam rengöring | Elins val",
    metaDescription: "Elin går igenom CeraVe Hydrating Cleanser: en mild ansiktsrengöring med ceramider och hyaluronsyra som inte torkar ut huden (4,5 av 5, 35 098 omdömen) – och vad du bör veta.",
    relatedLinks: [
      {
        href: "/skonhet/hyaluronsyra-serum",
        label: "Hyaluronsyra-serum",
        text: "Lägg till ett enkelt fuktsteg.",
      },
      {
        href: "/skonhet/niacinamide-serum",
        label: "Niacinamide-serum",
        text: "Riktat serum för fet och blandad hy.",
      },
      {
        href: "/skonhet/snail-mucin-essence",
        label: "Snail mucin-essence",
        text: "K-beauty-favorit för fukt och dewy lyster.",
      },
    ],
  },
  {
    productSlug: larochePosayVitaminC10Product.slug,
    product: larochePosayVitaminC10Product,
    href: "/skonhet/vitamin-c-serum",
    cardBadge: "Lyster & glow",
    cardHook: "10% ren C-vitamin för en piggare, mer strålande hud.",
    cardImage: "/products/la-roche-posay-vitamin-c10/vitamin-c10-thumbnail.webp",
    cardImageAlt: "La Roche-Posay Pure Vitamin C10 Serum, 30 ml",
    badge: "Elins glow-favorit",
    headline: "La Roche-Posay Vitamin C10 – lyster och glow",
    shortBody: "Ett apoteksserum med 10% ren C-vitamin och hyaluronsyra. Gjort för lyster, glow och en jämnare hudton, med en lätt textur som passar även känslig hud.",
    valueHook: "C-vitamin för lyster och glow",
    valueStatement: "La Roche-Posay Pure Vitamin C10 är ett antioxidantserum för dig som vill ge huden mer lyster och en piggare, mer strålande look. Formulan bygger på 10% ren C-vitamin tillsammans med hyaluronsyra, en kombination som hjälper huden att se mer utvilad ut och hudtonen att verka jämnare. Amazon visar 4,4 av 5 från 256 omdömen, och köpare lyfter framför allt glowen, den lätta texturen och att den känns skonsam även för känslig hud.",
    passFor: [
      "Vill ge huden mer lyster och glow i morgonrutinen.",
      "Har känslig hud och vill ha ett mildare C-vitaminserum.",
      "Gillar en lätt textur under fuktkräm och makeup.",
    ],
    caution: "Ren C-vitamin kan svida lätt i början och upplevelsen varierar mellan hudtyper. Börja gärna varannan dag, förvara serumet mörkt och svalt eftersom C-vitamin oxiderar med tiden.",
    usageGuidance: {
      title: "Så använder du det rätt",
      text: "Applicera några droppar på ren hud på morgonen, före fuktkräm. C-vitamin trivs bäst på dagen och passar fint ihop med ett återfuktande lager ovanpå.",
    },
    verdict: "Prisvärt apoteksserum för lyster och glow, även för känslig hud.",
    amazonSummary: "Amazon visar 4,4 av 5 från 256 omdömen. Köpare beskriver en piggare, mer strålande hud och en lätt textur, men ren C-vitamin kan svida lätt i början.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "När på dygnet använder jag C-vitaminserum?",
        answer: "C-vitamin passar bäst på morgonen, på ren hud före fuktkräm. Då får du glow under dagen och kan följa upp med ett återfuktande lager.",
      },
      {
        question: "Passar La Roche-Posay Vitamin C10 känslig hud?",
        answer: "Den är gjord med tanke på känslig hud och beskrivs som skonsam, men ren C-vitamin kan svida lätt i början. Börja gärna varannan dag.",
      },
      {
        question: "Varför blir C-vitaminserum mörkare med tiden?",
        answer: "Ren C-vitamin oxiderar i kontakt med luft och ljus. Förvara serumet mörkt och svalt och använd det inom rimlig tid för bäst lyster.",
      },
    ],
    reviewSectionId: "la-roche-posay-vitamin-c10-recensioner",
    reviewFormId: "la-roche-posay-vitamin-c10-skriv-recension",
    targetKeyword: "vitamin c serum",
    metaTitle: "La Roche-Posay Vitamin C10 Serum – lyster & glow | Elins val",
    metaDescription: "Elin går igenom La Roche-Posay Pure Vitamin C10: ett apoteksserum med 10% ren C-vitamin för lyster och glow (4,4 av 5, 256 omdömen) – och vad du bör veta om känslig hud.",
    relatedLinks: [
      {
        href: "/skonhet/niacinamide-serum",
        label: "Niacinamide-serum",
        text: "Riktat serum för fet och blandad hy.",
      },
      {
        href: "/skonhet/hyaluronsyra-serum",
        label: "Hyaluronsyra-serum",
        text: "Lägg till ett enkelt fuktsteg i rutinen.",
      },
      {
        href: "/skonhet/snail-mucin-essence",
        label: "Snail mucin-essence",
        text: "K-beauty-favorit för fukt och dewy lyster.",
      },
    ],
  },
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
    headline: "NIVEA Sun After Sun - omdöme & betyg",
    shortBody:
      "NIVEA Sun After Sun Moisturising Lotion är ett prisvärt, beprövat after sun som kyler och återfuktar huden efter en dag i solen.",
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
    targetKeyword: "nivea moisturising after sun lotion",
    metaTitle: "NIVEA Sun After Sun omdöme & betyg | Elins val",
    metaDescription:
      "NIVEA Moisturising After Sun Lotion omdöme: Elins betyg, köparsignaler och varför den är ett prisvärt val efter solen.",
    relatedLinks: [
      {
        href: "/skonhet/aftersun-eller-aloe-vera",
        label: "After sun eller aloe vera",
        text: "Jämför NIVEA After Sun med aloe vera gel.",
      },
      {
        href: "/skonhet/aloe-vera-gel",
        label: "Aloe vera gel",
        text: "Se Naissance Aloe Vera Gel som lättare alternativ.",
      },
    ],
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
    headline: "Naissance Aloe Vera Gel - omdöme & betyg",
    shortBody:
      "Naissance Aloe Vera Gel är en kylande, vegansk aloe vera gel (99% naturligt ursprung) som svalkar efter sol, bad och rakning.",
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
    metaTitle: "Naissance Aloe Vera Gel omdöme & betyg | Elins val",
    metaDescription:
      "Aloe vera gel omdöme: Elin går igenom Naissance Aloe Vera Gel, betyg, svalkande känsla och när den passar bättre än after sun.",
    relatedLinks: [
      {
        href: "/skonhet/aftersun-eller-aloe-vera",
        label: "After sun eller aloe vera",
        text: "Jämför aloe vera gel med after sun-lotion.",
      },
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
    productSlug: cosrxSnailEssenceProduct.slug,
    href: "/skonhet/snail-mucin-essence",
    cardBadge: "K-beauty-favorit",
    cardHook: "74% snigelsekret + 5% niacinamide - viral fukt och lyster.",
    cardImage: "/products/cosrx-snail-essence/cosrx-snail-thumbnail.webp",
    cardImageAlt: "COSRX Advanced Snail Radiance Dual Essence, 80 ml",
    product: cosrxSnailEssenceProduct,
    badge: "Elins K-beauty-favorit",
    headline: "COSRX Snail Mucin Essence - fukt och dewy lyster",
    shortBody:
      "En viral K-beauty dual-essence med 74% snigelsekret och 5% niacinamide. Lätt, icke-klibbig och gjord för fukt, lyster och en jämnare hudton.",
    valueHook: "K-beauty-favoriten för fukt och lyster",
    valueStatement:
      "COSRX Snail Mucin 74% + Niacinamide Dual Essence är en lätt essence för dig som vill lägga till återfuktning och dewy lyster utan tung känsla. Formulan kombinerar 74% snigelsekret med 5% niacinamide, en kombination som hjälper huden att kännas slätare och hudtonen att se jämnare ut. Amazon visar 4,5 av 5 från 7 238 omdömen, och köpare lyfter framför allt den silkeslena känslan, snabb absorption och att den inte känns klibbig.",
    passFor: [
      "Vill ha en viral K-beauty-essence för fukt och lyster.",
      "Gillar lätta lager under fuktkräm och makeup.",
      "Vill kombinera snigelsekret med niacinamide i ett enda steg.",
    ],
    caution:
      "Snigel-konsistensen kan kännas ovan i början och upplevelsen varierar mellan hudtyper. Blanda de två essenserna före applicering och börja med en liten mängd om huden lätt reagerar.",
    usageGuidance: {
      title: "Så använder du den rätt",
      text: "Tryck ut en liten mängd, blanda de två essenserna mellan fingrarna och applicera efter rengöring eller toner, före kräm. Följ upp med fuktkräm om huden vill ha mer komfort.",
    },
    verdict:
      "Prisvärd K-beauty-essence för återfuktning och lyster.",
    amazonSummary:
      "Amazon visar 4,5 av 5 från 7 238 omdömen. Köpare beskriver känslan som silkeslen, lätt och snabbabsorberad, men konsistensen kan kännas ovan i början.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "När i rutinen använder jag snail mucin essence?",
        answer:
          "Applicera efter rengöring eller toner och före fuktkräm. Blanda de två essenserna mellan fingrarna först så blir formulan jämnare.",
      },
      {
        question: "Känns COSRX snail mucin klibbig?",
        answer:
          "Många köpare beskriver den som lätt och snabbabsorberad, men snigel-konsistensen kan kännas ovan i början. Börja med en liten mängd.",
      },
      {
        question: "Vad gör niacinamide i formulan?",
        answer:
          "Niacinamide är ett hudvårdsämne som hjälper hudtonen att se jämnare ut. Här kombineras det med snigelsekret för fukt och lyster.",
      },
    ],
    reviewSectionId: "cosrx-snail-mucin-essence-recensioner",
    reviewFormId: "cosrx-snail-mucin-essence-skriv-recension",
    targetKeyword: "snail mucin",
    metaTitle: "COSRX Snail Mucin Essence - K-beauty för fukt | Elins val",
    metaDescription:
      "Elin går igenom COSRX Snail Mucin 74% + Niacinamide Dual Essence: en viral, lätt K-beauty-essence för fukt och lyster (4,5 av 5, 7 238 omdömen) - och vad du bör veta om konsistensen.",
    relatedLinks: [
      {
        href: "/guider/snail-mucin-vart-hypen",
        label: "Guide",
        text: "Snail mucin – värt hypen?",
      },
      {
        href: "/skonhet/niacinamide-serum",
        label: "Niacinamide-serum",
        text: "Jämför med ett riktat serum för fet och blandad hy.",
      },
      {
        href: "/skonhet/hyaluronsyra-serum",
        label: "Hyaluronsyra-serum",
        text: "Lägg till ett enkelt fuktsteg i rutinen.",
      },
    ],
  },
  {
    productSlug: minimalistHyaluronsyraSerumProduct.slug,
    href: "/skonhet/hyaluronsyra-serum",
    cardBadge: "Parfymfritt fukt-serum",
    cardHook: "2% hyaluronsyra + PGA - 7 000+ omdömen.",
    cardImage:
      "/products/minimalist-hyaluronsyra-serum/minimalist-hyaluronsyra-serum-thumbnail.webp",
    cardImageAlt: "Minimalist 2% Hyaluronic Acid + PGA Face Serum, 30 ml",
    product: minimalistHyaluronsyraSerumProduct,
    badge: "Prisvärt fukt-serum",
    headline: "Minimalist Hyaluronsyra-serum - fukt på flera nivåer",
    shortBody:
      "Ett prisvärt, parfymfritt fukt-serum med 2% hyaluronsyra och PGA som binder och håller kvar fukt på flera nivåer - för alla hudtyper.",
    valueHook:
      "Prisvärt fukt-serum som återfuktar på flera nivåer.",
    valueStatement:
      "Minimalist 2% Hyaluronic Acid + PGA Face Serum är ett enkelt fuktsteg för dig som vill ha återfuktning utan parfym och onödigt krångel. Formulan kombinerar 2% hyaluronsyra i flera molekylstorlekar med PGA (polyglutaminsyra) och vitamin B5 för att hjälpa huden att kännas mjukare och mer återfuktad. Amazon visar 4,3 av 5 från över 7 000 omdömen, och profilen är parfymfri, silikonfri och icke-komedogen.",
    passFor: [
      "Vill ha ett prisvärt, parfymfritt fukt-serum för ansiktet.",
      "Har känslig, fet eller kombinerad hud och vill hålla rutinen enkel.",
      "Vill ha ett lätt serum att lägga under fuktkräm.",
    ],
    caution:
      "Det här är ett fukt-serum, inte en komplett rutin på egen hand. Hyaluronsyra fungerar bäst när den får fukt att binda och en kräm ovanpå som låser in känslan. Testa på en liten yta först om huden lätt reagerar.",
    usageGuidance: {
      title: "Så använder du den rätt",
      text: "Vanligaste misstaget: att applicera hyaluronsyra på helt torr hud. Hyaluronsyra drar åt sig fukt - på torr hud i torr luft kan den istället dra fukt från hudens djupare lager. Applicera på lätt fuktig hud och lås in direkt med en fuktkräm.",
    },
    verdict:
      "Prisvärt, parfymfritt och lätt att förstå - ett starkt fuktsteg för ansiktet.",
    amazonSummary:
      "Amazon visar 4,3 av 5 från över 7 000 omdömen. Köparsignalerna pekar på ett lätt, prisvärt fukt-serum med parfymfri, silikonfri och icke-komedogen profil.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "När i rutinen använder jag hyaluronsyra-serum?",
        answer:
          "Applicera efter rengöring på lätt fuktig hud och följ upp med fuktkräm. Det gör serumet lättare att använda som ett tydligt fuktsteg.",
      },
      {
        question: "Passar det fet eller kombinerad hud?",
        answer:
          "Ja, formulan beskrivs som lätt, parfymfri och icke-komedogen, vilket gör den relevant även för fet och kombinerad hud. Känslan kan ändå variera mellan hudtyper.",
      },
      {
        question: "Behöver jag fortfarande fuktkräm?",
        answer:
          "Ja. Serumet binder fukt, men en fuktkräm ovanpå hjälper till att låsa in den mjuka känslan.",
      },
    ],
    reviewSectionId: "minimalist-hyaluronsyra-serum-recensioner",
    reviewFormId: "minimalist-hyaluronsyra-serum-skriv-recension",
    targetKeyword: "hyaluronsyra serum",
    metaTitle:
      "Hyaluronsyra serum - Minimalist 2% Hyaluronic Acid + PGA | Elins val",
    metaDescription:
      "Elin går igenom Minimalist 2% Hyaluronic Acid + PGA: ett prisvärt, parfymfritt fukt-serum för alla hudtyper (4,3 av 5, 7 000+ omdömen) - och hur du använder hyaluronsyra rätt.",
    relatedLinks: [
      {
        href: "/skonhet/jojobaolja",
        label: "Jojobaolja",
        text: "Lås in mjukheten med några droppar lätt olja.",
      },
      {
        href: "/skonhet/niacinamide-serum",
        label: "Niacinamide-serum",
        text: "Jämför med ett mattande serum för fet och blandad hy.",
      },
    ],
  },
  {
    productSlug: inkeyNiacinamideSerumProduct.slug,
    href: "/skonhet/niacinamide-serum",
    cardBadge: "Mattande niacinamide-serum",
    cardHook: "10% niacinamide i lätt gel - 1 500+ omdömen.",
    cardImage:
      "/products/inkey-niacinamide-serum/inkey-niacinamide-serum-thumbnail.webp",
    cardImageAlt: "The INKEY List 10% Niacinamide Serum, 30 ml",
    product: inkeyNiacinamideSerumProduct,
    badge: "Prisvärt serum för fet & blandhy",
    headline: "The INKEY List Niacinamide-serum - lätt gel för glans",
    shortBody:
      "Ett lätt, prisvärt gel-serum med 10% niacinamide (vitamin B3) och en touch hyaluronsyra. Mattar fett och glans och hjälper till att jämna ut hudtonen – ett enkelt steg för fet och blandhy.",
    valueHook: "Prisvärt niacinamide-serum för fet och blandhy",
    valueStatement:
      "The INKEY List 10% Niacinamide Serum är ett lätt, prisvärt gel-serum med 10% niacinamide (vitamin B3) och en touch hyaluronsyra. Mattar fett och glans och hjälper till att jämna ut hudtonen – ett enkelt steg för fet och blandhy. Amazon visar 4,2 av 5 från över 1 500 omdömen, och profilen är parfymfri med en lätt gel som lägger sig osynligt under annan hudvård.",
    passFor: [
      "Vill ha ett prisvärt niacinamide-serum för fet eller blandad hy.",
      "Vill matta fett och glans utan en tung känsla.",
      "Vill ha en parfymfri gel som fungerar under annan hudvård.",
    ],
    caution:
      "Mer aktiv ingrediens är inte alltid bättre. Börja med en ärtstor mängd och följ upp med fuktkräm. Dra ned på frekvensen om huden känns irriterad.",
    usageGuidance: {
      title: "Så använder du den rätt",
      text: "Vanligaste myten: \"mer niacinamide = bättre\". Nej – 10% är lagom. För hög halt kan reta huden istället för att hjälpa. En ärtstor mängd efter rengöring räcker, morgon eller kväll, följt av fuktkräm.",
    },
    verdict:
      "Prisvärt, lätt och enkelt att dosera - ett starkt serumsteg för fet och blandhy.",
    amazonSummary:
      "Amazon visar 4,2 av 5 från över 1 500 omdömen. Köparsignalerna pekar på ett parfymfritt, lätt gel-serum som lägger sig osynligt under annan hudvård.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "När i rutinen använder jag niacinamide-serum?",
        answer:
          "Applicera en ärtstor mängd efter rengöring, morgon eller kväll, och följ upp med fuktkräm.",
      },
      {
        question: "Passar det fet eller kombinerad hy?",
        answer:
          "Ja, profilen är särskilt relevant för fet och blandad hy eftersom serumet är lätt, parfymfritt och mattar fett och glans.",
      },
      {
        question: "Är mer niacinamide bättre?",
        answer:
          "Nej. 10% är redan en tydlig nivå, och för hög halt kan göra huden irriterad. Börja hellre konsekvent och med liten mängd.",
      },
    ],
    reviewSectionId: "inkey-niacinamide-serum-recensioner",
    reviewFormId: "inkey-niacinamide-serum-skriv-recension",
    targetKeyword: "niacinamide serum",
    metaTitle:
      "Niacinamide serum - The INKEY List 10% Niacinamide | Elins val",
    metaDescription:
      "Elin går igenom The INKEY List 10% Niacinamide Serum: ett lätt, prisvärt gel-serum för fet och blandhy (4,2 av 5, 1 500+ omdömen) - och hur du använder niacinamide rätt.",
    relatedLinks: [
      {
        href: "/skonhet/hyaluronsyra-serum",
        label: "Hyaluronsyra-serum",
        text: "Lägg till ett enkelt fuktsteg i samma minimalistiska rutin.",
      },
      {
        href: "/skonhet/jojobaolja",
        label: "Jojobaolja",
        text: "Jämför med en lätt olja för hud, hår och naglar.",
      },
    ],
  },
  {
    productSlug: kanzyJojobaoljaProduct.slug,
    href: "/skonhet/jojobaolja",
    cardBadge: "Kallpressad jojobaolja",
    cardHook: "Mångsidig olja för hud, hår och naglar - 40 000+ omdömen.",
    cardImage: "/products/kanzy-jojobaolja/kanzy-jojobaolja-thumbnail.webp",
    cardImageAlt: "Kanzy Jojoba Oil Cold Pressed 100% Pure, 120 ml",
    product: kanzyJojobaoljaProduct,
    badge: "Mångsidigt hudvårdsval",
    headline: "Kanzy Jojobaolja - lätt olja för hud, hår & naglar",
    shortBody:
      "En mångsidig, kallpressad och vegansk jojobaolja för hud, hår och naglar. Lätt och icke-fet - enkel att dosera i en minimalistisk rutin.",
    valueHook:
      "Mångsidig, prisvärd jojobaolja för hud, hår & naglar.",
    valueStatement:
      "Kanzy Jojoba Oil är en ren, kallpressad och vegansk jojobaolja som fungerar som ett enkelt mjukgörande steg för hud, hår och naglar. Jojoba liknar hudens eget sebum, vilket gör den lätt att använda även när huden är fet eller kombinerad. Amazon visar 4,4 av 5 från över 40 000 omdömen, och produkten lyfts som bästsäljare bland kroppsoljor med 100% ren, hexanfri profil.",
    passFor: [
      "Vill ha en ren, mångsidig olja för hud, hår och naglar.",
      "Föredrar kallpressad, vegansk och hexanfri jojobaolja.",
      "Vill kunna dosera några droppar i en enkel hudvårdsrutin.",
    ],
    caution:
      "Börja med mycket liten mängd. För mycket olja kan kännas blankt eller tungt, särskilt i ansiktet och i fint hår. Applicera några droppar och bygg upp bara om huden eller håret behöver mer mjukhet.",
    usageGuidance: {
      title: "Så använder du den rätt",
      text: "Vanligaste myten: \"har du fet hy ska du undvika olja\". Jojobaolja liknar faktiskt hudens eget sebum och kan hjälpa till att balansera fet och kombinerad hy istället för att täppa till. Några droppar räcker - på hud, i håret eller på naglarna.",
    },
    verdict:
      "Mångsidig och prisvärd - en lätt jojobaolja som passar flera delar av rutinen.",
    amazonSummary:
      "Amazon visar 4,4 av 5 från över 40 000 omdömen. Köparsignalerna pekar på en mångsidig, ren och kallpressad jojobaolja för hud, hår och naglar.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Kan jojobaolja användas i ansiktet?",
        answer:
          "Ja, använd några droppar på lätt fuktad hud eller ovanpå fuktkräm. Börja lågt och öka bara om huden vill ha mer mjukhet.",
      },
      {
        question: "Passar den fet eller kombinerad hy?",
        answer:
          "Jojoba liknar hudens eget sebum och kan därför vara enklare att använda än många tyngre oljor. Känslan varierar, så börja med en liten mängd.",
      },
      {
        question: "Kan den användas i hår och på naglar?",
        answer:
          "Ja. Några droppar kan användas i längder, på torra toppar eller masseras in på nagelband.",
      },
    ],
    reviewSectionId: "kanzy-jojobaolja-recensioner",
    reviewFormId: "kanzy-jojobaolja-skriv-recension",
    targetKeyword: "jojobaolja",
    metaTitle: "Jojobaolja - Kanzy Cold Pressed 100% Pure | Elins val",
    metaDescription:
      "Elin går igenom Kanzy Jojoba Oil: kallpressad, vegansk jojobaolja för hud, hår och naglar (4,4 av 5, 40 000+ omdömen) - och hur några droppar används rätt.",
    relatedLinks: [
      {
        href: "/skonhet/hyaluronsyra-serum",
        label: "Hyaluronsyra-serum",
        text: "Lägg fukt först och lås in känslan efteråt.",
      },
      {
        href: "/skonhet/niacinamide-serum",
        label: "Niacinamide-serum",
        text: "Jämför med ett lätt serum för fet och blandad hy.",
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
    relatedLinks: [
      {
        href: "/skonhet/harolja-eller-varmeskydd",
        label: "Hårolja med värmeskydd",
        text: "Se när hårolja och värmeskydd ska användas tillsammans.",
      },
      {
        href: "/skonhet/varmeskydd",
        label: "Värmeskydd",
        text: "Jämför med L'Oréal Elvital Dream Length före värmestyling.",
      },
    ],
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
    headline: "Moroccanoil torrschampo Light - för ljust hår",
    shortBody:
      "Moroccanoil torrschampo Light är ett premium-torrschampo för ljust hår som suger upp fett mellan tvättar och mattar gulton i blont hår.",
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
    targetKeyword: "moroccanoil torrschampo",
    metaTitle: "Moroccanoil torrschampo Light för ljust hår | Elins val",
    metaDescription:
      "Moroccanoil torrschampo Light för ljust hår: Elins omdöme om fett-mattande effekt, lila pigment, pris och hårfärg.",
    relatedLinks: [
      {
        href: "/skonhet/harolja",
        label: "Hårolja",
        text: "Jämför med Moroccanoil hårolja för glans och mjukhet.",
      },
      {
        href: "/skonhet/varmeskydd",
        label: "Värmeskydd",
        text: "Se värmeskyddet att använda innan styling.",
      },
    ],
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
        href: "/skonhet/harolja-eller-varmeskydd",
        label: "Hårolja med värmeskydd",
        text: "Se när hårolja och värmeskydd kompletterar varandra.",
      },
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
    productSlug: levoitCore200sProduct.slug,
    product: levoitCore200sProduct,
    href: "/halsa/luftrenare",
    cardBadge: "Renare luft",
    cardHook: "HEPA-filter som fångar damm och pollen – med tyst nattläge.",
    cardImage: "/products/levoit-luftrenare/levoit-thumbnail.webp",
    cardImageAlt: "Levoit Core 200S luftrenare med HEPA-filter, vit",
    badge: "Elins smarta val",
    headline: "Levoit Core 200S – renare luft i sovrummet",
    shortBody: "En kompakt smart luftrenare med 3-lagers HEPA-filter som fångar damm, pollen och partiklar. Tyst nattläge och app- och röststyrning gör den enkel att ha igång där du sover.",
    valueHook: "Renare luft med tyst nattläge",
    valueStatement: "Levoit Core 200S är en smart luftrenare för dig som vill ha renare luft i sovrum eller mindre rum. Det 3-lagers HEPA-filtret fångar damm, pollen och partiklar i luften, och det tysta nattläget med dämpad display gör att den kan stå på medan du sover. Med app- och röststyrning plus timer är den enkel att styra i vardagen. Amazon visar 4,6 av 5 från 31 901 omdömen, och köpare lyfter framför allt den tysta driften och den fräschare luftkänslan.",
    passFor: [
      "Vill ha renare luft i sovrum eller mindre rum.",
      "Är känslig för damm och pollen och vill fånga partiklar i luften.",
      "Gillar tyst nattläge och smart app- eller röststyrning.",
    ],
    caution: "Den är gjord för sovrum och mindre rum, så för stora ytor räcker den inte till. Tänk också på att HEPA-filtret är en förbrukningsvara som behöver bytas med jämna mellanrum för bästa effekt.",
    usageGuidance: {
      title: "Så får du ut mest av den",
      text: "Ställ luftrenaren fritt en bit från väggen i rummet du vistas mest i, kör nattläget när du sover och håll koll på filterindikatorn så att filtret byts i tid.",
    },
    verdict: "Prisvärd, smart luftrenare för renare luft i sovrum och mindre rum.",
    amazonSummary: "Amazon visar 4,6 av 5 från 31 901 omdömen. Köpare beskriver luften som fräschare och driften som mycket tyst, men den passar bäst i mindre rum.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Hur stort rum passar Levoit Core 200S för?",
        answer: "Den är gjord för sovrum och mindre rum. För större ytor behöver du en modell med högre kapacitet.",
      },
      {
        question: "Är luftrenaren tyst på natten?",
        answer: "Ja, nattläget är gjort för tyst drift med dämpad display, så den kan stå på medan du sover. Många köpare lyfter just den tysta driften.",
      },
      {
        question: "Hur ofta behöver filtret bytas?",
        answer: "HEPA-filtret är en förbrukningsvara som behöver bytas med jämna mellanrum. Appen och filterindikatorn hjälper dig hålla koll på när det är dags.",
      },
    ],
    reviewSectionId: "levoit-core-200s-recensioner",
    reviewFormId: "levoit-core-200s-skriv-recension",
    targetKeyword: "luftrenare",
    metaTitle: "Levoit Core 200S luftrenare – tyst & smart | Elins val",
    metaDescription: "Elin går igenom Levoit Core 200S: en kompakt smart luftrenare med HEPA-filter för renare luft i sovrummet (4,6 av 5, 31 901 omdömen) – tyst nattläge och app-styrning.",
    relatedLinks: [
      {
        href: "/halsa/aromdiffuser",
        label: "Aromdiffuser",
        text: "Skön doft och lugn stämning hemma.",
      },
      {
        href: "/halsa/solnedgangslampa",
        label: "Solnedgångslampa",
        text: "Mjukt ljus för en lugnare kväll.",
      },
      {
        href: "/guider/tyst-flakt-sovrum",
        label: "Guide",
        text: "Tyst fläkt för sovrummet – vilken ska du välja?",
      },
    ],
  },
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
  {
    productSlug: solnedgangslampaProduct.slug,
    href: "/halsa/solnedgangslampa",
    cardBadge: "Viral aesthetic",
    cardHook: "Badar rummet i gyllene sunset-sken - på en knapp.",
    cardImage: "/products/solnedgangslampa/solnedgangslampa-thumbnail.webp",
    cardImageAlt: "Solnedgångslampa som kastar ett gyllene sunset-sken på väggen",
    product: solnedgangslampaProduct,
    badge: "Smart sommarro",
    headline: "Solnedgångslampa - drömmigt sunset-sken hemma",
    shortBody:
      "En viral sunset-projektor som badar rummet i varmt gyllene sken - 24 färger, fjärrkontroll och justerbar höjd. Drömmig mys på sekunder.",
    valueHook: "Förvandla rummet till en gyllene solnedgång - på en knapp.",
    valueStatement:
      "Solnedgångslampan är en av de mest virala aesthetic-prylarna just nu - den projicerar ett varmt, gyllene solnedgångssken över väggen och badar hela rummet i drömmig stämning. Med 24 färger, fyra ljuslägen och fjärrkontroll byter du lätt mellan solnedgång, regnbåge och lugna toner, och stativet är justerbart (25-37 cm) och USB-drivet. 4,2 av 5 från över 750 omdömen - köparna älskar stämningen och hur snygg den är för bilder och stories. Den syns bäst i ett nedsläckt rum. Ett prisvärt, scroll-stoppande sätt att fixa mys på sekunder.",
    passFor: [
      "Vill skapa en drömmig, mysig stämning hemma på sommarkvällen.",
      "Gillar snygg aesthetic-belysning för bilder, stories och reels.",
      "Vill ha många färger och lägen styrda med fjärrkontroll.",
    ],
    caution:
      "Den syns bäst i ett nedsläckt rum - i starkt dagsljus blir effekten svagare. Ett par köpare har haft problem med fjärrkontrollen eller hållbarheten över tid. Det är dekorationsbelysning, inte en huvudljuskälla.",
    verdict:
      "Prisvärt och scroll-stoppande - förvandlar rummet till en gyllene solnedgång på sekunder.",
    amazonSummary:
      "Amazon visar 4,2 av 5 från 753 omdömen. Köparna lyfter den mysiga, drömmiga stämningen, de många färgerna via fjärrkontroll och hur snygg den är för bilder och stories - några noterar att ljuset syns bäst i ett nedsläckt rum.",
    amazonQuotes: [
      {
        text: "Schysst lampa som ger ett härligt ljus.",
        attribution: "Köpare, Amazon (Sverige)",
      },
      {
        text: "Creates a cozy atmosphere with beautiful colors and soft lighting. Looks amazing at night!",
        attribution: "Luqman, Amazon",
      },
      {
        text: "Svagt ljus, fjärrkontrollen funkar bara ibland.",
        attribution: "Hjalmar, Amazon (Sverige)",
      },
    ],
    faqItems: [
      {
        question: "Syns effekten i dagsljus?",
        answer:
          "Den syns bäst i ett nedsläckt eller dämpat rum. I starkt dagsljus blir solnedgångseffekten svagare.",
      },
      {
        question: "Hur byter jag färg och läge?",
        answer:
          "Med den medföljande fjärrkontrollen växlar du mellan 24 färger och fyra ljuslägen, och justerar ljusstyrkan.",
      },
      {
        question: "Hur driver jag lampan?",
        answer:
          "Den drivs via USB-kabel, och stativet kan justeras i höjd från 25 till 37 cm.",
      },
    ],
    reviewSectionId: "solnedgangslampa-recensioner",
    reviewFormId: "solnedgangslampa-skriv-recension",
    targetKeyword: "solnedgångslampa",
    metaTitle: "Solnedgångslampa - viral sunset-lampa i test | Elins val",
    metaDescription:
      "Elin går igenom den virala solnedgångslampan: gyllene sunset-sken, 24 färger och fjärrkontroll för drömmig mys (4,2 av 5, 750+ omdömen) - och vad du bör veta.",
    relatedLinks: [
      {
        href: "/halsa/aromdiffuser",
        label: "Aromadiffuser",
        text: "Lägg till doft och varmt sken för extra mys.",
      },
      {
        href: "/halsa/kobo-clara-bw",
        label: "Kobo Clara BW",
        text: "Läs en bok i det mysiga skenet.",
      },
    ],
  },
  {
    productSlug: miniProjektorProduct.slug,
    href: "/halsa/mini-projektor",
    cardBadge: "Bärbar bio",
    cardHook: "Film på väggen var du vill - 4 800+ omdömen, topp-2 projektor.",
    cardImage: "/products/mini-projektor/mini-projektor-thumbnail.webp",
    cardImageAlt: "Mini-projektor som visar film på väggen i ett mysigt rum",
    product: miniProjektorProduct,
    badge: "Smart sommarro",
    headline: "Mini-projektor - bärbar bio för sommarkvällen",
    shortBody:
      "En kompakt mini-projektor med WiFi 6, Bluetooth och Android - film på väggen hemma eller mysig utomhusbio i trädgården. Native 720p, 180° vridbar.",
    valueHook: "Bärbar bio - film på väggen, hemma eller under stjärnorna.",
    valueStatement:
      "Den här mini-projektorn är en av de mest sålda på Amazon - 4,3 av 5 från över 4 800 omdömen och topp-2 bland projektorer. Den är liten, portabel och smart: WiFi 6, Bluetooth 5.4, inbyggt Android och en 5W-högtalare, så du streamar film och serier direkt på väggen utan extra prylar. Automatisk keystone och 180° vridbart fäste gör den enkel att rikta mot vägg eller tak. Native-upplösningen är 720p (med stöd för 4K-filer) och den syns bäst i mörker. Köparna lyfter den skarpa bilden och priset - en scroll-stoppande pryl för hemmabio och mysig utomhusbio i sommarkvällen.",
    passFor: [
      "Vill ha bärbar hemmabio - film på väggen eller taket var du vill.",
      "Drömmer om mysig utomhusbio i trädgården på sommarkvällen.",
      "Vill ha WiFi, Bluetooth och Android-appar i en liten, prisvärd pryl.",
    ],
    caution:
      "Native-upplösningen är 720p - den spelar upp 4K-filer men projicerar i 720p, vilket räcker gott för film och serier men inte är skarp 4K-bild. Den syns bäst i ett mörkt rum eller på kvällen. Inbyggda högtalaren är liten (5W) - koppla en Bluetooth-högtalare för biokänsla.",
    verdict:
      "Prisvärd och scroll-stoppande - hemmabio och utomhusbio i en liten, smart pryl.",
    amazonSummary:
      "Amazon visar 4,3 av 5 från 4 802 omdömen och produkten ligger topp-2 bland projektorer. Köparna lyfter den skarpa bilden och fina färgerna för priset, att den är lätt att komma igång med (Android, WiFi, Bluetooth) och att den är liten och portabel - några påminner om att den syns bäst i mörker.",
    amazonQuotes: [
      {
        text: "Riktigt bra projektor, bra bild, bra och högt ljud. Fina färger, lätt att komma igång.",
        attribution: "H, Amazon (Sverige)",
      },
      {
        text: "Mycket bra för det priset.",
        attribution: "Emil, Amazon (Sverige)",
      },
      {
        text: "Perfect for the price.",
        attribution: "Dejan, Amazon (Sverige)",
      },
    ],
    faqItems: [
      {
        question: "Är det en riktig 4K-projektor?",
        answer:
          "Nej. Den spelar upp 4K-filer men projicerar i native 720p. Bilden räcker gott för film och serier, men det är inte skarp 4K-upplösning.",
      },
      {
        question: "Behöver jag en separat enhet för att streama?",
        answer:
          "Nej, den har inbyggt Android, WiFi 6 och Bluetooth, så du kan streama appar direkt. Du kan även koppla telefon, USB eller HDMI.",
      },
      {
        question: "Funkar den utomhus?",
        answer:
          "Ja, den är liten och portabel och passar för utomhusbio på kvällen - men den syns bäst när det är mörkt.",
      },
    ],
    reviewSectionId: "mini-projektor-recensioner",
    reviewFormId: "mini-projektor-skriv-recension",
    targetKeyword: "mini-projektor bäst i test",
    metaTitle: "Mini-projektor bäst i test - portabel WiFi-projektor | Elins val",
    metaDescription:
      "Elin går igenom den populära mini-projektorn: WiFi 6, Bluetooth, Android och 180° vridbar för hemmabio och utomhusbio (4,3 av 5, 4 800+ omdömen) - och vad du bör veta om 720p.",
    relatedLinks: [
      {
        href: "/halsa/solnedgangslampa",
        label: "Solnedgångslampa",
        text: "Sätt stämningen med ett varmt sunset-sken.",
      },
      {
        href: "/halsa/aromdiffuser",
        label: "Aromadiffuser",
        text: "Lägg till doft och mys till filmkvällen.",
      },
    ],
  },
  {
    productSlug: stjarnprojektorProduct.slug,
    href: "/halsa/stjarnprojektor",
    cardBadge: "Viral aesthetic",
    cardHook: "Förvandlar taket till en drömmig stjärnhimmel - 12 galaxskivor.",
    cardImage: "/products/stjarnprojektor/stjarnprojektor-thumbnail.webp",
    cardImageAlt: "Stjärnprojektor som projicerar en galax på sovrumstaket",
    product: stjarnprojektorProduct,
    badge: "Smart sommarro",
    headline: "Stjärnprojektor - en galaxhimmel i rummet",
    shortBody:
      "En viral galaxprojektor som förvandlar taket till en stjärnhimmel - 12 HD-skivor, 360° vridbar och timer. Drömmig mys på sekunder.",
    valueHook: "Förvandla taket till en stjärnhimmel - på sekunder.",
    valueStatement:
      "Den här galax-/stjärnprojektorn är en av de mest virala aesthetic-prylarna - den projicerar en drömmig stjärnhimmel över taket och väggarna med 12 utbytbara HD-skivor (galaxer, nebulosor, Vintergatan, måne och mer). Det 360° vridbara fästet låter dig rikta den mot tak eller vägg, och timern (1/2/4 h) stänger av den automatiskt. 4,1 av 5 från 1 800 omdömen och #1 bland Children's Mood Lights - köparna gillar den drömmiga stämningen och variationen i motiven. Skärpan beror på avståndet och den syns bäst i mörker. Ett scroll-stoppande, prisvärt sätt att fixa en magisk galaxhimmel hemma.",
    passFor: [
      "Vill förvandla taket till en drömmig stjärnhimmel hemma.",
      "Gillar aesthetic-belysning för mys, fester och snygga reels.",
      "Vill ha variation med många galax- och nebulosaskivor.",
    ],
    caution:
      "Bilden blir skarpast på rätt avstånd - ställ projektorn så att fokus stämmer, annars kan stjärnorna se lite suddiga ut. Den syns bäst i ett helt mörkt rum. Drivs via USB-C.",
    verdict:
      "Scroll-stoppande och prisvärd - en drömmig galaxhimmel i rummet på sekunder.",
    amazonSummary:
      "Amazon visar 4,1 av 5 från 1 800 omdömen och produkten är #1 bland Children's Mood Lights. Köparna lyfter den drömmiga stjärnhimlen, de många utbytbara skivorna och timern - några påminner om att skärpan beror på avståndet och att den syns bäst i mörker.",
    amazonQuotes: [
      {
        text: "Fungerar perfekt, till barnbarn som ligger och tittar på himlen.",
        attribution: "Bertil, Amazon (Sverige)",
      },
      {
        text: "Verkar göra sin grej och det fanns massor av skivor med olika motiv, det var ett plus.",
        attribution: "Camilla, Amazon (Sverige)",
      },
      {
        text: "Blurry image, can't hardly see them.",
        attribution: "Camilla B, Amazon (Sverige)",
      },
    ],
    faqItems: [
      {
        question: "Hur får jag en skarp bild?",
        answer:
          "Skärpan beror på avståndet. Ställ projektorn på rätt avstånd från taket eller väggen och justera fokus tills stjärnorna blir skarpa. Den syns bäst i mörker.",
      },
      {
        question: "Kan jag byta motiv?",
        answer:
          "Ja, den kommer med 12 utbytbara HD-skivor med olika galaxer, nebulosor och måne, så du kan variera stjärnhimlen.",
      },
      {
        question: "Stänger den av sig själv?",
        answer:
          "Ja, den har en timer på 1, 2 eller 4 timmar och stängs av automatiskt. Den drivs via USB-C.",
      },
    ],
    reviewSectionId: "stjarnprojektor-recensioner",
    reviewFormId: "stjarnprojektor-skriv-recension",
    targetKeyword: "stjärnprojektor",
    metaTitle: "Stjärnprojektor - viral galaxprojektor i test | Elins val",
    metaDescription:
      "Elin går igenom den virala stjärnprojektorn: 12 HD-galaxskivor, 360° vridbar och timer för en drömmig stjärnhimmel (4,1 av 5, 1 800+ omdömen).",
    relatedLinks: [
      {
        href: "/halsa/solnedgangslampa",
        label: "Solnedgångslampa",
        text: "Byt galaxhimlen mot ett varmt sunset-sken.",
      },
      {
        href: "/halsa/mini-projektor",
        label: "Mini-projektor",
        text: "Visa film på väggen under stjärnhimlen.",
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

// Träningsprodukter som använder samma produktsida (SommarProductReviewPage)
// men INTE visas i de säsongsbetonade sommar-sektionerna.
export const traningsPicks: SommarPick[] = [
  {
    productSlug: ericFlagViktvastProduct.slug,
    product: ericFlagViktvastProduct,
    href: "/traning/viktvast",
    cardBadge: "Justerbar vikt",
    cardHook: "Löstagbara järnvikter och tajt kardborrespänne för stabil passform.",
    cardImage: "/products/eric-flag-viktvast/viktvast-thumbnail.webp",
    cardImageAlt: "Eric Flag viktväst med justerbar vikt och löstagbara järnvikter",
    badge: "Elins val för hemmaträning",
    headline: "Eric Flag viktväst – justera tyngden själv",
    shortBody: "En justerbar viktväst med löstagbara järnvikter som ökar belastningen vid promenad och hemmaträning. Kardborrespännet håller västen tajt och stabil mot kroppen.",
    valueHook: "Justerbar viktväst för mer belastning",
    valueStatement: "Eric Flag viktväst är ett enkelt sätt att öka belastningen i vardagen och i träningen. Du justerar tyngden genom att lägga till eller ta bort järnvikter, och kardborrespännet håller västen tajt mot kroppen så att den sitter stabilt under rörelse. Amazon visar 4,7 av 5 från 1 237 omdömen, och köpare lyfter framför allt den stabila passformen och flexibiliteten att ändra vikten.",
    passFor: [
      "Vill öka belastningen vid promenad, gång eller hemmaträning.",
      "Gillar att kunna justera tyngden med löstagbara vikter.",
      "Vill ha en väst som sitter tajt och stabilt under rörelse.",
    ],
    caution: "Full vikt kan kännas mycket i början, så börja lägre och öka gradvis. Passform och storlek upplevs olika beroende på kroppstyp – kontrollera måtten innan du väljer.",
    usageGuidance: {
      title: "Så använder du den smart",
      text: "Börja med en lägre vikt och spänn kardborrebandet så att västen sitter tajt utan att klämma. Öka tyngden gradvis i takt med att du blir starkare.",
    },
    verdict: "Stabil, justerbar viktväst för promenad och hemmaträning.",
    amazonSummary: "Amazon visar 4,7 av 5 från 1 237 omdömen. Köpare beskriver passformen som stabil och uppskattar att vikten går att justera, men full vikt kan kännas mycket i början.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Hur justerar jag vikten på västen?",
        answer: "Du lägger till eller tar bort de löstagbara järnvikterna för att ändra tyngden. Börja gärna lägre och öka gradvis när du blir starkare.",
      },
      {
        question: "Sitter viktvästen stabilt under träning?",
        answer: "Ja, kardborrespännet håller västen tajt mot kroppen så att den sitter stabilt under rörelse. Många köpare lyfter just den stabila passformen.",
      },
      {
        question: "Passar viktvästen för promenad?",
        answer: "Ja, den används ofta för att öka belastningen vid promenad och gång. Börja med en lägre vikt tills du vänjer dig vid känslan.",
      },
    ],
    reviewSectionId: "eric-flag-viktvast-recensioner",
    reviewFormId: "eric-flag-viktvast-skriv-recension",
    targetKeyword: "viktväst",
    metaTitle: "Eric Flag viktväst – justerbar tyngd | Elins val",
    metaDescription: "Elin går igenom Eric Flag viktväst: löstagbara järnvikter och tajt kardborrespänne för stabil passform (4,7 av 5, 1 237 omdömen) – för promenad och hemmaträning.",
    relatedLinks: [
      {
        href: "/traning/hantlar",
        label: "Hantlar",
        text: "Bygg styrka med justerbara vikter.",
      },
      {
        href: "/traning/kettlebell",
        label: "Kettlebell",
        text: "Mångsidig styrka och kondition.",
      },
      {
        href: "/traning/traningsband",
        label: "Träningsband",
        text: "Mångsidig styrketräning hemma.",
      },
    ],
  },
  {
    productSlug: portentumHoppRepProduct.slug,
    product: portentumHoppRepProduct,
    href: "/traning/hopprep",
    cardBadge: "Kondition",
    cardHook: "Kullager och justerbar vajer för jämn, snabb rotation.",
    cardImage: "/products/portentum-hopprep/hopprep-thumbnail.webp",
    cardImageAlt: "PORTENTUM hopprep med kullager och halkfritt skumgrepp",
    badge: "Elins prisvärda val",
    headline: "PORTENTUM hopprep – smidig kondition hemma",
    shortBody: "Ett prisvärt hopprep med kullager och justerbar stålvajer för jämn, snabb rotation. Halkfritt skumgrepp gör det skönt att hålla i, både hemma och på gymmet.",
    valueHook: "Prisvärt hopprep för kondition hemma",
    valueStatement: "PORTENTUM hopprep är ett enkelt, prisvärt sätt att få in mer kondition i vardagen. Kullagren ger en jämn och snabb rotation, den justerbara stålvajern kapar du till din egen längd och det halkfria skumgreppet sitter skönt även när händerna blir svettiga. Amazon visar 4,4 av 5 från 911 omdömen, och köpare lyfter framför allt den jämna rotationen och det stadiga greppet.",
    passFor: [
      "Vill ha ett prisvärt sätt att träna kondition hemma eller på gymmet.",
      "Gillar jämn, snabb rotation tack vare kullager.",
      "Vill kunna justera repets längd efter sin egen kroppslängd.",
    ],
    caution: "Vajern behöver kapas till rätt längd vid första användning, och stålvajern passar bäst på jämnt underlag eftersom grov asfalt sliter mer. Börja i lugnt tempo tills tekniken sitter.",
    usageGuidance: {
      title: "Så kommer du igång",
      text: "Ställ dig mitt på repet och kapa vajern så att handtagen når ungefär till armhålorna. Börja med korta intervaller på jämnt underlag och öka tempot när tekniken sitter.",
    },
    verdict: "Prisvärt, smidigt hopprep för kondition och uppvärmning.",
    amazonSummary: "Amazon visar 4,4 av 5 från 911 omdömen. Köpare beskriver rotationen som jämn och greppet som halkfritt, men vajern behöver kapas till rätt längd först.",
    amazonQuotes: [],
    faqItems: [
      {
        question: "Hur justerar jag längden på hopprepet?",
        answer: "Ställ dig mitt på vajern och kapa den så att handtagen når ungefär upp till armhålorna. Då får du en längd som passar din kroppslängd.",
      },
      {
        question: "Passar repet för nybörjare?",
        answer: "Ja, börja i lugnt tempo med korta intervaller tills tekniken sitter. Kullagren gör rotationen jämn vilket underlättar i början.",
      },
      {
        question: "Kan jag hoppa utomhus med det?",
        answer: "Det går bra på jämnt underlag. Tänk på att grov asfalt sliter mer på stålvajern, så ett jämnt golv eller en matta håller repet längre.",
      },
    ],
    reviewSectionId: "portentum-hopprep-recensioner",
    reviewFormId: "portentum-hopprep-skriv-recension",
    targetKeyword: "hopprep",
    metaTitle: "PORTENTUM hopprep – prisvärt med kullager | Elins val",
    metaDescription: "Elin går igenom PORTENTUM hopprep: justerbar stålvajer, kullager för jämn rotation och halkfritt grepp (4,4 av 5, 911 omdömen) – smidig kondition hemma.",
    relatedLinks: [
      {
        href: "/traning/traningsband",
        label: "Träningsband",
        text: "Mångsidig styrketräning hemma.",
      },
      {
        href: "/traning/yogamatta",
        label: "Yogamatta",
        text: "Skönt underlag för golvövningar.",
      },
      {
        href: "/traning/hantlar",
        label: "Hantlar",
        text: "Bygg styrka med justerbara vikter.",
      },
    ],
  },
];

export function getTraningsPickBySlug(productSlug: string) {
  return traningsPicks.find((pick) => pick.productSlug === productSlug);
}
