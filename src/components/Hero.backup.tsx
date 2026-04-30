"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { ChevronDown } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: 500, suffix: "+", label: "Luxury Destinations" },
  { value: 100, suffix: "%", label: "Tailored Itineraries" },
  { value: 24, suffix: "/7", label: "Expert Concierge" },
  { value: 15, suffix: "+", label: "Years Experience" },
];

const CountUp = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = gsap.to({ val: 0 }, {
      val: value,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: node,
        start: "top 95%",
      },
      onUpdate: function() {
        setCount(Math.floor(this.targets()[0].val));
      }
    });

    return () => controls.kill();
  }, [value]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ken Burns Effect: Perpetual slow zoom
      gsap.fromTo(".hero-bg-media", 
        { scale: 1 },
        { 
          scale: 1.1, 
          duration: 20, 
          ease: "linear", 
          repeat: -1, 
          yoyo: true 
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section ref={containerRef} className="relative h-screen min-h-[900px] w-full flex flex-col items-center justify-center overflow-hidden bg-[#0A1916]">
      {/* Cinematic Background Layering */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y: y1 }} className="hero-bg-media absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/24541-343454486.mp4" type="video/mp4" />
          </video>
        </motion.div>
        
        {/* Layered Gradient Overlay for Cinematic Depth */}
        <div 
          className="absolute inset-0 z-10" 
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(10, 25, 22, 0.2) 0%,
              rgba(10, 25, 22, 0.5) 40%,
              rgba(10, 25, 22, 0.9) 100%
            )`
          }}
        />
        
        {/* Subtle Radial Highlight behind content */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: "radial-gradient(circle at center, rgba(111, 195, 178, 0.08), transparent 65%)"
          }}
        />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-20 px-6 max-w-[1400px] mx-auto text-center"
      >
        {/* Elite Badge with Glass Effect */}
        <motion.div variants={itemVariants} className="mb-12">
          <span className="inline-block px-8 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl text-[#6FC3B2] font-sans text-[11px] font-bold uppercase tracking-[0.6em]">
            The Art of Effortless Exploration
          </span>
        </motion.div>
        
        {/* Master-Scale Typography */}
        <motion.h1 
          variants={itemVariants}
          className="font-serif text-7xl md:text-[110px] lg:text-[135px] leading-[0.85] tracking-tightest mb-12 text-white"
        >
          <span className="font-semibold block mb-4">Exquisite Journeys,</span>
          <span className="italic font-light text-[#6FC3B2] tracking-normal block transform translate-x-4 md:translate-x-8">
            Tailored to You
          </span>
        </motion.h1>

        {/* Cinematic Subtext */}
        <motion.div variants={itemVariants} className="max-w-3xl mx-auto mb-20">
          <p className="font-sans text-[#D6E2DF]/80 text-xl md:text-2xl leading-relaxed tracking-wide">
            Curated itineraries and seamless global access. <br className="hidden md:block" />
            Experience the world with unparalleled elegance and absolute discretion.
          </p>
        </motion.div>

        {/* High-Tension CTA System */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-10">
          <MagneticButton className="group relative w-full sm:w-auto px-14 py-7 bg-[#6FC3B2] text-[#0F2F2A] font-bold text-xs uppercase tracking-[0.4em] rounded-full transition-all duration-700 hover:scale-[1.06] shadow-[0_20px_60px_rgba(111,195,178,0.35)]">
            <span className="relative z-10">Start Your Experience</span>
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
          </MagneticButton>
          
          <button className="group relative flex items-center gap-6 px-14 py-7 bg-white/[0.04] backdrop-blur-2xl border border-white/[0.15] rounded-full font-sans text-xs font-bold uppercase tracking-[0.4em] text-white transition-all duration-700 hover:bg-white/[0.08] hover:border-white/[0.25]">
            <span>Explore Journal</span>
            <div className="w-10 h-[1px] bg-[#6FC3B2]/40 group-hover:bg-[#6FC3B2] transition-all duration-700 group-hover:w-14" />
          </button>
        </motion.div>
      </motion.div>

      {/* Integrated Cinematic Stats Bar */}
      <div className="absolute bottom-0 left-0 w-full z-20 pt-40 pb-20">
        <div className="container max-w-[1300px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 py-12 border-t border-white/[0.08]">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4 + i * 0.15, duration: 1 }}
                className={`flex flex-col items-center lg:items-start px-12 ${
                  i !== stats.length - 1 ? "lg:border-r lg:border-white/[0.05]" : ""
                }`}
              >
                <span className="text-white font-serif text-5xl md:text-7xl tracking-tighter mb-3 font-medium">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-[#D6E2DF]/40 font-sans text-[11px] font-bold uppercase tracking-[0.3em]">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 2 }}
        className="absolute bottom-10 left-10 z-30 hidden xl:flex flex-col items-start gap-8"
      >
        <div className="flex flex-col items-center gap-4">
          <motion.div 
            animate={{ height: [0, 60, 0], y: [0, 0, 60] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] bg-[#6FC3B2]"
          />
          <span className="text-[#6FC3B2] font-sans text-[10px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180">Discover</span>
        </div>
      </motion.div>
    </section>
  );
}
