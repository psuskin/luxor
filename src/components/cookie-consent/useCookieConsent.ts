"use client";

import { useState, useEffect } from "react";

type ConsentType = "all" | "necessary" | null;

interface CookieConsentHook {
    consent: ConsentType;
    acceptAll: () => void;
    acceptNecessary: () => void;
    revokeConsent: () => void;
    hasConsented: boolean;
    canUseAnalytics: boolean;
    canUseMarketing: boolean;
    consentTimestamp: string | null;
}

export default function useCookieConsent(): CookieConsentHook {
    const [consent, setConsent] = useState<ConsentType>(null);
    const [consentTimestamp, setConsentTimestamp] = useState<string | null>(null);

    useEffect(() => {
        // Only run on client side
        if (typeof window !== "undefined") {
            const storedConsent = localStorage.getItem("cookieConsent") as ConsentType;
            const timestamp = localStorage.getItem("cookieConsentTimestamp");

            setConsent(storedConsent);
            setConsentTimestamp(timestamp);
        }
    }, []);

    const acceptAll = () => {
        const timestamp = new Date().toISOString();
        localStorage.setItem("cookieConsent", "all");
        localStorage.setItem("cookieConsentTimestamp", timestamp);
        setConsent("all");
        setConsentTimestamp(timestamp);
    };

    const acceptNecessary = () => {
        const timestamp = new Date().toISOString();
        localStorage.setItem("cookieConsent", "necessary");
        localStorage.setItem("cookieConsentTimestamp", timestamp);
        setConsent("necessary");
        setConsentTimestamp(timestamp);
    };

    const revokeConsent = () => {
        localStorage.removeItem("cookieConsent");
        localStorage.removeItem("cookieConsentTimestamp");
        setConsent(null);
        setConsentTimestamp(null);
    };

    return {
        consent,
        acceptAll,
        acceptNecessary,
        revokeConsent,
        hasConsented: consent !== null,
        canUseAnalytics: consent === "all",
        canUseMarketing: consent === "all",
        consentTimestamp
    };
} 