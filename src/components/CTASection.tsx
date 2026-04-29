"use client";
import { useState } from "react";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CTASection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setStatus("success");
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-48 bg-onyx relative overflow-hidden">
      {/* Subtle Background Detail */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/5 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          <div>
            <span className="text-brand-teal font-sans text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Inquire Now
            </span>
            <h2 className="font-serif text-5xl md:text-7xl leading-tight text-white mb-8">
              Your Bespoke <br />
              <span className="text-brand-teal italic font-light">Journey Awaits</span>
            </h2>
            <p className="text-white/60 font-sans text-lg leading-relaxed max-w-md mb-16">
              Connect with our expert travel designers to begin crafting your next unparalleled experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-teal mb-4">Concierge Services</p>
                <div className="space-y-4">
                  <p className="text-white/40 text-xs uppercase tracking-widest">Jigar Shah</p>
                  <p className="text-xl font-serif text-white">+91 98254 38324</p>
                  <p className="text-sm font-sans text-white/60">jigar@jadetravels.co.in</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-teal mb-4">Tours & Packages</p>
                <div className="space-y-4">
                  <p className="text-white/40 text-xs uppercase tracking-widest">Dhara Patel</p>
                  <p className="text-xl font-serif text-white">+91 99044 55127</p>
                  <p className="text-sm font-sans text-white/60">dhara@jadetravels.co.in</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-10 md:p-16 rounded-2xl border border-white/10 shadow-2xl">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <CheckCircle2 className="w-16 h-16 text-brand-teal mb-8" />
                  <h3 className="font-serif text-3xl text-white mb-4">Inquiry Received</h3>
                  <p className="text-white/60 max-w-xs mx-auto">Our designers will contact you shortly to begin the consultation process.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">Full Name</label>
                    <input 
                      type="text" required
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:border-brand-teal outline-none transition-colors text-white font-sans text-lg placeholder:text-white/10" 
                      placeholder="Your Name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">Email Address</label>
                    <input 
                      type="email" required
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:border-brand-teal outline-none transition-colors text-white font-sans text-lg placeholder:text-white/10" 
                      placeholder="Your Email" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">Travel Vision</label>
                    <input 
                      type="text"
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:border-brand-teal outline-none transition-colors text-white font-sans text-lg placeholder:text-white/10" 
                      placeholder="Where do you wish to go?" 
                    />
                  </div>
                  <button 
                    disabled={status === "submitting"}
                    className="w-full mt-8 py-5 bg-brand-teal text-white font-bold uppercase tracking-[0.2em] text-xs rounded-full flex items-center justify-center gap-4 hover:bg-white hover:text-onyx transition-all duration-500 disabled:opacity-50"
                  >
                    {status === "submitting" ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Send Inquiry <ArrowRight className="w-4 h-4" /></>}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
