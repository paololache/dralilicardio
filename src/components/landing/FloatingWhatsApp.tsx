import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "./brand";

export function FloatingWhatsApp() {
  return (
    <button
      onClick={openWhatsApp}
      aria-label="Agendar cita por WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3.5 font-body text-[15px] font-semibold text-white shadow-[0_8px_28px_-6px_rgba(37,211,102,0.55)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_36px_-8px_rgba(37,211,102,0.65)] active:scale-95 sm:bottom-7 sm:right-7 sm:px-5 sm:py-4"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
      <MessageCircle className="relative size-5 fill-white" />
      <span className="relative hidden sm:inline">Agendar cita</span>
    </button>
  );
}
