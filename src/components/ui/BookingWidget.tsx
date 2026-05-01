"use client";
import { useState } from "react";
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

  return (
    <div className="bg-white rounded-[24px] p-6 lg:p-8 w-full max-w-[550px] mx-auto relative overflow-hidden border border-gray-100">
      
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

      {/* Radio Trip Type */}
      <div className="flex items-center gap-8 mb-8 px-2">
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
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        <div className="relative grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">From</label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <MapPin className="w-4 h-4" />
              </div>
              <input 
                type="text" 
                placeholder="Leaving from"
                className="w-full bg-white border border-gray-200 rounded-xl h-14 pl-14 pr-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary/30 transition-all shadow-sm"
              />
            </div>
          </div>
          
          <button className="absolute left-1/2 top-[52px] -translate-x-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all shadow-md z-10">
            <ArrowLeftRight className="w-4 h-4" />
          </button>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">To</label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                <MapPin className="w-4 h-4" />
              </div>
              <input 
                type="text" 
                placeholder="Going to"
                className="w-full bg-white border border-gray-200 rounded-xl h-14 pl-14 pr-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary/30 transition-all shadow-sm"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Departure</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
              <input 
                type="text" 
                placeholder="Select Date"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                className="w-full bg-gray-50 border border-gray-100 rounded-xl h-14 pl-12 pr-4 text-sm font-bold focus:outline-none focus:border-primary focus:bg-white transition-all"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Return</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
              <input 
                type="text" 
                placeholder="Select Date"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                className="w-full bg-gray-50 border border-gray-100 rounded-xl h-14 pl-12 pr-4 text-sm font-bold focus:outline-none focus:border-primary focus:bg-white transition-all"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Travellers & Class</label>
          <div className="relative">
            <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
            <select className="w-full bg-gray-50 border border-gray-100 rounded-xl h-14 pl-12 pr-6 text-sm font-bold appearance-none focus:outline-none focus:border-primary focus:bg-white transition-all cursor-pointer">
              <option>1 Traveller, Economy</option>
              <option>2 Travellers, Business</option>
              <option>Family (2+2), Economy</option>
            </select>
          </div>
        </div>

        <button className="w-full bg-primary hover:bg-primary-dark text-white font-black h-16 rounded-xl flex items-center justify-center gap-3 transition-all shadow-[0_15px_30px_rgba(56,142,60,0.3)] active:scale-[0.98] group mt-8">
          <span>Search Flights</span>
          <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
}
