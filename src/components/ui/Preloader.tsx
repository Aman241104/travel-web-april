"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[1000] bg-white flex flex-col items-center justify-center"
        >
          <div className="relative flex flex-col items-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 mb-12"
            >
              <span className="font-serif text-4xl md:text-6xl tracking-tightest text-onyx">JADE</span>
              <span className="font-sans text-[10px] font-black uppercase tracking-[0.6em] text-accent-blue mt-2">Travels</span>
            </motion.div>
            
            <div className="w-64 h-[1px] bg-onyx/5 relative overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-accent-blue"
              />
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-[9px] uppercase tracking-[0.8em] text-onyx/20 font-black font-sans"
            >
              Excellence defined
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
