"use client";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Award, CheckCircle2, Globe2 } from "lucide-react";

const partners = [
  { name: "Emirates", logo: "/assets/emirates.svg" }, // Assuming these would be real assets
  { name: "Qatar Airways", logo: "/assets/qatar.svg" },
  { name: "IndiGo", logo: "/assets/indigo.svg" },
  { name: "Air India", logo: "/assets/airindia.svg" },
  { name: "Vistara", logo: "/assets/vistara.svg" },
];

const trustFeatures = [
  {
    title: "Bank-Level Security",
    desc: "Your payments are protected with 256-bit SSL encryption and secure gateways.",
    icon: ShieldCheck,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "10+ Years Excellence",
    desc: "A decade of crafting seamless journeys for over 50,000 happy travelers.",
    icon: Award,
    color: "text-amber-600",
    bg: "bg-amber-50"
  },
  {
    title: "Local Expert Guides",
    desc: "Access hidden gems with our network of certified local travel specialists.",
    icon: Globe2,
    color: "text-primary",
    bg: "bg-primary/10"
  }
];

export default function TrustSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Subtle Background Detail */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1400px] pointer-events-none opacity-[0.03]">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-dark rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* 1. Proof Layer: Ratings & Real Numbers */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-1.5 bg-gray-50 px-4 py-2 rounded-full border border-gray-100 shadow-sm">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-brand-dark">4.9/5</span>
              <span className="text-xs text-gray-400 font-medium">from 2,300+ reviews</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-serif text-brand-dark max-w-[700px] leading-[1.2]">
              Trusted by <span className="text-primary italic font-light">Thousands</span> of Global Travelers
            </h2>
          </motion.div>
        </div>

        {/* 2. Recognition Layer: Partner Logos (Higher Contrast) */}
        <div className="mb-24">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-10">
            Official Booking Partner For
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col items-center gap-2"
              >
                {/* Visual Placeholder for Logos with better contrast */}
                <div className="h-10 px-6 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                  <span className="font-serif font-black text-xl text-brand-dark/60 group-hover:text-primary tracking-tighter transition-colors">
                    {partner.name.toUpperCase()}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Why Trust Us Layer: Feature Cards with Depth */}
        <div className="grid lg:grid-cols-3 gap-8">
          {trustFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative p-10 rounded-[40px] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 group"
            >
              <div className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              
              <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed">
                {feature.desc}
              </p>

              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 className="w-5 h-5 text-primary/20" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credibility Footer Stats */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-wrap justify-center items-center gap-x-16 gap-y-8 pt-16 border-t border-gray-100"
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl font-serif font-bold text-brand-dark">50,000+</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Total Travelers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-serif font-bold text-brand-dark">15+</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Industry Awards</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-serif font-bold text-brand-dark">24/7</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Human Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
