"use client";
import { motion } from "framer-motion";
import { Heart, Shield, Zap, Sparkles } from "lucide-react";
import Image from "next/image";

import Link from "next/link";

const benefits = [
  { 
    title: "Zero Surprises Pricing", 
    desc: "What you see is exactly what you pay. No hidden fees, no last-minute adjustments. Just total transparency.", 
    icon: Shield 
  },
  { 
    title: "Master-Crafted Itineraries", 
    desc: "Our specialists don't just book hotels; they weave together unique narratives tailored to your absolute standard.", 
    icon: Heart 
  },
  { 
    title: "Frictionless Reality", 
    desc: "A dedicated concierge anticipates every variable, ensuring you stay in the moment while we handle the logistics.", 
    icon: Zap 
  },
];

export default function ValuesSection() {
  return (
    <section className="py-32 bg-white overflow-hidden relative border-t border-gray-100">
      {/* Bright Background Texture */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_20%,rgba(56,142,60,0.03),transparent_70%)] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-28 lg:gap-32">
          
          {/* Content Side - Bright Typography */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-10">
                <Sparkles className="w-4 h-4" />
                The Jade Distinction
              </div>
              <h2 className="text-[52px] lg:text-[76px] font-sans font-black text-gray-900 leading-[1.05] mb-14 tracking-tighter">
                Travel Without <br />
                <span className="text-primary italic font-serif font-light drop-shadow-sm">Stress.</span> We Handle <br />
                Everything.
              </h2>

              <div className="space-y-14">
                {benefits.map((benefit, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    className="flex gap-10 group"
                  >
                    <div className="w-20 h-20 rounded-[28px] bg-gray-50 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-[0_10px_30px_rgba(0,0,0,0.03)] group-hover:shadow-[0_20px_50px_rgba(56,142,60,0.2)] group-hover:-translate-y-2 transform group-hover:rotate-6 border border-gray-100">
                      <benefit.icon className="w-9 h-9" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-2xl lg:text-3xl text-gray-900 mb-4 group-hover:text-primary transition-colors duration-500 tracking-tight">{benefit.title}</h3>
                      <p className="text-gray-500 leading-relaxed max-w-[440px] text-lg font-medium tracking-tight">
                        {benefit.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-20 flex flex-wrap items-center gap-10">
                <Link 
                  href="#contact" 
                  className="px-14 py-7 bg-primary text-white font-black rounded-full transition-all shadow-[0_20px_40px_rgba(56,142,60,0.3)] hover:bg-primary-dark hover:-translate-y-2 active:translate-y-0 text-[13px] uppercase tracking-widest relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10">Plan Your Trip</span>
                </Link>
                <Link 
                  href="#process" 
                  className="text-gray-900 font-black uppercase tracking-[0.3em] text-[11px] hover:text-primary transition-all flex items-center gap-4 group"
                >
                  Explore Our Process
                  <div className="w-12 h-[2px] bg-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Image Side - Bright Collage */}
          <div className="w-full lg:w-1/2 relative h-[800px] flex items-center justify-center">
            {/* Background soft glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] -z-10 animate-pulse" />

            {/* Santorini Polaroid */}
            <motion.div 
              initial={{ opacity: 0, rotate: -12, x: -40, y: 40 }}
              whileInView={{ opacity: 1, rotate: -12, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ rotate: -8, scale: 1.08, zIndex: 40, y: -20 }}
              className="absolute top-0 left-0 lg:-left-20 w-[340px] bg-white p-5 pb-24 shadow-[0_40px_80px_rgba(0,0,0,0.08)] border border-gray-100 cursor-pointer transition-all duration-700 ease-out"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 rounded-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1200&auto=format&fit=crop" 
                  alt="Tour" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <p className="mt-8 text-center text-gray-900 font-serif italic text-3xl tracking-tighter opacity-90">Santorini, Greece</p>
              <div className="absolute top-10 right-10 w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
            </motion.div>

            {/* Maldives Polaroid */}
            <motion.div 
              initial={{ opacity: 0, rotate: 8, x: 60, y: 80 }}
              whileInView={{ opacity: 1, rotate: 8, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ rotate: 4, scale: 1.05, zIndex: 40, y: -10 }}
              className="absolute bottom-10 right-0 lg:-right-10 w-[420px] bg-white p-6 pb-28 shadow-[0_50px_100px_rgba(0,0,0,0.12)] border border-gray-100 cursor-pointer transition-all duration-700 ease-out"
            >
              <div className="relative w-full aspect-square overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 rounded-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop" 
                  alt="Tour" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <p className="mt-10 text-center text-gray-900 font-serif italic text-4xl tracking-tighter opacity-90">The Maldives</p>
            </motion.div>

            {/* Primary Seal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: "spring", bounce: 0.4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary rounded-full border-[10px] border-white shadow-[0_20px_50px_rgba(56,142,60,0.4)] z-30 flex items-center justify-center transform hover:rotate-[360deg] transition-transform duration-1000"
            >
              <div className="text-center text-white">
                <div className="text-3xl font-black leading-none">100%</div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em]">Bespoke</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
