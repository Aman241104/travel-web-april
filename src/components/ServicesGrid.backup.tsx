"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Map, Plane, Hotel, Shield, ArrowRight } from "lucide-react";
import Image from "next/image";

const serviceExperiences = [
  {
    id: "01",
    title: "Architectural Curation",
    shortTitle: "Bespoke Itineraries",
    desc: "We don't just plan trips; we architect life-changing experiences tailored to your personal rhythm and curiosities.",
    longDesc: "Our designers spend hundreds of hours researching and scouting locations to ensure your journey is unlike anything ever seen. From private access to the Vatican to dinner with local legends, we curate the impossible.",
    icon: Map,
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Seamless Global Access",
    shortTitle: "Elite Logistics",
    desc: "First-class isn't just a ticket; it's a standard of movement. We ensure every transition is invisible.",
    longDesc: "Direct tarmac transfers, private terminal access, and preferred seating on the world's most exclusive carriers. Your transition from arrival to sanctuary is handled with absolute discretion and speed.",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1540339832862-4745591f5144?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Sanctuary Selection",
    shortTitle: "Elite Stays",
    desc: "We provide access to the world's most secluded hideaways, from private islands to historic estates.",
    longDesc: "Beyond 5-star hotels, we unlock private villas and estates that aren't on any public map. Each property is vetted for privacy, aesthetic excellence, and the standard of service you demand.",
    icon: Hotel,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "Invisible Concierge",
    shortTitle: "24/7 Support",
    desc: "Expert assistance that anticipates your needs before you've even voiced them.",
    longDesc: "A dedicated concierge team that operates in your time zone, ahead of your schedule. Whether it's a last-minute change of plans or a rare request in a remote location, we are always one step ahead.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function ServicesGrid() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="bg-[#0B1310] py-24 md:py-48 relative overflow-hidden">
      {/* Background Aesthetic */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C1A67B]/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
          
          {/* LEFT SIDE: Sticky Highlight Flow */}
          <div className="w-full lg:w-[45%] h-fit lg:sticky lg:top-32">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-10"
            >
              <div>
                <span className="text-[#C1A67B] font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] mb-6 block">
                  Experience Curation
                </span>
                <h2 className="font-serif text-5xl md:text-7xl text-[#F2EFE9] leading-[1.05] tracking-tight mb-8">
                  {serviceExperiences[activeService].title}
                </h2>
                <p className="text-[#F2EFE9]/60 font-sans text-xl leading-relaxed max-w-md">
                  {serviceExperiences[activeService].longDesc}
                </p>
              </div>

              {/* Dynamic Image Reveal */}
              <div className="relative w-full aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image 
                      src={serviceExperiences[activeService].image} 
                      alt={serviceExperiences[activeService].title} 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2F2A]/40 to-transparent" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress Indicator */}
              <div className="flex items-center gap-4 pt-8">
                {serviceExperiences.map((_, i) => (
                  <div 
                    key={i}
                    className={`h-[2px] transition-all duration-700 ease-out ${
                      activeService === i ? "w-12 bg-[#C1A67B]" : "w-6 bg-[#0B1310]/10"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Interactive Vertical Stack */}
          <div className="w-full lg:w-[55%] flex flex-col gap-6">
            {serviceExperiences.map((service, index) => (
              <ServiceExperienceCard 
                key={service.id} 
                service={service} 
                isActive={activeService === index}
                onInView={() => setActiveService(index)}
              />
            ))}

            {/* Final Conversion Point */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-12 rounded-[3rem] bg-[#0B1310] text-[#F2EFE9] flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div>
                <h4 className="font-serif text-3xl mb-2">Ready for a private consultation?</h4>
                <p className="text-[#F2EFE9]/40 font-sans text-base">Let our experts handle every detail of your next journey.</p>
              </div>
              <button className="group px-10 py-5 bg-[#C1A67B] text-[#0B1310] font-sans text-xs font-bold uppercase tracking-[0.3em] rounded-full hover:bg-[#0B1310] transition-all duration-500 flex items-center gap-3">
                Connect Now
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceExperienceCard({ service, isActive, onInView }: { service: any; isActive: boolean; onInView: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (isInView) {
      onInView();
    }
  }, [isInView, onInView]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative p-10 md:p-14 rounded-[3rem] transition-all duration-700 cursor-pointer overflow-hidden border ${
        isActive 
          ? "bg-[#0B1310] text-[#F2EFE9] border-transparent shadow-2xl scale-[1.02]" 
          : "bg-[#0B1310]/60 text-[#F2EFE9] border-black/5 hover:bg-[#0B1310]"
      }`}
      onClick={onInView}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 relative z-10">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 ${
          isActive ? "bg-[#C1A67B] text-[#0B1310]" : "bg-[#0B1310] text-[#C1A67B]"
        }`}>
          <service.icon className="w-8 h-8" />
        </div>
        
        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-3">
            <span className={`font-sans text-[10px] font-bold tracking-[0.4em] uppercase ${isActive ? "text-[#C1A67B]" : "text-[#F2EFE9]/30"}`}>
              Service {service.id}
            </span>
          </div>
          <h3 className={`font-serif text-3xl md:text-4xl leading-tight transition-colors duration-500`}>
            {service.shortTitle}
          </h3>
          
          <AnimatePresence>
            {isActive && (
              <motion.p 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="font-sans text-lg leading-relaxed mt-6 text-[#F2EFE9]/60 max-w-lg"
              >
                {service.desc}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className={`hidden md:flex items-center gap-3 transition-all duration-500 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}>
          <div className="w-12 h-12 rounded-full border border-[#F2EFE9]/20 flex items-center justify-center text-[#C1A67B]">
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Background Micro Interaction */}
      {isActive && (
        <motion.div 
          layoutId="activeGlow"
          className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"
        />
      )}
    </motion.div>
  );
}
