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
    <div className="bg-white rounded-[48px] p-8 lg:p-12 w-full max-w-[580px] mx-auto relative overflow-hidden border border-white shadow-[0_40px_100px_rgba(0,0,0,0.1)]">
      
      {/* Tabs - Enhanced Visuals */}
      <div className="flex items-center justify-between mb-12 pb-8 border-b border-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`flex flex-col items-center gap-4 flex-1 transition-all relative group ${
              activeTab === tab.id 
                ? "text-primary" 
                : "text-gray-300 hover:text-gray-500"
            }`}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${activeTab === tab.id ? "bg-primary/10 text-primary shadow-inner scale-110" : "bg-transparent group-hover:scale-105"}`}>
              <tab.icon className="w-7 h-7" />
            </div>
            <span className="text-[11px] font-black uppercase tracking-[0.25em]">{tab.label}</span>
            {activeTab === tab.id && (
              <motion.div 
                layoutId="activeTabUnderline"
                className="absolute -bottom-8 w-full h-[4px] bg-primary rounded-full"
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
            className="flex items-center gap-8 mb-10 px-2 overflow-hidden"
          >
            {[
              { id: "one-way", label: "One Way" },
              { id: "round-trip", label: "Round Trip" },
              { id: "multi-city", label: "Multi-city" },
            ].map((type) => (
              <label key={type.id} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <input 
                    type="radio" 
                    name="tripType" 
                    checked={tripType === type.id}
                    onChange={() => setTripType(type.id)}
                    className="appearance-none w-6 h-6 border-2 border-gray-200 rounded-full checked:border-primary transition-all cursor-pointer"
                  />
                  {tripType === type.id && (
                    <motion.div layoutId="radio-dot" className="absolute w-3 h-3 bg-primary rounded-full" />
                  )}
                </div>
                <span className={`text-[13px] font-black uppercase tracking-widest ${tripType === type.id ? "text-gray-950" : "text-gray-400 group-hover:text-gray-600"}`}>
                  {type.label}
                </span>
              </label>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form Fields - Enhanced Contrast and Sizes */}
      <div className="space-y-10">
        <div className={`relative grid ${activeTab === "flights" ? "grid-cols-2" : "grid-cols-1"} gap-8`}>
          {activeTab === "flights" && (
            <div className="space-y-4">
              <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] ml-2">Origin</label>
              <div className="relative group">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-gray-400 group-focus-within:text-primary transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <input 
                  type="text" 
                  placeholder="Leaving from"
                  value={formData.from}
                  onChange={(e) => setFormData({...formData, from: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200/60 rounded-[24px] h-20 pl-16 pr-6 text-base font-black text-gray-900 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/30 focus:bg-white transition-all shadow-sm placeholder:text-gray-300"
                />
              </div>
            </div>
          )}
          
          {activeTab === "flights" && (
            <button 
              onClick={() => setFormData({ ...formData, from: formData.to, to: formData.from })}
              className="absolute left-1/2 top-[68px] -translate-x-1/2 w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all shadow-xl z-10 hover:rotate-180 duration-700"
            >
              <ArrowLeftRight className="w-5 h-5" />
            </button>
          )}

          <div className="space-y-4">
            <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] ml-2">
              {activeTab === "flights" ? "Destination" : activeTab === "hotels" ? "City / Hotel" : "Target Location"}
            </label>
            <div className="relative group">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-gray-400 group-focus-within:text-primary transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <input 
                type="text" 
                placeholder={activeTab === "visa" ? "Enter country" : "Where are you going?"}
                value={formData.to}
                onChange={(e) => setFormData({...formData, to: e.target.value})}
                className="w-full bg-gray-50 border border-gray-200/60 rounded-[24px] h-20 pl-16 pr-6 text-base font-black text-gray-900 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/30 focus:bg-white transition-all shadow-sm placeholder:text-gray-300"
              />
            </div>
          </div>
        </div>

        {activeTab !== "flights" && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] ml-2">
              {activeTab === "hotels" ? "Select Sanctuary Type" : activeTab === "visa" ? "Select Visa Category" : "Select Experience Theme"}
            </label>
            <div className="flex flex-wrap gap-4">
              {subTypeOptions[activeTab]?.map((option) => (
                <button
                  key={option}
                  onClick={() => setFormData({...formData, subType: option})}
                  className={`px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all border ${
                    formData.subType === option 
                      ? "bg-primary text-white border-primary shadow-2xl shadow-primary/20 scale-105" 
                      : "bg-white text-gray-400 border-gray-100 hover:border-primary/30 hover:text-gray-600"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        <div className={`grid ${activeTab === "visa" || activeTab === "packages" ? "grid-cols-1" : "grid-cols-2"} gap-8`}>
          <div className="space-y-4">
            <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] ml-2">
              {activeTab === "hotels" ? "Check-in" : activeTab === "flights" ? "Departure" : "Preferred Date"}
            </label>
            <div className="relative group">
              <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-300 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Select Date"
                value={formData.departure}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                onChange={(e) => setFormData({...formData, departure: e.target.value})}
                className="w-full bg-gray-50 border border-gray-200/60 rounded-[24px] h-20 pl-16 pr-6 text-base font-black text-gray-900 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/30 focus:bg-white transition-all shadow-sm"
              />
            </div>
          </div>
          
          {(activeTab === "flights" || activeTab === "hotels") && (
            <div className="space-y-4">
              <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] ml-2">
                {activeTab === "hotels" ? "Check-out" : "Return Date"}
              </label>
              <div className="relative group">
                <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-300 group-focus-within:text-primary transition-colors" />
                <input 
                  type="text" 
                  placeholder="Select Date"
                  value={formData.returnDate}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  onChange={(e) => setFormData({...formData, returnDate: e.target.value})}
                  disabled={isReturnDisabled}
                  className={`w-full bg-gray-50 border border-gray-200/60 rounded-[24px] h-20 pl-16 pr-6 text-base font-black text-gray-900 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/30 focus:bg-white transition-all shadow-sm ${isReturnDisabled ? "opacity-20 cursor-not-allowed grayscale" : ""}`}
                />
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] ml-2">
            {activeTab === "visa" ? "Number of Applicants" : "Explorers & Cabin Class"}
          </label>
          <div className="relative group">
            <Users className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-300 group-focus-within:text-primary transition-colors" />
            <select 
              value={formData.travellers}
              onChange={(e) => setFormData({...formData, travellers: e.target.value})}
              className="w-full bg-gray-50 border border-gray-200/60 rounded-[24px] h-20 pl-16 pr-12 text-base font-black text-gray-900 appearance-none focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/30 focus:bg-white transition-all shadow-sm cursor-pointer"
            >
              <option>1 Traveller, Economy</option>
              <option>2 Travellers, Business</option>
              <option>Family (2+2), Economy</option>
              <option>Group (5+), Economy</option>
              <option>Elite Circle (Private Jet)</option>
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-primary transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
            </div>
          </div>
        </div>

        <button 
          onClick={handleSearch}
          className="w-full bg-primary hover:bg-primary-dark text-white font-black h-24 rounded-[32px] flex items-center justify-center gap-6 transition-all shadow-[0_30px_60px_rgba(56,142,60,0.3)] active:scale-[0.98] group mt-12 overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <span className="uppercase tracking-[0.35em] text-[13px] relative z-10">Enquire on WhatsApp</span>
          <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all group-hover:rotate-12 relative z-10">
            <Search className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </div>
        </button>
      </div>
    </div>
  );
}
