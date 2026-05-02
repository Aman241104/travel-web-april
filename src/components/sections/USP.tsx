"use client";
import { useEffect, useRef } from "react";
import { Calendar, Map, Sparkles, Compass, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
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
  const stepsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Steps animation
      gsap.fromTo(".usp-step-card", 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".usp-steps-grid",
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );

      // Refresh ScrollTrigger after a short delay
      setTimeout(() => ScrollTrigger.refresh(), 100);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="process" 
      className="relative bg-white py-12 lg:py-24 overflow-hidden scroll-mt-24"
    >
      {/* Visual Depth Elements */}
      <div className="absolute top-0 left-0 w-[600px] lg:w-[1000px] h-[600px] lg:h-[1000px] bg-primary/5 rounded-full blur-[120px] lg:blur-[180px] -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] lg:w-[800px] h-[500px] lg:h-[800px] bg-accent-gold/5 rounded-full blur-[100px] lg:blur-[150px] translate-y-1/2 translate-x-1/4 pointer-events-none" />

      {/* Visual Journey Connector (Desktop) */}
      <div className="absolute top-[58%] left-0 w-full h-px hidden lg:block -translate-y-1/2 px-48 opacity-10 pointer-events-none">
        <div className="w-full h-full border-t-2 border-dotted border-primary" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="usp-header flex flex-col items-center text-center mb-10 lg:mb-16"
        >
          <div className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.4em] text-[9px] lg:text-[10px] mb-4 lg:mb-6">
            <Sparkles className="w-4 h-4 lg:w-5 lg:h-5" />
            Our Methodology
          </div>
          <h2 className="text-[28px] md:text-[36px] lg:text-[48px] xl:text-[56px] font-sans font-black text-gray-950 mb-4 lg:mb-6 leading-[1.1] lg:leading-[0.85] max-w-[800px] tracking-tighter">
            The Path to <br />
            <span className="text-primary italic font-serif font-light drop-shadow-sm">Unforgettable</span> Memories.
          </h2>
          <p className="text-gray-600 max-w-[540px] text-sm lg:text-lg leading-relaxed font-medium tracking-tight px-4">
            A meticulous four-step journey designed to transform your travel dreams into a frictionless reality.
          </p>
        </motion.div>

        {/* Steps Journey */}
        <div ref={stepsGridRef} className="usp-steps-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8 mb-12 lg:mb-20">
          {steps.map((step, i) => (
            <div
              key={i}
              className="usp-step-card relative p-5 lg:p-8 rounded-[24px] lg:rounded-[40px] bg-gray-50/50 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-gray-100 hover:bg-white hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-700 group text-center flex flex-col items-center"
            >
              {/* Rim Light Border */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white rounded-[24px] lg:rounded-[40px] pointer-events-none" />

              {/* Prominent Step Number */}
              <div className="w-10 h-10 lg:w-14 lg:h-14 bg-gray-950 text-white rounded-full flex items-center justify-center text-base lg:text-lg font-sans font-black mb-5 lg:mb-6 shadow-xl group-hover:scale-110 group-hover:bg-primary transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent pointer-events-none" />
                <span className="relative z-10">{step.number}</span>
              </div>

              <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-[16px] lg:rounded-[24px] bg-white border border-gray-100 flex items-center justify-center mb-5 lg:mb-6 group-hover:scale-110 group-hover:border-primary/20 transition-all duration-500 shadow-sm group-hover:shadow-lg">
                <step.icon className="w-6 h-6 lg:w-8 lg:h-8 text-primary transition-transform duration-500" />
              </div>

              <h3 className="text-lg lg:text-xl font-sans font-black text-gray-950 mb-2 lg:mb-3 tracking-tighter group-hover:text-primary transition-colors duration-500 leading-none">
                {step.title}
              </h3>
              
              <div className="relative min-h-[70px] lg:min-h-[90px] w-full flex items-center justify-center overflow-hidden px-2">
                {/* Short Desc - Slides Out */}
                <p className="text-gray-950 font-black text-xs lg:text-sm leading-tight transition-all duration-500 group-hover:-translate-y-16 group-hover:opacity-0 uppercase tracking-tighter">
                  {step.shortDesc}
                </p>
                
                {/* Detailed Desc - Slides In */}
                <p className="absolute inset-0 w-full text-gray-600 text-[9px] lg:text-xs leading-relaxed opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[0.16,1,0.3,1] flex items-center justify-center text-center px-3">
                  {step.desc}
                </p>
              </div>

              {/* Sequential Connector Line (Mobile/Tablet) */}
              {i < steps.length - 1 && (
                <div className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-[1px] h-6 border-l-2 border-dotted border-primary opacity-20" />
              )}
            </div>
          ))}
        </div>

        {/* Confidence CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center text-center"
        >
          <div className="relative p-1.5 bg-white rounded-[20px] shadow-xl border border-gray-100 mb-6 inline-block">
            <Link href="#contact" className="px-8 py-3.5 lg:px-12 lg:py-5 bg-gray-950 hover:bg-primary text-white font-black rounded-[14px] lg:rounded-[20px] flex items-center gap-3 transition-all shadow-xl hover:-translate-y-1 active:translate-y-0 group text-[10px] lg:text-base uppercase tracking-[0.2em] relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10">Start Planning Your Trip</span>
              <ArrowRight className="w-3.5 h-3.5 lg:w-5 lg:h-5 group-hover:translate-x-2 transition-transform duration-500 relative z-10" />
            </Link>
          </div>
          <p className="text-[9px] lg:text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">
            No Commitment • Private Consultation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
