"use client";
import Image from "next/image";

export default function TravelerSection() {
  return (
    <section className="py-24 md:py-48 bg-bg-light overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-brand-teal font-sans text-xs font-bold uppercase tracking-[0.3em] mb-8 block">
              The Architects of Adventure
            </span>
            
            <h2 className="font-serif text-5xl md:text-8xl leading-tight tracking-tight mb-12 text-onyx">
              Experts in <br />
              <span className="text-brand-teal italic font-light">The Art of Travel</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-onyx/60 font-sans text-lg leading-relaxed">
              <p>
                With over 15 years of dedicated experience, Jigar Shah and Dhara Patel bring unparalleled expertise to every journey.
              </p>
              <p>
                Our deep industry connections and meticulous attention to detail ensure a seamless, high-touch experience from first consultation to return.
              </p>
            </div>
            
            <div className="mt-16 pt-12 border-t border-onyx/10 flex flex-wrap items-start gap-12 md:gap-24">
              <div>
                <p className="font-serif text-3xl text-onyx mb-2">Jigar Shah</p>
                <p className="text-[10px] uppercase tracking-widest text-brand-teal font-bold mb-4">Proprietor</p>
                <div className="space-y-1">
                  <p className="text-xs font-sans text-onyx/60">+91 98254 38324</p>
                  <p className="text-xs font-sans text-onyx/60">jigar@jadetravels.co.in</p>
                </div>
              </div>
              <div>
                <p className="font-serif text-3xl text-onyx mb-2">Dhara Patel</p>
                <p className="text-[10px] uppercase tracking-widest text-brand-teal font-bold mb-4">Tours & Packages</p>
                <div className="space-y-1">
                  <p className="text-xs font-sans text-onyx/60">+91 99044 55127</p>
                  <p className="text-xs font-sans text-onyx/60">dhara@jadetravels.co.in</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/assets/generated-expert.png"
                alt="Jade Travels Experts"
                fill
                className="object-cover transition-transform duration-[1.5s] hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-onyx/5">
              <p className="font-serif text-2xl text-onyx mb-1">Established 2011</p>
              <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-brand-teal">Ahmedabad, Gujarat</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
