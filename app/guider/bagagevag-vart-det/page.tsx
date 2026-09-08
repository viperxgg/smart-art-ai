import Link from "next/link";
import { Breadcrumbs, buildBreadcrumbSchema } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const path = "/guider/bagagevag-vart-det";
const title = "Behöver du en bagagevåg inför resan?";
const intro = "Börja med vad din biljett tillåter. En våg kan hjälpa dig uppskatta vikten före avresa, men kontrollerar varken väskans mått eller vilket bagage du har bokat.";
const breadcrumbs = [{ name: "Hem", href: "/" }, { name: "Guider", href: "/guider" }, { name: title, href: path }];
const questions = [
  { question: "Garanterar en bagagevåg att jag slipper avgifter?", answer: "Nej. Din avläsning kan skilja sig från flygplatsens. Dessutom behöver väskan följa reglerna för mått och antal kollin och ingå i din bokning. Vi har inte räknat ut någon besparing eller jämfört avgifter med vågpriser." },
  { question: "Kan jag använda badrumsvågen?", answer: "Skillnaden mellan en avläsning med och utan väskan kan ge en grov uppskattning. Två avläsningar medför också osäkerhet; metoden är inte ett precisionstest. Följ vågens instruktioner och maxbelastning. Lyft inte en väska som du inte kan hantera bekvämt." },
  { question: "Betyder tara eller många decimaler att vågen är exakt?", answer: "Nej. Tara nollställer avläsningen med en befintlig last; funktionen visar inte hur noggrann vågen är. Displayens steg är inte heller samma sak som mätosäkerhet. För noggrannhet behövs dokumentation eller ett relevant test för den exakta modellen." },
  { question: "Hur stor marginal ska jag lämna?", answer: "Vi kan inte ange en garanterat säker marginal utan att känna till vågens felvisning och din bokning. Packa inte exakt till gränsen med antagandet att din avläsning och flygplatsens måste bli lika. Om resultatet varierar mellan vägningar, behandla inte den lägsta siffran som säker." },
];

export const metadata = createSeoMetadata({ title: title + " | Elins val", description: intro, url: siteConfig.url + path });

export default function BagagevagVartDetPage() {
  return (
    <main id="content" tabIndex={-1} className="min-h-screen bg-bg px-5 py-8 text-ink">
      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
      <article className="mx-auto max-w-3xl">
        <Breadcrumbs items={breadcrumbs} />
        <header className="mt-5">
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl">{title}</h1>
          <p className="mt-4 leading-relaxed text-ink-soft">{intro}</p>
          <p className="mt-3 text-sm text-ink-soft">Kategoriguide · Källkontroll 9 september 2026. Ingen enskild våg rekommenderas här.</p>
          <a href="#decision-title" className="mt-3 inline-flex min-h-11 items-center underline underline-offset-4">Gå till beslutshjälpen</a>
        </header>
        <section aria-labelledby="decision-title" data-decision-card className="mt-8 rounded-2xl border border-line bg-surface p-5 sm:p-8">
          <h2 id="decision-title" tabIndex={-1} className="scroll-mt-28 font-display text-2xl font-bold">Ditt beslut i korthet</h2>
          <dl className="mt-5 space-y-5 leading-relaxed">
            <div><dt className="font-bold">Överväg en bagagevåg om …</dt><dd>du behöver kunna kontrollera packningens vikt även inför hemresan och saknar en våg där. Kontrollera först modellens instruktioner, mätområde och hur väskan ska hållas.</dd></div>
            <div><dt className="font-bold">Avstå om …</dt><dd>du förväntar dig en garanti mot avgifter eller har svårt att lyfta och hålla väskan. En hängvåg löser inte fel mått eller en biljett utan det bagage du vill ta med.</dd></div>
            <div><dt className="font-bold">När är det värt att betala mer?</dt><dd>När du kan belägga en skillnad du behöver, exempelvis en display som du kan läsa i användningsläget eller dokumenterad noggrannhet. Högt pris, många decimaler och stor maxkapacitet bevisar inte bättre mätning.</dd></div>
            <div><dt className="font-bold">När behöver du inte köpa något?</dt><dd>När du redan har tillgång till en lämplig våg, kan kontrollera packningen före båda resorna och inte behöver ytterligare en pryl. En liten väska är däremot inte i sig bevis på låg vikt.</dd></div>
          </dl>
        </section>
        <section className="mt-8" aria-labelledby="booking-title">
          <h2 id="booking-title" className="font-display text-2xl font-bold">Kontrollera bokningen innan du köper</h2>
          <p className="mt-4 leading-relaxed">SAS beskriver att bagaget beror på bland annat biljettyp och destination. Norwegian skiljer också mellan biljetternas bagage och anger både vikt- och storleksgränser. Läs villkoren för din resa, inklusive hemresan; kopiera inte en generell viktgräns från en produktannons.</p>
          <ol className="mt-4 list-decimal space-y-3 pl-5 leading-relaxed">
            <li>Kontrollera antal väskor, placering och vad som ingår i just din bokning.</li>
            <li>Mät den packade väskan enligt flygbolagets instruktioner. En våg mäter inte storlek.</li>
            <li>Kontrollera viktgränsen och om den gäller en väska eller sammanlagd vikt. Lämna marginal för osäker avläsning.</li>
          </ol>
        </section>
        <section className="mt-8" aria-labelledby="evidence-title">
          <h2 id="evidence-title" className="font-display text-2xl font-bold">Underlag och vad vi inte har testat</h2>
          <p className="mt-4 leading-relaxed">Råden om köpbehov är vår redaktionella bedömning. Vi har inte provvägt bagage, jämfört vågars precision eller verifierat batteri, kapacitet och svensk butiksvariant för katalogens GRIFEMA GA2006, ASIN B0F3HP95V8. Därför får modellen ingen köprekommendation, poäng eller butiksknapp i den här guiden.</p>
          <ul className="mt-4 space-y-4 text-sm leading-relaxed">
            <li><a className="inline-flex min-h-11 items-center font-bold underline" href="https://www.sas.se/reseinfo/bagage/handbagage">SAS – handbagage</a><p>Styrker att tillåtet bagage varierar och att både mått och vikt behöver kontrolleras. Styrker inga vågspecifikationer. Lästa 2026-09-09.</p></li>
            <li><a className="inline-flex min-h-11 items-center font-bold underline" href="https://www.norwegian.com/se/handbagage/">Norwegian – handbagage</a><p>Styrker skillnader mellan biljettyper och vikt- och storleksgränser. Ingen jämförelse av vågar eller garanterad avgiftsbesparing. Lästa 2026-09-09.</p></li>
          </ul>
        </section>
        <section className="mt-8" aria-labelledby="questions-title">
          <h2 id="questions-title" className="font-display text-2xl font-bold">Frågor före köp</h2>
          {questions.map((item) => <details key={item.question} className="border-b border-line py-4"><summary className="min-h-11 cursor-pointer py-2 font-bold">{item.question}</summary><p className="pb-3 leading-relaxed text-ink-soft">{item.answer}</p></details>)}
        </section>
        <nav aria-label="Läs vidare" className="mt-8 flex flex-wrap gap-5">
          <Link className="inline-flex min-h-11 items-center underline" href="/guider">Fler frågor inför köp</Link>
          <Link className="inline-flex min-h-11 items-center underline" href="/fraga-elin">Fråga Elin – valfri AI-hjälp</Link>
        </nav>
      </article>
    </main>
  );
}
