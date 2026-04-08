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
  text = "Perfect Travel • Easy Planning • Global Reach • Custom Trips • Dream Big • ",
}: TapeMarqueeProps) {
  const marqueeText = Array(10).fill(text).join(" ");

  return (
    <div 
      className="bg-onyx text-white py-10 overflow-hidden shadow-2xl transition-colors duration-1000 border-y border-white/5"
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
          className="font-sans text-xs font-black uppercase tracking-[1em] px-4"
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
          className="font-sans text-xs font-black uppercase tracking-[1em] px-4 absolute top-10 left-0"
        >
          {marqueeText}
        </motion.div>
      </div>
    </div>
  );
}
