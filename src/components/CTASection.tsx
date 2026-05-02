"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(".cta-badge", 
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(".cta-title", 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 65%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(".cta-desc", 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(".cta-btns > *", 
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 55%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(".cta-footer-item", 
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 50%",
            toggleActions: "play none none none"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={containerRef} className="py-12 lg:py-24 bg-white overflow-hidden scroll-mt-24">
      <div className="container-custom">
        <div className="relative bg-[#0B1310] rounded-[32px] lg:rounded-[64px] overflow-hidden p-6 lg:p-16 text-center text-white shadow-[0_60px_150px_rgba(0,0,0,0.5)] group border border-white/10">
          
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
          <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-[32px] lg:rounded-[64px] z-20 pointer-events-none" />

          <div className="cta-content relative z-10 flex flex-col items-center">
            <div className="cta-badge w-10 h-10 lg:w-16 lg:h-16 rounded-xl lg:rounded-[24px] bg-white/5 backdrop-blur-2xl border border-white/15 flex items-center justify-center mb-6 lg:mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-1000 group-hover:border-primary/40 shadow-2xl">
              <MessageCircle className="w-5 h-5 lg:w-8 lg:h-8 text-primary" />
            </div>

            <h2 className="cta-title text-xl md:text-3xl lg:text-[52px] xl:text-[60px] font-sans font-black mb-6 lg:mb-10 leading-[1.1] lg:leading-[1] max-w-[900px] tracking-tighter drop-shadow-2xl">
              Ready to Write Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent-gold italic font-serif font-light">Next Great Story?</span>
            </h2>
            
            <p className="cta-desc text-sm lg:text-lg text-white/60 mb-10 lg:mb-16 max-w-xl mx-auto leading-relaxed font-medium tracking-tight">
              Join our elite circle of global travelers and experience the world without compromise. Your private consultation is just a click away.
            </p>
            
            <div className="cta-btns flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-8 w-full max-w-xl mx-auto">
              <Link 
                href="https://wa.me/919825438324" 
                target="_blank"
                className="w-full sm:w-auto px-8 py-3.5 lg:px-12 lg:py-5 bg-primary hover:bg-primary-light text-white font-black rounded-lg lg:rounded-[16px] flex items-center justify-center gap-3 lg:gap-4 transition-all shadow-[0_20px_40px_rgba(56,142,60,0.4)] hover:-translate-y-1 active:translate-y-0 group/btn text-[10px] lg:text-sm uppercase tracking-[0.2em] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10">Start Your Journey</span>
                <ArrowRight className="w-4 h-4 lg:w-6 lg:h-6 group-hover/btn:translate-x-2 transition-transform relative z-10" />
              </Link>
              <a 
                href="tel:+919825438324" 
                className="w-full sm:w-auto px-8 py-3.5 lg:px-12 lg:py-5 bg-white/5 backdrop-blur-2xl text-white font-black rounded-lg lg:rounded-[16px] flex items-center justify-center gap-3 lg:gap-4 transition-all hover:bg-white/10 border border-white/20 text-[10px] lg:text-sm uppercase tracking-[0.2em] hover:border-white/40 shadow-2xl"
              >
                <span>Call Concierge</span>
                <Phone className="w-4 h-4 lg:w-6 lg:h-6 text-accent-gold group-hover:rotate-12 transition-transform" />
              </a>
            </div>

            <div className="mt-12 lg:mt-20 flex flex-wrap justify-center items-center gap-6 lg:gap-10 opacity-40">
              {[
                "Expert Curation",
                "Global Access",
                "Zero Friction"
              ].map((label, idx) => (
                <div key={idx} className="cta-footer-item flex items-center gap-2.5">
                  <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(56,142,60,0.8)]" />
                  <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.3em]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
