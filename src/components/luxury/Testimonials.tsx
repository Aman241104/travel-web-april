"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
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
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      if (!sectionRef.current || !pinWrapperRef.current) return;
      const slides = gsap.utils.toArray(".testimonial-slide");
      
      // Create a master timeline for the transitions
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${slides.length * 150}%`, // More scroll distance for smoother transition
          pin: pinWrapperRef.current,
          scrub: 1,
          onUpdate: (self) => {
            const index = Math.round(self.progress * (testimonials.length - 1));
            setActiveIndex(index);
          }
        }
      });

      // Initial state for slides
      gsap.set(slides, { opacity: 0, y: 50, visibility: "hidden" });
      gsap.set(slides[0], { opacity: 1, y: 0, visibility: "visible" });

      // Build the timeline sequence
      slides.forEach((slide: any, i: number) => {
        if (i === 0) return;

        // Transition: previous slide out, current slide in
        tl.to(slides[i-1], {
          opacity: 0,
          y: -50,
          visibility: "hidden",
          duration: 1,
          ease: "power2.inOut"
        })
        .to(slide, {
          opacity: 1,
          y: 0,
          visibility: "visible",
          duration: 1,
          ease: "power2.inOut"
        }, "-=0.5"); // Overlap slightly
      });
    });

    return () => ctx.revert();
  }, [mounted]);

  if (!mounted) return <section className="h-screen bg-[#FBF6EE]" />;

  return (
    <section ref={sectionRef} id="testimonials" className="relative bg-[#FBF6EE] scroll-mt-24">
      <div ref={pinWrapperRef} className="relative h-screen w-full overflow-hidden flex flex-col justify-center">
        
        {/* Background Narrative Texture */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] select-none flex items-center justify-center">
           <Quote className="w-[40vw] h-[40vw] text-[#1A2421]" strokeWidth={0.5} />
        </div>

        <div className="container relative z-10 px-6 mx-auto h-full flex flex-col justify-center max-w-[1600px]">
          
          {/* Header */}
          <div className="absolute top-20 left-12 lg:left-24">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-[#C5A267]" />
              <span className="text-[#C5A267] font-sans text-[10px] font-bold uppercase tracking-[0.5em]">
                Verified Experiences
              </span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#1A2421] tracking-tighter">Echoes of Excellence</h2>
          </div>

          {/* Fixed Layout Container */}
          <div className="relative w-full max-w-7xl mx-auto h-[60vh] flex items-center">
            {testimonials.map((item, i) => (
              <div 
                key={i} 
                className="testimonial-slide absolute inset-0 flex flex-col md:flex-row items-center gap-16 lg:gap-32"
              >
                {/* Visual Side */}
                <div className="w-full md:w-[45%] h-full relative group">
                  <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <Image 
                      src={item.image}
                      alt={item.author}
                      fill
                      className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2421]/40 to-transparent" />
                  </div>
                  
                  {/* Floating ID */}
                  <div className="absolute -bottom-8 -right-8 bg-[#F5F2ED] p-10 rounded-[2rem] shadow-2xl z-20 hidden lg:block border border-[#1A2421]/5">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-3 h-3 fill-[#C5A267] text-[#C5A267]" />
                      ))}
                    </div>
                    <p className="text-[#1A2421] font-sans text-[10px] font-bold uppercase tracking-[0.3em]">
                      Absolute Standard
                    </p>
                  </div>
                </div>

                {/* Narrative Side */}
                <div className="w-full md:w-[55%] flex flex-col justify-center">
                  <Quote className="w-12 h-12 text-[#C5A267]/30 mb-8" />
                  
                  <h3 className="font-serif text-3xl lg:text-5xl text-[#1A2421] leading-[1.15] mb-12 tracking-tight italic font-light">
                    &ldquo;{item.quote}&rdquo;
                  </h3>

                  <div className="flex items-center gap-8 pt-8 border-t border-[#1A2421]/10">
                    <div className="w-1 h-12 bg-[#C5A267]/40" />
                    <div>
                      <h4 className="font-serif text-3xl text-[#1A2421] mb-1">{item.author}</h4>
                      <p className="font-sans text-[11px] font-bold uppercase tracking-[0.4em] text-[#C5A267]">
                        {item.role} <span className="mx-3 opacity-20">•</span> {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation/Progress UI */}
          <div className="absolute bottom-20 left-12 lg:left-auto lg:right-24 flex flex-col items-start lg:items-end gap-6">
            <div className="flex items-center gap-6">
              <span className="text-[#1A2421] font-serif text-2xl">0{activeIndex + 1}</span>
              <div className="w-48 h-[1px] bg-[#1A2421]/10 relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-[#C5A267] origin-left transition-transform duration-700 ease-out"
                  style={{ transform: `scaleX(${(activeIndex + 1) / testimonials.length})` }}
                />
              </div>
              <span className="text-[#1A2421]/20 font-serif text-2xl">0{testimonials.length}</span>
            </div>
            <p className="text-[#1A2421]/30 font-sans text-[9px] font-bold uppercase tracking-[0.5em]">
              The Jade Signature
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
