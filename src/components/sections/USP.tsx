"use client";
import { useEffect, useRef } from "react";
import { Calendar, Map, Sparkles, Compass, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";

const steps = [
  { 
    number: "01", 
    title: "Discovery", 
    desc: "A private consultation to understand your travel aspirations. We listen for the details that elevate a trip into a masterpiece.",
    shortDesc: "We understand your travel soul.",
    icon: Calendar,
  },
  { 
    number: "02", 
    title: "Curation", 
    desc: "Our specialists tap into an exclusive global network, designing a tailored narrative that weaves together elite sanctuaries.",
    shortDesc: "Hand-crafted elite itineraries.",
    icon: Map,
  },
  { 
    number: "03", 
    title: "Refinement", 
    desc: "We present the initial canvas and refine every stroke. The itinerary is calibrated to your absolute standard.",
    shortDesc: "Perfected to your standard.",
    icon: Sparkles,
  },
  { 
    number: "04", 
    title: "Execution", 
    desc: "You depart into a frictionless reality with our 24/7 dedicated concierge anticipating every variable.",
    shortDesc: "Frictionless 24/7 reality.",
    icon: Compass,
  },
];

export default function USP() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".usp-header > *", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: ".usp-header",
          start: "top 90%",
        }
      });

      gsap.from(".usp-step-card", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".usp-steps-grid",
          start: "top 85%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="process" 
      className="relative bg-white py-32 lg:py-60 overflow-hidden scroll-mt-24"
    >
      {/* Visual Depth Elements */}
      <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[180px] -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-accent-gold/5 rounded-full blur-[150px] translate-y-1/2 translate-x-1/4 pointer-events-none" />

      {/* Visual Journey Connector (Desktop) */}
      <div className="absolute top-[62%] left-0 w-full h-px hidden lg:block -translate-y-1/2 px-48 opacity-15 pointer-events-none">
        <div className="w-full h-full border-t-4 border-dotted border-primary" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Header */}
        <div className="usp-header flex flex-col items-center text-center mb-40">
          <div className="flex items-center gap-4 text-primary font-black uppercase tracking-[0.5em] text-[11px] mb-8">
            <Sparkles className="w-5 h-5" />
            Our Methodology
          </div>
          <h2 className="text-5xl lg:text-[80px] xl:text-[110px] font-sans font-black text-gray-950 mb-12 leading-[0.85] max-w-[1200px] tracking-tighter">
            The Path to <br />
            <span className="text-primary italic font-serif font-light drop-shadow-sm">Unforgettable</span> Memories.
          </h2>
          <p className="text-gray-600 max-w-[780px] text-xl lg:text-3xl leading-relaxed font-medium tracking-tight">
            A meticulous four-step journey designed to transform your travel dreams into a frictionless reality.
          </p>
        </div>

        {/* Steps Journey */}
        <div className="usp-steps-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14 mb-40">
          {steps.map((step, i) => (
            <div
              key={i}
              className="usp-step-card relative p-12 lg:p-16 rounded-[64px] lg:rounded-[80px] bg-gray-50/50 backdrop-blur-sm shadow-[0_25px_60px_rgba(0,0,0,0.03)] border border-gray-100 hover:bg-white hover:shadow-[0_50px_100px_rgba(0,0,0,0.08)] transition-all duration-1000 group text-center flex flex-col items-center"
            >
              {/* Rim Light Border */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white rounded-[64px] lg:rounded-[80px] pointer-events-none" />

              {/* Prominent Step Number */}
              <div className="w-24 h-24 bg-gray-950 text-white rounded-full flex items-center justify-center text-3xl font-sans font-black mb-14 shadow-2xl group-hover:scale-110 group-hover:bg-primary transition-all duration-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent pointer-events-none" />
                <span className="relative z-10">{step.number}</span>
              </div>

              <div className="w-28 h-28 rounded-[40px] bg-white border border-gray-100 flex items-center justify-center mb-12 group-hover:scale-110 group-hover:border-primary/20 transition-all duration-700 shadow-sm group-hover:shadow-xl">
                <step.icon className="w-12 h-12 text-primary transition-transform duration-700" />
              </div>

              <h3 className="text-4xl font-sans font-black text-gray-950 mb-8 tracking-tighter group-hover:text-primary transition-colors duration-500 leading-none">
                {step.title}
              </h3>
              
              <div className="relative min-h-[140px] w-full flex items-center justify-center overflow-hidden px-4">
                {/* Short Desc - Slides Out */}
                <p className="text-gray-950 font-black text-xl leading-tight transition-all duration-700 group-hover:-translate-y-24 group-hover:opacity-0 uppercase tracking-tighter">
                  {step.shortDesc}
                </p>
                
                {/* Detailed Desc - Slides In */}
                <p className="absolute inset-0 w-full text-gray-600 text-base lg:text-lg leading-relaxed opacity-0 translate-y-16 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 ease-[0.16,1,0.3,1] flex items-center justify-center text-center px-8">
                  {step.desc}
                </p>
              </div>

              {/* Sequential Connector Line (Mobile/Tablet) */}
              {i < steps.length - 1 && (
                <div className="lg:hidden absolute -bottom-12 left-1/2 -translate-x-1/2 w-[2px] h-10 border-l-4 border-dotted border-primary opacity-25" />
              )}
            </div>
          ))}
        </div>

        {/* Confidence CTA */}
        <div className="flex flex-col items-center text-center">
          <div className="relative p-2 bg-white rounded-[40px] shadow-2xl border border-gray-100 mb-12 inline-block">
            <Link href="#contact" className="px-16 py-8 lg:px-24 lg:py-12 bg-gray-950 hover:bg-primary text-white font-black rounded-[32px] lg:rounded-[40px] flex items-center gap-8 transition-all shadow-2xl hover:-translate-y-3 active:translate-y-0 group text-xl lg:text-3xl uppercase tracking-[0.3em] relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10">Start Planning Your Trip</span>
              <ArrowRight className="w-8 h-8 lg:w-10 lg:h-10 group-hover:translate-x-6 transition-transform duration-700 relative z-10" />
            </Link>
          </div>
          <p className="text-sm lg:text-base font-black text-gray-400 uppercase tracking-[0.6em]">
            No Commitment • Private Consultation
          </p>
        </div>
      </div>
    </section>
  );
}
