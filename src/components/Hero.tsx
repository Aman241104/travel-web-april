"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(".hero-reveal span", 
        { y: "110%", opacity: 0 },
        { y: 0, opacity: 1, duration: 1.8, stagger: 0.1, delay: 0.5 }
      )
      .fromTo(".hero-sub-reveal", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2 },
        "-=1.2"
      )
      .fromTo(".hero-cta-reveal", 
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, ease: "expo.out" },
        "-=0.8"
      );

      gsap.to(".hero-video-wrap", {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[115vh] w-full flex items-center justify-center overflow-hidden bg-white transition-colors duration-1000">
      {/* Background with Ambient Glows */}
      <div className="absolute inset-0 z-0">
        <div className="hero-video-wrap absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-40 grayscale-[50%]"
          >
            <source src="/24541-343454486.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Modern Ambient Glows */}
        <div className="absolute top-[10%] left-[20%] w-[800px] h-[800px] bg-accent-blue/10 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] bg-accent-violet/10 blur-[150px] rounded-full animate-pulse delay-1000" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white z-10" />
      </div>

      <div className="container relative z-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block overflow-hidden mb-10">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block text-accent-blue font-sans text-[10px] font-black uppercase tracking-[0.6em]"
            >
              Excellence since 2011 • Luxury Travel
            </motion.span>
          </div>
          
          <h1 className="font-serif text-7xl sm:text-9xl md:text-[160px] lg:text-[200px] leading-[0.8] tracking-tightest mb-16 text-onyx">
            <div className="hero-reveal overflow-hidden pb-4">
              <span className="block">Elevate</span>
            </div>
            <div className="hero-reveal overflow-hidden pb-4">
              <span className="block italic font-light text-accent-blue">Every</span>
            </div>
            <div className="hero-reveal overflow-hidden">
              <span className="block">Journey.</span>
            </div>
          </h1>

          <div className="hero-sub-reveal max-w-2xl mx-auto mb-16">
            <p className="font-sans text-onyx/60 text-lg md:text-xl leading-relaxed font-medium">
              Bespoke travel experiences curated with <span className="text-onyx">absolute precision</span>. 
              We don&apos;t just plan trips; we architect your legacy through exploration.
            </p>
          </div>

          <div className="hero-cta-reveal flex flex-col sm:flex-row items-center justify-center gap-10">
            <MagneticButton className="interactive px-16 py-8 bg-onyx text-white font-black text-[10px] uppercase tracking-[0.4em] rounded-full transition-all duration-500 hover:scale-105 hover:bg-accent-blue shadow-2xl">
              Start Designing
            </MagneticButton>
            <button className="interactive font-sans text-[10px] font-black uppercase tracking-[0.4em] text-onyx/40 hover:text-onyx transition-colors py-4">
              Explore Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-8"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-accent-blue/50 to-transparent" />
      </motion.div>
    </section>
  );
}
