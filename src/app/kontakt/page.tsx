import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SubHero from "@/components/SubHero";
import QuestionsSection from "@/components/QuestionsSection";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kontakt | GlanzPro Service",
  description:
    "Kontaktieren Sie GlanzPro Service für professionelle Reinigungsdienstleistungen in Elmshorn. Wir sind für Sie da und beraten Sie gerne zu allen Reinigungsfragen.",
  openGraph: {
    title: "Kontakt | GlanzPro Service",
    description:
      "Kontaktieren Sie GlanzPro Service für professionelle Reinigungsdienstleistungen in Elmshorn. Wir sind für Sie da und beraten Sie gerne zu allen Reinigungsfragen.",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "GlanzPro Service Kontakt",
      },
    ],
  },
};

export default function KontaktPage() {
  return (
    <main className="min-h-screen">
      {/* Sub Hero Section */}
      <SubHero
        title="Kontaktieren Sie uns"
        description="Wir freuen uns darauf, von Ihnen zu hören und Ihnen bei Ihren Reinigungsanforderungen zu helfen."
      />

      {/* Contact Section with Background */}
      <section className="relative py-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/713297/pexels-photo-713297.jpeg"
            alt="Professionelle Fensterreinigung"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 to-blue-800/80" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Column - Info */}
            <QuestionsSection />

            {/* Right Column - Form */}
            <div className="bg-white rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.1)] p-8 md:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">
              Unser Standort
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Besuchen Sie uns in unserer Zentrale in Elmshorn. Wir freuen uns
              auf Ihren Besuch und beraten Sie gerne persönlich.
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2357.0397090606684!2d9.6505097!3d53.7549603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b3e6c6e3da8e7d%3A0x4b07ec04c7ba3b0!2sAm%20Dornbusch%2016%2C%2025337%20Elmshorn!5e0!3m2!1sde!2sde!4v1654321234567!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GlanzPro Service Standort"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
