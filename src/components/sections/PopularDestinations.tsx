"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, MapPin, ArrowRight, Star, Sparkles, Plane, Globe } from "lucide-react";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";
import { useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const destinations = [
  { 
    name: "Santorini", 
    price: "1,10,000", 
    location: "Greece", 
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop",
    tag: "Signature",
    duration: "7 Days",
    rating: "4.9",
    code: "JADE-GR-01"
  },
  { 
    name: "Kyoto", 
    price: "1,65,000", 
    location: "Japan", 
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
    tag: "Cultural",
    duration: "10 Days",
    rating: "4.8",
    code: "JADE-JP-04"
  },
  { 
    name: "Maldives", 
    price: "2,15,000", 
    location: "Indian Ocean", 
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop",
    tag: "Exclusive",
    duration: "5 Days",
    rating: "5.0",
    code: "JADE-MV-09"
  },
  { 
    name: "Swiss Alps", 
    price: "1,95,000", 
    location: "Switzerland", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    tag: "Majestic",
    duration: "8 Days",
    rating: "4.9",
    code: "JADE-CH-02"
  },
  { 
    name: "Dubai", 
    price: "1,35,000", 
    location: "UAE", 
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    tag: "Modernist",
    duration: "6 Days",
    rating: "4.7",
    code: "JADE-AE-07"
  },
];

export default function PopularDestinations() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline Reveal
      gsap.fromTo(".dest-headline-line", 
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".dest-header",
            start: "top 85%",
          }
        }
      );

      // Cards Fan-In Animation
      gsap.fromTo(".dest-card", 
        { x: 100, opacity: 0, rotateY: 30 },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          stagger: 0.15,
          ease: "expo.out",
          duration: 2,
          scrollTrigger: {
            trigger: scrollRef.current,
            start: "top 75%",
          }
        }
      );

      // Parallax Background
      gsap.to(".dest-bg-glow", {
        y: 150,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const currentProgress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setProgress(currentProgress);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 1.5 : scrollLeft + clientWidth / 1.5;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const handleDestinationClick = (dest: typeof destinations[0]) => {
    const message = `Hello Jade Atelier! I am interested in the ${dest.name} package (${dest.code}).\n\n` +
      `🌍 DESTINATION: ${dest.name}, ${dest.location}\n` +
      `⏱️ DURATION: ${dest.duration}\n` +
      `🏷️ COLLECTION: ${dest.tag}\n` +
      `💰 STARTING PRICE: ₹${dest.price}\n\n` +
      `Please provide more details on this curated experience.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919825438324?text=${encodedMessage}`, '_blank');
  };

  const handleCommissionClick = () => {
    const message = `Hello Jade Atelier! I am seeking a personal sanctuary curation for a destination beyond the public anthology.\n\n` +
      `I would like to speak with a travel architect about designing a bespoke journey.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919825438324?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="packages" ref={containerRef} className="relative py-16 lg:py-28 bg-[#020504] overflow-hidden scroll-mt-24">
      
      {/* Immersive Cinematic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="dest-bg-glow absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/[0.08] rounded-full blur-[160px] -translate-y-1/2 translate-x-1/3" />
        <div className="dest-bg-glow absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent-gold/[0.04] rounded-full blur-[140px] translate-y-1/2 -translate-x-1/3" />
        {/* Film Grain Effect */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Header Section */}
        <div className="dest-header flex flex-col lg:flex-row lg:items-end justify-between mb-10 lg:mb-20 gap-8 lg:gap-12">
          <div className="max-w-4xl space-y-6 lg:space-y-8">
            <div className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.6em] text-[10px] lg:text-[11px] mb-2 lg:mb-4">
              <span className="w-8 h-[1px] bg-primary/30" />
              Global Anthology
            </div>
            
            <h2 className="text-[32px] md:text-[52px] lg:text-[68px] xl:text-[84px] font-sans font-black text-white leading-[1] tracking-tightest uppercase">
              <span className="block dest-headline-line">The World&apos;s</span>
              <span className="block dest-headline-line text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary/40 italic font-serif font-light lowercase">Exclusive</span>
              <span className="block dest-headline-line">Horizon.</span>
            </h2>
            
            <p className="text-gray-500 text-[13px] lg:text-xl leading-relaxed max-w-2xl font-medium tracking-tight">
              A curated anthology of the globe&apos;s most coveted retreats. Hand-picked for the traveler who views every journey as an essential masterpiece of life.
            </p>
          </div>
          
          <div className="flex flex-col gap-8">
            <div className="flex gap-4 lg:gap-6">
              <button 
                onClick={() => scroll("left")}
                className="w-14 h-14 lg:w-20 lg:h-20 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] text-white hover:bg-primary hover:border-primary transition-all duration-700 shadow-2xl group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                <ChevronLeft className="w-6 h-6 lg:w-10 lg:h-10 relative z-10 group-hover:scale-110 transition-all" />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="w-14 h-14 lg:w-20 lg:h-20 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] text-white hover:bg-primary hover:border-primary transition-all duration-700 shadow-2xl group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                <ChevronRight className="w-6 h-6 lg:w-10 lg:h-10 relative z-10 group-hover:scale-110 transition-all" />
              </button>
            </div>
            {/* Custom Progress Bar */}
            <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute inset-0 bg-primary origin-left"
                style={{ scaleX: progress / 100 }}
              />
            </div>
          </div>
        </div>

        {/* Cinematic Anthology Slider */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 lg:gap-16 overflow-x-auto no-scrollbar pb-16 lg:pb-32 snap-x snap-mandatory px-4 lg:px-0"
        >
          {destinations.map((dest, i) => (
            <div
              key={i}
              onClick={() => handleDestinationClick(dest)}
              className="dest-card min-w-[280px] md:min-w-[480px] lg:min-w-[750px] group snap-start relative h-[420px] lg:h-[700px] rounded-[32px] lg:rounded-[64px] overflow-hidden cursor-pointer shadow-[0_50px_100px_rgba(0,0,0,0.6)] border border-white/5 bg-gray-950 transition-all duration-1000 perspective-2000"
            >
              <Image 
                src={dest.image} 
                alt={dest.name} 
                fill 
                className="object-cover transition-transform duration-[6s] group-hover:scale-110 ease-out brightness-[0.6] group-hover:brightness-90" 
              />
              
              {/* Complex Cinematic Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020504] via-transparent to-[#020504]/40 opacity-90" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[32px] lg:rounded-[64px] z-20 pointer-events-none" />
              
              {/* Premium Ticket Info - Left */}
              <div className="absolute top-6 lg:top-10 left-6 lg:left-10 z-30 flex flex-col gap-4 lg:gap-8 transition-transform duration-1000 group-hover:-translate-y-2">
                <div className="flex flex-col gap-1">
                  <span className="text-[8px] lg:text-[10px] font-black text-primary uppercase tracking-[0.5em]">Boarding Pass</span>
                  <span className="text-[9px] lg:text-[12px] font-bold text-white/40 tracking-widest">{dest.code}</span>
                </div>
                <div className="w-8 lg:w-12 h-[1px] bg-white/10" />
                <div className="flex flex-col gap-1">
                  <span className="text-[8px] lg:text-[10px] font-black text-primary uppercase tracking-[0.5em]">Collection</span>
                  <span className="text-[9px] lg:text-[13px] font-black text-white tracking-[0.2em] uppercase">{dest.tag}</span>
                </div>
              </div>

              {/* Price Reveal - Top Right */}
              <div className="absolute top-6 lg:top-10 right-6 lg:right-10 z-30 overflow-hidden rounded-full">
                <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-full px-4 py-3 lg:px-10 lg:py-6 shadow-2xl flex items-center gap-3 lg:gap-4 group-hover:bg-primary transition-all duration-1000">
                  <div className="flex flex-col items-end">
                    <span className="text-[8px] lg:text-[10px] font-black text-white/50 uppercase tracking-widest group-hover:text-white transition-colors">Starting At</span>
                    <span className="text-base lg:text-3xl font-black text-white tracking-tightest">₹{dest.price}</span>
                  </div>
                  <div className="w-6 h-6 lg:w-12 lg:h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-1000">
                    <Plane className="w-3 h-3 lg:w-6 lg:h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Bottom Discovery Module - Ticket Styled */}
              <div className="absolute bottom-4 left-4 right-4 lg:bottom-12 lg:left-12 lg:right-12 z-30">
                <div className="relative p-6 lg:p-14 rounded-[32px] lg:rounded-[56px] bg-white/[0.02] backdrop-blur-3xl border border-white/10 overflow-hidden group/info transition-all duration-1000 group-hover:bg-white/[0.05] group-hover:border-white/20">
                  
                  {/* Visual Ticket Perforation */}
                  <div className="absolute top-0 left-0 w-full h-[1px] border-t border-dashed border-white/10 pointer-events-none" />
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#020504] border border-white/10" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6 lg:mb-12">
                      <div className="flex items-center gap-3 lg:gap-4 text-primary font-black text-[9px] lg:text-[12px] uppercase tracking-[0.5em] lg:tracking-[0.6em] transition-all duration-1000 group-hover:translate-x-4">
                        <Globe className="w-3.5 h-3.5 lg:w-6 lg:h-6" />
                        {dest.location}
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                        <Star className="w-3 lg:w-5 h-3 lg:h-5 text-accent-gold fill-accent-gold" />
                        <span className="text-[9px] lg:text-[12px] font-black text-white tracking-widest">{dest.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl lg:text-[56px] font-sans font-black text-white mb-6 lg:mb-14 leading-[0.9] tracking-tightest uppercase transition-all duration-1000 group-hover:text-primary group-hover:scale-105 origin-left">
                      {dest.name}
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-6 lg:gap-20">
                        <div className="flex flex-col gap-1">
                          <span className="text-[8px] lg:text-[11px] font-black text-white/30 uppercase tracking-[0.3em] lg:tracking-[0.4em]">Time</span>
                          <span className="text-xs lg:text-xl font-bold text-white tracking-[0.1em]">{dest.duration}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[8px] lg:text-[11px] font-black text-white/30 uppercase tracking-[0.3em] lg:tracking-[0.4em]">Status</span>
                          <div className="flex items-center gap-1.5">
                            <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-primary animate-pulse" />
                            <span className="text-xs lg:text-xl font-black text-primary tracking-[0.1em] lg:tracking-[0.2em] uppercase">Private</span>
                          </div>
                        </div>
                      </div>

                      <div className="w-12 h-12 lg:w-24 lg:h-24 rounded-2xl lg:rounded-[36px] bg-primary text-white flex items-center justify-center shadow-3xl transition-all duration-1000 hover:bg-white hover:text-primary group-hover:scale-110 group-hover:rotate-6">
                        <ArrowRight className="w-6 h-6 lg:w-12 lg:h-12" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Footer - Curated Request */}
        <div className="mt-20 lg:mt-32 flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/[0.02] backdrop-blur-2xl rounded-[40px] lg:rounded-[64px] p-8 lg:p-16 border border-white/10 shadow-[0_60px_120px_rgba(0,0,0,0.5)] group/footer overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="max-w-2xl space-y-6 relative z-10 text-center lg:text-left">
            <h4 className="text-2xl lg:text-[48px] font-sans font-black text-white leading-[1] tracking-tightest uppercase">
              Seek Your <br />
              <span className="text-primary italic font-serif font-light lowercase">Personal</span> Sanctuary.
            </h4>
            <p className="text-gray-500 text-sm lg:text-xl font-medium leading-relaxed max-w-xl">
              Our travel architects specialize in the unattainable. Request a private curation for destinations beyond our public anthology.
            </p>
          </div>
          
          <MagneticButton 
            onClick={handleCommissionClick}
            className="w-full lg:w-auto px-12 py-6 lg:px-20 lg:py-8 bg-primary text-white font-black rounded-[24px] lg:rounded-[32px] transition-all shadow-[0_30px_70px_rgba(56,142,60,0.4)] group flex items-center justify-center gap-6 uppercase tracking-[0.4em] text-[11px] lg:text-xs relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            <span className="relative z-10">Commission A Journey</span>
            <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8 relative z-10 group-hover:translate-x-4 transition-transform duration-700" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
