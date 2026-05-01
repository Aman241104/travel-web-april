"use client";
import { motion } from "framer-motion";
import BookingWidget from "@/components/ui/BookingWidget";
import { ArrowRight, Plane, Phone, Star, Users, Globe2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { label: "Years of Experience", value: "10+", icon: Star },
  { label: "Happy Clients", value: "5K+", icon: Users },
  { label: "Countries", value: "20+", icon: Globe2 },
  { label: "Customer Support", value: "24/7", icon: ShieldCheck },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col pt-24 overflow-hidden bg-white">
      {/* Background Image - Bright and Vibrant */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=2000&auto=format&fit=crop" 
          alt="Tropical Travel"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
        {/* White fade at the bottom for smooth transition to stats bar */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white z-10" />
        {/* Left-to-right white fade for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent w-full lg:w-[70%] z-10" />
      </div>

      <div className="container-custom relative z-20 flex-1 flex flex-col justify-center py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Side */}
          <div className="lg:col-span-7 max-w-[650px]">
            <div>
              <p className="font-script text-3xl lg:text-4xl text-primary mb-2 drop-shadow-sm">
                Travel The World, Create Memories
              </p>
              
              <h1 className="text-7xl lg:text-[92px] font-sans font-black text-gray-900 leading-[1.05] mb-8 tracking-tighter">
                Your Journey, <br />
                Our <span className="text-primary">Expertise!</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-700 mb-12 leading-relaxed font-medium max-w-[580px]">
                Jade Tours and Travels brings your travel dreams to life with tailor-made packages, seamless bookings, and unforgettable experiences across the globe.
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-16">
                <Link 
                  href="#packages" 
                  className="px-10 py-5 bg-primary text-white font-bold rounded-full flex items-center gap-3 transition-all shadow-xl hover:bg-primary-dark hover:-translate-y-1 active:translate-y-0 group"
                >
                  Explore Packages
                  <Plane className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Link>
                <Link 
                  href="#contact" 
                  className="px-10 py-5 bg-white text-gray-800 border-2 border-gray-100 font-bold rounded-full flex items-center gap-3 transition-all shadow-md hover:border-primary hover:text-primary hover:-translate-y-1 active:translate-y-0 group"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Widget Side */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-[500px]"
            >
              <div className="shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[32px]">
                <BookingWidget />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Integrated Stats Bar */}
      <div className="relative z-30 bg-transparent py-10 lg:py-12 mt-auto">
        <div className="container-custom">
          <div className="flex flex-wrap justify-between lg:grid lg:grid-cols-4 gap-6 lg:gap-8 bg-white/60 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (i * 0.1), duration: 0.6 }}
                className="flex items-center gap-4 lg:justify-center lg:border-r last:border-0 border-gray-200/50 px-2 lg:px-4 w-[45%] lg:w-auto"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl lg:text-[28px] font-black text-gray-900 leading-none mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[10px] lg:text-xs font-bold text-gray-500 capitalize">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
