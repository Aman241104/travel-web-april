"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";

const categories = ["All", "Coastal", "Mountain", "Cultural", "Modern", "Wildlife"];

const destinations = [
  { 
    id: 1, 
    title: "Maldive Serenity", 
    loc: "North Malé Atoll", 
    desc: "Experience overwater villas and crystal clear lagoons in absolute privacy.",
    img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop", 
    category: "Coastal",
    size: "large"
  },
  { 
    id: 2, 
    title: "Alpine Heritage", 
    loc: "Zermatt, Switzerland", 
    desc: "Discover the majestic Matterhorn and world-class skiing.",
    img: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop", 
    category: "Mountain",
    size: "medium"
  },
  { 
    id: 3, 
    title: "Kyoto Zen", 
    loc: "Kyoto, Japan", 
    desc: "A journey through ancient temples and bamboo forests.",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop", 
    category: "Cultural",
    size: "medium"
  },
  { 
    id: 4, 
    title: "Desert Gold", 
    loc: "Dubai, UAE", 
    desc: "Unparalleled luxury meets architectural wonders.",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop", 
    category: "Modern",
    size: "small"
  },
  { 
    id: 5, 
    title: "Amalfi Dreams", 
    loc: "Positano, Italy", 
    desc: "Cliffside colorful villas and legendary Mediterranean views.",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop", 
    category: "Coastal",
    size: "small"
  },
  { 
    id: 6, 
    title: "Safari Spirit", 
    loc: "Maasai Mara, Kenya", 
    desc: "Witness the great migration and untamed wildlife.",
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop", 
    category: "Wildlife",
    size: "small"
  },
];

export default function PopularDestinations() {
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef(null);
  
  const filteredDestinations = destinations.filter(dest => 
    activeFilter === "All" || dest.category === activeFilter
  );

  return (
    <section id="packages" ref={sectionRef} className="bg-[#F7F6F3] py-24 md:py-48 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Section: Editorial Style */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 md:mb-32 gap-16">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#C1A67B] font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-6 block"
            >
              Curated Collections
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-5xl md:text-8xl text-[#F2EFE9] leading-[1] tracking-tighter"
            >
              Discover Your <br />
              <span className="italic font-light text-[#C1A67B]/80">Next Escape.</span>
            </motion.h2>
          </div>

          {/* Minimalist Underline Filters */}
          <div className="flex flex-wrap gap-x-10 gap-y-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative group pb-2 font-sans text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300
                  ${activeFilter === cat ? "text-[#F2EFE9]" : "text-[#F2EFE9]/30 hover:text-[#F2EFE9]/60"}
                `}
              >
                <span>{cat}</span>
                <motion.div 
                  initial={false}
                  animate={{ 
                    width: activeFilter === cat ? "100%" : "0%",
                    opacity: activeFilter === cat ? 1 : 0
                  }}
                  className="absolute bottom-0 left-0 h-[2px] bg-[#C1A67B]"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((dest, i) => (
              <DestinationCard 
                key={dest.id} 
                dest={dest} 
                index={i} 
                isAllActive={activeFilter === "All"}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Global Action: Floating Action */}
        <div className="mt-32 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <button className="px-16 py-7 bg-[#0B1310] text-[#F2EFE9] font-sans text-xs font-bold uppercase tracking-[0.4em] rounded-full overflow-hidden transition-all duration-700 hover:scale-105 shadow-2xl">
              <span className="relative z-10">View Full Portfolio</span>
              <div className="absolute inset-0 bg-[#C1A67B] translate-y-full transition-transform duration-700 group-hover:translate-y-0" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DestinationCard({ dest, index, isAllActive }: { dest: any; index: number; isAllActive: boolean }) {
  // Asymmetrical Grid Logic
  const getGridSpan = () => {
    if (!isAllActive) return "md:col-span-6 lg:col-span-4";
    
    switch (dest.size) {
      case "large": return "md:col-span-12 lg:col-span-7 lg:row-span-2";
      case "medium": return "md:col-span-6 lg:col-span-5";
      case "small": return "md:col-span-6 lg:col-span-4";
      default: return "md:col-span-6 lg:col-span-4";
    }
  };

  const getAspectRatio = () => {
    if (!isAllActive) return "aspect-[4/5]";
    if (dest.size === "large") return "aspect-[4/5] lg:aspect-auto lg:h-full";
    if (dest.size === "medium") return "aspect-[16/10]";
    return "aspect-[4/5]";
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={`group cursor-pointer relative overflow-hidden rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-700 ${getGridSpan()} ${getAspectRatio()}`}
    >
      <div className="absolute inset-0 z-0">
        <Image 
          src={dest.img} 
          alt={dest.title} 
          fill 
          className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2F2A]/90 via-[#0F2F2A]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
      </div>

      {/* Glassmorphism Category Tag */}
      <div className="absolute top-8 left-8 z-20">
        <div className="px-5 py-2 rounded-full bg-[#0B1310]/10 backdrop-blur-md border border-[#F2EFE9]/20 text-[#F2EFE9] font-sans text-[9px] font-bold uppercase tracking-widest">
          {dest.category}
        </div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-20 p-10 md:p-14 flex flex-col justify-end">
        <motion.div layout className="mb-4">
          <h3 className={`font-serif text-[#F2EFE9] leading-tight mb-4 transition-colors duration-500 group-hover:text-[#C1A67B]
            ${dest.size === 'large' && isAllActive ? "text-4xl md:text-7xl" : "text-3xl md:text-5xl"}
          `}>
            {dest.title}
          </h3>
          <div className="flex items-center gap-2 text-[#F2EFE9]/50 mb-6">
            <MapPin className="w-4 h-4 text-[#C1A67B]" />
            <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em]">{dest.loc}</span>
          </div>
          
          <p className="text-[#F2EFE9]/60 font-sans text-sm md:text-lg max-w-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
            {dest.desc}
          </p>
        </motion.div>

        <div className="flex items-center justify-between pt-8 border-t border-[#F2EFE9]/10 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 translate-y-4 group-hover:translate-y-0">
          <span className="text-[#F2EFE9] font-sans text-[10px] font-bold uppercase tracking-[0.3em]">Explore Journey</span>
          <div className="w-12 h-12 rounded-full border border-[#F2EFE9]/20 flex items-center justify-center text-[#F2EFE9] group-hover:bg-[#C1A67B] group-hover:border-[#C1A67B] transition-all duration-500">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
