"use client";
import { useRef } from "react";
import { Calendar, Map, Sparkles, Compass, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

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

  return (
    <section 
      ref={containerRef} 
      id="process" 
      className="relative bg-white py-32 lg:py-48 overflow-hidden scroll-mt-24"
    >
      {/* Visual Depth Elements */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-gold/5 rounded-full blur-[100px] translate-y-1/2 translate-x-1/4 pointer-events-none" />

      {/* Visual Journey Connector (Desktop) */}
      <div className="absolute top-[62%] left-0 w-full h-px hidden lg:block -translate-y-1/2 px-40 opacity-10 pointer-events-none">
        <div className="w-full h-full border-t-2 border-dashed border-primary" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8"
          >
            <Sparkles className="w-4 h-4" />
            Our Methodology
          </motion.div>
          <h2 className="text-6xl lg:text-[88px] font-sans font-black text-gray-900 mb-10 leading-[0.95] max-w-[1000px] tracking-tighter">
            The Path to <span className="text-primary italic font-serif font-light drop-shadow-sm">Unforgettable</span> Memories.
          </h2>
          <p className="text-gray-500 max-w-[640px] text-xl leading-relaxed font-medium tracking-tight">
            A meticulous four-step journey designed to transform your travel dreams into a frictionless reality.
          </p>
        </div>

        {/* Steps Journey */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-32">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-12 rounded-[56px] bg-gray-50/50 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 hover:bg-white hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all duration-700 group text-center flex flex-col items-center"
            >
              {/* Rim Light Border */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white rounded-[56px] pointer-events-none" />

              {/* Prominent Step Number */}
              <div className="w-20 h-20 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-sans font-black mb-12 shadow-2xl group-hover:scale-110 group-hover:bg-primary transition-all duration-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
                <span className="relative z-10">{step.number}</span>
              </div>

              <div className="w-24 h-24 rounded-[32px] bg-white border border-gray-100 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:border-primary/20 transition-all duration-700 shadow-sm">
                <step.icon className="w-10 h-10 text-primary transition-transform duration-700" />
              </div>

              <h3 className="text-3xl font-sans font-black text-gray-900 mb-6 tracking-tighter group-hover:text-primary transition-colors duration-500">
                {step.title}
              </h3>
              
              <div className="relative min-h-[100px] w-full flex items-center justify-center overflow-hidden px-4">
                {/* Short Desc - Slides Out */}
                <p className="text-gray-900 font-bold text-lg leading-tight transition-all duration-500 group-hover:-translate-y-20 group-hover:opacity-0">
                  {step.shortDesc}
                </p>
                
                {/* Detailed Desc - Slides In */}
                <p className="absolute inset-0 w-full text-gray-500 text-sm leading-relaxed opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[0.16,1,0.3,1] flex items-center justify-center text-center px-6">
                  {step.desc}
                </p>
              </div>

              {/* Sequential Connector Line (Mobile/Tablet) */}
              {i < steps.length - 1 && (
                <div className="lg:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 w-1 h-8 border-l-2 border-dashed border-primary opacity-20" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Confidence CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <div className="relative p-1 bg-white rounded-3xl shadow-2xl border border-gray-100 mb-8 inline-block">
            <Link href="#contact" className="px-14 py-7 bg-brand-dark hover:bg-primary text-white font-bold rounded-[22px] flex items-center gap-4 transition-all shadow-xl hover:-translate-y-2 active:translate-y-0 group text-xl">
              Start Planning Your Trip
              <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
            </Link>
          </div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.4em]">
            No Commitment • Private Consultation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
