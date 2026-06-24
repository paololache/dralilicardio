import { Phone, MapPin, Clock, BadgeCheck } from "lucide-react";
import { openWhatsApp, PHONE_DISPLAY } from "./brand";
import { BookingForm } from "./BookingForm";

const INFO = [
  { icon: Phone, label: "Teléfono / WhatsApp", value: PHONE_DISPLAY },
  { icon: BadgeCheck, label: "Colegiatura", value: "CMP 101961" },
  {
    icon: MapPin,
    label: "Consultorio",
    value: "Av. Arequipa 1801, Clínica San Clemente · Lince",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun–Vie · 8am–1pm / 2:30–5:30pm · Sáb 8am–1pm",
  },
];

export function Contact() {
  return (
    <section id="contacto" className="bg-cream py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#570228_0%,#8a1040_100%)] px-8 py-16 text-center shadow-[0_40px_80px_-30px_rgba(87,2,40,0.55)] sm:px-16">
          {/* Decorative blurred circle */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-pink opacity-20 blur-[60px]"
            aria-hidden="true"
          />

          <div className="relative">
            <h2 className="font-display text-[48px] leading-tight text-white sm:text-[60px]">
              Agenda tu cita hoy
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-[18px] leading-relaxed text-pink">
              Da el primer paso hacia el cuidado de tu corazón. Estoy aquí para acompañarte con la
              atención que mereces. Consultas presenciales y virtuales.
            </p>

            <button
              onClick={openWhatsApp}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-9 py-4 font-body text-[17px] font-semibold text-burgund transition-all hover:bg-nude hover:shadow-xl"
            >
              <Phone className="size-5" />
              Agendar por WhatsApp
            </button>

            {/* Selector de fecha y hora */}
            <BookingForm />

            <div className="mt-12 grid gap-6 border-t border-white/20 pt-10 sm:grid-cols-2 lg:grid-cols-4">
              {INFO.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex flex-col items-center text-center">
                  <Icon className="size-6 text-pink" />
                  <span className="mt-3 font-body text-[13px] uppercase tracking-wide text-pink/80">
                    {label}
                  </span>
                  <span className="mt-1 font-body text-[16px] text-white">{value}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 font-body text-[15px] text-pink/90">
              5.º piso · Consultorio 501–502 · Lima, Perú
            </p>
          </div>
        </div>

        {/* Mapa de ubicación */}
        <div className="mt-12 overflow-hidden rounded-[28px] shadow-[0_40px_80px_-30px_rgba(87,2,40,0.35)]">
          <iframe
            title="Ubicación del consultorio — Dra. Liliana Fonseca, Clínica San Clemente, Av. Arequipa 1801, Lince"
            src="https://www.google.com/maps?q=Dra.+Liliana+Fonseca+-+Cardi%C3%B3loga+%28Lilicardio%29%2C+Av.+Arequipa+1801%2C+Lince%2C+Lima%2C+Per%C3%BA&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
