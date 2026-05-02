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
import { useLenis } from "@studio-freight/react-lenis";

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
  const lenis = useLenis();
  
  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0B1310] text-white pt-32 lg:pt-60 pb-16 relative overflow-hidden border-t border-white/5">
      {/* Immersive Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(56,142,60,0.15),transparent_70%)]" />
        <div className="absolute -bottom-48 -left-48 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[200px]" />
        <div className="absolute top-1/2 -right-48 w-[800px] h-[800px] bg-accent-gold/5 rounded-full blur-[150px]" />
        
        {/* Subtle Map Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] grayscale invert bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-repeat" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Top Section: Hero CTA Card - Cinematic Refinement */}
        <div className="relative mb-32 lg:mb-48 group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent-gold/10 rounded-[48px] lg:rounded-[80px] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[48px] lg:rounded-[80px] p-12 lg:p-32 flex flex-col lg:flex-row items-center justify-between gap-16 overflow-hidden shadow-[0_60px_150px_rgba(0,0,0,0.4)]">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="max-w-4xl text-center lg:text-left relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-center lg:justify-start gap-4 text-primary font-black uppercase tracking-[0.5em] text-[11px] mb-10"
              >
                <Sparkles className="w-5 h-5" />
                Concierge Access
              </motion.div>
              <h2 className="text-4xl lg:text-[110px] font-sans font-black mb-10 leading-[1] lg:leading-[0.9] tracking-tighter drop-shadow-2xl">
                Ready to write your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent-gold italic font-serif font-light drop-shadow-2xl">next great story?</span>
              </h2>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-10 pt-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border-4 border-[#0B1310] overflow-hidden bg-gray-800 shadow-2xl relative">
                      <Image 
                        src={`https://i.pravatar.cc/100?img=${i+14}`} 
                        alt="Explorer" 
                        fill
                        className="object-cover" 
                      />
                    </div>
                  ))}
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border-4 border-[#0B1310] bg-primary flex items-center justify-center text-[11px] lg:text-[14px] font-black shadow-2xl relative z-10">50K+</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 lg:w-5 lg:h-5 fill-accent-gold text-accent-gold" />
                    ))}
                  </div>
                  <span className="text-white/50 text-[11px] lg:text-[13px] font-black uppercase tracking-[0.4em]">
                    Verified Journeys
                  </span>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 w-full lg:w-auto"
            >
              <Link 
                href="#contact" 
                className="flex items-center justify-center gap-6 px-16 lg:px-24 py-8 lg:py-12 bg-white text-[#0B1310] font-black rounded-[32px] lg:rounded-[48px] transition-all shadow-[0_40px_80px_rgba(0,0,0,0.3)] hover:bg-primary hover:text-white group/btn text-xl lg:text-3xl uppercase tracking-widest overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-700" />
                <span className="relative z-10">Start Your Journey</span>
                <ArrowRight className="w-8 h-8 lg:w-12 lg:h-12 relative z-10 group-hover/btn:translate-x-6 transition-transform duration-700" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Links Grid - Refined Spacing and Typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-20 lg:gap-32 mb-32 lg:mb-48">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-16">
            <div className="space-y-10">
              <Link href="/" className="flex items-center gap-5 group">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl lg:rounded-3xl flex items-center justify-center text-white font-serif font-bold text-4xl lg:text-5xl shadow-2xl transition-all group-hover:bg-primary group-hover:rotate-6">
                  J
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-black text-4xl lg:text-5xl tracking-tighter leading-none">JADE</span>
                  <span className="text-[11px] lg:text-[13px] font-black uppercase tracking-[0.5em] text-accent-gold leading-none mt-2">Tours & Travels</span>
                </div>
              </Link>
              <p className="text-white/50 text-xl leading-relaxed font-medium max-w-md">
                Orchestrating peerless travel narratives for the world&apos;s most discerning explorers. Every itinerary is a unique masterpiece of luxury.
              </p>
            </div>

            <div className="flex items-center gap-6">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-white hover:text-[#0B1310] hover:-translate-y-2 transition-all duration-700 group shadow-xl"
                >
                  <Icon className="w-6 h-6 lg:w-7 lg:h-7 group-hover:scale-125 transition-transform duration-500" />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-2 space-y-12">
            <h4 className="text-[11px] lg:text-[13px] font-black uppercase tracking-[0.5em] text-accent-gold">
              Navigation
            </h4>
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-white/40 hover:text-white transition-all text-lg flex items-center gap-0 group font-bold tracking-tight"
                  >
                    <span className="w-0 h-[2px] bg-primary group-hover:w-6 group-hover:mr-4 transition-all duration-700" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Curated Links */}
          <div className="lg:col-span-3 space-y-12">
            <h4 className="text-[11px] lg:text-[13px] font-black uppercase tracking-[0.5em] text-accent-gold">
              Experiences
            </h4>
            <ul className="space-y-6">
              {experiences.map((exp) => (
                <li key={exp.name}>
                  <Link 
                    href={exp.href} 
                    className="text-white/40 hover:text-white transition-all text-lg flex items-center gap-0 group font-bold tracking-tight"
                  >
                    <span className="w-0 h-[2px] bg-primary group-hover:w-6 group-hover:mr-4 transition-all duration-700" />
                    {exp.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-16">
            <h4 className="text-[11px] lg:text-[13px] font-black uppercase tracking-[0.5em] text-accent-gold">
              Direct Access
            </h4>
            <div className="space-y-12">
              <div className="flex items-start gap-8 group cursor-pointer">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-700 shadow-2xl">
                  <Phone className="w-7 h-7 lg:w-9 lg:h-9 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-2">
                  <span className="text-[11px] lg:text-[13px] font-black uppercase tracking-[0.4em] text-white/30 block">Concierge Desk</span>
                  <span className="text-white font-black text-2xl lg:text-3xl tracking-tighter group-hover:text-primary transition-colors">+91 98254 38324</span>
                </div>
              </div>

              <div className="flex items-start gap-8 group cursor-pointer">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-700 shadow-2xl">
                  <Mail className="w-7 h-7 lg:w-9 lg:h-9 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-2">
                  <span className="text-[11px] lg:text-[13px] font-black uppercase tracking-[0.4em] text-white/30 block">Inquiry Support</span>
                  <span className="text-white font-black text-2xl lg:text-3xl tracking-tighter group-hover:text-primary transition-colors truncate block max-w-[280px]">hello@jadetravels.com</span>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-2xl">
                  <MapPin className="w-7 h-7 lg:w-9 lg:h-9 text-primary" />
                </div>
                <div className="space-y-2">
                  <span className="text-[11px] lg:text-[13px] font-black uppercase tracking-[0.4em] text-white/30 block">The Studio</span>
                  <p className="text-white/50 text-base lg:text-lg leading-relaxed font-bold tracking-tight">
                    1st Floor, City Center, MG Road,<br />
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
            <p className="text-white/20 text-[11px] lg:text-[13px] font-black uppercase tracking-[0.5em]">
              © 2026 JADE TOURS & TRAVELS. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-12">
              <Link href="#" className="text-white/10 hover:text-white transition-colors text-[11px] lg:text-[13px] font-black uppercase tracking-[0.5em]">Privacy</Link>
              <Link href="#" className="text-white/10 hover:text-white transition-colors text-[11px] lg:text-[13px] font-black uppercase tracking-[0.5em]">Terms</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-12">
            <div className="hidden lg:flex items-center gap-6 bg-white/[0.03] px-12 py-7 rounded-[32px] border border-white/5 shadow-2xl">
              <Sparkles className="w-5 h-5 text-accent-gold" />
              <p className="text-white/40 text-[11px] lg:text-[13px] font-black uppercase tracking-[0.5em]">
                Crafted for journeys you&apos;ll <span className="text-white">never forget.</span>
              </p>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="w-20 h-20 lg:w-24 lg:h-24 rounded-[32px] lg:rounded-[40px] bg-white/[0.05] border border-white/15 flex items-center justify-center text-white/40 hover:bg-primary hover:text-white hover:border-primary transition-all duration-1000 shadow-3xl group"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-8 h-8 lg:w-10 lg:h-10 group-hover:-translate-y-3 transition-transform duration-700" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
