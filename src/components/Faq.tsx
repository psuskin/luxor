"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QuestionMarkCircleIcon, PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Button from "./ui/Button";
import AnimatedTitle from "./AnimatedTitle";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Welche Arten von Räumen reinigen Sie?",
      answer: (
        <div className="space-y-4">
          <p>
            Wir bieten professionelle Reinigungsservices für verschiedene
            Räumlichkeiten an:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Privathaushalte und Wohnungen
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Büros und Geschäftsräume
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Treppenhäuser und Gemeinschaftsbereiche
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Baustellen und Renovierungsprojekte
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "Sind Ihre Reinigungsprodukte umweltfreundlich?",
      answer: (
        <div className="space-y-4">
          <p>Ja, bei LUXOR legen wir großen Wert auf Nachhaltigkeit:</p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Ausschließlich umweltfreundliche Reinigungsmittel
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Biologisch abbaubare Produkte
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Ressourcenschonende Reinigungsmethoden
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Allergiker-freundliche Optionen verfügbar
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "Wie kann ich einen Reinigungstermin buchen?",
      answer: (
        <div className="space-y-4">
          <p>Die Terminbuchung ist einfach und flexibel:</p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Online über unser Buchungsformular
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Telefonisch unter unserer Servicenummer
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Per E-Mail mit Ihren Wunschtermin
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Persönliche Beratung und individuelles Angebot
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "Muss ich während der Reinigung anwesend sein?",
      answer: (
        <div className="space-y-4">
          <p>
            Nein, Ihre Anwesenheit ist nicht erforderlich. Wir bieten
            verschiedene Optionen:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Schlüsselübergabe nach Vereinbarung
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Sichere und diskrete Durchführung
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Detaillierte Dokumentation der Leistungen
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Flexible Terminabsprache
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "Was passiert, wenn ich mit dem Service nicht zufrieden bin?",
      answer: (
        <div className="space-y-4">
          <p>Ihre Zufriedenheit hat für uns höchste Priorität:</p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              100% Zufriedenheitsgarantie
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Umgehende Nachbesserung bei Mängeln
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Kostenlose Nachbearbeitung
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Persönlicher Ansprechpartner für Feedback
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <QuestionMarkCircleIcon className="w-5 h-5 text-brand-primary" />
              <span className="text-sm font-medium uppercase tracking-wider text-brand-primary">
                Häufig gestellte Fragen
              </span>
            </motion.div>

            <div className="space-y-4">
              <AnimatedTitle as="h2" className="text-gray-900" delay={0}>
                Sie haben <span className="text-brand-primary">Fragen</span>,
              </AnimatedTitle>
              <AnimatedTitle as="h2" className="text-gray-900" delay={0.2}>
                Wir haben <span className="text-brand-primary">Antworten</span>
              </AnimatedTitle>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative h-[600px]"
            >
              <div
                className="absolute left-0 top-0 w-[85%] h-[85%] overflow-hidden"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
                  borderRadius: "3rem 8rem 0 3rem",
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&auto=format&fit=crop&q=80"
                    alt="Professional Cleaning Service"
                    className="object-cover scale-[1.02] hover:scale-[1.05] transition-transform duration-700"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent" />
                </div>
              </div>

              <div
                className="absolute right-0 bottom-0 w-[60%] h-[60%] overflow-hidden"
                style={{
                  clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 15%)",
                  borderRadius: "8rem 3rem 3rem 0",
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="https://media.istockphoto.com/id/1570318885/photo/the-concept-of-cleaning-services-for-premises.jpg?s=612x612&w=0&k=20&c=hy3mucMJ-E-kjj5AU4m_T2qcxbbFloqe5zn40JCf7lU="
                    alt="Window Cleaning Detail"
                    className="object-cover scale-[1.02] hover:scale-[1.05] transition-transform duration-700"
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent" />
                </div>
              </div>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`rounded-2xl transition-all duration-200 ${
                    openIndex === index
                      ? "bg-brand-primary-50 border border-brand-primary-100"
                      : "bg-gray-50/50 border border-gray-100 hover:border-gray-200"
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="flex items-center justify-between w-full p-6 text-left"
                  >
                    <span className="font-medium text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 ml-4 p-2 rounded-full transition-colors duration-200 ${
                        openIndex === index
                          ? "bg-brand-primary-100 text-brand-primary"
                          : "bg-white text-gray-400"
                      }`}
                    >
                      <PlusIcon
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openIndex === index ? "rotate-45" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-gray-600">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8 text-center"
              >
                <p className="text-gray-600 mb-6">
                  Noch Fragen? Wir sind hier, um zu helfen.
                </p>
                <Button href="/kontakt" variant="primary">
                  Kontakt aufnehmen
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
