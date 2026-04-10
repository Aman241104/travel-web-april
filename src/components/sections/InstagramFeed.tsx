"use client";
import Image from "next/image";
import { Camera } from "lucide-react";

const feed = [
  { src: "/images/instagram/1.jpg", link: "https://www.instagram.com/p/DW6mzBBjEi_/" },
  { src: "/images/instagram/2.jpg", link: "https://www.instagram.com/p/DW1khrdjMGq/" },
  { src: "/images/instagram/3.jpg", link: "https://www.instagram.com/p/DWzAa5OjBOY/" },
  { src: "/images/instagram/4.jpg", link: "https://www.instagram.com/p/DWwfZ-4jNeO/" },
  { src: "/images/instagram/5.jpg", link: "https://www.instagram.com/p/DWt_BOODOrP/" },
  { src: "/images/instagram/6.jpg", link: "https://www.instagram.com/p/DWrVCT0ku8b/" },
];

export default function InstagramFeed() {
  return (
    <section className="py-24 md:py-32 bg-brand-yellow relative overflow-hidden transition-colors duration-1000">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16 px-4">
          <span className="text-brand-navy font-sans text-xs font-semibold uppercase tracking-widest mb-4 block">
            Gallery
          </span>
          <h2 className="font-serif text-5xl md:text-[80px] text-onyx leading-[1.1] tracking-tight">
            Stories and <br />
            <span className="text-brand-teal italic font-light">Inspirations.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 pt-10 pb-10 max-w-4xl mx-auto">
          {feed.map((item, i) => (
            <a 
              key={i} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`relative aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-lg border-2 md:border-4 border-white transform transition-transform hover:scale-105 hover:z-10 ${i % 2 === 0 ? '-rotate-1 md:-rotate-2 hover:rotate-0' : 'rotate-1 md:rotate-2 hover:rotate-0'}`}
            >
              <Image 
                src={item.src} 
                alt="Instagram Feed" 
                fill 
                className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/20 transition-colors duration-500 flex items-center justify-center">
                <Camera className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-8 h-8" />
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-4 px-10 py-5 bg-white text-brand-navy text-xs font-bold uppercase tracking-widest rounded-full hover:bg-bg-light hover:scale-105 transition-all duration-300 shadow-xl">
            <Camera className="w-4 h-4" />
            Join @JadeTravels
          </button>
        </div>
      </div>
    </section>
  );
}
