"use client";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
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
            <h3 className="font-serif text-3xl mb-8 text-jade-darkest font-medium">Request Consultation</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-ultra text-gold font-sans font-bold">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-jade/20 py-3 focus:border-gold outline-none transition-colors text-jade-darkest font-medium" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-ultra text-gold font-sans font-bold">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-jade/20 py-3 focus:border-gold outline-none transition-colors text-jade-darkest font-medium" placeholder="Your email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-ultra text-gold font-sans font-bold">Vision / Inquiry</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-jade/20 py-3 focus:border-gold outline-none transition-colors resize-none text-jade-darkest font-medium" placeholder="Describe your travel vision..." />
              </div>
              <button className="w-full py-5 bg-jade text-jade-white font-bold uppercase tracking-ultra text-xs rounded-full flex items-center justify-center gap-3 hover:bg-jade-darkest transition-all duration-300 shadow-xl shadow-jade/20 mt-4">
                Send Inquiry <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/p6.png')] opacity-10 pointer-events-none invert" />
    </section>
  );
}
