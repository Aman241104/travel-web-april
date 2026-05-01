"use client";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Award, CheckCircle2, Globe2 } from "lucide-react";
import Image from "next/image";

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
    <section className="relative z-20 py-32 bg-white overflow-hidden">
      {/* Refined Background Detail */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-sand opacity-30 -z-10" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-6 block">
              Reliability & Excellence
            </span>
            <h2 className="text-5xl lg:text-6xl font-serif text-brand-dark mb-10 leading-[1.1]">
              A Decade of <br />
              <span className="italic font-light text-primary">Uncompromising</span> Trust
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-12 max-w-[540px]">
              We don't just book trips; we secure your peace of mind. Our global network and rigorous standards ensure every journey is safe, seamless, and spectacular.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 p-6 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm max-w-max">
              <div className="flex -space-x-3">
                {[
                  "1534528741775-53994a69daeb",
                  "1507003211169-0a1dd7228f2d",
                  "1500648767791-00dcc994a43e",
                  "1494790108377-be9c29b29330"
                ].map((id, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200 relative">
                    <Image 
                      src={`https://images.unsplash.com/photo-${id}?q=80&w=100&h=100&auto=format&fit=crop&crop=faces`} 
                      alt="User"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-white bg-primary flex items-center justify-center text-white text-xs font-bold relative z-10">
                  +2k
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-accent-gold fill-accent-gold" />
                  ))}
                </div>
                <p className="text-sm font-bold text-brand-dark tracking-tight">4.9/5 from 2,300+ reviews</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {trustFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="p-8 rounded-[32px] bg-white border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all duration-500 group"
              >
                <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500`}>
                  <feature.icon className={`w-7 h-7 ${feature.color} group-hover:text-white transition-colors`} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recognition Layer: Partner Logos (More Refined) */}
        <div className="pt-20 border-t border-gray-100">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 mb-14">
            Strategic Alliances With Global Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-12 opacity-30 hover:opacity-100 transition-opacity duration-700">
            {partners.map((partner) => (
              <div key={partner.name} className="grayscale hover:grayscale-0 transition-all duration-500">
                <span className="font-serif font-black text-3xl text-brand-dark tracking-tighter">
                  {partner.name.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
