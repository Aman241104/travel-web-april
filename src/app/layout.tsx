import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/ui/StickyCTA";
import Preloader from "@/components/ui/Preloader";
import CustomCursor from "@/components/ui/CustomCursor";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jadetravels.co.in"),
  title: "Jade Tours & Travel | The Art of Effortless Exploration",
  description: "Bespoke global travel, passport, and visa services tailored for the discerning traveler. 15+ years of discretion and excellence.",
  openGraph: {
    title: "Jade Tours & Travel",
    description: "Curated itineraries and seamless global access.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-jade-white text-jade-darkest selection:bg-gold/30">
      <body className={`${playfair.variable} ${jakarta.variable} font-sans antialiased`}>
        <Preloader />
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
          <StickyCTA />
        </SmoothScroll>
      </body>
    </html>
  );
}
