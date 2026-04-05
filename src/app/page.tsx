import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Tours from "@/components/sections/Tours";
import Contact from "@/components/sections/Contact";
import Testimonials from "@/components/sections/Testimonials";
import WhyJade from "@/components/sections/WhyJade";
import MoodBoard from "@/components/sections/MoodBoard";

export default function Home() {
  return (
    <main className="relative bg-cream">
      <Hero />
      <MoodBoard />
      <div className="relative z-10 bg-white">
        <Services />
      </div>
      <WhyJade />
      <Tours />
      <Testimonials />
      <Contact />
    </main>
  );
}
