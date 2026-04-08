"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
  { src: "https://images.unsplash.com/photo-1522050212171-61b01dd24579?q=80&w=800&auto=format&fit=crop", rotation: -2, delay: 0 },
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", rotation: 3, delay: 0.1 },
  { src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop", rotation: -1, delay: 0.2 },
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop", rotation: 2, delay: 0.3 },
];

export default function HappyCustomers() {
  return (
    <section className="py-32 md:py-56 bg-white relative overflow-hidden transition-colors duration-1000">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div>
            <span className="text-accent-blue font-sans text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">
              Journal
            </span>
            <h2 className="font-serif text-7xl md:text-[120px] text-onyx leading-[0.85] tracking-tightest mb-16">
              Eternal <br />
              <span className="text-accent-blue italic font-light">Chapters.</span>
            </h2>
            <p className="text-onyx/60 font-sans text-xl leading-relaxed font-medium max-w-md mb-16">
              A collective narrative of extraordinary explorations. Each frame represents a legacy crafted by our team.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-14 h-14 rounded-full border-4 border-white overflow-hidden shadow-xl">
                    <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" width={56} height={56} />
                  </div>
                ))}
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-onyx/30">
                +2,400 Explorers
              </p>
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-8 lg:scale-110">
            {photos.map((photo, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30, rotate: photo.rotation * 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: photo.rotation }}
                viewport={{ once: true }}
                transition={{ delay: photo.delay, duration: 1, ease: "easeOut" }}
                className="relative aspect-[4/5] rounded-[2px] overflow-hidden shadow-2xl bg-white p-2 border border-onyx/5"
              >
                <div className="relative h-full w-full rounded-[1px] overflow-hidden">
                  <Image 
                    src={photo.src} 
                    alt="Explorer" 
                    fill 
                    className="object-cover transition-transform duration-[2000ms] hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
