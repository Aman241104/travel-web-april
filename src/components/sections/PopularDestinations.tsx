"use client";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, MapPin, ArrowRight, Star, Sparkles, Plane } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

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

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="packages" ref={containerRef} className="relative py-32 lg:py-48 bg-[#0B1310] overflow-hidden">
      
      {/* Immersive Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent-gold/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Header - Cinematic Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-28 gap-12">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8"
            >
              <div className="w-12 h-px bg-primary" />
              Elite Travel Collection
            </motion.div>
            
            <h2 className="text-6xl lg:text-[110px] font-sans font-black text-white leading-[0.9] mb-12 tracking-tighter">
              World Class <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent-gold italic font-serif font-light drop-shadow-2xl">Exclusives.</span>
            </h2>
            
            <p className="text-white/50 text-xl lg:text-2xl leading-relaxed max-w-2xl font-medium tracking-tight">
              A curated anthology of the globe&apos;s most coveted retreats. Hand-picked for the traveler who views every journey as an essential masterpiece.
            </p>
          </div>
          
          <div className="flex gap-6 pb-6">
            <button 
              onClick={() => scroll("left")}
              className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-primary hover:text-white transition-all duration-700 shadow-2xl group"
              aria-label="Previous"
            >
              <ChevronLeft className="w-8 h-8 group-active:scale-90 transition-transform" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-primary hover:text-white transition-all duration-700 shadow-2xl group"
              aria-label="Next"
            >
              <ChevronRight className="w-8 h-8 group-active:scale-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Dynamic Cards Container */}
        <div 
          ref={scrollRef}
          className="flex gap-12 overflow-x-auto no-scrollbar pb-24 snap-x snap-mandatory px-4 lg:px-0"
        >
          {destinations.map((dest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="min-w-[340px] md:min-w-[580px] group snap-start relative h-[780px] rounded-[52px] overflow-hidden cursor-pointer shadow-[0_50px_100px_rgba(0,0,0,0.4)] border border-white/5 bg-gray-900"
            >
              <Image 
                src={dest.image} 
                alt={dest.name} 
                fill 
                className="object-cover transition-transform duration-[4s] group-hover:scale-110 ease-out brightness-90 group-hover:brightness-100" 
              />
              
              {/* Cinematic Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1310] via-[#0B1310]/10 to-transparent opacity-90 transition-opacity duration-1000" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[52px] z-20 pointer-events-none" />
              
              {/* Destination Ticket Aesthetic - Left Column */}
              <div className="absolute top-12 left-12 z-30 flex flex-col gap-6">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-1">Pass Code</span>
                  <span className="text-xs font-bold text-white/40 tracking-widest">{dest.code}</span>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-1">Category</span>
                  <span className="text-xs font-bold text-white/60 tracking-widest uppercase">{dest.tag}</span>
                </div>
              </div>

              {/* Price Tag - Top Right */}
              <div className="absolute top-12 right-12 z-30">
                <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col items-center group-hover:bg-primary transition-all duration-700">
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1 group-hover:text-white/70 transition-colors">From</span>
                  <span className="text-3xl font-black text-white tracking-tighter">₹{dest.price}</span>
                </div>
              </div>

              {/* Center Stamp Aesthetic */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-all duration-1000 scale-150 group-hover:scale-100">
                <div className="w-40 h-40 rounded-full border border-primary/40 flex items-center justify-center p-4">
                  <div className="w-full h-full rounded-full border-4 border-dashed border-primary/20 flex flex-col items-center justify-center rotate-[-15deg]">
                    <Plane className="w-8 h-8 text-primary/40 mb-2" />
                    <span className="text-[10px] font-black text-primary/40 uppercase tracking-[0.4em]">Verified</span>
                    <span className="text-[8px] font-bold text-primary/30 uppercase tracking-[0.2em]">Jade Travels</span>
                  </div>
                </div>
              </div>

              {/* Bottom Info - Perforated Ticket Style */}
              <div className="absolute bottom-12 left-12 right-12 z-30">
                <div className="relative p-10 lg:p-14 rounded-[40px] bg-white/[0.03] backdrop-blur-3xl border border-white/10 overflow-hidden group/info transition-all duration-1000 group-hover:bg-white/[0.08] group-hover:border-white/20">
                  
                  {/* Perforation Line */}
                  <div className="absolute top-0 left-0 w-full h-px border-t border-dashed border-white/10 pointer-events-none" />
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#0B1310] border border-white/5" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3 text-primary font-black text-[11px] uppercase tracking-[0.5em] transition-transform duration-700 group-hover:translate-x-2">
                        <MapPin className="w-5 h-5" />
                        {dest.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-accent-gold fill-accent-gold" />
                        <span className="text-xs font-black text-white tracking-widest">{dest.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-6xl lg:text-[72px] font-sans font-black text-white mb-10 leading-[0.9] tracking-tighter transition-all duration-1000 group-hover:text-primary">
                      {dest.name}
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-10">
                        <div className="flex flex-col gap-2">
                          <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em]">Duration</span>
                          <span className="text-xs font-bold text-white tracking-widest">{dest.duration}</span>
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em]">Status</span>
                          <span className="text-xs font-bold text-primary tracking-widest uppercase">Open</span>
                        </div>
                      </div>

                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-16 h-16 rounded-3xl bg-primary text-white flex items-center justify-center shadow-2xl transition-all duration-500 hover:bg-white hover:text-primary"
                      >
                        <ArrowRight className="w-8 h-8" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Immersive radial light reveal */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(56,142,60,0.15),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Global Action Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-12 flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/[0.02] backdrop-blur-3xl rounded-[40px] p-12 lg:p-16 border border-white/5"
        >
          <div className="max-w-xl text-center lg:text-left">
            <h4 className="text-3xl lg:text-4xl font-sans font-black text-white mb-6 tracking-tight">
              Don&apos;t See Your <span className="text-primary italic font-serif font-light">Ideal Sanctuary?</span>
            </h4>
            <p className="text-white/40 text-lg font-medium leading-relaxed">
              Our experts specialize in the impossible. Request a private curation for destinations beyond our public anthology.
            </p>
          </div>
          
          <Link 
            href="#contact" 
            className="w-full lg:w-auto px-16 py-8 bg-white hover:bg-primary text-[#0B1310] hover:text-white font-sans font-black rounded-3xl transition-all shadow-2xl hover:-translate-y-2 group flex items-center justify-center gap-6 uppercase tracking-widest text-lg"
          >
            <span>Custom Curation</span>
            <div className="w-12 h-px bg-current transition-all duration-500 group-hover:w-16" />
            <Sparkles className="w-6 h-6" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
