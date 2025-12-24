"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is VLOO only for gifts?",
    answer: "No. VLOO is for any situation where ownership and timing shouldn’t happen at the same moment."
  },
  {
    question: "Is VLOO a wallet or a bank?",
    answer: "Neither. VLOO never holds funds. It only defines how access is revealed."
  },
  {
    question: "Can companies use VLOO?",
    answer: "Yes. VLOO works for compensation, bonuses, and long-term incentives."
  },
  {
    question: "What happens if VLOO disappears?",
    answer: "Nothing happens to your assets. They live on-chain, independent of the platform."
  },
  {
    question: "Do receivers need crypto knowledge?",
    answer: "No. Understanding can come later. Access will wait."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(2); // Default open the 3rd one as in the image

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      data-theme="light" 
      className="w-full min-h-screen lg:h-screen lg:snap-start bg-white text-black flex flex-col items-center justify-center p-4 md:p-8 2xl:p-16 3xl:p-24 relative"
    >
      <div className="w-full max-w-4xl 2xl:max-w-6xl 3xl:max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {}
          }}
          className="space-y-0"
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="border-b border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-8 md:py-10 2xl:py-14 3xl:py-20 flex items-center justify-between text-left group focus:outline-none"
              >
                <span className="font-sans text-xl md:text-3xl 2xl:text-5xl 3xl:text-7xl font-normal tracking-tight">
                  {faq.question}
                </span>
                
                <div className="ml-4 flex-shrink-0 relative flex items-center justify-center w-6 h-6 md:w-8 md:h-8 2xl:w-12 2xl:h-12">
                  {/* Collapsed State: Black Square */}
                  <div 
                    className={cn(
                      "absolute inset-0 bg-black rounded-[5px] md:rounded-[8px] 2xl:rounded-[15px] transition-all duration-300 ease-in-out transform",
                      openIndex === index ? "scale-0 opacity-0" : "scale-100 opacity-100"
                    )}
                  />
                  
                  {/* Expanded State: Gray Circle */}
                  <div 
                    className={cn(
                      "absolute inset-0 rounded-full bg-gray-300 transition-all duration-300 ease-in-out transform",
                      openIndex === index ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    )}
                  />
                </div>
              </button>
              
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-500 ease-in-out",
                  openIndex === index ? "max-h-96 opacity-100 mb-8 md:mb-10" : "max-h-0 opacity-0"
                )}
              >
                <p className="font-sans text-gray-500 text-base md:text-lg 2xl:text-2xl 3xl:text-4xl leading-relaxed max-w-2xl 2xl:max-w-4xl">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
