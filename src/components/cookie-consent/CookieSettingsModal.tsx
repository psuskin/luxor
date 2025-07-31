"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Button from "@/components/ui/Button";

interface CookieSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (settings: CookieSettings) => void;
  initialSettings: CookieSettings;
}

export interface CookieSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieSettingsModal({
  isOpen,
  onClose,
  onSave,
  initialSettings,
}: CookieSettingsModalProps) {
  const [settings, setSettings] = useState<CookieSettings>(initialSettings);

  const handleSave = () => {
    onSave(settings);
    onClose();
  };

  const handleAcceptAll = () => {
    const allEnabled = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setSettings(allEnabled);
    onSave(allEnabled);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div
          className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-blue-950">
              Cookie-Einstellungen
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto">
            <p className="text-gray-600 mb-6">
              Wir verwenden Cookies, um Ihnen ein optimales Webseiten-Erlebnis
              zu bieten. Nachfolgend können Sie auswählen, welche Arten von
              Cookies Sie zulassen möchten.
            </p>

            <div className="space-y-6">
              {/* Necessary Cookies */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-blue-950">
                      Notwendige Cookies
                    </h3>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                      Immer aktiv
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Diese Cookies sind für die Funktion unserer Website
                    erforderlich und können nicht deaktiviert werden.
                  </p>
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={settings.necessary}
                    disabled
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium text-blue-950">Analyse-Cookies</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Diese Cookies ermöglichen es uns, die Nutzung unserer
                    Website zu analysieren, um die Leistung zu messen und zu
                    verbessern.
                  </p>
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={settings.analytics}
                    onChange={(e) =>
                      setSettings({ ...settings, analytics: e.target.checked })
                    }
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium text-blue-950">
                    Marketing-Cookies
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Diese Cookies werden verwendet, um Besuchern auf Websites
                    relevante Werbung zu zeigen. Sie speichern Ihren Besuch auf
                    unserer Website und teilen diese Informationen mit anderen
                    Parteien, wie Werbetreibenden.
                  </p>
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={settings.marketing}
                    onChange={(e) =>
                      setSettings({ ...settings, marketing: e.target.checked })
                    }
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200 flex flex-col sm:flex-row justify-end gap-3">
            <Button onClick={onClose} variant="primary">
              Abbrechen
            </Button>
            <Button onClick={handleSave} variant="primary">
              Auswahl speichern
            </Button>
            <Button onClick={handleAcceptAll} variant="primary">
              Alle akzeptieren
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
