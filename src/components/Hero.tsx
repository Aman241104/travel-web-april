"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowRight, Play } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: 500, suffix: "+", label: "Destinations" },
  { value: 100, suffix: "%", label: "Tailored" },
  { value: 24, suffix: "/7", label: "Concierge" },
];

const CountUp = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = gsap.to({ val: 0 }, {
      val: value,
      duration: 2.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: node,
        start: "top 95%",
      },
      onUpdate: function() {
        setCount(Math.floor(this.targets()[0].val));
      }
    });

    return () => controls.kill();
  }, [value]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 5]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.1]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entry Animation
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });
      
      tl.from(".hero-char", {
        y: 150,
        opacity: 0,
        rotate: 10,
        stagger: 0.02,
        duration: 1.2,
      })
      .from(".hero-media-reveal", {
        scale: 0.8,
        opacity: 0,
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 2,
      }, "-=1")
      .from(".hero-fade-in", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
      }, "-=1.5");

      // Parallax for the video container
      gsap.to(".hero-media-parallax", {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="hero-char inline-block whitespace-pre">
        {char}
      </span>
    ));
  };

  return (
    <section 
      ref={containerRef} 
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0F2F2A] py-20 lg:py-0 scroll-mt-24"
    >
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#6FC3B2]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#D4AF37]/5 blur-[120px] rounded-full" />
      </div>

      <div className="container relative z-10 px-6 max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Side */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="hero-fade-in mb-8">
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[#6FC3B2] text-[10px] font-bold uppercase tracking-[0.4em]">
                Bespoke Travel Curation
              </span>
            </div>

            <h1 ref={headlineRef} className="relative mb-10 overflow-hidden">
              <span className="block font-sans text-white text-[12px] font-bold uppercase tracking-[0.6em] mb-4 hero-fade-in opacity-60">
                Redefining the journey
              </span>
              <span className="block font-serif text-6xl md:text-[100px] lg:text-[120px] leading-[0.9] text-white tracking-tighter">
                {splitText("Exquisite")}
              </span>
              <span className="block font-serif italic text-6xl md:text-[100px] lg:text-[120px] leading-[0.9] text-[#6FC3B2] tracking-tight ml-4 md:ml-20">
                {splitText("Journeys")}
              </span>
            </h1>

            <div className="max-w-xl mb-12 hero-fade-in">
              <p className="font-sans text-[#D6E2DF]/70 text-lg md:text-xl leading-relaxed tracking-wide">
                Where every detail is an intentional masterpiece. 
                Experience a world curated specifically for your unique vision.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 hero-fade-in">
              <MagneticButton className="group relative px-10 py-5 bg-[#6FC3B2] text-[#0F2F2A] font-bold text-[11px] uppercase tracking-[0.3em] rounded-full overflow-hidden transition-all duration-500">
                <span className="relative z-10 flex items-center gap-3">
                  Inquire Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </MagneticButton>
              
              <button className="flex items-center gap-4 text-white group">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#6FC3B2] group-hover:border-[#6FC3B2] transition-all duration-500">
                  <Play className="w-4 h-4 fill-white group-hover:fill-[#0F2F2A] group-hover:text-[#0F2F2A]" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] group-hover:text-[#6FC3B2] transition-colors">Watch Film</span>
              </button>
            </div>
          </div>

          {/* Media Side */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              style={{ scale }}
              className="hero-media-reveal hero-media-parallax relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/50"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover scale-110"
              >
                <source src="/24541-343454486.mp4" type="video/mp4" />
              </video>
              
              {/* Floating Overlay Info */}
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-black/20 backdrop-blur-xl border border-white/10">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Current Feature</p>
                    <h3 className="text-white font-serif text-2xl">Amanjiwo, Indonesia</h3>
                  </div>
                  <div className="text-[#D4AF37]">
                    <span className="text-[10px] font-bold uppercase tracking-widest">Luxury</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Stats Panel */}
            <div className="absolute top-1/2 -left-12 -translate-y-1/2 hidden xl:block space-y-4">
              {stats.map((stat, i) => (
                <div 
                  key={i}
                  className="hero-fade-in p-6 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl min-w-[160px] transform hover:scale-105 transition-transform duration-500"
                >
                  <p className="text-white font-serif text-3xl mb-1">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-[#6FC3B2] text-[9px] font-bold uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Side Decorative Elements */}
      <div className="absolute left-10 bottom-10 z-20 hidden lg:block">
        <div className="flex items-center gap-6">
          <div className="w-12 h-[1px] bg-white/20" />
          <span className="text-white/30 text-[9px] font-bold uppercase tracking-[0.4em] [writing-mode:vertical-lr] rotate-180">
            Scroll to explore
          </span>
        </div>
      </div>

      <div className="absolute right-10 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-10">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="flex flex-col gap-6">
          {["IG", "FB", "LI"].map((social) => (
            <button key={social} className="text-white/30 text-[10px] font-bold hover:text-[#6FC3B2] transition-colors">
              {social}
            </button>
          ))}
        </div>
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>
    </section>
  );
}
