"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./ui/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "allgemein",
    message: "",
    newsletter: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-colors duration-200 text-gray-900 text-sm";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-950 mb-2">
          Sagen Sie uns, was Sie brauchen
        </h2>
        <p className="text-gray-600 text-sm">
          Unser Team steht Ihnen für alle Anfragen zur Verfügung.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            required
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className={inputClasses}
            placeholder="Vorname"
          />
          <input
            type="text"
            required
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            className={inputClasses}
            placeholder="Nachname"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={inputClasses}
            placeholder="E-Mail-Adresse"
          />
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className={inputClasses}
            placeholder="Telefonnummer"
          />
        </div>

        <div>
          <div className="text-sm font-medium text-gray-700 mb-3">
            Art der Anfrage
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { value: "fensterreinigung", label: "Fensterreinigung" },
              { value: "allgemein", label: "Allgemein", selected: true },
              { value: "buroreinigung", label: "Büroreinigung" },
              { value: "hausreinigung", label: "Hausreinigung" },
              { value: "sonderreinigung", label: "Sonderreinigung" },
            ].map((option) => (
              <label
                key={option.value}
                className={`px-4 py-2 rounded-lg text-sm cursor-pointer transition-all duration-200 ${
                  formData.inquiryType === option.value
                    ? "bg-blue-600 text-white"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <input
                  type="radio"
                  name="inquiryType"
                  value={option.value}
                  checked={formData.inquiryType === option.value}
                  onChange={(e) =>
                    setFormData({ ...formData, inquiryType: e.target.value })
                  }
                  className="sr-only"
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>

        <textarea
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          rows={4}
          className={`${inputClasses} resize-none`}
          placeholder="Ihre Nachricht"
        />

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            id="newsletter"
            checked={formData.newsletter}
            onChange={(e) =>
              setFormData({ ...formData, newsletter: e.target.checked })
            }
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="newsletter">
            Ich möchte exklusive Angebote und Updates erhalten
          </label>
        </div>

        <Button type="submit" variant="primary" className="w-full">
          Absenden
        </Button>
      </form>
    </motion.div>
  );
}
