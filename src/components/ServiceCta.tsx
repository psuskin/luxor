"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";

interface ServiceCtaProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function ServiceCta({
  title,
  description,
  buttonText,
  buttonLink,
}: ServiceCtaProps) {
  return (
    <section className="py-16 bg-blue-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(255,255,255)_1px,_transparent_0)] bg-[length:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto mb-10 text-blue-100 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              href={buttonLink}
              variant="primary"
              className="px-8 py-4 text-lg"
            >
              {buttonText}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
