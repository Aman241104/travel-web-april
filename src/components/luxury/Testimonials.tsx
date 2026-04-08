"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Quote } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".testimonial-card", 
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-56 bg-white relative overflow-hidden transition-colors duration-1000">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-32">
          <Quote className="w-12 h-12 text-accent-blue/20 mx-auto mb-10" />
          <h2 className="font-serif text-6xl md:text-[100px] text-onyx leading-[0.9] tracking-tightest">
            Voices of the <br />
            <span className="text-accent-blue italic font-light">Discerning.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-16">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card flex flex-col items-center text-center">
              <p className="font-serif text-2xl text-onyx/80 leading-relaxed mb-16 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="w-12 h-[1px] bg-onyx/10 mb-8" />
              <h4 className="font-sans text-[10px] uppercase tracking-[0.4em] font-black text-onyx mb-2">{t.author}</h4>
              <p className="font-sans text-[9px] uppercase tracking-widest text-onyx/40 font-medium">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
