"use client";

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import USP from "@/components/sections/USP";
import ValuesSection from "@/components/sections/ValuesSection";
import Preloader from "@/components/ui/Preloader";

const PopularDestinations = dynamic(() => import("@/components/sections/PopularDestinations"));
const TravelerSection = dynamic(() => import("@/components/luxury/TravelerSection"));
const Testimonials = dynamic(() => import("@/components/luxury/Testimonials"));
const CTASection = dynamic(() => import("@/components/CTASection"));
const TapeMarquee = dynamic(() => import("@/components/TapeMarquee"));
const InstagramFeed = dynamic(() => import("@/components/sections/InstagramFeed"));

export default function Home() {
    const handleLoadingComplete = () => {
        ScrollTrigger.refresh();
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 3000); // Fail-safe refresh
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="bg-bg-light min-h-screen relative overflow-clip">
            <Preloader onLoadingComplete={handleLoadingComplete} />

            <div className="relative z-30 bg-bg-light shadow-2xl">
                {/* Hero Section */}
                <Hero />

                {/* Values / Why Choose Us */}
                <ValuesSection />

                {/* Destinations */}
                <PopularDestinations />

                {/* Services / What We Do */}
                <ServicesGrid />

                {/* Process / Expertise */}
                <USP />

                {/* Voices of Discerning Travelers */}
                <Testimonials />

                {/* About / Our Story */}
                <TravelerSection />

                {/* Decorative Marquee - Editorial Dual Tape */}
                <section id="marquee-bottom" className="relative z-20 py-24 md:py-32 overflow-hidden bg-white scroll-mt-24">
                    <div className="flex flex-col gap-6 md:gap-10">
                      <div className="relative z-10">
                        <TapeMarquee 
                          reverse 
                          rotate={-1.5} 
                          speed={50} 
                          text="Bespoke Travel • Expert Curation • Global Access • Unparalleled Luxury • " 
                        />
                      </div>
                      <div className="relative z-0 md:-mt-24">
                        <TapeMarquee 
                          outline 
                          rotate={1.5} 
                          speed={40} 
                          text="Curated Discovery • Private Aviation • Sanctuary Access • Elite Concierge • " 
                        />
                      </div>
                    </div>
                </section>

                {/* Journal / Instagram Feed */}
                <InstagramFeed />
            </div>

            {/* Final Conversion Point */}
            <CTASection />
        </main>
    );
}
