"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Instagram } from "@/components/ui/InstagramIcon";

const journalEntries = [
  { 
    id: 1,
    title: "Alpine Sanctuary", 
    category: "Seasonal", 
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop", 
    date: "Dec 2025"
  },
  { 
    id: 2,
    title: "Kyoto Rhythms", 
    category: "Culture", 
    src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop", 
    date: "Nov 2025"
  },
  { 
    id: 3,
    title: "Azure Secrets", 
    category: "Coastal", 
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop", 
    date: "Oct 2025"
  },
  { 
    id: 4,
    title: "Wild Majesty", 
    category: "Adventure", 
    src: "https://images.unsplash.com/photo-1516422317184-268d7103eb91?q=80&w=1200&auto=format&fit=crop", 
    date: "Sept 2025"
  },
];

export default function InstagramFeed() {
  return (
    <section id="journal" className="py-32 bg-white overflow-hidden scroll-mt-24">
      <div className="container-custom">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">
            The Digital Journal
          </span>
          <h2 className="text-5xl font-serif text-brand-dark mb-6 max-w-[600px]">
            Follow Our <span className="italic font-light text-primary">Global Journey</span>
          </h2>
          <p className="text-gray-500 max-w-[500px] text-lg">
            Glimpses into the worlds most exclusive sanctuaries, curated daily for the modern nomad.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {journalEntries.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-xl mb-6">
                <Image 
                  src={item.src} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                    <Instagram className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-xl font-bold text-brand-dark group-hover:text-primary transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">
                  {item.category} <span className="text-primary mx-2">•</span> {item.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-20 text-center">
          <button className="px-10 py-5 bg-white border-2 border-primary text-primary font-bold rounded-2xl transition-all hover:bg-primary hover:text-white shadow-xl flex items-center gap-3 mx-auto group">
            Follow @jade.travels
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
