"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const promises = [
  { title: "Expert Planning", desc: "15+ years of making travel easy and safe for everyone.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" },
  { title: "Custom Trips", desc: "Every plan is made just for you and your family.", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop" },
  { title: "Always Here", desc: "We are available 24/7 to help with any of your needs.", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop" },
];

export default function USP() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".promise-card", 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1.2,
          ease: "expo.out",
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
    <section ref={sectionRef} className="py-32 md:py-56 bg-white relative transition-colors duration-1000">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mb-32">
          <span className="text-accent-blue font-sans text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">
            Our Mission
          </span>
          <h2 className="font-serif text-7xl md:text-[120px] leading-[0.95] tracking-tightest text-onyx">
            Better Travel. <br />
            <span className="text-accent-blue italic font-light">No Stress.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {promises.map((promise, i) => (
            <div key={i} className="promise-card group">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] mb-10 border border-onyx/5">
                <Image 
                  src={promise.img} 
                  alt={promise.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-serif text-3xl text-onyx mb-6 group-hover:text-accent-blue transition-colors leading-none">
                {promise.title}
              </h3>
              <p className="text-onyx/50 font-sans text-xs uppercase tracking-widest leading-relaxed">
                {promise.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
