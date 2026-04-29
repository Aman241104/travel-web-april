"use client";
import Link from "next/link";
import { MessageCircle, Mail, ArrowRight, MapPin, Phone } from "lucide-react";
import { Instagram } from "./ui/InstagramIcon";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 overflow-hidden border-t border-onyx/5">
      <div className="container mx-auto px-6">
        
        {/* Final Brand Statement */}
        <div className="max-w-4xl mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl text-onyx leading-tight tracking-tight"
          >
            Crafting journeys that stay with you <br />
            <span className="italic font-light text-brand-teal/80">long after you return.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="group flex flex-col items-start leading-none mb-8">
              <span className="font-serif text-4xl tracking-tighter text-onyx transition-colors duration-500">JADE</span>
              <span className="font-sans text-[10px] font-black uppercase tracking-[0.5em] text-brand-teal mt-1 ml-0.5">Travels</span>
            </Link>
            <p className="text-onyx/50 max-w-sm font-sans text-base leading-relaxed mb-10">
              Crafting exceptional journeys since 2011, designed with precision and personalization for the discerning global traveler.
            </p>
            <div className="flex items-center gap-4">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: MessageCircle, href: "#", label: "WhatsApp" },
                { Icon: Mail, href: "mailto:hello@jadetravels.co.in", label: "Email" }
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href} 
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full border border-onyx/10 flex items-center justify-center text-onyx/40 hover:text-brand-teal hover:border-brand-teal transition-all duration-500 bg-transparent hover:bg-brand-teal/5"
                >
                  <social.Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-onyx/30 mb-8">Discovery</h4>
            <ul className="flex flex-col gap-5">
              {[
                { name: "Destinations", href: "#packages" },
                { name: "Services", href: "#services" },
                { name: "Expertise", href: "#process" },
                { name: "Journal", href: "#journal" },
                { name: "Our Story", href: "#about" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-onyx/70 hover:text-brand-teal transition-colors duration-300 font-serif text-lg">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-onyx/30 mb-8">Speak to Us</h4>
            <div className="space-y-8">
              <a href="tel:+919825438324" className="group block">
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-teal mb-2 group-hover:translate-x-1 transition-transform">Private Concierge</p>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-onyx/20" />
                  <p className="text-xl font-serif text-onyx">+91 98254 38324</p>
                </div>
              </a>
              <a href="mailto:hello@jadetravels.co.in" className="group block">
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-teal mb-2 group-hover:translate-x-1 transition-transform">General Inquiries</p>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-onyx/20" />
                  <p className="text-xl font-serif text-onyx">hello@jadetravels.co.in</p>
                </div>
              </a>
              <div className="flex items-center gap-3 opacity-50">
                <MapPin className="w-4 h-4" />
                <p className="text-sm font-sans">Ahmedabad, Gujarat, India</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-onyx/30 mb-8">Journal Access</h4>
            <p className="text-onyx/50 font-sans text-base mb-8 leading-relaxed">
              Get curated travel inspiration and exclusive updates delivered to your inbox.
            </p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Email Address"
                required
                className="w-full bg-cream/30 border border-onyx/10 py-5 px-6 rounded-2xl font-sans text-sm focus:outline-none focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/5 transition-all"
              />
              <button 
                type="submit"
                aria-label="Subscribe"
                className="absolute right-2 top-2 bottom-2 px-6 rounded-xl bg-onyx text-white flex items-center justify-center hover:bg-brand-teal transition-all duration-500 shadow-lg"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-onyx/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-onyx/30">
            © 2026 JADE TOURS & TRAVELS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link key={item} href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] text-onyx/30 hover:text-onyx transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
