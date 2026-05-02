"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, MapPin, ArrowRight, Star, Sparkles, Plane } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";

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
      gsap.from(".dest-card", {
        x: 100,
        opacity: 0,
        stagger: 0.1,
        ease: "expo.out",
        duration: 1.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });
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
    <section id="packages" ref={containerRef} className="relative py-32 lg:py-60 bg-[#0B1310] overflow-hidden">
      
      {/* Immersive Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="dest-bg-circle absolute top-0 right-0 w-[1200px] h-[1200px] bg-primary/10 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/4" />
        <div className="dest-bg-circle absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-accent-gold/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/4" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] mix-blend-overlay" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Header - Cinematic Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-32 gap-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-6 text-primary font-black uppercase tracking-[0.5em] text-[11px] mb-8 lg:mb-10">
              <div className="w-16 h-[2px] bg-primary" />
              Elite Travel Collection
            </div>
            
            <h2 className="text-[40px] md:text-[52px] lg:text-[75px] xl:text-[90px] font-sans font-black text-white leading-[1.05] lg:leading-[0.85] mb-10 lg:mb-14 tracking-tighter">
              World Class <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent-gold italic font-serif font-light drop-shadow-2xl">Exclusives.</span>
            </h2>
            
            <p className="text-white/60 text-xl lg:text-3xl leading-relaxed max-w-3xl font-medium tracking-tight">
              A curated anthology of the globe&apos;s most coveted retreats. Hand-picked for the traveler who views every journey as an essential masterpiece.
            </p>
          </div>
          
          <div className="flex gap-6 lg:gap-8 pb-8">
            <button 
              onClick={() => scroll("left")}
              className="w-16 h-16 lg:w-24 lg:h-24 rounded-full border-2 border-white/20 flex items-center justify-center bg-white/10 text-white hover:bg-primary hover:border-primary transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.05)] group"
              aria-label="Previous"
            >
              <ChevronLeft className="w-8 h-8 lg:w-12 lg:h-12 group-hover:scale-110 group-active:scale-90 transition-all" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-16 h-16 lg:w-24 lg:h-24 rounded-full border-2 border-white/20 flex items-center justify-center bg-white/10 text-white hover:bg-primary hover:border-primary transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.05)] group"
              aria-label="Next"
            >
              <ChevronRight className="w-8 h-8 lg:w-12 lg:h-12 group-hover:scale-110 group-active:scale-90 transition-all" />
            </button>
          </div>
        </div>

        {/* Dynamic Cards Container */}
        <div 
          ref={scrollRef}
          className="flex gap-10 lg:gap-16 overflow-x-auto no-scrollbar pb-20 lg:pb-32 snap-x snap-mandatory px-4 lg:px-0"
        >
          {destinations.map((dest, i) => (
            <div
              key={i}
              className="dest-card min-w-[320px] md:min-w-[620px] group snap-start relative h-[600px] lg:h-[850px] rounded-[48px] lg:rounded-[64px] overflow-hidden cursor-pointer shadow-[0_60px_120px_rgba(0,0,0,0.5)] border border-white/5 bg-gray-950"
            >
              <Image 
                src={dest.image} 
                alt={dest.name} 
                fill 
                className="object-cover transition-transform duration-[5s] group-hover:scale-110 ease-out brightness-75 group-hover:brightness-100" 
              />
              
              {/* Cinematic Overlays - Enhanced Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1310] via-[#0B1310]/20 to-transparent opacity-95 transition-opacity duration-1000" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[48px] lg:rounded-[64px] z-20 pointer-events-none" />
              
              {/* Destination Ticket Aesthetic - Left Column */}
              <div className="absolute top-10 left-10 lg:top-16 lg:left-16 z-30 flex flex-col gap-6 lg:gap-10">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] lg:text-[11px] font-black text-primary uppercase tracking-[0.5em]">Pass Code</span>
                  <span className="text-xs lg:text-sm font-bold text-white/50 tracking-[0.2em]">{dest.code}</span>
                </div>
                <div className="w-px h-12 lg:h-20 bg-white/20" />
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] lg:text-[11px] font-black text-primary uppercase tracking-[0.5em]">Category</span>
                  <span className="text-xs lg:text-sm font-black text-white tracking-[0.2em] uppercase">{dest.tag}</span>
                </div>
              </div>

              {/* Price Tag - Top Right */}
              <div className="absolute top-10 right-10 lg:top-16 lg:right-16 z-30">
                <div className="bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl lg:rounded-[40px] p-6 lg:p-10 shadow-2xl flex flex-col items-center group-hover:bg-primary transition-all duration-1000 group-hover:border-primary">
                  <span className="text-[10px] lg:text-[11px] font-black text-white/50 uppercase tracking-[0.3em] mb-1 group-hover:text-white transition-colors">From</span>
                  <span className="text-2xl lg:text-5xl font-black text-white tracking-tighter">₹{dest.price}</span>
                </div>
              </div>

              {/* Center Stamp Aesthetic */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-all duration-1000 scale-150 lg:scale-[2] group-hover:scale-100">
                <div className="w-40 h-40 lg:w-56 lg:h-50 rounded-full border border-primary/50 flex items-center justify-center p-4">
                  <div className="w-full h-full rounded-full border-4 border-dashed border-primary/30 flex flex-col items-center justify-center rotate-[-15deg]">
                    <Plane className="w-10 h-10 lg:w-14 lg:h-14 text-primary/50 mb-2" />
                    <span className="text-[10px] lg:text-[13px] font-black text-primary/50 uppercase tracking-[0.5em]">Verified</span>
                    <span className="text-[8px] lg:text-[10px] font-bold text-primary/40 uppercase tracking-[0.3em]">Jade Travels</span>
                  </div>
                </div>
              </div>

              {/* Bottom Info - Perforated Ticket Style */}
              <div className="absolute bottom-8 left-8 right-8 lg:bottom-16 lg:left-16 lg:right-16 z-30">
                <div className="relative p-10 lg:p-20 rounded-[40px] lg:rounded-[56px] bg-white/[0.04] backdrop-blur-3xl border border-white/15 overflow-hidden group/info transition-all duration-1000 group-hover:bg-white/[0.1] group-hover:border-white/30">
                  
                  {/* Perforation Line */}
                  <div className="absolute top-0 left-0 w-full h-[2px] border-t-2 border-dashed border-white/20 pointer-events-none" />
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0B1310] border border-white/10" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8 lg:mb-14">
                      <div className="flex items-center gap-3 lg:gap-5 text-primary font-black text-[11px] lg:text-[14px] uppercase tracking-[0.6em] transition-transform duration-700 group-hover:translate-x-4">
                        <MapPin className="w-5 h-5 lg:w-7 lg:h-7" />
                        {dest.location}
                      </div>
                      <div className="flex items-center gap-2 lg:gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                        <Star className="w-4 h-4 lg:w-5 lg:h-5 text-accent-gold fill-accent-gold" />
                        <span className="text-xs lg:text-sm font-black text-white tracking-[0.2em]">{dest.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-4xl lg:text-[70px] xl:text-[85px] font-sans font-black text-white mb-8 lg:mb-16 leading-[0.9] tracking-tighter transition-all duration-1000 group-hover:text-primary">
                      {dest.name}
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-10 lg:gap-20">
                        <div className="flex flex-col gap-2">
                          <span className="text-[10px] lg:text-[11px] font-black text-white/40 uppercase tracking-[0.4em]">Duration</span>
                          <span className="text-sm lg:text-xl font-bold text-white tracking-widest">{dest.duration}</span>
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className="text-[10px] lg:text-[11px] font-black text-white/40 uppercase tracking-[0.4em]">Status</span>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-sm lg:text-xl font-black text-primary tracking-widest uppercase">Open</span>
                          </div>
                        </div>
                      </div>

                      <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-[28px] lg:rounded-[40px] bg-primary text-white flex items-center justify-center shadow-2xl transition-all duration-700 hover:bg-white hover:text-primary hover:scale-110 hover:rotate-6 group-hover:shadow-primary/20">
                        <ArrowRight className="w-8 h-8 lg:w-12 lg:h-12" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Action Footer */}
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 bg-white/[0.03] backdrop-blur-3xl rounded-[48px] lg:rounded-[64px] p-12 lg:p-24 border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.3)] group/footer overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="max-w-2xl text-center lg:text-left relative z-10">
            <h4 className="text-3xl lg:text-[64px] font-sans font-black text-white mb-6 lg:mb-10 leading-none tracking-tighter">
              Don&apos;t See Your <br />
              <span className="text-primary italic font-serif font-light drop-shadow-sm">Ideal Sanctuary?</span>
            </h4>
            <p className="text-white/50 text-lg lg:text-2xl font-medium leading-relaxed max-w-xl">
              Our experts specialize in the impossible. Request a private curation for destinations beyond our public anthology.
            </p>
          </div>
          
          <Link 
            href="#contact" 
            className="w-full lg:w-auto px-12 py-7 lg:px-20 lg:py-10 bg-white hover:bg-primary text-[#0B1310] hover:text-white font-black rounded-[32px] lg:rounded-[48px] transition-all shadow-[0_30px_60px_rgba(255,255,255,0.1)] hover:shadow-primary/20 hover:-translate-y-3 group flex items-center justify-center gap-6 lg:gap-10 uppercase tracking-[0.3em] text-sm lg:text-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
            <span className="relative z-10">Custom Curation</span>
            <div className="w-12 lg:w-16 h-[2px] bg-current transition-all duration-700 group-hover:w-24 relative z-10" />
            <Sparkles className="w-6 h-6 lg:w-8 lg:h-8 relative z-10" />
          </Link>
        </div>
      </div>
    </section>
  );
}
