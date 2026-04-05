"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Globe, Plane, Home, Car, CreditCard, ShieldCheck, Landmark, Fingerprint } from "lucide-react";

const services = [
  {
    title: "Borders Without Barriers",
    desc: "Seamless passport and visitor visa assistance for global access.",
    icon: Fingerprint,
    img: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Global Aviation Hub",
    desc: "Domestic and international flight ticketing with priority seating.",
    icon: Plane,
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Tailored Narratives",
    desc: "Custom tour packages designed around your personal legacy.",
    icon: Globe,
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Elite Sanctuaries",
    desc: "Luxury hotel bookings with exclusive partner-only benefits.",
    icon: Home,
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Chauffeur & Mobility",
    desc: "Premium car rentals and private transport in any city.",
    icon: Car,
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Global Security",
    desc: "Comprehensive overseas insurance for complete peace of mind.",
    icon: ShieldCheck,
    img: "https://images.unsplash.com/photo-1454165833767-02a698d5874c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Global Liquidity",
    desc: "Competitive Forex services for effortless spending worldwide.",
    icon: CreditCard,
    img: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Concierge Legacy",
    desc: "Dedicated travel support from Jigar Shah and Dhara Patel.",
    icon: Landmark,
    img: "https://images.unsplash.com/photo-1485217658213-3990818274d7?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    
    const ctx = gsap.context(() => {
      gsap.fromTo(".service-card", 
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold uppercase tracking-ultra text-[10px] font-bold mb-4 block">
              The Suite of Freedoms
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-jade-black leading-tight">
              Curated Services for the <br />
              <span className="italic font-light">Global Nomad.</span>
            </h2>
          </div>
          <p className="max-w-md text-jade-black/70 font-sans leading-relaxed font-medium">
            From barriers-free global access to bespoke travel narratives, we provide 
            the infrastructure for your next extraordinary chapter.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] mb-6 shadow-md border border-jade/10 transition-all duration-500 group-hover:shadow-2xl bg-cream">
                <Image 
                  src={service.img} 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt={service.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute top-6 left-6 z-20">
                  <div className="w-12 h-12 bg-white backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl border border-white">
                    <service.icon className="w-6 h-6 text-jade stroke-[2.5px]" />
                  </div>
                </div>
              </div>
              <h3 className="text-jade-black font-serif text-2xl mb-2 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-jade-black/80 text-sm leading-relaxed max-w-[280px] font-medium">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
