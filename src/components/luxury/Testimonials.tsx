"use client";
import { motion } from "framer-motion";
import { Quote, Star, MessageSquareQuote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Jade doesn't just plan trips; they engineer peace of mind. From private terminal access to hand-picked local guides, every detail was handled with precision.",
    author: "Elena V.",
    role: "Global Philanthropist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    location: "Zurich, Switzerland"
  },
  {
    quote: "The level of discretion and exclusive access Jigar and his team provide is unparalleled. They managed our 12-country tour without a single friction point.",
    author: "Marcus T.",
    role: "Tech Executive",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
    location: "Palo Alto, CA"
  },
  {
    quote: "Finally, a travel concierge that understands the value of time. No friction, no noise. Just perfectly executed experiences that stay with you forever.",
    author: "Sarah J.",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
    location: "London, UK"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-gray-50 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container-custom relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary mb-6">
            <MessageSquareQuote className="w-8 h-8" />
          </div>
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">
            Voice of our travelers
          </span>
          <h2 className="text-5xl font-serif text-brand-dark mb-6 max-w-[600px]">
            Extraordinary Stories from <span className="italic font-light text-primary">Extraordinary People.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 relative group flex flex-col transition-all duration-500"
            >
              <Quote className="absolute top-10 right-10 w-12 h-12 text-primary/5 group-hover:text-primary/10 transition-colors" />
              
              <div className="flex items-center gap-1 mb-8">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400 border-none" />
                ))}
              </div>

              <blockquote className="text-xl text-brand-dark font-serif italic mb-10 leading-relaxed flex-1">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-5 pt-8 border-t border-gray-100">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-white shadow-md group-hover:scale-110 transition-transform duration-500">
                  <Image src={item.image} alt={item.author} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-dark leading-tight">{item.author}</h4>
                  <p className="text-[10px] text-primary font-bold uppercase tracking-[0.2em]">{item.role}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credibility Footer - Micro testimonials/counts */}
        <div className="mt-20 flex justify-center">
          <div className="bg-white/50 backdrop-blur-sm px-8 py-4 rounded-full border border-gray-100 flex items-center gap-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                  <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" fill />
                </div>
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] font-bold text-white relative z-10">
                +2k
              </div>
            </div>
            <p className="text-xs font-bold text-brand-dark uppercase tracking-widest">
              Join 2,300+ Delighted Travelers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
