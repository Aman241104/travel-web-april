"use client";
import { motion } from "framer-motion";
import { Phone, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CTASection() {
  return (
    <section id="contact" className="py-32 lg:py-48 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="relative bg-[#0B1310] rounded-[64px] overflow-hidden p-16 md:p-32 text-center text-white shadow-[0_50px_100px_rgba(0,0,0,0.4)] group border border-white/5">
          
          {/* Immersive Background */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop" 
              alt="CTA Background"
              fill
              className="object-cover opacity-20 mix-blend-overlay transition-transform duration-[30s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1310] via-[#0B1310]/80 to-transparent" />
          </div>

          {/* Atmospheric Internal Glows */}
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-accent-gold/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Rim Light Border */}
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[64px] z-20 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="w-24 h-24 rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-12 group-hover:scale-110 group-hover:rotate-6 transition-all duration-1000 group-hover:border-primary/30">
              <MessageCircle className="w-10 h-10 text-primary" />
            </div>

            <h2 className="text-6xl lg:text-[92px] font-sans font-black mb-12 leading-[0.95] max-w-[1000px] tracking-tighter drop-shadow-2xl">
              Ready to Write Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent-gold italic font-serif font-light">Next Great Story?</span>
            </h2>
            
            <p className="text-2xl text-white/60 mb-20 max-w-2xl mx-auto leading-relaxed font-medium tracking-tight">
              Join our elite circle of global travelers and experience the world without compromise. Your private consultation is just a click away.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10 w-full max-w-2xl mx-auto">
              <Link 
                href="#contact" 
                className="w-full sm:w-auto px-16 py-8 bg-primary hover:bg-primary-light text-white font-sans font-black rounded-2xl flex items-center justify-center gap-4 transition-all shadow-[0_20px_50px_rgba(46,125,50,0.4)] hover:-translate-y-2 active:translate-y-0 group/btn text-xl uppercase tracking-widest"
              >
                Start Your Journey
                <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-3 transition-transform" />
              </Link>
              <a 
                href="tel:+919825438324" 
                className="w-full sm:w-auto px-16 py-8 bg-white/5 backdrop-blur-xl text-white font-sans font-black rounded-2xl flex items-center justify-center gap-4 transition-all hover:bg-white/10 border border-white/10 text-xl uppercase tracking-widest hover:border-white/20"
              >
                Call Concierge
                <Phone className="w-6 h-6 text-accent-gold" />
              </a>
            </div>

            <div className="mt-24 flex flex-wrap justify-center items-center gap-12 opacity-30">
              {[
                "Expert Curation",
                "Global Access",
                "Zero Friction"
              ].map((label, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-[11px] font-black uppercase tracking-[0.4em]">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
