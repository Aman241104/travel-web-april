"use client";
import { useEffect, useRef } from "react";
import { CheckCircle2, ArrowRight, Plane, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  "Best Price Guarantee",
  "Expert Travel Consultants",
  "Customized Itineraries",
  "24/7 Customer Support",
  "Safe & Secure Travel"
];

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(".why-content > *", 
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".why-content",
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(".why-image-item", 
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.2,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="why-us" ref={containerRef} className="relative py-16 lg:py-32 overflow-hidden bg-[#0B1310] scroll-mt-24">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop" 
          alt="Mountain Background"
          fill
          className="object-cover opacity-25 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1310] via-[#0B1310]/95 to-[#0B1310]/60" />
      </div>

      {/* Decorative Glowing Orbs for Depth */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-accent-gold/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="why-content space-y-8 lg:space-y-10">
            <span className="font-script text-2xl lg:text-3xl text-primary mb-3 block drop-shadow-[0_2px_15px_rgba(56,142,60,0.5)]">
              Why Choose Us
            </span>
            <h2 className="text-[32px] md:text-[48px] lg:text-[64px] xl:text-[72px] font-sans font-black text-white leading-[1.1] lg:leading-[1] mb-6 lg:mb-8 tracking-tighter drop-shadow-2xl">
              Travel Made Easy, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 italic font-serif font-light">Memories That Last.</span>
            </h2>
            
            <div className="w-16 lg:w-24 h-[2px] bg-gradient-to-r from-white/60 to-transparent mb-8 flex items-center relative">
               <Plane className="w-5 h-5 lg:w-6 lg:h-6 text-white/90 absolute -left-2" />
            </div>

            <div className="space-y-5 lg:space-y-6 mb-10">
              {features.map((feature, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-4 lg:gap-6 group"
                >
                  <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-[0_0_20px_rgba(56,142,60,0.4)] group-hover:scale-110 transition-transform duration-500">
                    <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                  <span className="text-gray-300 text-base lg:text-xl font-bold group-hover:text-white transition-colors duration-500 tracking-tight">{feature}</span>
                </div>
              ))}
            </div>

            <Link 
              href="#about" 
              className="inline-flex items-center gap-4 px-10 py-4 lg:px-14 lg:py-6 bg-primary text-white font-black rounded-full hover:bg-primary-dark transition-all shadow-2xl hover:-translate-y-2 active:translate-y-0 group text-xs lg:text-lg uppercase tracking-[0.3em] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10">Our Philosophy</span>
              <ArrowRight className="w-5 h-5 lg:w-7 lg:h-7 group-hover:translate-x-3 transition-transform duration-700 relative z-10" />
            </Link>
          </div>

          {/* Right Image Grid */}
          <div className="why-images relative grid grid-cols-2 gap-5 lg:gap-8 h-[400px] md:h-[550px] lg:h-[650px] mt-12 lg:mt-0">
            {/* Main Vertical Image */}
            <div className="why-image-item relative h-full rounded-[24px] lg:rounded-[40px] overflow-hidden group shadow-[0_40px_80px_rgba(0,0,0,0.5)] border border-white/10">
              <Image 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop" 
                alt="Tropical Beach"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[5s] ease-out brightness-90 group-hover:brightness-110"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[24px] lg:rounded-[40px] pointer-events-none z-10" />
              
              {/* Badge - Responsive and Centered/Capped */}
              <div className="absolute top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 lg:top-10 lg:left-10 lg:right-10 bg-white/95 backdrop-blur-2xl rounded-[20px] lg:rounded-[32px] p-4 lg:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center gap-4 lg:gap-6 z-20 border border-white group-hover:-translate-y-2 transition-transform duration-700">
                <div className="w-10 h-10 lg:w-16 lg:h-16 rounded-xl lg:rounded-[24px] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 shadow-inner shrink-0">
                   <Star className="w-5 h-5 lg:w-8 lg:h-8 text-primary fill-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] lg:text-[13px] font-black text-gray-950 leading-none mb-1 uppercase tracking-wider truncate">Elite Travel</div>
                  <div className="text-[10px] lg:text-[13px] font-black text-primary leading-none uppercase tracking-wider truncate">Academy</div>
                  <div className="flex gap-1 mt-2">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-2.5 lg:w-3.5 h-2.5 lg:h-3.5 text-accent-gold fill-accent-gold" />)}
                  </div>
                </div>
              </div>
            </div>

            {/* Stacked Images */}
            <div className="grid grid-rows-2 gap-5 lg:gap-8">
              <div className="why-image-item relative rounded-[24px] lg:rounded-[40px] overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.6)] border border-white/10">
                <Image 
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop" 
                  alt="Mountains"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[4s] ease-out brightness-90 group-hover:brightness-110"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[24px] lg:rounded-[40px] pointer-events-none z-10" />
              </div>
              <div className="why-image-item relative rounded-[24px] lg:rounded-[40px] overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.6)] border border-white/10">
                <Image 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop" 
                  alt="Valley"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[4s] ease-out brightness-90 group-hover:brightness-110"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[24px] lg:rounded-[40px] pointer-events-none z-10" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
