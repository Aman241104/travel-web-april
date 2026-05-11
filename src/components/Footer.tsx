"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Mail, Phone, MapPin, 
  ArrowRight, Star, Sparkles, ChevronUp, Globe, Shield, Compass
} from "lucide-react";
import { Instagram } from "@/components/ui/InstagramIcon";
import { Facebook, Twitter, Youtube } from "@/components/ui/SocialIcons";
import MagneticButton from "@/components/ui/MagneticButton";
import Image from "next/image";
import { useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const navLinks = [
  { name: "Global Collection", href: "#packages" },
  { name: "Service Atelier", href: "#services" },
  { name: "The Journal", href: "#journal" },
  { name: "Guest Reviews", href: "#testimonials" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Cookie Protocol", href: "#" },
];

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content Reveal
      gsap.fromTo(".footer-reveal", 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          }
        }
      );

      // Background Parallax
      gsap.to(".footer-bg-glow", {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
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
    <footer ref={containerRef} className="bg-[#020504] text-white pt-16 lg:pt-40 pb-10 lg:pb-12 relative overflow-hidden border-t border-white/5">
      {/* Immersive Cinematic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="footer-bg-glow absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(56,142,60,0.1),transparent_60%)]" />
        <div className="footer-bg-glow absolute -bottom-48 -left-48 w-[1000px] h-[1000px] bg-primary/[0.05] rounded-full blur-[180px]" />
        <div className="footer-bg-glow absolute top-1/2 -right-48 w-[800px] h-[800px] bg-accent-gold/[0.03] rounded-full blur-[140px]" />
        {/* Film Grain */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-16 lg:mb-40">
          
          {/* Brand Philosophy */}
          <div className="footer-reveal lg:col-span-5 space-y-8 lg:space-y-12">
            <div className="space-y-6 lg:space-y-8">
              <Link href="/" className="flex items-center gap-4 lg:gap-5 group">
                <div className="w-12 h-12 lg:w-20 lg:h-20 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-xl lg:rounded-3xl flex items-center justify-center text-white transition-all duration-1000 group-hover:bg-primary group-hover:rotate-12 shadow-3xl">
                  <Globe className="w-6 h-6 lg:w-12 lg:h-12" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-black text-2xl lg:text-5xl tracking-tightest leading-none text-white">JADE</span>
                  <span className="text-[8px] lg:text-[11px] font-black uppercase tracking-[0.5em] text-primary leading-none mt-1.5 lg:mt-2">Atelier Of Travel</span>
                </div>
              </Link>
              <p className="text-gray-500 text-[15px] lg:text-xl leading-relaxed font-medium max-w-md tracking-tight opacity-90">
                Orchestrating peerless travel narratives for the world&apos;s most discerning explorers. Every itinerary is a unique masterpiece of absolute luxury.
              </p>
            </div>

            <div className="flex items-center gap-4 lg:gap-6">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="w-11 h-11 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-white/40 hover:bg-white hover:text-[#020504] hover:-translate-y-2 transition-all duration-700 group shadow-2xl active:scale-90"
                >
                  <Icon className="w-4.5 h-4.5 lg:w-7 lg:h-7 transition-transform duration-500 group-hover:scale-125" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-16">
            
            <div className="footer-reveal space-y-6 lg:space-y-10">
              <h4 className="text-[9px] lg:text-[11px] font-black uppercase tracking-[0.4em] text-primary/60">
                Anthology
              </h4>
              <ul className="space-y-3.5 lg:space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-500 hover:text-white transition-all text-[13px] lg:text-base flex items-center gap-0 group font-bold tracking-tight uppercase"
                    >
                      <span className="w-0 h-[1px] bg-primary group-hover:w-4 group-hover:mr-3 transition-all duration-700" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-reveal space-y-6 lg:space-y-10">
              <h4 className="text-[9px] lg:text-[11px] font-black uppercase tracking-[0.4em] text-primary/60">
                Contact
              </h4>
              <div className="space-y-6 lg:space-y-8">
                <div className="space-y-1.5 lg:space-y-2">
                  <span className="text-[8px] lg:text-[9px] font-black uppercase tracking-[0.2em] text-white/20 block">WhatsApp</span>
                  <button 
                    onClick={() => {
                      const message = encodeURIComponent("Hello Jade Atelier! I am inquiring about your travel services and would like to speak with an expert.");
                      window.open(`https://wa.me/919825438324?text=${message}`, '_blank');
                    }}
                    className="text-white font-black text-base lg:text-xl tracking-tighter hover:text-primary transition-colors block text-left"
                  >
                    +91 98254 38324
                  </button>
                </div>
                <div className="space-y-1.5 lg:space-y-2">
                  <span className="text-[8px] lg:text-[9px] font-black uppercase tracking-[0.2em] text-white/20 block">Email</span>
                  <Link href="mailto:hello@jadetravels.com" className="text-white font-black text-base lg:text-xl tracking-tighter hover:text-primary transition-colors block truncate">hello@jadetravels.com</Link>
                </div>
              </div>
            </div>

            <div className="footer-reveal space-y-6 lg:space-y-10">
              <h4 className="text-[9px] lg:text-[11px] font-black uppercase tracking-[0.4em] text-primary/60">
                The Studio
              </h4>
              <div className="space-y-4 lg:space-y-6">
                <p className="text-gray-500 text-[13px] lg:text-base leading-relaxed font-bold tracking-tight">
                  1st Floor, City Center,<br />
                  MG Road, Ahmedabad,<br />
                  Gujarat, India 380001
                </p>
                <div className="flex items-center gap-2.5 py-2.5 px-4 bg-white/[0.02] border border-white/5 rounded-xl w-fit">
                   <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                   <span className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-white/40">Studio Open</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Editorial Bar */}
        <div className="footer-reveal pt-10 lg:pt-12 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-16">
            <div className="flex items-center gap-3 text-white/20">
               <Shield className="w-3.5 h-3.5" />
               <p className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.4em]">
                 © 2026 JADE TOURS & TRAVELS.
               </p>
            </div>
            <div className="flex items-center gap-6 lg:gap-8">
              {legalLinks.map(link => (
                <Link key={link.name} href={link.href} className="text-white/10 hover:text-white transition-colors text-[8px] lg:text-[10px] font-black uppercase tracking-[0.3em] lg:tracking-[0.4em]">{link.name}</Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-6 lg:gap-8">
            <div className="hidden sm:flex items-center gap-3 bg-white/[0.02] px-6 py-3 lg:px-8 lg:py-4 rounded-full border border-white/5">
              <Sparkles className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-accent-gold" />
              <p className="text-white/40 text-[8px] lg:text-[10px] font-black uppercase tracking-[0.4em]">
                Journeys You&apos;ll <span className="text-white">Never Forget.</span>
              </p>
            </div>
            
            <MagneticButton 
              onClick={scrollToTop}
              className="w-14 h-14 lg:w-20 lg:h-20 rounded-xl lg:rounded-3xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 hover:bg-primary hover:text-white transition-all duration-1000 shadow-3xl group active:scale-90"
            >
              <ChevronUp className="w-5 h-5 lg:w-9 lg:h-9 group-hover:-translate-y-1.5 transition-transform duration-700" />
            </MagneticButton>
          </div>

        </div>
      </div>
    </footer>
  );
}
