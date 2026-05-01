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
    <section id="packages" className="py-32 bg-white overflow-hidden">
      <div className="container-custom">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <div className="max-w-[700px]">
            <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.4em] text-xs mb-6">
              <Sparkles className="w-4 h-4" />
              Curated Collections
            </div>
            <h2 className="text-5xl lg:text-7xl font-serif text-brand-dark mb-8 leading-tight">
              Breathtaking <br />
              <span className="italic font-light text-primary">Destinations.</span>
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed max-w-[580px]">
              Discover your next sanctuary. Hand-picked elite locations where every detail is a masterpiece of luxury.
            </p>
          </div>
          
          <div className="flex gap-6 pb-2">
            <button 
              onClick={() => scroll("left")}
              className="w-20 h-20 rounded-2xl border border-gray-100 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all shadow-[0_20px_40px_rgba(0,0,0,0.06)] bg-white group"
              aria-label="Previous"
            >
              <ChevronLeft className="w-8 h-8 group-active:scale-90 transition-transform" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-20 h-20 rounded-2xl border border-gray-100 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all shadow-[0_20px_40px_rgba(0,0,0,0.06)] bg-white group"
              aria-label="Next"
            >
              <ChevronRight className="w-8 h-8 group-active:scale-90 transition-transform" />
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
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="min-w-[340px] md:min-w-[480px] group snap-start relative h-[650px] rounded-[48px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.12)] cursor-pointer"
            >
              <Image 
                src={dest.image} 
                alt={dest.name} 
                fill 
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
              />
              
              {/* Subtle Overlay Gradient (Reduced for vibrancy) */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
              
              {/* Tags & Price */}
              <div className="absolute top-10 left-10 right-10 z-10 flex justify-between items-start">
                <div className="px-5 py-2.5 bg-accent-gold text-brand-dark text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-2xl">
                  {dest.tag}
                </div>
                <div className="flex flex-col items-end">
                  <div className="px-5 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white text-xs font-bold uppercase tracking-widest shadow-2xl">
                    From ${dest.price}
                  </div>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 w-full p-12 text-white z-10">
                <div className="flex items-center gap-3 mb-4 text-accent-gold font-bold text-[11px] uppercase tracking-[0.3em]">
                  <MapPin className="w-4 h-4" />
                  {dest.location}
                </div>
                
                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                  {dest.name}
                </h3>
                
                {/* Micro Details (Only reveal or emphasize on hover) */}
                <div className="flex items-center gap-6 mb-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent-gold" />
                    <span className="text-xs font-bold uppercase tracking-widest">{dest.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-accent-gold fill-accent-gold" />
                    <span className="text-xs font-bold uppercase tracking-widest">{dest.rating}</span>
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] border-l border-white/20 pl-6">
                    {dest.inclusions}
                  </div>
                </div>
                
                <Link href="#contact" className="flex items-center gap-5 px-10 py-5 bg-white text-brand-dark font-bold rounded-2xl transition-all shadow-2xl group/btn hover:bg-primary hover:text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500">
                  <span className="text-sm uppercase tracking-widest">View Package</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-3 transition-transform" />
                </Link>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </motion.div>
          ))}
        </div>

        {/* Explore All CTA */}
        <div className="mt-16 text-center">
          <Link href="#contact" className="inline-flex items-center gap-6 text-brand-dark font-bold hover:text-primary transition-all group px-12 py-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1">
            <span className="text-xs uppercase tracking-[0.3em]">Explore All Collections</span>
            <div className="w-12 h-px bg-brand-dark group-hover:w-20 group-hover:bg-primary transition-all" />
          </Link>
        </div>
      </div>
    </section>
  );
}
