"use client";

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Hero from "@/components/Hero";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}
import ServicesList from "@/components/ServicesList";
import EditorialMarquee from "@/components/EditorialMarquee";
import USP from "@/components/sections/USP";
import ValuesSection from "@/components/sections/ValuesSection";

const PopularDestinations = dynamic(() => import("@/components/sections/PopularDestinations"), { ssr: false });
const TravelerSection = dynamic(() => import("@/components/luxury/TravelerSection"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/luxury/Testimonials"), { ssr: false });
const CTASection = dynamic(() => import("@/components/CTASection"), { ssr: false });
const InstagramFeed = dynamic(() => import("@/components/sections/InstagramFeed"), { ssr: false });

export default function Home() {
    useEffect(() => {
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      "name": "Jade Tours & Travel",
      "image": "https://jadetravels.co.in/assets/image.png",
      "@id": "https://jadetravels.co.in",
      "url": "https://jadetravels.co.in",
      "telephone": "+919825438324",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ahmedabad",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "380001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 23.0225,
        "longitude": 72.5714
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "10:00",
        "closes": "19:00"
      },
      "sameAs": [
        "https://www.instagram.com/jade.travels/"
      ]
    };

    return (
        <main className="bg-[#0B1310] min-h-screen relative overflow-clip">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="relative z-30 bg-[#0B1310] shadow-2xl">
                {/* Hero Section */}
                <Hero />

                {/* Values / Why Choose Us */}
                <ValuesSection />

                {/* Destinations */}
                <PopularDestinations />

                {/* Services / What We Do */}
                <ServicesList />

                {/* Process / Expertise */}
                <USP />

                {/* Voices of Discerning Travelers */}
                <Testimonials />

                {/* About / Our Story */}
                <TravelerSection />

                {/* Decorative Marquee - Editorial Cinematic Ribbon */}
                <EditorialMarquee />

                {/* Journal / Instagram Feed */}
                <InstagramFeed />
            </div>

            {/* Final Conversion Point */}
            <CTASection />
        </main>
    );
}
