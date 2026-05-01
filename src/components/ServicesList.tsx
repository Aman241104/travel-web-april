"use client";
import { motion } from "framer-motion";
import { Fingerprint, Plane, Globe, Hotel, Car, Landmark, ShieldCheck, CreditCard, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const featuredServices = [
  { 
    title: "Bespoke Tour Packages", 
    desc: "Experience the world through a lens of luxury. Our master-crafted itineraries are tailored to your pace, preferences, and passions.", 
    icon: Globe,
    cta: "Explore Collections",
    color: "bg-primary",
    textColor: "text-white"
  },
  { 
    title: "Expert Visa Concierge", 
    desc: "Navigate complex documentation with ease. Our specialists handle the friction so you can focus on the destination.", 
    icon: Landmark,
    cta: "Check Requirements",
    color: "bg-white",
    textColor: "text-brand-dark"
  },
];

const standardServices = [
  { title: "Premium Flights", desc: "Access to private fares and seamless cabin upgrades.", icon: Plane },
  { title: "Elite Stays", desc: "Curated hotels with exclusive Jade-only amenities.", icon: Hotel },
  { title: "Global Forex", desc: "Competitive rates delivered to your doorstep.", icon: CreditCard },
  { title: "Travel Insurance", desc: "Comprehensive protection for total peace of mind.", icon: ShieldCheck },
  { title: "Private Transfers", desc: "Luxury vehicles waiting the moment you touch down.", icon: Car },
  { title: "Passport Support", desc: "Fast-track renewals and documentation guidance.", icon: Fingerprint },
];

export default function ServicesList() {
  return (
    <section id="services" className="py-32 bg-brand-dark relative overflow-hidden border-t border-white/5">
      {/* Cinematic Background Depth */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[200px] translate-x-1/3 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent-gold/5 rounded-full blur-[180px] -translate-x-1/3 translate-y-1/2" />
        {/* Subtle noise for texture */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>
      
      <div className="container-custom relative z-10">
        
        {/* Header - Refined Typography */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-28 gap-12">
          <div className="max-w-[720px]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-accent-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8"
            >
              <Sparkles className="w-4 h-4" />
              Elite Travel Ecosystem
            </motion.div>
            <h2 className="text-[56px] lg:text-[84px] font-serif text-white leading-[0.95] tracking-tighter">
              Curating Every <br />
              <span className="italic font-light text-accent-gold drop-shadow-[0_0_30px_rgba(197,160,89,0.2)]">Nuance</span> of Your Journey.
            </h2>
          </div>
          <p className="text-white/50 lg:max-w-[440px] text-xl leading-relaxed font-medium tracking-tight">
            From the first spark of inspiration to the final return, we manage every layer of your travel with surgical precision and artistic flair.
          </p>
        </div>

        {/* Featured Services Grid - High-End Glassmorphism */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {featuredServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`p-16 rounded-[56px] relative overflow-hidden group border border-white/10 ${
                service.color === 'bg-primary' 
                  ? "bg-primary text-white shadow-[0_40px_100px_rgba(46,125,50,0.2)]" 
                  : "bg-white/[0.03] backdrop-blur-3xl text-white hover:bg-white/[0.06]"
              } transition-all duration-1000 ease-in-out`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-12 shadow-2xl transition-all duration-700 group-hover:rotate-[15deg] group-hover:scale-110 ${
                  service.color === 'bg-primary' ? "bg-white/10" : "bg-primary/20"
                }`}>
                  <service.icon className={`w-10 h-10 ${service.color === 'bg-primary' ? "text-white" : "text-primary"}`} />
                </div>
                <h3 className="text-4xl lg:text-5xl font-serif font-bold mb-8 tracking-tight">{service.title}</h3>
                <p className="text-xl mb-14 leading-relaxed max-w-[480px] text-white/70 font-medium">
                  {service.desc}
                </p>
                <div className="mt-auto">
                  <button className="flex items-center gap-4 font-black uppercase tracking-[0.25em] text-[11px] group/btn text-accent-gold hover:text-white transition-all duration-500">
                    {service.cta}
                    <div className="w-10 h-px bg-accent-gold group-hover/btn:w-16 group-hover/btn:bg-white transition-all duration-500" />
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-500" />
                  </button>
                </div>
              </div>
              
              {/* Refined Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </motion.div>
          ))}
        </div>

        {/* Secondary Services Grid - Polished Bento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {standardServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.05), duration: 0.8 }}
              className="bg-white/[0.02] backdrop-blur-xl p-10 rounded-[32px] border border-white/5 hover:border-primary/40 hover:bg-white/[0.04] transition-all duration-700 group relative overflow-hidden"
            >
              <div className="flex flex-col gap-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700 shrink-0 shadow-2xl transform group-hover:rotate-6">
                  <service.icon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-accent-gold transition-colors duration-500">
                    {service.title}
                  </h4>
                  <p className="text-white/40 text-base leading-relaxed font-medium group-hover:text-white/60 transition-colors duration-500">
                    {service.desc}
                  </p>
                </div>
              </div>
              {/* Micro-glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Conversion Bridge - Cinematic CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-40 flex flex-col items-center text-center"
        >
          <div className="bg-white/[0.03] backdrop-blur-2xl rounded-full px-10 py-4 flex items-center gap-5 border border-white/10 mb-14 shadow-2xl">
            <div className="w-2.5 h-2.5 rounded-full bg-accent-gold shadow-[0_0_15px_rgba(197,160,89,0.8)] animate-pulse" />
            <p className="text-[11px] font-black text-white uppercase tracking-[0.4em]">
              Elevate your travel standards
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10">
            <Link 
              href="#contact" 
              className="px-16 py-8 bg-accent-gold text-brand-dark font-black rounded-2xl transition-all shadow-[0_20px_40px_rgba(197,160,89,0.3)] hover:shadow-accent-gold/50 hover:-translate-y-1.5 active:translate-y-0 text-[13px] uppercase tracking-widest relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10 text-white">Plan Your Trip</span>
            </Link>
            <Link 
              href="#packages" 
              className="px-16 py-8 bg-transparent border-2 border-white/10 text-white font-black rounded-2xl transition-all hover:bg-white/5 hover:border-white/30 hover:-translate-y-1.5 active:translate-y-0 text-[13px] uppercase tracking-widest"
            >
              Explore Collections
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
