"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const main = document.querySelector("main");
    
    const handleScroll = () => {
      // Check both window and main element for scroll position
      // On desktop, main has overflow-y-scroll, so we check main.scrollTop
      // On mobile, body scrolls, so we check window.scrollY
      const scrollTop = window.scrollY || main?.scrollTop || 0;
      
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach listener to window (mobile)
    window.addEventListener("scroll", handleScroll);
    
    // Attach listener to main element (desktop snap scroll)
    if (main) {
      main.addEventListener("scroll", handleScroll);
    }

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (main) {
        main.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToTop = () => {
    // Scroll both to cover mobile and desktop cases
    window.scrollTo({ top: 0, behavior: "smooth" });
    const main = document.querySelector("main");
    if (main) {
      main.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 md:p-4 bg-pale-violet text-black rounded-full shadow-2xl border border-black/10 hover:brightness-90 transition-all"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
