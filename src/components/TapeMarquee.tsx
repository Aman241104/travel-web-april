"use client";
import { motion } from "framer-motion";

interface TapeMarqueeProps {
  reverse?: boolean;
  rotate?: number;
  speed?: number;
  text?: string;
}

export default function TapeMarquee({
  reverse = false,
  rotate = -0.5,
  speed = 40,
  text = "Organic Elegance • Expertly Curated • Premium Journeys • Luxury Travel • ",
}: TapeMarqueeProps) {
  const marqueeText = text.repeat(10);

  return (
    <div 
      className="bg-brand-teal text-white py-4 md:py-6 overflow-hidden transition-colors duration-1000 border-y border-white/5"
      style={{ transform: `rotate(${rotate}deg) scale(1.02)` }}
    >
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: reverse ? [ "-50%", "0%" ] : [ "0%", "-50%" ] }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          }}
          className="font-serif italic tracking-[0.2em] text-lg md:text-xl text-white/90"
        >
          {marqueeText}
        </motion.div>
        <motion.div
          animate={{ x: reverse ? [ "-50%", "0%" ] : [ "0%", "-50%" ] }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          }}
          className="font-serif italic tracking-[0.2em] text-lg md:text-xl text-white/90"
        >
          {marqueeText}
        </motion.div>
      </div>
    </div>
  );
}
