"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { ShieldCheck, Zap, Globe, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Zap,
    title: "Instant Transfers",
    description: "Send and receive funds in seconds. No delays, no hidden fees. Experience the speed of modern finance.",
    color: "bg-pale-violet",
    textColor: "text-black",
  },
  {
    icon: ShieldCheck,
    title: "Secure Wallet",
    description: "Your assets are protected by bank-grade security and advanced encryption protocols.",
    color: "bg-black",
    textColor: "text-white",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Use your card anywhere in the world. Accepted at millions of locations globally.",
    color: "bg-vloo-blue",
    textColor: "text-white",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our dedicated support team is available around the clock to assist you with any issues.",
    color: "bg-bone",
    textColor: "text-black",
  },
];

export function CarouselSection() {
  const allFeatures = [...features, ...features, ...features]; // Triple to ensure smooth infinite loop visual

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "center",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const getCardStyle = (index: number) => {
    if (!emblaApi) return "";
    
    // We need to find the relative distance considering the loop
    // emblaApi.scrollSnapList() gives us positions, but simpler is to rely on index relative to selected
    const total = allFeatures.length;
    let diff = (index - selectedIndex + total) % total;
    
    // Adjust diff to be shortest distance (e.g. -1 instead of total-1)
    if (diff > total / 2) diff -= total;
    
    // Center
    if (diff === 0) {
      return "scale-100 opacity-100 z-30 rotate-0 translate-y-0 shadow-2xl border-2 border-black/5";
    } 
    // Immediate Neighbors (Left/Right)
    else if (diff === -1) {
      return "scale-[0.85] opacity-70 z-20 -rotate-[15deg] translate-y-24 blur-[0.5px] grayscale-[20%]";
    } 
    else if (diff === 1) {
      return "scale-[0.85] opacity-70 z-20 rotate-[15deg] translate-y-24 blur-[0.5px] grayscale-[20%]";
    }
    // Second Neighbors (Left/Right)
    else if (diff === -2) {
      return "scale-[0.7] opacity-40 z-10 -rotate-[30deg] translate-y-72 blur-[1px] grayscale-[50%]";
    }
    else if (diff === 2) {
      return "scale-[0.7] opacity-40 z-10 rotate-[30deg] translate-y-72 blur-[1px] grayscale-[50%]";
    }
    // Farther Neighbors
    else {
      return "scale-[0.5] opacity-0 z-0 translate-y-96 blur-[2px]";
    }
  };

  return (
    <section data-theme="light" className="w-full min-h-screen lg:h-screen lg:snap-start bg-white text-black flex flex-col items-center justify-start pt-[15vh] px-4 md:px-8 2xl:px-16 3xl:px-24 overflow-hidden relative">
      
      <div className="text-left md:text-center mb-12 md:mb-24 px-4 z-40 relative">
        <h2 className="font-display text-5xl md:text-7xl 2xl:text-8xl 3xl:text-[11rem] font-black uppercase mb-4 tracking-tight leading-[0.9]">
          Why Choose Vloo?
        </h2>
        <p className="font-sans text-gray-500 text-lg md:text-xl 2xl:text-2xl 3xl:text-4xl max-w-2xl 2xl:max-w-4xl 3xl:max-w-6xl md:mx-auto">
          Discover the features that make us the preferred choice for crypto payments.
        </p>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-0 relative">
        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex touch-pan-y touch-pinch-zoom -ml-4 items-center [perspective:1000px] pt-20 pb-64">
            {allFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 pl-4"
              >
                <div 
                  onClick={() => scrollTo(index)}
                  className={cn(
                    "relative h-[340px] md:h-[425px] rounded-[2.5rem] p-6 md:p-8 flex flex-col items-center justify-center text-center transition-all duration-500 ease-out cursor-pointer bg-white",
                    feature.color,
                    feature.textColor,
                    getCardStyle(index)
                  )}
                >
                  <div className={cn(
                    "w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-5 md:mb-6",
                    feature.textColor === "text-white" ? "bg-white/10" : "bg-black/5"
                  )}>
                    <feature.icon className="w-8 h-8 md:w-11 md:h-11" strokeWidth={1.5} />
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 md:mb-5 tracking-tight leading-none">
                    {feature.title}
                  </h3>
                  
                  <p className={cn(
                    "font-sans text-base leading-relaxed mb-8 max-w-[90%]",
                    feature.textColor === "text-white" ? "text-white/80" : "text-black/70"
                  )}>
                    {feature.description}
                  </p>

                  <Button 
                    className={cn(
                      "rounded-full px-6 py-3.5 text-sm md:text-base font-bold transition-transform hover:scale-105",
                      feature.textColor === "text-white" ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-800"
                    )}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 z-40 absolute bottom-12 left-0 right-0">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === selectedIndex % features.length ? "bg-black w-6" : "bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
