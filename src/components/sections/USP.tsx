"use client";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles, Map, Compass } from "lucide-react";

const steps = [
  { 
    number: "01", 
    title: "Discovery Call", 
    desc: "A private consultation to understand your travel aspirations and preferences.",
    icon: Calendar 
  },
  { 
    number: "02", 
    title: "Curation", 
    desc: "Experts design a tailored itinerary, selecting the finest destinations for you.",
    icon: Map 
  },
  { 
    number: "03", 
    title: "Refinement", 
    desc: "Fine-tuning every detail until the journey is perfectly calibrated to your standards.",
    icon: Sparkles 
  },
  { 
    number: "04", 
    title: "Seamless Departure", 
    desc: "All logistics secured, you depart with 24/7 expert concierge support.",
    icon: Compass 
  },
];

export default function USP() {
  return (
    <section id="process" className="bg-onyx py-24 md:py-40 relative overflow-hidden">
      {/* Background Aesthetic */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-teal/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-24 md:mb-32">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-brand-teal font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-6 block"
          >
            Our Process
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-7xl text-white leading-[1.1] tracking-tight mb-8"
          >
            How We Craft Your <br />
            <span className="italic font-light text-brand-teal/80">Perfect Journey</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 font-sans text-xl max-w-xl leading-relaxed"
          >
            A high-touch planning process designed for the modern discerning traveler.
          </motion.p>
        </div>

        {/* Guided Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-32">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative"
            >
              {/* Vertical Path Line (Desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-[1px] bg-white/10 z-0" />
              )}
              
              <div className="relative z-10">
                <div className="mb-10 flex items-center justify-between lg:justify-start lg:gap-6">
                  <span className="font-serif text-5xl md:text-6xl text-brand-teal/20 group-hover:text-brand-teal transition-colors duration-500">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-teal">
                    <step.icon className="w-5 h-5" />
                  </div>
                </div>
                
                <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-brand-teal transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-white/40 font-sans text-base leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between p-10 md:p-16 rounded-[3rem] bg-white/5 border border-white/10"
        >
          <div className="mb-10 md:mb-0">
            <h4 className="font-serif text-3xl md:text-4xl text-white mb-4">Begin Your Journey Today</h4>
            <p className="text-white/40 font-sans text-lg">Connect with our designers for a private consultation.</p>
          </div>
          <button className="group px-12 py-5 bg-brand-teal text-white font-sans text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-onyx transition-all duration-500 flex items-center gap-4">
            Book a Consultation
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
