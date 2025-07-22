"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium text-base transition-colors duration-200";

  const variants = {
    primary: `${baseStyles} bg-brand-primary text-white hover:bg-brand-primary`,
    secondary: `${baseStyles} bg-white/5 backdrop-blur-xl border border-white/20 text-white hover:bg-white/10`,
  };

  const buttonContent = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === "secondary" && (
        <svg
          className="ml-3 w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 10H16M16 10L11 5M16 10L11 15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );

  const motionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 },
  };

  if (href) {
    return (
      <Link href={href} className={`group ${variants[variant]} ${className}`}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`group ${variants[variant]} ${className}`}
      {...motionProps}
    >
      {buttonContent}
    </motion.button>
  );
}
