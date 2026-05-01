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
    <section id="services" className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Premium background detail */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary rounded-full blur-[200px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-gold rounded-full blur-[150px] -translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container-custom relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-10">
          <div className="max-w-[700px]">
            <div className="flex items-center gap-3 text-accent-gold font-bold uppercase tracking-[0.4em] text-xs mb-6">
              <Sparkles className="w-4 h-4" />
              Elite Travel Ecosystem
            </div>
            <h2 className="text-5xl lg:text-7xl font-serif text-white leading-[1.05]">
              Curating Every <br />
              <span className="italic font-light text-accent-gold">Nuance</span> of Your Journey.
            </h2>
          </div>
          <p className="text-white/60 lg:max-w-[420px] text-lg leading-relaxed font-medium">
            From the first spark of inspiration to the final return, we manage every layer of your travel with surgical precision and artistic flair.
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          {featuredServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`p-16 rounded-[48px] relative overflow-hidden group border border-white/10 ${
                service.color === 'bg-primary' 
                  ? "bg-primary text-white shadow-[0_30px_100px_rgba(46,125,50,0.3)]" 
                  : "bg-white/5 backdrop-blur-xl text-white hover:bg-white/10"
              } transition-all duration-700`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-10 transform group-hover:rotate-6 transition-transform duration-500 ${
                  service.color === 'bg-primary' ? "bg-white/10" : "bg-primary/20"
                }`}>
                  <service.icon className={`w-10 h-10 ${service.color === 'bg-primary' ? "text-white" : "text-primary"}`} />
                </div>
                <h3 className="text-4xl font-serif font-bold mb-6 tracking-tight">{service.title}</h3>
                <p className="text-xl mb-12 leading-relaxed max-w-[480px] text-white/70">
                  {service.desc}
                </p>
                <div className="mt-auto">
                  <button className="flex items-center gap-3 font-bold uppercase tracking-[0.2em] text-xs group/btn text-accent-gold hover:text-white transition-colors">
                    {service.cta}
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-3 transition-transform" />
                  </button>
                </div>
              </div>
              
              {/* Decorative accent for featured card */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Secondary Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {standardServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.05), duration: 0.6 }}
              className="bg-white/5 backdrop-blur-lg p-10 rounded-[32px] border border-white/5 hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="flex flex-col gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0 shadow-2xl">
                  <service.icon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-accent-gold transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-white/50 text-base leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conversion Bridge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 flex flex-col items-center text-center"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-full px-8 py-3 flex items-center gap-4 border border-white/10 mb-10">
            <div className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
            <p className="text-xs font-bold text-white uppercase tracking-[0.3em]">
              Elevate your standards
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <Link 
              href="#contact" 
              className="px-14 py-6 bg-accent-gold hover:bg-white text-brand-dark font-bold rounded-2xl transition-all shadow-2xl hover:-translate-y-1 active:translate-y-0"
            >
              Plan Your Trip
            </Link>
            <Link 
              href="#packages" 
              className="px-14 py-6 bg-transparent border-2 border-white/20 text-white font-bold rounded-2xl transition-all hover:bg-white/10 hover:-translate-y-1 active:translate-y-0"
            >
              Explore Collections
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
