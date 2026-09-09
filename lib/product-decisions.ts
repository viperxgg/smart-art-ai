import { mantaMaskDecision } from "@/lib/sovmask-eller-white-noise";
import { philipsWakeDecision } from "@/lib/wake-up-light-eller-solnedgangslampa";
import { daylightLampDecision } from "@/lib/daylight-lamp-decision";
import { footMassageDecision } from "@/lib/fotmassage-eller-massagepistol";
import { readingLightDecision } from "@/lib/laslampa-eller-led-list";
import { scalpDecision } from "@/lib/rosmarinolja-eller-scalp-scrub";
import { textureDecision } from "@/lib/texturspray-eller-volympuder";
import { epilatorDecision } from "@/lib/epilator-decision";
import { epilatorRazorDecision } from "@/lib/epilator-eller-rakhyvel";
import { facialBodyDecision } from "@/lib/ansiktstrimmer-eller-rakapparat-dam";
import { beardOilDecision } from "@/lib/beard-oil-decision";
import { hairClipperDecision } from "@/lib/hair-clipper-decision";
import { shaverDecision } from "@/lib/shaver-decision";
import { groomingDecision } from "@/lib/grooming-decision";
import { footSpaDecision } from "@/lib/foot-spa-decision";
import { bodyOilDecision } from "@/lib/bio-oil-eller-jojobaolja";
import { jojobaDecision } from "@/lib/jojoba-decision";
import { dryShampooDecision } from "@/lib/dry-shampoo-decision";
import { hairDryerDecision } from "@/lib/hair-dryer-decisions";
import { airStylerDecision } from "@/lib/air-styler-decisions";
import { straightenerSizeDecision } from "@/lib/mini-or-full-straightener";
import { straightOrCurlDecision } from "@/lib/platta-eller-locka";
import { manualOrAutoCurlingDecision } from "@/lib/manual-or-auto-curling";
import { curlingMethodDecision } from "@/lib/heatless-lockar-eller-locktang";
import { nightHairDecision } from "@/lib/satinmossa-eller-sidenorngott";
import { denmanDecision } from "@/lib/denman-decision";
import { detanglingDecision } from "@/lib/tangle-teezer-eller-harborste";
import { makeupToolDecision } from "@/lib/sminksvamp-eller-sminkborste";
import { clawClipDecision, hairTowelDecision } from "@/lib/kitsch-accessory-decisions";
import { handCreamDecision, bodyScrubDecision } from "@/lib/hand-body-decisions";
import { lipCareDecision } from "@/lib/lappmask-eller-lappolja";
import { clayMaskDecision, sheetMaskDecision } from "@/lib/face-mask-decisions";
import { peelingDecision } from "@/lib/bha-eller-aha-bha-peeling";
import { acidSerumTonerDecision } from "@/lib/azelainsyra-eller-aha-bha";
import { centellaPropolisDecision } from "@/lib/centella-eller-propolis";
import { hydrationSerumDecision } from "@/lib/snigelslem-eller-hyaluronsyra";
import { retinolDecision } from "@/lib/retinol-decisions";
import { bakuchiolDecision } from "@/lib/bakuchiol-eller-niacinamid";
import { vitaminCDecision } from "@/lib/vitamin-c-eller-niacinamid";
import { niacinamideDecision } from "@/lib/niacinamide-decision";
import { makeupCleansingDecision } from "@/lib/rengoringsolja-eller-micellarvatten";
import { cabinCaseDecision } from "@/lib/cabin-case-decision";
import { luggageScaleDecision } from "@/lib/luggage-scale-decision";
import { massageGunDecision } from "@/lib/massage-gun-decision";
import { bodymateCareDecision } from "@/lib/foam-roller-decision";
import { yogaPropsDecision } from "@/lib/yogablock-eller-yogabalte";
import { tanningMittDecision } from "@/lib/tanning-mitt-decision";
import { bondiTanDecision } from "@/lib/bondi-tan-decision";
import { bronzingDropsDecision } from "@/lib/bronzing-drops-decision";
import { selfTanDecision } from "@/lib/self-tan-decision";
import { aftersunDecision } from "@/lib/aftersun-eller-aloe-vera";
import { moisturizerDecision } from "@/lib/cicaplast-b5-eller-cetaphil";
import { bottleDecision } from "@/lib/bottle-decision";
import { yogaMatDecision } from "@/lib/yoga-mat-decision";
import { bedroomFanDecision } from "@/lib/bedroom-fan-decision";
import { dehumidifierDecision } from "@/lib/dehumidifier-decision";
import { kettlebellDumbbellDecision } from "@/lib/kettlebell-dumbbell-decision";
import { hairStylingDecision } from "@/lib/hair-styling-decision";
import { indoorAirDecision } from "@/lib/indoor-air-decision";
import { hairMaskDecision } from "@/lib/hair-mask-decision";
import { hantlarEllerGummibandDecision } from "@/lib/hantlar-eller-gummiband";
import { ceraveEllerCetaphilDecision } from "@/lib/cerave-eller-cetaphil";
import type { DecisionRecord } from "@/lib/decision-record";
import { ereaderDecision } from "@/lib/ereader-decision";

export type ProductDecision = DecisionRecord & {
  category: { label: string; href: string };
  comparison: { label: string; href: string };
};

export function getProductDecision(slug: string): ProductDecision | undefined {
  if (slug === "manta-sovmask") return {
    ...mantaMaskDecision,
    category: { label: "Hälsa & vardag", href: "/halsa" },
    comparison: { label: "Sovmask eller ljudmaskin?", href: "/halsa/sovmask-eller-white-noise" },
  };
  if (slug === "philips-wake-up-light") return {
    ...philipsWakeDecision,
    category: { label: "Hälsa & vardag", href: "/halsa" },
    comparison: { label: "Ljusväckning eller dekorationsljus?", href: "/halsa/wake-up-light-eller-solnedgangslampa" },
  };
  const daylightOption = daylightLampDecision.options.find(option => option.productSlug === slug);
  if (daylightOption) return {
    ...daylightLampDecision, options: [daylightOption],
    category: { label: "Hälsa & vardag", href: "/halsa" },
    comparison: { label: "TL 30 eller TL 35 – behöver du fler reglage?", href: "/halsa/beurer-tl30-eller-tl35" },
  };
  if (slug === "beurer-fotmassage") return {
    ...footMassageDecision, options: [footMassageDecision.options[0]],
    category: { label: "Hälsa & vardag", href: "/halsa" },
    comparison: { label: "Fotmassage eller ett handhållet redskap?", href: "/halsa/fotmassage-eller-massagepistol" },
  };
  const readingLightOption = readingLightDecision.options.find(item => item.productSlug === slug);
  if (readingLightOption) return {
    ...readingLightDecision, options: [readingLightOption],
    category: { label: "Hälsa & vardag", href: "/halsa" },
    comparison: { label: "Behöver du läsljus eller färg i rummet?", href: "/halsa/laslampa-eller-led-list" },
  };
  const scalpOption = scalpDecision.options.find(item => item.productSlug === slug);
  if (scalpOption) return {
    ...scalpDecision, options: [scalpOption],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Olja eller scalp scrub?", href: "/skonhet/rosmarinolja-eller-scalp-scrub" },
  };
  const textureOption = textureDecision.options.find(item => item.productSlug === slug);
  if (textureOption) return {
    ...textureDecision, options: [textureOption],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Texturspray eller puder?", href: "/skonhet/texturspray-eller-volympuder" },
  };
  if (slug === "panasonic-es-ey30-epilator") return {
    ...epilatorDecision, options: [epilatorDecision.options[0]],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Vilka tillbehör behöver du?", href: "/skonhet/epilator" },
  };
  const epilatorRazorOption = epilatorRazorDecision.options.find(item => item.productSlug === slug);
  if (epilatorRazorOption) return {
    ...epilatorRazorDecision, options: [epilatorRazorOption],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Epilera eller raka?", href: "/skonhet/epilator-eller-rakhyvel" },
  };
  const facialBodyOption = facialBodyDecision.options.find(item => item.productSlug === slug);
  if (facialBodyOption) return {
    ...facialBodyDecision, options: [facialBodyOption],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Bara ansiktshår eller även kroppsrakning?", href: "/skonhet/ansiktstrimmer-eller-rakapparat-dam" },
  };
  if (slug === "loreal-skaggolja") return {
    ...beardOilDecision,
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Vad saknas i din rutin?", href: "/skonhet/grooming" },
  };
  if (slug === "remington-harklippare") return {
    ...hairClipperDecision,
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Vilket verktyg behöver du?", href: "/skonhet/grooming" },
  };
  if (slug === "philips-rakapparat-5000") return {
    ...shaverDecision, options: [shaverDecision.options[0]],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Rakapparat eller OneBlade?", href: "/skonhet/rakapparat-eller-oneblade" },
  };
  const groomingOption = groomingDecision.options.find(item => item.productSlug === slug);
  if (groomingOption) return {
    ...groomingDecision, options: [groomingOption],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Kanter eller längdkontroll?", href: "/skonhet/oneblade-eller-skaggtrimmer" },
  };
  if (slug === "beurer-fb35-fotbad") return {
    ...footSpaDecision,
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Behöver du ett elektriskt fotbad?", href: "/skonhet/elektriskt-eller-enkelt-fotbad" },
  };
  if (slug === "bio-oil") return {
    ...bodyOilDecision, options: [bodyOilDecision.options[0]],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Bio-Oil eller jojobaolja?", href: "/skonhet/bio-oil-eller-jojobaolja" },
  };
  if (slug === "kanzy-jojobaolja") return {
    ...jojobaDecision,
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Behöver du en extra olja?", href: "/guider/jojobaolja-multitalang" },
  };
  if (slug === "moroccanoil-torrschampo") return {
    ...dryShampooDecision,
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Vad skulle du betala extra för?", href: "/guider/torrschampo-dyrt-vs-billigt" },
  };
  const dryerOption = hairDryerDecision.options.find(item => item.productSlug === slug);
  if (dryerOption) return {
    ...hairDryerDecision, options: [dryerOption],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Vilken hårtork passar din rutin?", href: "/skonhet/hartork" },
  };
  const airStylerOption = airStylerDecision.options.find(item => item.productSlug === slug);
  if (airStylerOption) return {
    ...airStylerDecision, options: [airStylerOption],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Vilka borsttillbehör behöver du?", href: "/skonhet/varmluftsborste" },
  };
  if (slug === "remington-mini-s2880-plattang") return {
    ...straightenerSizeDecision, options: [straightenerSizeDecision.options[1]],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Mini eller fullstor plattång?", href: "/skonhet/plattang" },
  };
  if (slug === "remington-s8540-plattang") return {
    ...straightOrCurlDecision, options: [straightOrCurlDecision.options[0]],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Platta eller locka?", href: "/skonhet/platta-eller-locka" },
  };
  if (slug === "tymo-curlpro-locktang") return {
    ...manualOrAutoCurlingDecision, options: [manualOrAutoCurlingDecision.options[1]],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Manuell eller automatisk inrullning?", href: "/skonhet/locktang" },
  };
  const curlOption = curlingMethodDecision.options.find(item => item.productSlug === slug);
  if (curlOption) return {
    ...curlingMethodDecision, options: [curlOption],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Vilken lockmetod passar dig?", href: "/skonhet/heatless-lockar-eller-locktang" },
  };
  const nightHairOption = nightHairDecision.options.find(item => item.productSlug === slug);
  if (nightHairOption) return {
    ...nightHairDecision, options: [nightHairOption],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Vilken nattrutin passar dig?", href: "/skonhet/satinmossa-eller-sidenorngott" },
  };
  if (slug === denmanDecision.options[0].productSlug) return {
    ...denmanDecision,
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Behöver du främst reda ut håret?", href: "/skonhet/tangle-teezer-eller-harborste" },
  };
  const brushOption = detanglingDecision.options.find(item => item.productSlug === slug);
  if (brushOption) return {
    ...detanglingDecision, options: [brushOption],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Behöver du en ny borste?", href: "/skonhet/tangle-teezer-eller-harborste" },
  };
  const makeupToolOption = makeupToolDecision.options.find(item => item.productSlug === slug);
  if (makeupToolOption) return {
    ...makeupToolDecision, options: [makeupToolOption],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Vilka verktyg saknar du?", href: "/skonhet/sminksvamp-eller-sminkborste" },
  };
  if (slug === clawClipDecision.options[0].productSlug) return {
    ...clawClipDecision,
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Fler produktval inom skönhet", href: "/skonhet" },
  };
  if (slug === hairTowelDecision.options[0].productSlug) return {
    ...hairTowelDecision,
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Hårolja eller värmeskydd?", href: "/skonhet/harolja-eller-varmeskydd" },
  };
  if (slug === handCreamDecision.options[0].productSlug) return {
    ...handCreamDecision,
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Fler produktval inom skönhet", href: "/skonhet" },
  };
  if (slug === bodyScrubDecision.options[0].productSlug) return {
    ...bodyScrubDecision,
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Kontrollera din brun-utan-sol-rutin", href: "/guider/brun-utan-sol-vart-det" },
  };
  const lipOption = lipCareDecision.options.find(item => item.productSlug === slug);
  if (lipOption) return {
    ...lipCareDecision, options: [lipOption],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Behöver du nattsteg eller glans?", href: "/skonhet/lappmask-eller-lappolja" },
  };
  if (slug === clayMaskDecision.options[0].productSlug) return {
    ...clayMaskDecision,
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Ett annat maskformat: arkmask", href: "/skonhet/sheet-mask" },
  };
  if (slug === sheetMaskDecision.options[0].productSlug) return {
    ...sheetMaskDecision,
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Ett annat maskformat: lermask", href: "/skonhet/lermask" },
  };
  const peelingOption = peelingDecision.options.find(item => item.productSlug === slug);
  if (peelingOption) return {
    ...peelingDecision, options: [peelingOption],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Lämna kvar eller skölja av?", href: "/skonhet/bha-eller-aha-bha-peeling" },
  };
  const acidOption = acidSerumTonerDecision.options.find(item => item.productSlug === slug);
  if (acidOption) return {
    ...acidSerumTonerDecision, options: [acidOption],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Serum eller toner?", href: "/skonhet/azelainsyra-eller-aha-bha" },
  };
  const calmingOption = centellaPropolisDecision.options.find(item => item.productSlug === slug);
  if (calmingOption) return {
    ...centellaPropolisDecision, options: [calmingOption],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Jämför hela formulan", href: "/skonhet/centella-eller-propolis" },
  };
  const hydrationOption = hydrationSerumDecision.options.find(item => item.productSlug === slug);
  if (hydrationOption) return {
    ...hydrationSerumDecision, options: [hydrationOption],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Behövs ett extra fuktsteg?", href: "/skonhet/snigelslem-eller-hyaluronsyra" },
  };
  if (slug === bakuchiolDecision.options[0].productSlug) return {
    ...bakuchiolDecision,
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Koncentrat eller serum?", href: "/skonhet/bakuchiol-eller-niacinamid" },
  };
  const retinolOption = retinolDecision.options.find(item => item.productSlug === slug);
  if (retinolOption) return {
    ...retinolDecision, options: [retinolOption],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Kontrollera version och användning", href: "/skonhet/retinolserum" },
  };
  if (slug === vitaminCDecision.options[0].productSlug) return {
    ...vitaminCDecision,
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Behöver du ett nytt serum?", href: "/skonhet/vitamin-c-eller-niacinamid" },
  };
  if (slug === niacinamideDecision.options[0].productSlug) return {
    ...niacinamideDecision,
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Behöver du byta koncentration?", href: "/guider/niacinamide-10-vs-20" },
  };
  const cleansingOption = makeupCleansingDecision.options.find(item => item.productSlug === slug);
  if (cleansingOption) return {
    ...makeupCleansingDecision, options: [cleansingOption],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Skölja eller använda rondell?", href: "/skonhet/rengoringsolja-eller-micellarvatten" },
  };
  if (slug === cabinCaseDecision.options[0].productSlug) return {
    ...cabinCaseDecision,
    category: { label: "Resa", href: "/sommar/resa" },
    comparison: { label: "Vikt, mått och vad bokningen tillåter", href: "/guider/bagagevag-vart-det" },
  };
  if (slug === luggageScaleDecision.options[0].productSlug) return {
    ...luggageScaleDecision,
    category: { label: "Resa", href: "/sommar/resa" },
    comparison: { label: "Behöver du en separat bagagevåg?", href: "/guider/bagagevag-vart-det" },
  };
  const yogaPropOption = yogaPropsDecision.options.find(item => item.productSlug === slug);
  if (yogaPropOption) return {
    ...yogaPropsDecision, options: [yogaPropOption],
    category: { label: "Träning", href: "/traning" },
    comparison: { label: "Stöd eller ett band att hålla i?", href: "/traning/yogablock-eller-yogabalte" },
  };
  if (slug === bodymateCareDecision.options[0].productSlug) return {
    ...bodymateCareDecision,
    category: { label: "Träning", href: "/traning" },
    comparison: { label: "Rulle eller massagepistol?", href: "/traning/foam-roller-eller-massagepistol" },
  };
  if (slug === massageGunDecision.options[0].productSlug) return {
    ...massageGunDecision,
    category: { label: "Hälsa & vardag", href: "/halsa" },
    comparison: { label: "Vad behöver du kontrollera före köp?", href: "/halsa/massagepistol" },
  };
  if (slug === tanningMittDecision.options[0].productSlug) return {
    ...tanningMittDecision,
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Vilket användningssätt behöver du?", href: "/skonhet/bronzer-eller-brun-utan-sol" },
  };
  if (slug === bondiTanDecision.options[0].productSlug) return {
    ...bondiTanDecision,
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Tillfällig färg eller Ultra Dark?", href: "/skonhet/bronzer-eller-brun-utan-sol" },
  };
  if (slug === bronzingDropsDecision.options[0].productSlug) return {
    ...bronzingDropsDecision,
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Tillfällig färg eller brun utan sol?", href: "/skonhet/sommarglow-utan-sol" },
  };
  if (slug === selfTanDecision.options[0].productSlug) return {
    ...selfTanDecision,
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Vad skulle motivera priset?", href: "/guider/brun-utan-sol-vart-det" },
  };
  const aftersunOption = aftersunDecision.options.find(item => item.productSlug === slug);
  if (aftersunOption) return {
    ...aftersunDecision, options: [aftersunOption],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Behöver du after sun eller gel?", href: "/skonhet/aftersun-eller-aloe-vera" },
  };
  const moisturizerOption = moisturizerDecision.options.find(item => item.productSlug === slug);
  if (moisturizerOption) return {
    ...moisturizerDecision, options: [moisturizerOption],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Behöver du byta kräm?", href: "/skonhet/cicaplast-b5-eller-cetaphil" },
  };
  const bottleOption = bottleDecision.options.find((item) => item.productSlug === slug);
  if (bottleOption) return {
    ...bottleDecision, options: [bottleOption],
    sources: bottleDecision.sources.filter((source) => bottleOption.sourceIds.includes(source.id)),
    category: { label: "Hälsa & vardag", href: "/halsa" },
    comparison: { label: "Behöver du isolering?", href: "/halsa/termos-eller-vattenflaska" },
  };
  const yogaOption = yogaMatDecision.options.find((item) => item.productSlug === slug);
  if (yogaOption) return {
    ...yogaMatDecision, options: [yogaOption],
    sources: yogaMatDecision.sources.filter((source) => yogaOption.sourceIds.includes(source.id)),
    category: { label: "Träning", href: "/traning" },
    comparison: { label: "Jämför dämpning och golvkontakt", href: "/traning/yogamatta" },
  };
  if (slug === dehumidifierDecision.options[0].productSlug) return {
    ...dehumidifierDecision,
    category: { label: "Hälsa & vardag", href: "/halsa" },
    comparison: { label: "Minska fukt eller filtrera partiklar?", href: "/halsa/luftavfuktare-eller-luftrenare" },
  };
  const fanOption = bedroomFanDecision.options.find((item) => item.productSlug === slug);
  if (fanOption) return {
    ...bedroomFanDecision, options: [fanOption],
    sources: bedroomFanDecision.sources.filter((source) => fanOption.sourceIds.includes(source.id)),
    category: { label: "Hälsa & vardag", href: "/halsa" },
    comparison: { label: "Välj fläkt efter dina behov", href: "/guider/tyst-flakt-sovrum" },
  };
  const weightOption = kettlebellDumbbellDecision.options.find((item) => item.productSlug === slug);
  if (weightOption) return {
    ...kettlebellDumbbellDecision, options: [weightOption],
    category: { label: "Träning", href: "/traning" },
    comparison: { label: "Jämför kettlebell och hantelset", href: "/traning/kettlebell-eller-hantlar" },
  };
  const airOption = indoorAirDecision.options.find((item) => item.productSlug === slug);
  if (airOption) return {
    ...indoorAirDecision, options: [airOption],
    category: { label: "Hälsa & vardag", href: "/halsa" },
    comparison: { label: "Jämför luftfuktare och luftrenare", href: "/halsa/luftfuktare-eller-luftrenare" },
  };
  const maskOption = hairMaskDecision.options.find((item) => item.productSlug === slug);
  if (maskOption) return {
    ...hairMaskDecision, options: [maskOption],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Jämför hårmasker efter användning", href: "/guider/harinpackning" },
  };
  const hairOption = hairStylingDecision.options.find((item) => item.productSlug === slug);
  if (hairOption) return {
    ...hairStylingDecision, options: [hairOption],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Jämför hårolja och värmeskydd", href: "/skonhet/harolja-eller-varmeskydd" },
  };
  const trainingOption = hantlarEllerGummibandDecision.options.find((item) => item.productSlug === slug);
  if (trainingOption) return {
    ...hantlarEllerGummibandDecision,
    options: [trainingOption],
    category: { label: "Träning", href: "/traning" },
    comparison: { label: "Jämför fasta hantlar och korta miniband", href: "/traning/hantlar-eller-gummiband" },
  };
  const readerOption = ereaderDecision.options.find((item) => item.productSlug === slug);
  if (readerOption) return {
    ...ereaderDecision,
    options: [readerOption],
    category: { label: "Hälsa & vardag", href: "/halsa" },
    comparison: { label: "Jämför Kindle och Kobo", href: "/halsa/kindle-eller-kobo" },
  };
  const option = ceraveEllerCetaphilDecision.options.find((item) => item.productSlug === slug);
  if (!option) return undefined;
  return {
    ...ceraveEllerCetaphilDecision,
    options: [option],
    category: { label: "Skönhet", href: "/skonhet" },
    comparison: { label: "Jämför CeraVe och Cetaphil", href: "/skonhet/cerave-eller-cetaphil" },
    noPurchaseWhen: "Den rengöring du redan har fyller ditt behov och fungerar för dig. Att byta varumärke är inte ett mål i sig.",
  };
}
