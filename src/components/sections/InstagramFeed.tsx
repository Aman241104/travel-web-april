"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "@/components/ui/InstagramIcon";
import gsap from "gsap";

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
    src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200&auto=format&fit=crop", 
    date: "Sept 2025",
    featured: false
  },
];

export default function InstagramFeed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".journal-header", {
        y: 40,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".journal-header",
          start: "top 90%",
        }
      });

      gsap.from(".journal-item", {
        scale: 0.9,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".journal-grid",
          start: "top 80%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="journal" ref={containerRef} className="relative py-24 lg:py-60 bg-white overflow-hidden scroll-mt-24">
      {/* Background Depth Elements */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent-gold/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Header with Social Proof */}
        <div className="journal-header flex flex-col lg:flex-row lg:items-end justify-between mb-20 lg:mb-32 gap-12 lg:gap-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 text-primary font-black uppercase tracking-[0.5em] text-[11px] mb-8 lg:mb-10">
              <Instagram className="w-5 h-5" />
              The Digital Journal
            </div>
            <h2 className="text-5xl lg:text-[110px] font-sans font-black text-gray-950 leading-[1] lg:leading-[0.9] mb-0 tracking-tighter">
              Glimpses of <br />
              <span className="italic font-serif font-light text-primary drop-shadow-sm">Hidden</span> Worlds.
            </h2>
          </div>
          
          <div className="flex flex-col items-start lg:items-end gap-6 lg:gap-8">
            <div className="flex items-center gap-6 px-8 lg:px-10 py-4 lg:py-6 bg-white rounded-[32px] lg:rounded-[40px] shadow-[0_25px_60px_rgba(0,0,0,0.08)] border border-gray-100/60 backdrop-blur-md">
              <div className="flex flex-col gap-1">
                <span className="text-2xl lg:text-4xl font-sans font-black text-gray-950 leading-none">50k+</span>
                <span className="text-[10px] lg:text-[11px] font-black text-gray-400 uppercase tracking-widest leading-none">Explorers</span>
              </div>
              <div className="w-px h-10 lg:h-12 bg-gray-200" />
              <div className="flex flex-col gap-1">
                <span className="text-2xl lg:text-4xl font-sans font-black text-gray-950 leading-none">4.8</span>
                <span className="text-[10px] lg:text-[11px] font-black text-gray-400 uppercase tracking-widest leading-none">Engagement</span>
              </div>
            </div>
            <p className="text-[11px] lg:text-[13px] font-black text-gray-500 uppercase tracking-[0.35em] lg:text-right max-w-[350px] leading-relaxed">
              Curated daily snapshots of the world&apos;s most exclusive sanctuaries.
            </p>
          </div>
        </div>

        {/* Dynamic Mixed Layout */}
        <div className="journal-grid grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Featured Entry */}
          {journalEntries.filter(e => e.featured).map((item) => (
            <div
              key={item.id}
              className="journal-item lg:col-span-8 group relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[850px] rounded-[48px] lg:rounded-[64px] overflow-hidden shadow-[0_50px_120px_rgba(0,0,0,0.2)] cursor-pointer"
            >
              <Image 
                src={item.src} 
                alt={item.title} 
                fill 
                className="object-cover transition-transform duration-[3s] group-hover:scale-110 ease-out"
              />
              
              {/* Rim Light Border */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/25 rounded-[48px] lg:rounded-[64px] z-20 pointer-events-none" />

              {/* Immersive Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-1000" />
              
              <div className="absolute bottom-0 left-0 w-full p-10 lg:p-20 z-30">
                <div className="flex items-center gap-4 lg:gap-6 mb-6 lg:mb-10">
                  <div className="h-[2px] w-12 lg:w-20 bg-primary" />
                  <span className="text-white text-[10px] lg:text-[12px] font-black uppercase tracking-[0.5em]">Featured Story</span>
                </div>
                
                <h3 className="text-4xl lg:text-[92px] font-sans font-black text-white mb-6 lg:mb-10 leading-[0.95] tracking-tighter group-hover:translate-x-4 transition-transform duration-700">
                  {item.title}
                </h3>
                
                <div className="flex flex-col md:flex-row md:items-center gap-8 lg:gap-12 opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-1000 delay-100">
                  <p className="text-lg lg:text-2xl text-white/80 max-w-2xl leading-relaxed font-medium">
                    {item.hook}
                  </p>
                  <div className="flex items-center gap-4 lg:gap-6 px-10 lg:px-14 py-5 lg:py-7 bg-white text-gray-950 font-black rounded-2xl lg:rounded-3xl transition-all shadow-2xl hover:bg-primary hover:text-white shrink-0 uppercase tracking-widest text-[11px] lg:text-[13px]">
                    <span>Explore Journal</span>
                    <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                </div>
              </div>

              {/* Social Icon Indicator */}
              <div className="absolute top-8 right-8 lg:top-16 lg:right-16 w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-white/10 backdrop-blur-2xl border border-white/25 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-700 scale-90 group-hover:scale-100">
                <Instagram className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
            </div>
          ))}

          {/* Secondary Entries Stack */}
          <div className="lg:col-span-4 flex flex-col gap-10 lg:gap-14">
            {journalEntries.filter(e => !e.featured).map((item) => (
              <div
                key={item.id}
                className="journal-item group relative h-[250px] lg:h-[275px] rounded-[40px] lg:rounded-[56px] overflow-hidden shadow-2xl cursor-pointer"
              >
                <Image 
                  src={item.src} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-[2.5s] group-hover:scale-110 ease-out"
                />
                
                {/* Rim Light Border */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-[40px] lg:rounded-[56px] z-20 pointer-events-none" />

                {/* Compact Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-700" />
                
                <div className="absolute bottom-0 left-0 w-full p-10 lg:p-12 text-white z-30">
                  <div className="flex items-center gap-3 text-primary text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em] mb-3 lg:mb-4 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                    <MapPin className="w-4 h-4" />
                    {item.location}
                  </div>
                  <h4 className="text-3xl lg:text-4xl font-sans font-black leading-none tracking-tighter group-hover:text-primary transition-colors duration-500">{item.title}</h4>
                  
                  <div className="mt-6 lg:mt-8 flex items-center gap-3 lg:gap-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                    <div className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.25em] border-b-2 border-white/30 pb-1">Explore Story</div>
                    <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Main Section Action */}
        <div className="mt-20 lg:mt-32 text-center">
          <div className="inline-block p-1.5 bg-gray-50 rounded-[32px] lg:rounded-[48px] border border-gray-100 shadow-sm">
            <Link href="https://instagram.com" target="_blank" className="px-14 py-7 lg:px-24 lg:py-10 bg-gray-950 hover:bg-primary text-white font-black rounded-[28px] lg:rounded-[40px] flex items-center gap-6 transition-all shadow-2xl hover:-translate-y-2 active:translate-y-0 group text-xl lg:text-3xl uppercase tracking-[0.2em] relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10">Get Inspired</span>
              <div className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-2xl lg:rounded-3xl bg-white/10 group-hover:bg-white/20 transition-all relative z-10">
                <Instagram className="w-6 h-6 lg:w-8 lg:h-8 text-accent-gold" />
              </div>
            </Link>
          </div>
          <p className="mt-10 lg:mt-14 text-[11px] lg:text-[13px] font-black uppercase tracking-[0.6em] text-gray-400">
            Join the journey <span className="text-primary">@jade.travels</span>
          </p>
        </div>

      </div>
    </section>
  );
}