"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { ChevronDown } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: "500+", label: "Luxury Destinations" },
  { value: "100%", label: "Tailored Itineraries" },
  { value: "24/7", label: "Expert Concierge" },
  { value: "15+", label: "Years Experience" },
];

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
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.5, stagger: 0.1 },
        "-=0.5"
      );

      gsap.to(".hero-bg", {
        scale: 1.15,
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
            className="w-full h-full object-cover opacity-50 scale-105"
          >
            <source src="/24541-343454486.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Sophisticated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/80 via-onyx/40 to-onyx/90 z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

      <div className="container relative z-20 px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="hero-trust-reveal mb-10">
            <span className="inline-block px-5 py-2 rounded-full bg-white/5 border border-white/10 text-brand-teal font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] backdrop-blur-md">
              15+ Years of Bespoke Travel Excellence
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-[80px] lg:text-[100px] leading-[1.05] tracking-tight mb-8 text-white">
            <div className="hero-reveal overflow-hidden pb-1 md:pb-4">
              <span className="block">Exquisite Journeys,</span>
            </div>
            <div className="hero-reveal overflow-hidden pb-2 md:pb-6">
              <span className="block italic font-light text-brand-teal/90">Tailored to You</span>
            </div>
          </h1>

          <div className="hero-sub-reveal max-w-2xl mx-auto mb-12">
            <p className="font-sans text-white/70 text-lg md:text-xl leading-relaxed font-medium">
              Curated itineraries and seamless global access for the discerning traveler. 
              Experience the world with unparalleled elegance and absolute ease.
            </p>
          </div>

          <div className="hero-cta-reveal flex flex-col sm:flex-row items-center justify-center gap-6">
            <MagneticButton className="w-full sm:w-auto px-10 py-5 bg-brand-teal text-white font-bold text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-500 hover:scale-105 hover:bg-white hover:text-onyx shadow-2xl shadow-brand-teal/20">
              Start Your Journey
            </MagneticButton>
            <button className="group flex items-center gap-4 px-10 py-5 border border-white/20 rounded-full font-sans text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white/5 transition-all duration-500">
              <span>Explore Destinations</span>
              <div className="w-6 h-[1px] bg-white/50 group-hover:bg-brand-teal transition-all duration-500 group-hover:w-10" />
            </button>
          </div>
        </div>
      </div>

      {/* Trust Badges / Stats */}
      <div className="absolute bottom-0 left-0 w-full z-20 bg-gradient-to-t from-onyx to-transparent pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 py-8 border-t border-white/10">
            {stats.map((stat, index) => (
              <div key={index} className="hero-trust-reveal flex flex-col items-center md:items-start gap-1">
                <span className="text-white font-serif text-3xl md:text-4xl">{stat.value}</span>
                <span className="text-white/40 font-sans text-[10px] uppercase tracking-widest text-center md:text-left">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 3, 
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-white/30 font-sans text-[9px] uppercase tracking-[0.3em] rotate-90 mb-8 origin-left">Scroll</span>
        <ChevronDown className="w-4 h-4 text-brand-teal" />
      </motion.div>
    </section>
  );
}
