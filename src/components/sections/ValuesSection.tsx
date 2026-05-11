"use client";
import { useEffect, useRef } from "react";
import { Heart, Shield, Zap, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const benefits = [
  { 
    title: "Zero Surprises Pricing", 
    desc: "What you see is exactly what you pay. No hidden fees, no last-minute adjustments. Just total transparency.", 
    icon: Shield 
  },
  { 
    title: "Master-Crafted Itineraries", 
    desc: "Our specialists don't just book hotels; they weave together unique narratives tailored to your absolute standard.", 
    icon: Heart 
  },
  { 
    title: "Frictionless Reality", 
    desc: "A dedicated concierge anticipates every variable, ensuring you stay in the moment while we handle the logistics.", 
    icon: Zap 
  },
];

export default function ValuesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline Stagger
      gsap.fromTo(".values-headline-line", 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".values-header",
            start: "top 80%",
          }
        }
      );

      // Value Tiles Entrance
      gsap.fromTo(".value-tile", 
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".values-grid",
            start: "top 75%",
          }
        }
      );

      // Polaroid Spread Animation
      gsap.fromTo(".polaroid-card", 
        { 
          opacity: 0, 
          scale: 0.8, 
          y: 100,
          rotate: (i) => i === 0 ? 15 : -15 
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotate: (i) => i === 0 ? -8 : 12,
          stagger: 0.3,
          duration: 2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: imagesRef.current,
            start: "top 70%",
          }
        }
      );

      // Seal Pulse & Spin
      gsap.fromTo(".brand-seal", 
        { scale: 0, rotate: -180 },
        {
          scale: 1,
          rotate: 0,
          duration: 1.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: imagesRef.current,
            start: "top 60%",
          }
        }
      );

      // Polaroid Parallax
      gsap.to(".polaroid-parallax-1", {
        y: -40,
        rotate: -12,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(".polaroid-parallax-2", {
        y: 60,
        rotate: 18,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="values" ref={containerRef} className="py-16 lg:py-28 bg-white overflow-hidden relative border-t border-gray-100 scroll-mt-24">
      {/* Premium Background Accents */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_85%_15%,rgba(56,142,60,0.04),transparent_60%)] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          
          {/* Content Side: The Narrative */}
          <div className="w-full lg:w-1/2 space-y-8 lg:space-y-12">
            <div className="values-header space-y-4 lg:space-y-8">
              <div className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.5em] text-[10px] lg:text-[11px] mb-2 lg:mb-4">
                <span className="w-8 h-[1px] bg-primary/30" />
                The Jade Distinction
              </div>
              <h2 className="text-[32px] md:text-[52px] lg:text-[68px] xl:text-[80px] font-sans font-black text-gray-950 leading-[1] tracking-tightest uppercase">
                <span className="block values-headline-line">Elegance In</span>
                <span className="block values-headline-line text-primary italic font-serif font-light lowercase">Every</span>
                <span className="block values-headline-line">Journey.</span>
              </h2>
              <p className="text-[13px] lg:text-xl text-gray-600 leading-relaxed max-w-[540px] font-medium tracking-tight opacity-80">
                At Jade Tours and Travels, we don&apos;t just plan trips; we curate legacies of exploration. Our values are the foundation of every bespoke experience we craft.
              </p>
            </div>

            <div className="values-grid space-y-4 lg:space-y-8">
              {benefits.map((benefit, i) => (
                <div 
                  key={i} 
                  className="value-tile flex flex-col sm:flex-row gap-5 lg:gap-8 group p-5 lg:p-8 rounded-[28px] lg:rounded-[48px] bg-gray-50/40 border border-gray-100 hover:bg-white hover:shadow-[0_40px_120px_rgba(56,142,60,0.1)] transition-all duration-1000 relative overflow-hidden"
                >
                  {/* Editorial Background Motif */}
                  <span className="absolute -top-4 -left-4 font-serif font-black text-6xl lg:text-[100px] text-gray-950/[0.02] group-hover:text-primary/[0.04] transition-all duration-1000 leading-none tracking-tightest pointer-events-none select-none uppercase z-0 italic">
                    {benefit.title[0]}
                  </span>

                  <div className="w-12 h-12 lg:w-20 lg:h-20 rounded-[20px] lg:rounded-[32px] bg-white flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-1000 shadow-sm group-hover:-translate-y-2 transform group-hover:rotate-12 border border-gray-100 relative z-10">
                    <benefit.icon className="w-6 h-6 lg:w-10 lg:h-10" />
                  </div>
                  <div className="space-y-2 lg:space-y-3 relative z-10 pt-1 lg:pt-2">
                    <h3 className="font-sans font-black text-lg lg:text-2xl text-gray-950 group-hover:text-primary transition-colors duration-700 tracking-tightest uppercase leading-none">{benefit.title}</h3>
                    <p className="text-gray-500 leading-relaxed max-w-[480px] text-[13px] lg:text-lg font-medium tracking-tight group-hover:text-gray-700 transition-colors duration-700">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 flex flex-wrap items-center gap-8 lg:gap-12">
              <MagneticButton 
                className="px-10 py-5 lg:px-14 lg:py-6 bg-primary text-white font-black rounded-full shadow-[0_20px_60px_rgba(56,142,60,0.3)] hover:bg-primary-dark transition-all text-[11px] lg:text-xs uppercase tracking-[0.4em] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10">Start Your Legacy</span>
              </MagneticButton>
              <button className="text-gray-400 font-black uppercase tracking-[0.3em] text-[10px] lg:text-[11px] hover:text-primary transition-all flex items-center gap-4 group">
                <span>View Collections</span>
                <div className="w-12 h-[1px] bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                </div>
              </button>
            </div>
          </div>

          {/* Image Side: The Atmosphere */}
          <div ref={imagesRef} className="w-full lg:w-1/2 relative h-[400px] md:h-[600px] lg:h-[800px] flex items-center justify-center mt-12 lg:mt-0">
            {/* Background cinematic depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-primary/5 rounded-full blur-[80px] md:blur-[160px] -z-10 animate-pulse" />

            {/* Premium Polaroid 1 */}
            <div 
              className="polaroid-card polaroid-parallax-1 absolute top-0 left-0 w-[160px] md:w-[320px] lg:w-[420px] bg-white p-3 md:p-6 pb-10 md:pb-20 lg:pb-32 shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-gray-50 cursor-pointer z-20 hover:z-40 group"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg md:rounded-2xl bg-gray-100">
                <Image 
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1200&auto=format&fit=crop" 
                  alt="Awaited Memories" 
                  fill 
                  className="object-cover transition-all duration-[2s] group-hover:scale-110 group-hover:rotate-2" 
                />
              </div>
              <div className="mt-4 md:mt-10 space-y-1 lg:space-y-2">
                <p className="text-center text-gray-950 font-serif italic text-base md:text-3xl lg:text-4xl tracking-tightest opacity-95 leading-tight">Santorini, Greece</p>
                <p className="text-center text-[7px] md:text-[10px] font-black text-primary uppercase tracking-[0.3em] lg:tracking-[0.5em] opacity-40 group-hover:opacity-100 transition-opacity duration-700">The Ultimate Escape</p>
              </div>
            </div>

            {/* Premium Polaroid 2 */}
            <div 
              className="polaroid-card polaroid-parallax-2 absolute bottom-0 right-0 w-[180px] md:w-[360px] lg:w-[480px] bg-white p-4 md:p-8 pb-12 md:pb-24 lg:pb-36 shadow-[0_50px_120px_rgba(0,0,0,0.12)] border border-gray-50 cursor-pointer z-10 hover:z-40 group"
            >
              <div className="relative w-full aspect-square overflow-hidden rounded-lg md:rounded-3xl bg-gray-100">
                <Image 
                  src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop" 
                  alt="Curated Sanctuary" 
                  fill 
                  className="object-cover transition-all duration-[2s] group-hover:scale-110 group-hover:-rotate-2" 
                />
              </div>
              <div className="mt-6 md:mt-12 space-y-1 lg:space-y-2">
                <p className="text-center text-gray-950 font-serif italic text-lg md:text-4xl lg:text-5xl tracking-tightest opacity-95 leading-tight">The Maldives</p>
                <p className="text-center text-[7px] md:text-[10px] font-black text-primary uppercase tracking-[0.3em] lg:tracking-[0.5em] opacity-40 group-hover:opacity-100 transition-opacity duration-700">Private Sanctuaries</p>
              </div>
            </div>

            {/* Brand Excellence Seal */}
            <div
              className="brand-seal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-32 md:h-32 lg:w-44 lg:h-44 bg-primary rounded-full border-[4px] md:border-[10px] border-white shadow-[0_20px_60px_rgba(56,142,60,0.4)] z-30 flex items-center justify-center transform hover:rotate-[360deg] transition-transform duration-[2s] cursor-default"
            >
              <div className="text-center text-white px-2 lg:px-4">
                <div className="text-sm md:text-3xl lg:text-4xl font-black leading-none mb-0.5 md:mb-2 italic font-serif tracking-tighter">Jade</div>
                <div className="text-[4px] md:text-[9px] lg:text-[11px] font-black uppercase tracking-[0.2em] lg:tracking-[0.4em] opacity-90">Bespoke Excellence</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
