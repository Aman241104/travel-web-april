import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/ui/StickyCTA";
import Preloader from "@/components/ui/Preloader";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";

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
  description: "Bespoke global travel, passport, and visa services tailored for the discerning traveler. 15+ years of discretion and excellence in Ahmedabad, Gujarat.",
  keywords: ["luxury travel", "visa assistance", "passport services", "bespoke tours", "Jade Travels", "Jigar Shah", "Dhara Patel", "Ahmedabad travel agency"],
  authors: [{ name: "Jade Tours & Travel" }],
  openGraph: {
    title: "Jade Tours & Travel | The Art of Effortless Exploration",
    description: "Curated itineraries and seamless global access. Bespoke travel services for the modern nomad.",
    images: [{
      url: "/assets/image.png",
      width: 1200,
      height: 630,
      alt: "Jade Tours & Travel"
    }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jade Tours & Travel",
    description: "Bespoke global travel, passport, and visa services.",
    images: ["/assets/image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${playfair.variable} ${jakarta.variable} font-sans antialiased bg-[#0B1310] text-[#F2EFE9]`} suppressHydrationWarning>
        <ScrollProgress />
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
