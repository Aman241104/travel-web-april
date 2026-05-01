"use client";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const destinations = [
  { name: "Santorini", price: "1,299", location: "Greece", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop" },
  { name: "Kyoto", price: "1,899", location: "Japan", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop" },
  { name: "Maldives", price: "2,499", location: "Indian Ocean", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop" },
  { name: "Swiss Alps", price: "2,199", location: "Switzerland", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop" },
  { name: "Dubai", price: "1,599", location: "UAE", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop" },
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-[600px]">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
              Curated Collections
            </span>
            <h2 className="text-5xl font-serif text-brand-dark mb-6">Popular Destinations</h2>
            <p className="text-gray-500 text-lg">
              Explore our hand-picked selection of the world&apos;s most breathtaking locations, each offering a unique story to tell.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll("left")}
              className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm bg-white group"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 group-active:scale-90 transition-transform" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm bg-white group"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 group-active:scale-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar pb-12 snap-x snap-mandatory"
        >
          {destinations.map((dest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[320px] md:min-w-[400px] group snap-start relative h-[500px] rounded-[32px] overflow-hidden shadow-xl"
            >
              <Image 
                src={dest.image} 
                alt={dest.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-80" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                <div className="flex items-center gap-2 mb-2 text-primary-muted font-bold text-xs uppercase tracking-widest">
                  <MapPin className="w-4 h-4" />
                  {dest.location}
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4">{dest.name}</h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-white/60">Starting from</span>
                    <span className="text-xl font-bold">${dest.price}</span>
                  </div>
                  
                  <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-lg">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Hover Details - Optional subtle effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Explore All CTA */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 text-brand-dark font-bold hover:text-primary transition-all group">
            Explore All Destinations
            <div className="w-8 h-[2px] bg-primary group-hover:w-12 transition-all" />
          </button>
        </div>
      </div>
    </section>
  );
}
