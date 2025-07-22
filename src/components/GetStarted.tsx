"use client";

import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/24/outline";
import Button from "./ui/Button";
import AnimatedTitle from "./AnimatedTitle";

export default function GetStarted() {
  return (
    <section className="relative h-[500px] sm:h-[600px] overflow-hidden rounded-xl sm:rounded-[2rem] mx-2 sm:mx-4">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&auto=format&fit=crop&q=80"
          alt="Professioneller Reinigungsservice"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0F172A]/90" />
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sparkle Elements - Hidden on small mobile */}
        <div className="absolute top-20 right-10 hidden sm:block">
          <div className="w-10 sm:w-16 h-10 sm:h-16 text-brand-primary rotate-12">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
        </div>
        <div className="absolute top-40 right-32 hidden sm:block">
          <div className="w-6 sm:w-8 h-6 sm:h-8 text-brand-primary -rotate-12">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2 sm:space-y-4">
          <AnimatedTitle
            as="h2"
            className="text-white !text-3xl sm:!text-4xl md:!text-7xl"
            delay={0}
          >
            Professionelle <span className="text-brand-primary">Reinigung</span>
          </AnimatedTitle>
          <AnimatedTitle
            as="h2"
            className="text-white !text-3xl sm:!text-4xl md:!text-7xl"
            delay={0.2}
          >
            <span className="text-brand-primary">Zum besten</span> Preis.
          </AnimatedTitle>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-12">
          <Button href="/kontakt" variant="primary">
            Jetzt Kontakt aufnehmen
          </Button>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-white/60 text-base sm:text-lg">
              Brauchen Sie Hilfe?
            </span>
            <a
              href="tel:+4930123456789"
              className="inline-flex items-center gap-1 sm:gap-2 text-white text-lg sm:text-xl font-medium hover:text-brand-primary transition-colors"
            >
              <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="whitespace-nowrap">(+49) 30 1234 5678</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
