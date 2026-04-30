"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowUpRight, Phone, MessageCircle } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax for background
      gsap.to(bgRef.current, {
        yPercent: 15,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      // Text reveal animations
      gsap.from(".cta-reveal", {
        yPercent: 100,
        stagger: 0.1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      // Contact nodes entry
      gsap.from(".contact-node", {
        x: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-grid",
          start: "top 85%",
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="relative py-24 md:py-40 bg-[#0F2F2A] overflow-hidden scroll-mt-24"
    >
      {/* Cinematic Parallax Background */}
      <div className="absolute inset-0 z-0">
        <div 
          ref={bgRef}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center origin-center scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2F2A] via-[#0F2F2A]/60 to-[#0F2F2A]/20 z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-20">
          
          {/* Main Narrative Side */}
          <div className="max-w-4xl">
            <div className="overflow-hidden mb-8">
              <span className="cta-reveal inline-block text-[#6FC3B2] font-sans text-[10px] md:text-xs font-black uppercase tracking-[0.6em]">
                Excellence Since 2011
              </span>
            </div>
            
            <h2 className="font-serif text-6xl md:text-[100px] lg:text-[130px] text-white leading-[0.85] tracking-tightest mb-16">
              <div className="overflow-hidden">
                <span className="cta-reveal inline-block">Begin Your</span>
              </div>
              <div className="overflow-hidden italic font-light text-[#6FC3B2]">
                <span className="cta-reveal inline-block">Private Narrative</span>
              </div>
            </h2>

            <div className="overflow-hidden mb-16">
              <p className="cta-reveal inline-block text-white/50 font-sans text-xl lg:text-2xl leading-relaxed max-w-xl">
                Connect with our private advisory to begin crafting an itinerary that reflects your unique standard of exploration.
              </p>
            </div>

            <div className="cta-reveal">
              <MagneticButton className="group relative px-16 py-8 bg-[#6FC3B2] text-[#0F2F2A] font-bold text-[10px] uppercase tracking-[0.5em] rounded-full overflow-hidden shadow-2xl transition-all duration-700 hover:scale-105">
                <span className="relative z-10 flex items-center gap-6">
                  Design Your Escape <ArrowUpRight className="w-5 h-5" />
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              </MagneticButton>
            </div>
          </div>

          {/* Contact Suite Side */}
          <div className="contact-grid flex flex-col gap-6 w-full lg:w-auto">
            <a 
              href="tel:+919825438324" 
              className="contact-node group p-10 rounded-[3rem] bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] hover:border-[#6FC3B2]/30 transition-all duration-500 flex items-center gap-8 backdrop-blur-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#6FC3B2]/10 flex items-center justify-center text-[#6FC3B2] group-hover:scale-110 group-hover:bg-[#6FC3B2] group-hover:text-[#0F2F2A] transition-all duration-500">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#6FC3B2] mb-2">Direct Line</p>
                <p className="text-white font-serif text-3xl tracking-tight">+91 98254 38324</p>
              </div>
            </a>

            <a 
              href="#" 
              className="contact-node group p-10 rounded-[3rem] bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] hover:border-[#25D366]/30 transition-all duration-500 flex items-center gap-8 backdrop-blur-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 group-hover:bg-[#25D366] group-hover:text-white transition-all duration-500">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#25D366] mb-2">WhatsApp Concierge</p>
                <p className="text-white font-serif text-3xl tracking-tight">Instant Access</p>
              </div>
            </a>
          </div>

        </div>

        {/* Closing Watermark */}
        <div className="mt-32 pt-20 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-12 text-white/20 font-sans text-[10px] font-bold uppercase tracking-[0.5em]">
          <span>© 2026 Jade Tours & Travel</span>
          <span className="italic font-serif normal-case tracking-widest">The Art of Effortless Exploration</span>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </section>
  );
}
