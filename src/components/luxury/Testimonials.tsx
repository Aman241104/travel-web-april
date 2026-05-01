"use client";
import { motion } from "framer-motion";
import { Quote, Star, MessageSquareQuote, Sparkles } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Jade doesn't just plan trips; they engineer peace of mind. From private terminal access to hand-picked local guides, every detail was handled with precision.",
    highlight: "engineer peace of mind",
    author: "Elena V.",
    role: "Global Philanthropist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    location: "Zurich, Switzerland",
    featured: true
  },
  {
    quote: "The level of discretion and exclusive access Jigar and his team provide is unparalleled. They managed our 12-country tour without a single friction point.",
    highlight: "without a single friction point",
    author: "Marcus T.",
    role: "Tech Executive",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
    location: "Palo Alto, CA",
    featured: false
  },
  {
    quote: "Finally, a travel concierge that understands the value of time. No friction, no noise. Just perfectly executed experiences that stay with you forever.",
    highlight: "perfectly executed experiences",
    author: "Sarah J.",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
    location: "London, UK",
    featured: false
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-white overflow-hidden relative">
      {/* Cinematic Background Detail */}
      <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full bg-gradient-to-l from-gray-50 to-transparent -z-10" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10 animate-pulse" />

      <div className="container-custom relative z-10">

        {/* Header with Trust Reinforcement */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-28 gap-12">
          <div className="max-w-[720px]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6 lg:mb-8"
            >
              <Sparkles className="w-4 h-4" />
              Social Proof & Credibility
            </motion.div>
            <h2 className="text-4xl lg:text-[88px] font-sans font-black text-gray-900 leading-[1] lg:leading-[0.95] mb-0 tracking-tighter">
              Voices of the <br />
              <span className="italic font-serif font-light text-primary drop-shadow-sm">Extraordinary.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-4 lg:gap-5">
            <div className="flex items-center gap-3 lg:gap-4 px-6 lg:py-4 py-3 bg-white rounded-2xl lg:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100/50">
              <div className="flex items-center gap-1 lg:gap-1.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 lg:w-5 lg:h-5 fill-accent-gold text-accent-gold" />
                ))}
              </div>
              <div className="w-px h-5 lg:h-6 bg-gray-200" />
              <span className="font-sans font-black text-gray-900 text-base lg:text-lg">4.9/5 Rating</span>
            </div>
            <p className="text-[9px] lg:text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] lg:text-right">
              Based on 2,300+ Verified Journeys
            </p>
          </div>
        </div>

        {/* Dynamic Layout: Featured + Secondary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* Featured Testimonial */}
          {testimonials.filter(t => t.featured).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 bg-[#0B1310] rounded-[32px] lg:rounded-[56px] p-8 md:p-20 text-white relative overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.3)] border border-white/5"
            >
              <Quote className="absolute top-10 right-10 lg:top-16 lg:right-16 w-32 h-32 lg:w-48 lg:h-48 text-white/[0.03] group-hover:text-white/[0.07] transition-all duration-1000 rotate-12" />

              <div className="relative z-10">
                <div className="flex items-center gap-1 lg:gap-1.5 mb-8 lg:mb-14">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 lg:w-6 lg:h-6 fill-accent-gold text-accent-gold border-none drop-shadow-[0_0_10px_rgba(197,160,89,0.3)]" />
                  ))}
                </div>

                <blockquote className="text-2xl md:text-[42px] font-sans font-medium mb-10 lg:mb-16 leading-[1.3] lg:leading-[1.2] tracking-tight">
                  &ldquo;{item.quote.split(item.highlight)[0]}
                  <span className="text-primary italic font-serif font-light underline decoration-primary/30 underline-offset-[8px] lg:underline-offset-[12px] decoration-1 lg:decoration-2">
                    {item.highlight}
                  </span>
                  {item.quote.split(item.highlight)[1]}&rdquo;
                </blockquote>

                <div className="flex items-center gap-5 lg:gap-8">
                  <div className="relative w-20 h-20 lg:w-28 lg:h-28 rounded-2xl lg:rounded-[32px] overflow-hidden border-2 lg:border-4 border-white/10 shadow-2xl group-hover:scale-110 transition-transform duration-1000 ease-out shrink-0">
                    <Image src={item.image} alt={item.author} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-2xl lg:text-3xl font-sans font-black mb-1 lg:mb-2 tracking-tighter">{item.author}</h4>
                    <div className="flex flex-col gap-0.5 lg:gap-1">
                      <p className="text-[10px] lg:text-[11px] text-primary font-black uppercase tracking-[0.3em]">{item.role}</p>
                      <p className="text-[9px] lg:text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">{item.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </motion.div>
          ))}

          {/* Secondary Testimonials */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:gap-10">
            {testimonials.filter(t => !t.featured).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-8 lg:p-12 rounded-[32px] lg:rounded-[48px] shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-gray-100 flex-1 relative group transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-center gap-1 mb-6 lg:mb-10">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 lg:w-4 lg:h-4 fill-accent-gold text-accent-gold border-none" />
                  ))}
                </div>

                <blockquote className="text-lg lg:text-xl text-gray-800 font-sans font-medium mb-8 lg:mb-12 leading-relaxed tracking-tight">
                  &ldquo;{item.quote.split(item.highlight)[0]}
                  <span className="font-black text-gray-900 border-b-2 border-primary/10">
                    {item.highlight}
                  </span>
                  {item.quote.split(item.highlight)[1]}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4 lg:gap-6">
                  <div className="relative w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl overflow-hidden shadow-xl group-hover:scale-110 transition-transform duration-1000 ease-out shrink-0">
                    <Image src={item.image} alt={item.author} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-lg lg:text-xl font-sans font-black text-gray-900 leading-none mb-1 tracking-tight">{item.author}</h4>
                    <p className="text-[9px] lg:text-[10px] text-primary font-black uppercase tracking-[0.2em]">{item.location}</p>
                  </div>
                </div>

                {/* Micro hover detail */}
                <div className="absolute top-8 right-8 lg:top-12 lg:right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <Quote className="w-6 h-6 lg:w-8 lg:h-8 text-primary/5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Trust Proof */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-24 pt-12 lg:pt-16 border-t border-gray-200 flex flex-wrap justify-center items-center gap-10 md:gap-32 grayscale hover:grayscale-0 transition-all duration-700"
        >
          <div className="flex flex-col items-center gap-1.5 lg:gap-2">
            <span className="text-2xl lg:text-3xl font-serif font-black text-brand-dark">TRUSTPILOT</span>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <div key={s} className="w-4 h-4 lg:w-5 lg:h-5 bg-[#00b67a] flex items-center justify-center text-white text-[8px] lg:text-[10px] font-bold">★</div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-1.5 lg:gap-2">
            <span className="text-2xl lg:text-3xl font-serif font-black text-brand-dark">Google</span>
            <div className="flex items-center gap-3 lg:gap-4">
              <span className="text-lg lg:text-xl font-bold text-brand-dark">4.9</span>
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 lg:w-4 lg:h-4 fill-accent-gold text-accent-gold" />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-0.5 lg:gap-1">
            <span className="text-3xl lg:text-4xl font-serif font-bold text-primary">2.3k+</span>
            <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 text-center">Verified Reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
