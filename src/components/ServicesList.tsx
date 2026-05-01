"use client";
import { motion } from "framer-motion";
import { Fingerprint, Plane, Globe, Hotel, Car, Landmark, ShieldCheck, CreditCard, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const featuredServices = [
  { 
    title: "Domestic & International Custom Tour Packages", 
    desc: "Experience the world through a lens of luxury. Our master-crafted itineraries are tailored to your pace, preferences, and passions.", 
    icon: Globe,
    cta: "Explore Collections",
    color: "bg-primary",
    textColor: "text-white"
  },
  { 
    title: "Visitor Visa Services", 
    desc: "Navigate complex documentation with ease. Our specialists handle the friction so you can focus on the destination.", 
    icon: Landmark,
    cta: "Check Requirements",
    color: "bg-white",
    textColor: "text-gray-900"
  },
];

const standardServices = [
  { title: "Domestic & International Tickets", desc: "Access to private fares and seamless cabin upgrades for all your flights.", icon: Plane },
  { title: "Hotel Bookings", desc: "Curated stays with exclusive amenities and competitive rates worldwide.", icon: Hotel },
  { title: "Forex Services", desc: "Competitive foreign exchange rates delivered to your doorstep.", icon: CreditCard },
  { title: "Overseas Insurance", desc: "Comprehensive protection for total peace of mind during your travels.", icon: ShieldCheck },
  { title: "Car Rental", desc: "Luxury vehicles and reliable rentals waiting the moment you touch down.", icon: Car },
  { title: "Passport Support", desc: "Fast-track renewals and documentation guidance for all passport needs.", icon: Fingerprint },
];

export default function ServicesList() {
  return (
    <section id="services" className="py-32 bg-gray-50 relative overflow-hidden border-t border-gray-100">
      {/* Bright Background Depth */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-emerald-100/30 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/2" />
      </div>
      
      <div className="container-custom relative z-10">
        
        {/* Header - Bright Typography */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-28 gap-12">
          <div className="max-w-[720px]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8"
            >
              <Sparkles className="w-4 h-4" />
              Comprehensive Travel Solutions
            </motion.div>
            <h2 className="text-[56px] lg:text-[84px] font-sans font-black text-gray-900 leading-[1.05] tracking-tighter">
              <span className="text-primary italic font-serif font-light drop-shadow-sm">Services</span>
            </h2>
          </div>
          <p className="text-gray-600 lg:max-w-[440px] text-xl leading-relaxed font-medium tracking-tight">
            From the first spark of inspiration to the final return, we manage every layer of your travel with surgical precision and artistic flair.
          </p>
        </div>

        {/* Featured Services Grid - Bright Glassmorphism */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {featuredServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`p-12 lg:p-16 rounded-[48px] relative overflow-hidden group border border-gray-100/50 ${
                service.color === 'bg-primary' 
                  ? "bg-primary text-white shadow-[0_30px_80px_rgba(56,142,60,0.25)]" 
                  : "bg-white text-gray-900 shadow-[0_20px_60px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
              } transition-all duration-1000 ease-in-out`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-20 h-20 rounded-[24px] flex items-center justify-center mb-12 shadow-lg transition-all duration-700 group-hover:rotate-[15deg] group-hover:scale-110 ${
                  service.color === 'bg-primary' ? "bg-white/20 backdrop-blur-md" : "bg-primary/10"
                }`}>
                  <service.icon className={`w-10 h-10 ${service.color === 'bg-primary' ? "text-white" : "text-primary"}`} />
                </div>
                <h3 className="text-4xl lg:text-[44px] font-sans font-bold mb-6 tracking-tight leading-tight">{service.title}</h3>
                <p className={`text-lg mb-14 leading-relaxed max-w-[480px] font-medium ${
                  service.color === 'bg-primary' ? "text-white/80" : "text-gray-500"
                }`}>
                  {service.desc}
                </p>
                <div className="mt-auto">
                  <button className={`flex items-center gap-4 font-black uppercase tracking-[0.25em] text-[11px] group/btn transition-all duration-500 ${
                    service.color === 'bg-primary' ? "text-white hover:text-white" : "text-primary hover:text-primary-dark"
                  }`}>
                    {service.cta}
                    <div className={`w-10 h-px transition-all duration-500 group-hover/btn:w-16 ${
                      service.color === 'bg-primary' ? "bg-white" : "bg-primary"
                    }`} />
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-500" />
                  </button>
                </div>
              </div>
              
              {/* Refined Shine Effect */}
              <div className={`absolute inset-0 bg-gradient-to-tr ${
                service.color === 'bg-primary' ? "from-white/10" : "from-primary/5"
              } via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
              <div className={`absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ${
                service.color === 'bg-primary' ? "bg-white/20" : "bg-primary/10"
              }`} />
            </motion.div>
          ))}
        </div>

        {/* Secondary Services Grid - Light Bento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {standardServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.05), duration: 0.8 }}
              className="bg-white p-10 rounded-[32px] border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-700 group relative overflow-hidden"
            >
              <div className="flex flex-col gap-8 relative z-10">
                <div className="w-16 h-16 rounded-[20px] bg-gray-50 border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700 shrink-0 shadow-sm transform group-hover:rotate-6">
                  <service.icon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-sans font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-500">
                    {service.title}
                  </h4>
                  <p className="text-gray-500 text-base leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>
              </div>
              {/* Micro-glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Conversion Bridge - Bright CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-32 flex flex-col items-center text-center"
        >
          <div className="bg-white rounded-full px-8 py-3 flex items-center gap-4 border border-gray-100 mb-12 shadow-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <p className="text-[11px] font-black text-gray-900 uppercase tracking-[0.4em]">
              Elevate your travel standards
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="#contact" 
              className="px-12 py-6 bg-primary text-white font-bold rounded-full transition-all shadow-lg hover:shadow-primary/30 hover:bg-primary-dark hover:-translate-y-1 active:translate-y-0 text-sm uppercase tracking-widest relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10 text-white">Plan Your Trip</span>
            </Link>
            <Link 
              href="#packages" 
              className="px-12 py-6 bg-white border-2 border-gray-100 text-gray-800 font-bold rounded-full transition-all hover:border-primary hover:text-primary shadow-sm hover:shadow-md hover:-translate-y-1 active:translate-y-0 text-sm uppercase tracking-widest"
            >
              Explore Collections
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
