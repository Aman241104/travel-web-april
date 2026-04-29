"use client";

import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import USP from "@/components/sections/USP";

const PopularDestinations = dynamic(() => import("@/components/sections/PopularDestinations"));
const TravelerSection = dynamic(() => import("@/components/luxury/TravelerSection"));
const Testimonials = dynamic(() => import("@/components/luxury/Testimonials"));
const CTASection = dynamic(() => import("@/components/CTASection"));
const TapeMarquee = dynamic(() => import("@/components/TapeMarquee"));
const InstagramFeed = dynamic(() => import("@/components/sections/InstagramFeed"));
const HappyCustomers = dynamic(() => import("@/components/sections/HappyCustomers"));

export default function Home() {
    return (
        <main className="bg-bg-light min-h-screen relative overflow-x-hidden">

            <div className="relative z-30 bg-bg-light shadow-2xl">
                <section id="home" className="scroll-mt-24">
                    <Hero />
                </section>

                <section id="packages" className="scroll-mt-24">
                    <PopularDestinations />
                </section>

                <section id="services" className="scroll-mt-24">
                    <ServicesGrid />
                </section>

                <section id="process" className="scroll-mt-24">
                    <USP />
                </section>

                <section id="testimonials" className="scroll-mt-24">
                    <Testimonials />
                </section>

                <section id="about" className="scroll-mt-24">
                    <TravelerSection />
                </section>

                <section id="marquee-bottom" className="relative z-20 py-16 md:py-24 overflow-hidden bg-white">
                    <TapeMarquee reverse rotate={1} speed={30} text="Bespoke Travel • Expert Curation • Global Access • Unparalleled Luxury • " />
                </section>

                <section id="journal" className="scroll-mt-24">
                    <InstagramFeed />
                </section>
            </div>

            <section id="contact" className="scroll-mt-24">
                <CTASection />
            </section>
        </main>
    );
}