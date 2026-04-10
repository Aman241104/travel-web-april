"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const tours = [
  { id: 1, title: "Maldive Serenity", loc: "North Malé Atoll", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop", desc: "Private villas on the water." },
  { id: 2, title: "Alpine Heritage", loc: "Zermatt, Switzerland", img: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop", desc: "Quiet mountain stays." },
  { id: 3, title: "Kyoto Zen Retreat", loc: "Kyoto, Japan", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop", desc: "Peaceful ancient sites." },
  { id: 4, title: "Desert Gold", loc: "Dubai, UAE", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop", desc: "Modern luxury in the desert." },
];

export default function PopularDestinations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      const getScrollDistance = () => {
        return slider.scrollWidth - window.innerWidth;
      };

      gsap.to(slider, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-bg-light relative overflow-hidden h-[80vh] md:h-screen flex items-center py-0">
      <div 
        ref={sliderRef} 
        className="flex items-center gap-0 md:gap-24 px-0 md:px-[10vw] w-max relative z-10 overflow-x-visible no-scrollbar"
      >
        <div className="flex-shrink-0 w-screen md:w-[40vw] snap-center px-8 md:px-0">
          <span className="text-brand-teal font-sans text-[10px] font-black uppercase tracking-[0.6em] mb-4 md:mb-8 block">
            Destinations
          </span>
          <h2 className="font-serif text-4xl md:text-[80px] text-onyx leading-[1.1] tracking-tight mb-8 md:mb-16">
            Where <br />
            <span className="text-brand-teal italic font-light">We Go.</span>
          </h2>
        </div>

        {tours.map((tour) => (
          <div 
            key={tour.id} 
            className="group relative w-screen md:w-[45vw] lg:w-[40vw] px-4 md:px-0 h-[55vh] md:h-[65vh] flex-shrink-0 snap-center"
          >
            <div className="relative w-full h-full rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl">
              <Image 
                src={tour.img} 
                alt={tour.title} 
                fill 
                className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-10 left-10 right-10 flex items-end justify-between">
                <div>
                  <span className="text-brand-teal font-sans text-xs font-semibold uppercase tracking-widest mb-3 block">{tour.loc}</span>
                  <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-brand-sand mb-3 leading-tight">{tour.title}</h3>
                  <p className="text-brand-sand/80 font-sans text-xs md:text-sm">{tour.desc}</p>
                </div>
                <button className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-brand-teal hover:scale-110 transition-all duration-500 shrink-0">
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="flex-shrink-0 w-screen md:w-[40vw] text-center px-8 md:px-0">
          <h2 className="font-serif text-4xl md:text-6xl text-onyx mb-10 md:mb-12 leading-tight">Your story <br /><span className="text-brand-teal italic font-light">awaits.</span></h2>
          <button className="px-10 py-5 bg-onyx text-white rounded-full font-sans text-xs font-semibold uppercase tracking-widest hover:bg-brand-teal transition-all duration-500 shadow-xl inline-block">
            View All Access
          </button>
        </div>

        {/* Spacer for extra scroll room */}
        <div className="flex-shrink-0 w-[0vw] md:w-[15vw]" />
      </div>
    </section>
  );
}
