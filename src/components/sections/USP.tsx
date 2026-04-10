"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  { type: "text", title: "Passport", desc: "Expert assistance for new applications, renewals, and all documentation needs.", bg: "bg-brand-sand", text: "text-onyx" },
  { type: "text", title: "Domestic & International Tickets", desc: "Seamless flight bookings worldwide with the best routes and fares.", bg: "bg-brand-teal", text: "text-white" },
  { type: "text", title: "Custom Tour Packages", desc: "Bespoke domestic and international itineraries tailored to your style.", bg: "bg-[#71B5A3]", text: "text-white" },
  { type: "text", title: "Hotel Bookings", desc: "Curated stays at the world's most beautiful luxury hotels and resorts.", bg: "bg-brand-yellow", text: "text-onyx" },
  { type: "text", title: "Car Rental", desc: "Reliable transportation services for your local and international travels.", bg: "bg-brand-teal", text: "text-white" },
  { type: "text", title: "Visitor Visa", desc: "Comprehensive guidance and processing for global visa applications.", bg: "bg-brand-sand", text: "text-onyx" },
  { type: "text", title: "Overseas Insurance", desc: "Protect your journey with reliable and extensive travel insurance plans.", bg: "bg-brand-yellow", text: "text-onyx" },
  { type: "text", title: "Forex", desc: "Secure and efficient foreign exchange services at competitive rates.", bg: "bg-[#71B5A3]", text: "text-white" },
];

export default function USP() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".service-card", 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-8 pb-16 md:py-32 bg-white relative transition-colors duration-1000">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-brand-teal font-sans text-xs font-semibold uppercase tracking-widest mb-4 block">
            What We Do
          </span>
          <h2 className="font-serif text-5xl md:text-[80px] leading-[1.1] tracking-tight text-onyx">
            Services We Provide
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <div key={i} className="service-card group relative aspect-square rounded-[32px] overflow-hidden transform transition-transform hover:scale-[1.02] duration-300">
              {service.type === "image" ? (
                <Image 
                  src={service.img!} 
                  alt="Service" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              ) : (
                <div className={`w-full h-full p-8 flex flex-col justify-between ${service.bg} ${service.text}`}>
                  <h3 className="font-serif text-2xl md:text-3xl font-medium leading-tight">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm md:text-base leading-relaxed opacity-80 font-medium">
                    {service.desc}
                  </p>
                  <div className="mt-4 pt-4 border-t border-current/20 flex items-center justify-between opacity-80">
                    <span className="text-xs uppercase tracking-widest">Explore</span>
                    <span className="text-lg">→</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
