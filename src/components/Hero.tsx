"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import BookingWidget from "@/components/ui/BookingWidget";
import { ArrowRight, Plane, Phone, Star, Users, Globe2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Entrance animations
      const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.5 } });
      
      tl.fromTo(".hero-title-part", 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          delay: 0.5
        }
      )
      .fromTo(".hero-description", 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
        }, "-=1.2")
      .fromTo(".hero-cta-group", 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
        }, "-=1")
      .fromTo(".hero-stat-card", 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
        }, "-=0.8");

      // Background image parallax
      gsap.to(".hero-bg-image", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
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
      className="relative min-h-[80vh] lg:min-h-screen flex flex-col pt-16 lg:pt-24 overflow-hidden bg-white"
    >
      {/* Background Image - Cinematic treatment with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full hero-bg-image will-change-transform">
          <Image 
            src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=2000&auto=format&fit=crop" 
            alt="Tropical Travel"
            fill
            className="object-cover object-center opacity-90 scale-105"
            priority
          />
        </div>
        {/* Cinematic gradient for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent w-full lg:w-[80%] z-10" />
      </div>

      <div className="container-custom relative z-20 flex-1 flex flex-col justify-center py-6 lg:py-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content Side */}
          <div className="lg:col-span-7 max-w-[620px]">
            <div className="space-y-6 lg:space-y-8">
              <div className="hero-title-part">
                <p className="font-script text-xl lg:text-3xl text-primary mb-1 drop-shadow-sm">
                  Travel The World, Create Memories
                </p>
              </div>
              
              <div className="hero-title-part">
                <h1 className="text-[28px] md:text-[40px] lg:text-[56px] xl:text-[68px] font-sans font-black text-gray-950 leading-[1.1] lg:leading-[1] mb-4 lg:mb-6 tracking-tighter">
                  Your Journey, <br />
                  Our <span className="text-primary italic font-serif font-light">Expertise!</span>
                </h1>
              </div>
              
              <div className="hero-description">
                <p className="text-sm lg:text-lg text-gray-700 mb-8 lg:mb-10 leading-relaxed font-medium max-w-[500px] tracking-tight">
                  Jade Tours and Travels brings your travel dreams to life with tailor-made packages, seamless bookings, and unforgettable experiences across the globe.
                </p>
              </div>

              <div className="hero-cta-group flex flex-wrap items-center gap-4 lg:gap-6">
                <button 
                  onClick={() => handleScrollTo("packages")}
                  className="w-full sm:w-auto px-6 py-3 lg:px-10 lg:py-4 bg-primary text-white font-black rounded-full flex items-center justify-center gap-3 transition-all shadow-[0_20px_40px_rgba(56,142,60,0.3)] hover:bg-primary-dark hover:-translate-y-1 active:translate-y-0 group text-[10px] lg:text-sm uppercase tracking-widest relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10">Explore Packages</span>
                  <Plane className="w-4 h-4 group-hover:rotate-12 transition-transform relative z-10" />
                </button>
                <button 
                  onClick={() => handleScrollTo("contact")}
                  className="w-full sm:w-auto px-6 py-3 lg:px-10 lg:py-4 bg-white text-gray-900 border-2 border-gray-100 font-black rounded-full flex items-center justify-center gap-3 transition-all shadow-lg hover:border-primary hover:text-primary hover:-translate-y-1 active:translate-y-0 group text-[10px] lg:text-sm uppercase tracking-widest"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Widget Side */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[420px]"
            >
              <div className="shadow-[0_40px_100px_rgba(0,0,0,0.1)] rounded-[24px] lg:rounded-[32px] border border-white/50 backdrop-blur-md">
                <BookingWidget />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Integrated Stats Bar */}
      <div className="relative z-30 bg-transparent py-6 lg:py-10 mt-auto">
        <div className="container-custom">
          <div className="flex flex-wrap justify-between lg:grid lg:grid-cols-4 gap-6 lg:gap-8 bg-white/95 backdrop-blur-2xl rounded-[24px] lg:rounded-[32px] p-5 lg:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-white">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="hero-stat-card flex items-center gap-4 lg:gap-5 lg:justify-center lg:border-r last:border-0 border-gray-200/60 px-2 lg:px-4 w-full sm:w-[45%] lg:w-auto group"
              >
                <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-700 transform group-hover:rotate-6">
                  <stat.icon className="w-5 h-5 lg:w-7 lg:h-7" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl lg:text-[26px] font-black text-gray-950 leading-none tracking-tighter">
                    {stat.value}
                  </span>
                  <span className="text-[9px] lg:text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mt-1">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
