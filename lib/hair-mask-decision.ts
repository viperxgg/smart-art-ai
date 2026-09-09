import type { DecisionRecord } from "@/lib/decision-record";

export const hairMaskDecision: DecisionRecord = {
  reviewedAt: "2026-09-08",
  options: [
    {
      productSlug: "moroccanoil-harinpackning",
      model: "Moroccanoil Intense Hydrating Mask",
      variant: "Intense Hydrating, formula MOIHM03 på den svenska sidan. Inte Weightless eller Restorative. Vår tidigare butikslänk för 250 ml är inte matchad på nytt.",
      chooseIf: "du söker en ursköljbar mask för medeltjockt till tjockt, torrt hår, vilket är tillverkarens målgrupp. Anvisningen anger 5–7 minuter efter schampo.",
      avoidIf: "du vill ha en leave-in eller en produkt utan parfym. Den listade formulan innehåller parfym; namnet Hydrating betyder inte att alla varianter är likadana.",
      sourceIds: ["M1"], merchantVariantVerified: false,
    },
    {
      productSlug: "loreal-absolut-repair",
      model: "L’Oréal Professionnel Absolut Repair Masque Thick Hair",
      variant: "Den ursköljbara Thick Hair-masken, inte Gold Masque eller Absolut Repair Molecular. Källan gäller 500 ml, EAN 3474636975440, och länkar även till 250 ml. Vår butikslänk för 250 ml är ännu inte matchad.",
      chooseIf: "du söker en mask efter schampo och kan avsätta 3–5 minuter. Tillverkaren riktar den till torrt och skadat hår och anger hydrolyserat veteprotein och omega-9.",
      avoidIf: "du vill lämna produkten kvar i håret eller antar att alla Absolut Repair-produkter har samma instruktioner. Den här masken ska sköljas ur.",
      sourceIds: ["M2"], merchantVariantVerified: false,
    },
    {
      productSlug: "redken-all-soft-harinpackning",
      model: "Redken All Soft Heavy Cream Mask, 250 ml",
      variant: "Heavy Cream-masken på Redkens amerikanska produktsida. Inte All Soft Conditioner eller All Soft Mega Curls. Svensk förpackning och butikslänk återstår att matcha.",
      chooseIf: "du söker en ursköljbar mask för mjukhet i torrt hår. Det är tillverkarens beskrivning, inte ett jämförande test av oss.",
      avoidIf: "du vill välja enbart utifrån löftet om mindre friss eller en topplisteplacering. Vi har inte belägg för att den passar bättre än de andra för just ditt hår.",
      sourceIds: ["M3"], merchantVariantVerified: false,
    },
    {
      productSlug: "wella-fusion-harinpackning",
      model: "Wella Professionals Fusion Intense Repair Mask",
      variant: "Fusion-masken, inte Ultimate Repair. Wella-sidan för Sverige beskriver 150 ml; vår tidigare 500 ml-butikslänk och dess formula är inte verifierade.",
      chooseIf: "du söker en ursköljbar mask med fem minuters verkningstid. Wella marknadsför den för skadat hår och mot brott vid kamning.",
      avoidIf: "du väljer storpack för att det antas vara billigast per användning. Vi saknar aktuell butiksmatchning och jämförbart pris; mängd ensam visar inte värdet.",
      sourceIds: ["M4"], merchantVariantVerified: false,
    },
    {
      productSlug: "olaplex-no3-treatment",
      model: "Olaplex N°.3 PLUS Complete Repair Treatment, 100 ml",
      variant: "PLUS-versionen på tillverkarens sida, inte tidigare No.3 Hair Perfector. Instruktionerna för äldre No.3 ska inte blandas med PLUS. Svensk butikslänk är inte matchad.",
      chooseIf: "du söker just en behandling före schampo. Olaplex anger tre minuter i vått hår, ursköljning och därefter schampo och balsam.",
      avoidIf: "du söker en leave-in eller förväntar dig bevisad överlägsenhet mot maskerna här. Vi har inget sådant jämförande test och rekommenderar inte ett extra köp enbart för att håret är blekt.",
      sourceIds: ["M5"], merchantVariantVerified: false,
    },
    {
      productSlug: "garnier-fructis-hair-food-harinpackning",
      model: "Garnier Fructis Hair Food Pineapple Mask, 400 ml",
      variant: "Ananas/Pineapple på Garniers svenska sida, inte Banana, Papaya eller Watermelon. Hela serien kan inte behandlas som samma formula eller samma omdömesunderlag.",
      chooseIf: "du vill kunna använda samma produkt som balsam, hårkur eller leave-in, de tre användningssätt som Garnier anger för denna variant.",
      avoidIf: "du förväntar dig samma instruktioner för alla tre användningssätten. Läs burken för mängd och eventuell ursköljning; den lästa svenska webbsidan anger ingen exakt verkningstid.",
      sourceIds: ["M6"], merchantVariantVerified: false,
    },
  ],
  payMoreWhen: "En verifierad skillnad i användning eller formula löser ett behov som din nuvarande produkt inte fyller. Jämför kostnad per 100 ml och hur mycket du använder, inklusive frakt. Vi har inte jämförbara aktuella priser eller ett test som visar att ett salongsmärke ger bättre resultat.",
  noPurchaseWhen: "Ditt befintliga balsam eller din mask redan ger den känsla och hanterbarhet du vill ha. Det finns ingen anledning att köpa hela listan eller lägga till en bond-behandling bara för att den är ett separat steg.",
  swedishContext: "Moroccanoil, L’Oréal, Garnier och Wella har svenska eller Sverigeriktade källor här. Redken och Olaplex stöds av internationella tillverkarsidor. Kontrollera fullständigt namn, volym, ingredienslista och instruktion på den svenska förpackningen. Vi överför inte utländska priser eller lageruppgifter till Sverige.",
  testing: "Vi har läst tillverkarnas produktbeskrivningar, inte provat maskerna eller mätt glans, utredning eller hårbrott. L’Oréals och Garniers effektpåståenden hänvisar till tester med schampo och mask tillsammans. Sådana uppgifter bevisar inte maskens enskilda effekt eller en vinnare i denna jämförelse.",
  limitations: "Urvalet är inte en rangordning och täcker inte hela marknaden. Vi har inte verifierat kundbetygen eller granskat fullständiga testprotokoll. Ett hårstrås utseende eller ett hemmatest fastställer inte vilken formula du behöver. Bildrättigheter, butikernas exakta varianter och jämförande användartest återstår.",
  sources: [
    { id: "M1", title: "Moroccanoil Sverige – Intense Hydrating Mask", url: "https://se.moroccanoil.com/products/intense-hydrating-mask", checkedAt: "2026-09-09", supports: "Målgrupp, formula MOIHM03 med parfym och användning efter schampo i 5–7 minuter. Tillverkarens FAQ anger att balsam kan hoppas över efter masken. Inte ett jämförande effektbevis." },
    { id: "M2", title: "L’Oréal Partner Shop Sverige – Absolut Repair Masque Thick Hair", url: "https://se.lorealpartnershop.com/sv/absolut-repair-masque-thick-hair/SE3474636975440.html", checkedAt: "2026-09-08", supports: "500 ml/EAN, Thick Hair-identitet, veteprotein/omega-9, 3–5 minuter och ursköljning. Effektfotnoten gäller schampo plus mask; 250 ml listas separat." },
    { id: "M3", title: "Redken – All Soft Heavy Cream Mask", url: "https://www.redken.com/hair-care/all-soft-heavy-cream-super-treatment-mask.html", checkedAt: "2026-09-08", supports: "Heavy Cream, 250 ml och tillverkarens beskrivning som ursköljbar mask för torrt hår. Amerikansk sida, inte bevis för svensk variant eller lager." },
    { id: "M4", title: "Wella Professionals Sverige – Fusion Intense Repair Mask", url: "https://www.wella.com/professional/en-SE/products/hair-care/fusion/fusion-intense-repair-mask", checkedAt: "2026-09-08", supports: "Fem minuter, ursköljning och marknadsförd inriktning mot skadat hår. FAQ anger 150 ml, inte bekräftelse av vår tidigare 500 ml-länk." },
    { id: "M5", title: "Olaplex – N°.3 PLUS Complete Repair Treatment", url: "https://olaplex.com/products/olaplex-n-3plus-complete-repair-treatment-100ml", checkedAt: "2026-09-08", supports: "PLUS-version, 100 ml, tre minuter i vått hår före schampo och balsam. Tillverkaruppgifter, inte vårt test eller en svensk butiksmatchning." },
    { id: "M6", title: "Garnier Sverige – Hair Food Pineapple Mask", url: "https://www.garnier.se/harvard/fructis/hair-food/pineapple-mask", checkedAt: "2026-09-08", supports: "Pineapple 400 ml och tre användningssätt. Effektfotnoten gäller schampo plus inpackning; exakt verkningstid saknas på sidan." },
  ],
};

export const olaplexMaskDecision: DecisionRecord = {
  ...hairMaskDecision,
  options: [hairMaskDecision.options[4], hairMaskDecision.options[1]],
  sources: hairMaskDecision.sources.filter((source) => ["M2", "M5"].includes(source.id)),
  noPurchaseWhen: "Ditt befintliga balsam eller din mask redan ger den känsla och hanterbarhet du vill ha. Det finns ingen anledning att köpa båda produkterna eller lägga till en bond-behandling bara för att den är ett separat steg.",
  swedishContext: "L’Oréals svenska källa beskriver Thick Hair-masken, med 250 ml listad separat från 500 ml. Olaplex-källan är internationell och gäller PLUS 100 ml. Matcha exakt namn, formula och bruksanvisning mot förpackningen i Sverige. Butikslänkar, priser och lager är inte verifierade.",
  testing: "Vi har inte testat produkterna mot varandra. Olaplex beskriver en reparerande behandling före schampo; L’Oréal beskriver en vårdande och reparerande mask efter schampo. Vi har inte granskat fullständiga testprotokoll. L’Oréals effektfotnot gäller schampo och mask tillsammans.",
};

export const hairMaskProductPaths = [
  "/skonhet/moroccanoil-harinpackning", "/skonhet/harinpackning",
  "/skonhet/redken-all-soft-harinpackning", "/skonhet/wella-fusion-harinpackning",
  "/skonhet/olaplex-no3", "/skonhet/garnier-fructis-hair-food-harinpackning",
] as const;
