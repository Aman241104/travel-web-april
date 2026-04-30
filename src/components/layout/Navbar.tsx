"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Destinations", href: "#packages" },
  { name: "Expertise", href: "#process" },
  { name: "Journal", href: "#journal" },
  { name: "Our Story", href: "#about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-in-out ${
          isScrolled 
            ? "bg-[#0B1310]/80 backdrop-blur-xl py-4 border-b border-[#F2EFE9]/5 shadow-sm" 
            : "bg-transparent py-8"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="group flex flex-col items-start leading-none outline-none">
            <span className={`font-serif text-3xl tracking-tighter transition-colors duration-500 ${isScrolled ? "text-[#F2EFE9]" : "text-[#F2EFE9]"}`}>JADE</span>
            <span className="font-sans text-[8px] font-black uppercase tracking-[0.5em] text-[#C1A67B] mt-1 ml-0.5">Travels</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="group relative font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-[#F2EFE9]/60 hover:text-[#F2EFE9] transition-colors duration-300"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-[#C1A67B] transition-all duration-500 ease-out group-hover:w-full" />
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-8 pl-8 border-l border-[#F2EFE9]/10">
              <Link 
                href="#contact" 
                className="group relative overflow-hidden px-8 py-3 bg-[#0B1310] text-[#F2EFE9] font-bold text-[10px] uppercase tracking-[0.3em] rounded-full transition-all duration-500 hover:shadow-xl hover:shadow-[#1A2421]/20 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Inquire
                  <ArrowUpRight className="w-3 h-3 transition-transform duration-500 group-hover:rotate-45" />
                </span>
                <div className="absolute inset-0 bg-[#C1A67B] translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(true)} 
              className="text-[#F2EFE9] p-2 hover:bg-[#0B1310]/5 rounded-full transition-colors"
              aria-label="Open Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[110] bg-[#0B1310] flex flex-col"
          >
            <div className="flex justify-between items-center p-8 border-b border-[#F2EFE9]/5">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="group flex flex-col items-start leading-none">
                <span className="font-serif text-3xl tracking-tighter text-[#F2EFE9]">JADE</span>
                <span className="font-sans text-[8px] font-black uppercase tracking-[0.5em] text-[#C1A67B] mt-1 ml-0.5">Travels</span>
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="p-4 bg-[#0B1310]/5 rounded-full hover:bg-[#0B1310]/10 transition-colors"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6 text-[#F2EFE9]" />
              </button>
            </div>
            
            <div className="flex flex-col justify-center flex-grow px-8 gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-4xl text-[#F2EFE9]/30 hover:text-[#F2EFE9] transition-colors duration-500 flex items-center justify-between group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-8 h-8 opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 text-[#C1A67B]" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-8 border-t border-[#F2EFE9]/5">
              <Link 
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full py-6 bg-[#0B1310] text-[#F2EFE9] font-bold uppercase tracking-[0.4em] text-xs rounded-full text-center active:scale-95 transition-transform"
              >
                Begin Your Journey
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
