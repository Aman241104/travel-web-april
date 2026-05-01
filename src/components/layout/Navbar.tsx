"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Globe } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Destinations", href: "#packages" },
  { name: "Visa Guide", href: "#visa" },
  { name: "Blog", href: "#journal" },
  { name: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    
    // Scroll spy logic
    const sections = navLinks.map(link => link.href.replace("#", "")).filter(id => id !== "/");
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Special case for home
    const homeObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setActiveSection("home");
    }, { threshold: 0.5 });
    
    const homeSection = document.getElementById("home");
    if (homeSection) homeObserver.observe(homeSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      homeObserver.disconnect();
    };
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          isScrolled 
            ? "bg-white py-3 shadow-md border-b border-gray-100" 
            : "bg-white/80 backdrop-blur-md py-5"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-3xl font-black tracking-tight text-primary leading-none">JADE</span>
                <Globe className="w-6 h-6 text-primary" strokeWidth={3} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.1em] text-gray-800 leading-none">
                Tours and Travels
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = (link.name === "Home" && activeSection === "home") || activeSection === id;
                
                return (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className={`font-sans text-sm font-bold transition-all relative group ${
                      isActive ? "text-primary" : "text-gray-700 hover:text-primary"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span 
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 w-full h-[3px] bg-primary rounded-full" 
                      />
                    )}
                  </Link>
                );
              })}
            </div>
            
            <Link 
              href="#contact" 
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold text-sm rounded-full transition-all hover:bg-primary-dark shadow-md"
            >
              <Phone className="w-4 h-4 fill-current" />
              Get in Touch
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-gray-800 p-2"
            >
              <Menu size={28} />
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
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-white lg:hidden"
          >
            <div className="flex flex-col h-full p-8">
              <div className="flex items-center justify-between mb-12">
                <Link href="/" className="flex items-center gap-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="text-2xl font-black text-primary">JADE</span>
                  <Globe className="w-5 h-5 text-primary" strokeWidth={3} />
                </Link>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800">
                  <X size={32} />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-bold text-gray-800 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto">
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-primary text-white font-bold rounded-xl text-lg shadow-xl"
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
