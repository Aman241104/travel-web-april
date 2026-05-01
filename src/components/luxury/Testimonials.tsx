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
    image: "/customer/image_copy.png",
    location: "Palo Alto, CA"
  },
  {
    quote: "Finally, a travel concierge that understands the value of time. No friction, no noise—just pure, curated discovery from start to finish.",
    author: "Sarah J.",
    role: "Creative Director",
    image: "/customer/image_copy_2.png",
    location: "London, UK"
  },
  {
    quote: "The itinerary was a masterpiece of logistics and luxury. Every sanctuary they selected felt like it was discovered just for us.",
    author: "David L.",
    role: "Hedge Fund Manager",
    image: "/customer/image_copy_3.png",
    location: "New York, NY"
  },
  {
    quote: "Their global network is truly elite. From private island buyouts to off-market estates, Jade unlocks the world's most secluded treasures.",
    author: "Sophia R.",
    role: "Art Consultant",
    image: "/customer/image_copy_4.png",
    location: "Paris, France"
  }
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => setMounted(true));
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      cancelAnimationFrame(handle);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (!mounted || isMobile) return;

    const ctx = gsap.context(() => {
      if (!sectionRef.current || !pinWrapperRef.current) return;
      const slides = gsap.utils.toArray(".testimonial-slide") as HTMLElement[];
      
      // Initial state for slides
      gsap.set(slides, { opacity: 0, y: 50, visibility: "hidden" });
      gsap.set(slides[0], { opacity: 1, y: 0, visibility: "visible" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${slides.length * 200}%`, // Extended scroll distance for smoother experience
          pin: pinWrapperRef.current,
          scrub: 1,
          onUpdate: (self) => {
            // Calculate active index based on current progress relative to the number of slides
            const index = Math.min(
              Math.floor(self.progress * slides.length),
              slides.length - 1
            );
            setActiveIndex(index);
          }
        }
      });

      // Build the timeline sequence with holds for each slide
      slides.forEach((slide, i) => {
        // Hold the current slide
        tl.to({}, { duration: 2 }); 

        // Transition to next slide (except for the last one)
        if (i < slides.length - 1) {
          tl.to(slides[i], {
            opacity: 0,
            y: -50,
            visibility: "hidden",
            duration: 1,
            ease: "power2.inOut"
          })
          .to(slides[i+1], {
            opacity: 1,
            y: 0,
            visibility: "visible",
            duration: 1,
            ease: "power2.inOut"
          }, "-=0.5");
        }
      });
    });

    return () => ctx.revert();
  }, [mounted, isMobile]);

  if (!mounted) return <section className="h-screen bg-[#0B1310]" />;

  if (isMobile) {
    return (
      <section id="testimonials" className="relative bg-[#0B1310] py-16 scroll-mt-24">
        <div className="container px-6 mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-[#C1A67B]" />
            <span className="text-[#C1A67B] font-sans text-[10px] font-bold uppercase tracking-[0.5em]">
              Verified Experiences
            </span>
          </div>
          <h2 className="font-serif text-4xl text-[#F2EFE9] tracking-tighter mb-12">Echoes of Excellence</h2>

          <div className="flex flex-col gap-16">
            {testimonials.map((item, i) => (
              <div key={i} className="flex flex-col gap-8">
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
                  <Image 
                    src={item.image}
                    alt={item.author}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1310]/60 to-transparent" />
                </div>
                <div className="px-2">
                  <Quote className="w-8 h-8 text-[#C1A67B]/30 mb-4" />
                  <h3 className="font-serif text-xl text-[#F2EFE9] leading-relaxed italic font-light mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </h3>
                  <div className="flex items-center gap-4 pt-6 border-t border-[#F2EFE9]/10">
                    <div className="w-1 h-8 bg-[#C1A67B]/40" />
                    <div>
                      <h4 className="font-serif text-xl text-[#F2EFE9] mb-1">{item.author}</h4>
                      <p className="font-sans text-[9px] font-bold uppercase tracking-[0.3em] text-[#C1A67B]">
                        {item.role} • {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="testimonials" className="relative bg-[#0B1310] scroll-mt-24">
      <div ref={pinWrapperRef} className="relative h-screen w-full overflow-hidden flex flex-col justify-center">
        
        {/* Background Narrative Texture */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] select-none flex items-center justify-center">
           <Quote className="w-[40vw] h-[40vw] text-[#F2EFE9]" strokeWidth={0.5} />
        </div>

        <div className="container relative z-10 px-6 mx-auto h-full flex flex-col justify-center max-w-[1600px]">
          
          {/* Header */}
          <div className="absolute top-10 md:top-20 left-6 lg:left-24">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-[#C1A67B]" />
              <span className="text-[#C1A67B] font-sans text-[10px] font-bold uppercase tracking-[0.5em]">
                Verified Experiences
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-[#F2EFE9] tracking-tighter">Echoes of Excellence</h2>
          </div>

          {/* Fixed Layout Container */}
          <div className="relative w-full max-w-7xl mx-auto h-[70vh] md:h-[60vh] flex items-center">
            {testimonials.map((item, i) => (
              <div 
                key={i} 
                className={`testimonial-slide absolute inset-0 flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-32 ${i !== 0 ? 'opacity-0 invisible' : ''}`}
              >
                {/* Visual Side */}
                <div className="w-full md:w-[45%] h-1/3 md:h-full relative group shrink-0">
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
                  <div className="absolute -bottom-8 -right-8 bg-[#0B1310] p-10 rounded-[2rem] shadow-2xl z-20 hidden lg:block border border-[#F2EFE9]/5">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-3 h-3 fill-[#C1A67B] text-[#C1A67B]" />
                      ))}
                    </div>
                    <p className="text-[#F2EFE9] font-sans text-[10px] font-bold uppercase tracking-[0.3em]">
                      Absolute Standard
                    </p>
                  </div>
                </div>

                {/* Narrative Side */}
                <div className="w-full md:w-[55%] flex flex-col justify-center">
                  <Quote className="w-8 h-8 md:w-12 md:h-12 text-[#C1A67B]/30 mb-6 md:mb-8" />
                  
                  <h3 className="font-serif text-xl md:text-3xl lg:text-5xl text-[#F2EFE9] leading-[1.15] mb-8 md:mb-12 tracking-tight italic font-light">
                    &ldquo;{item.quote}&rdquo;
                  </h3>

                  <div className="flex items-center gap-6 md:gap-8 pt-6 md:pt-8 border-t border-[#F2EFE9]/10">
                    <div className="w-1 h-10 md:h-12 bg-[#C1A67B]/40" />
                    <div>
                      <h4 className="font-serif text-2xl md:text-3xl text-[#F2EFE9] mb-1">{item.author}</h4>
                      <p className="font-sans text-[11px] font-bold uppercase tracking-[0.4em] text-[#C1A67B]">
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
              <span className="text-[#F2EFE9] font-serif text-2xl">0{activeIndex + 1}</span>
              <div className="w-48 h-[1px] bg-[#0B1310]/10 relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-[#C1A67B] origin-left transition-transform duration-700 ease-out"
                  style={{ transform: `scaleX(${(activeIndex + 1) / testimonials.length})` }}
                />
              </div>
              <span className="text-[#F2EFE9]/20 font-serif text-2xl">0{testimonials.length}</span>
            </div>
            <p className="text-[#F2EFE9]/30 font-sans text-[9px] font-bold uppercase tracking-[0.5em]">
              The Jade Signature
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
