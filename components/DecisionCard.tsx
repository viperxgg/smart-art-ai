import type { DecisionRecord } from "@/lib/decision-record";

export function DecisionCard({ decision }: { decision: DecisionRecord }) {
  return (
    <section aria-labelledby="decision-title" data-decision-card className="mt-8 rounded-2xl border border-line bg-surface p-5 md:p-8">
      <h2 id="decision-title" tabIndex={-1} className="scroll-mt-28 font-display text-2xl font-bold sm:text-3xl">Ditt beslut i korthet</h2>
      <p className="mt-3 text-sm text-ink-soft">Redaktionell vägledning · Källkontroll <time dateTime={decision.reviewedAt}>{decision.reviewedAt}</time></p>
      <div className={`mt-6 grid gap-6 ${decision.options.length > 1 ? "md:grid-cols-2" : ""}`}>
        {decision.options.map((option) => (
          <article key={option.productSlug} className="rounded-xl border border-line p-5">
            <h3 className="font-display text-xl font-bold">{option.model}</h3>
            <dl className="mt-4 space-y-4 leading-relaxed">
              <div><dt className="font-bold">Välj om …</dt><dd>{option.chooseIf}</dd></div>
              <div><dt className="font-bold">Avstå om …</dt><dd>{option.avoidIf}</dd></div>
            </dl>
            <p className="mt-4 border-t border-line pt-3 text-sm leading-relaxed text-ink-soft"><span className="font-bold">Modell och variant: </span>{option.variant}</p>
            <p className="mt-4 text-sm">Underlag: {option.sourceIds.map((id, index) => (
              <span key={id}>{index ? ", " : ""}<a href={`#decision-source-${id}`} className="text-wine underline underline-offset-4">{id}</a></span>
            ))}</p>
          </article>
        ))}
      </div>
      <dl className="mt-6 grid gap-5 leading-relaxed md:grid-cols-2">
        <div><dt className="font-bold">När är det värt att betala mer?</dt><dd>{decision.payMoreWhen}</dd></div>
        <div><dt className="font-bold">När behöver du inte köpa något?</dt><dd>{decision.noPurchaseWhen}</dd></div>
      </dl>
      <dl className="mt-6 space-y-5 border-t border-line pt-5 text-sm leading-relaxed">
        <div><dt className="font-bold">Att kontrollera i Sverige</dt><dd>{decision.swedishContext}</dd></div>
        <div><dt className="font-bold">Vad har vi testat?</dt><dd>{decision.testing}</dd></div>
        <div><dt className="font-bold">Vad vet vi inte?</dt><dd>{decision.limitations}</dd></div>
      </dl>
      <details className="mt-6 border-t border-line pt-3" data-decision-sources>
      <summary className="min-h-11 cursor-pointer py-3 font-bold text-wine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine">Källor och vad de styrker ({decision.sources.length})</summary>
      <ol className="mt-3 space-y-4 text-sm leading-relaxed">
        {decision.sources.map((source) => (
          <li id={`decision-source-${source.id}`} key={source.id} className="scroll-mt-28">
            <a href={source.url} className="font-bold text-wine underline underline-offset-4">{source.id}: {source.title}</a>
            <p>{source.status === "unavailable" ? "Källan kunde inte läsas. " : ""}{source.supports} {source.status === "unavailable" ? "Kontrollförsök" : "Kontrollerad"} {source.checkedAt}.</p>
          </li>
        ))}
      </ol>
      </details>
    </section>
  );
}
