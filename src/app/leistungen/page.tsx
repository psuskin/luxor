import { Metadata } from "next";
import ServiceGrid from "@/components/ServiceGrid";
import SubHero from "@/components/SubHero";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Leistungen | GlanzPro Service",
  description:
    "Entdecken Sie unsere professionellen Reinigungsdienstleistungen. Von der klassischen Treppenhausreinigung bis zur speziellen Bauzwischenreinigung – wir bieten maßgeschneiderte Lösungen.",
  openGraph: {
    title: "Leistungen | GlanzPro Service",
    description:
      "Entdecken Sie unsere professionellen Reinigungsdienstleistungen. Von der klassischen Treppenhausreinigung bis zur speziellen Bauzwischenreinigung – wir bieten maßgeschneiderte Lösungen.",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "GlanzPro Service Leistungen",
      },
    ],
  },
};

const services = [
  {
    title: "Glasreinigung",
    description:
      "Professionelle Reinigung aller Glasflächen für maximale Transparenz und Helligkeit. Mit modernster Technik und umweltfreundlichen Reinigungsmitteln sorgen wir für strahlende Fenster und Glasfassaden.",
    image: "https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg",
    features: [
      "Fenster- und Schaufensterreinigung",
      "Glasfassadenreinigung",
      "Wintergartenreinigung",
      "Photovoltaikanlagen-Reinigung",
    ],
    details: {
      process: [
        "Vorreinigung und Entfernung von losem Schmutz",
        "Professionelle Reinigung mit speziellen Mitteln",
        "Nachbearbeitung für streifenfreien Glanz",
        "Qualitätskontrolle",
      ],
      benefits: [
        "Maximale Lichtdurchlässigkeit",
        "Streifenfreie Reinigung",
        "Langanhaltende Sauberkeit",
        "Schonende Behandlung der Oberflächen",
      ],
    },
  },
  {
    title: "Treppenhausreinigung",
    description:
      "Professionelle und regelmäßige Reinigung von Treppenhäusern in Wohn- und Geschäftsgebäuden. Wir sorgen für einen sauberen und einladenden ersten Eindruck.",
    image: "/images/staircasecleaning.jpg",
    features: [
      "Regelmäßige Grundreinigung",
      "Fenster- und Glasflächenreinigung",
      "Handlauf- und Geländerreinigung",
      "Desinfektion von Kontaktflächen",
    ],
    details: {
      process: [
        "Entfernung von Schmutz und Staub",
        "Nassreinigung aller Treppenstufen",
        "Reinigung von Handläufen und Geländern",
        "Desinfektion wichtiger Kontaktflächen",
      ],
      benefits: [
        "Erhöhte Sicherheit durch Rutschfestigkeit",
        "Verbessertes Erscheinungsbild",
        "Hygienischer Schutz",
        "Werterhalt der Immobilie",
      ],
    },
  },
  {
    title: "Unterhaltsreinigung",
    description:
      "Regelmäßige und gründliche Reinigung von Büros, Praxen und Geschäftsräumen. Wir entwickeln individuelle Reinigungskonzepte für Ihre spezifischen Anforderungen.",
    image: "/images/special_cleaning.png",
    features: [
      "Büro- und Praxisreinigung",
      "Sanitäranlagenreinigung",
      "Bodenreinigung und -pflege",
      "Staubbeseitigung und Desinfektion",
    ],
    details: {
      process: [
        "Analyse Ihrer individuellen Anforderungen",
        "Regelmäßige Grundreinigung",
        "Spezielle Bodenbehandlung",
        "Qualitätskontrolle",
      ],
      benefits: [
        "Gesundes Arbeitsumfeld",
        "Professioneller Eindruck",
        "Werterhalt der Einrichtung",
        "Flexible Reinigungszeiten",
      ],
    },
  },
  {
    title: "Sonderreinigung",
    description:
      "Maßgeschneiderte Reinigungslösungen für besondere Anforderungen und spezielle Oberflächen. Wir passen uns Ihren individuellen Bedürfnissen an.",
    image: "/images/Carpet_cleaning.jpg",
    features: [
      "Graffiti-Entfernung",
      "Teppich- und Polsterreinigung",
      "Fassadenreinigung",
      "Industriereinigung",
    ],
    details: {
      process: [
        "Analyse der Reinigungsanforderungen",
        "Auswahl geeigneter Methoden",
        "Professionelle Durchführung",
        "Nachbehandlung und Schutz",
      ],
      benefits: [
        "Expertise für schwierige Aufgaben",
        "Materialschonende Reinigung",
        "Effektive Schmutzentfernung",
        "Langfristiger Oberflächenschutz",
      ],
    },
  },
  {
    title: "Bauzwischenreinigung",
    description:
      "Professionelle Reinigung während und nach Bauphasen. Wir beseitigen Baustaub, Verschmutzungen und bereiten die Räume für die nächsten Arbeitsschritte vor.",
    image: "/images/constructioncleaning.jpg",
    features: [
      "Grobe Bauschutträumung",
      "Feinreinigung aller Oberflächen",
      "Fenster- und Rahmenreinigung",
      "Endreinigung vor Übergabe",
    ],
    details: {
      process: [
        "Entfernung von Bauschutt",
        "Gründliche Entstaubung",
        "Reinigung empfindlicher Oberflächen",
        "Abschließende Qualitätskontrolle",
      ],
      benefits: [
        "Sichere Arbeitsbedingungen",
        "Schutz fertiger Bauteile",
        "Staubreduktion",
        "Termingerechte Übergabe",
      ],
    },
  },
  {
    title: "Winterdienst",
    description:
      "Professioneller Winterdienst für sichere und saubere Wege bei Schnee und Eis. Wir sorgen für rutschfreie und zugängliche Flächen während der Wintermonate.",
    image: "/images/winter.jpg",
    features: [
      "Schneeräumung und -beseitigung",
      "Streudienst mit umweltfreundlichen Materialien",
      "Rutschschutzmaßnahmen",
      "24/7 Verfügbarkeit bei Bedarf",
    ],
    details: {
      process: [
        "Regelmäßige Wetterbeobachtung",
        "Proaktive Schneeräumung",
        "Professionelles Streuen",
        "Qualitätskontrolle der Wege",
      ],
      benefits: [
        "Erhöhte Sicherheit",
        "Ununterbrochene Zugänglichkeit",
        "Umweltfreundliche Methoden",
        "Zuverlässiger Service",
      ],
    },
  },
  {
    title: "Entrümpelung",
    description:
      "Professionelle Entrümpelung und Räumung von Wohnungen, Häusern und Gewerberäumen. Wir übernehmen die komplette Organisation und Durchführung.",
    image: "/images/Entrümpelung.jpg",
    features: [
      "Komplette Wohnungsräumung",
      "Sortierung und Entsorgung",
      "Transport und Abfuhr",
      "Dokumentation und Abrechnung",
    ],
    details: {
      process: [
        "Beratung und Planung",
        "Systematische Sortierung",
        "Professionelle Räumung",
        "Saubere Übergabe",
      ],
      benefits: [
        "Zeit- und stresssparend",
        "Professionelle Durchführung",
        "Umweltgerechte Entsorgung",
        "Vollständige Dokumentation",
      ],
    },
  },
];

export default function LeistungenPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <SubHero
        title="Unsere Leistungen"
        description="Von der klassischen Treppenhausreinigung bis zur speziellen Bauzwischenreinigung – wir bieten maßgeschneiderte Lösungen für Ihre Reinigungsanforderungen."
      />

      {/* Services Grid Section */}
      <section className="py-32 px-4">
        <div className="container mx-auto">
          <ServiceGrid services={services} />
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Lassen Sie uns über Ihr Projekt sprechen"
        description="Wir erstellen Ihnen gerne ein individuelles Angebot für Ihre spezifischen Reinigungsanforderungen."
        buttonText="Kontakt aufnehmen"
        buttonLink="/kontakt"
      />
    </main>
  );
}
