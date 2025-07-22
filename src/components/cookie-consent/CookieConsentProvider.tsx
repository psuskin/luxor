"use client";

import { createContext, useContext, ReactNode } from "react";
import useCookieConsent from "./useCookieConsent";
import EnhancedCookieConsent from "./EnhancedCookieConsent";

interface CookieConsentContextType {
  consent: "all" | "necessary" | null;
  acceptAll: () => void;
  acceptNecessary: () => void;
  revokeConsent: () => void;
  hasConsented: boolean;
  canUseAnalytics: boolean;
  canUseMarketing: boolean;
  consentTimestamp: string | null;
}

const CookieConsentContext = createContext<
  CookieConsentContextType | undefined
>(undefined);

interface CookieConsentProviderProps {
  children: ReactNode;
  privacyPolicyUrl: string;
}

export function CookieConsentProvider({
  children,
  privacyPolicyUrl,
}: CookieConsentProviderProps) {
  const cookieConsentValues = useCookieConsent();

  return (
    <CookieConsentContext.Provider value={cookieConsentValues}>
      {children}
      <EnhancedCookieConsent privacyPolicyUrl={privacyPolicyUrl} />
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsentContext() {
  const context = useContext(CookieConsentContext);

  if (context === undefined) {
    throw new Error(
      "useCookieConsentContext must be used within a CookieConsentProvider"
    );
  }

  return context;
}
