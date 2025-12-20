import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";
import { InteractiveFeatureSection } from "@/components/InteractiveFeatureSection";
import { CarouselSection } from "@/components/CarouselSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { FooterSection } from "@/components/FooterSection";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="w-full bg-background font-sans text-foreground lg:h-screen lg:overflow-y-scroll lg:snap-y lg:snap-mandatory">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Feature Section */}
      <FeatureSection />

      {/* Interactive Feature Section */}
      <InteractiveFeatureSection />

      {/* Carousel Section */}
      <CarouselSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer Section */}
      <FooterSection />
      
      {/* Back To Top Button */}
      <BackToTop />
    </main>
  );
}
