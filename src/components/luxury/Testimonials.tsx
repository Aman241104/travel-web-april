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
    <section id="testimonials" className="py-32 bg-[#F8F9FA] overflow-hidden relative">
      {/* Cinematic Background Detail */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-sand/30 -z-10 skew-x-12 translate-x-1/3" />
      
      <div className="container-custom relative z-10">
        
        {/* Header with Trust Reinforcement */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-10">
          <div className="max-w-[700px]">
            <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.4em] text-xs mb-6">
              <Sparkles className="w-4 h-4" />
              Social Proof & Credibility
            </div>
            <h2 className="text-5xl lg:text-7xl font-serif text-brand-dark mb-0 leading-tight">
              Voices of the <br />
              <span className="italic font-light text-primary">Extraordinary.</span>
            </h2>
          </div>
          
          <div className="flex flex-col items-start lg:items-end gap-4">
            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-accent-gold text-accent-gold" />
                ))}
              </div>
              <span className="font-bold text-brand-dark">4.9/5 Rating</span>
            </div>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              Based on 2,300+ Verified Journeys
            </p>
          </div>
        </div>

        {/* Dynamic Layout: Featured + Secondary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Featured Testimonial */}
          {testimonials.filter(t => t.featured).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-7 bg-brand-dark rounded-[56px] p-12 md:p-20 text-white relative overflow-hidden group shadow-[0_40px_100px_rgba(10,31,17,0.3)]"
            >
              <Quote className="absolute top-16 right-16 w-32 h-32 text-white/5 group-hover:text-white/10 transition-colors duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-10">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-accent-gold text-accent-gold border-none" />
                  ))}
                </div>

                <blockquote className="text-3xl md:text-4xl font-serif italic mb-12 leading-tight tracking-tight">
                  &ldquo;{item.quote.split(item.highlight)[0]}
                  <span className="text-accent-gold not-italic font-bold underline decoration-accent-gold/30 underline-offset-8">
                    {item.highlight}
                  </span>
                  {item.quote.split(item.highlight)[1]}&rdquo;
                </blockquote>

                <div className="flex items-center gap-8">
                  <div className="relative w-24 h-24 rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl group-hover:scale-110 transition-transform duration-700">
                    <Image src={item.image} alt={item.author} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-1 tracking-tight">{item.author}</h4>
                    <p className="text-xs text-accent-gold font-bold uppercase tracking-[0.3em] mb-1">{item.role}</p>
                    <p className="text-xs text-white/40 uppercase tracking-widest">{item.location}</p>
                  </div>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px]" />
            </motion.div>
          ))}

          {/* Secondary Testimonials */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            {testimonials.filter(t => !t.featured).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-12 rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-100 flex-1 relative group transition-all duration-700"
              >
                <div className="flex items-center gap-1 mb-8">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-accent-gold text-accent-gold border-none" />
                  ))}
                </div>

                <blockquote className="text-xl text-brand-dark font-serif italic mb-10 leading-relaxed tracking-tight">
                  &ldquo;{item.quote.split(item.highlight)[0]}
                  <span className="font-bold not-italic border-b-2 border-primary/20 text-brand-dark">
                    {item.highlight}
                  </span>
                  {item.quote.split(item.highlight)[1]}&rdquo;
                </blockquote>

                <div className="flex items-center gap-6">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-700">
                    <Image src={item.image} alt={item.author} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-dark leading-tight mb-0.5">{item.author}</h4>
                    <p className="text-[10px] text-primary font-bold uppercase tracking-[0.2em]">{item.location}</p>
                  </div>
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
          className="mt-24 pt-16 border-t border-gray-200 flex flex-wrap justify-center items-center gap-16 md:gap-32 grayscale hover:grayscale-0 transition-all duration-700"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl font-serif font-black text-brand-dark">TRUSTPILOT</span>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <div key={s} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center text-white text-[10px] font-bold">★</div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl font-serif font-black text-brand-dark">Google</span>
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold text-brand-dark">4.9</span>
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-accent-gold text-accent-gold" />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-4xl font-serif font-bold text-primary">2.3k+</span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Verified Reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
