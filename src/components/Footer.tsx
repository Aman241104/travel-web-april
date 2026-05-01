"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Send, MessageSquare, ArrowRight, Star, Sparkles } from "lucide-react";
import { Instagram } from "@/components/ui/InstagramIcon";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-32 pb-12 relative overflow-hidden">
      {/* Sophisticated Depth Layering */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -bottom-48 -left-48 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Top Engagement Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24 pb-24 border-b border-white/5">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 tracking-tight">
              Ready to write your <span className="italic font-light text-accent-gold">next story?</span>
            </h3>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-accent-gold text-accent-gold" />
                ))}
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                4.9/5 from 50,000+ Verified Explorers
              </span>
            </div>
          </div>
          
          <Link 
            href="#contact" 
            className="flex items-center gap-4 px-12 py-6 bg-white text-brand-dark font-bold rounded-2xl transition-all shadow-2xl hover:bg-primary hover:text-white group"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Brand Identity - Emphasized */}
          <div className="lg:col-span-4 space-y-10">
            <Link href="/" className="flex items-center gap-5 group">
              <div className="w-16 h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-white font-serif font-bold text-4xl shadow-2xl transition-all group-hover:bg-primary group-hover:rotate-12">
                J
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-3xl tracking-tighter">JADE</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-accent-gold leading-none">Tours & Travels</span>
              </div>
            </Link>
            <p className="text-white/60 text-lg leading-relaxed max-w-sm font-medium">
              We orchestrate extraordinary realities for those who demand the impossible. Every journey is a hand-crafted masterpiece.
            </p>
            <div className="flex items-center gap-5">
              {[Instagram, Globe, MessageSquare, Send].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-brand-dark hover:scale-110 hover:rotate-6 transition-all shadow-2xl"
                >
                  <Icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation - Strategic Labels */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-gold">
              Navigation
            </h4>
            <ul className="space-y-5">
              {["Start Here", "How We Work", "The Collection", "Testimonials", "Private Concierge"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-white/50 hover:text-white transition-all text-base flex items-center gap-3 group font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all scale-0 group-hover:scale-100" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations - Curated Labels */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-gold">
              Curated Experiences
            </h4>
            <ul className="space-y-5">
              {["Europe Grandeur", "Tropical Sanctuaries", "Private Expeditions", "Cultural Masterpieces", "Last Minute Escapes"].map((service) => (
                <li key={service}>
                  <Link href="#" className="text-white/50 hover:text-white transition-all text-base flex items-center gap-3 group font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all scale-0 group-hover:scale-100" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details - Actionable */}
          <div className="lg:col-span-3 space-y-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-gold">
              Direct Access
            </h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all shadow-xl">
                  <Phone className="w-5 h-5 text-accent-gold group-hover:text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Global Concierge</span>
                  <span className="text-white font-bold text-lg">+91 98254 38324</span>
                </div>
              </li>
              <li className="flex items-start gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all shadow-xl">
                  <Mail className="w-5 h-5 text-accent-gold group-hover:text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Send an Inquiry</span>
                  <span className="text-white font-bold text-lg">hello@jadetravels.com</span>
                </div>
              </li>
              <li className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent-gold" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Our Studio</span>
                  <span className="text-white/60 text-sm leading-relaxed font-medium">
                    1st Floor, City Center, MG Road,<br />
                    Ahmedabad, Gujarat, India
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar - Emotional Close */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">
              © 2026 JADE Tours & Travels. All Rights Reserved.
            </p>
            <div className="flex items-center gap-8">
              <Link href="#" className="text-white/20 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.3em]">Privacy</Link>
              <Link href="#" className="text-white/20 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.3em]">Terms</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/5">
            <Sparkles className="w-3.5 h-3.5 text-accent-gold" />
            <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">
              Crafted for journeys you&apos;ll <span className="text-white">never forget.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
