"use client";
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Calendar, Map, Sparkles, Compass, ArrowRight } from "lucide-react";

const steps = [
  { 
    number: "01", 
    title: "Discovery Call", 
    desc: "A private consultation to understand your travel aspirations and preferences.",
    icon: Calendar,
    offset: "-y-12"
  },
  { 
    number: "02", 
    title: "Curation", 
    desc: "Experts design a tailored itinerary, selecting the finest destinations for you.",
    icon: Map,
    offset: "y-12"
  },
  { 
    number: "03", 
    title: "Refinement", 
    desc: "Fine-tuning every detail until the journey is perfectly calibrated to your standards.",
    icon: Sparkles,
    offset: "-y-12"
  },
  { 
    number: "04", 
    title: "Seamless Departure", 
    desc: "All logistics secured, you depart with 24/7 expert concierge support.",
    icon: Compass,
    offset: "y-12",
    isCTA: true
  },
];

export default function USP() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section 
      ref={containerRef} 
      id="process" 
      className="relative bg-[#0A1916] py-32 md:py-56 overflow-hidden"
    >
      {/* Cinematic Background Upgrade */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at top, #163C35 0%, #0A1916 100%)"
          }}
        />
        {/* Floating Blurred Shapes */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#6FC3B2]/10 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0], 
            y: [0, 50, 0],
            opacity: [0.05, 0.15, 0.05] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#6FC3B2]/5 blur-[150px] rounded-full"
        />
        {/* Subtle Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-32 md:mb-48 text-center mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#6FC3B2] font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] mb-8 block"
          >
            A Masterclass in Planning
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-8xl text-white leading-[1] tracking-tighter"
          >
            How We Craft Your <br />
            <span className="italic font-light text-[#6FC3B2]">Perfect Journey</span>
          </motion.h2>
        </div>

        {/* The Curved Journey Path (Desktop Only) */}
        <div className="relative">
          {/* Animated Connecting Line */}
          <svg 
            className="hidden lg:block absolute top-1/2 left-0 w-full h-[300px] -translate-y-1/2 z-0 pointer-events-none"
            viewBox="0 0 1200 300" 
            fill="none" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,150 C150,50 300,250 450,150 C600,50 750,250 900,150 C1050,50 1200,150 1200,150" 
              stroke="rgba(111, 195, 178, 0.1)" 
              strokeWidth="2" 
            />
            <motion.path 
              d="M0,150 C150,50 300,250 450,150 C600,50 750,250 900,150 C1050,50 1200,150 1200,150" 
              stroke="#6FC3B2" 
              strokeWidth="2"
              style={{ pathLength }}
              className="drop-shadow-[0_0_8px_rgba(111,195,178,0.5)]"
            />
          </svg>

          {/* Staggered Journey Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, i) => (
              <StepCard key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: any; index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex flex-col items-center lg:items-start text-center lg:text-left
        ${index === 0 ? "lg:mt-0" : ""}
        ${index === 1 ? "lg:mt-24" : ""}
        ${index === 2 ? "lg:-mt-12" : ""}
        ${index === 3 ? "lg:mt-32" : ""}
      `}
    >
      {/* Faint Background Typography (Parallax-ish) */}
      <span className="absolute -top-12 -left-4 font-serif text-[120px] leading-none text-white/[0.03] select-none pointer-events-none group-hover:text-[#6FC3B2]/[0.05] transition-colors duration-700">
        {step.number}
      </span>

      <div className="relative z-10">
        {/* Pulsing Icon Circle */}
        <div className="mb-10 relative">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.1, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-[#6FC3B2] blur-xl"
          />
          <div className="w-20 h-20 rounded-full bg-white/[0.05] border border-white/[0.1] backdrop-blur-xl flex items-center justify-center text-[#6FC3B2] group-hover:bg-[#6FC3B2] group-hover:text-[#0A1916] transition-all duration-700 shadow-2xl group-hover:shadow-[0_0_30px_rgba(111,195,178,0.3)]">
            <step.icon className="w-8 h-8" />
          </div>
        </div>

        {/* Step Content */}
        {step.isCTA ? (
          <div className="flex flex-col items-center lg:items-start group-hover:scale-105 transition-transform duration-700">
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-tight">
              {step.title}
            </h3>
            <p className="text-[#D6E2DF]/50 font-sans text-base mb-10 leading-relaxed max-w-[280px]">
              {step.desc}
            </p>
            <button className="group/btn flex items-center gap-4 px-10 py-5 bg-[#6FC3B2] text-[#0A1916] font-sans text-[10px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-white transition-all duration-500 shadow-2xl shadow-[#6FC3B2]/20">
              Begin Journey
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        ) : (
          <>
            <h3 className="font-serif text-3xl text-white mb-6 group-hover:text-[#6FC3B2] transition-colors duration-500">
              {step.title}
            </h3>
            <p className="text-[#D6E2DF]/40 font-sans text-base leading-relaxed max-w-[280px] group-hover:text-[#D6E2DF]/70 transition-colors duration-500">
              {step.desc}
            </p>
          </>
        )}
      </div>

      {/* Subtle Card Tilt Effect (Micro Interaction) */}
      <div className="absolute inset-0 z-0 pointer-events-none group-hover:bg-white/[0.01] transition-colors duration-700 rounded-[3rem]" />
    </motion.div>
  );
}
