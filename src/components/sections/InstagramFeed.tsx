"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "@/components/ui/InstagramIcon";

const journalEntries = [
  { 
    id: 1,
    title: "Alpine Sanctuary", 
    hook: "Sunrise over the Swiss peaks.",
    location: "Zermatt, Switzerland",
    category: "Seasonal", 
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop", 
    date: "Dec 2025",
    featured: true
  },
  { 
    id: 2,
    title: "Kyoto Rhythms", 
    hook: "Finding peace in ancient alleys.",
    location: "Kyoto, Japan",
    category: "Culture", 
    src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop", 
    date: "Nov 2025",
    featured: false
  },
  { 
    id: 3,
    title: "Azure Secrets", 
    hook: "Hidden coves you won't find on maps.",
    location: "Amalfi Coast, Italy",
    category: "Coastal", 
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop", 
    date: "Oct 2025",
    featured: false
  },
  { 
    id: 4,
    title: "Wild Majesty", 
    hook: "A close encounter with the kings.",
    location: "Maasai Mara, Kenya",
    category: "Adventure", 
    src: "https://images.unsplash.com/photo-1516422317184-268d7103eb91?q=80&w=1200&auto=format&fit=crop", 
    date: "Sept 2025",
    featured: false
  },
];

export default function InstagramFeed() {
  return (
    <section id="journal" className="relative py-32 lg:py-48 bg-white overflow-hidden scroll-mt-24">
      {/* Background Depth Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-gold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Header with Social Proof */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-28 gap-12">
          <div className="max-w-[720px]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8"
            >
              <Instagram className="w-4 h-4" />
              The Digital Journal
            </motion.div>
            <h2 className="text-6xl lg:text-[88px] font-sans font-black text-gray-900 leading-[0.95] mb-0 tracking-tighter">
              Glimpses of <br />
              <span className="italic font-serif font-light text-primary drop-shadow-sm">Hidden</span> Worlds.
            </h2>
          </div>
          
          <div className="flex flex-col items-start lg:items-end gap-5">
            <div className="flex items-center gap-4 px-8 py-4 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100/50 backdrop-blur-md">
              <div className="flex flex-col">
                <span className="text-2xl font-sans font-black text-gray-900 leading-none mb-1">50k+</span>
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Explorers</span>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-sans font-black text-gray-900 leading-none mb-1">4.8</span>
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Engagement</span>
              </div>
            </div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] lg:text-right max-w-[300px] leading-relaxed">
              Curated daily snapshots of the world&apos;s most exclusive sanctuaries.
            </p>
          </div>
        </div>

        {/* Dynamic Mixed Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Featured Entry */}
          {journalEntries.filter(e => e.featured).map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8 group relative aspect-[16/10] lg:aspect-auto lg:h-[750px] rounded-[56px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.15)] cursor-pointer"
            >
              <Image 
                src={item.src} 
                alt={item.title} 
                fill 
                className="object-cover transition-transform duration-[2.5s] group-hover:scale-110 ease-out"
              />
              
              {/* Rim Light Border */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[56px] z-20 pointer-events-none" />

              {/* Immersive Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-1000" />
              
              <div className="absolute bottom-0 left-0 w-full p-12 md:p-16 z-30">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-12 bg-primary" />
                  <span className="text-white text-[10px] font-black uppercase tracking-[0.4em]">Featured Story</span>
                </div>
                
                <h3 className="text-5xl md:text-7xl font-sans font-black text-white mb-8 leading-[1.1] tracking-tighter group-hover:translate-x-2 transition-transform duration-700">
                  {item.title}
                </h3>
                
                <div className="flex flex-col md:flex-row md:items-center gap-10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
                  <p className="text-xl text-white/70 max-w-xl leading-relaxed font-medium">
                    {item.hook}
                  </p>
                  <div className="flex items-center gap-5 px-10 py-5 bg-white text-gray-900 font-sans font-black rounded-2xl transition-all shadow-2xl hover:bg-primary hover:text-white shrink-0">
                    <span className="text-[11px] uppercase tracking-widest">Explore Journal</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Social Icon Indicator */}
              <div className="absolute top-12 right-12 w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-700 scale-90 group-hover:scale-100">
                <Instagram className="w-8 h-8" />
              </div>
            </motion.div>
          ))}

          {/* Secondary Entries Stack */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            {journalEntries.filter(e => !e.featured).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-[250px] rounded-[48px] overflow-hidden shadow-2xl cursor-pointer"
              >
                <Image 
                  src={item.src} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110 ease-out"
                />
                
                {/* Rim Light Border */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[48px] z-20 pointer-events-none" />

                {/* Compact Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
                
                <div className="absolute bottom-0 left-0 w-full p-10 text-white z-30">
                  <div className="flex items-center gap-3 text-primary text-[9px] font-black uppercase tracking-[0.3em] mb-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </div>
                  <h4 className="text-3xl font-sans font-black leading-none tracking-tighter group-hover:text-primary transition-colors duration-500">{item.title}</h4>
                  
                  <div className="mt-6 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    <div className="text-[10px] font-black uppercase tracking-widest border-b border-white/30 pb-0.5">Explore Story</div>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Main Section Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-block p-1 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
            <Link href="https://instagram.com" target="_blank" className="px-14 py-7 bg-brand-dark hover:bg-primary text-white font-bold rounded-[22px] flex items-center gap-4 transition-all shadow-xl hover:-translate-y-1 active:translate-y-0 group text-xl">
              Get Inspired
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5 text-accent-gold" />
              </div>
            </Link>
          </div>
          <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400">
            Join the journey <span className="text-primary">@jade.travels</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
