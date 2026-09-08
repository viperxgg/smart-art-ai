import Link from "next/link";

const comparisons = [
  {
    category: "Skönhet",
    title: "CeraVe eller Cetaphil – vad behöver din rengöring göra?",
    description: "Börja med din hud och din nuvarande rutin när du jämför de två rengöringarna.",
    href: "/skonhet/cerave-eller-cetaphil",
  },
  {
    category: "Hälsa & vardag",
    title: "Kindle eller Kobo – hur vill du läsa?",
    description: "Utgå från böckerna och tjänsterna du använder innan du väljer läsplatta.",
    href: "/halsa/kindle-eller-kobo",
  },
  {
    category: "Träning",
    title: "Hantlar eller gummiband – vad passar din träning hemma?",
    description: "Tänk igenom övningar, utrymme och utrustningen du redan har.",
    href: "/traning/hantlar-eller-gummiband",
  },
] as const;

export function ConsumerHome() {
  return (
    <main id="content" tabIndex={-1} className="min-h-screen bg-bg text-ink">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-6 md:px-8 md:pt-14">
        <p className="mb-8 font-display text-xl font-bold md:hidden">Elins val</p>
        <section aria-labelledby="home-title" className="max-w-3xl pb-12 md:pb-16">
          <p className="mb-4 text-sm font-bold tracking-wide text-wine">Skönhet · Hälsa & vardag · Träning</p>
          <h1 id="home-title" className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Vad passar dig – och vad kan du skippa?
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Jämför viktiga skillnader och nackdelar. Få hjälp att avgöra vad som passar dina behov,
            när det är värt att betala mer och när det du redan har räcker.
          </p>
          <a href="#valj-jamforelse" className="mt-7 inline-flex min-h-12 items-center rounded-full bg-wine px-6 py-3 font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine">
            Hitta en jämförelse
          </a>
        </section>

        <section id="valj-jamforelse" aria-labelledby="comparison-title" className="scroll-mt-28 border-t border-line pt-8">
          <h2 id="comparison-title" className="font-display text-2xl font-bold sm:text-3xl">Vilket beslut står du inför?</h2>
          <p className="mt-3 text-ink-soft">Tre frågor att börja med. Du behöver inte använda chatten.</p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {comparisons.map((comparison) => (
              <article key={comparison.href} className="flex flex-col rounded-2xl border border-line bg-surface p-6">
                <p className="text-sm font-bold text-wine">{comparison.category}</p>
                <h3 className="mt-3 font-display text-xl font-bold leading-snug">
                  <Link href={comparison.href} className="underline decoration-line underline-offset-4 hover:decoration-wine">{comparison.title}</Link>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{comparison.description}</p>
              </article>
            ))}
          </div>
          <Link href="/jamforelser" className="mt-6 inline-flex min-h-11 items-center font-bold text-wine underline underline-offset-4">Se alla jämförelser →</Link>
        </section>

        <section aria-labelledby="before-buying" className="mt-12 rounded-2xl border border-line p-6 md:p-8">
          <h2 id="before-buying" className="font-display text-2xl font-bold">Börja med behovet, innan du köper</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">Vad fungerar inte med det du använder i dag? Vilken konkret skillnad behöver ett nytt köp göra? Om du inte kan peka ut den skillnaden kan det vara klokt att vänta.</p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-wine">
            <Link href="/om-oss" className="underline underline-offset-4">Om redaktionen</Link>
            <Link href="/elins-poang" className="underline underline-offset-4">Om bedömningar och underlag</Link>
            <Link href="/fraga-elin" className="underline underline-offset-4">Fråga Elin – valfri AI-hjälp</Link>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-ink-soft">Annonsinformation: Webbplatsen innehåller affiliatelänkar. Elins val kan få ersättning när du handlar via dem. Elin är en AI-assistent och kan göra fel.</p>
        </section>
      </div>
    </main>
  );
}
