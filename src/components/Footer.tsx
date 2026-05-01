"use client";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Destinations", href: "#packages" },
  { name: "Bespoke Services", href: "#services" },
  { name: "Our Process", href: "#process" },
  { name: "The Journal", href: "#journal" },
  { name: "About Jade", href: "#about" },
];

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/jade.travels/" },
  { name: "LinkedIn", href: "#" },
  { name: "WhatsApp", href: "https://wa.me/919825438324?text=Hello%20Jade%20Travels%2C%20I%20would%20like%20to%20inquire%20about%20your%20bespoke%20travel%20services." },
  { name: "Vimeo", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0B1310] pt-12 pb-8 md:pt-20 md:pb-10 overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02] bg-noise" />

      {/* Decorative Brand Text Backdrop */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-0">
        <span className="font-serif text-[25vw] leading-none text-[#F2EFE9]/[0.03] select-none tracking-tighter">
          JADE
        </span>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        
        {/* Main CTA Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16 md:mb-24">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-7xl lg:text-8xl text-[#F2EFE9] leading-[0.9] tracking-tighter"
            >
              Let’s design your <br />
              <span className="italic font-light text-[#C1A67B]">next great story.</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-start gap-8"
          >
            <p className="text-[#F2EFE9]/40 max-w-xs font-sans text-sm leading-relaxed tracking-wide">
              Bespoke curation for those who seek the extraordinary. Every detail is an intentional masterpiece.
            </p>
            <Link 
              href="#contact"
              className="group flex items-center gap-4 text-[#C1A67B] font-bold text-xs uppercase tracking-[0.4em] hover:text-[#F2EFE9] transition-colors"
            >
              Inquire Now
              <div className="w-12 h-12 rounded-full border border-[#C1A67B]/30 flex items-center justify-center group-hover:bg-[#C1A67B] group-hover:border-[#C1A67B] transition-all duration-500">
                <ArrowUpRight className="w-4 h-4 text-[#C1A67B] group-hover:text-[#0B1310]" />
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 md:mb-32 pt-16 md:pt-20 border-t border-[#F5F2ED]/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex flex-col items-start mb-8">
              <span className="font-serif text-3xl tracking-tighter text-[#F2EFE9]">JADE</span>
              <span className="font-sans text-[9px] font-black uppercase tracking-[0.6em] text-[#C1A67B] mt-1">Travels</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#F2EFE9]/40 hover:text-[#F2EFE9] transition-colors cursor-default">
                <MapPin className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest">Ahmedabad, India</span>
              </div>
              <a href="tel:+919825438324" className="flex items-center gap-3 text-[#F2EFE9]/40 hover:text-[#C1A67B] transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest">+91 98254 38324</span>
              </a>
              <a href="mailto:hello@jadetravels.co.in" className="flex items-center gap-3 text-[#F2EFE9]/40 hover:text-[#C1A67B] transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest">hello@jadetravels.co.in</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-[#F2EFE9]/20 mb-10">Discovery</h4>
            <ul className="flex flex-col gap-6">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[#F2EFE9]/60 hover:text-[#C1A67B] transition-colors duration-300 font-serif text-xl tracking-tight">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Newsletter */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-[#F2EFE9]/20 mb-10">Connect</h4>
              <div className="flex flex-wrap gap-x-12 gap-y-6">
                {socialLinks.map((social) => (
                  <Link 
                    key={social.name} 
                    href={social.href}
                    className="group flex items-center gap-2 text-[#F2EFE9]/60 hover:text-[#F2EFE9] transition-colors"
                  >
                    <span className="text-xs uppercase tracking-[0.3em]">{social.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-20">
              <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-[#F2EFE9]/20 mb-6">Journal Access</h4>
              <form className="relative max-w-md">
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-[#F5F2ED]/10 py-4 px-0 font-sans text-sm text-[#F2EFE9] placeholder:text-[#F2EFE9]/20 focus:outline-none focus:border-[#C1A67B] transition-all"
                />
                <button 
                  type="submit"
                  className="absolute right-0 bottom-4 text-[#C1A67B] hover:text-[#F2EFE9] transition-colors"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-[#F5F2ED]/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#F2EFE9]/20">
            © 2026 JADE TOURS & TRAVELS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link key={item} href="#" className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#F2EFE9]/20 hover:text-[#F2EFE9] transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
