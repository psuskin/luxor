import { Metadata } from "next";
import SubHero from "@/components/SubHero";
import ServiceOverview from "@/components/ServiceOverview";
import ProcessSteps from "@/components/ProcessSteps";
import BenefitsSection from "@/components/BenefitsSection";
import ServiceCta from "@/components/ServiceCta";
import {
  MagnifyingGlassIcon,
  DocumentMagnifyingGlassIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Fensterreinigung | GlanzPro Service",
  description:
    "Professionelle Fensterreinigung für Privat- und Geschäftskunden. Streifenfreie Sauberkeit und kristallklare Durchsicht für alle Glasflächen.",
  openGraph: {
    title: "Fensterreinigung | GlanzPro Service",
    description:
      "Professionelle Fensterreinigung für Privat- und Geschäftskunden. Streifenfreie Sauberkeit und kristallklare Durchsicht für alle Glasflächen.",
    images: [
      {
        url: "/og-fensterreinigung.jpg",
        width: 1200,
        height: 630,
        alt: "GlanzPro Service Fensterreinigung",
      },
    ],
  },
};

export default function FensterreinigungPage() {
  // Service overview content
  const overviewDescription = [
    "Saubere Fenster sind nicht nur ein ästhetisches Vergnügen, sondern lassen auch mehr Tageslicht in Ihre Räume und verbessern so das Raumklima und Ihr Wohlbefinden. Unsere professionelle Fensterreinigung sorgt für streifenfreie Sauberkeit – innen und außen.",
    "Mit modernster Ausrüstung und umweltfreundlichen Reinigungsmitteln erreichen wir auch schwer zugängliche Stellen und garantieren ein perfektes Ergebnis. Unsere erfahrenen Fachkräfte arbeiten effizient, gründlich und diskret.",
  ];

  const serviceFeatures = [
    "Reinigung von Fenstern, Fensterbänken und Rahmen",
    "Reinigung von Glasfassaden und Schaufenstern",
    "Wintergartenreinigung",
    "Reinigung von Dachfenstern und Oberlichtern",
    "Reinigung von Solaranlagen und Photovoltaikmodulen",
    "Entfernung hartnäckiger Verschmutzungen (Kalk, Farbe, etc.)",
  ];

  // Process steps content
  const processSteps = [
    {
      title: "Bestandsaufnahme",
      description:
        "Wir analysieren den Zustand Ihrer Fenster und identifizieren besondere Herausforderungen.",
      icon: <DocumentMagnifyingGlassIcon className="w-8 h-8" />,
    },
    {
      title: "Vorreinigung",
      description:
        "Entfernung von losem Schmutz und groben Verunreinigungen von Rahmen und Glas.",
      icon: <MagnifyingGlassIcon className="w-8 h-8" />,
    },
    {
      title: "Hauptreinigung",
      description:
        "Gründliche Reinigung mit speziellen Reinigungsmitteln und professionellen Werkzeugen.",
      icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
    },
    {
      title: "Nachbearbeitung",
      description:
        "Politur und Kontrolle für streifenfreien Glanz und perfekte Transparenz.",
      icon: <SparklesIcon className="w-8 h-8" />,
    },
  ];

  // Benefits content
  const benefits = [
    {
      title: "Maximale Lichtdurchlässigkeit",
      description:
        "Saubere Fenster lassen bis zu 30% mehr Tageslicht in Ihre Räume und sorgen für eine hellere, freundlichere Atmosphäre.",
    },
    {
      title: "Professionelles Erscheinungsbild",
      description:
        "Besonders für Geschäftskunden: Saubere Fenster und Schaufenster hinterlassen einen positiven Eindruck bei Kunden und Besuchern.",
    },
    {
      title: "Längere Lebensdauer",
      description:
        "Regelmäßige professionelle Reinigung verhindert Glaskorrosion und schützt Rahmen vor vorzeitiger Alterung.",
    },
    {
      title: "Zeitersparnis",
      description:
        "Überlassen Sie die zeitaufwändige Arbeit unseren Profis und nutzen Sie Ihre wertvolle Zeit für andere Dinge.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <SubHero
        title="Fensterreinigung"
        description="Professionelle Reinigung aller Glasflächen für maximale Transparenz und Helligkeit. Mit modernster Technik und umweltfreundlichen Reinigungsmitteln."
      />

      {/* Main Content */}
      <ServiceOverview
        title="Kristallklare Durchsicht für Ihre Fenster"
        description={overviewDescription}
        features={serviceFeatures}
        imageSrc="https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg"
        imageAlt="Professionelle Fensterreinigung"
      />

      {/* Process Section */}
      <ProcessSteps
        title="Unser Reinigungsprozess"
        description="Wir folgen einem bewährten mehrstufigen Prozess, um optimale Ergebnisse zu erzielen und Ihre Fenster zum Strahlen zu bringen."
        steps={processSteps}
      />

      {/* Benefits Section */}
      <BenefitsSection
        title="Die Vorteile unserer Fensterreinigung"
        benefits={benefits}
        imageSrc="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg"
        imageAlt="Saubere Fenster für mehr Wohlbefinden"
        imageOnLeft={true}
      />

      {/* CTA Section */}
      <ServiceCta
        title="Lassen Sie Ihre Fenster wieder strahlen!"
        description="Kontaktieren Sie uns noch heute für ein unverbindliches Angebot. Wir beraten Sie gerne und finden die optimale Lösung für Ihre Anforderungen."
        buttonText="Jetzt Angebot anfordern"
        buttonLink="/kontakt"
      />
    </main>
  );
}
