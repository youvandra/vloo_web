import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { HeroCard } from "@/components/HeroCard";
import { FeatureSection } from "@/components/FeatureSection";
import { InteractiveFeatureSection } from "@/components/InteractiveFeatureSection";
import { CarouselSection } from "@/components/CarouselSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="w-full bg-background font-sans text-foreground lg:h-screen lg:overflow-y-scroll lg:snap-y lg:snap-mandatory">
      <Navbar />

      {/* Hero Section */}
      <section data-theme="dark" className="min-h-screen lg:h-screen lg:snap-start w-full bg-[#0b1cc4] text-white flex items-center justify-center p-4 md:p-8 2xl:p-16 3xl:p-24 overflow-hidden relative">
        <div className="w-full max-w-6xl 2xl:max-w-screen-2xl 3xl:max-w-[90vw] relative transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 2xl:gap-24 3xl:gap-40 items-center">
            
            {/* Mobile: Card Top / Desktop: Card Right */}
            <div className="relative h-[300px] md:h-[600px] 2xl:h-[800px] 3xl:h-[1200px] flex items-center justify-center order-1 md:order-2">
              <HeroCard />
            </div>

            {/* Mobile: Text Bottom / Desktop: Text Left */}
            <div className="space-y-6 2xl:space-y-10 3xl:space-y-16 max-w-xl 2xl:max-w-3xl 3xl:max-w-5xl z-10 order-2 md:order-1 text-left">
              <h1 className="font-display text-5xl md:text-7xl 2xl:text-8xl 3xl:text-[11rem] font-black leading-[0.9] tracking-tighter uppercase">
                Payments <br />
                Made Simple
              </h1>
              <p className="font-sans text-lg 2xl:text-2xl 3xl:text-4xl font-normal max-w-md 2xl:max-w-2xl 3xl:max-w-4xl leading-relaxed text-white/90">
                Get a card that lets you spend crypto like cash.
                Download our intuitive app to apply and manage your
                funds effortlessly, anytime.
              </p>
              <Button className="font-display rounded-[15px] 2xl:rounded-[25px] 3xl:rounded-[40px] bg-white text-black hover:bg-gray-100 px-8 py-6 2xl:px-12 2xl:py-8 3xl:px-20 3xl:py-12 text-base 2xl:text-xl 3xl:text-3xl font-semibold transition-transform hover:scale-105 cursor-pointer">
                Download the App
              </Button>
            </div>
          </div>
        </div>
      </section>

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
    </main>
  );
}
