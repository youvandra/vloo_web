import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { InteractiveFeatureSection } from "@/components/sections/InteractiveFeatureSection";
import { CarouselSection } from "@/components/sections/CarouselSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { FooterSection } from "@/components/sections/FooterSection";
import { BackToTop } from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <main className="w-full bg-background font-sans text-foreground lg:h-screen lg:overflow-y-scroll lg:snap-y lg:snap-mandatory">
      <Navbar />

      {/* Hero Section */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* Feature Section */}
      <div id="features">
        <FeatureSection />
      </div>

      {/* Interactive Feature Section */}
      <div id="how-it-works">
        <InteractiveFeatureSection />
      </div>

      {/* Carousel Section */}
      <div id="benefits">
        <CarouselSection />
      </div>

      {/* FAQ Section */}
      <div id="faqs">
        <FAQSection />
      </div>

      {/* CTA Section */}
      <CTASection />

      {/* Footer Section */}
      <FooterSection />
      
      {/* Back To Top Button */}
      <BackToTop />
    </main>
  );
}
