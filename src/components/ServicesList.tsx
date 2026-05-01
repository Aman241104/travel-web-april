"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Globe, Plane, Home, Car, CreditCard, ShieldCheck, Landmark, Fingerprint, ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  { 
    title: "Passport", 
    desc: "Expert handling of applications and complex renewals for global access.", 
    icon: Fingerprint, 
    image: "https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1200&auto=format&fit=crop",
    details: "Our dedicated specialists handle the entire lifecycle of passport procurement. From initial application architecture to emergency renewals, we ensure your global mobility is never compromised. We navigate the nuances of diplomatic requirements with absolute discretion.",
    features: ["Biometric Coordination", "Expedited Renewals", "Diplomatic Liaison", "Lost Document Recovery"]
  },
  { 
    title: "Global Aviation", 
    shortTitle: "Tickets",
    desc: "Seamless ticketing and private aviation network access across all continents.", 
    icon: Plane, 
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?q=80&w=1200&auto=format&fit=crop",
    details: "Beyond standard commercial ticketing, we provide access to a private aviation network. We coordinate tarmac transfers, private terminal access, and handle complex multi-city itineraries with a focus on maximizing your most precious resource: time.",
    features: ["Private Jet Charter", "Empty Leg Access", "Priority Boarding Network", "24/7 Flight Monitoring"]
  },
  { 
    title: "Bespoke Journeys", 
    shortTitle: "Tour Packages",
    desc: "Custom tour packages designed around your personal vision and rhythm.", 
    icon: Globe, 
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop",
    details: "We don't sell packages; we design narratives. Every itinerary is a custom-sculpted journey that weaves together hidden gems, local cultural experts, and exclusive access to sites typically closed to the public.",
    features: ["Private Local Guides", "Exclusive Site Access", "Cultural Immersion", "Luxury Villa Integration"]
  },
  { 
    title: "Sanctuary Stays", 
    shortTitle: "Hotel Bookings",
    desc: "Luxury hotel bookings with exclusive partner benefits and preferred access.", 
    icon: Home, 
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    details: "Our relationships with the world's most prestigious hotel groups ensure you receive preferred status. Expect effortless upgrades, private check-ins, and curated amenities that reflect your personal taste.",
    features: ["VIP Upgrade Priority", "Early/Late Flexibility", "Amenity Curation", "Private Wing Access"]
  },
  { 
    title: "Elite Mobility", 
    shortTitle: "Car Rental",
    desc: "Chauffeur services and premium rentals worldwide for effortless movement.", 
    icon: Car, 
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    details: "Whether you require a self-drive supercar in the Alps or a discreet chauffeur-driven sedan in a bustling metropolis, our mobility fleet is at your disposal. Every vehicle is meticulously vetted for safety and comfort.",
    features: ["Vetted Chauffeurs", "Luxury Fleet Access", "Tarmac Pickups", "Armored Vehicle Options"]
  },
  { 
    title: "Global Entry", 
    shortTitle: "Visitor Visa",
    desc: "Technical expertise in global visa processing and diplomatic coordination.", 
    icon: Landmark, 
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1200&auto=format&fit=crop",
    details: "We navigate the complex landscape of international immigration law on your behalf. Our team provides end-to-end support for business, tourism, and long-stay visas, minimizing bureaucracy and maximizing approval speed.",
    features: ["Document Harmonization", "Consular Relations", "Express Processing", "Complex Case Handling"]
  },
  { 
    title: "Total Protection", 
    shortTitle: "Overseas Insurance",
    desc: "Comprehensive overseas insurance for total peace of mind in any territory.", 
    icon: ShieldCheck, 
    image: "https://images.unsplash.com/photo-1454165833767-0274b05b67af?q=80&w=1200&auto=format&fit=crop",
    details: "Peace of mind is the ultimate luxury. We curate insurance portfolios that offer comprehensive coverage for medical emergencies, travel disruptions, and high-value equipment, ensuring you are protected globally.",
    features: ["Medical Evacuation", "Asset Protection", "Cancel-Any-Reason", "Global Claims Support"]
  },
  { 
    title: "Capital Access", 
    shortTitle: "Forex",
    desc: "Competitive forex rates and seamless global spending management.", 
    icon: CreditCard, 
    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=1200&auto=format&fit=crop",
    details: "Manage your global footprint with ease. We provide competitive exchange rates and sophisticated spending solutions that ensure you have the capital you need, wherever the journey takes you.",
    features: ["Institutional Rates", "Multi-Currency Cards", "Secure Wire Transfers", "24/7 Liquidity"]
  },
];

export default function ServicesList() {
  const [mounted, setMounted] = useState(false);
  const [selectedService, setSelectedService] = useState<null | typeof services[0]>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handle = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(handle);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".services-reveal", {
        yPercent: 100,
        stagger: 0.1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".services-header",
          start: "top 85%",
        }
      });

      // Rows Reveal
      gsap.from(".service-row", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-list-container",
          start: "top 80%",
        }
      });
    });

    return () => ctx.revert();
  }, [mounted]);

  if (!mounted) return <section className="min-h-screen bg-[#0B1310]" />;

  return (
    <section id="services" className="relative bg-[#0B1310] py-24 md:py-48 overflow-hidden scroll-mt-24">
      {/* Editorial Watermark */}
      <div className="absolute top-40 right-[-10%] pointer-events-none opacity-[0.02] select-none">
        <span className="font-serif text-[25vw] leading-none uppercase italic">Expertise</span>
      </div>

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        
        {/* Header Exhibit */}
        <div className="services-header max-w-4xl mb-24 md:mb-40">
          <div className="overflow-hidden mb-4">
            <span className="services-reveal inline-block text-[#C1A67B] font-sans text-[10px] md:text-xs font-black uppercase tracking-[0.5em]">
              The Full Suite
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-8xl lg:text-[110px] text-[#F2EFE9] leading-[0.9] tracking-tightest">
            <div className="overflow-hidden">
              <span className="services-reveal inline-block">Curated</span>
            </div>
            <div className="overflow-hidden italic font-light text-[#C1A67B]">
              <span className="services-reveal inline-block">Capabilities</span>
            </div>
          </h2>
        </div>

        {/* Interactive Service List */}
        <div className="services-list-container flex flex-col border-t border-[#F2EFE9]/10">
          {services.map((service, i) => (
            <ServiceRow 
              key={i} 
              service={service} 
              index={i} 
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>

        {/* Global Access CTA */}
        <div className="mt-32 pt-20 border-t border-[#F2EFE9]/10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-md text-center md:text-left">
            <h5 className="font-serif text-3xl text-[#F2EFE9] mb-4">Global Access Network</h5>
            <p className="text-[#F2EFE9]/40 font-sans text-xs leading-relaxed uppercase tracking-widest">
              Across every continent, we ensure your journey is an intentional masterpiece of logistics and luxury.
            </p>
          </div>
          
          <div className="flex items-center gap-10">
            <div className="text-right hidden md:block">
              <p className="text-[#C1A67B] font-serif text-2xl italic">15+ Years</p>
              <p className="text-[#F2EFE9]/20 font-sans text-[10px] font-black uppercase tracking-widest">Discretion & Excellence</p>
            </div>
            <button className="group relative flex items-center gap-6 px-10 py-6 bg-transparent border border-[#F2EFE9]/20 rounded-full text-[#F2EFE9] overflow-hidden transition-all duration-700">
              <span className="relative z-10 font-sans text-[10px] font-black uppercase tracking-[0.4em]">Inquire for All Services</span>
              <div className="absolute inset-0 bg-[#C1A67B] translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              <ArrowUpRight className="relative z-10 w-4 h-4 group-hover:text-[#0B1310] transition-colors" />
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center px-4 md:px-6"
          >
            <div 
              className="absolute inset-0 bg-[#0B1310]/95 backdrop-blur-2xl" 
              onClick={() => setSelectedService(null)} 
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-6xl bg-[#0B1310] border border-[#F2EFE9]/10 rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh]"
            >
              {/* Image Side */}
              <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <Image 
                  src={selectedService.image} 
                  alt={selectedService.title} 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1310] via-transparent to-transparent opacity-60 md:hidden" />
              </div>

              {/* Content Side */}
              <div className="relative w-full md:w-1/2 p-8 md:p-16 lg:p-24 overflow-y-auto">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-8 right-8 p-3 rounded-full bg-[#F2EFE9]/5 hover:bg-[#C1A67B] hover:text-[#0B1310] transition-all duration-500 z-10"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="mb-12">
                  <span className="text-[#C1A67B] font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] mb-6 block">
                    Service Definition
                  </span>
                  <h3 className="font-serif text-4xl md:text-6xl text-[#F2EFE9] leading-[0.9] tracking-tighter mb-8">
                    {selectedService.title}
                  </h3>
                  <p className="text-[#F2EFE9]/60 font-sans text-lg md:text-xl leading-relaxed">
                    {selectedService.details}
                  </p>
                </div>

                <div className="space-y-8">
                  <h4 className="text-[#F2EFE9] font-sans text-xs font-black uppercase tracking-[0.4em] border-b border-[#F2EFE9]/10 pb-4">
                    Key Expertise
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {selectedService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-4 group/item">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C1A67B]" />
                        <span className="text-[#F2EFE9]/40 font-sans text-[11px] font-bold uppercase tracking-widest group-hover/item:text-[#F2EFE9] transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-16">
                  <button className="w-full group relative flex items-center justify-between px-10 py-6 bg-[#C1A67B] rounded-full text-[#0B1310] font-sans text-[10px] font-black uppercase tracking-[0.4em] overflow-hidden transition-all duration-700">
                    <span className="relative z-10">Inquire for Private Access</span>
                    <ArrowUpRight className="relative z-10 w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-[#F2EFE9] translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ServiceRow({ service, index, onClick }: { service: any; index: number; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current || !rowRef.current) return;
    
    const { clientX } = e;
    const { left, width } = rowRef.current.getBoundingClientRect();
    
    // Calculate percentage across the row
    const xPos = (clientX - left) / width;
    
    // Gentle tilt and movement for the image
    gsap.to(imageRef.current, {
      x: (clientX - left) - (imageRef.current.offsetWidth / 2),
      y: -100, // Float above the mouse
      rotation: (xPos - 0.5) * 10,
      duration: 0.6,
      ease: "power2.out"
    });
  };

  return (
    <div 
      ref={rowRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className="service-row group relative py-12 md:py-16 border-b border-[#F2EFE9]/10 cursor-pointer overflow-visible"
    >
      <div className="flex items-center justify-between gap-8 md:gap-12 relative z-10">
        
        <div className="flex items-baseline gap-6 md:gap-12">
          <span className="font-serif text-lg md:text-2xl text-[#C1A67B] opacity-40 group-hover:opacity-100 transition-opacity">
            0{index + 1}
          </span>
          <div>
            <h3 className="font-serif text-3xl md:text-6xl lg:text-7xl text-[#F2EFE9] group-hover:text-[#C1A67B] transition-colors duration-500 mb-2">
              {service.title}
            </h3>
            {service.shortTitle && (
              <span className="md:hidden text-[#C1A67B] font-sans text-[10px] font-black uppercase tracking-widest">
                {service.shortTitle}
              </span>
            )}
          </div>
        </div>

        <div className="flex-1 max-w-md hidden lg:block translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700">
          <p className="text-[#F2EFE9]/40 font-sans text-sm leading-relaxed">
            {service.desc}
          </p>
        </div>

        <div className="flex items-center gap-8">
          <div className="w-12 h-12 rounded-full border border-[#F2EFE9]/10 flex items-center justify-center text-[#F2EFE9]/20 group-hover:text-[#C1A67B] group-hover:border-[#C1A67B] transition-all duration-500">
            <service.icon className="w-5 h-5" />
          </div>
        </div>

      </div>

      {/* Floating Image Reveal - Desktop only */}
      <div 
        ref={imageRef}
        className={`fixed pointer-events-none z-50 w-64 h-80 rounded-2xl overflow-hidden shadow-2xl transition-opacity duration-500 hidden md:block ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image 
          src={service.image} 
          alt={service.title} 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1310]/60 to-transparent" />
      </div>

      {/* Mobile background highlight */}
      <div className="absolute inset-0 bg-[#C1A67B]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity md:hidden" />
    </div>
  );
}
