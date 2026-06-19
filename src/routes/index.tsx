import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { Packages } from "@/components/landing/Packages";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lilicardio | Dra. Liliana Fonseca — Cardióloga" },
      {
        name: "description",
        content:
          "Dra. Liliana Fonseca, cardióloga clínica en Lince, Lima. Consultas presenciales y virtuales con cuidado cardiovascular integral.",
      },
      { property: "og:title", content: "Lilicardio | Dra. Liliana Fonseca — Cardióloga" },
      {
        property: "og:description",
        content: "Escuchar tu corazón es entender tu vida. Cardiología de confianza.",
      },
      { property: "og:url", content: "https://dralilicardio.com/" },
    ],
    links: [{ rel: "canonical", href: "https://dralilicardio.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physician",
          name: "Dra. Liliana Fonseca",
          alternateName: "Lilicardio",
          description:
            "Cardióloga clínica con más de 13 años de experiencia en prevención, diagnóstico y tratamiento cardiovascular. Atención presencial y virtual en Lima, Perú.",
          url: "https://dralilicardio.com",
          telephone: "+51962411771",
          image:
            "https://dralilicardio.com/dra-liliana-fonseca-3.jpg",
          medicalSpecialty: "Cardiology",
          hasCredential: "CMP 101961",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Arequipa 1801",
            addressLocality: "Lince",
            addressRegion: "Lima",
            addressCountry: "PE",
          },
          openingHours: ["Mo-Fr 08:00-13:00,14:30-17:30", "Sa 08:00-13:00"],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "08:00",
              closes: "17:30",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Saturday"],
              opens: "08:00",
              closes: "13:00",
            },
          ],
          sameAs: ["https://www.instagram.com/lilicardio/"],
          availableService: [
            { "@type": "MedicalProcedure", name: "Consulta cardiológica" },
            { "@type": "MedicalProcedure", name: "Electrocardiograma" },
            { "@type": "MedicalProcedure", name: "Ecocardiograma" },
            { "@type": "MedicalProcedure", name: "Ecografía doppler" },
            { "@type": "MedicalProcedure", name: "Prueba de esfuerzo" },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Packages />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
