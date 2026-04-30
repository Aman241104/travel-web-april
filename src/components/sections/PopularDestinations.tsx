"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowUpRight, MapPin, ChevronRight, ChevronLeft } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const categories = ["All", "Coastal", "Mountain", "Cultural", "Wild"];

const destinations = [
  { 
    id: 1, 
    title: "Maldive Serenity", 
    loc: "North Malé Atoll", 
    desc: "Experience overwater villas and crystal clear lagoons in absolute privacy.",
    img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop", 
    category: "Coastal"
  },
  { 
    id: 2, 
    title: "Alpine Heritage", 
    loc: "Zermatt, Switzerland", 
    desc: "Discover the majestic Matterhorn and world-class skiing.",
    img: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop", 
    category: "Mountain"
  },
  { 
    id: 3, 
    title: "Kyoto Zen", 
    loc: "Kyoto, Japan", 
    desc: "A journey through ancient temples and bamboo forests.",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop", 
    category: "Cultural"
  },
  { 
    id: 4, 
    title: "Safari Spirit", 
    loc: "Maasai Mara, Kenya", 
    desc: "Witness the great migration and untamed wildlife.",
    img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop", 
    category: "Wild"
  },
  { 
    id: 5, 
    title: "Amalfi Dreams", 
    loc: "Positano, Italy", 
    desc: "Cliffside colorful villas and legendary Mediterranean views.",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop", 
    category: "Coastal"
  },
];

export default function PopularDestinations() {
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const filteredDestinations = destinations.filter(dest => 
    activeFilter === "All" || dest.category === activeFilter
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      if (!scrollRef.current || !sectionRef.current || !pinWrapperRef.current) return;

      const scrollEl = scrollRef.current;
      const totalWidth = scrollEl.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = totalWidth - viewportWidth;
      
      gsap.to(scrollEl, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          id: "destinations-scroll",
          trigger: sectionRef.current,
          pin: pinWrapperRef.current,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });
    });

    return () => ctx.revert();
  }, [mounted, activeFilter]); 

  if (!mounted) return <section className="h-screen bg-[#0B1310]" />;

  return (
    <section id="packages" ref={sectionRef} className="bg-[#0B1310] scroll-mt-24">
      <div ref={pinWrapperRef} className="relative h-screen w-full overflow-hidden flex flex-col justify-center">
        
        {/* Dynamic Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
          <h2 className="font-serif text-[30vw] text-[#F2EFE9]/[0.02] leading-none whitespace-nowrap uppercase italic font-black">
            Destinations
          </h2>
        </div>

        <div className="container relative z-10 px-6 mx-auto mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-[#C1A67B]" />
                <span className="text-[#C1A67B] font-sans text-[10px] font-bold uppercase tracking-[0.4em]">
                  Elite Collection
                </span>
              </div>
              <h2 className="font-serif text-5xl md:text-8xl text-[#F2EFE9] leading-none tracking-tighter">
                World&apos;s <span className="italic font-light text-[#C1A67B]">Hidden Gems</span>
              </h2>
            </div>

            {/* Minimalist Filters */}
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 py-2 border-b ${
                    activeFilter === cat 
                      ? "text-[#C1A67B] border-[#C1A67B]" 
                      : "text-[#F2EFE9]/30 border-transparent hover:text-[#F2EFE9]/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Area */}
        <div className="relative z-10 overflow-visible">
          <div 
            ref={scrollRef}
            className="flex gap-12 px-[10vw] min-w-max h-[65vh] items-center"
          >
            {filteredDestinations.map((dest, i) => (
              <DestinationCard 
                key={dest.id} 
                dest={dest} 
                index={i} 
              />
            ))}

            {/* View More Card */}
            <div className="flex flex-col justify-center px-20">
              <button className="group flex flex-col items-center gap-8">
                <div className="w-32 h-32 rounded-full border border-[#F2EFE9]/10 flex items-center justify-center group-hover:bg-[#C1A67B] group-hover:border-[#C1A67B] transition-all duration-700">
                  <ArrowUpRight className="w-10 h-10 text-[#F2EFE9] group-hover:text-[#0B1310] transition-colors" />
                </div>
                <span className="text-[#F2EFE9] text-[10px] font-bold uppercase tracking-[0.5em] text-center">
                  Explore Full <br />Portfolio
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-12">
          <div className="flex items-center gap-4">
            <ChevronLeft className="text-[#F2EFE9]/20 w-4 h-4" />
            <div className="w-40 h-[1px] bg-[#0B1310]/10 relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-[#C1A67B] origin-left"
                style={{ width: "30%" }} 
              />
            </div>
            <ChevronRight className="text-[#F2EFE9]/20 w-4 h-4" />
          </div>
          <span className="text-[#F2EFE9]/30 text-[9px] font-bold uppercase tracking-[0.4em]">Scroll to navigate</span>
        </div>
      </div>
    </section>
  );
}

function DestinationCard({ dest, index }: { dest: any; index: number }) {
  return (
    <div 
      className="group relative w-[30vw] min-w-[400px] h-[55vh] rounded-[3rem] overflow-hidden shadow-2xl"
    >
      <Image 
        src={dest.img} 
        alt={dest.title} 
        fill 
        className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
        sizes="(max-width: 1024px) 100vw, 30vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F2F2A] via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700" />

      {/* Content */}
      <div className="absolute inset-0 p-12 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
        <div className="mb-4">
          <span className="inline-block text-[#C1A67B] text-[9px] font-bold uppercase tracking-widest mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
            {dest.category}
          </span>
          <h3 className="font-serif text-[#F2EFE9] text-5xl leading-none mb-6">
            {dest.title}
          </h3>
          <div className="flex items-center gap-2 text-[#F2EFE9]/50 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
            <MapPin className="w-3 h-3 text-[#C1A67B]" />
            <span className="font-sans text-[9px] uppercase tracking-[0.2em]">{dest.loc}</span>
          </div>
          <p className="text-[#F2EFE9]/40 font-sans text-sm leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300">
            {dest.desc}
          </p>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-[#F2EFE9]/5 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-400">
          <span className="text-[#F2EFE9]/60 font-sans text-[9px] font-bold uppercase tracking-[0.3em]">Learn more</span>
          <ArrowUpRight className="w-4 h-4 text-[#C1A67B]" />
        </div>
      </div>

      {/* Subtle Overlay Number */}
      <div className="absolute top-10 right-10">
        <span className="text-[#F2EFE9]/10 font-serif text-6xl italic">0{index + 1}</span>
      </div>
    </div>
  );
}
