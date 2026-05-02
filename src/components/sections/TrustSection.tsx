"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Award, Globe2, Lock } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const partners = [
  { name: "Emirates", code: "EK" },
  { name: "Qatar Airways", code: "QR" },
  { name: "Singapore Airlines", code: "SQ" },
  { name: "Vistara", code: "UK" },
  { name: "Air India", code: "AI" },
];

const trustFeatures = [
  {
    title: "Bank-Level Security",
    desc: "Jade ensures your payments are protected with top-tier 256-bit encryption and ISO-certified protocols.",
    icon: Lock,
  },
  {
    title: "15+ Years Excellence",
    desc: "Over a decade of orchestrating complex itineraries for the world's most demanding travelers.",
    icon: Award,
  },
  {
    title: "Verified Global Network",
    desc: "Direct relationships with elite sanctuaries and local fixers across 120+ countries.",
    icon: Globe2,
  }
];

export default function TrustSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(".trust-feature-card", 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".trust-features-grid",
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(".partner-logo", 
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".partners-layer",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative z-20 py-12 lg:py-24 bg-white overflow-hidden border-t border-gray-100">
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_20%,rgba(56,142,60,0.025),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(circle_at_30%_80%,rgba(56,142,60,0.015),transparent_70%)] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center mb-12 lg:mb-24">
          
          {/* Left: Content */}
          <div className="space-y-8 lg:space-y-10 relative">
            {/* Background Decorative Circles */}
            <div className="absolute -top-20 -left-20 w-[300px] h-[300px] border border-primary/5 rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-6 lg:mb-8">
                <ShieldCheck className="w-4 h-4 lg:w-5 lg:h-5" />
                Reliability & Excellence
              </div>
              <h2 className="text-[28px] md:text-[36px] lg:text-[48px] xl:text-[56px] font-sans font-black text-gray-950 leading-[1.1] lg:leading-[1] mb-10 tracking-tighter">
                A Legacy of <br />
                <span className="text-primary italic font-serif font-light drop-shadow-sm">Uncompromising</span> Trust.
              </h2>
              <p className="text-sm lg:text-lg text-gray-600 leading-relaxed max-w-[540px] font-medium tracking-tight">
                For those who value discretion as much as discovery. Jade Tours and Travels defines the gold standard of travel security and curated excellence.
              </p>
            </div>
            
            {/* Social Proof Badge */}
            <div className="inline-flex items-center gap-4 p-5 lg:p-6 bg-gray-50/50 backdrop-blur-sm rounded-[24px] border border-gray-100 shadow-sm group hover:shadow-2xl transition-all duration-1000">
              <div className="flex -space-x-3">
                {[
                  "1534528741775-53994a69daeb",
                  "1507003211169-0a1dd7228f2d",
                  "1500648767791-00dcc994a43e",
                  "1494790108377-be9c29b29330"
                ].map((id, i) => (
                  <div key={i} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200 relative shadow-md group-hover:translate-y-[-4px] transition-transform duration-500" style={{ transitionDelay: `${i * 50}ms` }}>
                    <Image 
                      src={`https://images.unsplash.com/photo-${id}?q=80&w=100&h=100&auto=format&fit=crop&crop=faces`} 
                      alt="User"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white bg-primary flex items-center justify-center text-white text-[9px] lg:text-[11px] font-black relative z-10 shadow-md">
                  +5K
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-accent-gold fill-accent-gold" />
                  ))}
                </div>
                <p className="text-[9px] lg:text-[11px] font-black text-gray-950 uppercase tracking-[0.2em]">Verified Trust Score</p>
              </div>
            </div>
          </div>

          {/* Right: Feature Cards */}
          <div className="trust-features-grid grid gap-5 lg:gap-6 w-full">
            {trustFeatures.map((feature, i) => (
              <div
                key={feature.title}
                className={`trust-feature-card p-6 lg:p-8 rounded-[24px] lg:rounded-[32px] border transition-all duration-1000 group flex flex-col sm:flex-row items-start gap-5 lg:gap-6 w-full ${
                  i === 0 
                    ? 'bg-primary text-white shadow-[0_30px_80px_rgba(56,142,60,0.3)] border-primary' 
                    : 'bg-white text-gray-950 border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.06)] hover:border-primary/20'
                }`}
              >
                <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:rotate-6 transition-transform duration-700 ${
                  i === 0 ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'
                }`}>
                  <feature.icon className="w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg lg:text-xl font-black tracking-tight leading-none">{feature.title}</h3>
                  <p className={`text-xs lg:text-base leading-relaxed font-medium ${i === 0 ? 'text-white/80' : 'text-gray-500'}`}>
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition Layer */}
        <div className="partners-layer pt-12 lg:pt-16 border-t border-gray-100/80">
          <p className="text-center text-[9px] lg:text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 mb-10 lg:mb-16">
            Official Booking Partner & Authorized Agent
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 lg:gap-x-20 gap-y-12 lg:gap-y-16">
            {partners.map((partner) => (
              <div key={partner.name} className="partner-logo flex flex-col items-center group cursor-default">
                <div className="relative mb-4">
                  <span className="font-serif font-black text-3xl lg:text-5xl text-gray-900/[0.03] group-hover:text-primary/[0.05] transition-colors duration-1000 tracking-tighter absolute -top-6 lg:-top-10 -left-3 lg:-left-6 pointer-events-none">
                    {partner.code}
                  </span>
                  <span className="relative z-10 font-sans font-black text-lg lg:text-2xl text-gray-950 tracking-tighter flex flex-col items-center text-center transition-all duration-700 group-hover:text-primary">
                    {partner.name.toUpperCase()}
                    <span className="h-[2px] w-0 bg-primary transition-all duration-700 group-hover:w-full mt-1.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
