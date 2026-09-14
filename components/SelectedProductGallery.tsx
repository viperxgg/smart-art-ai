"use client";

import { useState } from "react";
import Image from "next/image";

type ProductImage = { src: string; width: number; height: number; alt: string; credit: string };

export function SelectedProductGallery({ images, name }: { images: ProductImage[]; name: string }) {
  const [selected, setSelected] = useState(0);
  const active = images[selected];
  return <div className="min-w-0">
    <figure>
      <div className="flex aspect-square items-center justify-center overflow-hidden rounded-3xl border border-line bg-white p-6 sm:p-10">
        <Image src={active.src} alt={active.alt} width={active.width} height={active.height}
          priority={selected === 0} loading="eager" sizes="(min-width: 1024px) 480px, (min-width: 768px) 45vw, 90vw"
          className="h-full w-full object-contain" />
      </div>
      <figcaption aria-live="polite" className="mt-3 min-h-12 text-xs leading-relaxed text-ink-soft">{active.alt} {active.credit}</figcaption>
    </figure>
    {images.length > 1 ? <div role="group" aria-label={`Produktbilder: ${name}`} className="mt-3 flex flex-wrap gap-3">
      {images.map((image, index) => <button key={image.src} type="button" aria-pressed={selected === index}
        aria-label={`Visa bild ${index + 1}: ${image.alt}`} onClick={() => setSelected(index)}
        className={`h-20 w-20 overflow-hidden rounded-xl border-2 bg-white p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine ${selected === index ? "border-wine" : "border-line"}`}>
        <Image src={image.src} alt="" width={image.width} height={image.height} sizes="64px" className="h-full w-full object-contain" />
      </button>)}
    </div> : null}
  </div>;
}
