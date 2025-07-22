"use client";

import { motion } from "framer-motion";

interface CtaSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function CtaSection({
  title,
  description,
  buttonText,
  buttonLink,
}: CtaSectionProps) {
  return (
    <section className="bg-gray-50 py-32">
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-blue-950 mb-6">{title}</h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            {description}
          </p>
          <motion.a
            href={buttonLink}
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 rounded-lg text-lg font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {buttonText}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
