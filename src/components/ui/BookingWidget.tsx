"use client";
import { useState, useRef, useEffect } from "react";
import { Plane, Hotel, Package, Landmark, Search, Calendar, MapPin, Users, ArrowLeftRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const tabs = [
  { id: "flights", label: "Air Travel", icon: Plane },
  { id: "hotels", label: "Sanctuaries", icon: Hotel },
  { id: "packages", label: "Experiences", icon: Package },
  { id: "visa", label: "Protocols", icon: Landmark },
];

const subTypeOptions: Record<string, string[]> = {
  hotels: ["Luxury Resort", "Boutique Atelier", "Island Hideaway"],
  visa: ["Golden Visa", "Business Class", "Tourist Elite"],
  packages: ["Bespoke Tour", "Private Jet Journey", "Safari Suite"],
};

export default function BookingWidget() {
  const [activeTab, setActiveTab] = useState("flights");
  const [tripType, setTripType] = useState("one-way");
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departure: "",
    returnDate: "",
    travellers: "1 Explorer, First Class",
    subType: "" 
  });
  
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!widgetRef.current) return;
      const { left, top, width, height } = widgetRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      gsap.to(widgetRef.current, {
        rotateX: -y * 8,
        rotateY: x * 8,
        duration: 0.8,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(widgetRef.current, {
        rotateX: 0,
        rotateY: 0,
        duration: 1,
        ease: "elastic.out(1, 0.3)"
      });
    };

    const widget = widgetRef.current;
    if (widget) {
      widget.addEventListener("mousemove", handleMouseMove);
      widget.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (widget) {
        widget.removeEventListener("mousemove", handleMouseMove);
        widget.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    const defaults: Record<string, string> = {
      hotels: subTypeOptions.hotels[0],
      visa: subTypeOptions.visa[0],
      packages: subTypeOptions.packages[0]
    };
    setFormData(prev => ({ ...prev, subType: defaults[tabId] || "" }));
  };

  const isReturnDisabled = activeTab === "flights" && tripType === "one-way";

  const handleSearch = () => {
    const { from, to, departure, returnDate, travellers, subType } = formData;
    let message = `Hello Jade Atelier! I am seeking ${activeTab.toUpperCase()} curation.\n\n`;
    
    if (activeTab === "flights") {
      message += `✈️ AIR TRAVEL PROTOCOL\n` +
        `• Status: ${tripType}\n` +
        `• Origin: ${from}\n` +
        `• Destination: ${to}\n` +
        `• Departure: ${departure}\n` +
        (tripType !== 'one-way' ? `• Return: ${returnDate}\n` : '') +
        `• Manifest: ${travellers}`;
    } else if (activeTab === "hotels") {
      message += `🏨 SANCTUARY RESERVATION\n` +
        `• Atelier Type: ${subType}\n` +
        `• Location: ${to}\n` +
        `• Entry: ${departure}\n` +
        `• Departure: ${returnDate}\n` +
        `• Explorers: ${travellers}`;
    } else if (activeTab === "packages") {
      message += `📦 CURATED EXPERIENCE\n` +
        `• Theme: ${subType}\n` +
        `• Anthology: ${to}\n` +
        `• Timeline: ${departure}\n` +
        `• Explorers: ${travellers}`;
    } else if (activeTab === "visa") {
      message += `🛂 PROTOCOL ASSISTANCE\n` +
        `• Type: ${subType}\n` +
        `• Territory: ${to}\n` +
        `• Schedule: ${departure}\n` +
        `• Manifest: ${travellers}`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919825438324?text=${encodedMessage}`, '_blank');
  };

  return (
    <div 
      ref={widgetRef}
      className="bg-white/95 backdrop-blur-2xl rounded-[32px] lg:rounded-[48px] p-5 lg:p-10 w-full max-w-[650px] mx-auto relative border border-white shadow-[0_50px_120px_rgba(0,0,0,0.12)] perspective-2000 transition-all duration-700"
    >
      {/* Precision Detail Elements */}
      <div className="absolute top-5 left-6 right-6 flex justify-between opacity-10 pointer-events-none">
         <div className="w-1 h-1 rounded-full bg-primary" />
         <div className="w-1 h-1 rounded-full bg-primary" />
      </div>
      
      {/* Header Info */}
      <div className="flex items-center gap-1.5 mb-5 lg:mb-6 justify-center">
         <Sparkles className="w-3 h-3 text-primary" />
         <span className="text-[8px] lg:text-[10px] font-black text-primary uppercase tracking-[0.4em] lg:tracking-[0.6em]">Curation Console</span>
      </div>

      {/* Modern High-End Tabs */}
      <div className="flex items-center justify-between mb-5 lg:mb-8 pb-1 relative gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`flex flex-col items-center gap-1.5 lg:gap-2.5 flex-1 transition-all relative group ${
              activeTab === tab.id
                ? "text-gray-950"
                : "text-gray-300 hover:text-gray-400"
            }`}
          >
            <div className={`w-10 h-10 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all duration-700 ${activeTab === tab.id ? "bg-[#050807] text-white shadow-lg" : "bg-gray-50/50 border border-gray-100 group-hover:bg-white text-gray-400"}`}>
              <tab.icon className="w-4 lg:w-7 lg:h-7" strokeWidth={activeTab === tab.id ? 2 : 1.5} />
            </div>
            <span className="text-[7px] lg:text-[9px] font-black uppercase tracking-[0.1em] lg:tracking-[0.15em] whitespace-nowrap">{tab.label}</span>
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeGlow"
                className="absolute -bottom-1.5 lg:-bottom-4 w-1 lg:w-1.5 lg:h-1.5 bg-primary rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
      {/* Flight Type Options */}
      <AnimatePresence mode="wait">
        {activeTab === "flights" && (
          <motion.div 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="flex items-center justify-center gap-4 lg:gap-8 mb-5 lg:mb-8"
          >
            {[
              { id: "one-way", label: "Private" },
              { id: "round-trip", label: "Return" },
              { id: "multi-city", label: "Global" },
            ].map((type) => (
              <button 
                key={type.id}
                onClick={() => setTripType(type.id)}
                className={`text-[8px] lg:text-[9px] font-black uppercase tracking-[0.15em] lg:tracking-[0.2em] transition-all relative py-1 ${tripType === type.id ? "text-primary" : "text-gray-400 hover:text-gray-600"}`}
              >
                {type.label}
                {tripType === type.id && (
                  <motion.div layoutId="typeLine" className="absolute bottom-0 left-0 w-full h-[1.5px] bg-primary" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form Fields - Editorial Grid */}
      <div className="space-y-4 lg:space-y-6">
        <div className={`relative flex flex-col ${activeTab === "flights" ? "sm:grid sm:grid-cols-2" : ""} gap-3 lg:gap-4`}>
          {activeTab === "flights" && (
            <div className="space-y-1.5 lg:space-y-2">
              <label className="text-[8px] lg:text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1 font-serif italic leading-none">Departure Point</label>
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Manifest from"
                  value={formData.from}
                  onChange={(e) => setFormData({...formData, from: e.target.value})}
                  className="w-full bg-gray-50/50 border border-gray-100 rounded-[14px] lg:rounded-[16px] h-12 lg:h-16 pl-4 lg:pl-6 pr-4 lg:pr-6 text-[11px] lg:text-sm font-black text-gray-950 focus:outline-none focus:border-primary/30 focus:bg-white transition-all placeholder:text-gray-300 uppercase tracking-tight"
                />
              </div>
            </div>
          )}
          
          {activeTab === "flights" && (
            <button 
              onClick={() => setFormData({ ...formData, from: formData.to, to: formData.from })}
              className="absolute left-[85%] sm:left-1/2 top-[44px] sm:top-[48px] -translate-x-1/2 w-8 h-8 rounded-xl bg-[#050807] text-white flex items-center justify-center transition-all shadow-lg z-10 hover:rotate-180 duration-700 active:scale-90 border border-white/20"
            >
              <ArrowLeftRight className="w-3.5 h-3.5" />
            </button>
          )}

          <div className="space-y-1.5 lg:space-y-2">
            <label className="text-[8px] lg:text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1 font-serif italic leading-none">
              {activeTab === "flights" ? "Target Sanctuary" : activeTab === "hotels" ? "Refined Locale" : "Global Target"}
            </label>
            <div className="relative group">
              <input 
                type="text" 
                placeholder={activeTab === "visa" ? "Destination State" : "Where Shall We Lead?"}
                value={formData.to}
                onChange={(e) => setFormData({...formData, to: e.target.value})}
                className="w-full bg-gray-50/50 border border-gray-100 rounded-[14px] lg:rounded-[16px] h-12 lg:h-16 pl-4 lg:pl-6 pr-4 lg:pr-6 text-[11px] lg:text-sm font-black text-gray-950 focus:outline-none focus:border-primary/30 focus:bg-white transition-all placeholder:text-gray-300 uppercase tracking-tight"
              />
            </div>
          </div>
        </div>

        <div className={`grid ${activeTab === "visa" || activeTab === "packages" ? "grid-cols-1" : "grid-cols-2"} gap-3 lg:gap-4`}>
          <div className="space-y-1.5 lg:space-y-2">
            <label className="text-[8px] lg:text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1 font-serif italic leading-none">
              Timeline Start
            </label>
            <div className="relative group">
              <Calendar className="absolute left-4 lg:left-5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 lg:w-4 lg:h-4 text-primary opacity-30" />
              <input 
                type="text" 
                placeholder="Initiate Date"
                value={formData.departure}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                onChange={(e) => setFormData({...formData, departure: e.target.value})}
                className="w-full bg-gray-50/50 border border-gray-100 rounded-[14px] lg:rounded-[16px] h-12 lg:h-16 pl-10 lg:pl-12 pr-4 lg:pr-6 text-[10px] lg:text-[11px] font-black text-gray-950 focus:outline-none focus:border-primary/30 transition-all cursor-pointer uppercase"
              />
            </div>
          </div>
          
          {(activeTab === "flights" || activeTab === "hotels") && (
            <div className="space-y-1.5 lg:space-y-2">
              <label className="text-[8px] lg:text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1 font-serif italic leading-none">
                Timeline Finale
              </label>
              <div className="relative group">
                <Calendar className="absolute left-4 lg:left-5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 lg:w-4 lg:h-4 text-primary opacity-30" />
                <input 
                  type="text" 
                  placeholder="Conclusion Date"
                  value={formData.returnDate}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  onChange={(e) => setFormData({...formData, returnDate: e.target.value})}
                  disabled={isReturnDisabled}
                  className={`w-full bg-gray-50/50 border border-gray-100 rounded-[14px] lg:rounded-[16px] h-12 lg:h-16 pl-10 lg:pl-12 pr-4 lg:pr-6 text-[10px] lg:text-[11px] font-black text-gray-950 focus:outline-none focus:border-primary/30 transition-all cursor-pointer uppercase ${isReturnDisabled ? "opacity-20 grayscale cursor-not-allowed" : ""}`}
                />
              </div>
            </div>
          )}
        </div>

        <div className="space-y-1.5 lg:space-y-2">
          <label className="text-[8px] lg:text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1 font-serif italic leading-none">
            Explorer Specification
          </label>
          <div className="relative group">
            <Users className="absolute left-4 lg:left-5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 lg:w-4 lg:h-4 text-primary opacity-30" />
            <select 
              value={formData.travellers}
              onChange={(e) => setFormData({...formData, travellers: e.target.value})}
              className="w-full bg-gray-50/50 border border-gray-100 rounded-[14px] lg:rounded-[16px] h-12 lg:h-16 pl-10 lg:pl-12 pr-8 lg:pr-10 text-[10px] lg:text-[11px] font-black text-gray-950 appearance-none focus:outline-none focus:border-primary/30 transition-all cursor-pointer uppercase"
            >
              <option>1 Explorer, First Class</option>
              <option>2 Explorers, Business Elite</option>
              <option>Family Delegation (2+2)</option>
              <option>Private Circle (5+)</option>
            </select>
          </div>
        </div>

        <button 
          onClick={handleSearch}
          className="w-full bg-[#050807] hover:bg-primary text-white font-black h-13 lg:h-16 rounded-[16px] lg:rounded-[20px] flex items-center justify-center gap-3 lg:gap-4 transition-all shadow-xl active:scale-[0.98] group mt-4 lg:mt-6"
        >
          <span className="uppercase tracking-[0.3em] lg:tracking-[0.4em] text-[10px] lg:text-[11px] font-black">Commission Curation</span>
          <Search className="w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform" />
        </button>
        
        <p className="text-center text-[7px] lg:text-[9px] font-bold text-gray-300 uppercase tracking-[0.2em] lg:tracking-[0.4em] pt-1 lg:pt-2 leading-none">
          Secure Global Protocols • ISO Certified
        </p>
      </div>
    </div>
  );
}
