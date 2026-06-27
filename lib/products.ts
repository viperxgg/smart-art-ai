export type Product = {
  slug: string;
  title: string;
  category: ProductCategorySlug;
  asin: string;
  brand: string;
  price: string;
  badges: string[];
  image: string;
  imageAlt: string;
  images: ProductImage[];
  amazonUrl: string;
  pageHref?: string;
  summary: string;
  evaluation: ProductEvaluation;
  specSectionEyebrow: string;
  specSectionTitle: string;
  specs: ProductSpec[];
  amazonReviewSignal: AmazonReviewSignal;
  ugcVideos: ProductVideo[];
  uses: string[];
  peopleLike: string[];
  honestCheck: string[];
  comments: ProductComment[];
};

export type ProductCategorySlug = "traning" | "halsa" | "skonhet";

export type ProductCategory = {
  slug: ProductCategorySlug;
  label: string;
  href: string;
  description: string;
};

export type ProductImage = {
  src: string;
  alt: string;
  label: string;
};

export type ProductEvaluation = {
  headline: string;
  intro: string;
  verdict: string;
  checks: {
    label: string;
    text: string;
  }[];
};

export type ProductSpec = {
  label: string;
  caption: string;
  value: string;
};

export type AmazonReviewSignal = {
  sourceLabel: string;
  sourceUrl: string;
  ratingSummary: string;
  highlights: string[];
  cautions: string[];
};

export type ProductComment = {
  id: string;
  name: string;
  rating: number;
  context: string;
  text: string;
  date: string;
};

export type ProductVideo = {
  src: string;
  poster: string;
  title: string;
  hook: string;
  note: string;
};

export const featuredProduct: Product = {
  slug: "traningsband-4-nivaer",
  title: "Träningsband med 4 motståndsnivåer",
  category: "traning",
  asin: "B0CQXFWMH5",
  brand: "WuGU",
  price: "Se aktuellt pris på Amazon",
  badges: ["4 motståndsnivåer", "Lätt att börja", "Tar liten plats"],
  image: "/products/resistance-bands/elin-resistance-band-thumbnail.webp",
  imageAlt: "Person som tränar hemma med lila träningsband",
  images: [
    {
      src: "/products/resistance-bands/elin-resistance-band-thumbnail.webp",
      alt: "Person som tränar hemma med ett lila träningsband",
      label: "Elin valde",
    },
    {
      src: "/products/resistance-bands/elin-band-stretch.webp",
      alt: "Person som stretchar armarna med ett lila träningsband hemma",
      label: "Armar",
    },
    {
      src: "/products/resistance-bands/elin-band-black.webp",
      alt: "Person som använder ett svart träningsband för rörlighet",
      label: "Rörlighet",
    },
    {
      src: "/products/resistance-bands/elin-band-levels.webp",
      alt: "Fyra träningsband i lila, svart, rött och gult",
      label: "4 nivåer",
    },
  ],
  amazonUrl: "https://amzn.to/4xuLEfd",
  pageHref: "/traning/traningsband-naturlatex",
  summary:
    "Mycket träningsband för en låg peng: fyra motståndsnivåer i 100% naturlatex, utan premiumpris.",
  evaluation: {
    headline: "Elins snabba känsla",
    intro:
      "Här börjar vi inte med att upprepa Amazon-texten. Vi tittar på vilken vardagssituation produkten passar i, varför den känns lätt att förstå och vad man bör dubbelkolla innan man klickar vidare.",
    verdict:
      "Bra kandidat för dig som vill träna hemma utan maskiner. Mindre rätt om du förväntar dig samma känsla som tung gymutrustning eller behöver dörrankare direkt i paketet.",
    checks: [
      {
        label: "Problemet den löser",
        text: "Gör det enklare att få in styrka, rörlighet och aktivering hemma utan att köpa stora redskap.",
      },
      {
        label: "Varför Elin fastnade",
        text: "Fyra nivåer gör produkten lätt att förstå: börja lätt, byt band när övningen blir för enkel, eller kombinera band för mer motstånd.",
      },
      {
        label: "Det vi inte vill överdriva",
        text: "Kvalitet och motstånd kan upplevas olika beroende på övning, teknik och träningsnivå. Kontrollera alltid bandens skick före användning.",
      },
    ],
  },
  specSectionEyebrow: "Motståndsnivåer",
  specSectionTitle: "Fyra band, fyra steg",
  specs: [
    { label: "Gul", caption: "X-light", value: "8-15 lb" },
    { label: "Röd", caption: "Light", value: "15-35 lb" },
    { label: "Svart", caption: "Medium", value: "25-65 lb" },
    { label: "Lila", caption: "Heavy", value: "35-85 lb" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Synliga verifierade Amazon-recensioner",
    sourceUrl:
      "https://www.amazon.se/-/en/Exercise-Resistance-Different-Strength-Training/dp/B0CQXFWMH5",
    ratingSummary: "Amazon visar 4,5 av 5 från 625 globala betyg på produktsidan.",
    highlights: [
      "Flera kunder beskriver banden som prisvärda och enkla att använda.",
      "En svensk verifierad köpare lyfter att banden känns som andra träningsband men billigare.",
      "En annan svensk recension nämner hög kvalitet och olika styrkor.",
      "Korta omdömen från verifierade köp säger att produkten fungerar som förväntat.",
    ],
    cautions: [
      "Minst en svensk verifierad köpare rapporterar att fel variant eller fel varor levererades.",
      "En längre internationell recension uppskattar latexkvaliteten men saknar dörrankare och tycker förvaringspåsen kunde vara större.",
    ],
  },
  ugcVideos: [
    {
      src: "/products/resistance-bands/ugc/band-skillnad.mp4",
      poster: "/products/resistance-bands/ugc/band-skillnad-poster.webp",
      title: "Bandet som gör skillnad",
      hook: "Ett enkelt band kan göra hemmaträningen tydligare.",
      note: "Kort UGC-klipp som visar hur produkten kan användas i vardagen.",
    },
    {
      src: "/products/resistance-bands/ugc/sluta-squats.mp4",
      poster: "/products/resistance-bands/ugc/sluta-squats-poster.webp",
      title: "Fokus på rumpan",
      hook: "När squats inte räcker för rätt kontakt.",
      note: "Visar hur bandet kan ge mer riktad aktivering i övningen.",
    },
    {
      src: "/products/resistance-bands/ugc/tre-ovningar.mp4",
      poster: "/products/resistance-bands/ugc/tre-ovningar-poster.webp",
      title: "3 snabba övningar",
      hook: "Tre enkla sätt att använda bandet hemma.",
      note: "En praktisk översikt för den som vill se användning före köp.",
    },
  ],
  uses: [
    "Snabb hemmaträning för ben, armar, axlar, rygg och bål.",
    "Stretch, rehab-liknande övningar och rörlighetsträning med låg tröskel.",
    "Aktivering före annan träning, särskilt höfter, säte, rygg och axlar.",
    "Progression genom att byta nivå eller kombinera band för mer motstånd.",
  ],
  peopleLike: [
    "Känslan av att kunna börja direkt, utan att behöva bygga ett helt hemmagym.",
    "Fyra färger gör valet enkelt och minskar osäkerheten kring motstånd.",
    "Tar lite plats och passar hemma, på gymmet, i yogastudio eller på resa.",
  ],
  honestCheck: [
    "Kontrollera alltid bandens skick före användning.",
    "Latex kan vara fel material för personer med latexkänslighet.",
    "Passar bäst för lätt till medelhård träning, inte som full ersättning för tung styrketräning.",
    "Setet verkar inte marknadsföras med dörrankare, vilket vissa hemmatränande kan sakna.",
  ],
  comments: [],
};

export const jakkofoxxLoopbandProduct: Product = {
  slug: "jakkofoxx-loopband",
  title: "JAKKOFOXX loop band - set med 5 motståndsnivåer",
  category: "traning",
  asin: "B097JQYZR1",
  brand: "JAKKOFOXX",
  price: "Se aktuellt pris på Amazon",
  badges: ["5 nivåer", "Ben & rumpa", "Mest beprövad"],
  image: "/products/loopband-jakkofoxx/loopband-jakkofoxx-thumbnail.webp",
  imageAlt:
    "JAKKOFOXX loop band med fem motståndsnivåer från X-light till X-heavy",
  images: [
    {
      src: "/products/loopband-jakkofoxx/loop-1-levels.webp",
      alt: "JAKKOFOXX loop band - fem motståndsnivåer från X-light till X-heavy",
      label: "5 nivåer",
    },
    {
      src: "/products/loopband-jakkofoxx/loop-2-glute.webp",
      alt: "Kvinna tränar rumpa och ben med JAKKOFOXX loop band",
      label: "Ben & rumpa",
    },
  ],
  amazonUrl: "https://amzn.to/3Srw43F",
  pageHref: "/traning/traningsband/loopband-jakkofoxx",
  summary:
    "Fem korta loop-band för ben, rumpa, höfter, pilates och rehab: kompakt, billigt och beprövat av tusentals Amazon-köpare.",
  evaluation: {
    headline: "Elins loop-band-val",
    intro:
      "JAKKOFOXX passar dig som vill ha flera motståndsnivåer för riktad benträning hemma eller på resan.",
    verdict:
      "Elins val för ben och rumpa - mest beprövade loop-bandet för pengarna.",
    checks: [],
  },
  specSectionEyebrow: "Loop-band",
  specSectionTitle: "JAKKOFOXX 5 nivåer",
  specs: [
    { label: "Typ", caption: "Format", value: "Korta loop-band, 30 cm" },
    { label: "Motstånd", caption: "Nivåer", value: "X-light till X-heavy" },
    { label: "Material", caption: "Band", value: "TPE" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3Srw43F",
    ratingSummary:
      "Amazon visar 4,4 av 5 från 8 138 recensioner och #3 i Resistance Bands.",
    highlights: [
      "Köpare lyfter de tydliga motståndsnivåerna.",
      "Setet är kompakt och enkelt att ta med.",
      "Passar bäst för ben, rumpa, höfter, pilates och rehab.",
    ],
    cautions: [
      "Det är korta loop-band, inte långa band för helkroppsstyrka.",
      "Gummiband kan rulla ihop vid tyngre benövningar.",
      "En mindre andel köpare tycker att spänsten avtar över tid.",
    ],
  },
  ugcVideos: [],
  uses: [
    "Riktad träning för ben, rumpa och höfter hemma.",
    "Pilates, uppvärmning och rehab-liknande övningar.",
    "Reseträning där utrustningen måste ta minimalt med plats.",
  ],
  peopleLike: [
    "Fem nivåer gör det lätt att börja mjukt och öka motståndet.",
    "Formatet är enkelt för glute bridges, sidogång och höftaktivering.",
    "Kompakt set som ryms i väskan.",
  ],
  honestCheck: [
    "Välj långa träningsband om du vill träna hela kroppen.",
    "TPE-band kan rulla mer på låren än tygband.",
    "Kontrollera alltid bandens skick före användning.",
  ],
  comments: [],
};

export const beurerMassagepistolProduct: Product = {
  slug: "beurer-mg-99-massagepistol",
  title: "Beurer MG 99 massagepistol",
  category: "halsa",
  asin: "BEURER_MG_99",
  brand: "Beurer",
  price: "Se aktuellt pris på Amazon",
  badges: ["Känt märke", "Kompakt", "Lätt i handen"],
  image: "/products/massage-guns/beurer-mg99-thumbnail.webp",
  imageAlt: "Beurer MG 99 massagepistol med utbytbara massagehuvuden",
  images: [
    {
      src: "/products/massage-guns/beurer-mg99-thumbnail.webp",
      alt: "Beurer MG 99 massagepistol med utbytbara massagehuvuden",
      label: "Beurer MG 99",
    },
    {
      src: "/products/massage-guns/beurer-mg99-table.webp",
      alt: "Beurer MG 99 massagepistol med massagehuvuden på ett ljust bord",
      label: "Tillbehör",
    },
    {
      src: "/products/massage-guns/beurer-mg99-neck.webp",
      alt: "Person som använder Beurer MG 99 massagepistol vid nacke och axel",
      label: "Nacke",
    },
    {
      src: "/products/massage-guns/beurer-mg99-therapy.webp",
      alt: "Beurer MG 99 massagepistol med tillbehör i hemmamiljö",
      label: "Hemma",
    },
  ],
  amazonUrl: "https://amzn.to/3Qe9xGL",
  pageHref: "/halsa/massagepistol/beurer-mg-99",
  summary:
    "Ett känt märke till ett oväntat vänligt pris: kompakt, lätt och tryggt utan premiumprislapp.",
  evaluation: {
    headline: "Det trygga märkesvalet",
    intro:
      "Beurer MG 99 passar dig som prioriterar ett känt varumärke, låg vikt och enkel användning.",
    verdict:
      "Ett tryggt val om du vill ha en nätt massagepistol, men mindre rätt om du behöver riktigt mjuk massage på känsliga punkter.",
    checks: [],
  },
  specSectionEyebrow: "Massagepistol",
  specSectionTitle: "Beurer MG 99",
  specs: [],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3Qe9xGL",
    ratingSummary: "Snittbetyg 4,4/5 på Amazon.",
    highlights: [],
    cautions: [],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const bdbkmgMassagepistolProduct: Product = {
  slug: "bdbkmg-massagepistol",
  title: "Muscle Massage Gun (BDBKMG)",
  category: "halsa",
  asin: "BDBKMG",
  brand: "BDBKMG",
  price: "Se aktuellt pris på Amazon",
  badges: ["99 lägen", "6 massagehuvuden", "Mest funktioner"],
  image: "/products/massage-guns/muscle-massage-gun-thumbnail.webp",
  imageAlt: "Person som använder en massagepistol på axeln hemma",
  images: [
    {
      src: "/products/massage-guns/muscle-massage-gun-thumbnail.webp",
      alt: "Person som använder en massagepistol på axeln hemma",
      label: "Muscle Massage Gun",
    },
    {
      src: "/products/massage-guns/muscle-massage-gun-kit.webp",
      alt: "Massagepistol med utbytbara massagehuvuden på ljust trä",
      label: "Tillbehör",
    },
    {
      src: "/products/massage-guns/muscle-massage-gun-shoulder.webp",
      alt: "Person som använder massagepistol på axeln",
      label: "Axel",
    },
    {
      src: "/products/massage-guns/muscle-massage-gun-lifestyle.webp",
      alt: "Massagepistol på bord med tillbehör i lugn hemmamiljö",
      label: "Hemma",
    },
  ],
  amazonUrl: "https://amzn.to/4vH0u0h",
  pageHref: "/halsa/massagepistol/kraftfull",
  summary:
    "Riktigt mycket pistol för pengarna: 99 lägen, 6 huvuden och tydlig kontroll för hemmabruk.",
  evaluation: {
    headline: "Mest för pengarna",
    intro:
      "BDBKMG passar dig som vill ha flest lägen, fler massagehuvuden och låg tröskel att justera styrkan.",
    verdict:
      "Ett prisvärt val om du prioriterar kraft och kontroll, men räkna med högre vikt.",
    checks: [],
  },
  specSectionEyebrow: "Massagepistol",
  specSectionTitle: "BDBKMG",
  specs: [],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4vH0u0h",
    ratingSummary: "Snittbetyg 4,4/5 på Amazon.",
    highlights: [],
    cautions: [],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const remingtonS8540Product: Product = {
  slug: "remington-s8540-plattang",
  title: "Remington S8540 Keratin Protect",
  category: "skonhet",
  asin: "REMINGTON_S8540",
  brand: "Remington",
  price: "Se aktuellt pris på Amazon",
  badges: ["Keratinplattor", "9 värmelägen", "Beprövat val"],
  image: "/products/hair-straighteners/remington-s8540-main.webp",
  imageAlt: "Remington S8540 Keratin Protect plattång på ljus marmoryta",
  images: [
    {
      src: "/products/hair-straighteners/remington-s8540-main.webp",
      alt: "Remington S8540 Keratin Protect plattång på ljus marmoryta",
      label: "S8540",
    },
    {
      src: "/products/hair-straighteners/remington-s8540-lifestyle.webp",
      alt: "Remington S8540 används framför spegel i ljus badrumsmiljö",
      label: "I bruk",
    },
    {
      src: "/products/hair-straighteners/remington-s8540-detail-real.webp",
      alt: "Remington S8540 Keratin Protect plattång med display och keramiska plattor",
      label: "Detalj",
    },
    {
      src: "/products/hair-straighteners/remington-s8540-counter.webp",
      alt: "Remington S8540 plattång på badrumsbänk med sladd och kam",
      label: "Badrum",
    },
    {
      src: "/products/hair-straighteners/remington-s8540.svg",
      alt: "Remington S8540 plattång i mjuk rosa miljö",
      label: "Produkt",
    },
    {
      src: "/products/hair-straighteners/remington-s8540-detail.svg",
      alt: "Detaljbild som visar fullstor plattång",
      label: "Fullstorlek",
    },
  ],
  amazonUrl: "https://amzn.to/4om1013",
  pageHref: "/skonhet/plattang/remington-s8540",
  summary:
    "Ett känt märke som skyddar håret till ett vänligt pris: keramik, keratin och 9 värmelägen.",
  evaluation: {
    headline: "Prisvärt vardagsval",
    intro:
      "Remington S8540 passar dig som vill ha märkeskänsla, hårskydd och flera värmelägen för hemmabruk.",
    verdict:
      "Ett tryggt, prisvärt vardagsval för alla hårtyper.",
    checks: [],
  },
  specSectionEyebrow: "Plattång",
  specSectionTitle: "Remington S8540",
  specs: [],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4om1013",
    ratingSummary: "4,5/5 baserat på 21 473 omdömen på Amazon.",
    highlights: [],
    cautions: [],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const remingtonMiniS2880Product: Product = {
  slug: "remington-mini-s2880-plattang",
  title: "Remington Mini S2880 On The Go",
  category: "skonhet",
  asin: "REMINGTON_S2880",
  brand: "Remington",
  price: "Se aktuellt pris på Amazon",
  badges: ["Resvänlig", "Kompakt", "För kort hår"],
  image: "/products/hair-straighteners/remington-mini-s2880-main.webp",
  imageAlt: "Remington Mini S2880 plattång på ljus marmoryta med blommor",
  images: [
    {
      src: "/products/hair-straighteners/remington-mini-s2880-main.webp",
      alt: "Remington Mini S2880 plattång på ljus marmoryta med blommor",
      label: "Mini S2880",
    },
    {
      src: "/products/hair-straighteners/remington-mini-s2880-detail.webp",
      alt: "Remington Mini S2880 plattång med lila plattor på mjukt tyg",
      label: "Detalj",
    },
    {
      src: "/products/hair-straighteners/remington-mini-s2880-lifestyle.webp",
      alt: "Remington Mini S2880 används för snabb hårstyling hemma",
      label: "I bruk",
    },
    {
      src: "/products/hair-straighteners/remington-mini-s2880.svg",
      alt: "Remington Mini S2880 kompakt plattång för resa",
      label: "Produkt",
    },
    {
      src: "/products/hair-straighteners/remington-mini-travel.svg",
      alt: "Kompakt reseplattång med mjuk rosa bakgrund",
      label: "Resa",
    },
  ],
  amazonUrl: "https://amzn.to/3RSmpDd",
  pageHref: "/skonhet/plattang/remington-mini-s2880",
  summary:
    "Riktigt smidig plattång för en låg peng: ultralätt, kompakt och enkel att ta med.",
  evaluation: {
    headline: "Smart litet fynd",
    intro:
      "Mini S2880 passar dig som reser, har lugg eller vill fixa kort hår snabbt utan fullstor plattång.",
    verdict:
      "Ett smart litet fynd för resan och snabba fix.",
    checks: [],
  },
  specSectionEyebrow: "Plattång",
  specSectionTitle: "Remington Mini S2880",
  specs: [],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3RSmpDd",
    ratingSummary: "4,1/5 baserat på 4 050 omdömen på Amazon.",
    highlights: [],
    cautions: [],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const panasonicEsEy30EpilatorProduct: Product = {
  slug: "panasonic-es-ey30-epilator",
  title: "Panasonic ES-EY30 epilator",
  category: "skonhet",
  asin: "PANASONIC_ES_EY30",
  brand: "Panasonic",
  price: "Se aktuellt pris på Amazon",
  badges: ["Wet/Dry", "Sladdlös", "Brett huvud"],
  image: "/products/epilators/panasonic-es-ey30-thumbnail.webp",
  imageAlt: "Panasonic ES-EY30 epilator i lila och vitt på ett ljust badrumsbord",
  images: [
    {
      src: "/products/epilators/panasonic-es-ey30-thumbnail.webp",
      alt: "Panasonic ES-EY30 epilator i lila och vitt på ett ljust badrumsbord",
      label: "Epilator",
    },
    {
      src: "/products/epilators/panasonic-es-ey30-wet-dry.webp",
      alt: "Panasonic ES-EY30 epilator mot en mjuk lila bakgrund med vattenkänsla",
      label: "Wet/Dry",
    },
    {
      src: "/products/epilators/panasonic-es-ey30-handheld.webp",
      alt: "Panasonic ES-EY30 epilator hållen i handen vid ett handfat",
      label: "I handen",
    },
  ],
  amazonUrl: "https://amzn.to/4olXGmN",
  pageHref: "/skonhet/epilator/panasonic-es-ey30",
  summary:
    "Marknadens mest sålda epilator: våt och torr, sladdlös och byggd för lenare resultat som håller längre än rakning.",
  evaluation: {
    headline: "Prisvärt premiumval",
    intro:
      "Panasonic ES-EY30 passar dig som vill ha en beprövad epilator för ben och kropp utan att gå upp till de dyraste paketen.",
    verdict:
      "Ett prisvärt premiumval för len, smidig epilering.",
    checks: [],
  },
  specSectionEyebrow: "Epilator",
  specSectionTitle: "Panasonic ES-EY30",
  specs: [],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4olXGmN",
    ratingSummary:
      "Mycket högt betyg och en av marknadens mest sålda epilatorer.",
    highlights: [],
    cautions: [],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const braunSilkEpil9Product: Product = {
  slug: "braun-silk-epil-9",
  title: "Braun Silk-épil 9 epilator",
  category: "skonhet",
  asin: "BRAUN_SILK_EPIL_9",
  brand: "Braun",
  price: "Se aktuellt pris på Amazon",
  badges: ["Premiumval", "MicroGrip", "Många tillbehör"],
  image: "/products/epilators/braun-silk-epil-9-thumbnail.webp",
  imageAlt: "Braun Silk-épil 9 epilator i vit och silver",
  images: [
    {
      src: "/products/epilators/braun-silk-epil-9-thumbnail.webp",
      alt: "Braun Silk-épil 9 epilator hållen i handen i ett ljust badrum",
      label: "I handen",
    },
    {
      src: "/products/epilators/braun-silk-epil-9-accessories-optimized.webp",
      alt: "Braun Silk-épil 9 epilator med fodral och tillbehör på en bricka",
      label: "Tillbehör",
    },
    {
      src: "/products/epilators/braun-silk-epil-9-kit.webp",
      alt: "Braun Silk-épil 9 epilator med rakhuvud och tillbehör vid handfat",
      label: "Detaljer",
    },
    {
      src: "/products/epilators/braun-silk-epil-9-wet-dry.webp",
      alt: "Braun Silk-épil 9 epilator mot en vit wet dry-bakgrund",
      label: "Wet/Dry",
    },
  ],
  amazonUrl: "https://amzn.to/4uXC2rs",
  pageHref: "/skonhet/epilator/braun-silk-epil-9",
  summary:
    "Premiumvalet för dig som vill ha MicroGrip-pincetter, pivoterande huvud, massagerulle och fler tillbehör.",
  evaluation: {
    headline: "Premiumvalet",
    intro:
      "Braun Silk-épil 9 passar dig som vill ha en mer påkostad epilator med fler tillbehör och längre trygghet.",
    verdict: "Premiumvalet – för dig som vill ha det yppersta.",
    checks: [],
  },
  specSectionEyebrow: "Epilator",
  specSectionTitle: "Braun Silk-épil 9",
  specs: [],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4uXC2rs",
    ratingSummary: "Mycket högt betyg, premiumklass.",
    highlights: [],
    cautions: [],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const remingtonProluxeAc9140Product: Product = {
  slug: "remington-proluxe-ac9140-hartork",
  title: "Remington PROluxe AC9140 hårtork",
  category: "skonhet",
  asin: "REMINGTON_AC9140",
  brand: "Remington",
  price: "Se aktuellt pris på Amazon",
  badges: ["2400 W", "AC-motor", "Salongskänsla hemma"],
  image: "/products/hair-dryers/remington-proluxe-ac9140-main.webp",
  imageAlt: "Remington PROluxe AC9140 hårtork med diffusor och munstycken",
  images: [
    {
      src: "/products/hair-dryers/remington-proluxe-ac9140-main.webp",
      alt: "Remington PROluxe AC9140 hårtork med diffusor och munstycken",
      label: "Tillbehör",
    },
    {
      src: "/products/hair-dryers/remington-proluxe-ac9140-floating.webp",
      alt: "Remington PROluxe AC9140 hårtork med munstycken och diffusor mot ljus bakgrund",
      label: "Luftflöde",
    },
    {
      src: "/products/hair-dryers/remington-proluxe-ac9140-detail.webp",
      alt: "Remington PROluxe AC9140 hårtork på marmorbord med diffusor",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4vcMbko",
  pageHref: "/skonhet/hartork/remington-proluxe-ac9140",
  summary:
    "Salongskvalitet hemma till ett förvånansvärt lågt pris: 2400 W AC-motor, jonteknik och diffusor.",
  evaluation: {
    headline: "Elins salongsval",
    intro:
      "Remington PROluxe AC9140 passar dig som vill ha snabb torkning, mer kraft och en salongslik känsla hemma.",
    verdict:
      "Elins val – mest hårtork för pengarna i premiumklass.",
    checks: [],
  },
  specSectionEyebrow: "Hårtork",
  specSectionTitle: "Remington PROluxe AC9140",
  specs: [],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4vcMbko",
    ratingSummary: "En av de mest sålda hårtorkarna, mycket högt betyg.",
    highlights: [],
    cautions: [],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const beurerHc25Product: Product = {
  slug: "beurer-hc-25-hartork",
  title: "Beurer HC 25 hårtork",
  category: "skonhet",
  asin: "BEURER_HC_25",
  brand: "Beurer",
  price: "Se aktuellt pris på Amazon",
  badges: ["Resvänlig", "Hopfällbar", "Budgetval"],
  image: "/products/hair-dryers/beurer-hc-25-main.webp",
  imageAlt: "Beurer HC 25 hårtork på ljus badrumsbänk",
  images: [
    {
      src: "/products/hair-dryers/beurer-hc-25-main.webp",
      alt: "Beurer HC 25 hårtork på ljus badrumsbänk",
      label: "HC 25",
    },
    {
      src: "/products/hair-dryers/beurer-hc-25-floating.webp",
      alt: "Beurer HC 25 hårtork mot mjuk studiobakgrund",
      label: "Kompakt",
    },
    {
      src: "/products/hair-dryers/beurer-hc-25-counter.webp",
      alt: "Beurer HC 25 hårtork på badrumsbänk",
      label: "Hemma",
    },
  ],
  amazonUrl: "https://amzn.to/4uvdJjE",
  pageHref: "/skonhet/hartork/beurer-hc-25",
  summary:
    "Mest hårtork för pengarna när du vill ha något lätt, hopfällbart och smidigt för resa.",
  evaluation: {
    headline: "Prisvärt reseval",
    intro:
      "Beurer HC 25 passar dig som vill ha en kompakt hårtork för resa och vardag utan att betala för salongskraft.",
    verdict: "Det prisvärda rese- och budgetvalet.",
    checks: [],
  },
  specSectionEyebrow: "Hårtork",
  specSectionTitle: "Beurer HC 25",
  specs: [],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4uvdJjE",
    ratingSummary: "En av de mest sålda hårtorkarna, mycket högt betyg.",
    highlights: [],
    cautions: [],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const babylissAs126eProduct: Product = {
  slug: "babyliss-as126e-varmluftsborste",
  title: "BaByliss AS126E varmluftsborste",
  category: "skonhet",
  asin: "BABYLISS_AS126E",
  brand: "BaByliss",
  price: "Se aktuellt pris på Amazon",
  badges: ["4-i-1", "Volym & brushing", "Elins val"],
  image: "/products/hot-air-brushes/babyliss-as126e-thumbnail.webp",
  imageAlt: "BaByliss AS126E varmluftsborste används för volym i håret",
  images: [
    {
      src: "/products/hot-air-brushes/babyliss-as126e-thumbnail.webp",
      alt: "BaByliss AS126E varmluftsborste används för volym i håret",
      label: "AS126E",
    },
    {
      src: "/products/hot-air-brushes/babyliss-as126e-gallery-1.webp",
      alt: "BaByliss AS126E varmluftsborste med stylingtillbehör",
      label: "Tillbehör",
    },
    {
      src: "/products/hot-air-brushes/babyliss-as126e-gallery-2.webp",
      alt: "BaByliss AS126E varmluftsborste med tillbehör på badrumsbänk",
      label: "Detalj",
    },
    {
      src: "/products/hot-air-brushes/babyliss-as126e-gallery-3.webp",
      alt: "BaByliss AS126E varmluftsborste och tillbehör på ljus bakgrund",
      label: "4-i-1",
    },
  ],
  amazonUrl: "https://amzn.to/49Xp7NQ",
  pageHref: "/skonhet/varmluftsborste/babyliss-as126e",
  summary:
    "En borste, fyra sätt att styla: 4-i-1-varmluftsborste för volym, brushing och enklare formning.",
  evaluation: {
    headline: "Elins mångsidiga val",
    intro:
      "BaByliss AS126E passar dig som vill ha flera stylingmöjligheter i ett verktyg utan att köpa premiumdyrt.",
    verdict: "Elins val – mångsidig 4-i-1 för volym och brushing.",
    checks: [],
  },
  specSectionEyebrow: "Varmluftsborste",
  specSectionTitle: "BaByliss AS126E",
  specs: [],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/49Xp7NQ",
    ratingSummary: "Populär modell, högt betyg.",
    highlights: [],
    cautions: [],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const remingtonAs7100Product: Product = {
  slug: "remington-as7100-varmluftsborste",
  title: "Remington AS7100 varmluftsborste",
  category: "skonhet",
  asin: "REMINGTON_AS7100",
  brand: "Remington",
  price: "Se aktuellt pris på Amazon",
  badges: ["Budgetval", "Kort hår", "Enkel styling"],
  image: "/products/hot-air-brushes/remington-as7100-thumbnail.webp",
  imageAlt: "Remington AS7100 varmluftsborste används för att forma kort hår",
  images: [
    {
      src: "/products/hot-air-brushes/remington-as7100-thumbnail.webp",
      alt: "Remington AS7100 varmluftsborste används för att forma kort hår",
      label: "AS7100",
    },
    {
      src: "/products/hot-air-brushes/remington-as7100-gallery-1.webp",
      alt: "Remington AS7100 varmluftsborste med borsttillbehör på marmorbänk",
      label: "Tillbehör",
    },
    {
      src: "/products/hot-air-brushes/remington-as7100-gallery-2.webp",
      alt: "Remington AS7100 varmluftsborste hålls på badrumsbänk",
      label: "Detalj",
    },
    {
      src: "/products/hot-air-brushes/remington-as7100-gallery-3.webp",
      alt: "Remington AS7100 varmluftsborste med extra borsthuvud",
      label: "2 borstar",
    },
  ],
  amazonUrl: "https://amzn.to/4e3IxTH",
  pageHref: "/skonhet/varmluftsborste/remington-as7100",
  summary:
    "Billigast i klassen och gjord för kort hår, lugg och bob när du vill forma snabbt.",
  evaluation: {
    headline: "Budgetvalet för kort hår",
    intro:
      "Remington AS7100 passar dig som vill ha ett enkelt och billigt stylingverktyg för kortare hår.",
    verdict: "Budgetvalet – billigast och bäst på kort hår.",
    checks: [],
  },
  specSectionEyebrow: "Varmluftsborste",
  specSectionTitle: "Remington AS7100",
  specs: [],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4e3IxTH",
    ratingSummary: "Många omdömen, bra betyg för priset.",
    highlights: [],
    cautions: [],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const babylissC325eProduct: Product = {
  slug: "babyliss-c325e-locktang",
  title: "BaByliss C325E locktång",
  category: "skonhet",
  asin: "BABYLISS_C325E",
  brand: "BaByliss",
  price: "Se aktuellt pris på Amazon",
  badges: ["Mest värde", "10 värmelägen", "Stora lockar"],
  image: "/products/curling-irons/babyliss-c325e-thumbnail.webp",
  imageAlt: "BaByliss C325E locktång används för att forma lockar",
  images: [
    {
      src: "/products/curling-irons/babyliss-c325e-gallery-1.webp",
      alt: "BaByliss C325E locktång i rosa och svart design",
      label: "Produkt",
    },
    {
      src: "/products/curling-irons/babyliss-c325e-gallery-2.webp",
      alt: "BaByliss C325E locktång hålls i badrumsmiljö",
      label: "Detalj",
    },
    {
      src: "/products/curling-irons/babyliss-c325e-gallery-3.webp",
      alt: "BaByliss C325E locktång på ljus stylingyta",
      label: "Miljö",
    },
  ],
  amazonUrl: "https://amzn.to/440odN4",
  pageHref: "/skonhet/locktang/babyliss-c325e",
  summary:
    "Stora, fina lockar till ett riktigt lågt pris: keramisk yta, 10 värmelägen och snabb uppvärmning.",
  evaluation: {
    headline: "Elins värdeval",
    intro:
      "BaByliss C325E passar dig som vill ha klassiska lockar till lågt pris och inte stör dig på lite manuell teknik.",
    verdict: "Elins val - mest locktång för pengarna.",
    checks: [],
  },
  specSectionEyebrow: "Locktång",
  specSectionTitle: "BaByliss C325E",
  specs: [],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/440odN4",
    ratingSummary: "Marknadens mest sålda locktång, mycket högt betyg.",
    highlights: [],
    cautions: [],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const tymoCurlproProduct: Product = {
  slug: "tymo-curlpro-locktang",
  title: "TYMO CURLPRO locktång",
  category: "skonhet",
  asin: "TYMO_CURLPRO",
  brand: "TYMO",
  price: "Se aktuellt pris på Amazon",
  badges: ["Automatisk", "Anti-tangle", "För långt hår"],
  image: "/products/curling-irons/tymo-curlpro-thumbnail.webp",
  imageAlt: "TYMO CURLPRO automatisk locktång används för att locka hår",
  images: [
    {
      src: "/products/curling-irons/tymo-curlpro-gallery-1.webp",
      alt: "TYMO CURLPRO automatisk locktång på ljus stylingyta",
      label: "Produkt",
    },
    {
      src: "/products/curling-irons/tymo-curlpro-gallery-2.webp",
      alt: "TYMO CURLPRO automatisk locktång i mjuk badrumsmiljö",
      label: "Detalj",
    },
    {
      src: "/products/curling-irons/tymo-curlpro-gallery-3.webp",
      alt: "TYMO CURLPRO automatisk locktång med hårslinga",
      label: "Miljö",
    },
  ],
  amazonUrl: "https://amzn.to/4xo0OT5",
  pageHref: "/skonhet/locktang/tymo-curlpro",
  summary:
    "Automatisk locktång för dig som vill ha effortless styling: roterar själv, har anti-tangle och jonteknik.",
  evaluation: {
    headline: "Automatiskt premiumval",
    intro:
      "TYMO CURLPRO passar dig som vill ha automatiska lockar utan mycket teknik, särskilt för längre eller tjockare hår.",
    verdict: "Premiumvalet - effortless för långt och tjockt hår.",
    checks: [],
  },
  specSectionEyebrow: "Locktång",
  specSectionTitle: "TYMO CURLPRO",
  specs: [],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4xo0OT5",
    ratingSummary: "Mycket högt betyg, en av de mest sålda.",
    highlights: [],
    cautions: [],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const amazonBasicsKettlebellProduct: Product = {
  slug: "amazon-basics-gjutjarns-kettlebell",
  title: "Amazon Basics gjutjärns-kettlebell",
  category: "traning",
  asin: "B076QJY2FN",
  brand: "Amazon Basics",
  price: "Se aktuellt pris på Amazon",
  badges: ["Mest värde", "Tusentals omdömen", "Solid gjutjärn"],
  image: "/products/kettlebells/amazon-basics-kettlebell-thumbnail.webp",
  imageAlt: "Amazon Basics svart gjutjärns-kettlebell",
  images: [
    {
      src: "/products/kettlebells/amazon-basics-kettlebell-thumbnail.webp",
      alt: "Amazon Basics svart gjutjärns-kettlebell framifrån",
      label: "Elins val",
    },
    {
      src: "/products/kettlebells/amazon-basics-kettlebell-gallery-1.webp",
      alt: "Amazon Basics gjutjärns-kettlebell med texturerat handtag",
      label: "Handtag",
    },
    {
      src: "/products/kettlebells/amazon-basics-kettlebell-gallery-2.webp",
      alt: "Amazon Basics kettlebell i produktvy",
      label: "Gjutjärn",
    },
  ],
  amazonUrl: "https://amzn.to/4fM64tv",
  pageHref: "/traning/kettlebell/amazon-basics",
  summary:
    "Mest kettlebell för pengarna: solid gjutjärnskänsla, flera vikter och ett beprövat basval för riktig hemmaträning.",
  evaluation: {
    headline: "Elins värdeval",
    intro:
      "Amazon Basics passar dig som vill ha en enkel, tålig kettlebell utan mjuka premiumdetaljer eller onödigt hög prislapp.",
    verdict: "Elins val - mest kettlebell för pengarna.",
    checks: [],
  },
  specSectionEyebrow: "Kettlebell",
  specSectionTitle: "Amazon Basics gjutjärn",
  specs: [
    { label: "Material", caption: "Kropp", value: "Solid gjutjärn" },
    { label: "Vikter", caption: "Varianter", value: "6/10/12/16/20 kg" },
    { label: "Grepp", caption: "Handtag", value: "Texturerat och målat" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4fM64tv",
    ratingSummary:
      "Amazon visar 4,7 av 5 från 12 275 recensioner på produktsidan.",
    highlights: [
      "Köpare lyfter kvaliteten och värdet för pengarna.",
      "Flera beskriver den som liten, tät och enkel att förstå.",
      "Passar bäst när hållbarhet och träningskänsla går före mjuk yta.",
    ],
    cautions: [
      "Gjutjärn är hårt mot golv och tår.",
      "En köpare rapporterar lackskada på handtaget vid leverans.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const proironSoftKettlebellProduct: Product = {
  slug: "proiron-mjuk-kettlebell",
  title: "PROIRON mjuk kettlebell",
  category: "traning",
  asin: "B09BDQK6G4",
  brand: "PROIRON",
  price: "Se aktuellt pris på Amazon",
  badges: ["Golvvänligt", "Tystare hemma", "Bäst för nybörjare"],
  image: "/products/kettlebells/proiron-soft-kettlebell-thumbnail.webp",
  imageAlt: "PROIRON mjuk kettlebell med svart handtag",
  images: [
    {
      src: "/products/kettlebells/proiron-soft-kettlebell-thumbnail.webp",
      alt: "PROIRON mjuk kettlebell framifrån",
      label: "Mjuk",
    },
    {
      src: "/products/kettlebells/proiron-soft-kettlebell-gallery-1.webp",
      alt: "PROIRON mjuk kettlebell med grepp och mjuk kropp",
      label: "Grepp",
    },
    {
      src: "/products/kettlebells/proiron-soft-kettlebell-gallery-2-optimized.webp",
      alt: "PROIRON mjuk kettlebell för hemmaträning",
      label: "Hemma",
    },
  ],
  amazonUrl: "https://amzn.to/3S7YmjG",
  pageHref: "/traning/kettlebell/proiron-mjuk",
  summary:
    "Mjukare, tystare och snällare mot golv: ett smart val för lägenhet, nybörjare och hem med barn eller husdjur.",
  evaluation: {
    headline: "Det golvsnälla valet",
    intro:
      "PROIRON passar dig som hellre skyddar golv och tår än maxar kilo per krona.",
    verdict: "Tryggt nybörjarval - särskilt i lägenhet.",
    checks: [],
  },
  specSectionEyebrow: "Kettlebell",
  specSectionTitle: "PROIRON mjuk kettlebell",
  specs: [
    { label: "Material", caption: "Kropp", value: "PVC + järnsand" },
    { label: "Vikter", caption: "Varianter", value: "2/4/6/8/10 kg" },
    { label: "Extra", caption: "Hemma", value: "Tystare och golvsnäll" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3S7YmjG",
    ratingSummary: "Amazon visar 4,6 av 5 från 1 185 recensioner.",
    highlights: [
      "Köpare uppskattar att den inte skadar golvet.",
      "Den mjuka kroppen gör den tryggare i hem med barn och husdjur.",
      "Passar när ljudnivå och säkerhet väger tyngre än lägsta pris per kilo.",
    ],
    cautions: [
      "Det är PVC och järnsand, inte gjutjärn.",
      "Den kostar mer per kilo än enklare gjutjärnsalternativ.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const proironNeopreneDumbbellsProduct: Product = {
  slug: "proiron-neoprenhantlar",
  title: "PROIRON neoprenhantlar",
  category: "traning",
  asin: "B01BEVZZZS",
  brand: "PROIRON",
  price: "Se aktuellt pris på Amazon",
  badges: ["Mest beprövad", "Välj exakt vikt", "Mjukt grepp"],
  image: "/products/dumbbells/proiron-neoprene-dumbbells-thumbnail.webp",
  imageAlt: "PROIRON neoprenhantlar i rosa par",
  images: [
    {
      src: "/products/dumbbells/proiron-neoprene-dumbbells-thumbnail.webp",
      alt: "PROIRON neoprenhantlar i par",
      label: "Elins val",
    },
    {
      src: "/products/dumbbells/proiron-neoprene-dumbbells-gallery-1.webp",
      alt: "PROIRON neoprenhantel med mjuk yta och grepp",
      label: "Grepp",
    },
    {
      src: "/products/dumbbells/proiron-neoprene-dumbbells-gallery-2.webp",
      alt: "PROIRON neoprenhantlar i flera färger och vikter",
      label: "Vikter",
    },
  ],
  amazonUrl: "https://amzn.to/4vJMOS3",
  pageHref: "/traning/hantlar/proiron-neopren",
  summary:
    "Ett enkelt par hantlar i rätt vikt: mjuk neopren, många färger och ett beprövat val för lätt till medeltung hemmaträning.",
  evaluation: {
    headline: "Elins värdeval",
    intro:
      "PROIRON passar dig som vill köpa exakt den vikt du behöver utan att börja med ett helt set.",
    verdict: "Elins val - enklast och mest beprövat för pengarna.",
    checks: [],
  },
  specSectionEyebrow: "Hantlar",
  specSectionTitle: "PROIRON neoprenhantlar",
  specs: [
    { label: "Material", caption: "Kärna", value: "Gjutjärn + neopren" },
    { label: "Vikter", caption: "Par", value: "1-10 kg" },
    { label: "Grepp", caption: "Yta", value: "Mjuk, halkfri neopren" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4vJMOS3",
    ratingSummary:
      "Amazon visar 4,6 av 5 från 24 861 recensioner och #4 i Dumbbells.",
    highlights: [
      "Köpare lyfter att hantlarna håller vad de lovar.",
      "Neoprenytan gör dem bekväma och enkla att greppa.",
      "Passar bäst för lätt till medeltung hemmaträning, cardio och rutiner.",
    ],
    cautions: [
      "Neoprenhantlar är inte gjorda för tung lyftning eller att släppas i golvet.",
      "En vanlig invändning är att priset per kilo kan kännas högt.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const songmicsDumbbellSetProduct: Product = {
  slug: "songmics-hantelset-med-stallning",
  title: "SONGMICS hantelset med ställning",
  category: "traning",
  asin: "B0FMR69BZ6",
  brand: "SONGMICS",
  price: "Se aktuellt pris på Amazon",
  badges: ["Set + ställning", "Rollsäker hexagon", "Minihemmagym"],
  image: "/products/dumbbells/songmics-dumbbell-set-thumbnail.webp",
  imageAlt: "SONGMICS neoprenhantlar med ställning",
  images: [
    {
      src: "/products/dumbbells/songmics-dumbbell-set-thumbnail.webp",
      alt: "SONGMICS hantelset med sex neoprenhantlar och ställning",
      label: "Set",
    },
    {
      src: "/products/dumbbells/songmics-dumbbell-set-gallery-1.webp",
      alt: "SONGMICS hexagonhantlar i olika vikter",
      label: "Vikter",
    },
    {
      src: "/products/dumbbells/songmics-dumbbell-set-gallery-2.webp",
      alt: "SONGMICS hantelset med displayställ för hemmaträning",
      label: "Ställning",
    },
  ],
  amazonUrl: "https://amzn.to/449gCfb",
  pageHref: "/traning/hantlar/songmics-set",
  summary:
    "Ett färdigt minihemmagym: sex neoprenhantlar i 1, 3 och 5 kg med ställning och hexagonform som inte rullar iväg.",
  evaluation: {
    headline: "Färdigt hemmakit",
    intro:
      "SONGMICS passar dig som vill ha ett komplett startset direkt, inte bara ett par i en vikt.",
    verdict: "Bästa färdiga startsetet med ställning.",
    checks: [],
  },
  specSectionEyebrow: "Hantelset",
  specSectionTitle: "SONGMICS med ställning",
  specs: [
    { label: "Material", caption: "Kärna", value: "Gjutjärn + neopren" },
    { label: "Vikter", caption: "Set", value: "2x1, 2x3, 2x5 kg" },
    { label: "Extra", caption: "Förvaring", value: "PP-ställning" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/449gCfb",
    ratingSummary: "Amazon visar 4,6 av 5 från 2 839 recensioner och #23 i Dumbbells.",
    highlights: [
      "Köpare uppskattar setet som ett färdigt och prisvärt hemmakit.",
      "Hexagonformen gör hantlarna mer roll-säkra på golvet.",
      "Greppvänlig neopren och ställning gör det lättare att hålla ordning.",
    ],
    cautions: [
      "Plastställningen kunde vara stabilare.",
      "Viktavvikelse runt 3% kan förekomma och hantlarna bör inte tappas direkt på hårda trägolv.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const prosourcefitYogaMatProduct: Product = {
  slug: "prosourcefit-extra-tjock-yogamatta",
  title: "ProSourceFit extra tjock yoga- och pilatesmatta",
  category: "traning",
  asin: "B00FY0GW08",
  brand: "ProSourceFit",
  price: "Se aktuellt pris på Amazon",
  badges: ["13 mm komfort", "Bäst för pilates"],
  image: "/products/yoga-mats/prosourcefit-thick-yoga-mat-thumbnail.webp",
  imageAlt: "ProSourceFit extra tjock yoga- och pilatesmatta med bärrem",
  images: [
    {
      src: "/products/yoga-mats/prosourcefit-thick-yoga-mat-thumbnail.webp",
      alt: "ProSourceFit extra tjock yogamatta ihoprullad med bärrem",
      label: "Elins val",
    },
    {
      src: "/products/yoga-mats/prosourcefit-thick-yoga-mat-gallery-1.webp",
      alt: "ProSourceFit yogamatta med extra tjock NBR-skumkudde",
      label: "13 mm",
    },
    {
      src: "/products/yoga-mats/prosourcefit-thick-yoga-mat-gallery-2.webp",
      alt: "ProSourceFit yoga- och pilatesmatta för golvövningar",
      label: "Komfort",
    },
  ],
  amazonUrl: "https://amzn.to/4enoyOu",
  pageHref: "/traning/yogamatta/prosourcefit-13mm",
  summary:
    "Extra tjock 13 mm yogamatta för dig som vill ha mer stöd för knän, rygg och golvövningar hemma.",
  evaluation: {
    headline: "Elins komfortval",
    intro:
      "ProSourceFit passar dig som vill ha en mjukare matta för pilates, stretch och golvövningar där lederna behöver mer dämpning.",
    verdict: "Elins val - mest komfort för pengarna.",
    checks: [],
  },
  specSectionEyebrow: "Yogamatta",
  specSectionTitle: "ProSourceFit 13 mm",
  specs: [
    { label: "Material", caption: "Skum", value: "High-density NBR" },
    { label: "Tjocklek", caption: "Komfort", value: "13 mm" },
    { label: "Storlek", caption: "Längd x bredd", value: "180 x 61 cm" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4enoyOu",
    ratingSummary:
      "Amazon visar 4,6 av 5 från 7 461 recensioner och #3 i Yoga Mats.",
    highlights: [
      "Köpare lyfter den extra dämpningen för rygg och knän.",
      "Den tjocka NBR-skummattan passar särskilt bra för pilates och golvövningar.",
      "Produktsidan anger bärrem, men leveransen bör dubbelkollas vid mottagning.",
    ],
    cautions: [
      "En mycket tjock och mjuk matta är mindre stabil i stående balanspositioner.",
      "Skum kan få märken över tid och några köpare rapporterar saknad bärrem vid leverans.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const yogatiTpeYogaMatProduct: Product = {
  slug: "yogati-tpe-yogamatta",
  title: "YOGATI yogamatta i TPE",
  category: "traning",
  asin: "B07ML1VMPD",
  brand: "YOGATI",
  price: "Se aktuellt pris på Amazon",
  badges: ["Bra grepp", "Markeringslinjer", "Stabil för yoga"],
  image: "/products/yoga-mats/yogati-tpe-yoga-mat-thumbnail.webp",
  imageAlt: "YOGATI TPE-yogamatta med markeringslinjer och bärrem",
  images: [
    {
      src: "/products/yoga-mats/yogati-tpe-yoga-mat-thumbnail.webp",
      alt: "YOGATI yogamatta i TPE med markeringslinjer",
      label: "Grepp",
    },
    {
      src: "/products/yoga-mats/yogati-tpe-yoga-mat-gallery-1.webp",
      alt: "YOGATI yogamatta med dubbelsidig halkfri yta",
      label: "Linjer",
    },
    {
      src: "/products/yoga-mats/yogati-tpe-yoga-mat-gallery-2.webp",
      alt: "YOGATI yogamatta för balanspositioner och yoga hemma",
      label: "Stabil",
    },
  ],
  amazonUrl: "https://amzn.to/3ScRxgI",
  pageHref: "/traning/yogamatta/yogati-tpe",
  summary:
    "Greppigare TPE-matta med markeringslinjer för dig som gör yoga, balanspositioner och vill ha mer stabilitet.",
  evaluation: {
    headline: "Greppvalet för yoga",
    intro:
      "YOGATI passar dig som prioriterar grepp, stabilitet och linjer som hjälper kroppen att hamna rätt på mattan.",
    verdict: "Bästa valet för faktisk yoga och balans.",
    checks: [],
  },
  specSectionEyebrow: "Yogamatta",
  specSectionTitle: "YOGATI TPE 6 mm",
  specs: [
    { label: "Material", caption: "Yta", value: "TPE" },
    { label: "Tjocklek", caption: "Stabilitet", value: "6 mm" },
    { label: "Storlek", caption: "Längd x bredd", value: "183 x 61 cm" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3ScRxgI",
    ratingSummary: "Amazon visar 4,6 av 5 från 5 542 recensioner.",
    highlights: [
      "Köpare beskriver mattan som greppig och stabil för balans.",
      "Markeringslinjerna hjälper positionering vid yoga.",
      "TPE-materialet är dubbelsidigt halkfritt och mer stabilt än väldigt mjukt skum.",
    ],
    cautions: [
      "En ny TPE-matta kan kännas något hal innan den torkats av eller använts in.",
      "6 mm är bekvämt men inte lika mjukt som en 13 mm skummatta.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const bodymateFoamRollerCareProduct: Product = {
  slug: "bodymate-foam-roller-care",
  title: "BODYMATE foam roller CARE",
  category: "traning",
  asin: "B089N9Q18W",
  brand: "BODYMATE",
  price: "Se aktuellt pris på Amazon",
  badges: ["Mest värde", "Ryggränna", "Fast densitet"],
  image: "/products/foam-rollers/bodymate-foam-roller-care-thumbnail.webp",
  imageAlt: "BODYMATE foam roller CARE i svart EPP-skum med ryggränna",
  images: [
    {
      src: "/products/foam-rollers/bodymate-foam-roller-care-thumbnail.webp",
      alt: "BODYMATE foam roller CARE i svart EPP-skum",
      label: "Elins val",
    },
    {
      src: "/products/foam-rollers/bodymate-foam-roller-care-gallery-1.webp",
      alt: "BODYMATE foam roller med centrumränna för ryggraden",
      label: "Ryggränna",
    },
    {
      src: "/products/foam-rollers/bodymate-foam-roller-care-gallery-2.webp",
      alt: "BODYMATE foam roller CARE för rygg och återhämtning",
      label: "Fast",
    },
  ],
  amazonUrl: "https://amzn.to/4fMEcFQ",
  pageHref: "/traning/foam-roller/bodymate-care",
  summary:
    "En enkel, fast foam roller med ryggränna: mest värde om du vill ha en bra rulle för rygg och återhämtning hemma.",
  evaluation: {
    headline: "Elins värdeval",
    intro:
      "BODYMATE CARE passar dig som vill ha en enda bra rulle, inte ett helt massagekit.",
    verdict: "Elins val - enkel, fast och prisvärd.",
    checks: [],
  },
  specSectionEyebrow: "Foam roller",
  specSectionTitle: "BODYMATE CARE",
  specs: [
    { label: "Material", caption: "Skum", value: "EPP-skum" },
    { label: "Storlek", caption: "Längd x diameter", value: "35 x 14 cm" },
    { label: "Extra", caption: "Rygg", value: "Centrumränna" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4fMEcFQ",
    ratingSummary:
      "Amazon visar 4,5 av 5 från 6 324 recensioner och #7 i Foam Rollers.",
    highlights: [
      "Köpare beskriver rullen som fast, stabil och tydlig för ryggen.",
      "Centrumrännan lyfts som en fördel för ryggraden.",
      "Passar bäst när du vill ha djupare tryck i en enkel slät rulle.",
    ],
    cautions: [
      "Den är ganska hård och kan bli för intensiv om du vill ha något mjukt.",
      "Ingen förvaringspåse ingår.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const elvireDeepTissueMassageSetProduct: Product = {
  slug: "elvire-deep-tissue-massageset",
  title: "Elvire Deep Tissue massageset",
  category: "traning",
  asin: "B085XB9HX6",
  brand: "ELVIRE SPORT",
  price: "Se aktuellt pris på Amazon",
  badges: ["Komplett set", "Deep-tissue", "Massageboll + fotrulle ingår"],
  image: "/products/foam-rollers/elvire-deep-tissue-set-thumbnail.webp",
  imageAlt: "Elvire Deep Tissue massageset med foam roller, boll och fotrulle",
  images: [
    {
      src: "/products/foam-rollers/elvire-deep-tissue-set-thumbnail.webp",
      alt: "Elvire Deep Tissue massageset med flera återhämtningsverktyg",
      label: "Set",
    },
    {
      src: "/products/foam-rollers/elvire-deep-tissue-set-gallery-1.webp",
      alt: "Elvire texturerad foam roller och massageboll",
      label: "Deep-tissue",
    },
    {
      src: "/products/foam-rollers/elvire-deep-tissue-set-gallery-2.webp",
      alt: "Elvire massageset med fotmassör och gympapåse",
      label: "Tillbehör",
    },
  ],
  amazonUrl: "https://amzn.to/3QiZ794",
  pageHref: "/traning/foam-roller/elvire-deep-tissue",
  summary:
    "Ett komplett deep-tissue-set med texturerad rulle, stickrulle, massageboll och fotmassör för dig som vill ha fler verktyg.",
  evaluation: {
    headline: "Komplett återhämtningsset",
    intro:
      "Elvire passar dig som vill ha mer än en rulle och komma åt fötter, vader och mindre triggerpunkter.",
    verdict: "Mångsidigt set - men med hållbarhetsreservation.",
    checks: [],
  },
  specSectionEyebrow: "Foam roller-set",
  specSectionTitle: "Elvire Deep Tissue",
  specs: [
    { label: "Material", caption: "Rulle", value: "EVA" },
    { label: "Typ", caption: "Yta", value: "Texturerad extra-fast" },
    { label: "Extra", caption: "Set", value: "Boll, stickrulle, fotrulle" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3QiZ794",
    ratingSummary:
      "Amazon visar 4,4 av 5 från 2 673 recensioner och #4 i Foam Rollers.",
    highlights: [
      "Köpare lyfter värdet i att få flera delar i ett paket.",
      "Massagebollen och fotrullen gör setet mer mångsidigt än en ensam rulle.",
      "Den texturerade rullen passar dig som vill ha mer intensiv massage.",
    ],
    cautions: [
      "Några köpare rapporterar att rullen sprack efter ungefär en månad.",
      "Ytan är hård och taggig, vilket kan vara för intensivt för känsliga användare.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const stTropezSelfTanExpressProduct: Product = {
  slug: "st-tropez-self-tan-express",
  title: "St.Tropez Self Tan Express Bronzing Mousse (200 ml)",
  category: "skonhet",
  asin: "B00KSS3MJ0",
  brand: "St.Tropez",
  price: "Se aktuellt pris på Amazon",
  badges: ["Elins sommarfavorit", "Naturlig glow", "Vegansk"],
  image:
    "/products/brun-utan-sol-st-tropez/brun-utan-sol-st-tropez-thumbnail.webp",
  imageAlt: "St.Tropez Self Tan Express brun-utan-sol-mousse, 200 ml",
  images: [
    {
      src: "/products/brun-utan-sol-st-tropez/tan-1-bottle.webp",
      alt: "St.Tropez Self Tan Express brun-utan-sol-mousse, 200 ml",
      label: "Mousse",
    },
    {
      src: "/products/brun-utan-sol-st-tropez/tan-2-packaging.webp",
      alt: "St.Tropez Self Tan Express - två förpackningsvarianter",
      label: "Förpackning",
    },
  ],
  amazonUrl: "https://amzn.to/43J16GS",
  pageHref: "/skonhet/brun-utan-sol",
  summary:
    "En beprövad brun-utan-sol-mousse där du styr färgen efter 1, 2 eller 3 timmar.",
  evaluation: {
    headline: "Premiumvalet för naturlig glow",
    intro:
      "Elin går igenom Amazon-signaler, innehåll och användning för en brun-utan-sol som ska kännas trygg inför sommaren.",
    verdict:
      "Premiumvalet för dig som vill ha en naturlig, jämn glow utan att sola.",
    checks: [],
  },
  specSectionEyebrow: "Brun utan sol",
  specSectionTitle: "St.Tropez Self Tan Express",
  specs: [
    { label: "Format", caption: "Typ", value: "Mousse, 200 ml" },
    { label: "Utveckling", caption: "Tid", value: "1-3 timmar" },
    { label: "Profil", caption: "Hudvård", value: "Vegansk, cruelty-free" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/43J16GS",
    ratingSummary:
      "Amazon visar 4,4 av 5 från 15 327 recensioner och #14 bland Body Self-Tanners.",
    highlights: [
      "Köpare lyfter den naturliga färgen.",
      "Moussen beskrivs som lätt att applicera.",
      "Flera uppskattar doften och att färgen går att styra med tiden.",
    ],
    cautions: [
      "Applicering utan handske kan bli ojämn.",
      "Färgen tonas gradvis ut och behöver fyllas på.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const elfSkinBronzingDropsProduct: Product = {
  slug: "elf-skin-bronzing-drops",
  title: "e.l.f. SKIN Bronzing Drops (Rose Gold, 30 ml)",
  category: "skonhet",
  asin: "",
  brand: "e.l.f.",
  price: "Se aktuellt pris på Amazon",
  badges: ["Prisvärt glow-val", "Vegansk", "Blandas i kräm"],
  image: "/products/bronzing-drops-elf/bronzing-drops-elf-thumbnail.webp",
  imageAlt:
    "e.l.f. SKIN Bronzing Drops i fyra nyanser, från fair gold till copper gold",
  images: [
    {
      src: "/products/bronzing-drops-elf/elf-shades.webp",
      alt: "e.l.f. SKIN Bronzing Drops i fyra nyanser, från fair gold till copper gold",
      label: "Nyanser",
    },
  ],
  amazonUrl: "https://amzn.to/4fTXUiN",
  pageHref: "/skonhet/bronzing-drops",
  summary:
    "Pigmenterade bronzing-droppar som blandas i kräm för en naturlig glow du doserar själv.",
  evaluation: {
    headline: "Prisvärt glow i droppform",
    intro:
      "Elin sammanfattar Amazon-signalerna för ett budgetvänligt glow-val som blandas med egen kräm.",
    verdict: "Prisvärt glow-val för dig som vill bygga färgen själv.",
    checks: [],
  },
  specSectionEyebrow: "Bronzing drops",
  specSectionTitle: "e.l.f. SKIN Bronzing Drops",
  specs: [
    { label: "Format", caption: "Typ", value: "Pigmenterad vätska, 30 ml" },
    { label: "Innehåll", caption: "Hudvård", value: "E-vitamin, solrosfröolja" },
    { label: "Profil", caption: "Hudvård", value: "Vegansk, cruelty-free" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4fTXUiN",
    ratingSummary: "Amazon visar 4,3 av 5 från 1 550 omdömen.",
    highlights: [
      "Köpare lyfter den naturliga lystern.",
      "Dropparna blandas med egen kräm eller olja.",
      "Lite produkt beskrivs räcka långt.",
    ],
    cautions: [
      "Färgen är pigmenterad och kan bli mörk.",
      "Resultatet kan bli ojämnt om dropparna inte blandas väl.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const niveaSunAfterSunLotionProduct: Product = {
  slug: "nivea-sun-after-sun-lotion",
  title: "NIVEA SUN After Sun Moisturising Soothing Lotion (200 ml)",
  category: "skonhet",
  asin: "B000RO5EXC",
  brand: "NIVEA Sun",
  price: "Se aktuellt pris på Amazon",
  badges: ["Prisvärt val", "Aloe vera", "After sun"],
  image: "/products/aftersun-nivea/aftersun-nivea-thumbnail.webp",
  imageAlt: "NIVEA SUN After Sun Moisturising Soothing Lotion, 200 ml",
  images: [
    {
      src: "/products/aftersun-nivea/nivea-after-sun-1.webp",
      alt: "NIVEA SUN After Sun Moisturising Soothing Lotion, 200 ml",
      label: "After sun",
    },
    {
      src: "/products/aftersun-nivea/nivea-after-sun-2.webp",
      alt: "NIVEA SUN After Sun - återfuktande lotion med aloe vera",
      label: "Aloe vera",
    },
  ],
  amazonUrl: "https://amzn.to/44makJ6",
  pageHref: "/skonhet/aftersun",
  summary:
    "Ett prisvärt after sun-val med aloe vera för fukt och en svalkande känsla efter solen.",
  evaluation: {
    headline: "Prisvärt och beprövat after sun-val",
    intro:
      "Elin går igenom Amazon-signalerna för ett enkelt after sun-val inför sommarens stranddagar.",
    verdict: "Prisvärt och beprövat after sun-val för hela sommaren.",
    checks: [],
  },
  specSectionEyebrow: "After sun",
  specSectionTitle: "NIVEA SUN After Sun",
  specs: [
    { label: "Format", caption: "Typ", value: "Lotion, 200 ml" },
    { label: "Innehåll", caption: "Hudvård", value: "Aloe vera, avokadoolja" },
    { label: "Känsla", caption: "Efter solen", value: "Svalkande, lätt" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/44makJ6",
    ratingSummary: "Amazon visar 4,6 av 5 från 3 237 omdömen.",
    highlights: [
      "Köpare lyfter den svalkande känslan.",
      "Lotionen beskrivs absorberas snabbt.",
      "Flera uppskattar doften och det prisvärda formatet.",
    ],
    cautions: [
      "After sun ersätter inte separat solskydd.",
      "Produkten innehåller parfym och parabener.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const naissanceAloeVeraGelProduct: Product = {
  slug: "naissance-aloe-vera-gel",
  title: "Naissance Skin Soothing Aloe Vera Gel (250 ml)",
  category: "skonhet",
  asin: "B00ENFL7CS",
  brand: "Naissance",
  price: "Se aktuellt pris på Amazon",
  badges: ["Elins prisvärda val", "After sun", "Vegansk"],
  image:
    "/products/naissance-aloe-vera-gel/naissance-aloe-vera-gel-thumbnail.webp",
  imageAlt: "Naissance Skin Soothing Aloe Vera Gel, 250 ml",
  images: [
    {
      src: "/products/naissance-aloe-vera-gel/naissance-aloe-vera-gel-1.webp",
      alt: "Naissance Aloe Vera Gel med färskt aloe vera-blad",
      label: "Svalkande",
    },
    {
      src: "/products/naissance-aloe-vera-gel/naissance-aloe-vera-gel-2.webp",
      alt: "Naissance Aloe Vera Gel med klar gel i skål",
      label: "99% naturligt",
    },
  ],
  amazonUrl: "https://amzn.to/4eDlAWv",
  pageHref: "/skonhet/aloe-vera-gel",
  summary:
    "En kylande, vegansk aloe vera-gel (99% naturligt ursprung) som svalkar och återfuktar huden efter sol, bad och rakning - för ansikte, kropp och hår.",
  evaluation: {
    headline: "Svalkande aloe vera efter solen",
    intro:
      "Elin går igenom Amazon-signaler, innehåll och användning för en aloe vera-gel som passar svalka och återfuktning efter en dag i solen.",
    verdict:
      "Prisvärt och mångsidigt - en svalkande, vegansk aloe vera-gel för hela sommaren.",
    checks: [],
  },
  specSectionEyebrow: "After sun",
  specSectionTitle: "Naissance Aloe Vera Gel",
  specs: [
    { label: "Format", caption: "Typ", value: "Aloe vera-gel, 250 ml" },
    {
      label: "Innehåll",
      caption: "Profil",
      value: "99% naturligt ursprung, vegansk",
    },
    { label: "Passar", caption: "Användning", value: "Ansikte, kropp & hår" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4eDlAWv",
    ratingSummary:
      "Amazon visar 4,5 av 5 från 3 309 omdömen och topp-2 bland After Sun Care.",
    highlights: [
      "Köpare lyfter den svalkande, återfuktande känslan efter sol.",
      "Många med känslig hud uppskattar att den är fri från parfym och alkohol.",
      "Mångsidig - används på ansikte, kropp och i håret.",
    ],
    cautions: [
      "Gjord på aloe-extrakt, inte ren pressad aloe-juice.",
      "Kan kännas lite klibbig vid första applicering tills den torkat in.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const minimalistHyaluronsyraSerumProduct: Product = {
  slug: "minimalist-hyaluronsyra-serum",
  title: "Minimalist 2% Hyaluronic Acid + PGA Face Serum (30 ml)",
  category: "skonhet",
  asin: "",
  brand: "Minimalist",
  price: "Se aktuellt pris på Amazon",
  badges: ["Återfuktar", "Parfymfri", "Alla hudtyper"],
  image:
    "/products/minimalist-hyaluronsyra-serum/minimalist-hyaluronsyra-serum-thumbnail.webp",
  imageAlt: "Minimalist 2% Hyaluronic Acid + PGA Face Serum, 30 ml",
  images: [
    {
      src: "/products/minimalist-hyaluronsyra-serum/minimalist-hyaluronsyra-serum-1.webp",
      alt: "Minimalist hyaluronsyra-serum med 2% HA + PGA",
      label: "Ansiktsserum",
    },
    {
      src: "/products/minimalist-hyaluronsyra-serum/minimalist-hyaluronsyra-serum-2.webp",
      alt: "Minimalist hyaluronsyra-serum appliceras med pipett",
      label: "Lätt textur",
    },
  ],
  amazonUrl: "https://amzn.to/4agYhR0",
  pageHref: "/skonhet/hyaluronsyra-serum",
  summary:
    "Ett prisvärt, parfymfritt fukt-serum med 2% hyaluronsyra och PGA som binder och håller kvar fukt på flera nivåer - för alla hudtyper, även känslig och fet/kombinerad hud.",
  evaluation: {
    headline: "Prisvärt fukt-serum som återfuktar på flera nivåer",
    intro:
      "Elin går igenom signalerna kring Minimalists hyaluronsyra-serum: 2% hyaluronsyra i flera molekylstorlekar plus PGA (polyglutaminsyra) och vitamin B5 för att binda och hålla kvar fukt. Parfymfritt och icke-komedogent - ett enkelt, prisvärt fuktsteg för sommarhud.",
    verdict:
      "Prisvärt fukt-serum som återfuktar på flera nivåer.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "Minimalist Hyaluronic Acid + PGA",
  specs: [
    { label: "Format", caption: "Typ", value: "Ansiktsserum, 30 ml" },
    { label: "Formula", caption: "Fukt", value: "2% HA + PGA, vitamin B5" },
    {
      label: "Profil",
      caption: "Hudvård",
      value: "Parfymfri, silikonfri, icke-komedogen",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4agYhR0",
    ratingSummary:
      "Amazon visar 4,3 av 5 från över 7 000 omdömen.",
    highlights: [
      "Köpare lyfter den lätta känslan och att serumet passar som ett enkelt fuktsteg.",
      "Formulan är parfymfri, silikonfri och icke-komedogen.",
      "2% hyaluronsyra, PGA och vitamin B5 hjälper huden att kännas återfuktad.",
    ],
    cautions: [
      "Applicera på lätt fuktig hud och följ upp med fuktkräm.",
      "Resultat och känsla varierar mellan hudtyper.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const kanzyJojobaoljaProduct: Product = {
  slug: "kanzy-jojobaolja",
  title: "Kanzy Jojoba Oil Cold Pressed 100% Pure (120 ml)",
  category: "skonhet",
  asin: "B07BYPW7LZ",
  brand: "Kanzy",
  price: "Se aktuellt pris på Amazon",
  badges: ["Mångsidig", "Kallpressad", "Vegansk"],
  image: "/products/kanzy-jojobaolja/kanzy-jojobaolja-thumbnail.webp",
  imageAlt: "Kanzy Jojoba Oil Cold Pressed 100% Pure, 120 ml",
  images: [
    {
      src: "/products/kanzy-jojobaolja/kanzy-jojobaolja-1.webp",
      alt: "Kanzy jojobaolja med jojobafrön",
      label: "100% jojoba",
    },
    {
      src: "/products/kanzy-jojobaolja/kanzy-jojobaolja-2.webp",
      alt: "Kanzy jojobaolja förpackning och flaska",
      label: "Kallpressad",
    },
  ],
  amazonUrl: "https://amzn.to/3SpI3Pi",
  pageHref: "/skonhet/jojobaolja",
  summary:
    "En mångsidig, kallpressad och vegansk jojobaolja för hud, hår och naglar. Lätt och icke-fet - jojoba liknar hudens eget sebum, vilket gör den enkel att använda även på fet och kombinerad hy.",
  evaluation: {
    headline: "Mångsidig, prisvärd jojobaolja för hud, hår & naglar",
    intro:
      "Elin går igenom signalerna kring Kanzys kallpressade jojobaolja: en ren, vegansk olja som mjukgör och vårdar hud, hår och naglar. Lätt textur som absorberas snabbt och inte känns fet.",
    verdict:
      "Mångsidig, prisvärd jojobaolja för hud, hår & naglar.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "Kanzy Jojoba Oil",
  specs: [
    { label: "Format", caption: "Typ", value: "Jojobaolja, 120 ml" },
    { label: "Formula", caption: "Innehåll", value: "100% ren jojobaolja" },
    { label: "Profil", caption: "Hudvård", value: "Kallpressad, hexanfri, vegansk" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3SpI3Pi",
    ratingSummary:
      "Amazon visar 4,4 av 5 från över 40 000 omdömen och den är en bästsäljare bland kroppsoljor.",
    highlights: [
      "Köpare lyfter den lätta, mjukgörande känslan på hud och hår.",
      "100% ren, kallpressad och hexanfri jojobaolja.",
      "Mångsidig användning för hud, hår och naglar.",
    ],
    cautions: [
      "Några droppar räcker - för mycket olja kan kännas blankt.",
      "Doft, absorption och känsla varierar mellan hud- och hårtyper.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const inkeyNiacinamideSerumProduct: Product = {
  slug: "inkey-niacinamide-serum",
  title: "The INKEY List 10% Niacinamide Serum (30 ml)",
  category: "skonhet",
  asin: "B09PP2DK5W",
  brand: "The INKEY List",
  price: "Se aktuellt pris på Amazon",
  badges: ["Mattar fett", "Prisvärt", "Fet & blandhy"],
  image:
    "/products/inkey-niacinamide-serum/inkey-niacinamide-serum-thumbnail.webp",
  imageAlt: "The INKEY List 10% Niacinamide Serum, 30 ml",
  images: [
    {
      src: "/products/inkey-niacinamide-serum/inkey-niacinamide-serum-1.webp",
      alt: "The INKEY List niacinamide-serum 10%",
      label: "10% niacinamide",
    },
    {
      src: "/products/inkey-niacinamide-serum/inkey-niacinamide-serum-2.webp",
      alt: "Niacinamide-serum lätt gel-textur",
      label: "Lätt gel",
    },
  ],
  amazonUrl: "https://amzn.to/3SsHtAk",
  pageHref: "/skonhet/niacinamide-serum",
  summary:
    "Ett lätt, prisvärt gel-serum med 10% niacinamide (vitamin B3) och en touch hyaluronsyra. Mattar fett och glans och hjälper till att jämna ut hudtonen – ett enkelt steg för fet och blandhy.",
  evaluation: {
    headline: "Prisvärt niacinamide-serum för fet och blandhy",
    intro:
      "Elin går igenom signalerna kring The INKEY List 10% niacinamide-serum: ett lätt, prisvärt gel-serum med 10% niacinamide (B3) plus en touch hyaluronsyra. Mattar fett och glans och hjälper till att jämna ut hudtonen – ett smidigt steg för fet och blandhy.",
    verdict:
      "Prisvärt niacinamide-serum som mattar fett och jämnar hudtonen.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "The INKEY List 10% Niacinamide Serum",
  specs: [
    { label: "Format", caption: "Typ", value: "Ansiktsserum, 30 ml" },
    {
      label: "Formula",
      caption: "Innehåll",
      value: "10% niacinamide (B3), hyaluronsyra",
    },
    {
      label: "Profil",
      caption: "Hudvård",
      value: "Parfymfri, lätt gel, fet & blandhy",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3SsHtAk",
    ratingSummary:
      "Amazon visar 4,2 av 5 från över 1 500 omdömen.",
    highlights: [
      "Köparsignalerna pekar på ett lätt gel-serum som lägger sig osynligt under annan hudvård.",
      "Formulan är parfymfri och enkel att lägga in i en minimalistisk rutin.",
      "10% niacinamide och en touch hyaluronsyra gör den relevant för fet och blandhy.",
    ],
    cautions: [
      "Mer niacinamide är inte automatiskt bättre - börja med en ärtstor mängd.",
      "Följ upp med fuktkräm och justera frekvensen om huden känns irriterad.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const cosrxSnailEssenceProduct: Product = {
  slug: "cosrx-snail-mucin-essence",
  title: "COSRX Snail Mucin 74% + Niacinamide Dual Essence (80 ml)",
  category: "skonhet",
  asin: "B08FSWVXRD",
  brand: "COSRX",
  price: "Se aktuellt pris på Amazon",
  badges: ["K-beauty-favorit", "Snigelsekret + niacinamide", "Fukt & lyster"],
  image: "/products/cosrx-snail-essence/cosrx-snail-thumbnail.webp",
  imageAlt: "COSRX Advanced Snail Radiance Dual Essence, 80 ml",
  images: [
    {
      src: "/products/cosrx-snail-essence/cosrx-snail-thumbnail.webp",
      alt: "COSRX Advanced Snail Radiance Dual Essence, 80 ml",
      label: "COSRX Snail Essence",
    },
    {
      src: "/products/cosrx-snail-essence/cosrx-snail-1.webp",
      alt: "COSRX Snail Mucin Dual Essence med tvådelad formula",
      label: "Dual essence",
    },
    {
      src: "/products/cosrx-snail-essence/cosrx-snail-2.webp",
      alt: "COSRX Snail Mucin Essence med lätt textur",
      label: "Lätt textur",
    },
    {
      src: "/products/cosrx-snail-essence/cosrx-snail-3.webp",
      alt: "Detaljbild av COSRX Snail Mucin Dual Essence",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4eLSwfk",
  pageHref: "/skonhet/snail-mucin-essence",
  summary:
    "En viral K-beauty dual-essence med 74% snigelsekret och 5% niacinamide - återfuktar, ger lyster och hjälper jämna ut hudtonen. Lätt och icke-klibbig.",
  evaluation: {
    headline: "K-beauty-favoriten för fukt och lyster",
    intro:
      "Elin går igenom signalerna kring COSRX populära dual-essence: 74% snigelsekret för fukt och en dewy lyster, plus 5% niacinamide som hjälper jämna ut hudtonen. Lätt textur som absorberas snabbt.",
    verdict:
      "Prisvärd K-beauty-essence för återfuktning och lyster.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "COSRX Snail Mucin Dual Essence",
  specs: [
    { label: "Format", caption: "Typ", value: "Dual-essence, 80 ml" },
    {
      label: "Innehåll",
      caption: "Aktivt",
      value: "74% snigelsekret + 5% niacinamide",
    },
    { label: "Profil", caption: "Hudvård", value: "Hudvänlig, cruelty-free" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4eLSwfk",
    ratingSummary: "Amazon visar 4,5 av 5 från 7 238 omdömen.",
    highlights: [
      "Köpare beskriver huden som silkeslen och slät.",
      "Återfuktar utan att kännas klibbig - lätt och snabbabsorberad.",
      "Niacinamide + snigelsekret upplevs ge en jämnare, mer dewy hudton.",
    ],
    cautions: [
      "Snigel-konsistensen kan kännas ovan i början.",
      "Blanda de två essenserna före applicering; resultat och känsla varierar mellan hudtyper.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const moroccanoilHaroljaProduct: Product = {
  slug: "moroccanoil-harolja",
  title: "Moroccanoil Treatment Original - hårolja (25 ml)",
  category: "skonhet",
  asin: "B003JKFEL8",
  brand: "Moroccanoil",
  price: "Se aktuellt pris på Amazon",
  badges: ["Elins premiumval", "Mest beprövad", "Hårolja"],
  image: "/products/moroccanoil-harolja/harolja-moroccanoil-thumbnail.webp",
  imageAlt: "Moroccanoil Treatment hårolja, 25 ml",
  images: [
    {
      src: "/products/moroccanoil-harolja/harolja-moroccanoil-1.webp",
      alt: "Moroccanoil hårolja med gyllene oljedroppe",
      label: "Oljedroppe",
    },
    {
      src: "/products/moroccanoil-harolja/harolja-moroccanoil-2.webp",
      alt: "Moroccanoil hårolja med kam och hårslinga",
      label: "Glans",
    },
  ],
  amazonUrl: "https://amzn.to/3ScSTbq",
  pageHref: "/skonhet/harolja",
  summary:
    "Ikonisk arganoljebaserad hårolja för glans, mjukhet och mindre frizz i torrt sommarhår.",
  evaluation: {
    headline: "Premiumvalet för glans",
    intro:
      "Elin går igenom Amazon-signaler, formula och användning för en ikonisk hårolja med ovanligt många omdömen.",
    verdict:
      "Premiumvalet för dig som vill ha glans, mjukhet och mindre frizz.",
    checks: [],
  },
  specSectionEyebrow: "Hårolja",
  specSectionTitle: "Moroccanoil Treatment",
  specs: [
    { label: "Format", caption: "Typ", value: "Hårolja, 25 ml" },
    { label: "Formula", caption: "Bas", value: "Arganoljebaserad" },
    { label: "Profil", caption: "Hårvård", value: "Alkoholfri, premium beauty" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3ScSTbq",
    ratingSummary:
      "Amazon visar 4,7 av 5 från 88 528 omdömen och #1 hair care oil i USA.",
    highlights: [
      "Köpare lyfter doften, glansen och den silkeslena känslan.",
      "Många beskriver den som en favorit för torrt eller frissigt hår.",
      "Lite produkt beskrivs räcka långt.",
    ],
    cautions: [
      "Det är ett premiumval med högre pris.",
      "Formulan är silikonbaserad med arganolja, inte en ren naturolja.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const lorealAbsolutRepairProduct: Product = {
  slug: "loreal-absolut-repair",
  title: "L'Oréal Professionnel Absolut Repair hårinpackning (250 ml)",
  category: "skonhet",
  asin: "B0918D9TWM",
  brand: "L'Oréal Professionnel",
  price: "Se aktuellt pris på Amazon",
  badges: ["Elins premiumval", "Hårinpackning", "Torrt & skadat hår"],
  image: "/products/loreal-absolut-repair/loreal-absolut-repair-thumbnail.webp",
  imageAlt: "L'Oréal Professionnel Absolut Repair hårinpackning, 250 ml",
  images: [
    {
      src: "/products/loreal-absolut-repair/loreal-absolut-repair-1.webp",
      alt: "Absolut Repair hårinpackning med kam och glansigt ljust hår",
      label: "Mjukt & blankt",
    },
    {
      src: "/products/loreal-absolut-repair/loreal-absolut-repair-2.webp",
      alt: "Absolut Repair hårmask med krämig konsistens",
      label: "Rik konsistens",
    },
  ],
  amazonUrl: "https://amzn.to/3ShJgrW",
  pageHref: "/skonhet/harinpackning",
  summary:
    "En proteinrik hårinpackning (Gold Quinoa + protein) som återuppbygger torrt, skadat och soltrött hår - för mjukhet, glans och lättare utredning.",
  evaluation: {
    headline: "Premium hårinpackning för torrt & skadat hår",
    intro:
      "Elin går igenom Amazon-signaler, innehåll och användning för en hårinpackning som passar torrt, blekt och soltrött sommarhår.",
    verdict:
      "Premiumvalet för sommaren - återuppbyggande mask som gör torrt hår mjukt, blankt och lättare att reda ut.",
    checks: [],
  },
  specSectionEyebrow: "Hårinpackning",
  specSectionTitle: "L'Oréal Absolut Repair",
  specs: [
    { label: "Format", caption: "Typ", value: "Hårmask, 250 ml" },
    { label: "Innehåll", caption: "Aktivt", value: "Protein + Gold Quinoa" },
    { label: "Passar", caption: "Hårtyp", value: "Torrt & skadat hår" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3ShJgrW",
    ratingSummary:
      "Amazon visar 4,6 av 5 från 2 949 omdömen och topp-5 bland Hair Deep Conditioners.",
    highlights: [
      "Köpare lyfter att håret blir mjukt, silkeslent och lättare att reda ut.",
      "Flera med blekt eller ljust hår rekommenderar den.",
      "Doften och den rika konsistensen får mycket beröm.",
    ],
    cautions: [
      "Det är ett premiumval - dyrare än vanliga balsam.",
      "Gjord för torrt/skadat hår; fint hår kan tyngas om man tar för mycket.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const moroccanoilTorrschampoProduct: Product = {
  slug: "moroccanoil-torrschampo",
  title: "Moroccanoil Torrschampo för ljust hår (205 ml)",
  category: "skonhet",
  asin: "",
  brand: "Moroccanoil",
  price: "Se aktuellt pris på Amazon",
  badges: ["Elins premiumval", "För ljust hår", "Torrschampo"],
  image:
    "/products/moroccanoil-torrschampo/torrschampo-moroccanoil-thumbnail.webp",
  imageAlt: "Moroccanoil torrschampo för ljust hår, 205 ml",
  images: [
    {
      src: "/products/moroccanoil-torrschampo/torrschampo-moroccanoil-1.webp",
      alt: "Moroccanoil torrschampo med borste och ljust hår",
      label: "Ljust hår",
    },
    {
      src: "/products/moroccanoil-torrschampo/torrschampo-moroccanoil-2.webp",
      alt: "Moroccanoil torrschampo på sand",
      label: "Fräsch finish",
    },
  ],
  amazonUrl: "https://amzn.to/3SgdN9v",
  pageHref: "/skonhet/torrschampo",
  summary:
    "Premium-torrschampo med risstärkelse och lila pigment för ljust hår mellan tvättar.",
  evaluation: {
    headline: "Premiumvalet för ljust hår",
    intro:
      "Elin går igenom Amazon-signaler och användning för ett torrschampo som fräschar upp ljust hår utan synliga puderrester.",
    verdict:
      "Premiumvalet för ljust hår - fräscht, fett-mattande och utan puderrester.",
    checks: [],
  },
  specSectionEyebrow: "Torrschampo",
  specSectionTitle: "Moroccanoil Light Tones",
  specs: [
    { label: "Format", caption: "Typ", value: "Spray, 205 ml" },
    { label: "Innehåll", caption: "Absorberar", value: "Risstärkelse" },
    { label: "Ton", caption: "Hårfärg", value: "Lila pigment för ljust hår" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3SgdN9v",
    ratingSummary: "Amazon visar 4,5 av 5 från 12 895 omdömen.",
    highlights: [
      "Köpare lyfter att det suger upp fett snabbt.",
      "Lila pigment hjälper till att matta gulton i ljust och blont hår.",
      "Flera uppskattar doften och att det inte lämnar puderrester.",
    ],
    cautions: [
      "Light Tones är gjord för ljust eller blont hår, inte mörkt hår.",
      "Det är en mellanlösning mellan tvättar, inte en ersättning för hårtvätt.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const vxdoirkElektriskFotfilProduct: Product = {
  slug: "vxdoirk-elektrisk-fotfil",
  title: "VXDOIRK Elektrisk Fotfil (laddbar)",
  category: "skonhet",
  asin: "B09NKW9V58",
  brand: "VXDOIRK",
  price: "Se aktuellt pris på Amazon",
  badges: ["Smart sommarfynd", "Laddbar", "3 sliprullar"],
  image:
    "/products/vxdoirk-elektrisk-fotfil/elektrisk-fotfil-vxdoirk-thumbnail.webp",
  imageAlt: "VXDOIRK elektrisk fotfil, laddbar",
  images: [
    {
      src: "/products/vxdoirk-elektrisk-fotfil/elektrisk-fotfil-vxdoirk-1.webp",
      alt: "Elektrisk fotfil med tre utbytbara sliprullar",
      label: "3 sliprullar",
    },
    {
      src: "/products/vxdoirk-elektrisk-fotfil/elektrisk-fotfil-vxdoirk-2.webp",
      alt: "Elektrisk fotfil på sand med handduk",
      label: "Sandalfina fötter",
    },
  ],
  amazonUrl: "https://amzn.to/3SPO0Fh",
  pageHref: "/skonhet/elektrisk-fotfil",
  summary:
    "Laddbar, vattentät elektrisk fotfil med två hastigheter och tre sliprullar för hård hud hemma.",
  evaluation: {
    headline: "Smart sommarfynd för fötterna",
    intro:
      "Elin går igenom Amazon-signaler och funktioner för en prisvärd elektrisk fotfil inför sandalsäsongen.",
    verdict:
      "Smart sommarfynd - laddbart och prisvärt för sandalfina fötter.",
    checks: [],
  },
  specSectionEyebrow: "Elektrisk fotfil",
  specSectionTitle: "VXDOIRK laddbar fotfil",
  specs: [
    { label: "Drift", caption: "Laddning", value: "USB-laddbar" },
    { label: "Lägen", caption: "Hastighet", value: "2 hastigheter" },
    { label: "Tillbehör", caption: "Slipning", value: "3 utbytbara sliprullar" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3SPO0Fh",
    ratingSummary:
      "Amazon visar 4,4 av 5 från 1 762 omdömen och #9 i Foot Files.",
    highlights: [
      "Köpare lyfter att den är laddbar och har batteridisplay.",
      "Tre sliprullar gör den lätt att anpassa efter hårdhet.",
      "IPX5-klassning gör den användbar wet & dry och enkel att skölja.",
    ],
    cautions: [
      "Vid mycket lång användning kan den bli varm.",
      "Använd lätt tryck och överdriv inte slipningen.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const lorealElvitalVarmeskyddProduct: Product = {
  slug: "loreal-elvital-varmeskydd",
  title: "L'Oréal Elvital Dream Length Värmeskyddsspray (150 ml)",
  category: "skonhet",
  asin: "",
  brand: "L'Oréal Paris",
  price: "Se aktuellt pris på Amazon",
  badges: ["Elins prisvärda val", "Värmeskydd", "Leave-in"],
  image:
    "/products/loreal-elvital-varmeskydd/varmeskydd-loreal-thumbnail.webp",
  imageAlt:
    "L'Oréal Elvital Dream Length värmeskyddsspray, 150 ml",
  images: [
    {
      src: "/products/loreal-elvital-varmeskydd/varmeskydd-loreal-1.webp",
      alt: "Värmeskyddsspray med borste och ljust hår",
      label: "Inför styling",
    },
    {
      src: "/products/loreal-elvital-varmeskydd/varmeskydd-loreal-2.webp",
      alt: "Värmeskyddsspray på sand",
      label: "Prisvärt val",
    },
  ],
  amazonUrl: "https://amzn.to/4vXpSz4",
  pageHref: "/skonhet/varmeskydd",
  summary:
    "Prisvärd leave-in-värmeskyddsspray för styling med fön, plattång, locktång eller varmluftsborste.",
  evaluation: {
    headline: "Prisvärt värmeskydd inför styling",
    intro:
      "Elin går igenom Amazon-signaler och användning för ett värmeskydd som passar innan vanliga värmeverktyg.",
    verdict:
      "Prisvärda valet - ett enkelt, effektivt värmeskydd innan värmestyling.",
    checks: [],
  },
  specSectionEyebrow: "Värmeskydd",
  specSectionTitle: "L'Oréal Elvital Dream Length",
  specs: [
    { label: "Format", caption: "Typ", value: "Leave-in-spray, 150 ml" },
    { label: "Styling", caption: "Värme", value: "Upp till 230°C" },
    { label: "Innehåll", caption: "Hårvård", value: "Vitaminer och ricinolja" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4vXpSz4",
    ratingSummary: "Amazon visar 4,5 av 5 från 2 975 omdömen.",
    highlights: [
      "Köpare lyfter att håret blir lättare att reda ut.",
      "Flera nämner mindre frizz och mer glans.",
      "Priset beskrivs som vänligt jämfört med många stylingprodukter.",
    ],
    cautions: [
      "För mycket produkt kan ge en lätt hinna.",
      "Doft och resultat upplevs olika.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const koboClaraBwProduct: Product = {
  slug: "kobo-clara-bw",
  title: 'Kobo Clara BW - e-boksläsare (6", 16 GB)',
  category: "halsa",
  asin: "B0CZXYV8GT",
  brand: "Kobo",
  price: "Se aktuellt pris på Amazon",
  badges: ["Smart sommarro", "Skärmfri läsning", "Vattentät IPX8"],
  image: "/products/kobo-clara-bw/kobo-clara-bw-thumbnail.webp",
  imageAlt: "Kobo Clara BW e-boksläsare i en svensk sommarträdgård",
  images: [
    {
      src: "/products/kobo-clara-bw/kobo-clara-bw-1.webp",
      alt: "Kobo Clara BW på linne med kaffe och sommarblommor",
      label: "Sommarro",
    },
    {
      src: "/products/kobo-clara-bw/kobo-clara-bw-reading.webp",
      alt: "Avslappnad läsning på Kobo Clara BW i sommarträdgården",
      label: "Skärmfri läsning",
    },
  ],
  amazonUrl: "https://amzn.to/4wifpyr",
  pageHref: "/halsa/kobo-clara-bw",
  summary:
    "En kompakt e-boksläsare med matt, antireflex E Ink-skärm och justerbart ComfortLight Pro - för skärmfri läsro i solstolen hela sommaren.",
  evaluation: {
    headline: "Smart sommarro - läsglädje utan skärmstress",
    intro:
      "Elin går igenom Amazon-signaler, innehåll och funktioner för en e-boksläsare som passar lata sommardagar och midsommarledigheten.",
    verdict:
      "Sommarens avkopplingsval - en matt, antireflex skärm som syns i solen och tusentals böcker i fickformat.",
    checks: [],
  },
  specSectionEyebrow: "E-boksläsare",
  specSectionTitle: "Kobo Clara BW",
  specs: [
    { label: "Skärm", caption: "Display", value: '6" E Ink Carta 1300, antireflex' },
    { label: "Lagring", caption: "Minne", value: "16 GB" },
    { label: "Tålighet", caption: "Vattentät", value: "IPX8" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4wifpyr",
    ratingSummary:
      "Amazon visar 4,6 av 5 från 2 534 omdömen och topp-3 bland e-boksläsare.",
    highlights: [
      "Köpare lyfter den skarpa, papperslika svartvita skärmen.",
      "Många beskriver läsningen som behaglig och papperslik.",
      "Lätt och kompakt - enkel att hålla i en hand.",
    ],
    cautions: [
      "Kräver ett (gratis) Kobo-konto för att komma igång.",
      "Svartvit skärm - gjord för text, inte serier i färg.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const salkingAromadiffuserProduct: Product = {
  slug: "salking-aromadiffuser",
  title: "SALKING Aromadiffuser (100 ml, trälook)",
  category: "halsa",
  asin: "B0C5852YCQ",
  brand: "SALKING",
  price: "Se aktuellt pris på Amazon",
  badges: ["Smart sommarro", "Mys & doft", "7 färger"],
  image: "/products/salking-aromadiffuser/salking-aromadiffuser-thumbnail.webp",
  imageAlt: "SALKING aromadiffuser med varmt sken, 100 ml",
  images: [
    {
      src: "/products/salking-aromadiffuser/salking-aromadiffuser-1.webp",
      alt: "SALKING aromadiffuser med varmt sken, ljus och eukalyptus",
      label: "Mys-stämning",
    },
    {
      src: "/products/salking-aromadiffuser/salking-aromadiffuser-2.webp",
      alt: "SALKING aromadiffuser i fönster i kvällsljus",
      label: "Varmt sken",
    },
  ],
  amazonUrl: "https://amzn.to/4vXbjv4",
  pageHref: "/halsa/aromdiffuser",
  summary:
    "En liten ultraljudsdiffuser med varmt sken i 7 färger och automatisk avstängning - sprider en behaglig doft och skapar mys-stämning hemma.",
  evaluation: {
    headline: "Mys och doft för lugna sommarkvällar",
    intro:
      "Elin går igenom Amazon-signaler, design och funktioner för en liten aromadiffuser som skapar mysig stämning hemma.",
    verdict:
      "Prisvärt mys-val - varmt sken och behaglig doft för lugna sommarkvällar.",
    checks: [],
  },
  specSectionEyebrow: "Aromadiffuser",
  specSectionTitle: "SALKING Aromadiffuser",
  specs: [
    { label: "Typ", caption: "Teknik", value: "Ultraljud, 100 ml" },
    { label: "Ljus", caption: "Sken", value: "7 färger, varmt sken" },
    { label: "Funktion", caption: "Smart", value: "Auto-avstängning, tyst" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4vXbjv4",
    ratingSummary:
      "Amazon visar 4,2 av 5 från 1 841 omdömen och topp-3 bland Scented Oil Diffusers.",
    highlights: [
      "Köpare lyfter den nätta, snygga nordiska designen.",
      "Enkel knapp för dimma, ljus och färger.",
      "Prisvärd och uppskattad för doft och mys.",
    ],
    cautions: [
      "Materialet upplevs som lite plastigt av vissa.",
      "Någon enstaka tycker att den inte är helt 'ultra-tyst'.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const solnedgangslampaProduct: Product = {
  slug: "solnedgangslampa",
  title: "Solnedgångslampa - sunset-projektor (24 färger, fjärrkontroll)",
  category: "halsa",
  asin: "B09P8HS8CK",
  brand: "Aniepaa",
  price: "Se aktuellt pris på Amazon",
  badges: ["Smart sommarro", "Viral aesthetic", "24 färger"],
  image: "/products/solnedgangslampa/solnedgangslampa-thumbnail.webp",
  imageAlt: "Solnedgångslampa som kastar ett gyllene sunset-sken på väggen",
  images: [
    {
      src: "/products/solnedgangslampa/solnedgangslampa-1.webp",
      alt: "Solnedgångslampa med drömigt rosa och lila sken i ett rum",
      label: "24 färger",
    },
    {
      src: "/products/solnedgangslampa/solnedgangslampa-2.webp",
      alt: "Närbild på solnedgångslampans lysande lins och gyllene halo",
      label: "Gyllene sken",
    },
  ],
  amazonUrl: "https://amzn.to/43LWXC4",
  pageHref: "/halsa/solnedgangslampa",
  summary:
    "En viral solnedgångslampa som badar rummet i ett varmt, gyllene sken - 24 färger, 4 ljuslägen och fjärrkontroll. Drömmig stämning för mysiga sommarkvällar och snygga bilder.",
  evaluation: {
    headline: "Drömmigt sunset-sken på en knapptryckning",
    intro:
      "Elin går igenom Amazon-signaler, funktioner och vad köparna tycker om den virala solnedgångslampan.",
    verdict:
      "Prisvärt och scroll-stoppande - förvandlar rummet till en gyllene solnedgång på sekunder.",
    checks: [],
  },
  specSectionEyebrow: "Stämningsbelysning",
  specSectionTitle: "Solnedgångslampa",
  specs: [
    { label: "Färger", caption: "Ljus", value: "24 färger, 4 lägen" },
    { label: "Styrning", caption: "Smart", value: "Fjärrkontroll, 180° vridbar" },
    { label: "Höjd", caption: "Justerbar", value: "25-37 cm, USB" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/43LWXC4",
    ratingSummary: "Amazon visar 4,2 av 5 från 753 omdömen.",
    highlights: [
      "Köpare lyfter den mysiga, drömmiga stämningen den skapar.",
      "Populär för bilder, stories och fester - snygg på hyllan.",
      "Justerbar ljusstyrka och många färger via fjärrkontroll.",
    ],
    cautions: [
      "Ett par köpare tycker ljuset är svagt i ljusa rum (syns bäst i mörker).",
      "Enstaka nämner att fjärrkontrollen kan strula eller att lampan slutat fungera efter en tid.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const miniProjektorProduct: Product = {
  slug: "mini-projektor",
  title: "Mini-projektor - portabel WiFi 6, Bluetooth, Android (720p)",
  category: "halsa",
  asin: "B0DTP9QJZH",
  brand: "Alwtniet",
  price: "Se aktuellt pris på Amazon",
  badges: ["Smart sommarro", "Bärbar bio", "WiFi & Bluetooth"],
  image: "/products/mini-projektor/mini-projektor-thumbnail.webp",
  imageAlt: "Mini-projektor som visar film på väggen i ett mysigt rum",
  images: [
    {
      src: "/products/mini-projektor/mini-projektor-1.webp",
      alt: "Mini-projektor på utomhusbio i trädgården på kvällen",
      label: "Utomhusbio",
    },
    {
      src: "/products/mini-projektor/mini-projektor-2.webp",
      alt: "Närbild på mini-projektorn med ljusstråle och fjärrkontroll",
      label: "Portabel & smart",
    },
  ],
  amazonUrl: "https://amzn.to/3SkP2ci",
  pageHref: "/halsa/mini-projektor",
  summary:
    "En kompakt, bärbar mini-projektor med WiFi 6, Bluetooth och Android - streama film och serier direkt på väggen, hemma eller ute i sommarkvällen. Native 720p med stöd för 4K-filer, auto-keystone och 180° vridbar.",
  evaluation: {
    headline: "Bärbar bio - film på väggen var du vill",
    intro:
      "Elin går igenom Amazon-signaler, funktioner och vad köparna tycker om den populära mini-projektorn.",
    verdict:
      "Prisvärd och scroll-stoppande - hemmabio och utomhusbio i en liten, smart pryl.",
    checks: [],
  },
  specSectionEyebrow: "Mini-projektor",
  specSectionTitle: "Alwtniet Mini-projektor",
  specs: [
    { label: "Upplösning", caption: "Bild", value: "Native 720p, 4K-stöd" },
    { label: "Smart", caption: "Anslutning", value: "WiFi 6, Bluetooth, Android" },
    { label: "Praktiskt", caption: "Design", value: "180° vridbar, auto-keystone" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3SkP2ci",
    ratingSummary:
      "Amazon visar 4,3 av 5 från 4 802 omdömen och topp-2 bland projektorer.",
    highlights: [
      "Köpare lyfter den skarpa bilden och fina färgerna för priset.",
      "Lätt att komma igång - Android, WiFi och Bluetooth inbyggt.",
      "Liten och portabel - funkar både hemma och utomhus.",
    ],
    cautions: [
      "Native-upplösningen är 720p (spelar upp 4K-filer men projicerar i 720p).",
      "Bäst i ett nedsläckt rum eller på kvällen - ljusstyrkan räcker inte i starkt dagsljus.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const stjarnprojektorProduct: Product = {
  slug: "stjarnprojektor",
  title: "Stjärnprojektor - galaxprojektor (12 HD-skivor)",
  category: "halsa",
  asin: "B0C1BX79XW",
  brand: "Mexllex",
  price: "Se aktuellt pris på Amazon",
  badges: ["Smart sommarro", "Viral aesthetic", "12 galaxskivor"],
  image: "/products/stjarnprojektor/stjarnprojektor-thumbnail.webp",
  imageAlt: "Stjärnprojektor som projicerar en galax på sovrumstaket",
  images: [
    {
      src: "/products/stjarnprojektor/stjarnprojektor-1.webp",
      alt: "Stjärnprojektor med grönt norrsken i ett mysigt rum",
      label: "12 motiv",
    },
    {
      src: "/products/stjarnprojektor/stjarnprojektor-2.webp",
      alt: "Närbild på galaxprojektorn med stjärnhimmel på väggen",
      label: "Drömmig galax",
    },
  ],
  amazonUrl: "https://amzn.to/4vhDOUs",
  pageHref: "/halsa/stjarnprojektor",
  summary:
    "En viral galax-/stjärnprojektor som förvandlar taket till en drömmig stjärnhimmel - 12 HD-skivor med galaxer, nebulosor och måne, 360° vridbar och med avstängningstimer.",
  evaluation: {
    headline: "Förvandla taket till en stjärnhimmel",
    intro:
      "Elin går igenom Amazon-signaler, funktioner och vad köparna tycker om den virala stjärnprojektorn.",
    verdict:
      "Scroll-stoppande och prisvärd - en drömmig galaxhimmel i rummet på sekunder.",
    checks: [],
  },
  specSectionEyebrow: "Stjärnprojektor",
  specSectionTitle: "Galaxprojektor",
  specs: [
    { label: "Skivor", caption: "Motiv", value: "12 HD-skivor" },
    { label: "Rörlig", caption: "Vinkel", value: "360° vridbar" },
    { label: "Smart", caption: "Timer", value: "1/2/4 h, USB-C" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4vhDOUs",
    ratingSummary:
      "Amazon visar 4,1 av 5 från 1 800 omdömen och #1 bland Children's Mood Lights.",
    highlights: [
      "Köpare lyfter den drömmiga stjärnhimlen och rumsstämningen.",
      "Många olika skivor (galaxer, nebulosor, måne) ger variation.",
      "360° vridbar projektor och timer uppskattas.",
    ],
    cautions: [
      "Skärpan beror på avståndet - några tycker bilden blir lite suddig om den inte ställs rätt.",
      "Den syns bäst i ett helt nedsläckt rum.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const dreoCruiserProFlaktProduct: Product = {
  slug: "dreo-cruiser-pro-tornflakt",
  title: "Dreo Cruiser Pro T1 tornfläkt (106 cm)",
  category: "halsa",
  asin: "B08PDDSDHY",
  brand: "Dreo",
  price: "Se aktuellt pris på Amazon",
  badges: ["Tyst ~20 dB", "9 hastigheter", "Premiumval"],
  image: "/products/flakt-dreo/dreo-cruiser-thumbnail.webp",
  imageAlt: "Dreo Cruiser Pro T1 svart tornfläkt med fjärrkontroll",
  images: [
    {
      src: "/products/flakt-dreo/dreo-cruiser-thumbnail.webp",
      alt: "Dreo Cruiser Pro T1 svart tornfläkt med fjärrkontroll",
      label: "Dreo Cruiser Pro",
    },
    {
      src: "/products/flakt-dreo/dreo-cruiser-1.webp",
      alt: "Dreo Cruiser Pro T1 svart tornfläkt",
      label: "Tornfläkt",
    },
    {
      src: "/products/flakt-dreo/dreo-cruiser-2.webp",
      alt: "Detalj på Dreo Cruiser Pro T1 tornfläkt",
      label: "Detalj",
    },
    {
      src: "/products/flakt-dreo/dreo-cruiser-3.webp",
      alt: "Fjärrkontroll till Dreo Cruiser Pro T1 tornfläkt",
      label: "Fjärrkontroll",
    },
  ],
  amazonUrl: "https://amzn.to/4xGELr0",
  pageHref: "/halsa/flakt/dreo-cruiser-pro",
  summary:
    "En tyst, slimmad tornfläkt som svalkar hela rummet – 9 hastigheter, oscillering, timer och fjärrkontroll.",
  evaluation: {
    headline: "Den tysta premiumfläkten",
    intro:
      "Dreo Cruiser Pro passar dig som vill svalka hela rummet utan oljud – särskilt i sovrummet.",
    verdict:
      "Premiumvalet – tyst, mångsidig tornfläkt för hela rummet.",
    checks: [],
  },
  specSectionEyebrow: "Tornfläkt",
  specSectionTitle: "Dreo Cruiser Pro T1",
  specs: [
    { label: "Typ", caption: "Design", value: "Bladlös tornfläkt, 106 cm" },
    { label: "Ljudnivå", caption: "Tyst", value: "ca 20 dB" },
    {
      label: "Lägen",
      caption: "Hastigheter",
      value: "9 + oscillering, timer",
    },
    {
      label: "Styrning",
      caption: "Extra",
      value: "Fjärrkontroll, display som slocknar",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4xGELr0",
    ratingSummary:
      "Amazon visar 4,6 av 5 från 25 944 omdömen och topp-5 bland tornfläktar.",
    highlights: [
      "Köpare lyfter att den är tyst – 'tystare än min gamla AC'.",
      "Svalkar hela lägenheten och ser stilren ut.",
      "Display som slocknar uppskattas nattetid.",
    ],
    cautions: [
      "Någon tycker basen känns plastig/ostadig.",
      "Den låter mer på högsta läget (9).",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const honeywellTurboforceFlaktProduct: Product = {
  slug: "honeywell-turboforce-ht900e",
  title: "Honeywell TurboForce HT900E bordsfläkt",
  category: "halsa",
  asin: "B003KHJO6G",
  brand: "Honeywell",
  price: "Se aktuellt pris på Amazon",
  badges: ["#1 Bästsäljare", "Kraftfull", "Budgetval"],
  image: "/products/flakt-honeywell/honeywell-ht900e-thumbnail.webp",
  imageAlt: "Honeywell TurboForce HT900E svart kompakt bordsfläkt",
  images: [
    {
      src: "/products/flakt-honeywell/honeywell-ht900e-thumbnail.webp",
      alt: "Honeywell TurboForce HT900E svart kompakt bordsfläkt",
      label: "Honeywell HT900E",
    },
    {
      src: "/products/flakt-honeywell/honeywell-ht900e-1.webp",
      alt: "Kompakt Honeywell TurboForce HT900E bordsfläkt",
      label: "Kompakt",
    },
    {
      src: "/products/flakt-honeywell/honeywell-ht900e-2.webp",
      alt: "Honeywell TurboForce HT900E för bord eller vägg",
      label: "Vägg & bord",
    },
    {
      src: "/products/flakt-honeywell/honeywell-ht900e-3.webp",
      alt: "Detalj på Honeywell TurboForce HT900E bordsfläkt",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/3SvaTOn",
  pageHref: "/halsa/flakt/honeywell-turboforce",
  summary:
    "Liten men kraftfull bordsfläkt till budgetpris – starkt luftflöde, 3 hastigheter och väggmontering. Men den är ingen tystfläkt.",
  evaluation: {
    headline: "Mest kraft för pengarna",
    intro:
      "Honeywell TurboForce passar dig som vill ha snabb, riktad svalka vid skrivbordet eller i ett mindre rum till lågt pris.",
    verdict:
      "Budgetvalet – kraftfull och prisvärd, men räkna med mer ljud.",
    checks: [],
  },
  specSectionEyebrow: "Bordsfläkt",
  specSectionTitle: "Honeywell TurboForce HT900E",
  specs: [
    {
      label: "Typ",
      caption: "Design",
      value: "Kompakt bordsfläkt, 27,7 cm",
    },
    {
      label: "Luftflöde",
      caption: "Kraft",
      value: "Starkt, känns på flera meter",
    },
    { label: "Lägen", caption: "Hastigheter", value: "3 + 90° lutning" },
    { label: "Montering", caption: "Flexibel", value: "Bord eller vägg" },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3SvaTOn",
    ratingSummary:
      "Amazon visar 4,4 av 5 från 28 253 omdömen och #1 bästsäljare bland bordsfläktar.",
    highlights: [
      "Kraftfullt luftflöde för en så liten fläkt.",
      "Prisvärd och smidig att flytta eller väggmontera.",
      "Många köper den som en billig, effektiv svalka.",
    ],
    cautions: [
      "Den är bullrig (runt 56 dB) – inte 'tyst' trots marknadsföringen, särskilt nattetid.",
      "Plastig känsla, ingen oscillering eller fjärrkontroll.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const mideaFz10FlaktProduct: Product = {
  slug: "midea-fz10-tornflakt",
  title: "Midea FZ10-17JR tornfläkt (96,5 cm)",
  category: "halsa",
  asin: "B07P6QYW66",
  brand: "Midea",
  price: "Se aktuellt pris på Amazon",
  badges: ["#1 Bästsäljare", "Nattläge & timer", "Bäst värde"],
  image: "/products/flakt-midea/midea-fz10-thumbnail.webp",
  imageAlt: "Midea FZ10-17JR svart tornfläkt med fjärrkontroll",
  images: [
    {
      src: "/products/flakt-midea/midea-fz10-thumbnail.webp",
      alt: "Midea FZ10-17JR svart tornfläkt med fjärrkontroll",
      label: "Midea FZ10",
    },
    {
      src: "/products/flakt-midea/midea-fz10-1.webp",
      alt: "Midea FZ10-17JR svart tornfläkt",
      label: "Tornfläkt",
    },
    {
      src: "/products/flakt-midea/midea-fz10-2.webp",
      alt: "Kontroll och display på Midea FZ10-17JR tornfläkt",
      label: "Kontroll & display",
    },
    {
      src: "/products/flakt-midea/midea-fz10-3.webp",
      alt: "Detalj på Midea FZ10-17JR tornfläkt",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4eL99rA",
  pageHref: "/halsa/flakt/midea-fz10",
  summary:
    "En prisvärd tornfläkt med oscillering, fjärrkontroll, 7-timmarstimer och ett tystare nattläge – #1 bästsäljare bland tornfläktar.",
  evaluation: {
    headline: "Bäst värde – och sovrumsvänlig",
    intro:
      "Midea FZ10 passar dig som vill ha en tyst-nog tornfläkt med nattläge och timer till ett mellanpris.",
    verdict:
      "Bäst värde – prisvärd tornfläkt med nattläge för sovrummet.",
    checks: [],
  },
  specSectionEyebrow: "Tornfläkt",
  specSectionTitle: "Midea FZ10-17JR",
  specs: [
    { label: "Typ", caption: "Design", value: "Tornfläkt, 96,5 cm" },
    { label: "Ljudnivå", caption: "Drift", value: "ca 38 dB" },
    {
      label: "Lägen",
      caption: "Hastigheter",
      value: "3 + 3 lägen (inkl. nattläge)",
    },
    {
      label: "Extra",
      caption: "Bekvämt",
      value: "90° oscillering, 7h timer, fjärrkontroll",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4eL99rA",
    ratingSummary:
      "Amazon visar 4,4 av 5 från 2 659 omdömen och #1 bästsäljare bland tornfläktar.",
    highlights: [
      "Köpare lyfter att den är kylande när det är varmt och fuktigt – 'bästa köpet'.",
      "Bra med fjärrkontroll, 7h-timer och ett tystare nattläge.",
      "Tyst på de lägre hastigheterna – funkar i sovrummet.",
    ],
    cautions: [
      "Den låter mer på högsta läget (3).",
      "Enstaka köpare har fått fjärrkontrollen saknad i paketet.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const larochePosayVitaminC10Product: Product = {
  slug: "la-roche-posay-vitamin-c10-serum",
  title: "La Roche-Posay Pure Vitamin C10 Serum (30 ml)",
  category: "skonhet",
  asin: "B07QL32ZLR",
  brand: "La Roche-Posay",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "10% ren C-vitamin",
    "Lyster & glow",
    "Antioxidant",
  ],
  image: "/products/la-roche-posay-vitamin-c10/vitamin-c10-thumbnail.webp",
  imageAlt: "La Roche-Posay Pure Vitamin C10 Serum, 30 ml",
  images: [
    {
      src: "/products/la-roche-posay-vitamin-c10/vitamin-c10-thumbnail.webp",
      alt: "La Roche-Posay Pure Vitamin C10 Serum, 30 ml",
      label: "Vitamin C10",
    },
    {
      src: "/products/la-roche-posay-vitamin-c10/vitamin-c10-1.webp",
      alt: "La Roche-Posay Vitamin C10 serum med 10% ren C-vitamin",
      label: "10% C-vitamin",
    },
    {
      src: "/products/la-roche-posay-vitamin-c10/vitamin-c10-2.webp",
      alt: "La Roche-Posay Vitamin C10 textur och konsistens",
      label: "Lätt textur",
    },
    {
      src: "/products/la-roche-posay-vitamin-c10/vitamin-c10-3.webp",
      alt: "Detaljbild av La Roche-Posay Pure Vitamin C10 Serum",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4oMLk7m",
  pageHref: "/skonhet/vitamin-c-serum",
  summary: "Ett antioxidantserum med 10% ren C-vitamin som hjälper huden att se piggare och mer strålande ut – för lyster, glow och en jämnare hudton. Lätt textur för känslig hud.",
  evaluation: {
    headline: "C-vitamin för lyster och glow",
    intro: "Elin går igenom La Roche-Posay Pure Vitamin C10: 10% ren C-vitamin plus hyaluronsyra för en piggare, mer strålande hud. C-vitamin är en omtyckt antioxidant-ingrediens för lyster och en jämnare hudton, och formulan är gjord med tanke på känslig hud.",
    verdict: "Prisvärt apoteksserum för lyster och glow, även för känslig hud.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "La Roche-Posay Pure Vitamin C10",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Serum, 30 ml",
    },
    {
      label: "Innehåll",
      caption: "Aktivt",
      value: "10% ren C-vitamin + hyaluronsyra",
    },
    {
      label: "Profil",
      caption: "Hudvård",
      value: "Känslig hud, allergitestad",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4oMLk7m",
    ratingSummary: "Amazon visar 4,4 av 5 från 256 omdömen.",
    highlights: [
      "Köpare upplever en piggare, mer strålande hud med tiden.",
      "Lätt textur som de flesta tycker absorberas snabbt.",
      "Uppskattas för att vara skonsam nog även för känslig hud.",
    ],
    cautions: [
      "Ren C-vitamin kan svida lätt i början – börja gärna varannan dag.",
      "C-vitamin oxiderar med tiden; förvara mörkt och svalt och använd inom rimlig tid.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const ceraveHydratingCleanserProduct: Product = {
  slug: "cerave-hydrating-cleanser",
  title: "CeraVe Hydrating Cleanser – ansiktsrengöring (236 ml)",
  category: "skonhet",
  asin: "B07C5R51Q9",
  brand: "CeraVe",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Ceramider + hyaluronsyra",
    "Skonsam rengöring",
    "Oparfymerad",
  ],
  image: "/products/cerave-hydrating-cleanser/cerave-thumbnail.webp",
  imageAlt: "CeraVe Hydrating Cleanser ansiktsrengöring, 236 ml",
  images: [
    {
      src: "/products/cerave-hydrating-cleanser/cerave-thumbnail.webp",
      alt: "CeraVe Hydrating Cleanser ansiktsrengöring, 236 ml",
      label: "CeraVe rengöring",
    },
    {
      src: "/products/cerave-hydrating-cleanser/cerave-1.webp",
      alt: "CeraVe Hydrating Cleanser med ceramider och hyaluronsyra",
      label: "Ceramider",
    },
    {
      src: "/products/cerave-hydrating-cleanser/cerave-2.webp",
      alt: "CeraVe Hydrating Cleanser textur och konsistens",
      label: "Krämig textur",
    },
    {
      src: "/products/cerave-hydrating-cleanser/cerave-3.webp",
      alt: "Detaljbild av CeraVe Hydrating Cleanser",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4y9hKgT",
  pageHref: "/skonhet/cerave-rengoring",
  summary: "En mild daglig ansiktsrengöring med ceramider och hyaluronsyra som rengör utan att torka ut. Lämnar huden mjuk och len – för normal till torr hud, och helt oparfymerad.",
  evaluation: {
    headline: "Skonsam daglig rengöring som inte torkar ut",
    intro: "Elin går igenom CeraVe Hydrating Cleanser: en viral, mild rengöring med ceramider och hyaluronsyra. Den rengör huden utan att dra åt eller torka ut, och lämnar den mjuk och len. Formulan är oparfymerad och gjord för normal till torr hud, vilket gör den enkel att lägga in i en daglig rutin.",
    verdict: "Skonsam vardagsrengöring för normal till torr hud, oparfymerad och mild.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "CeraVe Hydrating Cleanser",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Ansiktsrengöring, 236 ml",
    },
    {
      label: "Innehåll",
      caption: "Aktivt",
      value: "Ceramider + hyaluronsyra",
    },
    {
      label: "Profil",
      caption: "Hudvård",
      value: "Normal till torr hud, oparfymerad",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4y9hKgT",
    ratingSummary: "Amazon visar 4,5 av 5 från 35 098 omdömen.",
    highlights: [
      "Köpare upplever att huden känns ren men inte uttorkad efteråt.",
      "Krämig, mild textur som de flesta tycker sköljs av enkelt.",
      "Uppskattas för att vara oparfymerad och skonsam i vardagen.",
    ],
    cautions: [
      "Den löddrar inte mycket, vilket kan kännas ovant om du gillar rik lödder.",
      "Är du väldigt fet i huden kan du föredra en lättare gel-rengöring.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const larochePosayCicaplastB5Product: Product = {
  slug: "la-roche-posay-cicaplast-b5",
  title: "La Roche-Posay Cicaplast Baume B5+ (40 ml)",
  category: "skonhet",
  asin: "B00ST2GSRK",
  brand: "La Roche-Posay",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Panthenol (B5)",
    "Lugnar & mjukgör",
    "Multipurpose",
  ],
  image: "/products/la-roche-posay-cicaplast-b5/cicaplast-thumbnail.webp",
  imageAlt: "La Roche-Posay Cicaplast Baume B5+, 40 ml",
  images: [
    {
      src: "/products/la-roche-posay-cicaplast-b5/cicaplast-thumbnail.webp",
      alt: "La Roche-Posay Cicaplast Baume B5+, 40 ml",
      label: "Cicaplast B5+",
    },
    {
      src: "/products/la-roche-posay-cicaplast-b5/cicaplast-1.webp",
      alt: "La Roche-Posay Cicaplast Baume B5+ med panthenol och shea",
      label: "Panthenol + shea",
    },
    {
      src: "/products/la-roche-posay-cicaplast-b5/cicaplast-2.webp",
      alt: "La Roche-Posay Cicaplast Baume B5+ textur och konsistens",
      label: "Rik balm",
    },
  ],
  amazonUrl: "https://amzn.to/4ar8wSS",
  pageHref: "/skonhet/cicaplast-b5",
  summary: "En multifunktionell lugnande balm med panthenol (B5) och shea som återfuktar och mjukgör uttorkad och stram hud. Kan användas på torra läppar, händer och torra partier – med stark 4,7 av 5 från 16 635 omdömen.",
  evaluation: {
    headline: "Lugnande balm för torr och stram hud",
    intro: "Elin går igenom La Roche-Posay Cicaplast Baume B5+: en multifunktionell balm med panthenol (B5) och shea. Den är gjord för att lugna, återfukta och mjukgöra torr, stram och ovan hud, och kan användas på torra partier som läppar och händer. Det stora antalet omdömen, 4,7 av 5 från 16 635, gör den till en av de mest omtyckta balmerna på Amazon.",
    verdict: "Mångsidig, lugnande balm för torra partier – med riktigt stark social proof.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "La Roche-Posay Cicaplast Baume B5+",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Balm, 40 ml",
    },
    {
      label: "Innehåll",
      caption: "Aktivt",
      value: "Panthenol (B5) + shea",
    },
    {
      label: "Profil",
      caption: "Hudvård",
      value: "Torr, stram och ovan hud",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4ar8wSS",
    ratingSummary: "Amazon visar 4,7 av 5 från 16 635 omdömen.",
    highlights: [
      "Köpare upplever att torr och stram hud känns lugnare och mjukare.",
      "Många använder den på flera ställen – torra läppar, händer och torra partier.",
      "Den rika texturen uppskattas för uttorkad hud, lite räcker långt.",
    ],
    cautions: [
      "Balmen är rik och kan kännas fet på fukttörstig hud – ta en liten mängd.",
      "Som med all ny hudvård: testa på en liten yta först om du har känslig hud.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const laneigeLipSleepingMaskProduct: Product = {
  slug: "laneige-lip-sleeping-mask",
  title: "LANEIGE Lip Sleeping Mask – läppmask (Berry, 20 g)",
  category: "skonhet",
  asin: "B09WCTJ113",
  brand: "LANEIGE",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "K-beauty-favorit",
    "Nattläppmask",
    "Berry-doft",
  ],
  image: "/products/laneige-lip-sleeping-mask/laneige-thumbnail.webp",
  imageAlt: "LANEIGE Lip Sleeping Mask Berry, 20 g",
  images: [
    {
      src: "/products/laneige-lip-sleeping-mask/laneige-thumbnail.webp",
      alt: "LANEIGE Lip Sleeping Mask Berry, 20 g",
      label: "Lip Sleeping Mask",
    },
    {
      src: "/products/laneige-lip-sleeping-mask/laneige-1.webp",
      alt: "LANEIGE Lip Sleeping Mask nattläppmask med berry-doft",
      label: "Berry-doft",
    },
    {
      src: "/products/laneige-lip-sleeping-mask/laneige-2.webp",
      alt: "LANEIGE Lip Sleeping Mask textur och konsistens",
      label: "Mjuk konsistens",
    },
    {
      src: "/products/laneige-lip-sleeping-mask/laneige-3.webp",
      alt: "Detaljbild av LANEIGE Lip Sleeping Mask, 20 g",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4xRztZY",
  pageHref: "/skonhet/laneige-lappmask",
  summary: "En viral K-beauty-läppmask som du lägger på före läggdags och låter vårda läpparna över natten. Med berry-doft, bär-extrakt och vårdande oljor som återfuktar och mjukgör – så att du vaknar med mjuka, smidiga läppar.",
  evaluation: {
    headline: "Nattläppmask som återfuktar medan du sover",
    intro: "Elin går igenom LANEIGE Lip Sleeping Mask: en viral K-beauty-favorit som du masserar in på läpparna före läggdags. Den innehåller bär-extrakt och vårdande oljor som återfuktar och mjukgör, och berry-doften gör steget lite extra mysigt. Tanken är enkel – läpparna får vårdas i lugn och ro medan du sover.",
    verdict: "Mysig K-beauty-läppmask som återfuktar och mjukgör läpparna över natten.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "LANEIGE Lip Sleeping Mask",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Läppmask, 20 g",
    },
    {
      label: "Doft",
      caption: "Variant",
      value: "Berry",
    },
    {
      label: "Användning",
      caption: "Rutin",
      value: "Nattmask, läggs på före läggdags",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4xRztZY",
    ratingSummary: "Amazon visar 4,6 av 5 från 388 omdömen.",
    highlights: [
      "Köpare beskriver mjukare, smidigare läppar på morgonen.",
      "Berry-doften lyfts ofta fram som mysig och behaglig.",
      "Lite produkt räcker länge, så burken håller i många månader.",
    ],
    cautions: [
      "Doft och smak är en smaksak – gillar du inte söta toner kan den kännas mycket.",
      "Konsistensen är ganska tjock och balsamliknande, vilket inte passar alla.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const guaShaRosenkvartsProduct: Product = {
  slug: "gua-sha-rosenkvarts",
  title: "Gua sha-sten i rosenkvarts – ansiktsverktyg",
  category: "skonhet",
  asin: "B0DT18P85H",
  brand: "YANKUIRUI",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Rosenkvarts",
    "Lugn kvällsritual",
    "Skön ansiktsmassage",
  ],
  image: "/products/gua-sha-rosenkvarts/gua-sha-thumbnail.webp",
  imageAlt: "Gua sha-sten i rosenkvarts för ansiktsmassage",
  images: [
    {
      src: "/products/gua-sha-rosenkvarts/gua-sha-thumbnail.webp",
      alt: "Gua sha-sten i rosenkvarts för ansiktsmassage",
      label: "Rosenkvarts",
    },
    {
      src: "/products/gua-sha-rosenkvarts/gua-sha-1.webp",
      alt: "Gua sha-sten i rosenkvarts med rundade kanter",
      label: "Rundade kanter",
    },
    {
      src: "/products/gua-sha-rosenkvarts/gua-sha-2.webp",
      alt: "Gua sha-sten i rosenkvarts som hålls i handen",
      label: "Behändigt grepp",
    },
    {
      src: "/products/gua-sha-rosenkvarts/gua-sha-3.webp",
      alt: "Detaljbild av gua sha-sten i rosenkvarts",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4gdHTEJ",
  pageHref: "/skonhet/gua-sha",
  summary: "Ett ansiktsverktyg i rosenkvarts för en skön, avslappnande ansiktsmassage. Många gillar att göra det till en lugn ritual i kvällsrutinen – använd den med ansiktsolja eller serum så glider stenen lätt mot huden. Effekten är subjektiv, men själva stunden upplevs ofta som rofylld.",
  evaluation: {
    headline: "En lugn ritual för kvällsrutinen",
    intro: "Elin går igenom den här gua sha-stenen i rosenkvarts: ett enkelt ansiktsverktyg som många använder för en skön, avslappnande ansiktsmassage. Det handlar inte om mirakel utan om en lugn stund – du för stenen mjukt över ansiktet med lite ansiktsolja eller serum så att den glider lätt. Hur det känns är subjektivt, men själva ritualen är det som de flesta uppskattar.",
    verdict: "Ett trevligt litet ansiktsverktyg för en lugn massageritual – men ett nyare köp med få omdömen.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "Gua sha-sten i rosenkvarts",
  specs: [
    {
      label: "Material",
      caption: "Sten",
      value: "Naturlig rosenkvarts",
    },
    {
      label: "Användning",
      caption: "Så funkar det",
      value: "Med ansiktsolja eller serum",
    },
    {
      label: "Form",
      caption: "Design",
      value: "Rundade kanter för ansiktet",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4gdHTEJ",
    ratingSummary: "Amazon visar 4,2 av 5 från 49 omdömen – ett ganska lågt antal, så betyget kan ändras framöver.",
    highlights: [
      "Många beskriver massagestunden som skön och avkopplande.",
      "Uppskattas som en enkel, lugn ritual i kvällsrutinen.",
      "Stenen ligger fint i handen och glider lätt med lite ansiktsolja.",
    ],
    cautions: [
      "Få omdömen ännu (49 st), så helhetsbilden är osäker – läs gärna flera recensioner själv.",
      "Natursten är skör – tappa den inte mot hårt underlag, och rengör den efter användning.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const silkesorngottProduct: Product = {
  slug: "silkesorngott-mullbarssilke",
  title: "Örngott i 100% mullbärssilke (19 momme, 40x60 cm)",
  category: "skonhet",
  asin: "B0792378YQ",
  brand: "townssilk",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "100% mullbärssilke",
    "19 momme",
    "Mindre friktion",
  ],
  image: "/products/silkesorngott/silkesorngott-thumbnail.webp",
  imageAlt: "Örngott i 100% mullbärssilke, 40x60 cm",
  images: [
    {
      src: "/products/silkesorngott/silkesorngott-thumbnail.webp",
      alt: "Örngott i 100% mullbärssilke, 40x60 cm",
      label: "Silkesörngott",
    },
    {
      src: "/products/silkesorngott/silkesorngott-1.webp",
      alt: "Örngott i 100% mullbärssilke med slät yta",
      label: "Slät yta",
    },
    {
      src: "/products/silkesorngott/silkesorngott-2.webp",
      alt: "Silkesörngott i 19 momme mullbärssilke",
      label: "19 momme",
    },
    {
      src: "/products/silkesorngott/silkesorngott-3.webp",
      alt: "Detaljbild av örngott i 100% mullbärssilke",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4vR9513",
  pageHref: "/skonhet/silkesorngott",
  summary: "Ett örngott i 100% mullbärssilke (19 momme) med en slät yta som ger mindre friktion mot hår och hud. Det innebär ofta mindre frizz, färre bäddveck och färre tovor på morgonen – och det känns skönt och svalt att sova på.",
  evaluation: {
    headline: "Slät silkesyta för mindre frizz",
    intro: "Elin går igenom örngottet i 100% mullbärssilke: 19 momme och en len, slät yta som ger mindre friktion mot håret och huden medan du sover. Mindre friktion betyder ofta mindre frizz, färre bäddveck och färre tovor på morgonen, plus en svalare känsla mot kinden.",
    verdict: "Skönt silkesörngott för mindre frizz och mjukare morgnar – med stark social proof.",
    checks: [],
  },
  specSectionEyebrow: "Hårvård",
  specSectionTitle: "Örngott i 100% mullbärssilke",
  specs: [
    {
      label: "Material",
      caption: "Tyg",
      value: "100% mullbärssilke, 19 momme",
    },
    {
      label: "Storlek",
      caption: "Mått",
      value: "40x60 cm",
    },
    {
      label: "Effekt",
      caption: "Känsla",
      value: "Slät yta, mindre friktion mot hår och hud",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4vR9513",
    ratingSummary: "Amazon visar 4,5 av 5 från 6 754 omdömen.",
    highlights: [
      "Köpare upplever mindre frizz och färre tovor i håret på morgonen.",
      "Den släta silkesytan beskrivs som len och sval mot huden.",
      "Många tycker att de vaknar med färre bäddveck i ansiktet.",
    ],
    cautions: [
      "Silke kräver skonsam tvätt – följ silkesprogram eller handtvätt så håller örngottet längre.",
      "Mullbärssilke ligger i en högre prisklass än vanliga bomullsörngott.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const tangleTeezerOriginalProduct: Product = {
  slug: "tangle-teezer-original",
  title: "Tangle Teezer The Original – utredande hårborste",
  category: "skonhet",
  asin: "B0086QEO7K",
  brand: "Tangle Teezer",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Reder ut tovor",
    "Vått & torrt hår",
    "Nätt & greppvänlig",
  ],
  image: "/products/tangle-teezer-original/tangle-teezer-thumbnail.webp",
  imageAlt: "Tangle Teezer The Original utredande hårborste",
  images: [
    {
      src: "/products/tangle-teezer-original/tangle-teezer-thumbnail.webp",
      alt: "Tangle Teezer The Original utredande hårborste",
      label: "The Original",
    },
    {
      src: "/products/tangle-teezer-original/tangle-teezer-1.webp",
      alt: "Tangle Teezer The Original med flexibla tänder som reder ut tovor",
      label: "Flexibla tänder",
    },
    {
      src: "/products/tangle-teezer-original/tangle-teezer-2.webp",
      alt: "Tangle Teezer The Original nätt och greppvänlig form",
      label: "Greppvänlig",
    },
    {
      src: "/products/tangle-teezer-original/tangle-teezer-3.webp",
      alt: "Detaljbild av Tangle Teezer The Original utredande hårborste",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4aqEZZn",
  pageHref: "/skonhet/tangle-teezer",
  summary: "En ikonisk utredande hårborste vars flexibla tänder reder ut tovor skonsamt på både vått och torrt hår – med mindre drag och mindre brott. Nätt och greppvänlig form som passar i necessären och på resan.",
  evaluation: {
    headline: "Utredande borste för skonsam utredning",
    intro: "Elin går igenom Tangle Teezer The Original: en utredande hårborste med flexibla tänder i två längder som reder ut tovor steg för steg, på både vått och torrt hår. Det är en omtyckt klassiker som ofta lyfts fram för att den ger mindre drag i håret än en vanlig borste.",
    verdict: "En skonsam, greppvänlig utredande borste för vardagligt bruk – med enormt socialt stöd.",
    checks: [],
  },
  specSectionEyebrow: "Hårstyling (verktyg)",
  specSectionTitle: "Tangle Teezer The Original",
  specs: [
    {
      label: "Typ",
      caption: "Verktyg",
      value: "Utredande hårborste",
    },
    {
      label: "Tänder",
      caption: "Konstruktion",
      value: "Flexibla tänder i två längder",
    },
    {
      label: "Form",
      caption: "Hantering",
      value: "Nätt, greppvänlig, utan handtag",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4aqEZZn",
    ratingSummary: "Amazon visar 4,7 av 5 från 44 850 omdömen.",
    highlights: [
      "Köpare upplever att tovor reds ut med mindre drag i håret.",
      "Uppskattas på både vått och torrt hår i den dagliga rutinen.",
      "Den nätta, greppvänliga formen lyfts fram som smidig att hålla i.",
    ],
    cautions: [
      "Ingen mirakelborste för väldigt långt eller mycket lockigt hår – jobba i sektioner och nedifrån och upp.",
      "Tänderna fångar lossnat hår; rengör borsten regelbundet för bästa funktion.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const levoitCore200sProduct: Product = {
  slug: "levoit-core-200s-luftrenare",
  title: "Levoit Core 200S luftrenare med HEPA-filter",
  category: "halsa",
  asin: "B08FJ678YK",
  brand: "Levoit",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "HEPA-filter",
    "Tyst nattläge",
    "App & röststyrning",
  ],
  image: "/products/levoit-luftrenare/levoit-thumbnail.webp",
  imageAlt: "Levoit Core 200S luftrenare med HEPA-filter, vit",
  images: [
    {
      src: "/products/levoit-luftrenare/levoit-thumbnail.webp",
      alt: "Levoit Core 200S luftrenare med HEPA-filter, vit",
      label: "Levoit Core 200S",
    },
    {
      src: "/products/levoit-luftrenare/levoit-1.webp",
      alt: "Levoit Core 200S luftrenare med 3-lagers HEPA-filter",
      label: "3-lagers filter",
    },
    {
      src: "/products/levoit-luftrenare/levoit-2.webp",
      alt: "Levoit Core 200S med app- och röststyrning",
      label: "App-styrning",
    },
    {
      src: "/products/levoit-luftrenare/levoit-3.webp",
      alt: "Detaljbild av Levoit Core 200S luftrenare",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4aTddF2",
  pageHref: "/halsa/luftrenare",
  summary: "En kompakt smart luftrenare med 3-lagers HEPA-filter som fångar damm, pollen och partiklar för renare luft hemma. Tyst nattläge plus app- och röststyrning.",
  evaluation: {
    headline: "Renare luft med tyst nattläge",
    intro: "Elin går igenom Levoit Core 200S: en kompakt smart luftrenare med 3-lagers HEPA-filter som fångar damm, pollen och partiklar i luften. Tyst nattläge och styrning via app eller röst gör den enkel att ha igång i sovrum och mindre rum.",
    verdict: "Prisvärd, smart luftrenare för renare luft i sovrum och mindre rum.",
    checks: [],
  },
  specSectionEyebrow: "Smart hem",
  specSectionTitle: "Levoit Core 200S luftrenare",
  specs: [
    {
      label: "Filter",
      caption: "Typ",
      value: "3-lagers HEPA-filter",
    },
    {
      label: "Ljud",
      caption: "Nattläge",
      value: "Tyst drift, dämpad display",
    },
    {
      label: "Smart",
      caption: "Styrning",
      value: "App + röststyrning, timer",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4aTddF2",
    ratingSummary: "Amazon visar 4,6 av 5 från 31 901 omdömen.",
    highlights: [
      "Köpare upplever luften som fräschare och mindre dammig.",
      "Uppskattas för att vara riktigt tyst på nattläget.",
      "Kompakt storlek och enkel app- och röststyrning lyfts ofta fram.",
    ],
    cautions: [
      "Passar bäst i sovrum och mindre rum, inte stora ytor.",
      "HEPA-filtret är en förbrukningsvara som behöver bytas med jämna mellanrum.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const portentumHoppRepProduct: Product = {
  slug: "portentum-hopprep",
  title: "PORTENTUM hopprep med kullager (justerbart, 2,8 m)",
  category: "traning",
  asin: "B0DCT1PYCM",
  brand: "PORTENTUM",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Justerbar längd",
    "Kullager",
    "Halkfritt grepp",
  ],
  image: "/products/portentum-hopprep/hopprep-thumbnail.webp",
  imageAlt: "PORTENTUM hopprep med kullager och halkfritt skumgrepp",
  images: [
    {
      src: "/products/portentum-hopprep/hopprep-thumbnail.webp",
      alt: "PORTENTUM hopprep med kullager och halkfritt skumgrepp",
      label: "PORTENTUM hopprep",
    },
    {
      src: "/products/portentum-hopprep/hopprep-1.webp",
      alt: "PORTENTUM hopprep med justerbar stålvajer",
      label: "Justerbar vajer",
    },
    {
      src: "/products/portentum-hopprep/hopprep-2.webp",
      alt: "PORTENTUM hopprep med kullager för jämn rotation",
      label: "Kullager",
    },
    {
      src: "/products/portentum-hopprep/hopprep-3.webp",
      alt: "Detaljbild av PORTENTUM hopprep med skumgrepp",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/3SxKQGf",
  pageHref: "/traning/hopprep",
  summary: "Ett prisvärt hopprep med kullager och justerbar stålvajer för jämn, snabb rotation. Halkfritt skumgrepp gör det skönt att hålla i – smidig kondition hemma eller på gymmet.",
  evaluation: {
    headline: "Prisvärt hopprep för kondition hemma",
    intro: "Elin går igenom PORTENTUM hopprep: kullager för jämn rotation, justerbar stålvajer som du kapar till din längd och ett halkfritt skumgrepp. Ett enkelt, prisvärt sätt att få in mer puls i vardagen, hemma eller på gymmet.",
    verdict: "Prisvärt, smidigt hopprep för kondition och uppvärmning.",
    checks: [],
  },
  specSectionEyebrow: "Kondition",
  specSectionTitle: "PORTENTUM hopprep",
  specs: [
    {
      label: "Vajer",
      caption: "Längd",
      value: "Justerbar stålvajer, upp till 2,8 m",
    },
    {
      label: "Rotation",
      caption: "Lager",
      value: "Kullager för jämn rotation",
    },
    {
      label: "Grepp",
      caption: "Handtag",
      value: "Halkfritt skumgrepp",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3SxKQGf",
    ratingSummary: "Amazon visar 4,4 av 5 från 911 omdömen.",
    highlights: [
      "Köpare upplever rotationen som jämn och snabb tack vare kullagren.",
      "Greppet beskrivs som skönt och halkfritt även med svettiga händer.",
      "Enkelt att justera vajern till sin egen längd.",
    ],
    cautions: [
      "Du behöver kapa vajern till rätt längd vid första användning.",
      "Stålvajern passar bäst på jämnt underlag – slitage ökar på grov asfalt.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const ericFlagViktvastProduct: Product = {
  slug: "eric-flag-viktvast",
  title: "Eric Flag viktväst med justerbar vikt (10/20 kg)",
  category: "traning",
  asin: "B09WB1BF81",
  brand: "Eric Flag",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Justerbar vikt",
    "Löstagbara vikter",
    "Kardborrespänne",
  ],
  image: "/products/eric-flag-viktvast/viktvast-thumbnail.webp",
  imageAlt: "Eric Flag viktväst med justerbar vikt och löstagbara järnvikter",
  images: [
    {
      src: "/products/eric-flag-viktvast/viktvast-thumbnail.webp",
      alt: "Eric Flag viktväst med justerbar vikt och löstagbara järnvikter",
      label: "Eric Flag viktväst",
    },
    {
      src: "/products/eric-flag-viktvast/viktvast-1.webp",
      alt: "Eric Flag viktväst med löstagbara järnvikter",
      label: "Löstagbara vikter",
    },
    {
      src: "/products/eric-flag-viktvast/viktvast-2.webp",
      alt: "Eric Flag viktväst med justerbart kardborrespänne",
      label: "Justerbar passform",
    },
    {
      src: "/products/eric-flag-viktvast/viktvast-3.webp",
      alt: "Detaljbild av Eric Flag viktväst",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/3QBWm2N",
  pageHref: "/traning/viktvast",
  summary: "En justerbar viktväst med löstagbara järnvikter som ökar belastningen vid promenad, gång och hemmaträning. Sitter tajt med kardborrespänne för stabil passform.",
  evaluation: {
    headline: "Justerbar viktväst för mer belastning",
    intro: "Elin går igenom Eric Flag viktväst: löstagbara järnvikter som låter dig justera tyngden, och ett kardborrespänne som håller västen tajt mot kroppen. Ett enkelt sätt att öka belastningen vid promenad, gång och hemmaträning.",
    verdict: "Stabil, justerbar viktväst för promenad och hemmaträning.",
    checks: [],
  },
  specSectionEyebrow: "Vikter",
  specSectionTitle: "Eric Flag viktväst",
  specs: [
    {
      label: "Vikt",
      caption: "Alternativ",
      value: "Justerbar, 10 eller 20 kg",
    },
    {
      label: "Vikter",
      caption: "Typ",
      value: "Löstagbara järnvikter",
    },
    {
      label: "Passform",
      caption: "Spänne",
      value: "Justerbart kardborrespänne",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3QBWm2N",
    ratingSummary: "Amazon visar 4,7 av 5 från 1 237 omdömen.",
    highlights: [
      "Köpare upplever att västen sitter stabilt och tajt under träning.",
      "Möjligheten att ta bort och lägga till vikter uppskattas mycket.",
      "Bra upplevd kvalitet och sömnad för priset.",
    ],
    cautions: [
      "Full vikt kan kännas mycket i början – börja lägre och öka gradvis.",
      "Storlek och passform upplevs olika beroende på kroppstyp.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const celdyqueBakuchiolProduct: Product = {
  slug: "celdyque-bakuchiol-serum",
  title: "CELDYQUE Bakuchiol Concentrate Serum – retinol-alternativ (30 ml)",
  category: "skonhet",
  asin: "B0DC6H8MSW",
  brand: "CELDYQUE",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Växtbaserat bakuchiol",
    "Mildt alternativ",
    "Lyster",
  ],
  image: "/products/bakuchiol-serum/bakuchiol-thumbnail.webp",
  imageAlt: "CELDYQUE Bakuchiol Concentrate Serum, 30 ml",
  images: [
    {
      src: "/products/bakuchiol-serum/bakuchiol-thumbnail.webp",
      alt: "CELDYQUE Bakuchiol Concentrate Serum, 30 ml",
      label: "Bakuchiol",
    },
    {
      src: "/products/bakuchiol-serum/bakuchiol-1.webp",
      alt: "CELDYQUE bakuchiolserum som ett milt växtbaserat alternativ",
      label: "Växtbaserat",
    },
    {
      src: "/products/bakuchiol-serum/bakuchiol-2.webp",
      alt: "CELDYQUE bakuchiol textur och konsistens",
      label: "Lätt textur",
    },
    {
      src: "/products/bakuchiol-serum/bakuchiol-3.webp",
      alt: "Detaljbild av CELDYQUE Bakuchiol Concentrate Serum",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/3QokGFl",
  pageHref: "/skonhet/bakuchiol-serum",
  summary: "Ett serum med bakuchiol – ett milt, växtbaserat alternativ till retinol – för dig som vill ha slätare, mer lystrande hud utan den irritation som retinol ibland ger. Lätt textur som passar känslig hud.",
  evaluation: {
    headline: "Bakuchiol – mildt växtbaserat alternativ",
    intro: "Elin går igenom CELDYQUE Bakuchiol Concentrate Serum: bakuchiol är en växtbaserad ingrediens som ofta beskrivs som ett mildare alternativ till retinol. Det är omtyckt för att ge slätare, mer lystrande hud och en jämnare hudton, utan den svidning och flagning som retinol kan ge känslig hud.",
    verdict: "Milt växtbaserat serum för slätare, lystrande hud – fint för känslig hy.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "CELDYQUE Bakuchiol Concentrate",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Serum, 30 ml",
    },
    {
      label: "Innehåll",
      caption: "Aktivt",
      value: "Bakuchiol, växtbaserat",
    },
    {
      label: "Profil",
      caption: "Hudvård",
      value: "Känslig hud, milt alternativ",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3QokGFl",
    ratingSummary: "Amazon visar 4,6 av 5 från 847 omdömen.",
    highlights: [
      "Köpare upplever slätare och mer lystrande hud med tiden.",
      "Beskrivs som mildare än retinol och skonsamt mot känslig hud.",
      "Lätt textur som de flesta tycker absorberas snabbt.",
    ],
    cautions: [
      "Bakuchiol verkar gradvis – ge det några veckor för att märka skillnad.",
      "Som med alla nya serum: prova på en liten yta först om du har känslig hud.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const purestAhaBhaPeelingProduct: Product = {
  slug: "purest-aha-bha-peeling",
  title: "The Purest Solutions AHA 10% + BHA 2% Exfoliating Peeling (30 ml)",
  category: "skonhet",
  asin: "B08K5H5451",
  brand: "The Purest Solutions",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "AHA 10% + BHA 2%",
    "Lyster",
    "Jämnare hudton",
  ],
  image: "/products/aha-bha-peeling/peeling-thumbnail.webp",
  imageAlt: "The Purest Solutions AHA 10% + BHA 2% Exfoliating Peeling, 30 ml",
  images: [
    {
      src: "/products/aha-bha-peeling/peeling-thumbnail.webp",
      alt: "The Purest Solutions AHA 10% + BHA 2% Exfoliating Peeling, 30 ml",
      label: "AHA + BHA",
    },
    {
      src: "/products/aha-bha-peeling/peeling-1.webp",
      alt: "The Purest Solutions kemisk peeling med 10% AHA och 2% BHA",
      label: "10% + 2%",
    },
    {
      src: "/products/aha-bha-peeling/peeling-2.webp",
      alt: "The Purest Solutions peeling textur och konsistens",
      label: "Textur",
    },
    {
      src: "/products/aha-bha-peeling/peeling-3.webp",
      alt: "Detaljbild av The Purest Solutions AHA BHA peeling",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4et2FPi",
  pageHref: "/skonhet/ansiktspeeling",
  summary: "En kemisk ansiktspeeling med 10% AHA och 2% BHA som exfolierar huden för mer lyster och en jämnare hudton. Tänkt att användas varannan vecka som ett extrasteg i rutinen.",
  evaluation: {
    headline: "Kemisk peeling för lyster och jämnare hudton",
    intro: "Elin går igenom The Purest Solutions AHA 10% + BHA 2%: en kemisk peeling som exfolierar ytligt för att ge huden mer lyster och en jämnare hudton. AHA och BHA är omtyckta syror för att mjuka upp och fräscha till huden, och den här används som ett extrasteg ungefär varannan vecka.",
    verdict: "Prisvärd kemisk peeling för lyster och jämnare hudton – använd varannan vecka.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "The Purest Solutions AHA + BHA Peeling",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Peeling, 30 ml",
    },
    {
      label: "Innehåll",
      caption: "Aktivt",
      value: "10% AHA + 2% BHA",
    },
    {
      label: "Profil",
      caption: "Hudvård",
      value: "Exfoliering, varannan vecka",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4et2FPi",
    ratingSummary: "Amazon visar 4,4 av 5 från 504 omdömen.",
    highlights: [
      "Köpare upplever mer lyster och en jämnare hudton efter användning.",
      "Uppskattas för att kännas som ett enkelt extrasteg i rutinen.",
      "Många tycker huden känns slätare och fräschare dagen efter.",
    ],
    cautions: [
      "Starka syror kan svida – börja försiktigt och använd inte för ofta.",
      "Använd den på kvällen och hoppa över om huden känns irriterad.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const paulasChoiceBhaProduct: Product = {
  slug: "paulas-choice-2-bha",
  title: "Paula's Choice Skin Perfecting 2% BHA Liquid Exfoliant (30 ml)",
  category: "skonhet",
  asin: "B07PQSRXR6",
  brand: "Paula's Choice",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "2% salicylsyra",
    "Porer & lyster",
    "Kultfavorit",
  ],
  image: "/products/paulas-choice-bha/bha-thumbnail.webp",
  imageAlt: "Paula's Choice Skin Perfecting 2% BHA Liquid Exfoliant, 30 ml",
  images: [
    {
      src: "/products/paulas-choice-bha/bha-thumbnail.webp",
      alt: "Paula's Choice Skin Perfecting 2% BHA Liquid Exfoliant, 30 ml",
      label: "2% BHA",
    },
    {
      src: "/products/paulas-choice-bha/bha-1.webp",
      alt: "Paula's Choice 2% BHA exfoliant med salicylsyra",
      label: "Salicylsyra",
    },
    {
      src: "/products/paulas-choice-bha/bha-2.webp",
      alt: "Paula's Choice BHA flytande textur och konsistens",
      label: "Flytande",
    },
    {
      src: "/products/paulas-choice-bha/bha-3.webp",
      alt: "Detaljbild av Paula's Choice 2% BHA Liquid Exfoliant",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4wioG9H",
  pageHref: "/skonhet/bha-exfoliant",
  summary: "Ett ikoniskt flytande exfoliant med 2% salicylsyra (BHA) som mjukt exfolierar huden för renare porer, mer lyster och en slätare yta. En av de mest omtyckta exfolianterna på marknaden.",
  evaluation: {
    headline: "Salicylsyra för porer, lyster och slät hud",
    intro: "Elin går igenom Paula's Choice 2% BHA Liquid Exfoliant: ett flytande exfoliant med 2% salicylsyra som är känt för att hjälpa porer att se renare ut och ge huden mer lyster och en slätare yta. BHA är en omtyckt syra för blandad och fet hud, och just den här produkten är något av en kultfavorit.",
    verdict: "Kultfavorit-exfoliant för renare porer, lyster och slätare hud.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "Paula's Choice Skin Perfecting 2% BHA",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Flytande exfoliant, 30 ml",
    },
    {
      label: "Innehåll",
      caption: "Aktivt",
      value: "2% salicylsyra (BHA)",
    },
    {
      label: "Profil",
      caption: "Hudvård",
      value: "Porer, blandad och fet hud",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4wioG9H",
    ratingSummary: "Amazon visar 4,3 av 5 från 24 373 omdömen.",
    highlights: [
      "Tusentals köpare upplever renare porer och en slätare hudyta.",
      "Mycket uppskattad för mer lyster och en jämnare hudton.",
      "Lätt flytande textur som de flesta tycker absorberas snabbt.",
    ],
    cautions: [
      "Salicylsyra kan svida lätt i början – börja varannan dag.",
      "Trappa upp användningen gradvis och lyssna på hur huden känns.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const cetaphilGentleCleanserProduct: Product = {
  slug: "cetaphil-gentle-cleanser",
  title: "Cetaphil Gentle Skin Cleanser – mild ansiktsrengöring (460 ml)",
  category: "skonhet",
  asin: "B004CRN3BA",
  brand: "Cetaphil",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Mild rengöring",
    "Oparfymerad",
    "Känslig hud",
  ],
  image: "/products/cetaphil-cleanser/cetaphil-thumbnail.webp",
  imageAlt: "Cetaphil Gentle Skin Cleanser, 460 ml",
  images: [
    {
      src: "/products/cetaphil-cleanser/cetaphil-thumbnail.webp",
      alt: "Cetaphil Gentle Skin Cleanser, 460 ml",
      label: "Cetaphil",
    },
    {
      src: "/products/cetaphil-cleanser/cetaphil-1.webp",
      alt: "Cetaphil mild oparfymerad ansiktsrengöring för känslig hud",
      label: "Oparfymerad",
    },
    {
      src: "/products/cetaphil-cleanser/cetaphil-2.webp",
      alt: "Cetaphil rengöring textur och konsistens",
      label: "Mild textur",
    },
    {
      src: "/products/cetaphil-cleanser/cetaphil-3.webp",
      alt: "Detaljbild av Cetaphil Gentle Skin Cleanser",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4argDii",
  pageHref: "/skonhet/cetaphil-rengoring",
  summary: "En mild, oparfymerad ansiktsrengöring i stor 460 ml-förpackning, gjord med tanke på känslig och torr hud. Rengör skonsamt utan att torka ut, som ett tryggt första steg i rutinen.",
  evaluation: {
    headline: "Mild rengöring för känslig och torr hud",
    intro: "Elin går igenom Cetaphil Gentle Skin Cleanser: en mild, oparfymerad rengöring som är gjord med tanke på känslig och torr hud. Den rengör skonsamt utan att lämna huden stram, och är ett omtyckt basval för dig som vill ha ett enkelt och tryggt första steg i rutinen.",
    verdict: "Trygg, mild rengöring för känslig och torr hud – rengör utan att torka ut.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "Cetaphil Gentle Skin Cleanser",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Rengöring, 460 ml",
    },
    {
      label: "Innehåll",
      caption: "Profil",
      value: "Mild, oparfymerad",
    },
    {
      label: "Profil",
      caption: "Hudvård",
      value: "Känslig och torr hud",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4argDii",
    ratingSummary: "Amazon visar 4,7 av 5 från 554 omdömen.",
    highlights: [
      "Köpare upplever att den rengör skonsamt utan att torka ut huden.",
      "Uppskattas för att vara oparfymerad och mild mot känslig hud.",
      "Den stora förpackningen tycker många räcker länge.",
    ],
    cautions: [
      "Mild rengöring tar inte alltid bort vattenfast smink på egen hand.",
      "Vill du ha rik lödder kan den kännas mild – den skummar lite.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const someByMiCleansingOilProduct: Product = {
  slug: "some-by-mi-cleansing-oil",
  title: "Some By Mi Lacto Soy Cleansing Oil (200 ml)",
  category: "skonhet",
  asin: "B0DGVYM26L",
  brand: "SOME BY MI",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Rengöringsolja",
    "Double cleansing",
    "Löser smink",
  ],
  image: "/products/cleansing-oil/cleansing-oil-thumbnail.webp",
  imageAlt: "Some By Mi Lacto Soy Cleansing Oil, 200 ml",
  images: [
    {
      src: "/products/cleansing-oil/cleansing-oil-thumbnail.webp",
      alt: "Some By Mi Lacto Soy Cleansing Oil, 200 ml",
      label: "Cleansing oil",
    },
    {
      src: "/products/cleansing-oil/cleansing-oil-1.webp",
      alt: "Some By Mi rengöringsolja för double cleansing",
      label: "Double cleanse",
    },
    {
      src: "/products/cleansing-oil/cleansing-oil-2.webp",
      alt: "Some By Mi Lacto Soy cleansing oil textur och konsistens",
      label: "Olja-textur",
    },
    {
      src: "/products/cleansing-oil/cleansing-oil-3.webp",
      alt: "Detaljbild av Some By Mi Lacto Soy Cleansing Oil",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4f61VzO",
  pageHref: "/skonhet/rengoringsolja",
  summary: "En rengöringsolja för det första steget i double cleansing. Den löser upp smink och solkräm och sköljs sedan av rent, så att din vanliga rengöring får jobba på ren hud.",
  evaluation: {
    headline: "Rengöringsolja som löser smink och sköljs av rent",
    intro: "Elin går igenom Some By Mi Lacto Soy Cleansing Oil: en rengöringsolja som används som första steg i double cleansing. Oljan löser upp smink och solkräm och emulgerar med vatten så att den sköljs av rent, utan en fet hinna. Det är ett omtyckt steg för dig som vill ha ren hud före din vanliga rengöring.",
    verdict: "Rengöringsolja som löser smink fint och sköljs av rent – steg ett i rutinen.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "Some By Mi Lacto Soy Cleansing Oil",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Rengöringsolja, 200 ml",
    },
    {
      label: "Innehåll",
      caption: "Användning",
      value: "Steg ett i double cleansing",
    },
    {
      label: "Profil",
      caption: "Hudvård",
      value: "Löser smink, sköljs av rent",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4f61VzO",
    ratingSummary: "Amazon visar 4,3 av 5 från 99 omdömen.",
    highlights: [
      "De första köparna upplever att den löser smink och solkräm fint.",
      "Beskrivs som lätt att skölja av utan en fet hinna kvar.",
      "Uppskattas som ett enkelt första steg i double cleansing.",
    ],
    cautions: [
      "Ännu ganska få omdömen, så helhetsbilden är fortfarande begränsad.",
      "Rengöringsolja behöver oftast följas av en vanlig rengöring efteråt.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const biodermaSensibioProduct: Product = {
  slug: "bioderma-sensibio-h2o",
  title: "Bioderma Sensibio H2O – micellärt vatten (500 ml)",
  category: "skonhet",
  asin: "B002XZLAWM",
  brand: "Bioderma",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Micellärt vatten",
    "Tar bort smink",
    "Känslig hud",
  ],
  image: "/products/bioderma-sensibio/bioderma-thumbnail.webp",
  imageAlt: "Bioderma Sensibio H2O micellärt vatten, 500 ml",
  images: [
    {
      src: "/products/bioderma-sensibio/bioderma-thumbnail.webp",
      alt: "Bioderma Sensibio H2O micellärt vatten, 500 ml",
      label: "Sensibio H2O",
    },
    {
      src: "/products/bioderma-sensibio/bioderma-1.webp",
      alt: "Bioderma Sensibio H2O micellärt vatten för känslig hud",
      label: "Känslig hud",
    },
    {
      src: "/products/bioderma-sensibio/bioderma-2.webp",
      alt: "Bioderma Sensibio H2O som rengör och tar bort smink",
      label: "Rengör & sminkbort",
    },
    {
      src: "/products/bioderma-sensibio/bioderma-3.webp",
      alt: "Detaljbild av Bioderma Sensibio H2O flaska",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/3QIZ4U0",
  pageHref: "/skonhet/micellart-vatten",
  summary: "Ett skonsamt micellärt vatten som rengör huden och tar bort smink i ett steg – framtaget med tanke på känslig hud. Inget behov av att skölja, bara att svepa över med en bomullsrondell.",
  evaluation: {
    headline: "Micellärt vatten för känslig hud",
    intro: "Elin går igenom Bioderma Sensibio H2O: ett micellärt vatten som lyfter bort smink och smuts utan att skölja. Micellerna fångar upp orenheter på ett mjukt sätt, och formulan är gjord för känslig hud som lätt blir irriterad av starkare rengöring.",
    verdict: "Klassiskt, skonsamt micellärt vatten som passar känslig hud i vardagen.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "Bioderma Sensibio H2O",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Micellärt vatten, 500 ml",
    },
    {
      label: "Funktion",
      caption: "Steg",
      value: "Rengör och tar bort smink",
    },
    {
      label: "Profil",
      caption: "Hudvård",
      value: "Känslig hud, ingen sköljning",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3QIZ4U0",
    ratingSummary: "Amazon visar 4,7 av 5 från 34142 omdömen.",
    highlights: [
      "Köpare upplever att det tar bort smink mjukt och effektivt.",
      "Uppskattas för att kännas skonsamt även för känslig hud.",
      "Många gillar den stora flaskan som räcker länge.",
    ],
    cautions: [
      "Tar inte alltid bort vattenfast mascara i ett enda svep – kan behöva en extra rondell.",
      "Vissa föredrar att skölja ansiktet efteråt även om det inte krävs.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const cosrxAhaBhaTonerProduct: Product = {
  slug: "cosrx-aha-bha-toner",
  title: "COSRX AHA/BHA Clarifying Treatment Toner (150 ml)",
  category: "skonhet",
  asin: "B00OZ63ODA",
  brand: "COSRX",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "AHA/BHA",
    "Lyster",
    "Dagligt steg",
  ],
  image: "/products/cosrx-toner/cosrx-toner-thumbnail.webp",
  imageAlt: "COSRX AHA/BHA Clarifying Treatment Toner, 150 ml",
  images: [
    {
      src: "/products/cosrx-toner/cosrx-toner-thumbnail.webp",
      alt: "COSRX AHA/BHA Clarifying Treatment Toner, 150 ml",
      label: "AHA/BHA Toner",
    },
    {
      src: "/products/cosrx-toner/cosrx-toner-1.webp",
      alt: "COSRX AHA/BHA toner med mild exfoliering",
      label: "Mild exfoliering",
    },
    {
      src: "/products/cosrx-toner/cosrx-toner-2.webp",
      alt: "COSRX AHA/BHA toner textur och konsistens",
      label: "Lätt textur",
    },
    {
      src: "/products/cosrx-toner/cosrx-toner-3.webp",
      alt: "Detaljbild av COSRX AHA/BHA Clarifying Treatment Toner",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4bbto0u",
  pageHref: "/skonhet/exfolierande-toner",
  summary: "En mild exfolierande toner med AHA och BHA som hjälper huden att se jämnare ut och få mer lyster. Tänkt som ett dagligt steg efter rengöring, före serum och fuktkräm.",
  evaluation: {
    headline: "Exfolierande toner för lyster",
    intro: "Elin går igenom COSRX AHA/BHA Clarifying Treatment Toner: en mild toner med AHA och BHA som mjukt jämnar ut hudens yta. Syrorna hjälper huden att se mer strålande ut och hudtonen att verka jämnare, och formulan är gjord för att kunna användas dagligen.",
    verdict: "Mild, prisvärd AHA/BHA-toner för lyster och en jämnare hudton i vardagen.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "COSRX AHA/BHA Clarifying Treatment Toner",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Toner, 150 ml",
    },
    {
      label: "Innehåll",
      caption: "Aktivt",
      value: "AHA och BHA",
    },
    {
      label: "Profil",
      caption: "Hudvård",
      value: "Dagligt steg, mild exfoliering",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4bbto0u",
    ratingSummary: "Amazon visar 4,5 av 5 från 7750 omdömen.",
    highlights: [
      "Köpare upplever en jämnare och mer strålande hud med tiden.",
      "Uppskattas som ett milt, dagligt exfolieringssteg.",
      "Lätt textur som de flesta tycker absorberas snabbt.",
    ],
    cautions: [
      "AHA/BHA kan svida lätt i början – börja gärna varannan dag.",
      "Syror gör huden mer solkänslig; var noga med din vanliga dagrutin.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const cetaphilMoisturizingCreamProduct: Product = {
  slug: "cetaphil-moisturizing-cream",
  title: "Cetaphil Moisturising Cream – fuktkräm för torr hud (453 g)",
  category: "skonhet",
  asin: "B003IO05U0",
  brand: "Cetaphil",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Rik fuktkräm",
    "Torr hud",
    "Ansikte & kropp",
  ],
  image: "/products/cetaphil-moisturizer/cetaphil-cream-thumbnail.webp",
  imageAlt: "Cetaphil Moisturising Cream fuktkräm, 453 g",
  images: [
    {
      src: "/products/cetaphil-moisturizer/cetaphil-cream-thumbnail.webp",
      alt: "Cetaphil Moisturising Cream fuktkräm, 453 g",
      label: "Fuktkräm",
    },
    {
      src: "/products/cetaphil-moisturizer/cetaphil-cream-1.webp",
      alt: "Cetaphil Moisturising Cream för torr och känslig hud",
      label: "Torr hud",
    },
    {
      src: "/products/cetaphil-moisturizer/cetaphil-cream-2.webp",
      alt: "Cetaphil Moisturising Cream textur och konsistens",
      label: "Rik textur",
    },
    {
      src: "/products/cetaphil-moisturizer/cetaphil-cream-3.webp",
      alt: "Detaljbild av Cetaphil Moisturising Cream burk",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/3QsHOCC",
  pageHref: "/skonhet/fuktkram",
  summary: "En rik, återfuktande kräm för torr och känslig hud som kan användas på både ansikte och kropp. Den stora burken räcker länge och passar dig som vill ha enkel, mättande fukt.",
  evaluation: {
    headline: "Rik fuktkräm för torr hud",
    intro: "Elin går igenom Cetaphil Moisturising Cream: en rik kräm som ger mättande fukt till torr och känslig hud. Den är gjord för att kunna användas på både ansikte och kropp, och den stora burken gör den till ett enkelt val för hela kroppen.",
    verdict: "Rik, prisvärd fuktkräm för torr hud på både ansikte och kropp.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "Cetaphil Moisturising Cream",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Fuktkräm, 453 g",
    },
    {
      label: "Funktion",
      caption: "Steg",
      value: "Mättande fukt för torr hud",
    },
    {
      label: "Profil",
      caption: "Hudvård",
      value: "Torr och känslig hud, ansikte och kropp",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3QsHOCC",
    ratingSummary: "Amazon visar 4,7 av 5 från 1742 omdömen.",
    highlights: [
      "Köpare upplever att den ger mättande fukt åt torr hud.",
      "Uppskattas för att kännas mild på känslig hud.",
      "Många gillar den stora burken som räcker länge.",
    ],
    cautions: [
      "Den rika texturen kan kännas tung för dig med fet eller blandad hy.",
      "Burkformatet gör det svårare att hålla helt hygieniskt – använd gärna ren spatel.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const divainCaffeineEyeSerumProduct: Product = {
  slug: "divain-caffeine-eye-serum",
  title: "DIVAIN Caffeine Eye Serum – ögonserum (30 ml)",
  category: "skonhet",
  asin: "B0G15MV1BD",
  brand: "DIVAIN",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Koffein",
    "Ögonpartiet",
    "Lätt serum",
  ],
  image: "/products/divain-eye-serum/divain-thumbnail.webp",
  imageAlt: "DIVAIN Caffeine Eye Serum ögonserum, 30 ml",
  images: [
    {
      src: "/products/divain-eye-serum/divain-thumbnail.webp",
      alt: "DIVAIN Caffeine Eye Serum ögonserum, 30 ml",
      label: "Ögonserum",
    },
    {
      src: "/products/divain-eye-serum/divain-1.webp",
      alt: "DIVAIN Caffeine Eye Serum med koffein för ögonpartiet",
      label: "Koffein",
    },
    {
      src: "/products/divain-eye-serum/divain-2.webp",
      alt: "DIVAIN Caffeine Eye Serum textur och konsistens",
      label: "Lätt textur",
    },
    {
      src: "/products/divain-eye-serum/divain-3.webp",
      alt: "Detaljbild av DIVAIN Caffeine Eye Serum flaska",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4eyKPuc",
  pageHref: "/skonhet/ogonserum",
  summary: "Ett lätt ögonserum med koffein som hjälper till att fräscha upp ögonpartiet och mildra synliga mörka ringar. Tänkt som ett kosmetiskt steg som ger en piggare look kring ögonen.",
  evaluation: {
    headline: "Koffeinserum för ögonpartiet",
    intro: "Elin går igenom DIVAIN Caffeine Eye Serum: ett lätt ögonserum med koffein som är tänkt att fräscha upp ögonpartiet och mildra synliga mörka ringar på ett kosmetiskt sätt. Det här är en nyare produkt med få omdömen på Amazon, så Elin väljer den med försiktighet.",
    verdict: "Lätt koffeinserum för en piggare look kring ögonen – men ännu få omdömen.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "DIVAIN Caffeine Eye Serum",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Ögonserum, 30 ml",
    },
    {
      label: "Innehåll",
      caption: "Aktivt",
      value: "Koffein",
    },
    {
      label: "Profil",
      caption: "Hudvård",
      value: "Ögonpartiet, lätt textur",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4eyKPuc",
    ratingSummary: "Amazon visar 4,3 av 5 från 42 omdömen.",
    highlights: [
      "Tidiga köpare upplever ett piggare ögonparti.",
      "Lätt textur som de flesta tycker absorberas snabbt.",
      "Uppskattas som ett enkelt steg kring ögonen.",
    ],
    cautions: [
      "Produkten har ännu mycket få omdömen, så helhetsbilden är osäker.",
      "Var försiktig nära ögonen och prova gärna på en liten yta först.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const someByMiMatchaClayMaskProduct: Product = {
  slug: "some-by-mi-matcha-clay-mask",
  title: "Some By Mi Super Matcha Pore Clean Clay Mask (100 g)",
  category: "skonhet",
  asin: "B08KPZH3JR",
  brand: "SOME BY MI",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Lermask",
    "Matcha",
    "Porer",
  ],
  image: "/products/matcha-clay-mask/clay-mask-thumbnail.webp",
  imageAlt: "Some By Mi Super Matcha Pore Clean Clay Mask, 100 g",
  images: [
    {
      src: "/products/matcha-clay-mask/clay-mask-thumbnail.webp",
      alt: "Some By Mi Super Matcha Pore Clean Clay Mask, 100 g",
      label: "Lermask",
    },
    {
      src: "/products/matcha-clay-mask/clay-mask-1.webp",
      alt: "Some By Mi matcha lermask som rengör porerna",
      label: "Rengör porer",
    },
    {
      src: "/products/matcha-clay-mask/clay-mask-2.webp",
      alt: "Some By Mi matcha lermask textur och konsistens",
      label: "Krämig lera",
    },
    {
      src: "/products/matcha-clay-mask/clay-mask-3.webp",
      alt: "Detaljbild av Some By Mi Super Matcha Pore Clean Clay Mask",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4g4Rmhv",
  pageHref: "/skonhet/lermask",
  summary: "En lermask med matcha som rengör porerna på djupet och mattar glans. Tänkt som en behandling 1–2 gånger i veckan för en renare känsla och en mer mattad hud.",
  evaluation: {
    headline: "Lermask med matcha för porerna",
    intro: "Elin går igenom Some By Mi Super Matcha Pore Clean Clay Mask: en lermask med matcha som rengör porerna och mattar glans. Leran drar åt sig orenheter och fett, och masken är tänkt som ett behandlingssteg 1–2 gånger i veckan snarare än varje dag.",
    verdict: "Rengörande lermask med matcha för porerna och en mattare hud, 1–2 ggr/vecka.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "Some By Mi Super Matcha Pore Clean Clay Mask",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Lermask, 100 g",
    },
    {
      label: "Innehåll",
      caption: "Aktivt",
      value: "Matcha och lera",
    },
    {
      label: "Profil",
      caption: "Hudvård",
      value: "Porer, glans, 1–2 ggr/vecka",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4g4Rmhv",
    ratingSummary: "Amazon visar 4,5 av 5 från 271 omdömen.",
    highlights: [
      "Köpare upplever en renare känsla och mindre synlig glans.",
      "Uppskattas för att porerna känns rengjorda efter användning.",
      "Många gillar den krämiga leran som är lätt att applicera.",
    ],
    cautions: [
      "Lermasker kan kännas uttorkande – följ upp med fuktkräm efteråt.",
      "Använd inte för ofta; 1–2 gånger i veckan räcker för de flesta.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const beautyOfJoseonCentellaMaskProduct: Product = {
  slug: "beauty-of-joseon-centella-mask",
  title: "Beauty of Joseon Centella Asiatica Calming Mask (sheet mask)",
  category: "skonhet",
  asin: "B08LLBKL7J",
  brand: "Beauty of Joseon",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Centella asiatica",
    "Lugnande",
    "Fukt-boost",
  ],
  image: "/products/boj-centella-mask/boj-mask-thumbnail.webp",
  imageAlt: "Beauty of Joseon Centella Asiatica Calming Mask, sheet mask",
  images: [
    {
      src: "/products/boj-centella-mask/boj-mask-thumbnail.webp",
      alt: "Beauty of Joseon Centella Asiatica Calming Mask, sheet mask",
      label: "Centella-mask",
    },
    {
      src: "/products/boj-centella-mask/boj-mask-1.webp",
      alt: "Beauty of Joseon Centella sheet mask med lugnande centella asiatica",
      label: "Lugnande",
    },
    {
      src: "/products/boj-centella-mask/boj-mask-2.webp",
      alt: "Beauty of Joseon Centella mask förpackning och innehåll",
      label: "Förpackning",
    },
    {
      src: "/products/boj-centella-mask/boj-mask-3.webp",
      alt: "Detaljbild av Beauty of Joseon Centella Asiatica Calming Mask",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4eJCpPD",
  pageHref: "/skonhet/sheet-mask",
  summary: "En lugnande sheet mask med centella asiatica som ger huden en snabb boost av fukt och comfort. Perfekt när huden känns torr eller stressad och du vill ha en lugn, mer återhämtad känsla på några minuter.",
  evaluation: {
    headline: "Centella sheet mask för fukt och comfort",
    intro: "Elin går igenom Beauty of Joseon Centella Asiatica Calming Mask: en sheet mask indränkt i serum med centella asiatica, en omtyckt ingrediens för en lugn och behaglig känsla i huden. Tanken är en snabb fukt-boost när huden känns torr eller stressad.",
    verdict: "Lugnande fukt-boost för stunder när huden behöver lite extra comfort.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "Beauty of Joseon Centella Calming Mask",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Sheet mask",
    },
    {
      label: "Innehåll",
      caption: "Aktivt",
      value: "Centella asiatica-extrakt",
    },
    {
      label: "Profil",
      caption: "Hudvård",
      value: "Lugnande fukt-boost för alla hudtyper",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4eJCpPD",
    ratingSummary: "Amazon visar 4,2 av 5 från 22 omdömen.",
    highlights: [
      "Köpare upplever en lugn och behaglig känsla efter användning.",
      "Masken är väl indränkt i serum och ger en tydlig fukt-boost.",
      "Uppskattas som en snabb pigg-upp-stund för torr eller stressad hud.",
    ],
    cautions: [
      "Få omdömen ännu, så helhetsbilden är begränsad och upplevelsen kan variera.",
      "En sheet mask ger en tillfällig boost snarare än ett permanent resultat.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const cosrxCentellaAmpouleProduct: Product = {
  slug: "cosrx-centella-ampoule",
  title: "COSRX Centella Aqua Soothing Ampoule (centella-serum)",
  category: "skonhet",
  asin: "B091T71HVD",
  brand: "COSRX",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Centella asiatica",
    "Lugnande",
    "Lätt & vattnig",
  ],
  image: "/products/cosrx-centella/cosrx-centella-thumbnail.webp",
  imageAlt: "COSRX Centella Aqua Soothing Ampoule, centella-serum",
  images: [
    {
      src: "/products/cosrx-centella/cosrx-centella-thumbnail.webp",
      alt: "COSRX Centella Aqua Soothing Ampoule, centella-serum",
      label: "Centella-ampoule",
    },
    {
      src: "/products/cosrx-centella/cosrx-centella-1.webp",
      alt: "COSRX Centella ampoule med lugnande centella asiatica",
      label: "Lugnande",
    },
    {
      src: "/products/cosrx-centella/cosrx-centella-2.webp",
      alt: "COSRX Centella ampoule lätt och vattnig textur",
      label: "Lätt textur",
    },
    {
      src: "/products/cosrx-centella/cosrx-centella-3.webp",
      alt: "Detaljbild av COSRX Centella Aqua Soothing Ampoule",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4basIbK",
  pageHref: "/skonhet/centella-serum",
  summary: "En lugnande centella-ampoule med lätt, vattnig textur som passar känslig, lättirriterad hud. Centella asiatica ger en lugn och behaglig känsla, och den tunna konsistensen lägger sig snabbt utan att kännas tung.",
  evaluation: {
    headline: "Centella-ampoule för känslig hud",
    intro: "Elin går igenom COSRX Centella Aqua Soothing Ampoule: en lätt, vattnig ampoule med centella asiatica. Centella är en omtyckt ingrediens för en lugn och behaglig känsla, och den tunna texturen är gjord för känslig, lättirriterad hud som vill ha något milt och absorberbart.",
    verdict: "Mild, lätt centella-ampoule för känslig och lättirriterad hud.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "COSRX Centella Aqua Soothing Ampoule",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Ampoule / serum",
    },
    {
      label: "Innehåll",
      caption: "Aktivt",
      value: "Centella asiatica-extrakt",
    },
    {
      label: "Profil",
      caption: "Hudvård",
      value: "Känslig, lättirriterad hud",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4basIbK",
    ratingSummary: "Amazon visar 4,5 av 5 från 272 omdömen.",
    highlights: [
      "Köpare upplever en lugn och behaglig känsla, särskilt vid lättirriterad hud.",
      "Lätt, vattnig textur som de flesta tycker absorberas snabbt.",
      "Uppskattas som ett milt steg som känns skonsamt även för känslig hud.",
    ],
    cautions: [
      "Den lätta texturen kan kännas för tunn om du föredrar ett rikare serum.",
      "Som med all ny hudvård kan känslig hud reagera olika – testa gärna en liten yta först.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const beautyOfJoseonPropolisProduct: Product = {
  slug: "beauty-of-joseon-propolis-serum",
  title: "Beauty of Joseon Glow Serum – Propolis + Niacinamide (30 ml)",
  category: "skonhet",
  asin: "B086VKZZZY",
  brand: "Beauty of Joseon",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Propolis + niacinamide",
    "Lyster & glow",
    "Jämnare hudton",
  ],
  image: "/products/boj-propolis/boj-propolis-thumbnail.webp",
  imageAlt: "Beauty of Joseon Glow Serum med propolis och niacinamide, 30 ml",
  images: [
    {
      src: "/products/boj-propolis/boj-propolis-thumbnail.webp",
      alt: "Beauty of Joseon Glow Serum med propolis och niacinamide, 30 ml",
      label: "Glow Serum",
    },
    {
      src: "/products/boj-propolis/boj-propolis-1.webp",
      alt: "Beauty of Joseon Glow Serum med propolis för lyster",
      label: "Propolis",
    },
    {
      src: "/products/boj-propolis/boj-propolis-2.webp",
      alt: "Beauty of Joseon Glow Serum textur och konsistens",
      label: "Textur",
    },
    {
      src: "/products/boj-propolis/boj-propolis-3.webp",
      alt: "Detaljbild av Beauty of Joseon Glow Serum propolis niacinamide",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4eJCDpX",
  pageHref: "/skonhet/propolis-serum",
  summary: "Ett lystergivande serum med propolis och niacinamide för glow och en jämnare hudton. Den lätt sirapsaktiga texturen ger en behaglig, dewy känsla och passar fint i en rutin där du vill lyfta hudens lyster.",
  evaluation: {
    headline: "Propolis-serum för glow och jämnare hudton",
    intro: "Elin går igenom Beauty of Joseon Glow Serum: propolis tillsammans med niacinamide, en omtyckt kombination för lyster och en jämnare hudton. Tanken är ett serum som ger huden en piggare, mer strålande look med en behaglig, dewy känsla.",
    verdict: "Omtyckt glow-serum med propolis och niacinamide för lyster och jämnare hudton.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "Beauty of Joseon Glow Serum",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Serum, 30 ml",
    },
    {
      label: "Innehåll",
      caption: "Aktivt",
      value: "Propolis + niacinamide",
    },
    {
      label: "Profil",
      caption: "Hudvård",
      value: "Lyster och jämnare hudton",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4eJCDpX",
    ratingSummary: "Amazon visar 4,4 av 5 från 3973 omdömen.",
    highlights: [
      "Köpare upplever mer glow och en piggare, mer strålande hud med tiden.",
      "Många tycker att hudtonen ser jämnare och mer utvilad ut.",
      "Den lätt sirapsaktiga texturen ger en behaglig, dewy känsla.",
    ],
    cautions: [
      "Den lätt sirapsaktiga texturen kan kännas klibbig för den som gillar ett torrt finish.",
      "Innehåller propolis (bibaserad ingrediens) – undvik om du är allergisk mot bi-produkter.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const anuaAzelaicSerumProduct: Product = {
  slug: "anua-azelaic-acid-serum",
  title: "Anua Azelaic Acid 10 + Hyaluron Soothing Serum (30 ml)",
  category: "skonhet",
  asin: "B0DX122DHW",
  brand: "ANUA",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "10% azelainsyra",
    "Hyaluron",
    "Jämnare hudton",
  ],
  image: "/products/anua-azelaic/anua-azelaic-thumbnail.webp",
  imageAlt: "Anua Azelaic Acid 10 + Hyaluron Soothing Serum, 30 ml",
  images: [
    {
      src: "/products/anua-azelaic/anua-azelaic-thumbnail.webp",
      alt: "Anua Azelaic Acid 10 + Hyaluron Soothing Serum, 30 ml",
      label: "Azelainsyra-serum",
    },
    {
      src: "/products/anua-azelaic/anua-azelaic-1.webp",
      alt: "Anua serum med 10% azelainsyra för jämnare hudton",
      label: "10% azelainsyra",
    },
    {
      src: "/products/anua-azelaic/anua-azelaic-2.webp",
      alt: "Anua Azelaic serum textur och konsistens",
      label: "Textur",
    },
    {
      src: "/products/anua-azelaic/anua-azelaic-3.webp",
      alt: "Detaljbild av Anua Azelaic Acid 10 Soothing Serum",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4xSjD1a",
  pageHref: "/skonhet/azelainsyra-serum",
  summary: "Ett serum med 10% azelainsyra och hyaluron för en jämnare hudton, mer lyster och en lugnare, mindre rödflammig look. Hyaluron ger samtidigt ett fuktsteg så att huden känns balanserad och behaglig.",
  evaluation: {
    headline: "Azelainsyra-serum för jämnare hudton",
    intro: "Elin går igenom Anua Azelaic Acid 10 + Hyaluron Soothing Serum: 10% azelainsyra tillsammans med hyaluron. Azelainsyra är en omtyckt ingrediens för en jämnare hudton och en lugnare look, och hyaluron lägger till ett återfuktande steg för en behaglig känsla.",
    verdict: "Azelainsyra-serum för jämnare hudton, lyster och en lugnare look.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "Anua Azelaic Acid 10 + Hyaluron Serum",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Serum, 30 ml",
    },
    {
      label: "Innehåll",
      caption: "Aktivt",
      value: "10% azelainsyra + hyaluron",
    },
    {
      label: "Profil",
      caption: "Hudvård",
      value: "Jämnare hudton och lugnare look",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4xSjD1a",
    ratingSummary: "Amazon visar 4,5 av 5 från 1521 omdömen.",
    highlights: [
      "Köpare upplever en jämnare hudton och mer lyster med tiden.",
      "Många tycker att huden ser lugnare och mindre rödflammig ut.",
      "Hyaluron ger ett återfuktande steg som känns behagligt och balanserat.",
    ],
    cautions: [
      "Azelainsyra kan kännas lätt vid första introduktionen – börja gärna varannan dag.",
      "Som med all ny hudvård kan känslig hud reagera olika – testa gärna en liten yta först.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const inkeyPeptideMoisturizerProduct: Product = {
  slug: "inkey-peptide-moisturizer",
  title: "The INKEY List Peptide Moisturiser (50 ml)",
  category: "skonhet",
  asin: "B09PP3BCKW",
  brand: "The INKEY List",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Peptider",
    "Återfuktande",
    "Smidigare känsla",
  ],
  image: "/products/inkey-peptide/inkey-peptide-thumbnail.webp",
  imageAlt: "The INKEY List Peptide Moisturiser, 50 ml",
  images: [
    {
      src: "/products/inkey-peptide/inkey-peptide-thumbnail.webp",
      alt: "The INKEY List Peptide Moisturiser, 50 ml",
      label: "Peptidkräm",
    },
    {
      src: "/products/inkey-peptide/inkey-peptide-1.webp",
      alt: "The INKEY List Peptide Moisturiser med peptider för smidigare känsla",
      label: "Peptider",
    },
    {
      src: "/products/inkey-peptide/inkey-peptide-2.webp",
      alt: "The INKEY List Peptide Moisturiser textur och konsistens",
      label: "Textur",
    },
    {
      src: "/products/inkey-peptide/inkey-peptide-3.webp",
      alt: "Detaljbild av The INKEY List Peptide Moisturiser",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4eN0Pb1",
  pageHref: "/skonhet/peptidserum",
  summary: "En återfuktande peptidkräm som ger huden en smidigare, fylligare känsla. Peptider tillsammans med ett rejält fuktsteg gör att huden känns mjuk och välmående, perfekt som ett enkelt sista lager i rutinen.",
  evaluation: {
    headline: "Peptidkräm för smidigare, fylligare känsla",
    intro: "Elin går igenom The INKEY List Peptide Moisturiser: en återfuktande kräm med peptider. Peptider är en omtyckt ingrediens för en smidigare, fylligare känsla i huden, och krämen är gjord för att ge ett behagligt fuktsteg som låser in mjukheten.",
    verdict: "Återfuktande peptidkräm för en smidigare, fylligare och mjukare känsla.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "The INKEY List Peptide Moisturiser",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Fuktkräm, 50 ml",
    },
    {
      label: "Innehåll",
      caption: "Aktivt",
      value: "Peptider",
    },
    {
      label: "Profil",
      caption: "Hudvård",
      value: "Återfuktande, smidigare känsla",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4eN0Pb1",
    ratingSummary: "Amazon visar 4,2 av 5 från 438 omdömen.",
    highlights: [
      "Köpare upplever en smidigare, fylligare känsla i huden.",
      "Krämen ger ett behagligt fuktsteg som känns mjukt och välmående.",
      "Uppskattas som ett enkelt sista lager både morgon och kväll.",
    ],
    cautions: [
      "Den återfuktande texturen kan kännas för rik om du har väldigt fet hud.",
      "Som med all ny hudvård kan känslig hud reagera olika – testa gärna en liten yta först.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const marioBadescuFacialSprayProduct: Product = {
  slug: "mario-badescu-facial-spray",
  title: "Mario Badescu Facial Spray – Aloe, Herbs & Rosewater (236 ml)",
  category: "skonhet",
  asin: "B07RQ7D5QC",
  brand: "Mario Badescu",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Aloe & rosvatten",
    "Uppfräschande",
    "Fukt under dagen",
  ],
  image: "/products/mario-badescu-mist/mario-mist-thumbnail.webp",
  imageAlt: "Mario Badescu Facial Spray med aloe, örter och rosvatten, 236 ml",
  images: [
    {
      src: "/products/mario-badescu-mist/mario-mist-thumbnail.webp",
      alt: "Mario Badescu Facial Spray med aloe, örter och rosvatten, 236 ml",
      label: "Ansiktsmist",
    },
    {
      src: "/products/mario-badescu-mist/mario-mist-1.webp",
      alt: "Mario Badescu Facial Spray med aloe och rosvatten",
      label: "Aloe & rosvatten",
    },
    {
      src: "/products/mario-badescu-mist/mario-mist-2.webp",
      alt: "Mario Badescu Facial Spray sprayflaska närbild",
      label: "Sprayflaska",
    },
    {
      src: "/products/mario-badescu-mist/mario-mist-3.webp",
      alt: "Detaljbild av Mario Badescu Facial Spray",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4v3vtmq",
  pageHref: "/skonhet/ansiktsmist",
  summary: "En uppfräschande ansiktsmist med aloe och rosvatten som ger huden fukt och en pigg känsla mitt på dagen. Lätt att spreja över ren hud eller ovanpå makeup för en snabb boost.",
  evaluation: {
    headline: "Uppfräschande mist med aloe och rosvatten",
    intro: "Elin går igenom Mario Badescu Facial Spray: en lätt ansiktsmist med aloe, örter och rosvatten. Tanken är en snabb fuktboost och en pigg känsla under dagen – ett enkelt steg att spreja över ren hud eller ovanpå makeup när huden känns torr eller trött.",
    verdict: "Trevlig uppfräschande mist för fukt och en pigg känsla under dagen.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "Mario Badescu Facial Spray",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Ansiktsmist, 236 ml",
    },
    {
      label: "Innehåll",
      caption: "Nyckelingredienser",
      value: "Aloe, örter och rosvatten",
    },
    {
      label: "Profil",
      caption: "Hudvård",
      value: "Uppfräschande, alla hudtyper",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4v3vtmq",
    ratingSummary: "Amazon visar 4,6 av 5 från 168 omdömen.",
    highlights: [
      "Köpare beskriver en uppfräschande, pigg känsla under dagen.",
      "Den lätta misten uppskattas både på ren hud och ovanpå makeup.",
      "Doften av rosvatten lyfts ofta fram som trevlig och mild.",
    ],
    cautions: [
      "Doften av rosvatten passar inte alla – känns du dig känslig för dofter, prova försiktigt först.",
      "En mist ersätter inte ett fuktlager; lås gärna in fukten med fuktkräm vid torr hud.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const natureSpellFaceOilProduct: Product = {
  slug: "nature-spell-face-oil",
  title: "Nature Spell Vitamin Boost Face Oil (30 ml)",
  category: "skonhet",
  asin: "B0CG7DR94R",
  brand: "Nature Spell",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Vårdande olja",
    "Glow",
    "Sista steget på kvällen",
  ],
  image: "/products/nature-spell-oil/nature-oil-thumbnail.webp",
  imageAlt: "Nature Spell Vitamin Boost Face Oil, 30 ml",
  images: [
    {
      src: "/products/nature-spell-oil/nature-oil-thumbnail.webp",
      alt: "Nature Spell Vitamin Boost Face Oil, 30 ml",
      label: "Ansiktsolja",
    },
    {
      src: "/products/nature-spell-oil/nature-oil-1.webp",
      alt: "Nature Spell Vitamin Boost Face Oil för glow och återfuktning",
      label: "Glow",
    },
    {
      src: "/products/nature-spell-oil/nature-oil-2.webp",
      alt: "Nature Spell Vitamin Boost Face Oil textur och pipett",
      label: "Pipett",
    },
    {
      src: "/products/nature-spell-oil/nature-oil-3.webp",
      alt: "Detaljbild av Nature Spell Vitamin Boost Face Oil",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4wdWCUJ",
  pageHref: "/skonhet/ansiktsolja",
  summary: "En vårdande ansiktsolja för glow och återfuktning. Några droppar som sista steg på kvällen ger huden ett mjukt, lyster-fyllt finish och en mer återfuktad känsla till morgonen.",
  evaluation: {
    headline: "Vårdande olja för glow på kvällen",
    intro: "Elin går igenom Nature Spell Vitamin Boost Face Oil: en lätt ansiktsolja tänkt som sista steg i kvällsrutinen. Några droppar för glow och återfuktning, en kombination som hjälper huden att se mjuk och utvilad ut till morgonen.",
    verdict: "Vårdande ansiktsolja för glow och en mer återfuktad känsla, men mycket få omdömen ännu.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "Nature Spell Vitamin Boost Face Oil",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Ansiktsolja, 30 ml",
    },
    {
      label: "Användning",
      caption: "Steg",
      value: "Sista steget på kvällen",
    },
    {
      label: "Profil",
      caption: "Hudvård",
      value: "Glow och återfuktning",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4wdWCUJ",
    ratingSummary: "Amazon visar 4,7 av 5 från 35 omdömen.",
    highlights: [
      "Köpare beskriver en mjuk, glow-fylld känsla efter användning.",
      "Den lätta oljan uppskattas som sista steg på kvällen.",
      "Flera tycker att huden känns mer återfuktad till morgonen.",
    ],
    cautions: [
      "Antalet omdömen är ännu mycket lågt, så helhetsbilden är begränsad.",
      "Oljor passar inte alla hudtyper – känns huden tung, räcker ofta några få droppar.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const cosrxPimplePatchProduct: Product = {
  slug: "cosrx-acne-pimple-patch",
  title: "COSRX Acne Pimple Master Patch (24 patches)",
  category: "skonhet",
  asin: "B014SAB948",
  brand: "COSRX",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Hydrokolloid",
    "Täcker & skyddar",
    "24 patches",
  ],
  image: "/products/cosrx-pimple-patch/cosrx-patch-thumbnail.webp",
  imageAlt: "COSRX Acne Pimple Master Patch, 24 patches",
  images: [
    {
      src: "/products/cosrx-pimple-patch/cosrx-patch-thumbnail.webp",
      alt: "COSRX Acne Pimple Master Patch, 24 patches",
      label: "Pimple patches",
    },
    {
      src: "/products/cosrx-pimple-patch/cosrx-patch-1.webp",
      alt: "COSRX Acne Pimple Master Patch hydrokolloid-plåster",
      label: "Hydrokolloid",
    },
    {
      src: "/products/cosrx-pimple-patch/cosrx-patch-2.webp",
      alt: "COSRX Acne Pimple Master Patch olika storlekar",
      label: "Olika storlekar",
    },
    {
      src: "/products/cosrx-pimple-patch/cosrx-patch-3.webp",
      alt: "Detaljbild av COSRX Acne Pimple Master Patch",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4vyAc0z",
  pageHref: "/skonhet/pimple-patches",
  summary: "Hydrokolloid-plåster som täcker och skyddar en finne och gör det lättare att låta den vara i fred. Tunna, diskreta patches i olika storlekar som sitter bra över dagen eller natten.",
  evaluation: {
    headline: "Hydrokolloid-plåster som täcker och skyddar",
    intro: "Elin går igenom COSRX Acne Pimple Master Patch: tunna hydrokolloid-plåster i olika storlekar. Tanken är enkel – de täcker och skyddar finnen och gör det lättare att inte peta. En diskret patch att sätta på över dagen eller natten.",
    verdict: "Praktiska, diskreta plåster som täcker och skyddar finnen och hjälper dig låta den vara.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "COSRX Acne Pimple Master Patch",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Hydrokolloid-plåster, 24 patches",
    },
    {
      label: "Storlekar",
      caption: "Variation",
      value: "Tre storlekar per ark",
    },
    {
      label: "Profil",
      caption: "Hudvård",
      value: "Täcker och skyddar, diskret",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4vyAc0z",
    ratingSummary: "Amazon visar 4,5 av 5 från 32 859 omdömen.",
    highlights: [
      "Köpare uppskattar att plåstren är tunna och diskreta att ha på.",
      "Många tycker de sitter bra över både dag och natt.",
      "Lyfts ofta fram som ett enkelt sätt att låta finnen vara i fred.",
    ],
    cautions: [
      "Plåstren täcker och skyddar – de är ingen behandling och tar inte bort orsaken.",
      "Vidhäftningen varierar på fuktig eller väldigt fet hud; rengör och torka huden först.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const diorLipGlowOilProduct: Product = {
  slug: "dior-lip-glow-oil",
  title: "Dior Addict Lip Glow Oil – läppolja (000 Universal Clear)",
  category: "skonhet",
  asin: "B0B1Q6BCDG",
  brand: "Dior",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Vårdande läppolja",
    "Naturlig lyster",
    "Premium-favorit",
  ],
  image: "/products/dior-lip-oil/dior-lip-thumbnail.webp",
  imageAlt: "Dior Addict Lip Glow Oil läppolja, 000 Universal Clear",
  images: [
    {
      src: "/products/dior-lip-oil/dior-lip-thumbnail.webp",
      alt: "Dior Addict Lip Glow Oil läppolja, 000 Universal Clear",
      label: "Läppolja",
    },
  ],
  amazonUrl: "https://amzn.to/3QJ03DG",
  pageHref: "/skonhet/lip-oil",
  summary: "En vårdande, glansig läppolja som återfuktar och ger läpparna en naturlig lyster. En premium-favorit i nyansen 000 Universal Clear som ger glans utan att kännas klibbig.",
  evaluation: {
    headline: "Vårdande läppolja för naturlig lyster",
    intro: "Elin går igenom Dior Addict Lip Glow Oil i nyansen 000 Universal Clear: en vårdande läppolja som återfuktar och ger en glansig, naturlig lyster. En premium-favorit för dig som vill ha mjuka läppar med glans utan en klibbig känsla.",
    verdict: "Lyxig, vårdande läppolja för naturlig lyster och mjuka läppar – men få omdömen ännu.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "Dior Addict Lip Glow Oil",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Läppolja, 000 Universal Clear",
    },
    {
      label: "Finish",
      caption: "Resultat",
      value: "Glansig, naturlig lyster",
    },
    {
      label: "Profil",
      caption: "Hudvård",
      value: "Vårdande och återfuktande",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3QJ03DG",
    ratingSummary: "Amazon visar 4,5 av 5 från 65 omdömen.",
    highlights: [
      "Köpare beskriver mjuka läppar med en glansig, naturlig lyster.",
      "Den klara nyansen uppskattas för att passa de flesta.",
      "Flera tycker den känns vårdande utan att vara klibbig.",
    ],
    cautions: [
      "Antalet omdömen är ännu lågt, så helhetsbilden är begränsad.",
      "Glansen är en kosmetisk finish som mattas av med tiden och behöver läggas om.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const olayRegeneristNightProduct: Product = {
  slug: "olay-regenerist-night-cream",
  title: "Olay Regenerist Night Recovery – nattkräm (50 g)",
  category: "skonhet",
  asin: "B01M4R7CC5",
  brand: "Olay",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Rik nattkräm",
    "Återfuktande",
    "Smidigare känsla",
  ],
  image: "/products/olay-night-cream/olay-night-thumbnail.webp",
  imageAlt: "Olay Regenerist Night Recovery nattkräm, 50 g",
  images: [
    {
      src: "/products/olay-night-cream/olay-night-thumbnail.webp",
      alt: "Olay Regenerist Night Recovery nattkräm, 50 g",
      label: "Nattkräm",
    },
    {
      src: "/products/olay-night-cream/olay-night-1.webp",
      alt: "Olay Regenerist Night Recovery rik, återfuktande nattkräm",
      label: "Återfuktande",
    },
    {
      src: "/products/olay-night-cream/olay-night-2.webp",
      alt: "Olay Regenerist Night Recovery textur och konsistens",
      label: "Rik textur",
    },
    {
      src: "/products/olay-night-cream/olay-night-3.webp",
      alt: "Detaljbild av Olay Regenerist Night Recovery nattkräm",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4wdCzG0",
  pageHref: "/skonhet/nattkram",
  summary: "En rik, återfuktande nattkräm som ger huden fukt under natten och en smidigare känsla till morgonen. Krämig textur som sjunker in och hjälper huden att kännas mjuk och utvilad.",
  evaluation: {
    headline: "Rik nattkräm för fukt över natten",
    intro: "Elin går igenom Olay Regenerist Night Recovery: en rik, återfuktande nattkräm. Tanken är enkel – ge huden fukt under natten så att den känns smidigare och mer utvilad till morgonen. En krämig textur som sjunker in som sista steg på kvällen.",
    verdict: "Rik, återfuktande nattkräm som ger huden fukt och en smidigare känsla till morgonen.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "Olay Regenerist Night Recovery",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Nattkräm, 50 g",
    },
    {
      label: "Textur",
      caption: "Konsistens",
      value: "Rik och krämig",
    },
    {
      label: "Profil",
      caption: "Hudvård",
      value: "Återfuktande, för natten",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4wdCzG0",
    ratingSummary: "Amazon visar 4,6 av 5 från 17 614 omdömen.",
    highlights: [
      "Köpare beskriver en mjuk, smidigare känsla i huden till morgonen.",
      "Den rika krämen uppskattas särskilt under den torra årstiden.",
      "Många tycker att texturen sjunker in fint utan att kännas tung.",
    ],
    cautions: [
      "En rik kräm kan kännas för mycket för väldigt fet hud – börja gärna med ett tunt lager.",
      "Doften finns med i produkten; är du känslig för parfym, prova försiktigt först.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const biothermBodyLotionProduct: Product = {
  slug: "biotherm-lait-corporel",
  title: "Biotherm Lait Corporel – återfuktande kroppslotion",
  category: "skonhet",
  asin: "B00017Y63O",
  brand: "Biotherm",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Återfuktar & mjukgör",
    "Lättabsorberad",
    "Frisk doft",
  ],
  image: "/products/biotherm-body-lotion/biotherm-thumbnail.webp",
  imageAlt: "Biotherm Lait Corporel återfuktande kroppslotion",
  images: [
    {
      src: "/products/biotherm-body-lotion/biotherm-thumbnail.webp",
      alt: "Biotherm Lait Corporel återfuktande kroppslotion",
      label: "Lait Corporel",
    },
    {
      src: "/products/biotherm-body-lotion/biotherm-1.webp",
      alt: "Biotherm Lait Corporel kroppslotion som återfuktar och mjukgör",
      label: "Återfuktande",
    },
    {
      src: "/products/biotherm-body-lotion/biotherm-2.webp",
      alt: "Biotherm Lait Corporel lätt textur och konsistens",
      label: "Lätt textur",
    },
    {
      src: "/products/biotherm-body-lotion/biotherm-3.webp",
      alt: "Detaljbild av Biotherm Lait Corporel kroppslotion",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4vA2t72",
  pageHref: "/skonhet/kroppslotion",
  summary: "En klassisk kroppslotion som återfuktar och mjukgör huden med en lätt, snabbt insjunkande textur och en frisk doft. Ett enkelt sätt att hålla huden len och smidig varje dag.",
  evaluation: {
    headline: "Klassisk kroppslotion för len, mjuk hud",
    intro: "Elin går igenom Biotherm Lait Corporel: en omtyckt kroppslotion som återfuktar och mjukgör med en lätt textur som absorberas snabbt. Den friska doften och den smidiga konsistensen gör den enkel att använda dagligen efter dusch.",
    verdict: "En klassisk, lättabsorberad kroppslotion som håller huden len och återfuktad.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "Biotherm Lait Corporel",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Kroppslotion",
    },
    {
      label: "Effekt",
      caption: "Hudvård",
      value: "Återfuktar och mjukgör huden",
    },
    {
      label: "Textur",
      caption: "Känsla",
      value: "Lätt och snabbt insjunkande",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4vA2t72",
    ratingSummary: "Amazon visar 4,7 av 5 från 4002 omdömen.",
    highlights: [
      "Köpare upplever att huden känns len och återfuktad efter användning.",
      "Lätt textur som de flesta tycker absorberas snabbt utan att kännas klibbig.",
      "Den friska doften är mycket uppskattad i omdömena.",
    ],
    cautions: [
      "Doften är märkbar och passar inte alla – gilla doft är en smaksak.",
      "Vid mycket torr hud kan ett rikare lager eller daglig användning behövas.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const neutrogenaHandCreamProduct: Product = {
  slug: "neutrogena-hand-cream",
  title: "Neutrogena Norwegian Formula – handkräm (75 ml)",
  category: "skonhet",
  asin: "B00DYP8YM4",
  brand: "Neutrogena",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Koncentrerad",
    "För torra händer",
    "Lite räcker långt",
  ],
  image: "/products/neutrogena-hand-cream/neutrogena-thumbnail.webp",
  imageAlt: "Neutrogena Norwegian Formula handkräm, 75 ml",
  images: [
    {
      src: "/products/neutrogena-hand-cream/neutrogena-thumbnail.webp",
      alt: "Neutrogena Norwegian Formula handkräm, 75 ml",
      label: "Norwegian Formula",
    },
    {
      src: "/products/neutrogena-hand-cream/neutrogena-1.webp",
      alt: "Neutrogena koncentrerad handkräm för mycket torra händer",
      label: "Koncentrerad",
    },
    {
      src: "/products/neutrogena-hand-cream/neutrogena-2.webp",
      alt: "Neutrogena handkräm textur och konsistens",
      label: "Rik textur",
    },
    {
      src: "/products/neutrogena-hand-cream/neutrogena-3.webp",
      alt: "Detaljbild av Neutrogena Norwegian Formula handkräm",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4f4d04q",
  pageHref: "/skonhet/handkram",
  summary: "En koncentrerad handkräm för mycket torra händer där lite räcker långt. Den sjunker in snabbt och hjälper torra, sträva händer att kännas mjuka och smidiga igen.",
  evaluation: {
    headline: "Koncentrerad handkräm för mycket torra händer",
    intro: "Elin går igenom Neutrogena Norwegian Formula: en klassisk, koncentrerad handkräm gjord för mycket torra händer. En liten mängd räcker långt, och de flesta upplever att den sjunker in snabbt och lämnar händerna mjuka snarare än feta.",
    verdict: "En koncentrerad, dryg handkräm som hjälper mycket torra händer att kännas mjuka.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "Neutrogena Norwegian Formula",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Handkräm, 75 ml",
    },
    {
      label: "Profil",
      caption: "Hudvård",
      value: "För mycket torra händer",
    },
    {
      label: "Textur",
      caption: "Känsla",
      value: "Koncentrerad, snabbt insjunkande",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4f4d04q",
    ratingSummary: "Amazon visar 4,6 av 5 från 9248 omdömen.",
    highlights: [
      "Köpare upplever att även mycket torra händer känns mjuka igen.",
      "Lite räcker långt, så en tub håller länge enligt omdömena.",
      "Sjunker in snabbt och lämnar händerna mjuka snarare än feta.",
    ],
    cautions: [
      "Krämen är koncentrerad – använd bara en liten klick åt gången.",
      "Doften är märkbar och passar inte alla som föredrar oparfymerat.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const olaplexNo4ShampooProduct: Product = {
  slug: "olaplex-no4-shampoo",
  title: "Olaplex No.4 Bond Maintenance Shampoo (250 ml)",
  category: "skonhet",
  asin: "B08TWQ37XF",
  brand: "Olaplex",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Återuppbyggande",
    "För färgat hår",
    "Stärker slitna längder",
  ],
  image: "/products/olaplex-no4/olaplex4-thumbnail.webp",
  imageAlt: "Olaplex No.4 Bond Maintenance Shampoo, 250 ml",
  images: [
    {
      src: "/products/olaplex-no4/olaplex4-thumbnail.webp",
      alt: "Olaplex No.4 Bond Maintenance Shampoo, 250 ml",
      label: "Olaplex No.4",
    },
    {
      src: "/products/olaplex-no4/olaplex4-1.webp",
      alt: "Olaplex No.4 schampo för slitet och färgat hår",
      label: "Färgat hår",
    },
    {
      src: "/products/olaplex-no4/olaplex4-2.webp",
      alt: "Olaplex No.4 schampo textur och konsistens",
      label: "Krämig lödder",
    },
    {
      src: "/products/olaplex-no4/olaplex4-3.webp",
      alt: "Detaljbild av Olaplex No.4 Bond Maintenance Shampoo",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4f6HpyY",
  pageHref: "/skonhet/olaplex-schampo",
  summary: "Ett återuppbyggande schampo som är gjort för att stärka och vårda slitet, färgat hår. Olaplex No.4 rengör samtidigt som det jobbar med håret från längder till toppar för en mjukare och mer hanterbar känsla.",
  evaluation: {
    headline: "Återuppbyggande schampo för slitet, färgat hår",
    intro: "Elin går igenom Olaplex No.4 Bond Maintenance Shampoo: ett schampo som är gjort för att stärka och vårda hår som blivit slitet av färgning, blekning och värme. Det rengör skonsamt och jobbar med längder och toppar för en mjukare, mer hanterbar känsla.",
    verdict: "Återuppbyggande schampo som många väljer för slitet och färgat hår.",
    checks: [],
  },
  specSectionEyebrow: "Hårvård",
  specSectionTitle: "Olaplex No.4 Bond Maintenance Shampoo",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Schampo, 250 ml",
    },
    {
      label: "Hårtyp",
      caption: "Passar",
      value: "Slitet och färgat hår",
    },
    {
      label: "Profil",
      caption: "Hårvård",
      value: "Återuppbyggande, vårdande",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4f6HpyY",
    ratingSummary: "Amazon visar 4,5 av 5 från 13 375 omdömen.",
    highlights: [
      "Köpare upplever att slitet och färgat hår känns starkare och mjukare med tiden.",
      "Lite produkt räcker långt och löddrar krämigt.",
      "Uppskattas som ett bra steg före balsam och inpackning i samma serie.",
    ],
    cautions: [
      "Ett vårdande schampo räcker inte alltid ensamt – kombinera gärna med balsam för bäst känsla.",
      "Upplevelsen varierar mellan hårtyper och hur slitet håret är från början.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const olaplexNo5ConditionerProduct: Product = {
  slug: "olaplex-no5-conditioner",
  title: "Olaplex No.5 Bond Maintenance Conditioner (250 ml)",
  category: "skonhet",
  asin: "B08TWV3S41",
  brand: "Olaplex",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Återfuktande balsam",
    "Stärker slitet hår",
    "Mindre frizz",
  ],
  image: "/products/olaplex-no5/olaplex5-thumbnail.webp",
  imageAlt: "Olaplex No.5 Bond Maintenance Conditioner, 250 ml",
  images: [
    {
      src: "/products/olaplex-no5/olaplex5-thumbnail.webp",
      alt: "Olaplex No.5 Bond Maintenance Conditioner, 250 ml",
      label: "Olaplex No.5",
    },
    {
      src: "/products/olaplex-no5/olaplex5-1.webp",
      alt: "Olaplex No.5 balsam som återfuktar torrt hår",
      label: "Återfuktande",
    },
    {
      src: "/products/olaplex-no5/olaplex5-2.webp",
      alt: "Olaplex No.5 textur och konsistens",
      label: "Krämig textur",
    },
    {
      src: "/products/olaplex-no5/olaplex5-3.webp",
      alt: "Detaljbild av Olaplex No.5 Bond Maintenance Conditioner",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/44BUV7C",
  pageHref: "/skonhet/olaplex-balsam",
  summary: "Ett återfuktande balsam som stärker och mjukgör torrt, slitet hår och ger mindre frizz. Krämig formula som hjälper håret att kännas mjukare, mer hanterbart och lättare att reda ut.",
  evaluation: {
    headline: "Återfuktande balsam för torrt, slitet hår",
    intro: "Elin går igenom Olaplex No.5 Bond Maintenance Conditioner: ett återfuktande balsam som är gjort för att stärka och mjukgöra torrt, slitet hår. Den krämiga formulan hjälper håret att kännas mjukare och mer hanterbart, samtidigt som den jobbar mot frizz för en lugnare yta.",
    verdict: "Återfuktande balsam som stärker och mjukgör torrt, slitet hår.",
    checks: [],
  },
  specSectionEyebrow: "Hårvård",
  specSectionTitle: "Olaplex No.5 Bond Maintenance Conditioner",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Balsam, 250 ml",
    },
    {
      label: "För",
      caption: "Hårtyp",
      value: "Torrt och slitet hår",
    },
    {
      label: "Effekt",
      caption: "Hårvård",
      value: "Stärker, mjukgör och minskar frizz",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/44BUV7C",
    ratingSummary: "Amazon visar 4,5 av 5 från 10 723 omdömen.",
    highlights: [
      "Köpare beskriver mjukare, mer hanterbart hår efter användning.",
      "Många upplever mindre frizz och en lugnare yta.",
      "Uppskattas för att hjälpa torrt, slitet hår att kännas starkare.",
    ],
    cautions: [
      "Tunt hår kan behöva en mindre mängd för att inte kännas tyngt.",
      "Resultatet varierar mellan hårtyper – ge balsamet några tvättar innan du dömer.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const olaplexNo3Product: Product = {
  slug: "olaplex-no3-treatment",
  title: "Olaplex No.3 Hair Perfector – inpackning för skadat hår",
  category: "skonhet",
  asin: "B0GHSXYY3Z",
  brand: "Olaplex",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Återuppbyggande",
    "Pre-schampo",
    "Klassisk favorit",
  ],
  image: "/products/olaplex-no3/olaplex3-thumbnail.webp",
  imageAlt: "Olaplex No.3 Hair Perfector inpackning för skadat hår",
  images: [
    {
      src: "/products/olaplex-no3/olaplex3-thumbnail.webp",
      alt: "Olaplex No.3 Hair Perfector inpackning för skadat hår",
      label: "Olaplex No.3",
    },
    {
      src: "/products/olaplex-no3/olaplex3-1.webp",
      alt: "Olaplex No.3 återuppbyggande inpackning som används före schampo",
      label: "Pre-schampo",
    },
    {
      src: "/products/olaplex-no3/olaplex3-2.webp",
      alt: "Olaplex No.3 textur och konsistens i handen",
      label: "Krämig textur",
    },
    {
      src: "/products/olaplex-no3/olaplex3-3.webp",
      alt: "Detaljbild av Olaplex No.3 Hair Perfector",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4vtr5Ox",
  pageHref: "/skonhet/olaplex-no3",
  summary: "En återuppbyggande inpackning som används före schampo för att stärka slitet och skadat hår. Olaplex No.3 är en klassisk favorit för dig med blekt, färgat eller värmestylat hår som behöver extra omvårdnad.",
  evaluation: {
    headline: "Inpackning som stärker skadat hår",
    intro: "Elin går igenom Olaplex No.3 Hair Perfector: en pre-schampo-inpackning som är gjord för att stärka och vårda slitet, skadat hår. Den används på fuktigt hår före schampo och har blivit en klassisk favorit hos många med blekt, färgat eller värmestylat hår.",
    verdict: "Klassisk återuppbyggande inpackning för slitet och skadat hår.",
    checks: [],
  },
  specSectionEyebrow: "Hårvård",
  specSectionTitle: "Olaplex No.3 Hair Perfector",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Inpackning (pre-schampo)",
    },
    {
      label: "Användning",
      caption: "Steg",
      value: "På fuktigt hår före schampo",
    },
    {
      label: "Profil",
      caption: "Hårvård",
      value: "Slitet, skadat och färgat hår",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4vtr5Ox",
    ratingSummary: "Amazon visar 4,5 av 5 från 551 omdömen.",
    highlights: [
      "Köpare tycker att håret känns starkare och mjukare efter användning.",
      "Uppskattas av många med blekt eller färgat hår som extra omvårdnad.",
      "Enkel att använda som ett steg före schampo i veckorutinen.",
    ],
    cautions: [
      "Det är en inpackning före schampo – inte en balsam eller leave-in.",
      "Resultatet varierar med hårtyp och hur slitet håret är från början.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const mielleRosemaryOilProduct: Product = {
  slug: "mielle-rosemary-oil",
  title: "Mielle Rosemary Mint Scalp & Hair Strengthening Oil (58 g)",
  category: "skonhet",
  asin: "B0CJM8546H",
  brand: "Mielle Organics",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Rosmarin & mynta",
    "Uppfriskande",
    "Viral favorit",
  ],
  image: "/products/mielle-rosemary/mielle-thumbnail.webp",
  imageAlt: "Mielle Rosemary Mint Scalp & Hair Oil, 58 g",
  images: [
    {
      src: "/products/mielle-rosemary/mielle-thumbnail.webp",
      alt: "Mielle Rosemary Mint Scalp & Hair Oil, 58 g",
      label: "Mielle olja",
    },
    {
      src: "/products/mielle-rosemary/mielle-1.webp",
      alt: "Mielle Rosemary Mint olja med rosmarin och mynta",
      label: "Rosmarin & mynta",
    },
    {
      src: "/products/mielle-rosemary/mielle-2.webp",
      alt: "Mielle hårbottenolja textur och pipettflaska",
      label: "Pipettflaska",
    },
    {
      src: "/products/mielle-rosemary/mielle-3.webp",
      alt: "Detaljbild av Mielle Rosemary Mint Scalp & Hair Oil",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4ePbPVi",
  pageHref: "/skonhet/rosmarinolja",
  summary: "En viral hårbottenolja med rosmarin och mynta som ger en uppfriskande känsla i hårbotten och vårdar längderna. En populär favorit för dig som gillar en lätt svalkande olja i håret.",
  evaluation: {
    headline: "Hårbottenolja med rosmarin och mynta",
    intro: "Elin går igenom Mielle Rosemary Mint Scalp & Hair Oil: en viral hårbottenolja med rosmarin och mynta. Den masseras in i hårbotten för en uppfriskande, lätt svalkande känsla och kan även användas i längderna för omvårdnad.",
    verdict: "Uppfriskande hårbottenolja för dig som gillar rosmarin och mynta.",
    checks: [],
  },
  specSectionEyebrow: "Hårvård",
  specSectionTitle: "Mielle Rosemary Mint Scalp & Hair Oil",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Hårbottenolja, 58 g",
    },
    {
      label: "Doft",
      caption: "Profil",
      value: "Rosmarin och mynta",
    },
    {
      label: "Profil",
      caption: "Hårvård",
      value: "Hårbotten och längder",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4ePbPVi",
    ratingSummary: "Amazon visar 4,4 av 5 från 2 413 omdömen.",
    highlights: [
      "Köpare gillar den uppfriskande, lätt svalkande känslan i hårbotten.",
      "Doften av rosmarin och mynta är en favorit hos många.",
      "Pipettflaskan gör det enkelt att dosera direkt på hårbotten.",
    ],
    cautions: [
      "Det är en olja – använd sparsamt så att håret inte känns tyngt.",
      "Doften av mynta är tydlig och upplevs olika från person till person.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const inkeyScalpScrubProduct: Product = {
  slug: "inkey-scalp-scrub",
  title: "The INKEY List Glycolic Acid Exfoliating Scalp Scrub (150 ml)",
  category: "skonhet",
  asin: "B09K8CYJ7B",
  brand: "The INKEY List",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Exfolierande",
    "Ren hårbotten",
    "Glykolsyra",
  ],
  image: "/products/inkey-scalp-scrub/inkey-scrub-thumbnail.webp",
  imageAlt: "The INKEY List Glycolic Acid Exfoliating Scalp Scrub, 150 ml",
  images: [
    {
      src: "/products/inkey-scalp-scrub/inkey-scrub-thumbnail.webp",
      alt: "The INKEY List Glycolic Acid Exfoliating Scalp Scrub, 150 ml",
      label: "INKEY scrub",
    },
    {
      src: "/products/inkey-scalp-scrub/inkey-scrub-1.webp",
      alt: "The INKEY List scalp scrub med glykolsyra för hårbotten",
      label: "Glykolsyra",
    },
    {
      src: "/products/inkey-scalp-scrub/inkey-scrub-2.webp",
      alt: "The INKEY List scalp scrub textur och konsistens",
      label: "Exfolierande textur",
    },
    {
      src: "/products/inkey-scalp-scrub/inkey-scrub-3.webp",
      alt: "Detaljbild av The INKEY List Glycolic Acid Scalp Scrub",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4y9rpEb",
  pageHref: "/skonhet/scalp-scrub",
  summary: "En exfolierande hårbottenpeeling med glykolsyra som rengör hårbotten från produktrester och fjäll för en fräschare känsla. Ett enkelt steg för dig som vill ge hårbotten en ordentlig rengöring.",
  evaluation: {
    headline: "Hårbottenpeeling för en fräschare hårbotten",
    intro: "Elin går igenom The INKEY List Glycolic Acid Exfoliating Scalp Scrub: en exfolierande hårbottenpeeling med glykolsyra. Den masseras in i hårbotten i duschen för att rengöra från produktrester och fjäll och ge en fräschare känsla.",
    verdict: "Exfolierande hårbottenpeeling för en ren och fräsch hårbotten.",
    checks: [],
  },
  specSectionEyebrow: "Hårvård",
  specSectionTitle: "The INKEY List Glycolic Acid Scalp Scrub",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Hårbottenpeeling, 150 ml",
    },
    {
      label: "Innehåll",
      caption: "Aktivt",
      value: "Glykolsyra för exfoliering",
    },
    {
      label: "Profil",
      caption: "Hårvård",
      value: "Hårbotten med produktrester och fjäll",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4y9rpEb",
    ratingSummary: "Amazon visar 4,2 av 5 från 1 940 omdömen.",
    highlights: [
      "Köpare upplever en fräschare och renare känsla i hårbotten.",
      "Uppskattas för att rengöra bort produktrester och fjäll.",
      "Enkel att massera in i duschen som ett steg före schampo.",
    ],
    cautions: [
      "Det är en peeling – använd ett par gånger i veckan, inte varje dag.",
      "Glykolsyra kan kännas pirrigt; undvik om hårbotten är sårig eller irriterad.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const cantuLeaveInProduct: Product = {
  slug: "cantu-leave-in-conditioner",
  title: "Cantu Shea Butter Leave-In Conditioning Repair Cream (453 g)",
  category: "skonhet",
  asin: "B00449W12S",
  brand: "Cantu",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Sheasmör",
    "Leave-in",
    "Torrt & lockigt hår",
  ],
  image: "/products/cantu-leave-in/cantu-thumbnail.webp",
  imageAlt: "Cantu Shea Butter Leave-In Conditioning Repair Cream, 453 g",
  images: [
    {
      src: "/products/cantu-leave-in/cantu-thumbnail.webp",
      alt: "Cantu Shea Butter Leave-In Conditioning Repair Cream, 453 g",
      label: "Cantu leave-in",
    },
    {
      src: "/products/cantu-leave-in/cantu-1.webp",
      alt: "Cantu leave-in med sheasmör för torrt och lockigt hår",
      label: "Sheasmör",
    },
    {
      src: "/products/cantu-leave-in/cantu-2.webp",
      alt: "Cantu leave-in cream textur och konsistens",
      label: "Krämig textur",
    },
    {
      src: "/products/cantu-leave-in/cantu-3.webp",
      alt: "Detaljbild av Cantu Shea Butter Leave-In Repair Cream",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/3R5KWED",
  pageHref: "/skonhet/leave-in-conditioner",
  summary: "En närande leave-in med sheasmör för torrt och lockigt hår. Den mjukgör och underlättar utredning, och är en populär favorit för dig som vill ge torra längder extra fukt utan att skölja ur.",
  evaluation: {
    headline: "Leave-in med sheasmör för torrt hår",
    intro: "Elin går igenom Cantu Shea Butter Leave-In Conditioning Repair Cream: en närande leave-in med sheasmör för torrt och lockigt hår. Den appliceras i fuktigt hår utan att sköljas ur, mjukgör längderna och gör det lättare att reda ut håret.",
    verdict: "Närande leave-in för torrt och lockigt hår som behöver fukt.",
    checks: [],
  },
  specSectionEyebrow: "Hårvård",
  specSectionTitle: "Cantu Shea Butter Leave-In Repair Cream",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Leave-in cream, 453 g",
    },
    {
      label: "Innehåll",
      caption: "Aktivt",
      value: "Sheasmör för mjukgörande fukt",
    },
    {
      label: "Profil",
      caption: "Hårvård",
      value: "Torrt och lockigt hår",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3R5KWED",
    ratingSummary: "Amazon visar 4,4 av 5 från 22 030 omdömen.",
    highlights: [
      "Köpare tycker att torra längder känns mjukare och mer återfuktade.",
      "Uppskattas för att underlätta utredning av lockigt och tjockt hår.",
      "En favorit i många lockrutiner som ett fuktgivande bassteg.",
    ],
    cautions: [
      "Det är en rik cream – dosera efter hårtyp så att håret inte känns tyngt.",
      "Fint och tunt hår kan behöva en mindre mängd för bästa känsla.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const mauiCurlSmoothieProduct: Product = {
  slug: "maui-curl-smoothie",
  title: "Maui Moisture Curl Quench+ Coconut Oil Curl Smoothie",
  category: "skonhet",
  asin: "B01MFHHD33",
  brand: "Maui Moisture",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Kokosolja",
    "Definierar lockar",
    "Tämjer frizz",
  ],
  image: "/products/maui-curl-cream/maui-thumbnail.webp",
  imageAlt: "Maui Moisture Curl Quench+ Coconut Oil Curl Smoothie",
  images: [
    {
      src: "/products/maui-curl-cream/maui-thumbnail.webp",
      alt: "Maui Moisture Curl Quench+ Coconut Oil Curl Smoothie",
      label: "Maui curl cream",
    },
    {
      src: "/products/maui-curl-cream/maui-1.webp",
      alt: "Maui Moisture curl smoothie med kokosolja för lockar",
      label: "Kokosolja",
    },
    {
      src: "/products/maui-curl-cream/maui-2.webp",
      alt: "Maui Moisture curl cream textur och konsistens",
      label: "Krämig textur",
    },
    {
      src: "/products/maui-curl-cream/maui-3.webp",
      alt: "Detaljbild av Maui Moisture Curl Quench+ Curl Smoothie",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4f5Z2yV",
  pageHref: "/skonhet/curl-cream",
  summary: "En fuktgivande curl cream med kokosolja som definierar lockar och tämjer frizz. En populär favorit för dig som vill ge lockarna mer form och fukt utan att de känns stela.",
  evaluation: {
    headline: "Curl cream med kokosolja för definierade lockar",
    intro: "Elin går igenom Maui Moisture Curl Quench+ Coconut Oil Curl Smoothie: en fuktgivande curl cream med kokosolja. Den appliceras i fuktigt hår för att definiera lockar, ge fukt och tämja frizz, och är en omtyckt favorit i många lockrutiner.",
    verdict: "Fuktgivande curl cream som definierar lockar och tämjer frizz.",
    checks: [],
  },
  specSectionEyebrow: "Hårvård",
  specSectionTitle: "Maui Moisture Curl Quench+ Curl Smoothie",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Curl cream (smoothie)",
    },
    {
      label: "Innehåll",
      caption: "Aktivt",
      value: "Kokosolja för fukt",
    },
    {
      label: "Profil",
      caption: "Hårvård",
      value: "Lockigt hår och frizz",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4f5Z2yV",
    ratingSummary: "Amazon visar 4,6 av 5 från 11 372 omdömen.",
    highlights: [
      "Köpare tycker att lockarna blir mer definierade och får mer form.",
      "Uppskattas för att tämja frizz och ge fukt åt torra längder.",
      "En favorit i lockrutiner för att forma lockar i fuktigt hår.",
    ],
    cautions: [
      "Dosera efter hårtyp så att lockarna inte känns tyngda.",
      "Resultatet varierar med lockmönster och hur torrt håret är.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const products = [
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
  featuredProduct,
  jakkofoxxLoopbandProduct,
  amazonBasicsKettlebellProduct,
  proironSoftKettlebellProduct,
  proironNeopreneDumbbellsProduct,
  songmicsDumbbellSetProduct,
  prosourcefitYogaMatProduct,
  yogatiTpeYogaMatProduct,
  bodymateFoamRollerCareProduct,
  elvireDeepTissueMassageSetProduct,
  beurerMassagepistolProduct,
  bdbkmgMassagepistolProduct,
  dreoCruiserProFlaktProduct,
  honeywellTurboforceFlaktProduct,
  mideaFz10FlaktProduct,
  remingtonS8540Product,
  remingtonMiniS2880Product,
  panasonicEsEy30EpilatorProduct,
  braunSilkEpil9Product,
  remingtonProluxeAc9140Product,
  beurerHc25Product,
  babylissAs126eProduct,
  remingtonAs7100Product,
  babylissC325eProduct,
  tymoCurlproProduct,
  stTropezSelfTanExpressProduct,
  elfSkinBronzingDropsProduct,
  niveaSunAfterSunLotionProduct,
  naissanceAloeVeraGelProduct,
  minimalistHyaluronsyraSerumProduct,
  kanzyJojobaoljaProduct,
  inkeyNiacinamideSerumProduct,
  cosrxSnailEssenceProduct,
  moroccanoilHaroljaProduct,
  lorealAbsolutRepairProduct,
  moroccanoilTorrschampoProduct,
  vxdoirkElektriskFotfilProduct,
  lorealElvitalVarmeskyddProduct,
  koboClaraBwProduct,
  salkingAromadiffuserProduct,
  solnedgangslampaProduct,
  miniProjektorProduct,
  stjarnprojektorProduct,
] as const;

export const productCategories: readonly ProductCategory[] = [
  {
    slug: "skonhet",
    label: "Skönhet",
    href: "/skonhet",
    description: "Prisvärda skönhetsval för hår, vardag och smarta rutiner.",
  },
  {
    slug: "traning",
    label: "Träning",
    href: "/traning",
    description: "Smarta val för hemmaträning, rörelse och enkla rutiner.",
  },
  {
    slug: "halsa",
    label: "Hälsa & livsstil",
    href: "/halsa",
    description: "Produkter för återhämtning, smart hem och vardagskänsla.",
  },
];

export const activeProductCategories = productCategories.filter((category) =>
  products.some((product) => product.category === category.slug),
);

export function getProductsByCategory(categorySlug: ProductCategorySlug) {
  return products.filter((product) => product.category === categorySlug);
}

export function getProductPageHref(product: Pick<Product, "slug" | "pageHref">) {
  return product.pageHref ?? `/product/${product.slug}`;
}

export const genericProductPages = [featuredProduct] as const;
export const reviewableProducts = products;

export function getListedProductBySlug(slug: string) {
  return genericProductPages.find((product) => product.slug === slug);
}

export function getProductBySlug(slug: string) {
  return reviewableProducts.find((product) => product.slug === slug);
}
