import {
  dreoCruiserProFlaktProduct,
  honeywellTurboforceFlaktProduct,
  mideaFz10FlaktProduct,
  type Product,
} from "@/lib/products";

export type FlaktPick = {
  product: Product;
  path: string;
  badge: string;
  headline: string;
  shortBody: string;
  valueHook: string;
  valueStatement: string;
  caution: string;
  verdict: string;
  passFor: string[];
  comparisonVerdict: string;
  reviewSectionId: string;
  reviewFormId: string;
  targetKeyword: string;
  metaTitle: string;
  metaDescription: string;
};

export const flaktFaqItems = [{"question":"Är dyra fläktar tystare?","answer":"Priset visar inte ljudet vid den hastighet du använder. Jämför samma mätstorhet och villkor för exakt modell; vi har inget gemensamt ljudtest."},{"question":"Vilken fläkt passar sovrummet?","answer":"Utgå från plats, reglage och ljud du accepterar. Kontrollera display och knappljud i rätt manual. Ingen av modellerna är sömntestad av oss."}] as const;

export const flaktComparisonRows = [["Modell","Dreo Cruiser Pro T1","Midea FZ10-17JR","Honeywell HT900E"],["Underlag","Exakt version behöver verifieras","Tillverkarspecifikation läst","Exakt E-version behöver verifieras"],["Ljudjämförelse","Ej jämförbart underlag","62 dB(A) ljudeffekt, inte ljud vid sängen","Ej jämförbart underlag"],["Funktioner","Inte styrkta för katalogens variant","Tre hastigheter, timer och fjärrkontroll","Inte styrkta för katalogens variant"],["Före köp","Matcha modell och manual","Matcha svensk leveransvariant","Matcha modell och manual"]] as const;

export const flaktPicks: FlaktPick[] = [
  {
    product: dreoCruiserProFlaktProduct,
    path: "/halsa/flakt/dreo-cruiser-pro",
    badge: "Beslutsunderlag",
    headline: "Dreo Cruiser Pro T1",
    shortBody:
      "Katalogens T1 och ASIN B08PDDSDHY är inte matchade mot en läst manual. Dreos aktuella TF518-sida bevisar inte att den svenska listningen gäller samma version.",
    valueHook: "Kontrollera behov och variant",
    valueStatement:
      "du vill undersöka en tornfläkt och först kan få exakt modell, reglage och displayfunktion bekräftade. Underlaget räcker ännu inte för att rekommendera just T1 för sömn.",
    caution:
      "ditt köp beror på att den ska vara tystast eller ha nio hastigheter och helt släckt display. Vi har inte verifierat de uppgifterna för denna listning.",
    verdict:
      "Läs modellens källor och begränsningar före köp.",
    passFor: ["du vill undersöka en tornfläkt och först kan få exakt modell, reglage och displayfunktion bekräftade. Underlaget räcker ännu inte för att rekommendera just T1 för sömn."],
    comparisonVerdict:
      "ditt köp beror på att den ska vara tystast eller ha nio hastigheter och helt släckt display. Vi har inte verifierat de uppgifterna för denna listning.",
    reviewSectionId: "dreo-cruiser-pro-recensioner",
    reviewFormId: "dreo-cruiser-pro-skriv-recension",
    targetKeyword: "dreo cruiser pro tornfläkt",
    metaTitle: "Dreo Cruiser Pro T1 – beslutsunderlag | Elins val",
    metaDescription:
      "Katalogens T1 och ASIN B08PDDSDHY är inte matchade mot en läst manual. Dreos aktuella TF518-sida bevisar inte att den svenska listningen gäller samma version.",
  },
  {
    product: honeywellTurboforceFlaktProduct,
    path: "/halsa/flakt/honeywell-turboforce",
    badge: "Beslutsunderlag",
    headline: "Honeywell TurboForce HT900E",
    shortBody:
      "Katalogens HT900E, ASIN B003KHJO6G. Butikssidan kunde inte läsas och någon manual för exakt E-version är inte verifierad här.",
    valueHook: "Kontrollera behov och variant",
    valueStatement:
      "du vill undersöka denna modell och kan kontrollera dess mått, placering och reglage före köp. Vi har inte tillräckligt underlag för att rekommendera eller avråda från den som sovrumsfläkt.",
    caution:
      "du behöver ett styrkt besked om nattljud. Ett enskilt kundomdöme eller uppgifter om HT900 utan E fastställer inte ljudet från denna variant.",
    verdict:
      "Läs modellens källor och begränsningar före köp.",
    passFor: ["du vill undersöka denna modell och kan kontrollera dess mått, placering och reglage före köp. Vi har inte tillräckligt underlag för att rekommendera eller avråda från den som sovrumsfläkt."],
    comparisonVerdict:
      "du behöver ett styrkt besked om nattljud. Ett enskilt kundomdöme eller uppgifter om HT900 utan E fastställer inte ljudet från denna variant.",
    reviewSectionId: "honeywell-turboforce-recensioner",
    reviewFormId: "honeywell-turboforce-skriv-recension",
    targetKeyword: "honeywell turboforce ht900e",
    metaTitle: "Honeywell TurboForce HT900E – beslutsunderlag | Elins val",
    metaDescription:
      "Katalogens HT900E, ASIN B003KHJO6G. Butikssidan kunde inte läsas och någon manual för exakt E-version är inte verifierad här.",
  },
  {
    product: mideaFz10FlaktProduct,
    path: "/halsa/flakt/midea-fz10",
    badge: "Beslutsunderlag",
    headline: "Midea FZ10-17JR",
    shortBody:
      "Tysk tillverkarsida: FZ10-17JR, EAN 4048164103201, höjd 918 mm. Svensk leveransvariant är inte matchad.",
    valueHook: "Kontrollera behov och variant",
    valueStatement:
      "du söker en tornfläkt med tre hastigheter, timer och fjärrkontroll. Kontrollera att ljudet vid användbar hastighet passar dig innan du väljer den för sovrummet.",
    caution:
      "du behöver bevisad tyst drift vid sängen eller en display som säkert slocknar helt. Tillverkarens lästa sida styrker inte detta.",
    verdict:
      "Läs modellens källor och begränsningar före köp.",
    passFor: ["du söker en tornfläkt med tre hastigheter, timer och fjärrkontroll. Kontrollera att ljudet vid användbar hastighet passar dig innan du väljer den för sovrummet."],
    comparisonVerdict:
      "du behöver bevisad tyst drift vid sängen eller en display som säkert slocknar helt. Tillverkarens lästa sida styrker inte detta.",
    reviewSectionId: "midea-fz10-recensioner",
    reviewFormId: "midea-fz10-skriv-recension",
    targetKeyword: "midea fz10 tornfläkt",
    metaTitle: "Midea FZ10-17JR – beslutsunderlag | Elins val",
    metaDescription:
      "Tysk tillverkarsida: FZ10-17JR, EAN 4048164103201, höjd 918 mm. Svensk leveransvariant är inte matchad.",
  },
];

export function getOtherFlaktPick(productSlug: string) {
  return flaktPicks.find((pick) => pick.product.slug !== productSlug);
}
