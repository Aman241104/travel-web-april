"use client";
import { motion } from "framer-motion";
import { Heart, Shield, Zap } from "lucide-react";
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
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          
          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs mb-8 block">
                The Jade Distinction
              </span>
              <h2 className="text-6xl lg:text-7xl font-serif text-brand-dark leading-[1.05] mb-12">
                Travel Without <br />
                <span className="italic font-light text-primary">Stress.</span> We Handle <br />
                Everything.
              </h2>

              <div className="space-y-12">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-16 h-16 rounded-[22px] bg-gray-50 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-primary/20 group-hover:-translate-y-1">
                      <benefit.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl text-brand-dark mb-3 group-hover:text-primary transition-colors">{benefit.title}</h3>
                      <p className="text-gray-500 leading-relaxed max-w-[420px] text-lg">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 flex flex-wrap items-center gap-8">
                <Link href="#contact" className="px-12 py-6 bg-brand-dark hover:bg-primary text-white font-bold rounded-2xl transition-all shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 active:translate-y-0 text-lg block">
                  Plan Your Trip
                </Link>
                <Link href="#process" className="text-brand-dark font-bold uppercase tracking-widest text-xs hover:text-primary transition-colors flex items-center gap-2 group">
                  Explore Our Process
                  <div className="w-8 h-px bg-brand-dark group-hover:w-12 group-hover:bg-primary transition-all" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Image Side - Enhanced Collage Style */}
          <div className="w-full lg:w-1/2 relative h-[700px]">
            {/* Background decorative element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <motion.div 
              initial={{ opacity: 0, rotate: -8, y: 40 }}
              whileInView={{ opacity: 1, rotate: -8, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ rotate: -4, scale: 1.05, zIndex: 30 }}
              className="absolute top-0 left-0 lg:-left-16 w-[320px] bg-white p-4 pb-20 shadow-[0_40px_80px_rgba(0,0,0,0.15)] rounded-sm cursor-pointer transition-all duration-500"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm mb-6">
                <Image 
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1200&auto=format&fit=crop" 
                  alt="Tour" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <p className="text-center text-brand-dark font-serif italic text-2xl tracking-tight">Santorini, Greece</p>
              <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, rotate: 6, x: 60, y: 20 }}
              whileInView={{ opacity: 1, rotate: 6, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              whileHover={{ rotate: 2, scale: 1.05, zIndex: 30 }}
              className="absolute bottom-10 right-0 lg:-right-10 w-[360px] bg-white p-5 pb-24 shadow-[0_50px_100px_rgba(0,0,0,0.18)] rounded-sm cursor-pointer transition-all duration-500"
            >
              <div className="relative w-full aspect-square overflow-hidden rounded-sm mb-8">
                <Image 
                  src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop" 
                  alt="Tour" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <p className="text-center text-brand-dark font-serif italic text-3xl tracking-tight">The Maldives</p>
            </motion.div>

            {/* Small accent image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent-gold rounded-full border-8 border-white shadow-2xl z-20 flex items-center justify-center"
            >
              <div className="text-center text-white">
                <div className="text-2xl font-bold leading-none">100%</div>
                <div className="text-[8px] font-black uppercase tracking-widest">Safe</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
