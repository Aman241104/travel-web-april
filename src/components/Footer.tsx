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
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "WhatsApp", href: "#" },
  { name: "Vimeo", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#1A2421] pt-32 pb-12 overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Decorative Brand Text Backdrop */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-0">
        <span className="font-serif text-[25vw] leading-none text-white/[0.03] select-none tracking-tighter">
          JADE
        </span>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        
        {/* Main CTA Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-32">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#F5F2ED] leading-[0.9] tracking-tighter"
            >
              Let’s design your <br />
              <span className="italic font-light text-[#C5A267]">next great story.</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-start gap-8"
          >
            <p className="text-[#F5F2ED]/40 max-w-xs font-sans text-sm leading-relaxed tracking-wide">
              Bespoke curation for those who seek the extraordinary. Every detail is an intentional masterpiece.
            </p>
            <Link 
              href="#contact"
              className="group flex items-center gap-4 text-[#C5A267] font-bold text-xs uppercase tracking-[0.4em] hover:text-[#F5F2ED] transition-colors"
            >
              Inquire Now
              <div className="w-12 h-12 rounded-full border border-[#C5A267]/30 flex items-center justify-center group-hover:bg-[#C5A267] group-hover:border-[#C5A267] transition-all duration-500">
                <ArrowUpRight className="w-4 h-4 text-[#C5A267] group-hover:text-[#1A2421]" />
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-32 pt-20 border-t border-[#F5F2ED]/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex flex-col items-start mb-8">
              <span className="font-serif text-3xl tracking-tighter text-[#F5F2ED]">JADE</span>
              <span className="font-sans text-[9px] font-black uppercase tracking-[0.6em] text-[#C5A267] mt-1">Travels</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#F5F2ED]/40 hover:text-[#F5F2ED] transition-colors cursor-default">
                <MapPin className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest">Ahmedabad, India</span>
              </div>
              <a href="tel:+919825438324" className="flex items-center gap-3 text-[#F5F2ED]/40 hover:text-[#C5A267] transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest">+91 98254 38324</span>
              </a>
              <a href="mailto:hello@jadetravels.co.in" className="flex items-center gap-3 text-[#F5F2ED]/40 hover:text-[#C5A267] transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest">hello@jadetravels.co.in</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-[#F5F2ED]/20 mb-10">Discovery</h4>
            <ul className="flex flex-col gap-6">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[#F5F2ED]/60 hover:text-[#C5A267] transition-colors duration-300 font-serif text-xl tracking-tight">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Newsletter */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-[#F5F2ED]/20 mb-10">Connect</h4>
              <div className="flex flex-wrap gap-x-12 gap-y-6">
                {socialLinks.map((social) => (
                  <Link 
                    key={social.name} 
                    href={social.href}
                    className="group flex items-center gap-2 text-[#F5F2ED]/60 hover:text-[#F5F2ED] transition-colors"
                  >
                    <span className="text-xs uppercase tracking-[0.3em]">{social.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-20">
              <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-[#F5F2ED]/20 mb-6">Journal Access</h4>
              <form className="relative max-w-md">
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-[#F5F2ED]/10 py-4 px-0 font-sans text-sm text-[#F5F2ED] placeholder:text-[#F5F2ED]/20 focus:outline-none focus:border-[#C5A267] transition-all"
                />
                <button 
                  type="submit"
                  className="absolute right-0 bottom-4 text-[#C5A267] hover:text-[#F5F2ED] transition-colors"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-[#F5F2ED]/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#F5F2ED]/20">
            © 2026 JADE TOURS & TRAVELS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link key={item} href="#" className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#F5F2ED]/20 hover:text-[#F5F2ED] transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
