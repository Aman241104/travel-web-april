"use client";
import { MessageCircle, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[90] flex flex-col gap-4">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="flex flex-col gap-4"
          >
            {/* WhatsApp */}
            <a
              href="https://wa.me/919825438324"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#25D366] text-white p-5 rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.3)] transition-all duration-500 hover:scale-110 flex items-center justify-center overflow-hidden"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="max-w-0 group-hover:max-w-xs group-hover:ml-4 transition-all duration-700 ease-in-out overflow-hidden whitespace-nowrap font-sans text-xs font-black uppercase tracking-widest">
                Direct Concierge
              </span>
            </a>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="bg-onyx text-white p-5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-500 hover:scale-110 hover:bg-accent-blue flex items-center justify-center border border-white/5"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
