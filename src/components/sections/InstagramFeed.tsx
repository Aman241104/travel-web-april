"use client";
import Image from "next/image";
import { Camera } from "lucide-react";

const feed = [
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504280390226-11f81018ab35?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=800&auto=format&fit=crop",
];

export default function InstagramFeed() {
  return (
    <section className="py-32 md:py-56 bg-white relative overflow-hidden transition-colors duration-1000">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
          <div>
            <span className="text-accent-blue font-sans text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">
              Gallery
            </span>
            <h2 className="font-serif text-5xl md:text-[120px] text-onyx leading-[0.95] tracking-tightest">
              Follow <br />
              <span className="text-accent-blue italic font-light underline decoration-accent-blue/10 underline-offset-8">Us.</span>
            </h2>
          </div>
          <button className="flex items-center gap-6 px-12 py-6 bg-bg-light border border-onyx/5 text-onyx text-[10px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-onyx hover:text-white transition-all duration-500 group">
            <Camera className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Join @JadeTravels
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {feed.map((src, i) => (
            <div key={i} className="relative aspect-square rounded-[2px] overflow-hidden group cursor-pointer shadow-2xl border border-onyx/5">
              <Image 
                src={src} 
                alt="Feed" 
                fill 
                className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
              <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/20 transition-colors duration-500 flex items-center justify-center">
                <Camera className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-10 h-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
