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
    <section className="relative z-30 py-24 bg-brand-dark overflow-hidden">
      <div className="absolute inset-0 bg-brand-dark pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
      {/* Decorative background accent */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] -translate-y-1/2" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 md:gap-x-12 items-center justify-items-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-serif font-bold text-accent-gold mb-3 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-white/90 mb-1">
                {stat.label}
              </div>
              <div className="text-[10px] text-white/40 uppercase tracking-widest font-medium">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
