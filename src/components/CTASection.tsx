"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="relative py-24 md:py-48 bg-onyx overflow-hidden">
      {/* Background Aesthetic - Lighter Overlay for Impact */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx via-onyx/80 to-onyx" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-teal/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Trust Signal */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-[1px] w-8 bg-brand-teal/30" />
            <span className="text-brand-teal font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">
              Trusted by 500+ Global Travelers
            </span>
            <div className="h-[1px] w-8 bg-brand-teal/30" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-[100px] text-white leading-[1] tracking-tight mb-10"
          >
            Start Planning Your <br />
            <span className="italic font-light text-brand-teal/80">Perfect Escape</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 font-sans text-xl md:text-2xl max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            Personalized luxury travel, crafted exclusively for you.
          </motion.p>

          {/* Primary Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-20"
          >
            <button className="group relative px-16 py-8 bg-brand-teal text-white font-sans text-sm font-bold uppercase tracking-[0.3em] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:bg-white hover:text-onyx hover:shadow-[0_0_50px_rgba(108,180,165,0.4)]">
              <span className="relative z-10 flex items-center gap-6">
                Start Your Journey
                <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
              </span>
            </button>
          </motion.div>

          {/* Secondary Actions */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-12 pt-12 border-t border-white/5"
          >
            <a href="tel:+919825438324" className="group flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-brand-teal group-hover:border-brand-teal transition-all duration-500">
                <Phone className="w-5 h-5" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 group-hover:text-white transition-colors">Direct Consultation</p>
              <p className="text-white font-serif text-xl">+91 98254 38324</p>
            </a>

            <a href="#" className="group flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-[#25D366] group-hover:border-[#25D366] transition-all duration-500">
                <MessageCircle className="w-5 h-5" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 group-hover:text-white transition-colors">WhatsApp Chat</p>
              <p className="text-white font-serif text-xl">Instant Inquiry</p>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Aesthetic Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
