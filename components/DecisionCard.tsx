import type { DecisionRecord } from "@/lib/decision-record";

export function DecisionCard({ decision }: { decision: DecisionRecord }) {
  return (
    <section aria-labelledby="decision-title" data-decision-card className="mt-8 rounded-2xl border border-line bg-surface p-5 md:p-8">
      <h2 id="decision-title" className="font-display text-3xl font-bold">Ditt beslut i korthet</h2>
      <p className="mt-3 text-sm text-ink-soft">Redaktionell vägledning · Källkontroll <time dateTime={decision.reviewedAt}>{decision.reviewedAt}</time></p>
      <div className={`mt-6 grid gap-6 ${decision.options.length > 1 ? "md:grid-cols-2" : ""}`}>
        {decision.options.map((option) => (
          <article key={option.productSlug} className="rounded-xl border border-line p-5">
            <h3 className="font-display text-xl font-bold">{option.model}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{option.variant}</p>
            <dl className="mt-4 space-y-4 leading-relaxed">
              <div><dt className="font-bold">Välj om …</dt><dd>{option.chooseIf}</dd></div>
              <div><dt className="font-bold">Avstå om …</dt><dd>{option.avoidIf}</dd></div>
            </dl>
            <p className="mt-4 text-sm">Underlag: {option.sourceIds.map((id, index) => (
              <span key={id}>{index ? ", " : ""}<a href={`#decision-source-${id}`} className="text-wine underline underline-offset-4">{id}</a></span>
            ))}</p>
          </article>
        ))}
      </div>
      <dl className="mt-6 space-y-5 leading-relaxed">
        <div><dt className="font-bold">När är det värt att betala mer?</dt><dd>{decision.payMoreWhen}</dd></div>
        <div><dt className="font-bold">När behöver du inte köpa något?</dt><dd>{decision.noPurchaseWhen}</dd></div>
        <div><dt className="font-bold">Att kontrollera i Sverige</dt><dd>{decision.swedishContext}</dd></div>
        <div><dt className="font-bold">Vad har vi testat?</dt><dd>{decision.testing}</dd></div>
        <div><dt className="font-bold">Vad vet vi inte?</dt><dd>{decision.limitations}</dd></div>
      </dl>
      <h3 className="mt-7 font-display text-xl font-bold">Källor och vad de styrker</h3>
      <ol className="mt-3 space-y-4 text-sm leading-relaxed">
        {decision.sources.map((source) => (
          <li id={`decision-source-${source.id}`} key={source.id} className="scroll-mt-28">
            <a href={source.url} className="font-bold text-wine underline underline-offset-4">{source.id}: {source.title}</a>
            <p>{source.status === "unavailable" ? "Källan kunde inte läsas. " : ""}{source.supports} {source.status === "unavailable" ? "Kontrollförsök" : "Kontrollerad"} {source.checkedAt}.</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
