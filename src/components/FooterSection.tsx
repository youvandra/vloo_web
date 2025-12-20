"use client";

import { useEffect, useRef, useState } from "react";
import { Bitcoin, Wallet, ArrowRightLeft, ShieldCheck, Zap, Globe, Layers, Coins } from "lucide-react";
import { cn } from "@/lib/utils";
import Matter from "matter-js";

// Coin Data with sizes for physics bodies
const COINS = [
  { icon: Bitcoin, size: 80, color: "#0b1cc4", label: "btc", scale: 1.2 },
  { icon: Wallet, size: 48, color: "#0b1cc4", label: "wallet", scale: 1 },
  { icon: Zap, size: 60, color: "#0b1cc4", label: "zap", scale: 1.1 },
  { icon: ArrowRightLeft, size: 50, color: "#0b1cc4", label: "arrow", scale: 0.9 },
  { icon: Globe, size: 100, color: "#0b1cc4", label: "globe", scale: 1.4 },
  { icon: Layers, size: 55, color: "#0b1cc4", label: "layers", scale: 1 },
  { icon: Coins, size: 70, color: "#0b1cc4", label: "coins", scale: 1.15 },
  // Duplicate some for more "rain"
  { icon: Bitcoin, size: 60, color: "#0b1cc4", label: "btc-small", scale: 0.9 },
  { icon: Zap, size: 45, color: "#0b1cc4", label: "zap-small", scale: 0.8 },
];

export function FooterSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const bodiesRef = useRef<Map<string, Matter.Body>>(new Map());
  const coinElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const footerContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!containerRef.current || isMobile) return;

    // 1. Setup Matter.js Engine
    const Engine = Matter.Engine,
          Render = Matter.Render,
          World = Matter.World,
          Bodies = Matter.Bodies,
          Runner = Matter.Runner,
          Composite = Matter.Composite,
          Events = Matter.Events;

    const engine = Engine.create();
    engineRef.current = engine;
    
    const world = engine.world;
    const { width, height } = containerRef.current.getBoundingClientRect();

    // 2. Create Boundaries (Walls & Ground)
    
    // Determine the Y position for the ground based on the footer content
    // We want the coins to bounce on the border-t of the content section
    let groundY = height + 40; // Default fallback
    if (footerContentRef.current) {
      // Get relative position of the content section
      const contentRect = footerContentRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const relativeTop = contentRect.top - containerRect.top;
      
      // Ground center Y = (Top edge) + (Height / 2)
      // We want Top edge = relativeTop
      groundY = relativeTop + 50; 
    }

    const ground = Bodies.rectangle(width / 2, groundY, width, 100, { 
      isStatic: true,
      render: { visible: false } 
    });
    
    const leftWall = Bodies.rectangle(-50, height / 2, 100, height * 2, { 
      isStatic: true,
      render: { visible: false }
    });
    
    const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height * 2, { 
      isStatic: true,
      render: { visible: false }
    });

    Composite.add(world, [ground, leftWall, rightWall]);

    // 3. Create Coin Bodies
    COINS.forEach((coin, index) => {
      // Random X position within width
      const x = Math.random() * (width - 100) + 50;
      // Start higher up to rain down, but ensure some are visible immediately
      const y = Math.random() * -500 - 50; 
      
      // Radius is roughly half the size (px)
      const radius = (coin.size * coin.scale) / 2;

      const body = Bodies.circle(x, y, radius, {
        restitution: 0.6, // Bounciness (0-1)
        friction: 0.05,   // Low friction for rolling
        frictionAir: 0.005, // Less air resistance -> faster fall
        density: 0.001,
        label: `coin-${index}`,
        isStatic: false // Always dynamic
      });

      bodiesRef.current.set(`coin-${index}`, body);
      Composite.add(world, body);
    });

    // 4. Run the engine
    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    // 5. Custom Render Loop via requestAnimationFrame
    let animationFrameId: number;

    const renderLoop = () => {
      // Sync DOM elements to physics bodies
      COINS.forEach((_, index) => {
        const body = bodiesRef.current.get(`coin-${index}`);
        const element = coinElementsRef.current[index];

        if (body && element) {
          const { x, y } = body.position;
          const angle = body.angle;

          // Update CSS transform
          // We subtract radius because DOM position is top-left, but Body position is center
          // Actually, if we center the element with transform: translate(-50%, -50%), we can use x,y directly.
          // Let's set the elements to be absolute with top:0 left:0 and use transform for everything.
          element.style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad)`;
        }
      });
      
      animationFrameId = requestAnimationFrame(renderLoop);
    };
    
    renderLoop();
    
    // Observer removed - we want them to rain immediately/always be active
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      Runner.stop(runner);
      Engine.clear(engine);
      // Observer removed
    };
  }, [isMobile]);

  return (
    <footer ref={containerRef} data-theme="light" className="w-full bg-white text-black pt-20 pb-12 overflow-hidden relative border-t border-black/10 lg:snap-start min-h-screen flex flex-col justify-between">
      
      {/* Physics Container (Behind content) */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {COINS.map((coin, index) => {
          // Calculate actual pixel size based on scale
          const sizePx = coin.size * coin.scale;
          
          if (isMobile) {
            return null;
          }

          return (
            <div
              key={index}
              ref={(el) => { coinElementsRef.current[index] = el; }}
              className="absolute top-0 left-0 flex items-center justify-center rounded-full bg-[#0b1cc4] text-white shadow-lg"
              style={{
                width: sizePx,
                height: sizePx,
                // Center the element on its coordinate so x,y maps to center
                marginLeft: -sizePx / 2,
                marginTop: -sizePx / 2,
                // Initial off-screen position to avoid flash
                transform: 'translate(-1000px, -1000px)' 
              }}
            >
              <coin.icon size={coin.size * 0.6} strokeWidth={2} />
            </div>
          );
        })}
      </div>

      {/* Marquee Section */}
      <div className="w-full overflow-hidden mb-20 relative z-10 mt-32 md:mt-48">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center mx-4">
              <span className="font-display font-black text-4xl md:text-6xl text-black opacity-90 uppercase tracking-tighter">
                SMART TOOLS FOR CRYPTO
              </span>
              <span className="mx-4 text-[#0b1cc4] text-4xl md:text-6xl">•</span>
            </div>
          ))}
        </div>
      </div>
      {/* Hold to rain */}

      {/* Bottom Footer Content */}
      <div className="max-w-[1800px] mx-auto px-4 md:px-8 2xl:px-16 relative z-10 w-full">
        <div ref={footerContentRef} className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 border-t border-black/10 pt-12">
          
          {/* Left Column: Brand & Description */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="font-display text-2xl text-black font-bold">Simplify Your Spending</h3>
            <p className="font-sans text-gray-500 max-w-md leading-relaxed">
              Effortlessly manage your funds, make secure payments, and access crypto with ease — anywhere, anytime.
            </p>
          </div>

          {/* Right Columns: Links */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="font-sans text-black font-semibold">Navigation</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-black transition-colors">About</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Card</a></li>
                <li><a href="#" className="hover:text-black transition-colors">App</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-sans text-black font-semibold">About Us</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-black transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-sans text-black font-semibold">Consent</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-black transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright / Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs md:text-sm">
          <p>© 2024 VLOO Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {/* Social icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
