"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Send, MessageSquare } from "lucide-react";
import { Instagram } from "@/components/ui/InstagramIcon";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2 -z-0" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          {/* Company Info */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg transition-transform group-hover:rotate-6">
                J
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl tracking-tight">JADE</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary leading-none">Tours & Travels</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Crafting extraordinary journeys for the discerning traveler. We believe travel is not just about the destination, but the stories you collect along the way.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Globe, MessageSquare, Send].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all group"
                >
                  <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </Link>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-8 flex items-center gap-2">
              The Experience
            </h4>
            <ul className="space-y-4">
              {["Home", "Our Story", "The Collection", "Methodology", "Private Concierge"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-white/50 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-primary transition-all group-hover:w-4" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-8 flex items-center gap-2">
              Collections
            </h4>
            <ul className="space-y-4">
              {["Europe Grandeur", "Tropical Sanctuaries", "Private Expeditions", "Cultural Masterpieces", "Last Minute Escapes"].map((service) => (
                <li key={service}>
                  <Link href="#" className="text-white/50 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-primary transition-all group-hover:w-4" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <h4 className="font-serif text-xl font-bold mb-8">Get In Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Call Us</span>
                  <span className="text-white/80 text-sm">+91 98254 38324</span>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Email</span>
                  <span className="text-white/80 text-sm">hello@jadetravels.com</span>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Our Studio</span>
                  <span className="text-white/80 text-sm leading-relaxed">
                    1st Floor, City Center, MG Road,<br />
                    Ahmedabad, Gujarat, India
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">
            © 2026 JADE Tours & Travels. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-white/30 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.2em]">Privacy Policy</Link>
            <Link href="#" className="text-white/30 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.2em]">Terms of Service</Link>
          </div>
          <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-1">
            Crafted for <span className="text-primary italic">The Extraordinary</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
