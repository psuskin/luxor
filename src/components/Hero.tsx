// components/Hero.tsx
"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentName, setCurrentName] = useState(0);

  // Alternate between short and full company name every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentName((prev) => (prev + 1) % 2);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const companyNames = ["GLAS", "GEBÄUDEREINIGUNG"];

  const currentCompanyName = companyNames[currentName];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&auto=format&fit=crop&q=80"
          alt="Kristallklare Fenster spiegeln moderne Architektur wider"
          fill
          className="object-cover scale-105"
          priority
        />
        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-6xl">
          {/* Brand Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-3 mb-12"
          >
            <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
            <span className="text-sm font-light text-white/80 tracking-[0.2em] uppercase">
              Premium Service
            </span>
          </motion.div>

          {/* Hero Headline */}
          <div className="space-y-6 md:space-y-8 mb-12">
            <div className="overflow-hidden">
              <motion.h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] md:leading-[0.85] tracking-tighter"
                initial="hidden"
                animate="visible"
              >
                <motion.span
                  className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  LUXOR
                </motion.span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentName}
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] drop-shadow-sm text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {currentCompanyName}
                  </motion.span>
                </AnimatePresence>
              </motion.h1>
            </div>
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl text-white font-extralight max-w-3xl leading-relaxed tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            >
              Präzise Reinigung, die Räume in
              <span className="text-white font-light">
                {" "}
                makellose Umgebungen verwandelt
              </span>
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          >
            <Button href="/kontakt" variant="primary">
              Kostenlose Beratung
            </Button>
            <Button href="/leistungen" variant="secondary">
              Unsere Leistungen
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-white/60 animate-bounce">
          <span className="text-xs uppercase tracking-widest mb-2">
            Nach unten scrollen
          </span>
          <svg
            className="w-4 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5 z-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </section>
  );
}
