import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-center pt-6 pb-4 z-50 transition-all duration-300 pointer-events-none">
      <div className="bg-white/80 backdrop-blur-sm px-4 py-3 md:px-6 2xl:px-10 2xl:py-5 3xl:px-12 3xl:py-6 rounded-full md:rounded-[15px] 2xl:rounded-[25px] flex items-center justify-between md:justify-center gap-4 md:gap-8 2xl:gap-16 3xl:gap-24 shadow-sm transition-all duration-300 w-[90%] md:w-auto pointer-events-auto">
        <Link href="/" className="font-display font-black text-foreground text-xl 2xl:text-3xl 3xl:text-5xl tracking-[-0.1em]">
          VLOO
        </Link>
        
        {/* Mobile Menu Icon (Placeholder for now, or simple link for mobile) */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="h-8 w-8">
             <span className="sr-only">Menu</span>
             <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </Button>
        </div>

        <div className="hidden md:flex items-center gap-6 2xl:gap-10 3xl:gap-16 text-sm 2xl:text-xl 3xl:text-2xl font-display font-normal text-foreground/60">
          <Link href="#" className="hover:text-vloo-blue transition-colors">
            About
          </Link>
          <Link href="#" className="hover:text-vloo-blue transition-colors">
            Benefit to App
          </Link>
          <Link href="#" className="hover:text-vloo-blue transition-colors">
            Start
          </Link>
          <Link href="#" className="hover:text-vloo-blue transition-colors">
            FAQs
          </Link>
        </div>
      </div>
    </nav>
  );
}
