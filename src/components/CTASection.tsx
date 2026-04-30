"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="relative py-24 md:py-48 bg-[#0F2F2A] overflow-hidden scroll-mt-24">
      {/* Cinematic Background Layering */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 30, repeat: Infinity, yoyo: true, ease: "linear" }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
        />
        
        {/* Layered Gradient Overlay for Depth & Text Clarity */}
        <div 
          className="absolute inset-0 z-10" 
          style={{
            background: `linear-gradient(
              180deg,
              rgba(15, 47, 42, 0.4) 0%,
              rgba(15, 47, 42, 0.7) 40%,
              rgba(15, 47, 42, 0.95) 100%
            )`
          }}
        />

        {/* Cinematic Blur at Edges */}
        <div className="absolute inset-0 z-10 backdrop-blur-[2px] opacity-40" style={{ maskImage: 'radial-gradient(circle, black 60%, transparent 100%)' }} />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Trust Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <div className="h-[1px] w-12 bg-[#6FC3B2]/20" />
            <span className="text-[#6FC3B2] font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.5em]">
              Architects of Discovery since 2011
            </span>
            <div className="h-[1px] w-12 bg-[#6FC3B2]/20" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl md:text-[100px] lg:text-[120px] text-white leading-[0.95] tracking-tightest mb-12"
          >
            Begin Your <br />
            <span className="italic font-light text-[#6FC3B2]">Private Journey</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-[#D6E2DF]/60 font-sans text-xl md:text-2xl max-w-2xl mx-auto mb-20 leading-relaxed"
          >
            Connect with our private designers to begin crafting an itinerary that reflects your unique curiosities.
          </motion.p>

          {/* Primary Action Suite */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <button className="group relative px-16 py-8 bg-[#6FC3B2] text-[#0F2F2A] font-sans text-sm font-bold uppercase tracking-[0.4em] rounded-full overflow-hidden transition-all duration-700 hover:scale-105 hover:shadow-[0_20px_60px_rgba(111,195,178,0.3)]">
                <span className="relative z-10 flex items-center gap-6">
                  Design Your Escape
                  <ArrowRight className="w-5 h-5 transition-transform duration-700 group-hover:translate-x-3" />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
              </button>
            </motion.div>

            <motion.button 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="px-12 py-8 border border-white/10 rounded-full text-white font-sans text-xs font-bold uppercase tracking-[0.3em] hover:bg-white/5 transition-all duration-500"
            >
              Speak to an Expert
            </motion.button>
          </div>

          {/* Elite Contact Access Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto pt-16 border-t border-white/[0.08]"
          >
            <a href="tel:+919825438324" className="group p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] hover:border-white/[0.1] transition-all duration-500 flex items-center gap-6 text-left">
              <div className="w-14 h-14 rounded-2xl bg-[#6FC3B2]/10 flex items-center justify-center text-[#6FC3B2] group-hover:scale-110 transition-transform duration-500">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#6FC3B2] mb-1">Direct Line</p>
                <p className="text-white font-serif text-xl">+91 98254 38324</p>
              </div>
            </a>

            <a href="#" className="group p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] hover:border-white/[0.1] transition-all duration-500 flex items-center gap-6 text-left">
              <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform duration-500">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#25D366] mb-1">WhatsApp Concierge</p>
                <p className="text-white font-serif text-xl">Instant Access</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
