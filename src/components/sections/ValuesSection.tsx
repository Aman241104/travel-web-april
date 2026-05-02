"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Heart, Shield, Zap, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

const benefits = [
  { 
    title: "Zero Surprises Pricing", 
    desc: "What you see is exactly what you pay. No hidden fees, no last-minute adjustments. Just total transparency.", 
    icon: Shield 
  },
  { 
    title: "Master-Crafted Itineraries", 
    desc: "Our specialists don't just book hotels; they weave together unique narratives tailored to your absolute standard.", 
    icon: Heart 
  },
  { 
    title: "Frictionless Reality", 
    desc: "A dedicated concierge anticipates every variable, ensuring you stay in the moment while we handle the logistics.", 
    icon: Zap 
  },
];

export default function ValuesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".values-content > *", {
        x: -60,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".values-content",
          start: "top 80%",
        }
      });

      gsap.from(".polaroid-item", {
        opacity: 0,
        y: 100,
        rotation: (i) => i === 0 ? -20 : 20,
        stagger: 0.3,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 lg:py-60 bg-white overflow-hidden relative border-t border-gray-100">
      {/* Bright Background Texture */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_20%,rgba(56,142,60,0.035),transparent_70%)] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-32 lg:gap-48">
          
          {/* Content Side */}
          <div className="values-content w-full lg:w-1/2 space-y-16 lg:space-y-20">
            <div>
              <div className="flex items-center gap-4 text-primary font-black uppercase tracking-[0.5em] text-[11px] mb-10">
                <Sparkles className="w-5 h-5" />
                The Jade Distinction
              </div>
              <h2 className="text-[52px] lg:text-[100px] font-sans font-black text-gray-950 leading-[0.95] mb-14 tracking-tighter">
                Travel Without <br />
                <span className="text-primary italic font-serif font-light drop-shadow-sm">Stress.</span> We Handle <br />
                Everything.
              </h2>
            </div>

            <div className="space-y-12 lg:space-y-16">
              {benefits.map((benefit, i) => (
                <div 
                  key={i} 
                  className="flex flex-col sm:flex-row gap-8 lg:gap-12 group p-8 lg:p-12 rounded-[48px] bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-[0_40px_100px_rgba(56,142,60,0.08)] transition-all duration-1000 relative overflow-hidden"
                >
                  {/* Decorative Background Text */}
                  <span className="absolute -top-4 -left-2 lg:-top-8 lg:-left-4 font-sans font-black text-6xl lg:text-[120px] text-gray-950/[0.02] group-hover:text-primary/[0.04] transition-colors duration-1000 leading-none tracking-tighter pointer-events-none select-none whitespace-nowrap z-0">
                    {benefit.title.split(' ')[0]}
                  </span>

                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-[28px] lg:rounded-[32px] bg-white flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-sm group-hover:-translate-y-3 transform group-hover:rotate-6 border border-gray-100 relative z-10">
                    <benefit.icon className="w-10 h-10 lg:w-12 lg:h-12" />
                  </div>
                  <div className="space-y-4 relative z-10">
                    <h3 className="font-sans font-black text-3xl lg:text-4xl text-gray-950 group-hover:text-primary transition-colors duration-500 tracking-tighter leading-none">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed max-w-[540px] text-lg lg:text-xl font-medium tracking-tight">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-12 flex flex-wrap items-center gap-12">
              <Link 
                href="#contact" 
                className="px-16 py-8 lg:px-20 lg:py-10 bg-primary text-white font-black rounded-full transition-all shadow-[0_30px_70px_rgba(56,142,60,0.35)] hover:bg-primary-dark hover:-translate-y-3 active:translate-y-0 text-sm lg:text-xl uppercase tracking-[0.4em] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10">Plan Your Trip</span>
              </Link>
              <Link 
                href="#packages" 
                className="text-gray-950 font-black uppercase tracking-[0.4em] text-[12px] lg:text-[14px] hover:text-primary transition-all flex items-center gap-8 group"
              >
                <span>Explore Collection</span>
                <div className="w-20 lg:w-28 h-[2px] bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                </div>
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div className="values-images w-full lg:w-1/2 relative h-[800px] lg:h-[900px] flex items-center justify-center">
            {/* Background soft glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10 animate-pulse" />

            {/* Santorini Polaroid */}
            <div 
              className="polaroid-item absolute top-0 left-0 lg:-left-16 w-[360px] lg:w-[420px] bg-white p-6 pb-24 lg:pb-32 shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-gray-100 cursor-pointer transition-all duration-1000 ease-out z-20 hover:z-40 hover:scale-110 hover:-translate-y-8"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-[1.5s] rounded-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1200&auto=format&fit=crop" 
                  alt="Tour" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <p className="mt-8 text-center text-gray-950 font-serif italic text-3xl lg:text-5xl tracking-tighter opacity-95">Santorini, Greece</p>
            </div>

            {/* Maldives Polaroid */}
            <div 
              className="polaroid-item absolute bottom-10 right-0 lg:-right-10 w-[420px] lg:w-[500px] bg-white p-8 pb-32 lg:pb-40 shadow-[0_60px_140px_rgba(0,0,0,0.15)] border border-gray-100 cursor-pointer transition-all duration-1000 ease-out z-10 hover:z-40 hover:scale-110 hover:-translate-y-8"
            >
              <div className="relative w-full aspect-square overflow-hidden grayscale hover:grayscale-0 transition-all duration-[1.5s] rounded-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop" 
                  alt="Tour" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <p className="mt-10 text-center text-gray-950 font-serif italic text-4xl lg:text-6xl tracking-tighter opacity-95">The Maldives</p>
            </div>

            {/* Primary Seal */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 lg:w-56 lg:h-56 bg-primary rounded-full border-[12px] border-white shadow-[0_30px_60px_rgba(56,142,60,0.4)] z-30 flex items-center justify-center transform hover:rotate-[360deg] transition-transform duration-[1.5s] cursor-default"
            >
              <div className="text-center text-white">
                <div className="text-3xl lg:text-4xl font-black leading-none">100%</div>
                <div className="text-[10px] lg:text-[12px] font-black uppercase tracking-[0.4em] mt-2">Bespoke</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
