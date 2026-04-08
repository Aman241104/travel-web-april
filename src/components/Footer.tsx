"use client";
import Link from "next/link";
import { Globe, Mail, Phone, MessageSquare } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-onyx pt-32 pb-12 overflow-hidden relative border-t border-onyx/5 dark:border-white/5 transition-colors duration-1000">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
          <div className="lg:col-span-2">
            <Link href="/" className="font-serif text-4xl tracking-tightest text-onyx dark:text-white mb-10 block">
              JADE
            </Link>
            <p className="text-onyx/50 dark:text-white/40 max-w-sm font-sans leading-relaxed mb-12 font-medium">
              Architecting extraordinary narratives for the world&apos;s most discerning travelers. 
              Established in 2011.
            </p>
            <div className="flex items-center gap-6">
              {[Globe, Mail, Phone, MessageSquare].map((Icon, i) => (
                <MagneticButton key={i} className="w-14 h-14 rounded-full border border-onyx/10 dark:border-white/10 flex items-center justify-center text-onyx/40 dark:text-white/40 hover:text-accent-blue hover:border-accent-blue transition-all bg-white dark:bg-onyx shadow-sm">
                  <Icon className="w-5 h-5 stroke-[1.5px]" />
                </MagneticButton>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-sans text-[10px] font-black uppercase tracking-[0.4em] text-onyx/30 dark:text-white/30 mb-10">Access</h4>
            <ul className="flex flex-col gap-6">
              {["Portfolio", "Concierge", "The Ethos", "Journal"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-onyx dark:text-white font-serif text-xl hover:text-accent-blue transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[10px] font-black uppercase tracking-[0.4em] text-onyx/30 dark:text-white/30 mb-10">Legal</h4>
            <ul className="flex flex-col gap-6">
              {["Mandate", "Terms", "Privacy"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-onyx dark:text-white font-serif text-xl hover:text-accent-blue transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-onyx/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[9px] font-black uppercase tracking-[0.4em] text-onyx/20 dark:text-white/20">
          <p>© 2026 JADE TRAVELS • ULTRA-LUXURY</p>
          <p>ESTABLISHED IN AHMEDABAD</p>
        </div>
      </div>
    </footer>
  );
}
