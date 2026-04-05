"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
          className="fixed inset-0 z-[1000] bg-jade-black flex flex-col items-center justify-center"
        >
          <div className="relative overflow-hidden mb-4">
            <motion.h2 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-serif text-3xl md:text-5xl tracking-ultra text-white"
            >
              JADE <span className="text-gold italic">TRAVELS</span>
            </motion.h2>
          </div>
          <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gold"
            />
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-[10px] uppercase tracking-ultra text-gold/60 font-sans"
          >
            Refining your experience
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
