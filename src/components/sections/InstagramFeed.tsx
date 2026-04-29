"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, BookOpen, Compass, Sparkles } from "lucide-react";

const journalEntries = [
  { 
    id: 1,
    title: "The Winter Edit: Alpine Escapes", 
    category: "Seasonal", 
    desc: "A curated guide to the most exclusive mountain retreats.",
    src: "/images/instagram/1.jpg", 
    link: "#" 
  },
  { 
    id: 2,
    title: "The Art of Japanese Zen", 
    category: "Culture", 
    desc: "Discovering peace in the ancient temples of Kyoto.",
    src: "/images/instagram/3.jpg", 
    link: "#" 
  },
  { 
    id: 3,
    title: "Hidden Mediterranean Gems", 
    category: "Coastal", 
    desc: "Beyond the Amalfi: Unveiling the coast's best secrets.",
    src: "/images/instagram/5.jpg", 
    link: "#" 
  },
  { 
    id: 4,
    title: "Private Expedition: Safari", 
    category: "Adventure", 
    desc: "An unparalleled journey into the heart of the wild.",
    src: "/images/instagram/6.jpg", 
    link: "#" 
  },
  { 
    id: 5,
    title: "Desert Gold & Modern Marvels", 
    category: "Modern", 
    desc: "Architectural wonders and high-fashion in the heart of the desert.",
    src: "/images/instagram/2.jpg", 
    link: "#" 
  },
];

const featuredStory = {
  title: "A Masterclass in Exploration",
  category: "Editorial",
  desc: "Redefining what it means to travel in an era of global connectivity. Discover our philosophy on curated movement.",
  src: "/images/instagram/4.jpg",
  tag: "Cover Story"
};

export default function InstagramFeed() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="journal" className="py-24 md:py-48 bg-[#FBF6EE] overflow-hidden relative">
      {/* Cinematic Background Accents */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#6FC3B2]/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 mb-20 md:mb-32">
        {/* Editorial Header */}
        <div className="max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#6FC3B2] font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] mb-8 block"
          >
            Digital Journal
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-[100px] text-[#0F2F2A] leading-[0.95] tracking-tightest mb-10"
          >
            Stories & <br />
            <span className="italic font-light text-[#6FC3B2]">Inspirations</span>
          </motion.h2>
        </div>
      </div>

      {/* 1. FEATURED STORY (Hero Card) */}
      <div className="container mx-auto px-6 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="group relative w-full h-[60vh] min-h-[500px] md:h-[80vh] rounded-[4rem] overflow-hidden cursor-pointer shadow-2xl"
        >
          <Image 
            src={featuredStory.src} 
            alt={featuredStory.title} 
            fill 
            className="object-cover transition-transform duration-[4s] ease-out group-hover:scale-110"
            priority
          />
          {/* Rich Cinematic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2F2A]/90 via-[#0F2F2A]/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-1000" />
          
          {/* Content */}
          <div className="absolute inset-0 p-10 md:p-20 flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#6FC3B2] font-sans text-[10px] font-bold uppercase tracking-[0.3em]">
                  {featuredStory.tag}
                </span>
                <span className="text-white/40 font-sans text-[10px] font-bold uppercase tracking-[0.3em]">• {featuredStory.category}</span>
              </div>
              <h3 className="font-serif text-5xl md:text-8xl text-white mb-8 leading-tight">
                {featuredStory.title}
              </h3>
              <p className="text-white/60 font-sans text-xl md:text-2xl leading-relaxed mb-10 max-w-xl">
                {featuredStory.desc}
              </p>
              <button className="group/btn flex items-center gap-4 text-white font-sans text-xs font-bold uppercase tracking-[0.4em] hover:text-[#6FC3B2] transition-colors">
                Enter Journey
                <div className="relative overflow-hidden w-10 h-px bg-white group-hover/btn:bg-[#6FC3B2] transition-colors">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-white"
                  />
                </div>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 2. HORIZONTAL STORY ROW */}
      <div className="relative pl-6 md:pl-[calc((100vw-1400px)/2)] mb-32">
        <div className="flex items-center justify-between pr-6 md:pr-[calc((100vw-1400px)/2)] mb-12">
          <h4 className="font-serif text-3xl text-[#0F2F2A]">Recent Dispatch</h4>
          <div className="flex gap-4">
            <button 
              onClick={() => scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' })}
              className="w-12 h-12 rounded-full border border-[#0F2F2A]/10 flex items-center justify-center text-[#0F2F2A] hover:bg-[#0F2F2A] hover:text-white transition-all"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <button 
              onClick={() => scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' })}
              className="w-12 h-12 rounded-full border border-[#0F2F2A]/10 flex items-center justify-center text-[#0F2F2A] hover:bg-[#0F2F2A] hover:text-white transition-all"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <motion.div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-12 snap-x no-scrollbar pr-6 md:pr-[calc((100vw-1400px)/2)]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {journalEntries.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="relative min-w-[320px] md:min-w-[450px] aspect-[3/4] rounded-[3rem] overflow-hidden cursor-pointer group snap-start shadow-xl"
            >
              <Image 
                src={item.src} 
                alt={item.title} 
                fill 
                className="object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2F2A] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <span className="text-[#6FC3B2] font-sans text-[9px] font-black uppercase tracking-[0.3em] mb-3 block">
                  {item.category}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6 group-hover:text-[#6FC3B2] transition-colors duration-500 transform group-hover:-translate-y-2 transition-transform">
                  {item.title}
                </h3>
                <div className="flex items-center gap-4 text-white/50 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Explore Story</span>
                  <div className="w-8 h-px bg-white/30 group-hover:w-12 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* FINAL GLOBAL CTA */}
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <button className="group relative px-16 py-7 border border-[#0F2F2A]/10 text-[#0F2F2A] font-sans text-xs font-bold uppercase tracking-[0.5em] rounded-full overflow-hidden transition-all duration-700 hover:text-white">
            <span className="relative z-10">Explore All Stories</span>
            <div className="absolute inset-0 bg-[#0F2F2A] translate-y-full transition-transform duration-700 group-hover:translate-y-0" />
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 shadow-[0_0_50px_rgba(15,47,42,0.3)] transition-opacity duration-700" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
