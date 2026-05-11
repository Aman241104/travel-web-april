"use client";
import { useEffect, useRef } from "react";
import { CheckCircle2, ArrowRight, Plane, Star, Globe, Shield, CreditCard, Headphones } from "lucide-react";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  { title: "Best Price Guarantee", desc: "Luxury experiences curated with competitive global pricing.", icon: CreditCard },
  { title: "Expert Consultants", desc: "Travel architects who design your journey from experience.", icon: Globe },
  { title: "Customized Itineraries", desc: "Every detail tailored to your unique travel personality.", icon: Plane },
  { title: "24/7 Global Support", desc: "Round-the-clock assistance wherever your journey takes you.", icon: Headphones },
];

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Scale Effect
      gsap.fromTo(".why-bg-image", 
        { scale: 1.2 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );

      // Headline Stagger
      gsap.fromTo(".why-headline-line", 
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".why-headline",
            start: "top 80%",
          }
        }
      );

      // Feature Tiles Entrance
      gsap.fromTo(".why-feature-tile", 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".why-features-grid",
            start: "top 75%",
          }
        }
      );

      // Image Parallax Grid
      gsap.to(".why-image-parallax-1", {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(".why-image-parallax-2", {
        y: 40,
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

  return (
    <section id="why-us" ref={containerRef} className="relative py-16 lg:py-28 overflow-hidden bg-[#050807] scroll-mt-24">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full why-bg-image overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2400&auto=format&fit=crop" 
            alt="Majestic Mountain Peaks"
            fill
            className="object-cover opacity-30 mix-blend-luminosity"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050807] via-[#050807]/90 to-[#050807]" />
        {/* Animated Noise/Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Luxury Atmospheric Orbs */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-accent-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          
          {/* Left: Narrative Content */}
          <div className="lg:col-span-6 space-y-10 lg:space-y-12">
            <div className="why-headline space-y-4 lg:space-y-6">
              <span className="font-script text-[22px] lg:text-5xl text-primary block italic opacity-90 drop-shadow-lg">
                The Jade Experience
              </span>
              <h2 className="text-[34px] md:text-[52px] lg:text-[68px] xl:text-[80px] font-sans font-black text-white leading-[0.95] lg:leading-[1] tracking-tightest uppercase">
                <span className="block why-headline-line">Redefining</span>
                <span className="block why-headline-line text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40 italic font-serif font-light lowercase normal-case py-1">global</span>
                <span className="block why-headline-line">Exploration.</span>
              </h2>
              <div className="w-16 lg:w-24 h-[1px] bg-gradient-to-r from-primary to-transparent" />
              <p className="text-[13px] lg:text-xl text-gray-400 leading-relaxed max-w-[540px] font-medium tracking-tight opacity-90">
                Beyond traditional travel agencies, Jade Tours and Travels operates as a boutique travel atelier. We weave dreams into reality through unmatched local expertise and a relentless pursuit of perfection.
              </p>
            </div>

            <div className="why-features-grid grid grid-cols-2 gap-3.5 lg:gap-6">
              {features.map((feature, i) => (
                <div 
                  key={i}
                  className="why-feature-tile p-5 lg:p-8 rounded-[24px] lg:rounded-[32px] bg-white/[0.04] border border-white/[0.08] backdrop-blur-md group hover:bg-white/[0.1] hover:border-primary/30 transition-all duration-700"
                >
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-primary/15 flex items-center justify-center text-primary mb-4 lg:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                    <feature.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                  <h3 className="text-white text-[12px] lg:text-lg font-black tracking-tight mb-1.5 lg:mb-2 uppercase leading-tight">{feature.title}</h3>
                  <p className="text-gray-500 text-[9px] lg:text-sm leading-relaxed font-medium group-hover:text-gray-300 transition-colors duration-500">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 lg:pt-4">
              <MagneticButton 
                className="w-full sm:w-auto px-10 py-5 lg:px-14 lg:py-6 bg-primary text-white font-black rounded-full shadow-[0_20px_60px_rgba(56,142,60,0.3)] hover:bg-primary-dark transition-all group text-[11px] lg:text-xs uppercase tracking-[0.3em] relative overflow-hidden active:scale-95"
              >
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10">Discover Our Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-700 relative z-10" />
              </MagneticButton>
            </div>
          </div>

          {/* Right: Parallax Image Composition */}
          <div className="lg:col-span-6 relative h-[450px] sm:h-[600px] lg:h-[700px] mt-10 lg:mt-0">
            {/* Background Decorative Frame */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[80%] border border-white/[0.05] rounded-[40px] lg:rounded-[60px] pointer-events-none" />
            
            <div className="grid grid-cols-2 gap-4 lg:gap-10 h-full">
              {/* Main Floating Image */}
              <div className="why-image-parallax-1 relative h-[90%] rounded-[24px] lg:rounded-[48px] overflow-hidden group shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-white/10 mt-8 lg:mt-10">
                <Image 
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop" 
                  alt="Elite Travel Destination"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[6s] ease-out brightness-75 group-hover:brightness-100"
                />
                
                {/* Floating Rating Badge */}
                <div className="absolute bottom-6 left-4 right-4 lg:bottom-8 lg:left-8 lg:right-8 bg-white/95 backdrop-blur-2xl rounded-[20px] lg:rounded-[24px] p-4 lg:p-6 shadow-2xl z-20 border border-white transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000">
                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Star className="w-5 h-5 lg:w-6 lg:h-6 text-primary fill-primary" />
                    </div>
                    <div>
                      <div className="text-[10px] lg:text-[11px] font-black text-gray-950 uppercase tracking-widest">Global Luxury</div>
                      <div className="text-[9px] lg:text-[10px] font-bold text-primary uppercase mt-1">Verified Expert</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stacked Secondary Images */}
              <div className="flex flex-col gap-4 lg:gap-10 h-full">
                <div className="why-image-parallax-2 relative h-[45%] rounded-[24px] lg:rounded-[48px] overflow-hidden group shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-white/10">
                  <Image 
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop" 
                    alt="Valley Scene"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-[5s] ease-out brightness-75 group-hover:brightness-100"
                  />
                </div>
                <div className="why-image-parallax-1 relative h-[45%] rounded-[24px] lg:rounded-[48px] overflow-hidden group shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-white/10">
                  <Image 
                    src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop" 
                    alt="Lake Scene"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-[5s] ease-out brightness-75 group-hover:brightness-100"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
