"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";
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
      )
      .fromTo(".hero-search-reveal", 
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.6"
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
    <section ref={containerRef} className="relative min-h-screen md:h-[120vh] w-full flex flex-col items-center justify-start pt-24 md:pt-32 overflow-hidden bg-bg-light transition-colors duration-1000">
      {/* Background with Ambient Glows */}
      <div className="absolute inset-0 z-0">
        <div className="hero-video-wrap absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-[75%] md:h-[80%] w-full object-cover rounded-b-[40px] shadow-2xl"
          >
            <source src="/24541-343454486.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Organic Ambient Glows */}
        <div className="absolute top-[10%] left-[20%] w-[800px] h-[800px] bg-brand-teal/20 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] bg-brand-sand/30 blur-[150px] rounded-full animate-pulse delay-1000" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-brand-teal/10 via-transparent to-bg-light z-10" />
      </div>

      <div className="container relative z-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block overflow-hidden mb-4 md:mb-6">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block text-brand-teal font-sans text-[10px] md:text-xs font-semibold uppercase tracking-widest"
            >
              Luxury Travel Experiences
            </motion.span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-[80px] lg:text-[110px] leading-[1.1] md:leading-[1] tracking-tight mb-6 md:mb-8 text-onyx">
            <div className="hero-reveal overflow-hidden pb-1 md:pb-4">
              <span className="block">Let&apos;s explore the</span>
            </div>
            <div className="hero-reveal overflow-hidden pb-2 md:pb-6">
              <span className="block italic">world together</span>
            </div>
          </h1>

          <div className="hero-sub-reveal max-w-2xl mx-auto mb-10 md:mb-16">
            <p className="font-sans text-onyx/70 text-base md:text-xl leading-relaxed font-medium px-4">
              Custom travel plans made <span className="text-onyx font-bold">just for you</span>. 
              We help you explore the world with ease and comfort.
            </p>
          </div>

          <div className="hero-cta-reveal flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-6 md:mt-10">
            <MagneticButton className="interactive w-full sm:w-auto px-12 py-5 bg-brand-teal text-bg-light font-medium text-sm rounded-[40px] transition-all duration-500 hover:scale-105 hover:bg-brand-tealDark shadow-xl">
              Start Designing
            </MagneticButton>
            <button className="interactive font-sans text-sm font-medium text-onyx-muted hover:text-onyx transition-colors py-2 md:py-4">
              Explore Portfolio
            </button>
          </div>
          
          {/* Overlapping Hero Cards */}
          <div className="mt-12 md:mt-20 w-full flex justify-center items-end gap-3 md:gap-4 overflow-visible px-4 z-30 opacity-0 hero-search-reveal">
            {[ 
              "/customer/image copy 8.png", 
              "/customer/image copy 9.png", 
              "/customer/image copy 10.png", 
              "/customer/image copy 3.png" 
            ].map((src, i) => (
              <div key={i} className="relative w-[38vw] h-[50vw] sm:w-[160px] sm:h-[220px] md:w-[200px] md:h-[280px] rounded-2xl bg-white shadow-2xl overflow-hidden border-4 border-white transform transition-transform hover:-translate-y-4 duration-500 even:translate-y-[4vw] md:even:translate-y-8 flex-shrink-0 first:hidden last:hidden sm:first:block sm:last:block">
                <Image src={src} alt="Destination" fill className="object-cover" sizes="(max-width: 640px) 38vw, (max-width: 768px) 160px, 200px" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Soft Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-brand-teal">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand-teal to-transparent" />
      </motion.div>
    </section>
  );
}
