"use client";
import { motion } from "framer-motion";

const steps = [
  { 
    number: "01", 
    title: "Discovery Call", 
    desc: "We begin with a private consultation to understand your travel aspirations, preferences, and non-negotiables." 
  },
  { 
    number: "02", 
    title: "Curation", 
    desc: "Our experts design a tailored itinerary, selecting the finest destinations and accommodations that align with your vision." 
  },
  { 
    number: "03", 
    title: "Refinement", 
    desc: "We review the proposal together, fine-tuning every detail until the journey is perfectly calibrated to your standards." 
  },
  { 
    number: "04", 
    title: "Seamless Departure", 
    desc: "With all logistics, visas, and reservations secured, you depart with total peace of mind and 24/7 support." 
  },
];

export default function USP() {
  return (
    <section id="process" className="bg-onyx py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          <div className="md:w-1/3">
            <span className="text-brand-teal font-sans text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Our Process
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight mb-8">
              How We Craft Your <br />
              <span className="italic font-light text-brand-teal">Perfect Journey</span>
            </h2>
            <p className="text-white/60 font-sans text-lg leading-relaxed">
              Experience a streamlined, high-touch planning process designed for the modern discerning traveler.
            </p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="relative"
              >
                <span className="font-serif text-6xl text-white/5 absolute -top-8 -left-4 select-none">
                  {step.number}
                </span>
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl text-white mb-4">{step.title}</h3>
                  <p className="text-white/60 font-sans text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
