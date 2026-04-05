"use client";
import React, { ReactNode } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useLenis(() => {
    ScrollTrigger.update();
  });

  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.1, 
        duration: 1.5, 
        smoothWheel: true,
        wheelMultiplier: 1.1,
        touchMultiplier: 2,
      }}
    >
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {children as any}
    </ReactLenis>
  );
}
