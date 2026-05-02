"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Fingerprint, Plane, Globe, Hotel, Car, Landmark, ShieldCheck, CreditCard, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";

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
      gsap.from(".services-header > *", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1.4,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".services-header",
          start: "top 85%",
        }
      });

      gsap.from(".featured-service-card", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        }
      });

      gsap.from(".standard-service-card", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".standard-services-grid",
          start: "top 85%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={containerRef} className="py-24 lg:py-48 bg-gray-50 relative overflow-hidden border-t border-gray-100 scroll-mt-24">
      {/* Bright Background Depth */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-emerald-100/30 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/2" />
      </div>
      
      <div className="container-custom relative z-10">
        
        {/* Header - Bright Typography */}
        <div className="services-header grid lg:grid-cols-[1.2fr_0.8fr] items-end mb-20 lg:mb-32 gap-12 lg:gap-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 text-primary font-black uppercase tracking-[0.5em] text-[11px] mb-8 lg:mb-10">
              <Sparkles className="w-5 h-5" />
              Comprehensive Travel Solutions
            </div>
            <h2 className="text-5xl lg:text-[130px] font-sans font-black text-gray-950 leading-[1] tracking-tighter">
              Bespoke <br />
              <span className="text-primary italic font-serif font-light drop-shadow-sm">Services.</span>
            </h2>
          </div>
          <p className="text-gray-600 text-xl lg:text-3xl leading-relaxed font-medium tracking-tight">
            From the first spark of inspiration to the final return, we manage every layer of your travel with surgical precision and artistic flair.
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="featured-services-grid grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-32">
          {featuredServices.map((service, i) => (
            <div
              key={i}
              className={`featured-service-card p-12 lg:p-24 rounded-[56px] lg:rounded-[80px] relative overflow-hidden group border border-gray-100/50 ${
                service.color === 'bg-primary' 
                  ? "bg-primary text-white shadow-[0_50px_120px_rgba(56,142,60,0.35)]" 
                  : "bg-white text-gray-950 shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_50px_120px_rgba(0,0,0,0.08)]"
              } transition-all duration-1000 ease-in-out cursor-default`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-24 h-24 lg:w-32 lg:h-32 rounded-[32px] lg:rounded-[40px] flex items-center justify-center mb-12 lg:mb-20 shadow-xl transition-all duration-700 group-hover:rotate-[15deg] group-hover:scale-110 ${
                  service.color === 'bg-primary' ? "bg-white/20 backdrop-blur-md" : "bg-primary/10"
                }`}>
                  <service.icon className={`w-12 h-12 lg:w-16 lg:h-16 ${service.color === 'bg-primary' ? "text-white" : "text-primary"}`} />
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-[72px] font-sans font-black mb-8 lg:mb-12 tracking-tighter leading-[0.95]">{service.title}</h3>
                <p className={`text-xl lg:text-3xl mb-16 lg:mb-28 leading-relaxed max-w-[650px] font-medium ${
                  service.color === 'bg-primary' ? "text-white/80" : "text-gray-600"
                }`}>
                  {service.desc}
                </p>
                <div className="mt-auto">
                  <button className={`flex items-center gap-8 font-black uppercase tracking-[0.4em] text-[13px] lg:text-[15px] group/btn transition-all duration-700 ${
                    service.color === 'bg-primary' ? "text-white hover:text-white" : "text-primary hover:text-primary-dark"
                  }`}>
                    {service.cta}
                    <div className={`w-14 lg:w-20 h-[3px] transition-all duration-700 group-hover/btn:w-32 ${
                      service.color === 'bg-primary' ? "bg-white" : "bg-primary"
                    }`} />
                    <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8 group-hover/btn:translate-x-4 transition-transform duration-700" />
                  </button>
                </div>
              </div>
              
              {/* Shine Effects */}
              <div className={`absolute inset-0 bg-gradient-to-tr ${
                service.color === 'bg-primary' ? "from-white/10" : "from-primary/10"
              } via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
              <div className={`absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full blur-[150px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ${
                service.color === 'bg-primary' ? "bg-white/20" : "bg-primary/10"
              }`} />
            </div>
          ))}
        </div>

        {/* Secondary Services Grid */}
        <div className="standard-services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {standardServices.map((service, i) => (
            <div
              key={i}
              className="standard-service-card bg-white p-12 lg:p-16 rounded-[48px] lg:rounded-[64px] border border-gray-100 shadow-[0_15px_60px_rgba(0,0,0,0.02)] hover:border-primary/30 hover:shadow-[0_40px_100px_rgba(56,142,60,0.08)] transition-all duration-1000 group relative overflow-hidden"
            >
              {/* Background Text Decor */}
              <span className="absolute -top-6 -left-4 lg:-top-10 lg:-left-8 font-sans font-black text-7xl lg:text-[140px] text-gray-950/[0.02] group-hover:text-primary/[0.04] transition-colors duration-1000 leading-none tracking-tighter pointer-events-none select-none whitespace-nowrap z-0">
                {service.title.split(' ')[0]}
              </span>

              <div className="flex flex-col gap-10 lg:gap-14 relative z-10">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-[28px] lg:rounded-[32px] bg-gray-50 border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700 shrink-0 shadow-sm transform group-hover:rotate-6">
                  <service.icon className="w-10 h-10 lg:w-12 lg:h-12" />
                </div>
                <div className="space-y-6">
                  <h4 className="text-3xl lg:text-4xl font-sans font-black text-gray-950 group-hover:text-primary transition-colors duration-500 leading-none tracking-tighter">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-lg lg:text-xl leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>
              </div>
              {/* Micro-glow */}
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          ))}
        </div>

        {/* Conversion Bridge */}
        <div className="mt-32 lg:mt-60 flex flex-col items-center text-center">
          <div className="bg-white rounded-full px-10 py-4 lg:px-12 lg:py-6 flex items-center gap-6 border border-gray-200 shadow-sm mb-16 lg:mb-24">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-[0_0_15px_rgba(56,142,60,0.6)]" />
            <p className="text-[13px] lg:text-[15px] font-black text-gray-950 uppercase tracking-[0.5em]">
              Elevate your travel standards
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-8 lg:gap-12 w-full sm:w-auto">
            <Link 
              href="#contact" 
              className="w-full sm:w-auto px-16 py-7 lg:px-24 lg:py-10 bg-primary text-white font-black rounded-full transition-all shadow-[0_30px_70px_rgba(56,142,60,0.4)] hover:bg-primary-dark hover:-translate-y-3 active:translate-y-0 text-base lg:text-xl uppercase tracking-[0.4em] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10 text-white">Plan Your Trip</span>
            </Link>
            <Link 
              href="#packages" 
              className="w-full sm:w-auto px-16 py-7 lg:px-24 lg:py-10 bg-white border-2 border-gray-200 text-gray-900 font-black rounded-full transition-all hover:border-primary hover:text-primary shadow-sm hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] hover:-translate-y-3 active:translate-y-0 text-base lg:text-xl uppercase tracking-[0.4em]"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
