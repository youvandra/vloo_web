"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What's the process for obtaining the card?",
    answer: "To obtain the card, simply download our app, sign up for an account, and complete the verification process. Once verified, you can order your physical card directly from the dashboard, and it will be shipped to your registered address."
  },
  {
    question: "Are there any restrictions on where I can use the card?",
    answer: "Our card is accepted worldwide wherever major credit cards are accepted. However, there might be restrictions in certain countries due to local regulations. Please check our terms of service for a full list of supported regions."
  },
  {
    question: "Can I track my spending in the app?",
    answer: "Yes, the app lets you track your spending in real time. You can view transaction details, set limits, and receive notifications for every payment made. This helps you manage your finances easily and securely."
  },
  {
    question: "How can I monitor and manage my spending within the app?",
    answer: "The app provides a comprehensive dashboard where you can categorize expenses, set monthly budgets, and view analytics of your spending habits. You can also freeze your card instantly if needed."
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
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
