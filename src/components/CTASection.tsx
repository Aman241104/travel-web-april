"use client";
import { useEffect, useRef, useState } from "react";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(handle);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
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
    });

    return () => ctx.revert();
  }, [mounted]);

  if (!mounted) return <section className="h-[40vh] bg-[#0B1310]" />;

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="relative py-16 md:py-24 bg-[#0B1310] overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 z-0">
        <div 
          ref={bgRef}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center origin-center scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1310] via-[#0B1310]/80 to-[#0B1310]/40 z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          <div className="w-full lg:w-3/5">
            <div className="mb-4">
              <span className="inline-block text-[#C1A67B] font-sans text-[10px] md:text-xs font-black uppercase tracking-[0.6em]">
                Excellence Since MMVI
              </span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-7xl lg:text-[110px] text-[#F2EFE9] leading-[0.9] tracking-tightest mb-8">
              <span className="block">Begin Your</span>
              <span className="block italic font-light text-[#C1A67B]">Private Narrative</span>
            </h2>

            <p className="text-[#F2EFE9]/50 font-sans text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl mb-10">
              Connect with our private advisory to begin crafting an itinerary that reflects your unique standard of exploration.
            </p>

            <MagneticButton className="group relative px-8 py-5 md:px-12 md:py-6 bg-[#C1A67B] text-[#0B1310] font-bold text-[10px] uppercase tracking-[0.5em] rounded-full overflow-hidden shadow-2xl transition-all duration-700 hover:bg-[#0B1310]">
              <span className="relative z-10 flex items-center gap-6">
                Design Your Escape <ArrowUpRight className="w-5 h-5" />
              </span>
            </MagneticButton>
          </div>

          <div className="w-full lg:w-2/5 flex flex-col gap-4 md:gap-6 mt-16 lg:mt-0">
            <a 
              href="tel:+919825438324" 
              className="group p-8 md:p-10 rounded-2xl md:rounded-[3rem] bg-[#F2EFE9]/[0.03] border border-[#F2EFE9]/[0.05] hover:bg-[#F2EFE9]/[0.08] hover:border-[#C1A67B]/30 transition-all duration-500 flex items-center gap-6 backdrop-blur-xl"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#C1A67B]/10 flex items-center justify-center text-[#C1A67B] group-hover:scale-110 group-hover:bg-[#C1A67B] group-hover:text-[#0B1310] transition-all duration-500">
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-[#C1A67B] mb-1 md:mb-2">Direct Line</p>
                <p className="text-[#F2EFE9] font-serif text-2xl md:text-3xl tracking-tight">+91 98254 38324</p>
              </div>
            </a>

            <a 
              href="https://wa.me/919825438324?text=Hello%20Jade%20Travels%2C%20I%20would%20like%20to%20inquire%20about%20your%20bespoke%20travel%20services." 
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 md:p-10 rounded-2xl md:rounded-[3rem] bg-[#F2EFE9]/[0.03] border border-[#F2EFE9]/[0.05] hover:bg-[#F2EFE9]/[0.08] hover:border-[#25D366]/30 transition-all duration-500 flex items-center gap-6 backdrop-blur-xl"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 group-hover:bg-[#25D366] group-hover:text-[#0B1310] transition-all duration-500">
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-[#25D366] mb-1 md:mb-2">WhatsApp Concierge</p>
                <p className="text-[#F2EFE9] font-serif text-2xl md:text-3xl tracking-tight">Instant Access</p>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
