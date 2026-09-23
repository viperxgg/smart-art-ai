const OUT_OF_STOCK = "https://schema.org/OutOfStock";

type AvailabilityOffer = {
  merchantName: string;
  availability?: string;
  availabilityCheckedAt: string;
};

export function isVerifiedOutOfStock(offer: AvailabilityOffer, now = Date.now()) {
  const checkedAt = Date.parse(offer.availabilityCheckedAt);
  return offer.availability === OUT_OF_STOCK
    && Number.isFinite(now)
    && Number.isFinite(checkedAt)
    && checkedAt <= now;
}

export function getMerchantOfferPresentation(offer: AvailabilityOffer, now = Date.now()) {
  const outOfStock = isVerifiedOutOfStock(offer, now);
  const checkedDate = new Intl.DateTimeFormat("sv-SE", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Stockholm",
  }).format(new Date(offer.availabilityCheckedAt));

  return {
    outOfStock,
    ctaLabel: outOfStock
      ? `Se om den är tillbaka hos ${offer.merchantName}`
      : `Se pris hos ${offer.merchantName}`,
    stockMessage: outOfStock
      ? `Slut i lager hos ${offer.merchantName} vid vår kontroll ${checkedDate}.`
      : null,
  };
}
