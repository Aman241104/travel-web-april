"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Jade doesn't just plan trips; they engineer peace of mind. Every detail of our Alpine retreat was handled with a precision I've only seen in private wealth management.",
    highlight: "peace of mind",
    author: "Elena V.",
    role: "Global Philanthropist",
    image: "/customer/image.png"
  },
  {
    quote: "The level of discretion and exclusive access Jigar and his team provide is unparalleled. They turned a complex visa situation into a seamless transition.",
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
  const sectionRef = useRef(null);
  
  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="relative py-24 md:py-56 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F7F9F8 0%, #EEF3F1 100%)"
      }}
    >
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        {/* Floating Quote Icon */}
        <motion.div 
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, 0],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 text-[#F2EFE9]"
        >
          <Quote size={300} strokeWidth={0.5} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Editorial Header */}
        <div className="max-w-4xl mb-24 md:mb-32">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#C1A67B] font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] mb-6 block"
          >
            Client Perspectives
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-8xl text-[#F2EFE9] leading-[1] tracking-tighter"
          >
            Voices of the <br />
            <span className="italic font-light text-[#C1A67B]">Discerning Traveler</span>
          </motion.h2>
        </div>

        {/* Asymmetrical Editorial Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-32">
          
          {/* LEFT: Large Featured Testimonial (Hero) */}
          <div className="w-full lg:w-[60%]">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-12 md:p-20 rounded-[3.5rem] bg-[#F2EFE9]/[0.6] backdrop-blur-xl border border-[#F2EFE9] shadow-sm hover:shadow-2xl hover:shadow-[#0F2F2A]/5 transition-all duration-700 h-full flex flex-col justify-between"
            >
              <div className="relative">
                <Quote size={80} className="absolute -top-10 -left-6 text-[#C1A67B]/10 pointer-events-none" />
                <p className="font-serif text-3xl md:text-5xl text-[#F2EFE9] leading-tight mb-16 relative z-10">
                  &ldquo;{testimonials[0].quote.split(testimonials[0].highlight)[0]}
                  <span className="text-[#C1A67B] underline decoration-2 underline-offset-8 transition-colors duration-500 group-hover:text-[#2F7F73]">
                    {testimonials[0].highlight}
                  </span>
                  {testimonials[0].quote.split(testimonials[0].highlight)[1]}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-6 pt-12 border-t border-[#F2EFE9]/5">
                <div className="relative w-20 h-20 rounded-full overflow-hidden p-[2px] bg-gradient-to-tr from-[#C1A67B] to-transparent transition-transform duration-500 group-hover:scale-105">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image src={testimonials[0].image} alt={testimonials[0].author} fill className="object-cover" />
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-[#F2EFE9]">{testimonials[0].author}</h4>
                  <p className="font-sans text-[11px] font-bold uppercase tracking-[0.3em] text-[#F2EFE9]/40">{testimonials[0].role}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Stacked Smaller Testimonials */}
          <div className="w-full lg:w-[40%] flex flex-col gap-8">
            {testimonials.slice(1).map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
                className="group p-10 md:p-14 rounded-[3rem] bg-[#F2EFE9]/[0.4] backdrop-blur-lg border border-[#F2EFE9] hover:bg-[#0B1310] hover:shadow-xl hover:shadow-[#0F2F2A]/5 transition-all duration-700"
              >
                <p className="font-serif text-xl md:text-2xl text-[#F2EFE9]/70 leading-relaxed mb-10 group-hover:text-[#0B1310] transition-colors duration-500 italic">
                  &ldquo;{t.quote.split(t.highlight)[0]}
                  <span className="text-[#F2EFE9] not-italic font-medium underline decoration-1 underline-offset-4 decoration-[#C1A67B]/30">
                    {t.highlight}
                  </span>
                  {t.quote.split(t.highlight)[1]}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-inner group-hover:ring-2 ring-[#C1A67B] ring-offset-2 transition-all duration-500">
                    <Image src={t.image} alt={t.author} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#F2EFE9]">{t.author}</h4>
                    <p className="font-sans text-[9px] uppercase tracking-widest text-[#F2EFE9]/40">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Elegant Integrated CTA Strip */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden p-10 md:p-16 rounded-[4rem] bg-[#0B1310] text-[#F2EFE9] flex flex-col md:flex-row items-center justify-between gap-12 group"
        >
          {/* Background Highlight */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C1A67B]/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          
          <div className="relative z-10 text-center md:text-left">
            <h3 className="font-serif text-3xl md:text-5xl mb-4 leading-tight">Join our circle of <br className="hidden md:block" /> <span className="italic font-light text-[#C1A67B]">private clients.</span></h3>
            <p className="text-[#D6E2DF]/40 font-sans text-lg tracking-wide">Experience the pinnacle of curated travel management.</p>
          </div>

          <button className="group relative z-10 px-14 py-7 bg-[#C1A67B] text-[#0B1310] font-sans text-xs font-bold uppercase tracking-[0.4em] rounded-full hover:bg-[#0B1310] hover:scale-105 transition-all duration-700 shadow-[0_20px_50px_rgba(111,195,178,0.3)] flex items-center gap-4">
            Start Your Journey
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
