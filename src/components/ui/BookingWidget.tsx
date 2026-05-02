"use client";
import { useState } from "react";
import { Plane, Hotel, Package, Landmark, Search, Calendar, MapPin, Users, ArrowLeftRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "flights", label: "Flights", icon: Plane },
  { id: "hotels", label: "Hotels", icon: Hotel },
  { id: "packages", label: "Packages", icon: Package },
  { id: "visa", label: "Visa", icon: Landmark },
];

const subTypeOptions: Record<string, string[]> = {
  hotels: ["Luxury Resort", "Boutique Hotel", "Business Hotel", "Island Hideaway"],
  visa: ["Tourist Visa", "Business Visa", "Work Visa", "Golden Visa"],
  packages: ["Bespoke Tour", "Honeymoon", "Adventure", "Private Jet Tour"],
};

export default function BookingWidget() {
  const [activeTab, setActiveTab] = useState("flights");
  const [tripType, setTripType] = useState("one-way");
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departure: "",
    returnDate: "",
    travellers: "1 Traveller, Economy",
    subType: "" 
  });

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
    let message = `Hello Jade Tours! I'm interested in ${activeTab.toUpperCase()} services.\n\n`;
    
    if (activeTab === "flights") {
      message += `✈️ FLIGHT DETAILS\n` +
        `• Type: ${tripType}\n` +
        `• From: ${from}\n` +
        `• To: ${to}\n` +
        `• Departure: ${departure}\n` +
        (tripType !== 'one-way' ? `• Return: ${returnDate}\n` : '') +
        `• Travellers/Class: ${travellers}`;
    } else if (activeTab === "hotels") {
      message += `🏨 HOTEL BOOKING\n` +
        `• Pref Type: ${subType}\n` +
        `• City/Hotel: ${to}\n` +
        `• Check-in: ${departure}\n` +
        `• Check-out: ${returnDate}\n` +
        `• Guests: ${travellers}`;
    } else if (activeTab === "packages") {
      message += `📦 TOUR PACKAGE\n` +
        `• Theme: ${subType}\n` +
        `• Destination: ${to}\n` +
        `• Preferred Date: ${departure}\n` +
        `• Travellers: ${travellers}`;
    } else if (activeTab === "visa") {
      message += `🛂 VISA ASSISTANCE\n` +
        `• Visa Type: ${subType}\n` +
        `• Country: ${to}\n` +
        `• Travel Date: ${departure}\n` +
        `• Applicants: ${travellers}`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919825438324?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-white rounded-[24px] lg:rounded-[32px] p-6 lg:p-8 w-full max-w-[580px] mx-auto relative border border-white shadow-[0_40px_100px_rgba(0,0,0,0.1)]">
      
      {/* Tabs */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100/60">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`flex flex-col items-center gap-2.5 flex-1 transition-all relative group ${
              activeTab === tab.id 
                ? "text-primary" 
                : "text-gray-300 hover:text-gray-400"
            }`}
          >
            <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${activeTab === tab.id ? "bg-primary/10 text-primary scale-110" : "bg-transparent group-hover:scale-105"}`}>
              <tab.icon className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.2em]">{tab.label}</span>
            {activeTab === tab.id && (
              <motion.div 
                layoutId="activeTabUnderline"
                className="absolute -bottom-[18px] w-full h-[3px] bg-primary rounded-full"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center justify-between mb-8 px-2 overflow-hidden"
          >
            {[
              { id: "one-way", label: "One Way" },
              { id: "round-trip", label: "Round Trip" },
              { id: "multi-city", label: "Multi-city" },
            ].map((type) => (
              <label key={type.id} className="flex items-center gap-2.5 cursor-pointer group">
                <div className="relative w-4.5 h-4.5 flex items-center justify-center">
                  <input 
                    type="radio" 
                    name="tripType" 
                    checked={tripType === type.id}
                    onChange={() => setTripType(type.id)}
                    className="appearance-none w-4.5 h-4.5 border-2 border-gray-200 rounded-full checked:border-primary transition-all cursor-pointer"
                  />
                  {tripType === type.id && (
                    <motion.div layoutId="radio-dot" className="absolute w-2 h-2 bg-primary rounded-full" />
                  )}
                </div>
                <span className={`text-[10px] lg:text-[11px] font-black uppercase tracking-widest ${tripType === type.id ? "text-gray-950" : "text-gray-400 group-hover:text-gray-500"}`}>
                  {type.label}
                </span>
              </label>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form Fields */}
      <div className="space-y-6 lg:space-y-7">
        <div className={`relative grid ${activeTab === "flights" ? "grid-cols-2" : "grid-cols-1"} gap-4 lg:gap-5`}>
          {activeTab === "flights" && (
            <div className="space-y-2 lg:space-y-2.5">
              <label className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Origin</label>
              <div className="relative group">
                <MapPin className="absolute left-4 lg:left-5 top-1/2 -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 text-gray-300 group-focus-within:text-primary transition-colors" />
                <input 
                  type="text" 
                  placeholder="Leaving from"
                  value={formData.from}
                  onChange={(e) => setFormData({...formData, from: e.target.value})}
                  className="w-full bg-gray-50/80 border border-gray-100 rounded-xl lg:rounded-2xl h-14 lg:h-16 pl-11 lg:pl-13 pr-4 text-xs lg:text-sm font-black text-gray-950 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/20 focus:bg-white transition-all placeholder:text-gray-300"
                />
              </div>
            </div>
          )}
          
          {activeTab === "flights" && (
            <button 
              onClick={() => setFormData({ ...formData, from: formData.to, to: formData.from })}
              className="absolute left-1/2 top-[44px] lg:top-[50px] -translate-x-1/2 w-8 h-8 lg:w-9 lg:h-9 rounded-lg lg:rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all shadow-md z-10 hover:rotate-180 duration-700"
            >
              <ArrowLeftRight className="w-3.5 h-3.5" />
            </button>
          )}

          <div className="space-y-2 lg:space-y-2.5">
            <label className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
              {activeTab === "flights" ? "Destination" : activeTab === "hotels" ? "City / Hotel" : "Target Location"}
            </label>
            <div className="relative group">
              <MapPin className="absolute left-4 lg:left-5 top-1/2 -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 text-gray-300 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder={activeTab === "visa" ? "Enter country" : "Where are you going?"}
                value={formData.to}
                onChange={(e) => setFormData({...formData, to: e.target.value})}
                className="w-full bg-gray-50/80 border border-gray-100 rounded-xl lg:rounded-2xl h-14 lg:h-16 pl-11 lg:pl-13 pr-4 text-xs lg:text-sm font-black text-gray-950 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/20 focus:bg-white transition-all placeholder:text-gray-300"
              />
            </div>
          </div>
        </div>

        {activeTab !== "flights" && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            <label className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
              {activeTab === "hotels" ? "Select Sanctuary Type" : activeTab === "visa" ? "Select Visa Category" : "Select Experience Theme"}
            </label>
            <div className="flex flex-wrap gap-2">
              {subTypeOptions[activeTab]?.map((option) => (
                <button
                  key={option}
                  onClick={() => setFormData({...formData, subType: option})}
                  className={`px-4 py-2.5 lg:px-5 lg:py-3 rounded-lg lg:rounded-xl text-[9px] lg:text-[10px] font-black uppercase tracking-widest transition-all border ${
                    formData.subType === option 
                      ? "bg-primary text-white border-primary shadow-lg shadow-primary/10" 
                      : "bg-white text-gray-400 border-gray-100 hover:border-primary/20 hover:text-gray-600"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        <div className={`grid ${activeTab === "visa" || activeTab === "packages" ? "grid-cols-1" : "grid-cols-2"} gap-4 lg:gap-5`}>
          <div className="space-y-2 lg:space-y-2.5">
            <label className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
              {activeTab === "hotels" ? "Check-in" : activeTab === "flights" ? "Departure" : "Preferred Date"}
            </label>
            <div className="relative group">
              <Calendar className="absolute left-4 lg:left-5 top-1/2 -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 text-gray-300 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Select Date"
                value={formData.departure}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                onChange={(e) => setFormData({...formData, departure: e.target.value})}
                className="w-full bg-gray-50/80 border border-gray-100 rounded-xl lg:rounded-2xl h-14 lg:h-16 pl-11 lg:pl-13 pr-4 text-xs lg:text-sm font-black text-gray-950 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/20 focus:bg-white transition-all cursor-pointer"
              />
            </div>
          </div>
          
          {(activeTab === "flights" || activeTab === "hotels") && (
            <div className="space-y-2 lg:space-y-2.5">
              <label className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
                {activeTab === "hotels" ? "Check-out" : "Return Date"}
              </label>
              <div className="relative group">
                <Calendar className="absolute left-4 lg:left-5 top-1/2 -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 text-gray-300 group-focus-within:text-primary transition-colors" />
                <input 
                  type="text" 
                  placeholder="Select Date"
                  value={formData.returnDate}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  onChange={(e) => setFormData({...formData, returnDate: e.target.value})}
                  disabled={isReturnDisabled}
                  className={`w-full bg-gray-50/80 border border-gray-100 rounded-xl lg:rounded-2xl h-14 lg:h-16 pl-11 lg:pl-13 pr-4 text-xs lg:text-sm font-black text-gray-950 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/20 focus:bg-white transition-all cursor-pointer ${isReturnDisabled ? "opacity-30 cursor-not-allowed grayscale" : ""}`}
                />
              </div>
            </div>
          )}
        </div>

        <div className="space-y-2 lg:space-y-2.5">
          <label className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
            {activeTab === "visa" ? "Number of Applicants" : "Explorers & Cabin Class"}
          </label>
          <div className="relative group">
            <Users className="absolute left-4 lg:left-5 top-1/2 -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 text-gray-300 group-focus-within:text-primary transition-colors" />
            <select 
              value={formData.travellers}
              onChange={(e) => setFormData({...formData, travellers: e.target.value})}
              className="w-full bg-gray-50/80 border border-gray-100 rounded-xl lg:rounded-2xl h-14 lg:h-16 pl-11 lg:pl-13 pr-10 text-xs lg:text-sm font-black text-gray-950 appearance-none focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/20 focus:bg-white transition-all cursor-pointer"
            >
              <option>1 Traveller, Economy</option>
              <option>2 Travellers, Business</option>
              <option>Family (2+2), Economy</option>
              <option>Group (5+), Economy</option>
              <option>Elite Circle (Private Jet)</option>
            </select>
            <div className="absolute right-4 lg:right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-primary transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
            </div>
          </div>
        </div>

        <button 
          onClick={handleSearch}
          className="w-full bg-primary hover:bg-primary-dark text-white font-black h-14 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center gap-4 transition-all shadow-[0_20px_40px_rgba(56,142,60,0.2)] active:scale-[0.98] group mt-6 lg:mt-8 overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <span className="uppercase tracking-[0.2em] text-[10px] lg:text-[11px] relative z-10 font-black">Enquire on WhatsApp</span>
          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all group-hover:rotate-12 relative z-10">
            <Search className="w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform" />
          </div>
        </button>
      </div>
    </div>
  );
}
