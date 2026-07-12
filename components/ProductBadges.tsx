import Link from "next/link";

import { getScoreTier, type EditorialScore } from "@/lib/scores";

type ProductBadgesProps = {
  badges: readonly string[];
  className?: string;
};

type ScoreBadgeProps = {
  score: EditorialScore;
  className?: string;
  /**
   * "link" (default) renders an <a> to /elins-poang explaining the score —
   * only safe when ScoreBadge is NOT already inside another <Link>/<a>.
   * Pass "span" when nesting inside a card-level Link so we never emit
   * invalid `<a>` inside `<a>` HTML (breaks hydration).
   */
  as?: "link" | "span";
};

export function ProductBadges({ badges, className = "" }: ProductBadgesProps) {
  if (!badges.length) {
    return null;
  }

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {badges.map((badge) => (
        <span
          key={badge}
          className="inline-flex min-h-9 items-center rounded-full border border-line bg-rose/8 px-3 text-xs font-black text-wine"
        >
          {badge}
        </span>
      ))}
    </div>
  );
}

export function ScoreBadge({ score, className = "", as = "link" }: ScoreBadgeProps) {
  const tier = getScoreTier(score.total);
  const content = (
    <>
      <span>Elins poäng: {score.total}/100</span>
      <span className="rounded-full bg-surface/80 px-2 py-1 text-[0.68rem] uppercase tracking-[0.12em]">
        {tier.label}
      </span>
    </>
  );

  if (as === "span") {
    return (
      <span
        className={`inline-flex min-h-10 items-center gap-2 rounded-full border border-line bg-rose/8 px-4 text-sm font-black text-wine ${className}`}
        aria-label={`Elins poäng ${score.total} av 100, ${tier.label}.`}
      >
        {content}
      </span>
    );
  }

  return (
    <Link
      href="/elins-poang"
      className={`inline-flex min-h-10 items-center gap-2 rounded-full border border-line bg-rose/8 px-4 text-sm font-black text-wine transition hover:-translate-y-0.5 hover:bg-surface ${className}`}
      aria-label={`Elins poäng ${score.total} av 100, ${tier.label}. Läs hur vi sätter poängen.`}
    >
      {content}
    </Link>
  );
}
