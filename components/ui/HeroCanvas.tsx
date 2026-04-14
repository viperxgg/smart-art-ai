"use client";

import dynamic from "next/dynamic";

const GenerativeMesh = dynamic(() => import("./GenerativeMesh"), { 
  ssr: false, 
  loading: () => <div className="absolute inset-0 bg-black/50 animate-pulse z-0" />
});

export default function HeroCanvas() {
  return <GenerativeMesh />;
}
