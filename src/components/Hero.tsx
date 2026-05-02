"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import BookingWidget from "@/components/ui/BookingWidget";
import { ArrowRight, Plane, Phone, Star, Users, Globe2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useLenis } from "@studio-freight/react-lenis";

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
      // Entrance animations
      const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.5 } });
      
      tl.from(".hero-title-part", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        delay: 0.5
      })
      .from(".hero-description", {
        y: 30,
        opacity: 0,
      }, "-=1.2")
      .from(".hero-cta-group", {
        y: 30,
        opacity: 0,
      }, "-=1")
      .from(".hero-stat-card", {
        y: 40,
        opacity: 0,
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
      className="relative min-h-screen flex flex-col pt-24 overflow-hidden bg-white"
    >
      {/* Background Image - Cinematic treatment with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full hero-bg-image">
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

      <div className="container-custom relative z-20 flex-1 flex flex-col justify-center py-10 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Content Side */}
          <div className="lg:col-span-7 max-w-[720px]">
            <div className="space-y-8">
              <div className="hero-title-part">
                <p className="font-script text-3xl lg:text-5xl text-primary mb-2 drop-shadow-sm">
                  Travel The World, Create Memories
                </p>
              </div>
              
              <div className="hero-title-part">
                <h1 className="text-5xl lg:text-[100px] font-sans font-black text-gray-950 leading-[1] lg:leading-[0.95] mb-6 lg:mb-8 tracking-tighter">
                  Your Journey, <br />
                  Our <span className="text-primary italic font-serif font-light">Expertise!</span>
                </h1>
              </div>
              
              <div className="hero-description">
                <p className="text-lg lg:text-2xl text-gray-700 mb-10 lg:mb-12 leading-relaxed font-medium max-w-[620px] tracking-tight">
                  Jade Tours and Travels brings your travel dreams to life with tailor-made packages, seamless bookings, and unforgettable experiences across the globe.
                </p>
              </div>

              <div className="hero-cta-group flex flex-wrap items-center gap-5 lg:gap-8">
                <button 
                  onClick={() => handleScrollTo("packages")}
                  className="w-full sm:w-auto px-10 py-5 lg:px-14 lg:py-7 bg-primary text-white font-black rounded-full flex items-center justify-center gap-4 transition-all shadow-[0_25px_50px_rgba(56,142,60,0.4)] hover:bg-primary-dark hover:-translate-y-2 active:translate-y-0 group text-sm lg:text-lg uppercase tracking-widest relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10">Explore Packages</span>
                  <Plane className="w-5 h-5 lg:w-6 lg:h-6 group-hover:rotate-12 transition-transform relative z-10" />
                </button>
                <button 
                  onClick={() => handleScrollTo("contact")}
                  className="w-full sm:w-auto px-10 py-5 lg:px-14 lg:py-7 bg-white text-gray-900 border-2 border-gray-100 font-black rounded-full flex items-center justify-center gap-4 transition-all shadow-xl hover:border-primary hover:text-primary hover:-translate-y-2 active:translate-y-0 group text-sm lg:text-lg uppercase tracking-widest"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-4 transition-transform duration-500" />
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
              className="w-full max-w-[540px]"
            >
              <div className="shadow-[0_40px_100px_rgba(0,0,0,0.15)] rounded-[40px] border border-white/50 backdrop-blur-md">
                <BookingWidget />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Integrated Stats Bar - Enhanced Contrast */}
      <div className="relative z-30 bg-transparent py-10 lg:py-16 mt-auto">
        <div className="container-custom">
          <div className="flex flex-wrap justify-between lg:grid lg:grid-cols-4 gap-8 lg:gap-12 bg-white/95 backdrop-blur-2xl rounded-[40px] p-8 lg:p-14 shadow-[0_30px_80px_rgba(0,0,0,0.1)] border border-white">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="hero-stat-card flex items-center gap-6 lg:justify-center lg:border-r last:border-0 border-gray-200/60 px-2 lg:px-6 w-full sm:w-[45%] lg:w-auto group"
              >
                <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-2xl lg:rounded-[28px] bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-700 transform group-hover:rotate-6">
                  <stat.icon className="w-7 h-7 lg:w-10 lg:h-10" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-3xl lg:text-[42px] font-black text-gray-950 leading-none tracking-tighter">
                    {stat.value}
                  </span>
                  <span className="text-[11px] lg:text-[13px] font-black text-gray-500 uppercase tracking-[0.25em]">
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
