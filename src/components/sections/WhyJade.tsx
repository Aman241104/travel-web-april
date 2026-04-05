"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: "15+", label: "Years of Discretion", desc: "A legacy built on silent precision." },
  { value: "5000+", label: "Journeys Perfected", desc: "Bespoke itineraries for global visionaries." },
  { value: "24/7", label: "Priority Concierge", desc: "Always available, everywhere on Earth." },
  { value: "100%", label: "Privacy Guaranteed", desc: "Your data is as secure as your destination." },
];

export default function WhyJade() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".stat-item", 
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-jade-darkest relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="text-gold uppercase tracking-ultra text-xs font-sans mb-4 block">
            The Jade Distinction
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-jade-white leading-tight">
            Why the World’s Most Discerning <br />
            <span className="text-gold italic font-light">Choose Jade.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item text-center">
              <h3 className="text-gold font-serif text-5xl md:text-7xl mb-4">{stat.value}</h3>
              <h4 className="text-jade-white font-sans font-bold uppercase tracking-widest text-xs mb-3">{stat.label}</h4>
              <p className="text-jade-white/40 font-sans text-sm leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] border border-white/5 rounded-full pointer-events-none" />
    </section>
  );
}
