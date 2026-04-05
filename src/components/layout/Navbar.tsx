"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Tours", href: "#tours" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          isScrolled ? "bg-white/90 backdrop-blur-xl py-4 shadow-md" : "bg-transparent py-8"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className={`font-serif text-2xl tracking-tighter group transition-colors duration-300 ${isScrolled ? "text-jade-darkest" : "text-jade-darkest"}`}>
            JADE <span className="text-gold group-hover:italic transition-all font-light">TRAVELS</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`font-sans text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${isScrolled ? "text-jade-darkest/80 hover:text-jade" : "text-jade-darkest/80 hover:text-jade"}`}
              >
                {link.name}
              </Link>
            ))}
            <button className={`px-8 py-2.5 border-2 transition-all duration-300 text-[11px] font-bold uppercase tracking-[0.2em] rounded-full ${isScrolled ? "border-jade text-jade hover:bg-jade hover:text-jade-white" : "border-jade/30 text-jade-darkest hover:border-jade hover:bg-jade hover:text-jade-white"}`}>
              Inquire
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden ${isScrolled ? "text-jade-darkest" : "text-jade-darkest"}`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[110] bg-cream flex flex-col p-10"
          >
            <div className="flex justify-end mb-20">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-8 h-8 text-jade-darkest" />
              </button>
            </div>
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-5xl text-jade-darkest hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
