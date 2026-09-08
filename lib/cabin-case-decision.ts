import type { DecisionRecord } from "@/lib/decision-record";

export const cabinCaseDecision: DecisionRecord = {
  reviewedAt: "2026-09-09",
  options: [{
    productSlug: "cabin-max-anode-kabinvaska",
    model: "Cabin Max Anode 24L Underseat – Spinner, 40 × 30 × 20 cm",
    variant: "Den brittiska produktsidans Spinner-variant: ABS, 2 kg och mått inklusive hjul enligt tillverkaren. Inte TwinWheel, expanderbar Anode eller 55 cm-modellen. Katalogens cremefärg och ASIN B0GF98VVGN är inte matchade mot denna variant.",
    chooseIf: "du vill kunna rulla en liten hård väska och din bokning tillåter dess yttermått. Kontrollera hur mycket av viktgränsen som återstår efter väskans egenvikt och provpacka det du faktiskt behöver.",
    avoidIf: "du behöver en väska inom SAS gräns 40 × 30 × 15 cm för det lilla bagaget under sätet. Den dokumenterade Anode-modellen är 5 cm djupare. Avstå också om du räknar med att en hård väska kan pressas ihop för att klara en mindre gräns.",
    sourceIds: ["C1", "C2", "C3"], merchantVariantVerified: false,
  }],
  payMoreWhen: "Du har ett konkret behov av andra yttermått, mindre egenvikt eller en konstruktion du kan prova och jämföra. Hårt skal och ett högre pris bevisar inte stöttålighet eller stöldskydd. Vi har inget jämförande test som avgör vilken väska som skyddar bäst.",
  noPurchaseWhen: "Din befintliga väska rymmer packningen och följer reglerna i bokningen. Du behöver inte köpa en särskild flygbolagsmärkt modell eller både ryggsäck och kabinväska för samma resa.",
  swedishContext: "SAS skiljer mellan liten väska under sätet och större kabinbagage. En produkt som kallas underseat passar därför inte automatiskt din biljett. Kontrollera ut- och hemresa, vikt och antal väskor. Svenskt erbjudande, färg, frakt och totalpris är ännu inte verifierade.",
  testing: "Vi har läst tillverkarens produktuppgifter och SAS bagageregler. Vi har inte mätt väskan, testat hjul och dragkedjor, provpackat eller flugit med den. Tillverkarens volymbeteckning 24L är inte vår mätning av användbart packutrymme.",
  limitations: "Anode är en serie med flera konstruktioner. TwinWheel-sidan innehåller motstridiga viktuppgifter och får inte fylla luckor i Spinner-modellens specifikationer. Kombinationslås är inte styrkt för denna Spinner-variant i vårt underlag. Bildrättigheter, exakt butiksmatchning och hållbarhet återstår; ingen garanti mot bagageavgifter.",
  sources: [
    { id: "C1", title: "Cabin Max – Anode 24L Underseat Small Suitcase, Spinner", url: "https://cabinmax.com/products/anode-24l-underseat-small-suitcase-40x30x20-cm", checkedAt: "2026-09-09", supports: "Tillverkaren anger 40 × 30 × 20 cm inklusive ej avtagbara hjul, 2 kg, ABS och Spinner-hjul. Titel/FAQ anger 24L. Ingen svensk ASIN-matchning; marknadsföring om avgiftsfrihet och hållbarhet är inte vårt testresultat." },
    { id: "C2", title: "Cabin Max EU – separat Anode 24L TwinWheel", url: "https://cabinmaxeu.com/collections/anode-collection/products/anode-24l-twinwheel-40x30x20cm-underseat-cabin-case-flies-for-free-on-wizz-air-vueling-and-volotea", checkedAt: "2026-09-09", supports: "Styrker att TwinWheel är en separat variant. Specifikationen anger 1,9 kg, medan ett senare textblock anger 1,5 kg. Uppgifterna används inte som Spinner-vikt eller som säker vikt för TwinWheel." },
    { id: "C3", title: "SAS – handbagage", url: "https://www.sas.se/reseinfo/bagage/handbagage", checkedAt: "2026-09-09", supports: "Anger 40 × 30 × 15 cm för liten väska under sätet och separata regler för större kabinbagage. Slutsatsen om 5 cm för stort djup är vår jämförelse av måtten; din bokning avgör bagaget som ingår." },
  ],
};
