"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function CTASection() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <section 
      data-theme="dark" 
      className="w-full min-h-screen lg:h-screen lg:snap-start bg-black text-white flex flex-col relative overflow-hidden"
    >
      {/* Main Content Area - Card Visualization */}
      <div className="flex-1 w-full relative flex items-center justify-center overflow-visible">
        
        {/* Giant 3D Card */}
        <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center perspective-[1500px] overflow-visible">
          <div className="relative w-[80vw] h-[50vw] md:w-[60vw] md:h-[35vw] 2xl:w-[50vw] 2xl:h-[30vw] bg-[#e3d9c2] rounded-[20px] md:rounded-[40px] 2xl:rounded-[60px] shadow-2xl transform rotate-x-[35deg] rotate-z-[15deg] rotate-y-[-10deg] scale-110 md:scale-125 transition-transform duration-1000 ease-out hover:rotate-x-[30deg] hover:rotate-z-[12deg] flex flex-col justify-between overflow-hidden border border-black/10">
            
            {/* Simple Pattern (Top-Left) */}
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="cta-grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="#000" strokeWidth="2" fill="none"/>
                  </pattern>
                  <linearGradient id="cta-fade-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="white" stopOpacity="1" />
                    <stop offset="40%" stopColor="white" stopOpacity="1" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <mask id="cta-fade-mask">
                    <rect width="100%" height="100%" fill="url(#cta-fade-gradient)" />
                  </mask>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-grid-pattern)" mask="url(#cta-fade-mask)" />
              </svg>
            </div>

            {/* Abstract Shapes */}
            <div className="absolute -top-[30%] -left-[20%] w-[80%] h-[120%] bg-white opacity-[0.4] blur-[80px] rounded-full pointer-events-none mix-blend-overlay"></div>
            <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[80%] bg-white opacity-[0.3] rounded-full blur-[40px] pointer-events-none"></div>
            <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[80%] bg-[#d199f9] opacity-[0.1] blur-[60px] rounded-full pointer-events-none"></div>

            {/* Card Content */}
            <div className="w-full h-full flex flex-col justify-between relative z-10 p-8 md:p-12 2xl:p-20">
               {/* Top Right Text */}
               <div className="absolute top-8 right-8 md:top-12 md:right-12 2xl:top-20 2xl:right-20">
                  <span className="font-display text-black text-xl md:text-3xl 2xl:text-5xl font-normal tracking-wide">
                    Personal
                  </span>
               </div>

               {/* Big Brand Text */}
               <div className="absolute bottom-0 left-2 md:left-4">
                  <h1 className="font-display font-black text-[20vw] md:text-[16vw] 2xl:text-[14vw] leading-[0.8] text-black tracking-tighter">
                    VLOO
                  </h1>
               </div>
            </div>
          </div>
        </div>

        {/* Floating Tooltip/Card */}
        {showTooltip && (
          <div className="absolute bottom-[20%] right-[5%] md:right-[10%] 2xl:right-[15%] w-[300px] md:w-[400px] 2xl:w-[500px] bg-white text-black rounded-[20px] md:rounded-[30px] p-6 md:p-8 2xl:p-10 shadow-2xl z-20 animate-in fade-in slide-in-from-bottom-10 duration-700">
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
            >
              <X size={20} />
            </button>
            <h3 className="font-display font-black text-3xl md:text-4xl 2xl:text-5xl uppercase leading-[0.9] mb-4">
              Crypto<br/>Payments
            </h3>
            <p className="font-sans text-gray-600 text-sm md:text-base 2xl:text-xl leading-relaxed">
              Install the app now and get a 10% cashback on your first purchase.
            </p>
          </div>
        )}
      </div>

      {/* Footer Bar */}
      <div className="w-full bg-black border-t border-white/10 px-4 md:px-8 2xl:px-16 3xl:px-24 py-8 md:py-12 flex flex-col xl:flex-row items-center justify-between gap-8 md:gap-12 z-30">
        <div className="flex-shrink-0">
          <h2 className="font-display font-black text-4xl md:text-6xl 2xl:text-8xl 3xl:text-9xl uppercase tracking-tighter leading-none text-white whitespace-nowrap">
            Swipe, Pay, Done
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full xl:w-auto justify-end">
          <p className="font-sans text-gray-400 text-sm md:text-base 2xl:text-xl leading-relaxed text-center md:text-right max-w-md">
            Make payments with a virtual card linked to your favorite digital assets.
          </p>
          <Button className="rounded-full bg-white text-black hover:bg-gray-200 px-8 py-6 text-base font-bold flex-shrink-0">
            Download the App
          </Button>
        </div>
      </div>
    </section>
  );
}
