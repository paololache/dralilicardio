import { HeartPulse, Activity, ShieldPlus, Stethoscope, Check, Calendar } from "lucide-react";
import { openWhatsApp, requestBooking } from "./brand";

const PACKAGES = [
  {
    icon: HeartPulse,
    name: "Integral",
    tagline: "Evaluación completa del corazón",
    items: ["Consulta", "Electrocardiograma", "Ecocardiograma doppler"],
  },
  {
    icon: Activity,
    name: "Funcional",
    tagline: "Cómo responde tu corazón al esfuerzo",
    featured: true,
    items: ["Consulta cardiológica", "Electrocardiograma", "Prueba de esfuerzo"],
  },
  {
    icon: ShieldPlus,
    name: "Preventivo",
    tagline: "Anticípate a los riesgos",
    items: [
      "Electrocardiograma",
      "Consulta cardiológica",
      "Toma de presión arterial",
      "Lectura de resultados",
    ],
  },
  {
    icon: Stethoscope,
    name: "Paquete Cardio Control Plus",
    tagline: "Diagnóstico y seguimiento especializado",
    items: [
      "Consulta cardiologica",
      "Ecocardiograma",
      "Lectura e MAPA (*Para pacientes hipertensos)",
    ],
  },
];

export function Packages() {
  return (
    <section id="paquetes" className="bg-nude py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-pink bg-cream px-4 py-1.5 font-body text-[13px] font-semibold tracking-wide text-burgund">
            Paquetes
          </span>
          <h2 className="mt-5 font-display text-[48px] leading-tight text-burgund sm:text-[56px]">
            Planes pensados para tu corazón
          </h2>
          <p className="mt-4 font-body text-[17px] leading-relaxed text-soft">
            Elige el paquete que mejor se adapta a tus necesidades. Cada uno reúne estudios y
            atención especializada en un solo plan.
          </p>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map(({ icon: Icon, name, tagline, items, featured }) => (
            <article
              key={name}
              className={`group flex flex-col rounded-[20px] border bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                featured
                  ? "border-burgund shadow-[0_24px_48px_-20px_rgba(87,2,40,0.45)]"
                  : "border-nude shadow-[0_12px_30px_-18px_rgba(87,2,40,0.25)] hover:border-pink hover:shadow-[0_24px_48px_-20px_rgba(87,2,40,0.4)]"
              }`}
            >
              {featured && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-burgund px-3 py-1 font-body text-[12px] font-semibold tracking-wide text-white">
                  Más solicitado
                </span>
              )}
              <div className="flex size-14 items-center justify-center rounded-2xl bg-nude text-burgund transition-colors duration-300 group-hover:bg-burgund group-hover:text-white">
                <Icon className="size-7" />
              </div>
              <h3 className="mt-6 font-display text-[28px] leading-tight text-burgund">{name}</h3>
              <p className="mt-2 font-body text-[15px] leading-relaxed text-soft">{tagline}</p>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-pink" />
                    <span className="font-body text-[15px] leading-snug text-ink/80">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col gap-3">
                <button
                  onClick={openWhatsApp}
                  className={`inline-flex w-full items-center justify-center rounded-full px-5 py-3 font-body text-[15px] transition-all ${
                    featured
                      ? "bg-burgund text-white hover:bg-burgund-deep hover:shadow-[0_10px_24px_-8px_rgba(87,2,40,0.55)]"
                      : "border border-burgund text-burgund hover:bg-burgund hover:text-white"
                  }`}
                >
                  Solicitar paquete
                </button>
                <button
                  onClick={() => requestBooking(name)}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-body text-[15px] transition-all ${
                    featured
                      ? "border border-burgund/30 text-burgund hover:bg-burgund/5"
                      : "border border-burgund/30 text-burgund hover:bg-burgund/5"
                  }`}
                >
                  <Calendar className="size-4" />
                  Agendar cita
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
