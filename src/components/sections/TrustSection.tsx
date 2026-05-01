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
      {/* Cinematic Background Polish */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(197,160,89,0.05),transparent_70%)] pointer-events-none" />
      <div className="absolute -left-20 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start mb-32">
          
          {/* Left: Authority & Proof (5 columns) */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8">
                <ShieldCheck className="w-4 h-4" />
                Reliability & Excellence
              </div>
              <h2 className="text-[52px] lg:text-[72px] font-serif text-brand-dark leading-[0.95] mb-10 tracking-tighter">
                A Decade of <br />
                <span className="italic font-light text-primary drop-shadow-[0_0_20px_rgba(46,125,50,0.1)]">Uncompromising</span> Trust
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed max-w-[480px] font-medium tracking-tight">
                We don&apos;t just book trips; we secure your peace of mind. Our global network ensures every journey is safe, seamless, and spectacular.
              </p>
            </motion.div>
            
            {/* High-End Social Proof Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="inline-flex flex-wrap items-center gap-8 p-8 bg-white rounded-[32px] border border-black/[0.03] shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative overflow-hidden group"
            >
              {/* Shine effect on proof card */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <div className="flex -space-x-3 relative z-10">
                {[
                  "1534528741775-53994a69daeb",
                  "1507003211169-0a1dd7228f2d",
                  "1500648767791-00dcc994a43e",
                  "1494790108377-be9c29b29330"
                ].map((id, i) => (
                  <div key={i} className="w-14 h-14 rounded-full border-[3px] border-white overflow-hidden bg-gray-200 relative shadow-xl">
                    <Image 
                      src={`https://images.unsplash.com/photo-${id}?q=80&w=100&h=100&auto=format&fit=crop&crop=faces`} 
                      alt="User"
                      fill
                      className="object-cover transition-transform group-hover:scale-110 duration-500"
                    />
                  </div>
                ))}
                <div className="w-14 h-14 rounded-full border-[3px] border-white bg-brand-dark flex items-center justify-center text-accent-gold text-xs font-black relative z-10 shadow-xl">
                  +2k
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-1.5 mb-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-accent-gold fill-accent-gold" />
                  ))}
                </div>
                <p className="text-[13px] font-black text-brand-dark uppercase tracking-[0.1em]">4.9/5 from 2,300+ reviews</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Feature Grid (7 columns - Bento Style) */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8 h-full">
            {trustFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1), duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`p-10 rounded-[40px] border border-black/[0.03] transition-all duration-700 group hover:-translate-y-2 relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.02)] ${
                  i === 2 ? 'sm:col-span-2' : ''
                } ${
                  feature.title.includes('Security') ? 'bg-primary text-white shadow-primary/20' : 'bg-gray-50'
                }`}
              >
                <div className={`w-16 h-16 rounded-[20px] flex items-center justify-center mb-8 shadow-2xl transition-all duration-700 group-hover:rotate-6 group-hover:scale-110 ${
                  feature.title.includes('Security') ? 'bg-white/10' : 'bg-white'
                }`}>
                  <feature.icon className={`w-8 h-8 ${
                    feature.title.includes('Security') ? 'text-white' : 'text-primary'
                  }`} />
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 tracking-tight ${
                  feature.title.includes('Security') ? 'text-white' : 'text-brand-dark'
                }`}>
                  {feature.title}
                </h3>
                
                <p className={`text-base leading-relaxed ${
                  feature.title.includes('Security') ? 'text-white/70' : 'text-gray-500'
                }`}>
                  {feature.desc}
                </p>
                
                {/* Visual accent for bento card */}
                <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none ${
                  feature.title.includes('Security') ? 'bg-white' : 'bg-primary'
                }`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Brand Recognition Layer - Polished */}
        <div className="pt-24 border-t border-black/[0.05]">
          <div className="flex flex-col items-center gap-16">
            <p className="text-[11px] font-black uppercase tracking-[0.5em] text-gray-300">
              Strategic Alliances With Global Leaders
            </p>
            
            <div className="w-full relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-12 opacity-30">
                {partners.map((partner) => (
                  <motion.div 
                    key={partner.name}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    className="cursor-default transition-all duration-500 grayscale hover:grayscale-0"
                  >
                    <span className="font-serif font-black text-3xl lg:text-4xl text-brand-dark tracking-tighter flex flex-col items-center">
                      {partner.name.toUpperCase()}
                      <span className="h-[2px] w-0 bg-primary transition-all duration-700 group-hover:w-full mt-1" />
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
