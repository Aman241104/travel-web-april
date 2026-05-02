"use client";

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from "@/components/Hero";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}
import ServicesList from "@/components/ServicesList";
import USP from "@/components/sections/USP";
import ValuesSection from "@/components/sections/ValuesSection";
import TrustSection from "@/components/sections/TrustSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import StatsBar from "@/components/sections/StatsBar";

const PopularDestinations = dynamic(() => import("@/components/sections/PopularDestinations"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/luxury/Testimonials"), { ssr: false });
const CTASection = dynamic(() => import("@/components/CTASection"), { ssr: false });
const InstagramFeed = dynamic(() => import("@/components/sections/InstagramFeed"), { ssr: false });

export default function Home() {
    useEffect(() => {
        // Advanced robust initialization
        const handleLoad = () => {
            ScrollTrigger.refresh(true); // Force a complete recalculation
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        // More frequent refreshes during the first few seconds to catch dynamic content (like lazy loaded images)
        const timers = [500, 1000, 2000, 3000].map(ms => setTimeout(() => ScrollTrigger.refresh(true), ms));
        
        // Listen for all image loads in case native lazy loading delays them
        const images = document.querySelectorAll('img');
        const imgLoadHandler = () => ScrollTrigger.refresh();
        images.forEach(img => {
            if (!img.complete) {
                img.addEventListener('load', imgLoadHandler);
            }
        });

        return () => {
            window.removeEventListener('load', handleLoad);
            timers.forEach(clearTimeout);
            images.forEach(img => img.removeEventListener('load', imgLoadHandler));
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
        <main className="bg-white min-h-screen relative font-sans">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="relative z-30 bg-white">
                {/* 1. Navbar handled in layout */}

                {/* 2. Hero Section */}
                <Hero />

                {/* 4. Trust Section */}
                <TrustSection />

                {/* 4.5 Why Choose Us (Contrast) */}
                <WhyChooseUs />

                {/* 5. Services Section (Grid) */}
                <ServicesList />

                {/* 6. Brand Values Section */}
                <ValuesSection />

                {/* 7. Destinations Section */}
                <PopularDestinations />

                {/* 8. Testimonials */}
                <Testimonials />

                {/* 9. Process / Expertise */}
                <USP />

                {/* 10. Instagram Feed */}
                <InstagramFeed />

                {/* 11. CTA Section */}
                <CTASection />

                {/* 12. Footer handled in layout */}
            </div>
        </main>
    );
}
