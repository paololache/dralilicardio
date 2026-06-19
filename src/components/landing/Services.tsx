import {
  HeartPulse,
  Activity,
  Stethoscope,
  Gauge,
  ClipboardList,
  ShieldPlus,
  HeartHandshake,
  Waves,
  Droplets,
} from "lucide-react";
import promoConsulta from "@/assets/promo-consulta.jpg";
import promoElectro from "@/assets/promo-electrocardiograma.jpg";
import promoEco from "@/assets/promo-ecocardiograma.jpg";
import promoMapa from "@/assets/promo-mapa.jpg";
import promoHolter from "@/assets/promo-holter.jpg";
import promoEsfuerzo from "@/assets/promo-esfuerzo.jpg";
import serviceHipertension from "@/assets/service-hipertension.jpg";
import serviceInsuficiencia from "@/assets/service-insuficiencia.jpg";
import serviceChequeo from "@/assets/service-chequeo.jpg";

const SERVICES = [
  {
    icon: HeartPulse,
    image: promoConsulta,
    title: "Consulta Cardiológica Integral",
    desc: "Evaluación completa del corazón con historia clínica detallada y plan de cuidado personalizado, presencial o virtual.",
  },
  {
    icon: Activity,
    image: promoElectro,
    title: "Electrocardiograma (ECG)",
    desc: "Registro de la actividad eléctrica del corazón para detectar arritmias y alteraciones.",
  },
  {
    icon: Stethoscope,
    image: promoEco,
    title: "Ecocardiograma Doppler",
    desc: "Ecocardiograma Doppler transtorácico que evalúa la estructura y función cardíaca en tiempo real.",
  },
  {
    icon: Waves,
    image: promoHolter,
    title: "Holter de Ritmo 24h",
    desc: "Monitoreo continuo del ritmo cardíaco durante 24 horas para detectar arritmias intermitentes.",
  },
  {
    icon: Gauge,
    image: promoMapa,
    title: "MAPA · Presión Arterial 24h",
    desc: "Monitoreo ambulatorio de la presión arterial durante 24 horas para un diagnóstico preciso.",
  },
  {
    icon: ClipboardList,
    image: promoEsfuerzo,
    title: "Ergometría / Prueba de Esfuerzo",
    desc: "Evaluación del rendimiento cardíaco bajo actividad física controlada y monitorizada.",
  },
  {
    icon: Droplets,
    image: serviceHipertension,
    title: "Control de Hipertensión y Dislipidemias",
    desc: "Diagnóstico y manejo de la presión arterial y el colesterol con seguimiento continuo.",
  },
  {
    icon: HeartHandshake,
    image: serviceInsuficiencia,
    title: "Insuficiencia Cardíaca y Arritmias",
    desc: "Manejo y seguimiento especializado de la insuficiencia cardíaca y las arritmias.",
  },
  {
    icon: ShieldPlus,
    image: serviceChequeo,
    title: "Chequeo Preventivo y Certificados",
    desc: "Riesgo quirúrgico, aptitud cardiovascular, chequeo preventivo y consejería en hábitos saludables.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-pink bg-nude px-4 py-1.5 font-body text-[13px] font-semibold tracking-wide text-burgund">
            Servicios
          </span>
          <h2 className="mt-5 font-display text-[48px] leading-tight text-burgund sm:text-[56px]">
            Cuidado cardiovascular completo
          </h2>
          <p className="mt-4 font-body text-[17px] leading-relaxed text-soft">
            Servicios especializados diseñados para acompañarte en cada etapa del cuidado
            de tu corazón.
          </p>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, image, title, desc }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-[20px] border border-nude bg-white shadow-[0_12px_30px_-18px_rgba(87,2,40,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:border-pink hover:shadow-[0_24px_48px_-20px_rgba(87,2,40,0.4)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-nude">
                <img
                  src={image}
                  alt={title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 flex size-12 items-center justify-center rounded-2xl bg-white/95 text-burgund shadow-[0_8px_20px_-8px_rgba(87,2,40,0.5)]">
                  <Icon className="size-6" />
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-[24px] leading-tight text-burgund">{title}</h3>
                <p className="mt-3 font-body text-[16px] leading-relaxed text-ink/75">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
