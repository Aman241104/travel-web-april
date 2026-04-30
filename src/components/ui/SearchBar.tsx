"use client";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function SearchBar() {
  return (
    <div className="w-full max-w-5xl mx-auto bg-[#0B1310]/80 backdrop-blur-3xl rounded-3xl p-4 md:p-6 shadow-2xl border border-[#F2EFE9]/5 flex flex-col md:flex-row items-center gap-6 md:gap-10">
      <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
        <div className="flex items-center gap-4 px-4 md:border-r border-[#F2EFE9]/10">
          <MapPin className="w-5 h-5 text-accent-blue shrink-0" />
          <div className="flex flex-col items-start">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#F2EFE9]/30">Destination</span>
            <input 
              type="text" 
              placeholder="Where to?" 
              className="bg-transparent outline-none text-[#F2EFE9] font-sans font-medium w-full placeholder:text-[#F2EFE9]/20"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4 px-4 md:border-r border-[#F2EFE9]/10">
          <Calendar className="w-5 h-5 text-accent-blue shrink-0" />
          <div className="flex flex-col items-start">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#F2EFE9]/30">When</span>
            <input 
              type="text" 
              placeholder="Select date" 
              className="bg-transparent outline-none text-[#F2EFE9] font-sans font-medium w-full placeholder:text-[#F2EFE9]/20"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            />
          </div>
        </div>

        <div className="flex items-center gap-4 px-4">
          <Users className="w-5 h-5 text-accent-blue shrink-0" />
          <div className="flex flex-col items-start">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#F2EFE9]/30">Travelers</span>
            <select className="bg-transparent outline-none text-[#F2EFE9] font-sans font-medium w-full appearance-none">
              <option>1 Traveler</option>
              <option>2 Travelers</option>
              <option>3 Travelers</option>
              <option>4+ Travelers</option>
            </select>
          </div>
        </div>
      </div>

      <MagneticButton className="w-full md:w-auto px-10 py-5 bg-[#0B1310] text-[#F2EFE9] rounded-2xl flex items-center justify-center gap-3 hover:bg-accent-blue transition-colors group">
        <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="font-sans font-black text-[10px] uppercase tracking-widest">Search</span>
      </MagneticButton>
    </div>
  );
}
