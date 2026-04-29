"use client";
import Link from "next/link";
import { Globe, Mail, Phone, Map } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 overflow-hidden border-t border-onyx/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24 mb-24">
          <div className="lg:col-span-2">
            <Link href="/" className="group flex flex-col items-start leading-none mb-8">
              <span className="font-serif text-4xl tracking-tightest text-onyx transition-colors duration-500">JADE</span>
              <span className="font-sans text-[10px] font-black uppercase tracking-[0.5em] text-brand-teal mt-1">Travels</span>
            </Link>
            <p className="text-onyx/50 max-w-sm font-sans leading-relaxed mb-12">
              Curating exceptional global experiences since 2011. Based in Ahmedabad, serving the discerning traveler worldwide.
            </p>
            <div className="flex items-center gap-6">
              {[Globe, Mail, Phone, Map].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-onyx/10 flex items-center justify-center text-onyx/40 hover:text-brand-teal hover:border-brand-teal transition-all">
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-onyx/40 mb-8">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {[
                { name: "Destinations", href: "#packages" },
                { name: "Services", href: "#services" },
                { name: "Process", href: "#process" },
                { name: "Stories", href: "#journal" },
                { name: "Experts", href: "#about" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-onyx hover:text-brand-teal transition-colors font-serif text-lg">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-onyx/40 mb-8">Contact</h4>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-teal mb-2">Concierge</p>
                <p className="text-base font-serif text-onyx">+91 98254 38324</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-teal mb-2">Inquiries</p>
                <p className="text-base font-serif text-onyx">hello@jadetravels.co.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-onyx/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-onyx/30">
          <p>© 2026 JADE TOURS & TRAVELS</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-onyx transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-onyx transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
