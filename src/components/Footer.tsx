"use client";
import Link from "next/link";
import { 
  Mail, Phone, MapPin, 
  ArrowRight, Star, Sparkles, ChevronUp 
} from "lucide-react";
import { Instagram } from "@/components/ui/InstagramIcon";
import { Facebook, Twitter, Youtube } from "@/components/ui/SocialIcons";
import { motion } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "Start Here", href: "#home" },
  { name: "How We Work", href: "#why-us" },
  { name: "The Collection", href: "#packages" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Private Concierge", href: "#contact" },
];

const experiences = [
  { name: "Europe Grandeur", href: "#packages" },
  { name: "Tropical Sanctuaries", href: "#packages" },
  { name: "Private Expeditions", href: "#packages" },
  { name: "Cultural Masterpieces", href: "#packages" },
  { name: "Last Minute Escapes", href: "#packages" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B1310] text-white pt-24 lg:pt-32 pb-12 relative overflow-hidden border-t border-white/5">
      {/* Immersive Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(56,142,60,0.1),transparent_70%)]" />
        <div className="absolute -bottom-48 -left-48 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 -right-48 w-[600px] h-[600px] bg-accent-gold/5 rounded-full blur-[120px]" />
        
        {/* Subtle Map Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02] grayscale invert bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-repeat" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Top Section: Hero CTA Card */}
        <div className="relative mb-24 lg:mb-32 group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent-gold/5 rounded-[40px] lg:rounded-[64px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[40px] lg:rounded-[64px] p-10 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.3)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="max-w-2xl text-center lg:text-left relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-center lg:justify-start gap-3 text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8"
              >
                <Sparkles className="w-4 h-4" />
                Concierge Access
              </motion.div>
              <h2 className="text-4xl lg:text-[84px] font-sans font-black mb-8 leading-[0.95] tracking-tighter">
                Ready to write your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent-gold italic font-serif font-light drop-shadow-2xl">next great story?</span>
              </h2>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0B1310] overflow-hidden bg-gray-800 shadow-xl relative">
                      <Image 
                        src={`https://i.pravatar.cc/100?img=${i+14}`} 
                        alt="Explorer" 
                        fill
                        className="object-cover" 
                      />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-[#0B1310] bg-primary flex items-center justify-center text-[10px] font-black shadow-xl relative z-10">50K+</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-accent-gold text-accent-gold" />
                    ))}
                  </div>
                  <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">
                    Verified Journeys
                  </span>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative z-10 w-full lg:w-auto"
            >
              <Link 
                href="#contact" 
                className="flex items-center justify-center gap-4 px-12 lg:px-16 py-7 lg:py-9 bg-white text-[#0B1310] font-sans font-black rounded-3xl transition-all shadow-[0_30px_60px_rgba(0,0,0,0.2)] hover:bg-primary hover:text-white group/btn text-lg uppercase tracking-widest overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10">Start Your Journey</span>
                <ArrowRight className="w-6 h-6 relative z-10 group-hover/btn:translate-x-3 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-24 lg:mb-32">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-8">
              <Link href="/" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-white font-serif font-bold text-3xl shadow-2xl transition-all group-hover:bg-primary group-hover:rotate-6">
                  J
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-black text-3xl tracking-tighter leading-none">JADE</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-gold leading-none mt-1.5">Tours & Travels</span>
                </div>
              </Link>
              <p className="text-white/40 text-lg leading-relaxed font-medium max-w-sm">
                Orchestrating peerless travel narratives for the world&apos;s most discerning explorers. Every itinerary is a unique masterpiece of luxury.
              </p>
            </div>

            <div className="flex items-center gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/30 hover:bg-white hover:text-[#0B1310] hover:-translate-y-1.5 transition-all duration-500 group"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-2 space-y-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-gold">
              Navigation
            </h4>
            <ul className="space-y-5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-white/30 hover:text-white transition-all text-base flex items-center gap-0 group font-medium"
                  >
                    <span className="w-0 h-[1.5px] bg-primary group-hover:w-5 group-hover:mr-4 transition-all duration-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Curated Links */}
          <div className="lg:col-span-3 space-y-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-gold">
              Experiences
            </h4>
            <ul className="space-y-5">
              {experiences.map((exp) => (
                <li key={exp.name}>
                  <Link 
                    href={exp.href} 
                    className="text-white/30 hover:text-white transition-all text-base flex items-center gap-0 group font-medium"
                  >
                    <span className="w-0 h-[1.5px] bg-primary group-hover:w-5 group-hover:mr-4 transition-all duration-500" />
                    {exp.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-12">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-gold">
              Direct Access
            </h4>
            <div className="space-y-10">
              <div className="flex items-start gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-500 shadow-xl">
                  <Phone className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/20 block mb-2">Concierge Desk</span>
                  <span className="text-white font-bold text-xl tracking-tight group-hover:text-primary transition-colors">+91 98254 38324</span>
                </div>
              </div>

              <div className="flex items-start gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-500 shadow-xl">
                  <Mail className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/20 block mb-2">Inquiry Support</span>
                  <span className="text-white font-bold text-xl tracking-tight group-hover:text-primary transition-colors truncate block max-w-[200px]">hello@jadetravels.com</span>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/20 block mb-2">The Studio</span>
                  <p className="text-white/40 text-sm leading-relaxed font-medium">
                    1st Floor, City Center, MG Road,<br />
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">
              © 2026 JADE TOURS & TRAVELS. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-10">
              <Link href="#" className="text-white/10 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.4em]">Privacy</Link>
              <Link href="#" className="text-white/10 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.4em]">Terms</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-4 bg-white/[0.03] px-10 py-5 rounded-3xl border border-white/5">
              <Sparkles className="w-4 h-4 text-accent-gold" />
              <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">
                Crafted for journeys you&apos;ll <span className="text-white">never forget.</span>
              </p>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="w-16 h-16 rounded-[24px] bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/30 hover:bg-primary hover:text-white hover:border-primary transition-all duration-700 shadow-2xl group"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-7 h-7 group-hover:-translate-y-1.5 transition-transform duration-500" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
