"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { getApprovedProductImage } from "@/lib/product-image-approvals";
import type { ProductImage } from "@/lib/products";

/**
 * Product galleries render only assets that carry a permission record in
 * lib/product-image-approvals.ts. ProductCard and SearchResultCard already
 * apply that gate; the bespoke review templates rendered `product.images`
 * straight through and so showed twelve undocumented images on five pages.
 * A gallery with no approved asset renders nothing rather than an unlicensed
 * photo — an empty slot is a documented gap, an unlicensed image is a liability.
 */
export function ProductImageGallery({ productSlug, images: allImages }: { productSlug: string; images: ProductImage[] }) {
  const images = allImages.filter((image) => getApprovedProductImage(productSlug, image.src));
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];
  if (!activeImage) return null;

  function goToPrevious() {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  }

  function goToNext() {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  }

  return (
    <div className="product-gallery">
      <div className="product-gallery-main">
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          priority
          sizes="(max-width: 768px) 92vw, 620px"
          className="object-cover"
        />
        <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-black text-white backdrop-blur">
          {activeImage.label}
        </div>
        <div className="absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1 text-xs font-black text-white backdrop-blur">
          {activeIndex + 1}/{images.length}
        </div>
        <button
          type="button"
          className="gallery-arrow left-3"
          onClick={goToPrevious}
          aria-label="Visa föregående produktbild"
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <button
          type="button"
          className="gallery-arrow right-3"
          onClick={goToNext}
          aria-label="Visa nästa produktbild"
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>

      <div className="gallery-thumbs" aria-label="Produktbilder">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className="gallery-thumb"
            data-active={index === activeIndex}
            onClick={() => setActiveIndex(index)}
            aria-label={`Visa bild: ${image.label}`}
          >
            <Image
              src={image.src}
              alt={`Miniatyr: ${image.alt}`}
              fill
              sizes="72px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
