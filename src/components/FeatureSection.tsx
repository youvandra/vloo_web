"use client";

import { useOnScreen } from "@/hooks/useOnScreen";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function FeatureSection() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.3 });

  return (
    <section 
      ref={ref} 
      className="h-screen w-full snap-start bg-black text-white flex items-center justify-center p-4 md:p-8 2xl:p-16 3xl:p-24 overflow-hidden relative"
    >
      <div className="w-full max-w-6xl 2xl:max-w-screen-2xl 3xl:max-w-[90vw] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 2xl:gap-24 3xl:gap-40 items-center">
        
        {/* Left: Phone Mockup */}
        <div 
          className={cn(
            "relative flex justify-center order-2 md:order-1 transition-all duration-1000 transform h-[550px] md:h-[600px] 2xl:h-[800px] 3xl:h-[1200px]",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          )}
        >
          {/* Phone Frame */}
          <div className="relative h-full aspect-[1/2] bg-white rounded-[2.5rem] md:rounded-[3rem] 2xl:rounded-[4rem] 3xl:rounded-[6rem] border-[8px] 2xl:border-[12px] 3xl:border-[16px] border-gray-900 shadow-2xl overflow-hidden ring-1 ring-white/20">
            {/* Notch/Island */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[3.5%] bg-black rounded-b-2xl z-20"></div>
            
            {/* Screen Content - Withdraw Flow */}
            <div className="w-full h-full bg-white flex flex-col relative overflow-hidden font-sans">
               {/* App Header */}
               <div className="p-5 pt-12 2xl:p-10 2xl:pt-20 3xl:p-16 3xl:pt-32 flex items-center gap-3">
                 <button className="w-8 h-8 2xl:w-12 2xl:h-12 3xl:w-20 3xl:h-20 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <svg className="w-4 h-4 2xl:w-6 2xl:h-6 3xl:w-10 3xl:h-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                 </button>
                 <div className="text-lg 2xl:text-2xl 3xl:text-4xl font-bold text-black">Claim</div>
               </div>

               {/* Main Content */}
               <div className="flex-1 px-5 2xl:px-10 3xl:px-16 flex flex-col justify-center space-y-6 2xl:space-y-12 3xl:space-y-20 -mt-16">
                 
                 {/* Amount Display */}
                 <div className="text-center space-y-1 2xl:space-y-4">
                    <div className="text-sm 2xl:text-xl 3xl:text-2xl text-gray-500 font-medium">Total Balance</div>
                    <div className="text-4xl md:text-5xl 2xl:text-7xl 3xl:text-8xl font-black text-black tracking-tighter">
                        10 <span className="text-gray-400">BTC</span>
                    </div>
                 </div>

                 {/* Address Input */}
                 <div className="space-y-2 2xl:space-y-4">
                    <label className="text-[10px] md:text-xs 2xl:text-lg 3xl:text-xl font-bold text-gray-400 uppercase tracking-wider">To Address</label>
                    <div className="w-full bg-gray-50 rounded-xl 2xl:rounded-3xl p-3 2xl:p-6 3xl:p-8 flex items-center gap-2 border border-gray-100">
                        <div className="flex-1 font-mono text-xs md:text-sm 2xl:text-xl 3xl:text-2xl text-gray-800 truncate">
                            bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
                        </div>
                        <div className="w-5 h-5 2xl:w-8 2xl:h-8 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                            <svg className="w-3 h-3 2xl:w-5 2xl:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>
                 </div>

                 {/* Claim Button */}
                 <button className="w-full bg-black text-white rounded-xl 2xl:rounded-[2rem] py-3.5 2xl:py-6 3xl:py-8 text-base md:text-lg 2xl:text-2xl 3xl:text-4xl font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-black/20">
                    Claim
                 </button>

               </div>

               {/* Bottom Indicator */}
               <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div 
          className={cn(
            "space-y-6 2xl:space-y-10 3xl:space-y-16 order-1 md:order-2 text-left transition-all duration-1000 delay-300 transform",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          )}
        >
          <h2 className="font-display text-5xl md:text-7xl 2xl:text-8xl 3xl:text-[11rem] font-black leading-[0.9] tracking-tighter uppercase text-[#e3d9c2]">
            Vloo <br/>
            Mobile App
          </h2>
          
          <p className="font-sans text-lg 2xl:text-2xl 3xl:text-4xl font-normal text-[#e3d9c2]/80 max-w-md 2xl:max-w-2xl 3xl:max-w-4xl md:mx-0 leading-relaxed">
            Stay connected to your crypto, make payments,
            and manage funds seamlessly with our user-friendly mobile app.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 2xl:gap-8 3xl:gap-12 justify-start pt-4 2xl:pt-8 3xl:pt-12">
            {/* Google Play Button */}
            <Button className="h-auto font-display rounded-[15px] 2xl:rounded-[25px] 3xl:rounded-[40px] bg-[#e3d9c2] text-black hover:bg-[#d1c6ad] px-8 py-[18px] 2xl:px-12 2xl:py-5 3xl:px-20 3xl:py-9 transition-transform hover:scale-105 cursor-pointer flex items-center gap-3 2xl:gap-5 3xl:gap-8">
              <svg className="w-8 h-8 2xl:w-12 2xl:h-12 3xl:w-16 3xl:h-16 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm11.597 11.598l2.67 2.67-2.67-2.67zM16.619 14.825l3.565 3.565a1 1 0 0 0 1.415-1.415l-3.565-3.565-1.415 1.415zm-2.827-2.827l5.968-5.968a1 1 0 0 0-1.414-1.414l-5.968 5.968 1.414 1.414z" />
                <path d="M5.5 1.5A1.5 1.5 0 0 1 7 3v18a1.5 1.5 0 0 1-3 0V3a1.5 1.5 0 0 1 1.5-1.5z" opacity="0" /> 
                {/* Simple Play Icon representation */}
                <path d="M21.053 13.563l-2.486-1.373-3.11 3.11 3.11 3.11 2.486-1.373a1.996 1.996 0 0 0 0-3.474zM14.53 11.263L4.957 1.69a.837.837 0 0 0-.258-.063C4.85.918 5.092.47 5.53.47c.21 0 .42.065.594.188l13.528 7.466-5.122 3.14zM4.956 22.31c.074-.037.16-.06.258-.062l9.574-9.573 5.12 3.138-13.527 7.466c-.175.124-.385.19-.595.19-.437 0-.68-.447-.83-.715v-.444z"/>
              </svg>
              <div className="text-left flex flex-col items-start leading-none gap-1">
                <div className="text-[10px] 2xl:text-sm 3xl:text-lg uppercase font-bold tracking-wider opacity-80">Get it on</div>
                <div className="text-sm 2xl:text-xl 3xl:text-2xl font-bold">Google Play</div>
              </div>
            </Button>

            {/* App Store Button */}
            <Button className="h-auto font-display rounded-[15px] 2xl:rounded-[25px] 3xl:rounded-[40px] bg-[#e3d9c2] text-black hover:bg-[#d1c6ad] px-8 py-[18px] 2xl:px-12 2xl:py-5 3xl:px-20 3xl:py-9 transition-transform hover:scale-105 cursor-pointer flex items-center gap-3 2xl:gap-5 3xl:gap-8">
              <svg className="w-8 h-8 2xl:w-12 2xl:h-12 3xl:w-16 3xl:h-16 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M17.05 19.3c-1.25 1.83-2.55 3.65-4.58 3.7-2 .04-2.65-1.18-4.94-1.18-2.3 0-3.03 1.15-4.95 1.2-2 .06-3.52-2-4.78-4.57-2.6-5.38-.68-13.34 4.88-13.4 2.15-.04 3.73 1.45 4.9 1.45 1.17 0 3.35-1.8 5.64-1.54 1 .05 3.8.4 5.4 2.76-4.3 2.65-3.6 10.33 1.2 12.18zm-4.3-15.65c.9-1.1 1.5-2.62 1.34-4.15-1.3.05-2.86.86-3.8 1.94-.83.97-1.57 2.53-1.37 4.04 1.44.1 2.92-.73 3.82-1.83z"/>
              </svg>
              <div className="text-left flex flex-col items-start leading-none gap-1">
                <div className="text-[10px] 2xl:text-sm 3xl:text-lg uppercase font-bold tracking-wider opacity-80">Download on the</div>
                <div className="text-sm 2xl:text-xl 3xl:text-2xl font-bold">App Store</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
