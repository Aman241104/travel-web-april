"use client";
import { motion } from "framer-motion";
import { Phone, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="relative bg-brand-dark rounded-[48px] overflow-hidden p-12 md:p-24 text-center text-white shadow-2xl group">
          
          {/* Immersive Background */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop" 
              alt="CTA Background"
              fill
              className="object-cover opacity-20 transition-transform duration-[20s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark/40" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="w-20 h-20 rounded-[28px] bg-primary/20 backdrop-blur-md border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
              <MessageCircle className="w-10 h-10 text-primary-muted" />
            </div>

            <h2 className="text-5xl lg:text-7xl font-serif mb-8 leading-[1.1] max-w-[800px]">
              Ready to Write Your <br />
              <span className="italic font-light text-primary-muted">Next Great Story?</span>
            </h2>
            
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join our elite circle of travelers and experience the world without compromise. Your private consultation is just a click away.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-md mx-auto">
              <Link 
                href="#contact" 
                className="w-full sm:w-auto px-12 py-6 bg-primary hover:bg-primary-light text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl hover:-translate-y-1 active:translate-y-0 group/btn"
              >
                Start Planning
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="tel:+919825438324" 
                className="w-full sm:w-auto px-12 py-6 bg-white/10 backdrop-blur-md text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all hover:bg-white/20 border border-white/20"
              >
                Call Concierge
                <Phone className="w-5 h-5" />
              </a>
            </div>

            <p className="mt-12 text-sm font-bold uppercase tracking-[0.3em] text-white/40">
              Best Price Guarantee • Expert Curation
            </p>
          </motion.div>

          {/* Decorative Glows */}
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
