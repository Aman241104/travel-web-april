"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "@/components/ui/InstagramIcon";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(".journal-header", 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".journal-header",
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(".journal-item", 
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.2,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current, // Use the main container as the trigger
            start: "top 60%", // Start earlier for the grid to ensure it's visible
            toggleActions: "play none none none"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="journal" ref={containerRef} className="relative py-12 lg:py-24 bg-white overflow-hidden scroll-mt-24">
      {/* Background Depth Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-gold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Header with Social Proof */}
        <div className="journal-header flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-6 lg:gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.4em] text-[9px] lg:text-[10px] mb-4 lg:mb-6">
              <Instagram className="w-4 h-4 lg:w-5 lg:h-5" />
              The Digital Journal
            </div>
            <h2 className="text-[28px] md:text-[40px] lg:text-[56px] xl:text-[64px] font-sans font-black text-gray-950 leading-[1] lg:leading-[0.9] mb-0 tracking-tighter">
              Glimpses of <br />
              <span className="italic font-serif font-light text-primary drop-shadow-sm">Hidden</span> Worlds.
            </h2>
          </div>
          
          <div className="flex flex-col items-start lg:items-end gap-4 lg:gap-5">
            <div className="flex items-center gap-3 px-5 lg:px-6 py-2.5 lg:py-4 bg-white rounded-2xl lg:rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100/60 backdrop-blur-md">
              <div className="flex flex-col gap-0.5">
                <span className="text-lg lg:text-2xl font-sans font-black text-gray-950 leading-none">50k+</span>
                <span className="text-[8px] lg:text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Explorers</span>
              </div>
              <div className="w-px h-6 lg:h-8 bg-gray-200" />
              <div className="flex flex-col gap-0.5">
                <span className="text-lg lg:text-2xl font-sans font-black text-gray-950 leading-none">4.8</span>
                <span className="text-[8px] lg:text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Engagement</span>
              </div>
            </div>
            <p className="text-[9px] lg:text-[11px] font-black text-gray-500 uppercase tracking-[0.25em] lg:text-right max-w-[260px] leading-relaxed">
              Curated daily snapshots of the world&apos;s most exclusive sanctuaries.
            </p>
          </div>
        </div>

        {/* Dynamic Mixed Layout */}
        <div className="journal-grid grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          
          {/* Featured Entry */}
          {journalEntries.filter(e => e.featured).map((item) => (
            <div
              key={item.id}
              className="journal-item lg:col-span-8 group relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[600px] rounded-[24px] lg:rounded-[40px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.15)] cursor-pointer"
            >
              <Image 
                src={item.src} 
                alt={item.title} 
                fill 
                className="object-cover transition-transform duration-[3s] group-hover:scale-110 ease-out"
              />
              
              {/* Rim Light Border */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[24px] lg:rounded-[40px] z-20 pointer-events-none" />

              {/* Immersive Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-1000" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 lg:p-12 z-30">
                <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-6">
                  <div className="h-[1.5px] w-8 lg:w-12 bg-primary" />
                  <span className="text-white text-[8px] lg:text-[10px] font-black uppercase tracking-[0.3em]">Featured Story</span>
                </div>
                
                <h3 className="text-2xl lg:text-[52px] font-sans font-black text-white mb-3 lg:mb-6 leading-[1] tracking-tighter group-hover:translate-x-2 transition-transform duration-700">
                  {item.title}
                </h3>
                
                <div className="flex flex-col md:flex-row md:items-center gap-4 lg:gap-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-1000 delay-100">
                  <p className="text-sm lg:text-lg text-white/80 max-w-lg leading-relaxed font-medium">
                    {item.hook}
                  </p>
                  <div className="flex items-center gap-3 lg:gap-4 px-6 lg:px-10 py-3 lg:py-5 bg-white text-gray-950 font-black rounded-lg lg:rounded-[20px] transition-all shadow-2xl hover:bg-primary hover:text-white shrink-0 uppercase tracking-widest text-[9px] lg:text-[11px]">
                    <span>Explore Journal</span>
                    <ArrowUpRight className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5" />
                  </div>
                </div>
              </div>

              {/* Social Icon Indicator */}
              <div className="absolute top-5 right-5 lg:top-10 lg:right-10 w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-700 scale-90 group-hover:scale-100">
                <Instagram className="w-5 h-5 lg:w-7 lg:h-7" />
              </div>
            </div>
          ))}

          {/* Secondary Entries Stack */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-10">
            {journalEntries.filter(e => !e.featured).map((item) => (
              <div
                key={item.id}
                className="journal-item group relative h-[180px] lg:h-[200px] rounded-[20px] lg:rounded-[32px] overflow-hidden shadow-2xl cursor-pointer"
              >
                <Image 
                  src={item.src} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-[2.5s] group-hover:scale-110 ease-out"
                />
                
                {/* Rim Light Border */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[20px] lg:rounded-[32px] z-20 pointer-events-none" />

                {/* Compact Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-700" />
                
                <div className="absolute bottom-0 left-0 w-full p-5 lg:p-6 text-white z-30">
                  <div className="flex items-center gap-2 text-primary text-[7px] lg:text-[8px] font-black uppercase tracking-[0.2em] mb-1.5 lg:mb-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </div>
                  <h4 className="text-lg lg:text-xl font-sans font-black leading-none tracking-tighter group-hover:text-primary transition-colors duration-500">{item.title}</h4>
                  
                  <div className="mt-3 lg:mt-4 flex items-center gap-2.5 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                    <div className="text-[8px] lg:text-[9px] font-black uppercase tracking-[0.15em] border-b border-white/20 pb-0.5">Explore Story</div>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Main Section Action */}
        <div className="mt-12 lg:mt-20 text-center">
          <div className="inline-block p-1 bg-gray-50 rounded-[24px] lg:rounded-[32px] border border-gray-100 shadow-sm">
            <Link href="https://instagram.com" target="_blank" className="px-8 py-4 lg:px-14 lg:py-6 bg-gray-950 hover:bg-primary text-white font-black rounded-[18px] lg:rounded-[28px] flex items-center gap-4 transition-all shadow-2xl hover:-translate-y-1 active:translate-y-0 group text-base lg:text-xl uppercase tracking-[0.15em] relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10">Get Inspired</span>
              <div className="flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-lg lg:rounded-[16px] bg-white/10 group-hover:bg-white/20 transition-all relative z-10">
                <Instagram className="w-4 h-4 lg:w-6 lg:h-6 text-accent-gold" />
              </div>
            </Link>
          </div>
          <p className="mt-6 lg:mt-10 text-[9px] lg:text-[11px] font-black uppercase tracking-[0.4em] text-gray-400">
            Join the journey <span className="text-primary">@jade.travels</span>
          </p>
        </div>

      </div>
    </section>
  );
}
