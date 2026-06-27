import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera, Mail, MessageCircle, Music2 } from "lucide-react";

import { ElinHomeHero } from "@/components/elin/ElinHomeHero";
import { ProductBadges, ScoreBadge } from "@/components/ProductBadges";
import { PriceTierBadge } from "@/components/PriceTierBadge";
import { comparisonEntries } from "@/lib/comparisons";
import {
  activeProductCategories,
  getProductPageHref,
  products,
  type Product,
} from "@/lib/products";
import { getEditorialScore } from "@/lib/scores";
import { siteConfig } from "@/lib/site";
import { sommarPicks, sommarSectionCopy } from "@/lib/sommar";

const topPicks = [...products]
  .sort(
    (a, b) =>
      (getEditorialScore(b.slug)?.total ?? 0) -
      (getEditorialScore(a.slug)?.total ?? 0),
  )
  .slice(0, 6);

const selectedComparisons = comparisonEntries.slice(0, 6);

type LatestUpdate = {
  type: "Guide" | "Hälsa" | "Hudvård" | "Hårvård" | "Träning";
  title: string;
  href: string;
  date: `${number}-${number}-${number}`;
  image: string;
  blurb: string;
};

// Lägg till nyaste överst
const latestUpdates = [
  {
    type: "Hälsa",
    title: "Govee WiFi termometer/hygrometer (2-pack)",
    href: "/halsa/hygrometer",
    date: "2026-06-27",
    image: "/products/govee-hygrometer/hygrometer-thumbnail.webp",
    blurb: "Smart termometer och hygrometer som mäter temperatur och luftfuktighet och larmar i appen.",
  },
  {
    type: "Hälsa",
    title: "TWSOUL motiverande vattenflaska 2 L",
    href: "/halsa/motiverande-vattenflaska",
    date: "2026-06-27",
    image: "/products/twsoul-bottle/bottle-thumbnail.webp",
    blurb: "Tidsmarkerad vattenflaska som påminner dig att dricka jämnt över dagen.",
  },
  {
    type: "Hälsa",
    title: "Stanley Classic termos 1,0 L",
    href: "/halsa/termos",
    date: "2026-06-27",
    image: "/products/stanley-termos/termos-thumbnail.webp",
    blurb: "Robust rostfri termos som håller dryck varm eller kall i timmar.",
  },
  {
    type: "Hälsa",
    title: "Oral-B iO 5S eltandborste",
    href: "/halsa/eltandborste",
    date: "2026-06-27",
    image: "/products/oralb-io5/tandborste-thumbnail.webp",
    blurb: "Elektrisk tandborste med rund borste och tryckvakt för en skön, ren känsla.",
  },
  {
    type: "Hälsa",
    title: "eufy C10 robotdammsugare",
    href: "/halsa/robotdammsugare",
    date: "2026-06-27",
    image: "/products/eufy-robovac/robot-thumbnail.webp",
    blurb: "Prisvärd robotdammsugare som sköter golvstädningen automatiskt med appstyrning.",
  },
  {
    type: "Hälsa",
    title: "Govee Neon Rope Light 2 RGBIC",
    href: "/halsa/led-list",
    date: "2026-06-27",
    image: "/products/govee-neon-rope/ledlist-thumbnail.webp",
    blurb: "Böjbar neon LED-list med appstyrning för stämningsbelysning och mysig kvällskänsla.",
  },
  {
    type: "Hälsa",
    title: "Gritin 19 LED uppladdningsbar läslampa / klämlampa",
    href: "/halsa/laslampa",
    date: "2026-06-27",
    image: "/products/gritin-reading-light/laslampa-thumbnail.webp",
    blurb: "Uppladdningsbar klämlampa med flera ljuslägen för läsning i sängen utan att störa.",
  },
  {
    type: "Hälsa",
    title: "soundcore Motion 300 bluetooth-högtalare",
    href: "/halsa/bluetooth-hogtalare",
    date: "2026-06-27",
    image: "/products/soundcore-motion300/hogtalare-thumbnail.webp",
    blurb: "Portabel bluetooth-högtalare med fylligt ljud och lång batteritid för hemma och utomhus.",
  },
  {
    type: "Hälsa",
    title: "Loop Quiet 2 öronproppar för sömn",
    href: "/halsa/oronproppar",
    date: "2026-06-27",
    image: "/products/loop-quiet/oronproppar-thumbnail.webp",
    blurb: "Återanvändbara öronproppar som dämpar ljud för lugnare sömn, fokus och resor.",
  },
  {
    type: "Hälsa",
    title: "Manta Sleep Mask – 100% mörkläggande sovmask",
    href: "/halsa/sovmask",
    date: "2026-06-27",
    image: "/products/manta-sleep-mask/sovmask-thumbnail.webp",
    blurb: "Justerbar sovmask med formade ögonkåpor som blockar ljus helt utan tryck mot ögonen.",
  },
  {
    type: "Hälsa",
    title: "Philips Wake-up Light HF3651/01",
    href: "/halsa/wake-up-light",
    date: "2026-06-27",
    image: "/products/philips-wakeup/wakeup-thumbnail.webp",
    blurb: "Ljusväckarklocka med soluppgångssimulering som väcker dig mjukt med ljus som ökar gradvis.",
  },
  {
    type: "Hälsa",
    title: "Magicteam white noise-maskin (40 ljud)",
    href: "/halsa/white-noise",
    date: "2026-06-27",
    image: "/products/magicteam-white-noise/whitenoise-thumbnail.webp",
    blurb: "White noise-maskin med 40 ljud för en lugn ljudkuliss till sömn och fokus.",
  },
  {
    type: "Hälsa",
    title: "Withings Body Smart digital personvåg",
    href: "/halsa/personvag",
    date: "2026-06-27",
    image: "/products/withings-scale/vag-thumbnail.webp",
    blurb: "Smart personvåg som mäter vikt och kroppssammansättning och synkar till appen.",
  },
  {
    type: "Hälsa",
    title: "Mattibi spikmatta / akupressurmatta med kudde",
    href: "/halsa/spikmatta",
    date: "2026-06-27",
    image: "/products/mattibi-spikmatta/spikmatta-thumbnail.webp",
    blurb: "Spikmatta med kudde för en skön stund av avkoppling efter en lång dag.",
  },
  {
    type: "Hälsa",
    title: "Beurer HK Comfort värmedyna",
    href: "/halsa/varmedyna",
    date: "2026-06-27",
    image: "/products/beurer-varmedyna/varmedyna-thumbnail.webp",
    blurb: "Mjuk värmedyna för skön värme och en avkopplande känsla för rygg, mage eller axlar.",
  },
  {
    type: "Hälsa",
    title: "Beurer FM 90 shiatsu fotmassage",
    href: "/halsa/fotmassage",
    date: "2026-06-27",
    image: "/products/beurer-fm90/fotmassage-thumbnail.webp",
    blurb: "Shiatsu-fotmassage med mjuk värme för en skön, avslappnande stund för trötta fötter.",
  },
  {
    type: "Hälsa",
    title: "RENPHO shiatsu massagekudde med värme",
    href: "/halsa/massagekudde",
    date: "2026-06-27",
    image: "/products/renpho-massage-pillow/massagekudde-thumbnail.webp",
    blurb: "Shiatsu-massagekudde med mjuk värme för en skön, avslappnande stund.",
  },
  {
    type: "Hälsa",
    title: "Beurer LV 50 Fresh Breeze luftkylare",
    href: "/halsa/luftkylare",
    date: "2026-06-27",
    image: "/products/beurer-lv50/kylare-thumbnail.webp",
    blurb: "Liten, portabel bordsluftkylare för en svalkande, personlig bris.",
  },
  {
    type: "Hälsa",
    title: "Xiaomi Mi Smart Standing Fan 2 Lite",
    href: "/halsa/bordsflakt",
    date: "2026-06-27",
    image: "/products/xiaomi-fan/xiaomi-fan-thumbnail.webp",
    blurb: "Tyst, smart fläkt med flera lägen och appstyrning för skrivbord och sovrum.",
  },
  {
    type: "Hälsa",
    title: "JISULIFE Pro1 handfläkt",
    href: "/halsa/handflakt",
    date: "2026-06-27",
    image: "/products/jisulife-handfan/handflakt-thumbnail.webp",
    blurb: "Uppladdningsbar handfläkt med kraftfullt men tyst luftflöde och långt batteri.",
  },
  {
    type: "Hälsa",
    title: "Ella tyngdtäcke 9 kg (150x200 cm)",
    href: "/halsa/tyngdtacke",
    date: "2026-06-27",
    image: "/products/ella-weighted-blanket/tyngdtacke-thumbnail.webp",
    blurb: "Tyngdtäcke med jämn, omslutande tyngd för en skön avkoppling.",
  },
  {
    type: "Hälsa",
    title: "Levoit Smart 6L luftfuktare (Classic 300S)",
    href: "/halsa/luftfuktare",
    date: "2026-06-27",
    image: "/products/levoit-humidifier/humid-thumbnail.webp",
    blurb: "Smart luftfuktare som tillför fukt till torr inomhusluft med tyst nattläge.",
  },
  {
    type: "Hälsa",
    title: "Pro Breeze luftavfuktare 20 l/dygn",
    href: "/halsa/luftavfuktare",
    date: "2026-06-27",
    image: "/products/pro-breeze-dehumidifier/dehumid-thumbnail.webp",
    blurb: "Luftavfuktare som drar ur fukt för en torrare och fräschare inomhusluft.",
  },
  {
    type: "Träning",
    title: "Fitgriff lifting straps / dragremmar",
    href: "/traning/lifting-straps",
    date: "2026-06-27",
    image: "/products/fitgriff-straps/straps-thumbnail.webp",
    blurb: "Vadderade dragremmar som förbättrar greppet vid marklyft och rodd.",
  },
  {
    type: "Träning",
    title: "Fuel24 vattenflaska / gym jug",
    href: "/traning/vattenflaska",
    date: "2026-06-27",
    image: "/products/fuel24-jug/jug-thumbnail.webp",
    blurb: "Stor vattenflaska på 2,2 liter för gym och vardag med koll på vätskeintaget.",
  },
  {
    type: "Träning",
    title: "Salomon Active Skin 4 löparväst",
    href: "/traning/loparvast",
    date: "2026-06-27",
    image: "/products/salomon-loparvast/loparvast-thumbnail.webp",
    blurb: "Tätt sittande löparväst med vätskeflaskor och fickor för längre löprundor.",
  },
  {
    type: "Träning",
    title: "Rehband RX knäskydd 5 mm",
    href: "/traning/knaskydd",
    date: "2026-06-27",
    image: "/products/rehband-knee/knaskydd-thumbnail.webp",
    blurb: "Knäskydd i neopren som ger stöd och värme vid tunga lyft och löpning.",
  },
  {
    type: "Träning",
    title: "Gvolatee agility-stege med koner (4,5 m)",
    href: "/traning/agility-stege",
    date: "2026-06-27",
    image: "/products/gvolatee-agility/agility-thumbnail.webp",
    blurb: "Koordinationsstege med koner för snabbhet, fotarbete och uppvärmning.",
  },
  {
    type: "Träning",
    title: "DH FitLife fitnesstudsmatta med handtag (Ø102 cm)",
    href: "/traning/studsmatta",
    date: "2026-06-27",
    image: "/products/dh-trampoline/trampoline-thumbnail.webp",
    blurb: "Studsmatta med handtag för skonsam kondition inomhus.",
  },
  {
    type: "Träning",
    title: "Gorilla Sports core sliders (2-pack)",
    href: "/traning/core-slider",
    date: "2026-06-27",
    image: "/products/gorilla-sliders/sliders-thumbnail.webp",
    blurb: "Dubbelsidiga sliders för core-, mage- och rumpövningar hemma.",
  },
  {
    type: "Träning",
    title: "Reebok Step justerbar stepbräda",
    href: "/traning/stepbrada",
    date: "2026-06-27",
    image: "/products/reebok-step/step-thumbnail.webp",
    blurb: "Justerbar stepbräda i tre höjder för step-, kondition- och HIIT-pass.",
  },
  {
    type: "Träning",
    title: "G5 HT Sport pilatesring (med handtag)",
    href: "/traning/pilatesring",
    date: "2026-06-27",
    image: "/products/g5-pilatesring/pilatesring-thumbnail.webp",
    blurb: "Pilatesring med dubbla handtag för inre lår, core och armar.",
  },
  {
    type: "Träning",
    title: "BODYMATE yogabälte / yoga strap (bomull)",
    href: "/traning/yogabalte",
    date: "2026-06-27",
    image: "/products/bodymate-yogastrap/yogastrap-thumbnail.webp",
    blurb: "Yogabälte i bomull som hjälper dig nå längre i stretch och rörlighet.",
  },
  {
    type: "Träning",
    title: "BODYMATE yogablock i kork (2-pack)",
    href: "/traning/yogablock",
    date: "2026-06-27",
    image: "/products/bodymate-yogablock/yogablock-thumbnail.webp",
    blurb: "Stabila yogablock i kork som ger stöd och rätt höjd i positioner.",
  },
  {
    type: "Träning",
    title: "C.P. Sports lyftarbälte (T9)",
    href: "/traning/lyftarbalte",
    date: "2026-06-27",
    image: "/products/cpsports-belt/balte-thumbnail.webp",
    blurb: "Stödjande lyftarbälte för marklyft och knäböj som stabiliserar bålen.",
  },
  {
    type: "Träning",
    title: "ASIPRO handledslindor",
    href: "/traning/handledslindor",
    date: "2026-06-27",
    image: "/products/asipro-wraps/wraps-thumbnail.webp",
    blurb: "Stödjande wrist wraps på 18 tum för tunga lyft som bänk- och axelpress.",
  },
  {
    type: "Träning",
    title: "ihuan träningshandskar",
    href: "/traning/traningshandskar",
    date: "2026-06-27",
    image: "/products/ihuan-gloves/handskar-thumbnail.webp",
    blurb: "Ventilerade gymhandskar med handledsstöd för bättre grepp och skydd.",
  },
  {
    type: "Träning",
    title: "Elvire Sport miniband",
    href: "/traning/miniband",
    date: "2026-06-27",
    image: "/products/elvire-miniband/miniband-thumbnail.webp",
    blurb: "Halkfria tygband i tre motstånd för rumpa, ben och uppvärmning.",
  },
  {
    type: "Träning",
    title: "Gorilla Sports gymnastikringar",
    href: "/traning/gymnastikringar",
    date: "2026-06-27",
    image: "/products/gorilla-rings/ringar-thumbnail.webp",
    blurb: "Gymnastikringar med justerbara remmar för calisthenics och kroppsvikt.",
  },
  {
    type: "Träning",
    title: "Gorilla Sports push up-handtag",
    href: "/traning/push-up-handtag",
    date: "2026-06-27",
    image: "/products/gorilla-pushup/pushup-h-thumbnail.webp",
    blurb: "Push up-handtag med neutralt skumgrepp som skonar handlederna.",
  },
  {
    type: "Träning",
    title: "Iron Gym chins-/pull-up-stång för dörr",
    href: "/traning/pull-up-bar",
    date: "2026-06-27",
    image: "/products/iron-gym-pullup/pullup-thumbnail.webp",
    blurb: "Chinsstång som monteras i dörrkarmen utan borrning, för dragövningar.",
  },
  {
    type: "Träning",
    title: "Amonax maghjul / ab wheel",
    href: "/traning/maghjul",
    date: "2026-06-27",
    image: "/products/amonax-maghjul/maghjul-thumbnail.webp",
    blurb: "Maghjul för core- och bålträning med knämatta som ingår.",
  },
  {
    type: "Träning",
    title: "Gorilla Sports balansbräda i trä",
    href: "/traning/balansplatta",
    date: "2026-06-27",
    image: "/products/gorilla-balansplatta/balans-thumbnail.webp",
    blurb: "Balansbräda i trä (Ø40 cm) för balans-, core- och fotledsträning.",
  },
  {
    type: "Träning",
    title: "Gorilla Sports gymboll / pilatesboll",
    href: "/traning/gymboll",
    date: "2026-06-27",
    image: "/products/gorilla-gymboll/gymboll-thumbnail.webp",
    blurb: "Anti-burst träningsboll för core, balans och pilates – pump ingår.",
  },
  {
    type: "Träning",
    title: "BowFlex SelectTech 552i justerbara hantlar",
    href: "/traning/justerbara-hantlar",
    date: "2026-06-27",
    image: "/products/bowflex-552i/bowflex-thumbnail.webp",
    blurb: "Ett par justerbara hantlar 2–24 kg som ersätter flera vikter och sparar plats hemma.",
  },
  {
    type: "Hudvård",
    title: "Real Techniques Miracle Complexion Sponge",
    href: "/skonhet/sminksvamp",
    date: "2026-06-27",
    image: "/products/rt-sponge/rt-sponge-thumbnail.webp",
    blurb: "Mjuk sminksvamp i 2-pack för en jämn, naturlig foundationfinish.",
  },
  {
    type: "Hudvård",
    title: "Real Techniques Everyday Essentials",
    href: "/skonhet/sminkborstar",
    date: "2026-06-27",
    image: "/products/rt-brushes/rt-brushes-thumbnail.webp",
    blurb: "Prisvärt nybörjarset med mjuka sminkborstar och svamp.",
  },
  {
    type: "Hudvård",
    title: "Press-on naglar – Classic Black French",
    href: "/skonhet/press-on-naglar",
    date: "2026-06-27",
    image: "/products/press-on-naglar/press-on-thumbnail.webp",
    blurb: "Återanvändbara press-on naglar för en snabb salongslook hemma.",
  },
  {
    type: "Hudvård",
    title: "Beurer MP 62 manikyr- och pedikyrset",
    href: "/skonhet/nagelvard-set",
    date: "2026-06-27",
    image: "/products/beurer-mani-pedi/beurer-mp62-thumbnail.webp",
    blurb: "Elektriskt mani- och pedikyrset med flera sliphuvuden för naglar och förhårdnader.",
  },
  {
    type: "Hudvård",
    title: "Flexitol Heel Balm 25% Urea",
    href: "/skonhet/halkram",
    date: "2026-06-27",
    image: "/products/flexitol-heel-balm/flexitol-thumbnail.webp",
    blurb: "Rik hälkräm med 25% urea som mjukgör mycket torra, strävа hälar.",
  },
  {
    type: "Hudvård",
    title: "Plantifique Peach Foot Exfoliation Mask",
    href: "/skonhet/foot-peel-mask",
    date: "2026-06-27",
    image: "/products/plantifique-foot-peel/foot-peel-thumbnail.webp",
    blurb: "Exfolierande fotmask som mjukgör torr, sträv hud och ger lena fötter.",
  },
  {
    type: "Hudvård",
    title: "Philips Facial Hair Remover 5000 Series",
    href: "/skonhet/ansiktstrimmer",
    date: "2026-06-27",
    image: "/products/philips-facial-trimmer/philips-trimmer-thumbnail.webp",
    blurb: "Skonsam ansiktstrimmer som tar bort fjun snabbt och enkelt.",
  },
  {
    type: "Hudvård",
    title: "Braun Silk-expert Pro 5 IPL",
    href: "/skonhet/ipl-harborttagning",
    date: "2026-06-27",
    image: "/products/braun-ipl-pro5/braun-ipl-thumbnail.webp",
    blurb: "IPL för hårborttagning hemma med synligt mindre hårväxt över tid.",
  },
  {
    type: "Hudvård",
    title: "Philips Lady Shaver Series 8000",
    href: "/skonhet/rakapparat-dam",
    date: "2026-06-27",
    image: "/products/philips-lady-shaver/philips-shaver-thumbnail.webp",
    blurb: "Våt/torr rakapparat för slät hud på ben och kropp, smidig hemma.",
  },
  {
    type: "Hudvård",
    title: "Tree Hut Vanilla Shea Sugar Scrub",
    href: "/skonhet/kroppsskrubb",
    date: "2026-06-27",
    image: "/products/tree-hut-scrub/tree-hut-thumbnail.webp",
    blurb: "Sockerskrubb med sheasmör som exfolierar och mjukgör kroppen.",
  },
  {
    type: "Hudvård",
    title: "Bondi Sands appliceringsvante",
    href: "/skonhet/sjalvbrun-vante",
    date: "2026-06-27",
    image: "/products/bondi-sands-mitt/bondi-mitt-thumbnail.webp",
    blurb: "Återanvändbar vante för jämn, fläckfri applicering av brun-utan-sol.",
  },
  {
    type: "Hudvård",
    title: "Tanologist Self Tan Drops Dark – tanning drops",
    href: "/skonhet/tanning-drops",
    date: "2026-06-27",
    image: "/products/tanologist-drops/tanologist-thumbnail.webp",
    blurb: "Självbrunande droppar som blandas i fuktkrämen för en gradvis, naturlig färg.",
  },
  {
    type: "Hudvård",
    title: "Bondi Sands Ultra Dark – brun utan sol-mousse",
    href: "/skonhet/brun-utan-sol-mousse",
    date: "2026-06-27",
    image: "/products/bondi-sands-mousse/bondi-mousse-thumbnail.webp",
    blurb: "Självbrunande mousse som ger en djup, jämn färg utan sol – inte solskydd.",
  },
  {
    type: "Hårvård",
    title: "Candure frisörsax i rostfritt stål",
    href: "/skonhet/frisorsax",
    date: "2026-06-26",
    image: "/products/candure-frisorsax/candure-thumbnail.webp",
    blurb: "Vass frisörsax i rostfritt stål för att putsa lugg och toppar hemma.",
  },
  {
    type: "Hårvård",
    title: "Maria Nila Texture Spray",
    href: "/skonhet/texturspray",
    date: "2026-06-26",
    image: "/products/maria-nila-texture/maria-nila-thumbnail.webp",
    blurb: "Salt spray-baserad texturspray för matt volym och beach waves-känsla.",
  },
  {
    type: "Hårvård",
    title: "Got2b Glued hårspray",
    href: "/skonhet/harspray",
    date: "2026-06-27",
    image: "/products/got2b-glued/got2b-glued-thumbnail.webp",
    blurb: "Extra stark hårspray för styling som håller hela dagen.",
  },
  {
    type: "Hårvård",
    title: "Wella EIMI Extra Volume Mousse",
    href: "/skonhet/harmousse",
    date: "2026-06-27",
    image: "/products/wella-eimi-mousse/wella-thumbnail.webp",
    blurb: "Volymmousse för fyllighet och hållbar styling.",
  },
  {
    type: "Hårvård",
    title: "Schwarzkopf OSiS+ Dust It",
    href: "/skonhet/volympuder",
    date: "2026-06-27",
    image: "/products/osis-dust-it/osis-thumbnail.webp",
    blurb: "Matt volympuder som ger snabb rotvolym och grepp.",
  },
  {
    type: "Hårvård",
    title: "Denman D3 Original Styler",
    href: "/skonhet/denman-borste",
    date: "2026-06-27",
    image: "/products/denman-d3/denman-thumbnail.webp",
    blurb: "Klassisk stylingborste med 7 rader, populär för lockdefinition och utredning.",
  },
  {
    type: "Hårvård",
    title: "Wet Brush Original Detangler",
    href: "/skonhet/wet-brush",
    date: "2026-06-27",
    image: "/products/wet-brush/wet-brush-thumbnail.webp",
    blurb: "Utredningsborste med flexibla borst som reder ut tovor skonsamt på blött och torrt hår.",
  },
  {
    type: "Hårvård",
    title: "Kitsch Jumbo Claw Clips (2-pack)",
    href: "/skonhet/claw-clips",
    date: "2026-06-27",
    image: "/products/kitsch-claw-clips/kitsch-claw-thumbnail.webp",
    blurb: "Stora kloklämmor som håller upp tjockt hår stadigt och snyggt.",
  },
  {
    type: "Hårvård",
    title: "Kitsch Heatless Satin Curling Set",
    href: "/skonhet/heatless-curls",
    date: "2026-06-27",
    image: "/products/kitsch-heatless/kitsch-heatless-thumbnail.webp",
    blurb: "Satinband som lockar håret utan värme medan du sover.",
  },
  {
    type: "Hårvård",
    title: "Cantu Satin Nightcap – satinmössa",
    href: "/skonhet/satinmossa",
    date: "2026-06-27",
    image: "/products/cantu-bonnet/cantu-bonnet-thumbnail.webp",
    blurb: "Satinmössa som ger mindre friktion och frizz medan du sover.",
  },
  {
    type: "Hårvård",
    title: "Kitsch Microfiber Hair Towel Wrap",
    href: "/skonhet/microfiberhandduk",
    date: "2026-06-27",
    image: "/products/kitsch-microfiber-towel/kitsch-towel-thumbnail.webp",
    blurb: "Snabbtorkande mikrofiberhandduk som är skonsam mot håret och hjälper till att minska frizz.",
  },
  {
    type: "Hårvård",
    title: "Got2b Guardian Angel värmeskyddsspray",
    href: "/skonhet/varmeskyddsspray",
    date: "2026-06-27",
    image: "/products/got2b-varmeskydd/got2b-vs-thumbnail.webp",
    blurb: "Lätt värmeskyddsspray som skyddar håret vid fön, plattång och locktång upp till 220°C.",
  },
  {
    type: "Hårvård",
    title: "Maui Moisture Curl Quench+ Curl Smoothie",
    href: "/skonhet/curl-cream",
    date: "2026-06-27",
    image: "/products/maui-curl-cream/maui-thumbnail.webp",
    blurb: "Fuktgivande curl cream med kokosolja som definierar lockar och tämjer frizz.",
  },
  {
    type: "Hårvård",
    title: "Cantu Shea Butter Leave-In Repair Cream",
    href: "/skonhet/leave-in-conditioner",
    date: "2026-06-27",
    image: "/products/cantu-leave-in/cantu-thumbnail.webp",
    blurb: "Närande leave-in med sheasmör som mjukgör torrt och lockigt hår och underlättar utredning.",
  },
  {
    type: "Hårvård",
    title: "The INKEY List Glycolic Acid Scalp Scrub",
    href: "/skonhet/scalp-scrub",
    date: "2026-06-27",
    image: "/products/inkey-scalp-scrub/inkey-scrub-thumbnail.webp",
    blurb: "Exfolierande hårbottenpeeling med glykolsyra som rengör hårbotten för en fräschare känsla.",
  },
  {
    type: "Hårvård",
    title: "Mielle Rosemary Mint Scalp & Hair Oil",
    href: "/skonhet/rosmarinolja",
    date: "2026-06-27",
    image: "/products/mielle-rosemary/mielle-thumbnail.webp",
    blurb: "Viral hårbottenolja med rosmarin och mynta för en uppfriskande känsla i hårbotten.",
  },
  {
    type: "Hårvård",
    title: "Olaplex No.3 Hair Perfector",
    href: "/skonhet/olaplex-no3",
    date: "2026-06-27",
    image: "/products/olaplex-no3/olaplex3-thumbnail.webp",
    blurb: "Återuppbyggande pre-schampo-inpackning som stärker slitet och skadat hår.",
  },
  {
    type: "Hårvård",
    title: "Olaplex No.5 Bond Maintenance Conditioner",
    href: "/skonhet/olaplex-balsam",
    date: "2026-06-27",
    image: "/products/olaplex-no5/olaplex5-thumbnail.webp",
    blurb: "Återfuktande balsam som stärker och mjukgör torrt, slitet hår.",
  },
  {
    type: "Hårvård",
    title: "Olaplex No.4 Bond Maintenance Shampoo",
    href: "/skonhet/olaplex-schampo",
    date: "2026-06-27",
    image: "/products/olaplex-no4/olaplex4-thumbnail.webp",
    blurb: "Återuppbyggande schampo som stärker och vårdar slitet, färgat hår.",
  },
  {
    type: "Hudvård",
    title: "Neutrogena Norwegian Formula handkräm",
    href: "/skonhet/handkram",
    date: "2026-06-27",
    image: "/products/neutrogena-hand-cream/neutrogena-thumbnail.webp",
    blurb: "Koncentrerad handkräm för mycket torra händer där lite räcker långt.",
  },
  {
    type: "Hudvård",
    title: "Biotherm Lait Corporel kroppslotion",
    href: "/skonhet/kroppslotion",
    date: "2026-06-27",
    image: "/products/biotherm-body-lotion/biotherm-thumbnail.webp",
    blurb: "Klassisk, lättabsorberad kroppslotion som återfuktar och mjukgör huden.",
  },
  {
    type: "Hudvård",
    title: "Olay Regenerist Night Recovery",
    href: "/skonhet/nattkram",
    date: "2026-06-27",
    image: "/products/olay-night-cream/olay-night-thumbnail.webp",
    blurb: "Rik, återfuktande nattkräm som ger huden fukt och en smidigare känsla till morgonen.",
  },
  {
    type: "Hudvård",
    title: "Dior Addict Lip Glow Oil",
    href: "/skonhet/lip-oil",
    date: "2026-06-27",
    image: "/products/dior-lip-oil/dior-lip-thumbnail.webp",
    blurb: "Vårdande läppolja som återfuktar och ger läpparna en naturlig lyster – en premium-favorit.",
  },
  {
    type: "Hudvård",
    title: "COSRX Acne Pimple Master Patch",
    href: "/skonhet/pimple-patches",
    date: "2026-06-27",
    image: "/products/cosrx-pimple-patch/cosrx-patch-thumbnail.webp",
    blurb: "Tunna hydrokolloid-plåster som täcker och skyddar finnen och gör det lättare att inte peta.",
  },
  {
    type: "Hudvård",
    title: "Nature Spell Vitamin Boost Face Oil",
    href: "/skonhet/ansiktsolja",
    date: "2026-06-27",
    image: "/products/nature-spell-oil/nature-oil-thumbnail.webp",
    blurb: "Vårdande ansiktsolja för glow och återfuktning – några droppar som sista steg på kvällen.",
  },
  {
    type: "Hudvård",
    title: "Mario Badescu Facial Spray",
    href: "/skonhet/ansiktsmist",
    date: "2026-06-27",
    image: "/products/mario-badescu-mist/mario-mist-thumbnail.webp",
    blurb: "Uppfräschande ansiktsmist med aloe och rosvatten för fukt och en pigg känsla under dagen.",
  },
  {
    type: "Hudvård",
    title: "The INKEY List Peptide Moisturiser",
    href: "/skonhet/peptidserum",
    date: "2026-06-27",
    image: "/products/inkey-peptide/inkey-peptide-thumbnail.webp",
    blurb: "Återfuktande peptidkräm för en smidigare, fylligare och mjukare känsla i huden.",
  },
  {
    type: "Hudvård",
    title: "Anua Azelaic Acid 10 + Hyaluron Serum",
    href: "/skonhet/azelainsyra-serum",
    date: "2026-06-27",
    image: "/products/anua-azelaic/anua-azelaic-thumbnail.webp",
    blurb: "Serum med 10% azelainsyra och hyaluron för en jämnare hudton, lyster och en lugnare look.",
  },
  {
    type: "Hudvård",
    title: "Beauty of Joseon Glow Serum",
    href: "/skonhet/propolis-serum",
    date: "2026-06-27",
    image: "/products/boj-propolis/boj-propolis-thumbnail.webp",
    blurb: "Lystergivande serum med propolis och niacinamide för glow och en jämnare hudton.",
  },
  {
    type: "Hudvård",
    title: "COSRX Centella Aqua Soothing Ampoule",
    href: "/skonhet/centella-serum",
    date: "2026-06-27",
    image: "/products/cosrx-centella/cosrx-centella-thumbnail.webp",
    blurb: "Lugnande centella-ampoule med lätt, vattnig textur för känslig, lättirriterad hud.",
  },
  {
    type: "Hudvård",
    title: "Beauty of Joseon Centella Calming Mask",
    href: "/skonhet/sheet-mask",
    date: "2026-06-27",
    image: "/products/boj-centella-mask/boj-mask-thumbnail.webp",
    blurb: "Lugnande sheet mask med centella asiatica för en snabb boost av fukt och comfort.",
  },
  {
    type: "Hudvård",
    title: "Some By Mi Super Matcha Pore Clean Clay Mask",
    href: "/skonhet/lermask",
    date: "2026-06-27",
    image: "/products/matcha-clay-mask/clay-mask-thumbnail.webp",
    blurb: "Lermask med matcha som rengör porerna och mattar glans, 1–2 gånger i veckan.",
  },
  {
    type: "Hudvård",
    title: "DIVAIN Caffeine Eye Serum – ögonserum",
    href: "/skonhet/ogonserum",
    date: "2026-06-27",
    image: "/products/divain-eye-serum/divain-thumbnail.webp",
    blurb: "Lätt koffeinserum för ögonpartiet och synliga mörka ringar – men ännu få omdömen.",
  },
  {
    type: "Hudvård",
    title: "Cetaphil Moisturising Cream – fuktkräm för torr hud",
    href: "/skonhet/fuktkram",
    date: "2026-06-27",
    image: "/products/cetaphil-moisturizer/cetaphil-cream-thumbnail.webp",
    blurb: "Rik, återfuktande kräm för torr och känslig hud, till ansikte och kropp.",
  },
  {
    type: "Hudvård",
    title: "COSRX AHA/BHA Clarifying Treatment Toner",
    href: "/skonhet/exfolierande-toner",
    date: "2026-06-27",
    image: "/products/cosrx-toner/cosrx-toner-thumbnail.webp",
    blurb: "Mild exfolierande toner med AHA/BHA för lyster och en jämnare hudton.",
  },
  {
    type: "Hudvård",
    title: "Bioderma Sensibio H2O – micellärt vatten",
    href: "/skonhet/micellart-vatten",
    date: "2026-06-27",
    image: "/products/bioderma-sensibio/bioderma-thumbnail.webp",
    blurb: "Skonsamt micellärt vatten som rengör och tar bort smink för känslig hud.",
  },
  {
    type: "Hudvård",
    title: "Some By Mi Lacto Soy Cleansing Oil",
    href: "/skonhet/rengoringsolja",
    date: "2026-06-27",
    image: "/products/cleansing-oil/cleansing-oil-thumbnail.webp",
    blurb: "Rengöringsolja för double cleansing som löser smink och solkräm och sköljs av rent.",
  },
  {
    type: "Hudvård",
    title: "Cetaphil Gentle Skin Cleanser",
    href: "/skonhet/cetaphil-rengoring",
    date: "2026-06-27",
    image: "/products/cetaphil-cleanser/cetaphil-thumbnail.webp",
    blurb: "Mild, oparfymerad ansiktsrengöring för känslig och torr hud som rengör utan att torka ut.",
  },
  {
    type: "Hudvård",
    title: "Paula's Choice Skin Perfecting 2% BHA",
    href: "/skonhet/bha-exfoliant",
    date: "2026-06-27",
    image: "/products/paulas-choice-bha/bha-thumbnail.webp",
    blurb: "Ikoniskt exfoliant med 2% salicylsyra för renare porer, lyster och slätare hud.",
  },
  {
    type: "Hudvård",
    title: "The Purest Solutions AHA + BHA Peeling",
    href: "/skonhet/ansiktspeeling",
    date: "2026-06-27",
    image: "/products/aha-bha-peeling/peeling-thumbnail.webp",
    blurb: "Kemisk peeling med 10% AHA och 2% BHA för lyster och en jämnare hudton.",
  },
  {
    type: "Hudvård",
    title: "CELDYQUE Bakuchiol Concentrate Serum",
    href: "/skonhet/bakuchiol-serum",
    date: "2026-06-27",
    image: "/products/bakuchiol-serum/bakuchiol-thumbnail.webp",
    blurb: "Växtbaserat bakuchiolserum – ett milt alternativ för slätare och lystrande hud.",
  },
  {
    type: "Träning",
    title: "Eric Flag viktväst",
    href: "/traning/viktvast",
    date: "2026-06-26",
    image: "/products/eric-flag-viktvast/viktvast-thumbnail.webp",
    blurb: "Justerbar viktväst med löstagbara järnvikter för promenad och hemmaträning.",
  },
  {
    type: "Träning",
    title: "PORTENTUM hopprep",
    href: "/traning/hopprep",
    date: "2026-06-26",
    image: "/products/portentum-hopprep/hopprep-thumbnail.webp",
    blurb: "Prisvärt hopprep med kullager och justerbar vajer för jämn rotation.",
  },
  {
    type: "Hälsa",
    title: "Levoit Core 200S luftrenare",
    href: "/halsa/luftrenare",
    date: "2026-06-26",
    image: "/products/levoit-luftrenare/levoit-thumbnail.webp",
    blurb: "Kompakt smart luftrenare med HEPA-filter och tyst nattläge för renare luft.",
  },
  {
    type: "Hårvård",
    title: "Tangle Teezer The Original",
    href: "/skonhet/tangle-teezer",
    date: "2026-06-26",
    image: "/products/tangle-teezer-original/tangle-teezer-thumbnail.webp",
    blurb: "Populär utredande hårborste med flexibla tänder som reder ut tovor skonsamt på vått och torrt hår.",
  },
  {
    type: "Hårvård",
    title: "Örngott i 100% mullbärssilke",
    href: "/skonhet/silkesorngott",
    date: "2026-06-26",
    image: "/products/silkesorngott/silkesorngott-thumbnail.webp",
    blurb: "Silkesörngott i 19 momme mullbärssilke för mindre frizz och mindre hårbrott.",
  },
  {
    type: "Hudvård",
    title: "Gua sha-sten i rosenkvarts",
    href: "/skonhet/gua-sha",
    date: "2026-06-26",
    image: "/products/gua-sha-rosenkvarts/gua-sha-thumbnail.webp",
    blurb: "Ett viralt ansiktsverktyg i rosenkvarts för en skön, avslappnande ansiktsmassage och en lugn kvällsritual.",
  },
  {
    type: "Hudvård",
    title: "LANEIGE Lip Sleeping Mask",
    href: "/skonhet/laneige-lappmask",
    date: "2026-06-26",
    image: "/products/laneige-lip-sleeping-mask/laneige-thumbnail.webp",
    blurb: "Viral återfuktande nattläppmask med berry-doft som mjukgör läpparna medan du sover.",
  },
  {
    type: "Hudvård",
    title: "La Roche-Posay Cicaplast Baume B5+",
    href: "/skonhet/cicaplast-b5",
    date: "2026-06-26",
    image: "/products/la-roche-posay-cicaplast-b5/cicaplast-thumbnail.webp",
    blurb: "Lugnande, återfuktande balm med panthenol (B5) och shea för torr och stram hud.",
  },
  {
    type: "Hudvård",
    title: "CeraVe Hydrating Cleanser",
    href: "/skonhet/cerave-rengoring",
    date: "2026-06-26",
    image: "/products/cerave-hydrating-cleanser/cerave-thumbnail.webp",
    blurb: "Mild återfuktande ansiktsrengöring med ceramider som rengör utan att torka ut.",
  },
  {
    type: "Hudvård",
    title: "La Roche-Posay Vitamin C10 Serum",
    href: "/skonhet/vitamin-c-serum",
    date: "2026-06-26",
    image: "/products/la-roche-posay-vitamin-c10/vitamin-c10-thumbnail.webp",
    blurb: "Antioxidantserum med 10% ren C-vitamin för lyster och glow.",
  },
  {
    type: "Guide",
    title: "Snail mucin – värt hypen?",
    href: "/guider/snail-mucin-vart-hypen",
    date: "2026-06-26",
    image: "/products/cosrx-snail-essence/cosrx-snail-1.webp",
    blurb:
      "Elin går igenom snigelsekret ärligt – fukt, lyster och var hypen landar.",
  },
  {
    type: "Hudvård",
    title: "COSRX Snail Mucin Dual Essence",
    href: "/skonhet/snail-mucin-essence",
    date: "2026-06-26",
    image: "/products/cosrx-snail-essence/cosrx-snail-thumbnail.webp",
    blurb:
      "Viral K-beauty-essence med snigelsekret, niacinamide och dewy lyster.",
  },
  {
    type: "Guide",
    title: "Tyst fläkt för sovrummet",
    href: "/guider/tyst-flakt-sovrum",
    date: "2026-06-26",
    image: "/products/flakt-midea/midea-fz10-1.webp",
    blurb:
      "Nattläge, ljudnivå och när premiumfläkt faktiskt är värt det.",
  },
  {
    type: "Hälsa",
    title: "Midea FZ10-17JR tornfläkt",
    href: "/halsa/flakt/midea-fz10",
    date: "2026-06-26",
    image: "/products/flakt-midea/midea-fz10-thumbnail.webp",
    blurb: "Prisvärd tornfläkt med nattläge, timer och fjärrkontroll.",
  },
  {
    type: "Guide",
    title: "Fläkt: dyr vs billig – värt det?",
    href: "/guider/flakt-dyr-vs-billig",
    date: "2026-06-26",
    image: "/products/flakt-dreo/dreo-cruiser-1.webp",
    blurb:
      "Elin jämför tyst premium mot kraftfull budget – vad du betalar för.",
  },
  {
    type: "Hälsa",
    title: "Dreo Cruiser Pro T1 tornfläkt",
    href: "/halsa/flakt/dreo-cruiser-pro",
    date: "2026-06-26",
    image: "/products/flakt-dreo/dreo-cruiser-thumbnail.webp",
    blurb: "Tyst premiumfläkt för svalka i hela rummet.",
  },
  {
    type: "Guide",
    title: "15 ärliga köpråd – Värt priset?",
    href: "/guider",
    date: "2026-06-26",
    image: "/products/moroccanoil-harolja/harolja-moroccanoil-thumbnail.webp",
    blurb:
      "Är premium värt det, eller räcker budget? Elin går igenom det ärligt.",
  },
  {
    type: "Guide",
    title: "Hyaluronsyra: dyrt vs budget",
    href: "/guider/hyaluronsyra-dyrt-vs-budget",
    date: "2026-06-26",
    image:
      "/products/minimalist-hyaluronsyra-serum/minimalist-hyaluronsyra-serum-thumbnail.webp",
    blurb: "Betalar du för mer än fukt? Den ärliga skillnaden.",
  },
  {
    type: "Guide",
    title: "Dyson Airwrap eller varmluftsborste?",
    href: "/guider/dyson-airwrap-eller-varmluftsborste",
    date: "2026-06-25",
    image: "/products/hot-air-brushes/babyliss-as126e-thumbnail.webp",
    blurb: "Vad du faktiskt får – och när det billigare räcker.",
  },
  {
    type: "Hudvård",
    title: "The INKEY List 10% Niacinamide",
    href: "/skonhet/niacinamide-serum",
    date: "2026-06-24",
    image:
      "/products/inkey-niacinamide-serum/inkey-niacinamide-serum-thumbnail.webp",
    blurb: "Prisvärt serum som mattar fett och jämnar hudtonen.",
  },
  {
    type: "Hudvård",
    title: "Minimalist Hyaluronsyra-serum",
    href: "/skonhet/hyaluronsyra-serum",
    date: "2026-06-20",
    image:
      "/products/minimalist-hyaluronsyra-serum/minimalist-hyaluronsyra-serum-thumbnail.webp",
    blurb: "Parfymfritt fukt-serum som återfuktar på flera nivåer.",
  },
] satisfies LatestUpdate[];

export function ProductDiscoveryLanding() {
  return (
    <main
      id="content"
      className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#fff6f6] text-[#5b3441]"
    >
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,214,219,0.85),transparent_30rem),radial-gradient(circle_at_0%_78%,rgba(255,226,232,0.72),transparent_20rem),linear-gradient(90deg,rgba(255,219,224,0.42)_1px,transparent_1px)] bg-[length:auto,auto,4.4rem_4.4rem]" />

      <section className="relative mx-auto box-border w-full max-w-[27rem] min-w-0 overflow-hidden px-4 pb-[calc(7.5rem+env(safe-area-inset-bottom))] pt-5 sm:max-w-[46rem] sm:px-8 lg:max-w-6xl">
        <SiteHeader />
        <CategoryNav />
        <ElinHomeHero />
        <LatestUpdates />
        <CategoryGateway />
        <SeasonalStrip />
        <Favorites />
        <SelectedComparisons />
      </section>
    </main>
  );
}

function SiteHeader() {
  return (
    <header className="flex min-w-0 items-center justify-between gap-2 rounded-full border border-white/70 bg-white/55 p-2 shadow-[0_18px_50px_rgba(216,131,146,0.12)] backdrop-blur-xl">
      <Link
        href="/"
        className="editorial-color-kiss min-w-0 shrink pl-2 font-display text-[1.35rem] leading-none tracking-[-0.01em] sm:text-[2rem] sm:tracking-[-0.03em]"
      >
        Elins val
        <span className="ml-1 align-top text-base text-[#d88392] sm:ml-2 sm:text-lg">
          *
        </span>
      </Link>

      <div className="flex shrink-0 items-center gap-1 sm:gap-3">
        <Link
          href="/fraga-elin"
          className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#d97d91] px-4 text-sm font-black text-white shadow-[0_16px_40px_rgba(216,131,146,0.2)] transition hover:-translate-y-0.5 sm:min-h-14 sm:px-5"
        >
          <MessageCircle className="size-4 sm:size-[18px]" aria-hidden="true" />
          <span className="sm:hidden">Fråga</span>
          <span className="hidden sm:inline">Fråga Elin</span>
        </Link>
        <a
          href={`mailto:${siteConfig.email}`}
          className="grid size-10 place-items-center rounded-full bg-[#ffe1e4] text-[#7b4656] shadow-[0_16px_40px_rgba(216,131,146,0.16)] transition hover:-translate-y-0.5 sm:size-14"
          aria-label="Kontakta oss"
        >
          <Mail className="size-4 sm:size-[18px]" aria-hidden="true" />
        </a>
        <a
          href="https://www.instagram.com/elinsorenstyle/"
          target="_blank"
          rel="noopener noreferrer"
          className="grid size-10 place-items-center rounded-full bg-[#ffe1e4] text-[#7b4656] shadow-[0_16px_40px_rgba(216,131,146,0.16)] transition hover:-translate-y-0.5 sm:size-14"
          aria-label="Instagram"
        >
          <Camera className="size-4 sm:size-[18px]" aria-hidden="true" />
        </a>
        <a
          href="https://www.tiktok.com/@elinsorenlife"
          target="_blank"
          rel="noopener noreferrer"
          className="grid size-10 place-items-center rounded-full bg-[#ffe1e4] text-[#7b4656] shadow-[0_16px_40px_rgba(216,131,146,0.16)] transition hover:-translate-y-0.5 sm:size-14"
          aria-label="TikTok"
        >
          <Music2 className="size-4 sm:size-[18px]" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}

function CategoryNav() {
  return (
    <nav
      aria-label="Produktkategorier"
      className="mt-5 w-full max-w-full min-w-0 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <div className="inline-flex min-w-max max-w-none snap-x gap-2">
        <Link
          href="/jamforelser"
          className="inline-flex min-h-10 shrink-0 snap-start items-center rounded-full border border-[#efc6cc] bg-white/70 px-4 text-sm font-black text-[#7b4656] shadow-[0_12px_32px_rgba(216,131,146,0.12)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white sm:min-h-11 sm:px-5"
        >
          Jämförelser
        </Link>
        {activeProductCategories.map((category) => (
          <Link
            key={category.slug}
            href={category.href}
            className="inline-flex min-h-10 shrink-0 snap-start items-center rounded-full border border-[#efc6cc] bg-white/70 px-4 text-sm font-black text-[#7b4656] shadow-[0_12px_32px_rgba(216,131,146,0.12)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white sm:min-h-11 sm:px-5"
          >
            {category.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

function LatestUpdates() {
  const latest = [...latestUpdates]
    .sort(
      (a, b) =>
        new Date(`${b.date}T00:00:00`).getTime() -
        new Date(`${a.date}T00:00:00`).getTime(),
    )
    .slice(0, 4);

  const now = new Date();
  const newBadgeWindowMs = 14 * 24 * 60 * 60 * 1000;

  return (
    <section className="mt-8 sm:mt-10" aria-labelledby="latest-updates-title">
      <div className="max-w-3xl">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#D8788D]">
          Senast tillagt
        </p>
        <h1
          id="latest-updates-title"
          className="editorial-color-kiss mt-2 font-display text-[2.65rem] leading-[1.02] tracking-normal sm:text-6xl"
        >
          Nytt hos Elin – värt priset?
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-[#765965] sm:text-lg sm:leading-8">
          De senaste guiderna och fynden – så du slipper leta.
        </p>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {latest.map((item) => {
          const itemDate = new Date(`${item.date}T00:00:00`);
          const itemAgeMs = now.getTime() - itemDate.getTime();
          const isNew = itemAgeMs >= 0 && itemAgeMs <= newBadgeWindowMs;

          return (
            <Link
              key={`${item.href}-${item.date}`}
              href={item.href}
              className="group flex flex-col overflow-hidden rounded-[1.8rem] border border-[#efc6cc] bg-white/58 shadow-[0_20px_58px_rgba(216,131,146,0.1)] transition hover:-translate-y-1 hover:bg-white"
            >
              <div className="relative h-40 w-full overflow-hidden bg-[#fff4f5] sm:h-44">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 24rem, 92vw"
                  className="object-contain p-4 transition duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-[0.16em] text-[#D8788D]">
                      {item.type}
                    </span>
                    {isNew ? (
                      <span className="rounded-full bg-[#ffe1e4] px-2.5 py-1 text-[0.68rem] font-black uppercase tracking-[0.12em] text-[#a95468]">
                        Nytt
                      </span>
                    ) : null}
                  </div>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-[#D8788D] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>
                <h2 className="editorial-color-kiss mt-4 font-display text-2xl leading-tight sm:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#7e6970]">
                  {item.blurb}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <Link
        href="/guider"
        className="mt-5 inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#d97d91] px-6 text-sm font-black text-white shadow-[0_18px_42px_rgba(216,120,141,0.28)] transition hover:-translate-y-0.5"
      >
        Se alla guider
        <ArrowUpRight size={17} aria-hidden="true" />
      </Link>
    </section>
  );
}

function CategoryGateway() {
  return (
    <section className="mt-8" aria-labelledby="category-gateway-title">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-[#D8788D]">
        Kategorier
      </p>
      <h2
        id="category-gateway-title"
        className="editorial-color-kiss mt-2 font-display text-4xl leading-tight"
      >
        Börja där du vill jämföra.
      </h2>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {activeProductCategories.map((category) => (
          <Link
            key={category.slug}
            href={category.href}
            className="rounded-[1.8rem] border border-[#efc6cc] bg-white/58 p-6 shadow-[0_20px_58px_rgba(216,131,146,0.1)] transition hover:-translate-y-1 hover:bg-white"
          >
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#D8788D]">
              Kategori
            </p>
            <h3 className="editorial-color-kiss mt-2 font-display text-4xl leading-tight">
              {category.label}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#7e6970]">
              {category.description}
            </p>
            <span className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#d97d91] px-5 text-sm font-black text-white">
              Gå till {category.label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function SeasonalStrip() {
  const featuredPicks = sommarPicks.slice(0, 3);

  return (
    <section
      className="mt-8 overflow-hidden rounded-[2.2rem] border border-[#efc6cc] bg-[#fff4df]/82 p-5 shadow-[0_28px_86px_rgba(214,139,92,0.18)] backdrop-blur-xl sm:p-6 lg:p-7"
      aria-labelledby="seasonal-strip-title"
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <p className="inline-flex min-h-10 items-center rounded-full border border-[#efc6cc] bg-white/72 px-4 text-xs font-black uppercase tracking-[0.14em] text-[#a96876]">
              Elins sommar
            </p>
            <span className="inline-flex min-h-10 items-center rounded-full border border-[#efc6cc] bg-white/72 px-4 text-xs font-black uppercase tracking-[0.14em] text-[#a96876]">
              Annons
            </span>
          </div>
          <h2
            id="seasonal-strip-title"
            className="editorial-color-kiss mt-4 font-display text-4xl leading-tight"
          >
            Sommarens snabbaste genväg.
          </h2>
          <p className="mt-3 text-base leading-7 text-[#765965] sm:text-lg sm:leading-8">
            {sommarSectionCopy.intro}
          </p>
        </div>
        <Link
          href="/sommar"
          className="inline-flex min-h-13 shrink-0 items-center justify-center gap-2 rounded-full bg-[#d97d91] px-6 text-sm font-black text-white shadow-[0_18px_42px_rgba(216,120,141,0.28)] transition hover:-translate-y-0.5"
        >
          Se hela sommarguiden
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {featuredPicks.map((pick, index) => {
          const score = getEditorialScore(pick.productSlug);

          return (
            <article
              key={pick.productSlug}
              className="min-w-0 overflow-hidden rounded-[1.7rem] border border-[#efc6cc] bg-white/72 p-3 shadow-[0_20px_58px_rgba(216,131,146,0.12)]"
            >
              <Link
                href={pick.href}
                className="relative block aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-[#fff9f7]"
                aria-label={`Läs Elins omdöme om ${pick.product.title}`}
              >
                <Image
                  src={pick.cardImage}
                  alt={pick.cardImageAlt}
                  fill
                  sizes="(min-width: 1024px) 220px, (min-width: 640px) 30vw, 100vw"
                  className="object-cover"
                  priority={index === 0}
                  {...(index === 0 ? {} : { loading: "lazy" as const })}
                />
              </Link>
              <div className="p-2">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#D8788D]">
                  {pick.cardBadge}
                </p>
                <h3 className="mt-2 font-display text-[1.45rem] leading-tight text-[#5f4a54]">
                  <Link href={pick.href}>{pick.product.brand}</Link>
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#7e6970]">
                  {pick.cardHook}
                </p>
                {score ? (
                  <ScoreBadge score={score} className="mt-3 w-full justify-center" />
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Favorites() {
  return (
    <section className="mt-10" aria-labelledby="favorites-title">
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#D8788D]">
            Elins favoriter
          </p>
          <h2
            id="favorites-title"
            className="editorial-color-kiss mt-2 font-display text-4xl leading-tight"
          >
            Starkast val just nu
          </h2>
        </div>
        <Link
          href="/elins-val"
          className="inline-flex min-h-10 shrink-0 items-center gap-1.5 rounded-full bg-white/64 px-3 text-sm font-black text-[#b06072] shadow-[0_12px_32px_rgba(216,131,146,0.1)] transition hover:-translate-y-0.5 hover:bg-white sm:gap-2 sm:px-4"
        >
          Se alla
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-3">
        {topPicks.slice(0, 3).map((product, index) => (
          <FeaturedPick key={product.slug} product={product} priority={index === 0} />
        ))}
      </div>
    </section>
  );
}

function FeaturedPick({
  product,
  priority,
}: {
  product: Product;
  priority: boolean;
}) {
  const productHref = getProductPageHref(product);
  const score = getEditorialScore(product.slug);

  return (
    <article className="overflow-hidden rounded-[2rem] border border-[#efc6cc] bg-white/58 p-3 shadow-[0_26px_80px_rgba(216,131,146,0.16)] backdrop-blur-xl">
      <Link
        href={productHref}
        className="relative block aspect-[4/3] overflow-hidden rounded-[1.55rem] bg-[#f7e8e8]"
        aria-label={`Läs mer om ${product.title}`}
      >
        <Image
          src={product.image}
          alt={product.imageAlt}
          width={900}
          height={675}
          sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 100vw"
          className="h-full w-full object-cover"
          priority={priority}
          {...(priority ? {} : { loading: "lazy" as const })}
          quality={70}
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/88 px-3 py-1.5 text-xs font-black text-[#8c5260] shadow-[0_12px_32px_rgba(91,52,65,0.12)] backdrop-blur">
          Prisvärt val
        </span>
      </Link>
      <div className="p-3">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#d97d91]">
          {product.brand}
        </p>
        <h3 className="editorial-color-kiss mt-2 font-display text-3xl leading-tight">
          <Link href={productHref}>{product.title}</Link>
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#7e6970]">{product.summary}</p>
        <ProductBadges badges={product.badges.slice(0, 3)} className="mt-4" />
        <div className="mt-4 flex flex-wrap gap-2">
          {score ? <ScoreBadge score={score} /> : null}
          <span className="inline-flex min-h-10 items-center rounded-full bg-white/72 px-3 text-xs font-black text-[#8b5a66]">
            Annons
          </span>
        </div>
        <div className="mt-3">
          <PriceTierBadge product={product} showContext />
        </div>
      </div>
    </article>
  );
}

function SelectedComparisons() {
  return (
    <section className="mt-10" aria-labelledby="comparisons-title">
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#D8788D]">
            Utvalda jämförelser
          </p>
          <h2
            id="comparisons-title"
            className="editorial-color-kiss mt-2 font-display text-4xl leading-tight"
          >
            När valet står mellan två
          </h2>
        </div>
        <Link
          href="/jamforelser"
          className="inline-flex min-h-10 shrink-0 items-center gap-1.5 rounded-full bg-white/64 px-3 text-sm font-black text-[#b06072] shadow-[0_12px_32px_rgba(216,131,146,0.1)] transition hover:-translate-y-0.5 hover:bg-white sm:gap-2 sm:px-4"
        >
          Alla
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {selectedComparisons.map((comparison) => (
          <Link
            key={comparison.href}
            href={comparison.href}
            className="rounded-[1.6rem] border border-[#efc6cc] bg-white/62 p-5 shadow-[0_20px_58px_rgba(216,131,146,0.12)] transition hover:-translate-y-1 hover:bg-white"
          >
            <ProductBadges badges={comparison.badges.slice(0, 2)} />
            <h3 className="editorial-color-kiss mt-4 font-display text-3xl leading-tight">
              {comparison.shortTitle}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#7e6970]">
              {comparison.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
