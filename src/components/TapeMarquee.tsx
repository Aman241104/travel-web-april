"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TapeMarqueeProps {
  reverse?: boolean;
  rotate?: number;
  speed?: number;
  text?: string;
  outline?: boolean;
}

export default function TapeMarquee({
  reverse = false,
  rotate = -0.5,
  speed = 40,
  text = "Organic Elegance • Expertly Curated • Premium Journeys • Luxury Travel • ",
  outline = false,
}: TapeMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // The base animation
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none" }
    });

    const xVal = reverse ? "50%" : "-50%";
    
    tl.to(marquee, {
      x: xVal,
      duration: speed,
    });

    // Scroll speed multiplier: Marquee speeds up slightly as you scroll
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const scrollSpeed = Math.abs(self.getVelocity() / 1000); // Normalized velocity
        gsap.to(tl, {
          timeScale: 1 + scrollSpeed, // Speed up based on scroll
          duration: 0.5,
          ease: "power2.out"
        });
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => {
        if (st.vars.trigger === containerRef.current) st.kill();
      });
    };
  }, [reverse, speed]);

  return (
    <div 
      ref={containerRef}
      className={`relative py-6 md:py-10 overflow-hidden transition-all duration-1000 border-y border-[#F2EFE9]/5 
        ${outline ? "bg-[#0B1310]" : "bg-[#0B1310] shadow-[0_20px_40px_rgba(15,47,42,0.15)]"}
      `}
      style={{ transform: `rotate(${rotate}deg) scale(1.05)` }}
    >
      <div className="flex whitespace-nowrap will-change-transform" ref={marqueeRef}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className={`
              font-serif italic text-4xl md:text-6xl lg:text-7xl tracking-tighter px-4
              ${outline 
                ? "text-transparent stroke-text" 
                : "text-[#F2EFE9]/90"
              }
            `}>
              {text}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(15, 47, 42, 0.2);
        }
      `}</style>
    </div>
  );
}
