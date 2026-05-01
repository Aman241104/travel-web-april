"use client";
import { useState, useEffect } from "react";
import { Plane, Hotel, Package, Landmark, Search, Calendar, MapPin, Users, ArrowRight, ArrowLeftRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const tabs = [
  { id: "flights", label: "Flights", icon: Plane },
  { id: "hotels", label: "Hotels", icon: Hotel },
  { id: "packages", label: "Packages", icon: Package },
  { id: "visa", label: "Visa", icon: Landmark },
];

export default function BookingWidget() {
  const [activeTab, setActiveTab] = useState("flights");
  const [tripType, setTripType] = useState("one-way");
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departure: "",
    returnDate: "",
    travellers: "1 Traveller, Economy"
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const isReturnDisabled = mounted && activeTab === "flights" && tripType === "one-way";

  const handleSearch = () => {
    const { from, to, departure, returnDate, travellers } = formData;
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
        `• City/Hotel: ${to}\n` +
        `• Check-in: ${departure}\n` +
        `• Check-out: ${returnDate}\n` +
        `• Guests: ${travellers}`;
    } else if (activeTab === "packages") {
      message += `📦 TOUR PACKAGE\n` +
        `• Destination: ${to}\n` +
        `• Preferred Date: ${departure}\n` +
        `• Travellers: ${travellers}`;
    } else if (activeTab === "visa") {
      message += `🛂 VISA ASSISTANCE\n` +
        `• Country: ${to}\n` +
        `• Travel Date: ${departure}\n` +
        `• Applicants: ${travellers}`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919825438324?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-white rounded-[24px] p-6 lg:p-8 w-full max-w-[550px] mx-auto relative overflow-hidden border border-gray-100 shadow-2xl">
      
      {/* Tabs - Centered with dividers */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center gap-2 flex-1 transition-all relative ${
              activeTab === tab.id 
                ? "text-primary scale-110" 
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <tab.icon className={`w-6 h-6 ${activeTab === tab.id ? "text-primary" : "text-gray-300"}`} />
            <span className="text-[11px] font-bold uppercase tracking-widest">{tab.label}</span>
            {activeTab === tab.id && (
              <motion.div 
                layoutId="activeTabUnderline"
                className="absolute -bottom-4 w-full h-[2px] bg-primary"
              />
            )}
            {i < tabs.length - 1 && (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-6 bg-gray-200" />
            )}
          </button>
        ))}
      </div>

      {/* Radio Trip Type - Only show for flights */}
      {activeTab === "flights" && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-8 mb-8 px-2"
        >
          {[
            { id: "one-way", label: "One Way" },
            { id: "round-trip", label: "Round Trip" },
            { id: "multi-city", label: "Multi-city" },
          ].map((type) => (
            <label key={type.id} className="flex items-center gap-2.5 cursor-pointer group">
              <div className="relative w-5 h-5 flex items-center justify-center">
                <input 
                  type="radio" 
                  name="tripType" 
                  checked={tripType === type.id}
                  onChange={() => setTripType(type.id)}
                  className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-primary transition-all cursor-pointer"
                />
                {tripType === type.id && (
                  <div className="absolute w-2.5 h-2.5 bg-primary rounded-full" />
                )}
              </div>
              <span className={`text-sm font-bold ${tripType === type.id ? "text-gray-900" : "text-gray-500 group-hover:text-gray-700"}`}>
                {type.label}
              </span>
            </label>
          ))}
        </motion.div>
      )}

      {/* Form Fields */}
      <div className="space-y-6">
        <div className={`relative grid ${activeTab === "flights" ? "grid-cols-2" : "grid-cols-1"} gap-4`}>
          {activeTab === "flights" && (
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">From</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <input 
                  type="text" 
                  placeholder="Leaving from"
                  value={formData.from}
                  onChange={(e) => setFormData({...formData, from: e.target.value})}
                  className="w-full bg-white border border-gray-200 rounded-xl h-14 pl-14 pr-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary/30 transition-all shadow-sm"
                />
              </div>
            </div>
          )}
          
          {activeTab === "flights" && (
            <button 
              onClick={() => setFormData({ ...formData, from: formData.to, to: formData.from })}
              className="absolute left-1/2 top-[52px] -translate-x-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all shadow-md z-10"
            >
              <ArrowLeftRight className="w-4 h-4" />
            </button>
          )}

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
              {activeTab === "flights" ? "To" : activeTab === "hotels" ? "City / Hotel" : "Destination"}
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <MapPin className="w-4 h-4" />
              </div>
              <input 
                type="text" 
                placeholder={activeTab === "visa" ? "Enter country" : "Where are you going?"}
                value={formData.to}
                onChange={(e) => setFormData({...formData, to: e.target.value})}
                className="w-full bg-white border border-gray-200 rounded-xl h-14 pl-14 pr-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary/30 transition-all shadow-sm"
              />
            </div>
          </div>
        </div>

        <div className={`grid ${activeTab === "visa" || activeTab === "packages" ? "grid-cols-1" : "grid-cols-2"} gap-6`}>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
              {activeTab === "hotels" ? "Check-in" : activeTab === "flights" ? "Departure" : "Preferred Date"}
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
              <input 
                type="text" 
                placeholder="Select Date"
                value={formData.departure}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                onChange={(e) => setFormData({...formData, departure: e.target.value})}
                className="w-full bg-gray-50 border border-gray-100 rounded-xl h-14 pl-12 pr-4 text-sm font-bold focus:outline-none focus:border-primary focus:bg-white transition-all"
              />
            </div>
          </div>
          
          {(activeTab === "flights" || activeTab === "hotels") && (
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                {activeTab === "hotels" ? "Check-out" : "Return"}
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                <input 
                  type="text" 
                  placeholder="Select Date"
                  value={formData.returnDate}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  onChange={(e) => setFormData({...formData, returnDate: e.target.value})}
                  disabled={isReturnDisabled}
                  className={`w-full bg-gray-50 border border-gray-100 rounded-xl h-14 pl-12 pr-4 text-sm font-bold focus:outline-none focus:border-primary focus:bg-white transition-all ${isReturnDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                />
              </div>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
            {activeTab === "visa" ? "Applicants" : "Travellers & Class"}
          </label>
          <div className="relative">
            <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
            <select 
              value={formData.travellers}
              onChange={(e) => setFormData({...formData, travellers: e.target.value})}
              className="w-full bg-gray-50 border border-gray-100 rounded-xl h-14 pl-12 pr-6 text-sm font-bold appearance-none focus:outline-none focus:border-primary focus:bg-white transition-all cursor-pointer"
            >
              <option>1 Traveller, Economy</option>
              <option>2 Travellers, Business</option>
              <option>Family (2+2), Economy</option>
              <option>Group (5+), Economy</option>
            </select>
          </div>
        </div>

        <button 
          onClick={handleSearch}
          className="w-full bg-primary hover:bg-primary-dark text-white font-black h-16 rounded-xl flex items-center justify-center gap-3 transition-all shadow-[0_15px_30px_rgba(56,142,60,0.3)] active:scale-[0.98] group mt-8"
        >
          <span>Enquire on WhatsApp</span>
          <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
}
