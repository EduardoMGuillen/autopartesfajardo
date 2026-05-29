import { About } from "@/components/About";
import { BrandCarousel } from "@/components/BrandCarousel";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LocationsSection } from "@/components/LocationsSection";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <BrandCarousel />
        <About />
        <LocationsSection />
        <Testimonials />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
