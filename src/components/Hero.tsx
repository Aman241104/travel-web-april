"use client";
import { motion } from "framer-motion";
import BookingWidget from "@/components/ui/BookingWidget";
import { ArrowRight, Play, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const trustBadges = [
  { label: "100% Secure Payments", icon: ShieldCheck },
  { label: "Flexible Itineraries", icon: CheckCircle2 },
  { label: "Expert Local Support", icon: Clock },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-center overflow-hidden bg-brand-dark">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 1, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <Image 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" 
            alt="Travel Background"
            fill
            className="object-cover object-center opacity-40"
            priority
          />
        </motion.div>
        
        {/* Cinematic Film Grain / Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-20" />
        
        {/* Layered Vignettes for Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent z-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-dark/30 to-transparent z-10" />
      </div>

      <div className="container-custom relative z-30 pt-32 lg:pt-48 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content Side */}
          <div className="max-w-[700px]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 0.3 }
                }
              }}
            >
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-12 shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-gold"></span>
                </span>
                The Gold Standard in Bespoke Travel
              </motion.div>
              
              <motion.h1 
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                className="text-[64px] lg:text-[104px] font-serif text-white leading-[0.9] mb-10 tracking-tighter"
              >
                Travel That <br />
                <span className="italic font-light text-accent-gold drop-shadow-[0_0_30px_rgba(197,160,89,0.3)]">Changes</span> You.
              </motion.h1>
              
              <motion.p 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-xl lg:text-2xl text-white/70 mb-14 leading-relaxed max-w-[620px] font-medium tracking-tight"
              >
                Beyond mere destinations, we curate experiences that linger. Hand-crafted journeys for those who seek the extraordinary.
              </motion.p>

              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="flex flex-wrap items-center gap-10 mb-24"
              >
                <Link 
                  href="#contact" 
                  className="px-14 py-7 bg-primary text-white font-black rounded-2xl flex items-center gap-4 transition-all shadow-[0_30px_60px_rgba(46,125,50,0.4)] hover:shadow-primary/50 hover:-translate-y-1.5 active:translate-y-0 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="text-[13px] uppercase tracking-widest relative z-10">Plan Your Escape</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
                </Link>
                
                <Link 
                  href="#packages" 
                  className="flex items-center gap-5 text-white group hover:text-accent-gold transition-all"
                >
                  <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent-gold group-hover:bg-accent-gold/10 transition-all shadow-2xl relative">
                    <Play className="w-7 h-7 fill-current relative z-10" />
                    <div className="absolute inset-0 rounded-full bg-white/5 blur-xl group-hover:bg-accent-gold/5 transition-all" />
                  </div>
                  <span className="text-[13px] font-black uppercase tracking-[0.2em]">Watch the Experience</span>
                </Link>
              </motion.div>

              {/* Seamless Value Props - Polished */}
              <motion.div 
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-12 border-t border-white/10"
              >
                {trustBadges.map((badge, i) => (
                  <div key={i} className="flex items-center gap-5 text-white/50 group cursor-default transition-colors hover:text-white">
                    <div className="w-12 h-12 rounded-[14px] bg-white/[0.03] backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-500 shadow-2xl">
                      <badge.icon className="w-5 h-5 text-accent-gold group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-[0.25em] leading-tight">{badge.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Widget Side */}
          <div className="flex justify-center lg:justify-end items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[500px]"
            >
              {/* Cinematic Glows */}
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent-gold/10 blur-[120px] rounded-full pointer-events-none" />
              
              <div className="relative z-10 shadow-[0_50px_100px_rgba(0,0,0,0.3)] rounded-[32px]">
                <BookingWidget />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
