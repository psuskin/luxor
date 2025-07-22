"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";

interface Service {
  title: string;
  description: string;
  image: string;
  features: string[];
  details: {
    process: string[];
    benefits: string[];
  };
  id?: string;
}

interface ServiceGridProps {
  services: Service[];
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const listItem: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

function ServiceGridContent({ services }: ServiceGridProps) {
  const searchParams = useSearchParams();
  const serviceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const servicesWithIds = services.map((service) => ({
    ...service,
    id: service.title.toLowerCase().replace(/[^\w]+/g, "-"),
  }));

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && serviceRefs.current[hash]) {
      setTimeout(() => {
        serviceRefs.current[hash]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    }
  }, [searchParams]);

  return (
    <div className="grid gap-32">
      {servicesWithIds.map((service, index) => (
        <motion.div
          key={service.title}
          id={service.id}
          ref={(el) => {
            if (service.id) {
              serviceRefs.current[service.id] = el;
            }
          }}
          className="group scroll-mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
              <motion.div
                className="relative h-[500px] md:h-[800px] rounded-[2rem] overflow-hidden"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-[#1e3a8a]/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-700" />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            </div>

            <div className={`${index % 2 === 1 ? "md:pr-12" : "md:pl-12"}`}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2
                  className="text-4xl font-bold mb-6 text-[#1e3a8a]"
                  variants={fadeInUp}
                >
                  {service.title}
                </motion.h2>
                <motion.p
                  className="text-gray-600 text-lg mb-10 leading-relaxed"
                  variants={fadeInUp}
                >
                  {service.description}
                </motion.p>

                <motion.div
                  className="mb-12"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.h3
                    className="text-xl font-semibold mb-6 text-[#1e3a8a]"
                    variants={fadeInUp}
                  >
                    Unsere Leistungen
                  </motion.h3>
                  <div className="grid grid-cols-1 gap-4">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center space-x-4 p-4 rounded-xl bg-[#1e3a8a]/5 hover:bg-[#1e3a8a]/10 transition-colors duration-300"
                        variants={listItem}
                      >
                        <svg
                          className="w-5 h-5 text-[#3b82f6] shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 border border-[#3b82f6]/10 hover:border-[#3b82f6]/20 transition-colors duration-300"
                  >
                    <motion.h3
                      className="text-xl font-semibold mb-4 text-[#1e3a8a]"
                      variants={fadeInUp}
                    >
                      Unser Prozess
                    </motion.h3>
                    <motion.ul
                      className="space-y-3 text-gray-600"
                      variants={staggerContainer}
                    >
                      {service.details.process.map((step, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start space-x-2"
                          variants={listItem}
                        >
                          <span className="font-medium text-[#3b82f6] shrink-0">
                            {idx + 1}.
                          </span>
                          <span>{step}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 border border-[#3b82f6]/10 hover:border-[#3b82f6]/20 transition-colors duration-300"
                  >
                    <motion.h3
                      className="text-xl font-semibold mb-4 text-[#1e3a8a]"
                      variants={fadeInUp}
                    >
                      Ihre Vorteile
                    </motion.h3>
                    <motion.ul
                      className="space-y-3 text-gray-600"
                      variants={staggerContainer}
                    >
                      {service.details.benefits.map((benefit, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start space-x-2"
                          variants={listItem}
                        >
                          <span className="text-[#3b82f6] shrink-0">•</span>
                          <span>{benefit}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

const ServiceGrid = ({ services }: ServiceGridProps) => {
  return (
    <Suspense
      fallback={<div className="grid gap-32 animate-pulse">Loading...</div>}
    >
      <ServiceGridContent services={services} />
    </Suspense>
  );
};

export default ServiceGrid;
