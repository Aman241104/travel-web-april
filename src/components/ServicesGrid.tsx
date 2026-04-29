"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, FileText, Map, Hotel, Car, Globe, Shield, Landmark, ChevronDown, ChevronUp } from "lucide-react";

const primaryServices = [
  { icon: Map, title: "Bespoke Itineraries", desc: "Personalized travel plans designed around your unique preferences and interests." },
  { icon: Plane, title: "Global Flight Access", desc: "First and business class travel with exclusive rates and preferred seating." },
  { icon: Hotel, title: "Elite Accommodations", desc: "Direct access to the world's finest hotels, villas, and private islands." },
  { icon: Shield, title: "Concierge Support", desc: "24/7 dedicated assistance for a seamless and worry-free travel experience." },
];

const secondaryServices = [
  { icon: FileText, title: "Visa & Passport", desc: "Expert handling of documentation and expedited processing for 100+ countries." },
  { icon: Car, title: "Chauffeur Services", desc: "Luxury ground transportation for seamless transitions from arrival to destination." },
  { icon: Globe, title: "Local Expertise", desc: "On-the-ground support and insider knowledge for authentic experiences." },
  { icon: Landmark, title: "Forex & Finance", desc: "Secure financial services tailored for the international traveler." },
];

export default function ServicesGrid() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="services" className="bg-white py-24 md:py-40">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-brand-teal font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-4 block"
          >
            Excellence in Every Detail
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-7xl text-onyx leading-tight tracking-tight"
          >
            Comprehensive Travel <br />
            <span className="italic font-light text-brand-teal/80">Management</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-onyx/60 font-sans text-xl max-w-xl leading-relaxed"
          >
            From logistical precision to curated discovery, we handle every aspect of your journey with discretion.
          </motion.p>
        </div>

        {/* Primary Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {primaryServices.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        {/* Secondary Services (Expandable) */}
        <AnimatePresence>
          {showAll && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 pt-6 lg:pt-10">
                {secondaryServices.map((service, i) => (
                  <ServiceCard key={i} service={service} index={i + 4} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global Action / Toggle */}
        <div className="mt-20 flex flex-col items-center justify-center gap-8 border-t border-onyx/5 pt-16">
          <p className="text-onyx/40 font-sans text-sm uppercase tracking-widest text-center">
            {showAll ? "Explore our comprehensive suite" : "Discover our full range of specialist services"}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-4 px-10 py-5 border border-onyx/10 rounded-full font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-onyx hover:bg-onyx hover:text-white transition-all duration-500"
            >
              <span>{showAll ? "Show Less" : "View All Services"}</span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />}
            </button>
            
            <button className="px-10 py-5 bg-brand-teal text-white font-sans text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-onyx transition-all duration-500 shadow-xl shadow-brand-teal/20">
              Consult Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.1, duration: 0.8 }}
      className="group p-10 md:p-12 rounded-[2.5rem] bg-cream/30 border border-onyx/5 hover:bg-onyx hover:border-onyx transition-all duration-700 ease-in-out flex flex-col items-start"
    >
      <div className="w-16 h-16 rounded-2xl bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-10 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500">
        <service.icon className="w-8 h-8" />
      </div>
      <h3 className="font-serif text-3xl text-onyx mb-4 group-hover:text-white transition-colors duration-500">{service.title}</h3>
      <p className="text-onyx/60 font-sans text-lg leading-relaxed group-hover:text-white/60 transition-colors duration-500">
        {service.desc}
      </p>
    </motion.div>
  );
}
