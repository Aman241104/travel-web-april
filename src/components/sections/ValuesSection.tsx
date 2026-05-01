"use client";
import { motion } from "framer-motion";
import { Heart, Shield, Zap } from "lucide-react";
import Image from "next/image";

const benefits = [
  { title: "Transparent Pricing", desc: "No hidden costs, clear and upfront rates for every package.", icon: Shield },
  { title: "Expert Curated", desc: "Every itinerary is hand-crafted by our travel specialists.", icon: Heart },
  { title: "24/7 Support", desc: "We are with you at every step, anywhere in the world.", icon: Zap },
];

export default function ValuesSection() {
  return (
    <section id="about" className="py-32 bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-6 block">
                The Jade Difference
              </span>
              <h2 className="text-5xl lg:text-6xl font-serif text-brand-dark leading-[1.1] mb-10">
                Why people love <br />
                <span className="italic font-light text-primary">travelling with us.</span>
              </h2>

              <div className="space-y-10">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <benefit.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-brand-dark mb-2">{benefit.title}</h3>
                      <p className="text-gray-500 leading-relaxed max-w-[360px]">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-14 px-10 py-5 bg-brand-dark hover:bg-primary text-white font-bold rounded-2xl transition-all shadow-xl hover:-translate-y-1 active:translate-y-0">
                Our Full Story
              </button>
            </motion.div>
          </div>

          {/* Image Side - Collage Style */}
          <div className="w-full lg:w-1/2 relative h-[600px]">
            <motion.div 
              initial={{ opacity: 0, rotate: -6, y: 20 }}
              whileInView={{ opacity: 1, rotate: -6, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-10 w-64 aspect-[4/5] bg-white p-3 pb-16 shadow-2xl rounded-sm z-10"
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1200&auto=format&fit=crop" 
                  alt="Tour" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <p className="absolute bottom-4 left-0 w-full text-center text-brand-dark font-serif italic text-lg">Santorini, Greece</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, rotate: 6, x: 50 }}
              whileInView={{ opacity: 1, rotate: 6, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-10 right-0 w-80 aspect-square bg-white p-4 pb-20 shadow-2xl rounded-sm z-20"
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop" 
                  alt="Tour" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <p className="absolute bottom-6 left-0 w-full text-center text-brand-dark font-serif italic text-xl">The Maldives</p>
            </motion.div>

            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
