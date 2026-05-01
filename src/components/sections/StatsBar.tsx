"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

export default function ValueProposition() {
  return (
    <section className="bg-[#C1A67B] text-brand-sand pt-32 pb-24 md:py-32 relative overflow-hidden">
      {/* Decorative leaf motifs */}
      <div className="absolute top-0 right-0 opacity-20 pointer-events-none transform translate-x-1/3 -translate-y-1/3">
        <svg width="400" height="400" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 C20,20 80,20 100,50 C80,80 20,80 0,50 Z" />
          <path d="M50,0 C80,20 80,80 50,100 C20,80 20,20 50,0 Z" opacity="0.5" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 opacity-20 pointer-events-none transform -translate-x-1/4 translate-y-1/4">
        <svg width="300" height="300" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,90 C30,40 90,40 90,10 C50,30 20,80 10,90 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16 md:gap-8">
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-yellow font-sans text-sm font-semibold uppercase tracking-widest mb-4 block">
              Our Values
            </span>
            <h2 className="font-serif text-4xl md:text-7xl mb-10 leading-[1.1] text-[#F2EFE9]">
              Why people love <br />
              <span className="italic font-light">travelling with us.</span>
            </h2>

            <ul className="space-y-6 mb-12 font-sans text-lg md:text-xl text-brand-sand/90 font-medium">
              <li className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-[#C1A67B]" strokeWidth={3} />
                </div>
                Transparent and clear pricing
              </li>
              <li className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-[#C1A67B]" strokeWidth={3} />
                </div>
                High quality and safe touring
              </li>
              <li className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-[#C1A67B]" strokeWidth={3} />
                </div>
                No hidden costs or extra charges
              </li>
            </ul>

            <button className="bg-brand-sand text-brand-navy px-10 py-5 rounded-full font-semibold hover:bg-[#0B1310] hover:scale-105 transition-all shadow-xl">
              View Packages
            </button>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 relative min-h-[450px] md:min-h-[500px] mt-20 md:mt-0">
          <motion.div 
            initial={{ opacity: 0, rotate: -10, x: -50 }}
            whileInView={{ opacity: 1, rotate: -6, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-10 md:top-10 left-0 md:left-10 w-40 md:w-64 aspect-[4/5] bg-bg-light p-3 pb-12 shadow-2xl rounded-sm z-10"
          >
            <div className="relative w-full h-full rounded-sm overflow-hidden">
              <Image src="/customer/image_copy_2.png" alt="Tour" fill className="object-cover" />
            </div>
            <p className="absolute bottom-4 left-0 w-full text-center text-brand-navy font-serif italic text-base md:text-lg">Bali, Indonesia</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, rotate: 10, x: 50 }}
            whileInView={{ opacity: 1, rotate: 6, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-32 md:top-32 right-0 md:right-10 w-48 md:w-72 aspect-square bg-brand-yellow p-4 pb-14 shadow-2xl rounded-sm z-20"
          >
            <div className="relative w-full h-full rounded-sm overflow-hidden">
              <Image src="/customer/image_copy_9.png" alt="Tour" fill className="object-cover" />
            </div>
            <p className="absolute bottom-4 left-0 w-full text-center text-brand-navy font-serif italic text-lg md:text-xl">The Maldives</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
