"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Destinations", href: "#packages" },
  { name: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-1000 ease-in-out ${
          isScrolled 
            ? "bg-white/70 backdrop-blur-2xl py-3 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border-b border-black/[0.03]" 
            : "bg-transparent py-8"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <Link href="/" className="flex items-center gap-5 group">
            <div className="relative">
              {/* Refined Glassmorphism Logo Box */}
              <div className="w-14 h-14 bg-brand-dark rounded-[20px] flex items-center justify-center text-white font-serif font-bold text-3xl shadow-[0_20px_40px_rgba(10,31,17,0.3)] transition-all duration-700 group-hover:rotate-[15deg] group-hover:scale-110 group-hover:bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
                <span className="relative z-10">J</span>
              </div>
              {/* More elegant Gold Ring */}
              <div className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-accent-gold rounded-full border-[3px] border-white shadow-[0_5px_15px_rgba(197,160,89,0.4)] transition-transform duration-700 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-3xl tracking-tighter transition-colors duration-700 ${isScrolled ? "text-brand-dark" : "text-white text-shadow-sm"}`}>
                JADE
              </span>
              <span className={`text-[10px] font-black uppercase tracking-[0.5em] leading-none transition-colors duration-700 ${isScrolled ? "text-primary" : "text-accent-gold"}`}>
                Tours & Travels
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Refined Hover */}
          <div className="hidden lg:flex items-center gap-14">
            <div className="flex items-center gap-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`relative font-sans text-[13px] font-bold uppercase tracking-widest transition-all duration-500 group ${
                    isScrolled ? "text-brand-dark/80 hover:text-primary" : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-1/2 w-0 h-[1.5px] -translate-x-1/2 transition-all duration-500 group-hover:w-full ${
                    isScrolled ? "bg-primary" : "bg-accent-gold shadow-[0_0_10px_rgba(197,160,89,0.8)]"
                  }`} />
                </Link>
              ))}
            </div>
            
            <Link 
              href="#contact" 
              className={`relative overflow-hidden flex items-center gap-3 px-9 py-4 font-bold text-[13px] uppercase tracking-widest rounded-2xl transition-all duration-700 group shadow-2xl hover:-translate-y-1 active:translate-y-0 ${
                isScrolled 
                  ? "bg-brand-dark text-white hover:bg-primary" 
                  : "bg-white text-brand-dark hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)]"
              }`}
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <span className="relative z-10 font-black">Start Planning</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-500" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(true)} 
              className={`p-2 rounded-full transition-colors ${isScrolled ? "text-brand-dark hover:bg-gray-100" : "text-brand-dark hover:bg-white/20"}`}
              aria-label="Open Menu"
            >
              <Menu className="w-7 h-7" />
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[110] bg-white flex flex-col h-screen"
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  J
                </div>
                <span className="font-serif font-bold text-xl tracking-tight text-brand-dark">JADE</span>
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="p-3 bg-gray-50 rounded-full hover:bg-primary hover:text-white transition-all shadow-sm"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex flex-col p-10 gap-8 items-center justify-center flex-1">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-serif font-bold text-brand-dark hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-10 border-t border-gray-100">
              <Link 
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-3 w-full py-5 bg-primary text-white font-bold rounded-2xl text-lg shadow-xl"
              >
                Plan Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
