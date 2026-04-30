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
    <section id="values" className="bg-cream py-24 md:py-40 border-b border-[#F2EFE9]/5">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-4xl mb-20 md:mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#C1A67B] font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-8 block"
          >
            The Jade Standard
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-8xl text-[#F2EFE9] leading-[1] tracking-tight mb-10"
          >
            Why the World&apos;s Most <br />
            <span className="italic font-light text-[#C1A67B]/80">Discerning Travel with Us</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#F2EFE9]/60 font-sans text-xl max-w-2xl leading-relaxed"
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
                  ? "bg-[#0B1310] text-[#F2EFE9] border-[#F2EFE9] shadow-2xl shadow-onyx/20" 
                  : "bg-[#0B1310] text-[#F2EFE9] border-[#F2EFE9]/5 hover:bg-[#0B1310] hover:text-[#F2EFE9] hover:border-[#F2EFE9]"
                }`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-12 transition-all duration-500
                ${item.isPrimary 
                  ? "bg-[#0B1310]/10 text-[#C1A67B]" 
                  : "bg-[#C1A67B]/10 text-[#C1A67B] group-hover:bg-[#0B1310]/10"
                }`}
              >
                <item.icon className="w-8 h-8" />
              </div>
              
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl mb-6">{item.title}</h3>
                  <p className={`font-sans text-lg leading-relaxed max-w-sm
                    ${item.isPrimary ? "text-[#F2EFE9]/60" : "text-[#F2EFE9]/60 group-hover:text-[#F2EFE9]/60"}`}
                  >
                    {item.desc}
                  </p>
                </div>
                
                <div className="mt-12 flex items-center justify-start gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C1A67B]">
                    Core Differentiator
                  </span>
                  <div className="w-8 h-[1px] bg-[#C1A67B]/30" />
                  <ArrowUpRight className={`w-4 h-4 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1
                    ${item.isPrimary ? "text-[#F2EFE9]/20" : "text-[#F2EFE9]/10 group-hover:text-[#F2EFE9]/20"}`} 
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
