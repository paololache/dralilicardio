import { useEffect, useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, Clock, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import {
  BOOKING_EVENT,
  PACKAGE_NAMES,
  SERVICE_NAMES,
  openWhatsAppWithMessage,
} from "./brand";

const TIME_SLOTS = [
  "08:00 a. m.",
  "08:30 a. m.",
  "09:00 a. m.",
  "09:30 a. m.",
  "10:00 a. m.",
  "10:30 a. m.",
  "11:00 a. m.",
  "11:30 a. m.",
  "12:00 p. m.",
  "12:30 p. m.",
  "01:00 p. m.",
  "01:30 p. m.",
  "02:00 p. m.",
  "02:30 p. m.",
  "03:00 p. m.",
  "03:30 p. m.",
  "04:00 p. m.",
  "04:30 p. m.",
  "05:00 p. m.",
  "05:30 p. m.",
  "06:00 p. m.",
];

export function BookingForm() {
  const [pkg, setPkg] = useState<string>("");
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState<string>("");
  const [name, setName] = useState<string>("");

  // Listen for "Agendar cita" clicks coming from the packages section.
  useEffect(() => {
    function handler(e: Event) {
      const detail = (e as CustomEvent).detail as { packageName?: string };
      if (detail?.packageName) setPkg(detail.packageName);
    }
    window.addEventListener(BOOKING_EVENT, handler as EventListener);
    return () =>
      window.removeEventListener(BOOKING_EVENT, handler as EventListener);
  }, []);

  function handleSubmit() {
    if (!date || !time) {
      toast.error("Selecciona la fecha y la hora para tu cita.");
      return;
    }

    const fecha = format(date, "EEEE d 'de' MMMM 'de' yyyy", { locale: es });
    const lines = [
      "Hola Dra. Liliana Fonseca, deseo agendar una cita.",
      name.trim() ? `Nombre: ${name.trim()}` : null,
      pkg ? `Servicio: ${pkg}` : null,
      `Fecha: ${fecha}`,
      `Hora: ${time}`,
    ].filter(Boolean);

    lines.push("", "Quiero saber las promociones del mes.");

    openWhatsAppWithMessage(lines.join("\n"));
  }

  const fieldBase =
    "w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 font-body text-[15px] text-white placeholder:text-pink/70 outline-none transition-colors focus:border-white/60";

  return (
    <div className="mx-auto mt-12 max-w-2xl rounded-[22px] border border-white/20 bg-white/5 p-6 text-left backdrop-blur-sm sm:p-8">
      <h3 className="text-center font-display text-[26px] leading-tight text-white">
        Reserva tu fecha y hora
      </h3>
      <p className="mx-auto mt-2 max-w-md text-center font-body text-[14px] leading-relaxed text-pink">
        Elige el día y la hora que prefieras. Confirmaremos tu cita por WhatsApp.
      </p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        {/* Nombre */}
        <div className="sm:col-span-2">
          <label
            htmlFor="booking-name"
            className="mb-1.5 block font-body text-[13px] text-pink/90"
          >
            Nombre completo (opcional)
          </label>
          <input
            id="booking-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={100}
            placeholder="Tu nombre"
            className={fieldBase}
          />
        </div>

        {/* Paquete o servicio */}
        <div className="sm:col-span-2">
          <label className="mb-1.5 block font-body text-[13px] text-pink/90">
            Paquete o servicio
          </label>
          <Select value={pkg} onValueChange={setPkg}>
            <SelectTrigger className={cn(fieldBase, "h-auto justify-between")}>
              <SelectValue placeholder="Selecciona un paquete o servicio" />
            </SelectTrigger>
            <SelectContent className="pointer-events-auto max-h-72">
              <SelectGroup>
                <SelectLabel>Paquetes</SelectLabel>
                {PACKAGE_NAMES.map((p) => (
                  <SelectItem key={p} value={p}>
                    {p}
                  </SelectItem>
                ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Servicios</SelectLabel>
                {SERVICE_NAMES.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Fecha */}
        <div>
          <label className="mb-1.5 block font-body text-[13px] text-pink/90">
            Fecha
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <button
                className={cn(
                  fieldBase,
                  "flex items-center gap-2 text-left",
                  !date && "text-pink/70"
                )}
              >
                <CalendarIcon className="size-4 shrink-0" />
                {date
                  ? format(date, "d 'de' MMMM yyyy", { locale: es })
                  : "Elige una fecha"}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                locale={es}
                disabled={(d) => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  return d < today || d.getDay() === 0;
                }}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Hora */}
        <div>
          <label className="mb-1.5 block font-body text-[13px] text-pink/90">
            Hora
          </label>
          <Select value={time} onValueChange={setTime}>
            <SelectTrigger className={cn(fieldBase, "h-auto justify-between")}>
              <span className="flex items-center gap-2">
                <Clock className="size-4 shrink-0" />
                <SelectValue placeholder="Elige una hora" />
              </span>
            </SelectTrigger>
            <SelectContent className="pointer-events-auto max-h-64">
              {TIME_SLOTS.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button
        onClick={handleSubmit}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-9 py-6 font-body text-[16px] font-semibold text-burgund transition-all hover:bg-nude hover:shadow-xl"
      >
        <MessageCircle className="size-5" />
        Confirmar cita por WhatsApp
      </Button>
    </div>
  );
}
