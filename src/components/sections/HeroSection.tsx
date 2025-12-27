"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroCard } from "@/components/ui/HeroCard";
import Link from "next/link";

export function HeroSection() {
  return (
    <section data-theme="dark" className="min-h-screen lg:h-screen lg:snap-start w-full bg-[#0b1cc4] text-white flex items-center justify-center p-4 md:p-8 2xl:p-16 3xl:p-24 overflow-hidden relative">
      <div className="w-full max-w-6xl 2xl:max-w-screen-2xl 3xl:max-w-[90vw] relative transition-all duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 2xl:gap-24 3xl:gap-40 items-center">
          
          {/* Mobile: Card Top / Desktop: Card Right */}
          <div className="relative h-[300px] md:h-[600px] 2xl:h-[800px] 3xl:h-[1200px] flex items-center justify-center order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="w-full h-full flex items-center justify-center"
            >
              <div className="scale-[0.65] md:scale-90 relative w-full h-full">
                <HeroCard staticOnMobile />
                <div className="absolute bottom-0 md:bottom-12 left-1/2 -translate-x-1/2 pointer-events-none">
                  <span className="font-mono text-[9px] md:text-[10px] 2xl:text-xs text-white/40 tracking-[0.3em] uppercase bg-black/10 px-3 py-1.5 rounded-full backdrop-blur-[2px] border border-white/5 whitespace-nowrap">
                    crypto access card
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile: Text Bottom / Desktop: Text Left */}
          <div className="space-y-6 2xl:space-y-10 3xl:space-y-16 max-w-xl 2xl:max-w-3xl 3xl:max-w-5xl z-10 order-2 md:order-1 text-left">
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-display text-5xl md:text-7xl 2xl:text-8xl 3xl:text-[11rem] font-black leading-[0.9] tracking-tighter uppercase"
              >
                Access <br />
                when ready
              </motion.h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="font-sans text-lg 2xl:text-2xl 3xl:text-4xl font-normal max-w-md 2xl:max-w-2xl 3xl:max-w-4xl leading-relaxed text-white/90"
            >
              VLOO lets you give access to crypto funds without forcing them to be claimed now.
              <br /><br />
              Create a wallet, fund it, and assign who can claim it later using a physical card.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            >
              <Button asChild className="font-display rounded-[15px] 2xl:rounded-[25px] 3xl:rounded-[40px] bg-[#d199f9] text-black hover:bg-[#d199f9]/90 px-8 py-6 2xl:px-12 2xl:py-8 3xl:px-20 3xl:py-12 text-base 2xl:text-xl 3xl:text-3xl font-semibold transition-transform hover:scale-105 cursor-pointer border-none">
                <Link href="/buy-card">
                  Get the card
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
