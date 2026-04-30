"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const journalEntries = [
  { 
    id: 1,
    title: "Alpine Sanctuary", 
    category: "Seasonal", 
    desc: "A masterclass in isolation and high-altitude luxury.",
    src: "/images/instagram/1.jpg", 
    date: "Dec 2025"
  },
  { 
    id: 2,
    title: "Kyoto Rhythms", 
    category: "Culture", 
    desc: "Unlocking the private gates of the Gion district.",
    src: "/images/instagram/3.jpg", 
    date: "Nov 2025"
  },
  { 
    id: 3,
    title: "Azure Secrets", 
    category: "Coastal", 
    desc: "The Mediterranean coast, seen from a private deck.",
    src: "/images/instagram/5.jpg", 
    date: "Oct 2025"
  },
  { 
    id: 4,
    title: "Wild Majesty", 
    category: "Adventure", 
    desc: "An unparalleled journey into the Serengeti's heart.",
    src: "/images/instagram/6.jpg", 
    date: "Sept 2025"
  },
];

export default function InstagramFeed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Text Reveal
      gsap.from(".journal-reveal", {
        yPercent: 100,
        stagger: 0.1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        }
      });

      // Card Staggered Entry
      const cards = gsap.utils.toArray(".journal-card");
      cards.forEach((card: any, i: number) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          }
        });

        // Hover Parallax within cards
        const img = card.querySelector("img");
        card.addEventListener("mouseenter", () => {
          gsap.to(img, { scale: 1.08, duration: 0.8, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(img, { scale: 1, duration: 0.8, ease: "power2.out" });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="journal" ref={containerRef} className="relative py-24 md:py-40 bg-[#FBF6EE] overflow-hidden scroll-mt-24">
      {/* Editorial Watermark */}
      <div className="absolute top-10 right-[-10%] pointer-events-none opacity-[0.02] select-none">
        <span className="font-serif text-[30vw] leading-none uppercase italic">Journal</span>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-[1400px]">
        
        {/* Header Exhibit */}
        <div ref={titleRef} className="max-w-4xl mb-20 md:mb-32">
          <div className="overflow-hidden mb-4">
            <span className="journal-reveal inline-block text-[#6FC3B2] font-sans text-[10px] md:text-xs font-black uppercase tracking-[0.5em]">
              Digital Archive
            </span>
          </div>
          <h2 className="font-serif text-6xl md:text-8xl lg:text-[110px] text-[#0F2F2A] leading-[0.9] tracking-tightest">
            <div className="overflow-hidden">
              <span className="journal-reveal inline-block">The Art of</span>
            </div>
            <div className="overflow-hidden italic font-light text-[#6FC3B2]">
              <span className="journal-reveal inline-block">Movement</span>
            </div>
          </h2>
        </div>

        {/* Balanced Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-24 md:gap-y-32">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-12 md:gap-32">
            {[journalEntries[0], journalEntries[2]].map((item) => (
              <JournalCard key={item.id} item={item} />
            ))}
          </div>

          {/* Column 2 - Staggered Down */}
          <div className="flex flex-col gap-12 md:gap-32 md:pt-48">
             {[journalEntries[1], journalEntries[3]].map((item) => (
              <JournalCard key={item.id} item={item} />
            ))}
          </div>

        </div>

        {/* Archive CTA */}
        <div className="mt-32 pt-16 border-t border-[#0F2F2A]/10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-md">
            <h5 className="font-serif text-2xl text-[#0F2F2A] mb-2">The Narrative Archive</h5>
            <p className="text-[#0F2F2A]/40 font-sans text-xs leading-relaxed uppercase tracking-widest">
              Exploring the intersection of luxury and discovery.
            </p>
          </div>
          
          <MagneticButton className="group relative px-12 py-7 bg-[#0F2F2A] text-white font-bold text-[10px] uppercase tracking-[0.4em] rounded-full overflow-hidden shadow-2xl transition-all duration-500">
            <span className="relative z-10 flex items-center gap-4">
              Explore Stories <ArrowUpRight className="w-4 h-4" />
            </span>
            <div className="absolute inset-0 bg-[#6FC3B2] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </MagneticButton>
        </div>

      </div>
    </section>
  );
}

function JournalCard({ item }: { item: any }) {
  return (
    <div className="journal-card group cursor-pointer">
      <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl mb-8 bg-white">
        <Image 
          src={item.src} 
          alt={item.title} 
          fill 
          className="object-cover transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2F2A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Interactive Corner Icon */}
        <div className="absolute bottom-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
            <ArrowUpRight className="text-white w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="px-2">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[#6FC3B2] font-sans text-[9px] font-black uppercase tracking-[0.2em]">
            {item.category}
          </span>
          <div className="w-6 h-[1px] bg-[#0F2F2A]/10" />
          <span className="text-[#0F2F2A]/30 font-sans text-[9px] font-black uppercase tracking-[0.2em]">
            {item.date}
          </span>
        </div>
        <h3 className="font-serif text-3xl md:text-4xl text-[#0F2F2A] mb-4 group-hover:text-[#6FC3B2] transition-colors duration-500">
          {item.title}
        </h3>
        <p className="text-[#0F2F2A]/50 font-sans text-sm md:text-base leading-relaxed max-w-sm line-clamp-2">
          {item.desc}
        </p>
      </div>
    </div>
  );
}
