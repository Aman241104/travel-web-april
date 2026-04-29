"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Instagram } from "../ui/InstagramIcon";

const journalEntries = [
  { 
    title: "The Winter Edit: Alpine Escapes", 
    category: "Seasonal", 
    desc: "A curated guide to the most exclusive mountain retreats.",
    src: "/images/instagram/1.jpg", 
    link: "#" 
  },
  { 
    title: "The Art of Japanese Zen", 
    category: "Culture", 
    desc: "Discovering peace in the ancient temples of Kyoto.",
    src: "/images/instagram/3.jpg", 
    link: "#" 
  },
  { 
    title: "Hidden Mediterranean Gems", 
    category: "Coastal", 
    desc: "Beyond the Amalfi: Unveiling the coast's best secrets.",
    src: "/images/instagram/5.jpg", 
    link: "#" 
  },
  { 
    title: "Private Expedition: Safari", 
    category: "Adventure", 
    desc: "An unparalleled journey into the heart of the wild.",
    src: "/images/instagram/6.jpg", 
    link: "#" 
  },
];

export default function InstagramFeed() {
  return (
    <section id="journal" className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-teal font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-6 block"
            >
              Digital Journal
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-7xl text-onyx leading-[1.1] tracking-tight mb-8"
            >
              Stories and <br />
              <span className="italic font-light text-brand-teal/80">Inspirations</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-onyx/60 font-sans text-xl max-w-xl leading-relaxed"
            >
              A curated collection of journeys, insights, and unparalleled discoveries.
            </motion.p>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="group flex items-center gap-3 font-sans text-[10px] font-bold uppercase tracking-widest text-onyx hover:text-brand-teal transition-colors">
              <Instagram className="w-5 h-5" />
              <span>@JadeTravels</span>
            </button>
          </div>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {journalEntries.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] mb-8 shadow-2xl">
                <Image 
                  src={item.src} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-onyx/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                    <BookOpen className="w-6 h-6" />
                  </div>
                </div>
              </div>
              
              <div className="px-2">
                <span className="text-brand-teal font-sans text-[9px] font-black uppercase tracking-[0.3em] mb-3 block">
                  {item.category}
                </span>
                <h3 className="font-serif text-2xl text-onyx mb-3 group-hover:text-brand-teal transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-onyx/50 font-sans text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2 text-onyx/30 group-hover:text-onyx transition-colors duration-500">
                  <span className="text-[10px] font-bold uppercase tracking-widest">Read Story</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Action Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between p-10 md:p-16 rounded-[3rem] bg-cream/30 border border-onyx/5"
        >
          <div className="mb-10 md:mb-0 text-center md:text-left">
            <h4 className="font-serif text-3xl md:text-4xl text-onyx mb-4">Explore More Travel Stories</h4>
            <p className="text-onyx/40 font-sans text-lg">Delve deeper into our curated world of luxury discovery.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="group px-12 py-5 bg-onyx text-white font-sans text-xs font-bold uppercase tracking-[0.3em] rounded-full hover:bg-brand-teal transition-all duration-500 flex items-center gap-4 shadow-xl">
              View Journal
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="group flex items-center gap-3 px-12 py-5 border border-onyx/10 text-onyx font-sans text-xs font-bold uppercase tracking-[0.3em] rounded-full hover:bg-white transition-all duration-500">
              <Instagram className="w-4 h-4" />
              Follow Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
