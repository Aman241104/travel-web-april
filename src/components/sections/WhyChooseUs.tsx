"use client";
import { useEffect, useRef } from "react";
import { CheckCircle2, ArrowRight, Plane, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

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
    const ctx = gsap.context(() => {
      gsap.from(".why-content > *", {
        x: -50,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".why-content",
          start: "top 80%",
        }
      });

      gsap.from(".why-image-item", {
        scale: 0.8,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="why-us" ref={containerRef} className="relative py-32 lg:py-60 overflow-hidden bg-[#0B1310] scroll-mt-24">
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
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          {/* Left Content */}
          <div className="why-content space-y-10 lg:space-y-12">
            <span className="font-script text-3xl lg:text-5xl text-primary mb-3 block drop-shadow-[0_2px_15px_rgba(56,142,60,0.5)]">
              Why Choose Us
            </span>
            <h2 className="text-5xl lg:text-[110px] font-sans font-black text-white leading-[1] lg:leading-[0.9] mb-8 tracking-tighter drop-shadow-2xl">
              Travel Made Easy, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">Memories That Last.</span>
            </h2>
            
            <div className="w-20 lg:w-32 h-[2px] bg-gradient-to-r from-white/60 to-transparent mb-10 flex items-center relative">
               <Plane className="w-6 h-6 lg:w-8 h-8 text-white/90 absolute -left-3" />
            </div>

            <div className="space-y-6 lg:space-y-8 mb-12">
              {features.map((feature, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-6 lg:gap-8 group"
                >
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-[0_0_30px_rgba(56,142,60,0.5)] group-hover:scale-125 transition-transform duration-500">
                    <CheckCircle2 className="w-4 lg:w-5 h-4 lg:h-5 text-white" />
                  </div>
                  <span className="text-gray-300 text-lg lg:text-2xl font-bold group-hover:text-white transition-colors duration-500 tracking-tight">{feature}</span>
                </div>
              ))}
            </div>

            <Link 
              href="#about" 
              className="inline-flex items-center gap-4 px-12 lg:px-20 py-5 lg:py-8 bg-primary text-white font-black rounded-full hover:bg-primary-dark transition-all shadow-2xl hover:-translate-y-3 active:translate-y-0 group text-sm lg:text-xl uppercase tracking-[0.3em] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10">Our Philosophy</span>
              <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8 group-hover:translate-x-5 transition-transform duration-700 relative z-10" />
            </Link>
          </div>

          {/* Right Image Grid */}
          <div className="why-images relative grid grid-cols-2 gap-6 lg:gap-10 h-[500px] lg:h-[900px]">
            {/* Main Vertical Image */}
            <div className="why-image-item relative h-full rounded-[48px] lg:rounded-[64px] overflow-hidden group shadow-[0_60px_120px_rgba(0,0,0,0.7)] border border-white/10">
              <Image 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop" 
                alt="Tropical Beach"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[5s] ease-out brightness-90 group-hover:brightness-110"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[48px] lg:rounded-[64px] pointer-events-none z-10" />
              
              {/* Badge - Enhanced Visuals */}
              <div className="absolute top-8 left-8 lg:top-14 lg:left-14 bg-white/95 backdrop-blur-2xl rounded-[32px] lg:rounded-[40px] p-5 lg:p-8 shadow-[0_40px_80px_rgba(0,0,0,0.3)] flex items-center gap-5 lg:gap-8 z-20 border border-white group-hover:-translate-y-4 transition-transform duration-700">
                <div className="w-14 h-14 lg:w-24 lg:h-24 rounded-2xl lg:rounded-[32px] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 shadow-inner">
                   <Star className="w-8 h-8 lg:w-12 lg:h-12 text-primary fill-primary drop-shadow-md" />
                </div>
                <div>
                  <div className="text-[12px] lg:text-[16px] font-black text-gray-950 leading-none mb-2 uppercase tracking-widest">Elite Travel</div>
                  <div className="text-[12px] lg:text-[16px] font-black text-primary leading-none uppercase tracking-widest">Academy</div>
                  <div className="flex gap-1.5 mt-3 lg:mt-4">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-3 lg:w-5 h-3 lg:h-5 text-accent-gold fill-accent-gold drop-shadow-md" />)}
                  </div>
                </div>
              </div>
            </div>

            {/* Stacked Images */}
            <div className="grid grid-rows-2 gap-6 lg:gap-10">
              <div className="why-image-item relative rounded-[40px] lg:rounded-[56px] overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.6)] border border-white/10">
                <Image 
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop" 
                  alt="Mountains"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[4s] ease-out brightness-90 group-hover:brightness-110"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[40px] lg:rounded-[56px] pointer-events-none z-10" />
              </div>
              <div className="why-image-item relative rounded-[40px] lg:rounded-[56px] overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.6)] border border-white/10">
                <Image 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop" 
                  alt="Valley"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[4s] ease-out brightness-90 group-hover:brightness-110"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[40px] lg:rounded-[56px] pointer-events-none z-10" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
