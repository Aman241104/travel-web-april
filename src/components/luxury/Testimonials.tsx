"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    quote: "Jade doesn't just plan trips; they engineer peace of mind. Every detail was handled with precision I've only seen in private wealth management.",
    author: "Elena V.",
    role: "Global Philanthropist",
    image: "/customer/image.png",
    location: "Zurich, Switzerland"
  },
  {
    quote: "The level of discretion and exclusive access Jigar and his team provide is unparalleled. They turned a complex visa situation into a seamless transition.",
    author: "Marcus T.",
    role: "Tech Executive",
    image: "/customer/image copy.png",
    location: "Palo Alto, CA"
  },
  {
    quote: "Finally, a travel concierge that understands the value of time. No friction, no noise—just pure, curated discovery from start to finish.",
    author: "Sarah J.",
    role: "Creative Director",
    image: "/customer/image copy 2.png",
    location: "London, UK"
  },
  {
    quote: "The itinerary was a masterpiece of logistics and luxury. Every sanctuary they selected felt like it was discovered just for us.",
    author: "David L.",
    role: "Hedge Fund Manager",
    image: "/customer/image copy 3.png",
    location: "New York, NY"
  },
  {
    quote: "Their global network is truly elite. From private island buyouts to off-market estates, Jade unlocks the world's most secluded treasures.",
    author: "Sophia R.",
    role: "Art Consultant",
    image: "/customer/image copy 4.png",
    location: "Paris, France"
  }
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !pinRef.current) return;
      const slides = gsap.utils.toArray(".testimonial-slide");
      
      // Pinning the whole section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${slides.length * 100}%`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
          const index = Math.round(self.progress * (slides.length - 1));
          setActiveIndex(index);
        }
      });

      // Individual slide animations
      slides.forEach((slide: any, i: number) => {
        if (i !== 0) {
          gsap.set(slide, { yPercent: 100, opacity: 0 });
        }
        
        if (i < slides.length - 1) {
          gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: () => `${i * (100 / slides.length)}% top`,
              end: () => `${(i + 1) * (100 / slides.length)}% top`,
              scrub: true,
            }
          })
          .to(slide, { yPercent: -20, opacity: 0, scale: 0.9, ease: "none" })
          .to(slides[i+1], { yPercent: 0, opacity: 1, scale: 1, ease: "none" }, 0);
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" className="relative bg-[#FBF6EE] scroll-mt-24">
      <div ref={pinRef} className="relative h-screen w-full overflow-hidden flex flex-col justify-center">
        {/* Decorative Large Quote in Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
          <Quote className="w-[60vw] h-[60vw] text-[#0F2F2A]/[0.02]" strokeWidth={0.5} />
        </div>

        <div className="container relative z-10 px-6 mx-auto h-full flex flex-col justify-center">
          
          {/* Header */}
          <div className="absolute top-20 left-6 md:left-20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-brand-teal" />
              <span className="text-brand-teal font-sans text-[10px] font-bold uppercase tracking-[0.5em]">
                Testimonials
              </span>
            </div>
            <h2 className="font-serif text-4xl text-onyx">Echoes of Excellence</h2>
          </div>

          {/* Content Slider Container */}
          <div className="relative w-full max-w-6xl mx-auto h-[60vh] md:h-[50vh]">
            {testimonials.map((item, i) => (
              <div 
                key={i} 
                className="testimonial-slide absolute inset-0 flex flex-col md:flex-row items-center gap-12 md:gap-24"
              >
                {/* Media Side */}
                <div className="w-full md:w-2/5 h-full relative group">
                  <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl">
                    <Image 
                      src={item.image}
                      alt={item.author}
                      fill
                      className="object-cover scale-105"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-onyx/40 to-transparent" />
                  </div>
                  
                  {/* Floating Meta */}
                  <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-white p-6 md:p-8 rounded-3xl shadow-2xl z-20">
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-3 h-3 fill-brand-teal text-brand-teal" />
                      ))}
                    </div>
                    <p className="text-onyx font-sans text-[10px] font-bold uppercase tracking-widest">
                      Verified Excellence
                    </p>
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-3/5 flex flex-col justify-center">
                  <Quote className="w-16 h-16 text-brand-teal/20 mb-8" />
                  
                  <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl text-onyx leading-[1.1] mb-12 tracking-tightest italic font-light">
                    &ldquo;{item.quote}&rdquo;
                  </h3>

                  <div className="flex items-center gap-6">
                    <div className="w-12 h-[1px] bg-onyx/20" />
                    <div>
                      <h4 className="font-serif text-2xl text-onyx mb-1">{item.author}</h4>
                      <p className="font-sans text-[11px] font-bold uppercase tracking-[0.3em] text-brand-teal">
                        {item.role} • {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="absolute bottom-20 right-6 md:right-20 flex flex-col items-end gap-6">
            <div className="flex items-center gap-4">
              <span className="text-onyx/20 font-serif text-xl">0{activeIndex + 1}</span>
              <div className="w-32 h-[1px] bg-onyx/10 relative overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-brand-teal origin-left"
                  animate={{ scaleX: (activeIndex + 1) / testimonials.length }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <span className="text-onyx/20 font-serif text-xl">0{testimonials.length}</span>
            </div>
            <p className="text-onyx/30 font-sans text-[9px] font-bold uppercase tracking-[0.4em]">
              Voices of Jade
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
