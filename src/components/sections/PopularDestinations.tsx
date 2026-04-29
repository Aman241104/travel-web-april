"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";

const categories = ["All", "Coastal", "Mountain", "Cultural", "Modern", "Wildlife"];

const destinations = [
  { 
    id: 1, 
    title: "Maldive Serenity", 
    loc: "North Malé Atoll", 
    desc: "Experience overwater villas and crystal clear lagoons.",
    img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop", 
    category: "Coastal",
    featured: true
  },
  { 
    id: 2, 
    title: "Alpine Heritage", 
    loc: "Zermatt, Switzerland", 
    desc: "Discover the majestic Matterhorn and world-class skiing.",
    img: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop", 
    category: "Mountain" 
  },
  { 
    id: 3, 
    title: "Kyoto Zen", 
    loc: "Kyoto, Japan", 
    desc: "A journey through ancient temples and bamboo forests.",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop", 
    category: "Cultural" 
  },
  { 
    id: 4, 
    title: "Desert Gold", 
    loc: "Dubai, UAE", 
    desc: "Unparalleled luxury meets architectural wonders.",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop", 
    category: "Modern" 
  },
  { 
    id: 5, 
    title: "Amalfi Dreams", 
    loc: "Positano, Italy", 
    desc: "Cliffside colorful villas and legendary Mediterranean views.",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop", 
    category: "Coastal" 
  },
  { 
    id: 6, 
    title: "Safari Spirit", 
    loc: "Maasai Mara, Kenya", 
    desc: "Witness the great migration and untamed wildlife.",
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop", 
    category: "Wildlife" 
  },
];

export default function PopularDestinations() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredDestinations = destinations.filter(dest => 
    activeFilter === "All" || dest.category === activeFilter
  );

  return (
    <section id="packages" className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-teal font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-4 block"
            >
              Curated Collections
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-7xl text-onyx leading-[1.1] tracking-tight"
            >
              Explore Our <br />
              <span className="italic font-light text-brand-teal/80">Private Portfolios</span>
            </motion.h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-full font-sans text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 border
                  ${activeFilter === cat 
                    ? "bg-onyx text-white border-onyx" 
                    : "bg-transparent text-onyx/40 border-onyx/10 hover:border-onyx/30"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Discovery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((dest, i) => (
              <motion.div 
                layout
                key={dest.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`group cursor-pointer relative overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[4/5]
                  ${dest.featured && activeFilter === "All" ? "lg:col-span-2 lg:aspect-auto lg:h-[600px]" : ""}
                `}
              >
                <Image 
                  src={dest.img} 
                  alt={dest.title} 
                  fill 
                  className="object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Advanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 via-onyx/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
                
                {/* Featured Badge */}
                {dest.featured && activeFilter === "All" && (
                  <div className="absolute top-8 left-8 flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal text-white font-sans text-[9px] font-bold uppercase tracking-widest shadow-xl">
                    <Sparkles className="w-3.5 h-3.5" />
                    Featured Destination
                  </div>
                )}

                {/* Card Content (Inside Overlay) */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <div className="mb-4">
                    <span className="text-brand-teal font-sans text-[9px] font-black uppercase tracking-[0.3em] mb-3 block">
                      {dest.category} Collection
                    </span>
                    <h3 className="font-serif text-3xl md:text-5xl text-white mb-3 group-hover:text-brand-teal transition-colors duration-500">
                      {dest.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/50 mb-6">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="font-sans text-[10px] uppercase tracking-[0.2em]">{dest.loc}</span>
                    </div>
                    <p className="text-white/60 font-sans text-sm md:text-base max-w-sm leading-relaxed translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                      {dest.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-8 border-t border-white/10 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    <button className="px-8 py-4 bg-white text-onyx font-sans text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-brand-teal hover:text-white transition-all duration-500 shadow-xl">
                      Explore Journey
                    </button>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-onyx transition-all duration-500">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Global Action */}
        <div className="mt-24 text-center">
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group relative px-12 py-6 border border-onyx/10 text-onyx font-sans text-xs font-bold uppercase tracking-[0.3em] rounded-full overflow-hidden transition-all duration-500 hover:bg-onyx hover:text-white"
          >
            <span className="relative z-10">Discover All Destinations</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
