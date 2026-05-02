"use client";
import { motion } from "framer-motion";

const stats = [
  { label: "Happy Travelers", value: "50,000+", sub: "Global clients" },
  { label: "Destinations", value: "120+", sub: "Across 6 continents" },
  { label: "Expert Guides", value: "450+", sub: "Local specialists" },
  { label: "Years Experience", value: "10+", sub: "Industry excellence" },
];

export default function StatsBar() {
  return (
    <section className="relative z-30 py-12 lg:py-20 bg-brand-dark overflow-hidden border-y border-white/5">
      {/* Dynamic Background Polish */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(46,125,50,0.15),transparent)] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[160px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-accent-gold/5 rounded-full blur-[140px] translate-y-1/2 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-12 gap-x-6 lg:gap-x-10 items-center justify-items-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center group cursor-default relative w-full"
            >
              <div className="relative mb-3 lg:mb-5">
                <div className="text-2xl lg:text-[64px] font-serif font-bold text-accent-gold tracking-tighter drop-shadow-[0_10px_30px_rgba(197,160,89,0.2)] group-hover:scale-105 transition-transform duration-700">
                  {stat.value}
                </div>
                {/* Micro-glow behind number */}
                <div className="absolute inset-0 bg-accent-gold/10 blur-3xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>
              
              <div className="flex flex-col items-center gap-1">
                <div className="text-[9px] lg:text-[11px] font-black uppercase tracking-[0.3em] lg:tracking-[0.4em] text-white group-hover:text-primary transition-colors duration-500 leading-tight">
                  {stat.label}
                </div>
                <div className="text-[7px] lg:text-[9px] text-white/30 uppercase tracking-[0.2em] lg:tracking-[0.3em] font-bold group-hover:text-white/50 transition-colors duration-500">
                  {stat.sub}
                </div>
              </div>
              
              {/* Refined Divider (Desktop Only) */}
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
