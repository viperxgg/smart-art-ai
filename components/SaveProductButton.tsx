"use client";

import { useEffect, useState } from "react";
import { Heart, X } from "lucide-react";

const storageKey = "elins-val-saved-products";
const updateEventName = "elins-val-saved-products:update";

export function getSavedProductSlugs() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedValue = window.localStorage.getItem(storageKey);
    const parsedValue = storedValue ? JSON.parse(storedValue) : [];

    return Array.isArray(parsedValue)
      ? parsedValue.filter((item): item is string => typeof item === "string")
      : [];
  } catch {
    return [];
  }
}

function setSavedProductSlugs(slugs: string[]) {
  window.localStorage.setItem(storageKey, JSON.stringify([...new Set(slugs)]));
  window.dispatchEvent(new Event(updateEventName));
}

export function useSavedProducts() {
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);

  useEffect(() => {
    function refreshSavedProducts() {
      setSavedSlugs(getSavedProductSlugs());
    }

    refreshSavedProducts();
    window.addEventListener(updateEventName, refreshSavedProducts);
    window.addEventListener("storage", refreshSavedProducts);

    return () => {
      window.removeEventListener(updateEventName, refreshSavedProducts);
      window.removeEventListener("storage", refreshSavedProducts);
    };
  }, []);

  function toggleProduct(slug: string) {
    const currentSlugs = getSavedProductSlugs();
    const nextSlugs = currentSlugs.includes(slug)
      ? currentSlugs.filter((item) => item !== slug)
      : [...currentSlugs, slug];

    setSavedProductSlugs(nextSlugs);
  }

  function removeProduct(slug: string) {
    setSavedProductSlugs(getSavedProductSlugs().filter((item) => item !== slug));
  }

  return { savedSlugs, toggleProduct, removeProduct };
}

type SaveProductButtonProps = {
  productSlug: string;
  productTitle: string;
  className?: string;
  variant?: "icon" | "pill" | "remove";
};

export function SaveProductButton({
  productSlug,
  productTitle,
  className = "",
  variant = "icon",
}: SaveProductButtonProps) {
  const { savedSlugs, toggleProduct, removeProduct } = useSavedProducts();
  const isSaved = savedSlugs.includes(productSlug);
  const isRemoveVariant = variant === "remove";
  const label = isRemoveVariant
    ? `Ta bort ${productTitle} från sparade produkter`
    : isSaved
      ? `Ta bort ${productTitle} från sparade produkter`
      : `Spara ${productTitle}`;

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={isRemoveVariant ? undefined : isSaved}
      onClick={() =>
        isRemoveVariant ? removeProduct(productSlug) : toggleProduct(productSlug)
      }
      className={className}
    >
      {isRemoveVariant ? (
        <X size={18} aria-hidden="true" />
      ) : (
        <Heart
          size={20}
          fill={isSaved ? "currentColor" : "none"}
          aria-hidden="true"
        />
      )}
      {variant === "pill" ? (
        <span>{isSaved ? "Sparad" : "Spara"}</span>
      ) : null}
      {variant === "remove" ? <span>Ta bort</span> : null}
    </button>
  );
}
