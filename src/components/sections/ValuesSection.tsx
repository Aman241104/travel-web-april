"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Sparkles, Shield, Globe, Scale, ArrowUpRight } from "lucide-react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const values = [
  {
    id: "01",
    title: "Intentional Curation",
    desc: "We architect life-changing experiences tailored to your personal rhythm and vision.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Uncompromising Integrity",
    desc: "Fixed fee structures with zero hidden commissions. Integrity is our ultimate luxury.",
    icon: Scale,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Global Access",
    desc: "An elite portfolio of local experts and hidden sanctuaries spanning all seven continents.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Silent Discretion",
    desc: "Serving the world's most discerning travelers with absolute privacy and white-glove care.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1506929559444-44b1c7357ad2?q=80&w=1200&auto=format&fit=crop",
  }
];

export default function ValuesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      if (!containerRef.current || !sectionRef.current || !pinWrapperRef.current) return;

      const scrollEl = containerRef.current;
      const totalWidth = scrollEl.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = totalWidth - viewportWidth;

      gsap.to(scrollEl, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: pinWrapperRef.current, // Pin the inner wrapper
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });

      // Background Text Parallax
      gsap.to(".values-bg-text", {
        x: -200,
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
  }, [mounted]);

  if (!mounted) return <section className="h-screen bg-[#0B1310]" />;

  return (
    <section 
      id="values"
      ref={sectionRef} 
      className="relative bg-[#0B1310] scroll-mt-24"
    >
      <div ref={pinWrapperRef} className="h-screen w-full overflow-hidden flex items-center">
        {/* Texture Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Massive Background Decorative Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="values-bg-text font-serif text-[35vw] text-[#F2EFE9]/[0.01] leading-none whitespace-nowrap uppercase italic font-black">
            EXPERIENCE • ELITE • VISION
          </h2>
        </div>

        {/* Floating Header */}
        <div className="absolute top-24 left-12 lg:left-24 z-20">
          <span className="text-[#C1A67B] font-sans text-[10px] font-bold uppercase tracking-[0.6em] mb-4 block">
            The Jade Standard
          </span>
          <h2 className="font-serif text-5xl lg:text-7xl text-[#F2EFE9] tracking-tighter">Our Philosophy</h2>
        </div>

        {/* Horizontal Container */}
        <div 
          ref={containerRef} 
          className="flex h-full items-center px-[15vw] gap-[20vw]"
        >
          {values.map((item) => (
            <div 
              key={item.id}
              className="relative flex-shrink-0 w-[70vw] lg:w-[50vw] h-[50vh] flex items-center gap-12 lg:gap-20 group"
            >
              {/* Content Side */}
              <div className="relative z-10 w-full lg:w-1/2">
                <div className="flex items-center gap-6 mb-10">
                  <span className="font-serif text-5xl text-[#F2EFE9]/10 leading-none">{item.id}</span>
                  <div className="h-[1px] w-12 bg-[#C1A67B]/30" />
                  <span className="text-[#C1A67B] text-[10px] font-bold uppercase tracking-[0.4em]">
                    Principle
                  </span>
                </div>
                <h3 className="font-serif text-5xl lg:text-6xl text-[#F2EFE9] mb-8 leading-[1.1] tracking-tight group-hover:text-[#C1A67B] transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="font-sans text-[#F2EFE9]/40 text-lg leading-relaxed mb-12 max-w-sm">
                  {item.desc}
                </p>
                <button className="flex items-center gap-6 text-[#F2EFE9] group/btn">
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em] group-hover/btn:text-[#C1A67B] transition-colors">Learn More</span>
                  <div className="w-12 h-12 rounded-full border border-[#F5F2ED]/10 flex items-center justify-center group-hover/btn:border-[#C1A67B] transition-all duration-500">
                    <ArrowUpRight className="w-4 h-4 text-[#F2EFE9] group-hover/btn:text-[#C1A67B]" />
                  </div>
                </button>
              </div>

              {/* Visual Side */}
              <div className="relative hidden lg:block w-1/2 h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2421]/60 to-transparent" />
              </div>
            </div>
          ))}

          {/* Closing Spread */}
          <div className="flex-shrink-0 w-[40vw] flex flex-col justify-center pr-24">
            <h4 className="font-serif text-[#F2EFE9] text-6xl lg:text-8xl leading-none tracking-tighter mb-10">
              Your vision, <br />
              <span className="italic font-light text-[#C1A67B]">our canvas.</span>
            </h4>
            <p className="text-[#F2EFE9]/30 font-sans text-lg max-w-xs mb-12 leading-relaxed">
              Every masterpiece starts with a single, intentional conversation.
            </p>
            <button className="px-12 py-6 bg-[#C1A67B] text-[#0B1310] font-bold text-[10px] uppercase tracking-[0.4em] rounded-full hover:bg-[#0B1310] transition-all duration-500 shadow-2xl shadow-[#C1A67B]/10">
              Begin Your Experience
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
