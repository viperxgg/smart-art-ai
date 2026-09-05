type AffiliateCaptionProps = {
  className?: string;
};

/**
 * The 12px caption rendered directly under every Amazon purchase button.
 * One string, one component, so the wording stays identical site-wide.
 */
export function AffiliateCaption({ className = "" }: AffiliateCaptionProps) {
  return (
    <p className={`text-xs leading-5 text-ink-soft ${className}`}>
      Reklamlänk – vi får provision vid köp
    </p>
  );
}
