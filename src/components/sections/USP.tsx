"use client";
import { useEffect, useRef } from "react";
import { Calendar, Map, Sparkles, Compass, ArrowRight, Globe } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  { 
    number: "01", 
    title: "Discovery", 
    desc: "A private consultation to understand your travel aspirations. We listen for the details that elevate a trip into a masterpiece.",
    shortDesc: "The First Canvas",
    icon: Calendar,
  },
  { 
    number: "02", 
    title: "Curation", 
    desc: "Our specialists tap into an exclusive global network, designing a tailored narrative that weaves together elite sanctuaries.",
    shortDesc: "Bespoke Orchestration",
    icon: Map,
  },
  { 
    number: "03", 
    title: "Refinement", 
    desc: "We present the initial canvas and refine every stroke. The itinerary is calibrated to your absolute standard.",
    shortDesc: "Artistic Calibration",
    icon: Sparkles,
  },
  { 
    number: "04", 
    title: "Execution", 
    desc: "You depart into a frictionless reality with our 24/7 dedicated concierge anticipating every variable.",
    shortDesc: "Absolute Reality",
    icon: Compass,
  },
];

export default function USP() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline Reveal
      gsap.fromTo(".usp-headline-line", 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".usp-header",
            start: "top 85%",
          }
        }
      );

      // Journey Connector Animation
      gsap.fromTo(".journey-path", 
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".usp-steps-grid",
            start: "top 70%",
          }
        }
      );

      // Step Cards Reveal
      gsap.fromTo(".usp-step-card", 
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.2,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".usp-steps-grid",
            start: "top 75%",
          }
        }
      );

      // Background Parallax
      gsap.to(".usp-bg-glow", {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="process" 
      className="relative bg-white py-16 lg:py-28 overflow-hidden scroll-mt-24"
    >
      {/* Cinematic Background Depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_10%,rgba(56,142,60,0.03),transparent_50%)] pointer-events-none" />
      <div className="usp-bg-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Editorial Header */}
        <div className="usp-header flex flex-col items-center text-center mb-12 lg:mb-20 space-y-8">
          <div className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.6em] text-[10px] lg:text-[11px] mb-4">
            <span className="w-8 h-[1px] bg-primary/30" />
            The Jade Methodology
            <span className="w-8 h-[1px] bg-primary/30" />
          </div>
          <h2 className="text-[36px] md:text-[52px] lg:text-[68px] xl:text-[80px] font-sans font-black text-gray-950 leading-[1] tracking-tightest uppercase max-w-5xl">
            <span className="block usp-headline-line">The Path To</span>
            <span className="block usp-headline-line text-primary italic font-serif font-light lowercase">Unforgettable</span>
            <span className="block usp-headline-line">Stories.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl text-sm lg:text-xl leading-relaxed font-medium tracking-tight px-4 opacity-80">
            A meticulous four-step journey designed to transform your travel dreams into a frictionless reality of absolute luxury.
          </p>
        </div>

        {/* Journey Grid with Connector */}
        <div className="relative">
          {/* Animated Journey Path (Desktop) */}
          <div className="absolute top-[40%] left-0 w-full h-[1px] bg-gray-100 hidden lg:block overflow-hidden">
            <div className="journey-path w-full h-full bg-primary/20 origin-left" />
          </div>

          <div className="usp-steps-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20 lg:mb-32">
            {steps.map((step, i) => (
              <div
                key={i}
                className="usp-step-card relative p-8 lg:p-12 rounded-[40px] lg:rounded-[56px] bg-gray-50/40 backdrop-blur-xl border border-gray-100 shadow-sm hover:bg-white hover:shadow-[0_40px_100px_rgba(56,142,60,0.08)] transition-all duration-1000 group text-center flex flex-col items-center overflow-hidden"
              >
                {/* Background Editorial Number */}
                <span className="absolute -top-6 -right-6 font-serif font-black text-7xl lg:text-[120px] text-gray-950/[0.02] group-hover:text-primary/[0.04] transition-all duration-1000 leading-none tracking-tightest pointer-events-none select-none italic">
                  {step.number}
                </span>

                {/* Step Icon Module */}
                <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-[28px] lg:rounded-[40px] bg-white border border-gray-100 flex items-center justify-center mb-8 lg:mb-12 group-hover:scale-110 group-hover:rotate-12 transition-all duration-1000 shadow-2xl relative z-10 group-hover:bg-primary group-hover:border-primary">
                  <step.icon className="w-8 h-8 lg:w-12 lg:h-12 text-primary group-hover:text-white transition-all duration-1000" />
                </div>

                <div className="space-y-4 relative z-10">
                  <h3 className="text-2xl lg:text-3xl font-sans font-black text-gray-950 tracking-tightest group-hover:text-primary transition-colors duration-700 uppercase leading-none">
                    {step.title}
                  </h3>
                  
                  <div className="relative min-h-[100px] lg:min-h-[120px] w-full flex items-center justify-center">
                    {/* Short Description */}
                    <p className="text-gray-950 font-black text-sm lg:text-base leading-tight transition-all duration-700 group-hover:-translate-y-20 group-hover:opacity-0 uppercase tracking-widest opacity-60">
                      {step.shortDesc}
                    </p>
                    
                    {/* Detailed Content Reveal */}
                    <p className="absolute inset-0 w-full text-gray-500 text-xs lg:text-lg leading-relaxed opacity-0 translate-y-12 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 ease-[0.16,1,0.3,1] flex items-center justify-center text-center font-medium tracking-tight">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Mobile Connector */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-gradient-to-b from-primary/20 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Global CTA */}
        <div className="flex flex-col items-center space-y-12">
          <div className="flex items-center gap-6 opacity-30">
            <Globe className="w-5 h-5" />
            <div className="w-24 h-[1px] bg-gray-950" />
            <Sparkles className="w-5 h-5" />
            <div className="w-24 h-[1px] bg-gray-950" />
            <Compass className="w-5 h-5" />
          </div>

          <div className="relative p-2 bg-gray-50 rounded-[32px] border border-gray-100 shadow-inner">
            <MagneticButton className="px-12 py-6 lg:px-20 lg:py-8 bg-[#050807] hover:bg-primary text-white font-black rounded-[24px] lg:rounded-[32px] flex items-center gap-6 transition-all shadow-3xl group text-xs lg:text-sm uppercase tracking-[0.4em] relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              <span className="relative z-10">Initiate Your Consultation</span>
              <ArrowRight className="w-5 h-5 lg:w-7 lg:h-7 group-hover:translate-x-4 transition-transform duration-700 relative z-10" />
            </MagneticButton>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
             <div className="flex -space-x-2">
                {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />)}
             </div>
             <p className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.3em]">
               Private Curation • Exclusive Network
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
