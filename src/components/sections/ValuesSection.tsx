"use client";
import { useEffect, useRef } from "react";
import { Heart, Shield, Zap, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
      gsap.fromTo(".values-content-item", 
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 65%",
            toggleActions: "play none none none"
          }
        }
      );

      // Polaroid animation
      gsap.fromTo(".polaroid-item", 
        { opacity: 0, scale: 0.8, y: 60 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotation: (i) => i === 0 ? -10 : 10,
          stagger: 0.2,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imagesRef.current,
            start: "top 70%",
            toggleActions: "play none none none"
          }
        }
      );

      // Seal animation
      gsap.fromTo(".primary-seal", 
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: imagesRef.current,
            start: "top 65%",
            toggleActions: "play none none none"
          }
        }
      );

      // Refresh ScrollTrigger after a short delay
      setTimeout(() => ScrollTrigger.refresh(), 100);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-12 lg:py-24 bg-white overflow-hidden relative border-t border-gray-100">
      {/* Bright Background Texture */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_20%,rgba(56,142,60,0.035),transparent_70%)] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Content Side */}
          <div ref={contentRef} className="values-content w-full lg:w-1/2 space-y-6 lg:space-y-8">
            <div className="values-content-item">
              <div className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.5em] text-[9px] lg:text-[10px] mb-4 lg:mb-6">
                <Sparkles className="w-4 h-4 lg:w-5 lg:h-5" />
                The Jade Distinction
              </div>
              <h2 className="text-[28px] md:text-[36px] lg:text-[48px] xl:text-[56px] font-sans font-black text-gray-950 leading-[1.1] lg:leading-[1] mb-4 lg:mb-6 tracking-tighter">
                Travel Without <br />
                <span className="text-primary italic font-serif font-light drop-shadow-sm">Stress.</span> We Handle <br className="hidden sm:block" />
                Everything.
              </h2>
            </div>

            <div className="space-y-5 lg:space-y-6">
              {benefits.map((benefit, i) => (
                <div 
                  key={i} 
                  className="values-content-item flex flex-col sm:flex-row gap-4 lg:gap-6 group p-5 lg:p-6 rounded-[24px] lg:rounded-[32px] bg-gray-50/60 border border-gray-100 hover:bg-white hover:shadow-[0_40px_100px_rgba(56,142,60,0.08)] transition-all duration-700 relative overflow-hidden"
                >
                  {/* Decorative Background Text */}
                  <span className="absolute -top-3 -left-2 lg:-top-4 lg:-left-3 font-sans font-black text-3xl lg:text-[64px] text-gray-950/[0.02] group-hover:text-primary/[0.04] transition-colors duration-1000 leading-none tracking-tighter pointer-events-none select-none whitespace-nowrap z-0">
                    {benefit.title.split(' ')[0]}
                  </span>

                  <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-xl bg-white flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:-translate-y-1 transform group-hover:rotate-6 border border-gray-100 relative z-10">
                    <benefit.icon className="w-5 h-5 lg:w-7 lg:h-7" />
                  </div>
                  <div className="space-y-1 lg:space-y-2 relative z-10">
                    <h3 className="font-sans font-black text-lg lg:text-xl text-gray-950 group-hover:text-primary transition-colors duration-500 tracking-tight leading-none">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed max-w-[480px] text-xs lg:text-sm font-medium tracking-tight">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="values-content-item pt-4 lg:pt-6 flex flex-wrap items-center gap-6 lg:gap-10">
              <Link 
                href="#contact" 
                className="px-6 py-3 lg:px-10 lg:py-4 bg-primary text-white font-black rounded-full transition-all shadow-[0_20px_40px_rgba(56,142,60,0.3)] hover:bg-primary-dark hover:-translate-y-1 active:translate-y-0 text-[10px] lg:text-sm uppercase tracking-[0.2em] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10">Plan Your Trip</span>
              </Link>
              <Link 
                href="#packages" 
                className="text-gray-950 font-black uppercase tracking-[0.2em] text-[9px] lg:text-[10px] hover:text-primary transition-all flex items-center gap-3 lg:gap-5 group"
              >
                <span>Explore Collection</span>
                <div className="w-10 lg:w-14 h-[1.5px] bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                </div>
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div ref={imagesRef} className="values-images w-full lg:w-1/2 relative h-[350px] md:h-[450px] lg:h-[600px] flex items-center justify-center mt-10 lg:mt-0">
            {/* Background soft glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-primary/5 rounded-full blur-[80px] md:blur-[120px] -z-10 animate-pulse" />

            {/* Santorini Polaroid */}
            <div 
              className="polaroid-item absolute top-5 left-2 md:top-10 md:left-5 lg:top-0 lg:-left-6 w-[180px] md:w-[240px] lg:w-[320px] bg-white p-2.5 md:p-3.5 pb-8 md:pb-12 lg:pb-20 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 cursor-pointer transition-all duration-700 ease-out z-20 hover:z-40 hover:scale-105 hover:-translate-y-4"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden grayscale-[0.6] group-hover:grayscale-0 transition-all duration-[1.2s] rounded-lg md:rounded-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1200&auto=format&fit=crop" 
                  alt="Tour" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <p className="mt-3 lg:mt-5 text-center text-gray-950 font-serif italic text-base md:text-xl lg:text-2xl tracking-tighter opacity-95">Santorini, Greece</p>
            </div>

            {/* Maldives Polaroid */}
            <div 
              className="polaroid-item absolute bottom-5 right-2 md:bottom-10 md:right-5 lg:bottom-0 lg:-right-6 w-[200px] md:w-[280px] lg:w-[350px] bg-white p-2.5 md:p-4 pb-10 md:pb-16 lg:pb-24 shadow-[0_30px_70px_rgba(0,0,0,0.1)] border border-gray-100 cursor-pointer transition-all duration-700 ease-out z-10 hover:z-40 hover:scale-105 hover:-translate-y-4"
            >
              <div className="relative w-full aspect-square overflow-hidden grayscale-[0.4] group-hover:grayscale-0 transition-all duration-[1.2s] rounded-lg md:rounded-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop" 
                  alt="Tour" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <p className="mt-3 lg:mt-5 text-center text-gray-950 font-serif italic text-lg md:text-2xl lg:text-3xl tracking-tighter opacity-95">The Maldives</p>
            </div>

            {/* Primary Seal */}
            <div
              className="primary-seal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-28 md:h-28 lg:w-36 lg:h-36 bg-primary rounded-full border-[3px] md:border-[6px] border-white shadow-[0_15px_30px_rgba(56,142,60,0.3)] z-30 flex items-center justify-center transform hover:rotate-[360deg] transition-transform duration-[1.5s] cursor-default"
            >
              <div className="text-center text-white">
                <div className="text-base md:text-xl lg:text-2xl font-black leading-none">100%</div>
                <div className="text-[5px] md:text-[7px] lg:text-[9px] font-black uppercase tracking-[0.3em] mt-0.5 md:mt-1.5">Bespoke</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
