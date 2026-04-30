"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Compass, Map, Home } from "lucide-react";
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
    image: "https://images.unsplash.com/photo-1540339832862-4745591f5144?q=80&w=1200&auto=format&fit=crop"
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
  const leftSideRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".service-image-block");
      
      items.forEach((item: any, i: number) => {
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
  }, []);

  return (
    <section id="services" ref={containerRef} className="relative bg-[#0F2F2A] py-24 md:py-48 scroll-mt-24">
      
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#6FC3B2]/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-[#D4AF37]/5 blur-[150px] rounded-full" />
      </div>

      <div className="container relative z-10 px-6 max-w-[1500px] mx-auto">
        <div className="flex flex-col md:flex-row gap-24 lg:gap-40">
          
          {/* Left Side: Sticky Information Exhibit */}
          <div className="md:w-1/2 md:sticky md:top-40 h-fit self-start">
            <div ref={leftSideRef} className="max-w-xl">
              <div className="flex items-center gap-4 mb-10 overflow-hidden">
                <div className="w-12 h-[1px] bg-[#6FC3B2]" />
                <span className="text-[#6FC3B2] font-sans text-[10px] font-bold uppercase tracking-[0.5em]">
                  The Art of the Impossible
                </span>
              </div>

              <div className="relative min-h-[500px] md:min-h-[600px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <span className="block font-serif text-[120px] text-white/[0.03] leading-none mb-4">
                      {services[activeIndex].id}
                    </span>
                    <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] tracking-tightest mb-10">
                      {services[activeIndex].title}
                    </h2>
                    <p className="font-sans text-[#D6E2DF]/60 text-xl md:text-2xl leading-relaxed mb-12">
                      {services[activeIndex].desc}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {services[activeIndex].details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-4 group">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#6FC3B2] group-hover:scale-150 transition-transform" />
                          <span className="text-white/40 font-sans text-xs font-bold uppercase tracking-widest group-hover:text-[#6FC3B2] transition-colors">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Scroll Progress Exhibit */}
              <div className="mt-20 flex items-center gap-12 relative z-20">
                <div className="flex flex-col gap-2">
                  <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest">
                    EXHIBIT {services[activeIndex].id}
                  </span>
                  <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-[#6FC3B2] origin-left"
                      animate={{ scaleX: (activeIndex + 1) / services.length }}
                      transition={{ duration: 0.8, ease: "circOut" }}
                    />
                  </div>
                </div>
                <button className="group flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                    <ArrowRight className="w-5 h-5 text-[#6FC3B2] group-hover:text-[#0F2F2A]" />
                  </div>
                  <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em] group-hover:translate-x-2 transition-transform">
                    Inquire for Details
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Immersive Media Stream */}
          <div className="md:w-1/2 space-y-40 md:space-y-80 pb-40">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="service-image-block relative group"
              >
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-black/50 bg-onyx-light">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2F2A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Floating ID Tag */}
                  <div className="absolute top-10 left-10 z-10">
                    <div className="px-6 py-3 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 text-white font-sans text-[10px] font-black uppercase tracking-[0.4em]">
                      {service.tagline}
                    </div>
                  </div>

                  {/* Icon Overlay */}
                  <div className="absolute bottom-10 right-10 z-10">
                    <div className="w-20 h-20 rounded-full bg-[#6FC3B2]/90 backdrop-blur-xl flex items-center justify-center text-[#0F2F2A] transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                      <service.icon className="w-8 h-8" />
                    </div>
                  </div>
                </div>

                {/* Mobile View Text (Visible only when sticky is inactive) */}
                <div className="mt-12 lg:hidden space-y-6">
                  <h3 className="font-serif text-4xl text-white">{service.title}</h3>
                  <p className="text-white/40 font-sans text-lg">{service.desc}</p>
                </div>
              </div>
            ))}

            {/* Final Consultation Card */}
            <div className="relative p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-3xl border border-white/10 overflow-hidden group">
              <div className="relative z-10 flex flex-col items-center text-center">
                <span className="text-[#D4AF37] font-sans text-[10px] font-bold uppercase tracking-[0.5em] mb-8 block">
                  Private Access
                </span>
                <h3 className="font-serif text-4xl md:text-6xl text-white mb-10 leading-tight">
                  The Journey Begins <br />
                  <span className="italic font-light text-[#6FC3B2]">with a Single Word.</span>
                </h3>
                <button className="group relative px-16 py-7 bg-white text-[#0F2F2A] font-sans text-xs font-bold uppercase tracking-[0.4em] rounded-full overflow-hidden transition-all duration-700 hover:scale-105">
                  <span className="relative z-10">Book a Private Consult</span>
                  <div className="absolute inset-0 bg-[#6FC3B2] translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                </button>
              </div>

              {/* Decorative Corner */}
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#6FC3B2]/5 blur-[100px] rounded-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
