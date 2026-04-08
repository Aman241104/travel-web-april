"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", vision: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setStatus("submitting");
    
    // Mock submission delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setStatus("success");
    setFormData({ name: "", email: "", vision: "" });
    
    // Reset status after 5 seconds
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="py-32 bg-[#0A0C0B] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Text Content */}
          <div>
            <span className="text-gold uppercase tracking-ultra text-xs font-sans mb-4 block">
              Begin the Dialogue
            </span>
            <h2 className="font-serif text-5xl md:text-7xl mb-10 leading-tight">
              Let Your Next Story <br />
              <span className="text-gold italic font-light">Unfold.</span>
            </h2>
            <p className="text-white/60 font-sans leading-relaxed mb-12 max-w-md">
              Whether you have a vision for your next retreat or need professional 
              passport assistance, our concierge team is ready to respond.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-jade-black transition-all duration-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-white">Direct Line</h4>
                  <p className="text-white/50 font-sans">+91 98254 38324 (Jigar Shah)</p>
                  <p className="text-white/50 font-sans">+91 99044 55127 (Dhara Patel)</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-jade-black transition-all duration-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-white">Inquiries</h4>
                  <p className="text-white/50 font-sans text-sm">Jigar@jadetravels.co.in</p>
                  <p className="text-white/50 font-sans text-sm">Dhara@jadetravels.co.in</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-jade-black transition-all duration-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-white">Base of Operations</h4>
                  <p className="text-white/50 font-sans">Ahmedabad, Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-jade-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-gold/5 border border-jade-white">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <CheckCircle2 className="w-16 h-16 text-jade mb-6" />
                  <h3 className="font-serif text-3xl text-jade-darkest mb-4">Message Sent</h3>
                  <p className="text-jade-darkest/60 max-w-xs mx-auto">
                    Thank you for your inquiry. A member of our concierge team will reach out to you shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.div key="form" exit={{ opacity: 0, y: -20 }}>
                  <h3 className="font-serif text-3xl mb-8 text-jade-darkest font-medium">Request Consultation</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-ultra text-gold font-sans font-bold">Name</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-transparent border-b border-jade/20 py-3 focus:border-gold outline-none transition-colors text-jade-darkest font-medium" 
                          placeholder="Your name" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-ultra text-gold font-sans font-bold">Email</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-transparent border-b border-jade/20 py-3 focus:border-gold outline-none transition-colors text-jade-darkest font-medium" 
                          placeholder="Your email" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-ultra text-gold font-sans font-bold">Vision / Inquiry</label>
                      <textarea 
                        rows={4} 
                        value={formData.vision}
                        onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                        className="w-full bg-transparent border-b border-jade/20 py-3 focus:border-gold outline-none transition-colors resize-none text-jade-darkest font-medium" 
                        placeholder="Describe your travel vision..." 
                      />
                    </div>
                    <button 
                      disabled={status === "submitting"}
                      className="w-full py-5 bg-jade text-jade-white font-bold uppercase tracking-ultra text-xs rounded-full flex items-center justify-center gap-3 hover:bg-jade-darkest transition-all duration-300 shadow-xl shadow-jade/20 mt-4 disabled:opacity-70"
                    >
                      {status === "submitting" ? (
                        <>Processing <Loader2 className="w-4 h-4 animate-spin" /></>
                      ) : (
                        <>Send Inquiry <Send className="w-4 h-4" /></>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/p6.png')] opacity-10 pointer-events-none invert" />
    </section>
  );
}
