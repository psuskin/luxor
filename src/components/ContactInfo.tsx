"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "Standort",
    items: [
      "LUXOR Glas und Gebäudereinigung",
      "Am Dornbusch 16",
      "25337 Elmshorn",
      "Deutschland",
    ],
  },
  {
    title: "Öffnungszeiten",
    items: [
      "Montag - Freitag | 08:00 - 18:00",
      "Samstag | 09:00 - 14:00",
      "Sonntag | Geschlossen",
    ],
  },
  {
    title: "Kontakt",
    items: ["+49 157 30162305", "info@glanzproservice.online"],
  },
  {
    title: "Unternehmen",
    items: ["Inhaber: Herr Ammar", "Steuernummer: 31/001/1492"],
  },
  {
    title: "Social Media",
    items: ["Instagram", "LinkedIn", "Facebook"],
    links: ["#", "#", "#"],
  },
];

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-10">
      {sections.map((section, index) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
          className="col-span-1"
        >
          <h3 className="text-lg font-medium text-white mb-4">
            {section.title}
          </h3>
          <div className="space-y-1">
            {section.items.map((item, i) =>
              section.links ? (
                <a
                  key={i}
                  href={section.links[i]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/70 hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              ) : (
                <p key={i} className="text-white/70">
                  {item}
                </p>
              )
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
