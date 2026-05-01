"use client";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, MapPin, ArrowRight, Star, Clock, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const destinations = [
  { 
    name: "Santorini", 
    price: "1,299", 
    location: "Greece", 
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop",
    tag: "Best Seller",
    duration: "7 Days",
    rating: "4.9",
    inclusions: "Flight + Hotel"
  },
  { 
    name: "Kyoto", 
    price: "1,899", 
    location: "Japan", 
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
    tag: "Cultural",
    duration: "10 Days",
    rating: "4.8",
    inclusions: "All Inclusive"
  },
  { 
    name: "Maldives", 
    price: "2,499", 
    location: "Indian Ocean", 
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop",
    tag: "Luxury",
    duration: "5 Days",
    rating: "5.0",
    inclusions: "Private Villa"
  },
  { 
    name: "Swiss Alps", 
    price: "2,199", 
    location: "Switzerland", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    tag: "Adventure",
    duration: "8 Days",
    rating: "4.9",
    inclusions: "Resort + Ski"
  },
  { 
    name: "Dubai", 
    price: "1,599", 
    location: "UAE", 
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    tag: "Trending",
    duration: "6 Days",
    rating: "4.7",
    inclusions: "City Tour"
  },
];

export default function PopularDestinations() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="packages" className="relative py-32 bg-white overflow-hidden">
      {/* Background Depth Element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-[720px]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8"
            >
              <Sparkles className="w-4 h-4" />
              The Collection
            </motion.div>
            <h2 className="text-6xl lg:text-[88px] font-sans font-black text-gray-900 leading-[0.95] mb-10 tracking-tighter">
              Breathtaking <br />
              <span className="text-primary italic font-serif font-light drop-shadow-sm">Destinations.</span>
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed max-w-[540px] font-medium tracking-tight">
              Discover your next sanctuary. Hand-picked elite locations where every detail is a masterpiece of luxury.
            </p>
          </div>
          
          <div className="flex gap-4 pb-4">
            <button 
              onClick={() => scroll("left")}
              className="w-16 h-16 rounded-2xl border border-gray-100 flex items-center justify-center bg-gray-50/50 hover:bg-brand-dark hover:text-white transition-all duration-500 shadow-sm hover:shadow-xl group"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 group-active:scale-90 transition-transform" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-16 h-16 rounded-2xl border border-gray-100 flex items-center justify-center bg-gray-50/50 hover:bg-brand-dark hover:text-white transition-all duration-500 shadow-sm hover:shadow-xl group"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 group-active:scale-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto no-scrollbar pb-16 snap-x snap-mandatory px-4 md:px-0"
        >
          {destinations.map((dest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -12, transition: { duration: 0.5 } }}
              className="min-w-[360px] md:min-w-[520px] group snap-start relative h-[720px] rounded-[64px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.18)] cursor-pointer bg-gray-100"
            >
              <Image 
                src={dest.image} 
                alt={dest.name} 
                fill 
                className="object-cover transition-transform duration-[3s] group-hover:scale-110 ease-out" 
              />
              
              {/* Refined Rim Light & Immersive Overlays */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/30 rounded-[64px] z-20 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-1000" />
              
              {/* Dynamic Color Tint on Hover */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mix-blend-overlay z-10" />

              {/* Glass Badges - Elevated */}
              <div className="absolute top-12 left-12 right-12 z-30 flex justify-between items-start">
                <div className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[11px] font-black uppercase tracking-[0.25em] rounded-full shadow-2xl group-hover:bg-primary group-hover:border-primary/50 transition-all duration-700">
                  {dest.tag}
                </div>
                <div className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white text-sm font-black uppercase tracking-widest shadow-2xl group-hover:bg-white group-hover:text-gray-900 transition-all duration-700">
                  ${dest.price}
                </div>
              </div>

              {/* Bottom Content - Hyper-Premium Info Bar */}
              <div className="absolute bottom-12 left-12 right-12 z-30">
                <div className="p-10 lg:p-12 rounded-[52px] bg-white/[0.04] backdrop-blur-3xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden relative group/info transition-all duration-700 group-hover:bg-white/[0.08] group-hover:border-white/20">
                  {/* Subtle internal animated glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-primary/5 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-5 text-primary font-black text-[11px] uppercase tracking-[0.4em] drop-shadow-md transition-transform duration-700 group-hover:translate-x-1">
                      <MapPin className="w-4 h-4" />
                      {dest.location}
                    </div>
                    
                    <h3 className="text-5xl md:text-[54px] font-sans font-black text-white mb-8 leading-tight tracking-tighter transition-all duration-700 group-hover:translate-x-2 group-hover:text-primary-muted">
                      {dest.name}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-2">
                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-[11px] font-black text-white/90 uppercase tracking-widest">{dest.duration}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <span className="text-[11px] font-black text-white/90 uppercase tracking-widest">{dest.rating}</span>
                      </div>
                      <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] border-l border-white/10 pl-8 h-4 flex items-center">
                        {dest.inclusions}
                      </div>
                    </div>

                    {/* Immersive Action Reveal */}
                    <div className="h-0 overflow-hidden group-hover:h-24 transition-all duration-1000 ease-[0.16, 1, 0.3, 1]">
                      <div className="pt-10 flex items-center justify-between border-t border-white/5 mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Explore Fully</span>
                          <span className="text-[11px] font-bold text-white/50 uppercase tracking-widest">Limited Slots Available</span>
                        </div>
                        <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_0_30px_rgba(56,142,60,0.4)] transform group-hover:scale-110 transition-all duration-700">
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Radial Glow */}
              <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-0 group-hover:opacity-100 transition-all duration-1000 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Explore All CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Link 
            href="#contact" 
            className="inline-flex items-center gap-8 text-gray-900 font-bold hover:text-primary transition-all duration-500 group px-14 py-7 bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(56,142,60,0.1)] hover:-translate-y-1 border border-gray-100"
          >
            <span className="text-[11px] font-black uppercase tracking-[0.4em]">View Full Collection</span>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
