"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FeatureSection() {
  const [step, setStep] = useState<'withdraw' | 'success'>('withdraw');

  return (
    <section 
      data-theme="light"
      className="min-h-screen lg:h-screen w-full lg:snap-start bg-white text-black flex items-center justify-center p-4 md:p-8 2xl:p-16 3xl:p-24 overflow-hidden relative"
    >
      <div className="w-full max-w-6xl 2xl:max-w-screen-2xl 3xl:max-w-[90vw] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 2xl:gap-24 3xl:gap-40 items-center">
        
        {/* Left: Phone Mockup */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center order-2 md:order-1 h-[550px] md:h-[600px] 2xl:h-[800px] 3xl:h-[1200px]"
        >
          {/* Phone Frame */}
          <div className="relative h-full aspect-[1/2] bg-white rounded-[2.5rem] md:rounded-[3rem] 2xl:rounded-[4rem] 3xl:rounded-[6rem] border-[8px] 2xl:border-[12px] 3xl:border-[16px] border-gray-900 shadow-2xl overflow-hidden ring-1 ring-white/20">
            {/* Notch/Island */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[3.5%] bg-black rounded-b-2xl z-20"></div>
            
            {/* Screen Content */}
            <div className="w-full h-full bg-white flex flex-col relative overflow-hidden font-sans">
              
              {step === 'withdraw' ? (
                <>
                  {/* App Header */}
                  <div className="p-4 pt-10 2xl:p-9 2xl:pt-18 3xl:p-14 3xl:pt-28 flex items-center gap-3">
                    <button className="w-7 h-7 2xl:w-11 2xl:h-11 3xl:w-18 3xl:h-18 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <svg className="w-3.5 h-3.5 2xl:w-5 2xl:h-5 3xl:w-9 3xl:h-9 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <div className="text-base 2xl:text-xl 3xl:text-3xl font-bold text-black">Claim</div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 px-4 2xl:px-9 3xl:px-14 flex flex-col justify-center space-y-5 2xl:space-y-10 3xl:space-y-18 -mt-14">
                    
                    {/* Amount Display */}
                    <div className="text-center space-y-1 2xl:space-y-3">
                        <div className="text-xs 2xl:text-lg 3xl:text-xl text-gray-500 font-medium">Total Balance</div>
                        <div className="text-3xl md:text-4xl 2xl:text-6xl 3xl:text-7xl font-black text-black tracking-tighter">
                            10 <span className="text-gray-400">BTC</span>
                        </div>
                    </div>

                    {/* Address Input */}
                    <div className="space-y-1.5 2xl:space-y-3">
                        <label className="text-[9px] md:text-[11px] 2xl:text-base 3xl:text-lg font-bold text-gray-400 uppercase tracking-wider">To Address</label>
                        <div className="w-full bg-gray-50 rounded-lg 2xl:rounded-2xl p-2.5 2xl:p-5 3xl:p-7 flex items-center gap-2 border border-gray-100">
                            <div className="flex-1 font-mono text-[10px] md:text-xs 2xl:text-lg 3xl:text-xl text-gray-800 truncate">
                                bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
                            </div>
                            <div className="w-4 h-4 2xl:w-7 2xl:h-7 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                                <svg className="w-2.5 h-2.5 2xl:w-4 2xl:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Claim Button */}
                    <button 
                      onClick={() => setStep('success')}
                      className="w-full bg-black text-white rounded-lg 2xl:rounded-[1.5rem] py-3 2xl:py-5 3xl:py-7 text-[15px] md:text-base 2xl:text-xl 3xl:text-3xl font-bold hover:bg-gray-800 active:scale-[0.98] hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-black/20 cursor-pointer"
                    >
                        Claim
                    </button>
                  </div>
                </>
              ) : (
                /* Success View */
                <div className="w-full h-full flex flex-col items-center justify-center p-5 pt-16 2xl:p-10 2xl:pt-24 3xl:p-18 3xl:pt-32 text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-12 h-12 md:w-14 md:h-14 2xl:w-20 2xl:h-20 3xl:w-28 3xl:h-28 bg-black rounded-full flex items-center justify-center mb-5 2xl:mb-8 3xl:mb-14 shadow-xl shadow-black/20">
                    <svg className="w-5 h-5 md:w-6 md:h-6 2xl:w-9 2xl:h-9 3xl:w-14 3xl:h-14 text-[#e3d9c2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl 2xl:text-4xl 3xl:text-6xl font-black text-black mb-1.5 2xl:mb-3 tracking-tight">
                    Success!
                  </h3>
                  
                  <p className="text-gray-500 text-xs md:text-sm 2xl:text-lg 3xl:text-2xl font-medium mb-6 2xl:mb-10 3xl:mb-16 max-w-[80%]">
                    You have successfully claimed <span className="text-black font-bold">10 BTC</span> to your wallet.
                  </p>

                  <div className="w-full space-y-2.5 2xl:space-y-5">
                    <div className="w-full bg-gray-50 rounded-lg 2xl:rounded-2xl p-3 2xl:p-5 3xl:p-8 border border-gray-100 flex justify-between items-center">
                       <span className="text-[10px] md:text-xs 2xl:text-base 3xl:text-xl text-gray-500">Amount</span>
                       <span className="text-xs md:text-sm 2xl:text-lg 3xl:text-xl font-bold text-black">10 BTC</span>
                    </div>
                    <div className="w-full bg-gray-50 rounded-lg 2xl:rounded-2xl p-3 2xl:p-5 3xl:p-8 border border-gray-100 flex justify-between items-center">
                       <span className="text-[10px] md:text-xs 2xl:text-base 3xl:text-xl text-gray-500">Fee</span>
                       <span className="text-xs md:text-sm 2xl:text-lg 3xl:text-xl font-bold text-black">0.00005 BTC</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setStep('withdraw')}
                    className="w-full mt-auto mb-6 2xl:mb-10 3xl:mb-16 bg-gray-100 text-black rounded-lg 2xl:rounded-[1.5rem] py-3 2xl:py-5 3xl:py-7 text-[15px] md:text-base 2xl:text-xl 3xl:text-3xl font-bold hover:bg-gray-200 transition-colors"
                  >
                    Done
                  </button>
                </div>
              )}

               {/* Bottom Indicator */}
               <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="space-y-6 2xl:space-y-10 3xl:space-y-16 order-1 md:order-2 text-left"
        >
          <div className="space-y-6 2xl:space-y-10 3xl:space-y-16">
            <h2 className="font-display text-5xl md:text-7xl 2xl:text-8xl 3xl:text-[11rem] font-black leading-[0.9] tracking-tighter uppercase text-black">
              Vloo <br/>
              Mobile App
            </h2>
            
            <p className="font-sans text-lg 2xl:text-2xl 3xl:text-4xl font-normal text-gray-500 max-w-md 2xl:max-w-2xl 3xl:max-w-4xl md:mx-0 leading-relaxed">
              Stay connected to your crypto, make payments,
              and manage funds seamlessly with our user-friendly mobile app.
            </p>

            <div className="hidden md:flex flex-col sm:flex-row gap-4 2xl:gap-8 3xl:gap-12 justify-start">
              <Button className="font-display rounded-[15px] 2xl:rounded-[25px] 3xl:rounded-[40px] bg-black text-white hover:bg-gray-900 px-8 py-6 2xl:px-12 2xl:py-8 3xl:px-20 3xl:py-12 text-base 2xl:text-xl 3xl:text-3xl font-semibold transition-transform hover:scale-105 cursor-pointer">
                App Store
              </Button>
              <Button className="font-display rounded-[15px] 2xl:rounded-[25px] 3xl:rounded-[40px] bg-black text-white hover:bg-gray-900 px-8 py-6 2xl:px-12 2xl:py-8 3xl:px-20 3xl:py-12 text-base 2xl:text-xl 3xl:text-3xl font-semibold transition-transform hover:scale-105 cursor-pointer">
                Play Store
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Mobile Button (Below Phone Mockup) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="w-full flex justify-center gap-4 flex-wrap order-3 md:hidden"
        >
          <Button className="font-display rounded-[15px] 2xl:rounded-[25px] 3xl:rounded-[40px] bg-black text-white hover:bg-gray-900 px-8 py-6 2xl:px-12 2xl:py-8 3xl:px-20 3xl:py-12 text-base 2xl:text-xl 3xl:text-3xl font-semibold transition-transform hover:scale-105 cursor-pointer">
            App Store
          </Button>
          <Button className="font-display rounded-[15px] 2xl:rounded-[25px] 3xl:rounded-[40px] bg-black text-white hover:bg-gray-900 px-8 py-6 2xl:px-12 2xl:py-8 3xl:px-20 3xl:py-12 text-base 2xl:text-xl 3xl:text-3xl font-semibold transition-transform hover:scale-105 cursor-pointer">
            Play Store
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
