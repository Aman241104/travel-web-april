"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Jade doesn't just plan trips; they engineer peace of mind. Every detail of our Alpine retreat was handled with a precision I've only seen in private wealth management.",
    author: "Elena V.",
    role: "Global Philanthropist",
  },
  {
    quote: "The level of discretion and exclusive access Jigar and his team provide is unparalleled. They turned a complex visa situation into a seamless transition to our private island getaway.",
    author: "Marcus T.",
    role: "Tech Executive",
  },
  {
    quote: "Finally, a travel concierge that understands the value of time. No friction, no noise—just pure, curated discovery from start to finish.",
    author: "Sarah J.",
    role: "Creative Director",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-48 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24 md:mb-32">
          <Quote className="w-10 h-10 text-brand-teal/20 mx-auto mb-8" />
          <h2 className="font-serif text-4xl md:text-7xl text-onyx leading-tight tracking-tight">
            Voices of the <br />
            <span className="italic font-light text-brand-teal">Discerning Traveler</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-24">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="flex flex-col items-center text-center"
            >
              <p className="font-serif text-xl md:text-2xl text-onyx/80 leading-relaxed mb-10 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="w-8 h-[1px] bg-brand-teal/30 mb-6" />
              <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-onyx mb-1">{t.author}</h4>
              <p className="font-sans text-[9px] uppercase tracking-widest text-onyx/40">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
