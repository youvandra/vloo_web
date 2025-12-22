 "use client";
 
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { HeroCard } from "@/components/ui/HeroCard";

export default function BuyCardPage() {
  const [variant, setVariant] = useState<"black" | "white" | "blue">("black");
  const [cardType, setCardType] = useState<"Personal" | "Gift" | "Business">("Personal");
  return (
    <main className="w-full bg-white text-black min-h-screen">
      <Navbar />
      <section className="w-full min-h-screen flex items-start md:items-center justify-center pt-2 md:pt-28 pb-6 md:pb-20 px-4 md:px-8 2xl:px-16">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-12 items-start">
          <div className="space-y-3 md:space-y-8 order-2 md:order-1 -mt-16 md:mt-0">
            <h1 className="font-display text-5xl md:text-7xl 2xl:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
              Buy Your Vloo Card
            </h1>
            <p className="font-sans text-lg 2xl:text-2xl text-gray-600 max-w-xl">
              Order a physical card and start spending your digital assets anywhere.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <div className="font-sans text-sm text-gray-500">Choose color</div>
                  <div className="flex gap-3 mt-2">
                    <button
                      onClick={() => setVariant("black")}
                      aria-label="Black card"
                      className={`h-10 w-10 rounded-full bg-black border ${variant === "black" ? "ring-2 ring-black" : "border-black/10"}`}
                    />
                    <button
                      onClick={() => setVariant("white")}
                      aria-label="White card"
                      className={`h-10 w-10 rounded-full bg-white border ${variant === "white" ? "ring-2 ring-black" : "border-black/10"}`}
                    />
                    <button
                      onClick={() => setVariant("blue")}
                      aria-label="Blue card"
                      className={`h-10 w-10 rounded-full bg-[#0b1cc4] border ${variant === "blue" ? "ring-2 ring-[#0b1cc4]" : "border-black/10"}`}
                    />
                  </div>
                </div>
                <div className="w-px self-stretch bg-black/10" />
                <div className="rounded-2xl border border-black/10 p-4 min-w-[180px]">
                  <label htmlFor="card-type" className="text-xs text-gray-500">Card Type</label>
                  <select
                    id="card-type"
                    value={cardType}
                    onChange={(e) => setCardType(e.target.value as "Personal" | "Gift" | "Business")}
                    className="mt-2 w-full rounded-lg border border-black/10 bg-white text-black text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/20"
                    aria-label="Select card type"
                  >
                    <option value="Personal">Personal</option>
                    <option value="Gift">Gift</option>
                    <option value="Business">Business</option>
                  </select>
                </div>
              </div>
              <div className="border-t border-black/10" />
            </div>
            <div className="flex items-center justify-between gap-6">
              <div className="text-3xl 2xl:text-5xl font-black tracking-tight">$29</div>
              <Button className="rounded-full bg-black text-white hover:bg-gray-900 px-8 py-6 text-base font-bold">
                Buy Card
              </Button>
            </div>
            <div className="text-xs font-sans text-gray-500">Includes activation and standard delivery</div>
          </div>
          <div className="relative h-[420px] md:h-[600px] flex items-center justify-center order-1 md:order-2 mt-8 md:mt-0 mb-4 md:mb-0">
            <div className="scale-[0.75] md:scale-100">
              <HeroCard variant={variant} staticOnMobile label={cardType} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
