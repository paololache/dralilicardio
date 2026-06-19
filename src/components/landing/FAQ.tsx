import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { openWhatsApp } from "./brand";

const FAQS = [
  {
    q: "¿Cuándo debo consultar a un cardiólogo?",
    a: "Si presentas dolor en el pecho, palpitaciones, falta de aire, mareos, presión arterial elevada, antecedentes familiares de enfermedad cardíaca o factores de riesgo como diabetes, obesidad o tabaquismo, es recomendable una evaluación cardiológica. También es ideal un chequeo preventivo a partir de los 40 años.",
  },
  {
    q: "¿Cuál es la diferencia entre un electrocardiograma y un ecocardiograma?",
    a: "El electrocardiograma (ECG) registra la actividad eléctrica del corazón y ayuda a detectar arritmias. El ecocardiograma usa ultrasonido para mostrar la estructura y el movimiento del corazón en tiempo real, evaluando válvulas, paredes y función de bombeo. Son estudios complementarios.",
  },
  {
    q: "¿Cómo debo prepararme para una prueba de esfuerzo?",
    a: "Usa ropa y calzado cómodos para hacer ejercicio, evita comidas pesadas, cafeína y tabaco 2–3 horas antes. Trae tus medicamentos y comenta cuáles tomas, ya que algunos podrían suspenderse temporalmente según indicación médica.",
  },
  {
    q: "¿Qué son el Holter y el MAPA?",
    a: "El Holter monitorea tu ritmo cardíaco de forma continua durante 24 horas para detectar arritmias intermitentes. El MAPA mide tu presión arterial automáticamente durante 24 horas, lo que permite un diagnóstico más preciso de la hipertensión que una sola toma en consulta.",
  },
  {
    q: "¿Cómo puedo cuidar la salud de mi corazón?",
    a: "Mantén una alimentación equilibrada baja en sal y grasas saturadas, realiza actividad física regular, controla tu presión arterial y colesterol, evita el tabaco, modera el alcohol, duerme bien y maneja el estrés. Los chequeos periódicos son clave para la prevención.",
  },
  {
    q: "¿Ofrecen consultas virtuales?",
    a: "Sí. Ofrecemos consultas presenciales y virtuales, ideales para seguimiento, interpretación de resultados y orientación. Para algunos estudios diagnósticos se requiere atención presencial.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-pink bg-nude px-4 py-1.5 font-body text-[13px] font-semibold tracking-wide text-burgund">
            <HelpCircle className="size-4" />
            Preguntas frecuentes
          </span>
          <h2 className="mt-5 font-display text-[40px] leading-tight text-burgund sm:text-[52px]">
            Resolvemos tus dudas de cardiología
          </h2>
          <p className="mt-4 font-body text-[17px] leading-relaxed text-soft">
            Respuestas a las consultas más comunes sobre la salud de tu corazón.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12 w-full space-y-4">
          {FAQS.map(({ q, a }, i) => (
            <AccordionItem
              key={q}
              value={`faq-${i}`}
              className="overflow-hidden rounded-[16px] border border-nude bg-cream px-6 shadow-[0_10px_28px_-20px_rgba(87,2,40,0.3)]"
            >
              <AccordionTrigger className="py-5 text-left font-display text-[19px] leading-snug text-burgund hover:no-underline">
                {q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 font-body text-[16px] leading-relaxed text-ink/75">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="font-body text-[16px] text-soft">
            ¿Tienes otra pregunta sobre tu salud cardiovascular?
          </p>
          <button
            onClick={openWhatsApp}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-burgund px-8 py-3.5 font-body text-[16px] text-white transition-all hover:bg-burgund-deep hover:shadow-[0_14px_30px_-10px_rgba(87,2,40,0.55)]"
          >
            Escríbeme por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
