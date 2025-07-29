"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const handleMobileNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed md:absolute top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="relative group z-50">
            <Image
              src="/luxorLogo.png"
              alt="LUXOR Glas und Gebäudereinigung"
              width={120}
              height={120}
            />
          </Link>

          <div className="hidden md:flex items-center space-x-12">
            <NavLink href="/" label="Startseite" />
            <NavLink href="/fensterreinigung" label="Fensterreinigung" />
            <NavLink href="/leistungen" label="Leistungen" />
            <NavLink href="/kontakt" label="Kontakt" isButton />
          </div>

          <button
            className={`md:hidden w-10 h-10 flex items-center justify-center text-blue-950 z-50 ${
              isMenuOpen ? "fixed right-6" : "relative"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute left-0 top-0 w-full h-0.5 transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45 top-2" : ""
                } bg-blue-950`}
              />
              <span
                className={`absolute left-0 top-2 w-full h-0.5 transition-all duration-200 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                } bg-blue-950`}
              />
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45 bottom-2" : ""
                } bg-blue-950`}
              />
            </div>
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 top-0 left-0 w-full bg-gradient-to-b from-blue-950 to-blue-900 z-30 md:hidden flex flex-col"
            >
              <div className="h-20" /> {/* Spacer for navbar */}
              <div className="flex-1 flex flex-col justify-center items-center px-6 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(255,255,255)_1px,_transparent_0)] bg-[length:20px_20px]" />
                </div>

                <div className="w-full max-w-md mx-auto relative z-50">
                  {[
                    "Startseite",
                    "Fensterreinigung",
                    "Leistungen",
                    "Kontakt",
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 + 0.1 }}
                      className="mb-6"
                    >
                      <MobileNavLink
                        href={i === 0 ? "/" : `/${item.toLowerCase()}`}
                        label={item}
                        onClick={handleMobileNavClick}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  label,
  isButton,
}: {
  href: string;
  label: string;
  isButton?: boolean;
}) {
  if (isButton) {
    return (
      <Link
        href={href}
        className={`relative group px-5 py-2 text-sm font-medium transition-colors duration-300 bg-blue-600 text-white hover:bg-blue-700 rounded-full`}
      >
        <span className="relative z-10">{label}</span>
      </Link>
    );
  }

  return (
    <Link href={href} className="relative group">
      <span
        className={`text-sm font-medium transition-colors duration-200 text-blue-950/90 hover:text-blue-950`}
      >
        {label}
      </span>
      <span
        className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px transition-all duration-300 group-hover:w-full bg-blue-950`}
      />
    </Link>
  );
}

function MobileNavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block w-full text-center py-4 text-2xl font-light text-white hover:text-blue-300 transition-colors duration-300"
    >
      {label}
    </Link>
  );
}
