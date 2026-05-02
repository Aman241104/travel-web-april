"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Globe } from "lucide-react";
import Link from "next/link";
import { useLenis } from "@studio-freight/react-lenis";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Why Us", href: "#why-us" },
  { name: "Services", href: "#services" },
  { name: "Destinations", href: "#packages" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const lenis = useLenis();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element && lenis) {
        lenis.scrollTo(element, { offset: -80, duration: 1.5 });
      } else if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Toggle navbar background
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navLinks.map(link => link.href.replace("#", ""));
      let currentSection = activeSection;

      // Special case for top of page
      if (window.scrollY < 100) {
        currentSection = "home";
      } else {
        // Find which section is currently most visible in the upper part of the screen
        for (const id of sections) {
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            // If the top of the section is in the top 200px of the screen
            if (rect.top <= 200 && rect.bottom >= 200) {
              currentSection = id;
            }
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-xl py-3 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border-b border-gray-100" 
            : "bg-transparent py-6 lg:py-8"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <Link 
            href="#home" 
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 group"
          >
            <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl flex items-center justify-center transition-all duration-500 ${isScrolled ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-white/10 backdrop-blur-md border border-white/20 text-primary group-hover:bg-primary group-hover:text-white"}`}>
              <Globe className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className={`text-2xl lg:text-3xl font-black tracking-tight leading-none transition-colors duration-500 ${isScrolled ? "text-gray-900" : "text-gray-950 lg:text-gray-900"}`}>JADE</span>
              </div>
              <span className={`text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] leading-none mt-1 transition-colors duration-500 ${isScrolled ? "text-primary" : "text-gray-700"}`}>
                Tours and Travels
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                
                return (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`font-sans text-[13px] font-black uppercase tracking-[0.15em] transition-all relative py-2 group ${
                      isActive 
                        ? "text-primary" 
                        : isScrolled ? "text-gray-600 hover:text-primary" : "text-gray-800 hover:text-primary"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span 
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 w-full h-[3px] bg-primary rounded-full" 
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
            
            <Link 
              href="#contact" 
              onClick={(e) => handleNavClick(e, "#contact")}
              className={`flex items-center gap-3 px-8 py-4 font-black text-xs uppercase tracking-widest rounded-full transition-all shadow-xl hover:-translate-y-1 active:translate-y-0 ${
                isScrolled 
                  ? "bg-primary text-white shadow-primary/20 hover:bg-primary-dark" 
                  : "bg-white text-gray-900 hover:bg-primary hover:text-white"
              }`}
            >
              <Phone className="w-4 h-4 fill-current" />
              Get in Touch
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className={`p-2 rounded-xl transition-colors ${isScrolled ? "bg-gray-100 text-gray-900" : "bg-white/20 backdrop-blur-md text-gray-900"}`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[110] bg-white lg:hidden"
          >
            <div className="flex flex-col h-full p-8">
              <div className="flex items-center justify-between mb-16">
                <Link 
                  href="#home" 
                  className="flex items-center gap-3" 
                  onClick={(e) => handleNavClick(e, "#home")}
                >
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                    <Globe className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black text-gray-900">JADE</span>
                </Link>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-900"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-4xl font-black tracking-tighter transition-colors ${
                      activeSection === link.href.replace("#", "") ? "text-primary" : "text-gray-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto">
                <Link
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="w-full flex items-center justify-center gap-4 px-8 py-6 bg-primary text-white font-black rounded-2xl text-lg shadow-2xl shadow-primary/30 uppercase tracking-widest"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
