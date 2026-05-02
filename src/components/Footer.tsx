"use client";
import { useEffect, useRef } from "react";
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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
  const containerRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(".footer-reveal", 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);
  
  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer ref={containerRef} className="bg-[#0B1310] text-white pt-16 lg:pt-24 pb-10 relative overflow-hidden border-t border-white/5">
      {/* Immersive Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(56,142,60,0.15),transparent_70%)]" />
        <div className="absolute -bottom-48 -left-48 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[200px]" />
        <div className="absolute top-1/2 -right-48 w-[800px] h-[800px] bg-accent-gold/5 rounded-full blur-[150px]" />
        
        {/* Subtle Map Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] grayscale invert bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-repeat" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Top Section: Hero CTA Card */}
        <div className="footer-reveal relative mb-16 lg:mb-24 group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent-gold/10 rounded-[32px] lg:rounded-[48px] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[32px] lg:rounded-[48px] p-6 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden shadow-[0_60px_150px_rgba(0,0,0,0.4)]">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="max-w-2xl text-center lg:text-left relative z-10">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-primary font-black uppercase tracking-[0.5em] text-[9px] mb-6">
                <Sparkles className="w-4 h-4" />
                Concierge Access
              </div>
              <h2 className="text-2xl lg:text-[56px] font-sans font-black mb-6 leading-[1.1] lg:leading-[1] tracking-tighter drop-shadow-2xl">
                Ready to write your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent-gold italic font-serif font-light drop-shadow-2xl">next great story?</span>
              </h2>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2">
                <div className="flex -space-x-2.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 lg:w-12 lg:h-12 rounded-full border-2 border-[#0B1310] overflow-hidden bg-gray-800 shadow-2xl relative">
                      <Image 
                        src={`https://i.pravatar.cc/100?img=${i+14}`} 
                        alt="Explorer" 
                        fill
                        className="object-cover" 
                      />
                    </div>
                  ))}
                  <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full border-2 border-[#0B1310] bg-primary flex items-center justify-center text-[9px] lg:text-[11px] font-black shadow-2xl relative z-10">50K+</div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3 h-3 lg:w-4 lg:h-4 fill-accent-gold text-accent-gold" />
                    ))}
                  </div>
                  <span className="text-white/50 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em]">
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
                className="flex items-center justify-center gap-4 px-10 lg:px-14 py-4 lg:py-6 bg-white text-[#0B1310] font-black rounded-xl lg:rounded-[24px] transition-all shadow-[0_40px_80px_rgba(0,0,0,0.3)] hover:bg-primary hover:text-white group/btn text-base lg:text-xl uppercase tracking-widest overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-700" />
                <span className="relative z-10">Start Your Journey</span>
                <ArrowRight className="w-5 h-5 lg:w-7 lg:h-7 relative z-10 group-hover/btn:translate-x-2 transition-transform duration-700" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 lg:mb-24">
          
          {/* Brand Info */}
          <div className="footer-reveal lg:col-span-4 space-y-10">
            <div className="space-y-6">
              <Link href="/" className="flex items-center gap-4 group">
                <div className="w-10 h-10 lg:w-14 lg:h-14 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-lg lg:rounded-xl flex items-center justify-center text-white font-serif font-bold text-2xl lg:text-3xl shadow-2xl transition-all group-hover:bg-primary group-hover:rotate-6">
                  J
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-black text-2xl lg:text-3xl tracking-tighter leading-none">JADE</span>
                  <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em] text-accent-gold leading-none mt-1">Tours & Travels</span>
                </div>
              </Link>
              <p className="text-white/50 text-base leading-relaxed font-medium max-w-sm">
                Orchestrating peerless travel narratives for the world&apos;s most discerning explorers. Every itinerary is a unique masterpiece of luxury.
              </p>
            </div>

            <div className="flex items-center gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-white hover:text-[#0B1310] hover:-translate-y-1 transition-all duration-700 group shadow-xl"
                >
                  <Icon className="w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-125 transition-transform duration-500" />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <div className="footer-reveal lg:col-span-2 space-y-8">
            <h4 className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em] text-accent-gold">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-white/40 hover:text-white transition-all text-sm flex items-center gap-0 group font-bold tracking-tight"
                  >
                    <span className="w-0 h-[2px] bg-primary group-hover:w-3 group-hover:mr-2 transition-all duration-700" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Curated Links */}
          <div className="footer-reveal lg:col-span-3 space-y-8">
            <h4 className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em] text-accent-gold">
              Experiences
            </h4>
            <ul className="space-y-3">
              {experiences.map((exp) => (
                <li key={exp.name}>
                  <Link 
                    href={exp.href} 
                    className="text-white/40 hover:text-white transition-all text-sm flex items-center gap-0 group font-bold tracking-tight"
                  >
                    <span className="w-0 h-[2px] bg-primary group-hover:w-3 group-hover:mr-2 transition-all duration-700" />
                    {exp.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-reveal lg:col-span-3 space-y-10">
            <h4 className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em] text-accent-gold">
              Direct Access
            </h4>
            <div className="space-y-8">
              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-700 shadow-2xl">
                  <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] text-white/30 block">Concierge Desk</span>
                  <span className="text-white font-black text-lg lg:text-xl tracking-tighter group-hover:text-primary transition-colors">+91 98254 38324</span>
                </div>
              </div>

              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-700 shadow-2xl">
                  <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] text-white/30 block">Inquiry Support</span>
                  <span className="text-white font-black text-lg lg:text-xl tracking-tighter group-hover:text-primary transition-colors truncate block max-w-[200px]">hello@jadetravels.com</span>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-2xl">
                  <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] text-white/30 block">The Studio</span>
                  <p className="text-white/50 text-xs lg:text-sm leading-relaxed font-bold tracking-tight">
                    1st Floor, City Center, MG Road,<br />
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-reveal pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <p className="text-white/20 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em]">
              © 2026 JADE TOURS & TRAVELS.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-white/10 hover:text-white transition-colors text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em]">Privacy</Link>
              <Link href="#" className="text-white/10 hover:text-white transition-colors text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em]">Terms</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-3 bg-white/[0.03] px-6 py-3 rounded-2xl border border-white/5 shadow-2xl">
              <Sparkles className="w-4 h-4 text-accent-gold" />
              <p className="text-white/40 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em]">
                Journeys you&apos;ll <span className="text-white">never forget.</span>
              </p>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl lg:rounded-[20px] bg-white/[0.05] border border-white/15 flex items-center justify-center text-white/40 hover:bg-primary hover:text-white hover:border-primary transition-all duration-1000 shadow-3xl group"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-5 h-5 lg:w-7 lg:h-7 group-hover:-translate-y-1.5 transition-transform duration-700" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
