"use client";

import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import USP from "@/components/sections/USP";
import StatsBar from "@/components/sections/StatsBar";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ArrowRight } from 'lucide-react';

const PopularDestinations = dynamic(() => import("@/components/sections/PopularDestinations"));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ServicesGrid = dynamic(() => import("@/components/ServicesGrid"));
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

                {/* 1. Stats Bar (Tripzen Style) */}
                <StatsBar />

                <section id="marquee-top" className="relative z-20 py-8 md:py-12 overflow-hidden">
                    <TapeMarquee />
                </section>

                {/* 2. Packages Section (Popular Destinations) */}
                <section id="packages" className="scroll-mt-24">
                    <PopularDestinations />
                </section>

                {/* 3. USP Section (Why Choose Us) */}
                <section id="usp" className="scroll-mt-24">
                    <USP />
                </section>

                {/* 5. Testimonials Section */}
                <section id="testimonials" className="scroll-mt-24">
                    <Testimonials />
                </section>

                {/* 6. About the Captain */}
                <section id="about" className="scroll-mt-24">
                    <TravelerSection />
                </section>

                {/* 7. Happy Customers Section */}
                <section id="happy-customers" className="scroll-mt-24">
                    <HappyCustomers />
                </section>

                <section id="marquee-bottom" className="relative z-20 py-8 md:py-12 overflow-hidden">
                    <TapeMarquee reverse rotate={1} speed={30} text="Easy Travel • Expert Planning • Great Memories • Your Story • " />
                </section>

                <section id="journal" className="scroll-mt-24">
                    <InstagramFeed />
                </section>
            </div>

            {/* 8. Contact Us Section */}
            <section id="contact" className="scroll-mt-24">
                <CTASection />
            </section>
        </main>
    );
}