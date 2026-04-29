"use client";
import Image from "next/image";
import { Camera } from "lucide-react";
import { motion } from "framer-motion";

const feed = [
  { src: "/images/instagram/1.jpg", link: "#" },
  { src: "/images/instagram/2.jpg", link: "#" },
  { src: "/images/instagram/3.jpg", link: "#" },
  { src: "/images/instagram/4.jpg", link: "#" },
  { src: "/images/instagram/5.jpg", link: "#" },
  { src: "/images/instagram/6.jpg", link: "#" },
];

export default function InstagramFeed() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-brand-teal font-sans text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Digital Journal
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-onyx leading-tight tracking-tight">
              Stories and <br />
              <span className="italic font-light text-brand-teal">Inspirations</span>
            </h2>
          </div>
          <button className="group flex items-center gap-3 font-sans text-sm font-bold uppercase tracking-widest text-onyx hover:text-brand-teal transition-colors">
            <Camera className="w-5 h-5" />
            <span>@JadeTravels</span>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {feed.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.8 }}
            >
              <a 
                href={item.link} 
                className="relative aspect-square block overflow-hidden rounded-xl group"
              >
                <Image 
                  src={item.src} 
                  alt="Gallery Image" 
                  fill 
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />
                <div className="absolute inset-0 bg-onyx/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <Camera className="text-white w-6 h-6" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
