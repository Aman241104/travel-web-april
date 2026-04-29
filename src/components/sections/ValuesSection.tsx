"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Scale, Globe2, Sparkles, ArrowUpRight } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Exclusively Tailored",
    desc: "Bespoke itineraries crafted for you. Trusted across 500+ curated journeys worldwide.",
    isPrimary: true
  },
  {
    icon: Scale,
    title: "Absolute Transparency",
    desc: "100% price integrity with a fixed fee structure and no hidden costs, ever.",
    isPrimary: false
  },
  {
    icon: Globe2,
    title: "Global Network",
    desc: "Elite portfolio and local experts spanning all seven continents.",
    isPrimary: false
  },
  {
    icon: ShieldCheck,
    title: "Discreet Expertise",
    desc: "Over 15 years of high-profile travel handled with absolute privacy.",
    isPrimary: false
  }
];

export default function ValuesSection() {
  return (
    <section id="values" className="bg-cream py-24 md:py-40 border-b border-onyx/5">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-4xl mb-20 md:mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-teal font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-8 block"
          >
            The Jade Standard
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-8xl text-onyx leading-[1] tracking-tight mb-10"
          >
            Why the World&apos;s Most <br />
            <span className="italic font-light text-brand-teal/80">Discerning Travel with Us</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-onyx/60 font-sans text-xl max-w-2xl leading-relaxed"
          >
            We redefine luxury through personalization, discretion, and unparalleled access.
          </motion.p>
        </div>

        {/* 2x2 Grid with Hierarchy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {values.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`group relative p-12 rounded-[3rem] border transition-all duration-700 ease-in-out cursor-default
                ${item.isPrimary 
                  ? "bg-onyx text-white border-onyx shadow-2xl shadow-onyx/20" 
                  : "bg-white text-onyx border-onyx/5 hover:bg-onyx hover:text-white hover:border-onyx"
                }`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-12 transition-all duration-500
                ${item.isPrimary 
                  ? "bg-white/10 text-brand-teal" 
                  : "bg-brand-teal/10 text-brand-teal group-hover:bg-white/10"
                }`}
              >
                <item.icon className="w-8 h-8" />
              </div>
              
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl mb-6">{item.title}</h3>
                  <p className={`font-sans text-lg leading-relaxed max-w-sm
                    ${item.isPrimary ? "text-white/60" : "text-onyx/60 group-hover:text-white/60"}`}
                  >
                    {item.desc}
                  </p>
                </div>
                
                <div className="mt-12 flex items-center justify-start gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-teal">
                    Core Differentiator
                  </span>
                  <div className="w-8 h-[1px] bg-brand-teal/30" />
                  <ArrowUpRight className={`w-4 h-4 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1
                    ${item.isPrimary ? "text-white/20" : "text-onyx/10 group-hover:text-white/20"}`} 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
