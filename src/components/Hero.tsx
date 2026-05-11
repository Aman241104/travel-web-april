"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import BookingWidget from "@/components/ui/BookingWidget";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowRight, Plane, Star, Users, Globe2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "@studio-freight/react-lenis";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { label: "Years of Experience", value: "10+", icon: Star },
  { label: "Happy Clients", value: "5K+", icon: Users },
  { label: "Countries", value: "20+", icon: Globe2 },
  { label: "Customer Support", value: "24/7", icon: ShieldCheck },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations - Orchestrated for a premium feel
      const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.8 } });
      
      tl.set(".hero-bg-image", { scale: 1.15 })
        .to(".hero-bg-image", {
          scale: 1,
          duration: 3,
          ease: "power2.out"
        })
        .fromTo(".hero-title-line", 
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            delay: -2.2
          }
        )
        .fromTo(".hero-script", 
          { opacity: 0, scale: 0.9, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2 }, "-=1.8")
        .fromTo(".hero-description", 
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5
          }, "-=1.6")
        .fromTo(".hero-cta-group", 
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
          }, "-=1.4")
        .fromTo(".hero-stat-card", 
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
          }, "-=1.2");

      // Background image parallax & content fade on scroll
      gsap.to(".hero-bg-image", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(".hero-content-inner", {
        y: -100,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "20% top",
          end: "80% top",
          scrub: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element && lenis) {
      lenis.scrollTo(element, { offset: -80, duration: 1.5 });
    }
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-[85vh] lg:min-h-[85vh] flex flex-col pt-20 lg:pt-24 overflow-hidden bg-white"
    >
      {/* Background Image - Cinematic treatment with Multi-layered Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="relative w-full h-full hero-bg-image will-change-transform">
          <Image 
            src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=2400&auto=format&fit=crop" 
            alt="Luxury Travel Experience"
            fill
            className="object-cover object-center opacity-70 lg:opacity-80 brightness-[0.9]"
            priority
          />
        </div>
        {/* Artistic gradients for high-end depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/60 lg:from-white/40 lg:to-white/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent lg:via-white/50 w-full lg:w-[60%] z-10" />
      </div>

      <div className="container-custom relative z-20 flex-1 flex flex-col justify-center py-4 lg:py-6 hero-content-inner">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          
          {/* Left Content Side */}
          <div className="max-w-[720px]">
            <div className="space-y-2 lg:space-y-6">
              <div className="hero-script overflow-hidden">
                <p className="font-script text-lg md:text-2xl lg:text-[36px] text-primary mb-0.5 lg:mb-2 leading-tight drop-shadow-[0_2px_15px_rgba(255,255,255,1)]">
                  Luxury Without Compromise
                </p>
              </div>
              
              <div className="overflow-hidden">
                <h1 className="text-[28px] md:text-[54px] lg:text-[68px] xl:text-[76px] font-sans font-black text-gray-950 leading-[0.95] mb-3 lg:mb-4 tracking-tightest uppercase">
                  <span className="block hero-title-line">CRAFTING YOUR</span>
                  <span className="block hero-title-line">ULTIMATE <span className="text-primary italic font-serif lowercase normal-case ml-1 lg:ml-2 drop-shadow-[0_2px_15px_rgba(255,255,255,0.8)]">escape</span></span>
                </h1>
              </div>
              
              <div className="hero-description overflow-hidden">
                <p className="text-[13px] md:text-base lg:text-[18px] text-gray-500 mb-5 lg:mb-8 leading-relaxed font-medium max-w-[620px] tracking-tight">
                  Jade Tours and Travels curates bespoke journeys that transcend the ordinary. From hidden gems to iconic horizons, we redefine how you see the world.
                </p>
              </div>

              <div className="hero-cta-group flex flex-wrap items-center gap-3 lg:gap-5">
                <MagneticButton 
                  onClick={() => handleScrollTo("destinations")}
                  className="flex-1 sm:flex-none px-6 py-3 lg:px-10 lg:py-4 bg-[#388E3C] text-white font-black rounded-full flex items-center justify-center gap-2 lg:gap-3 transition-all shadow-[0_15px_35px_rgba(56,142,60,0.25)] hover:bg-[#2E7D32] group text-[9px] lg:text-[11px] uppercase tracking-[0.2em] lg:tracking-[0.25em] relative overflow-hidden"
                >
                  <span className="relative z-10">Start Your Journey</span>
                  <Plane className="w-3 h-3 lg:w-4 lg:h-4 group-hover:rotate-12 transition-transform relative z-10" />
                </MagneticButton>
                
                <button 
                  onClick={() => handleScrollTo("contact")}
                  className="flex-1 sm:flex-none px-6 py-3 lg:px-10 lg:py-4 bg-white text-gray-950 font-black rounded-full flex items-center justify-center gap-2 lg:gap-3 transition-all hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] border border-gray-100 group text-[9px] lg:text-[11px] uppercase tracking-[0.2em] lg:tracking-[0.25em]"
                >
                  Get in Touch
                  <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Widget Side */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 10, y: 50 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0, y: 0 }}
              transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[640px] perspective-1000"
            >
              <div className="relative group">
                {/* Decorative glow behind the widget */}
                <div className="absolute -inset-4 bg-primary/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative bg-white/95 backdrop-blur-xl shadow-[0_40px_120px_rgba(0,0,0,0.1)] rounded-[32px] lg:rounded-[40px] border border-white p-1 lg:p-2">
                  <BookingWidget />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Integrated Stats Bar - Redesigned for Elite Look */}
      <div className="relative z-30 bg-transparent py-4 lg:py-10 mt-auto">
        <div className="container-custom">
          <div className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white to-white/90 backdrop-blur-3xl rounded-[24px] lg:rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.08)] border border-white/80" />
            
            <div className="relative flex flex-wrap justify-between lg:grid lg:grid-cols-4 gap-y-4 lg:gap-0 p-4 lg:p-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="hero-stat-card flex items-center gap-3 lg:gap-6 lg:justify-center lg:border-r last:border-0 border-gray-100 px-2 w-[48%] lg:w-auto group/stat"
                >
                  <div className="w-9 h-9 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0 shadow-sm group-hover/stat:bg-primary group-hover/stat:text-white transition-all duration-1000 transform group-hover/stat:scale-110 group-hover/stat:rotate-12">
                    <stat.icon className="w-4 h-4 lg:w-7 lg:h-7" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg lg:text-[28px] font-black text-gray-950 leading-none tracking-tightest">
                      {stat.value}
                    </span>
                    <span className="text-[7px] lg:text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] lg:tracking-[0.3em] mt-1 group-hover/stat:text-primary transition-colors duration-500">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
