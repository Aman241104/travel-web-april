"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Fingerprint, Plane, Globe, Hotel, Car, Landmark, ShieldCheck, CreditCard, ArrowRight, Sparkles } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const featuredServices = [
  { 
    title: "Domestic & International Custom Tour Packages", 
    desc: "Experience the world through a lens of luxury. Our master-crafted itineraries are tailored to your pace, preferences, and passions.", 
    icon: Globe,
    cta: "Explore Collections",
    color: "bg-primary",
    textColor: "text-white"
  },
  { 
    title: "Visitor Visa Services", 
    desc: "Navigate complex documentation with ease. Our specialists handle the friction so you can focus on the destination.", 
    icon: Landmark,
    cta: "Check Requirements",
    color: "bg-white",
    textColor: "text-gray-900"
  },
];

const standardServices = [
  { title: "Domestic & International Tickets", desc: "Access to private fares and seamless cabin upgrades for all your flights.", icon: Plane },
  { title: "Hotel Bookings", desc: "Curated stays with exclusive amenities and competitive rates worldwide.", icon: Hotel },
  { title: "Forex Services", desc: "Competitive foreign exchange rates delivered to your doorstep.", icon: CreditCard },
  { title: "Overseas Insurance", desc: "Comprehensive protection for total peace of mind during your travels.", icon: ShieldCheck },
  { title: "Car Rental", desc: "Luxury vehicles and reliable rentals waiting the moment you touch down.", icon: Car },
  { title: "Passport Support", desc: "Fast-track renewals and documentation guidance for all passport needs.", icon: Fingerprint },
];

export default function ServicesList() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Stagger
      gsap.fromTo(".services-headline-line", 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".services-header",
            start: "top 80%",
          }
        }
      );

      // Featured Cards Reveal
      gsap.fromTo(".featured-service-card", 
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.25,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".featured-services-grid",
            start: "top 70%",
          }
        }
      );

      // Standard Services Stagger
      gsap.fromTo(".standard-service-card", 
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.12,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".standard-services-grid",
            start: "top 75%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={containerRef} className="py-16 lg:py-28 bg-white relative overflow-hidden border-t border-gray-100 scroll-mt-24">
      {/* Refined Background Depth */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/[0.03] rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-emerald-100/20 rounded-full blur-[140px] -translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container-custom relative z-10">
        
        {/* Editorial Header */}
        <div className="services-header grid lg:grid-cols-[1.2fr_0.8fr] items-end mb-12 lg:mb-20 gap-12 lg:gap-24">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.5em] text-[10px] lg:text-[11px] mb-4">
              <span className="w-8 h-[1px] bg-primary/30" />
              Service Atelier
            </div>
            <h2 className="text-[36px] md:text-[52px] lg:text-[68px] xl:text-[80px] font-sans font-black text-gray-950 leading-[1] tracking-tightest uppercase">
              <span className="block services-headline-line">Precision In</span>
              <span className="block services-headline-line text-primary italic font-serif font-light lowercase">Every</span>
              <span className="block services-headline-line">Detail.</span>
            </h2>
          </div>
          <p className="text-gray-600 text-sm lg:text-xl leading-relaxed font-medium tracking-tight opacity-80">
            From first spark of inspiration to your final return, we manage every layer of your travel with surgical precision and artistic flair.
          </p>
        </div>

        {/* Featured Services Grid - Redesigned for Impact */}
        <div className="featured-services-grid grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 mb-12 lg:mb-20">
          {featuredServices.map((service, i) => (
            <div
              key={i}
              className={`featured-service-card p-8 lg:p-14 rounded-[40px] lg:rounded-[64px] relative overflow-hidden group border border-gray-100/80 ${
                service.color === 'bg-primary' 
                  ? "bg-primary text-white shadow-[0_40px_120px_rgba(56,142,60,0.25)]" 
                  : "bg-white text-gray-950 shadow-[0_20px_60px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.06)]"
              } transition-all duration-1000 ease-in-out cursor-default`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-16 h-16 lg:w-24 lg:h-24 rounded-[28px] lg:rounded-[40px] flex items-center justify-center mb-8 lg:mb-12 shadow-2xl transition-all duration-1000 group-hover:rotate-[15deg] group-hover:scale-110 ${
                  service.color === 'bg-primary' ? "bg-white/20 backdrop-blur-md" : "bg-primary/5"
                }`}>
                  <service.icon className={`w-8 h-8 lg:w-12 lg:h-12 ${service.color === 'bg-primary' ? "text-white" : "text-primary"}`} />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-[42px] font-sans font-black mb-6 lg:mb-8 tracking-tightest leading-[1] uppercase">{service.title}</h3>
                <p className={`text-sm lg:text-xl mb-10 lg:mb-16 leading-relaxed max-w-[500px] font-medium tracking-tight ${
                  service.color === 'bg-primary' ? "text-white/80" : "text-gray-500"
                }`}>
                  {service.desc}
                </p>
                <div className="mt-auto pt-6">
                  <button className={`flex items-center gap-6 font-black uppercase tracking-[0.4em] text-[10px] lg:text-[13px] group/btn transition-all duration-700 ${
                    service.color === 'bg-primary' ? "text-white" : "text-primary"
                  }`}>
                    <span className="relative">
                      {service.cta}
                      <span className={`absolute -bottom-2 left-0 w-full h-[2px] transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-700 origin-left ${service.color === 'bg-primary' ? "bg-white" : "bg-primary"}`} />
                    </span>
                    <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover/btn:translate-x-3 transition-transform duration-700" />
                  </button>
                </div>
              </div>
              
              {/* Luxury Accents */}
              <div className={`absolute -bottom-24 -right-24 w-80 h-80 rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-1000 ${
                service.color === 'bg-primary' ? "bg-white" : "bg-primary"
              }`} />
            </div>
          ))}
        </div>

        {/* Standard Services Grid - Editorial Minimalist */}
        <div className="standard-services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {standardServices.map((service, i) => (
            <div
              key={i}
              className="standard-service-card bg-white p-8 lg:p-12 rounded-[32px] lg:rounded-[48px] border border-gray-100/60 shadow-[0_10px_40px_rgba(0,0,0,0.01)] hover:border-primary/20 hover:shadow-[0_40px_100px_rgba(0,0,0,0.04)] transition-all duration-1000 group relative overflow-hidden"
            >
              {/* Editorial Background Text */}
              <span className="absolute -top-4 -left-4 font-serif font-black text-6xl lg:text-[100px] text-gray-950/[0.02] group-hover:text-primary/[0.04] transition-all duration-1000 leading-none tracking-tightest pointer-events-none select-none uppercase z-0 italic">
                {service.title.split(' ')[0][0]}
              </span>

              <div className="flex flex-col gap-8 lg:gap-12 relative z-10">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-[20px] lg:rounded-[24px] bg-gray-50 border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-1000 shrink-0 shadow-sm transform group-hover:rotate-12 group-hover:scale-110">
                  <service.icon className="w-6 h-6 lg:w-8 lg:h-8" />
                </div>
                <div className="space-y-4 lg:space-y-6">
                  <h4 className="text-xl lg:text-2xl font-sans font-black text-gray-950 group-hover:text-primary transition-colors duration-700 leading-tight tracking-tight uppercase">
                    {service.title}
                  </h4>
                  <p className="text-gray-500 text-sm lg:text-lg leading-relaxed font-medium tracking-tight">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conversion Bridge */}
        <div className="mt-24 lg:mt-40 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-4 bg-gray-50 rounded-full px-8 py-3.5 border border-gray-100 mb-12 shadow-inner">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <p className="text-[11px] lg:text-[13px] font-black text-gray-950 uppercase tracking-[0.5em]">
              Elevate Your Global Standards
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 lg:gap-10 w-full sm:w-auto">
            <MagneticButton 
              className="w-full sm:w-auto px-12 py-5 lg:px-16 lg:py-6 bg-primary text-white font-black rounded-full shadow-[0_20px_60px_rgba(56,142,60,0.3)] hover:bg-primary-dark transition-all text-[11px] lg:text-xs uppercase tracking-[0.4em] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10">Plan Your Journey</span>
            </MagneticButton>
            
            <button 
              className="w-full sm:w-auto px-12 py-5 lg:px-16 lg:py-6 bg-white border border-gray-200 text-gray-900 font-black rounded-full hover:border-primary hover:text-primary transition-all shadow-sm text-[11px] lg:text-xs uppercase tracking-[0.4em]"
            >
              Request A Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
