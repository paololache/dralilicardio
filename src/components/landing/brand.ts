// Shared brand constants for the Lilicardio landing page.
export const PHONE_DISPLAY = "+51 962 411 771";
export const WHATSAPP_URL = "https://wa.me/51962411771";
export const WHATSAPP_NUMBER = "51962411771";

// Available appointment packages (shared between Packages and Contact).
export const PACKAGE_NAMES = [
  "Integral",
  "Funcional",
  "Preventivo",
  "Paquete Cardio Control Plus",
] as const;

// Available services (shared between Services and the booking form).
export const SERVICE_NAMES = [
  "Consulta Cardiológica Integral",
  "Electrocardiograma (ECG)",
  "Ecocardiograma Doppler",
  "Holter de Ritmo 24h",
  "MAPA · Presión Arterial 24h",
  "Ergometría / Prueba de Esfuerzo",
  "Control de Hipertensión y Dislipidemias",
  "Insuficiencia Cardíaca y Arritmias",
  "Chequeo Preventivo y Certificados",
] as const;

// Custom event used to preselect a package from the Packages section.
export const BOOKING_EVENT = "lilicardio:agendar";

export function openWhatsApp() {
  if (typeof window !== "undefined") {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  }
}

// Open WhatsApp with a prefilled message.
export function openWhatsAppWithMessage(message: string) {
  if (typeof window !== "undefined") {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

// Dispatch a booking request for a given package and scroll to contact.
export function requestBooking(packageName: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent(BOOKING_EVENT, { detail: { packageName } })
  );
  const el = document.getElementById("contacto");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
