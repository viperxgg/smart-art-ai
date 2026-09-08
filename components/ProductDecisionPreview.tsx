import { getProductDecision } from "@/lib/product-decisions";

/** A discovery preview, not a substitute for the complete decision and sources. */
export function ProductDecisionPreview({ slug }: { slug: string }) {
  const decision = getProductDecision(slug);
  const option = decision?.options[0];
  if (!option) return (
    <p className="mt-4 text-sm leading-6 text-ink-soft" data-decision-preview="not-reviewed">
      Beslutsunderlaget är inte färdiggranskat. Vi kan ännu inte säga vem den här produkten passar.
    </p>
  );
  return (
    <dl className="mt-4 space-y-3 text-sm leading-6 text-ink-soft" data-decision-preview="draft">
      <div><dt className="font-black text-ink">Välj om</dt><dd>{option.chooseIf}</dd></div>
      <div><dt className="font-black text-ink">Avstå om</dt><dd>{option.avoidIf}</dd></div>
    </dl>
  );
}
