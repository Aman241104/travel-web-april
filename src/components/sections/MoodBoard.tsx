"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

const moods = [
  { 
    title: "Serene", 
    color: "bg-[#E0F2F1]", 
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop" // Tropical Island
  },
  { 
    title: "Vibrant", 
    color: "bg-[#FFFDE7]", 
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop" // Sunny Market
  },
  { 
    title: "Mystic", 
    color: "bg-[#F3E5F5]", 
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop" // Mountain Mist
  },
  { 
    title: "Boundless", 
    color: "bg-[#E3F2FD]", 
    img: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=800&auto=format&fit=crop" // Blue Horizon
  },
];

export default function MoodBoard() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      gsap.from(".mood-card", {
        scale: 0.8,
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    // Refresh ScrollTrigger to ensure correct positions
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-cream/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-ultra text-[10px] font-bold mb-4 block">Pick Your Energy</span>
          <h2 className="font-serif text-5xl md:text-7xl text-jade-darkest leading-tight">Travel by <span className="italic font-light text-gold">Mood.</span></h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {moods.map((mood, i) => (
            <div 
              key={i} 
              className={`mood-card interactive group relative aspect-[3/4] rounded-[40px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-jade/10`}
            >
              <Image 
                src={mood.img} 
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                alt={mood.title} 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="bg-jade-white px-10 py-5 rounded-3xl border border-jade-white shadow-xl group-hover:bg-jade group-hover:border-jade transition-all duration-300">
                  <h3 className="text-jade-darkest font-serif text-3xl group-hover:text-jade-white transition-colors duration-300">
                    {mood.title}
                  </h3>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gold rounded-full flex items-center justify-center rotate-[-15deg] group-hover:bottom-4 group-hover:right-4 transition-all duration-500 opacity-0 group-hover:opacity-100 z-20 shadow-xl">
                 <span className="text-jade-darkest font-sans text-[10px] font-bold tracking-widest">CERTIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
