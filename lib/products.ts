import { waveProducts } from "@/lib/wave-products";

export type Product = {
  slug: string;
  title: string;
  category: ProductCategorySlug;
  asin: string;
  brand: string;
  price: string;
  priceTier?: "budget" | "mellan" | "premium";
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

export type ProductCategorySlug = "traning" | "halsa" | "skonhet" | "resa";

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
  ratingCheckedAt?: string;
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
    checks: [
      {
        label: "Problemet den löser",
        text: "Lägger till ett enkelt fuktsteg när huden känns stram, yttorr eller behöver mer mjukhet under kräm.",
      },
      {
        label: "Varför Elin fastnade",
        text: "Prisvärd, parfymfri och lätt att kombinera med annat. Det är precis den sortens serum som gör en rutin mer stabil utan att kännas lyxkrånglig.",
      },
      {
        label: "Det vi inte vill överdriva",
        text: "Hyaluronsyra behöver fukt och ett låsande steg. På torr hud utan fuktkräm kan effekten kännas mindre imponerande.",
      },
    ],
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
  uses: [
    "På lätt fuktig hud före fuktkräm.",
    "Under dagkräm när huden känns yttorr men du inte vill ha en tung olja.",
    "I en minimalistisk rutin med rengöring, serum och kräm.",
    "Som extra fuktlager efter dusch eller rengöring.",
  ],
  peopleLike: [
    "Köpare lyfter den lätta känslan som ett enkelt fuktsteg.",
    "Parfymfri och silikonfri formula uppskattas av många.",
    "Hyaluronsyra, PGA och vitamin B5 kopplas till en mer återfuktad känsla.",
  ],
  honestCheck: [
    "Följ upp med fuktkräm så att fukten stannar kvar.",
    "Resultat och känsla varierar mellan hudtyper.",
    "Mer serum gör inte automatiskt mer nytta; några droppar räcker ofta.",
  ],
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
    checks: [
      {
        label: "Problemet den löser",
        text: "Ger ett lätt serumsteg för fet eller blandad hy när du vill matta glans och få en jämnare kosmetisk look.",
      },
      {
        label: "Varför Elin fastnade",
        text: "10% niacinamide, gelkänsla och ett rimligt pris gör den lätt att rekommendera som första niacinamide-produkt.",
      },
      {
        label: "Det vi inte vill överdriva",
        text: "Hög procent passar inte alla. Börja sparsamt och öka bara om huden känns bekväm.",
      },
    ],
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
  uses: [
    "Som serum efter rengöring och före fuktkräm.",
    "I morgonrutinen när du vill dämpa glans under dagen.",
    "I en enkel rutin för fet eller blandad hy.",
    "Några gånger i veckan först om du är ovan vid niacinamide.",
  ],
  peopleLike: [
    "Köparsignalerna pekar på en lätt gel som försvinner under annan hudvård.",
    "Parfymfri formula uppskattas i enkla rutiner.",
    "Niacinamide och hyaluronsyra gör den relevant för fet och blandad hy.",
  ],
  honestCheck: [
    "Börja med en liten mängd; mer niacinamide är inte alltid bättre.",
    "Följ upp med fuktkräm om huden känns stram.",
    "Justera frekvensen om huden känns irriterad.",
  ],
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
    checks: [
      {
        label: "Problemet den löser",
        text: "Ger ett rikare vårdsteg när längderna känns torra, soltrötta eller svåra att reda ut.",
      },
      {
        label: "Varför Elin fastnade",
        text: "Den passar tydligt för hår som behöver mer än vanligt balsam, och signalerna lyfter mjukhet, glans och enklare utredning.",
      },
      {
        label: "Det vi inte vill överdriva",
        text: "Det är ett premiumval. Fint hår kan tyngas om du tar för mycket, så börja i längderna och dosera sparsamt.",
      },
    ],
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
  uses: [
    "Som inpackning en gång i veckan när håret känns torrt.",
    "Efter sol, bad eller mycket värmestyling.",
    "I blekt eller ljust hår som lätt blir strävt.",
    "När du vill reda ut längderna lättare inför styling.",
  ],
  peopleLike: [
    "Köpare beskriver håret som mjukt, silkeslent och lättare att reda ut.",
    "Flera med blekt eller ljust hår rekommenderar den.",
    "Doft och rik konsistens får positiva signaler.",
  ],
  honestCheck: [
    "Dyrare än vanligt balsam, så den ska lösa ett tydligt behov.",
    "Fint hår kan tyngas av för mycket produkt.",
    "Fokusera på längder och toppar snarare än hårbotten.",
  ],
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
    checks: [
      {
        label: "Problemet den löser",
        text: "Lägger ett prisvärt skyddande stylingsteg före fön, plattång, locktång eller varmluftsborste.",
      },
      {
        label: "Varför Elin fastnade",
        text: "Den är lätt att förstå i vardagen: spraya före värme, få mer glid i håret och slipp betala premiumpris för ett bassteg.",
      },
      {
        label: "Det vi inte vill överdriva",
        text: "Värmeskydd minskar inte behovet av varsam styling. För mycket produkt kan ge hinna och hög värme sliter ändå över tid.",
      },
    ],
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
  uses: [
    "Före föning när håret ska formas eller slätas ut.",
    "Före plattång eller locktång i längderna.",
    "Innan varmluftsborste för mer glid och mindre frizz-känsla.",
    "Som budgetvänligt bassteg i en stylingrutin.",
  ],
  peopleLike: [
    "Köpare lyfter att håret blir lättare att reda ut.",
    "Mindre frizz och mer glans återkommer i signalerna.",
    "Priset beskrivs som vänligare än många stylingprodukter.",
  ],
  honestCheck: [
    "Spraya jämnt och undvik att överdosera.",
    "Doft och finish upplevs olika.",
    "Använd fortfarande rimlig värme och värmestyla inte mer än håret klarar.",
  ],
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
    checks: [
      {
        label: "Problemet den löser",
        text: "Ger ett fokuserat glow-steg för hud som ser trött ut och där du vill ha mer lyster i rutinen.",
      },
      {
        label: "Varför Elin fastnade",
        text: "10% ren C-vitamin i en lätt textur gör produkten tydlig: den är för lyster och en piggare look, inte för att stapla många serum.",
      },
      {
        label: "Det vi inte vill överdriva",
        text: "Ren C-vitamin kan kännas aktiv. Börja försiktigt och förvara serumet rätt så att formulan håller sig fräsch.",
      },
    ],
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
  uses: [
    "Som morgonserum under fuktkräm när du vill ha mer lyster.",
    "Varannan dag i början om huden lätt reagerar på aktiva ingredienser.",
    "När du vill hålla rutinen kort: rengöring, serum, fuktkräm.",
    "För hud som behöver en piggare kosmetisk finish snarare än ännu ett rikt krämsteg.",
  ],
  peopleLike: [
    "Köpare beskriver huden som piggare och mer strålande med tiden.",
    "Den lätta texturen upplevs snabbabsorberande.",
    "Flera uppskattar att den känns skonsam nog för känsligare hud.",
  ],
  honestCheck: [
    "Ren C-vitamin kan svida lätt i början.",
    "Förvara mörkt och svalt eftersom C-vitamin kan oxidera.",
    "Testa på liten yta först om huden är känslig.",
  ],
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
    checks: [
      {
        label: "Problemet den löser",
        text: "Hjälper dig få en fräschare inomhuskänsla i mindre rum där damm och instängd luft snabbt märks.",
      },
      {
        label: "Varför Elin fastnade",
        text: "Kombinationen av kompakt format, tyst nattläge och appstyrning gör den lätt att placera i sovrum utan att kännas tekniskt krånglig.",
      },
      {
        label: "Det vi inte vill överdriva",
        text: "Den är gjord för mindre ytor. För stora öppna rum behöver du kontrollera kapacitet och räkna med filterbyten.",
      },
    ],
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
  uses: [
    "I sovrum där du vill ha tyst nattläge och fräschare luftkänsla.",
    "I hemmakontor eller mindre vardagsrum där damm samlas snabbt.",
    "När du vill kunna styra fläkten från app eller röststyrning.",
    "Som kompakt luftrenare nära där du faktiskt vistas, inte i hela bostaden.",
  ],
  peopleLike: [
    "Köpare upplever luften som fräschare och mindre dammig.",
    "Nattläget beskrivs som riktigt tyst.",
    "Kompakt format och enkel appstyrning återkommer i signalerna.",
  ],
  honestCheck: [
    "Passar bäst för mindre rum och nära placering.",
    "HEPA-filter behöver bytas, vilket ger en återkommande kostnad.",
    "Placera den så luftflödet inte blockeras av möbler eller gardiner.",
  ],
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
  title: "Eric Flag tyngdväst / viktväst med justerbar vikt (10/20 kg)",
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
  imageAlt: "Eric Flag tyngdväst med justerbar vikt och löstagbara järnvikter",
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
  summary: "En justerbar tyngdväst (viktväst) med löstagbara järnvikter som ökar belastningen vid promenad, gång och hemmaträning. Sitter tajt med kardborrespänne för stabil passform.",
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
    checks: [
      {
        label: "Problemet den löser",
        text: "Ger ett mildare serumalternativ när du vill ha en slätare och mer lystrande kosmetisk hudkänsla utan att börja med retinol.",
      },
      {
        label: "Varför Elin fastnade",
        text: "Bakuchiol-positioneringen är tydlig och lätt att förstå för känsligare hud: gradvis, mjukt och med lätt textur.",
      },
      {
        label: "Det vi inte vill överdriva",
        text: "Bakuchiol verkar inte över en natt. Ge det tid och testa först om huden brukar reagera på nya serum.",
      },
    ],
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
  uses: [
    "Som kvällsserum innan fuktkräm.",
    "När du vill prova ett retinol-alternativ i en lugnare rutin.",
    "På liten yta först om huden är känslig.",
    "Några kvällar i veckan innan du ökar frekvensen.",
  ],
  peopleLike: [
    "Köpare beskriver huden som slätare och mer lystrande med tiden.",
    "Flera upplever den mildare än retinol.",
    "Den lätta texturen sägs absorberas snabbt.",
  ],
  honestCheck: [
    "Ge serumet några veckor innan du bedömer känslan.",
    "Testa på liten yta först vid känslig hud.",
    "Håll rutinen enkel så att du vet vad huden reagerar på.",
  ],
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
    checks: [
      {
        label: "Problemet den löser",
        text: "Ger ett tydligt exfolierande steg för dig som vill ha en slätare hudyta och en renare por-känsla i rutinen.",
      },
      {
        label: "Varför Elin fastnade",
        text: "Det stora review-underlaget och den enkla flytande texturen gör produkten lätt att förstå: aktivt steg, inte vardagskräm.",
      },
      {
        label: "Det vi inte vill överdriva",
        text: "Syror kräver respekt. Börja glest, undvik att stapla för många aktiva steg och lyssna på huden.",
      },
    ],
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
  uses: [
    "Efter rengöring några kvällar i veckan i början.",
    "När du vill ha ett separat exfolierande steg i stället för skrubb.",
    "På områden där huden känns ojämn eller blank.",
    "Under en enkel fuktkräm, inte tillsammans med många nya aktiva produkter på en gång.",
  ],
  peopleLike: [
    "Tusentals köpare beskriver renare por-känsla och slätare yta.",
    "Mer lyster och jämnare hudton återkommer i signalerna.",
    "Den lätta flytande texturen upplevs snabbabsorberande.",
  ],
  honestCheck: [
    "Salicylsyra kan svida lätt i början.",
    "Trappa upp gradvis och pausa om huden känns stressad.",
    "Det är lätt att överanvända exfoliering; mer är inte alltid bättre.",
  ],
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
    checks: [
      {
        label: "Problemet den löser",
        text: "Ger mättande fukt när huden känns torr och du vill ha en enkel kräm som fungerar på flera områden.",
      },
      {
        label: "Varför Elin fastnade",
        text: "Den stora burken och milda profilen gör den praktisk för hemmet: ansikte, kropp, händer och torra partier utan att köpa flera små tuber.",
      },
      {
        label: "Det vi inte vill överdriva",
        text: "Rik kräm är inte allas favorit. Fet eller blandad hy kan tycka att den känns tung, särskilt i ansiktet.",
      },
    ],
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
  uses: [
    "På torra kinder eller torra partier efter rengöring.",
    "Som kroppskräm efter dusch när huden känns stram.",
    "På händer, armbågar och ben under torrare perioder.",
    "Som familjekräm där en stor burk är mer praktisk än små tuber.",
  ],
  peopleLike: [
    "Köpare beskriver mättande fukt för torr hud.",
    "Mild känsla på känslig hud lyfts ofta.",
    "Den stora burken uppskattas för att räcka länge.",
  ],
  honestCheck: [
    "Den rika texturen kan kännas tung på fet eller blandad hy.",
    "Burkformatet kräver ren hand eller spatel för en fräschare känsla.",
    "Börja med en mindre mängd och bygg upp vid behov.",
  ],
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
    checks: [
      {
        label: "Problemet den löser",
        text: "Rengör samtidigt som längderna för en mer vårdande känsla än med ett enklare vardagsschampo.",
      },
      {
        label: "Varför Elin fastnade",
        text: "Det är ett premiumschampo där lite produkt räcker långt, vilket gör priset lättare att förstå om håret verkligen behöver extra vård.",
      },
      {
        label: "Det vi inte vill överdriva",
        text: "Schampo ensamt gör inte hela rutinen. Torrt eller behandlat hår behöver ofta balsam och ibland inpackning för bäst känsla.",
      },
    ],
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
  uses: [
    "Som huvudschampo i färgat, blekt eller värmestylat hår.",
    "När du vill att rengöringen ska kännas mer vårdande än stram.",
    "Tillsammans med balsam eller No.3 i en mer komplett Olaplex-rutin.",
    "När en liten mängd produkt och krämigt lödder passar din tvättvana.",
  ],
  peopleLike: [
    "Köpare beskriver färgat och slitet hår som mjukare med tiden.",
    "Flera tycker att lite produkt räcker långt.",
    "Många använder det som första steg före balsam och inpackning i samma serie.",
  ],
  honestCheck: [
    "Kombinera gärna med balsam om håret lätt blir torrt.",
    "Upplevelsen varierar mellan hårtyper och hur skadat håret är.",
    "Premiumpriset är lättare att motivera för behandlat hår än för helt okomplicerade längder.",
  ],
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
    checks: [
      {
        label: "Problemet den löser",
        text: "Ger extra omvårdnad till längder som känns slitna efter färg, blekning eller värmestyling.",
      },
      {
        label: "Varför Elin fastnade",
        text: "No.3 har en tydlig plats i rutinen före schampo, vilket gör den lätt att förstå om du redan har ett vårdande schampo och balsam.",
      },
      {
        label: "Det vi inte vill överdriva",
        text: "Det är inte en leave-in och inte en engångslösning. Hårtyp, slitage och hur ofta du använder den påverkar känslan.",
      },
    ],
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
  uses: [
    "Som veckosteg före schampo när längderna känns torra eller trötta.",
    "Efter perioder med mycket värmestyling.",
    "I färgat eller blekt hår som behöver mer omvårdnad än vanligt balsam.",
    "Inför styling när du vill att håret ska kännas mjukare och mer följsamt.",
  ],
  peopleLike: [
    "Köpare beskriver håret som starkare och mjukare efter användning.",
    "Många med blekt eller färgat hår lyfter den som extra omvårdnad.",
    "Den tydliga platsen före schampo gör rutinen enkel att följa.",
  ],
  honestCheck: [
    "Använd före schampo, inte som balsam eller leave-in.",
    "Resultatet varierar beroende på hårtyp och hur slitet håret är.",
    "Premiumkänslan gör mest nytta om du faktiskt använder den regelbundet.",
  ],
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

export const got2bVarmeskyddProduct: Product = {
  slug: "värmeskyddsspray-got2b",
  title: "Got2b Guardian Angel värmeskyddsspray (200 ml)",
  category: "skonhet",
  asin: "B0BRJR7BN1",
  brand: "Got2b",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Skydd upp till 220°C",
    "Fön & plattång",
    "Lätt spray",
  ],
  image: "/products/got2b-varmeskydd/got2b-vs-thumbnail.webp",
  imageAlt: "Got2b Guardian Angel värmeskyddsspray, 200 ml",
  images: [
    {
      src: "/products/got2b-varmeskydd/got2b-vs-thumbnail.webp",
      alt: "Got2b Guardian Angel värmeskyddsspray, 200 ml",
      label: "Got2b värmeskydd",
    },
    {
      src: "/products/got2b-varmeskydd/got2b-vs-1.webp",
      alt: "Got2b värmeskyddsspray skyddar håret vid fön och plattång",
      label: "Upp till 220°C",
    },
    {
      src: "/products/got2b-varmeskydd/got2b-vs-2.webp",
      alt: "Got2b värmeskyddsspray lätt textur som sprayas i håret",
      label: "Lätt spray",
    },
    {
      src: "/products/got2b-varmeskydd/got2b-vs-3.webp",
      alt: "Detaljbild av Got2b Guardian Angel värmeskyddsspray",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4g5f7Gd",
  pageHref: "/skonhet/varmeskyddsspray",
  summary: "En lätt värmeskyddsspray som lägger ett skyddande lager mellan håret och värmen från fön, plattång och locktång – upp till 220°C. Enkel att spraya in i fuktigt eller torrt hår innan du stylar.",
  evaluation: {
    headline: "Värmeskydd upp till 220°C",
    intro: "Elin går igenom Got2b Guardian Angel: en värmeskyddsspray som lägger ett skyddande lager mellan håret och värmen vid fön, plattång och locktång upp till 220°C. En lätt spray som är enkel att fördela jämnt innan du stylar.",
    verdict: "Prisvärd värmeskyddsspray för dig som föner, plattar eller lockar håret ofta.",
    checks: [],
  },
  specSectionEyebrow: "Hårvård",
  specSectionTitle: "Got2b Guardian Angel värmeskyddsspray",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Spray, 200 ml",
    },
    {
      label: "Skydd",
      caption: "Värme",
      value: "Upp till 220°C",
    },
    {
      label: "Användning",
      caption: "Styling",
      value: "Fön, plattång, locktång",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4g5f7Gd",
    ratingSummary: "Amazon visar 4,2 av 5 från 1043 omdömen.",
    highlights: [
      "Köpare uppskattar att håret känns skyddat vid fön och plattång.",
      "Lätt spray som de flesta tycker fördelas jämnt utan att tynga håret.",
      "Många använder den dagligen innan styling och tycker den räcker länge.",
    ],
    cautions: [
      "Spraya jämnt och inte för nära – för mycket produkt kan göra håret klibbigt.",
      "Värmeskydd minskar påverkan men hög värme sliter ändå på håret över tid.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const kitschMicrofiberTowelProduct: Product = {
  slug: "microfiberhandduk-har",
  title: "Kitsch Microfiber Hair Towel Wrap",
  category: "skonhet",
  asin: "B07XBTWPVP",
  brand: "Kitsch",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Snabbtorkande",
    "Skonsam mot håret",
    "Mindre frizz",
  ],
  image: "/products/kitsch-microfiber-towel/kitsch-towel-thumbnail.webp",
  imageAlt: "Kitsch Microfiber Hair Towel Wrap mikrofiberhandduk för hår",
  images: [
    {
      src: "/products/kitsch-microfiber-towel/kitsch-towel-thumbnail.webp",
      alt: "Kitsch Microfiber Hair Towel Wrap mikrofiberhandduk för hår",
      label: "Microfiberhandduk",
    },
    {
      src: "/products/kitsch-microfiber-towel/kitsch-towel-1.webp",
      alt: "Kitsch mikrofiberhandduk som lindas runt håret efter dusch",
      label: "Lindas runt",
    },
    {
      src: "/products/kitsch-microfiber-towel/kitsch-towel-2.webp",
      alt: "Kitsch snabbtorkande mikrofiberhandduk skonsam mot håret",
      label: "Snabbtorkande",
    },
    {
      src: "/products/kitsch-microfiber-towel/kitsch-towel-3.webp",
      alt: "Detaljbild av Kitsch Microfiber Hair Towel Wrap",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4xSHA8A",
  pageHref: "/skonhet/microfiberhandduk",
  summary: "En snabbtorkande mikrofiberhandduk som lindas runt det blöta håret efter duschen. Den suger upp fukt skonsamt utan att gnugga håret hårt, vilket hjälper till att minska frizz och korta ner torktiden.",
  evaluation: {
    headline: "Snabbtorkande och skonsam mot håret",
    intro: "Elin går igenom Kitsch Microfiber Hair Towel Wrap: en snabbtorkande mikrofiberhandduk som lindas runt det blöta håret. Den suger upp fukt skonsamt i stället för att gnugga håret hårt, vilket många upplever ger mindre frizz och kortare torktid.",
    verdict: "Prisvärd mikrofiberhandduk för dig som vill torka håret skonsammare och minska frizz.",
    checks: [],
  },
  specSectionEyebrow: "Hårstyling (verktyg)",
  specSectionTitle: "Kitsch Microfiber Hair Towel Wrap",
  specs: [
    {
      label: "Material",
      caption: "Typ",
      value: "Mikrofiber",
    },
    {
      label: "Funktion",
      caption: "Torkning",
      value: "Snabbtorkande, suger upp fukt",
    },
    {
      label: "Fäste",
      caption: "Användning",
      value: "Lindas och knäpps runt håret",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4xSHA8A",
    ratingSummary: "Amazon visar 4,6 av 5 från 8357 omdömen.",
    highlights: [
      "Köpare upplever att håret torkar snabbare än med en vanlig handduk.",
      "Många tycker att den är skonsam mot håret och ger mindre frizz.",
      "Uppskattas för att den sitter stadigt och håller håret ur vägen.",
    ],
    cautions: [
      "Mikrofiber kan kännas tunn – den passar bäst för att suga upp fukt, inte torka helt.",
      "Följ tvättråden och undsek sköljmedel, som kan minska mikrofiberns uppsugningsförmåga.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const cantuSatinBonnetProduct: Product = {
  slug: "cantu-satin-bonnet",
  title: "Cantu Satin Nightcap – satinmössa",
  category: "skonhet",
  asin: "B0B4SKR9TN",
  brand: "Cantu",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Satin",
    "För natten",
    "Mindre frizz",
  ],
  image: "/products/cantu-bonnet/cantu-bonnet-thumbnail.webp",
  imageAlt: "Cantu Satin Nightcap satinmössa för håret på natten",
  images: [
    {
      src: "/products/cantu-bonnet/cantu-bonnet-thumbnail.webp",
      alt: "Cantu Satin Nightcap satinmössa för håret på natten",
      label: "Satinmössa",
    },
    {
      src: "/products/cantu-bonnet/cantu-bonnet-1.webp",
      alt: "Cantu satinmössa som skyddar håret och minskar friktion mot kudden",
      label: "Skyddar håret",
    },
    {
      src: "/products/cantu-bonnet/cantu-bonnet-2.webp",
      alt: "Detaljbild av Cantu satinmössa med mjuk satininsida",
      label: "Satininsida",
    },
  ],
  amazonUrl: "https://amzn.to/43VlF2X",
  pageHref: "/skonhet/satinmossa",
  summary: "En satinmössa som du har på håret medan du sover. Den släta satinen ger mindre friktion mot kudden, vilket många använder för att hålla nere frizz och hjälpa frisyren att hålla sig bättre över natten.",
  evaluation: {
    headline: "Satinmössa som skyddar håret på natten",
    intro: "Elin går igenom Cantu Satin Nightcap: en mössa med slät satininsida som du sover med. Tanken är enkel – satin ger mindre friktion mot kudden än ett vanligt bomullslakan, vilket många upplever ger mindre frizz på morgonen och en frisyr som håller sig längre.",
    verdict: "Enkel satinmössa för dig som vill skydda håret på natten och minska frizz – men få omdömen och ett lägre betyg gör att underlaget är tunt.",
    checks: [],
  },
  specSectionEyebrow: "Hårvård",
  specSectionTitle: "Cantu Satin Nightcap",
  specs: [
    {
      label: "Typ",
      caption: "Produkt",
      value: "Satinmössa för natten",
    },
    {
      label: "Material",
      caption: "Insida",
      value: "Slät satin för mindre friktion",
    },
    {
      label: "Användning",
      caption: "När",
      value: "På håret medan du sover",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/43VlF2X",
    ratingSummary: "Amazon visar 3,7 av 5 från 69 omdömen.",
    highlights: [
      "Den släta satinen ger mindre friktion mot kudden över natten.",
      "Flera använder den för att hålla nere frizz på morgonen.",
      "Smidig att ta på och bär medan du sover.",
    ],
    cautions: [
      "Betyget är lägre (3,7 av 5) och bygger på få omdömen (69) – ta det som en fingervisning, inte ett facit.",
      "Passform och storlek upplevs olika beroende på hårmängd och huvudform – kolla måtten innan du köper.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const kitschHeatlessCurlsProduct: Product = {
  slug: "kitsch-heatless-curls",
  title: "Kitsch Heatless Satin Curling Set",
  category: "skonhet",
  asin: "B0CF76VGD5",
  brand: "Kitsch",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Locka utan värme",
    "Satinband",
    "Skonsamt mot håret",
  ],
  image: "/products/kitsch-heatless/kitsch-heatless-thumbnail.webp",
  imageAlt: "Kitsch Heatless Satin Curling Set",
  images: [
    {
      src: "/products/kitsch-heatless/kitsch-heatless-thumbnail.webp",
      alt: "Kitsch Heatless Satin Curling Set",
      label: "Curling Set",
    },
    {
      src: "/products/kitsch-heatless/kitsch-heatless-1.webp",
      alt: "Kitsch satinband för att locka håret utan värme",
      label: "Satinband",
    },
    {
      src: "/products/kitsch-heatless/kitsch-heatless-2.webp",
      alt: "Kitsch heatless curling set med clips och band",
      label: "Komplett set",
    },
    {
      src: "/products/kitsch-heatless/kitsch-heatless-3.webp",
      alt: "Detaljbild av Kitsch Heatless Satin Curling Set",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4p0W7ej",
  pageHref: "/skonhet/heatless-curls",
  summary: "Ett satinband som lockar håret utan värme medan du sover. Du lindar håret runt bandet på kvällen och vaknar till mjuka lockar – skonsamt mot håret eftersom det slipper både värme och hårda spännen.",
  evaluation: {
    headline: "Lockar utan värme medan du sover",
    intro: "Elin går igenom Kitsch Heatless Satin Curling Set: ett satinband som du lindar håret runt på kvällen för att vakna till lockar utan att använda en enda grad värme. Satin är mjukt mot håret och hela poängen är att slippa locktång och plattång på dagar då du vill vara skonsam.",
    verdict: "Skonsamt sätt att få lockar över natten – helt utan värme.",
    checks: [],
  },
  specSectionEyebrow: "Hårstyling (verktyg)",
  specSectionTitle: "Kitsch Heatless Satin Curling Set",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Satinband + clips",
    },
    {
      label: "Metod",
      caption: "Styling",
      value: "Lockar utan värme, över natten",
    },
    {
      label: "Material",
      caption: "Tyg",
      value: "Satin, mjukt mot håret",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4p0W7ej",
    ratingSummary: "Amazon visar 4,2 av 5 från 20 785 omdömen.",
    highlights: [
      "Köpare gillar att få lockar utan värme medan de sover.",
      "Satinbandet upplevs som skonsamt och bekvämt mot håret.",
      "Många tycker att lockarna håller fint hela dagen.",
    ],
    cautions: [
      "Det tar lite övning att linda håret jämnt första gångerna.",
      "Resultatet varierar med hårlängd och hårtjocklek.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const kitschClawClipsProduct: Product = {
  slug: "kitsch-claw-clips",
  title: "Kitsch Jumbo Claw Clips (2-pack)",
  category: "skonhet",
  asin: "B09GYPV213",
  brand: "Kitsch",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Jumbo-storlek",
    "För tjockt hår",
    "2-pack",
  ],
  image: "/products/kitsch-claw-clips/kitsch-claw-thumbnail.webp",
  imageAlt: "Kitsch Jumbo Claw Clips, 2-pack",
  images: [
    {
      src: "/products/kitsch-claw-clips/kitsch-claw-thumbnail.webp",
      alt: "Kitsch Jumbo Claw Clips, 2-pack",
      label: "Jumbo claw clips",
    },
    {
      src: "/products/kitsch-claw-clips/kitsch-claw-1.webp",
      alt: "Kitsch Jumbo Claw Clips i stor storlek för tjockt hår",
      label: "Stor storlek",
    },
    {
      src: "/products/kitsch-claw-clips/kitsch-claw-2.webp",
      alt: "Kitsch Jumbo Claw Clips greppar håret stadigt",
      label: "Stadigt grepp",
    },
    {
      src: "/products/kitsch-claw-clips/kitsch-claw-3.webp",
      alt: "Detaljbild av Kitsch Jumbo Claw Clips",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4eyD0EZ",
  pageHref: "/skonhet/claw-clips",
  summary: "Stora kloklämmor i 2-pack som håller upp tjockt hår stadigt och snyggt. Jumbo-storleken ger ett rejält grepp för en uppsatt look som sitter hela dagen.",
  evaluation: {
    headline: "Jumbo-klämmor som håller tjockt hår på plats",
    intro: "Elin går igenom Kitsch Jumbo Claw Clips: stora kloklämmor i 2-pack som är gjorda för att hålla upp tjockt och rikligt hår stadigt och snyggt. Jumbo-storleken ger ett rejält grepp, och den enkla designen passar både en vardaglig knut och en mer uppsatt look.",
    verdict: "Rejäla jumbo-klämmor för tjockt hår, i ett praktiskt 2-pack.",
    checks: [],
  },
  specSectionEyebrow: "Hårstyling (verktyg)",
  specSectionTitle: "Kitsch Jumbo Claw Clips",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Kloklämmor, 2-pack",
    },
    {
      label: "Storlek",
      caption: "Mått",
      value: "Jumbo, för tjockt hår",
    },
    {
      label: "Profil",
      caption: "Hårstyling",
      value: "Stadigt grepp, vardag till uppsatt",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4eyD0EZ",
    ratingSummary: "Amazon visar 4,5 av 5 från 850 omdömen.",
    highlights: [
      "Köpare tycker att de greppar tjockt hår stadigt utan att glida.",
      "Jumbo-storleken uppskattas för att den rymmer mycket hår.",
      "Många gillar att de håller upp en knut snyggt hela dagen.",
    ],
    cautions: [
      "Mycket stora klämmor kan kännas för rejäla för tunt eller fint hår.",
      "Som hårverktyg i plast bör de hanteras varsamt så att tänderna inte bryts.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const wetBrushOriginalProduct: Product = {
  slug: "wet-brush-original",
  title: "Wet Brush Original Detangler – utredningsborste",
  category: "skonhet",
  asin: "B005LPN8R6",
  brand: "Wet Brush",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Flexibla borst",
    "Blött & torrt hår",
    "Mindre drag",
  ],
  image: "/products/wet-brush/wet-brush-thumbnail.webp",
  imageAlt: "Wet Brush Original Detangler utredningsborste",
  images: [
    {
      src: "/products/wet-brush/wet-brush-thumbnail.webp",
      alt: "Wet Brush Original Detangler utredningsborste",
      label: "Wet Brush",
    },
    {
      src: "/products/wet-brush/wet-brush-1.webp",
      alt: "Wet Brush med flexibla borst som reder ut tovor",
      label: "Flexibla borst",
    },
    {
      src: "/products/wet-brush/wet-brush-2.webp",
      alt: "Wet Brush utredningsborste för blött och torrt hår",
      label: "Blött & torrt",
    },
    {
      src: "/products/wet-brush/wet-brush-3.webp",
      alt: "Detaljbild av Wet Brush Original Detangler",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4wdwg5o",
  pageHref: "/skonhet/wet-brush",
  summary: "En utredningsborste med flexibla borst som reder ut tovor skonsamt på både blött och torrt hår. Gjord för mindre drag och en mjukare borstupplevelse, även i trassligt hår.",
  evaluation: {
    headline: "Reder ut tovor med mindre drag",
    intro: "Elin går igenom Wet Brush Original Detangler: en utredningsborste med flexibla borst som glider genom håret och reder ut tovor skonsamt. Den är populär för att kunna användas på både blött och torrt hår, vilket gör den mångsidig i den dagliga rutinen.",
    verdict: "Skonsam utredningsborste för mindre drag på blött och torrt hår.",
    checks: [],
  },
  specSectionEyebrow: "Hårstyling (verktyg)",
  specSectionTitle: "Wet Brush Original Detangler",
  specs: [
    {
      label: "Typ",
      caption: "Verktyg",
      value: "Utredningsborste",
    },
    {
      label: "Borst",
      caption: "Funktion",
      value: "Flexibla borst, mindre drag",
    },
    {
      label: "Användning",
      caption: "Hår",
      value: "Blött och torrt hår",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4wdwg5o",
    ratingSummary: "Amazon visar 4,7 av 5 från 23433 omdömen.",
    highlights: [
      "Köpare upplever att tovor reds ut med mindre drag och smärta.",
      "Uppskattas för att kunna användas på både blött och torrt hår.",
      "Många tycker att borsten glider mjukt genom håret.",
    ],
    cautions: [
      "Flexibla borst passar utredning men ger mindre stadga vid styling.",
      "Mycket trassligt hår kan behöva delas upp i sektioner för bästa resultat.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const denmanD3Product: Product = {
  slug: "denman-d3-borste",
  title: "Denman D3 Original Styler – 7 rader",
  category: "skonhet",
  asin: "B00197623M",
  brand: "Denman",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "7 rader",
    "Lockdefinition",
    "Klassisk styler",
  ],
  image: "/products/denman-d3/denman-thumbnail.webp",
  imageAlt: "Denman D3 Original Styler stylingborste med 7 rader",
  images: [
    {
      src: "/products/denman-d3/denman-thumbnail.webp",
      alt: "Denman D3 Original Styler stylingborste med 7 rader",
      label: "Denman D3",
    },
    {
      src: "/products/denman-d3/denman-1.webp",
      alt: "Denman D3 stylingborste populär för lockdefinition",
      label: "Lockdefinition",
    },
    {
      src: "/products/denman-d3/denman-2.webp",
      alt: "Denman D3 med 7 rader för utredning och styling",
      label: "7 rader",
    },
    {
      src: "/products/denman-d3/denman-3.webp",
      alt: "Detaljbild av Denman D3 Original Styler",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4xS5ykm",
  pageHref: "/skonhet/denman-borste",
  summary: "En klassisk stylingborste med 7 rader, populär för lockdefinition och utredning. Ett välkänt verktyg för dig som vill forma och definiera lockigt hår i den dagliga rutinen.",
  evaluation: {
    headline: "Klassisk styler för lockdefinition",
    intro: "Elin går igenom Denman D3 Original Styler: en klassisk stylingborste med 7 rader som är populär för lockdefinition och utredning. Den är ett välkänt verktyg i lockcommunityt och används för att forma och definiera lockigt hår.",
    verdict: "Klassisk stylingborste för lockdefinition och utredning.",
    checks: [],
  },
  specSectionEyebrow: "Hårstyling (verktyg)",
  specSectionTitle: "Denman D3 Original Styler",
  specs: [
    {
      label: "Typ",
      caption: "Verktyg",
      value: "Stylingborste, 7 rader",
    },
    {
      label: "Funktion",
      caption: "Styling",
      value: "Lockdefinition och utredning",
    },
    {
      label: "Hår",
      caption: "Profil",
      value: "Populär för lockigt hår",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4xS5ykm",
    ratingSummary: "Amazon visar 4,6 av 5 från 59551 omdömen.",
    highlights: [
      "Köpare uppskattar borsten för tydligare lockdefinition.",
      "De 7 raderna ger bra grepp vid både styling och utredning.",
      "Många ser den som en klassiker för lockigt hår.",
    ],
    cautions: [
      "Stadiga rader kan kännas hårda om man drar för snabbt – ta det varsamt.",
      "Resultatet varierar med håracktyp och teknik; det kan ta lite övning.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const osisDustItProduct: Product = {
  slug: "osis-volympuder",
  title: "Schwarzkopf OSiS+ Dust It – volympuder",
  category: "skonhet",
  asin: "B0BYBFGJ41",
  brand: "Schwarzkopf Professional",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Rotvolym",
    "Matt finish",
    "Snabbt grepp",
  ],
  image: "/products/osis-dust-it/osis-thumbnail.webp",
  imageAlt: "Schwarzkopf OSiS+ Dust It volympuder",
  images: [
    {
      src: "/products/osis-dust-it/osis-thumbnail.webp",
      alt: "Schwarzkopf OSiS+ Dust It volympuder",
      label: "OSiS+ Dust It",
    },
    {
      src: "/products/osis-dust-it/osis-1.webp",
      alt: "OSiS+ Dust It matt volympuder för rotvolym",
      label: "Rotvolym",
    },
    {
      src: "/products/osis-dust-it/osis-2.webp",
      alt: "OSiS+ Dust It puder som ger grepp och fyllighet",
      label: "Grepp",
    },
    {
      src: "/products/osis-dust-it/osis-3.webp",
      alt: "Detaljbild av Schwarzkopf OSiS+ Dust It",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/3R7IGN4",
  pageHref: "/skonhet/volympuder",
  summary: "Ett matt volympuder som ger snabb rotvolym och grepp. Strö ut i rötterna för fyllighet och en mattare finish, perfekt för dig som vill ge plattare hår mer lyft.",
  evaluation: {
    headline: "Matt puder för snabb rotvolym",
    intro: "Elin går igenom Schwarzkopf OSiS+ Dust It: ett matt volympuder som ströas i rötterna för att ge snabb rotvolym och grepp. Det är populärt för att lyfta plattare hår och ge fyllighet utan tunga produkter.",
    verdict: "Matt volympuder för snabb rotvolym och grepp.",
    checks: [],
  },
  specSectionEyebrow: "Hårvård",
  specSectionTitle: "Schwarzkopf OSiS+ Dust It",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Volympuder",
    },
    {
      label: "Effekt",
      caption: "Styling",
      value: "Rotvolym och grepp",
    },
    {
      label: "Finish",
      caption: "Look",
      value: "Matt finish",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3R7IGN4",
    ratingSummary: "Amazon visar 4,4 av 5 från 1256 omdömen.",
    highlights: [
      "Köpare upplever snabb rotvolym med bara en liten mängd.",
      "Ger grepp och fyllighet som gör håret lättare att forma.",
      "Den matta finishen uppskattas för en naturlig look.",
    ],
    cautions: [
      "Lite räcker långt – för mycket puder kan kännas torrt eller kladdigt.",
      "Effekten varierar med hårtyp och hur mycket som doseras i rötterna.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const wellaEimiMousseProduct: Product = {
  slug: "wella-eimi-mousse",
  title: "Wella EIMI Extra Volume Mousse (300 ml)",
  category: "skonhet",
  asin: "B00X5N25AM",
  brand: "Wella",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Volym",
    "Fyllighet",
    "Hållbar styling",
  ],
  image: "/products/wella-eimi-mousse/wella-thumbnail.webp",
  imageAlt: "Wella EIMI Extra Volume Mousse, 300 ml",
  images: [
    {
      src: "/products/wella-eimi-mousse/wella-thumbnail.webp",
      alt: "Wella EIMI Extra Volume Mousse, 300 ml",
      label: "EIMI Mousse",
    },
    {
      src: "/products/wella-eimi-mousse/wella-1.webp",
      alt: "Wella EIMI volymmousse för fyllighet",
      label: "Volym",
    },
    {
      src: "/products/wella-eimi-mousse/wella-2.webp",
      alt: "Wella EIMI mousse för hållbar styling",
      label: "Hållbar styling",
    },
  ],
  amazonUrl: "https://amzn.to/4vK6Xru",
  pageHref: "/skonhet/harmousse",
  summary: "En volymmousse för fyllighet och hållbar styling. Arbeta in i fuktigt hår för lyft och en fylligare look som håller genom dagen, perfekt för dig som vill ha mer volym.",
  evaluation: {
    headline: "Volymmousse för fyllighet",
    intro: "Elin går igenom Wella EIMI Extra Volume Mousse: en volymmousse som arbetas in i fuktigt hår för fyllighet och en hållbar styling. Den är populär för att ge plattare hår mer lyft och en fylligare look som håller genom dagen.",
    verdict: "Volymmousse för fyllighet och hållbar styling.",
    checks: [],
  },
  specSectionEyebrow: "Hårvård",
  specSectionTitle: "Wella EIMI Extra Volume Mousse",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Mousse, 300 ml",
    },
    {
      label: "Effekt",
      caption: "Styling",
      value: "Volym och fyllighet",
    },
    {
      label: "Håll",
      caption: "Resultat",
      value: "Hållbar styling",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4vK6Xru",
    ratingSummary: "Amazon visar 4,5 av 5 från 2986 omdömen.",
    highlights: [
      "Köpare upplever mer volym och fyllighet i håret.",
      "Stylingen beskrivs som hållbar genom dagen.",
      "Moussen uppskattas för att ge lyft utan att kännas tung.",
    ],
    cautions: [
      "För mycket mousse kan göra håret stelt – dosera lagom.",
      "Effekten varierar med hårtyp och hur den föns in i håret.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const got2bGluedProduct: Product = {
  slug: "got2b-glued-harspray",
  title: "Got2b Glued hårspray (300 ml)",
  category: "skonhet",
  asin: "B002CB56SG",
  brand: "Got2b",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Extra stark",
    "Håller hela dagen",
    "Styling",
  ],
  image: "/products/got2b-glued/got2b-glued-thumbnail.webp",
  imageAlt: "Got2b Glued hårspray, 300 ml",
  images: [
    {
      src: "/products/got2b-glued/got2b-glued-thumbnail.webp",
      alt: "Got2b Glued hårspray, 300 ml",
      label: "Got2b Glued",
    },
    {
      src: "/products/got2b-glued/got2b-glued-1.webp",
      alt: "Got2b Glued extra stark hårspray för styling",
      label: "Extra stark",
    },
    {
      src: "/products/got2b-glued/got2b-glued-2.webp",
      alt: "Got2b Glued hårspray som håller hela dagen",
      label: "Håller hela dagen",
    },
    {
      src: "/products/got2b-glued/got2b-glued-3.webp",
      alt: "Detaljbild av Got2b Glued hårspray",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4w6poGK",
  pageHref: "/skonhet/harspray",
  summary: "En extra stark hårspray för styling som håller hela dagen. Lås fast frisyren med ett stadigt grepp, perfekt för slick-looks och styling som ska hålla formen länge.",
  evaluation: {
    headline: "Extra stark spray som håller",
    intro: "Elin går igenom Got2b Glued hårspray: en extra stark spray gjord för styling som håller hela dagen. Den är populär för slick-looks och frisyrer som ska sitta länge, med ett stadigt grepp som låser formen.",
    verdict: "Extra stark hårspray för styling som håller hela dagen.",
    checks: [],
  },
  specSectionEyebrow: "Hårvård",
  specSectionTitle: "Got2b Glued hårspray",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Hårspray, 300 ml",
    },
    {
      label: "Styrka",
      caption: "Håll",
      value: "Extra stark hållbarhet",
    },
    {
      label: "Användning",
      caption: "Styling",
      value: "Slick-looks och fast styling",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4w6poGK",
    ratingSummary: "Amazon visar 4,6 av 5 från 10603 omdömen.",
    highlights: [
      "Köpare upplever ett mycket stadigt grepp som håller hela dagen.",
      "Populär för slick-looks och frisyrer som ska sitta länge.",
      "Många tycker att den låser formen bättre än vanlig spray.",
    ],
    cautions: [
      "Mycket stark hållbarhet – en lätt hand räcker långt.",
      "Stark fixering kan kännas stel; borsta ur ordentligt vid tvätt.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const mariaNilaTextureProduct: Product = {
  slug: "maria-nila-texturspray",
  title: "Maria Nila Texture Spray (250 ml)",
  category: "skonhet",
  asin: "B0CKHQZZGN",
  brand: "Maria Nila",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Matt volym",
    "Beach waves-känsla",
    "Vegansk",
  ],
  image: "/products/maria-nila-texture/maria-nila-thumbnail.webp",
  imageAlt: "Maria Nila Texture Spray, 250 ml",
  images: [
    {
      src: "/products/maria-nila-texture/maria-nila-thumbnail.webp",
      alt: "Maria Nila Texture Spray, 250 ml",
      label: "Texture Spray",
    },
    {
      src: "/products/maria-nila-texture/maria-nila-1.webp",
      alt: "Maria Nila Texture Spray för matt volym i håret",
      label: "Matt volym",
    },
    {
      src: "/products/maria-nila-texture/maria-nila-2.webp",
      alt: "Maria Nila Texture Spray textur och dimma",
      label: "Lätt dimma",
    },
    {
      src: "/products/maria-nila-texture/maria-nila-3.webp",
      alt: "Detaljbild av Maria Nila Texture Spray flaska",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4oT98GM",
  pageHref: "/skonhet/texturspray",
  summary: "En texturspray av salt spray-typ som ger matt volym och en avslappnad beach waves-känsla. Bygger struktur och grepp i håret utan att tynga ner, för en sval, ostylad look.",
  evaluation: {
    headline: "Texturspray för matt volym och beach waves",
    intro: "Elin går igenom Maria Nila Texture Spray: en salt spray-baserad texturspray som ger matt volym och grepp för en avslappnad beach waves-känsla. Den bygger struktur i håret och hjälper lugg och slingor att hålla formen, med ett veganskt innehåll.",
    verdict: "Smidig texturspray för matt volym och en ostylad beach waves-look.",
    checks: [],
  },
  specSectionEyebrow: "Hårvård",
  specSectionTitle: "Maria Nila Texture Spray",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Texturspray (salt spray), 250 ml",
    },
    {
      label: "Effekt",
      caption: "Styling",
      value: "Matt volym och grepp",
    },
    {
      label: "Profil",
      caption: "Hårvård",
      value: "Vegansk, för beach waves-känsla",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4oT98GM",
    ratingSummary: "Amazon visar 4,3 av 5 från 84 omdömen.",
    highlights: [
      "Köpare gillar den matta volymen och greppet i håret.",
      "Ger en avslappnad beach waves-känsla utan att kännas hård.",
      "Lätt dimma som de flesta tycker är enkel att fördela.",
    ],
    cautions: [
      "Antalet omdömen är fortfarande lågt, så helhetsbilden kan ändras över tid.",
      "Salt spray kan kännas torrt i längden – varva gärna med ett återfuktande steg.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const candureFrisorsaxProduct: Product = {
  slug: "candure-frisorsax",
  title: "Candure frisörsax i rostfritt stål",
  category: "skonhet",
  asin: "B00CP3EA5G",
  brand: "Candure",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Rostfritt stål",
    "Vass egg",
    "För lugg & toppar",
  ],
  image: "/products/candure-frisorsax/candure-thumbnail.webp",
  imageAlt: "Candure frisörsax i rostfritt stål",
  images: [
    {
      src: "/products/candure-frisorsax/candure-thumbnail.webp",
      alt: "Candure frisörsax i rostfritt stål",
      label: "Frisörsax",
    },
    {
      src: "/products/candure-frisorsax/candure-1.webp",
      alt: "Candure frisörsax med vass egg för att putsa lugg",
      label: "Vass egg",
    },
    {
      src: "/products/candure-frisorsax/candure-2.webp",
      alt: "Candure frisörsax i rostfritt stål, närbild på bladen",
      label: "Rostfritt stål",
    },
    {
      src: "/products/candure-frisorsax/candure-3.webp",
      alt: "Detaljbild av Candure frisörsax handtag",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/43Z46is",
  pageHref: "/skonhet/frisorsax",
  summary: "En vass frisörsax i rostfritt stål för att putsa lugg och toppar hemma. Skarp egg och stadigt grepp gör det enklare att ta små, jämna klipp mellan frisörbesöken.",
  evaluation: {
    headline: "Frisörsax för att putsa lugg och toppar hemma",
    intro: "Elin går igenom Candure frisörsax i rostfritt stål: en vass sax gjord för att putsa lugg och toppar mellan klippningarna. Den skarpa eggen och det stadiga greppet gör det lättare att ta små, kontrollerade klipp hemma.",
    verdict: "Vass och prisvärd frisörsax för att putsa lugg och toppar hemma.",
    checks: [],
  },
  specSectionEyebrow: "Hårstyling (verktyg)",
  specSectionTitle: "Candure frisörsax",
  specs: [
    {
      label: "Material",
      caption: "Konstruktion",
      value: "Rostfritt stål",
    },
    {
      label: "Egg",
      caption: "Funktion",
      value: "Vass för precisa klipp",
    },
    {
      label: "Användning",
      caption: "Styling",
      value: "Putsa lugg och toppar hemma",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/43Z46is",
    ratingSummary: "Amazon visar 4,6 av 5 från 19465 omdömen.",
    highlights: [
      "Köpare beskriver saxen som vass och lätt att klippa med.",
      "Uppskattas för att putsa lugg och toppar mellan frisörbesöken.",
      "Stadigt grepp som många tycker ger bra kontroll.",
    ],
    cautions: [
      "En vass sax kräver försiktighet – ta små klipp åt gången.",
      "Förvara saxen torrt så att eggen håller sig skarp längre.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const bondiSandsMousseProduct: Product = {
  slug: "bondi-sands-mousse",
  title: "Bondi Sands Self Tanning Foam Ultra Dark – brun utan sol",
  category: "skonhet",
  asin: "B09T2MF7K5",
  brand: "Bondi Sands",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Självbrunande mousse",
    "Ultra Dark",
    "Jämn färg",
  ],
  image: "/products/bondi-sands-mousse/bondi-mousse-thumbnail.webp",
  imageAlt: "Bondi Sands Self Tanning Foam Ultra Dark, brun utan sol-mousse",
  images: [
    {
      src: "/products/bondi-sands-mousse/bondi-mousse-thumbnail.webp",
      alt: "Bondi Sands Self Tanning Foam Ultra Dark, brun utan sol-mousse",
      label: "Bondi Sands mousse",
    },
    {
      src: "/products/bondi-sands-mousse/bondi-mousse-1.webp",
      alt: "Bondi Sands Ultra Dark självbrunande mousse för en djup färg",
      label: "Ultra Dark",
    },
    {
      src: "/products/bondi-sands-mousse/bondi-mousse-2.webp",
      alt: "Bondi Sands mousse textur och konsistens",
      label: "Lätt mousse",
    },
    {
      src: "/products/bondi-sands-mousse/bondi-mousse-3.webp",
      alt: "Detaljbild av Bondi Sands Self Tanning Foam Ultra Dark",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4aq21zE",
  pageHref: "/skonhet/brun-utan-sol-mousse",
  summary: "En självbrunande mousse som ger en djup, jämn färg utan sol – för en bronzad look hela året. Bra att veta: en brun utan sol-mousse ger färg, inte solskydd, så du behöver fortfarande ditt vanliga solskydd ute i solen.",
  evaluation: {
    headline: "Brun utan sol med djup, jämn färg",
    intro: "Elin går igenom Bondi Sands Self Tanning Foam Ultra Dark: en självbrunande mousse som ger en djup, jämn färg utan sol. Moussen läggs på med handske för en jämn täckning och bygger upp en bronzad look över några timmar. Viktigt att komma ihåg är att en brun utan sol-produkt enbart ger färg – den ger inget solskydd.",
    verdict: "Lättapplicerad mousse för en djup, jämn brun utan sol-färg – men kom ihåg att den inte ersätter solskydd.",
    checks: [],
  },
  specSectionEyebrow: "Sol & glow",
  specSectionTitle: "Bondi Sands Self Tanning Foam Ultra Dark",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Självbrunande mousse, Ultra Dark",
    },
    {
      label: "Resultat",
      caption: "Färg",
      value: "Djup, jämn brun utan sol-färg",
    },
    {
      label: "Bra att veta",
      caption: "Färg, ej solskydd",
      value: "Ger färg – inte solskydd",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4aq21zE",
    ratingSummary: "Amazon visar 4,3 av 5 från 533 omdömen.",
    highlights: [
      "Köpare upplever en djup, jämn färg utan ränder vid rätt applicering.",
      "Lätt mousse som de flesta tycker är enkel att fördela med handske.",
      "Uppskattas för en bronzad look som håller i flera dagar.",
    ],
    cautions: [
      "Brun utan sol ger färg, inte solskydd – använd ditt vanliga solskydd i solen.",
      "Exfoliera och fukta torra partier innan du lägger på, annars kan färgen bli ojämn.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const tanologistDropsProduct: Product = {
  slug: "tanologist-tan-drops",
  title: "Tanologist Self Tan Drops Dark – tanning drops",
  category: "skonhet",
  asin: "B089JC1JTT",
  brand: "Tanologist",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Gradvis färg",
    "Blandas i fuktkräm",
    "Naturlig glow",
  ],
  image: "/products/tanologist-drops/tanologist-thumbnail.webp",
  imageAlt: "Tanologist Self Tan Drops Dark, självbrunande droppar",
  images: [
    {
      src: "/products/tanologist-drops/tanologist-thumbnail.webp",
      alt: "Tanologist Self Tan Drops Dark, självbrunande droppar",
      label: "Tan Drops",
    },
    {
      src: "/products/tanologist-drops/tanologist-1.webp",
      alt: "Tanologist tanning drops som blandas i fuktkräm",
      label: "Blandas i kräm",
    },
    {
      src: "/products/tanologist-drops/tanologist-2.webp",
      alt: "Tanologist självbrunande droppar för gradvis färg",
      label: "Gradvis färg",
    },
    {
      src: "/products/tanologist-drops/tanologist-3.webp",
      alt: "Detaljbild av Tanologist Self Tan Drops Dark",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4f6lXKt",
  pageHref: "/skonhet/tanning-drops",
  summary: "Självbrunande droppar som du blandar i din vanliga fuktkräm för en gradvis, naturlig färg. Du doserar själv hur mörk färgen blir och bygger upp glowen steg för steg.",
  evaluation: {
    headline: "Självbrunande droppar för en gradvis glow",
    intro: "Elin går igenom Tanologist Self Tan Drops Dark: självbrunande droppar som blandas i din fuktkräm för en gradvis, naturlig färg. Du styr själv intensiteten genom antalet droppar, vilket gör det enkelt att bygga upp färgen i din egen takt.",
    verdict: "Smidiga tanning drops för dig som vill bygga en naturlig färg steg för steg.",
    checks: [],
  },
  specSectionEyebrow: "Sol & glow",
  specSectionTitle: "Tanologist Self Tan Drops Dark",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Självbrunande droppar",
    },
    {
      label: "Användning",
      caption: "Så funkar det",
      value: "Blandas i fuktkräm",
    },
    {
      label: "Resultat",
      caption: "Färg",
      value: "Gradvis, naturlig",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4f6lXKt",
    ratingSummary: "Amazon visar 4,3 av 5 från 2 150 omdömen.",
    highlights: [
      "Köpare uppskattar att färgen blir gradvis och ser naturlig ut.",
      "Smidigt att blanda dropparna i sin vanliga fuktkräm.",
      "Lätt att dosera själv hur mörk färgen ska bli.",
    ],
    cautions: [
      "Dropparna ger färg, inte solskydd – komplettera med separat solskydd i solen.",
      "Tvätta händerna noga efter applicering så att handflatorna inte färgas.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const bondiSandsMittProduct: Product = {
  slug: "bondi-sands-vante",
  title: "Bondi Sands Self Tan Application Mitt – appliceringsvante",
  category: "skonhet",
  asin: "B019HR6JUQ",
  brand: "Bondi Sands",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Jämn applicering",
    "Återanvändbar",
    "Fläckfritt",
  ],
  image: "/products/bondi-sands-mitt/bondi-mitt-thumbnail.webp",
  imageAlt: "Bondi Sands Self Tan Application Mitt, appliceringsvante",
  images: [
    {
      src: "/products/bondi-sands-mitt/bondi-mitt-thumbnail.webp",
      alt: "Bondi Sands Self Tan Application Mitt, appliceringsvante",
      label: "Appliceringsvante",
    },
    {
      src: "/products/bondi-sands-mitt/bondi-mitt-1.webp",
      alt: "Bondi Sands appliceringsvante för jämn brun-utan-sol",
      label: "Jämn applicering",
    },
    {
      src: "/products/bondi-sands-mitt/bondi-mitt-2.webp",
      alt: "Bondi Sands vante med mjuk sida för fläckfri applicering",
      label: "Mjuk sida",
    },
    {
      src: "/products/bondi-sands-mitt/bondi-mitt-3.webp",
      alt: "Detaljbild av Bondi Sands Self Tan Application Mitt",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/3SmtZpX",
  pageHref: "/skonhet/sjalvbrun-vante",
  summary: "En återanvändbar appliceringsvante för brun-utan-sol som hjälper dig att lägga produkten jämnt och fläckfritt – utan färgade handflator. Mjuk yta som fördelar mousse och lotion smidigt över kroppen.",
  evaluation: {
    headline: "Vanten för jämn, fläckfri brun-utan-sol",
    intro: "Elin jämför Bondi Sands Self Tan Application Mitt: en återanvändbar vante som fördelar brun-utan-sol jämnt över huden och håller handflatorna fria från färg. Den mjuka ytan gör att mousse och lotion glider på smidigt, vilket är nyckeln till ett jämnt resultat utan ränder.",
    verdict: "En enkel vante som gör brun-utan-sol jämnare och mindre kladdig.",
    checks: [],
  },
  specSectionEyebrow: "Sol & glow",
  specSectionTitle: "Bondi Sands Self Tan Application Mitt",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Appliceringsvante",
    },
    {
      label: "Användning",
      caption: "Funktion",
      value: "Fördelar mousse och lotion jämnt",
    },
    {
      label: "Profil",
      caption: "Praktiskt",
      value: "Återanvändbar, fria handflator",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3SmtZpX",
    ratingSummary: "Amazon visar 4,7 av 5 från 21 143 omdömen.",
    highlights: [
      "Köpare tycker den ger en jämnare applicering utan ränder.",
      "Den mjuka ytan upplevs fördela produkten smidigt över kroppen.",
      "Uppskattas för att handflatorna hålls fria från färg.",
    ],
    cautions: [
      "Skölj vanten direkt efter användning så håller den längre.",
      "Lägg produkten i tunna lager för jämnast resultat på knän och armbågar.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const treeHutScrubProduct: Product = {
  slug: "tree-hut-kroppsskrubb",
  title: "Tree Hut Vanilla Shea Sugar Scrub (510 g)",
  category: "skonhet",
  asin: "B0BX2TZZWG",
  brand: "Tree Hut",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Sockerskrubb",
    "Sheasmör",
    "Mjuk hud",
  ],
  image: "/products/tree-hut-scrub/tree-hut-thumbnail.webp",
  imageAlt: "Tree Hut Vanilla Shea Sugar Scrub, 510 g",
  images: [
    {
      src: "/products/tree-hut-scrub/tree-hut-thumbnail.webp",
      alt: "Tree Hut Vanilla Shea Sugar Scrub, 510 g",
      label: "Sockerskrubb",
    },
    {
      src: "/products/tree-hut-scrub/tree-hut-1.webp",
      alt: "Tree Hut sockerskrubb med sheasmör som exfolierar kroppen",
      label: "Sheasmör",
    },
    {
      src: "/products/tree-hut-scrub/tree-hut-2.webp",
      alt: "Tree Hut kroppsskrubb textur och konsistens",
      label: "Textur",
    },
    {
      src: "/products/tree-hut-scrub/tree-hut-3.webp",
      alt: "Detaljbild av Tree Hut Vanilla Shea Sugar Scrub",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4baRZCE",
  pageHref: "/skonhet/kroppsskrubb",
  summary: "En sockerskrubb med sheasmör som exfolierar och mjukgör kroppen. Tar bort torr, sträv hud och lämnar huden len och slät – perfekt steg innan brun-utan-sol för ett jämnare resultat.",
  evaluation: {
    headline: "Sockerskrubb för len och slät kropp",
    intro: "Elin går igenom Tree Hut Vanilla Shea Sugar Scrub: en sockerskrubb med sheasmör som exfolierar bort torr, sträv hud och mjukgör kroppen. Sockerkornen putsar mjukt medan sheasmöret återfuktar, vilket gör den till ett populärt steg innan brun-utan-sol för ett jämnare resultat.",
    verdict: "Mysig sockerskrubb som gör kroppen len och mjuk, fin innan brun-utan-sol.",
    checks: [],
  },
  specSectionEyebrow: "Sol & glow",
  specSectionTitle: "Tree Hut Vanilla Shea Sugar Scrub",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Sockerskrubb, 510 g",
    },
    {
      label: "Innehåll",
      caption: "Aktivt",
      value: "Socker + sheasmör",
    },
    {
      label: "Profil",
      caption: "Kroppsvård",
      value: "Exfolierar och mjukgör",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4baRZCE",
    ratingSummary: "Amazon visar 4,7 av 5 från 6379 omdömen.",
    highlights: [
      "Köpare tycker huden känns len och slät direkt efter användning.",
      "Många lyfter den goda vaniljdoften och den mjukgörande känslan.",
      "Uppskattas som steg innan brun-utan-sol för ett jämnare resultat.",
    ],
    cautions: [
      "Sockerkornen kan kännas grova – massera mjukt och undvik nyrakad eller skadad hud.",
      "Den oljiga konsistensen kan göra duschgolvet halt, skölj noga efteråt.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const philipsLadyShaverProduct: Product = {
  slug: "philips-rakapparat-dam",
  title: "Philips Lady Shaver Series 8000 (våt/torr)",
  category: "skonhet",
  asin: "B0FJFS513J",
  brand: "Philips",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Våt/torr",
    "Slät hud",
    "Smidig hemma",
  ],
  image: "/products/philips-lady-shaver/philips-shaver-thumbnail.webp",
  imageAlt: "Philips Lady Shaver Series 8000, våt/torr rakapparat",
  images: [
    {
      src: "/products/philips-lady-shaver/philips-shaver-thumbnail.webp",
      alt: "Philips Lady Shaver Series 8000, våt/torr rakapparat",
      label: "Lady Shaver",
    },
    {
      src: "/products/philips-lady-shaver/philips-shaver-1.webp",
      alt: "Philips Lady Shaver för slät hud på ben och kropp",
      label: "Våt/torr",
    },
    {
      src: "/products/philips-lady-shaver/philips-shaver-2.webp",
      alt: "Philips Lady Shaver rakhuvud och detaljer",
      label: "Rakhuvud",
    },
    {
      src: "/products/philips-lady-shaver/philips-shaver-3.webp",
      alt: "Detaljbild av Philips Lady Shaver Series 8000",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4grVQz1",
  pageHref: "/skonhet/rakapparat-dam",
  summary: "En våt/torr rakapparat för slät hud på ben och kropp. Smidig att använda hemma både i och utanför duschen, för en snabb och skonsam rakning utan krångel.",
  evaluation: {
    headline: "Våt/torr rakapparat för slät hud",
    intro: "Elin går igenom Philips Lady Shaver Series 8000: en våt/torr rakapparat för slät hud på ben och kropp. Den fungerar både torrt och i duschen med raklödder, vilket gör hårborttagning hemma snabb och smidig utan att du behöver krångla med rakhyvel och blad.",
    verdict: "Smidig våt/torr rakapparat för slät hud hemma, både i och utanför duschen.",
    checks: [],
  },
  specSectionEyebrow: "Hårborttagning",
  specSectionTitle: "Philips Lady Shaver Series 8000",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Rakapparat, våt/torr",
    },
    {
      label: "Användning",
      caption: "Område",
      value: "Ben och kropp",
    },
    {
      label: "Profil",
      caption: "Hårborttagning",
      value: "Smidig hemma, sladdlös",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4grVQz1",
    ratingSummary: "Amazon visar 4,4 av 5 från 479 omdömen.",
    highlights: [
      "Köpare tycker den ger slät hud snabbt och skonsamt.",
      "Många uppskattar att den kan användas både torrt och i duschen.",
      "Smidig och enkel att hantera hemma utan krångel.",
    ],
    cautions: [
      "En rakapparat ger inte lika långvarigt resultat som vaxning eller epilering.",
      "Rakhuvudet behöver rengöras och bytas med tiden för bästa resultat.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const braunIplPro5Product: Product = {
  slug: "braun-ipl-pro5",
  title: "Braun Silk-expert Pro 5 IPL (PL5267)",
  category: "skonhet",
  asin: "B09QQR17MZ",
  brand: "Braun",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "IPL hemma",
    "Mindre hårväxt",
    "Skonsam",
  ],
  image: "/products/braun-ipl-pro5/braun-ipl-thumbnail.webp",
  imageAlt: "Braun Silk-expert Pro 5 IPL, PL5267",
  images: [
    {
      src: "/products/braun-ipl-pro5/braun-ipl-thumbnail.webp",
      alt: "Braun Silk-expert Pro 5 IPL, PL5267",
      label: "Silk-expert Pro 5",
    },
    {
      src: "/products/braun-ipl-pro5/braun-ipl-1.webp",
      alt: "Braun Silk-expert Pro 5 IPL för hårborttagning hemma",
      label: "IPL hemma",
    },
    {
      src: "/products/braun-ipl-pro5/braun-ipl-2.webp",
      alt: "Braun Silk-expert Pro 5 IPL behandlingshuvud och detaljer",
      label: "Behandlingshuvud",
    },
    {
      src: "/products/braun-ipl-pro5/braun-ipl-3.webp",
      alt: "Detaljbild av Braun Silk-expert Pro 5 IPL",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4ex2LWb",
  pageHref: "/skonhet/ipl-harborttagning",
  summary: "En IPL för hårborttagning hemma som ger synligt mindre hårväxt över tid. Smidig att använda på egen hand i lugn och ro, för en jämnare och slätare känsla på behandlade områden.",
  evaluation: {
    headline: "IPL för hårborttagning hemma",
    intro: "Elin går igenom Braun Silk-expert Pro 5 IPL: en IPL för hårborttagning hemma som med regelbunden användning ger synligt mindre hårväxt över tid. Du behandlar i lugn och ro på egen hand, och många uppskattar att slippa raka lika ofta. Det här handlar om utseende och en slätare känsla, inte om någon permanent eller medicinsk effekt.",
    verdict: "Smidig IPL för hårborttagning hemma som ger synligt mindre hårväxt över tid.",
    checks: [
      {
        label: "Problemet den löser",
        text: "Ger ett hemma-alternativ för dig som vill minska synlig hårväxt över tid utan att boka salongstid för varje behandling.",
      },
      {
        label: "Varför Elin fastnade",
        text: "Den är mer seriös än många enklare hårborttagningsprylar eftersom den kräver schema, hud-/hårmatchning och flera intensitetslägen.",
      },
      {
        label: "Det vi inte vill överdriva",
        text: "IPL är tålamod, inte snabbfix. Resultatet varierar och tekniken passar inte alla hår- och hudkombinationer.",
      },
    ],
  },
  specSectionEyebrow: "Hårborttagning",
  specSectionTitle: "Braun Silk-expert Pro 5 IPL",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "IPL för hemmabruk",
    },
    {
      label: "Användning",
      caption: "Område",
      value: "Ben, kropp och ansikte",
    },
    {
      label: "Profil",
      caption: "Hårborttagning",
      value: "Mindre hårväxt över tid",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4ex2LWb",
    ratingSummary: "Amazon visar 4,3 av 5 från 1586 omdömen.",
    highlights: [
      "Köpare upplever synligt mindre hårväxt efter regelbunden användning över tid.",
      "Många uppskattar att kunna behandla hemma i lugn och ro.",
      "Beskrivs som smidig och skonsam med flera intensitetslägen.",
    ],
    cautions: [
      "IPL kräver regelbundenhet under flera veckor innan du ser skillnad – resultatet varierar.",
      "Fungerar bäst på mörkare hår och ljusare hud; läs alltid bruksanvisningen först.",
    ],
  },
  ugcVideos: [],
  uses: [
    "Planerade behandlingar hemma enligt bruksanvisningens schema.",
    "På områden där hår- och hudtyp passar IPL-tekniken.",
    "När du vill göra behandlingen i lugn och ro utan salongsbokning.",
    "Som långsiktigare rutin än rakning, men med mer förarbete.",
  ],
  peopleLike: [
    "Köpare beskriver mindre synlig hårväxt efter regelbunden användning.",
    "Många gillar friheten att behandla hemma.",
    "Flera uppskattar att intensiteten gör att anpassa.",
  ],
  honestCheck: [
    "Läs bruksanvisningen noga innan första behandling.",
    "Fungerar bäst på mörkare hår och ljusare hud; alla kombinationer passar inte.",
    "Du behöver vara regelbunden i flera veckor innan du utvärderar känslan.",
  ],
  comments: [],
};

export const philipsFacialTrimmerProduct: Product = {
  slug: "philips-ansiktstrimmer",
  title: "Philips Facial Hair Remover 5000 Series (BRR454)",
  category: "skonhet",
  asin: "B0B9RQB3NQ",
  brand: "Philips",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Tar bort fjun",
    "Skonsam",
    "Snabb",
  ],
  image: "/products/philips-facial-trimmer/philips-trimmer-thumbnail.webp",
  imageAlt: "Philips Facial Hair Remover 5000 Series, BRR454",
  images: [
    {
      src: "/products/philips-facial-trimmer/philips-trimmer-thumbnail.webp",
      alt: "Philips Facial Hair Remover 5000 Series, BRR454",
      label: "Ansiktstrimmer",
    },
    {
      src: "/products/philips-facial-trimmer/philips-trimmer-1.webp",
      alt: "Philips ansiktstrimmer som tar bort fjun snabbt och enkelt",
      label: "Tar bort fjun",
    },
    {
      src: "/products/philips-facial-trimmer/philips-trimmer-2.webp",
      alt: "Philips Facial Hair Remover trimmerhuvud och detaljer",
      label: "Trimmerhuvud",
    },
    {
      src: "/products/philips-facial-trimmer/philips-trimmer-3.webp",
      alt: "Detaljbild av Philips Facial Hair Remover 5000 Series",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4g4BImc",
  pageHref: "/skonhet/ansiktstrimmer",
  summary: "En skonsam ansiktstrimmer som tar bort fjun snabbt och enkelt. Smidig att använda hemma för en slätare hud i ansiktet, utan krångel och med en len känsla efteråt.",
  evaluation: {
    headline: "Skonsam ansiktstrimmer för fjun",
    intro: "Elin går igenom Philips Facial Hair Remover 5000 Series: en skonsam ansiktstrimmer som tar bort fjun snabbt och enkelt. Den är smidig att använda hemma och ger en slätare hud i ansiktet, vilket många gillar inför makeup eller för en len känsla i vardagen.",
    verdict: "Smidig och skonsam ansiktstrimmer som tar bort fjun snabbt hemma.",
    checks: [],
  },
  specSectionEyebrow: "Hårborttagning",
  specSectionTitle: "Philips Facial Hair Remover 5000 Series",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Ansiktstrimmer",
    },
    {
      label: "Användning",
      caption: "Område",
      value: "Ansikte och fjun",
    },
    {
      label: "Profil",
      caption: "Hårborttagning",
      value: "Skonsam, snabb hemma",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4g4BImc",
    ratingSummary: "Amazon visar 4,3 av 5 från 997 omdömen.",
    highlights: [
      "Köpare tycker den tar bort fjun snabbt och enkelt.",
      "Många upplever den som skonsam mot huden i ansiktet.",
      "Smidig och lätt att hantera, fin inför makeup.",
    ],
    cautions: [
      "Trimmern tar fjun ytligt, så resultatet håller kortare än vaxning.",
      "Gå mjukt och varsamt över känsliga partier för bästa känsla.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const plantifiqueFootPeelProduct: Product = {
  slug: "plantifique-foot-peel",
  title: "Plantifique Peach Foot Exfoliation Mask (2-pack)",
  category: "skonhet",
  asin: "B07G75DJTC",
  brand: "Plantifique",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Foot peel",
    "Mjukgör",
    "Silkeslena fötter",
  ],
  image: "/products/plantifique-foot-peel/foot-peel-thumbnail.webp",
  imageAlt: "Plantifique Peach Foot Exfoliation Mask, 2-pack",
  images: [
    {
      src: "/products/plantifique-foot-peel/foot-peel-thumbnail.webp",
      alt: "Plantifique Peach Foot Exfoliation Mask, 2-pack",
      label: "Foot peel",
    },
    {
      src: "/products/plantifique-foot-peel/foot-peel-1.webp",
      alt: "Plantifique foot peel mask som mjukgör torr, sträv hud på fötterna",
      label: "Mjukgör",
    },
    {
      src: "/products/plantifique-foot-peel/foot-peel-2.webp",
      alt: "Plantifique foot peel sockor och användning",
      label: "Sockor",
    },
    {
      src: "/products/plantifique-foot-peel/foot-peel-3.webp",
      alt: "Detaljbild av Plantifique Peach Foot Exfoliation Mask",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4ex2ORR",
  pageHref: "/skonhet/foot-peel-mask",
  summary: "En exfolierande fotmask i sockform som mjukgör torr, sträv hud och ger silkeslena fötter. Kosmetisk fotvård som lyfter bort förhårdnader över ett par veckor för en len känsla.",
  evaluation: {
    headline: "Foot peel för silkeslena fötter",
    intro: "Elin går igenom Plantifique Peach Foot Exfoliation Mask: en exfolierande fotmask i sockform som mjukgör torr, sträv hud på fötterna. Efter användning lossnar gammal, sträv hud gradvis under ett par veckor och lämnar fötterna lena och mjuka. Det här är kosmetisk fotvård för utseende och känsla, inte någon behandling som läker.",
    verdict: "Effektiv foot peel som mjukgör sträv hud och ger lena, mjuka fötter.",
    checks: [],
  },
  specSectionEyebrow: "Fötter",
  specSectionTitle: "Plantifique Peach Foot Exfoliation Mask",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Foot peel-mask, 2-pack",
    },
    {
      label: "Användning",
      caption: "Område",
      value: "Fötter och hälar",
    },
    {
      label: "Profil",
      caption: "Fotvård",
      value: "Exfolierar och mjukgör",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4ex2ORR",
    ratingSummary: "Amazon visar 4,4 av 5 från 31300 omdömen.",
    highlights: [
      "Köpare upplever att torr, sträv hud lossnar och fötterna blir lena.",
      "Många lyfter att resultatet syns efter ett par veckor.",
      "Uppskattas som enkel kosmetisk fotvård med behaglig persikodoft.",
    ],
    cautions: [
      "Huden flagnar i flera dagar efteråt – planera in tiden och undvik att dra i den.",
      "Resultatet varierar mellan personer; använd inte på sårig eller irriterad hud.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const flexitolHeelBalmProduct: Product = {
  slug: "flexitol-halkram",
  title: "Flexitol Heel Balm 25% Urea (75 g)",
  category: "skonhet",
  asin: "B0046U95GU",
  brand: "Flexitol",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "25% urea",
    "Mjukgör torra hälar",
    "Rik fotkräm",
  ],
  image: "/products/flexitol-heel-balm/flexitol-thumbnail.webp",
  imageAlt: "Flexitol Heel Balm 25% Urea, 75 g",
  images: [
    {
      src: "/products/flexitol-heel-balm/flexitol-thumbnail.webp",
      alt: "Flexitol Heel Balm 25% Urea, 75 g",
      label: "Hälkräm",
    },
    {
      src: "/products/flexitol-heel-balm/flexitol-1.webp",
      alt: "Flexitol Heel Balm med 25% urea för torra hälar",
      label: "25% urea",
    },
    {
      src: "/products/flexitol-heel-balm/flexitol-2.webp",
      alt: "Flexitol Heel Balm rik textur för fötter",
      label: "Rik textur",
    },
  ],
  amazonUrl: "https://amzn.to/4uY8JEe",
  pageHref: "/skonhet/halkram",
  summary: "En rik hälkräm med 25% urea som mjukgör mycket torra, strävа hälar. Kosmetisk fotvård för hudens komfort – urea hjälper huden att hålla kvar fukt och kännas mjukare och slätare.",
  evaluation: {
    headline: "Rik hälkräm för torra, strävа hälar",
    intro: "Elin går igenom Flexitol Heel Balm: en rik fotkräm med 25% urea, en omtyckt kosmetisk ingrediens för att mjukgöra mycket torr och sträv hud på hälarna. Krämen är gjord för att smörja in och ge fötterna en mjukare, slätare känsla.",
    verdict: "Rik, prisvärd hälkräm som mjukgör torra och strävа hälar.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "Flexitol Heel Balm 25% Urea",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Hälkräm, 75 g",
    },
    {
      label: "Innehåll",
      caption: "Aktivt",
      value: "25% urea",
    },
    {
      label: "Profil",
      caption: "Fotvård",
      value: "Torra, strävа hälar",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4uY8JEe",
    ratingSummary: "Amazon visar 4,6 av 5 från 818 omdömen.",
    highlights: [
      "Köpare upplever att torra, strävа hälar känns mjukare med tiden.",
      "Rik kräm som de flesta tycker ger en slätare hälkänsla.",
      "Lite räcker långt enligt många återkommande köpare.",
    ],
    cautions: [
      "Krämen är rik och kan kännas lite fet direkt efter applicering.",
      "Resultatet kommer gradvis – jämn, daglig användning brukar fungera bäst.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const beurerManiPediProduct: Product = {
  slug: "beurer-nagelvard-set",
  title: "Beurer MP 62 manikyr- och pedikyrset",
  category: "skonhet",
  asin: "B00N9BOOZ4",
  brand: "Beurer",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Elektriskt set",
    "Flera sliphuvuden",
    "Mani & pedi",
  ],
  image: "/products/beurer-mani-pedi/beurer-mp62-thumbnail.webp",
  imageAlt: "Beurer MP 62 manikyr- och pedikyrset",
  images: [
    {
      src: "/products/beurer-mani-pedi/beurer-mp62-thumbnail.webp",
      alt: "Beurer MP 62 manikyr- och pedikyrset",
      label: "Mani & pedi",
    },
    {
      src: "/products/beurer-mani-pedi/beurer-mp62-1.webp",
      alt: "Beurer MP 62 med flera sliphuvuden för naglar",
      label: "Sliphuvuden",
    },
    {
      src: "/products/beurer-mani-pedi/beurer-mp62-2.webp",
      alt: "Beurer MP 62 elektriskt nagelvård-set i bruk",
      label: "Elektriskt",
    },
    {
      src: "/products/beurer-mani-pedi/beurer-mp62-3.webp",
      alt: "Detaljbild av Beurer MP 62 manikyr- och pedikyrset",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/3R9jqWN",
  pageHref: "/skonhet/nagelvard-set",
  summary: "Ett elektriskt mani- och pedikyrset med flera sliphuvuden för naglar och förhårdnader. Gör det enkelt att fila, forma och putsa naglar hemma – ett praktiskt allt-i-ett-set för nagelvård.",
  evaluation: {
    headline: "Elektriskt mani- och pedikyrset för hemmabruk",
    intro: "Elin går igenom Beurer MP 62: ett elektriskt nagelvård-set med flera utbytbara sliphuvuden för naglar och förhårdnader. Setet är gjort för att göra det enkelt att fila, forma och putsa naglar både på händer och fötter hemma.",
    verdict: "Praktiskt elektriskt mani- och pedikyrset för enkel nagelvård hemma.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "Beurer MP 62 manikyr- och pedikyrset",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Elektriskt mani-/pedikyrset",
    },
    {
      label: "Innehåll",
      caption: "Tillbehör",
      value: "Flera utbytbara sliphuvuden",
    },
    {
      label: "Profil",
      caption: "Nagelvård",
      value: "Naglar och förhårdnader",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3R9jqWN",
    ratingSummary: "Amazon visar 4,5 av 5 från 16304 omdömen.",
    highlights: [
      "Köpare uppskattar att flera sliphuvuden täcker både naglar och förhårdnader.",
      "Många tycker det är enkelt att fila och forma naglar hemma.",
      "Smidigt format som de flesta tycker känns hanterbart att hålla i.",
    ],
    cautions: [
      "Det tar lite övning att hitta rätt sliphuvud och tryck i början.",
      "Sliphuvuden för förhårdnader bör användas varsamt och i korta pass.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const pressOnNaglarProduct: Product = {
  slug: "press-on-naglar",
  title: "Press-on naglar – Classic Black French",
  category: "skonhet",
  asin: "B0D4DVBDLQ",
  brand: "Ellie Vincy",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Återanvändbara",
    "Salongslook hemma",
    "Snabbt att sätta på",
  ],
  image: "/products/press-on-naglar/press-on-thumbnail.webp",
  imageAlt: "Press-on naglar Classic Black French",
  images: [
    {
      src: "/products/press-on-naglar/press-on-thumbnail.webp",
      alt: "Press-on naglar Classic Black French",
      label: "Press-on",
    },
    {
      src: "/products/press-on-naglar/press-on-1.webp",
      alt: "Press-on naglar i Classic Black French-design",
      label: "Black French",
    },
    {
      src: "/products/press-on-naglar/press-on-2.webp",
      alt: "Press-on naglar applicerade för salongslook hemma",
      label: "Salongslook",
    },
    {
      src: "/products/press-on-naglar/press-on-3.webp",
      alt: "Detaljbild av press-on naglar Classic Black French",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4oRDXLR",
  pageHref: "/skonhet/press-on-naglar",
  summary: "Återanvändbara press-on naglar i en Classic Black French-design för en snabb salongslook hemma. Klickas på utan torktid – ett enkelt sätt att fixa naglarna inför en kväll eller ett tillfälle.",
  evaluation: {
    headline: "Press-on naglar för en snabb salongslook hemma",
    intro: "Elin går igenom de här press-on naglarna i Classic Black French: återanvändbara lösnaglar som klickas på utan torktid. De är gjorda för att ge en snabb, putsad look hemma inför en kväll eller ett tillfälle.",
    verdict: "Snabba, återanvändbara press-on naglar för en salongslook hemma.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "Press-on naglar Classic Black French",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Press-on naglar, set",
    },
    {
      label: "Design",
      caption: "Stil",
      value: "Classic Black French",
    },
    {
      label: "Profil",
      caption: "Naglar",
      value: "Återanvändbara, snabb applicering",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4oRDXLR",
    ratingSummary: "Amazon visar 4,6 av 5 från 95 omdömen – ännu ganska få, så betyget kan ändras när fler köpare lämnar omdöme.",
    highlights: [
      "Köpare uppskattar att naglarna går snabbt att sätta på hemma.",
      "Den klassiska black french-designen beskrivs som snygg och putsad.",
      "Att de är återanvändbara lyfts som ett plus av flera köpare.",
    ],
    cautions: [
      "Det är ännu ganska få omdömen, så helhetsbilden är osäkrare än för mer beprövade produkter.",
      "Håll- och passform beror på hur de appliceras och varierar mellan olika nagelformer.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const realTechniquesBrushesProduct: Product = {
  slug: "real-techniques-borstar",
  title: "Real Techniques Everyday Essentials – sminkborstar & svamp",
  category: "skonhet",
  asin: "B07FTXBNVL",
  brand: "Real Techniques",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Nybörjarset",
    "Mjuka borstar",
    "Med svamp",
  ],
  image: "/products/rt-brushes/rt-brushes-thumbnail.webp",
  imageAlt: "Real Techniques Everyday Essentials sminkborstar och svamp",
  images: [
    {
      src: "/products/rt-brushes/rt-brushes-thumbnail.webp",
      alt: "Real Techniques Everyday Essentials sminkborstar och svamp",
      label: "Borstset",
    },
    {
      src: "/products/rt-brushes/rt-brushes-1.webp",
      alt: "Real Techniques mjuka sminkborstar i set",
      label: "Mjuka borstar",
    },
    {
      src: "/products/rt-brushes/rt-brushes-2.webp",
      alt: "Real Techniques Everyday Essentials med svamp",
      label: "Med svamp",
    },
    {
      src: "/products/rt-brushes/rt-brushes-3.webp",
      alt: "Detaljbild av Real Techniques Everyday Essentials borstset",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4v42iQ1",
  pageHref: "/skonhet/sminkborstar",
  summary: "Ett prisvärt nybörjarset med mjuka sminkborstar och en svamp som täcker det mesta i en vardagsrutin. Borstarna är gjorda för att lägga foundation, puder och rouge enkelt och jämnt.",
  evaluation: {
    headline: "Prisvärt nybörjarset med mjuka sminkborstar",
    intro: "Elin går igenom Real Techniques Everyday Essentials: ett prisvärt set med mjuka sminkborstar och en svamp. Det är gjort för att täcka grunderna i en vardagsrutin – foundation, puder och rouge – och är ett bra startset för den som vill komma igång.",
    verdict: "Prisvärt och mjukt nybörjarset som täcker grunderna i sminkrutinen.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "Real Techniques Everyday Essentials",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Sminkborstar + svamp, set",
    },
    {
      label: "Innehåll",
      caption: "Tillbehör",
      value: "Flera borstar och en svamp",
    },
    {
      label: "Profil",
      caption: "Makeup",
      value: "Nybörjare, vardagsrutin",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4v42iQ1",
    ratingSummary: "Amazon visar 4,7 av 5 från 54446 omdömen.",
    highlights: [
      "Köpare beskriver borstarna som mjuka och sköna mot huden.",
      "Många tycker setet är prisvärt och täcker grunderna i en vardagsrutin.",
      "Uppskattas ofta som ett bra startset för nybörjare.",
    ],
    cautions: [
      "Som med alla borstar lossnar enstaka hårstrån i början för vissa köpare.",
      "Borstarna behöver rengöras regelbundet för att hålla sig mjuka och fräscha.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const realTechniquesSpongeProduct: Product = {
  slug: "real-techniques-svamp",
  title: "Real Techniques Miracle Complexion Sponge (2-pack)",
  category: "skonhet",
  asin: "B00QPNVC0I",
  brand: "Real Techniques",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Mjuk svamp",
    "Jämn finish",
    "2-pack",
  ],
  image: "/products/rt-sponge/rt-sponge-thumbnail.webp",
  imageAlt: "Real Techniques Miracle Complexion Sponge 2-pack",
  images: [
    {
      src: "/products/rt-sponge/rt-sponge-thumbnail.webp",
      alt: "Real Techniques Miracle Complexion Sponge 2-pack",
      label: "Sminksvamp",
    },
    {
      src: "/products/rt-sponge/rt-sponge-1.webp",
      alt: "Real Techniques Miracle Complexion Sponge mjuk svamp",
      label: "Mjuk svamp",
    },
    {
      src: "/products/rt-sponge/rt-sponge-2.webp",
      alt: "Real Techniques sminksvamp för jämn foundationfinish",
      label: "Jämn finish",
    },
  ],
  amazonUrl: "https://amzn.to/3QIh4hu",
  pageHref: "/skonhet/sminksvamp",
  summary: "En mjuk sminksvamp i 2-pack för en jämn, naturlig finish av foundation. Svampen är gjord för att blanda ut och jämna till makeupen så att den lägger sig fint mot huden.",
  evaluation: {
    headline: "Mjuk sminksvamp för en jämn foundationfinish",
    intro: "Elin går igenom Real Techniques Miracle Complexion Sponge: en mjuk sminksvamp i 2-pack som är gjord för att blanda ut foundation till en jämn, naturlig finish. Den fuktas innan användning och hjälper makeupen att lägga sig fint mot huden.",
    verdict: "Mjuk, prisvärd sminksvamp för en jämn och naturlig foundationfinish.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "Real Techniques Miracle Complexion Sponge",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Sminksvamp, 2-pack",
    },
    {
      label: "Användning",
      caption: "Makeup",
      value: "Foundation och concealer",
    },
    {
      label: "Profil",
      caption: "Finish",
      value: "Jämn, naturlig",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3QIh4hu",
    ratingSummary: "Amazon visar ett högt snittbetyg från många köpare.",
    highlights: [
      "Köpare beskriver svampen som mjuk och skön att jobba med.",
      "Många tycker den ger en jämn, naturlig finish av foundation.",
      "Att den kommer i 2-pack uppskattas som prisvärt av flera köpare.",
    ],
    cautions: [
      "Sminksvampar bör rengöras ofta och bytas ut med jämna mellanrum.",
      "Fukta svampen före användning – torr svamp ger en annan, mindre jämn finish.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const bowflexSelectTech552iProduct: Product = {
  slug: "bowflex-selecttech-552i",
  title: "BowFlex SelectTech 552i justerbara hantlar (par, 2–24 kg)",
  category: "traning",
  asin: "B0FHKB3QCK",
  brand: "BowFlex",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Ersätter flera vikter",
    "2–24 kg per hantel",
    "Sparar plats",
  ],
  image: "/products/bowflex-552i/bowflex-thumbnail.webp",
  imageAlt: "BowFlex SelectTech 552i justerbara hantlar, par 2–24 kg",
  images: [
    {
      src: "/products/bowflex-552i/bowflex-thumbnail.webp",
      alt: "BowFlex SelectTech 552i justerbara hantlar, par 2–24 kg",
      label: "BowFlex 552i",
    },
    {
      src: "/products/bowflex-552i/bowflex-1.webp",
      alt: "BowFlex 552i hantel med vridratt för att byta belastning",
      label: "Vrid för att byta",
    },
    {
      src: "/products/bowflex-552i/bowflex-2.webp",
      alt: "BowFlex 552i hantlar i bruk för hemmaträning",
      label: "Hemmaträning",
    },
    {
      src: "/products/bowflex-552i/bowflex-3.webp",
      alt: "Detaljbild av BowFlex SelectTech 552i justerbar hantel",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4xT3VCK",
  pageHref: "/traning/justerbara-hantlar",
  summary: "Ett par justerbara hantlar som ersätter flera fasta vikter. Du vrider på ratten för att byta belastning mellan 2 och 24 kg per hantel, vilket sparar plats hemma och gör det enkelt att ändra vikt mellan övningar.",
  evaluation: {
    headline: "Ett par hantlar som ersätter en hel hantelställning",
    intro: "Elin går igenom BowFlex SelectTech 552i: ett par justerbara hantlar där du vrider på en ratt för att ställa in vikten mellan 2 och 24 kg per hantel. Tanken är att ett enda par ska ersätta flera fasta hantlar och spara plats hemma.",
    verdict: "Platssmart lösning för hemmaträning där ett par hantlar täcker många vikter.",
    checks: [
      {
        label: "Problemet den löser",
        text: "Ersätter många fasta hantlar i ett hemmagym där golvyta och förvaring är begränsad.",
      },
      {
        label: "Varför Elin fastnade",
        text: "Vridratten gör viktbyten snabba mellan övningar, och spannet 2-24 kg per hantel täcker många vanliga styrkepass hemma.",
      },
      {
        label: "Det vi inte vill överdriva",
        text: "Betygsunderlaget är mycket tunt och justerbara hantlar är mer skrymmande än fasta. Mekaniken måste kännas rätt innan lyft.",
      },
    ],
  },
  specSectionEyebrow: "Träning",
  specSectionTitle: "BowFlex SelectTech 552i",
  specs: [
    {
      label: "Viktintervall",
      caption: "Per hantel",
      value: "2–24 kg, justerbart",
    },
    {
      label: "Byte av vikt",
      caption: "Mekanism",
      value: "Vridratt för snabbt byte",
    },
    {
      label: "Användning",
      caption: "Plats",
      value: "Ett par ersätter flera vikter hemma",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4xT3VCK",
    ratingSummary: "Amazon visar 5,0 av 5 från 9 omdömen.",
    highlights: [
      "Köpare uppskattar att ett par ersätter en hel rad fasta hantlar.",
      "Vridratten gör det enkelt och snabbt att byta belastning mellan set.",
      "Flera lyfter att de sparar mycket plats jämfört med vanliga hantlar.",
    ],
    cautions: [
      "Mycket få omdömen ännu (endast 9), så betyget bör tolkas försiktigt.",
      "Justerbara hantlar är mer skrymmande per hantel än enkla fasta vikter och kräver att låsmekanismen sitter rätt innan lyft.",
    ],
  },
  ugcVideos: [],
  uses: [
    "Helkroppspass hemma när du vill växla vikt mellan övningar.",
    "Superset där snabba viktbyten sparar tid.",
    "Små hemmagym där en hantelställning inte får plats.",
    "Progression från lätta till tyngre vikter utan att köpa nya par hela tiden.",
  ],
  peopleLike: [
    "Köpare uppskattar att ett par ersätter många fasta hantlar.",
    "Vridratten lyfts för snabba viktbyten.",
    "Platsbesparingen är en återkommande positiv signal.",
  ],
  honestCheck: [
    "Endast 9 omdömen i den registrerade Amazon-signalen, så var försiktig med betyget.",
    "Kontrollera alltid att låsmekanismen sitter innan du lyfter.",
    "De är större per hantel än fasta hantlar och kan kännas klumpigare i vissa övningar.",
  ],
  comments: [],
};

export const gorillaGymbollProduct: Product = {
  slug: "gorilla-gymboll",
  title: "Gorilla Sports gymboll / pilatesboll (anti-burst, med pump)",
  category: "traning",
  asin: "B01MSB4UKB",
  brand: "Gorilla Sports",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Anti-burst",
    "Pump ingår",
    "Core & balans",
  ],
  image: "/products/gorilla-gymboll/gymboll-thumbnail.webp",
  imageAlt: "Gorilla Sports gymboll och pilatesboll med pump",
  images: [
    {
      src: "/products/gorilla-gymboll/gymboll-thumbnail.webp",
      alt: "Gorilla Sports gymboll och pilatesboll med pump",
      label: "Gymboll",
    },
    {
      src: "/products/gorilla-gymboll/gymboll-1.webp",
      alt: "Gorilla Sports anti-burst träningsboll för core och balans",
      label: "Anti-burst",
    },
    {
      src: "/products/gorilla-gymboll/gymboll-2.webp",
      alt: "Gorilla Sports gymboll med medföljande pump",
      label: "Pump ingår",
    },
    {
      src: "/products/gorilla-gymboll/gymboll-3.webp",
      alt: "Detaljbild av Gorilla Sports pilatesboll",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/43Yfs6g",
  pageHref: "/traning/gymboll",
  summary: "En anti-burst träningsboll för core, balans och pilates. Pump ingår så att du enkelt kan blåsa upp den hemma. Bra för bålträning, stretch och som sittboll vid skrivbordet.",
  evaluation: {
    headline: "Mångsidig träningsboll för core och balans",
    intro: "Elin går igenom Gorilla Sports gymboll: en anti-burst träningsboll för core, balans och pilates med medföljande pump. Den passar för bålträning, stretch och balansövningar och kan även användas som sittboll.",
    verdict: "Prisvärd allround-boll för core, balans och pilates – pump ingår.",
    checks: [],
  },
  specSectionEyebrow: "Träning",
  specSectionTitle: "Gorilla Sports gymboll",
  specs: [
    {
      label: "Material",
      caption: "Konstruktion",
      value: "Anti-burst träningsboll",
    },
    {
      label: "Tillbehör",
      caption: "Ingår",
      value: "Pump för uppblåsning",
    },
    {
      label: "Användning",
      caption: "Träning",
      value: "Core, balans och pilates",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/43Yfs6g",
    ratingSummary: "Amazon visar 4,5 av 5 från 10 omdömen.",
    highlights: [
      "Köpare uppskattar att bollen är stadig och känns trygg att använda.",
      "Att pumpen ingår gör det enkelt att komma igång direkt.",
      "Flera använder den både för pilates och som sittboll hemma.",
    ],
    cautions: [
      "Få omdömen ännu (endast 10), så betyget bör tolkas försiktigt.",
      "Välj rätt storlek efter din längd och pumpa till lagom fasthet för bäst stöd.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const gorillaBalansplattaProduct: Product = {
  slug: "gorilla-balansplatta",
  title: "Gorilla Sports balansbräda i trä (Ø40 cm)",
  category: "traning",
  asin: "B0DBV72564",
  brand: "Gorilla Sports",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Trä, Ø40 cm",
    "Balans & core",
    "Fotledsträning",
  ],
  image: "/products/gorilla-balansplatta/balans-thumbnail.webp",
  imageAlt: "Gorilla Sports balansbräda i trä, Ø40 cm",
  images: [
    {
      src: "/products/gorilla-balansplatta/balans-thumbnail.webp",
      alt: "Gorilla Sports balansbräda i trä, Ø40 cm",
      label: "Balansbräda",
    },
    {
      src: "/products/gorilla-balansplatta/balans-1.webp",
      alt: "Gorilla Sports balansbräda i trä för balans- och coreträning",
      label: "Balans & core",
    },
    {
      src: "/products/gorilla-balansplatta/balans-2.webp",
      alt: "Gorilla Sports balansbräda använd för fotledsträning",
      label: "Fotledsträning",
    },
    {
      src: "/products/gorilla-balansplatta/balans-3.webp",
      alt: "Detaljbild av Gorilla Sports balansbräda i trä",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/3SOp9BM",
  pageHref: "/traning/balansplatta",
  summary: "En balansbräda i trä med diametern 40 cm för balans-, core- och fotledsträning. Du står på brädan och utmanar balansen, vilket aktiverar bålen och de små stabiliserande musklerna runt fotleden.",
  evaluation: {
    headline: "Enkel balansbräda för balans, core och fotled",
    intro: "Elin går igenom Gorilla Sports balansbräda i trä (Ø40 cm): ett enkelt redskap för balans-, core- och fotledsträning. Du står på brädan och utmanar balansen, vilket aktiverar bålen och de stabiliserande musklerna runt fotleden.",
    verdict: "Enkel träbalansbräda för balans, core och fotledsträning hemma.",
    checks: [],
  },
  specSectionEyebrow: "Träning",
  specSectionTitle: "Gorilla Sports balansbräda",
  specs: [
    {
      label: "Material",
      caption: "Konstruktion",
      value: "Balansbräda i trä",
    },
    {
      label: "Diameter",
      caption: "Storlek",
      value: "Ø40 cm",
    },
    {
      label: "Användning",
      caption: "Träning",
      value: "Balans, core och fotled",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3SOp9BM",
    ratingSummary: "Amazon visar 4,2 av 5 från 15 omdömen.",
    highlights: [
      "Köpare tycker att brädan känns stabil och gediget gjord i trä.",
      "Bra storlek för balans- och coreövningar hemma.",
      "Flera använder den i rehab för att träna upp fotleden.",
    ],
    cautions: [
      "Få omdömen ännu (endast 15), så betyget bör tolkas försiktigt.",
      "Ett underlag som rör sig kräver att du börjar försiktigt och gärna har stöd nära till hands i början.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const amonaxAbWheelProduct: Product = {
  slug: "amonax-maghjul",
  title: "Amonax maghjul / ab wheel med knämatta",
  category: "traning",
  asin: "B098B22J3W",
  brand: "Amonax",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Core & bål",
    "Knämatta ingår",
    "Stabilt grepp",
  ],
  image: "/products/amonax-maghjul/maghjul-thumbnail.webp",
  imageAlt: "Amonax maghjul / ab wheel med knämatta",
  images: [
    {
      src: "/products/amonax-maghjul/maghjul-thumbnail.webp",
      alt: "Amonax maghjul / ab wheel med knämatta",
      label: "Maghjul",
    },
    {
      src: "/products/amonax-maghjul/maghjul-1.webp",
      alt: "Amonax ab wheel för core- och bålträning",
      label: "Core & bål",
    },
    {
      src: "/products/amonax-maghjul/maghjul-2.webp",
      alt: "Amonax maghjul med medföljande knämatta",
      label: "Knämatta ingår",
    },
    {
      src: "/products/amonax-maghjul/maghjul-3.webp",
      alt: "Detaljbild av Amonax maghjul med stabilt grepp",
      label: "Stabilt grepp",
    },
  ],
  amazonUrl: "https://amzn.to/4uVYWP1",
  pageHref: "/traning/maghjul",
  summary: "Ett maghjul (ab wheel) för core- och bålträning. Du rullar hjulet framåt och tillbaka för att utmana magmusklerna och bålen. Knämatta ingår och greppen är gjorda för att kännas stabila under övningen.",
  evaluation: {
    headline: "Klassiskt maghjul för core och bål",
    intro: "Elin går igenom Amonax maghjul: ett ab wheel för core- och bålträning där du rullar hjulet framåt och tillbaka för att utmana magmusklerna. Knämatta ingår och greppen är gjorda för att kännas stabila under övningen.",
    verdict: "Prisvärt maghjul för core och bål med knämatta på köpet.",
    checks: [],
  },
  specSectionEyebrow: "Träning",
  specSectionTitle: "Amonax maghjul",
  specs: [
    {
      label: "Typ",
      caption: "Redskap",
      value: "Maghjul / ab wheel",
    },
    {
      label: "Tillbehör",
      caption: "Ingår",
      value: "Knämatta",
    },
    {
      label: "Användning",
      caption: "Träning",
      value: "Core och bål",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4uVYWP1",
    ratingSummary: "Amazon visar 4,4 av 5 från 2 175 omdömen.",
    highlights: [
      "Många köpare tycker att hjulet känns stadigt och greppen sitter bra.",
      "Uppskattat att knämattan ingår så att man kan börja direkt.",
      "Populärt val för core- och bålträning hemma till låg kostnad.",
    ],
    cautions: [
      "Maghjul är krävande – börja med korta rörelser och håll bålen spänd.",
      "Rulla på ett halkfritt underlag och undvik att svanka i ryggen under övningen.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const ironGymPullUpProduct: Product = {
  slug: "iron-gym-pull-up-bar",
  title: "Iron Gym chins-/pull-up-stång för dörr",
  category: "traning",
  asin: "B01DZVV9CS",
  brand: "Iron Gym",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Monteras i dörrkarm",
    "Utan borrning",
    "Dragövningar",
  ],
  image: "/products/iron-gym-pullup/pullup-thumbnail.webp",
  imageAlt: "Iron Gym chins- och pull-up-stång för dörr",
  images: [
    {
      src: "/products/iron-gym-pullup/pullup-thumbnail.webp",
      alt: "Iron Gym chins- och pull-up-stång för dörr",
      label: "Pull-up-stång",
    },
    {
      src: "/products/iron-gym-pullup/pullup-1.webp",
      alt: "Iron Gym chinsstång monterad i dörrkarm utan borrning",
      label: "Utan borrning",
    },
    {
      src: "/products/iron-gym-pullup/pullup-2.webp",
      alt: "Iron Gym pull-up-stång använd för dragövningar",
      label: "Dragövningar",
    },
    {
      src: "/products/iron-gym-pullup/pullup-3.webp",
      alt: "Detaljbild av Iron Gym chinsstång för dörr",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4wbYPjo",
  pageHref: "/traning/pull-up-bar",
  summary: "En chins-/pull-up-stång som monteras i dörrkarmen utan borrning, för dragövningar som pull-ups och chins. Praktisk för den som vill träna rygg och armar hemma utan fast montering. Obs: mycket få omdömen på Amazon ännu.",
  evaluation: {
    headline: "Chinsstång för dörren – utan borrning",
    intro: "Elin går igenom Iron Gym chins-/pull-up-stång: en stång som monteras i dörrkarmen utan borrning, för dragövningar som pull-ups och chins. Den passar den som vill träna rygg och armar hemma utan fast montering. Notera att underlaget av omdömen på Amazon är mycket tunt.",
    verdict: "Praktisk dörrstång för dragövningar hemma – men nästan inga omdömen ännu.",
    checks: [
      {
        label: "Problemet den löser",
        text: "Gör dragövningar möjliga hemma utan att borra fast en stång permanent i väggen.",
      },
      {
        label: "Varför Elin fastnade",
        text: "Idén är stark för hemmaträning: pull-ups och chins på liten yta. Men datan är för tunn för att kalla den tryggt beprövad.",
      },
      {
        label: "Det vi inte vill överdriva",
        text: "Ett enda omdöme räcker inte som köparsignal. Dörrkarmen och monteringen är viktigare än produkttexten.",
      },
    ],
  },
  specSectionEyebrow: "Träning",
  specSectionTitle: "Iron Gym pull-up-stång",
  specs: [
    {
      label: "Montering",
      caption: "Placering",
      value: "Dörrkarm, utan borrning",
    },
    {
      label: "Övningar",
      caption: "Användning",
      value: "Pull-ups och chins",
    },
    {
      label: "Träning",
      caption: "Fokus",
      value: "Rygg och armar",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4wbYPjo",
    ratingSummary: "Amazon visar 4,0 av 5 från endast 1 omdöme, så betyget bygger på ett enda omdöme och säger nästan ingenting.",
    highlights: [
      "Tanken är att stången ska monteras i dörrkarmen utan borrning.",
      "Gjord för dragövningar som pull-ups och chins hemma.",
      "Praktisk för den som vill träna rygg och armar utan fast montering.",
    ],
    cautions: [
      "Det finns bara 1 omdöme på Amazon, så betyget är i praktiken oanvändbart som vägledning.",
      "Dörrmonterade stänger belastar dörrkarmen hårt – kontrollera att karmen är stadig och att stången sitter ordentligt innan du hänger med full tyngd.",
    ],
  },
  ugcVideos: [],
  uses: [
    "Pull-ups och chins i en stabil dörrkarm.",
    "Kortare rygg- och armpass hemma utan fast montering.",
    "Som test av dragträning innan du bygger ett större hemmagym.",
    "Endast där dörrkarmen passar och känns stadig.",
  ],
  peopleLike: [
    "Produktens idé är borrfri montering i dörrkarm.",
    "Den är gjord för pull-ups och chins hemma.",
    "Den kan vara praktisk för rygg- och armträning utan fast installation.",
  ],
  honestCheck: [
    "Den registrerade Amazon-signalen bygger på bara ett omdöme.",
    "Kontrollera dörrkarmens stabilitet noga innan belastning.",
    "Fel montering eller olämplig karm gör produkten riskabel att använda.",
  ],
  comments: [],
};

export const gorillaPushUpProduct: Product = {
  slug: "gorilla-push-up-handtag",
  title: "Gorilla Sports push up-handtag (skumgrepp)",
  category: "traning",
  asin: "B005KAROLI",
  brand: "Gorilla Sports",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Skonar handlederna",
    "Ökat rörelseomfång",
    "Mjuka skumgrepp",
  ],
  image: "/products/gorilla-pushup/pushup-h-thumbnail.webp",
  imageAlt: "Gorilla Sports push up-handtag med skumgrepp",
  images: [
    {
      src: "/products/gorilla-pushup/pushup-h-thumbnail.webp",
      alt: "Gorilla Sports push up-handtag med skumgrepp",
      label: "Push up-handtag",
    },
    {
      src: "/products/gorilla-pushup/pushup-h-1.webp",
      alt: "Gorilla Sports push up-handtag i neutralt grepp",
      label: "Neutralt grepp",
    },
    {
      src: "/products/gorilla-pushup/pushup-h-2.webp",
      alt: "Gorilla Sports push up-handtag halkfri bas",
      label: "Halkfri bas",
    },
    {
      src: "/products/gorilla-pushup/pushup-h-3.webp",
      alt: "Detaljbild av Gorilla Sports push up-handtag",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4vEiEQE",
  pageHref: "/traning/push-up-handtag",
  summary: "Ett par push up-handtag med mjuka skumgrepp som lyfter händerna från golvet. Det neutrala greppet skonar handlederna och ökar rörelseomfånget vid armhävningar.",
  evaluation: {
    headline: "Push up-handtag som skonar handlederna",
    intro: "Elin jämför Gorilla Sports push up-handtag: ett par handtag med skumgrepp som lyfter händerna från golvet. Det neutrala greppet gör att handlederna kan hållas rakt, vilket många upplever som skonsammare, och det djupare läget ger ett större rörelseomfång i bröst och axlar vid armhävningar.",
    verdict: "Enkla handtag som skonar handlederna och ger djupare armhävningar.",
    checks: [],
  },
  specSectionEyebrow: "Tillbehör",
  specSectionTitle: "Gorilla Sports push up-handtag",
  specs: [
    {
      label: "Grepp",
      caption: "Komfort",
      value: "Neutralt grepp med mjukt skum",
    },
    {
      label: "Användning",
      caption: "Övning",
      value: "Armhävningar med större rörelseomfång",
    },
    {
      label: "Bas",
      caption: "Stabilitet",
      value: "Bred bas för stadigt stöd",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4vEiEQE",
    ratingSummary: "Amazon visar 4,2 av 5 från 279 omdömen.",
    highlights: [
      "Köpare tycker att det neutrala greppet känns skönare för handlederna.",
      "Det större rörelseomfånget upplevs ge mer i bröst och axlar.",
      "Skumgreppen beskrivs som bekväma även vid fler repetitioner.",
    ],
    cautions: [
      "På hala golv kan handtagen glida – använd dem på matta eller stadigt underlag.",
      "Plast i konstruktionen gör att stabiliteten upplevs olika av tyngre användare.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const gorillaRingsProduct: Product = {
  slug: "gorilla-gymnastikringar",
  title: "Gorilla Sports gymnastikringar (2-pack med remmar)",
  category: "traning",
  asin: "B00EXL7P0U",
  brand: "Gorilla Sports",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Justerbara remmar",
    "Calisthenics",
    "Kroppsviktsträning",
  ],
  image: "/products/gorilla-rings/ringar-thumbnail.webp",
  imageAlt: "Gorilla Sports gymnastikringar i 2-pack med remmar",
  images: [
    {
      src: "/products/gorilla-rings/ringar-thumbnail.webp",
      alt: "Gorilla Sports gymnastikringar i 2-pack med remmar",
      label: "Gymnastikringar",
    },
    {
      src: "/products/gorilla-rings/ringar-1.webp",
      alt: "Gorilla Sports gymnastikringar med justerbara remmar",
      label: "Justerbara remmar",
    },
    {
      src: "/products/gorilla-rings/ringar-2.webp",
      alt: "Gorilla Sports gymnastikringar spänne för längdjustering",
      label: "Spänne",
    },
    {
      src: "/products/gorilla-rings/ringar-3.webp",
      alt: "Detaljbild av Gorilla Sports gymnastikringar",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/3Su6v25",
  pageHref: "/traning/gymnastikringar",
  summary: "Ett par gymnastikringar med justerbara remmar för calisthenics och kroppsviktsträning. Ringarna hängs upp och längden ställs in med spänne, så att du kan träna dips, rodd och pull-ups hemma eller ute.",
  evaluation: {
    headline: "Gymnastikringar för calisthenics",
    intro: "Elin jämför Gorilla Sports gymnastikringar: ett 2-pack med justerbara remmar för calisthenics och kroppsviktsträning. Ringarna kan hängas i en stång, ett räcke eller en gren, och längden ställs in med spänne. Det rörliga greppet utmanar bål och stabilitet på ett sätt som fasta stänger inte gör.",
    verdict: "Mångsidiga ringar för dips, rodd och pull-ups hemma eller ute.",
    checks: [],
  },
  specSectionEyebrow: "Tillbehör",
  specSectionTitle: "Gorilla Sports gymnastikringar",
  specs: [
    {
      label: "Innehåll",
      caption: "Förpackning",
      value: "2 ringar med remmar",
    },
    {
      label: "Remmar",
      caption: "Justering",
      value: "Längdjustering med spänne",
    },
    {
      label: "Användning",
      caption: "Träning",
      value: "Calisthenics och kroppsviktsträning",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3Su6v25",
    ratingSummary: "Amazon visar 4,3 av 5 från 54 omdömen.",
    highlights: [
      "Köpare uppskattar att remmarna är enkla att justera i längd.",
      "Ringarna beskrivs som mångsidiga för dips, rodd och pull-ups.",
      "Det rörliga greppet upplevs utmana bål och stabilitet mer.",
    ],
    cautions: [
      "Relativt få omdömen ännu, så underlaget att luta sig mot är begränsat.",
      "Du behöver en stadig upphängning – kontrollera infästningen innan du belastar.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const elvireMinibandProduct: Product = {
  slug: "elvire-miniband",
  title: "Elvire Sport miniband / booty band (3-pack)",
  category: "traning",
  asin: "B07NK18M4J",
  brand: "Elvire Sport",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "3 motstånd",
    "Halkfria",
    "Rumpa & ben",
  ],
  image: "/products/elvire-miniband/miniband-thumbnail.webp",
  imageAlt: "Elvire Sport miniband / booty band i 3-pack",
  images: [
    {
      src: "/products/elvire-miniband/miniband-thumbnail.webp",
      alt: "Elvire Sport miniband / booty band i 3-pack",
      label: "Miniband",
    },
    {
      src: "/products/elvire-miniband/miniband-1.webp",
      alt: "Elvire Sport miniband i tre olika motstånd",
      label: "Tre motstånd",
    },
    {
      src: "/products/elvire-miniband/miniband-2.webp",
      alt: "Elvire Sport miniband halkfri insida",
      label: "Halkfri insida",
    },
    {
      src: "/products/elvire-miniband/miniband-3.webp",
      alt: "Detaljbild av Elvire Sport miniband i tyg",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4anqRjJ",
  pageHref: "/traning/miniband",
  summary: "Tre miniband i tyg med olika motstånd för rumpa, ben och uppvärmning. Den halkfria insidan håller banden på plats vid utfall, sidosteg och höftlyft – hemma eller på gymmet.",
  evaluation: {
    headline: "Miniband i tyg för rumpa och ben",
    intro: "Elin jämför Elvire Sport miniband: ett 3-pack i tyg med tre olika motstånd för rumpa, ben och uppvärmning. Tygbanden upplevs ofta som skönare mot huden än latex, och den halkfria insidan håller dem på plats vid utfall, sidosteg och höftlyft.",
    verdict: "Sköna tygband i tre motstånd som håller sig på plats.",
    checks: [],
  },
  specSectionEyebrow: "Träningsband",
  specSectionTitle: "Elvire Sport miniband",
  specs: [
    {
      label: "Innehåll",
      caption: "Förpackning",
      value: "3 band i tyg",
    },
    {
      label: "Motstånd",
      caption: "Nivåer",
      value: "Tre olika motståndsgrader",
    },
    {
      label: "Grepp",
      caption: "Komfort",
      value: "Halkfri insida som håller på plats",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4anqRjJ",
    ratingSummary: "Amazon visar 4,7 av 5 från 10 300 omdömen.",
    highlights: [
      "Köpare tycker att tygbanden känns skönare mot huden än latex.",
      "Den halkfria insidan upplevs hålla banden på plats utan att rulla upp.",
      "De tre motstånden uppskattas för att kunna trappa upp över tid.",
    ],
    cautions: [
      "Tygband ger ett annat motstånd än latex och kan kännas styvare i början.",
      "Storleken kan upplevas olika beroende på lårens omfång – jämför måtten.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const ihuanGlovesProduct: Product = {
  slug: "ihuan-traningshandskar",
  title: "ihuan träningshandskar med handledsstöd",
  category: "traning",
  asin: "B07D2XMDJB",
  brand: "ihuan",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Handledsstöd",
    "Bättre grepp",
    "Ventilerade",
  ],
  image: "/products/ihuan-gloves/handskar-thumbnail.webp",
  imageAlt: "ihuan träningshandskar med handledsstöd",
  images: [
    {
      src: "/products/ihuan-gloves/handskar-thumbnail.webp",
      alt: "ihuan träningshandskar med handledsstöd",
      label: "Träningshandskar",
    },
    {
      src: "/products/ihuan-gloves/handskar-1.webp",
      alt: "ihuan träningshandskar med integrerat handledsstöd",
      label: "Handledsstöd",
    },
    {
      src: "/products/ihuan-gloves/handskar-2.webp",
      alt: "ihuan träningshandskar med ventilerad ovansida",
      label: "Ventilerade",
    },
    {
      src: "/products/ihuan-gloves/handskar-3.webp",
      alt: "Detaljbild av ihuan träningshandskar grepp",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4v02kIY",
  pageHref: "/traning/traningshandskar",
  summary: "Ventilerade gymhandskar med integrerat handledsstöd för bättre grepp och skydd. Stödet sluter runt handleden vid tyngre lyft och den luftiga ovansidan håller händerna svalare under passet.",
  evaluation: {
    headline: "Gymhandskar med handledsstöd",
    intro: "Elin jämför ihuan träningshandskar: ventilerade gymhandskar med integrerat handledsstöd. Handflatan ger ett fastare grepp och skyddar mot förhårdnader, medan den justerbara remmen sluter runt handleden vid tyngre lyft. Den luftiga ovansidan håller händerna svalare under passet.",
    verdict: "Ventilerade handskar med stöd för bättre grepp vid tyngre lyft.",
    checks: [],
  },
  specSectionEyebrow: "Tillbehör",
  specSectionTitle: "ihuan träningshandskar",
  specs: [
    {
      label: "Stöd",
      caption: "Handled",
      value: "Integrerat justerbart handledsstöd",
    },
    {
      label: "Material",
      caption: "Komfort",
      value: "Ventilerad ovansida som släpper ut värme",
    },
    {
      label: "Grepp",
      caption: "Handflata",
      value: "Greppvänlig yta som skyddar händerna",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4v02kIY",
    ratingSummary: "Amazon visar 4,5 av 5 från 33 595 omdömen.",
    highlights: [
      "Köpare upplever ett fastare grepp och mindre förhårdnader i händerna.",
      "Handledsstödet uppskattas vid tyngre lyft som press och rodd.",
      "Den ventilerade ovansidan beskrivs som svalare än täta handskar.",
    ],
    cautions: [
      "Storleken upplevs olika – jämför måtten innan du väljer modell.",
      "Handledsstödet är ett komfortstöd, inte en ersättning för bra teknik.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const asiproWristWrapsProduct: Product = {
  slug: "asipro-handledslindor",
  title: 'ASIPRO handledslindor / wrist wraps (18")',
  category: "traning",
  asin: "B09WJ5QZQ8",
  brand: "ASIPRO",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Stöd vid tunga lyft",
    "18 tum",
    "Kardborreknäppning",
  ],
  image: "/products/asipro-wraps/wraps-thumbnail.webp",
  imageAlt: "ASIPRO handledslindor / wrist wraps i 18 tum",
  images: [
    {
      src: "/products/asipro-wraps/wraps-thumbnail.webp",
      alt: "ASIPRO handledslindor / wrist wraps i 18 tum",
      label: "Handledslindor",
    },
    {
      src: "/products/asipro-wraps/wraps-1.webp",
      alt: "ASIPRO handledslindor med kardborreknäppning",
      label: "Kardborre",
    },
    {
      src: "/products/asipro-wraps/wraps-2.webp",
      alt: "ASIPRO handledslindor med tumögla",
      label: "Tumögla",
    },
    {
      src: "/products/asipro-wraps/wraps-3.webp",
      alt: "Detaljbild av ASIPRO handledslindor",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4eJaq2n",
  pageHref: "/traning/handledslindor",
  summary: "Stödjande handledslindor på 18 tum för tunga lyft som bänkpress och axelpress. Tumöglan och kardborreknäppningen gör att du snabbt kan spänna stödet för ett stadigare handledsläge.",
  evaluation: {
    headline: "Handledslindor för tunga lyft",
    intro: "Elin jämför ASIPRO handledslindor: ett par 18 tum långa wrist wraps för tunga lyft som bänkpress och axelpress. Lindorna spänns med kardborre och hålls på plats med en tumögla, vilket ger ett stadigare handledsläge när belastningen blir hög.",
    verdict: "Stadiga handledslindor som ger stöd vid tunga pressövningar.",
    checks: [],
  },
  specSectionEyebrow: "Tillbehör",
  specSectionTitle: "ASIPRO handledslindor",
  specs: [
    {
      label: "Längd",
      caption: "Mått",
      value: "18 tum per linda",
    },
    {
      label: "Fäste",
      caption: "Justering",
      value: "Kardborre och tumögla",
    },
    {
      label: "Användning",
      caption: "Övning",
      value: "Tunga lyft som bänk- och axelpress",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4eJaq2n",
    ratingSummary: "Amazon visar 4,5 av 5 från 1 116 omdömen.",
    highlights: [
      "Köpare upplever ett stadigare handledsläge vid tunga pressövningar.",
      "Kardborren beskrivs som stark och håller spänningen genom seten.",
      "Längden på 18 tum ger lagom mycket stöd för de flesta.",
    ],
    cautions: [
      "Hårt åtdragna lindor kan kännas obekväma – lossa mellan seten.",
      "Lindor är ett stöd vid tunga lyft, inte en ersättning för teknik.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const cpSportsBeltProduct: Product = {
  slug: "cpsports-lyftarbalte",
  title: "C.P. Sports lyftarbälte / träningsbälte (T9)",
  category: "traning",
  asin: "B005GP8I8A",
  brand: "C.P. Sports",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Stöd för bålen",
    "Marklyft & knäböj",
    "Justerbart spänne",
  ],
  image: "/products/cpsports-belt/balte-thumbnail.webp",
  imageAlt: "C.P. Sports lyftarbälte / träningsbälte (T9)",
  images: [
    {
      src: "/products/cpsports-belt/balte-thumbnail.webp",
      alt: "C.P. Sports lyftarbälte / träningsbälte (T9)",
      label: "Lyftarbälte",
    },
    {
      src: "/products/cpsports-belt/balte-1.webp",
      alt: "C.P. Sports lyftarbälte sett framifrån med spänne",
      label: "Stabilt spänne",
    },
    {
      src: "/products/cpsports-belt/balte-2.webp",
      alt: "C.P. Sports träningsbälte detalj på bredd och stöd",
      label: "Brett stöd",
    },
    {
      src: "/products/cpsports-belt/balte-3.webp",
      alt: "Detaljbild av C.P. Sports lyftarbälte",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4g97XRo",
  pageHref: "/traning/lyftarbalte",
  summary: "Ett stödjande lyftarbälte för marklyft och knäböj som hjälper dig spänna bålen och hålla en stabilare hållning under tunga lyft. Justerbart spänne för en stadig passform.",
  evaluation: {
    headline: "Lyftarbälte för stabil bål under tunga lyft",
    intro: "Elin går igenom C.P. Sports lyftarbälte (T9): ett träningsbälte som ger stöd kring bålen vid marklyft och knäböj. Tanken med ett bälte är att hjälpa dig spänna upp och hålla en stadig hållning under tunga set, med ett justerbart spänne för en bra passform.",
    verdict: "Stödjande lyftarbälte för dig som vill ha extra bålstabilitet i marklyft och knäböj.",
    checks: [],
  },
  specSectionEyebrow: "Tillbehör",
  specSectionTitle: "C.P. Sports lyftarbälte (T9)",
  specs: [
    {
      label: "Typ",
      caption: "Format",
      value: "Lyftarbälte / träningsbälte",
    },
    {
      label: "Användning",
      caption: "Övningar",
      value: "Marklyft, knäböj, tunga lyft",
    },
    {
      label: "Passform",
      caption: "Justering",
      value: "Justerbart spänne",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4g97XRo",
    ratingSummary: "Amazon visar 4,4 av 5 från 20 omdömen.",
    highlights: [
      "Köpare upplever bra stöd kring bålen vid marklyft och knäböj.",
      "Spännet beskrivs som stabilt och enkelt att justera.",
      "Bältet känns stadigt för tunga lyft enligt flera köpare.",
    ],
    cautions: [
      "Få omdömen ännu, så helhetsbilden är begränsad – läs gärna fler källor.",
      "Ett bälte ersätter inte teknik; bygg upp belastningen lugnt.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const bodymateYogablockProduct: Product = {
  slug: "bodymate-yogablock",
  title: "BODYMATE yogablock i kork (2-pack)",
  category: "traning",
  asin: "B08TMV463P",
  brand: "BODYMATE",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Naturkork",
    "2-pack",
    "Stöd & rätt höjd",
  ],
  image: "/products/bodymate-yogablock/yogablock-thumbnail.webp",
  imageAlt: "BODYMATE yogablock i kork (2-pack)",
  images: [
    {
      src: "/products/bodymate-yogablock/yogablock-thumbnail.webp",
      alt: "BODYMATE yogablock i kork (2-pack)",
      label: "Yogablock",
    },
    {
      src: "/products/bodymate-yogablock/yogablock-1.webp",
      alt: "BODYMATE yogablock i naturkork sett från sidan",
      label: "Naturkork",
    },
    {
      src: "/products/bodymate-yogablock/yogablock-2.webp",
      alt: "BODYMATE yogablock 2-pack staplade",
      label: "2-pack",
    },
    {
      src: "/products/bodymate-yogablock/yogablock-3.webp",
      alt: "Detaljbild av BODYMATE yogablock i kork",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/3SyND1R",
  pageHref: "/traning/yogablock",
  summary: "Stabila yogablock i kork som ger stöd och rätt höjd i positioner där du inte når ända ner. Levereras som 2-pack och hjälper dig hålla en bekväm, stadig form i yogan.",
  evaluation: {
    headline: "Yogablock i kork för stöd och rätt höjd",
    intro: "Elin går igenom BODYMATE yogablock i kork (2-pack): block som ger dig stöd och rätt höjd i positioner där du inte når ända ner i mattan. Kork känns stabilt och halksäkert, och 2-pack gör att du kan använda ett block under varje hand.",
    verdict: "Stabila korkblock som ger bra stöd och rätt höjd i yogan, som prisvärt 2-pack.",
    checks: [],
  },
  specSectionEyebrow: "Yoga",
  specSectionTitle: "BODYMATE yogablock i kork",
  specs: [
    {
      label: "Material",
      caption: "Yta",
      value: "Naturkork",
    },
    {
      label: "Antal",
      caption: "Förpackning",
      value: "2-pack",
    },
    {
      label: "Användning",
      caption: "Syfte",
      value: "Stöd och rätt höjd i positioner",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3SyND1R",
    ratingSummary: "Amazon visar 4,8 av 5 från 767 omdömen.",
    highlights: [
      "Köpare upplever att korken känns stabil och halksäker.",
      "Uppskattas för att ge bra stöd och rätt höjd i positioner.",
      "Många tycker att 2-pack är praktiskt och prisvärt.",
    ],
    cautions: [
      "Kork kan kännas hårdare än skumblock – en smaksak för vissa.",
      "Naturkork kan dofta lätt i början; vädra gärna innan användning.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const bodymateYogastrapProduct: Product = {
  slug: "bodymate-yogabalte",
  title: "BODYMATE yogabälte / yoga strap (bomull)",
  category: "traning",
  asin: "B09DL2RSY2",
  brand: "BODYMATE",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Bomull",
    "Längre i stretch",
    "Justerbart spänne",
  ],
  image: "/products/bodymate-yogastrap/yogastrap-thumbnail.webp",
  imageAlt: "BODYMATE yogabälte / yoga strap (bomull)",
  images: [
    {
      src: "/products/bodymate-yogastrap/yogastrap-thumbnail.webp",
      alt: "BODYMATE yogabälte / yoga strap (bomull)",
      label: "Yogabälte",
    },
    {
      src: "/products/bodymate-yogastrap/yogastrap-1.webp",
      alt: "BODYMATE yoga strap i bomull med spänne",
      label: "Bomull",
    },
    {
      src: "/products/bodymate-yogastrap/yogastrap-2.webp",
      alt: "BODYMATE yogabälte detalj på spänne och justering",
      label: "Justerbart",
    },
    {
      src: "/products/bodymate-yogastrap/yogastrap-3.webp",
      alt: "Detaljbild av BODYMATE yogabälte i bomull",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4bfBPYL",
  pageHref: "/traning/yogabalte",
  summary: "Ett yogabälte i bomull som hjälper dig nå längre i stretch och rörlighet. Med ett justerbart spänne kan du fånga upp avståndet i positioner där du inte når med händerna ännu.",
  evaluation: {
    headline: "Yogabälte för längre räckvidd i stretch",
    intro: "Elin går igenom BODYMATE yogabälte / yoga strap i bomull: ett enkelt hjälpmedel som hjälper dig nå längre i stretch och rörlighet. När du inte når foten eller händerna i en position kan bältet fånga upp avståndet, och spännet gör att du kan justera längden.",
    verdict: "Enkelt och stabilt yogabälte i bomull som hjälper dig nå längre i stretch.",
    checks: [],
  },
  specSectionEyebrow: "Yoga",
  specSectionTitle: "BODYMATE yogabälte / yoga strap",
  specs: [
    {
      label: "Material",
      caption: "Tyg",
      value: "Bomull",
    },
    {
      label: "Justering",
      caption: "Spänne",
      value: "Justerbart spänne",
    },
    {
      label: "Användning",
      caption: "Syfte",
      value: "Stretch och rörlighet",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4bfBPYL",
    ratingSummary: "Amazon visar 4,7 av 5 från 321 omdömen.",
    highlights: [
      "Köpare upplever att de når längre i stretch med bältet.",
      "Bomullsbandet beskrivs som stadigt och behagligt i händerna.",
      "Spännet håller längden och är enkelt att justera enligt många.",
    ],
    cautions: [
      "Ett bälte ersätter inte uppvärmning; töj lugnt och utan att tvinga.",
      "Bomull kan tänjas något över tid – kontrollera att spännet sitter.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const g5PilatesringProduct: Product = {
  slug: "g5-pilatesring",
  title: "G5 HT Sport pilatesring (med handtag)",
  category: "traning",
  asin: "B0D7J1MS35",
  brand: "G5 HT Sport",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Dubbla handtag",
    "Inre lår & core",
    "Lätt motstånd",
  ],
  image: "/products/g5-pilatesring/pilatesring-thumbnail.webp",
  imageAlt: "G5 HT Sport pilatesring (med handtag)",
  images: [
    {
      src: "/products/g5-pilatesring/pilatesring-thumbnail.webp",
      alt: "G5 HT Sport pilatesring (med handtag)",
      label: "Pilatesring",
    },
    {
      src: "/products/g5-pilatesring/pilatesring-1.webp",
      alt: "G5 HT Sport pilatesring med dubbla handtag",
      label: "Dubbla handtag",
    },
    {
      src: "/products/g5-pilatesring/pilatesring-2.webp",
      alt: "G5 HT Sport pilatesring i användning för inre lår",
      label: "Inre lår",
    },
    {
      src: "/products/g5-pilatesring/pilatesring-3.webp",
      alt: "Detaljbild av G5 HT Sport pilatesring",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4eN97Qc",
  pageHref: "/traning/pilatesring",
  summary: "En pilatesring med dubbla handtag som ger ett lätt motstånd för inre lår, core och armar. Greppvänlig och smidig att ta med, bra för pilates- och kroppsviktspass hemma.",
  evaluation: {
    headline: "Pilatesring för inre lår, core och armar",
    intro: "Elin går igenom G5 HT Sport pilatesring med dubbla handtag: en ring som ger ett lätt motstånd när du klämmer ihop den, vilket aktiverar inre lår, core och armar. Handtagen gör den greppvänlig och den är smidig att ta med för pilates hemma.",
    verdict: "Greppvänlig pilatesring som ger lätt motstånd för inre lår, core och armar.",
    checks: [],
  },
  specSectionEyebrow: "Yoga",
  specSectionTitle: "G5 HT Sport pilatesring",
  specs: [
    {
      label: "Typ",
      caption: "Format",
      value: "Pilatesring med handtag",
    },
    {
      label: "Fokus",
      caption: "Områden",
      value: "Inre lår, core och armar",
    },
    {
      label: "Motstånd",
      caption: "Nivå",
      value: "Lätt motstånd vid kläm",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4eN97Qc",
    ratingSummary: "Amazon visar 4,5 av 5 från 300 omdömen.",
    highlights: [
      "Köpare upplever bra aktivering av inre lår och core.",
      "Dubbla handtag gör ringen greppvänlig och bekväm att hålla.",
      "Smidig storlek som många tycker är lätt att ta med och förvara.",
    ],
    cautions: [
      "Motståndet är lätt – tänk komplement, inte tung styrketräning.",
      "Klämkraften kan kännas hård mot greppet, ta det lugnt i början.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const reebokStepProduct: Product = {
  slug: "reebok-stepbrada",
  title: "Reebok Step justerbar stepbräda",
  category: "traning",
  asin: "B01KUX49Z8",
  brand: "Reebok",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Tre höjder",
    "Step & HIIT",
    "Halksäker yta",
  ],
  image: "/products/reebok-step/step-thumbnail.webp",
  imageAlt: "Reebok Step justerbar stepbräda",
  images: [
    {
      src: "/products/reebok-step/step-thumbnail.webp",
      alt: "Reebok Step justerbar stepbräda",
      label: "Stepbräda",
    },
    {
      src: "/products/reebok-step/step-1.webp",
      alt: "Reebok Step stepbräda med justerbara ben",
      label: "Justerbara ben",
    },
    {
      src: "/products/reebok-step/step-2.webp",
      alt: "Reebok Step stepbräda inställd på olika höjder",
      label: "Tre höjder",
    },
    {
      src: "/products/reebok-step/step-3.webp",
      alt: "Detaljbild av Reebok Step stepbräda och halksäker yta",
      label: "Halksäker yta",
    },
  ],
  amazonUrl: "https://amzn.to/4wcZ1ij",
  pageHref: "/traning/stepbrada",
  summary: "En justerbar stepbräda i tre höjder för step-, kondition- och HIIT-pass. Halksäker yta och stabila ben gör den användbar för både uppstig och varierad träning hemma.",
  evaluation: {
    headline: "Justerbar stepbräda för step, kondition och HIIT",
    intro: "Elin går igenom Reebok Step: en justerbar stepbräda i tre höjder som passar för step-, kondition- och HIIT-pass. Med flera höjdlägen kan du anpassa svårighetsgraden, och den halksäkra ytan gör uppstig och steg mer stabila hemma.",
    verdict: "Stabil och justerbar stepbräda i tre höjder för varierade step- och konditionspass.",
    checks: [],
  },
  specSectionEyebrow: "Kondition",
  specSectionTitle: "Reebok Step justerbar stepbräda",
  specs: [
    {
      label: "Höjder",
      caption: "Justering",
      value: "Tre höjdlägen",
    },
    {
      label: "Yta",
      caption: "Grepp",
      value: "Halksäker ovansida",
    },
    {
      label: "Användning",
      caption: "Pass",
      value: "Step, kondition och HIIT",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4wcZ1ij",
    ratingSummary: "Amazon visar 4,8 av 5 från 3774 omdömen.",
    highlights: [
      "Köpare upplever att brädan känns stabil att stiga upp på.",
      "Tre höjder uppskattas för att kunna variera passen.",
      "Halksäkra ytan ger trygg känsla under step och HIIT enligt många.",
    ],
    cautions: [
      "Höjdbenen ska klickas fast ordentligt innan du börjar.",
      "Ta gärna step i lugnt tempo i början för att vänja in tekniken.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const gorillaSlidersProduct: Product = {
  slug: "gorilla-core-slider",
  title: "Gorilla Sports core sliders (2-pack)",
  category: "traning",
  asin: "B08THT9W5L",
  brand: "Gorilla Sports",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Dubbelsidiga",
    "2-pack",
    "Core & mage",
  ],
  image: "/products/gorilla-sliders/sliders-thumbnail.webp",
  imageAlt: "Gorilla Sports core sliders, 2-pack",
  images: [
    {
      src: "/products/gorilla-sliders/sliders-thumbnail.webp",
      alt: "Gorilla Sports core sliders, 2-pack",
      label: "Core sliders",
    },
    {
      src: "/products/gorilla-sliders/sliders-1.webp",
      alt: "Gorilla Sports dubbelsidiga sliders för golv och matta",
      label: "Dubbelsidiga",
    },
    {
      src: "/products/gorilla-sliders/sliders-2.webp",
      alt: "Gorilla Sports sliders i bruk för mage- och rumpövningar",
      label: "Core & rumpa",
    },
    {
      src: "/products/gorilla-sliders/sliders-3.webp",
      alt: "Detaljbild av Gorilla Sports core sliders",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4v5OuVn",
  pageHref: "/traning/core-slider",
  summary: "Ett par dubbelsidiga sliders för core-, mage- och rumpövningar på golv. Den ena sidan glider på hårt golv och den andra på matta, så att du kan träna stabilt hemma med liten utrustning.",
  evaluation: {
    headline: "Smidiga sliders för coreträning hemma",
    intro: "Elin går igenom Gorilla Sports core sliders: ett 2-pack dubbelsidiga sliders som glider mjukt på både hårt golv och matta. De passar mountain climbers, utfall och magövningar, och tar nästan ingen plats i hemmagymmet.",
    verdict: "Enkla, prisvärda sliders för core- och stabilitetsträning hemma.",
    checks: [],
  },
  specSectionEyebrow: "Träning",
  specSectionTitle: "Gorilla Sports core sliders",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Sliders, 2-pack",
    },
    {
      label: "Underlag",
      caption: "Dubbelsidiga",
      value: "Hårt golv och matta",
    },
    {
      label: "Användning",
      caption: "Fokus",
      value: "Core, mage och rumpa",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4v5OuVn",
    ratingSummary: "Amazon visar 4,5 av 5 från 11 omdömen.",
    highlights: [
      "Köpare uppskattar att de glider mjukt på flera underlag.",
      "Smidig storlek som tar liten plats hemma.",
      "Bra komplement för core- och magövningar.",
    ],
    cautions: [
      "Få omdömen ännu, så helhetsbilden är ännu begränsad.",
      "På hala golv kan de glida mer än väntat – håll spänning i kroppen.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const dhFitlifeTrampolineProduct: Product = {
  slug: "dh-fitlife-studsmatta",
  title: "DH FitLife fitnesstudsmatta med handtag (Ø102 cm)",
  category: "traning",
  asin: "B0DXQG2CJL",
  brand: "DH FitLife",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Med handtag",
    "Ø102 cm",
    "Skonsam kondition",
  ],
  image: "/products/dh-trampoline/trampoline-thumbnail.webp",
  imageAlt: "DH FitLife fitnesstudsmatta med handtag, Ø102 cm",
  images: [
    {
      src: "/products/dh-trampoline/trampoline-thumbnail.webp",
      alt: "DH FitLife fitnesstudsmatta med handtag, Ø102 cm",
      label: "Studsmatta",
    },
    {
      src: "/products/dh-trampoline/trampoline-1.webp",
      alt: "DH FitLife studsmatta med justerbart handtag",
      label: "Handtag",
    },
    {
      src: "/products/dh-trampoline/trampoline-2.webp",
      alt: "DH FitLife studsmatta i bruk inomhus",
      label: "Inomhus",
    },
    {
      src: "/products/dh-trampoline/trampoline-3.webp",
      alt: "Detaljbild av DH FitLife fitnesstudsmatta",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4oPNd3l",
  pageHref: "/traning/studsmatta",
  summary: "En fitnesstudsmatta med handtag för skonsam kondition inomhus. Den runda mattan på Ø102 cm ger fjädrande studsträning med stöd från ett handtag, så att du kan röra på dig hemma året runt.",
  evaluation: {
    headline: "Studsmatta med handtag för kondition inomhus",
    intro: "Elin går igenom DH FitLife fitnesstudsmatta: en rund matta på Ø102 cm med ett handtag som ger extra stöd när du studsar. Den passar dig som vill ha skonsam, fjädrande kondition hemma utan att vara beroende av väder eller gym.",
    verdict: "Smidig studsmatta för skonsam kondition inomhus, med handtag för extra stöd.",
    checks: [
      {
        label: "Problemet den löser",
        text: "Ger ett roligare konditionspass hemma när du vill röra på dig utan löpband eller stora maskiner.",
      },
      {
        label: "Varför Elin fastnade",
        text: "Handtaget gör studsträningen mer lättillgänglig, särskilt om du vill ha balansstöd medan du vänjer dig vid rörelsen.",
      },
      {
        label: "Det vi inte vill överdriva",
        text: "Inomhusstuds kräver utrymme, stabil montering och takhöjd. Den är inte lika diskret som ett miniband eller en matta.",
      },
    ],
  },
  specSectionEyebrow: "Träning",
  specSectionTitle: "DH FitLife fitnesstudsmatta",
  specs: [
    {
      label: "Storlek",
      caption: "Diameter",
      value: "Ø102 cm, rund",
    },
    {
      label: "Stöd",
      caption: "Tillbehör",
      value: "Handtag för balans",
    },
    {
      label: "Användning",
      caption: "Fokus",
      value: "Kondition inomhus",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4oPNd3l",
    ratingSummary: "Amazon visar 4,5 av 5 från 207 omdömen.",
    highlights: [
      "Köpare uppskattar den fjädrande, skonsamma känslan vid studs.",
      "Handtaget ger trygghet och balans under passet.",
      "Smidig storlek för träning inomhus hemma.",
    ],
    cautions: [
      "Kontrollera fritt takutrymme innan du studsar inomhus.",
      "Montering och åtdragning bör göras noga enligt instruktionerna.",
    ],
  },
  ugcVideos: [],
  uses: [
    "Korta konditionspass hemma när vädret eller tiden stoppar uteträning.",
    "Lugna intervaller med handtaget som balansstöd.",
    "Som variation från promenader och vanliga golvövningar.",
    "I rum med fritt tak- och golvutrymme.",
  ],
  peopleLike: [
    "Köpare uppskattar den fjädrande och skonsamma känslan.",
    "Handtaget beskrivs som tryggt för balans.",
    "Storleken ses som smidig för inomhusträning.",
  ],
  honestCheck: [
    "Kontrollera takhöjd och fri yta runt mattan innan användning.",
    "Montering och åtdragning behöver göras noggrant.",
    "Börja lugnt tills balans och studs känns stabilt.",
  ],
  comments: [],
};

export const gvolateeAgilityProduct: Product = {
  slug: "gvolatee-agility-stege",
  title: "Gvolatee agility-stege med koner (4,5 m)",
  category: "traning",
  asin: "B0BQ33JCYX",
  brand: "Gvolatee",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "4,5 m",
    "Med koner",
    "Snabbhet & fotarbete",
  ],
  image: "/products/gvolatee-agility/agility-thumbnail.webp",
  imageAlt: "Gvolatee agility-stege med koner, 4,5 m",
  images: [
    {
      src: "/products/gvolatee-agility/agility-thumbnail.webp",
      alt: "Gvolatee agility-stege med koner, 4,5 m",
      label: "Agility-stege",
    },
    {
      src: "/products/gvolatee-agility/agility-1.webp",
      alt: "Gvolatee koordinationsstege utlagd på marken",
      label: "4,5 meter",
    },
    {
      src: "/products/gvolatee-agility/agility-2.webp",
      alt: "Gvolatee agility-stege med medföljande koner",
      label: "Koner",
    },
    {
      src: "/products/gvolatee-agility/agility-3.webp",
      alt: "Detaljbild av Gvolatee agility-stege",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4akj7yT",
  pageHref: "/traning/agility-stege",
  summary: "En koordinationsstege på 4,5 m med koner för snabbhet, fotarbete och uppvärmning. Den rullas enkelt ut på gräs eller golv och passar fartfyllda övningar både inne och ute.",
  evaluation: {
    headline: "Koordinationsstege för snabbhet och fotarbete",
    intro: "Elin går igenom Gvolatee agility-stege: en 4,5 m lång stege med medföljande koner som passar snabbhets-, fotarbets- och uppvärmningsövningar. Den är lätt att rulla ut och packa ihop, och fungerar både inomhus och utomhus.",
    verdict: "Prisvärd koordinationsstege för snabbhet och fotarbete inne som ute.",
    checks: [],
  },
  specSectionEyebrow: "Träning",
  specSectionTitle: "Gvolatee agility-stege",
  specs: [
    {
      label: "Längd",
      caption: "Mått",
      value: "4,5 meter",
    },
    {
      label: "Tillbehör",
      caption: "Ingår",
      value: "Koner för markering",
    },
    {
      label: "Användning",
      caption: "Fokus",
      value: "Snabbhet och fotarbete",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4akj7yT",
    ratingSummary: "Amazon visar 4,5 av 5 från 1148 omdömen.",
    highlights: [
      "Köpare uppskattar att stegen är lätt att rulla ut och packa ihop.",
      "Konerna är ett uppskattat komplement för fartövningar.",
      "Fungerar bra både inomhus och utomhus.",
    ],
    cautions: [
      "Pinnarna kan flytta sig något under intensiva övningar.",
      "På hala golv kan stegen glida – fäst eller placera den stadigt.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const rehbandKneeProduct: Product = {
  slug: "rehband-knaskydd",
  title: "Rehband RX knäskydd 5 mm",
  category: "traning",
  asin: "B07PFK6N8H",
  brand: "Rehband",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "5 mm neopren",
    "Stöd & värme",
    "Tunga lyft",
  ],
  image: "/products/rehband-knee/knaskydd-thumbnail.webp",
  imageAlt: "Rehband RX knäskydd 5 mm",
  images: [
    {
      src: "/products/rehband-knee/knaskydd-thumbnail.webp",
      alt: "Rehband RX knäskydd 5 mm",
      label: "Knäskydd",
    },
    {
      src: "/products/rehband-knee/knaskydd-1.webp",
      alt: "Rehband RX knäskydd i 5 mm neopren",
      label: "Neopren",
    },
    {
      src: "/products/rehband-knee/knaskydd-2.webp",
      alt: "Rehband knäskydd i bruk vid tunga lyft",
      label: "Vid lyft",
    },
    {
      src: "/products/rehband-knee/knaskydd-3.webp",
      alt: "Detaljbild av Rehband RX knäskydd",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4ezgXOk",
  pageHref: "/traning/knaskydd",
  summary: "Ett knäskydd i 5 mm neopren som ger stöd och värme vid tunga lyft och löpning. Det ger en stadig, komprimerande känsla runt knät för komfort under passet – det är ett stöd för träningen, inte en medicinsk behandling.",
  evaluation: {
    headline: "Knäskydd i neopren för stöd och värme",
    intro: "Elin går igenom Rehband RX knäskydd 5 mm: ett neoprenskydd som ger en stadig, komprimerande känsla och värme runt knät vid tunga lyft och löpning. Det handlar om komfort och stöd under träningen – inte om att behandla eller läka skador.",
    verdict: "Stabilt neoprenknäskydd för stöd och värme vid tung träning.",
    checks: [
      {
        label: "Problemet den löser",
        text: "Ger knät en fastare och varmare känsla under pass där du vill ha mer stöd runt leden.",
      },
      {
        label: "Varför Elin fastnade",
        text: "5 mm neopren ger en tydlig kompressionskänsla som passar lyft och träning bättre än ett tunt, löst vardagsstöd.",
      },
      {
        label: "Det vi inte vill överdriva",
        text: "Det är ett träningsstöd för komfort och känsla, inte en behandling. Storlek och passform avgör om det blir bra.",
      },
    ],
  },
  specSectionEyebrow: "Träning",
  specSectionTitle: "Rehband RX knäskydd 5 mm",
  specs: [
    {
      label: "Material",
      caption: "Tjocklek",
      value: "Neopren, 5 mm",
    },
    {
      label: "Känsla",
      caption: "Funktion",
      value: "Stöd, värme och kompression",
    },
    {
      label: "Användning",
      caption: "Fokus",
      value: "Tunga lyft och löpning",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4ezgXOk",
    ratingSummary: "Amazon visar 4,4 av 5 från 87 omdömen.",
    highlights: [
      "Köpare uppskattar den stadiga, komprimerande känslan vid lyft.",
      "Neoprenet håller knät varmt under passet.",
      "Upplevs som hållbart i materialet.",
    ],
    cautions: [
      "Storleken är viktig – följ måtttabellen för rätt passform.",
      "5 mm ger en fastare känsla; vill du ha mjukare kompression kan tunnare passa bättre.",
    ],
  },
  ugcVideos: [],
  uses: [
    "Vid knäböj, utfall och annan styrketräning där du vill ha kompression.",
    "Under löppass där en varm och stadig känsla är viktig.",
    "Som stöd i gymväskan för pass där knäna belastas extra.",
    "När du har mätt benet och valt storlek enligt tabellen.",
  ],
  peopleLike: [
    "Köpare lyfter en stadig och komprimerande känsla.",
    "Neoprenet uppskattas för värme under passet.",
    "Materialet beskrivs som hållbart.",
  ],
  honestCheck: [
    "Följ måtttabellen; fel storlek blir snabbt obekväm.",
    "5 mm känns fastare än tunnare skydd och passar inte alla.",
    "Använd det som komfortstöd, inte som ersättning för bra teknik eller rådgivning vid besvär.",
  ],
  comments: [],
};

export const salomonActiveSkinProduct: Product = {
  slug: "salomon-loparvast",
  title: "Salomon Active Skin 4 löparväst (med flaskor)",
  category: "traning",
  asin: "B0C5LZPRB2",
  brand: "Salomon",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Tätt sittande",
    "Med vätskeflaskor",
    "Fickor för långrundor",
  ],
  image: "/products/salomon-loparvast/loparvast-thumbnail.webp",
  imageAlt: "Salomon Active Skin 4 löparväst med vätskeflaskor",
  images: [
    {
      src: "/products/salomon-loparvast/loparvast-thumbnail.webp",
      alt: "Salomon Active Skin 4 löparväst med vätskeflaskor",
      label: "Active Skin 4",
    },
    {
      src: "/products/salomon-loparvast/loparvast-1.webp",
      alt: "Salomon Active Skin löparväst med tätt sittande passform",
      label: "Tät passform",
    },
    {
      src: "/products/salomon-loparvast/loparvast-2.webp",
      alt: "Salomon Active Skin löparväst med flaskor och fickor fram",
      label: "Flaskor & fickor",
    },
    {
      src: "/products/salomon-loparvast/loparvast-3.webp",
      alt: "Detaljbild av Salomon Active Skin löparväst",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4gJrKqB",
  pageHref: "/traning/loparvast",
  summary: "En tätt sittande löparväst med medföljande vätskeflaskor och flera fickor, gjord för längre löprundor där du vill ha vätska och småsaker nära till hands utan att det studsar.",
  evaluation: {
    headline: "Löparväst med vätska nära till hands",
    intro: "Elin går igenom Salomon Active Skin 4: en tätt sittande löparväst med medföljande mjuka vätskeflaskor och fickor fram. Den är gjord för dig som springer längre rundor och vill ha vätska och små grejer lättåtkomliga, med en passform som sitter nära kroppen för att minska studs.",
    verdict: "Genomtänkt löparväst för längre rundor när du vill bära vätska smidigt.",
    checks: [],
  },
  specSectionEyebrow: "Kondition",
  specSectionTitle: "Salomon Active Skin 4 löparväst",
  specs: [
    {
      label: "Volym",
      caption: "Storlek",
      value: "4 liter, med flaskor",
    },
    {
      label: "Passform",
      caption: "Känsla",
      value: "Tätt sittande, studsar lite",
    },
    {
      label: "Förvaring",
      caption: "Fickor",
      value: "Flera fickor fram och bak",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4gJrKqB",
    ratingSummary: "Amazon visar 4,7 av 5 från 72 omdömen.",
    highlights: [
      "Köpare uppskattar att västen sitter tätt och studsar lite på språng.",
      "De medföljande flaskorna gör vätska lätt att nå under rundan.",
      "Fickorna beskrivs som smidiga för telefon, gels och nycklar.",
    ],
    cautions: [
      "Tätt sittande passform – kontrollera storleksguiden så att den inte blir för trång.",
      "Mjuka flaskor kan behöva fyllas på under riktigt långa pass.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const fuel24JugProduct: Product = {
  slug: "fuel24-vattenflaska",
  title: "Fuel24 vattenflaska / gym jug (2,2 L)",
  category: "traning",
  asin: "B09YVCP5GK",
  brand: "Fuel24",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "2,2 liter",
    "För gym & vardag",
    "Koll på vätskeintaget",
  ],
  image: "/products/fuel24-jug/jug-thumbnail.webp",
  imageAlt: "Fuel24 vattenflaska / gym jug på 2,2 liter",
  images: [
    {
      src: "/products/fuel24-jug/jug-thumbnail.webp",
      alt: "Fuel24 vattenflaska / gym jug på 2,2 liter",
      label: "Gym jug 2,2 L",
    },
    {
      src: "/products/fuel24-jug/jug-1.webp",
      alt: "Fuel24 vattenflaska med stor volym för gym och vardag",
      label: "Stor volym",
    },
    {
      src: "/products/fuel24-jug/jug-2.webp",
      alt: "Fuel24 gym jug med markeringar för vätskeintag",
      label: "Markeringar",
    },
    {
      src: "/products/fuel24-jug/jug-3.webp",
      alt: "Detaljbild av Fuel24 vattenflaska",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4vzUjeE",
  pageHref: "/traning/vattenflaska",
  summary: "En stor vattenflaska på 2,2 liter för gym och vardag, gjord för att hjälpa dig hålla koll på ditt vätskeintag under dagen utan att behöva fylla på hela tiden.",
  evaluation: {
    headline: "Stor vattenflaska för koll på vätskeintaget",
    intro: "Elin går igenom Fuel24 gym jug: en rymlig vattenflaska på 2,2 liter för gymmet och vardagen. Den stora volymen gör att du sällan behöver fylla på, och flaskan är tänkt att hjälpa dig hålla koll på hur mycket du dricker under dagen.",
    verdict: "Rymlig vattenflaska som gör det enkelt att hålla koll på vätskeintaget.",
    checks: [],
  },
  specSectionEyebrow: "Tillbehör",
  specSectionTitle: "Fuel24 vattenflaska / gym jug",
  specs: [
    {
      label: "Volym",
      caption: "Storlek",
      value: "2,2 liter",
    },
    {
      label: "Användning",
      caption: "Passar",
      value: "Gym och vardag",
    },
    {
      label: "Funktion",
      caption: "Hjälp",
      value: "Koll på vätskeintaget",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4vzUjeE",
    ratingSummary: "Amazon visar 4,5 av 5 från 2269 omdömen.",
    highlights: [
      "Köpare uppskattar den stora volymen så att de slipper fylla på ofta.",
      "Markeringarna gör det lätt att följa hur mycket man druckit.",
      "Beskrivs som praktisk att ha med både på gymmet och i vardagen.",
    ],
    cautions: [
      "2,2 liter blir tungt och skrymmande när flaskan är helt full.",
      "Stora flaskor behöver rengöras regelbundet för att hållas fräscha.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const fitgriffStrapsProduct: Product = {
  slug: "fitgriff-lifting-straps",
  title: "Fitgriff lifting straps / dragremmar (vadderade)",
  category: "traning",
  asin: "B01F2OGJQM",
  brand: "Fitgriff",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Vadderade",
    "Bättre grepp",
    "För marklyft & rodd",
  ],
  image: "/products/fitgriff-straps/straps-thumbnail.webp",
  imageAlt: "Fitgriff lifting straps / dragremmar med vaddering",
  images: [
    {
      src: "/products/fitgriff-straps/straps-thumbnail.webp",
      alt: "Fitgriff lifting straps / dragremmar med vaddering",
      label: "Dragremmar",
    },
    {
      src: "/products/fitgriff-straps/straps-1.webp",
      alt: "Fitgriff vadderade dragremmar för bättre grepp",
      label: "Vaddering",
    },
    {
      src: "/products/fitgriff-straps/straps-2.webp",
      alt: "Fitgriff lifting straps i användning vid marklyft",
      label: "Marklyft",
    },
    {
      src: "/products/fitgriff-straps/straps-3.webp",
      alt: "Detaljbild av Fitgriff dragremmar",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4eR5f0v",
  pageHref: "/traning/lifting-straps",
  summary: "Vadderade lifting straps som hjälper dig att hålla greppet vid tunga drag som marklyft och rodd, så att greppstyrkan inte blir det som begränsar setet i förtid.",
  evaluation: {
    headline: "Dragremmar för bättre grepp vid tunga drag",
    intro: "Elin går igenom Fitgriff lifting straps: vadderade dragremmar som lindas runt stången för att avlasta greppet vid tunga drag som marklyft och rodd. Vadderingen är till för att göra det bekvämare runt handlederna, så att du kan fokusera på själva lyftet i stället för att tappa greppet.",
    verdict: "Praktiska dragremmar för dig som vill att greppet inte ska begränsa tunga drag.",
    checks: [],
  },
  specSectionEyebrow: "Tillbehör",
  specSectionTitle: "Fitgriff lifting straps / dragremmar",
  specs: [
    {
      label: "Typ",
      caption: "Format",
      value: "Lifting straps, ett par",
    },
    {
      label: "Komfort",
      caption: "Detalj",
      value: "Vadderade runt handleden",
    },
    {
      label: "Användning",
      caption: "Passar",
      value: "Marklyft, rodd och drag",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4eR5f0v",
    ratingSummary: "Amazon visar ett gott snittbetyg från många köpare.",
    highlights: [
      "Köpare upplever att remmarna hjälper greppet att hålla längre vid tunga drag.",
      "Vadderingen beskrivs som skön och avlastande runt handlederna.",
      "Uppskattas för att vara enkla att linda på och få sig en känsla för.",
    ],
    cautions: [
      "Det tar lite övning att linda remmarna rätt runt stången i början.",
      "Dragremmar tränar inte greppstyrkan – varva gärna med set utan dem.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const proBreezeDehumidifierProduct: Product = {
  slug: "pro-breeze-luftavfuktare",
  title: "Pro Breeze luftavfuktare 20 l/dygn",
  category: "halsa",
  asin: "B0F13YQHWJ",
  brand: "Pro Breeze",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Upp till 20 l/dygn",
    "För fuktiga rum",
    "Auto-avstängning",
  ],
  image: "/products/pro-breeze-dehumidifier/dehumid-thumbnail.webp",
  imageAlt: "Pro Breeze luftavfuktare 20 l/dygn",
  images: [
    {
      src: "/products/pro-breeze-dehumidifier/dehumid-thumbnail.webp",
      alt: "Pro Breeze luftavfuktare 20 l/dygn",
      label: "Luftavfuktare",
    },
    {
      src: "/products/pro-breeze-dehumidifier/dehumid-1.webp",
      alt: "Pro Breeze luftavfuktare i ett fuktigt rum",
      label: "Torrare luft",
    },
    {
      src: "/products/pro-breeze-dehumidifier/dehumid-2.webp",
      alt: "Vattentank på Pro Breeze luftavfuktare",
      label: "Vattentank",
    },
    {
      src: "/products/pro-breeze-dehumidifier/dehumid-3.webp",
      alt: "Kontrollpanel på Pro Breeze luftavfuktare",
      label: "Kontrollpanel",
    },
  ],
  amazonUrl: "https://amzn.to/4v1XR8B",
  pageHref: "/halsa/luftavfuktare",
  summary: "En luftavfuktare som drar ur fukt ur luften för en torrare och fräschare känsla i fuktiga rum som tvättstuga, källare och sovrum. Tar upp till 20 liter per dygn och stänger av sig automatiskt när tanken är full.",
  evaluation: {
    headline: "Drar ur fukt för en torrare inomhusluft",
    intro: "Elin går igenom Pro Breeze luftavfuktare med en kapacitet på upp till 20 liter per dygn. Den är tänkt för fuktiga rum där luften känns rå, som tvättstuga, källare och badrum, och hjälper till att hålla luftfuktigheten på en behagligare nivå för en fräschare inomhuskänsla.",
    verdict: "Stadig luftavfuktare för fuktiga rum när du vill ha en torrare och fräschare inomhusluft.",
    checks: [],
  },
  specSectionEyebrow: "Klimat",
  specSectionTitle: "Pro Breeze luftavfuktare 20 l/dygn",
  specs: [
    {
      label: "Kapacitet",
      caption: "Avfuktning",
      value: "Upp till 20 l/dygn",
    },
    {
      label: "Användning",
      caption: "Rum",
      value: "Tvättstuga, källare, sovrum",
    },
    {
      label: "Funktion",
      caption: "Säkerhet",
      value: "Auto-avstängning vid full tank",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4v1XR8B",
    ratingSummary: "Amazon visar 4,3 av 5 från 285 omdömen.",
    highlights: [
      "Köpare upplever en märkbart torrare och fräschare luft i fuktiga rum.",
      "Auto-avstängningen när tanken är full uppskattas i vardagen.",
      "Kompakt format som är lätt att flytta mellan rum.",
    ],
    cautions: [
      "Tanken behöver tömmas regelbundet i riktigt fuktiga rum.",
      "Avfuktare låter en del när de jobbar – tänk på placeringen i sovrum.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const levoitHumidifierProduct: Product = {
  slug: "levoit-luftfuktare",
  title: "Levoit Smart 6L luftfuktare (Classic 300S)",
  category: "halsa",
  asin: "B08HS45N13",
  brand: "Levoit",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "6 liters tank",
    "Tyst nattläge",
    "Appstyrning",
  ],
  image: "/products/levoit-humidifier/humid-thumbnail.webp",
  imageAlt: "Levoit Smart 6L luftfuktare (Classic 300S)",
  images: [
    {
      src: "/products/levoit-humidifier/humid-thumbnail.webp",
      alt: "Levoit Smart 6L luftfuktare (Classic 300S)",
      label: "Luftfuktare",
    },
    {
      src: "/products/levoit-humidifier/humid-1.webp",
      alt: "Levoit luftfuktare med fukt i sovrummet",
      label: "Mer fukt",
    },
    {
      src: "/products/levoit-humidifier/humid-2.webp",
      alt: "6 liters vattentank på Levoit luftfuktare",
      label: "6 L tank",
    },
    {
      src: "/products/levoit-humidifier/humid-3.webp",
      alt: "Appstyrning av Levoit Smart luftfuktare",
      label: "Appstyrning",
    },
  ],
  amazonUrl: "https://amzn.to/3Su77Vr",
  pageHref: "/halsa/luftfuktare",
  summary: "En smart luftfuktare som tillför fukt till torr inomhusluft, gjord för sovrum och vardagsrum. Stor 6-liters tank, tyst nattläge och appstyrning så att du kan ställa in luftfuktigheten på avstånd för en behagligare inomhuskänsla.",
  evaluation: {
    headline: "Tillför fukt till torr inomhusluft",
    intro: "Elin går igenom Levoit Smart 6L luftfuktare (Classic 300S). Den tillför fukt till torr inomhusluft, vilket många uppskattar under vinterhalvåret när element och kyla gör luften torr. Med tyst nattläge och appstyrning är den gjord för att smälta in i sovrummet och kunna ställas in på avstånd.",
    verdict: "Smart och tyst luftfuktare för dig som vill tillföra fukt till torr inomhusluft i sovrummet.",
    checks: [
      {
        label: "Problemet den löser",
        text: "Tillför fukt när inomhusluften känns torr, särskilt i sovrum och vardagsrum under perioder med torr luft.",
      },
      {
        label: "Varför Elin fastnade",
        text: "Stor 6-liters tank, tyst nattläge och appstyrning gör den mer praktisk i vardagen än en liten manuell modell som behöver fyllas hela tiden.",
      },
      {
        label: "Det vi inte vill överdriva",
        text: "En luftfuktare kräver skötsel. Fyll på, rengör och håll koll på nivåerna så att den inte blir ännu en pryl som bara står.",
      },
    ],
  },
  specSectionEyebrow: "Klimat",
  specSectionTitle: "Levoit Smart 6L luftfuktare (Classic 300S)",
  specs: [
    {
      label: "Tank",
      caption: "Kapacitet",
      value: "6 liter",
    },
    {
      label: "Ljud",
      caption: "Nattläge",
      value: "Tyst läge för sovrum",
    },
    {
      label: "Styrning",
      caption: "Smart",
      value: "App och röststyrning",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3Su77Vr",
    ratingSummary: "Amazon visar 4,4 av 5 från 24 562 omdömen.",
    highlights: [
      "Köpare upplever en behagligare och mindre torr luft i sovrummet.",
      "Det tysta nattläget uppskattas av många som vill ha den nära sängen.",
      "Appstyrningen gör det enkelt att ställa in luftfuktigheten på avstånd.",
    ],
    cautions: [
      "Tanken behöver fyllas på och rengöras regelbundet för bästa resultat.",
      "Använd gärna rent eller kokat vatten för att undvika vita avlagringar.",
    ],
  },
  ugcVideos: [],
  uses: [
    "I sovrummet när luften känns torr och du vill ha tyst drift nära sängen.",
    "I vardagsrum där du vill styra luftfuktigheten från appen.",
    "Under vintern när element och kall luft gör hemmet torrare.",
    "För längre körning tack vare den större tanken.",
  ],
  peopleLike: [
    "Köpare beskriver luften i sovrummet som mindre torr.",
    "Det tysta nattläget uppskattas nära sängen.",
    "Appstyrningen lyfts som smidig för justering på avstånd.",
  ],
  honestCheck: [
    "Tanken behöver fyllas och rengöras regelbundet.",
    "Rent eller kokat vatten minskar risken för vita avlagringar.",
    "För hög luftfuktighet är inte målet; håll koll på rummet och vädra vid behov.",
  ],
  comments: [],
};

export const ellaWeightedBlanketProduct: Product = {
  slug: "ella-tyngdtacke",
  title: "Ella tyngdtäcke 9 kg (150x200 cm)",
  category: "halsa",
  asin: "B093WY4SJ4",
  brand: "Ella",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "9 kg jämn tyngd",
    "Skön avkoppling",
    "150x200 cm",
  ],
  image: "/products/ella-weighted-blanket/tyngdtacke-thumbnail.webp",
  imageAlt: "Ella tyngdtäcke 9 kg, 150x200 cm",
  images: [
    {
      src: "/products/ella-weighted-blanket/tyngdtacke-thumbnail.webp",
      alt: "Ella tyngdtäcke 9 kg, 150x200 cm",
      label: "Tyngdtäcke",
    },
    {
      src: "/products/ella-weighted-blanket/tyngdtacke-1.webp",
      alt: "Ella tyngdtäcke med jämn, omslutande tyngd",
      label: "Jämn tyngd",
    },
    {
      src: "/products/ella-weighted-blanket/tyngdtacke-2.webp",
      alt: "Ella tyngdtäcke material och konsistens",
      label: "Mjukt tyg",
    },
    {
      src: "/products/ella-weighted-blanket/tyngdtacke-3.webp",
      alt: "Detaljbild av Ella tyngdtäcke 9 kg",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4uXriIM",
  pageHref: "/halsa/tyngdtacke",
  summary: "Ett tyngdtäcke på 9 kg (150x200 cm) som ger en jämn, omslutande tyngd för en skön och avkopplande känsla i sängen. Mjukt tyg och jämnt fördelad vikt för en lugn stund.",
  evaluation: {
    headline: "Jämn tyngd för en skön avkoppling",
    intro: "Elin går igenom Ella tyngdtäcke på 9 kg i storleken 150x200 cm. Tanken med ett tyngdtäcke är den jämna, omslutande tyngden som många upplever som mysig och avkopplande i sängen eller i soffan. Vikten är jämnt fördelad och tyget är mjukt mot huden.",
    verdict: "Mysigt tyngdtäcke för dig som vill ha en jämn, omslutande känsla och skön avkoppling.",
    checks: [
      {
        label: "Problemet den löser",
        text: "Ger en jämn och omslutande tyngd i sängen när du vill ha en lugnare, mer ombonad känsla på kvällen.",
      },
      {
        label: "Varför Elin fastnade",
        text: "Det tydliga 9 kg-formatet och den jämnt fördelade vikten gör det lätt att förstå vem täcket passar: dig som vill ha tyngd, inte bara extra värme.",
      },
      {
        label: "Det vi inte vill överdriva",
        text: "Tyngd är personligt. Fel vikt kan kännas för tung eller varm, så välj efter kropp och känsla snarare än bara betyg.",
      },
    ],
  },
  specSectionEyebrow: "Sömn & avkoppling",
  specSectionTitle: "Ella tyngdtäcke 9 kg",
  specs: [
    {
      label: "Vikt",
      caption: "Tyngd",
      value: "9 kg, jämnt fördelad",
    },
    {
      label: "Storlek",
      caption: "Mått",
      value: "150x200 cm",
    },
    {
      label: "Material",
      caption: "Tyg",
      value: "Mjukt, hudvänligt tyg",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4uXriIM",
    ratingSummary: "Amazon visar 4,5 av 5 från 1 532 omdömen.",
    highlights: [
      "Köpare beskriver den jämna tyngden som skön och avkopplande.",
      "Vikten upplevs jämnt fördelad över hela täcket.",
      "Mjukt tyg som de flesta tycker känns mysigt mot huden.",
    ],
    cautions: [
      "9 kg passar inte alla – välj en vikt som känns bekväm för dig.",
      "Ett tyngre täcke kan kännas varmt; vädra och lufta det vid behov.",
    ],
  },
  ugcVideos: [],
  uses: [
    "Kvällar när du vill ha en mer omslutande känsla än ett vanligt täcke.",
    "I sängen under svalare perioder när extra tyngd också känns mysigt.",
    "Som vardagstäcke om 9 kg känns bekvämt för din kropp.",
    "För lugna stunder i soffan om storleken fungerar praktiskt hemma.",
  ],
  peopleLike: [
    "Köpare beskriver tyngden som jämn och avkopplande.",
    "Viktfördelningen över täcket för positiva signaler.",
    "Det mjuka tyget lyfts som mysigt mot huden.",
  ],
  honestCheck: [
    "9 kg passar inte alla; välj hellre lättare om du är osäker.",
    "Ett tyngre täcke kan kännas varmt, särskilt under sommaren.",
    "Vädra och lufta täcket regelbundet för en fräschare känsla.",
  ],
  comments: [],
};

export const jisulifeHandfanProduct: Product = {
  slug: "jisulife-handflakt",
  title: "JISULIFE Pro1 handfläkt (uppladdningsbar)",
  category: "halsa",
  asin: "B0GQ45ZZHB",
  brand: "JISULIFE",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Kraftfull men tyst",
    "Långt batteri",
    "Svalka på språng",
  ],
  image: "/products/jisulife-handfan/handflakt-thumbnail.webp",
  imageAlt: "JISULIFE Pro1 handfläkt, uppladdningsbar",
  images: [
    {
      src: "/products/jisulife-handfan/handflakt-thumbnail.webp",
      alt: "JISULIFE Pro1 handfläkt, uppladdningsbar",
      label: "Handfläkt",
    },
    {
      src: "/products/jisulife-handfan/handflakt-1.webp",
      alt: "JISULIFE Pro1 handfläkt med kraftfullt och tyst luftflöde",
      label: "Tyst & stark",
    },
    {
      src: "/products/jisulife-handfan/handflakt-2.webp",
      alt: "JISULIFE Pro1 handfläkt med uppladdningsbart batteri",
      label: "Långt batteri",
    },
    {
      src: "/products/jisulife-handfan/handflakt-3.webp",
      alt: "Detaljbild av JISULIFE Pro1 handfläkt",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4uZqraA",
  pageHref: "/halsa/handflakt",
  summary: "En kraftfull men tyst handfläkt med långt batteri som ger svalka på språng i sommarvärmen. Uppladdningsbar och lätt att ta med i väskan när det blir varmt.",
  evaluation: {
    headline: "Kraftfull men tyst svalka på språng",
    intro: "Elin går igenom JISULIFE Pro1: en uppladdningsbar handfläkt som vill ge ett kraftfullt men tyst luftflöde med långt batteri. En smidig följeslagare för varma dagar, pendling och utomhusstunder när sommarvärmen blir för mycket.",
    verdict: "Smidig och tyst handfläkt med långt batteri för svalka på språng.",
    checks: [],
  },
  specSectionEyebrow: "Fläkt",
  specSectionTitle: "JISULIFE Pro1 handfläkt",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Uppladdningsbar handfläkt",
    },
    {
      label: "Ljudnivå",
      caption: "Drift",
      value: "Kraftfullt men tyst luftflöde",
    },
    {
      label: "Batteri",
      caption: "Användning",
      value: "Långt batteri för hela dagen",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4uZqraA",
    ratingSummary: "Amazon visar 4,3 av 5 från 121 omdömen.",
    highlights: [
      "Köpare upplever ett kraftfullt luftflöde som svalkar bra.",
      "Många uppskattar att den är tyst nog att använda nära andra.",
      "Det långa batteriet lyfts fram för långa dagar utan laddning.",
    ],
    cautions: [
      "Upplevd svalka varierar med temperatur och hur den används.",
      "Laddtiden och batteritiden beror på vilket hastighetsläge du kör.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const xiaomiStandingFanProduct: Product = {
  slug: "xiaomi-bordsflakt",
  title: "Xiaomi Mi Smart Standing Fan 2 Lite",
  category: "halsa",
  asin: "B09TP3SKWR",
  brand: "Xiaomi",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Tyst drift",
    "Appstyrning",
    "Flera lägen",
  ],
  image: "/products/xiaomi-fan/xiaomi-fan-thumbnail.webp",
  imageAlt: "Xiaomi Mi Smart Standing Fan 2 Lite",
  images: [
    {
      src: "/products/xiaomi-fan/xiaomi-fan-thumbnail.webp",
      alt: "Xiaomi Mi Smart Standing Fan 2 Lite",
      label: "Bordsfläkt",
    },
    {
      src: "/products/xiaomi-fan/xiaomi-fan-1.webp",
      alt: "Xiaomi bordsfläkt med tyst drift och flera lägen",
      label: "Tyst drift",
    },
    {
      src: "/products/xiaomi-fan/xiaomi-fan-2.webp",
      alt: "Xiaomi smart fläkt med appstyrning",
      label: "Appstyrning",
    },
    {
      src: "/products/xiaomi-fan/xiaomi-fan-3.webp",
      alt: "Detaljbild av Xiaomi Mi Smart Standing Fan 2 Lite",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/3Sytkld",
  pageHref: "/halsa/bordsflakt",
  summary: "En tyst, smart fläkt med flera lägen och appstyrning för skrivbord och sovrum. Lätt att ställa in efter behov och tyst nog att ha på under arbete och sömn.",
  evaluation: {
    headline: "Tyst, smart fläkt för skrivbord och sovrum",
    intro: "Elin går igenom Xiaomi Mi Smart Standing Fan 2 Lite: en fläkt som lägger fokus på tyst drift, flera lägen och appstyrning. Tanken är en fläkt du kan ha på under arbete och sömn utan att den stör, och som du enkelt justerar via app eller knappar.",
    verdict: "Tyst och smart fläkt med flera lägen och appstyrning för skrivbord och sovrum.",
    checks: [],
  },
  specSectionEyebrow: "Fläkt",
  specSectionTitle: "Xiaomi Mi Smart Standing Fan 2 Lite",
  specs: [
    {
      label: "Typ",
      caption: "Format",
      value: "Smart golv- och bordsfläkt",
    },
    {
      label: "Lägen",
      caption: "Drift",
      value: "Flera hastighetslägen, tyst drift",
    },
    {
      label: "Styrning",
      caption: "Smart",
      value: "Appstyrning och knappar",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3Sytkld",
    ratingSummary: "Amazon visar 4,7 av 5 från 22 omdömen.",
    highlights: [
      "Köpare uppskattar att den är tyst nog att ha på under arbete och sömn.",
      "Appstyrningen och de flera lägena gör den enkel att ställa in.",
      "Lagom storlek för skrivbord och sovrum.",
    ],
    cautions: [
      "Antalet omdömen är ännu få (22), så betyget kan ändras över tid.",
      "Appstyrning kräver app och uppkoppling, vilket inte passar alla.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const beurerLv50Product: Product = {
  slug: "beurer-luftkylare",
  title: "Beurer LV 50 Fresh Breeze luftkylare",
  category: "halsa",
  asin: "B094ZMJFW6",
  brand: "Beurer",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Portabel bordsmodell",
    "Svalkande bris",
    "Vattentank för extra sval luft",
  ],
  image: "/products/beurer-lv50/kylare-thumbnail.webp",
  imageAlt: "Beurer LV 50 Fresh Breeze luftkylare för bordet",
  images: [
    {
      src: "/products/beurer-lv50/kylare-thumbnail.webp",
      alt: "Beurer LV 50 Fresh Breeze luftkylare för bordet",
      label: "Luftkylare",
    },
    {
      src: "/products/beurer-lv50/kylare-1.webp",
      alt: "Beurer LV 50 portabel bordsluftkylare framifrån",
      label: "Portabel",
    },
    {
      src: "/products/beurer-lv50/kylare-2.webp",
      alt: "Beurer LV 50 luftkylare med vattentank för svalare luft",
      label: "Vattentank",
    },
    {
      src: "/products/beurer-lv50/kylare-3.webp",
      alt: "Detaljbild av Beurer LV 50 Fresh Breeze luftkylare",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4vaeuz6",
  pageHref: "/halsa/luftkylare",
  summary: "En liten, portabel bordsluftkylare som ger en svalkande bris vid skrivbordet eller soffan. Fyll på vatten i tanken för en extra sval känsla under varma dagar. En enkel, behändig fläkt – men det är just en personlig bordsmodell, inte en kraftfull rumskylare.",
  evaluation: {
    headline: "Liten bordsfläkt med svalkande bris",
    intro: "Elin tittar närmare på Beurer LV 50 Fresh Breeze: en kompakt luftkylare för bordet som ger en personlig, svalkande bris. Du kan fylla på vatten i tanken för en extra sval luft alldeles framför dig. Det är en behändig modell att ha på skrivbordet eller nattduksbordet under varma dagar.",
    verdict: "Behändig personlig bordsfläkt för en svalkande bris – men håll förväntningarna i nivå med storleken.",
    checks: [],
  },
  specSectionEyebrow: "Fläkt",
  specSectionTitle: "Beurer LV 50 Fresh Breeze",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Portabel bordsluftkylare",
    },
    {
      label: "Funktion",
      caption: "Sval luft",
      value: "Vattentank för en extra sval bris",
    },
    {
      label: "Placering",
      caption: "Personlig",
      value: "Skrivbord, nattduksbord eller soffbord",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4vaeuz6",
    ratingSummary: "Amazon visar 3,6 av 5 från 242 omdömen.",
    highlights: [
      "Behändig och liten – många uppskattar att den får plats på skrivbordet.",
      "Ger en svalkande, personlig bris alldeles framför dig.",
      "Enkel att fylla på med vatten för en lite svalare känsla.",
    ],
    cautions: [
      "Betyget är lägre än snittet (3,6 av 5) – flera köpare tycker att den är svag och mest märks på nära håll, inte i hela rummet.",
      "Det är en liten personlig bordsmodell, inte en kraftfull rumskylare – ställ förväntningarna därefter.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const renphoMassagePillowProduct: Product = {
  slug: "renpho-massagekudde",
  title: "RENPHO shiatsu massagekudde med värme",
  category: "halsa",
  asin: "B07PMK1XZ4",
  brand: "RENPHO",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Shiatsu-känsla",
    "Mjuk värme",
    "Nacke, axlar & rygg",
  ],
  image: "/products/renpho-massage-pillow/massagekudde-thumbnail.webp",
  imageAlt: "RENPHO shiatsu massagekudde med värme för nacke och axlar",
  images: [
    {
      src: "/products/renpho-massage-pillow/massagekudde-thumbnail.webp",
      alt: "RENPHO shiatsu massagekudde med värme för nacke och axlar",
      label: "Massagekudde",
    },
    {
      src: "/products/renpho-massage-pillow/massagekudde-1.webp",
      alt: "RENPHO massagekudde med roterande shiatsu-noder",
      label: "Shiatsu-noder",
    },
    {
      src: "/products/renpho-massage-pillow/massagekudde-2.webp",
      alt: "RENPHO massagekudde använd mot nacke och axlar",
      label: "Nacke & axlar",
    },
    {
      src: "/products/renpho-massage-pillow/massagekudde-3.webp",
      alt: "Detaljbild av RENPHO shiatsu massagekudde med värme",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/443sQWK",
  pageHref: "/halsa/massagekudde",
  summary: "En shiatsu-massagekudde med mjuk värme som ger en skön, avslappnande känsla i nacke, axlar och rygg. De roterande noderna och värmen gör den till en mysig stund i soffan efter en lång dag. Tänk avkoppling och komfort – inte en ersättning för vård.",
  evaluation: {
    headline: "Shiatsu-kudde för en skön, varm stund",
    intro: "Elin går igenom RENPHO shiatsu massagekudde: roterande noder och mjuk värme som ger en avslappnande känsla i nacke, axlar och rygg. Det är en behändig kudde att luta sig mot i soffan när du vill unna dig en lugn, varm stund. Den är gjord för komfort och avkoppling.",
    verdict: "Mysig shiatsu-kudde med värme för en skön, avslappnande stund hemma.",
    checks: [],
  },
  specSectionEyebrow: "Återhämtning",
  specSectionTitle: "RENPHO shiatsu massagekudde",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Shiatsu-massagekudde med värme",
    },
    {
      label: "Funktion",
      caption: "Känsla",
      value: "Roterande noder och mjuk värme",
    },
    {
      label: "Placering",
      caption: "Komfort",
      value: "Nacke, axlar och rygg",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/443sQWK",
    ratingSummary: "Amazon visar 4,2 av 5 från 6362 omdömen.",
    highlights: [
      "Många tycker att den ger en skön, avslappnande känsla i nacke och axlar.",
      "Den mjuka värmen uppskattas för en extra mysig stund.",
      "Behändig att placera mot soffan eller stolen efter en lång dag.",
    ],
    cautions: [
      "Trycket från noderna kan kännas starkt till en början – börja kort och anpassa läget.",
      "Det är en komfortprodukt för avkoppling, inte en ersättning för vård eller behandling.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const beurerFm90Product: Product = {
  slug: "beurer-fotmassage",
  title: "Beurer FM 90 shiatsu fotmassage",
  category: "halsa",
  asin: "B07H7QZVSP",
  brand: "Beurer",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Shiatsu-känsla",
    "Mjuk värme",
    "Sköna fötter",
  ],
  image: "/products/beurer-fm90/fotmassage-thumbnail.webp",
  imageAlt: "Beurer FM 90 shiatsu fotmassage med värme",
  images: [
    {
      src: "/products/beurer-fm90/fotmassage-thumbnail.webp",
      alt: "Beurer FM 90 shiatsu fotmassage med värme",
      label: "Fotmassage",
    },
    {
      src: "/products/beurer-fm90/fotmassage-1.webp",
      alt: "Beurer FM 90 fotmassage med shiatsu-noder",
      label: "Shiatsu-noder",
    },
    {
      src: "/products/beurer-fm90/fotmassage-2.webp",
      alt: "Beurer FM 90 fotmassage använd för trötta fötter",
      label: "Trötta fötter",
    },
    {
      src: "/products/beurer-fm90/fotmassage-3.webp",
      alt: "Detaljbild av Beurer FM 90 shiatsu fotmassage",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4v033Kc",
  pageHref: "/halsa/fotmassage",
  summary: "En shiatsu-fotmassage med mjuk värme som ger en skön, avslappnande stund för trötta fötter. Ställ ner fötterna och låt de roterande noderna och värmen göra stunden mysig i soffan. Tänk komfort och avkoppling – inte en ersättning för vård.",
  evaluation: {
    headline: "Shiatsu-fotmassage för en skön stund",
    intro: "Elin tittar närmare på Beurer FM 90 shiatsu fotmassage: roterande noder och mjuk värme för en avslappnande, skön känsla för trötta fötter. Det är en behändig sak att ställa fram framför soffan när du vill unna dig en lugn, varm stund. Den är gjord för komfort och avkoppling.",
    verdict: "Skön shiatsu-fotmassage med värme för en avkopplande stund efter en lång dag.",
    checks: [],
  },
  specSectionEyebrow: "Återhämtning",
  specSectionTitle: "Beurer FM 90 fotmassage",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Shiatsu-fotmassage med värme",
    },
    {
      label: "Funktion",
      caption: "Känsla",
      value: "Roterande noder och mjuk värme",
    },
    {
      label: "Placering",
      caption: "Komfort",
      value: "För fötter, framför soffan eller stolen",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4v033Kc",
    ratingSummary: "Amazon visar 3,9 av 5 från 704 omdömen.",
    highlights: [
      "Många tycker att den ger en skön, avslappnande känsla för trötta fötter.",
      "Den mjuka värmen uppskattas för en extra mysig stund.",
      "Behändig att ställa fram framför soffan efter en lång dag.",
    ],
    cautions: [
      "Betyget ligger nära snittet (3,9 av 5) – trycket kan kännas starkt och passformen passar inte alla fötter lika bra.",
      "Det är en komfortprodukt för avkoppling, inte en ersättning för vård eller behandling.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const beurerHeatingPadProduct: Product = {
  slug: "beurer-varmedyna",
  title: "Beurer HK Comfort värmedyna",
  category: "halsa",
  asin: "B00AAW1VKQ",
  brand: "Beurer",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Skön värme",
    "Mjukt tyg",
    "Rygg, mage & axlar",
  ],
  image: "/products/beurer-varmedyna/varmedyna-thumbnail.webp",
  imageAlt: "Beurer HK Comfort värmedyna i mjukt tyg",
  images: [
    {
      src: "/products/beurer-varmedyna/varmedyna-thumbnail.webp",
      alt: "Beurer HK Comfort värmedyna i mjukt tyg",
      label: "Värmedyna",
    },
    {
      src: "/products/beurer-varmedyna/varmedyna-1.webp",
      alt: "Beurer HK Comfort värmedyna med flera värmelägen",
      label: "Värmelägen",
    },
    {
      src: "/products/beurer-varmedyna/varmedyna-2.webp",
      alt: "Beurer värmedyna mot rygg för en avkopplande känsla",
      label: "För ryggen",
    },
    {
      src: "/products/beurer-varmedyna/varmedyna-3.webp",
      alt: "Detaljbild av Beurer HK Comfort värmedyna",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4oOQYpL",
  pageHref: "/halsa/varmedyna",
  summary: "En mjuk värmedyna som ger skön värme och en avkopplande känsla för rygg, mage eller axlar. Lägg den tillrätta i soffan, välj värmeläge och luta dig tillbaka för en lugn, varm stund. Tänk komfort och avkoppling – inte en ersättning för vård.",
  evaluation: {
    headline: "Mjuk värmedyna för en avkopplande stund",
    intro: "Elin går igenom Beurer HK Comfort värmedyna: ett mjukt tyg och flera värmelägen som ger skön värme och en avkopplande känsla för rygg, mage eller axlar. Det är en behändig dyna att ta fram i soffan när du vill unna dig en lugn, varm stund. Den är gjord för komfort och avkoppling.",
    verdict: "Mysig, mjuk värmedyna för skön värme och en avkopplande stund hemma.",
    checks: [],
  },
  specSectionEyebrow: "Återhämtning",
  specSectionTitle: "Beurer HK Comfort värmedyna",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Värmedyna i mjukt tyg",
    },
    {
      label: "Funktion",
      caption: "Känsla",
      value: "Flera värmelägen för skön värme",
    },
    {
      label: "Placering",
      caption: "Komfort",
      value: "Rygg, mage eller axlar",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4oOQYpL",
    ratingSummary: "Amazon visar 4,1 av 5 från 4981 omdömen.",
    highlights: [
      "Många tycker att den ger en skön, avkopplande värme för rygg och mage.",
      "Det mjuka tyget uppskattas för en mysig känsla mot kroppen.",
      "Behändig att ta fram i soffan eller sängen för en lugn stund.",
    ],
    cautions: [
      "Upplevelsen av värmenivåerna varierar – vissa tycker högsta läget blir för varmt, andra lagom.",
      "Det är en komfortprodukt för värme och avkoppling, inte en ersättning för vård eller behandling.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const mattibiAcupressureProduct: Product = {
  slug: "mattibi-spikmatta",
  title: "Mattibi spikmatta / akupressurmatta med kudde",
  category: "halsa",
  asin: "B094QVJ69W",
  brand: "Mattibi",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Matta & kudde",
    "Stund av avkoppling",
    "Skön efter dagen",
  ],
  image: "/products/mattibi-spikmatta/spikmatta-thumbnail.webp",
  imageAlt: "Mattibi spikmatta och akupressurmatta med kudde",
  images: [
    {
      src: "/products/mattibi-spikmatta/spikmatta-thumbnail.webp",
      alt: "Mattibi spikmatta och akupressurmatta med kudde",
      label: "Spikmatta",
    },
    {
      src: "/products/mattibi-spikmatta/spikmatta-1.webp",
      alt: "Mattibi spikmatta med akupressurpunkter",
      label: "Akupressur",
    },
    {
      src: "/products/mattibi-spikmatta/spikmatta-2.webp",
      alt: "Mattibi spikmatta med tillhörande kudde",
      label: "Matta & kudde",
    },
    {
      src: "/products/mattibi-spikmatta/spikmatta-3.webp",
      alt: "Detaljbild av Mattibi spikmatta / akupressurmatta",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4vzUMgU",
  pageHref: "/halsa/spikmatta",
  summary: "En spikmatta med tillhörande kudde för en stunds avslappning. Många tycker det känns skönt att ligga på mattan en stund efter en lång dag. Det handlar om avkoppling och en skön känsla – inte om någon form av behandling.",
  evaluation: {
    headline: "Spikmatta för en stund av avkoppling",
    intro: "Elin tittar närmare på Mattibi spikmatta med kudde: en akupressurmatta som många använder för en stunds avslappning. Det är en enkel sak att rulla ut på golvet eller sängen och ligga på en stund när du vill varva ner. Många tycker det känns skönt efter en lång dag – det handlar om avkoppling, inte behandling.",
    verdict: "Populär spikmatta med kudde för en skön stund av avkoppling efter dagen.",
    checks: [],
  },
  specSectionEyebrow: "Återhämtning",
  specSectionTitle: "Mattibi spikmatta med kudde",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Spikmatta / akupressurmatta",
    },
    {
      label: "Innehåll",
      caption: "Set",
      value: "Matta och tillhörande kudde",
    },
    {
      label: "Användning",
      caption: "Avkoppling",
      value: "Ligg en stund för att varva ner",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4vzUMgU",
    ratingSummary: "Amazon visar 4,5 av 5 från 452 omdömen.",
    highlights: [
      "Många tycker det känns skönt att ligga på mattan en stund efter en lång dag.",
      "Den tillhörande kudden uppskattas för att kunna varva ner även nacke och axlar.",
      "Enkel att rulla ut på golvet eller sängen för en stund av avkoppling.",
    ],
    cautions: [
      "Spikarna kan kännas vassa de första gångerna – många lägger på ett tunt tyg och börjar med korta stunder.",
      "Det handlar om avkoppling och en skön känsla, inte om behandling – upplevelsen är väldigt personlig.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const withingsBodySmartProduct: Product = {
  slug: "withings-personvag",
  title: "Withings Body Smart digital personvåg",
  category: "halsa",
  asin: "B0GKB7DYHV",
  brand: "Withings",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Synkar till appen",
    "Mäter kroppssammansättning",
    "Följ utvecklingen",
  ],
  image: "/products/withings-scale/vag-thumbnail.webp",
  imageAlt: "Withings Body Smart digital personvåg",
  images: [
    {
      src: "/products/withings-scale/vag-thumbnail.webp",
      alt: "Withings Body Smart digital personvåg",
      label: "Body Smart",
    },
    {
      src: "/products/withings-scale/vag-1.webp",
      alt: "Withings Body Smart våg som visar vikt på displayen",
      label: "Tydlig display",
    },
    {
      src: "/products/withings-scale/vag-2.webp",
      alt: "Withings Body Smart våg sett ovanifrån",
      label: "Design",
    },
    {
      src: "/products/withings-scale/vag-3.webp",
      alt: "Detaljbild av Withings Body Smart personvåg",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4wanqVP",
  pageHref: "/halsa/personvag",
  summary: "En smart personvåg som mäter vikt och kroppssammansättning och synkar mätningarna till appen, så att du enkelt kan följa din utveckling över tid. Tydlig display och smidig uppkoppling.",
  evaluation: {
    headline: "Smart våg som följer din utveckling",
    intro: "Elin går igenom Withings Body Smart: en uppkopplad personvåg som mäter vikt och kroppssammansättning och samlar siffrorna i appen. Det gör det lätt att se trender över tid och hålla ordning på dina mätvärden på ett ställe, helt som data utan extra krångel.",
    verdict: "Smidig smart våg för dig som vill samla vikt och kroppsdata i appen.",
    checks: [],
  },
  specSectionEyebrow: "Smart hem & livsstil",
  specSectionTitle: "Withings Body Smart personvåg",
  specs: [
    {
      label: "Mätning",
      caption: "Data",
      value: "Vikt och kroppssammansättning",
    },
    {
      label: "Uppkoppling",
      caption: "Sync",
      value: "Synkar till appen via wifi/bluetooth",
    },
    {
      label: "Display",
      caption: "Avläsning",
      value: "Tydlig skärm med dina värden",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4wanqVP",
    ratingSummary: "Amazon visar 4,4 av 5 från 109 omdömen.",
    highlights: [
      "Köpare uppskattar att vågen synkar mätningarna automatiskt till appen.",
      "Många tycker det är enkelt att följa sin utveckling över tid.",
      "Displayen beskrivs som tydlig och lätt att läsa av.",
    ],
    cautions: [
      "Kroppssammansättning är uppskattade värden och ska ses som trenddata, inte exakta siffror.",
      "Vissa funktioner kräver att du skapar konto och kopplar upp vågen i appen.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const magicteamWhiteNoiseProduct: Product = {
  slug: "magicteam-white-noise",
  title: "Magicteam white noise-maskin (40 ljud)",
  category: "halsa",
  asin: "B07RQWQBXY",
  brand: "Magicteam",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "40 ljud",
    "För sömn & fokus",
    "Lugn ljudkuliss",
  ],
  image: "/products/magicteam-white-noise/whitenoise-thumbnail.webp",
  imageAlt: "Magicteam white noise-maskin med 40 ljud",
  images: [
    {
      src: "/products/magicteam-white-noise/whitenoise-thumbnail.webp",
      alt: "Magicteam white noise-maskin med 40 ljud",
      label: "White noise",
    },
    {
      src: "/products/magicteam-white-noise/whitenoise-1.webp",
      alt: "Magicteam white noise-maskin med knappar och kontroller",
      label: "Enkla kontroller",
    },
    {
      src: "/products/magicteam-white-noise/whitenoise-2.webp",
      alt: "Magicteam white noise-maskin sett från sidan",
      label: "Kompakt",
    },
    {
      src: "/products/magicteam-white-noise/whitenoise-3.webp",
      alt: "Detaljbild av Magicteam white noise-maskin",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4aoe14I",
  pageHref: "/halsa/white-noise",
  summary: "En white noise-maskin med många olika ljud som ger en lugn ljudkuliss för sömn och fokus. Smidig att ställa in och kompakt nog att ha på nattduksbordet eller skrivbordet.",
  evaluation: {
    headline: "Lugn ljudkuliss för sömn och fokus",
    intro: "Elin går igenom Magicteam white noise-maskin: 40 ljud att välja bland, från jämnt brus till mjuka naturljud. Tanken är att skapa en jämn, lugn ljudkuliss som hjälper till att dämpa störande ljud när du vill sova eller fokusera.",
    verdict: "Prisvärd white noise-maskin med många ljud för en lugnare ljudmiljö.",
    checks: [],
  },
  specSectionEyebrow: "Sömn & avkoppling",
  specSectionTitle: "Magicteam white noise-maskin",
  specs: [
    {
      label: "Ljud",
      caption: "Urval",
      value: "40 olika ljud",
    },
    {
      label: "Användning",
      caption: "Tillfälle",
      value: "Sömn, fokus och avkoppling",
    },
    {
      label: "Format",
      caption: "Storlek",
      value: "Kompakt för nattduksbord",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4aoe14I",
    ratingSummary: "Amazon visar 4,4 av 5 från 11312 omdömen.",
    highlights: [
      "Köpare uppskattar det stora utbudet av ljud att välja bland.",
      "Många tycker den skapar en skön, jämn ljudkuliss i rummet.",
      "Beskrivs som enkel att ställa in och lagom kompakt.",
    ],
    cautions: [
      "Vad som känns avkopplande är personligt – testa dig fram bland ljuden.",
      "Vissa vill ha en timer eller automatisk avstängning, så kolla inställningarna.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const philipsWakeUpLightProduct: Product = {
  slug: "philips-wake-up-light",
  title: "Philips Wake-up Light HF3651/01",
  category: "halsa",
  asin: "B074TP48WY",
  brand: "Philips",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Soluppgångssimulering",
    "Mjuk väckning",
    "Ljus som ökar gradvis",
  ],
  image: "/products/philips-wakeup/wakeup-thumbnail.webp",
  imageAlt: "Philips Wake-up Light HF3651/01 ljusväckarklocka",
  images: [
    {
      src: "/products/philips-wakeup/wakeup-thumbnail.webp",
      alt: "Philips Wake-up Light HF3651/01 ljusväckarklocka",
      label: "Wake-up Light",
    },
    {
      src: "/products/philips-wakeup/wakeup-1.webp",
      alt: "Philips Wake-up Light med soluppgångssimulering",
      label: "Soluppgång",
    },
    {
      src: "/products/philips-wakeup/wakeup-2.webp",
      alt: "Philips Wake-up Light sett från sidan med display",
      label: "Display",
    },
    {
      src: "/products/philips-wakeup/wakeup-3.webp",
      alt: "Detaljbild av Philips Wake-up Light HF3651/01",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4eGiXmM",
  pageHref: "/halsa/wake-up-light",
  summary: "En ljusväckarklocka med soluppgångssimulering som väcker dig mjukt med ljus som gradvis ökar inför väckningen. Ett behagligare sätt att börja morgonen än en plötslig larmsignal.",
  evaluation: {
    headline: "Mjuk väckning med ljus som ökar gradvis",
    intro: "Elin går igenom Philips Wake-up Light HF3651/01: en ljusväckarklocka som simulerar en soluppgång. Ljuset ökar gradvis innan din väckningstid så att morgonen kan kännas mjukare och mindre abrupt än med ett vanligt larm.",
    verdict: "Skön ljusväckarklocka för dig som vill ha en mjukare start på morgonen.",
    checks: [],
  },
  specSectionEyebrow: "Sömn & avkoppling",
  specSectionTitle: "Philips Wake-up Light HF3651/01",
  specs: [
    {
      label: "Funktion",
      caption: "Ljus",
      value: "Soluppgångssimulering",
    },
    {
      label: "Väckning",
      caption: "Upplevelse",
      value: "Ljus som ökar gradvis",
    },
    {
      label: "Användning",
      caption: "Tillfälle",
      value: "Morgonrutin på nattduksbordet",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4eGiXmM",
    ratingSummary: "Amazon visar 4,4 av 5 från 1525 omdömen.",
    highlights: [
      "Köpare beskriver en mjukare, mer behaglig väckning med det gradvisa ljuset.",
      "Många uppskattar soluppgångssimuleringen, särskilt på mörka mornar.",
      "Ses som ett trevligare alternativ till en plötslig larmsignal.",
    ],
    cautions: [
      "Hur väl en ljusväckning fungerar är individuellt – vissa vill ha kvar ett ljudlarm också.",
      "Placera lampan så att ljuset når dig, annars märks soluppgången sämre.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const mantaSleepMaskProduct: Product = {
  slug: "manta-sovmask",
  title: "Manta Sleep Mask – 100% mörkläggande sovmask",
  category: "halsa",
  asin: "B07PRG2CQY",
  brand: "Manta Sleep",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "100% mörkläggande",
    "Justerbar passform",
    "Inget tryck mot ögonen",
  ],
  image: "/products/manta-sleep-mask/sovmask-thumbnail.webp",
  imageAlt: "Manta Sleep Mask mörkläggande sovmask",
  images: [
    {
      src: "/products/manta-sleep-mask/sovmask-thumbnail.webp",
      alt: "Manta Sleep Mask mörkläggande sovmask",
      label: "Sleep Mask",
    },
    {
      src: "/products/manta-sleep-mask/sovmask-1.webp",
      alt: "Manta Sleep Mask med formade ögonkåpor",
      label: "Formade kåpor",
    },
    {
      src: "/products/manta-sleep-mask/sovmask-2.webp",
      alt: "Manta Sleep Mask med justerbar rem",
      label: "Justerbar",
    },
    {
      src: "/products/manta-sleep-mask/sovmask-3.webp",
      alt: "Detaljbild av Manta Sleep Mask sovmask",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4uYflm2",
  pageHref: "/halsa/sovmask",
  summary: "En justerbar sovmask med formade ögonkåpor som blockar ljus helt utan att trycka mot ögonen. För dig som vill ha riktigt mörkt när du sover, hemma eller på resa.",
  evaluation: {
    headline: "Mörkläggande sovmask utan tryck mot ögonen",
    intro: "Elin går igenom Manta Sleep Mask: en justerbar sovmask med formade ögonkåpor som blockar ljus helt. Kåporna gör att masken kan ligga mörkt utan att trycka mot ögonen, vilket många tycker gör den behaglig att ha på under natten.",
    verdict: "Genomtänkt sovmask för dig som vill ha helt mörkt utan tryck mot ögonen.",
    checks: [],
  },
  specSectionEyebrow: "Sömn & avkoppling",
  specSectionTitle: "Manta Sleep Mask",
  specs: [
    {
      label: "Ljus",
      caption: "Mörkläggning",
      value: "100% mörkläggande",
    },
    {
      label: "Passform",
      caption: "Justering",
      value: "Justerbar rem och ögonkåpor",
    },
    {
      label: "Komfort",
      caption: "Känsla",
      value: "Inget tryck mot ögonen",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4uYflm2",
    ratingSummary: "Amazon visar 4,4 av 5 från 14443 omdömen.",
    highlights: [
      "Köpare lyfter att masken blockar ljus riktigt bra.",
      "Många uppskattar att kåporna inte trycker mot ögonen.",
      "Den justerbara passformen beskrivs som bekväm för olika ansikten.",
    ],
    cautions: [
      "Passformen är personlig – det kan ta någon natt att ställa in remmen rätt.",
      "Formade kåpor känns ovant i början för den som är van vid platt mask.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const loopQuietProduct: Product = {
  slug: "loop-oronproppar",
  title: "Loop Quiet 2 öronproppar för sömn",
  category: "halsa",
  asin: "B0D3V61JC8",
  brand: "Loop",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Återanvändbara",
    "Dämpar ljud",
    "För sömn, fokus & resor",
  ],
  image: "/products/loop-quiet/oronproppar-thumbnail.webp",
  imageAlt: "Loop Quiet 2 öronproppar för sömn",
  images: [
    {
      src: "/products/loop-quiet/oronproppar-thumbnail.webp",
      alt: "Loop Quiet 2 öronproppar för sömn",
      label: "Loop Quiet 2",
    },
    {
      src: "/products/loop-quiet/oronproppar-1.webp",
      alt: "Loop Quiet 2 öronproppar med olika öronkuddar",
      label: "Flera storlekar",
    },
    {
      src: "/products/loop-quiet/oronproppar-2.webp",
      alt: "Loop Quiet 2 öronproppar i förvaringsfodral",
      label: "Fodral",
    },
    {
      src: "/products/loop-quiet/oronproppar-3.webp",
      alt: "Detaljbild av Loop Quiet 2 öronproppar",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4ezhz6A",
  pageHref: "/halsa/oronproppar",
  summary: "Återanvändbara öronproppar som dämpar ljud för lugnare sömn, fokus och resor. Diskreta att ha i öronen och levereras med flera storlekar på öronkuddarna för en bekväm passform.",
  evaluation: {
    headline: "Dämpar ljud för lugnare sömn, fokus och resor",
    intro: "Elin går igenom Loop Quiet 2: återanvändbara öronproppar som dämpar ljud runt omkring dig. Tanken är en lugnare ljudmiljö när du vill sova, fokusera eller resa, med flera storlekar på öronkuddarna så att du kan hitta en passform som sitter bekvämt.",
    verdict: "Smidiga, återanvändbara öronproppar för en lugnare ljudmiljö.",
    checks: [],
  },
  specSectionEyebrow: "Sömn & avkoppling",
  specSectionTitle: "Loop Quiet 2 öronproppar",
  specs: [
    {
      label: "Användning",
      caption: "Tillfälle",
      value: "Sömn, fokus och resor",
    },
    {
      label: "Passform",
      caption: "Storlekar",
      value: "Flera öronkuddar i kartongen",
    },
    {
      label: "Typ",
      caption: "Material",
      value: "Återanvändbara, mjuka proppar",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4ezhz6A",
    ratingSummary: "Amazon visar 4,1 av 5 från 28787 omdömen.",
    highlights: [
      "Köpare uppskattar att propparna dämpar ljud för en lugnare miljö.",
      "Många tycker de sitter diskret och bekvämt även under sömn.",
      "De olika storlekarna gör det lättare att hitta rätt passform.",
    ],
    cautions: [
      "Passform och upplevd dämpning varierar mellan olika öron – prova storlekarna.",
      "De tar inte bort allt ljud, utan dämpar det till en lugnare nivå.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const soundcoreMotion300Product: Product = {
  slug: "soundcore-hogtalare",
  title: "soundcore Motion 300 bluetooth-högtalare",
  category: "halsa",
  asin: "B0CGDL42CT",
  brand: "soundcore (Anker)",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Fylligt ljud",
    "Lång batteritid",
    "Portabel",
  ],
  image: "/products/soundcore-motion300/hogtalare-thumbnail.webp",
  imageAlt: "soundcore Motion 300 bluetooth-högtalare",
  images: [
    {
      src: "/products/soundcore-motion300/hogtalare-thumbnail.webp",
      alt: "soundcore Motion 300 bluetooth-högtalare",
      label: "Motion 300",
    },
    {
      src: "/products/soundcore-motion300/hogtalare-1.webp",
      alt: "soundcore Motion 300 portabel högtalare med fylligt ljud",
      label: "Fylligt ljud",
    },
    {
      src: "/products/soundcore-motion300/hogtalare-2.webp",
      alt: "soundcore Motion 300 design och knappar",
      label: "Design",
    },
    {
      src: "/products/soundcore-motion300/hogtalare-3.webp",
      alt: "Detaljbild av soundcore Motion 300 bluetooth-högtalare",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4aYMBCD",
  pageHref: "/halsa/bluetooth-hogtalare",
  summary: "En portabel bluetooth-högtalare med fylligt ljud och lång batteritid – lika hemma i köket som med ut i trädgården. Smidig att ta med och enkel att para ihop med mobilen.",
  evaluation: {
    headline: "Portabelt ljud för hemma och utomhus",
    intro: "Elin går igenom soundcore Motion 300: en portabel bluetooth-högtalare som vill ge fylligt ljud och lång batteritid. Den är gjord för att följa med – från soffan på morgonen till altanen på kvällen – och paras enkelt ihop med mobilen.",
    verdict: "Smidig portabel högtalare med fylligt ljud och lång speltid för både hemma och utomhus.",
    checks: [],
  },
  specSectionEyebrow: "Smart hem & livsstil",
  specSectionTitle: "soundcore Motion 300",
  specs: [
    {
      label: "Typ",
      caption: "Format",
      value: "Portabel bluetooth-högtalare",
    },
    {
      label: "Ljud",
      caption: "Profil",
      value: "Fylligt ljud med tydlig bas",
    },
    {
      label: "Batteri",
      caption: "Speltid",
      value: "Lång batteritid för hela dagen",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4aYMBCD",
    ratingSummary: "Amazon visar 4,6 av 5 från 3475 omdömen.",
    highlights: [
      "Köpare lyfter fram ett fylligt ljud som känns större än storleken.",
      "Lång batteritid som räcker länge mellan laddningarna.",
      "Smidig och portabel att ta med mellan rummen och ut.",
    ],
    cautions: [
      "Ljudbilden upplevs olika beroende på rum och placering – testa dig fram.",
      "Som med all bluetooth varierar räckvidden med väggar och hinder.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const gritinReadingLightProduct: Product = {
  slug: "gritin-laslampa",
  title: "Gritin 19 LED uppladdningsbar läslampa / klämlampa",
  category: "halsa",
  asin: "B0CBPL4RKH",
  brand: "Gritin",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Uppladdningsbar",
    "Flera ljuslägen",
    "Klämbar",
  ],
  image: "/products/gritin-reading-light/laslampa-thumbnail.webp",
  imageAlt: "Gritin 19 LED uppladdningsbar läslampa / klämlampa",
  images: [
    {
      src: "/products/gritin-reading-light/laslampa-thumbnail.webp",
      alt: "Gritin 19 LED uppladdningsbar läslampa / klämlampa",
      label: "Gritin klämlampa",
    },
    {
      src: "/products/gritin-reading-light/laslampa-1.webp",
      alt: "Gritin klämlampa med flera ljuslägen för läsning",
      label: "Flera ljuslägen",
    },
    {
      src: "/products/gritin-reading-light/laslampa-2.webp",
      alt: "Gritin läslampa klämd fast vid en bok",
      label: "Klämbar",
    },
    {
      src: "/products/gritin-reading-light/laslampa-3.webp",
      alt: "Detaljbild av Gritin uppladdningsbar läslampa",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4f6zwtq",
  pageHref: "/halsa/laslampa",
  summary: "En uppladdningsbar klämlampa med flera ljuslägen, gjord för att läsa i sängen utan att störa den som sover bredvid. Lätt att klämma fast på boken eller sänggaveln.",
  evaluation: {
    headline: "Klämlampa för läsning i sängen",
    intro: "Elin går igenom Gritin 19 LED: en uppladdningsbar klämlampa med flera ljuslägen, tänkt för att läsa i sängen utan att tända taklampan. Den kläms enkelt fast på boken eller sänggaveln och riktas dit du vill ha ljuset.",
    verdict: "Smidig uppladdningsbar klämlampa med flera ljuslägen för mysig läsning i sängen.",
    checks: [],
  },
  specSectionEyebrow: "Smart hem & livsstil",
  specSectionTitle: "Gritin 19 LED läslampa",
  specs: [
    {
      label: "Typ",
      caption: "Format",
      value: "Klämbar läslampa, 19 LED",
    },
    {
      label: "Ljus",
      caption: "Lägen",
      value: "Flera ljuslägen och nivåer",
    },
    {
      label: "Ström",
      caption: "Drift",
      value: "Uppladdningsbar via USB",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4f6zwtq",
    ratingSummary: "Amazon visar 4,8 av 5 från 17872 omdömen.",
    highlights: [
      "Köpare uppskattar att kunna läsa i sängen utan att störa partnern.",
      "Flera ljuslägen gör att man hittar en behaglig ljusstyrka.",
      "Smidig klämma som sitter fast på både bok och sänggavel.",
    ],
    cautions: [
      "Klämman passar bäst på tunnare kanter – mät gärna sänggaveln först.",
      "Som med all uppladdningsbar belysning behöver den laddas med jämna mellanrum.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const goveeNeonRopeProduct: Product = {
  slug: "govee-led-list",
  title: "Govee Neon Rope Light 2 RGBIC (5 m)",
  category: "halsa",
  asin: "B0CQRBC3Y2",
  brand: "Govee",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Böjbar neon",
    "RGBIC-färger",
    "Appstyrning",
  ],
  image: "/products/govee-neon-rope/ledlist-thumbnail.webp",
  imageAlt: "Govee Neon Rope Light 2 RGBIC, 5 m",
  images: [
    {
      src: "/products/govee-neon-rope/ledlist-thumbnail.webp",
      alt: "Govee Neon Rope Light 2 RGBIC, 5 m",
      label: "Neon LED-list",
    },
    {
      src: "/products/govee-neon-rope/ledlist-1.webp",
      alt: "Govee Neon Rope Light 2 böjbar neon LED-list i färg",
      label: "Böjbar neon",
    },
    {
      src: "/products/govee-neon-rope/ledlist-2.webp",
      alt: "Govee Neon Rope Light 2 med RGBIC-färger för stämningsbelysning",
      label: "RGBIC-färger",
    },
    {
      src: "/products/govee-neon-rope/ledlist-3.webp",
      alt: "Detaljbild av Govee Neon Rope Light 2 med appstyrning",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4uXCuVW",
  pageHref: "/halsa/led-list",
  summary: "En böjbar neon LED-list med RGBIC-färger och appstyrning som ger mjuk stämningsbelysning och en mysig kvällskänsla. Forma den fritt längs väggar, hyllor eller bakom tv:n.",
  evaluation: {
    headline: "Böjbar neon för mysig stämningsbelysning",
    intro: "Elin går igenom Govee Neon Rope Light 2: en böjbar neon LED-list med RGBIC-färger och appstyrning. Den går att forma fritt och skapar en mjuk, färgstark stämningsbelysning som passar fint för en mysig kvällskänsla i hemmet.",
    verdict: "Flexibel neon LED-list för stämningsbelysning och mysig kvällskänsla.",
    checks: [],
  },
  specSectionEyebrow: "Smart hem & livsstil",
  specSectionTitle: "Govee Neon Rope Light 2 RGBIC",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Böjbar neon LED-list, 5 m",
    },
    {
      label: "Ljus",
      caption: "Färger",
      value: "RGBIC, flera färger samtidigt",
    },
    {
      label: "Styrning",
      caption: "Smart",
      value: "Appstyrning via Govee-appen",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4uXCuVW",
    ratingSummary: "Amazon visar 4,6 av 5 från 550 omdömen.",
    highlights: [
      "Köpare uppskattar den mjuka neonkänslan och de färgstarka RGBIC-färgerna.",
      "Lätt att forma längs väggar och hyllor för egna mönster.",
      "Appstyrningen beskrivs som enkel för att byta färg och stämning.",
    ],
    cautions: [
      "Forma listen försiktigt i mjuka kurvor så att neon-höljet inte tar skada.",
      "Planera dragningen i förväg eftersom fästet sitter bäst på rena, släta ytor.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const eufyRobovacProduct: Product = {
  slug: "eufy-robotdammsugare",
  title: "eufy C10 robotdammsugare",
  category: "halsa",
  asin: "B0DRFRJPWY",
  brand: "eufy",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Appstyrning",
    "Automatisk golvstädning",
    "Prisvärd",
  ],
  image: "/products/eufy-robovac/robot-thumbnail.webp",
  imageAlt: "eufy C10 robotdammsugare",
  images: [
    {
      src: "/products/eufy-robovac/robot-thumbnail.webp",
      alt: "eufy C10 robotdammsugare",
      label: "eufy C10",
    },
    {
      src: "/products/eufy-robovac/robot-1.webp",
      alt: "eufy C10 robotdammsugare som städar golvet automatiskt",
      label: "Automatisk städning",
    },
    {
      src: "/products/eufy-robovac/robot-2.webp",
      alt: "eufy C10 robotdammsugare med appstyrning",
      label: "Appstyrning",
    },
    {
      src: "/products/eufy-robovac/robot-3.webp",
      alt: "Detaljbild av eufy C10 robotdammsugare",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4oTgpq4",
  pageHref: "/halsa/robotdammsugare",
  summary: "En prisvärd robotdammsugare som sköter golvstädningen automatiskt med appstyrning. Du startar och schemalägger städningen direkt i appen och låter roboten ta hand om vardagsdammet.",
  evaluation: {
    headline: "Prisvärd robotdammsugare med appstyrning",
    intro: "Elin går igenom eufy C10: en robotdammsugare i budgetklassen som sköter golvstädningen automatiskt och styrs via appen. Du kan schemalägga städningen och låta roboten hålla golvet rent i vardagen, utan att du själv behöver dra fram dammsugaren.",
    verdict: "Prisvärd robotdammsugare som sköter golvstädningen automatiskt med appstyrning.",
    checks: [
      {
        label: "Problemet den löser",
        text: "Tar hand om vardagsdammet mellan de större städpassen så att golven inte kräver lika mycket manuell dammsugning varje dag.",
      },
      {
        label: "Varför Elin fastnade",
        text: "Den kombinerar appstyrning, schemaläggning och ett mer tillgängligt pris, vilket gör den intressant för den som vill prova robotdammsugare utan premiumkostnad.",
      },
      {
        label: "Det vi inte vill överdriva",
        text: "Budgetrobotar är bäst i enklare hem. Höga trösklar, sladdar och små behållare kräver fortfarande att du förbereder ytan.",
      },
    ],
  },
  specSectionEyebrow: "Smart hem & livsstil",
  specSectionTitle: "eufy C10 robotdammsugare",
  specs: [
    {
      label: "Typ",
      caption: "Produkt",
      value: "Robotdammsugare",
    },
    {
      label: "Styrning",
      caption: "Smart",
      value: "Appstyrning och schemaläggning",
    },
    {
      label: "Användning",
      caption: "Golv",
      value: "Automatisk golvstädning",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4oTgpq4",
    ratingSummary: "Amazon visar 4,1 av 5 från 421 omdömen.",
    highlights: [
      "Köpare uppskattar att roboten sköter golvstädningen automatiskt.",
      "Appstyrningen gör det enkelt att schemalägga och starta städningen.",
      "Beskrivs som prisvärd för dig som vill prova en robotdammsugare.",
    ],
    cautions: [
      "En robotdammsugare i budgetklassen klarar inte alltid riktigt höga trösklar och trassliga sladdar.",
      "Behållaren är liten och behöver tömmas regelbundet i större hem.",
    ],
  },
  ugcVideos: [],
  uses: [
    "Schemalagd snabbkörning när du är på jobbet eller ute en stund.",
    "Daglig uppfräschning i hall, kök och vardagsrum där damm syns fort.",
    "Som första robotdammsugare i en mindre lägenhet eller på ett öppet våningsplan.",
    "För att minska mängden vardagsdammsugning, inte ersätta all djuprengöring.",
  ],
  peopleLike: [
    "Köpare uppskattar att golvstädningen sker automatiskt.",
    "Appstyrningen beskrivs som praktisk för start och schema.",
    "Flera ser den som prisvärd för att testa robotdammsugare.",
  ],
  honestCheck: [
    "Plocka undan sladdar och småsaker innan körning så att roboten inte fastnar.",
    "Räkna med att tömma behållaren ofta i större hem eller där det samlas mycket damm.",
    "Höga trösklar kan fortfarande behöva manuell hjälp.",
  ],
  comments: [],
};

export const oralBIo5Product: Product = {
  slug: "oralb-tandborste",
  title: "Oral-B iO 5S eltandborste",
  category: "halsa",
  asin: "B0B5V7RNX3",
  brand: "Oral-B",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Rund borste",
    "Tryckvakt",
    "Magnetteknik",
  ],
  image: "/products/oralb-io5/tandborste-thumbnail.webp",
  imageAlt: "Oral-B iO 5S eltandborste",
  images: [
    {
      src: "/products/oralb-io5/tandborste-thumbnail.webp",
      alt: "Oral-B iO 5S eltandborste",
      label: "Oral-B iO 5S",
    },
    {
      src: "/products/oralb-io5/tandborste-1.webp",
      alt: "Oral-B iO 5S med rund borste och magnetteknik",
      label: "Rund borste",
    },
    {
      src: "/products/oralb-io5/tandborste-2.webp",
      alt: "Oral-B iO 5S med tryckvakt som visar tryck",
      label: "Tryckvakt",
    },
    {
      src: "/products/oralb-io5/tandborste-3.webp",
      alt: "Detaljbild av Oral-B iO 5S eltandborste",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4gIRpQf",
  pageHref: "/halsa/eltandborste",
  summary: "En elektrisk tandborste med rund borste och tryckvakt som hjälper dig att borsta lagom hårt för en skön, ren känsla i munnen. Magnetteknik och flera borstlägen i en smidig vardagsmodell.",
  evaluation: {
    headline: "Elektrisk tandborste med rund borste och tryckvakt",
    intro: "Elin går igenom Oral-B iO 5S: en eltandborste med rund borste och magnetteknik som tillsammans med tryckvakten hjälper dig att hitta lagom borsttryck. En vardagsmodell som många väljer för den sköna, rena känslan i munnen.",
    verdict: "Smidig eltandborste med rund borste och tryckvakt för en skön, ren känsla.",
    checks: [
      {
        label: "Problemet den löser",
        text: "Gör den dagliga borstningen mer konsekvent med rund borste, tryckvakt och flera lägen i stället för att du ska gissa hur hårt du borstar.",
      },
      {
        label: "Varför Elin fastnade",
        text: "Tryckvakten är den tydligaste värdepoängen: den hjälper dig att hålla en lugnare hand och gör modellen mer lättbegriplig än en vanlig eltandborste utan feedback.",
      },
      {
        label: "Det vi inte vill överdriva",
        text: "Det är fortfarande en tandborste som kräver rutin, rätt borsthuvud och byte av borsthuvuden över tid. Den gör inte jobbet åt dig.",
      },
    ],
  },
  specSectionEyebrow: "Smart hem & livsstil",
  specSectionTitle: "Oral-B iO 5S",
  specs: [
    {
      label: "Typ",
      caption: "Format",
      value: "Elektrisk tandborste, rund borste",
    },
    {
      label: "Funktion",
      caption: "Tryck",
      value: "Tryckvakt som varnar vid för hårt tryck",
    },
    {
      label: "Teknik",
      caption: "Rörelse",
      value: "Magnetteknik med flera borstlägen",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4gIRpQf",
    ratingSummary: "Amazon visar 4,6 av 5 från 401 omdömen.",
    highlights: [
      "Köpare beskriver en skön, ren känsla i munnen efter borstning.",
      "Tryckvakten uppskattas för att hjälpa till att borsta lagom hårt.",
      "Den runda borsten upplevs som lätt att föra runt tänderna.",
    ],
    cautions: [
      "Borsthuvuden behöver bytas med jämna mellanrum, vilket är en löpande kostnad.",
      "Den som är van vid en vanlig tandborste kan behöva några dagar att vänja sig vid känslan.",
    ],
  },
  ugcVideos: [],
  uses: [
    "Morgon- och kvällsborstning när du vill ha samma rena känsla varje gång.",
    "När du brukar trycka hårt med vanlig tandborste och vill ha tydligare feedback.",
    "För att växla mellan borstlägen beroende på hur mjuk eller intensiv känsla du vill ha.",
    "Som uppgradering från en enklare eltandborste utan tryckvakt.",
  ],
  peopleLike: [
    "Många beskriver munnen som ren och fräsch efter borstning.",
    "Tryckvakten lyfts som ett stöd för att inte borsta för hårt.",
    "Den runda borsten upplevs enkel att föra runt tänderna.",
  ],
  honestCheck: [
    "Borsthuvuden behöver bytas regelbundet och blir en löpande kostnad.",
    "Känslan från rund borste och vibrationer kan ta några dagar att vänja sig vid.",
    "Den ersätter inte en jämn borstningsrutin; den gör rutinen lättare att hålla.",
  ],
  comments: [],
};

export const stanleyClassicProduct: Product = {
  slug: "stanley-termos",
  title: "Stanley Classic termos 1,0 L",
  category: "halsa",
  asin: "B000T21JFE",
  brand: "Stanley",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Rostfritt stål",
    "Håller länge varmt",
    "Robust",
  ],
  image: "/products/stanley-termos/termos-thumbnail.webp",
  imageAlt: "Stanley Classic termos 1,0 L",
  images: [
    {
      src: "/products/stanley-termos/termos-thumbnail.webp",
      alt: "Stanley Classic termos 1,0 L",
      label: "Stanley Classic",
    },
    {
      src: "/products/stanley-termos/termos-1.webp",
      alt: "Stanley Classic termos i robust rostfritt stål",
      label: "Rostfritt stål",
    },
    {
      src: "/products/stanley-termos/termos-2.webp",
      alt: "Stanley Classic termos med kopp i locket",
      label: "Lock som kopp",
    },
    {
      src: "/products/stanley-termos/termos-3.webp",
      alt: "Detaljbild av Stanley Classic termos 1,0 L",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4eNwGs7",
  pageHref: "/halsa/termos",
  summary: "En robust rostfri termos på 1,0 liter som håller dryck varm eller kall i timmar. Klassisk, tålig design som passar lika bra på utflykten som på jobbet.",
  evaluation: {
    headline: "Robust rostfri termos som håller länge varmt eller kallt",
    intro: "Elin går igenom Stanley Classic 1,0 L: en klassisk termos i rostfritt stål som håller dryck varm eller kall i timmar. En tålig vardagsföljeslagare som många väljer för utflykten, jobbet och långa dagar ute.",
    verdict: "Tålig rostfri termos som håller dryck varm eller kall i timmar.",
    checks: [],
  },
  specSectionEyebrow: "Smart hem & livsstil",
  specSectionTitle: "Stanley Classic 1,0 L",
  specs: [
    {
      label: "Volym",
      caption: "Storlek",
      value: "1,0 liter",
    },
    {
      label: "Material",
      caption: "Konstruktion",
      value: "Robust rostfritt stål",
    },
    {
      label: "Funktion",
      caption: "Värmehållning",
      value: "Håller varmt eller kallt i timmar",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4eNwGs7",
    ratingSummary: "Amazon visar 4,6 av 5 från 21679 omdömen.",
    highlights: [
      "Köpare beskriver att drycken håller sig varm eller kall i många timmar.",
      "Den robusta konstruktionen uppskattas för att tåla en tuff vardag.",
      "Många använder den till utflykt, jobb och långa dagar utomhus.",
    ],
    cautions: [
      "Den är relativt stor och tung när den är fylld, vilket inte passar alla.",
      "Locket och korken behöver rengöras noga för att hålla sig fräscha över tid.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const twsoulWaterBottleProduct: Product = {
  slug: "twsoul-vattenflaska",
  title: "TWSOUL motiverande vattenflaska 2 L (tidsmarkerad)",
  category: "halsa",
  asin: "B0BVB3GDHG",
  brand: "TWSOUL",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Tidsmarkerad",
    "2 liter",
    "Påminner att dricka",
  ],
  image: "/products/twsoul-bottle/bottle-thumbnail.webp",
  imageAlt: "TWSOUL motiverande vattenflaska 2 L, tidsmarkerad",
  images: [
    {
      src: "/products/twsoul-bottle/bottle-thumbnail.webp",
      alt: "TWSOUL motiverande vattenflaska 2 L, tidsmarkerad",
      label: "TWSOUL 2 L",
    },
    {
      src: "/products/twsoul-bottle/bottle-1.webp",
      alt: "TWSOUL vattenflaska med tidsmarkeringar längs sidan",
      label: "Tidsmarkering",
    },
    {
      src: "/products/twsoul-bottle/bottle-2.webp",
      alt: "TWSOUL vattenflaska 2 liter med lock och rem",
      label: "Lock och rem",
    },
    {
      src: "/products/twsoul-bottle/bottle-3.webp",
      alt: "Detaljbild av TWSOUL motiverande vattenflaska",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/3QNcm1P",
  pageHref: "/halsa/motiverande-vattenflaska",
  summary: "En tidsmarkerad vattenflaska på 2 liter med markeringar längs sidan som påminner dig att dricka jämnt över dagen. En enkel hjälp för dig som vill hålla koll på vätskan.",
  evaluation: {
    headline: "Tidsmarkerad vattenflaska som påminner dig att dricka jämnt",
    intro: "Elin går igenom TWSOUL motiverande vattenflaska 2 L: tidsmarkeringar längs sidan visar hur mycket du druckit under dagen och påminner dig att fylla på jämnt. En enkel hjälp för dig som lätt glömmer att dricka.",
    verdict: "Enkel tidsmarkerad flaska som påminner dig att dricka jämnt över dagen.",
    checks: [],
  },
  specSectionEyebrow: "Smart hem & livsstil",
  specSectionTitle: "TWSOUL motiverande vattenflaska",
  specs: [
    {
      label: "Volym",
      caption: "Storlek",
      value: "2 liter",
    },
    {
      label: "Funktion",
      caption: "Markering",
      value: "Tidsmarkeringar längs sidan",
    },
    {
      label: "Syfte",
      caption: "Påminnelse",
      value: "Hjälper dig dricka jämnt över dagen",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/3QNcm1P",
    ratingSummary: "Amazon visar 4,2 av 5 från 81 omdömen, alltså ännu ganska få omdömen att luta sig mot.",
    highlights: [
      "Köpare beskriver att tidsmarkeringarna gör det lättare att komma ihåg att dricka.",
      "Den stora volymen uppskattas för att räcka en stor del av dagen.",
      "Flera tycker att flaskan är en enkel knuff för att dricka jämnare.",
    ],
    cautions: [
      "Antalet omdömen är ännu få, så helhetsbilden är inte lika säker som för storsäljare.",
      "2 liter blir relativt stort och tungt att bära med sig fullt.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const goveeHygrometerProduct: Product = {
  slug: "govee-hygrometer",
  title: "Govee WiFi termometer/hygrometer (2-pack)",
  category: "halsa",
  asin: "B0CS3967DX",
  brand: "Govee",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "WiFi",
    "Temp & luftfuktighet",
    "Larm i appen",
  ],
  image: "/products/govee-hygrometer/hygrometer-thumbnail.webp",
  imageAlt: "Govee WiFi termometer/hygrometer, 2-pack",
  images: [
    {
      src: "/products/govee-hygrometer/hygrometer-thumbnail.webp",
      alt: "Govee WiFi termometer/hygrometer, 2-pack",
      label: "Govee 2-pack",
    },
    {
      src: "/products/govee-hygrometer/hygrometer-1.webp",
      alt: "Govee hygrometer som visar temperatur och luftfuktighet",
      label: "Temp & fukt",
    },
    {
      src: "/products/govee-hygrometer/hygrometer-2.webp",
      alt: "Govee hygrometer kopplad till app med larm",
      label: "App och larm",
    },
    {
      src: "/products/govee-hygrometer/hygrometer-3.webp",
      alt: "Detaljbild av Govee WiFi termometer/hygrometer",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4w4CLak",
  pageHref: "/halsa/hygrometer",
  summary: "En smart WiFi-termometer och hygrometer i 2-pack som mäter temperatur och luftfuktighet och kan larma i appen. Smidig för dig som vill hålla koll på inomhusklimatet på flera platser.",
  evaluation: {
    headline: "Smart termometer och hygrometer med larm i appen",
    intro: "Elin går igenom Govee WiFi termometer/hygrometer i 2-pack: den mäter temperatur och luftfuktighet och kan larma i appen om värdena går utanför det du ställt in. Smidigt för dig som vill hålla koll på inomhusklimatet på flera platser.",
    verdict: "Smidig smart hygrometer i 2-pack som mäter och larmar i appen.",
    checks: [],
  },
  specSectionEyebrow: "Smart hem & livsstil",
  specSectionTitle: "Govee WiFi termometer/hygrometer",
  specs: [
    {
      label: "Mäter",
      caption: "Funktion",
      value: "Temperatur och luftfuktighet",
    },
    {
      label: "Anslutning",
      caption: "Smart",
      value: "WiFi med app och larm",
    },
    {
      label: "Antal",
      caption: "Förpackning",
      value: "2-pack för flera rum",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4w4CLak",
    ratingSummary: "Amazon visar ett gott snittbetyg från många köpare.",
    highlights: [
      "Köpare uppskattar att kunna följa temperatur och luftfuktighet direkt i appen.",
      "Larmfunktionen lyfts fram som praktisk för att fånga upp värden i tid.",
      "2-packet ses som smidigt för att hålla koll på flera rum samtidigt.",
    ],
    cautions: [
      "Funktioner som app och larm bygger på WiFi och en uppkoppling som fungerar.",
      "Sensorer av den här typen behöver batteri och kan behöva kalibreras för bästa noggrannhet.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const essieNailStrengthenerProduct: Product = {
  slug: "essie-nagelhardare",
  title: "essie Hard To Resist stärkande nagellack (15 ml)",
  category: "skonhet",
  asin: "B0BMGLVF6Z",
  brand: "essie",
  priceTier: "mellan",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Stärkande baslack",
    "För sköra naglar",
    "Slätare yta",
  ],
  image: "/products/essie-strengthener/essie-thumbnail.webp",
  imageAlt: "essie Hard To Resist stärkande nagellack, 15 ml",
  images: [
    {
      src: "/products/essie-strengthener/essie-thumbnail.webp",
      alt: "essie Hard To Resist stärkande nagellack, 15 ml",
      label: "Hard To Resist",
    },
    {
      src: "/products/essie-strengthener/essie-1.webp",
      alt: "essie Hard To Resist stärkande baslack för sköra naglar",
      label: "Stärkande",
    },
    {
      src: "/products/essie-strengthener/essie-2.webp",
      alt: "essie Hard To Resist textur och konsistens",
      label: "Lätt textur",
    },
    {
      src: "/products/essie-strengthener/essie-3.webp",
      alt: "Detaljbild av essie Hard To Resist nagellack",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4gtt01d",
  pageHref: "/skonhet/nagelhardare",
  summary: "Ett stärkande baslack för sköra, flisande naglar som hjälper naglarna att kännas hårdare och se slätare ut med tiden. Används som bas under färg eller ensamt för en naturlig finish.",
  evaluation: {
    headline: "Stärkande baslack för sköra naglar",
    intro: "Elin går igenom essie Hard To Resist: ett stärkande nagellack tänkt för sköra och flisande naglar. Det läggs som baslack och hjälper naglarna att kännas hårdare och se slätare ut med tiden – en kosmetisk effekt för dig som vill ge svaga naglar lite extra stöd.",
    verdict: "Prisvärt stärkande baslack för dig med sköra, flisande naglar.",
    checks: [],
  },
  specSectionEyebrow: "Naglar",
  specSectionTitle: "essie Hard To Resist",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Stärkande baslack, 15 ml",
    },
    {
      label: "För",
      caption: "Naglar",
      value: "Sköra, flisande naglar",
    },
    {
      label: "Användning",
      caption: "Steg",
      value: "Som bas eller ensamt",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4gtt01d",
    ratingSummary: "Amazon visar 4,4 av 5 från 868 omdömen.",
    highlights: [
      "Köpare upplever att naglarna känns hårdare och mindre sköra med tiden.",
      "Lätt textur som de flesta tycker är enkel att applicera jämnt.",
      "Uppskattas som bas under färg för en slätare och jämnare yta.",
    ],
    cautions: [
      "Effekten kommer gradvis – ge det några veckors regelbunden användning.",
      "Resultatet varierar mellan olika nagelstyper och rutiner.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const opiRidgeFillerProduct: Product = {
  slug: "opi-ridge-filler",
  title: "OPI Start-To-Finish 3-in-1 utjämnande baslack (15 ml)",
  category: "skonhet",
  asin: "B0013L94NE",
  brand: "OPI",
  priceTier: "mellan",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Fyller räfflor",
    "3-i-1 bas + topp",
    "Slät nagelyta",
  ],
  image: "/products/opi-ridge-filler/ridge-thumbnail.webp",
  imageAlt: "OPI Start-To-Finish 3-in-1 utjämnande baslack, 15 ml",
  images: [
    {
      src: "/products/opi-ridge-filler/ridge-thumbnail.webp",
      alt: "OPI Start-To-Finish 3-in-1 utjämnande baslack, 15 ml",
      label: "Ridge filler",
    },
    {
      src: "/products/opi-ridge-filler/ridge-1.webp",
      alt: "OPI Start-To-Finish baslack som fyller räfflor på naglarna",
      label: "Fyller räfflor",
    },
    {
      src: "/products/opi-ridge-filler/ridge-2.webp",
      alt: "OPI Start-To-Finish 3-i-1 bas, topp och stärkande lack",
      label: "3-i-1",
    },
  ],
  amazonUrl: "https://amzn.to/4aVj1xO",
  pageHref: "/skonhet/ridge-filler",
  summary: "Ett utjämnande baslack som fyller räfflor så att nagelytan blir slätare och nagellacket lägger sig jämnare. Fungerar 3-i-1 som bas, topp och stärkande lager.",
  evaluation: {
    headline: "Utjämnande baslack för räfflade naglar",
    intro: "Elin går igenom OPI Start-To-Finish: ett 3-i-1-lack som fyller räfflor i nageln så att ytan blir slätare och lacket lägger sig jämnare. Samma flaska fungerar som bas, topp och stärkande lager, vilket gör manikyren enklare.",
    verdict: "Praktiskt 3-i-1-baslack som jämnar ut räfflade naglar för en slätare yta.",
    checks: [],
  },
  specSectionEyebrow: "Naglar",
  specSectionTitle: "OPI Start-To-Finish 3-in-1",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Baslack, 15 ml",
    },
    {
      label: "Funktion",
      caption: "3-i-1",
      value: "Bas, topp och stärkande",
    },
    {
      label: "Effekt",
      caption: "Yta",
      value: "Fyller räfflor för slätare nagelyta",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4aVj1xO",
    ratingSummary: "Amazon visar 4,5 av 5 från 1 697 omdömen.",
    highlights: [
      "Köpare upplever att räfflor blir mindre synliga och nagelytan slätare.",
      "Uppskattas för att lacket lägger sig jämnare ovanpå basen.",
      "Många gillar att samma flaska fungerar som bas, topp och stärkande lager.",
    ],
    cautions: [
      "Lägg ett tunt lager och låt torka ordentligt för jämnast resultat.",
      "Räfflor jämnas ut optiskt på ytan – det förändrar inte själva nageln.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const cndCuticleOilProduct: Product = {
  slug: "cnd-nagelbandsolja",
  title: "CND SolarOil nagelband- och nagelolja (penna, 2 ml)",
  category: "skonhet",
  asin: "B07P57ZFG8",
  brand: "CND",
  priceTier: "mellan",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Jojoba & E-vitamin",
    "Smidig penna",
    "Mjukar upp nagelband",
  ],
  image: "/products/cnd-solaroil/cnd-thumbnail.webp",
  imageAlt: "CND SolarOil nagelband- och nagelolja, penna 2 ml",
  images: [
    {
      src: "/products/cnd-solaroil/cnd-thumbnail.webp",
      alt: "CND SolarOil nagelband- och nagelolja, penna 2 ml",
      label: "SolarOil",
    },
    {
      src: "/products/cnd-solaroil/cnd-1.webp",
      alt: "CND SolarOil med jojoba och E-vitamin för torra nagelband",
      label: "Jojoba & E-vitamin",
    },
    {
      src: "/products/cnd-solaroil/cnd-2.webp",
      alt: "CND SolarOil penna att ha med sig",
      label: "Smidig penna",
    },
    {
      src: "/products/cnd-solaroil/cnd-3.webp",
      alt: "Detaljbild av CND SolarOil nagelbandsolja",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4wd6pub",
  pageHref: "/skonhet/nagelbandsolja",
  summary: "En vårdande nagelbandsolja med jojoba och E-vitamin som mjukar upp torra nagelband. Den smidiga pennan är lätt att ha med sig och stryka på var som helst.",
  evaluation: {
    headline: "Vårdande olja för torra nagelband",
    intro: "Elin går igenom CND SolarOil: en nagelband- och nagelolja med jojoba och E-vitamin som mjukar upp torra nagelband. Den kommer i en smidig penna som är lätt att ha med sig och stryka på direkt på nagelbanden när du behöver det.",
    verdict: "Smidig penna med jojoba och E-vitamin som mjukar upp torra nagelband.",
    checks: [],
  },
  specSectionEyebrow: "Naglar",
  specSectionTitle: "CND SolarOil",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Penna, 2 ml",
    },
    {
      label: "Innehåll",
      caption: "Vårdande",
      value: "Jojoba + E-vitamin",
    },
    {
      label: "Profil",
      caption: "Naglar",
      value: "Torra nagelband, att ha med sig",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4wd6pub",
    ratingSummary: "Amazon visar 4,6 av 5 från 1 437 omdömen.",
    highlights: [
      "Köpare tycker att torra nagelband känns mjukare med tiden.",
      "Pennan beskrivs som smidig att ha i väskan och stryka på var som helst.",
      "Många uppskattar att en liten mängd räcker långt.",
    ],
    cautions: [
      "Oljan kan kännas lite blank en stund – stryk in den och torka av överskott.",
      "Pennspetsen behöver vridas fram lagom mycket så att det inte kommer för mycket olja.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const glasnagelfilProduct: Product = {
  slug: "glasnagelfil",
  title: "Tweezerman glasnagelfil",
  category: "skonhet",
  asin: "B09MV83X1K",
  brand: "Tweezerman",
  priceTier: "budget",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Sluter nagelkanten",
    "Slät kant",
    "Håller länge",
  ],
  image: "/products/glass-nail-file/fil-thumbnail.webp",
  imageAlt: "Tweezerman glasnagelfil",
  images: [
    {
      src: "/products/glass-nail-file/fil-thumbnail.webp",
      alt: "Tweezerman glasnagelfil",
      label: "Glasnagelfil",
    },
    {
      src: "/products/glass-nail-file/fil-1.webp",
      alt: "Tweezerman glasnagelfil som sluter nagelkanten",
      label: "Sluter kanten",
    },
    {
      src: "/products/glass-nail-file/fil-2.webp",
      alt: "Tweezerman glasnagelfil med slät filyta",
      label: "Slät filyta",
    },
    {
      src: "/products/glass-nail-file/fil-3.webp",
      alt: "Detaljbild av Tweezerman glasnagelfil",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4eLNjnL",
  pageHref: "/skonhet/glasnagelfil",
  summary: "En skonsam glasnagelfil som sluter nagelkanten och ger en slät kant utan att naglarna flisar sig. Glasytan håller länge och är enkel att rengöra.",
  evaluation: {
    headline: "Skonsam fil för en slät nagelkant",
    intro: "Elin går igenom Tweezerman glasnagelfil: en fil i glas som sluter nagelkanten i stället för att riva upp den. Tanken är en jämn, slät kant som gör att naglarna flisar sig mindre, och glasytan är gjord för att hålla länge.",
    verdict: "Skonsam glasnagelfil som ger en slät kant och håller länge.",
    checks: [],
  },
  specSectionEyebrow: "Naglar",
  specSectionTitle: "Tweezerman glasnagelfil",
  specs: [
    {
      label: "Material",
      caption: "Typ",
      value: "Glasfil",
    },
    {
      label: "Filyta",
      caption: "Funktion",
      value: "Sluter nagelkanten, slät kant",
    },
    {
      label: "Hållbarhet",
      caption: "Användning",
      value: "Håller länge, lätt att rengöra",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4eLNjnL",
    ratingSummary: "Amazon visar 4,5 av 5 från 465 omdömen.",
    highlights: [
      "Köpare upplever att naglarna flisar sig mindre med en slät kant.",
      "Glasytan beskrivs som skonsam mot nageln vid filning.",
      "Uppskattas för att hålla länge och vara enkel att rengöra.",
    ],
    cautions: [
      "Glas kan spricka om filen tappas på hårt underlag – förvara den i fodralet.",
      "Fila i en riktning för bästa resultat och en jämn kant.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const essieGelCoutureProduct: Product = {
  slug: "essie-gel-couture-topcoat",
  title: "essie Gel Couture topplack – gel-effekt utan lampa (15 ml)",
  category: "skonhet",
  asin: "B07BBQ6K84",
  brand: "essie",
  priceTier: "mellan",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Gel-liknande glans",
    "Ingen UV-lampa",
    "Längre håll",
  ],
  image: "/products/essie-gel-topcoat/topcoat-thumbnail.webp",
  imageAlt: "essie Gel Couture topplack, 15 ml",
  images: [
    {
      src: "/products/essie-gel-topcoat/topcoat-thumbnail.webp",
      alt: "essie Gel Couture topplack, 15 ml",
      label: "Gel Couture",
    },
    {
      src: "/products/essie-gel-topcoat/topcoat-1.webp",
      alt: "essie Gel Couture topplack med gel-liknande glans",
      label: "Gel-glans",
    },
    {
      src: "/products/essie-gel-topcoat/topcoat-2.webp",
      alt: "essie Gel Couture topplack textur och pensel",
      label: "Pensel",
    },
    {
      src: "/products/essie-gel-topcoat/topcoat-3.webp",
      alt: "Detaljbild av essie Gel Couture topplack",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4vvndMZ",
  pageHref: "/skonhet/gel-topcoat",
  summary: "Ett topplack som ger manikyren en gel-liknande glans och hjälper färgen att hålla längre – helt utan UV-lampa. Läggs som vanligt topplack ovanpå ditt nagellack.",
  evaluation: {
    headline: "Gel-effekt hemma utan lampa",
    intro: "Elin går igenom essie Gel Couture topplack: ett topplack som ger en gel-liknande glans och hjälper manikyren att hålla längre, utan att du behöver en UV-lampa. Det läggs ovanpå ditt vanliga nagellack som ett sista steg.",
    verdict: "Smidigt topplack för dig som vill ha gel-look och längre håll utan lampa.",
    checks: [],
  },
  specSectionEyebrow: "Naglar",
  specSectionTitle: "essie Gel Couture topplack",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Topplack, 15 ml",
    },
    {
      label: "Användning",
      caption: "Steg",
      value: "Läggs ovanpå nagellack, ingen lampa",
    },
    {
      label: "Profil",
      caption: "Naglar",
      value: "Gel-liknande glans, längre håll",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4vvndMZ",
    ratingSummary: "Amazon visar 4,6 av 5 från 1 394 omdömen.",
    highlights: [
      "Köpare uppskattar den blanka, gel-liknande finishen.",
      "Många tycker att manikyren håller längre med detta topplack.",
      "Smidigt att lägga hemma eftersom ingen UV-lampa behövs.",
    ],
    cautions: [
      "Låt varje lager torka ordentligt för bästa håll.",
      "Resultatet varierar beroende på underliggande lack och naglarnas skick.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const beurerMp48LampProduct: Product = {
  slug: "beurer-mp48-nagellampa",
  title: "Beurer MP 48 UV/LED nagellampa",
  category: "skonhet",
  asin: "B075V888FN",
  brand: "Beurer",
  priceTier: "mellan",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "UV/LED-härdning",
    "Flera timerlägen",
    "Manikyr hemma",
  ],
  image: "/products/beurer-mp48/lampa-thumbnail.webp",
  imageAlt: "Beurer MP 48 UV/LED nagellampa för gelnaglar",
  images: [
    {
      src: "/products/beurer-mp48/lampa-thumbnail.webp",
      alt: "Beurer MP 48 UV/LED nagellampa för gelnaglar",
      label: "MP 48",
    },
    {
      src: "/products/beurer-mp48/lampa-1.webp",
      alt: "Beurer MP 48 nagellampa med UV/LED-ljus för gellack",
      label: "UV/LED",
    },
    {
      src: "/products/beurer-mp48/lampa-2.webp",
      alt: "Beurer MP 48 nagellampa med flera timerlägen",
      label: "Timerlägen",
    },
    {
      src: "/products/beurer-mp48/lampa-3.webp",
      alt: "Detaljbild av Beurer MP 48 UV/LED nagellampa",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4vBmrhu",
  pageHref: "/skonhet/nagellampa",
  summary: "En UV/LED-nagellampa som härdar gellack jämnt hemma, med flera timerlägen för en mer salongslik manikyr. Praktisk för dig som vill göra gelnaglar på egen hand.",
  evaluation: {
    headline: "UV/LED-lampa för gelnaglar hemma",
    intro: "Elin går igenom Beurer MP 48: en UV/LED-nagellampa som härdar gellack jämnt hemma. Flera timerlägen gör det enklare att styra härdningen för en mer salongslik manikyr, så att du kan göra gelnaglar på egen hand.",
    verdict: "Smidig UV/LED-lampa för dig som vill härda gellack jämnt och göra gelnaglar hemma.",
    checks: [],
  },
  specSectionEyebrow: "Naglar",
  specSectionTitle: "Beurer MP 48 UV/LED nagellampa",
  specs: [
    {
      label: "Ljuskälla",
      caption: "Typ",
      value: "UV/LED för gellack",
    },
    {
      label: "Timer",
      caption: "Funktion",
      value: "Flera timerlägen",
    },
    {
      label: "Användning",
      caption: "Naglar",
      value: "Härdar gellack hemma",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4vBmrhu",
    ratingSummary: "Amazon visar 4,5 av 5 från 206 omdömen.",
    highlights: [
      "Köpare upplever att gellacket härdar jämnt hemma.",
      "Flera timerlägen uppskattas för att styra härdningen.",
      "Smidig att använda för manikyr på egen hand.",
    ],
    cautions: [
      "Följ härdningstiderna för det gellack du använder för bäst resultat.",
      "Storleken passar olika händer olika bra – kolla måtten innan köp.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const xlashFransserumProduct: Product = {
  slug: "xlash-fransserum",
  title: "Xlash fransserum (5 ml)",
  category: "skonhet",
  asin: "B015R32CXW",
  brand: "Xlash",
  priceTier: "premium",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Kosmetiskt fransserum",
    "Fylligare utseende",
    "Kvällsrutin",
  ],
  image: "/products/xlash-fransserum/xlash-thumbnail.webp",
  imageAlt: "Xlash fransserum, 5 ml",
  images: [
    {
      src: "/products/xlash-fransserum/xlash-thumbnail.webp",
      alt: "Xlash fransserum, 5 ml",
      label: "Xlash fransserum",
    },
    {
      src: "/products/xlash-fransserum/xlash-1.webp",
      alt: "Xlash fransserum förpackning, 5 ml",
      label: "5 ml",
    },
    {
      src: "/products/xlash-fransserum/xlash-2.webp",
      alt: "Xlash fransserum applikator vid lashlinjen",
      label: "Applikator",
    },
    {
      src: "/products/xlash-fransserum/xlash-3.webp",
      alt: "Detaljbild av Xlash fransserum",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4gHJ6UL",
  pageHref: "/skonhet/fransserum",
  summary: "Ett kosmetiskt fransserum som ger fransarna ett fylligare, mer välmående utseende. Appliceras som en tunn linje vid lashlinjen på kvällen och passar in i en enkel kvällsrutin för vårdade, välansade fransar.",
  evaluation: {
    headline: "Kosmetiskt serum för fylligare fransar i utseendet",
    intro: "Elin går igenom Xlash fransserum: ett kosmetiskt serum som du applicerar som en tunn linje vid lashlinjen på kvällen, för fransar som ser fylligare och mer välmående ut. Det här är en utseendeprodukt för vårdade, välansade fransar – inte en medicinsk behandling.",
    verdict: "Kosmetiskt fransserum för dig som vill ge fransarna ett fylligare, mer vårdat utseende i kvällsrutinen.",
    checks: [],
  },
  specSectionEyebrow: "Fransar & bryn",
  specSectionTitle: "Xlash fransserum",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Fransserum, 5 ml",
    },
    {
      label: "Applicering",
      caption: "Användning",
      value: "Tunn linje vid lashlinjen, kväll",
    },
    {
      label: "Profil",
      caption: "Kategori",
      value: "Kosmetiskt serum för fransarnas utseende",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4gHJ6UL",
    ratingSummary: "Amazon visar 4,3 av 5 från 1 305 omdömen.",
    highlights: [
      "Många köpare tycker att fransarna ser fylligare och mer vårdade ut.",
      "Den lilla applikatorn upplevs som enkel att rita en tunn linje vid lashlinjen med.",
      "Uppskattas som ett enkelt steg att lägga till i kvällsrutinen.",
    ],
    cautions: [
      "Resultatet i utseendet varierar mellan olika personer och kräver regelbunden användning.",
      "Applicera bara en tunn linje vid lashlinjen och undvik att få produkt i ögat.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const nanobrowBrynserumProduct: Product = {
  slug: "nanobrow-brynserum",
  title: "Nanobrow brynserum (5 ml)",
  category: "skonhet",
  asin: "B08W8VZ687",
  brand: "Nanobrow",
  priceTier: "premium",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Fylligare uttryck",
    "För glesa bryn",
    "Daglig brynvård",
  ],
  image: "/products/nanobrow-brynserum/nanobrow-thumbnail.webp",
  imageAlt: "Nanobrow brynserum, 5 ml",
  images: [
    {
      src: "/products/nanobrow-brynserum/nanobrow-thumbnail.webp",
      alt: "Nanobrow brynserum, 5 ml",
      label: "Nanobrow",
    },
    {
      src: "/products/nanobrow-brynserum/nanobrow-1.webp",
      alt: "Nanobrow brynserum för ett tätare, mer välvårdat uttryck",
      label: "Tätare uttryck",
    },
    {
      src: "/products/nanobrow-brynserum/nanobrow-2.webp",
      alt: "Nanobrow brynserum med precisionsborste för bryn",
      label: "Precisionsborste",
    },
    {
      src: "/products/nanobrow-brynserum/nanobrow-3.webp",
      alt: "Detaljbild av Nanobrow brynserum, 5 ml",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4pbV1g5",
  pageHref: "/skonhet/brynserum",
  summary: "Ett kosmetiskt brynserum som hjälper ögonbrynen att se tätare och mer välvårdade ut – för dig med glesa eller överplockade bryn. Stryks enkelt på med precisionsborste i kvällsrutinen.",
  evaluation: {
    headline: "Brynserum för ett fylligare uttryck",
    intro: "Elin går igenom Nanobrow brynserum: ett kosmetiskt brynserum som ramar in och vårdar ögonbrynen så att de ser tätare och mer välvårdade ut. Tanken är ett fylligare, mer samlat uttryck för glesa eller överplockade bryn, applicerat med en precisionsborste längs brynlinjen.",
    verdict: "Kosmetiskt brynserum för ett tätare, mer välvårdat uttryck på glesa bryn.",
    checks: [],
  },
  specSectionEyebrow: "Brynvård",
  specSectionTitle: "Nanobrow brynserum",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Brynserum, 5 ml",
    },
    {
      label: "Applicering",
      caption: "Verktyg",
      value: "Precisionsborste för bryn",
    },
    {
      label: "Profil",
      caption: "Passar",
      value: "Glesa eller överplockade bryn",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4pbV1g5",
    ratingSummary: "Amazon visar 4,0 av 5 från 698 omdömen.",
    highlights: [
      "Köpare tycker brynen ser tätare och mer välvårdade ut med tiden.",
      "Precisionsborsten uppskattas för att lägga serumet exakt längs brynlinjen.",
      "Lättanvänt steg som många bygger in i kvällsrutinen.",
    ],
    cautions: [
      "Upplevelsen varierar mellan personer och beror på hur bryn används och sköts.",
      "Det är en kosmetisk brynvård för utseendet – inga löften om resultat ges.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const sorellaBrowLamProduct: Product = {
  slug: "sorella-brynlaminering",
  title: "Sorella brynlamineringskit för hemmabruk",
  category: "skonhet",
  asin: "B0BNQYMRFG",
  brand: "Sorella",
  priceTier: "mellan",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Brynlaminering hemma",
    "Fixerar bryn uppåt",
    "Komplett kit",
  ],
  image: "/products/sorella-brow-lam/sorella-thumbnail.webp",
  imageAlt: "Sorella brynlamineringskit för hemmabruk",
  images: [
    {
      src: "/products/sorella-brow-lam/sorella-thumbnail.webp",
      alt: "Sorella brynlamineringskit för hemmabruk",
      label: "Brynlaminering",
    },
    {
      src: "/products/sorella-brow-lam/sorella-1.webp",
      alt: "Sorella brynlamineringskit med flera steg för hemmabruk",
      label: "Komplett kit",
    },
    {
      src: "/products/sorella-brow-lam/sorella-2.webp",
      alt: "Sorella brynlaminering fixerar bryn uppåt för fylligare form",
      label: "Fixerar uppåt",
    },
    {
      src: "/products/sorella-brow-lam/sorella-3.webp",
      alt: "Detaljbild av Sorella brynlamineringskit",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4g5ZcHF",
  pageHref: "/skonhet/brynlaminering",
  summary: "Ett brynlamineringskit för hemmabruk som hjälper dig fixera brynen uppåt för en fylligare, mer välkammad form. Tanken är att tämja spretiga bryn och hålla dem på plats utan salongsbesök.",
  evaluation: {
    headline: "Brynlaminering hemma för spretiga bryn",
    intro: "Elin går igenom Sorella brynlamineringskit: ett kit för dig som vill testa brynlaminering hemma och få brynen att ligga uppåt och samlat. Idén är att fixera brynhåren i en fylligare, mer välkammad form så att spretiga bryn ser mer ordnade ut. Observera att kitet ännu har få omdömen på Amazon, så bilden är inte helt klar.",
    verdict: "Ett prisvärt kit för dig som vill testa brynlaminering hemma – men få omdömen gör att det är svårt att säga något säkert ännu.",
    checks: [],
  },
  specSectionEyebrow: "Fransar & bryn",
  specSectionTitle: "Sorella brynlamineringskit",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Brynlamineringskit för hemmabruk",
    },
    {
      label: "Användning",
      caption: "Effekt",
      value: "Fixerar bryn uppåt i en fylligare form",
    },
    {
      label: "Profil",
      caption: "Passar",
      value: "Spretiga bryn som behöver mer fäste",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4g5ZcHF",
    ratingSummary: "Amazon visar 4,2 av 5 från 119 omdömen.",
    highlights: [
      "Flera köpare tycker att brynen ligger uppåt och ser fylligare ut efter laminering.",
      "Uppskattas som ett sätt att testa brynlaminering hemma utan salongsbesök.",
      "Beskrivs som ett komplett kit med stegen du behöver i en förpackning.",
    ],
    cautions: [
      "Kitet har ännu ganska få omdömen, så det är svårt att säga något säkert om resultatet.",
      "Brynlaminering hemma kräver noggrannhet med tiderna – följ instruktionen och testa gärna på en liten yta först.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const tweezermanBrowScissorsProduct: Product = {
  slug: "tweezerman-brynsax",
  title: "Tweezerman brynsax med borste (precision)",
  category: "skonhet",
  asin: "B000WHYB1A",
  brand: "Tweezerman",
  priceTier: "mellan",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Precisionsblad",
    "Spoolie-borste",
    "Välvårdad form",
  ],
  image: "/products/tweezerman-brynsax/brynsax-thumbnail.webp",
  imageAlt: "Tweezerman brynsax med borste för ögonbryn",
  images: [
    {
      src: "/products/tweezerman-brynsax/brynsax-thumbnail.webp",
      alt: "Tweezerman brynsax med borste för ögonbryn",
      label: "Brynsax",
    },
    {
      src: "/products/tweezerman-brynsax/brynsax-1.webp",
      alt: "Tweezerman brynsax med spoolie-borste för att kamma brynen",
      label: "Spoolie",
    },
    {
      src: "/products/tweezerman-brynsax/brynsax-2.webp",
      alt: "Tweezerman brynsax med precisionsblad för att trimma bryn",
      label: "Precisionsblad",
    },
    {
      src: "/products/tweezerman-brynsax/brynsax-3.webp",
      alt: "Detaljbild av Tweezerman brynsax med borste",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4xSjfQ3",
  pageHref: "/skonhet/brynsax",
  summary: "En precis brynsax med spoolie-borste för att kamma upp och trimma brynen till en ren, välvårdad form hemma. Smala precisionsblad och en borste i ena änden gör det enkelt att forma bryn steg för steg.",
  evaluation: {
    headline: "Precis brynsax för en välvårdad form",
    intro: "Elin går igenom Tweezerman brynsax: en liten sax med spoolie-borste i ena änden. Du kammar först upp brynen med borsten och trimmar sedan av det som sticker ut med de smala bladen – ett enkelt sätt att forma ögonbrynen hemma utan att ta bort för mycket.",
    verdict: "Smidig precisionssax med borste för dig som vill forma och trimma brynen själv.",
    checks: [],
  },
  specSectionEyebrow: "Fransar & bryn",
  specSectionTitle: "Tweezerman brynsax med borste",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Brynsax med spoolie-borste",
    },
    {
      label: "Blad",
      caption: "Funktion",
      value: "Smala precisionsblad för bryn",
    },
    {
      label: "Användning",
      caption: "Bryn",
      value: "Kamma upp och trimma till önskad form",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4xSjfQ3",
    ratingSummary: "Amazon visar 4,7 av 5 från 6 404 omdömen.",
    highlights: [
      "Köpare uppskattar att borsten och saxen sitter ihop i ett verktyg.",
      "Precisionsbladen gör det lätt att bara trimma av det som sticker ut.",
      "Många tycker att den hjälper dem hålla brynen i en ren form mellan besök.",
    ],
    cautions: [
      "Trimma lite i taget – det är lättare att ta bort mer än att vänta in återväxt.",
      "Kamma upp brynet med borsten först så att du ser den naturliga formen innan du klipper.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const merkurSafetyRazorProduct: Product = {
  slug: "merkur-safety-razor",
  title: "Merkur 34C safety razor (rakhyvel)",
  category: "skonhet",
  asin: "B002A8JO1Q",
  brand: "Merkur",
  priceTier: "mellan",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Klassisk metallhyvel",
    "Utbytbara blad",
    "Nära & slät rakning",
  ],
  image: "/products/merkur-34c/merkur-thumbnail.webp",
  imageAlt: "Merkur 34C safety razor i metall",
  images: [
    {
      src: "/products/merkur-34c/merkur-thumbnail.webp",
      alt: "Merkur 34C safety razor i metall",
      label: "Merkur 34C",
    },
    {
      src: "/products/merkur-34c/merkur-1.webp",
      alt: "Merkur 34C safety razor med kort handtag",
      label: "Kort handtag",
    },
    {
      src: "/products/merkur-34c/merkur-2.webp",
      alt: "Merkur 34C rakhuvud med utbytbart blad",
      label: "Utbytbart blad",
    },
    {
      src: "/products/merkur-34c/merkur-3.webp",
      alt: "Detaljbild av Merkur 34C safety razor",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4v2qPVN",
  pageHref: "/skonhet/safety-razor",
  summary: "En klassisk safety razor i metall som ger en nära, slät rakning med utbytbara blad – mindre stubb och mer hållbart än engångshyvlar. Stabil tyngd och ett kort, balanserat handtag.",
  evaluation: {
    headline: "Klassisk metallhyvel för en nära rakning",
    intro: "Elin går igenom Merkur 34C: en safety razor helt i metall med ett enkelt utbytbart blad. Tanken är en nära, slät rakning som lämnar mindre stubb än engångshyvlar, samtidigt som du byter blad i stället för hela hyveln. Tyngden och det korta handtaget ger en stadig känsla i handen.",
    verdict: "Hållbar metallhyvel för en nära, slät rakning med utbytbara blad.",
    checks: [],
  },
  specSectionEyebrow: "Hårborttagning",
  specSectionTitle: "Merkur 34C safety razor",
  specs: [
    {
      label: "Typ",
      caption: "Hyvel",
      value: "Safety razor i metall",
    },
    {
      label: "Blad",
      caption: "System",
      value: "Utbytbara dubbeleggade blad",
    },
    {
      label: "Handtag",
      caption: "Format",
      value: "Kort, balanserat med tyngd",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4v2qPVN",
    ratingSummary: "Amazon visar 4,5 av 5 från 7 344 omdömen.",
    highlights: [
      "Köpare upplever en närmare, slätare rakning än med engångshyvlar.",
      "Tyngden och det korta handtaget ger en stadig, kontrollerad känsla.",
      "Uppskattas för att vara hållbar – du byter blad i stället för hela hyveln.",
    ],
    cautions: [
      "Tekniken skiljer sig från engångshyvlar – ta det lugnt de första gångerna.",
      "Blad köps separat; tänk på att ha extra blad hemma.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const satinCareShavingGelProduct: Product = {
  slug: "satincare-rakgel",
  title: "Gillette Satin Care rakgel för kvinnor (190 ml)",
  category: "skonhet",
  asin: "B09R28P67T",
  brand: "Satin Care",
  priceTier: "budget",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Fuktgivande gel",
    "Len hud efteråt",
    "Mindre skav",
  ],
  image: "/products/satin-care-gel/rakgel-thumbnail.webp",
  imageAlt: "Gillette Satin Care rakgel för kvinnor, 190 ml",
  images: [
    {
      src: "/products/satin-care-gel/rakgel-thumbnail.webp",
      alt: "Gillette Satin Care rakgel för kvinnor, 190 ml",
      label: "Satin Care",
    },
    {
      src: "/products/satin-care-gel/rakgel-1.webp",
      alt: "Gillette Satin Care fuktgivande rakgel för len hud",
      label: "Fuktgivande",
    },
    {
      src: "/products/satin-care-gel/rakgel-2.webp",
      alt: "Gillette Satin Care rakgel textur och lödder",
      label: "Len gel",
    },
    {
      src: "/products/satin-care-gel/rakgel-3.webp",
      alt: "Detaljbild av Gillette Satin Care rakgel",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/441EZeN",
  pageHref: "/skonhet/rakgel",
  summary: "En fuktgivande rakgel som gör att hyveln glider lättare över huden och som hjälper till att minska skav och irritation vid rakningen. Huden känns len efteråt – ett enkelt extra steg för en mer behaglig rakning.",
  evaluation: {
    headline: "Fuktgivande rakgel för len hud",
    intro: "Elin går igenom Gillette Satin Care rakgel: en fuktgivande gel som gör att hyveln glider lättare och huden känns len efteråt. Tanken är enkel – ett glidande lager mellan hud och hyvel som hjälper till att minska skav och irritation vid rakningen, utan onödiga steg.",
    verdict: "Prisvärd fuktgivande rakgel för en len och behaglig rakning.",
    checks: [],
  },
  specSectionEyebrow: "Hårborttagning",
  specSectionTitle: "Gillette Satin Care rakgel",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Rakgel, 190 ml",
    },
    {
      label: "Effekt",
      caption: "Känsla",
      value: "Fuktgivande, len hud efteråt",
    },
    {
      label: "Profil",
      caption: "Användning",
      value: "För rakning av kropp och ben",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/441EZeN",
    ratingSummary: "Amazon visar 4,4 av 5 från 923 omdömen.",
    highlights: [
      "Köpare upplever att hyveln glider lättare och att rakningen känns smidigare.",
      "Många tycker att huden känns len och mjuk efteråt.",
      "Uppskattas för att ge mindre skav jämfört med att raka torrt eller med tvål.",
    ],
    cautions: [
      "En liten mängd räcker långt – ta lite i taget så det inte tar slut i onödan.",
      "Upplevelsen varierar mellan hudtyper; testa gärna på en mindre yta först.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const veetWaxStripsProduct: Product = {
  slug: "veet-vaxremsor",
  title: "Veet Expert vaxremsor för ben och kropp (20 st)",
  category: "skonhet",
  asin: "B08MZLP4K3",
  brand: "Veet",
  priceTier: "budget",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Färdiga kallvaxremsor",
    "Ben & kropp",
    "Ingen värmare",
  ],
  image: "/products/veet-wax-strips/veet-thumbnail.webp",
  imageAlt: "Veet Expert vaxremsor för ben och kropp, 20 st",
  images: [
    {
      src: "/products/veet-wax-strips/veet-thumbnail.webp",
      alt: "Veet Expert vaxremsor för ben och kropp, 20 st",
      label: "Vaxremsor",
    },
    {
      src: "/products/veet-wax-strips/veet-1.webp",
      alt: "Veet kallvaxremsor färdiga att använda hemma",
      label: "Kallvax",
    },
    {
      src: "/products/veet-wax-strips/veet-2.webp",
      alt: "Veet vaxremsor för ben och kropp",
      label: "Ben & kropp",
    },
    {
      src: "/products/veet-wax-strips/veet-3.webp",
      alt: "Detaljbild av Veet Expert vaxremsor",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4xTyGri",
  pageHref: "/skonhet/vaxremsor",
  summary: "Färdiga kallvaxremsor för ben och kropp – slät hud i veckor utan värmare, smidigt att använda hemma. Klart att börja direkt: värm remsan mellan händerna, tryck fast och dra av.",
  evaluation: {
    headline: "Kallvaxremsor för slät hud hemma",
    intro: "Elin går igenom Veet Expert vaxremsor: färdiga kallvaxremsor för ben och kropp som du använder utan värmare. Du värmer remsan mellan händerna, trycker fast den och drar av – en enkel metod för slät hud hemma i veckor framåt.",
    verdict: "Smidiga kallvaxremsor för slät hud på ben och kropp utan värmare.",
    checks: [],
  },
  specSectionEyebrow: "Hårborttagning",
  specSectionTitle: "Veet Expert vaxremsor",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Kallvaxremsor, 20 st",
    },
    {
      label: "Område",
      caption: "Användning",
      value: "Ben och kropp",
    },
    {
      label: "Metod",
      caption: "Smidigt hemma",
      value: "Ingen värmare – värm mellan händerna",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4xTyGri",
    ratingSummary: "Amazon visar 4,6 av 5 från 386 omdömen.",
    highlights: [
      "Köpare uppskattar slät hud som håller i veckor.",
      "Smidigt att använda hemma utan värmare eller extra utrustning.",
      "Färdiga remsor som många tycker är enkla att komma igång med.",
    ],
    cautions: [
      "Vaxremsor kan svida när du drar av – håll huden spänd och dra snabbt.",
      "Håret behöver vara några millimeter långt för att remsan ska få bra grepp.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const braunBikiniTrimmerProduct: Product = {
  slug: "braun-bikinitrimmer",
  title: "Braun Silk-épil bikinitrimmer (3-202)",
  category: "skonhet",
  asin: "B0CQRX2KHZ",
  brand: "Braun",
  priceTier: "mellan",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Smal precisionskam",
    "Skonsam mot huden",
    "Lätt att styra",
  ],
  image: "/products/braun-bikini/braunbikini-thumbnail.webp",
  imageAlt: "Braun Silk-épil bikinitrimmer 3-202",
  images: [
    {
      src: "/products/braun-bikini/braunbikini-thumbnail.webp",
      alt: "Braun Silk-épil bikinitrimmer 3-202",
      label: "Bikinitrimmer",
    },
    {
      src: "/products/braun-bikini/braunbikini-1.webp",
      alt: "Braun bikinitrimmer med smal precisionskam för bikinilinjen",
      label: "Precisionskam",
    },
    {
      src: "/products/braun-bikini/braunbikini-2.webp",
      alt: "Braun bikinitrimmer i handen för enkel styrning",
      label: "Lätt att styra",
    },
    {
      src: "/products/braun-bikini/braunbikini-3.webp",
      alt: "Detaljbild av Braun Silk-épil bikinitrimmer 3-202",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4oRvubD",
  pageHref: "/skonhet/bikinitrimmer",
  summary: "En skonsam bikinitrimmer med smal precisionskam som hjälper dig att snabbt och bekvämt trimma bikinilinjen hemma. Smidig att styra för jämna kanter, även på känsliga ställen.",
  evaluation: {
    headline: "Skonsam trimning av bikinilinjen hemma",
    intro: "Elin går igenom Braun Silk-épil bikinitrimmer 3-202: en smal precisionskam gjord för att forma och trimma bikinilinjen snabbt och bekvämt hemma. Den är liten och lätt att styra, vilket hjälper dig att komma åt även på känsliga ställen.",
    verdict: "Smidig och skonsam bikinitrimmer för dig som vill trimma bikinilinjen själv hemma.",
    checks: [],
  },
  specSectionEyebrow: "Hårborttagning",
  specSectionTitle: "Braun Silk-épil bikinitrimmer 3-202",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Bikinitrimmer med precisionskam",
    },
    {
      label: "Användning",
      caption: "Område",
      value: "Bikinilinjen och känsliga ytor",
    },
    {
      label: "Profil",
      caption: "Känsla",
      value: "Skonsam och lätt att styra",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4oRvubD",
    ratingSummary: "Amazon visar 4,2 av 5 från 347 omdömen.",
    highlights: [
      "Köpare tycker att den smala kammen gör det enkelt att trimma jämnt längs bikinilinjen.",
      "Liten och lätt att styra, vilket uppskattas på känsliga ställen.",
      "Många upplever trimningen som skonsam och bekväm hemma.",
    ],
    cautions: [
      "En trimmer kortar håret men tar inte bort det vid roten, så resultatet håller kortare tid.",
      "Gå försiktigt fram på känslig hud och rengör kammen efter varje användning.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const gehwolFotpuderProduct: Product = {
  slug: "gehwol-fotpuder",
  title: "Gehwol fotpuder (100 g)",
  category: "skonhet",
  asin: "B001NZH6GW",
  brand: "Gehwol",
  priceTier: "mellan",
  price: "Se aktuellt pris på Amazon",
  badges: [
    "Torra fötter",
    "Motverkar fuktkänsla",
    "Fräsch komfort",
  ],
  image: "/products/gehwol-fotpuder/fotpuder-thumbnail.webp",
  imageAlt: "Gehwol fotpuder, 100 g",
  images: [
    {
      src: "/products/gehwol-fotpuder/fotpuder-thumbnail.webp",
      alt: "Gehwol fotpuder, 100 g",
      label: "Fotpuder",
    },
    {
      src: "/products/gehwol-fotpuder/fotpuder-1.webp",
      alt: "Gehwol fotpuder som håller fötterna torra och fräscha",
      label: "Torr känsla",
    },
    {
      src: "/products/gehwol-fotpuder/fotpuder-2.webp",
      alt: "Gehwol fotpuder textur och konsistens",
      label: "Fin puder",
    },
    {
      src: "/products/gehwol-fotpuder/fotpuder-3.webp",
      alt: "Detaljbild av Gehwol fotpuder",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://amzn.to/4arC9n0",
  pageHref: "/skonhet/fotpuder",
  summary: "Ett fotpuder som hjälper till att hålla fötterna torra och fräscha och motverkar fuktkänsla i skon. För dig som vill ha en skön, torr komfort under dagen, särskilt vid svettiga fötter.",
  evaluation: {
    headline: "Fotpuder för torra och fräscha fötter",
    intro: "Elin går igenom Gehwol fotpuder: ett finkornigt puder som hjälper huden på fötterna att kännas torrare och fräschare. Det motverkar fuktkänsla i skon och passar dig som vill ha en skön, torr komfort under dagen, särskilt om du upplever svettiga fötter.",
    verdict: "Klassiskt fotpuder för torr, fräsch komfort i skon.",
    checks: [],
  },
  specSectionEyebrow: "Hudvård",
  specSectionTitle: "Gehwol fotpuder",
  specs: [
    {
      label: "Format",
      caption: "Typ",
      value: "Fotpuder, 100 g",
    },
    {
      label: "Funktion",
      caption: "Komfort",
      value: "Torra fötter, motverkar fuktkänsla",
    },
    {
      label: "Profil",
      caption: "Fötter",
      value: "Fräsch känsla i skon",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://amzn.to/4arC9n0",
    ratingSummary: "Amazon visar 4,6 av 5 från 708 omdömen.",
    highlights: [
      "Köpare upplever att fötterna känns torrare och fräschare under dagen.",
      "Många tycker att pudret motverkar fuktkänsla i skon.",
      "Uppskattas för den fina, lättfördelade konsistensen.",
    ],
    cautions: [
      "Strö gärna på en lagom mängd – ett tunt lager räcker långt.",
      "Effekten varierar mellan olika fötter och skor, så prova dig fram till din mängd.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const travelDudePackkuberProduct: Product = {
  slug: "travel-dude-packkuber",
  title: "Travel Dude Packing Cubes Compression Set (7 delar)",
  category: "resa",
  asin: "B0BY4QJL6J",
  brand: "Travel Dude",
  price: "Se aktuellt pris på Amazon",
  priceTier: "mellan",
  badges: [
    "7 delar",
    "Kompression",
    "Återvunnet material",
  ],
  image: "/products/travel-dude-packkuber/packkuber-thumbnail.webp",
  imageAlt: "Travel Dude packkuber i set om 7 delar för resväskan",
  images: [
    {
      src: "/products/travel-dude-packkuber/packkuber-thumbnail.webp",
      alt: "Travel Dude packkuber i set om 7 delar",
      label: "Set om 7",
    },
    {
      src: "/products/travel-dude-packkuber/packkuber-1.webp",
      alt: "Packkuber med kompression som pressar ihop kläderna",
      label: "Kompression",
    },
    {
      src: "/products/travel-dude-packkuber/packkuber-2.webp",
      alt: "Packkuber i olika storlekar packade i en resväska",
      label: "I väskan",
    },
    {
      src: "/products/travel-dude-packkuber/packkuber-3.webp",
      alt: "Travel Dude packkuber i olika färger och storlekar",
      label: "Storlekar",
    },
    {
      src: "/products/travel-dude-packkuber/packkuber-4.webp",
      alt: "Detalj av dragkedja på Travel Dude packkub",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://www.amazon.se/dp/B0BY4QJL6J?tag=azzamkhalaf-21",
  pageHref: "/sommar/resa/packkuber",
  summary: "Ett set med sju packkuber med kompression som hjälper dig hålla ordning och pressa ihop kläderna så de tar mindre plats i kabinväskan. Du delar upp plagg efter typ och drar åt kompressionsdragkedjan för att spara utrymme. Praktiskt för den som vill packa strukturerat – men de gör inte väskan större, de hjälper dig utnyttja platsen bättre.",
  evaluation: {
    headline: "Packkuber med kompression för en tydligare packning",
    intro: "Elin tittar närmare på Travel Dude Packing Cubes: ett set om sju kuber där du delar upp kläderna efter typ och drar åt en kompressionsdragkedja för att pressa ut luften. Det gör packningen mer överskådlig och hjälper dig få plats med mer i kabinväskan. Setet är dessutom tillverkat av återvunna plastflaskor.",
    verdict: "Smidiga kompressionskuber som gör kabinväskan mer överskådlig och plats­effektiv.",
    checks: [],
  },
  specSectionEyebrow: "Packkuber",
  specSectionTitle: "Travel Dude Packing Cubes",
  specs: [
    {
      label: "Innehåll",
      caption: "Set",
      value: "7 delar i olika storlekar",
    },
    {
      label: "Funktion",
      caption: "Kompression",
      value: "Dragkedja pressar ihop kläderna",
    },
    {
      label: "Material",
      caption: "Hållbart",
      value: "Tillverkade av återvunna plastflaskor",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://www.amazon.se/dp/B0BY4QJL6J?tag=azzamkhalaf-21",
    ratingSummary: "Amazon visar 4,6 av 5 från 3 819 omdömen.",
    highlights: [
      "Bra kompression – packar ihop kläderna och sparar plats i väskan.",
      "Håller ordning och gör packningen snabbare och mer överskådlig.",
      "Tillverkade av återvunna plastflaskor – uppskattat miljöplus.",
    ],
    cautions: [
      "En köpare hade gärna sett att de var lite djupare så att de rymde mer.",
      "Kuberna gör inte väskan större – de hjälper dig utnyttja platsen bättre.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const myHodoKompressionspaseProduct: Product = {
  slug: "myhodo-kompressionspase",
  title: "myHodo Rolling kompressionspåsar (14 delar, 3 storlekar)",
  category: "resa",
  asin: "B0863YHNMB",
  brand: "myHodo",
  price: "Se aktuellt pris på Amazon",
  priceTier: "budget",
  badges: [
    "14 delar",
    "Utan pump",
    "3 storlekar",
  ],
  image: "/products/myhodo-kompressionspase/kompressionspase-thumbnail.webp",
  imageAlt: "myHodo kompressionspåsar för resa i tre storlekar",
  images: [
    {
      src: "/products/myhodo-kompressionspase/kompressionspase-thumbnail.webp",
      alt: "myHodo kompressionspåsar för resa i tre storlekar",
      label: "14 delar",
    },
    {
      src: "/products/myhodo-kompressionspase/kompressionspase-1.webp",
      alt: "Kompressionspåse som rullas ihop för att pressa ut luften",
      label: "Rulla",
    },
    {
      src: "/products/myhodo-kompressionspase/kompressionspase-2.webp",
      alt: "Kläder komprimerade i myHodo resepåse",
      label: "Komprimerat",
    },
    {
      src: "/products/myhodo-kompressionspase/kompressionspase-3.webp",
      alt: "myHodo kompressionspåsar i olika storlekar",
      label: "Storlekar",
    },
    {
      src: "/products/myhodo-kompressionspase/kompressionspase-4.webp",
      alt: "Resepåsar packade i en väska",
      label: "I väskan",
    },
  ],
  amazonUrl: "https://www.amazon.se/dp/B0863YHNMB?tag=azzamkhalaf-21",
  pageHref: "/sommar/resa/kompressionspase",
  summary: "Rullkompressionspåsar där du pressar ut luften genom att rulla ihop påsen – ingen pump eller dammsugare behövs. Praktiskt på resan när du vill pressa ihop skrymmande kläder som tröjor och jackor så de tar mindre plats i kabinväskan. Setet har 14 påsar i tre storlekar. Bra att veta: du får inte ut lika mycket luft som med en vakuumpump, men tillräckligt för att spara rejält med plats.",
  evaluation: {
    headline: "Rullkompression utan pump för resan",
    intro: "Elin tittar närmare på myHodo Rolling: kompressionspåsar där du lägger i kläderna, stänger dragkedjan och rullar ihop påsen för att pressa ut luften. Ingen pump behövs, vilket gör dem smidiga att använda på hotellrummet inför hemresan. Setet innehåller 14 påsar i tre storlekar.",
    verdict: "Smidig rullkompression utan pump – pressar ihop skrymmande plagg och sparar plats.",
    checks: [],
  },
  specSectionEyebrow: "Kompressionspåsar",
  specSectionTitle: "myHodo Rolling",
  specs: [
    {
      label: "Innehåll",
      caption: "Set",
      value: "14 påsar i 3 storlekar",
    },
    {
      label: "Funktion",
      caption: "Kompression",
      value: "Rulla ihop – ingen pump behövs",
    },
    {
      label: "Storlekar",
      caption: "Mått",
      value: "70x50 / 60x40 / 50x35 cm",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://www.amazon.se/dp/B0863YHNMB?tag=azzamkhalaf-21",
    ratingSummary: "Amazon visar 4,4 av 5 från 1 247 omdömen.",
    highlights: [
      "Rullkompression utan pump – du pressar ut luften genom att rulla, praktiskt på resan.",
      "Håller tätt och komprimerar kläderna så de tar mindre plats.",
      "Tre storlekar och många påsar – flexibelt för olika plagg.",
    ],
    cautions: [
      "Flera tycker påsarna är mindre än de såg ut på bilden – kolla måtten innan.",
      "Rullmetoden kräver lite handkraft för att få ut all luft.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const tomtocKabelorganizerProduct: Product = {
  slug: "tomtoc-kabelorganizer",
  title: "tomtoc Accessory Case – kabel- och elektronikorganizer",
  category: "resa",
  asin: "B0CMQ3L1QD",
  brand: "tomtoc",
  price: "Se aktuellt pris på Amazon",
  priceTier: "mellan",
  badges: [
    "Kabelordning",
    "Kompakt",
    "Reseväska",
  ],
  image: "/products/tomtoc-kabelorganizer/kabelorganizer-thumbnail.webp",
  imageAlt: "tomtoc kabelorganizer för resa med fack för kablar och laddare",
  images: [
    {
      src: "/products/tomtoc-kabelorganizer/kabelorganizer-thumbnail.webp",
      alt: "tomtoc kabelorganizer för resa",
      label: "Organizer",
    },
    {
      src: "/products/tomtoc-kabelorganizer/kabelorganizer-1.webp",
      alt: "Kablar och laddare organiserade i tomtoc-fodralet",
      label: "Fack",
    },
    {
      src: "/products/tomtoc-kabelorganizer/kabelorganizer-2.webp",
      alt: "tomtoc kabelfodral uppfällt med elastiska band",
      label: "Uppfällt",
    },
    {
      src: "/products/tomtoc-kabelorganizer/kabelorganizer-3.webp",
      alt: "Kompakt kabelorganizer som ryms i handbagaget",
      label: "Kompakt",
    },
    {
      src: "/products/tomtoc-kabelorganizer/kabelorganizer-4.webp",
      alt: "Detalj av tomtoc kabelorganizer",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://www.amazon.se/dp/B0CMQ3L1QD?tag=azzamkhalaf-21",
  pageHref: "/sommar/resa/kabelorganizer",
  summary: "Ett kompakt fodral som håller ordning på kablar, laddare, adaptrar och annat smått på resan. Elastiska band och fack gör att allt har sin plats, så du slipper leta bland trasslet i väskan. Bra att veta: det är en smal, kompakt organizer – gjord för kablar och laddare, inte för skrymmande tillbehör.",
  evaluation: {
    headline: "Kompakt organizer som stoppar kabeltrasslet",
    intro: "Elin tittar närmare på tomtoc Accessory Case: ett kompakt fodral med elastiska band och fack för kablar, laddare, adaptrar, minnesstickor och annat smått. Allt får sin plats så att du snabbt hittar rätt sladd på resan, utan trassel i botten av väskan. Ett väldigt högt betyg på Amazon (4,8 av 5).",
    verdict: "Genomtänkt, kompakt kabelorganizer som håller elektroniken i ordning på resan.",
    checks: [],
  },
  specSectionEyebrow: "Kabelorganizer",
  specSectionTitle: "tomtoc Accessory Case",
  specs: [
    {
      label: "Format",
      caption: "Storlek",
      value: "Kompakt fodral för handbagaget",
    },
    {
      label: "Funktion",
      caption: "Ordning",
      value: "Elastiska band och fack för smått",
    },
    {
      label: "Passar",
      caption: "Innehåll",
      value: "Kablar, laddare, adaptrar, minneskort",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://www.amazon.se/dp/B0CMQ3L1QD?tag=azzamkhalaf-21",
    ratingSummary: "Amazon visar 4,8 av 5 från 3 430 omdömen.",
    highlights: [
      "Håller ordning på alla kablar, laddare och adaptrar på resan – slut på trasslet.",
      "Mycket bra kvalitet och genomtänkt storlek – många får med sig allt.",
      "Ovanligt högt betyg (4,8 av 5 från 3 430 omdömen).",
    ],
    cautions: [
      "Det är en smal, kompakt organizer – bäst för kablar, laddare och smått, inte skrymmande tillbehör.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const grifemaBagagevagProduct: Product = {
  slug: "grifema-bagagevag",
  title: "GRIFEMA GA2006 digital bagagevåg (50 kg)",
  category: "resa",
  asin: "B0F3HP95V8",
  brand: "GRIFEMA",
  price: "Se aktuellt pris på Amazon",
  priceTier: "budget",
  badges: [
    "Upp till 50 kg",
    "LCD-display",
    "Kompakt",
  ],
  image: "/products/grifema-bagagevag/bagagevag-thumbnail.webp",
  imageAlt: "GRIFEMA digital bagagevåg med LCD-display",
  images: [
    {
      src: "/products/grifema-bagagevag/bagagevag-thumbnail.webp",
      alt: "GRIFEMA digital bagagevåg med LCD-display",
      label: "Bagagevåg",
    },
    {
      src: "/products/grifema-bagagevag/bagagevag-1.webp",
      alt: "Bagagevåg som väger en resväska i handen",
      label: "Väger",
    },
    {
      src: "/products/grifema-bagagevag/bagagevag-2.webp",
      alt: "Närbild på LCD-displayen med vikt i kg",
      label: "Display",
    },
    {
      src: "/products/grifema-bagagevag/bagagevag-3.webp",
      alt: "Kompakt bagagevåg som ryms i väskan",
      label: "Kompakt",
    },
    {
      src: "/products/grifema-bagagevag/bagagevag-4.webp",
      alt: "Bagagevåg med rem och krok",
      label: "Rem",
    },
  ],
  amazonUrl: "https://www.amazon.se/dp/B0F3HP95V8?tag=azzamkhalaf-21",
  pageHref: "/sommar/resa/bagagevag",
  summary: "En liten digital bagagevåg som väger väskan upp till 50 kg med en bakgrundsbelyst LCD-display och tara-funktion. Du fäster remmen, lyfter väskan och ser vikten – smidigt hemma innan du åker så att du slipper överraskas av övervikt vid incheckningen. Bra att veta: du lyfter väskan för hand, vilket kan vara lite otympligt med riktigt tunga väskor.",
  evaluation: {
    headline: "Liten bagagevåg som räddar dig från övervikt",
    intro: "Elin tittar närmare på GRIFEMA GA2006: en kompakt digital bagagevåg som väger upp till 50 kg. Du fäster remmen runt handtaget, lyfter väskan och läser av vikten på den bakgrundsbelysta displayen. Ett enkelt sätt att kolla vikten hemma innan resan, så att gaten inte bjuder på en dyr överraskning.",
    verdict: "Enkel, kompakt bagagevåg som hjälper dig undvika överviktsavgift.",
    checks: [],
  },
  specSectionEyebrow: "Bagagevåg",
  specSectionTitle: "GRIFEMA GA2006",
  specs: [
    {
      label: "Kapacitet",
      caption: "Max",
      value: "Upp till 50 kg",
    },
    {
      label: "Display",
      caption: "Avläsning",
      value: "Bakgrundsbelyst LCD med tara",
    },
    {
      label: "Format",
      caption: "Storlek",
      value: "Kompakt och lätt att ta med",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://www.amazon.se/dp/B0F3HP95V8?tag=azzamkhalaf-21",
    ratingSummary: "Amazon visar 4,7 av 5 från 457 omdömen.",
    highlights: [
      "Lätt och enkel att använda – väg väskan hemma och slipp överviktsavgift vid gaten.",
      "Upplevs som noggrann med en tydlig, bakgrundsbelyst display.",
      "Kompakt och lätt att ta med i väskan på resan.",
    ],
    cautions: [
      "Du lyfter väskan i vågen för hand – lite otympligt med riktigt tunga väskor.",
      "Drivs med batteri, så ha koll på att den fungerar innan avresa.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const traxentaNecessarProduct: Product = {
  slug: "traxenta-necessar",
  title: "Traxenta genomskinlig necessär (5 delar)",
  category: "resa",
  asin: "B0CZDTZ51V",
  brand: "Traxenta",
  price: "Se aktuellt pris på Amazon",
  priceTier: "budget",
  badges: [
    "5 delar",
    "Genomskinlig",
    "Olika storlekar",
  ],
  image: "/products/traxenta-necessar/necessar-thumbnail.webp",
  imageAlt: "Traxenta genomskinliga necessärer i set om 5 delar",
  images: [
    {
      src: "/products/traxenta-necessar/necessar-thumbnail.webp",
      alt: "Traxenta genomskinliga necessärer i set om 5 delar",
      label: "Set om 5",
    },
    {
      src: "/products/traxenta-necessar/necessar-1.webp",
      alt: "Genomskinlig necessär där innehållet syns tydligt",
      label: "Genomskinlig",
    },
    {
      src: "/products/traxenta-necessar/necessar-2.webp",
      alt: "Transparenta påsar i olika storlekar",
      label: "Storlekar",
    },
    {
      src: "/products/traxenta-necessar/necessar-3.webp",
      alt: "Necessär packad med toalettsaker",
      label: "Packad",
    },
    {
      src: "/products/traxenta-necessar/necessar-4.webp",
      alt: "Detalj av dragkedja på genomskinlig necessär",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://www.amazon.se/dp/B0CZDTZ51V?tag=azzamkhalaf-21",
  pageHref: "/sommar/resa/necessar",
  summary: "Ett set med fem genomskinliga necessärer i olika storlekar. Eftersom de är transparenta ser du direkt vad som finns i, vilket gör det enkelt att hålla ordning på toalettsaker och smått – och smidigt att plocka fram i säkerhetskontrollen. Bra att veta: påsarna är relativt små (runt 20x20 cm), gjorda för att organisera smått. Kolla alltid flygplatsens aktuella regler för vätskor i handbagage.",
  evaluation: {
    headline: "Genomskinlig necessär som håller ordning",
    intro: "Elin tittar närmare på Traxenta genomskinliga necessärer: ett set om fem transparenta påsar i olika storlekar. Eftersom du ser innehållet direkt blir det enkelt att hålla ordning på toalettsaker och smått, och smidigt när necessären ska fram i säkerhetskontrollen. Kolla alltid flygplatsens aktuella regler för vätskor.",
    verdict: "Praktiskt set av genomskinliga necessärer för ordning och enkel säkerhetskontroll.",
    checks: [],
  },
  specSectionEyebrow: "Necessär",
  specSectionTitle: "Traxenta genomskinlig necessär",
  specs: [
    {
      label: "Innehåll",
      caption: "Set",
      value: "5 påsar i olika storlekar",
    },
    {
      label: "Material",
      caption: "Genomskinligt",
      value: "Transparent – du ser innehållet",
    },
    {
      label: "Storlek",
      caption: "Ungefär",
      value: "Runt 20x20 cm – för smått",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://www.amazon.se/dp/B0CZDTZ51V?tag=azzamkhalaf-21",
    ratingSummary: "Amazon visar 4,6 av 5 från 187 omdömen.",
    highlights: [
      "Genomskinlig så du snabbt ser vad som finns i – smidigt i säkerhetskontrollen och necessären.",
      "Flera storlekar i setet – lätt att dela upp smått, accessoarer och toalettsaker.",
      "Upplevs som praktiska, rymliga och tåliga.",
    ],
    cautions: [
      "Påsarna är relativt små (runt 20x20 cm) – för att organisera smått, inte stora flaskor.",
      "Kolla alltid flygplatsens aktuella regler för vätskor i handbagage.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const epickaReseadapterProduct: Product = {
  slug: "epicka-reseadapter",
  title: "EPICKA Universal reseadapter (3x USB-C, 2x USB-A)",
  category: "resa",
  asin: "B0CS2TK111",
  brand: "EPICKA",
  price: "Se aktuellt pris på Amazon",
  priceTier: "mellan",
  badges: [
    "Världsomspännande",
    "5 USB-portar",
    "Allt-i-ett",
  ],
  image: "/products/epicka-reseadapter/reseadapter-thumbnail.webp",
  imageAlt: "EPICKA universal reseadapter med flera USB-portar",
  images: [
    {
      src: "/products/epicka-reseadapter/reseadapter-thumbnail.webp",
      alt: "EPICKA universal reseadapter med flera USB-portar",
      label: "Reseadapter",
    },
    {
      src: "/products/epicka-reseadapter/reseadapter-1.webp",
      alt: "Reseadapter med utfällbara kontakter för olika länder",
      label: "Kontakter",
    },
    {
      src: "/products/epicka-reseadapter/reseadapter-2.webp",
      alt: "USB-C och USB-A portar på reseadaptern",
      label: "USB-portar",
    },
    {
      src: "/products/epicka-reseadapter/reseadapter-3.webp",
      alt: "Reseadapter som laddar flera enheter samtidigt",
      label: "Laddar flera",
    },
    {
      src: "/products/epicka-reseadapter/reseadapter-4.webp",
      alt: "Kompakt reseadapter i handen",
      label: "Kompakt",
    },
  ],
  amazonUrl: "https://www.amazon.se/dp/B0CS2TK111?tag=azzamkhalaf-21",
  pageHref: "/sommar/resa/reseadapter",
  summary: "En allt-i-ett reseadapter som passar uttag i de flesta länder (som USA, Storbritannien, Australien och EU) med utfällbara kontakter och fem USB-portar (3x USB-C och 2x USB-A) så du kan ladda flera enheter samtidigt. Viktigt att veta: en reseadapter byter bara kontakttyp – den omvandlar inte spänning. Kolla att dina laddare klarar landets voltantal, och använd den inte till strömkrävande apparater.",
  evaluation: {
    headline: "En adapter för hela resan",
    intro: "Elin tittar närmare på EPICKA Universal: en reseadapter med utfällbara kontakter som passar uttag i de flesta länder, plus fem USB-portar för att ladda flera enheter samtidigt. Praktiskt för dig som reser mellan olika länder och vill slippa en adapter per destination. Kom ihåg att en adapter byter kontakttyp men inte omvandlar spänning.",
    verdict: "Smidig allt-i-ett-adapter för resan – men den omvandlar inte spänning.",
    checks: [],
  },
  specSectionEyebrow: "Reseadapter",
  specSectionTitle: "EPICKA Universal",
  specs: [
    {
      label: "Täckning",
      caption: "Länder",
      value: "Passar uttag i de flesta länder",
    },
    {
      label: "Portar",
      caption: "USB",
      value: "3x USB-C + 2x USB-A",
    },
    {
      label: "Viktigt",
      caption: "Funktion",
      value: "Byter kontakt – omvandlar inte spänning",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://www.amazon.se/dp/B0CS2TK111?tag=azzamkhalaf-21",
    ratingSummary: "Amazon visar 4,7 av 5 från 602 omdömen.",
    highlights: [
      "Fungerar i de flesta länder – en adapter för hela resan.",
      "Flera portar (3x USB-C + 2x USB-A) så du laddar flera enheter samtidigt.",
      "Upplevs som pålitlig och kompatibel med det mesta – en trygg reskompis.",
    ],
    cautions: [
      "En reseadapter byter bara kontakttyp – den omvandlar INTE spänning. Kolla att laddaren klarar landets volttal.",
      "Inte gjord för strömkrävande apparater – mest för laddare och elektronik.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const fitFlipMikrofiberhandukProduct: Product = {
  slug: "fit-flip-mikrofiberhandduk",
  title: "Fit-Flip mikrofiberhandduk – kompakt & snabbtorkande",
  category: "resa",
  asin: "B0B945VBJJ",
  brand: "Fit-Flip",
  price: "Se aktuellt pris på Amazon",
  priceTier: "budget",
  badges: [
    "Snabbtorkande",
    "Ultralätt",
    "Kompakt",
  ],
  image: "/products/fit-flip-mikrofiberhandduk/handduk-thumbnail.webp",
  imageAlt: "Fit-Flip mikrofiberhandduk hopvikt för resa och strand",
  images: [
    {
      src: "/products/fit-flip-mikrofiberhandduk/handduk-thumbnail.webp",
      alt: "Fit-Flip mikrofiberhandduk för strand och resa",
      label: "Handduk",
    },
    {
      src: "/products/fit-flip-mikrofiberhandduk/handduk-1.webp",
      alt: "Mikrofiberhandduk hopvikt i liten storlek",
      label: "Kompakt",
    },
    {
      src: "/products/fit-flip-mikrofiberhandduk/handduk-2.webp",
      alt: "Snabbtorkande mikrofiberhandduk utbredd på stranden",
      label: "Utbredd",
    },
    {
      src: "/products/fit-flip-mikrofiberhandduk/handduk-3.webp",
      alt: "Mikrofiberhandduk i olika färger",
      label: "Färger",
    },
    {
      src: "/products/fit-flip-mikrofiberhandduk/handduk-4.webp",
      alt: "Detalj av Fit-Flip mikrofiberhandduk med förvaringspåse",
      label: "Påse",
    },
  ],
  amazonUrl: "https://www.amazon.se/dp/B0B945VBJJ?tag=azzamkhalaf-21",
  pageHref: "/sommar/resa/mikrofiberhandduk",
  summary: "En lätt mikrofiberhandduk som torkar snabbt och packas ihop till en liten storlek – perfekt för stranden, poolen och resan. Den tar mycket mindre plats än en vanlig frottéhandduk och torkar snabbt i solen. Bra att veta: det är en funktionell handduk, en del föredrar den mjukare känslan av en tjock frottéhandduk.",
  evaluation: {
    headline: "Snabbtorkande resehandduk som knappt tar plats",
    intro: "Elin tittar närmare på Fit-Flip mikrofiberhandduk: en lätt, snabbtorkande handduk som viks ihop till en liten storlek och får plats i vilken strandväska som helst. Den torkar snabbt i solen och väger nästan ingenting, vilket gör den smidig för strand, pool och resa.",
    verdict: "Lätt och snabbtorkande resehandduk som tar minimalt med plats.",
    checks: [],
  },
  specSectionEyebrow: "Mikrofiberhandduk",
  specSectionTitle: "Fit-Flip mikrofiber",
  specs: [
    {
      label: "Material",
      caption: "Tyg",
      value: "Mikrofiber – snabbtorkande",
    },
    {
      label: "Format",
      caption: "Packmått",
      value: "Viks ihop litet, med påse",
    },
    {
      label: "Vikt",
      caption: "Bärbarhet",
      value: "Ultralätt att ta med",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://www.amazon.se/dp/B0B945VBJJ?tag=azzamkhalaf-21",
    ratingSummary: "Amazon visar 4,5 av 5 från 35 103 omdömen.",
    highlights: [
      "Mjuk, lätt och snabbtorkande – torkar snabbt i solen.",
      "Kompakt och ultralätt, tar liten plats i strandväskan.",
      "Väldigt många nöjda köpare (4,5 av 5 från 35 103 omdömen).",
    ],
    cautions: [
      "Det är en funktionell mikrofiberhandduk – en del föredrar känslan av en tjockare frottéhandduk.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const jetechMobilfodralProduct: Product = {
  slug: "jetech-vattentatt-mobilfodral",
  title: "JETech vattentätt mobilfodral (2-pack, IPX8)",
  category: "resa",
  asin: "B0D1DMSFBN",
  brand: "JETech",
  price: "Se aktuellt pris på Amazon",
  priceTier: "budget",
  badges: [
    "IPX8",
    "2-pack",
    "Touch genom fodralet",
  ],
  image: "/products/jetech-vattentatt-mobilfodral/mobilfodral-thumbnail.webp",
  imageAlt: "JETech vattentätt mobilfodral för strand och pool",
  images: [
    {
      src: "/products/jetech-vattentatt-mobilfodral/mobilfodral-thumbnail.webp",
      alt: "JETech vattentätt mobilfodral",
      label: "Mobilfodral",
    },
    {
      src: "/products/jetech-vattentatt-mobilfodral/mobilfodral-1.webp",
      alt: "Mobil i vattentätt fodral vid poolkanten",
      label: "Vid vattnet",
    },
    {
      src: "/products/jetech-vattentatt-mobilfodral/mobilfodral-2.webp",
      alt: "Vattentätt fodral med lås som sluter tätt",
      label: "Lås",
    },
    {
      src: "/products/jetech-vattentatt-mobilfodral/mobilfodral-3.webp",
      alt: "Två vattentäta mobilfodral i 2-pack",
      label: "2-pack",
    },
    {
      src: "/products/jetech-vattentatt-mobilfodral/mobilfodral-4.webp",
      alt: "Detalj av JETech vattentätt mobilfodral",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://www.amazon.se/dp/B0D1DMSFBN?tag=azzamkhalaf-21",
  pageHref: "/sommar/resa/vattentatt-mobilfodral",
  summary: "Ett IPX8-klassat vattentätt fodral i 2-pack som skyddar mobilen mot vatten och sand vid strand och pool. Du kan använda skärmen genom plasten och hänga fodralet runt halsen. Bra att veta: kontrollera alltid att låset sluter tätt innan du utsätter mobilen för vatten, och testa gärna fodralet tomt först.",
  evaluation: {
    headline: "Vattentätt skydd för mobilen vid vattnet",
    intro: "Elin tittar närmare på JETech vattentäta mobilfodral: ett 2-pack IPX8-klassade fodral som skyddar mobilen mot vatten, sand och stänk. Du kan svara och fota genom plasten och bära fodralet runt halsen vid stranden eller poolen.",
    verdict: "Prisvärt vattentätt mobilskydd i 2-pack – stäng låset noga före bad.",
    checks: [],
  },
  specSectionEyebrow: "Mobilfodral",
  specSectionTitle: "JETech vattentätt fodral",
  specs: [
    {
      label: "Skydd",
      caption: "Klass",
      value: "IPX8 – vattentätt enligt tillverkaren",
    },
    {
      label: "Innehåll",
      caption: "Antal",
      value: "2-pack",
    },
    {
      label: "Passar",
      caption: "Storlek",
      value: "De flesta mobiler upp till ca 7,2 tum",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://www.amazon.se/dp/B0D1DMSFBN?tag=azzamkhalaf-21",
    ratingSummary: "Amazon visar 4,5 av 5 från 1 739 omdömen.",
    highlights: [
      "IPX8-klassat – håller vatten ute enligt tillverkaren, uppskattat vid bad och strand.",
      "Kommer i 2-pack och passar de flesta större mobiler.",
      "Bra kvalitet enligt många köpare (4,5 av 5 från 1 739 omdömen).",
    ],
    cautions: [
      "Stäng fodralet noga och kolla alltid att låset sluter tätt innan du badar.",
      "Bild- och touchkänsla genom plasten kan variera.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const strandklammorProduct: Product = {
  slug: "strandklammor-9-pack",
  title: "Strandklämmor för badlakan (9-pack, vindtåliga)",
  category: "resa",
  asin: "B0CZDL42LK",
  brand: "Vindtåliga klämmor",
  price: "Se aktuellt pris på Amazon",
  priceTier: "budget",
  badges: [
    "9-pack",
    "Vindtåliga",
    "Multiuse",
  ],
  image: "/products/strandklammor/strandklammor-thumbnail.webp",
  imageAlt: "Strandklämmor som håller badlakanet på plats på solstolen",
  images: [
    {
      src: "/products/strandklammor/strandklammor-thumbnail.webp",
      alt: "Strandklämmor i 9-pack",
      label: "9-pack",
    },
    {
      src: "/products/strandklammor/strandklammor-1.webp",
      alt: "Strandklämma som fäster badlakan på solstol",
      label: "På stolen",
    },
    {
      src: "/products/strandklammor/strandklammor-2.webp",
      alt: "Färgglada strandklämmor",
      label: "Färger",
    },
    {
      src: "/products/strandklammor/strandklammor-3.webp",
      alt: "Strandklämma greppar tjockt badlakan",
      label: "Grepp",
    },
    {
      src: "/products/strandklammor/strandklammor-4.webp",
      alt: "Detalj av strandklämmor",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://www.amazon.se/dp/B0CZDL42LK?tag=azzamkhalaf-21",
  pageHref: "/sommar/resa/strandklammor",
  summary: "Vindtåliga klämmor i 9-pack som håller badlakanet på plats på solstolen även när det blåser. De greppar rejält och funkar även som stora klädnypor hemma eller för att hänga blöta plagg på resan. Bra att veta: det är enkla plastklämmor – vid riktigt hård vind eller väldigt tjocka dynor kan greppet utmanas.",
  evaluation: {
    headline: "Slut på badlakanet som blåser bort",
    intro: "Elin tittar närmare på dessa strandklämmor: ett 9-pack vindtåliga klämmor som håller badlakanet på plats på solstolen. De greppar rejält och kan även användas som stora klädnypor hemma eller för blöta plagg på resan.",
    verdict: "Enkla, vindtåliga klämmor som håller badlakanet på plats – litet men skönt.",
    checks: [],
  },
  specSectionEyebrow: "Strandklämmor",
  specSectionTitle: "Vindtåliga strandklämmor",
  specs: [
    {
      label: "Innehåll",
      caption: "Antal",
      value: "9-pack",
    },
    {
      label: "Funktion",
      caption: "Grepp",
      value: "Håller badlakan på solstolen",
    },
    {
      label: "Extra",
      caption: "Multiuse",
      value: "Fungerar som stora klädnypor",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://www.amazon.se/dp/B0CZDL42LK?tag=azzamkhalaf-21",
    ratingSummary: "Amazon visar 4,6 av 5 från 353 omdömen.",
    highlights: [
      "Håller badlakanet på plats på solstolen även när det blåser.",
      "Bra storlek och greppar rejält – funkar även som stora klädnypor hemma.",
      "9-pack, uppskattade av många (4,6 av 5 från 353 omdömen).",
    ],
    cautions: [
      "Det är enkla plastklämmor – vid riktigt hård vind eller väldigt tjocka dynor kan greppet utmanas.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const lifewitKylvaskaProduct: Product = {
  slug: "lifewit-kylvaska-ryggsack",
  title: "Lifewit kylväska ryggsäck (24 L, isolerad)",
  category: "resa",
  asin: "B07B8GRWMC",
  brand: "Lifewit",
  price: "Se aktuellt pris på Amazon",
  priceTier: "mellan",
  badges: [
    "24 liter",
    "Ryggsäck",
    "Isolerad",
  ],
  image: "/products/lifewit-kylvaska/kylvaska-thumbnail.webp",
  imageAlt: "Lifewit kylväska ryggsäck för strand och picknick",
  images: [
    {
      src: "/products/lifewit-kylvaska/kylvaska-thumbnail.webp",
      alt: "Lifewit kylväska ryggsäck",
      label: "Kylryggsäck",
    },
    {
      src: "/products/lifewit-kylvaska/kylvaska-1.webp",
      alt: "Isolerad kylryggsäck fylld med dryck och mat",
      label: "Fylld",
    },
    {
      src: "/products/lifewit-kylvaska/kylvaska-2.webp",
      alt: "Kylryggsäck buren på ryggen till stranden",
      label: "På ryggen",
    },
    {
      src: "/products/lifewit-kylvaska/kylvaska-3.webp",
      alt: "Isolerat foder i kylväskan",
      label: "Isolering",
    },
    {
      src: "/products/lifewit-kylvaska/kylvaska-4.webp",
      alt: "Detalj av Lifewit kylväska",
      label: "Detalj",
    },
  ],
  amazonUrl: "https://www.amazon.se/dp/B07B8GRWMC?tag=azzamkhalaf-21",
  pageHref: "/sommar/resa/kylvaska",
  summary: "En isolerad kylväska i ryggsäcksmodell på 24 liter som håller dryck och mat sval på väg till stranden, picknicken eller campingen. Du bär den bekvämt på ryggen och har händerna fria. Bra att veta: det är en mjuk kylväska – den håller kylan i timmar, inte hela dagen i stekande sol. Använd kylklampar för bästa effekt.",
  evaluation: {
    headline: "Sval dryck hela vägen till stranden",
    intro: "Elin tittar närmare på Lifewit kylväska: en isolerad kylryggsäck på 24 liter som håller mat och dryck sval på utflykten. Ryggsäcksmodellen gör den bekväm att bära längre sträckor, och den rymmer tillräckligt för hela sällskapet.",
    verdict: "Rymlig, bekväm kylryggsäck för strand och picknick – använd kylklampar.",
    checks: [],
  },
  specSectionEyebrow: "Kylväska",
  specSectionTitle: "Lifewit kylryggsäck",
  specs: [
    {
      label: "Volym",
      caption: "Storlek",
      value: "24 liter",
    },
    {
      label: "Modell",
      caption: "Bärsätt",
      value: "Ryggsäck med axelband",
    },
    {
      label: "Funktion",
      caption: "Kyla",
      value: "Isolerat foder – bäst med kylklampar",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://www.amazon.se/dp/B07B8GRWMC?tag=azzamkhalaf-21",
    ratingSummary: "Amazon visar 4,6 av 5 från 9 411 omdömen.",
    highlights: [
      "Håller kylan bra och rymmer mycket (24 liter) – räddar utflykten till stranden.",
      "Ryggsäcksmodell med bekväma axelband, skönt att bära längre sträckor.",
      "Väldigt populär (4,6 av 5 från 9 411 omdömen).",
    ],
    cautions: [
      "Det är en mjuk kylväska – den håller kylan i timmar, inte hela dagen i stekande sol. Använd kylklampar för bäst effekt.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const anortrekStrandfiltProduct: Product = {
  slug: "anortrek-sandfri-strandfilt",
  title: "AnorTrek sandfri strandfilt (extra stor, 300x300 cm)",
  category: "resa",
  asin: "B0C9CVWZPC",
  brand: "AnorTrek",
  price: "Se aktuellt pris på Amazon",
  priceTier: "budget",
  badges: [
    "Sandfri",
    "Extra stor",
    "Snabbtorkande",
  ],
  image: "/products/anortrek-strandfilt/strandfilt-thumbnail.webp",
  imageAlt: "AnorTrek sandfri strandfilt utbredd på stranden",
  images: [
    {
      src: "/products/anortrek-strandfilt/strandfilt-thumbnail.webp",
      alt: "AnorTrek sandfri strandfilt",
      label: "Strandfilt",
    },
    {
      src: "/products/anortrek-strandfilt/strandfilt-1.webp",
      alt: "Extra stor strandfilt med plats för flera personer",
      label: "Extra stor",
    },
    {
      src: "/products/anortrek-strandfilt/strandfilt-2.webp",
      alt: "Sanden borstas lätt av den sandfria filten",
      label: "Sandfri",
    },
    {
      src: "/products/anortrek-strandfilt/strandfilt-3.webp",
      alt: "Strandfilt hopvikt till liten påse",
      label: "Kompakt",
    },
    {
      src: "/products/anortrek-strandfilt/strandfilt-4.webp",
      alt: "Strandfilt med fästpinnar i hörnen",
      label: "Fästen",
    },
  ],
  amazonUrl: "https://www.amazon.se/dp/B0C9CVWZPC?tag=azzamkhalaf-21",
  pageHref: "/sommar/resa/strandfilt",
  summary: "En extra stor sandfri strandfilt (300x300 cm) i lätt, snabbtorkande material – sanden borstas lätt av och filten viks ihop till en liten påse. Det finns gott om plats för hela sällskapet, och den är smidig att ta med. Bra att veta: det är en tunn, lätt filt – på stenig mark känner du underlaget, och du bör fästa hörnen i blåst.",
  evaluation: {
    headline: "Extra stor strandfilt utan sandkladd",
    intro: "Elin tittar närmare på AnorTrek sandfria strandfilt: en extra stor filt (300x300 cm) i lätt, snabbtorkande material. Sanden borstas lätt av, den viks ihop kompakt och rymmer hela sällskapet – en smidig bas för stranddagen.",
    verdict: "Stor, lätt och sandfri strandfilt – perfekt för sällskapet, tunn på stenig mark.",
    checks: [],
  },
  specSectionEyebrow: "Strandfilt",
  specSectionTitle: "AnorTrek sandfri filt",
  specs: [
    {
      label: "Storlek",
      caption: "Mått",
      value: "Extra stor, 300x300 cm",
    },
    {
      label: "Material",
      caption: "Tyg",
      value: "Lätt, snabbtorkande, sandfritt",
    },
    {
      label: "Packmått",
      caption: "Bärbarhet",
      value: "Viks ihop litet, med påse",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://www.amazon.se/dp/B0C9CVWZPC?tag=azzamkhalaf-21",
    ratingSummary: "Amazon visar 4,4 av 5 från 390 omdömen.",
    highlights: [
      "Sandfri och extra stor (300x300 cm) – får plats för hela sällskapet.",
      "Lätt, snabbtorkande och vikbar – kompakt att ta med till stranden.",
      "Uppskattad av köpare (4,4 av 5 från 390 omdömen).",
    ],
    cautions: [
      "Det är en tunn, lätt filt – på stenig mark känner du underlaget. Fäst hörnen i blåst.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const ankerZoloPowerbankProduct: Product = {
  slug: "anker-zolo-powerbank",
  title: "Anker Zolo Power Bank (45W, inbyggda USB-C-kablar)",
  category: "resa",
  asin: "B0DSZKKJTK",
  brand: "Anker",
  price: "Se aktuellt pris på Amazon",
  priceTier: "mellan",
  badges: [
    "Inbyggda kablar",
    "45W",
    "Flera portar",
  ],
  image: "/products/anker-zolo-powerbank/powerbank-thumbnail.webp",
  imageAlt: "Anker Zolo powerbank med inbyggda USB-C-kablar",
  images: [
    {
      src: "/products/anker-zolo-powerbank/powerbank-thumbnail.webp",
      alt: "Anker Zolo powerbank",
      label: "Powerbank",
    },
    {
      src: "/products/anker-zolo-powerbank/powerbank-1.webp",
      alt: "Powerbank med två inbyggda USB-C-kablar",
      label: "Inbyggda kablar",
    },
    {
      src: "/products/anker-zolo-powerbank/powerbank-2.webp",
      alt: "Powerbank laddar mobil på resan",
      label: "Laddar mobil",
    },
    {
      src: "/products/anker-zolo-powerbank/powerbank-3.webp",
      alt: "Portar på Anker Zolo powerbank",
      label: "Portar",
    },
    {
      src: "/products/anker-zolo-powerbank/powerbank-4.webp",
      alt: "Kompakt powerbank i handen",
      label: "Kompakt",
    },
  ],
  amazonUrl: "https://www.amazon.se/dp/B0DSZKKJTK?tag=azzamkhalaf-21",
  pageHref: "/sommar/resa/powerbank",
  summary: "En powerbank med två inbyggda USB-C-kablar och 45W snabbladdning, plus en extra USB-C- och USB-A-port. Poängen är att du slipper leta efter en lös sladd – kabeln sitter redan i. Perfekt för resdagen när mobilen måste hålla hela vägen. Bra att veta: det är en kraftfull modell som väger en del, och hur många laddningar du får beror på din enhet.",
  evaluation: {
    headline: "Powerbank med kabeln redan inbyggd",
    intro: "Elin tittar närmare på Anker Zolo: en powerbank med två inbyggda USB-C-kablar och 45W snabbladdning. Du slipper leta efter en lös sladd eftersom kabeln sitter i, och du kan ladda flera enheter via de extra portarna. Smidigt när mobilen måste hålla hela resdagen.",
    verdict: "Smidig powerbank med inbyggda kablar och snabbladdning – väger en del.",
    checks: [],
  },
  specSectionEyebrow: "Powerbank",
  specSectionTitle: "Anker Zolo",
  specs: [
    {
      label: "Kablar",
      caption: "Inbyggt",
      value: "Två inbyggda USB-C-kablar",
    },
    {
      label: "Effekt",
      caption: "Laddning",
      value: "45W snabbladdning",
    },
    {
      label: "Portar",
      caption: "Extra",
      value: "1 USB-C + 1 USB-A",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://www.amazon.se/dp/B0DSZKKJTK?tag=azzamkhalaf-21",
    ratingSummary: "Amazon visar 4,6 av 5 från 989 omdömen.",
    highlights: [
      "Två inbyggda USB-C-kablar – du slipper leta efter lös sladd på resan.",
      "45W snabbladdning och flera portar, laddar mobilen snabbt.",
      "Pålitlig reskompis enligt köpare (4,6 av 5 från 989 omdömen).",
    ],
    cautions: [
      "Hur många laddningar du får beror på din enhet.",
      "Det är en kraftfull powerbank som väger en del – kolla reglerna för powerbanks i handbagaget.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const raviadUsbCKabelProduct: Product = {
  slug: "raviad-usb-c-kabel-kort",
  title: "RAVIAD USB-C-kabel kort (2-pack, 50 cm, nylonflätad)",
  category: "resa",
  asin: "B0DK8XM3NZ",
  brand: "RAVIAD",
  price: "Se aktuellt pris på Amazon",
  priceTier: "budget",
  badges: [
    "2-pack",
    "50 cm",
    "Nylonflätad",
  ],
  image: "/products/raviad-usb-c-kabel/kabel-thumbnail.webp",
  imageAlt: "RAVIAD korta USB-C-kablar i 2-pack för resa",
  images: [
    {
      src: "/products/raviad-usb-c-kabel/kabel-thumbnail.webp",
      alt: "RAVIAD korta USB-C-kablar i 2-pack",
      label: "2-pack",
    },
    {
      src: "/products/raviad-usb-c-kabel/kabel-1.webp",
      alt: "Kort nylonflätad USB-C-kabel",
      label: "Nylon",
    },
    {
      src: "/products/raviad-usb-c-kabel/kabel-2.webp",
      alt: "USB-C-kabel ansluten till powerbank",
      label: "Till powerbank",
    },
    {
      src: "/products/raviad-usb-c-kabel/kabel-3.webp",
      alt: "USB-C-kontakter i närbild",
      label: "Kontakter",
    },
    {
      src: "/products/raviad-usb-c-kabel/kabel-4.webp",
      alt: "Kabeln hoprullad kompakt",
      label: "Kompakt",
    },
  ],
  amazonUrl: "https://www.amazon.se/dp/B0DK8XM3NZ?tag=azzamkhalaf-21",
  pageHref: "/sommar/resa/usb-c-kabel",
  summary: "Ett 2-pack korta (50 cm) nylonflätade USB-C-kablar som stödjer PD-snabbladdning upp till 100W. Den korta längden är perfekt ihop med en powerbank i fickan eller väskan – du slipper trassel med långa sladdar. Bra att veta: 50 cm är smidigt på resan men för kort om du vill använda mobilen långt från uttaget, och faktisk laddhastighet beror på din laddare och enhet.",
  evaluation: {
    headline: "Korta kablar utan sladdtrassel",
    intro: "Elin tittar närmare på RAVIAD USB-C-kablar: ett 2-pack korta, nylonflätade kablar (50 cm) med PD-stöd. Den korta längden gör dem perfekta ihop med en powerbank, och nylonflätningen känns hållbar. Smidigt att ha en reserv i väskan.",
    verdict: "Korta, hållbara USB-C-kablar – perfekta till powerbank, för korta för soffan.",
    checks: [],
  },
  specSectionEyebrow: "USB-C-kabel",
  specSectionTitle: "RAVIAD kabelkort",
  specs: [
    {
      label: "Innehåll",
      caption: "Antal",
      value: "2-pack",
    },
    {
      label: "Längd",
      caption: "Format",
      value: "Kort, 50 cm",
    },
    {
      label: "Material",
      caption: "Hållbarhet",
      value: "Nylonflätad, PD upp till 100W",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://www.amazon.se/dp/B0DK8XM3NZ?tag=azzamkhalaf-21",
    ratingSummary: "Amazon visar 4,8 av 5 från 586 omdömen.",
    highlights: [
      "Perfekt längd för powerbank och resa – slipper trassel med långa sladdar.",
      "Nylonflätade och känns hållbara enligt köpare.",
      "Väldigt högt betyg (4,8 av 5 från 586 omdömen).",
    ],
    cautions: [
      "Det är korta kablar (50 cm) – smidiga till powerbank men inte för att använda mobilen på håll.",
      "Faktisk laddhastighet beror på din laddare och enhet.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const anker735VaggladdareProduct: Product = {
  slug: "anker-735-vaggladdare",
  title: "Anker 735 väggladdare (Nano II 65W, 3 portar)",
  category: "resa",
  asin: "B09LLRNGSD",
  brand: "Anker",
  price: "Se aktuellt pris på Amazon",
  priceTier: "mellan",
  badges: [
    "65W",
    "3 portar",
    "Hopfällbar",
  ],
  image: "/products/anker-735-vaggladdare/vaggladdare-thumbnail.webp",
  imageAlt: "Anker 735 väggladdare med tre portar",
  images: [
    {
      src: "/products/anker-735-vaggladdare/vaggladdare-thumbnail.webp",
      alt: "Anker 735 väggladdare",
      label: "Väggladdare",
    },
    {
      src: "/products/anker-735-vaggladdare/vaggladdare-1.webp",
      alt: "Kompakt väggladdare med hopfällbar stift",
      label: "Hopfällbar",
    },
    {
      src: "/products/anker-735-vaggladdare/vaggladdare-2.webp",
      alt: "Tre portar på Anker 735",
      label: "3 portar",
    },
    {
      src: "/products/anker-735-vaggladdare/vaggladdare-3.webp",
      alt: "Väggladdare laddar mobil och laptop",
      label: "Mobil + laptop",
    },
    {
      src: "/products/anker-735-vaggladdare/vaggladdare-4.webp",
      alt: "Anker 735 väggladdare i handen",
      label: "Kompakt",
    },
  ],
  amazonUrl: "https://www.amazon.se/dp/B09LLRNGSD?tag=azzamkhalaf-21",
  pageHref: "/sommar/resa/vaggladdare",
  summary: "En kompakt GaN-väggladdare på 65W med tre portar och hopfällbara stift. Den laddar allt från mobil till laptop och ersätter flera laddare med en enda liten enhet – perfekt för resan. Bra att veta: de 65W delas mellan portarna, så laddar du flera enheter samtidigt sjunker maxhastigheten per enhet.",
  evaluation: {
    headline: "En liten laddare för mobil och laptop",
    intro: "Elin tittar närmare på Anker 735 (Nano II 65W): en kompakt GaN-laddare med tre portar och hopfällbara stift. Den laddar mobil, surfplatta och många laptops, så du kan lämna de andra laddarna hemma. Mycket populär med över 13 000 omdömen.",
    verdict: "Kompakt 65W-laddare som ersätter flera – effekten delas mellan portarna.",
    checks: [],
  },
  specSectionEyebrow: "Väggladdare",
  specSectionTitle: "Anker 735 Nano II",
  specs: [
    {
      label: "Effekt",
      caption: "Max",
      value: "65W (GaN)",
    },
    {
      label: "Portar",
      caption: "Antal",
      value: "3 portar (USB-C + USB-A)",
    },
    {
      label: "Format",
      caption: "Resa",
      value: "Kompakt med hopfällbara stift",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://www.amazon.se/dp/B09LLRNGSD?tag=azzamkhalaf-21",
    ratingSummary: "Amazon visar 4,6 av 5 från 13 137 omdömen.",
    highlights: [
      "Laddar allt från mobil till laptop – ersätter flera laddare med en.",
      "Kompakt och hopfällbar, robust kvalitet enligt köpare.",
      "Väldigt populär (4,6 av 5 från 13 137 omdömen).",
    ],
    cautions: [
      "De 65W delas mellan portarna – laddar du flera enheter samtidigt sjunker maxhastigheten per enhet.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const anyooRegnponchoProduct: Product = {
  slug: "anyoo-regnponcho",
  title: "Anyoo regnponcho – återanvändbar med huva",
  category: "resa",
  asin: "B09WHLXYS6",
  brand: "Anyoo",
  price: "Se aktuellt pris på Amazon",
  priceTier: "budget",
  badges: [
    "Återanvändbar",
    "Med huva",
    "Packbar",
  ],
  image: "/products/anyoo-regnponcho/regnponcho-thumbnail.webp",
  imageAlt: "Anyoo återanvändbar regnponcho med huva",
  images: [
    {
      src: "/products/anyoo-regnponcho/regnponcho-thumbnail.webp",
      alt: "Anyoo regnponcho med huva",
      label: "Regnponcho",
    },
    {
      src: "/products/anyoo-regnponcho/regnponcho-1.webp",
      alt: "Person i regnponcho på festival i regn",
      label: "På festival",
    },
    {
      src: "/products/anyoo-regnponcho/regnponcho-2.webp",
      alt: "Regnponcho med justerbar huva",
      label: "Huva",
    },
    {
      src: "/products/anyoo-regnponcho/regnponcho-3.webp",
      alt: "Regnponcho hopvikt i liten påse",
      label: "Packbar",
    },
    {
      src: "/products/anyoo-regnponcho/regnponcho-4.webp",
      alt: "Regnponcho i olika färger",
      label: "Färger",
    },
  ],
  amazonUrl: "https://www.amazon.se/dp/B09WHLXYS6?tag=azzamkhalaf-21",
  pageHref: "/sommar/resa/regnponcho",
  summary: "En lätt, återanvändbar regnponcho med huva som håller regn och blåst borta på festivalen, vandringen eller utflykten. Den viks ihop litet och får plats i väskan, så du alltid har regnskyddet med. Bra att veta: det är en lätt poncho, inte en tjock regnjacka – i riktigt hård vind kan den fladdra.",
  evaluation: {
    headline: "Regnskyddet som räddar festivaldagen",
    intro: "Elin tittar närmare på Anyoo regnponcho: en lätt, återanvändbar poncho med huva som du enkelt drar på när vädret vänder. Den packas ihop litet, så den får plats i väskan inför festivalen eller utflykten. Flera köpare nämner att den räddade just en musikfestival.",
    verdict: "Lätt, packbar regnponcho som alltid är värd platsen i väskan.",
    checks: [],
  },
  specSectionEyebrow: "Regnponcho",
  specSectionTitle: "Anyoo regnponcho",
  specs: [
    {
      label: "Typ",
      caption: "Modell",
      value: "Återanvändbar poncho med huva",
    },
    {
      label: "Format",
      caption: "Packmått",
      value: "Viks ihop litet, med påse",
    },
    {
      label: "Använd till",
      caption: "Passar",
      value: "Festival, vandring, utflykt",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://www.amazon.se/dp/B09WHLXYS6?tag=azzamkhalaf-21",
    ratingSummary: "Amazon visar 4,5 av 5 från 24 458 omdömen.",
    highlights: [
      "Håller regn och blåst borta – flera nämner att den räddade musikfestivalen.",
      "Återanvändbar med huva, lätt och packbar – tar liten plats i väskan.",
      "Enormt populär (4,5 av 5 från 24 458 omdömen).",
    ],
    cautions: [
      "Det är en lätt poncho, inte en tjock regnjacka – i hård vind kan den fladdra.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const blukarPannlampaProduct: Product = {
  slug: "blukar-pannlampa",
  title: "Blukar pannlampa – uppladdningsbar LED med 8 lägen",
  category: "resa",
  asin: "B0CBPHGWJ2",
  brand: "Blukar",
  price: "Se aktuellt pris på Amazon",
  priceTier: "budget",
  badges: [
    "Uppladdningsbar",
    "8 ljuslägen",
    "Sensorstyrning",
  ],
  image: "/products/blukar-pannlampa/pannlampa-thumbnail.webp",
  imageAlt: "Blukar uppladdningsbar pannlampa för camping",
  images: [
    {
      src: "/products/blukar-pannlampa/pannlampa-thumbnail.webp",
      alt: "Blukar pannlampa",
      label: "Pannlampa",
    },
    {
      src: "/products/blukar-pannlampa/pannlampa-1.webp",
      alt: "Pannlampa som lyser upp i mörkret på campingen",
      label: "I mörkret",
    },
    {
      src: "/products/blukar-pannlampa/pannlampa-2.webp",
      alt: "Pannlampa med rött ljus och flera lägen",
      label: "Lägen",
    },
    {
      src: "/products/blukar-pannlampa/pannlampa-3.webp",
      alt: "Uppladdningsbar pannlampa med USB",
      label: "USB-laddning",
    },
    {
      src: "/products/blukar-pannlampa/pannlampa-4.webp",
      alt: "Pannlampa buren på pannan",
      label: "På pannan",
    },
  ],
  amazonUrl: "https://www.amazon.se/dp/B0CBPHGWJ2?tag=azzamkhalaf-21",
  pageHref: "/sommar/resa/pannlampa",
  summary: "En uppladdningsbar LED-pannlampa med flera ljuslägen, sensorstyrning och rött ljus – så du har händerna fria i mörkret på campingen, festivalen eller kvällspromenaden. Den laddas via USB, så du slipper byta batteri. Bra att veta: sensorstyrningen kan vara känslig och slå på/av när du rör vid ansiktet.",
  evaluation: {
    headline: "Händerna fria när mörkret faller",
    intro: "Elin tittar närmare på Blukar pannlampa: en uppladdningsbar LED-lampa med åtta ljuslägen, sensorstyrning och rött ljus. Den ger bra ljus när du sätter upp tältet, letar i väskan eller går på toa i mörkret – med händerna fria. Väldigt populär med över 12 000 omdömen.",
    verdict: "Prisvärd, uppladdningsbar pannlampa med bra ljus – sensorn kan vara pillig.",
    checks: [],
  },
  specSectionEyebrow: "Pannlampa",
  specSectionTitle: "Blukar pannlampa",
  specs: [
    {
      label: "Ström",
      caption: "Laddning",
      value: "Uppladdningsbar via USB",
    },
    {
      label: "Lägen",
      caption: "Ljus",
      value: "8 ljuslägen inkl. rött ljus",
    },
    {
      label: "Extra",
      caption: "Funktion",
      value: "Sensorstyrning, vattentålig",
    },
  ],
  amazonReviewSignal: {
    sourceLabel: "Amazon-köpare",
    sourceUrl: "https://www.amazon.se/dp/B0CBPHGWJ2?tag=azzamkhalaf-21",
    ratingSummary: "Amazon visar 4,5 av 5 från 12 344 omdömen.",
    highlights: [
      "Ger mycket bra ljus med flera lägen (bl.a. sensor och rött ljus) – händerna fria i mörkret.",
      "Uppladdningsbar via USB – slipp byta batteri på campingen.",
      "Väldigt populär (4,5 av 5 från 12 344 omdömen).",
    ],
    cautions: [
      "Sensorstyrningen kan vara känslig – vissa tycker den slår på/av av misstag när man rör vid ansiktet.",
    ],
  },
  ugcVideos: [],
  uses: [],
  peopleLike: [],
  honestCheck: [],
  comments: [],
};

export const products = [
  blukarPannlampaProduct,
  anyooRegnponchoProduct,
  anker735VaggladdareProduct,
  raviadUsbCKabelProduct,
  ankerZoloPowerbankProduct,
  anortrekStrandfiltProduct,
  lifewitKylvaskaProduct,
  strandklammorProduct,
  jetechMobilfodralProduct,
  fitFlipMikrofiberhandukProduct,
  epickaReseadapterProduct,
  traxentaNecessarProduct,
  grifemaBagagevagProduct,
  tomtocKabelorganizerProduct,
  myHodoKompressionspaseProduct,
  travelDudePackkuberProduct,
  ...waveProducts,
  gehwolFotpuderProduct,
  braunBikiniTrimmerProduct,
  veetWaxStripsProduct,
  satinCareShavingGelProduct,
  merkurSafetyRazorProduct,
  tweezermanBrowScissorsProduct,
  sorellaBrowLamProduct,
  nanobrowBrynserumProduct,
  xlashFransserumProduct,
  beurerMp48LampProduct,
  essieGelCoutureProduct,
  glasnagelfilProduct,
  cndCuticleOilProduct,
  opiRidgeFillerProduct,
  essieNailStrengthenerProduct,
  goveeHygrometerProduct,
  twsoulWaterBottleProduct,
  stanleyClassicProduct,
  oralBIo5Product,
  eufyRobovacProduct,
  goveeNeonRopeProduct,
  gritinReadingLightProduct,
  soundcoreMotion300Product,
  loopQuietProduct,
  mantaSleepMaskProduct,
  philipsWakeUpLightProduct,
  magicteamWhiteNoiseProduct,
  withingsBodySmartProduct,
  mattibiAcupressureProduct,
  beurerHeatingPadProduct,
  beurerFm90Product,
  renphoMassagePillowProduct,
  beurerLv50Product,
  xiaomiStandingFanProduct,
  jisulifeHandfanProduct,
  ellaWeightedBlanketProduct,
  levoitHumidifierProduct,
  proBreezeDehumidifierProduct,
  fitgriffStrapsProduct,
  fuel24JugProduct,
  salomonActiveSkinProduct,
  rehbandKneeProduct,
  gvolateeAgilityProduct,
  dhFitlifeTrampolineProduct,
  gorillaSlidersProduct,
  reebokStepProduct,
  g5PilatesringProduct,
  bodymateYogastrapProduct,
  bodymateYogablockProduct,
  cpSportsBeltProduct,
  asiproWristWrapsProduct,
  ihuanGlovesProduct,
  elvireMinibandProduct,
  gorillaRingsProduct,
  gorillaPushUpProduct,
  ironGymPullUpProduct,
  amonaxAbWheelProduct,
  gorillaBalansplattaProduct,
  gorillaGymbollProduct,
  bowflexSelectTech552iProduct,
  realTechniquesSpongeProduct,
  realTechniquesBrushesProduct,
  pressOnNaglarProduct,
  beurerManiPediProduct,
  flexitolHeelBalmProduct,
  plantifiqueFootPeelProduct,
  philipsFacialTrimmerProduct,
  braunIplPro5Product,
  philipsLadyShaverProduct,
  treeHutScrubProduct,
  bondiSandsMittProduct,
  tanologistDropsProduct,
  bondiSandsMousseProduct,
  candureFrisorsaxProduct,
  mariaNilaTextureProduct,
  got2bGluedProduct,
  wellaEimiMousseProduct,
  osisDustItProduct,
  denmanD3Product,
  wetBrushOriginalProduct,
  kitschClawClipsProduct,
  kitschHeatlessCurlsProduct,
  cantuSatinBonnetProduct,
  kitschMicrofiberTowelProduct,
  got2bVarmeskyddProduct,
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
  {
    slug: "resa",
    label: "Resa & packning",
    href: "/sommar/resa",
    description: "Smarta reseprylar för kabinväskan – packa lätt och res smart.",
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
