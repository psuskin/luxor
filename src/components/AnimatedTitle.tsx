"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedTitleProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "span";
}

const AnimatedTitle = ({
  children,
  className = "",
  delay = 0,
  as = "h1",
}: AnimatedTitleProps) => {
  const Component = motion[as];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="overflow-hidden">
      <Component
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-[0.85] tracking-tighter ${className}`}
      >
        <motion.span
          className="block"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.5,
            delay: delay,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {children}
        </motion.span>
      </Component>
    </div>
  );
};

export default AnimatedTitle;
