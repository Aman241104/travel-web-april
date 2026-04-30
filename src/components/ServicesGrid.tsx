"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Compass, Map, Home } from "lucide-react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: "01",
    title: "Architectural Curation",
    tagline: "Bespoke Itineraries",
    desc: "We don't just plan trips; we architect life-changing experiences tailored to your personal rhythm and curiosities.",
    details: ["Private Vatican Access", "Dinner with Local Legends", "Custom Scouting"],
    icon: Map,
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Seamless Global Access",
    tagline: "Elite Logistics",
    desc: "First-class isn't just a ticket; it's a standard of movement. We ensure every transition is invisible.",
    details: ["Tarmac Transfers", "Private Terminal Access", "Discreet Security"],
    icon: Compass,
    image: "https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Sanctuary Selection",
    tagline: "Elite Stays",
    desc: "We provide access to the world's most secluded hideaways, from private islands to historic estates.",
    details: ["Vetted Private Villas", "Historic Estates", "Island Buyouts"],
    icon: Home,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "Invisible Concierge",
    tagline: "24/7 Support",
    desc: "Expert assistance that anticipates your needs before you've even voiced them.",
    details: ["Real-time Adjustment", "Global Expertise", "Proactive Planning"],
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function ServicesGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(handle);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".service-image-block") as HTMLElement[];
      
      items.forEach((item: HTMLElement, i: number) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) setActiveIndex(i);
          },
        });

        // Parallax for images
        const img = item.querySelector("img");
        if (img) {
          gsap.to(img, {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          });
        }
      });
    });

    return () => ctx.revert();
  }, [mounted]);

  if (!mounted) return <section className="min-h-screen bg-[#0B1310]" />;

  return (
    <section id="services" ref={containerRef} className="relative bg-[#0B1310] py-10 md:py-48 scroll-mt-24">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#C1A67B]/5 blur-[150px] rounded-full" />
      </div>

      <div className="container relative z-10 px-6 max-w-[1500px] mx-auto">
        {/* Section Header - Mobile Friendly */}
        <div className="flex items-center gap-4 mb-8 md:mb-20 overflow-hidden">
          <div className="w-12 h-[1px] bg-[#C1A67B]" />
          <span className="text-[#C1A67B] font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.5em]">
            The Art of the Impossible
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-16 md:gap-24 lg:gap-40">
          
          {/* Left Side: Sticky Information - Desktop Only */}
          <div className="hidden md:block md:w-1/2 md:sticky md:top-40 h-fit self-start">
            <div className="max-w-xl">
              <div className="relative md:min-h-[600px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="absolute inset-0"
                  >
                    <span className="block font-serif text-[120px] text-[#F2EFE9]/[0.03] leading-none mb-4">
                      {services[activeIndex].id}
                    </span>
                    <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#F2EFE9] leading-[0.9] tracking-tighter mb-10">
                      {services[activeIndex].title}
                    </h2>
                    <p className="font-sans text-[#F2EFE9]/60 text-xl md:text-2xl leading-relaxed mb-12">
                      {services[activeIndex].desc}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {services[activeIndex].details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-4 group">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#C1A67B] group-hover:scale-150 transition-transform" />
                          <span className="text-[#F2EFE9]/40 font-sans text-xs font-bold uppercase tracking-widest group-hover:text-[#C1A67B] transition-colors">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-20 flex items-center gap-12 relative z-20">
                <div className="flex flex-col gap-2">
                  <span className="text-[#F2EFE9]/20 text-[10px] font-bold uppercase tracking-widest">
                    EXHIBIT {services[activeIndex].id}
                  </span>
                  <div className="w-48 h-[1px] bg-[#0B1310]/10 relative overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-[#C1A67B] origin-left"
                      animate={{ scaleX: (activeIndex + 1) / services.length }}
                      transition={{ duration: 0.8, ease: "circOut" }}
                    />
                  </div>
                </div>
                <button className="group flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full border border-[#F2EFE9]/10 flex items-center justify-center group-hover:bg-[#C1A67B] group-hover:border-[#C1A67B] transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 text-[#C1A67B] group-hover:text-[#0B1310]" />
                  </div>
                  <span className="text-[#F2EFE9] text-[10px] font-bold uppercase tracking-[0.4em] group-hover:translate-x-2 transition-transform">
                    Inquire for Details
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Media Stream */}
          <div className="w-full md:w-1/2 space-y-12 md:space-y-80 pb-4 md:pb-40">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="service-image-block relative group"
              >
                <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-[#0B1310]/5">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2421]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="absolute top-6 md:top-10 left-6 md:left-10 z-10">
                    <div className="px-4 md:px-6 py-2 md:py-3 rounded-full bg-[#0B1310]/40 backdrop-blur-xl border border-[#F2EFE9]/10 text-[#F2EFE9] font-sans text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em]">
                      {service.tagline}
                    </div>
                  </div>

                  <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 z-10">
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#C1A67B]/90 backdrop-blur-xl flex items-center justify-center text-[#F2EFE9] transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                      <service.icon className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                  </div>
                </div>

                {/* Mobile Service Details */}
                <div className="mt-8 md:hidden space-y-6 px-2">
                  <div className="relative">
                    <span className="block font-serif text-7xl text-[#F2EFE9]/5 leading-none absolute -top-10 -left-2">
                      {service.id}
                    </span>
                    <h3 className="relative z-10 font-serif text-4xl text-[#F2EFE9] leading-tight tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-[#F2EFE9]/60 font-sans text-lg leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="grid grid-cols-1 gap-4 py-4">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-4 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C1A67B]" />
                        <span className="text-[#F2EFE9]/40 font-sans text-[10px] font-bold uppercase tracking-[0.2em]">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full group flex items-center justify-between p-6 rounded-2xl border border-[#F2EFE9]/10 bg-[#F2EFE9]/[0.02]">
                    <span className="text-[#F2EFE9] text-[10px] font-bold uppercase tracking-[0.4em]">
                      Inquire Details
                    </span>
                    <div className="w-10 h-10 rounded-full border border-[#F2EFE9]/10 flex items-center justify-center group-active:bg-[#C1A67B] transition-all">
                      <ArrowUpRight className="w-4 h-4 text-[#C1A67B]" />
                    </div>
                  </button>
                </div>
              </div>
            ))}

            <div className="relative p-8 md:p-20 rounded-[3rem] md:rounded-[4rem] bg-gradient-to-br from-white/5 to-transparent backdrop-blur-3xl border border-[#F2EFE9]/10 overflow-hidden group">
              <div className="relative z-10 flex flex-col items-center text-center">
                <span className="text-[#C1A67B] font-sans text-[10px] font-bold uppercase tracking-[0.5em] mb-6 md:mb-8 block">
                  Private Access
                </span>
                <h3 className="font-serif text-3xl md:text-6xl text-[#F2EFE9] mb-8 md:mb-10 leading-tight tracking-tighter">
                  The Journey Begins <br />
                  <span className="italic font-light text-[#C1A67B]">with a Single Word.</span>
                </h3>
                <button className="group relative px-12 py-5 md:px-16 md:py-7 bg-[#C1A67B] text-[#0B1310] font-sans text-xs font-bold uppercase tracking-[0.4em] rounded-full overflow-hidden transition-all duration-700 hover:bg-[#0B1310]">
                  <span className="relative z-10">Book a Private Consult</span>
                </button>
              </div>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#C1A67B]/5 blur-[100px] rounded-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
