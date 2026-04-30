"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TravelerSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(handle);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      if (!sectionRef.current || !imageContainerRef.current || !contentRef.current) return;

      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      const textElements = contentRef.current.querySelectorAll(".reveal-text");
      textElements.forEach((el) => {
        gsap.from(el, {
          yPercent: 120,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          }
        });
      });

      gsap.from(".fade-in-element", {
        opacity: 0,
        y: 20,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
        }
      });

      gsap.to(".rotating-stamp", {
        rotate: 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        }
      });
    });

    return () => ctx.revert();
  }, [mounted]);

  if (!mounted) return <section className="h-screen bg-[#0B1310]" />;

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="relative py-24 md:py-40 bg-[#0B1310] overflow-hidden scroll-mt-24"
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 pointer-events-none z-0 opacity-[0.01]">
        <span className="font-serif text-[40vw] leading-none text-[#F2EFE9]">J</span>
      </div>

      <div className="container mx-auto px-6 max-w-[1600px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
          
          <div ref={contentRef} className="w-full lg:w-5/12 flex flex-col justify-center order-2 lg:order-1">
            
            <div className="mb-12 overflow-hidden">
              <span className="reveal-text inline-block text-[#C1A67B] font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">
                The Visionaries
              </span>
            </div>

            <h2 className="font-serif text-5xl md:text-7xl lg:text-[90px] text-[#F2EFE9] leading-[0.95] tracking-tighter mb-16">
              <div className="overflow-hidden pb-4">
                <span className="reveal-text inline-block">Curators of</span>
              </div>
              <div className="overflow-hidden pb-4">
                <span className="reveal-text inline-block italic font-light text-[#C1A67B]">Rare Moments</span>
              </div>
            </h2>
            
            <div className="overflow-hidden mb-16">
              <p className="reveal-text inline-block text-[#F2EFE9]/70 font-sans text-xl lg:text-2xl leading-relaxed">
                Since 2011, Jade Travels has operated at the intersection of extreme discretion and uncompromising luxury. We do not sell trips; we architect time.
              </p>
            </div>

            <div className="fade-in-element flex flex-col sm:flex-row gap-12 sm:gap-24 py-10 border-y border-[#F2EFE9]/10 mb-16">
              <div>
                <h4 className="font-serif text-3xl text-[#F2EFE9] mb-2">Jigar Shah</h4>
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#C1A67B] font-bold">Private Client Advisory</p>
              </div>
              <div>
                <h4 className="font-serif text-3xl text-[#F2EFE9] mb-2">Dhara Patel</h4>
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#C1A67B] font-bold">Curated Journey Design</p>
              </div>
            </div>

            <div className="fade-in-element">
              <MagneticButton className="group relative px-12 py-6 bg-transparent border border-[#F2EFE9]/20 text-[#F2EFE9] font-bold text-[10px] uppercase tracking-[0.3em] rounded-full overflow-hidden transition-all duration-500 hover:border-transparent">
                <span className="relative z-10 flex items-center gap-3 group-hover:text-[#0B1310] transition-colors duration-500">
                  Request an Audience <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-[#0B1310] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </MagneticButton>
            </div>
          </div>

          <div className="w-full lg:w-7/12 order-1 lg:order-2">
            <div className="relative">
              <div 
                ref={imageContainerRef}
                className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl bg-[#0B1310]"
              >
                <Image 
                  ref={imageRef}
                  src="/assets/owner-image.png" 
                  alt="Jigar Shah and Dhara Patel" 
                  fill 
                  className="object-cover scale-125"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[#0B1310]/5 mix-blend-overlay" />
              </div>

              <div className="rotating-stamp absolute -bottom-12 -left-12 md:-bottom-20 md:-left-20 w-48 h-48 md:w-64 md:h-64 z-20 pointer-events-none hidden sm:block">
                <div className="relative w-full h-full">
                  <svg viewBox="0 0 200 200" className="w-full h-full origin-center">
                    <path id="curve" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="transparent" />
                    <text className="font-sans text-[11px] uppercase tracking-[0.4em] font-bold fill-[#F2EFE9]">
                      <textPath href="#curve" startOffset="0%">
                        Established 2011 • Ahmedabad • Global Reach •
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-[#F2EFE9]/10 bg-[#0B1310]/80 backdrop-blur-sm flex items-center justify-center">
                      <span className="font-serif text-2xl md:text-4xl text-[#F2EFE9] italic">J</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
