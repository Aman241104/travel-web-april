"use client";
import { useState } from "react";
import { Plane, Hotel, Package, Landmark, Search, Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const tabs = [
  { id: "flights", label: "Flights", icon: Plane },
  { id: "hotels", label: "Hotels", icon: Hotel },
  { id: "packages", label: "Packages", icon: Package },
  { id: "visa", label: "Visa", icon: Landmark },
];

export default function BookingWidget() {
  const [activeTab, setActiveTab] = useState("flights");

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-[32px] shadow-2xl p-8 w-full max-w-[480px] mx-auto border border-white/50 relative z-20">
      {/* Tabs */}
      <div className="flex items-center justify-between mb-8 p-1.5 bg-gray-100/50 rounded-2xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-1 items-center justify-center gap-2 py-3 rounded-xl transition-all duration-300 relative ${
              activeTab === tab.id 
                ? "text-primary font-bold shadow-sm" 
                : "text-gray-500 hover:text-gray-700 hover:bg-white/30"
            }`}
          >
            {activeTab === tab.id && (
              <motion.div 
                layoutId="activeTab"
                className="absolute inset-0 bg-white rounded-xl shadow-sm"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <tab.icon className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">{tab.label}</span>
            </span>
          </button>
        ))}
      </div>

      {/* Form Content */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-5">
          <div className="group space-y-2">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.15em] ml-1">Destination</label>
            <div className="relative group">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary group-focus-within:scale-110 transition-transform" />
              <input 
                type="text" 
                placeholder="Where are you going?"
                className="w-full bg-white/50 border border-gray-200 rounded-2xl h-14 pl-12 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all shadow-sm"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.15em] ml-1">Date</label>
            <div className="relative group">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
              <input 
                type="text" 
                placeholder="Departure"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                className="w-full bg-white/50 border border-gray-200 rounded-2xl h-14 pl-12 pr-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all shadow-sm"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.15em] ml-1">Return</label>
            <div className="relative group">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
              <input 
                type="text" 
                placeholder="Return"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                className="w-full bg-white/50 border border-gray-200 rounded-2xl h-14 pl-12 pr-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all shadow-sm"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.15em] ml-1">Guests & Class</label>
          <div className="relative group">
            <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
            <select className="w-full bg-white/50 border border-gray-200 rounded-2xl h-14 pl-12 pr-4 text-sm font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all shadow-sm">
              <option>1 Adult, Economy</option>
              <option>2 Adults, Economy</option>
              <option>Family (2+2), Economy</option>
              <option>1 Adult, Business</option>
            </select>
          </div>
        </div>

        <button className="w-full bg-brand-dark hover:bg-primary text-white font-bold h-16 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl active:scale-[0.98] group mt-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <Search className="w-5 h-5" />
          <span className="text-lg">Find Your Journey</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-widest mt-4">
          Best price guarantee • No hidden fees
        </p>
      </div>
    </div>
  );
}
