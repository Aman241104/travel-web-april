"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const destinations = [
  { 
    id: 1, 
    title: "Maldive Serenity", 
    loc: "North Malé Atoll", 
    img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop", 
    category: "Coastal Escape" 
  },
  { 
    id: 2, 
    title: "Alpine Heritage", 
    loc: "Zermatt, Switzerland", 
    img: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop", 
    category: "Mountain Retreat" 
  },
  { 
    id: 3, 
    title: "Kyoto Zen", 
    loc: "Kyoto, Japan", 
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop", 
    category: "Cultural Journey" 
  },
  { 
    id: 4, 
    title: "Desert Gold", 
    loc: "Dubai, UAE", 
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop", 
    category: "Modern Luxury" 
  },
  { 
    id: 5, 
    title: "Amalfi Dreams", 
    loc: "Positano, Italy", 
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop", 
    category: "Mediterranean Bliss" 
  },
  { 
    id: 6, 
    title: "Safari Spirit", 
    loc: "Maasai Mara, Kenya", 
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop", 
    category: "Wildlife Adventure" 
  },
];

export default function PopularDestinations() {
  return (
    <section className="bg-bg-light py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-teal font-sans text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Curated Collections
            </span>
            <h2 className="font-serif text-4xl md:text-7xl text-onyx leading-tight tracking-tight">
              Destinations for the <br />
              <span className="italic font-light">Discerning Traveler</span>
            </h2>
          </div>
          <button className="group flex items-center gap-3 font-sans text-sm font-bold uppercase tracking-widest text-onyx hover:text-brand-teal transition-colors">
            <span>Explore All</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {destinations.map((dest, i) => (
            <motion.div 
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 shadow-xl">
                <Image 
                  src={dest.img} 
                  alt={dest.title} 
                  fill 
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-brand-teal font-sans text-[10px] font-bold uppercase tracking-widest mb-2 block">
                    {dest.category}
                  </span>
                  <button className="text-white font-sans text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                    View Details <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-2xl text-onyx mb-1">{dest.title}</h3>
                  <p className="text-onyx/60 font-sans text-sm tracking-wide">{dest.loc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
