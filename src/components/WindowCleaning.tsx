"use client";

import Image from "next/image";
import Button from "./ui/Button";
import AnimatedTitle from "./AnimatedTitle";

export default function WindowCleaning() {
  const features = [
    {
      title: "Vertrauenswürdiger Partner",
      description: "10+ Jahre Erfahrung in professioneller Reinigung",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Modernste Technologie",
      description: "Fortschrittliche Reinigungstechniken & Ausrüstung",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M13 10V3L4 14h7v7l9-11h-7z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Nachhaltige Reinigung",
      description: "Umweltfreundliche & effektive Prozesse",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="min-h-screen py-16 md:py-24 bg-[#1e3a8a] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(255,255,255)_1px,_transparent_0)] bg-[length:32px_32px] opacity-5" />

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Title Section - Always First */}
          <div className="relative z-10 order-1">
            <div className="max-w-xl">
              <span className="inline-block text-[#93c5fd] text-sm font-medium tracking-wider uppercase mb-6">
                Warum LUXOR wählen
              </span>

              <div className="space-y-4 mb-12">
                <AnimatedTitle
                  as="h2"
                  className="text-white !text-5xl sm:!text-6xl md:!text-7xl"
                  delay={0}
                >
                  Professionelle
                </AnimatedTitle>
                <AnimatedTitle
                  as="h2"
                  className="text-white !text-5xl sm:!text-6xl md:!text-7xl"
                  delay={0.2}
                >
                  Reinigung auf
                </AnimatedTitle>
                <AnimatedTitle
                  as="h2"
                  className="text-[#93c5fd] !text-5xl sm:!text-6xl md:!text-7xl"
                  delay={0.4}
                >
                  höchstem Niveau
                </AnimatedTitle>
              </div>

              <p className="text-white/80 text-lg leading-relaxed mb-12 max-w-lg">
                Bei LUXOR steht Qualität an erster Stelle. Unser Engagement für
                erstklassige Reinigungsdienstleistungen basiert auf jahrelanger
                Erfahrung.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-12">
                {[
                  { number: "10+", label: "Jahre" },
                  { number: "5000+", label: "Kunden" },
                  { number: "100%", label: "Qualität" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                  >
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Button href="/leistungen" variant="secondary">
                Unsere Leistungen
              </Button>
            </div>
          </div>

          {/* Image Section - Second on mobile, first on desktop */}
          <div className="relative order-2 lg:order-1">
            <div className="relative mb-8">
              <div className="absolute -inset-4 bg-[#3b82f6]/20 rounded-[2.5rem] transform rotate-2" />
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&auto=format&fit=crop&q=80"
                  alt="LUXOR Professional Cleaning"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/80 via-transparent" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#3b82f6] to-[#93c5fd] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                  <div className="relative flex flex-row sm:flex-col items-center sm:items-center sm:text-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#93c5fd]/10 flex items-center justify-center text-[#93c5fd] flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1 sm:mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
