"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-content > *", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={containerRef} className="py-24 lg:py-60 bg-white overflow-hidden scroll-mt-24">
      <div className="container-custom">
        <div className="relative bg-[#0B1310] rounded-[56px] lg:rounded-[100px] overflow-hidden p-12 lg:p-40 text-center text-white shadow-[0_60px_150px_rgba(0,0,0,0.5)] group border border-white/10">
          
          {/* Immersive Background */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop" 
              alt="CTA Background"
              fill
              className="object-cover opacity-25 mix-blend-overlay transition-transform duration-[40s] group-hover:scale-110 ease-linear"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1310] via-[#0B1310]/80 to-transparent" />
          </div>

          {/* Atmospheric Internal Glows */}
          <div className="absolute -bottom-60 -right-60 w-[800px] h-[800px] bg-primary/25 rounded-full blur-[180px] pointer-events-none" />
          <div className="absolute -top-60 -left-60 w-[700px] h-[700px] bg-accent-gold/15 rounded-full blur-[150px] pointer-events-none" />

          {/* Rim Light Border */}
          <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-[56px] lg:rounded-[100px] z-20 pointer-events-none" />

          <div className="cta-content relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-3xl lg:rounded-[40px] bg-white/5 backdrop-blur-2xl border border-white/15 flex items-center justify-center mb-10 lg:mb-16 group-hover:scale-110 group-hover:rotate-6 transition-all duration-1000 group-hover:border-primary/40 shadow-2xl">
              <MessageCircle className="w-10 h-10 lg:w-14 lg:h-14 text-primary" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[110px] font-sans font-black mb-10 lg:mb-16 leading-[1.05] lg:leading-[0.9] max-w-[1200px] tracking-tighter drop-shadow-2xl">
              Ready to Write Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent-gold italic font-serif font-light">Next Great Story?</span>
            </h2>
            
            <p className="text-xl lg:text-3xl text-white/60 mb-16 lg:mb-28 max-w-3xl mx-auto leading-relaxed font-medium tracking-tight">
              Join our elite circle of global travelers and experience the world without compromise. Your private consultation is just a click away.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-12 w-full max-w-3xl mx-auto">
              <Link 
                href="https://wa.me/919825438324" 
                target="_blank"
                className="w-full sm:w-auto px-16 py-7 lg:px-24 lg:py-10 bg-primary hover:bg-primary-light text-white font-black rounded-2xl lg:rounded-[32px] flex items-center justify-center gap-5 lg:gap-8 transition-all shadow-[0_30px_70px_rgba(56,142,60,0.4)] hover:-translate-y-3 active:translate-y-0 group/btn text-base lg:text-2xl uppercase tracking-[0.4em] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10">Start Your Journey</span>
                <ArrowRight className="w-7 h-7 lg:w-9 lg:h-9 group-hover/btn:translate-x-4 transition-transform relative z-10" />
              </Link>
              <a 
                href="tel:+919825438324" 
                className="w-full sm:w-auto px-16 py-7 lg:px-24 lg:py-10 bg-white/5 backdrop-blur-2xl text-white font-black rounded-2xl lg:rounded-[32px] flex items-center justify-center gap-5 lg:gap-8 transition-all hover:bg-white/10 border border-white/20 text-base lg:text-2xl uppercase tracking-[0.4em] hover:border-white/40 shadow-2xl"
              >
                <span>Call Concierge</span>
                <Phone className="w-7 h-7 lg:w-9 lg:h-9 text-accent-gold group-hover:rotate-12 transition-transform" />
              </a>
            </div>

            <div className="mt-24 lg:mt-40 flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-40">
              {[
                "Expert Curation",
                "Global Access",
                "Zero Friction"
              ].map((label, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(56,142,60,0.8)]" />
                  <span className="text-[11px] lg:text-[14px] font-black uppercase tracking-[0.6em]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
