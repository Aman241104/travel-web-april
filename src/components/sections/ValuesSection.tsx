"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Heart, Shield, Zap, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
  const contentRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Content animation
      gsap.from(".values-content-item", {
        x: -40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
        }
      });

      // Polaroid animation
      gsap.from(".polaroid-item", {
        opacity: 0,
        scale: 0.8,
        y: 60,
        rotation: (i) => i === 0 ? -10 : 10,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imagesRef.current,
          start: "top 80%",
        }
      });

      // Seal animation
      gsap.from(".primary-seal", {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: imagesRef.current,
          start: "top 75%",
        }
      });

      // Refresh ScrollTrigger after a short delay
      setTimeout(() => ScrollTrigger.refresh(), 100);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 lg:py-48 bg-white overflow-hidden relative border-t border-gray-100">
      {/* Bright Background Texture */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_20%,rgba(56,142,60,0.035),transparent_70%)] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          
          {/* Content Side */}
          <div ref={contentRef} className="values-content w-full lg:w-1/2 space-y-10 lg:space-y-16">
            <div className="values-content-item">
              <div className="flex items-center gap-4 text-primary font-black uppercase tracking-[0.5em] text-[10px] lg:text-[11px] mb-6 lg:mb-8">
                <Sparkles className="w-4 h-4 lg:w-5 lg:h-5" />
                The Jade Distinction
              </div>
              <h2 className="text-[36px] md:text-[52px] lg:text-[80px] xl:text-[90px] font-sans font-black text-gray-950 leading-[1.1] lg:leading-[0.95] mb-8 lg:mb-12 tracking-tighter">
                Travel Without <br />
                <span className="text-primary italic font-serif font-light drop-shadow-sm">Stress.</span> We Handle <br className="hidden sm:block" />
                Everything.
              </h2>
            </div>

            <div className="space-y-6 lg:space-y-12">
              {benefits.map((benefit, i) => (
                <div 
                  key={i} 
                  className="values-content-item flex flex-col sm:flex-row gap-6 lg:gap-10 group p-6 lg:p-10 rounded-[32px] lg:rounded-[48px] bg-gray-50/60 border border-gray-100 hover:bg-white hover:shadow-[0_40px_100px_rgba(56,142,60,0.08)] transition-all duration-700 relative overflow-hidden"
                >
                  {/* Decorative Background Text */}
                  <span className="absolute -top-4 -left-2 lg:-top-6 lg:-left-3 font-sans font-black text-5xl lg:text-[100px] text-gray-950/[0.02] group-hover:text-primary/[0.04] transition-colors duration-1000 leading-none tracking-tighter pointer-events-none select-none whitespace-nowrap z-0">
                    {benefit.title.split(' ')[0]}
                  </span>

                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-[20px] lg:rounded-[28px] bg-white flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:-translate-y-2 transform group-hover:rotate-6 border border-gray-100 relative z-10">
                    <benefit.icon className="w-8 h-8 lg:w-10 lg:h-10" />
                  </div>
                  <div className="space-y-2 lg:space-y-3 relative z-10">
                    <h3 className="font-sans font-black text-xl lg:text-3xl text-gray-950 group-hover:text-primary transition-colors duration-500 tracking-tighter leading-none">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed max-w-[500px] text-sm lg:text-lg font-medium tracking-tight">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="values-content-item pt-6 lg:pt-12 flex flex-wrap items-center gap-6 lg:gap-12">
              <Link 
                href="#contact" 
                className="px-10 py-5 lg:px-16 lg:py-8 bg-primary text-white font-black rounded-full transition-all shadow-[0_20px_50px_rgba(56,142,60,0.3)] hover:bg-primary-dark hover:-translate-y-2 active:translate-y-0 text-xs lg:text-lg uppercase tracking-[0.3em] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10">Plan Your Trip</span>
              </Link>
              <Link 
                href="#packages" 
                className="text-gray-950 font-black uppercase tracking-[0.3em] text-[10px] lg:text-[13px] hover:text-primary transition-all flex items-center gap-6 group"
              >
                <span>Explore Collection</span>
                <div className="w-16 lg:w-24 h-[2px] bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                </div>
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div ref={imagesRef} className="values-images w-full lg:w-1/2 relative h-[500px] md:h-[700px] lg:h-[900px] flex items-center justify-center mt-12 lg:mt-0">
            {/* Background soft glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/5 rounded-full blur-[100px] md:blur-[150px] -z-10 animate-pulse" />

            {/* Santorini Polaroid */}
            <div 
              className="polaroid-item absolute top-10 left-4 md:top-20 md:left-10 lg:top-0 lg:-left-8 w-[220px] md:w-[320px] lg:w-[400px] bg-white p-3 md:p-6 pb-12 md:pb-24 lg:pb-32 shadow-[0_30px_70px_rgba(0,0,0,0.08)] border border-gray-100 cursor-pointer transition-all duration-700 ease-out z-20 hover:z-40 hover:scale-105 hover:-translate-y-6"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden grayscale-[0.6] group-hover:grayscale-0 transition-all duration-[1.2s] rounded-lg md:rounded-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1200&auto=format&fit=crop" 
                  alt="Tour" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <p className="mt-4 md:mt-6 lg:mt-8 text-center text-gray-950 font-serif italic text-xl md:text-3xl lg:text-5xl tracking-tighter opacity-95">Santorini, Greece</p>
            </div>

            {/* Maldives Polaroid */}
            <div 
              className="polaroid-item absolute bottom-10 right-4 md:bottom-20 md:right-10 lg:bottom-0 lg:-right-8 w-[240px] md:w-[380px] lg:w-[480px] bg-white p-4 md:p-8 pb-16 md:pb-32 lg:pb-40 shadow-[0_50px_100px_rgba(0,0,0,0.12)] border border-gray-100 cursor-pointer transition-all duration-700 ease-out z-10 hover:z-40 hover:scale-105 hover:-translate-y-6"
            >
              <div className="relative w-full aspect-square overflow-hidden grayscale-[0.4] group-hover:grayscale-0 transition-all duration-[1.2s] rounded-lg md:rounded-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop" 
                  alt="Tour" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <p className="mt-6 md:mt-8 lg:mt-10 text-center text-gray-950 font-serif italic text-2xl md:text-4xl lg:text-6xl tracking-tighter opacity-95">The Maldives</p>
            </div>

            {/* Primary Seal */}
            <div
              className="primary-seal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-primary rounded-full border-[6px] md:border-[12px] border-white shadow-[0_20px_40px_rgba(56,142,60,0.3)] z-30 flex items-center justify-center transform hover:rotate-[360deg] transition-transform duration-[1.5s] cursor-default"
            >
              <div className="text-center text-white">
                <div className="text-xl md:text-3xl lg:text-4xl font-black leading-none">100%</div>
                <div className="text-[7px] md:text-[10px] lg:text-[12px] font-black uppercase tracking-[0.4em] mt-1 md:mt-2">Bespoke</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


