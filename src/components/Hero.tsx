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
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(".hero-trust-reveal", 
        { opacity: 0 },
        { opacity: 1, duration: 1.5 },
        "-=0.5"
      );

      gsap.to(".hero-bg", {
        scale: 1.1,
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
    <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-onyx">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="hero-bg absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="/24541-343454486.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/60 via-onyx/20 to-onyx/80 z-10" />
      </div>

      <div className="container relative z-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="hero-trust-reveal mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
              15+ Years of Bespoke Travel Excellence
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-[85px] lg:text-[110px] leading-[1.1] md:leading-[1] tracking-tight mb-8 text-white">
            <div className="hero-reveal overflow-hidden pb-1 md:pb-4">
              <span className="block">Exquisite Journeys,</span>
            </div>
            <div className="hero-reveal overflow-hidden pb-2 md:pb-6">
              <span className="block italic font-light">Tailored to You</span>
            </div>
          </h1>

          <div className="hero-sub-reveal max-w-2xl mx-auto mb-12">
            <p className="font-sans text-white/80 text-lg md:text-xl leading-relaxed font-medium">
              Curated itineraries and seamless global access for the discerning traveler. 
              Experience the world with unparalleled elegance and ease.
            </p>
          </div>

          <div className="hero-cta-reveal flex flex-col sm:flex-row items-center justify-center gap-6">
            <MagneticButton className="w-full sm:w-auto px-12 py-5 bg-brand-teal text-white font-bold text-sm uppercase tracking-widest rounded-full transition-all duration-500 hover:scale-105 hover:bg-brand-tealDark shadow-2xl shadow-brand-teal/20">
              Start Your Journey
            </MagneticButton>
            <button className="group flex items-center gap-3 font-sans text-sm font-bold uppercase tracking-widest text-white hover:text-brand-teal transition-colors">
              <span>View Destinations</span>
              <div className="w-8 h-[1px] bg-white group-hover:bg-brand-teal transition-all duration-500 group-hover:w-12" />
            </button>
          </div>
        </div>
      </div>

      {/* Trust Badges / Stats */}
      <div className="hero-trust-reveal absolute bottom-12 left-0 w-full z-20 hidden md:block">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-8 border-t border-white/10">
            <div className="flex flex-col gap-1">
              <span className="text-white font-serif text-2xl">500+</span>
              <span className="text-white/40 font-sans text-[10px] uppercase tracking-widest">Luxury Destinations</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white font-serif text-2xl">100%</span>
              <span className="text-white/40 font-sans text-[10px] uppercase tracking-widest">Tailored Itineraries</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white font-serif text-2xl">24/7</span>
              <span className="text-white/40 font-sans text-[10px] uppercase tracking-widest">Expert Concierge</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white font-serif text-2xl">15+</span>
              <span className="text-white/40 font-sans text-[10px] uppercase tracking-widest">Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 md:hidden"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-teal to-transparent" />
      </motion.div>
    </section>
  );
}
