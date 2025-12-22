import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CookieConsentProvider } from "@/components/cookie-consent";
import BackToTop from "@/components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GlanzPro Service | Professionelle Reinigungsdienstleistungen",
  description:
    "GlanzPro Service bietet professionelle Reinigungsdienstleistungen für Privat- und Geschäftskunden. Fensterreinigung, Treppenhausreinigung und mehr.",
  metadataBase: new URL("https://glanzproservice.online"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CookieConsentProvider privacyPolicyUrl="/datenschutz">
          <Navbar />
          {children}
          <Footer />
          <BackToTop />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
