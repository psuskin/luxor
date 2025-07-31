"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import CookieSettingsModal, { CookieSettings } from "./CookieSettingsModal";
import useCookieConsent from "./useCookieConsent";

interface EnhancedCookieConsentProps {
  privacyPolicyUrl: string;
}

export default function EnhancedCookieConsent({
  privacyPolicyUrl,
}: EnhancedCookieConsentProps) {
  const [showConsent, setShowConsent] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { consent, acceptAll, acceptNecessary, hasConsented } =
    useCookieConsent();

  useEffect(() => {
    // Check if user already consented
    if (!hasConsented) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [hasConsented]);

  const handleAcceptAll = () => {
    acceptAll();
    setShowConsent(false);
  };

  const handleAcceptNecessary = () => {
    acceptNecessary();
    setShowConsent(false);
  };

  const handleOpenSettings = () => {
    setShowSettings(true);
  };

  const handleSaveSettings = (settings: CookieSettings) => {
    if (settings.analytics || settings.marketing) {
      acceptAll();
    } else {
      acceptNecessary();
    }
    setShowConsent(false);
  };

  // Initial settings based on current consent
  const initialSettings: CookieSettings = {
    necessary: true,
    analytics: consent === "all",
    marketing: consent === "all",
  };

  if (!showConsent && !showSettings) return null;

  return (
    <>
      <AnimatePresence>
        {showConsent && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          >
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl border border-gray-200">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-blue-950 mb-2">
                      Wir respektieren Ihre Privatsphäre
                    </h3>
                    <p className="text-gray-600">
                      Diese Website verwendet Cookies, um Ihr Surferlebnis zu
                      verbessern und personalisierte Inhalte bereitzustellen.
                      Sie können wählen, welche Cookies Sie zulassen möchten
                      oder alle akzeptieren. Weitere Informationen finden Sie in
                      unserer{" "}
                      <a
                        href={privacyPolicyUrl}
                        className="text-blue-600 hover:text-blue-800 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Datenschutzerklärung
                      </a>
                      .
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleOpenSettings}
                      variant="primary"
                      className="whitespace-nowrap"
                    >
                      Einstellungen
                    </Button>
                    <Button
                      onClick={handleAcceptNecessary}
                      variant="primary"
                      className="whitespace-nowrap"
                    >
                      Nur notwendige
                    </Button>
                    <Button
                      onClick={handleAcceptAll}
                      variant="primary"
                      className="whitespace-nowrap"
                    >
                      Alle akzeptieren
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CookieSettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        onSave={handleSaveSettings}
        initialSettings={initialSettings}
      />
    </>
  );
}
