"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  { type: "text", name: "Sarah Jenkins", role: "Explorer", text: "The most incredible experience of my life. Every detail was planned to perfection, and I never had to worry about a thing.", rating: 5, bg: "bg-brand-sand" },
  { type: "image", name: "David M.", src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop" },
  { type: "text", name: "Amelia & Tom", role: "Honeymooners", text: "Words cannot describe how magical our trip was. The local guides were fantastic and the resorts were top tier.", rating: 5, bg: "bg-[#0B1310] border-2 border-brand-sand" },
  { type: "video", name: "Michael T.", src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=600&auto=format&fit=crop" },
  { type: "text", name: "The Harrison Family", role: "Family Trip", text: "Keeping the kids entertained while we got to relax felt like a dream. Thank you for crafting the perfect family getaway.", rating: 5, bg: "bg-brand-yellow font-medium" },
];

export default function HappyCustomers() {
  return (
    <section id="happy-customers" className="pt-48 md:pt-[240px] pb-24 md:pb-32 bg-[#0B1310] relative overflow-hidden transition-colors duration-1000">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 md:mb-24 relative z-10">
          <span className="text-[#C1A67B] font-sans text-xs font-semibold uppercase tracking-widest mb-6 block">
            Reviews
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-[#F2EFE9] leading-[1.2] tracking-tight mb-6">
            Over 20,000+ <br />
            <span className="text-[#C1A67B] italic font-light mt-2 block">happy customers.</span>
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="break-inside-avoid"
            >
              {t.type === "text" ? (
                <div className={`p-8 rounded-[32px] ${t.bg}`}>
                  <div className="flex gap-1 mb-4 text-[#C1A67B]">
                    {[...Array(t.rating)].map((_, idx) => <span key={idx}>★</span>)}
                  </div>
                  <p className="font-sans text-lg text-[#F2EFE9] mb-6 leading-relaxed">&quot;{t.text}&quot;</p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-10 h-10 rounded-full bg-[#C1A67B]/20 overflow-hidden">
                      <Image src={i === 0 ? "/assets/owner-image.png" : `/customer/image copy ${i + 2}.png`} alt={t.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-sans font-bold text-[#F2EFE9] text-sm">{t.name}</p>
                      <p className="font-sans text-xs text-[#F2EFE9]/60">{t.role}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden shadow-xl">
                  <Image src={t.src!} alt="Review" fill className="object-cover" />
                  {t.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-[#0B1310]/30 backdrop-blur-md rounded-full flex items-center justify-center text-[#F2EFE9]">
                        <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
