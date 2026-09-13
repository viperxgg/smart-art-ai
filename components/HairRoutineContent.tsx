import { MerchantOfferCard } from "@/components/MerchantOfferCard";
import { k18NordicfeelOffer } from "@/lib/merchant-offers";

export function HairRoutineIntro() {
  return (
    <section aria-labelledby="hair-routine-title" className="mt-6 max-w-3xl leading-relaxed">
      <h2 id="hair-routine-title" className="font-display text-2xl font-bold">Skölja ur eller lämna kvar?</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li><strong>I duschen:</strong> välj en mask som ska sköljas ur efter schampo och följ produktens verkningstid.</li>
        <li><strong>Efter tvätten:</strong> välj en produkt som uttryckligen får lämnas kvar. Kontrollera ordningen med balsam och styling.</li>
        <li><strong>Före schampo:</strong> en förbehandling har en annan plats i rutinen. Läs ordningen på förpackningen.</li>
      </ul>
      <p className="mt-3">Leave-in beskriver användningssättet. Det betyder inte att produkten ger bättre resultat än en mask som sköljs ur.</p>
    </section>
  );
}

export function HairRoutineDetail() {
  return (
    <section aria-labelledby="hair-routine-detail" className="mt-8 max-w-3xl leading-relaxed">
      <h2 id="hair-routine-detail" className="font-display text-2xl font-bold">Kontrollera vad du redan har</h2>
      <p className="mt-3">Använd din nuvarande produkt enligt förpackningen. När håret har torkat: är längderna så mjuka och lätta att reda ut som du vill? Om svaret är ja har du inget tydligt skäl att köpa mer för just det målet. Annars, notera vad du saknar innan du jämför.</p>
      <h3 className="mt-6 font-display text-xl font-bold">När är K18 värt att undersöka?</h3>
      <p className="mt-3">Om ditt hår är blekt eller färgat, du inte är nöjd med din nuvarande rutin och du vill undersöka en särskild leave-in-behandling kan K18 Leave-In Molecular Repair Hair Mask 50 ml vara relevant att läsa mer om. K18 beskriver produkten som reparerande. Vi har inte testat effekten eller jämfört den med maskerna ovan.</p>
      <p className="mt-3">Enligt tillverkarens anvisning:</p>
      <ol className="mt-3 list-decimal space-y-2 pl-5">
        <li>Schamponera utan balsam före masken. Handdukstorka håret ordentligt.</li>
        <li>Följ doseringen på din flaska och fördela från topparna uppåt.</li>
        <li>Vänta fyra minuter. Masken ska inte sköljas ur.</li>
        <li>Kamma och fortsätt med styling. Andra produkter kan läggas till efter väntetiden.</li>
      </ol>
      <p className="mt-3">Kontrollera anvisningen på din egen 50 ml-flaska. En annan användningsordning är i sig inget skäl att byta en rutin som fungerar.</p>
      <p className="mt-3 text-sm text-ink-soft"><a className="text-wine underline underline-offset-4" href="https://www.k18hair.com/products/leave-in-molecular-repair-hair-mask-50-ml">K18:s produktbeskrivning och användningsanvisning</a> · Kontrollerad 13 september 2026. Fyra minuter är en användningsanvisning, inte vårt testresultat.</p>
      <MerchantOfferCard offer={k18NordicfeelOffer} />
    </section>
  );
}
