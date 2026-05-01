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
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center overflow-hidden bg-brand-dark">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" 
          alt="Travel Background"
          fill
          className="object-cover object-center opacity-40 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent z-10" />
      </div>

      <div className="container-custom relative z-20 pt-32 lg:pt-48 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Content Side */}
          <div className="max-w-[680px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.25em] mb-12 shadow-2xl">
                <span className="flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-accent-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-gold"></span>
                </span>
                The Gold Standard in Bespoke Travel
              </div>
              
              <h1 className="text-7xl lg:text-[100px] font-serif text-white leading-[0.95] mb-10 tracking-tighter">
                Travel That <br />
                <span className="italic font-light text-accent-gold">Changes</span> You.
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/80 mb-14 leading-relaxed max-w-[620px] font-medium">
                Beyond mere destinations, we curate experiences that linger. Hand-crafted journeys for those who seek the extraordinary.
              </p>

              <div className="flex flex-wrap items-center gap-10 mb-20">
                <Link href="#contact" className="px-14 py-7 bg-primary hover:bg-primary-light text-white font-bold rounded-[2xl] flex items-center gap-4 transition-all shadow-[0_30px_60px_rgba(46,125,50,0.4)] hover:shadow-primary/50 hover:-translate-y-1 active:translate-y-0 group">
                  <span className="text-lg">Plan Your Escape</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link href="#packages" className="flex items-center gap-5 text-white font-bold group hover:text-accent-gold transition-all">
                  <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center group-hover:border-accent-gold group-hover:bg-accent-gold/10 transition-all shadow-2xl">
                    <Play className="w-8 h-8 fill-current" />
                  </div>
                  <span className="text-lg tracking-wide uppercase text-sm">Watch the Experience</span>
                </Link>
              </div>

              {/* Seamless Value Props */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pt-12 border-t border-white/20">
                {trustBadges.map((badge, i) => (
                  <div key={i} className="flex items-center gap-4 text-white/70 group cursor-default">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
                      <badge.icon className="w-6 h-6 text-accent-gold group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-[12px] font-bold uppercase tracking-[0.2em]">{badge.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Widget Side */}
          <div className="flex justify-center lg:justify-end items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[500px]"
            >
              {/* Decorative Glows */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-dark/60 blur-[100px] rounded-full" />
              
              <div className="relative z-10">
                <BookingWidget />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
