type MonogramProps = {
  /** Tailwind sizing classes for the outer circle, e.g. "size-9 md:size-10". */
  className?: string;
  /** Tailwind text-size classes for the inner "E", e.g. "text-base md:text-lg". */
  textClassName?: string;
};

/**
 * The site's approved monogram mark: a gradient ring (`bg-gradient-signature`)
 * with a light inset and a bold "E" centered inside. This is the single
 * source of truth for the logo so it can't drift between call sites — see
 * Header for the animated entrance version (wrapped in a motion.span) and
 * ElinHomeHero for a small static inline use.
 *
 * Purely decorative: always render with the parent providing accessible
 * text, since this component sets aria-hidden on itself.
 */
export function Monogram({
  className = "size-9",
  textClassName = "text-base",
}: MonogramProps) {
  return (
    <span
      className={`relative grid shrink-0 place-items-center rounded-full bg-gradient-signature ${className}`}
      aria-hidden="true"
    >
      <span className="absolute inset-[2px] rounded-full bg-bg" />
      <span
        className={`relative font-display font-black text-ink ${textClassName}`}
      >
        E
      </span>
    </span>
  );
}
