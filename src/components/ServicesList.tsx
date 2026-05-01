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
    <section id="services" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none -z-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="0" cy="0" r="40" fill="currentColor" className="text-primary" />
          <circle cx="100" cy="100" r="30" fill="currentColor" className="text-brand-dark" />
        </svg>
      </div>
      
      <div className="container-custom">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-[600px]">
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">
              <Sparkles className="w-4 h-4" />
              Comprehensive Excellence
            </div>
            <h2 className="text-5xl lg:text-6xl font-serif text-brand-dark leading-tight">
              Beyond the Ordinary <br />
              <span className="italic font-light text-primary">Travel Solutions.</span>
            </h2>
          </div>
          <p className="text-gray-500 lg:max-w-[400px] text-lg leading-relaxed">
            Every detail of your journey is managed with surgical precision, ensuring a frictionless experience from departure to return.
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {featuredServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${service.color} ${service.textColor} p-12 rounded-[48px] shadow-2xl relative overflow-hidden group`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-16 h-16 rounded-2xl ${service.color === 'bg-white' ? 'bg-primary/10 text-primary' : 'bg-white/10 text-white'} flex items-center justify-center mb-8`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4">{service.title}</h3>
                <p className={`text-lg mb-10 leading-relaxed max-w-[400px] ${service.textColor === 'text-white' ? 'text-white/80' : 'text-gray-500'}`}>
                  {service.desc}
                </p>
                <div className="mt-auto">
                  <button className={`flex items-center gap-2 font-bold uppercase tracking-widest text-xs group/btn`}>
                    {service.cta}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
              
              {/* Decorative accent for featured card */}
              <div className={`absolute -bottom-10 -right-10 w-40 h-40 ${service.color === 'bg-primary' ? 'bg-white/5' : 'bg-primary/5'} rounded-full blur-3xl`} />
            </motion.div>
          ))}
        </div>

        {/* Secondary Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {standardServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.05) }}
              className="bg-white p-8 rounded-[32px] border border-gray-100 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0 shadow-sm">
                  <service.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conversion Bridge */}
        <div className="mt-20 flex flex-col items-center text-center">
          <div className="bg-white rounded-full p-2 pr-8 flex items-center gap-4 shadow-xl border border-gray-100 mb-8">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <p className="text-sm font-bold text-brand-dark uppercase tracking-widest">
              Ready to experience the Jade standard?
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="#contact" 
              className="px-12 py-5 bg-brand-dark text-white font-bold rounded-2xl transition-all shadow-xl hover:bg-primary hover:-translate-y-1 active:translate-y-0"
            >
              Plan Your Trip
            </Link>
            <Link 
              href="#packages" 
              className="px-12 py-5 bg-white border-2 border-primary text-primary font-bold rounded-2xl transition-all shadow-sm hover:shadow-md hover:-translate-y-1 active:translate-y-0"
            >
              Explore Packages
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
