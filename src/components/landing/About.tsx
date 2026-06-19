import { Stethoscope, Award, CheckCircle2, GraduationCap, Languages, PlayCircle, FileCheck } from "lucide-react";
import { useState } from "react";
import draAbout from "@/assets/dra-liliana-fonseca-3.jpg";
import welcomeVideo from "@/assets/video-bienvenida.mp4";
import videoPoster from "@/assets/video-poster.jpg";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CubaFlag } from "./CubaFlag";

const HIGHLIGHTS = [
  "Diagnóstico cardiovascular preciso y oportuno",
  "Trato cálido, humano y completamente personalizado",
  "Atención basada en la mejor evidencia científica",
  "Seguimiento continuo en cada etapa del tratamiento",
];

const CREDENTIALS = [
  {
    icon: GraduationCap,
    label: "Pregrado",
    value: "Universidad de Ciencias Médicas · Granma, Cuba",
  },
  {
    icon: Award,
    label: "Especialización",
    value: "Instituto de Cardiología y Cirugía Cardiovascular (ICCV) · La Habana, Cuba",
  },
  {
    icon: Stethoscope,
    label: "Colegiatura",
    value: "CMP 101961 · Cardiología clínica",
  },
  {
    icon: FileCheck,
    label: "Registro RNE",
    value: "RNE 46616 · Cardiología",
  },
  {
    icon: Languages,
    label: "Idiomas",
    value: "Español · Inglés básico",
  },
];

export function About() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="sobre-mi" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[45%_55%]">
        {/* Image column */}
        <div className="relative">
          <div className="relative mx-auto aspect-[2/3] w-full max-w-[440px] overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#FFDBD1_0%,#FA9EBC_100%)] shadow-[0_30px_60px_-25px_rgba(87,2,40,0.4)]">
            <img
              src={draAbout}
              alt="Dra. Liliana Fonseca junto a libros de cardiología en su consultorio"
              className="size-full object-cover object-center"
              width={900}
              height={1350}
              loading="lazy"
            />

            {/* Floating badge top-right */}
            <div className="absolute right-5 top-5 flex items-center gap-2 rounded-xl bg-burgund px-4 py-2.5 text-white shadow-lg">
              <Stethoscope className="size-4" />
              <span className="font-body text-[14px] font-semibold">+13 años</span>
            </div>

            {/* Floating card bottom-left */}
            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 shadow-[0_12px_28px_-10px_rgba(87,2,40,0.35)]">
              <Award className="size-4 text-pink" />
              <span className="font-body text-[14px] font-semibold text-burgund">
                Certificada · Cardiología
              </span>
            </div>
          </div>

          {/* Breve bienvenida */}
          <p className="mt-5 text-center font-body text-[15px] leading-relaxed text-ink/70">
            Soy la Dra. Liliana Fonseca, cardióloga clínica con más de 13 años cuidando corazones en Lima.
          </p>

          {/* Botón Ver presentación */}
          <div className="mt-5 flex justify-center">
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="inline-flex items-center gap-2.5 rounded-full bg-burgund px-7 py-3.5 font-body text-[16px] text-white transition-all hover:bg-burgund-deep hover:shadow-[0_14px_30px_-10px_rgba(87,2,40,0.55)]"
            >
              <PlayCircle className="size-5" />
              Ver presentación
            </button>
          </div>
        </div>

        {/* Text column */}

        <div>
          <span className="inline-flex items-center rounded-full border border-pink bg-nude px-4 py-1.5 font-body text-[13px] font-semibold tracking-wide text-burgund">
            Sobre mí
          </span>

          <h2 className="mt-5 font-display text-[48px] leading-tight text-burgund sm:text-[56px]">
            Cuidando corazones con vocación
          </h2>

          <p className="mt-6 font-body text-[17px] leading-relaxed text-ink/80">
            Soy la Dra. Liliana Fonseca, médica cardióloga clínica con más de 13 años de
            experiencia dedicada a la prevención, diagnóstico y tratamiento de las
            enfermedades cardiovasculares. Mi objetivo es brindar una atención integral y
            personalizada, apoyada en estudios cardiológicos y en la mejor evidencia
            científica.
          </p>
          <p className="mt-4 font-body text-[17px] leading-relaxed text-ink/80">
            Creo en una medicina cercana y humana, basada en la confianza, la empatía y el
            acompañamiento continuo en cada etapa del cuidado cardiovascular de mis
            pacientes.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {HIGHLIGHTS.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-pink" />
                <span className="font-body text-[16px] leading-snug text-ink/85">{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 border-t border-nude pt-8">
            <div className="mb-5 flex items-center gap-2.5">
              <CubaFlag className="h-4 w-6 rounded-[2px] shadow-sm ring-1 ring-nude" />
              <span className="font-body text-[12px] uppercase tracking-wide text-soft">
                Formación en Cuba
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {CREDENTIALS.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-nude text-burgund">
                    <Icon className="size-4" />
                  </span>
                  <div>
                    <span className="font-body text-[11px] uppercase tracking-wide text-soft">
                      {label}
                    </span>
                    <p className="font-body text-[13px] leading-snug text-ink/85">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-[420px] overflow-hidden border-none bg-black p-0">
          <video
            src={welcomeVideo}
            poster={videoPoster}
            className="aspect-[9/16] w-full object-cover"
            controls
            autoPlay
            playsInline
            aria-label="Video de bienvenida de la Dra. Liliana Fonseca"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
}
