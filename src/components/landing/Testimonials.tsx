import { useCallback, useEffect, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";

const TESTIMONIALS = [
  {
    name: "Rafael Terrero Escobar",
    text: "Por estar descompensado de la presión y aumento del ritmo cardíaco, en fecha 9 de febrero del 2026 me vi en la necesidad de acudir a la consulta de cardiología siendo atendido por la doctora Liliana Fonseca Núñez. Sumado a los estudios que se me realizaron, quiero resaltar que recibí una excelente atención, con mucha profesionalidad, haciéndome sentir seguro emocionalmente. Por eso la he recomendado a conocidos que necesitan de esa especialidad.",
  },
  {
    name: "Mercedes Malmaceda",
    text: "Muy agradecida con la Dra. Liliana Fonseca. Desde el primer día que visité su consultorio y hasta el día de hoy siempre me he sentido escuchada y con confianza. La Dra me explicaba todo con paciencia; su trato y amabilidad hicieron que mis miedos fueran poco a poco desapareciendo. Hoy me siento mejor y muy agradecida con mi Dra Liliana Fonseca.",
  },
  {
    name: "Adelina Pérez Espinoza",
    text: "Doy gracias a Dios por haber conocido a la Doctora Liliana Fonseca Cardióloga, es una belleza de persona. Su atención es al máximo, Dios me lo bendice grandemente 🫶🏽.",
  },
  {
    name: "Familia Quispe",
    text: "Agradecemos profundamente a la Dra. Liliana por la extraordinaria atención brindada a nuestro padre, don Pedro Ricardo Quispe. Tras una cardiopatía e infarto anterior, y sin encontrar una solución definitiva, tuvimos la bendición de encontrar en ella una profesional excepcional. Hoy nuestro padre tiene una nueva oportunidad de vida. En nombre de toda la familia, le manifestamos nuestro más profundo respeto, admiración y gratitud.",
  },
  {
    name: "Flor Mejia Arce",
    text: "Soy Flor Mejia Arce, 91 años de edad, vivo en el distrito de Carabayllo. El 29 de Diciembre de 2023 estuve internada en el Seguro Social de mi zona pero como era fin de año no había especialistas en Cardiología, motivo por el cual mis hijos me sacaron con 'Alta Voluntaria'. El día 30 de ese mismo mes me comenzaron a dar dolores en el pecho, cansancio y fatiga. Por recomendación de una amistad de mi hija Cecilia, me informaron de la Clínica San Clemente y que buscara la atención de la Dra. Liliana Fonseca. Desde esa vez ya 2 años y medio que trata sobre mi problema del corazón. Puedo testificar que es una gran profesional y más que todo humana, y gracias a ella y al tratamiento que llevo puedo tener una calidad de vida y gozar de mi familia. ¡Gracias Dra. Liliana Fonseca!",
  },
  {
    name: "Dr. Luis Enrique Romani Solari",
    text: "Agradezco su atención, profesionalismo, entrega y delicadeza a la Dra. Liliana Fonseca, cardióloga. Gracias a su tratamiento muy acertado hacia mi señora madre Olga Solari López, vda. de Romani, que estuvo en momentos muy delicados. Gracias Dra. Fonseca, nos volvió a creer que hay un ángel en el camino. A los que lean, recomiendo a la Dra. Fonseca por su acertado tratamiento, cariño y lo acertado que es. Bendiciones.",
  },
  {
    name: "Marcela Darroma Fabre",
    text: "Desde hace dos años me estoy atendiendo con la Dra. Liliana Fonseca, gracias a su profesionalismo y excelente atención médica hacia mi persona, no solo descubrió mi cardiopatía sino con el tratamiento que me recetó, me ha ayudado a estar mejor con mi dolencia y me ha dado mucha seguridad en mi bienestar. Por eso recomiendo ampliamente que se consulten con ella.",
  },
];

const MAX_PREVIEW_CHARS = 160;

function truncateText(text: string) {
  if (text.length <= MAX_PREVIEW_CHARS) return text;
  const trimmed = text.slice(0, MAX_PREVIEW_CHARS);
  const lastSpace = trimmed.lastIndexOf(" ");
  return trimmed.slice(0, lastSpace > 0 ? lastSpace : MAX_PREVIEW_CHARS) + "…";
}

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);
  const scrollTo = useCallback((index: number) => api?.scrollTo(index), [api]);

  const activeTestimonial = openIndex !== null ? TESTIMONIALS[openIndex] : null;
  const needsTruncation = (text: string) => text.length > MAX_PREVIEW_CHARS;

  return (
    <section className="bg-cream py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-pink bg-nude px-4 py-1.5 font-body text-[13px] font-semibold tracking-wide text-burgund">
            Testimonios
          </span>
          <h2 className="mt-5 font-display text-[48px] leading-tight text-burgund sm:text-[56px]">
            Lo que dicen mis pacientes
          </h2>
        </div>

        <div className="mt-14 relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {TESTIMONIALS.map((t, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <figure className="relative h-full rounded-[20px] bg-white p-8 shadow-[0_12px_30px_-18px_rgba(87,2,40,0.25)] flex flex-col">
                    <Quote className="size-9 text-pink shrink-0" />
                    <blockquote className="mt-4 flex-1 font-body text-[17px] italic leading-relaxed text-ink/80">
                      “{needsTruncation(t.text) ? truncateText(t.text) : t.text}”
                    </blockquote>
                    {needsTruncation(t.text) && (
                      <button
                        onClick={() => setOpenIndex(index)}
                        className="mt-2 self-start font-body text-[13px] font-semibold text-burgund underline underline-offset-2 hover:text-pink transition-colors"
                      >
                        Ver completo
                      </button>
                    )}
                    <figcaption className="mt-6 flex items-center justify-between border-t border-pink/20 pt-5">
                      <span className="font-display text-[24px] text-burgund">{t.name}</span>
                      <span className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="size-4 fill-pink text-pink" />
                        ))}
                      </span>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation arrows */}
            <button
              onClick={scrollPrev}
              className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[0_4px_12px_rgba(87,2,40,0.15)] text-burgund transition-all hover:bg-burgund hover:text-white hover:shadow-md disabled:opacity-40 md:-left-5 lg:-left-6"
              aria-label="Anterior testimonio"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[0_4px_12px_rgba(87,2,40,0.15)] text-burgund transition-all hover:bg-burgund hover:text-white hover:shadow-md disabled:opacity-40 md:-right-5 lg:-right-6"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="size-5" />
            </button>
          </Carousel>

          {/* Dots indicator */}
          <div className="mt-8 flex items-center justify-center gap-2.5">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === current ? "w-8 bg-burgund" : "w-2.5 bg-pink/40 hover:bg-pink/70"
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={openIndex !== null} onOpenChange={(open) => !open && setOpenIndex(null)}>
        <DialogContent className="max-w-2xl bg-white border-pink/20 p-8 rounded-[20px] shadow-[0_24px_60px_-20px_rgba(87,2,40,0.35)]">
          {activeTestimonial && (
            <>
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <DialogTitle className="font-display text-[28px] text-burgund">
                    {activeTestimonial.name}
                  </DialogTitle>
                  <span className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-5 fill-pink text-pink" />
                    ))}
                  </span>
                </div>
              </DialogHeader>
              <div className="mt-4">
                <Quote className="size-8 text-pink mb-3" />
                <p className="font-body text-[17px] italic leading-relaxed text-ink/80">
                  “{activeTestimonial.text}”
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
