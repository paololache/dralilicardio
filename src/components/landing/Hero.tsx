import { Heart } from "lucide-react";
import { openWhatsApp } from "./brand";
import { CubaFlag } from "./CubaFlag";
import draPhoto from "@/assets/dra-liliana-about.jpg";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-cream pt-[72px]">
      {/* Decorative blurred circles */}
      <div
        className="pointer-events-none absolute -right-24 -top-16 size-[420px] rounded-full bg-pink opacity-[0.12] blur-[60px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 size-[460px] rounded-full bg-pink opacity-[0.12] blur-[60px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 size-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink opacity-[0.10] blur-[60px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[55%_45%] lg:py-28">
        {/* Text column */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-pink bg-white px-4 py-2 shadow-[0_10px_24px_-12px_rgba(87,2,40,0.35)]">
            <CubaFlag className="h-5 w-[30px] overflow-hidden rounded-[3px] shadow-sm" />
            <span className="font-body text-[14px] font-semibold text-burgund">
              Cardióloga Cubana
            </span>
          </div>

          <h1 className="mt-6 font-display text-[38px] leading-[1.05] text-burgund sm:text-[56px] lg:text-[76px]">
            Dra. Liliana Fonseca
            <span className="mt-2 block font-body text-[18px] font-semibold not-italic text-soft sm:text-[20px] lg:text-[22px]">
              Especialista en Cardiología
            </span>
          </h1>

          <p className="mt-3 font-body text-[22px] italic text-soft">
            Escuchar tu corazón es entender tu vida
          </p>




          <p className="mt-6 max-w-xl font-body text-[17px] leading-relaxed text-ink/80">
            Cardióloga clínica con más de 13 años de experiencia en prevención,
            diagnóstico y tratamiento cardiovascular. Atención personalizada,
            presencial y virtual, con el más alto nivel de cuidado.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <button
              onClick={openWhatsApp}
              className="rounded-full bg-burgund px-8 py-3.5 font-body text-[16px] text-white transition-all hover:bg-burgund-deep hover:shadow-[0_14px_30px_-10px_rgba(87,2,40,0.55)]"
            >
              Agendar Cita
            </button>
            <a
              href="#sobre-mi"
              className="rounded-full border-[1.5px] border-burgund bg-transparent px-8 py-3.5 font-body text-[16px] text-burgund transition-colors hover:bg-burgund hover:text-white"
            >
              Conocer más
            </a>
          </div>
        </div>

        {/* Image column */}
        <div className="relative animate-fade-up [animation-delay:150ms]">
          {/* Decorative circle outside top-right */}
          <div className="absolute -right-5 -top-5 z-10 size-16 rounded-full bg-pink" aria-hidden="true" />

          <div className="relative mx-auto aspect-[2/3] w-full max-w-[440px] overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#FFDBD1_0%,#FA9EBC_100%)] shadow-[0_30px_60px_-25px_rgba(87,2,40,0.4)] lg:aspect-[4/5] lg:max-w-[560px]">
            <img
              src={draPhoto}
              alt="Dra. Liliana Fonseca, cardióloga, sosteniendo un corazón con su estetoscopio"
              className="size-full object-cover object-center"
              width={900}
              height={1350}
              loading="eager"
              fetchPriority="high"
            />

            {/* Floating badge bottom-left */}
            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 shadow-[0_12px_28px_-10px_rgba(87,2,40,0.35)]">
              <Heart className="size-4 fill-burgund text-burgund" />
              <span className="font-body text-[14px] font-semibold text-burgund">
                Cardiología de confianza
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
