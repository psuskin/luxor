"use client";

import { useState } from "react";
import CookieSettingsModal, { CookieSettings } from "./CookieSettingsModal";
import { useCookieConsentContext } from "./CookieConsentProvider";

interface ManageCookiesButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ManageCookiesButton({
  className,
  children,
}: ManageCookiesButtonProps) {
  const [showSettings, setShowSettings] = useState(false);
  const { consent, acceptAll, acceptNecessary } = useCookieConsentContext();

  const handleOpenSettings = () => {
    setShowSettings(true);
  };

  const handleSaveSettings = (settings: CookieSettings) => {
    if (settings.analytics || settings.marketing) {
      acceptAll();
    } else {
      acceptNecessary();
    }
  };

  // Initial settings based on current consent
  const initialSettings: CookieSettings = {
    necessary: true,
    analytics: consent === "all",
    marketing: consent === "all",
  };

  return (
    <>
      <button onClick={handleOpenSettings} className={className}>
        {children || "Cookie-Einstellungen"}
      </button>

      <CookieSettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        onSave={handleSaveSettings}
        initialSettings={initialSettings}
      />
    </>
  );
}
