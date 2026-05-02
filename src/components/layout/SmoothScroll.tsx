"use client";
import React, { ReactNode, useEffect } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Ensure ScrollTrigger is updated when Lenis scrolls
    ScrollTrigger.refresh();
  }, []);

  useLenis((lenis) => {
    ScrollTrigger.update();
  });

  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.08, 
        duration: 1.2, 
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        infinite: false,
      }}
    >
      {children as any}
    </ReactLenis>
  );
}
