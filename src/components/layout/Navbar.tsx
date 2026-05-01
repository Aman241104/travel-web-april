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
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-md py-3 shadow-sm border-b border-gray-100" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                J
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-brand-dark rounded-full border-2 border-white" />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-2xl tracking-tight transition-colors duration-300 ${isScrolled ? "text-brand-dark" : "text-brand-dark"}`}>
                JADE
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary leading-none">
                Tours & Travels
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="relative font-sans text-sm font-bold text-brand-dark hover:text-primary transition-colors group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
            
            <Link 
              href="#contact" 
              className="flex items-center gap-2 px-7 py-3.5 bg-brand-dark text-white font-bold text-sm rounded-full transition-all hover:bg-primary hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
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
