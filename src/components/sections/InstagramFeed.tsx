"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
    <section id="journal" className="py-32 bg-white overflow-hidden scroll-mt-24">
      <div className="container-custom">
        
        {/* Header with Social Proof */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-10">
          <div className="max-w-[700px]">
            <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.4em] text-xs mb-6">
              <Instagram className="w-4 h-4" />
              The Digital Journal
            </div>
            <h2 className="text-5xl lg:text-7xl font-serif text-brand-dark mb-0 leading-tight">
              Glimpses of <br />
              <span className="italic font-light text-primary">Hidden</span> Worlds.
            </h2>
          </div>
          
          <div className="flex flex-col items-start lg:items-end gap-5">
            <div className="flex items-center gap-6 px-8 py-4 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-brand-dark leading-none mb-1">50k+</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Explorers</span>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-brand-dark leading-none mb-1">4.8</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Engagement</span>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-500 max-w-[300px] lg:text-right leading-relaxed">
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
              className="lg:col-span-8 group relative aspect-[16/10] lg:aspect-auto lg:h-[700px] rounded-[56px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.12)] cursor-pointer"
            >
              <Image 
                src={item.src} 
                alt={item.title} 
                fill 
                className="object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              
              {/* Immersive Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
              
              <div className="absolute bottom-0 left-0 w-full p-12 md:p-20 text-white z-10">
                <div className="flex items-center gap-3 mb-6 text-accent-gold font-bold text-xs uppercase tracking-[0.4em]">
                  <span className="w-8 h-px bg-accent-gold" />
                  Featured Story
                </div>
                <h3 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                  {item.title}
                </h3>
                <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-xl leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.hook}
                </p>
                
                <Link href="#journal" className="flex items-center gap-5 px-10 py-5 bg-white text-brand-dark font-bold rounded-2xl transition-all shadow-2xl group/btn hover:bg-primary hover:text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 delay-100">
                  <span className="text-sm uppercase tracking-widest">Read Journal</span>
                  <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Link>
              </div>

              {/* Social Icon Indicator */}
              <div className="absolute top-12 right-12 w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Instagram className="w-6 h-6" />
              </div>
            </motion.div>
          ))}

          {/* Secondary Entries Stack */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            {journalEntries.filter(e => !e.featured).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[230px] rounded-[40px] overflow-hidden shadow-2xl cursor-pointer"
              >
                <Image 
                  src={item.src} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                
                {/* Compact Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 text-white z-10">
                  <div className="text-accent-gold text-[9px] font-black uppercase tracking-[0.3em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">{item.location}</div>
                  <h4 className="text-2xl font-serif font-bold group-hover:text-primary-muted transition-all duration-500 opacity-0 group-hover:opacity-100">{item.title}</h4>
                  
                  <div className="mt-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                    <div className="text-[10px] font-bold uppercase tracking-widest border-b border-white/30 pb-0.5">Explore Story</div>
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
