"use client";

import { useEffect, useRef, useState } from "react";

export function HeroCard({ variant = "black", staticOnMobile = false, label = "Personal" }: { variant?: "black" | "white" | "blue", staticOnMobile?: boolean, label?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);
  const isDraggingRef = useRef(false);
  const lastClientXRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const palette =
    variant === "white"
      ? { bg: "bg-white", border: "border-black/10", text: "#0b1cc4" }
      : variant === "blue"
      ? { bg: "bg-[#0b1cc4]", border: "border-black/10", text: "#e3d9c2" }
      : { bg: "bg-black", border: "border-white/10", text: "#e3d9c2" };

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const loop = () => {
      if (!isDraggingRef.current && !(isMobile && staticOnMobile)) {
        // Auto-spin: -0.3 degrees per frame (matches roughly 20s per 360deg at 60fps)
        angleRef.current -= 0.3;
      }
      
      if (cardRef.current) {
        cardRef.current.style.transform = (isMobile && staticOnMobile) ? "" : `rotateX(${angleRef.current}deg)`;
      }
      
      rafRef.current = requestAnimationFrame(loop);
    };

    if (isMobile && staticOnMobile) {
      if (cardRef.current) {
        cardRef.current.style.transform = "";
      }
      return;
    }

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile, staticOnMobile]);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    lastClientXRef.current = e.clientX;
    // Capture pointer to ensure we get events even if mouse leaves the element
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    // Add grabbing cursor
    if (cardRef.current) cardRef.current.style.cursor = "grabbing";
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;

    const deltaX = e.clientX - lastClientXRef.current;
    lastClientXRef.current = e.clientX;

    // Adjust sensitivity as needed. 
    // Moving mouse left (negative delta) -> should decrease angle (spin left)
    // Moving mouse right (positive delta) -> should increase angle (spin right)
    angleRef.current += deltaX * 0.5;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    if (cardRef.current) cardRef.current.style.cursor = "grab";
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
      {/* Tilt and Animation Wrapper */}
      <div className="md:transform md:rotate-[70deg] z-20 md:animate-float preserve-3d">
        <div 
          ref={cardRef}
          className="preserve-3d md:cursor-grab touch-none"
          onPointerDown={(e) => { if (isMobile && staticOnMobile) return; handlePointerDown(e); }}
          onPointerMove={(e) => { if (isMobile && staticOnMobile) return; handlePointerMove(e); }}
          onPointerUp={(e) => { if (isMobile && staticOnMobile) return; handlePointerUp(e); }}
          onPointerCancel={(e) => { if (isMobile && staticOnMobile) return; handlePointerUp(e); }}
          onPointerLeave={(e) => { if (isMobile && staticOnMobile) return; handlePointerUp(e); }}
        >
          {/* Main Card */}
          <div className={`relative w-[22.8rem] h-[15.2rem] md:w-[475px] md:h-[19rem] 2xl:w-[712px] 2xl:h-[475px] 3xl:w-[997px] 3xl:h-[665px] ${palette.bg} rounded-[15px] 2xl:rounded-[40px] 3xl:rounded-[60px] shadow-2xl overflow-hidden border ${palette.border} pointer-events-none`}>
            
            {/* Simple Pattern (Top-Left) */}
        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke={palette.text} strokeWidth="2" fill="none"/>
              </pattern>
              <linearGradient id="fade-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="40%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <mask id="fade-mask">
                <rect width="100%" height="100%" fill="url(#fade-gradient)" />
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" mask="url(#fade-mask)" />
          </svg>
        </div>

        {/* Abstract Shapes (Aesthetic Background - Toned down slightly) */}
        {/* Large soft glow top-left */}
        <div className="absolute -top-[30%] -left-[20%] w-[80%] h-[120%] bg-[#e3d9c2] opacity-[0.1] blur-[80px] rounded-full pointer-events-none mix-blend-overlay"></div>
        {/* Sharper abstract curve top-left */}
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[80%] bg-[#e3d9c2] opacity-[0.1] rounded-full blur-[40px] pointer-events-none"></div>
        {/* Subtle accent bottom-right */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[80%] bg-[#d199f9] opacity-[0.1] blur-[60px] rounded-full pointer-events-none"></div>

        <div className="absolute top-5 right-5 2xl:top-10 2xl:right-10 3xl:top-16 3xl:right-16 z-30">
          <span style={{ color: palette.text }} className="font-display text-lg md:text-xl 2xl:text-4xl 3xl:text-6xl font-normal tracking-wide">
            {label}
          </span>
        </div>
        
        <div className="absolute bottom-[-10px] left-4 2xl:bottom-[-15px] 2xl:left-8 3xl:bottom-[-20px] 3xl:left-12 z-30">
          <h2 style={{ color: palette.text }} className="font-display text-[5rem] md:text-[6.5rem] 2xl:text-[10rem] 3xl:text-[14rem] font-black tracking-tighter leading-none select-none whitespace-nowrap">
            VLOO
          </h2>
        </div>
      </div>
    </div>
  </div>

      {/* Hand placeholder (using a shape for now as we don't have the asset) */}
      <div className="absolute bottom-0 right-0 md:right-10 w-64 h-64 md:w-96 md:h-80 2xl:w-[600px] 2xl:h-[500px] 3xl:w-[800px] 3xl:h-[700px] bg-pale-violet/50 rounded-full blur-3xl -z-10"></div>
    </div>
  );
}
