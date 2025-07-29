"use client";

import { SparklesIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";
import Link from "next/link";
import {
  WindowIcon,
  BuildingOfficeIcon,
  SparklesIcon as CleaningIcon,
  WrenchScrewdriverIcon,
  BuildingStorefrontIcon,
  CloudIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

export default function AboutLuxor() {
  const services = [
    {
      title: "Glasreinigung\nprivat & gewerblich",
      description:
        "Professionelle Reinigung aller Glasflächen für Privathaushalte und Unternehmen mit modernster Technik.",
      icon: <WindowIcon className="w-7 h-7" strokeWidth={2} />,
      href: "/leistungen#glasreinigung",
    },
    {
      title: "Treppenhaus-\nreinigung",
      description:
        "Regelmäßige und gründliche Reinigung von Treppenhäusern für ein sauberes und einladendes Ambiente.",
      icon: <BuildingOfficeIcon className="w-7 h-7" strokeWidth={2} />,
      href: "/leistungen#treppenhausreinigung",
    },
    {
      title: "Unterhalts-\nreinigung",
      description:
        "Kontinuierliche Reinigung und Pflege für dauerhaft saubere und hygienische Räumlichkeiten.",
      icon: <CleaningIcon className="w-7 h-7" strokeWidth={2} />,
      href: "/leistungen#unterhaltsreinigung",
    },
    {
      title: "Sonder-\nreinigung",
      description:
        "Spezialisierte Reinigungsservices für besondere Anforderungen und spezifische Situationen.",
      icon: <WrenchScrewdriverIcon className="w-7 h-7" strokeWidth={2} />,
      href: "/leistungen#sonderreinigung",
    },
    {
      title: "Bauzwischen-\nreinigung",
      description:
        "Professionelle Reinigung während und nach Bauarbeiten für einen sauberen Übergang zur Nutzung.",
      icon: <BuildingStorefrontIcon className="w-7 h-7" strokeWidth={2} />,
      href: "/leistungen#bauzwischenreinigung",
    },
    {
      title: "Winter-\ndienst",
      description:
        "Professioneller Winterdienst für sichere und saubere Wege bei Schnee und Eis. Schneeräumung und Streudienst.",
      icon: <CloudIcon className="w-7 h-7" strokeWidth={2} />,
      href: "/leistungen#winterdienst",
    },
    {
      title: "Entrümpelung",
      description:
        "Professionelle Entrümpelung und Räumung von Wohnungen, Häusern und Gewerberäumen. Schnell und zuverlässig.",
      icon: <TruckIcon className="w-7 h-7" strokeWidth={2} />,
      href: "/leistungen#entruempelung",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-6xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8"
          >
            <SparklesIcon className="w-4 h-4 text-[#3b82f6]" />
            <span className="text-sm font-medium text-[#1e3a8a] tracking-wide uppercase">
              Unsere Leistungen
            </span>
          </motion.div>

          <motion.h2 initial="hidden" animate="visible">
            <AnimatedTitle
              as="span"
              delay={0.5}
              className="text-2xl md:text-3xl lg:text-3xl text-[#1e3a8a]"
            >
              Wir bieten eine breite Palette an
            </AnimatedTitle>
            <AnimatedTitle
              as="span"
              delay={0.7}
              className="text-2xl md:text-3xl lg:text-3xl text-[#1e3a8a]"
            >
              Reinigungsdienstleistungen
            </AnimatedTitle>
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group relative bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-500 h-[400px] flex flex-col"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-[1.75rem] font-bold text-[#1e3a8a] leading-tight whitespace-pre-line">
                  {service.title}
                </h3>
                <div className="w-14 h-14 rounded-full bg-[#f0f7ff] flex items-center justify-center text-[#3b82f6]">
                  {service.icon}
                </div>
              </div>

              <div className="h-px w-full bg-gray-100 my-8" />

              <p className="text-gray-500 text-base leading-relaxed mb-8">
                {service.description}
              </p>

              <div className="mt-auto flex justify-end">
                <Link
                  href={service.href}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 text-gray-400 group-hover:bg-[#3b82f6] group-hover:text-white transition-all duration-300"
                  aria-label={`Mehr über ${
                    service.title.split("\n")[0]
                  } erfahren`}
                >
                  <svg
                    className="w-10 h-10 transform group-hover:translate-x-0.5 transition-transform duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
