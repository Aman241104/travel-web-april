"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight, MessageCircle, Sparkles, Globe, Compass } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cinematic Scale-In
      gsap.fromTo(cardRef.current, 
        { scale: 0.9, opacity: 0, y: 100 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
          }
        }
      );

      // Headline Reveal
      gsap.fromTo(".cta-headline-line", 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 70%",
          }
        }
      );

      // Background Zoom
      gsap.fromTo(".cta-bg-image", 
        { scale: 1.2 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );

      // Icons Entrance
      gsap.fromTo(".cta-icon-module", 
        { scale: 0, rotate: -180 },
        {
          scale: 1,
          rotate: 0,
          stagger: 0.1,
          duration: 1.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 65%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={containerRef} className="py-16 lg:py-28 bg-white overflow-hidden scroll-mt-24">
      <div className="container-custom">
        <div 
          ref={cardRef}
          className="relative bg-[#050807] rounded-[48px] lg:rounded-[80px] overflow-hidden p-8 lg:p-16 text-center text-white shadow-[0_80px_160px_rgba(0,0,0,0.6)] group border border-white/5"
        >
          
          {/* Cinematic Immersive Background */}
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-full cta-bg-image">
              <Image 
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2400&auto=format&fit=crop" 
                alt="The Ultimate Horizon"
                fill
                className="object-cover opacity-30 mix-blend-luminosity"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050807] via-transparent to-[#050807]/60" />
            {/* Animated Grain */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          </div>

          {/* Luxury Atmospheric Depth */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/[0.15] rounded-full blur-[160px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-gold/[0.08] rounded-full blur-[140px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

          {/* Precision Rim Light */}
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[48px] lg:rounded-[80px] z-20 pointer-events-none" />

          <div className="cta-content relative z-10 flex flex-col items-center space-y-12 lg:space-y-16">
            
            {/* Icon Triptych */}
            <div className="flex items-center gap-8 lg:gap-12">
               <div className="cta-icon-module w-12 h-12 lg:w-16 lg:h-16 rounded-[18px] lg:rounded-[24px] bg-white/5 backdrop-blur-3xl border border-white/10 flex items-center justify-center shadow-2xl">
                  <Globe className="w-5 h-5 lg:w-7 lg:h-7 text-primary" />
               </div>
               <div className="cta-icon-module w-16 h-16 lg:w-24 lg:h-24 rounded-[24px] lg:rounded-[36px] bg-primary text-white flex items-center justify-center shadow-3xl scale-110 z-20 relative">
                  <Sparkles className="w-8 h-8 lg:w-12 lg:h-12" />
               </div>
               <div className="cta-icon-module w-12 h-12 lg:w-16 lg:h-16 rounded-[18px] lg:rounded-[24px] bg-white/5 backdrop-blur-3xl border border-white/10 flex items-center justify-center shadow-2xl">
                  <Compass className="w-5 h-5 lg:w-7 lg:h-7 text-accent-gold" />
               </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-center gap-4 text-primary font-black uppercase tracking-[0.6em] text-[10px] lg:text-[11px] mb-4">
                <span className="w-8 h-[1px] bg-primary/30" />
                The Final Curation
                <span className="w-8 h-[1px] bg-primary/30" />
              </div>
              
              <h2 className="text-[32px] md:text-[56px] lg:text-[76px] xl:text-[92px] font-sans font-black leading-[1] tracking-tightest uppercase max-w-6xl">
                <span className="block cta-headline-line">Ready To Write</span>
                <span className="block cta-headline-line text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary/40 italic font-serif font-light lowercase">Your</span>
                <span className="block cta-headline-line">Legacy?</span>
              </h2>
              
              <p className="text-gray-400 text-sm lg:text-xl max-w-2xl mx-auto leading-relaxed font-medium tracking-tight opacity-80">
                Join our elite circle of global explorers. Experience the world through a lens of absolute luxury and surgical precision. Your private consultation is the first step toward the impossible.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-12 w-full max-w-3xl mx-auto">
              <MagneticButton 
                className="w-full sm:w-auto px-12 py-6 lg:px-20 lg:py-8 bg-primary text-white font-black rounded-[24px] lg:rounded-[32px] flex items-center justify-center gap-6 transition-all shadow-[0_30px_70px_rgba(56,142,60,0.4)] group text-[11px] lg:text-sm uppercase tracking-[0.4em] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <span className="relative z-10">Commission Your Journey</span>
                <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8 group-hover:translate-x-4 transition-transform duration-700 relative z-10" />
              </MagneticButton>

              <MagneticButton 
                className="w-full sm:w-auto px-12 py-6 lg:px-20 lg:py-8 bg-white/5 backdrop-blur-3xl text-white font-black rounded-[24px] lg:rounded-[32px] border border-white/10 flex items-center justify-center gap-6 transition-all hover:bg-white/10 hover:border-primary/40 text-[11px] lg:text-sm uppercase tracking-[0.4em] shadow-3xl"
              >
                <span className="relative z-10">Private Concierge</span>
                <Phone className="w-5 h-5 lg:w-7 lg:h-7 text-accent-gold group-hover:rotate-12 transition-transform" />
              </MagneticButton>
            </div>

            {/* Recognition Footer */}
            <div className="pt-12 lg:pt-20 flex flex-wrap justify-center items-center gap-10 lg:gap-20 opacity-30 group-hover:opacity-60 transition-opacity duration-1000">
              {[
                { label: "Expert Curation", icon: Sparkles },
                { label: "Global Access", icon: Globe },
                { label: "Zero Friction", icon: Compass }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                  <span className="text-[9px] lg:text-[11px] font-bold uppercase tracking-[0.4em] whitespace-nowrap">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
