"use client";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Award, CheckCircle2, Globe2, Sparkles } from "lucide-react";
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
    desc: "Jade ensures your payments are protected with top-tier 256-bit encryption.",
    icon: ShieldCheck,
  },
  {
    title: "10+ Years Excellence",
    desc: "A decade of experience crafting seamless journeys for global travelers.",
    icon: Award,
  },
  {
    title: "Local Expert Guides",
    desc: "Discover hidden gems with our network of certified local specialists.",
    icon: Globe2,
  }
];

export default function TrustSection() {
  return (
    <section className="relative z-20 py-32 bg-white overflow-hidden border-t border-gray-100">
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_20%,rgba(56,142,60,0.03),transparent_70%)] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          
          {/* Left: Content - More emphasis on typography */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.4em] text-[11px] mb-6">
                <ShieldCheck className="w-4 h-4" />
                Reliability & Excellence
              </div>
              <h2 className="text-5xl lg:text-[72px] font-sans font-black text-gray-900 leading-[1.05] mb-8 tracking-tighter">
                A Decade of <br />
                <span className="text-primary italic font-serif font-light">Uncompromising</span> Trust
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-[540px] font-medium">
                Jade Tours and Travels ensures your peace of mind with global standards and rigorous service quality for every traveler.
              </p>
            </motion.div>
            
            {/* Social Proof Badge */}
            <div className="inline-flex items-center gap-6 p-6 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex -space-x-3">
                {[
                  "1534528741775-53994a69daeb",
                  "1507003211169-0a1dd7228f2d",
                  "1500648767791-00dcc994a43e",
                  "1494790108377-be9c29b29330"
                ].map((id, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200 relative shadow-sm">
                    <Image 
                      src={`https://images.unsplash.com/photo-${id}?q=80&w=100&h=100&auto=format&fit=crop&crop=faces`} 
                      alt="User"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-white bg-primary flex items-center justify-center text-white text-[11px] font-black relative z-10 shadow-sm">
                  +2K
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-accent-gold fill-accent-gold" />
                  ))}
                </div>
                <p className="text-xs font-bold text-gray-800 uppercase tracking-widest">4.9/5 Trust Score</p>
              </div>
            </div>
          </div>

          {/* Right: Feature Cards - Better spacing and contrast */}
          <div className="grid gap-6">
            {trustFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className={`p-8 lg:p-10 rounded-[32px] border border-gray-100 transition-all duration-500 group flex items-start gap-8 ${
                  i === 0 ? 'bg-primary text-white shadow-xl shadow-primary/10' : 'bg-gray-50 text-gray-900 hover:bg-white hover:shadow-xl'
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg ${
                  i === 0 ? 'bg-white/10 text-white' : 'bg-white text-primary'
                }`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">{feature.title}</h3>
                  <p className={`text-base leading-relaxed ${i === 0 ? 'text-white/80' : 'text-gray-500'}`}>
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recognition Layer: Text Logos */}
        <div className="pt-24 border-t border-gray-100">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-16">
            Official Booking Partner For
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-12 opacity-30 hover:opacity-100 transition-opacity duration-700">
            {partners.map((partner) => (
              <div key={partner.name} className="grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-110 group cursor-default">
                <span className="font-serif font-black text-3xl lg:text-4xl text-gray-900 tracking-tighter flex flex-col items-center">
                  {partner.name.toUpperCase()}
                  <span className="h-[2px] w-0 bg-primary transition-all duration-700 group-hover:w-full mt-1" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
