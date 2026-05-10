"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function ParallaxImage({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
}: ParallaxImageProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="h-full min-h-full"
        initial={reduceMotion ? false : { scale: 1.04 }}
        whileInView={reduceMotion ? undefined : { scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={src}
          alt={alt}
          width={960}
          height={720}
          priority={priority}
          className={`h-full w-full object-cover ${imageClassName ?? ""}`}
        />
      </motion.div>
    </div>
  );
}
