type MerchantActionProps = {
  href: string;
  merchant?: string;
  product: string;
  placement: string;
  label: string;
  disclosure: string;
  direct?: boolean;
  compact?: boolean;
};

/** Shared merchant button and disclosure used by partner and legacy decisions. */
export function MerchantAction({ href, merchant, product, placement, label, disclosure, direct = false, compact = false }: MerchantActionProps) {
  return <>
    <a className={`${compact ? "mt-1 min-h-11 px-2 py-2 text-xs" : "mt-5 min-h-12 px-4 py-3"} inline-flex w-full items-center justify-center rounded-full bg-wine text-center font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine`} href={href} rel={direct ? "nofollow noopener" : "sponsored nofollow noopener"} data-merchant={merchant} data-product={product} data-placement={placement}>{label}</a>
    <p className="mt-2 text-xs text-ink-soft">{disclosure}</p>
  </>;
}
