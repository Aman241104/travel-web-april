"use client";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Plane, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  "Best Price Guarantee",
  "Expert Travel Consultants",
  "Customized Itineraries",
  "24/7 Customer Support",
  "Safe & Secure Travel"
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0B1310]">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop" 
          alt="Mountain Background"
          fill
          className="object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1310] via-[#0B1310]/90 to-[#0B1310]/40" />
      </div>

      {/* Decorative Glowing Orbs for Depth */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-gold/10 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-script text-2xl lg:text-3xl text-primary mb-4 block drop-shadow-[0_2px_10px_rgba(56,142,60,0.4)]">
              Why Choose Us
            </span>
            <h2 className="text-4xl lg:text-6xl font-sans font-black text-white leading-[1.1] mb-6 tracking-tighter drop-shadow-xl">
              Travel Made Easy, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Memories That Last</span>
            </h2>
            
            <div className="w-16 h-px bg-gradient-to-r from-white/40 to-transparent mb-8 flex items-center relative">
               <Plane className="w-4 h-4 text-white/80 absolute -left-2" />
            </div>

            <div className="space-y-4 mb-10">
              {features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-[0_0_15px_rgba(56,142,60,0.3)] group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Link 
              href="#about" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all shadow-lg hover:-translate-y-1 group"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Image Grid */}
          <div className="relative grid grid-cols-2 gap-4 h-[500px] lg:h-[600px]">
            {/* Main Vertical Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-full rounded-3xl overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <Image 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop" 
                alt="Tropical Beach"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none z-10" />
              
              {/* Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-2xl flex items-center gap-3.5 z-20 border border-white/50 group-hover:-translate-y-1 transition-transform duration-500">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center border border-primary/10">
                   <Star className="w-6 h-6 text-primary fill-primary drop-shadow-sm" />
                </div>
                <div>
                  <div className="text-[11px] font-black text-gray-900 leading-none mb-1.5 uppercase tracking-wide">Best Travel</div>
                  <div className="text-[11px] font-black text-primary leading-none uppercase tracking-wide">Agency</div>
                  <div className="flex gap-0.5 mt-2">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400 drop-shadow-sm" />)}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stacked Images */}
            <div className="grid grid-rows-2 gap-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative rounded-3xl overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop" 
                  alt="Mountains"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none z-10" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative rounded-3xl overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop" 
                  alt="Valley"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none z-10" />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
