"use client";
import { motion } from "framer-motion";
import { Plane, FileText, Map, Hotel, Car, Globe, Shield, Landmark } from "lucide-react";

const services = [
  { icon: Plane, title: "Global Flight Access", desc: "First and business class travel arrangements with preferred seating and exclusive rates." },
  { icon: FileText, title: "Visa & Passport Concierge", desc: "Expert handling of documentation, renewals, and expedited visa processing for 100+ countries." },
  { icon: Map, title: "Bespoke Itineraries", desc: "Hyper-personalized travel plans designed around your specific interests and preferences." },
  { icon: Hotel, title: "Elite Accommodations", desc: "Direct access to curated portfolios of the world's finest hotels, villas, and private islands." },
  { icon: Car, title: "Chauffeur Services", desc: "Reliable, luxury ground transportation for seamless transitions from arrival to destination." },
  { icon: Globe, title: "Destination Management", desc: "On-the-ground support and expert local knowledge for a truly authentic experience." },
  { icon: Shield, title: "Overseas Protection", desc: "Comprehensive travel insurance and risk management for total peace of mind." },
  { icon: Landmark, title: "Forex & Finance", desc: "Secure foreign exchange and financial services tailored for the international traveler." },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-brand-teal font-sans text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            Excellence in Every Detail
          </span>
          <h2 className="font-serif text-4xl md:text-7xl text-onyx leading-tight tracking-tight">
            Comprehensive Travel <br />
            <span className="italic font-light">Management</span>
          </h2>
          <p className="mt-8 text-onyx/60 font-sans text-lg max-w-xl">
            From logistical precision to curated experiences, we handle every aspect of your journey with discretion and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.8 }}
              className="flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-6">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-onyx mb-4">{service.title}</h3>
              <p className="text-onyx/60 font-sans text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
