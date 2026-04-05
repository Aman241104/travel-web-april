"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.5 }
      )
        .fromTo(
          subRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.8"
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        );
    });

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-cream">
      {/* High-Impact Background Experience */}
      <div className="absolute inset-0 z-0">
        {/* Soft, warm luxury overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-jade-white/40 via-transparent to-cream/80 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(250,249,246,0.4)_100%)] z-10" />
        
        {/* Video / High-Res Image Fallback */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506929113614-bb58a94fd27a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-70"
          >
            <source src="/24541-343454486.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="container relative z-20 px-6 text-center">
        <div className="overflow-hidden mb-6">
          <h1
            ref={titleRef}
            className="font-serif text-6xl md:text-8xl lg:text-[130px] text-jade-darkest leading-[0.85] tracking-tight"
          >
            Light. Life. <br />
            <span className="text-gold italic font-light drop-shadow-sm">Travel.</span>
          </h1>
        </div>

        <div className="overflow-hidden mb-12">
          <p
            ref={subRef}
            className="font-sans text-jade-darkest/90 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium"
          >
            A more vibrant way to explore. From sun-drenched retreats to curated 
            adventures, we refine every detail so you can simply live.
          </p>
        </div>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="interactive group px-12 py-6 bg-jade text-jade-white font-bold rounded-full transition-all duration-500 hover:bg-jade-darkest hover:scale-105 shadow-2xl shadow-jade/30">
            Start Your Adventure
          </button>
          <button className="interactive group px-12 py-6 text-jade-darkest font-bold rounded-full border-2 border-jade/20 hover:border-gold transition-all duration-300 bg-jade-white/80 backdrop-blur-md shadow-lg">
            View Dream Map
          </button>
        </div>
      </div>

      {/* Floating Elements for Premium Depth */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden hidden lg:block">
        <div className="absolute top-[20%] left-[10%] w-24 h-24 border border-gold/20 rounded-full animate-[pulse_4s_infinite]" />
        <div className="absolute bottom-[20%] right-[10%] w-32 h-32 border-t border-r border-jade/10 rounded-tr-[60px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-jade-darkest/60 font-bold">Discover the Vibe</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
