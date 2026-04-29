"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "What We Do", href: "#services" },
  { name: "Destinations", href: "#packages" },
  { name: "Our Experts", href: "#about" },
  { name: "Mission", href: "#usp" },
  { name: "Stories", href: "#journal" },
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
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
          isScrolled 
            ? "bg-onyx/90 backdrop-blur-xl py-4 border-b border-white/5" 
            : "bg-transparent py-8"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="group flex flex-col items-start leading-none">
            <span className={`font-serif text-3xl tracking-tightest transition-colors duration-500 ${isScrolled ? "text-white" : "text-white"}`}>JADE</span>
            <span className="font-sans text-[8px] font-black uppercase tracking-[0.5em] text-brand-teal mt-1">Travels</span>
          </Link>

          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="group relative font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute left-1/2 bottom-[-4px] w-0 h-[1.5px] bg-brand-teal transition-all duration-500 group-hover:w-full group-hover:left-0" />
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-8 pl-8 border-l border-white/10">
              <Link href="#contact" className="px-8 py-3.5 bg-brand-teal text-white font-bold text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-onyx transition-all duration-500 shadow-xl shadow-brand-teal/20">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-6 md:hidden">
            <button onClick={() => setIsMobileMenuOpen(true)} className="text-white p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-onyx flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="group flex flex-col items-start leading-none">
                <span className="font-serif text-3xl tracking-tightest text-white">JADE</span>
                <span className="font-sans text-[8px] font-black uppercase tracking-[0.5em] text-brand-teal mt-1">Travels</span>
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-4 bg-white/5 rounded-full">
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-4xl text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link 
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-8 block w-full py-5 bg-brand-teal text-white font-bold uppercase tracking-[0.2em] text-xs rounded-full shadow-2xl text-center"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
