"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Calendar, Map, Sparkles, Compass, ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  { 
    number: "01", 
    title: "The Discovery", 
    desc: "A private consultation to understand the nuanced architecture of your travel aspirations. We listen for the unspoken preferences that elevate a trip into a masterpiece.",
    icon: Calendar,
  },
  { 
    number: "02", 
    title: "Bespoke Curation", 
    desc: "Our specialists tap into an exclusive global network, designing a tailored narrative that weaves together elite sanctuaries, private access, and impossible logistics.",
    icon: Map,
  },
  { 
    number: "03", 
    title: "Masterful Refinement", 
    desc: "We present the initial canvas and refine every stroke. From securing specific tarmac slots to dietary perfection, the itinerary is calibrated to your absolute standard.",
    icon: Sparkles,
  },
  { 
    number: "04", 
    title: "Invisible Execution", 
    desc: "You depart into a frictionless reality. With our 24/7 dedicated concierge anticipating every variable, your only requirement is to experience the extraordinary.",
    icon: Compass,
    isCTA: true
  },
];

export default function USP() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.from(".usp-title span", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });

      // Timeline Line Animation
      gsap.from(".timeline-progress", {
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 50%",
          end: "bottom 80%",
          scrub: true,
        }
      });

      // Individual Step Animations
      const stepItems = gsap.utils.toArray(".usp-step") as HTMLElement[];
      stepItems.forEach((step, i) => {
        const content = step.querySelector(".step-content");
        const number = step.querySelector(".step-bg-number");
        const dot = step.querySelector(".step-dot");

        gsap.from(content, {
          y: 50,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 75%",
          }
        });

        gsap.from(number, {
          x: i % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
          }
        });

        // Dot pulsing
        gsap.to(dot, {
          scale: 1.5,
          opacity: 0,
          duration: 1.5,
          repeat: -1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: step,
            start: "top center",
            toggleActions: "play pause resume pause"
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="process" 
      className="relative bg-[#0B1310] py-10 md:py-48 overflow-hidden scroll-mt-24"
    >
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-48">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-[#0B1310]/20" />
            <span className="text-[#F2EFE9] font-sans text-[10px] font-bold uppercase tracking-[0.5em]">
              The Jade Methodology
            </span>
            <div className="w-12 h-[1px] bg-[#0B1310]/20" />
          </div>
          
          <h2 className="usp-title font-serif text-6xl md:text-[100px] lg:text-[120px] text-[#F2EFE9] leading-[0.9] tracking-tightest">
            <span className="block overflow-hidden pb-4">Architecting</span>
            <span className="block overflow-hidden italic font-light text-[#C1A67B]">The Impossible</span>
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="timeline-container relative max-w-5xl mx-auto">
          
          {/* Central Progress Line */}
          <div className="absolute top-0 left-[20px] md:left-1/2 md:-translate-x-1/2 w-[1px] h-full bg-[#0B1310]/10">
            <div className="timeline-progress absolute top-0 left-0 w-full h-full bg-[#C1A67B]" />
          </div>

          <div className="space-y-16 md:space-y-56">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className={`usp-step relative flex flex-col md:flex-row items-start ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                } gap-12 md:gap-24`}
              >
                
                {/* Background Parallax Number */}
                <div className={`absolute top-0 md:-top-20 z-0 pointer-events-none opacity-[0.03] text-[#F2EFE9] font-serif text-[150px] md:text-[300px] leading-none step-bg-number
                  ${i % 2 === 0 ? "left-12 md:left-[-100px]" : "right-12 md:right-[-100px]"}
                `}>
                  {step.number}
                </div>

                {/* Empty Space for Grid Alignment on Desktop */}
                <div className="hidden md:block md:w-1/2" />

                {/* Center Node (Icon) */}
                <div className="absolute left-0 md:left-1/2 top-0 -translate-x-[2px] md:-translate-x-1/2 z-20 flex items-center justify-center mt-2 md:mt-0">
                  <div className="relative flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#0B1310] border border-[#F2EFE9]/20 flex items-center justify-center relative z-10 shadow-lg">
                      <step.icon className="w-4 h-4 text-[#F2EFE9]" />
                    </div>
                    {/* Pulsing indicator */}
                    <div className="step-dot absolute inset-0 rounded-full border border-[#C1A67B] z-0" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="md:w-1/2 pl-16 md:pl-0 relative z-10 step-content">
                  <div className={`flex flex-col ${i % 2 !== 0 ? "md:items-end md:text-right" : "md:items-start text-left"}`}>
                    
                    <span className="text-[#C1A67B] font-sans text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">
                      Phase {step.number}
                    </span>
                    
                    <h3 className="font-serif text-4xl md:text-5xl text-[#F2EFE9] mb-8 leading-tight">
                      {step.title}
                    </h3>
                    
                    <p className={`font-sans text-[#F2EFE9]/60 text-lg md:text-xl leading-relaxed max-w-md ${
                      i % 2 !== 0 ? "md:ml-auto" : ""
                    }`}>
                      {step.desc}
                    </p>

                    {step.isCTA && (
                      <div className="mt-12">
                        <MagneticButton className="group relative px-12 py-6 bg-[#0B1310] text-[#F2EFE9] font-bold text-[10px] uppercase tracking-[0.3em] rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.02] shadow-2xl">
                          <span className="relative z-10 flex items-center gap-3">
                            Initiate Phase 01 <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </span>
                          <div className="absolute inset-0 bg-[#C1A67B] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </MagneticButton>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
