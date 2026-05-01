"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowUpRight, Play } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 2 } });
      
      tl.from(".hero-line-reveal", {
        yPercent: 100,
        stagger: 0.1,
      })
      .from(".hero-fade-in", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
      }, "-=1.2");

      gsap.to(".hero-bg-zoom", {
        scale: 1.2,
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
    <section 
      ref={containerRef} 
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0B1310]"
    >
      {/* Cinematic Background */}
      <div className="hero-bg-zoom absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/24541-343454486.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1310]/60 via-transparent to-[#0B1310] z-10" />
      </div>

      <div className="container relative z-20 px-6 mx-auto text-center">
        <div className="hero-fade-in mb-8">
          <span className="text-[#C1A67B] text-[10px] md:text-xs font-bold uppercase tracking-[0.8em] inline-block">
            Established MMVI
          </span>
        </div>

        <h1 className="relative mb-12 flex flex-col items-center">
          <div className="overflow-hidden">
            <span className="hero-line-reveal block font-serif text-[15vw] lg:text-[180px] leading-[0.8] text-[#F2EFE9] tracking-tightest">
              Uncommon
            </span>
          </div>
          <div className="overflow-hidden -mt-2 lg:-mt-4">
            <span className="hero-line-reveal block font-serif italic font-light text-[15vw] lg:text-[180px] leading-[0.8] text-[#C1A67B] tracking-tight">
              Exploration
            </span>
          </div>
        </h1>

        <div className="hero-fade-in max-w-xl mx-auto mb-16">
          <p className="font-sans text-[#F2EFE9]/60 text-lg lg:text-2xl leading-relaxed tracking-wide font-light">
            Bespoke itineraries for the discerning soul. Experience a world curated with silent intention and absolute discretion.
          </p>
        </div>

        <div className="hero-fade-in flex flex-col sm:flex-row items-center justify-center gap-12">
          <MagneticButton className="group relative px-16 py-7 bg-[#C1A67B] text-[#0B1310] font-bold text-[11px] uppercase tracking-[0.5em] rounded-full overflow-hidden transition-all duration-700">
            <span className="relative z-10 flex items-center gap-4">
              Begin Your Story <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </span>
          </MagneticButton>
          
          <button className="flex items-center gap-6 group">
            <div className="w-16 h-16 rounded-full border border-[#F2EFE9]/20 flex items-center justify-center group-hover:bg-[#F2EFE9] transition-all duration-500">
              <Play className="w-5 h-5 fill-[#C1A67B] text-[#C1A67B] group-hover:fill-[#0B1310] group-hover:text-[#0B1310]" />
            </div>
            <div className="flex flex-col items-start text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F2EFE9]">Watch the Film</span>
              <span className="text-[9px] text-[#C1A67B] uppercase tracking-[0.2em]">Amanjiwo, Indonesia</span>
            </div>
          </button>
        </div>
      </div>

      <div className="absolute left-12 bottom-12 z-30 hidden lg:flex items-center gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-[#F2EFE9] font-serif text-2xl tracking-tighter">500+</span>
          <span className="text-[#F2EFE9]/30 text-[9px] font-bold uppercase tracking-widest">Destinations</span>
        </div>
        <div className="w-[1px] h-10 bg-[#F2EFE9]/10" />
        <div className="flex flex-col gap-1">
          <span className="text-[#F2EFE9] font-serif text-2xl tracking-tighter">100%</span>
          <span className="text-[#F2EFE9]/30 text-[9px] font-bold uppercase tracking-widest">Bespoke</span>
        </div>
      </div>

      <div className="absolute right-12 bottom-12 z-30 hidden xl:flex flex-col items-center gap-24">
        <div className="w-[1px] h-32 bg-gradient-to-b from-[#C1A67B]/40 via-[#C1A67B]/10 to-transparent" />
        <span className="text-[#F2EFE9]/20 text-[9px] font-bold uppercase tracking-[1em] [writing-mode:vertical-lr] rotate-180">
          Scroll to Discover
        </span>
      </div>
    </section>
  );
}
