import Image from "next/image";
import { ArrowRight, Clock3, Droplets, Hand, ShowerHead, Wind } from "lucide-react";
import { MerchantOfferCard } from "@/components/MerchantOfferCard";
import { k18NordicfeelOffer } from "@/lib/merchant-offers";
import { partnerImageAssets } from "@/lib/partner-image-assets";

const k18Image = partnerImageAssets["k18-leave-in-50ml"];

const routines = [
  { icon: Droplets, when: "Före tvätten", title: "Förbehandla", text: "En förbehandling har sin plats före schampo. Följ ordningen på förpackningen.", finish: "Behandling → schampo" },
  { icon: ShowerHead, when: "I duschen", title: "Skölj ur", text: "En mask som ska sköljas ur används efter schampo. Följ produktens verkningstid.", finish: "Schampo → mask → skölj" },
  { icon: Wind, when: "Efter tvätten", title: "Lämna kvar", text: "Välj en produkt som uttryckligen får lämnas kvar. Kontrollera ordningen med balsam och styling.", finish: "Tvätt → leave-in → styling" },
];

export function HairRoutineIntro() {
  return (
    <section aria-labelledby="hair-routine-title" className="mt-8">
      <div className="grid overflow-hidden rounded-3xl border border-line bg-surface md:grid-cols-2">
        <div className="flex flex-col justify-center p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-wine">Börja med din rutin</p>
          <h2 id="hair-routine-title" className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Skölja ur eller<br />lämna kvar?</h2>
          <p className="mt-4 max-w-md leading-relaxed text-ink-soft">Det första valet är var produkten passar in i din tvätt. Leave-in beskriver användningen – det betyder inte automatiskt bättre resultat.</p>
          <a href="#hair-routine-detail" className="mt-5 inline-flex min-h-11 items-center gap-2 self-start font-semibold text-wine underline underline-offset-4">Se K18:s fyra steg <ArrowRight size={18} aria-hidden="true" /></a>
        </div>
        <figure className="flex min-w-0 flex-col bg-white p-5 sm:p-6">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-wine">Exempel på leave-in</p>
          <Image src={k18Image.src} alt={k18Image.alt} width={k18Image.width} height={k18Image.height} unoptimized className="mx-auto mt-3 h-64 w-full object-contain sm:h-72" />
          <figcaption className="mt-3 text-center">
            <p className="font-display text-xl font-bold">K18 Leave-In Hair Mask · 50 ml</p>
            <p className="mt-1 text-xs text-ink-soft">{k18Image.credit}</p>
          </figcaption>
        </figure>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {routines.map(({ icon: Icon, when, title, text, finish }) => <article key={title} className="rounded-2xl border border-line bg-surface p-5">
          <div className="flex items-center gap-3"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bg text-wine"><Icon size={25} strokeWidth={1.5} aria-hidden="true" /></span><p className="text-sm font-semibold text-ink-soft">{when}</p></div>
          <h3 className="mt-4 font-display text-2xl font-bold">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed">{text}</p>
          <p className="mt-4 border-t border-line pt-3 text-sm font-semibold text-wine">{finish}</p>
        </article>)}
      </div>
    </section>
  );
}

const k18Steps = [
  { icon: ShowerHead, title: "Tvätta & torka", text: "Schamponera utan balsam före masken. Handdukstorka ordentligt.", image: "/editorial/k18-towel-dry.png", alt: "Illustration: händer pressar försiktigt en handduk kring fuktiga hårlängder." },
  { icon: Hand, title: "Fördela", text: "Följ doseringen på din flaska. Fördela från topparna uppåt.", image: "/editorial/k18-apply-to-lengths.png", alt: "Illustration: händer fördelar leave-in i en hårsektion från topparna uppåt." },
  { icon: Clock3, title: "Vänta 4 minuter", text: "Låt produkten verka. Masken ska inte sköljas ur.", image: null, alt: "" },
  { icon: Wind, title: "Fortsätt styla", text: "Kamma och styla. Andra produkter kan läggas till efter väntetiden.", image: null, alt: "" },
];

export function HairRoutineDetail() {
  return (
    <section aria-labelledby="hair-routine-detail" className="mt-10 leading-relaxed">
      <aside className="rounded-2xl border-l-4 border-wine bg-surface p-5 sm:p-6">
        <h2 className="font-display text-2xl font-bold">Fungerar det du redan har?</h2>
        <p className="mt-2 max-w-3xl">Använd din nuvarande produkt enligt förpackningen. När håret har torkat: är längderna så mjuka och lätta att reda ut som du vill? Då har du inget tydligt skäl att köpa mer för just det målet. Annars, notera vad du saknar innan du jämför.</p>
      </aside>
      <div className="mt-10 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-widest text-wine">Ett separat leave-in-alternativ</p>
        <h2 id="hair-routine-detail" tabIndex={-1} className="mt-2 scroll-mt-28 font-display text-3xl font-bold">K18: en annan ordning i badrummet</h2>
        <p className="mt-3">Om ditt hår är blekt eller färgat, du inte är nöjd med din nuvarande rutin och du vill undersöka en särskild leave-in-behandling kan K18 Leave-In Molecular Repair Hair Mask 50 ml vara relevant att läsa mer om.</p>
        <p className="mt-3 font-semibold">K18 beskriver produkten som reparerande. Vi har inte testat effekten eller jämfört den med maskerna ovan.</p>
      </div>
      <h3 className="mt-6 font-display text-xl font-bold">Så beskriver tillverkaren användningen</h3>
      <p className="mt-2 text-sm text-ink-soft">Bilderna i steg 1–2 är AI-skapade användningsillustrationer, inte foton från ett produkttest. De visar ingen exakt dosering.</p>
      <ol className="mt-4 grid gap-4 sm:grid-cols-2">
        {k18Steps.map(({ icon: Icon, title, text, image, alt }, index) => <li key={title} className="overflow-hidden rounded-2xl border border-line bg-surface">
          {image ? <Image src={image} alt={alt} width={1536} height={1024} sizes="(max-width: 639px) 100vw, 500px" className="aspect-[3/2] w-full object-cover" /> : null}
          <div className="p-5 sm:p-6">
            <div className="flex items-center gap-3"><Icon className="shrink-0 text-wine" size={28} strokeWidth={1.5} aria-hidden="true" /><h4 className="font-display text-xl font-bold">{index + 1}. {title}</h4></div>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{text}</p>
          </div>
        </li>)}
      </ol>
      <p className="mt-4 max-w-3xl text-sm text-ink-soft">Kontrollera anvisningen på din egen 50 ml-flaska. Fyra minuter är en användningsanvisning, inte vårt testresultat. En annan användningsordning är i sig inget skäl att byta en rutin som fungerar.</p>
      <p className="mt-3 text-sm text-ink-soft"><a className="text-wine underline underline-offset-4" href="https://www.k18hair.com/products/leave-in-molecular-repair-hair-mask-50-ml">K18:s produktbeskrivning och användningsanvisning</a> · Kontrollerad 13 september 2026.</p>
      <MerchantOfferCard offer={k18NordicfeelOffer} />
    </section>
  );
}
