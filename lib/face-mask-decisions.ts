import type { DecisionRecord } from "@/lib/decision-record";

export const clayMaskDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "some-by-mi-matcha-clay-mask", model: "SOME BY MI Super Matcha Pore Clean Clay Mask, 100 g",
    variant: "Den avsköljbara lermasken, inte Matcha-toner, serum eller rengöringsgel. ASIN B08KPZH3JR är inte matchad mot aktuell svensk butiksförpackning.",
    chooseIf: "du vill ha en avsköljbar lermask som ett separat steg och accepterar väntetiden. Märket anger ett tjockt lager på torr, rengjord hud, utanför ögon och mun, följt av sköljning med ljummet vatten efter 10–20 minuter när masken torkat.",
    avoidIf: "du behöver en mask att lämna kvar, en parfymfri produkt eller en garanti om djuprengjorda och mindre porer. Tillverkarens engelska ingredienslista anger bland annat kaolin, bentonit, Capryloyl Salicylic Acid och doftämne; det är inte bara matcha och lera.",
    sourceIds: ["M1"], merchantVariantVerified: false,
  }],
  payMoreWhen: "En dokumenterad skillnad i formula eller användning löser ett problem du har med din nuvarande produkt. Vi har inte jämfört masker, räknat antal behandlingar per burk eller verifierat svenska totalpriser.",
  noPurchaseWhen: "Din rengöring och övriga rutin redan fungerar, eller du bara vill lägga till masken för att porer syns. Vi har inget underlag för att alla behöver ett extra masksteg.",
  swedishContext: "Underlaget är märkets internationella sida. Kontrollera svensk förpackning och INCI före köp; översättningen där ersätter inte etiketten. Svenskt lager, frakt, totalpris och bildrättigheter är inte verifierade.",
  testing: "Vi har granskat produktsidan, inte provat masken eller mätt glans, porutseende, uttorkning eller komfort. Märkets målgruppsbeskrivning är ingen garanti för din hud.",
  limitations: "Den lästa instruktionen anger verkningstid men ingen veckofrekvens. Vi sätter därför inget generellt schema på 1–2 gånger i veckan. Följ anvisningarna för din förpackning; ingen effekt- eller toleransrangordning är gjord.",
  sources: [{ id: "M1", title: "SOME BY MI – Super Matcha Pore Clean Clay Mask 100 g", url: "https://en.somebymi.com/product/super-matcha-pore-clean-clay-mask-100g/203/", checkedAt: "2026-09-09", supports: "Produktidentitet, vikt, ingredienser och avsköljbar användning. Märkets råd om användning inom 12 månader efter öppning är inte ett verifierat antal behandlingar eller bevis på svensk lagerstatus." }],
};

export const sheetMaskDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "beauty-of-joseon-centella-mask", model: "Beauty of Joseon Centella Asiatica Calming Mask",
    variant: "Den ursprungliga Centella-masken. Märket skiljer den från Calming Barrier Mask med ny formula och nya material. Antal ark och aktuell svensk förpackning för ASIN B08LLBKL7J är inte verifierade.",
    chooseIf: "du vill ha ett extra maskmoment och har kontrollerat att du köper just denna version. Märkets svenska instruktion anger 15–20 minuter, därefter tas arket bort och återstående produkt klappas in med fingertopparna.",
    avoidIf: "du vill ha samma produkt som nya Calming Barrier Mask eller förväntar dig säker lindring av irriterad hud. Märkets instruktion säger att användningen ska avbrytas direkt vid irritation.",
    sourceIds: ["M2", "M3"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Du föredrar själva maskmomentet och vet vilket antal ark priset gäller. Jämför pris per ark inklusive frakt, men anta inte att ett större paket eller den nya versionen ger bättre effekt för dig.",
  noPurchaseWhen: "Din befintliga fuktkräm fyller behovet och du inte vill ha ett extra steg. Det finns inget eget jämförande test här som visar att arkmasken behövs utöver din rutin.",
  swedishContext: "Tillverkaren publicerar svenska instruktioner för originalet på sin informationssida. Det styrker texten, inte att katalogens butiksvara har matchats eller att ett visst paket finns i svenskt lager. Kontrollera fullständigt namn, ingredienser och antal ark.",
  testing: "Vi har läst instruktionerna för originalet och märkets beskrivning av efterföljaren, inte provat passform, absorption eller lugnande effekt. Vi har inte jämfört de två versionerna på huden.",
  limitations: "Calming Barrier Mask har enligt märket ändrad formula och material. Den nya versionens egenskaper förs inte över till originalet. Bildrättigheter, aktuella erbjudanden och fullständig matchning mot förpackningen återstår.",
  sources: [
    { id: "M2", title: "Beauty of Joseon – Centella-maskens flerspråkiga information", url: "https://beautyofjoseon.com/pages/centella-asiatica-calming-mask-cpnp-scpn-information", checkedAt: "2026-09-09", supports: "Svensk instruktion för originalmaskens användning och avbrott vid irritation. Sidans namn CPNP/SCPN behandlas inte som ett självständigt myndighetsgodkännande." },
    { id: "M3", title: "Beauty of Joseon – Meet Calming Barrier Mask", url: "https://beautyofjoseon.com/blogs/news/meet-calming-barrier-mask-korean-face-mask", checkedAt: "2026-09-09", supports: "Tillverkaren beskriver en ny version med ändrade ingredienser och material. Det visar en identitetsskillnad, inte en oberoende bekräftelse av bättre resultat eller att originalet saknas i alla svenska butiker." },
  ],
};
