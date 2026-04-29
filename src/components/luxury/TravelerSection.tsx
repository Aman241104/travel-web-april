"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Globe, UserCheck } from "lucide-react";

const pillars = [
  { icon: Globe, text: "Unparalleled Global Network" },
  { icon: UserCheck, text: "Bespoke Personalized Detail" },
  { icon: ShieldCheck, text: "Absolute Discretion & Privacy" },
];

export default function TravelerSection() {
  return (
    <section id="about" className="py-24 md:py-48 bg-cream/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Column */}
          <div className="w-full lg:w-5/12 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-3xl"
            >
              <Image 
                src="/assets/owner-image.png" 
                alt="Jade Travels Founders" 
                fill 
                className="object-cover scale-105"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-onyx/5 mix-blend-multiply" />
              
              {/* Integrated Legacy Tag */}
              <div className="absolute bottom-10 left-10 right-10 p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 text-white">
                <p className="font-serif text-2xl mb-1 italic">Established 2011</p>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-60">Over a decade of excellence in Ahmedabad</p>
              </div>
            </motion.div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-7/12 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <span className="text-brand-teal font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-8 block">
                The Hands Behind the Journey
              </span>
              <h2 className="font-serif text-4xl md:text-7xl text-onyx leading-[1.1] tracking-tight mb-10">
                The Art of <br />
                <span className="italic font-light text-brand-teal/80">Effortless Exploration</span>
              </h2>
              
              <p className="text-onyx/70 font-sans text-xl leading-relaxed mb-12">
                Since 2011, we have curated journeys defined by precision and personalization, serving discerning travelers who value discretion above all else.
              </p>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                {pillars.map((pillar, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                      <pillar.icon className="w-5 h-5" />
                    </div>
                    <span className="font-sans text-sm font-bold uppercase tracking-widest text-onyx/60">{pillar.text}</span>
                  </div>
                ))}
              </div>

              {/* Founders */}
              <div className="flex flex-col sm:flex-row gap-12 sm:gap-20 mb-16 py-8 border-y border-onyx/5">
                <div>
                  <h4 className="font-serif text-2xl text-onyx mb-1">Jigar Shah</h4>
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-teal font-bold">Private Client Advisory</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-onyx mb-1">Dhara Patel</h4>
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-teal font-bold">Curated Journey Design</p>
                </div>
              </div>

              {/* Action */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <h5 className="font-sans text-[10px] uppercase tracking-[0.4em] text-onyx/30 mb-8 font-bold">Speak With Our Experts</h5>
                <button className="group px-12 py-5 bg-onyx text-white font-sans text-xs font-bold uppercase tracking-[0.3em] rounded-full hover:bg-brand-teal transition-all duration-500 flex items-center gap-4 shadow-2xl">
                  Contact Our Team
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
