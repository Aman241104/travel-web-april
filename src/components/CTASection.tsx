"use client";
import { motion } from "framer-motion";
import { Phone, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="py-32 bg-white">
      <div className="container-custom">
        <div className="relative bg-brand-dark rounded-[64px] overflow-hidden p-16 md:p-32 text-center text-white shadow-[0_50px_100px_rgba(10,31,17,0.3)] group">
          
          {/* Immersive Background */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop" 
              alt="CTA Background"
              fill
              className="object-cover opacity-15 transition-transform duration-[30s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="w-24 h-24 rounded-[32px] bg-accent-gold/20 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-12 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
              <MessageCircle className="w-12 h-12 text-accent-gold" />
            </div>

            <h2 className="text-6xl lg:text-[88px] font-serif mb-10 leading-[0.95] max-w-[900px] tracking-tighter">
              Ready to Write Your <br />
              <span className="italic font-light text-accent-gold">Next Great Story?</span>
            </h2>
            
            <p className="text-2xl text-white/60 mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
              Join our elite circle of global travelers and experience the world without compromise. Your private consultation is just a click away.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full max-w-2xl mx-auto">
              <Link 
                href="#contact" 
                className="w-full sm:w-auto px-16 py-8 bg-primary hover:bg-primary-light text-white font-bold rounded-2xl flex items-center justify-center gap-4 transition-all shadow-[0_20px_40px_rgba(46,125,50,0.4)] hover:-translate-y-2 active:translate-y-0 group/btn text-xl"
              >
                Start Your Journey
                <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-3 transition-transform" />
              </Link>
              <a 
                href="tel:+919825438324" 
                className="w-full sm:w-auto px-16 py-8 bg-white/5 backdrop-blur-xl text-white font-bold rounded-2xl flex items-center justify-center gap-4 transition-all hover:bg-white/10 border border-white/10 text-xl"
              >
                Call Concierge
                <Phone className="w-6 h-6" />
              </a>
            </div>

            <div className="mt-20 flex items-center gap-10 opacity-40">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Expert Curation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Global Access</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Zero Friction</span>
              </div>
            </div>
          </motion.div>

          {/* Decorative Glows */}
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-accent-gold/10 rounded-full blur-[120px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
