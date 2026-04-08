"use client";
import Image from "next/image";

export default function TravelerSection() {
  return (
    <section className="py-32 md:py-56 bg-white dark:bg-onyx relative overflow-hidden transition-colors duration-1000">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-accent-blue font-sans text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">
              Curators
            </span>
            
            <h2 className="font-serif text-7xl md:text-[140px] leading-[0.8] tracking-tightest mb-16 text-onyx dark:text-white">
              Architects <br />
              <span className="text-accent-blue italic font-light">of Narrative.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-onyx/60 dark:text-white/60 font-sans text-lg leading-relaxed font-medium">
              <p>
                Defining the geometry of travel for over 15 years. Jigar Shah and Dhara Patel engineer moments that transcend the ordinary.
              </p>
              <p>
                Our technical mastery ensures that your personal story unfolds with absolute fluidity and effortless grace.
              </p>
            </div>
            
            <div className="mt-24 pt-16 border-t border-onyx/10 dark:border-white/10 flex items-center gap-16">
              <div>
                <p className="font-serif text-6xl text-accent-blue mb-2 tracking-tighter leading-none">15+</p>
                <p className="text-[9px] uppercase tracking-[0.4em] text-onyx/40 dark:text-white/40 font-black">Years Mastery</p>
              </div>
              <div className="w-[1px] h-16 bg-onyx/10 dark:bg-white/10" />
              <div>
                <p className="font-serif text-6xl text-white dark:text-white mb-2 tracking-tighter leading-none mix-blend-difference">5K+</p>
                <p className="text-[9px] uppercase tracking-[0.4em] text-onyx/40 dark:text-white/40 font-black">Missions Led</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-[2px] overflow-hidden shadow-2xl z-10 bg-white dark:bg-onyx border border-onyx/5 dark:border-white/5">
              <Image 
                src="https://images.unsplash.com/photo-1542314831-c6a4d14cdce8?q=80&w=1200&auto=format&fit=crop"
                alt="Jigar Shah"
                fill
                className="object-cover transition-all duration-[1500ms] hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            
            <div className="absolute -bottom-10 right-10 bg-onyx dark:bg-white px-12 py-10 rounded-[2px] shadow-2xl z-20 transition-transform duration-500">
              <p className="font-serif text-3xl text-white dark:text-onyx leading-none mb-2 tracking-tighter">Jigar Shah</p>
              <p className="font-sans text-[10px] uppercase tracking-[0.5em] text-accent-blue font-black">Principal</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
