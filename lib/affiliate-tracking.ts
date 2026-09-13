const merchants = {
  nordicfeel: { host: "at.nordicfeel.com", product: "k18-leave-in-50ml" },
  kjell: { host: "ion.kjell.com", product: "kobo-clara-bw" },
} as const;

export function getPartnerClick(href: string, data: { merchant?: string; product?: string; placement?: string }) {
  if (!data.merchant || !(data.merchant in merchants)) return null;
  const merchant = merchants[data.merchant as keyof typeof merchants];
  let url: URL;
  try { url = new URL(href); } catch { return null; }
  if (url.protocol !== "https:" || url.hostname !== merchant.host || url.pathname !== "/t/t" ||
      data.product !== merchant.product || !data.placement || !/^[a-z0-9-]{1,60}$/.test(data.placement)) return null;
  return { merchant: data.merchant, product: data.product, placement: data.placement };
}

export function isAmazonDestination(href: string): boolean {
  try {
    const { hostname, protocol } = new URL(href);
    return protocol === "https:" && ["amzn.to", "amazon.se", "amazon.com", "amazon.de", "amazon.co.uk"].some(
      (host) => hostname === host || hostname.endsWith(`.${host}`),
    );
  } catch { return false; }
}
