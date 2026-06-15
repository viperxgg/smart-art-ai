import Link from "next/link";

import { getScoreTier, type EditorialScore } from "@/lib/scores";

type ProductBadgesProps = {
  badges: readonly string[];
  className?: string;
};

type ScoreBadgeProps = {
  score: EditorialScore;
  className?: string;
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
          className="inline-flex min-h-9 items-center rounded-full border border-[#F1D8DD] bg-[#FFF4F5] px-3 text-xs font-black text-[#8F5262]"
        >
          {badge}
        </span>
      ))}
    </div>
  );
}

export function ScoreBadge({ score, className = "" }: ScoreBadgeProps) {
  const tier = getScoreTier(score.total);

  return (
    <Link
      href="/elins-poang"
      className={`inline-flex min-h-10 items-center gap-2 rounded-full border border-[#F1D8DD] bg-[#FFF4F5] px-4 text-sm font-black text-[#9E5E73] transition hover:-translate-y-0.5 hover:bg-white ${className}`}
      aria-label={`Elins poäng ${score.total} av 100, ${tier.label}. Läs hur vi sätter poängen.`}
    >
      <span>Elins poäng: {score.total}/100</span>
      <span className="rounded-full bg-white/78 px-2 py-1 text-[0.68rem] uppercase tracking-[0.12em]">
        {tier.label}
      </span>
    </Link>
  );
}
