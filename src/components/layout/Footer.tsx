import Link from "next/link";
import { Globe, Mail, Phone, MessageSquare } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Footer() {
  return (
    <footer className="bg-jade-darkest pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="font-serif text-3xl tracking-ultra text-jade-white mb-8 block group">
              JADE <span className="text-gold italic group-hover:not-italic transition-all">TRAVELS</span>
            </Link>
            <p className="text-jade-white/50 max-w-md font-sans leading-relaxed mb-8">
              The art of effortless exploration. Providing bespoke travel, passport, and 
              visa services for the modern global nomad since 2011.
            </p>
            <div className="flex items-center gap-4">
              {[Globe, Mail, Phone, MessageSquare].map((Icon, i) => (
                <MagneticButton key={i} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold transition-colors">
                  <Icon className="w-5 h-5 stroke-[1.5px]" />
                </MagneticButton>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-jade-white text-xl mb-8">Explore</h4>
            <ul className="flex flex-col gap-4">
              {["Bespoke Tours", "Service Suite", "Our Legacy", "Journal"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-jade-white/40 hover:text-gold text-sm transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-gold mr-0 group-hover:mr-2 transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-jade-white text-xl mb-8">Legals</h4>
            <ul className="flex flex-col gap-4">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-jade-white/40 hover:text-gold text-sm transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-gold mr-0 group-hover:mr-2 transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-jade-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-jade-white/20 text-xs uppercase tracking-ultra font-sans">
            © 2026 JADE TOURS AND TRAVEL. ALL RIGHTS RESERVED.
          </p>
          <p className="text-jade-white/20 text-xs uppercase tracking-ultra font-sans">
            Designed for the <span className="text-gold italic">Creatively Curious.</span>
          </p>
        </div>
      </div>

      {/* Background massive text */}
      <div className="absolute -bottom-10 -right-20 opacity-[0.02] select-none pointer-events-none">
        <h2 className="font-serif text-[24vw] leading-none text-jade-white whitespace-nowrap">
          JADE TRAVELS
        </h2>
      </div>
    </footer>
  );
}
