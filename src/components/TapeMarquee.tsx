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
  rotate = -1,
  speed = 25,
  text = "Organic Elegance • Expertly Curated • Premium Journeys • Luxury Travel • ",
}: TapeMarqueeProps) {
  const marqueeText = Array(10).fill(text).join(" ");

  return (
    <div 
      className="bg-brand-teal text-white py-6 md:py-8 overflow-hidden shadow-2xl transition-colors duration-1000 border-y border-white/10"
      style={{ transform: `rotate(${rotate}deg) scale(1.05)` }}
    >
      <div className="flex whitespace-nowrap">
        <motion.div
          initial={{ x: reverse ? "-50%" : "0%" }}
          animate={{ x: reverse ? "0%" : "-50%" }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          }}
          className="font-serif italic tracking-[0.2em] text-2xl lg:text-3xl text-brand-sand/80 px-8"
        >
          {marqueeText}
        </motion.div>
        <motion.div
          initial={{ x: reverse ? "-50%" : "0%" }}
          animate={{ x: reverse ? "0%" : "-50%" }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          }}
          className="font-serif italic tracking-[0.2em] text-2xl lg:text-3xl text-brand-sand/80 px-8 absolute top-[50%] left-0 -translate-y-[50%]"
        >
          {marqueeText}
        </motion.div>
      </div>
    </div>
  );
}
