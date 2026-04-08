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
  {
    id: 1,
    title: "Maldive Serenity",
    loc: "North Malé Atoll",
    img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop",
    desc: "Private overwater villas and starlit dinners on untouched coral sands.",
  },
  {
    id: 2,
    title: "Alpine Heritage",
    loc: "Zermatt, Switzerland",
    img: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=1200&auto=format&fit=crop",
    desc: "Luxury chalet living with direct access to the world's most exclusive slopes.",
  },
  {
    id: 3,
    title: "Kyoto Zen Retreat",
    loc: "Kyoto, Japan",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
    desc: "Ancient tradition meets modern luxury in curated temple experiences.",
  },
  {
    id: 4,
    title: "Desert Gold",
    loc: "Dubai, UAE",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    desc: "Ultra-modern architecture and private desert excursions under the stars.",
  },
];

export default function Tours() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

      if (isDesktop) {
        const totalWidth = sliderRef.current?.scrollWidth || 0;
        const viewportWidth = window.innerWidth;

        const scrollTween = gsap.to(sliderRef.current, {
          x: -(totalWidth - viewportWidth),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${totalWidth}`,
            invalidateOnRefresh: true,
          },
        });

        // Add parallax to each image inside the horizontal scroll
        gsap.utils.toArray(".tour-image").forEach((img: unknown) => {
          const imageElement = img as HTMLElement;
          gsap.fromTo(imageElement, 
            { x: -50 },
            { 
              x: 50,
              ease: "none",
              scrollTrigger: {
                trigger: imageElement.parentElement,
                containerAnimation: scrollTween,
                start: "left right",
                end: "right left",
                scrub: true,
              }
            }
          );
        });
      }
    }, containerRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="bg-sand/20 relative overflow-hidden">
      {/* Fixed Header within the pinned section */}
      <div className="absolute top-20 left-10 lg:left-24 z-30 pointer-events-none">
        <span className="text-gold uppercase tracking-ultra text-[10px] font-bold mb-4 block">
          Past Curations
        </span>
        <h2 className="font-serif text-4xl md:text-7xl text-jade-darkest drop-shadow-sm">
          The Proof of <br />
          <span className="italic font-light">Legacy.</span>
        </h2>
        </div>

        <div 
        ref={sliderRef} 
        className="flex lg:h-screen items-center gap-12 px-6 lg:px-[24vw] py-32 lg:py-0 w-full lg:w-max overflow-x-auto lg:overflow-x-visible no-scrollbar snap-x lg:snap-none"
        >
        {tours.map((tour) => (
          <div 
            key={tour.id} 
            className="group relative w-[85vw] lg:w-[65vw] h-[55vh] lg:h-[70vh] flex-shrink-0 snap-center rounded-[40px] overflow-hidden shadow-2xl shadow-jade/5"
          >
            <div className="relative h-full w-full overflow-hidden scale-110">
              <Image 
                src={tour.img} 
                className="tour-image object-cover transition-transform duration-1000 group-hover:scale-105" 
                alt={tour.title} 
                fill
                sizes="(max-width: 768px) 100vw, 65vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-jade-darkest/80 via-transparent to-transparent opacity-90" />
            
            <div className="absolute bottom-12 left-12 right-12 flex items-end justify-between z-10">
              <div className="max-w-md text-jade-white">
                <span className="text-gold text-xs uppercase tracking-widest font-bold mb-3 block">{tour.loc}</span>
                <h3 className="font-serif text-3xl md:text-5xl mb-4 leading-tight">{tour.title}</h3>
                <p className="text-jade-white/80 font-sans text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 font-medium">
                  {tour.desc}
                </p>
              </div>
              <button className="w-16 h-16 rounded-full bg-jade-white/20 backdrop-blur-md border border-jade-white/30 flex items-center justify-center text-jade-white group-hover:bg-gold group-hover:text-jade-black transition-all duration-500 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowUpRight className="w-6 h-6" />
              </button>
            </div>
            </div>
            ))}

            <div className="flex-shrink-0 w-[80vw] lg:w-[40vw] flex flex-col items-start justify-center px-12 lg:px-24">
            <h2 className="font-serif text-5xl md:text-7xl text-jade-darkest mb-8 leading-[1.1]">Your story <br /><span className="text-gold italic">starts here.</span></h2>
            <button className="text-jade-darkest border-b-2 border-gold/40 pb-2 font-sans tracking-ultra uppercase text-xs font-bold hover:text-gold hover:border-gold transition-all duration-300">
             Begin the Journey
            </button>
            </div>
      </div>
    </section>
  );
}
