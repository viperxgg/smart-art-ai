"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { ProductImage } from "@/lib/products";

export function ProductImageGallery({ images }: { images: ProductImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];

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
