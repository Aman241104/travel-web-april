"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Sparkles, Shield, Globe, Scale, ArrowRight } from "lucide-react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const values = [
  {
    id: "01",
    title: "Exclusively Tailored",
    desc: "We architect life-changing experiences tailored to your personal rhythm.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop",
    color: "#0F2F2A"
  },
  {
    id: "02",
    title: "Absolute Transparency",
    desc: "Integrity is our luxury. Fixed fee structures with zero hidden commissions.",
    icon: Scale,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    color: "#1C3B34"
  },
  {
    id: "03",
    title: "Global Network",
    desc: "Elite portfolio of local experts spanning all seven continents.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop",
    color: "#0A1916"
  },
  {
    id: "04",
    title: "Discreet Expertise",
    desc: "15+ years of serving the world's most discerning travelers with absolute privacy.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1506929559444-44b1c7357ad2?q=80&w=1200&auto=format&fit=crop",
    color: "#05100E"
  }
];

export default function ValuesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !sectionRef.current || !pinRef.current) return;

      const scrollEl = containerRef.current;
      const totalWidth = scrollEl.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = totalWidth - viewportWidth;

      // Horizontal Scroll Animation
      gsap.to(scrollEl, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          id: "values-scroll",
          trigger: sectionRef.current,
          pin: true,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        }
      });

      // Parallax for Background Text
      gsap.to(".bg-text-parallax", {
        x: -150,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="values"
      ref={sectionRef} 
      className="relative bg-[#0F2F2A] overflow-hidden scroll-mt-24"
    >
      <div ref={pinRef} className="relative h-screen w-full overflow-hidden">
        {/* Massive Background Decorative Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="bg-text-parallax font-serif text-[40vw] text-white/[0.02] leading-none whitespace-nowrap uppercase italic font-black">
          PHILO • SOPHY
        </h2>
      </div>

      {/* Floating Header */}
      <div className="absolute top-20 left-20 z-20">
        <span className="text-brand-teal font-sans text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">
          The Jade Standard
        </span>
        <h2 className="font-serif text-5xl text-white">Our Core Principles</h2>
      </div>

      {/* Horizontal Container */}
      <div 
        ref={containerRef} 
        className="flex h-full items-center px-[20vw] gap-[15vw]"
      >
        {values.map((item) => (
          <div 
            key={item.id}
            className="value-card relative flex-shrink-0 w-[60vw] h-[60vh] flex items-center gap-20 group"
          >
            {/* Numbering */}
            <div className="absolute -top-20 -left-20">
              <span className="font-serif text-[180px] text-white/[0.05] leading-none">{item.id}</span>
            </div>

            {/* Content Box */}
            <div className="relative z-10 w-1/2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                  <item.icon className="w-4 h-4" />
                </div>
                <span className="text-[#6FC3B2] text-[10px] font-bold uppercase tracking-[0.3em]">
                  Principle {item.id}
                </span>
              </div>
              <h3 className="font-serif text-6xl text-white mb-8 leading-tight group-hover:text-brand-teal transition-colors duration-500">
                {item.title}
              </h3>
              <p className="font-sans text-white/50 text-xl leading-relaxed mb-10 max-w-sm">
                {item.desc}
              </p>
              <button className="flex items-center gap-4 text-white group/btn">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Learn More</span>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-onyx transition-all duration-500">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>

            {/* Visual Side */}
            <div className="relative w-1/2 h-full rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="card-image absolute inset-0">
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 to-transparent" />
            </div>
          </div>
        ))}

        {/* Closing Spread */}
        <div className="flex-shrink-0 w-[40vw] flex flex-col justify-center pr-20">
          <h4 className="font-serif text-white text-7xl leading-tight mb-8">
            Ready to <br />
            <span className="italic font-light text-brand-teal">Begin?</span>
          </h4>
          <p className="text-white/40 font-sans text-lg max-w-xs mb-12">
            Every masterpiece starts with a single, intentional conversation.
          </p>
          <button className="w-full py-6 bg-brand-teal text-onyx font-bold text-xs uppercase tracking-[0.4em] rounded-full hover:scale-105 transition-transform duration-500 shadow-2xl shadow-brand-teal/20">
            Start Your Experience
          </button>
        </div>
      </div>

      {/* Side Decorative Progress Bar */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-10">
        <span className="text-white/20 text-[9px] font-bold uppercase tracking-widest">01</span>
        <div className="w-40 h-[1px] bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-brand-teal w-1/4" /> {/* This would be dynamic in real impl */}
        </div>
        <span className="text-white/20 text-[9px] font-bold uppercase tracking-widest">04</span>
      </div>
      </div>
    </section>
  );
}
