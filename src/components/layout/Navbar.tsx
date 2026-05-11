"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Globe, Sparkles, ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import Link from "next/link";
import { useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";

const navLinks = [
  { name: "About", href: "#trust" },
  { name: "Why Us", href: "#why-us" },
  { name: "Services", href: "#services" },
  { name: "Values", href: "#values" },
  { name: "Collection", href: "#packages" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Expertise", href: "#process" },
  { name: "Journal", href: "#journal" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const lenis = useLenis();
  const navRef = useRef<HTMLElement>(null);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = `Hello Jade Atelier! I am inquiring about your Private Concierge services.\n\n` +
      `I would like to speak with a travel architect about my upcoming travel plans.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919825438324?text=${encodedMessage}`, '_blank');
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-in-out ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-xl py-4 shadow-sm border-b border-gray-50" 
            : "bg-transparent py-5 lg:py-10"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          
          {/* Elite Branding */}
          <Link 
            href="#home" 
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 lg:gap-3 group"
          >
            <div className="text-[#388E3C]">
              <Globe className="w-7 h-7 lg:w-10 lg:h-10" strokeWidth={1.2} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg lg:text-2xl font-sans font-black tracking-tighter leading-none text-gray-950">JADE</span>
              <span className="text-[6px] lg:text-[8px] font-black uppercase tracking-[0.4em] leading-none mt-1 text-gray-400">
                Atelier Of Travel
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Editorial Minimalist */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            <div className="flex items-center gap-4 xl:gap-8">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                
                return (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-sans text-[9px] xl:text-[11px] font-black uppercase tracking-[0.2em] xl:tracking-[0.3em] transition-all relative py-1 group"
                  >
                    <div className="h-[14px] overflow-hidden relative block">
                      <motion.div 
                        animate={{ y: isActive ? "-50%" : "0%" }}
                        whileHover={{ y: "-50%" }}
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                        className="flex flex-col"
                      >
                        <span className={`h-[14px] flex items-center leading-none transition-colors duration-500 ${isActive ? "text-[#388E3C]" : "text-gray-950"}`}>{link.name}</span>
                        <span className="h-[14px] flex items-center leading-none text-[#388E3C]">{link.name}</span>
                      </motion.div>
                    </div>
                    {isActive && (
                      <motion.div 
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#388E3C]/20"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
            
            <button 
              onClick={handleContactClick}
              className="flex items-center gap-2 px-6 py-3 font-black text-[10px] uppercase tracking-[0.2em] rounded-full transition-all border border-gray-100 shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)] bg-white text-gray-950 group"
            >
              <Phone className="w-3.5 h-3.5 text-gray-950 group-hover:rotate-12 transition-transform" strokeWidth={2.5} />
              <span>Private Concierge</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-500 ${
                isScrolled 
                  ? "bg-gray-100 text-gray-950 shadow-sm" 
                  : "bg-gray-900/5 text-gray-950 backdrop-blur-md border border-gray-900/10"
              }`}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Immersive Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[120] bg-[#050807]/95 text-white lg:hidden flex flex-col p-6 pt-10"
          >
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-[0_0_20px_rgba(56,142,60,0.3)]">
                    <Globe className="w-4 h-4" />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-lg font-black tracking-tightest leading-none">JADE</span>
                   <span className="text-[5px] font-black uppercase tracking-[0.4em] leading-none mt-1 text-gray-400">Atelier</span>
                 </div>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center active:scale-90 transition-transform"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-4 overflow-y-auto no-scrollbar py-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.04, duration: 0.5, ease: "circOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-2xl font-black tracking-tightest uppercase flex items-center justify-between group py-2 border-b border-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-primary text-[10px] font-black tracking-widest">{String(i+1).padStart(2, '0')}</span>
                      <span className="group-active:text-primary transition-colors duration-300">{link.name}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white/20 group-active:text-primary transition-all" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-8 pb-4 space-y-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <button
                  onClick={handleContactClick}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-primary text-white font-black rounded-2xl text-sm shadow-[0_20px_40px_rgba(56,142,60,0.2)] uppercase tracking-[0.2em] active:scale-[0.98] transition-all"
                >
                  <Phone size={16} strokeWidth={2.5} />
                  Start Your Legacy
                </button>
              </motion.div>
              
              <div className="flex flex-col items-center gap-4">
                <div className="flex justify-center gap-8 opacity-20">
                  <Globe size={16} />
                  <Sparkles size={16} />
                  <Menu size={16} />
                </div>
                <p className="text-[8px] font-black text-white/20 uppercase tracking-[0.5em]">Global Standards • Secure Protocols</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
