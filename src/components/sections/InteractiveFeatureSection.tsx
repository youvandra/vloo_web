"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CreditCard, RefreshCw, ShieldCheck, ChevronDown } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Timing is a feature",
    description: "Immediate access is not always the right access. VLOO lets value wait without losing certainty.",
    cardColor: "bg-[#FFE14D]", // Yellow from screenshot
    textColor: "text-black",
  },
  {
    icon: RefreshCw,
    title: "Ownership without custody",
    description: "No banks. No platforms holding assets. VLOO never controls funds. Only access conditions.",
    cardColor: "bg-white",
    textColor: "text-black",
  },
  {
    icon: ShieldCheck,
    title: "Built for intent, not categories.",
    description: "Gift, salary, inheritance, reward. VLOO does not care why. It ensures access happens correctly.",
    cardColor: "bg-black",
    textColor: "text-white",
  },
];

export function InteractiveFeatureSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile screen size to disable hover effects
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleInteraction = (index: number) => {
    if (isMobile) {
      // Toggle accordion on mobile: if clicking active, close it (or keep it open? User said "like dropdown list to show the hover image")
      // "just show the image in dropdown" implies we want to see it when expanded.
      // Let's allow toggling or just switching. Standard accordion usually allows switching.
      // If we want it to act like a dropdown, clicking the header should expand/collapse.
      if (activeIndex === index) {
         // Optional: allow collapsing to show nothing? Or just keep active. 
         // Let's keep one active at a time to ensure there's always an image shown in desktop logic, 
         // but for mobile dropdown, maybe we want to close it? 
         // Let's stick to "switch active" for now, but if it's already active, maybe toggle off?
         // Actually, for "dropdown list", usually one is open. Let's just set active.
         setActiveIndex(index);
      } else {
        setActiveIndex(index);
      }
    } else {
       // Desktop hover handled by onMouseEnter
       setActiveIndex(index);
    }
  };

  return (
    <section data-theme="light" className="w-full min-h-screen lg:h-screen lg:snap-start bg-white text-black flex items-center justify-center p-4 md:p-8 2xl:p-16 3xl:p-24 overflow-hidden relative">
      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center h-full w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-5xl md:text-7xl 2xl:text-8xl 3xl:text-[8rem] font-black uppercase mb-12 md:mb-20 tracking-tight leading-[0.9] text-left"
          >
            How VLOO <br /> Works
          </motion.h2>

          <div className="space-y-4 w-full">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                onMouseEnter={() => !isMobile && setActiveIndex(index)}
                onClick={() => isMobile && handleInteraction(index)}
                className={cn(
                  "group p-6 md:p-8 rounded-[2rem] transition-all duration-300 cursor-pointer border-2 w-full",
                  activeIndex === index
                    ? "bg-gray-50 border-transparent shadow-sm scale-[1.02]"
                    : "bg-transparent border-transparent hover:bg-gray-50/50"
                )}
              >
                <div className="flex flex-col w-full">
                  {/* Header Row */}
                  <div className="flex items-center justify-between w-full">
                     <div className="flex items-center gap-6 md:gap-8">
                        <div className={cn(
                          "w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300",
                          activeIndex === index ? "bg-black text-white" : "bg-gray-100 text-black"
                        )}>
                          <feature.icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
                        </div>
                        
                        <div>
                          <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight uppercase">
                            {feature.title}
                          </h3>
                           {/* Desktop Description (Hidden on mobile unless we want it always visible? 
                               User said "show the hover image in dropdown", implying content might be hidden too or just image.
                               Usually accordion hides description too. Let's hide description on mobile when collapsed, show when expanded.)
                           */}
                           <p className={cn(
                             "font-sans text-gray-500 text-sm md:text-base leading-relaxed max-w-md mt-2 md:mt-3 hidden lg:block",
                             // On desktop always show? Or only for active? Original code showed always.
                             // Original: <p>...</p> always visible.
                             // Let's keep it visible on desktop.
                           )}>
                            {feature.description}
                          </p>
                        </div>
                     </div>

                     {/* Mobile Dropdown Indicator */}
                     <ChevronDown className={cn(
                       "w-6 h-6 transition-transform duration-300 lg:hidden",
                       activeIndex === index ? "transform rotate-180" : ""
                     )} />
                  </div>

                  {/* Mobile Expanded Content (Description + Image) */}
                  <div className={cn(
                    "grid transition-all duration-300 ease-in-out overflow-hidden lg:hidden",
                    activeIndex === index ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0"
                  )}>
                    <div className="min-h-0">
                      {/* Description on Mobile */}
                      <p className="font-sans text-gray-500 text-sm leading-relaxed mb-6 pl-[4.5rem]">
                        {feature.description}
                      </p>

                      {/* Mobile Image/Card Display */}
                      <div className="w-full flex items-center justify-center bg-gray-100 rounded-[2rem] p-6">
                          <div className="relative w-[280px] h-[400px] bg-black rounded-[2.5rem] p-6 flex flex-col items-center justify-center shadow-2xl overflow-hidden">
                             {/* Inner Card */}
                             <div className={cn(
                                "w-[220px] h-[140px] rounded-xl shadow-xl flex flex-col justify-between p-4 relative overflow-hidden transform transition-all duration-500 hover:scale-105",
                                feature.cardColor,
                                feature.textColor
                              )}>
                                 {/* Chip */}
                                 <div className="w-8 h-6 bg-yellow-600/20 rounded-md border border-yellow-600/30 flex items-center justify-center">
                                    <div className="w-6 h-4 border border-yellow-600/40 rounded-[3px]" />
                                 </div>
                                 
                                 {/* Number */}
                                 <div className="flex gap-2 mt-2">
                                   <div className="w-8 h-1.5 bg-current opacity-20 rounded-full" />
                                   <div className="w-8 h-1.5 bg-current opacity-20 rounded-full" />
                                   <div className="w-6 h-1.5 bg-current opacity-20 rounded-full" />
                                 </div>

                                 {/* Logo */}
                                 <div className="text-2xl font-black tracking-tighter opacity-90 mt-auto">
                                   VLOO
                                 </div>
                                 
                                 {/* Shine */}
                                 <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 blur-[30px] rounded-full -translate-y-1/2 translate-x-1/2" />
                             </div>
                             
                             <div className="absolute bottom-8 text-white/50 text-xs font-mono tracking-widest uppercase">
                                Premium Features
                             </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Dynamic Image Display (Desktop Only) */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative h-[400px] md:h-[600px] w-full hidden lg:flex items-center justify-center"
        >
          {/* Background Shape/Blob */}
          <div className="absolute inset-0 bg-gray-100 rounded-[3rem] -rotate-3 scale-95 opacity-50 transition-all duration-500" />
          
          {/* Main Card Container */}
          <div className="relative w-full h-full flex items-center justify-center">
             {features.map((feature, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out",
                    activeIndex === index 
                      ? "opacity-100 translate-x-0 rotate-0 scale-100 z-20" 
                      : index < activeIndex
                        ? "opacity-0 -translate-y-12 -rotate-6 scale-95 z-10" // Previous items slide up
                        : "opacity-0 translate-y-12 rotate-6 scale-95 z-10" // Next items slide down
                  )}
                >
                  {/* Card Mockup */}
                  <div className="relative w-[320px] h-[480px] md:w-[400px] md:h-[600px] bg-black rounded-[3rem] p-8 flex flex-col items-center justify-center shadow-2xl overflow-hidden transform rotate-6 hover:rotate-0 transition-transform duration-500">
                    {/* Inner Card (The Credit Card itself) */}
                    <div className={cn(
                      "w-[260px] h-[160px] md:w-[320px] md:h-[200px] rounded-2xl shadow-xl flex flex-col justify-between p-6 relative overflow-hidden transform transition-all duration-500 hover:scale-105",
                      feature.cardColor,
                      feature.textColor
                    )}>
                       {/* Card Chip */}
                       <div className="w-10 h-8 bg-yellow-600/20 rounded-md border border-yellow-600/30 flex items-center justify-center">
                          <div className="w-8 h-6 border border-yellow-600/40 rounded-[4px]" />
                       </div>

                       {/* Card Number (Hidden/Abstract) */}
                       <div className="flex gap-3 mt-4">
                         <div className="w-12 h-2 bg-current opacity-20 rounded-full" />
                         <div className="w-12 h-2 bg-current opacity-20 rounded-full" />
                         <div className="w-8 h-2 bg-current opacity-20 rounded-full" />
                       </div>

                       {/* Card Logo Text */}
                       <div className="text-4xl font-black tracking-tighter opacity-90 mt-auto">
                         VLOO
                       </div>

                       {/* Decorative Shine */}
                       <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-[40px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    </div>

                    {/* Decorative Elements around the card */}
                    <div className="absolute bottom-12 text-white/50 text-sm font-mono tracking-widest uppercase">
                      Premium Features
                    </div>
                  </div>
                </div>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
