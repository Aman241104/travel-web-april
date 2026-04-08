"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Globe, Plane, Home, Car, CreditCard, ShieldCheck, Landmark, Fingerprint } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  { title: "Global Passports", desc: "Expert handling of applications and complex renewals.", icon: Fingerprint, accent: "bg-azure", glow: "bg-azure/10", hoverGlow: "group-hover:bg-azure/20" },
  { title: "Aviation Hub", desc: "Ticketing and private aviation network access.", icon: Plane, accent: "bg-sunset", glow: "bg-sunset/10", hoverGlow: "group-hover:bg-sunset/20" },
  { title: "Curated Itineraries", desc: "Bespoke tour packages designed around your vision.", icon: Globe, accent: "bg-jade", glow: "bg-jade/10", hoverGlow: "group-hover:bg-jade/20" },
  { title: "Elite Sanctuaries", desc: "Luxury hotel bookings with exclusive partner benefits.", icon: Home, accent: "bg-gold", glow: "bg-gold/10", hoverGlow: "group-hover:bg-gold/20" },
  { title: "Private Mobility", desc: "Chauffeur services and premium rentals worldwide.", icon: Car, accent: "bg-azure", glow: "bg-azure/10", hoverGlow: "group-hover:bg-azure/20" },
  { title: "Visitor Compliance", desc: "Technical expertise in global visa processing.", icon: Landmark, accent: "bg-sunset", glow: "bg-sunset/10", hoverGlow: "group-hover:bg-sunset/20" },
  { title: "Global Security", desc: "Comprehensive insurance for total peace of mind.", icon: ShieldCheck, accent: "bg-jade", glow: "bg-jade/10", hoverGlow: "group-hover:bg-jade/20" },
  { title: "Forex Liquidity", desc: "Competitive rates for seamless global spending.", icon: CreditCard, accent: "bg-gold", glow: "bg-gold/10", hoverGlow: "group-hover:bg-gold/20" },
];

export default function ServicesList() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".service-item", 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="py-32 md:py-56 bg-white relative transition-colors duration-1000">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-32 text-onyx">
          <span className="text-accent-blue font-sans text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">
            Capabilities
          </span>
          <h2 className="font-serif text-6xl md:text-[100px] leading-[0.9] tracking-tightest">
            Technical <span className="text-accent-blue italic font-light">Mastery</span> <br />
            Global <span className="text-onyx/30">Access.</span>
          </h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-onyx/10 border border-onyx/5 rounded-[2px] overflow-hidden shadow-2xl">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-item group p-12 bg-white hover:bg-bg-light transition-all duration-700 cursor-pointer relative"
            >
              <div className="flex items-start justify-between mb-20">
                <div className="w-10 h-10 flex items-center justify-center text-onyx group-hover:text-accent-blue transition-colors duration-500">
                  <service.icon className="w-6 h-6 stroke-[1.5px]" />
                </div>
                <span className="font-sans text-[10px] font-black text-onyx/10 tracking-widest">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
              </div>
              
              <h3 className="text-onyx font-sans text-[11px] font-black uppercase tracking-[0.3em] mb-6 group-hover:text-accent-blue transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-onyx/50 text-xs leading-relaxed font-medium group-hover:text-onyx transition-colors duration-500">
                {service.desc}
              </p>

              {/* Minimalist Hover Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-blue transition-all duration-700 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
