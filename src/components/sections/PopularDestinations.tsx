"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, MapPin, ArrowRight, Star, Sparkles, Plane } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const destinations = [
  { 
    name: "Santorini", 
    price: "1,10,000", 
    location: "Greece", 
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop",
    tag: "Signature",
    duration: "7 Days",
    rating: "4.9",
    code: "JADE-GR-01"
  },
  { 
    name: "Kyoto", 
    price: "1,65,000", 
    location: "Japan", 
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
    tag: "Cultural",
    duration: "10 Days",
    rating: "4.8",
    code: "JADE-JP-04"
  },
  { 
    name: "Maldives", 
    price: "2,15,000", 
    location: "Indian Ocean", 
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop",
    tag: "Exclusive",
    duration: "5 Days",
    rating: "5.0",
    code: "JADE-MV-09"
  },
  { 
    name: "Swiss Alps", 
    price: "1,95,000", 
    location: "Switzerland", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    tag: "Majestic",
    duration: "8 Days",
    rating: "4.9",
    code: "JADE-CH-02"
  },
  { 
    name: "Dubai", 
    price: "1,35,000", 
    location: "UAE", 
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    tag: "Modernist",
    duration: "6 Days",
    rating: "4.7",
    code: "JADE-AE-07"
  },
];

export default function PopularDestinations() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Background parallax
      gsap.to(".dest-bg-circle", {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Cards reveal
      gsap.fromTo(".dest-card", 
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "expo.out",
          duration: 1.5,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none none"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="packages" ref={containerRef} className="relative py-12 lg:py-24 bg-[#0B1310] overflow-hidden">
      
      {/* Immersive Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="dest-bg-circle absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 will-change-transform" />
        <div className="dest-bg-circle absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-gold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 will-change-transform" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] mix-blend-overlay" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Header - Cinematic Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.4em] text-[9px] lg:text-[10px] mb-4 lg:mb-6">
              Elite Travel Collection
            </div>
            
            <h2 className="text-[28px] md:text-[40px] lg:text-[52px] xl:text-[64px] font-sans font-black text-white leading-[1.1] lg:leading-[1] mb-6 lg:mb-8 tracking-tighter">
              World Class <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent-gold italic font-serif font-light drop-shadow-2xl">Exclusives.</span>
            </h2>
            
            <p className="text-white/60 text-sm lg:text-lg leading-relaxed max-w-xl font-medium tracking-tight">
              A curated anthology of the globe&apos;s most coveted retreats. Hand-picked for the traveler who views every journey as an essential masterpiece.
            </p>
          </div>
          
          <div className="flex gap-3 lg:gap-4 pb-4">
            <button 
              onClick={() => scroll("left")}
              className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-white/20 flex items-center justify-center bg-white/5 text-white hover:bg-primary hover:border-primary transition-all duration-500 shadow-xl group"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 lg:w-7 lg:h-7 group-hover:scale-110 group-active:scale-90 transition-all" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-white/20 flex items-center justify-center bg-white/5 text-white hover:bg-primary hover:border-primary transition-all duration-500 shadow-xl group"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 lg:w-7 lg:h-7 group-hover:scale-110 group-active:scale-90 transition-all" />
            </button>
          </div>
        </div>

        {/* Dynamic Cards Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 lg:gap-12 overflow-x-auto no-scrollbar pb-10 lg:pb-20 snap-x snap-mandatory px-4 lg:px-0"
        >
          {destinations.map((dest, i) => (
            <div
              key={i}
              className="dest-card min-w-[280px] md:min-w-[420px] lg:min-w-[650px] group snap-start relative h-[420px] lg:h-[600px] rounded-[24px] lg:rounded-[40px] overflow-hidden cursor-pointer shadow-[0_40px_80px_rgba(0,0,0,0.4)] border border-white/5 bg-gray-950"
            >
              <Image 
                src={dest.image} 
                alt={dest.name} 
                fill 
                className="object-cover transition-transform duration-[5s] group-hover:scale-110 ease-out brightness-75 group-hover:brightness-100" 
              />
              
              {/* Cinematic Overlays - Enhanced Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1310] via-[#0B1310]/20 to-transparent opacity-95 transition-opacity duration-1000" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[24px] lg:rounded-[40px] z-20 pointer-events-none" />
              
              {/* Destination Ticket Aesthetic - Left Column */}
              <div className="absolute top-6 left-6 lg:top-10 lg:left-10 z-30 flex flex-col gap-3 lg:gap-5">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[8px] lg:text-[9px] font-black text-primary uppercase tracking-[0.4em]">Pass Code</span>
                  <span className="text-[9px] lg:text-[11px] font-bold text-white/50 tracking-[0.15em]">{dest.code}</span>
                </div>
                <div className="w-px h-8 lg:h-12 bg-white/20" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-[8px] lg:text-[9px] font-black text-primary uppercase tracking-[0.4em]">Category</span>
                  <span className="text-[9px] lg:text-[11px] font-black text-white tracking-[0.15em] uppercase">{dest.tag}</span>
                </div>
              </div>

              {/* Price Tag - Top Right */}
              <div className="absolute top-6 right-6 lg:top-10 lg:right-10 z-30">
                <div className="bg-white/10 backdrop-blur-3xl border border-white/20 rounded-xl lg:rounded-[24px] p-3 lg:p-5 shadow-2xl flex flex-col items-center group-hover:bg-primary transition-all duration-1000 group-hover:border-primary">
                  <span className="text-[8px] lg:text-[9px] font-black text-white/50 uppercase tracking-[0.25em] mb-0.5 group-hover:text-white transition-colors">From</span>
                  <span className="text-lg lg:text-3xl font-black text-white tracking-tighter">₹{dest.price}</span>
                </div>
              </div>

              {/* Center Stamp Aesthetic */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-all duration-1000 scale-125 group-hover:scale-100">
                <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border border-primary/50 flex items-center justify-center p-2.5">
                  <div className="w-full h-full rounded-full border border-dashed border-primary/30 flex flex-col items-center justify-center rotate-[-15deg]">
                    <Plane className="w-5 h-5 lg:w-8 lg:h-8 text-primary/50 mb-0.5" />
                    <span className="text-[7px] lg:text-[9px] font-black text-primary/50 uppercase tracking-[0.4em]">Verified</span>
                  </div>
                </div>
              </div>

              {/* Bottom Info - Perforated Ticket Style */}
              <div className="absolute bottom-5 left-5 right-5 lg:bottom-8 lg:left-8 lg:right-8 z-30">
                <div className="relative p-5 lg:p-8 rounded-[20px] lg:rounded-[32px] bg-white/[0.04] backdrop-blur-3xl border border-white/15 overflow-hidden group/info transition-all duration-1000 group-hover:bg-white/[0.1] group-hover:border-white/30">
                  
                  {/* Perforation Line */}
                  <div className="absolute top-0 left-0 w-full h-[px] border-t border-dashed border-white/20 pointer-events-none" />
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#0B1310] border border-white/10" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4 lg:mb-6">
                      <div className="flex items-center gap-2 lg:gap-3 text-primary font-black text-[9px] lg:text-[11px] uppercase tracking-[0.5em] transition-transform duration-700 group-hover:translate-x-2">
                        <MapPin className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                        {dest.location}
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 rounded-full border border-white/10">
                        <Star className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-accent-gold fill-accent-gold" />
                        <span className="text-[9px] lg:text-[10px] font-black text-white tracking-[0.15em]">{dest.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl lg:text-[32px] font-sans font-black text-white mb-5 lg:mb-8 leading-[1] tracking-tighter transition-all duration-1000 group-hover:text-primary">
                      {dest.name}
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-6 lg:gap-10">
                        <div className="flex flex-col">
                          <span className="text-[8px] lg:text-[9px] font-black text-white/40 uppercase tracking-[0.3em]">Duration</span>
                          <span className="text-xs lg:text-base font-bold text-white tracking-widest">{dest.duration}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[8px] lg:text-[9px] font-black text-white/40 uppercase tracking-[0.3em]">Status</span>
                          <div className="flex items-center gap-1.5">
                            <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                            <span className="text-xs lg:text-base font-black text-primary tracking-widest uppercase">Open</span>
                          </div>
                        </div>
                      </div>

                      <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-[12px] lg:rounded-[20px] bg-primary text-white flex items-center justify-center shadow-2xl transition-all duration-700 hover:bg-white hover:text-primary hover:scale-110 hover:rotate-6 group-hover:shadow-primary/20">
                        <ArrowRight className="w-5 h-5 lg:w-8 lg:h-8" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Action Footer */}
        <div className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 bg-white/[0.03] backdrop-blur-3xl rounded-[24px] lg:rounded-[40px] p-6 lg:p-10 border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.3)] group/footer overflow-hidden relative">
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[90px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="max-w-xl text-center lg:text-left relative z-10">
            <h4 className="text-xl lg:text-[36px] font-sans font-black text-white mb-3 lg:mb-5 leading-none tracking-tighter">
              Don&apos;t See Your <br />
              <span className="text-primary italic font-serif font-light drop-shadow-sm">Ideal Sanctuary?</span>
            </h4>
            <p className="text-white/50 text-sm lg:text-lg font-medium leading-relaxed max-w-md">
              Our experts specialize in the impossible. Request a private curation for destinations beyond our public anthology.
            </p>
          </div>
          
          <Link 
            href="#contact" 
            className="w-full lg:w-auto px-8 py-4 lg:px-12 lg:py-6 bg-white hover:bg-primary text-[#0B1310] hover:text-white font-black rounded-[16px] lg:rounded-[24px] transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:shadow-primary/20 hover:-translate-y-2 group flex items-center justify-center gap-4 lg:gap-6 uppercase tracking-[0.2em] text-[10px] lg:text-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
            <span className="relative z-10">Custom Curation</span>
            <ArrowRight className="w-5 h-5 lg:w-7 lg:h-7 relative z-10 group-hover:translate-x-3 transition-transform duration-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}
