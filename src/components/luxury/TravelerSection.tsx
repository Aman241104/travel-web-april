"use client";
import { motion } from "framer-motion";
import { Plane } from "lucide-react";
import Image from "next/image";

export default function TravelerSection() {
  return (
    <section id="about-more" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          
          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-script text-primary text-2xl mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-dark leading-tight mb-8">
                Your Trusted Partner <br />
                for Global Adventures
              </h2>
              <div className="flex items-center gap-2 mb-10 text-primary">
                <div className="w-12 h-[1px] bg-primary/30" />
                <Plane className="w-4 h-4" />
              </div>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                With over 10 years of experience in the travel industry, Jade Tours and Travels has been at the forefront of providing exceptional travel experiences. We believe that every journey should be as unique as the traveler.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="text-3xl font-bold text-primary mb-2">15+</h4>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Global Partners</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-primary mb-2">100%</h4>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Client Satisfaction</p>
                </div>
              </div>

              <button className="px-10 py-5 bg-brand-dark text-white font-bold rounded-full transition-all hover:bg-primary hover:scale-105 shadow-xl shadow-brand-dark/10">
                Discover Our Mission
              </button>
            </motion.div>
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop" 
                alt="Traveler" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-primary/10" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
