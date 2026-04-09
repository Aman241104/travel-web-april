"use client";
import { useState } from "react";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CTASection() {
  const [formData, setFormData] = useState({ name: "", email: "", vision: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setStatus("success");
    setFormData({ name: "", email: "", vision: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="py-32 md:py-56 bg-white dark:bg-onyx relative transition-colors duration-1000">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          
          <div>
            <span className="text-brand-teal font-sans text-xs font-semibold uppercase tracking-widest mb-4 block">
              Contact Us
            </span>
            <h2 className="font-serif text-5xl md:text-[80px] leading-[1.1] tracking-tight mb-8 text-onyx dark:text-white">
              Start Your <br />
              <span className="text-brand-teal italic font-light">Journey.</span>
            </h2>
            <p className="text-onyx/50 dark:text-white/40 font-sans text-xl leading-relaxed max-w-md font-medium mb-16">
              We provide the best travel services. Contact us today to start planning your trip.
            </p>

            <div className="space-y-10">
              {[
                { label: "Jigar Shah (Proprietor)", value: "+91 98254 38324", sub: "jigar@jadetravels.co.in" },
                { label: "Dhara Patel (Tours & Packages)", value: "+91 99044 55127", sub: "dhara@jadetravels.co.in" },
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-2">{item.label}</p>
                  <p className="text-2xl font-sans font-medium text-onyx dark:text-white group-hover:text-brand-teal transition-colors">{item.value}</p>
                  <p className="text-sm font-sans text-onyx/60 dark:text-white/40 mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-onyx-light p-12 md:p-20 rounded-[4px] shadow-2xl border border-onyx/5 dark:border-white/5">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <CheckCircle2 className="w-16 h-16 text-brand-teal mb-8" />
                  <h3 className="font-serif text-4xl text-onyx dark:text-white mb-4">Request Sent</h3>
                  <p className="text-onyx/50 dark:text-white/40 max-w-xs font-medium">We will contact you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="space-y-4">
                    <label className="text-xs font-semibold uppercase tracking-widest text-brand-teal">Full Name</label>
                    <input 
                      type="text" required
                      className="w-full bg-transparent border-b border-onyx/10 dark:border-white/10 py-6 focus:border-accent-blue outline-none transition-colors text-onyx dark:text-white font-medium text-2xl placeholder:text-onyx/10 dark:placeholder:text-white/10" 
                      placeholder="Name" 
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-semibold uppercase tracking-widest text-brand-teal">Email Address</label>
                    <input 
                      type="email" required
                      className="w-full bg-transparent border-b border-onyx/10 dark:border-white/10 py-6 focus:border-accent-blue outline-none transition-colors text-onyx dark:text-white font-medium text-2xl placeholder:text-onyx/10 dark:placeholder:text-white/10" 
                      placeholder="Email" 
                    />
                  </div>
                  <button 
                    disabled={status === "submitting"}
                    className="w-full py-6 bg-brand-teal text-white font-bold uppercase tracking-[0.2em] text-xs rounded-full flex items-center justify-center gap-6 hover:bg-brand-navy transition-all duration-500 disabled:opacity-50 shadow-xl"
                  >
                    {status === "submitting" ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Send Request <ArrowRight className="w-5 h-5" /></>}
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
