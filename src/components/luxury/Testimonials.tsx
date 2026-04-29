"use client";
import { motion } from "framer-motion";
import { Quote, Star, ArrowRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Jade doesn't just plan trips; they engineer peace of mind. Every detail of our Alpine retreat was handled with a precision I've only seen in private wealth management.",
    highlight: "peace of mind",
    author: "Elena V.",
    role: "Global Philanthropist",
    image: "/customer/image.png"
  },
  {
    quote: "The level of discretion and exclusive access Jigar and his team provide is unparalleled. They turned a complex visa situation into a seamless transition to our private island getaway.",
    highlight: "discretion and exclusive access",
    author: "Marcus T.",
    role: "Tech Executive",
    image: "/customer/image copy.png"
  },
  {
    quote: "Finally, a travel concierge that understands the value of time. No friction, no noise—just pure, curated discovery from start to finish.",
    highlight: "value of time",
    author: "Sarah J.",
    role: "Creative Director",
    image: "/customer/image copy 2.png"
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-48 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal mx-auto mb-8"
          >
            <Quote className="w-6 h-6" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-7xl text-onyx leading-tight tracking-tight"
          >
            Voices of the <br />
            <span className="italic font-light text-brand-teal/80">Discerning Traveler</span>
          </motion.h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-24">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative p-10 rounded-[2.5rem] bg-bg-light/30 border border-onyx/5 hover:bg-white hover:shadow-2xl hover:shadow-onyx/5 transition-all duration-700 ease-in-out"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-3 h-3 fill-brand-teal text-brand-teal" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-xl md:text-2xl text-onyx/80 leading-relaxed mb-10 italic">
                &ldquo;{t.quote.split(t.highlight)[0]}
                <span className="text-onyx font-normal not-italic underline decoration-brand-teal/30 decoration-2 underline-offset-4">{t.highlight}</span>
                {t.quote.split(t.highlight)[1]}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-8 border-t border-onyx/5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-brand-teal/10">
                  <Image src={t.image} alt={t.author} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div>
                  <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-onyx">{t.author}</h4>
                  <p className="font-sans text-[9px] uppercase tracking-widest text-onyx/40">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-onyx/40 font-sans text-sm uppercase tracking-widest mb-8">Join our circle of private clients</p>
          <button className="group px-14 py-6 bg-onyx text-white font-sans text-xs font-bold uppercase tracking-[0.3em] rounded-full hover:bg-brand-teal transition-all duration-500 flex items-center gap-4 mx-auto shadow-2xl">
            Start Your Journey
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
