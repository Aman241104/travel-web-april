"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Quote, Star, Sparkles, CheckCircle2, Globe } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    quote: "Jade doesn't just plan trips; they engineer peace of mind. From private terminal access to hand-picked local guides, every detail was handled with precision.",
    highlight: "engineer peace of mind",
    author: "Elena V.",
    role: "Global Philanthropist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    location: "Zurich, Switzerland",
    featured: true
  },
  {
    quote: "The level of discretion and exclusive access Jigar and his team provide is unparalleled. They managed our 12-country tour without a single friction point.",
    highlight: "without a single friction point",
    author: "Marcus T.",
    role: "Tech Executive",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
    location: "Palo Alto, CA",
    featured: false
  },
  {
    quote: "Finally, a travel concierge that understands the value of time. No friction, no noise. Just perfectly executed experiences that stay with you forever.",
    highlight: "perfectly executed experiences",
    author: "Sarah J.",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
    location: "London, UK",
    featured: false
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline Reveal
      gsap.fromTo(".testimonials-headline-line", 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".testimonials-header",
            start: "top 85%",
          }
        }
      );

      // Cards Sequence
      gsap.fromTo(".testimonial-card", 
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.25,
          duration: 1.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".testimonials-grid",
            start: "top 75%",
          }
        }
      );

      // Trust Badges Reveal
      gsap.fromTo(".trust-badge-item", 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".trust-badges-layer",
            start: "top 90%",
          }
        }
      );

      // Floating Quote Parallax
      gsap.to(".floating-quote", {
        y: -30,
        rotate: 15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" ref={containerRef} className="py-16 lg:py-28 bg-white overflow-hidden relative scroll-mt-24">
      {/* Cinematic Background Atmosphere */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_90%_10%,rgba(56,142,60,0.03),transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_90%,rgba(56,142,60,0.02),transparent_50%)] pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* Editorial Header */}
        <div className="testimonials-header flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-20 gap-12">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.6em] text-[10px] lg:text-[11px] mb-4">
              <span className="w-8 h-[1px] bg-primary/30" />
              The Guest Chronicles
            </div>
            <h2 className="text-[36px] md:text-[52px] lg:text-[68px] xl:text-[80px] font-sans font-black text-gray-950 leading-[1] tracking-tightest uppercase">
              <span className="block testimonials-headline-line">Voices Of The</span>
              <span className="block testimonials-headline-line text-primary italic font-serif font-light lowercase">Extraordinary.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-6">
            <div className="flex items-center gap-4 px-6 py-3 bg-gray-50 rounded-[20px] border border-gray-100 shadow-inner">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-accent-gold text-accent-gold" />
                ))}
              </div>
              <div className="w-[1px] h-4 bg-gray-200" />
              <span className="font-sans font-black text-gray-950 text-sm lg:text-lg tracking-tighter">4.9/5 RATING</span>
            </div>
            <p className="text-[10px] lg:text-[11px] font-bold text-gray-400 uppercase tracking-[0.4em] lg:text-right">
              Based on 2,300+ Verified Journeys
            </p>
          </div>
        </div>

        {/* Immersive Grid */}
        <div className="testimonials-grid grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* Master Story (Featured) */}
          {testimonials.filter(t => t.featured).map((item, i) => (
            <div
              key={i}
              className="testimonial-card lg:col-span-7 bg-[#050807] rounded-[40px] lg:rounded-[64px] p-8 md:p-14 lg:p-20 text-white relative overflow-hidden group shadow-[0_60px_120px_rgba(0,0,0,0.5)] border border-white/5"
            >
              <Quote className="floating-quote absolute top-10 right-10 lg:top-16 lg:right-16 w-32 h-32 lg:w-48 lg:h-48 text-white/[0.03] group-hover:text-white/[0.06] transition-all duration-1000 rotate-12 pointer-events-none" />

              <div className="relative z-10 space-y-10 lg:space-y-16">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 lg:w-6 lg:h-6 fill-accent-gold text-accent-gold border-none drop-shadow-[0_0_15px_rgba(197,160,89,0.4)]" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-3xl lg:text-[42px] font-sans font-medium mb-10 leading-[1.2] tracking-tightest italic">
                  &ldquo;{item.quote.split(item.highlight)[0]}
                  <span className="text-primary italic font-serif font-light underline decoration-primary/20 underline-offset-[8px] decoration-2">
                    {item.highlight}
                  </span>
                  {item.quote.split(item.highlight)[1]}&rdquo;
                </blockquote>

                <div className="flex items-center gap-6 lg:gap-10">
                  <div className="relative w-20 h-20 lg:w-28 lg:h-28 rounded-[24px] lg:rounded-[36px] overflow-hidden border-2 border-white/10 shadow-3xl group-hover:scale-110 transition-transform duration-1000 ease-out shrink-0">
                    <Image src={item.image} alt={item.author} fill className="object-cover" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl lg:text-3xl font-sans font-black tracking-tightest uppercase">{item.author}</h4>
                    <div className="flex flex-col gap-1">
                      <p className="text-[10px] lg:text-[12px] text-primary font-black uppercase tracking-[0.4em]">{item.role}</p>
                      <p className="text-[9px] lg:text-[11px] text-white/30 uppercase tracking-[0.2em] font-bold">{item.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Atmospheric Glow */}
              <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          ))}

          {/* Supporting Stories */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:gap-12">
            {testimonials.filter(t => !t.featured).map((item, i) => (
              <div
                key={i}
                className="testimonial-card bg-gray-50 p-8 lg:p-12 rounded-[32px] lg:rounded-[48px] shadow-[0_15px_50px_rgba(0,0,0,0.02)] border border-gray-100/60 flex-1 relative group transition-all duration-1000 hover:bg-white hover:shadow-[0_40px_100px_rgba(0,0,0,0.05)] hover:border-primary/20 overflow-hidden"
              >
                {/* Floating Micro Quote */}
                <Quote className="absolute -top-4 -right-4 w-20 h-20 text-primary/[0.03] group-hover:text-primary/[0.06] transition-all duration-1000 -rotate-12" />

                <div className="flex items-center gap-1.5 mb-6 lg:mb-10">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3 h-3 lg:w-4 lg:h-4 fill-accent-gold text-accent-gold border-none" />
                  ))}
                </div>

                <blockquote className="text-base lg:text-xl text-gray-800 font-sans font-medium mb-8 lg:mb-12 leading-relaxed tracking-tight">
                  &ldquo;{item.quote.split(item.highlight)[0]}
                  <span className="font-black text-gray-950 border-b border-primary/20">
                    {item.highlight}
                  </span>
                  {item.quote.split(item.highlight)[1]}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4 lg:gap-6">
                  <div className="relative w-14 h-14 lg:w-20 lg:h-20 rounded-[18px] lg:rounded-[24px] overflow-hidden shadow-xl group-hover:scale-110 transition-transform duration-1000 ease-out shrink-0 border border-white">
                    <Image src={item.image} alt={item.author} fill className="object-cover" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg lg:text-xl font-sans font-black text-gray-950 leading-none tracking-tight uppercase">{item.author}</h4>
                    <p className="text-[9px] lg:text-[11px] text-primary font-black uppercase tracking-[0.3em]">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Trust Proofs - Premium Badge Garden */}
        <div className="trust-badges-layer mt-20 lg:mt-32 pt-20 lg:pt-32 border-t border-gray-100 flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-1000">
          
          <div className="trust-badge-item flex flex-col items-center gap-4 group cursor-default">
            <div className="flex items-center gap-1 bg-[#00b67a] p-1.5 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-700">
               {[1, 2, 3, 4, 5].map((s) => (
                <div key={s} className="w-4 h-4 lg:w-6 lg:h-6 bg-white flex items-center justify-center text-[#00b67a] text-[8px] lg:text-[12px] font-black">★</div>
              ))}
            </div>
            <span className="text-[10px] lg:text-[11px] font-black text-gray-950 uppercase tracking-[0.5em]">TRUSTPILOT ELITE</span>
          </div>

          <div className="trust-badge-item flex flex-col items-center gap-4 group cursor-default">
            <div className="flex items-center gap-3 bg-white px-6 py-2 rounded-xl border border-gray-200 shadow-sm group-hover:border-primary/30 group-hover:shadow-xl transition-all duration-700">
              <span className="text-xl lg:text-3xl font-black text-gray-950">4.9</span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3 h-3 lg:w-4 lg:h-4 fill-accent-gold text-accent-gold" />
                ))}
              </div>
            </div>
            <span className="text-[10px] lg:text-[11px] font-black text-gray-950 uppercase tracking-[0.5em]">GOOGLE VERIFIED</span>
          </div>

          <div className="trust-badge-item flex flex-col items-center gap-3 group cursor-default">
            <span className="text-3xl lg:text-5xl font-serif font-black text-primary drop-shadow-sm group-hover:scale-110 transition-transform duration-700">2.3K+</span>
            <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.5em] text-gray-400 text-center">GLOBAL STORIES</span>
          </div>
          
        </div>
      </div>
    </section>
  );
}
