"use client";

import { motion } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";

interface SubHeroProps {
  title: string;
  description: string;
}

export default function SubHero({ title, description }: SubHeroProps) {
  return (
    <section className="relative py-32 bg-blue-950">
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <AnimatedTitle
            as="h1"
            className="text-white mb-6 !text-6xl md:!text-7xl"
          >
            {title}
          </AnimatedTitle>
        </motion.div>
        <motion.p
          className="text-white/90 text-xl max-w-2xl mx-auto font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
