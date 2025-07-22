"use client";

import { motion } from "framer-motion";

interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ProcessStepsProps {
  title: string;
  description: string;
  steps: Step[];
}

export default function ProcessSteps({
  title,
  description,
  steps,
}: ProcessStepsProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-blue-950 mb-4">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-blue-50 text-blue-600">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
