"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Calendar, Map, Sparkles, Compass, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  { 
    number: "01", 
    title: "Discovery", 
    desc: "A private consultation to understand your travel aspirations. We listen for the details that elevate a trip into a masterpiece.",
    icon: Calendar,
  },
  { 
    number: "02", 
    title: "Curation", 
    desc: "Our specialists tap into an exclusive global network, designing a tailored narrative that weaves together elite sanctuaries.",
    icon: Map,
  },
  { 
    number: "03", 
    title: "Refinement", 
    desc: "We present the initial canvas and refine every stroke. The itinerary is calibrated to your absolute standard.",
    icon: Sparkles,
  },
  { 
    number: "04", 
    title: "Execution", 
    desc: "You depart into a frictionless reality with our 24/7 dedicated concierge anticipating every variable.",
    icon: Compass,
  },
];

export default function USP() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={containerRef} 
      id="process" 
      className="relative bg-white py-32 overflow-hidden scroll-mt-24"
    >
      {/* Decorative Path Background */}
      <div className="absolute top-1/2 left-0 w-full h-[300px] -translate-y-1/2 opacity-[0.03] pointer-events-none -z-10">
        <svg width="100%" height="100%" viewBox="0 0 1200 300" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,150 C300,50 900,250 1200,150" stroke="currentColor" strokeWidth="40" className="text-primary" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">
            Our Methodology
          </span>
          <h2 className="text-5xl font-serif text-brand-dark mb-6 max-w-[600px]">
            The Path to <span className="italic font-light text-primary">Unforgettable</span> Memories
          </h2>
          <p className="text-gray-500 max-w-[500px] text-lg">
            A meticulous four-step process designed to ensure your journey is as seamless as it is extraordinary.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="relative p-10 rounded-[40px] bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group text-center flex flex-col items-center"
            >
              {/* Step Number Overlay */}
              <div className="absolute top-6 right-8 text-6xl font-serif font-black text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none italic">
                {step.number}
              </div>

              <div className="w-20 h-20 rounded-[28px] bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                <step.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {step.desc}
              </p>

              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20 text-primary/20">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
