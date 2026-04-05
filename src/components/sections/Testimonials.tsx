"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const testimonials = [
  {
    quote: "With Jade, the complexity of a multi-continent family retreat simply vanished. They didn't just book a trip; they protected our time and elevated our experience.",
    author: "Executive Client",
    loc: "Ahmedabad, IN",
  },
  {
    quote: "Borders felt like they didn't exist. The visa and passport assistance was handled with such discretion and speed that I didn't have to think twice.",
    author: "Creative Director",
    loc: "Dubai, UAE",
  },
  {
    quote: "The personalized attention to our itinerary made our journey feel like a story we were writing together. Truly the art of effortless exploration.",
    author: "Philanthropist",
    loc: "London, UK",
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(".testimonial-item", 
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-gold uppercase tracking-ultra text-xs font-sans mb-4 block">
            Voices of Trust
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-jade-black italic font-light leading-tight">
            Client Narratives.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-item flex flex-col items-center text-center p-8 bg-jade-white rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="text-gold text-5xl font-serif mb-8 select-none">“</div>
              <p className="font-serif text-xl md:text-2xl text-jade/80 italic leading-relaxed mb-10 max-w-sm">
                {t.quote}
              </p>
              <div className="mt-auto">
                <h4 className="text-jade-black font-sans font-bold uppercase tracking-widest text-xs mb-1">
                  {t.author}
                </h4>
                <p className="text-jade/40 font-sans text-[10px] uppercase tracking-ultra">
                  {t.loc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative lines */}
      <div className="absolute top-1/2 left-0 w-32 h-[1px] bg-gold/20" />
      <div className="absolute top-1/2 right-0 w-32 h-[1px] bg-gold/20" />
    </section>
  );
}
