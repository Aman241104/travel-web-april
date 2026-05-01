"use client";
import { motion } from "framer-motion";
import BookingWidget from "@/components/ui/BookingWidget";
import { ArrowRight, Play, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import Image from "next/image";

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

      <div className="container-custom relative z-20 pt-20 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Content Side */}
          <div className="max-w-[680px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-10">
                <span className="flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                World-Class Travel Management
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-serif text-white leading-[1.05] mb-8 tracking-tight">
                Crafting <span className="italic font-light text-primary-muted">Stories</span>, <br />
                Not Just Trips.
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/70 mb-12 leading-relaxed max-w-[580px]">
                Escape the ordinary with bespoke luxury travel. We handle the complexity, you embrace the adventure.
              </p>

              <div className="flex flex-wrap items-center gap-8 mb-16">
                <button className="px-12 py-6 bg-primary hover:bg-primary-light text-white font-bold rounded-2xl flex items-center gap-3 transition-all shadow-[0_20px_40px_rgba(46,125,50,0.3)] hover:shadow-primary/40 hover:-translate-y-1 active:translate-y-0 group">
                  Plan Your Escape
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center gap-4 text-white font-bold group hover:text-primary transition-colors">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                    <Play className="w-6 h-6 fill-current" />
                  </div>
                  <span>Discover the Experience</span>
                </button>
              </div>

              {/* Seamless Value Props */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white/10">
                {trustBadges.map((badge, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/60">
                    <badge.icon className="w-5 h-5 text-primary" />
                    <span className="text-[11px] font-bold uppercase tracking-widest">{badge.label}</span>
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
