"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Award, CheckCircle2, Globe2, Sparkles, Lock } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";

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
    const ctx = gsap.context(() => {
      gsap.from(".trust-feature-card", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".trust-features-grid",
          start: "top 85%",
        }
      });

      gsap.from(".partner-logo", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".partners-layer",
          start: "top 95%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative z-20 py-24 lg:py-48 bg-white overflow-hidden border-t border-gray-100">
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_20%,rgba(56,142,60,0.025),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(circle_at_30%_80%,rgba(56,142,60,0.015),transparent_70%)] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-32 items-center mb-24 lg:mb-48">
          
          {/* Left: Content */}
          <div className="space-y-12 lg:space-y-16 relative">
            {/* Background Decorative Circles */}
            <div className="absolute -top-20 -left-20 w-[400px] h-[400px] border border-primary/5 rounded-full pointer-events-none" />
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] border border-primary/5 rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 text-primary font-black uppercase tracking-[0.4em] text-[11px] mb-8">
                <ShieldCheck className="w-5 h-5" />
                Reliability & Excellence
              </div>
              <h2 className="text-[40px] md:text-[52px] lg:text-[75px] xl:text-[85px] font-sans font-black text-gray-950 leading-[1.05] lg:leading-[1] mb-12 tracking-tighter">
                A Legacy of <br />
                <span className="text-primary italic font-serif font-light drop-shadow-sm">Uncompromising</span> Trust.
              </h2>
              <p className="text-lg lg:text-2xl text-gray-600 leading-relaxed max-w-[620px] font-medium tracking-tight">
                For those who value discretion as much as discovery. Jade Tours and Travels defines the gold standard of travel security and curated excellence.
              </p>
            </div>
            
            {/* Social Proof Badge - Enhanced Readability */}
            <div className="inline-flex items-center gap-8 p-8 lg:p-10 bg-gray-50/50 backdrop-blur-sm rounded-[40px] border border-gray-100 shadow-sm group hover:shadow-2xl transition-all duration-1000">
              <div className="flex -space-x-4">
                {[
                  "1534528741775-53994a69daeb",
                  "1507003211169-0a1dd7228f2d",
                  "1500648767791-00dcc994a43e",
                  "1494790108377-be9c29b29330"
                ].map((id, i) => (
                  <div key={i} className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border-4 border-white overflow-hidden bg-gray-200 relative shadow-md group-hover:translate-y-[-6px] transition-transform duration-500" style={{ transitionDelay: `${i * 50}ms` }}>
                    <Image 
                      src={`https://images.unsplash.com/photo-${id}?q=80&w=100&h=100&auto=format&fit=crop&crop=faces`} 
                      alt="User"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border-4 border-white bg-primary flex items-center justify-center text-white text-[11px] lg:text-[13px] font-black relative z-10 shadow-md">
                  +5K
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 lg:w-5 lg:h-5 text-accent-gold fill-accent-gold" />
                  ))}
                </div>
                <p className="text-[11px] lg:text-[13px] font-black text-gray-950 uppercase tracking-[0.25em]">4.9/5 Verified Trust Score</p>
              </div>
            </div>
          </div>

          {/* Right: Feature Cards - Enhanced Shadow and Contrast */}
          <div className="trust-features-grid grid gap-8 lg:gap-10 w-full">
            {trustFeatures.map((feature, i) => (
              <div
                key={feature.title}
                className={`trust-feature-card p-10 lg:p-14 rounded-[48px] lg:rounded-[56px] border transition-all duration-1000 group flex flex-col sm:flex-row items-start gap-8 lg:gap-12 w-full ${
                  i === 0 
                    ? 'bg-primary text-white shadow-[0_40px_100px_rgba(56,142,60,0.3)] border-primary' 
                    : 'bg-white text-gray-950 border-gray-100 shadow-[0_15px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] hover:border-primary/20'
                }`}
              >
                <div className={`w-16 h-16 lg:w-24 lg:h-24 rounded-3xl lg:rounded-[32px] flex items-center justify-center shrink-0 shadow-xl group-hover:rotate-6 transition-transform duration-700 ${
                  i === 0 ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'
                }`}>
                  <feature.icon className="w-8 h-8 lg:w-12 lg:h-12" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-4xl font-black tracking-tighter leading-none">{feature.title}</h3>
                  <p className={`text-base lg:text-xl leading-relaxed font-medium ${i === 0 ? 'text-white/80' : 'text-gray-500'}`}>
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition Layer - More Subtle and Refined */}
        <div className="partners-layer pt-24 lg:pt-32 border-t border-gray-100/80">
          <p className="text-center text-[10px] lg:text-[11px] font-black uppercase tracking-[0.6em] text-gray-400 mb-20 lg:mb-32">
            Official Booking Partner & Authorized Agent
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 lg:gap-x-40 gap-y-20 lg:gap-y-32">
            {partners.map((partner) => (
              <div key={partner.name} className="partner-logo flex flex-col items-center group cursor-default">
                <div className="relative mb-8">
                  <span className="font-serif font-black text-4xl lg:text-8xl text-gray-900/[0.03] group-hover:text-primary/[0.05] transition-colors duration-1000 tracking-tighter absolute -top-12 lg:-top-20 -left-6 lg:-left-12 pointer-events-none">
                    {partner.code}
                  </span>
                  <span className="relative z-10 font-sans font-black text-2xl lg:text-5xl text-gray-950 tracking-tighter flex flex-col items-center text-center transition-all duration-700 group-hover:text-primary">
                    {partner.name.toUpperCase()}
                    <span className="h-[3px] w-0 bg-primary transition-all duration-700 group-hover:w-full mt-3" />
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
