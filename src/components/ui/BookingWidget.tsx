"use client";
import { useState } from "react";
import { Plane, Hotel, Package, Landmark, Search, Calendar, MapPin, Users, ArrowRight } from "lucide-react";
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

  return (
    <div className="bg-white rounded-[32px] shadow-[0_30px_100px_rgba(0,0,0,0.15)] p-10 w-full max-w-[520px] mx-auto border border-gray-100 relative z-20 overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
      
      {/* Tabs */}
      <div className="flex items-center justify-between mb-10 p-1.5 bg-gray-50 rounded-2xl border border-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-1 items-center justify-center gap-2 py-4 rounded-xl transition-all duration-500 relative group ${
              activeTab === tab.id 
                ? "text-primary font-bold" 
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {activeTab === tab.id && (
              <motion.div 
                layoutId="activeTab"
                className="absolute inset-0 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] rounded-xl"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2.5">
              <tab.icon className={`w-4 h-4 transition-colors duration-500 ${activeTab === tab.id ? "text-primary" : "group-hover:text-gray-600"}`} />
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] hidden sm:inline">{tab.label}</span>
            </span>
          </button>
        ))}
      </div>

      {/* Form Content */}
      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-6">
          <div className="group space-y-2.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-1">Destination</label>
            <div className="relative">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary transition-colors group-focus-within:bg-primary group-focus-within:text-white">
                <MapPin className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                placeholder="Where is your heart leading you?"
                className="w-full bg-gray-50 border-2 border-transparent rounded-[20px] h-16 pl-18 pr-6 text-sm font-semibold focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/20 focus:bg-white transition-all shadow-sm placeholder:text-gray-300"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-1">Departure</label>
            <div className="relative group">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-primary">
                <Calendar className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                placeholder="Select Date"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                className="w-full bg-gray-50 border-2 border-transparent rounded-[20px] h-16 pl-14 pr-4 text-sm font-semibold focus:outline-none focus:border-primary/20 focus:bg-white transition-all shadow-sm"
              />
            </div>
          </div>
          <div className="space-y-2.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-1">Return</label>
            <div className="relative group">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-primary">
                <Calendar className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                placeholder="Select Date"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                className="w-full bg-gray-50 border-2 border-transparent rounded-[20px] h-16 pl-14 pr-4 text-sm font-semibold focus:outline-none focus:border-primary/20 focus:bg-white transition-all shadow-sm"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2.5">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-1">Travelers & Class</label>
          <div className="relative group">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-primary">
              <Users className="w-5 h-5" />
            </div>
            <select className="w-full bg-gray-50 border-2 border-transparent rounded-[20px] h-16 pl-14 pr-6 text-sm font-semibold appearance-none focus:outline-none focus:border-primary/20 focus:bg-white transition-all shadow-sm cursor-pointer">
              <option>1 Adult, Economy</option>
              <option>2 Adults, Business</option>
              <option>Family (2+2), Economy</option>
              <option>Solo Traveler, First Class</option>
            </select>
          </div>
        </div>

        <Link href="#packages" className="w-full bg-brand-dark hover:bg-primary text-white font-bold h-20 rounded-[22px] flex items-center justify-center gap-4 transition-all shadow-[0_20px_40px_rgba(10,31,17,0.2)] hover:shadow-primary/40 active:scale-[0.98] group mt-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <Search className="w-6 h-6" />
          <span className="text-xl">Find Your Journey</span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </Link>

        <div className="flex items-center justify-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">Best Price Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">Secure Payments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
