"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#packages" },
  { name: "The Curators", href: "#about" },
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
          isScrolled ? "bg-white/80 backdrop-blur-2xl py-4 border-b border-onyx/5" : "bg-transparent py-8"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <span className="font-serif text-3xl tracking-tightest text-onyx">JADE</span>
            <span className="font-sans text-[10px] font-black uppercase tracking-[0.4em] text-accent-blue mt-1">Travels</span>
          </Link>

          <div className="hidden md:flex items-center gap-16">
            <div className="flex items-center gap-12">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="group relative font-sans text-[10px] font-black uppercase tracking-[0.3em] text-onyx/40 hover:text-onyx transition-colors"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-accent-blue transition-all duration-500 group-hover:w-full" />
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-8 pl-8 border-l border-onyx/5">
              <button className="px-10 py-3 bg-onyx text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-accent-blue transition-all duration-500 shadow-xl shadow-onyx/10">
                Inquire
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6 md:hidden">
            <button onClick={() => setIsMobileMenuOpen(true)} className="text-onyx">
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[110] bg-white flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-24">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-3xl text-onyx">JADE</Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-4 bg-onyx/5 rounded-full">
                <X className="w-8 h-8 text-onyx" />
              </button>
            </div>
            <div className="flex flex-col gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-6xl text-onyx hover:text-accent-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 w-full py-8 bg-onyx text-white font-black uppercase tracking-[0.4em] text-[10px] rounded-full shadow-2xl"
              >
                Inquire Access
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
