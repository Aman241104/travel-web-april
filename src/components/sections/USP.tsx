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
      className="relative bg-[#F9FAFB] py-32 overflow-hidden scroll-mt-24"
    >
      {/* Visual Journey Connector (Desktop) */}
      <div className="absolute top-1/2 left-0 w-full h-1 hidden lg:block -translate-y-1/2 px-20 opacity-10 pointer-events-none">
        <div className="w-full h-full border-t-4 border-dashed border-primary" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.4em] text-xs mb-6">
            <Sparkles className="w-4 h-4" />
            Our Methodology
          </div>
          <h2 className="text-5xl lg:text-7xl font-serif text-brand-dark mb-8 leading-tight max-w-[900px]">
            The Path to <span className="italic font-light text-primary">Unforgettable</span> Memories.
          </h2>
          <p className="text-gray-500 max-w-[600px] text-xl leading-relaxed">
            A meticulous four-step journey designed to transform your travel dreams into a frictionless reality.
          </p>
        </div>

        {/* Steps Journey */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1, ease: "easeOut" }}
              className="relative p-12 rounded-[48px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_50px_100px_rgba(0,0,0,0.1)] transition-all duration-700 group text-center flex flex-col items-center"
            >
              {/* Prominent Step Number */}
              <div className="w-20 h-20 bg-brand-dark text-accent-gold rounded-full flex items-center justify-center text-3xl font-serif font-bold mb-10 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 border-4 border-white">
                {step.number}
              </div>

              <div className="w-24 h-24 rounded-[32px] bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-sm">
                <step.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-700" />
              </div>

              <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-primary transition-colors duration-500">
                {step.title}
              </h3>
              
              <div className="relative mb-6 min-h-[60px] flex items-center justify-center">
                <p className="text-brand-dark font-bold text-lg leading-tight group-hover:opacity-0 transition-opacity duration-300">
                  {step.shortDesc}
                </p>
                <p className="absolute inset-0 w-full text-gray-500 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-2 flex items-center justify-center">
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
