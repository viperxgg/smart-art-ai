import type { DecisionRecord } from "@/lib/decision-record";

export const hairStylingDecision: DecisionRecord = {
  "reviewedAt": "2026-09-08",
  "options": [
    {
      "productSlug": "moroccanoil-harolja",
      "model": "Moroccanoil Treatment Original",
      "variant": "Original med formula MOT01 på den svenska tillverkarsidan. Inte Light, Purple eller Pure Argan Oil. Butikens 25 ml-variant är inte matchad.",
      "chooseIf": "du söker en styling- och finishprodukt för glans och följsamhet, och den parfymerade silikonbaserade formulan passar dina önskemål.",
      "avoidIf": "du behöver ett uttryckligt värmeskydd för ett visst verktyg eller söker ren arganolja. Vi har inte belägg för att denna Original-formula ersätter den jämförda värmeskyddssprayen.",
      "sourceIds": [
        "H1"
      ],
      "merchantVariantVerified": false
    },
    {
      "productSlug": "loreal-elvital-varmeskydd",
      "model": "L’Oréal Elvital Dream Length Heat Slayer Iron Spray, 150 ml",
      "variant": "Svensk produktsida, EAN 3600523966738 och formula FIL C266370/1. Inte Dream Length föningskräm eller ett annat serum. Butikslänken är inte matchad.",
      "chooseIf": "du använder värmeverktyg och söker en leave-in-spray med ett uttryckligt värmeskyddspåstående från tillverkaren.",
      "avoidIf": "du tolkar temperaturangivelsen som en garanti mot skador eller som en rekommenderad temperatur. Tillverkaren avråder från plattång på vått hår.",
      "sourceIds": [
        "H2"
      ],
      "merchantVariantVerified": false
    }
  ],
  "payMoreWhen": "Du saknar en bestämd funktion i din rutin. Ett högre pris på en finishprodukt visar inte att den skyddar bättre mot värme. Vi har inget jämförande test eller verifierad aktuell prisskillnad. Jämför samma variant, mängd och frakt innan du bedömer kostnaden.",
  "noPurchaseWhen": "Det du redan använder fyller behovet. Du behöver inte lägga till både olja och spray för att följa denna jämförelse. Om du inte värmestylar är just värmeskydd inte skälet att köpa en extra produkt.",
  "swedishContext": "Underlaget gäller tillverkarnas svenska sidor. Matcha hela produktnamnet, volymen och ingredienslistan på förpackningen. Dream Length är en serie med flera produkter; serienamnet räcker inte. Butikens variant, lager och dagspris är inte verifierade.",
  "testing": "Vi har läst tillverkarnas uppgifter. Vi har inte testat glans, friss, värmeskador eller hur produkterna känns i olika hårtyper. L’Oréals temperaturpåstående bygger enligt produktsidan på instrumentella tester; vi har inte granskat det fullständiga testprotokollet.",
  "limitations": "Egenskaperna ovan är tillverkaruppgifter och våra villkorade slutsatser. Ingen universell vinnare, poäng eller garanti om resultat ges. Moroccanoils instruktioner tillåter användning i handdukstorkat hår före föning och i torrt hår; att produkten kan användas före föning bevisar inte samma skydd som sprayen. Bildrättigheter och butiksmatchning återstår.",
  "sources": [
    {
      "id": "H1",
      "title": "Moroccanoil Sverige – Treatment Original",
      "url": "https://se.moroccanoil.com/products/moroccanoil-treatment-original",
      "checkedAt": "2026-09-08",
      "supports": "Original-formulans ingredienser och användning som vård-, styling- och finishprodukt. Tillverkaren anger även att produkten ’hjälper till att skydda mot värmeskador’, utan temperaturangivelse eller testhänvisning på den lästa sidan. Förpackningen styr aktuell innehållslista."
    },
    {
      "id": "H2",
      "title": "L’Oréal Paris Sverige – Heat Slayer Iron Spray",
      "url": "https://www.lorealparis.se/elvital/dream-length/heat-slayer-iron-spray",
      "checkedAt": "2026-09-08",
      "supports": "150 ml, produktidentitet, leave-in-användning och tillverkarens påstående om värmeskydd upp till230°C med hänvisning till instrumentella tester. Rådet att inte platta vått hår."
    }
  ]
};
