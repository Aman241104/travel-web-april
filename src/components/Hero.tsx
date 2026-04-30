"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowUpRight, Play } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: 500, suffix: "+", label: "Destinations" },
  { value: 100, suffix: "%", label: "Bespoke" },
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 2 } });
      
      tl.from(".hero-line-reveal", {
        y: "100%",
        stagger: 0.1,
      })
      .from(".hero-video-frame", {
        scale: 0.8,
        opacity: 0,
        duration: 2,
      }, "-=1.5")
      .from(".hero-fade-in", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
      }, "-=1.8");

      // Parallax for video frame
      gsap.to(".hero-video-frame", {
        y: 100,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      // Parallax for floating stats
      gsap.to(".hero-stat-float", {
        y: -40,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        }
      });
    });

    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    return () => ctx.revert();
  }, [mounted]);

  if (!mounted) return (
    <section className="min-h-screen bg-[#F5F2ED]" />
  );

  return (
    <section 
      ref={containerRef} 
      id="home"
      className="relative min-h-[110vh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#F5F2ED] py-20 lg:py-0 scroll-mt-24"
    >
      <div className="container relative z-10 px-6 max-w-[1600px] mx-auto pt-24 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          <div className="hidden lg:flex lg:col-span-1 h-full items-start justify-center">
            <div className="flex flex-col items-center gap-12 py-12">
              <span className="text-[#1A2421]/20 text-[10px] font-bold uppercase tracking-[0.8em] [writing-mode:vertical-lr] rotate-180">
                Established MMVI
              </span>
              <div className="w-[1px] h-32 bg-[#1A2421]/10" />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col items-start pb-12 lg:pb-32">
            <div className="hero-fade-in mb-10">
              <span className="text-[#C5A267] text-[10px] font-bold uppercase tracking-[0.5em] flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#C5A267]" />
                The Art of Uncommon Travel
              </span>
            </div>

            <h1 className="relative mb-12 flex flex-col">
              <div className="overflow-hidden">
                <span className="hero-line-reveal block font-serif text-[12vw] lg:text-[140px] leading-[0.85] text-[#1A2421] tracking-tighter">
                  Uncommon
                </span>
              </div>
              <div className="overflow-hidden -mt-2 lg:-mt-4 ml-[10vw] lg:ml-[120px]">
                <span className="hero-line-reveal block font-serif italic font-light text-[12vw] lg:text-[140px] leading-[0.85] text-[#C5A267] tracking-tight">
                  Exploration
                </span>
              </div>
            </h1>

            <div className="max-w-lg mb-12 hero-fade-in">
              <p className="font-sans text-[#1A2421]/60 text-lg lg:text-xl leading-relaxed">
                Bespoke itineraries for the discerning soul. Experience a world curated with silent intention and absolute discretion.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 hero-fade-in">
              <MagneticButton className="group relative px-12 py-6 bg-[#1A2421] text-[#F5F2ED] font-bold text-[10px] uppercase tracking-[0.4em] rounded-full overflow-hidden transition-all duration-500">
                <span className="relative z-10 flex items-center gap-3">
                  Begin Your Story <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-[#C5A267] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </MagneticButton>
              
              <button className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-full border border-[#1A2421]/10 flex items-center justify-center group-hover:bg-[#1A2421] group-hover:border-[#1A2421] transition-all duration-500">
                  <Play className="w-4 h-4 fill-[#1A2421] text-[#1A2421] group-hover:fill-[#F5F2ED] group-hover:text-[#F5F2ED]" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A2421]">The Film</span>
                  <span className="text-[9px] text-[#1A2421]/40 uppercase tracking-[0.1em]">2:45 Duration</span>
                </div>
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 relative h-full flex items-end justify-center">
            <div 
              className="hero-video-frame relative w-full aspect-[4/6] lg:w-[120%] lg:mb-[-100px] rounded-2xl overflow-hidden shadow-2xl z-20 bg-[#1A2421]/5"
            >
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                poster="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-full object-cover scale-110"
              >
                <source src="/24541-343454486.mp4" type="video/mp4" />
              </video>
              
              <div className="absolute top-8 right-8 mix-blend-difference">
                <span className="text-white text-[9px] font-bold uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full backdrop-blur-md">
                  Amanjiwo • Indonesia
                </span>
              </div>
            </div>

            <div className="absolute -bottom-20 -left-20 w-64 h-64 border border-[#1A2421]/5 z-10 hidden lg:block" />
          </div>

        </div>
      </div>

      <div className="absolute bottom-10 left-0 w-full z-30 hidden lg:block">
        <div className="container max-w-[1600px] mx-auto px-6">
          <div className="flex items-center justify-between border-t border-[#1A2421]/10 pt-10">
            {stats.map((stat, i) => (
              <div key={i} className="hero-stat-float flex flex-col gap-1">
                <span className="text-[#1A2421] font-serif text-3xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-[#1A2421]/40 text-[9px] font-bold uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
            
            <div className="flex gap-8">
              {["Instagram", "LinkedIn", "Vimeo"].map((social) => (
                <button key={social} className="text-[#1A2421]/30 text-[10px] font-bold uppercase tracking-widest hover:text-[#C5A267] transition-colors">
                  {social}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-10 bottom-1/2 translate-y-1/2 z-30 hidden xl:flex flex-col items-center gap-20">
        <div className="w-[1px] h-32 bg-gradient-to-b from-[#1A2421]/20 via-[#1A2421]/5 to-transparent" />
        <span className="text-[#1A2421]/20 text-[9px] font-bold uppercase tracking-[0.5em] [writing-mode:vertical-lr]">
          Explore the Collection
        </span>
      </div>
    </section>
  );
}
