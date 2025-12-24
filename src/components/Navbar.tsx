"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";

export function Navbar({ showCart = false, theme }: { showCart?: boolean; theme?: 'light' | 'dark' }) {
  // 'dark' means dark navbar (for light bg), 'light' means light navbar (for dark bg)
  // Default to 'dark' because the first section (Hero) is white.
  const [navTheme, setNavTheme] = useState<'light' | 'dark'>(theme || 'dark'); 
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  type CartItemStored = { qty?: number };

  useEffect(() => {
    if (theme) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // data-theme="light" (White BG) -> Navbar should be Dark
            // data-theme="dark" (Blue BG) -> Navbar should be Light
            const sectionTheme = entry.target.getAttribute("data-theme");
            if (sectionTheme) {
              setNavTheme(sectionTheme === "light" ? "dark" : "light");
            }
          }
        });
      },
      {
        threshold: 0.55, // Trigger when >55% of section is visible
      }
    );

    // Delay slightly to ensure DOM is ready if needed, though usually fine in useEffect
    const sections = document.querySelectorAll("[data-theme]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    const updateCart = () => {
      try {
        const items = JSON.parse(localStorage.getItem("cartItems") || "[]");
        if (Array.isArray(items)) {
          setCartCount(items.reduce((sum: number, it: CartItemStored) => sum + (it?.qty ?? 1), 0));
        } else {
          setCartCount(0);
        }
      } catch {
        setCartCount(0);
      }
    };
    updateCart();
    const onCartUpdated = () => updateCart();
    window.addEventListener("cart:updated", onCartUpdated as EventListener);
    window.addEventListener("storage", onCartUpdated as EventListener);
    return () => {
      window.removeEventListener("cart:updated", onCartUpdated as EventListener);
      window.removeEventListener("storage", onCartUpdated as EventListener);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Check if we are on the home page
    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-center pt-6 pb-4 z-50 transition-all duration-300 pointer-events-none">
      <div 
        className={cn(
          "relative backdrop-blur-md px-4 py-3 md:px-6 2xl:px-10 2xl:py-5 3xl:px-12 3xl:py-6 rounded-full md:rounded-[15px] 2xl:rounded-[25px] flex items-center justify-between md:justify-center gap-4 md:gap-8 2xl:gap-16 3xl:gap-24 shadow-sm transition-all duration-500 w-[90%] md:w-auto pointer-events-auto",
          navTheme === "dark" 
            ? "bg-black/95 text-white shadow-black/10" 
            : "bg-white/90 text-black shadow-black/5"
        )}
      >
        <Link href="/" onClick={(e) => scrollToSection(e, "hero")} className="font-display font-black text-current text-xl 2xl:text-3xl 3xl:text-5xl tracking-[-0.1em]">
          VLOO
        </Link>
        
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Cart"
            className={cn(
              "relative h-8 w-8 rounded-full bg-white text-black hover:bg-gray-100"
            )}
          >
            <Link href="/cart" aria-label="Cart" className="relative inline-flex items-center justify-center w-full h-full">
              <ShoppingCart className="h-5 w-5" />
            </Link>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-[4px] rounded-full bg-[#0b1cc4] text-white text-[10px] leading-[18px] text-center font-bold pointer-events-none">
                {cartCount}
              </span>
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
            className={cn("h-8 w-8", navTheme === "dark" ? "text-white hover:bg-white/20" : "text-black hover:bg-black/10")}
          >
             <span className="sr-only">Menu</span>
             <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </Button>
        </div>

        <div className={cn(
          "hidden md:flex items-center gap-6 2xl:gap-10 3xl:gap-16 text-sm 2xl:text-xl 3xl:text-2xl font-display font-normal",
          navTheme === "dark" ? "text-white/70" : "text-black/60"
        )}>
          <Link href="/#features" onClick={(e) => scrollToSection(e, "features")} className={cn("transition-colors", navTheme === "dark" ? "hover:text-white" : "hover:text-vloo-blue")}>
            Features
          </Link>
          <Link href="/#how-it-works" onClick={(e) => scrollToSection(e, "how-it-works")} className={cn("transition-colors", navTheme === "dark" ? "hover:text-white" : "hover:text-vloo-blue")}>
            How it Works
          </Link>
          <Link href="/#benefits" onClick={(e) => scrollToSection(e, "benefits")} className={cn("transition-colors", navTheme === "dark" ? "hover:text-white" : "hover:text-vloo-blue")}>
            Benefits
          </Link>
          <Link href="/#faqs" onClick={(e) => scrollToSection(e, "faqs")} className={cn("transition-colors", navTheme === "dark" ? "hover:text-white" : "hover:text-vloo-blue")}>
            FAQs
          </Link>
          <div className="flex items-center gap-4">
            <Button
              asChild
              className={cn(
                "rounded-full px-6 py-3 font-bold",
                navTheme === "dark" ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"
              )}
            >
              <Link href="/buy-card">Buy Card</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className={cn(
                "relative h-10 w-10 rounded-full",
                navTheme === "dark" ? "text-white hover:bg-white/20" : "text-black hover:bg-black/10"
              )}
            >
              <Link href="/cart" aria-label="Cart">
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-[4px] rounded-full bg-[#0b1cc4] text-white text-[10px] leading-[18px] text-center font-bold pointer-events-none">
                    {cartCount}
                  </span>
                )}
              </Link>
            </Button>
          </div>
        </div>

        {isOpen && (
          <div
            className={cn(
              "absolute top-full left-0 right-0 mt-2 rounded-2xl border overflow-hidden md:hidden",
              navTheme === "dark" ? "bg-black text-white border-white/10" : "bg-white text-black border-black/10"
            )}
          >
            <div className="flex flex-col p-3 gap-2">
              <Link href="/cart" className="px-3 py-2 rounded-lg hover:bg-white/10 flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <ShoppingCart className="h-4 w-4" />
                Cart
              </Link>
              <Link href="/#features" onClick={(e) => scrollToSection(e, "features")} className="px-3 py-2 rounded-lg hover:bg-white/10">Features</Link>
              <Link href="/#how-it-works" onClick={(e) => scrollToSection(e, "how-it-works")} className="px-3 py-2 rounded-lg hover:bg-white/10">How it Works</Link>
              <Link href="/#benefits" onClick={(e) => scrollToSection(e, "benefits")} className="px-3 py-2 rounded-lg hover:bg-white/10">Benefits</Link>
              <Link href="/#faqs" onClick={(e) => scrollToSection(e, "faqs")} className="px-3 py-2 rounded-lg hover:bg-white/10">FAQs</Link>
              <Button
                asChild
                className={cn(
                  "mt-2 rounded-lg px-4 py-3 font-bold w-full",
                  navTheme === "dark" ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"
                )}
              >
                <Link href="/buy-card" onClick={() => setIsOpen(false)}>Buy Card</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
