"use client";

import { motion } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";
import ContactInfo from "./ContactInfo";

export default function QuestionsSection() {
  return (
    <div className="text-white">
      <div className="mb-12">
        <AnimatedTitle as="h2" className="text-white mb-2" delay={0}>
          Sie haben Fragen,
        </AnimatedTitle>
        <AnimatedTitle as="h2" className="text-white mb-6" delay={0.2}>
          Wir haben Antworten
        </AnimatedTitle>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-white/80 text-lg max-w-lg"
        >
          Entdecken Sie unseren professionellen Reinigungsservice. Wir sind
          hier, um Ihnen bei allen Reinigungsanforderungen mit höchster Qualität
          zu helfen.
        </motion.p>
      </div>
      <ContactInfo />
    </div>
  );
}
