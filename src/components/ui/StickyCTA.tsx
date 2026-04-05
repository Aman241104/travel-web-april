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
              className="group relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center overflow-hidden"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="max-w-0 group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 overflow-hidden whitespace-nowrap font-sans text-sm font-medium">
                Chat with Jigar
              </span>
            </a>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="bg-gold text-jade-black p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-jade-white flex items-center justify-center"
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
